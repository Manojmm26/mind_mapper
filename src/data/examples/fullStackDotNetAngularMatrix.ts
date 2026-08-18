import { MindMapData, ComparisonWorkspaceData } from "../../services/llmService";

export interface RosettaParadigm {
  id: string;
  category:
    | "DI & Lifecycles"
    | "State & Async"
    | "Performance & Optimization"
    | "Security & Auth"
    | "Database & SQL"
    | "Architecture & Testing";
  name: string;
  angularTitle: string;
  angularCode: string;
  angularSoundbite: string;
  angularNuance: string;
  dotnetTitle: string;
  dotnetCode: string;
  dotnetSoundbite: string;
  dotnetNuance: string;
  coreEquivalency: string;
  interviewPunchline: string;
}

export interface ScenarioNarrative {
  id: string;
  title: string;
  archetype:
    | "Production Outages & War Stories"
    | "Strategic Steering & Baiting"
    | "Architectural Trade-Offs & System Design"
    | "Full-Stack Angular ↔ .NET Integration"
    | "Counter-Grill & Architecture Deflectors";
  coreIssue: string;
  tenSecondAnchor: string;
  fullScript: string;
  steeringBait: string[];
  redFlagPitfalls: string[];
  telemetryMetrics: string;
}

export interface SqlRule {
  id: string;
  title: string;
  badPattern: string;
  optimizedPattern: string;
  explanation: string;
  productionImpact: string;
}

export const ROSETTA_STONE_PARADIGMS: RosettaParadigm[] = [
  {
    id: "di",
    category: "DI & Lifecycles",
    name: "1. Dependency Injection",
    angularTitle: "Functional inject() in Injection Context",
    angularCode: `@Component({...})\nexport class OrderComponent {\n  private readonly orderService = inject(OrderService);\n  private readonly route = inject(ActivatedRoute);\n}`,
    angularSoundbite: "Angular 18 favors functional inject() inside initialization contexts, removing constructor boilerplate and simplifying inheritance.",
    angularNuance: "Must be called inside an injection context (constructor, field initializer, or runInInjectionContext).",
    dotnetTitle: "C# 12 Primary Constructors on Services",
    dotnetCode: `public class OrderService(\n    IOrderRepository repo,\n    ILogger<OrderService> logger,\n    IOptions<OrderConfig> config\n) : IOrderService {\n    public async Task<Order> GetAsync(Guid id) => await repo.FindByIdAsync(id);\n}`,
    dotnetSoundbite: "C# 12 Primary Constructors capture dependencies directly into class scope without private readonly field boilerplate.",
    dotnetNuance: "Captured parameters become implicit private state; be mindful of capturing disposable dependencies outside lifetime scopes.",
    coreEquivalency: "Both modern Angular and .NET 8 eliminate constructor field assignment rituals in favor of concise, functional class-scope capture.",
    interviewPunchline: "Modern full-stack DI is zero-boilerplate: inject() on the client and Primary Constructors on the API."
  },
  {
    id: "types-immutability",
    category: "Architecture & Testing",
    name: "2. Types & Immutability",
    angularTitle: "TypeScript readonly interfaces & Deep Readonly",
    angularCode: `export interface UserProfile {\n  readonly id: string;\n  readonly email: string;\n  readonly roles: readonly string[];\n}`,
    angularSoundbite: "TypeScript readonly types guarantee compile-time immutability, preventing accidental in-place state mutation in signal trees.",
    angularNuance: "Compile-time only; requires Object.freeze() or structuredClone() if runtime tamper-proofing is mandatory.",
    dotnetTitle: "C# record with Non-Destructive 'with' Expressions",
    dotnetCode: `public record UserProfile(Guid Id, string Email, IReadOnlyList<string> Roles);\n\n// Non-destructive mutation:\nvar updated = original with { Email = \"new@domain.com\" };`,
    dotnetSoundbite: "C# records provide value equality, auto-generated deconstruction, and non-destructive with expressions by default.",
    dotnetNuance: "Record structs allocate on the stack, whereas record classes are heap reference types with compiler-synthesized equality.",
    coreEquivalency: "Both platforms enforce immutability at boundaries: TypeScript readonly contracts client-side, C# records server-side.",
    interviewPunchline: "Immutable records on .NET plus readonly interfaces in Angular guarantee deterministic, side-effect-free state propagation."
  },
  {
    id: "service-lifetimes",
    category: "DI & Lifecycles",
    name: "3. Service Lifetimes",
    angularTitle: "providedIn: 'root' vs Component Element Injectors",
    angularCode: `@Injectable({ providedIn: 'root' }) // Singleton across app\nexport class GlobalAuthService {}\n\n@Component({\n  providers: [FeatureStateService] // Scoped to component subtree\n})\nexport class FeatureComponent {}`,
    angularSoundbite: "Angular balances app-wide singletons (providedIn: 'root') with hierarchical Element Injectors that die with their parent component.",
    angularNuance: "Providing a service in a component creates a fresh instance for every component instance, preventing shared state collisions.",
    dotnetTitle: "Transient vs Scoped (DbContext) vs Singleton",
    dotnetCode: `builder.Services.AddSingleton<ICacheService, MemoryCacheService>();\nbuilder.Services.AddScoped<IUnitOfWork, AppDbContext>();\nbuilder.Services.AddTransient<ITransactionHasher, Sha256Hasher>();`,
    dotnetSoundbite: "ASP.NET Core scopes services per HTTP request lifecycle (critical for DbContext), while Singletons live for the process duration.",
    dotnetNuance: "Captive dependency trap: Injecting a Scoped service into a Singleton causes memory leaks and stale concurrency bugs.",
    coreEquivalency: "Angular's Element Injector scope parallels ASP.NET Core's HttpContext Scoped lifetime—both isolate state per lifecycle context.",
    interviewPunchline: "Never inject Scoped DbContext into a Singleton, and never provide feature state in root if it belongs to a route lifecycle."
  },
  {
    id: "request-pipelines",
    category: "Security & Auth",
    name: "4. Request Pipelines",
    angularTitle: "Functional HttpInterceptorFn Chaining",
    angularCode: `export const authInterceptor: HttpInterceptorFn = (req, next) => {\n  const token = inject(AuthService).getToken();\n  const authReq = token ? req.clone({ setHeaders: { Authorization: \`Bearer \${token}\` } }) : req;\n  return next(authReq);\n};`,
    angularSoundbite: "Functional interceptors in Angular 18 are pure functions chained via provideHttpClient(withInterceptors([...])).",
    angularNuance: "Req objects are immutable; you must use req.clone() to add headers or transform URLs.",
    dotnetTitle: "ASP.NET Core Onion Middleware & DelegatingHandler",
    dotnetCode: `app.UseExceptionHandler();\napp.UseHttpsRedirection();\napp.UseAuthentication();\napp.UseAuthorization();\n\n// Outgoing client pipeline:\nbuilder.Services.AddHttpClient(\"Backend\")\n    .AddHttpMessageHandler<AuthHeaderHandler>();`,
    dotnetSoundbite: "ASP.NET Core uses a strict onion middleware pipeline for incoming requests and DelegatingHandler for outgoing HTTP calls.",
    dotnetNuance: "Order matters critically: UseAuthentication must precede UseAuthorization, which must precede Endpoint mapping.",
    coreEquivalency: "Both frameworks use the Russian Doll / Chain of Responsibility pattern for intercepting and enriching HTTP traffic.",
    interviewPunchline: "HttpInterceptorFn decorates outgoing client requests; ASP.NET Core Middleware guards and filters incoming server requests."
  },
  {
    id: "reactive-state",
    category: "State & Async",
    name: "5. Reactive State",
    angularTitle: "Angular Signals (signal, computed, effect)",
    angularCode: `const count = signal(0);\nconst double = computed(() => count() * 2);\n\n// Update state cleanly\ncount.update(c => c + 1);`,
    angularSoundbite: "Signals provide synchronous, fine-grained reactivity with automatic dependency tracking, eliminating Zone.js dirty-checking overhead.",
    angularNuance: "Effects should be reserved for logging/DOM side effects, not state synchronization (use computed() for derived state).",
    dotnetTitle: "INotifyPropertyChanged, Rx.NET & System.Threading.Channels",
    dotnetCode: `public class LiveTicker {\n    private readonly Channel<StockPrice> _channel = Channel.CreateBounded<StockPrice>(1000);\n    public ChannelWriter<StockPrice> Writer => _channel.Writer;\n    public ChannelReader<StockPrice> Reader => _channel.Reader;\n}`,
    dotnetSoundbite: "System.Threading.Channels provides lock-free, async producer-consumer pipelines with bounded backpressure.",
    dotnetNuance: "Bounded channels prevent OOM by throttling producers when consumers cannot keep pace.",
    coreEquivalency: "Signals provide fine-grained synchronous reactive UI state, while Channels provide bounded asynchronous server backpressure.",
    interviewPunchline: "Signals on the frontend for zero-overhead UI updates; Bounded Channels on the backend for high-throughput stream processing."
  },
  {
    id: "validation",
    category: "Architecture & Testing",
    name: "6. Validation",
    angularTitle: "Reactive Forms Typed Validators & AsyncValidators",
    angularCode: `this.form = inject(FormBuilder).nonNullable.group({\n  email: ['', [Validators.required, Validators.email], [this.uniqueEmailValidator]]\n});`,
    angularSoundbite: "Typed Reactive Forms in modern Angular enforce compile-time form model safety with synchronous and asynchronous validators.",
    angularNuance: "Async validators trigger after sync validators pass to conserve network round-trips.",
    dotnetTitle: "FluentValidation RuleSets & MediatR Pipeline Behaviors",
    dotnetCode: `public class CreateOrderValidator : AbstractValidator<CreateOrderCommand> {\n    public CreateOrderValidator() {\n        RuleFor(x => x.Email).NotEmpty().EmailAddress();\n        RuleFor(x => x.Quantity).GreaterThan(0).LessThanOrEqualTo(100);\n    }\n}`,
    dotnetSoundbite: "FluentValidation decouples business rules from DTO attributes, enabling testable, pipeline-integrated request validation.",
    dotnetNuance: "Executed inside a MediatR IPipelineBehavior before reaching the domain command handler.",
    coreEquivalency: "Both isolate validation into declarative rule chains rather than polluting UI templates or core domain entities.",
    interviewPunchline: "Validate early and declaratively: Typed Reactive Forms on the client, FluentValidation pipeline behaviors on the API."
  },
  {
    id: "security-route-protection",
    category: "Security & Auth",
    name: "7. Security & Route Protection",
    angularTitle: "Functional CanActivateFn & CanMatchFn Route Guards",
    angularCode: `export const authGuard: CanActivateFn = (route, state) => {\n  const authService = inject(AuthService);\n  const router = inject(Router);\n  return authService.isAuthenticated() ? true : router.createUrlTree(['/login']);\n};`,
    angularSoundbite: "Functional route guards return boolean, Observable<boolean>, or UrlTree to seamlessly redirect unauthorized visitors.",
    angularNuance: "CanMatchFn prevents even downloading the lazy-loaded chunk if user lacks required permissions.",
    dotnetTitle: "ASP.NET Core [Authorize] & Requirement Handlers",
    dotnetCode: `[Authorize(Policy = \"SeniorApprover\")]\n[HttpPost(\"orders/{id}/approve\")]\npublic async Task<IActionResult> ApproveOrder(Guid id) => Ok();\n\n// Policy Registration:\nbuilder.Services.AddAuthorization(opt => \n    opt.AddPolicy(\"SeniorApprover\", p => p.RequireClaim(\"role\", \"Admin\").RequireClaim(\"clearance\", \"L3\")));`,
    dotnetSoundbite: "Policy-based authorization combines claims, roles, and custom IAuthorizationRequirement handlers into clean declarative gates.",
    dotnetNuance: "Never rely on client-side route guards for security; they are UX affordances. Real security lives at the API endpoint level.",
    coreEquivalency: "Angular CanActivateFn mirrors ASP.NET Core Authorization Policies—both protect entry points based on claims.",
    interviewPunchline: "Client guards provide UX routing; server authorization policies enforce zero-trust endpoint access."
  },
  {
    id: "lifecycle-teardown",
    category: "DI & Lifecycles",
    name: "8. Lifecycle & Teardown",
    angularTitle: "takeUntilDestroyed() & DestroyRef Lifecycle Hook",
    angularCode: `private readonly destroyRef = inject(DestroyRef);\n\nngOnInit() {\n  this.dataStream$.pipe(\n    takeUntilDestroyed(this.destroyRef)\n  ).subscribe(data => this.process(data));\n}`,
    angularSoundbite: "takeUntilDestroyed() ties RxJS stream subscriptions directly to the component or service lifetime, eliminating memory leaks.",
    angularNuance: "If used in constructor, inject(DestroyRef) is implicit; in ngOnInit, it must be explicitly passed.",
    dotnetTitle: "IDisposable / IAsyncDisposable & 'await using'",
    dotnetCode: `public async Task StreamDataAsync(CancellationToken ct) {\n    await using var connection = new SqlConnection(_connString);\n    await connection.OpenAsync(ct);\n    // Connection is deterministically disposed upon scope exit\n}`,
    dotnetSoundbite: "IAsyncDisposable with await using guarantees non-blocking resource cleanup for network sockets and database handles.",
    dotnetNuance: "Dispose() handles unmanaged resources; suppressing finalizers (GC.SuppressFinalize) prevents double-sweep GC overhead.",
    coreEquivalency: "Both ensure deterministic teardown: DestroyRef cleans reactive UI listeners, while IAsyncDisposable releases unmanaged kernel handles.",
    interviewPunchline: "Prevent memory retention at all costs: takeUntilDestroyed on Angular streams, await using on .NET I/O connections."
  },
  {
    id: "async-streaming",
    category: "State & Async",
    name: "9. Async Streaming",
    angularTitle: "RxJS Observable<T> (Push Stream Architecture)",
    angularCode: `readonly liveTrades$ = this.tradeSocket$.pipe(\n  filter(t => t.volume > 1000),\n  debounceTime(50),\n  shareReplay(1)\n);`,
    angularSoundbite: "RxJS Observables push asynchronous events to active subscribers with powerful composition operators (switchMap, debounceTime).",
    angularNuance: "Hot vs Cold observables: Hot streams push data regardless of subscribers; Cold streams instantiate work per subscription.",
    dotnetTitle: "IAsyncEnumerable<T> & 'yield return' (Pull Stream)",
    dotnetCode: `public async IAsyncEnumerable<TradeDto> StreamTradesAsync([EnumeratorCancellation] CancellationToken ct) {\n    await foreach (var trade in _tradeRepository.GetLiveTradesAsync(ct)) {\n        if (trade.Volume > 1000) yield return trade;\n    }\n}`,
    dotnetSoundbite: "IAsyncEnumerable<T> pulls asynchronous data on-demand across memory boundaries without buffering millions of rows in RAM.",
    dotnetNuance: "Streams directly over HTTP chunked transfer encoding (application/x-ndjson) to the client.",
    coreEquivalency: "RxJS pushes events over time into UI components; IAsyncEnumerable pulls asynchronous records from database to HTTP stream.",
    interviewPunchline: "Pull data from SQL with IAsyncEnumerable, stream over HTTP, and consume client-side with RxJS push streams."
  },
  {
    id: "realtime-sockets",
    category: "State & Async",
    name: "10. Real-Time Sockets",
    angularTitle: "@microsoft/signalr HubConnection with Signals",
    angularCode: `private readonly hub = new HubConnectionBuilder()\n  .withUrl('/hubs/notifications')\n  .withAutomaticReconnect()\n  .build();\n\nthis.hub.on('ReceiveAlert', (alert: Alert) => this.latestAlert.set(alert));`,
    angularSoundbite: "The official SignalR client seamlessly bridges WebSocket payloads directly into reactive Angular Signals.",
    angularNuance: "withAutomaticReconnect() provides exponential backoff; listen to onreconnecting/onreconnected to show UI badges.",
    dotnetTitle: "ASP.NET Core Strongly Typed Hub<TClient>",
    dotnetCode: `public interface INotificationClient {\n    Task ReceiveAlert(AlertDto alert);\n}\n\npublic class NotificationHub : Hub<INotificationClient> {\n    public async Task Broadcast(AlertDto alert) => \n        await Clients.Group(\"Engineers\").ReceiveAlert(alert);\n}`,
    dotnetSoundbite: "Strongly typed Hub<TClient> eliminates string-based RPC calls, giving compile-time safety across client broadcasts.",
    dotnetNuance: "Scale-out requires Azure SignalR Service or Redis Backplane to coordinate messages across multi-pod Kubernetes clusters.",
    coreEquivalency: "End-to-end type-safe real-time communication: Strongly typed C# Hubs broadcasting to SignalR-connected Angular Signals.",
    interviewPunchline: "Real-time full-stack excellence: Hub<TClient> on ASP.NET Core pushing to SignalR-backed Signals in Angular."
  },
  {
    id: "token-security",
    category: "Security & Auth",
    name: "11. Token Security & Auth",
    angularTitle: "In-Memory Access Token + Mutex Interceptor",
    angularCode: `// Store access token in private memory variable, NOT localStorage (prevents XSS theft)\nprivate accessToken: string | null = null;\n\n// Interceptor catches 401, locks with Mutex, calls refresh, retries failed requests`,
    angularSoundbite: "Storing access tokens in JavaScript memory prevents XSS extraction, while a Mutex interceptor queues parallel 401 retries.",
    angularNuance: "Never store sensitive JWTs in localStorage or sessionStorage where third-party scripts can read them.",
    dotnetTitle: "HttpOnly SameSite=Strict Cookies + Token Rotation",
    dotnetCode: `Response.Cookies.Append(\"refreshToken\", newRefreshToken, new CookieOptions {\n    HttpOnly = true,\n    Secure = true,\n    SameSite = SameSiteMode.Strict,\n    Expires = DateTimeOffset.UtcNow.AddDays(7)\n});`,
    dotnetSoundbite: "Refresh tokens stored in HttpOnly SameSite=Strict cookies are immune to JavaScript XSS and CSRF attacks.",
    dotnetNuance: "Token Family Tracking: If a revoked refresh token is presented, immediately revoke all tokens in the family (theft detection).",
    coreEquivalency: "In-memory client access tokens paired with HttpOnly server cookies represent the gold standard of modern zero-trust SPA security.",
    interviewPunchline: "Short-lived access token in Angular memory; HttpOnly SameSite=Strict refresh token in ASP.NET Core."
  },
  {
    id: "syntax-control-flow",
    category: "Performance & Optimization",
    name: "12. Syntax & Control Flow",
    angularTitle: "Built-in @if, @for (track), @switch Template Syntax",
    angularCode: `@for (item of items(); track item.id) {\n  <order-row [data]=\"item\" />\n} @empty {\n  <p>No active orders.</p>\n}`,
    angularSoundbite: "Angular's built-in @for with mandatory track expressions eliminates DOM recreation overhead during array updates.",
    angularNuance: "Mandatory track expression ensures 1:1 DOM node reconciliation without needing custom trackBy functions.",
    dotnetTitle: "Switch Expressions & Pattern Matching in C# 12",
    dotnetCode: `public decimal CalculateFee(Order order) => order switch {\n    { IsVIP: true, TotalAmount: > 1000m } => 0m,\n    { IsExpress: true } => 25m,\n    { Country: \"CA\" or \"US\" } => 10m,\n    _ => 15m\n};`,
    dotnetSoundbite: "C# Pattern matching switch expressions evaluate complex object state cleanly without verbose if-else ladders.",
    dotnetNuance: "Compiler guarantees exhaustiveness; warns if any enum or structural condition is left unhandled.",
    coreEquivalency: "Both platforms replaced clunky legacy syntax with clean, declarative, high-performance pattern constructs.",
    interviewPunchline: "@for with mandatory tracking in Angular templates; recursive pattern matching in C# domain logic."
  },
  {
    id: "resilience-retries",
    category: "Performance & Optimization",
    name: "13. Resilience & Retries",
    angularTitle: "RxJS retry() with Exponential Backoff & Jitter",
    angularCode: `this.http.get<Order>('/api/orders').pipe(\n  retry({\n    count: 3,\n    delay: (error, retryCount) => timer(Math.pow(2, retryCount) * 1000 + Math.random() * 200)\n  })\n);`,
    angularSoundbite: "RxJS retry with exponential backoff and randomized jitter prevents thundering herd retries against failing backends.",
    angularNuance: "Only retry idempotent HTTP verbs (GET, PUT, DELETE); retrying non-idempotent POST requests risks duplicate mutations.",
    dotnetTitle: "ASP.NET Core Standard Resilience Pipelines (Polly v8)",
    dotnetCode: `builder.Services.AddHttpClient(\"PaymentGateway\")\n    .AddStandardResilienceHandler(options => {\n        options.Retry.MaxRetryAttempts = 3;\n        options.Retry.BackoffType = DelayBackoffType.Exponential;\n        options.Retry.UseJitter = true;\n        options.CircuitBreaker.SamplingDuration = TimeSpan.FromSeconds(30);\n    });`,
    dotnetSoundbite: "Polly v8 integrated resilience pipelines combine retry, circuit breaker, rate limiter, and timeout into a zero-allocation pipeline.",
    dotnetNuance: "Circuit breakers fail fast when error thresholds exceed 50%, shielding downstream microservices from catastrophic cascades.",
    coreEquivalency: "Both implement client and server resilience patterns: RxJS jitter retries client-side, Polly v8 pipelines server-side.",
    interviewPunchline: "Never retry without jitter on the frontend; always guard outbound HTTP with Polly v8 circuit breakers on the backend."
  },
  {
    id: "performance-hydration",
    category: "Performance & Optimization",
    name: "14. Performance & Hydration",
    angularTitle: "@defer (on viewport) Deferred Bundle Splitting",
    angularCode: `@defer (on viewport; prefetch on idle) {\n  <heavy-analytics-chart [data]=\"metrics()\" />\n} @placeholder {\n  <div class=\"skeleton-box\" />\n} @loading (minimum 200ms) {\n  <spinner />\n}`,
    angularSoundbite: "@defer splits component bundles into independent JS chunks loaded only when scrolled into the user viewport.",
    angularNuance: "prefetch on idle downloads the chunk silently in background, eliminating latency when the user scrolls down.",
    dotnetTitle: "EF Core .AsSplitQuery() & Deferred LINQ Composition",
    dotnetCode: `var orders = await ctx.Orders\n    .Where(o => o.CustomerId == customerId)\n    .Include(o => o.Items)       // Separate SQL query\n    .Include(o => o.AuditLogs)   // Separate SQL query\n    .AsSplitQuery()\n    .ToListAsync();`,
    dotnetSoundbite: ".AsSplitQuery() splits multi-collection .Include() queries into separate SQL SELECT statements, preventing Cartesian explosion.",
    dotnetNuance: "Ensures duplicate column transport is eliminated; always execute within a repeatable read transaction if data changes rapidly.",
    coreEquivalency: "Both techniques split monolithic data/bundles into granular, on-demand streams to optimize throughput and memory.",
    interviewPunchline: "@defer splits heavy JavaScript bundles on the client; .AsSplitQuery() splits heavy relational joins in EF Core."
  },
  {
    id: "json-serialization",
    category: "Performance & Optimization",
    name: "15. JSON Serialization",
    angularTitle: "TypeScript CamelCase Interface Contracts",
    angularCode: `export interface InvoiceDto {\n  invoiceNumber: string;\n  totalAmount: number;\n  issuedAtUtc: string;\n}`,
    angularSoundbite: "TypeScript models represent camelCase JSON payloads directly, matching standard web serialization conventions.",
    angularNuance: "Always serialize ISO 8601 dates (issuedAtUtc) and parse into Date objects or Unix timestamps.",
    dotnetTitle: "System.Text.Json Compile-Time Source Generators",
    dotnetCode: `[JsonSerializable(typeof(InvoiceDto))]\n[JsonSourceGenerationOptions(PropertyNamingPolicy = JsonKnownNamingPolicy.CamelCase)]\npublic partial class AppJsonSerializerContext : JsonSerializerContext {}\n\n// Fast, reflection-free JSON serialization\napp.MapGet(\"/invoices\", () => Results.Ok(invoices, AppJsonSerializerContext.Default.InvoiceDto));`,
    dotnetSoundbite: "System.Text.Json Source Generators eliminate runtime reflection, boosting serialization speed by 40% and enabling AOT.",
    dotnetNuance: "Source generation produces zero memory allocations and enables Native AOT deployment for instant serverless boot times.",
    coreEquivalency: "TypeScript camelCase contracts consume zero-reflection C# source-generated JSON payloads with maximum wire speed.",
    interviewPunchline: "Compile-time safety on both ends: TS interfaces on the client, Reflection-Free Source Generators on .NET."
  },
  {
    id: "database-migrations",
    category: "Database & SQL",
    name: "16. Database Migrations",
    angularTitle: "IndexedDB Schema Upgrades on Version Change",
    angularCode: `const request = indexedDB.open('OfflineStore', 2);\nrequest.onupgradeneeded = (event) => {\n  const db = (event.target as any).result;\n  if (event.oldVersion < 2) {\n    db.createObjectStore('drafts', { keyPath: 'id' });\n  }\n};`,
    angularSoundbite: "Client-side IndexedDB upgrades execute sequentially inside onupgradeneeded to migrate cached offline state.",
    angularNuance: "Always preserve user draft state when upgrading client storage schemas.",
    dotnetTitle: "EF Core Migration Bundles & Expand/Contract CI/CD",
    dotnetCode: `// Generated via: dotnet ef migrations bundle --output efbundle.exe\n// Executed in CI/CD pipeline BEFORE container deployment:\n// ./efbundle.exe --connection "$CONNECTION_STRING"\n\n// Never run ctx.Database.Migrate() inside app startup in Kubernetes!`,
    dotnetSoundbite: "Migration Bundles compile EF Core migrations into standalone executables run in CI/CD, preventing startup race conditions.",
    dotnetNuance: "The Expand/Contract pattern: Add new nullable columns first (Expand), deploy app, then deprecate old columns (Contract).",
    coreEquivalency: "Both manage schema evolutions without downtime: onupgradeneeded in client IndexedDB, Migration Bundles in SQL CI/CD.",
    interviewPunchline: "Never run Database.Migrate() on pod startup; run Migration Bundles in CI/CD with Expand/Contract."
  },
  {
    id: "sargable-queries",
    category: "Database & SQL",
    name: "17. SARGable LINQ to SQL",
    angularTitle: "In-Memory Array Filter Predicates",
    angularCode: `const active = orders.filter(o => o.createdAt >= startTimestamp && o.createdAt < endTimestamp);`,
    angularSoundbite: "Client-side array filtering uses clean boundary comparisons on pre-fetched local collections.",
    angularNuance: "Ensure array transformations do not execute inside hot change-detection loops (memoize with computed()).",
    dotnetTitle: "SARGable Index Seeks vs Full Table Scans",
    dotnetCode: `// ❌ NON-SARGABLE (Forces Full Table Scan):\nvar bad = await ctx.Orders.Where(o => o.CreatedAt.Date == targetDate).ToListAsync();\n\n// ✅ SARGABLE (Executes Instant B-Tree Index Seek):\nvar nextDay = targetDate.AddDays(1);\nvar good = await ctx.Orders.Where(o => o.CreatedAt >= targetDate && o.CreatedAt < nextDay).ToListAsync();`,
    dotnetSoundbite: "SARGable queries avoid wrapping indexed columns in SQL functions, allowing the query engine to execute instant B-Tree index seeks.",
    dotnetNuance: "Wrapping a column in YEAR(), SUBSTRING(), or .Date converts an O(log N) index seek into a catastrophic O(N) table scan.",
    coreEquivalency: "Writing SARGable predicates in LINQ allows SQL Server to utilize clustered and non-clustered indexes at peak efficiency.",
    interviewPunchline: "Never wrap indexed columns in SQL functions; use range boundaries to ensure SARGable B-Tree index seeks."
  },
  {
    id: "sql-performance-tuning",
    category: "Database & SQL",
    name: "18. SQL Performance Tuning",
    angularTitle: "Narrow UI View Models & Projection",
    angularCode: `export interface OrderSummaryDto {\n  id: string;\n  orderNumber: string;\n  total: number;\n  status: string;\n}`,
    angularSoundbite: "Angular views should consume lean DTOs rather than heavy domain entities with dozens of unused properties.",
    angularNuance: "Reduces network payload size and client memory footprint.",
    dotnetTitle: "EF Core .Select() + Covering Indexes (INCLUDE)",
    dotnetCode: `// LINQ Projection:\nvar list = await ctx.Orders\n    .Where(o => o.Status == \"Pending\")\n    .Select(o => new OrderSummaryDto(o.Id, o.OrderNumber, o.Total, o.Status))\n    .ToListAsync();\n\n/* SQL Covering Index:\nCREATE NONCLUSTERED INDEX IX_Orders_Status \nON Orders (Status) \nINCLUDE (OrderNumber, Total); \n*/`,
    dotnetSoundbite: "Covering Indexes with INCLUDE satisfy queries entirely from the index leaf pages without costly Key Lookups.",
    dotnetNuance: "Combining LINQ .Select() projection with INCLUDE indexes produces zero clustered index key lookups.",
    coreEquivalency: "End-to-end projection: SQL Covering Indexes stream only required columns directly into Angular View Models.",
    interviewPunchline: "Combine LINQ .Select() with SQL Covering Indexes (INCLUDE) to eliminate Key Lookups and slash memory overhead."
  },
  {
    id: "security-sql-injection",
    category: "Security & Auth",
    name: "19. Security & SQL Injection",
    angularTitle: "Angular DomSanitizer & Trusted HTML Contexts",
    angularCode: `private readonly sanitizer = inject(DomSanitizer);\n\n// Safe rendering:\nthis.trustedSnippet = this.sanitizer.bypassSecurityTrustHtml(cleanHtml);`,
    angularSoundbite: "Angular automatically sanitizes interpolated template values to prevent Cross-Site Scripting (XSS) attacks.",
    angularNuance: "bypassSecurityTrustHtml should only be used when input has been scrubbed by a verified sanitizer like DOMPurify.",
    dotnetTitle: "FromSqlInterpolated (FormattableString Parameterization)",
    dotnetCode: `// ❌ DANGEROUS (SQL Injection Vulnerability):\nvar bad = ctx.Users.FromSqlRaw($\"SELECT * FROM Users WHERE Email = '{inputEmail}'\");\n\n// ✅ SAFE (Auto-Parameterization via FormattableString):\nvar safe = ctx.Users.FromSqlInterpolated($\"SELECT * FROM Users WHERE Email = {inputEmail}\");`,
    dotnetSoundbite: "FromSqlInterpolated takes a C# FormattableString, automatically converting interpolated variables into safe SQL DbParameters.",
    dotnetNuance: "FromSqlRaw with string concatenation leads directly to SQL injection; always enforce FromSqlInterpolated or pure LINQ.",
    coreEquivalency: "Both frameworks protect against code injection: DomSanitizer prevents XSS client-side; FormattableString prevents SQLi server-side.",
    interviewPunchline: "DomSanitizer blocks XSS in Angular templates; FromSqlInterpolated blocks SQL injection in EF Core."
  },
  {
    id: "high-throughput-data",
    category: "Architecture & Testing",
    name: "20. High-Throughput Data Access",
    angularTitle: "Local Signals Store vs Read-Only Query Streams",
    angularCode: `@Injectable({ providedIn: 'root' })\nexport class OrderStore {\n  readonly orders = signal<Order[]>([]);\n  readonly pendingCount = computed(() => this.orders().filter(o => o.status === 'Pending').length);\n}`,
    angularSoundbite: "Local Signal stores maintain immutable client state with zero change-detection penalty for high-frequency updates.",
    angularNuance: "Separate write signals from derived computed state to minimize computation overhead.",
    dotnetTitle: "Hybrid CQRS: EF Core (Writes) + Dapper (Reads)",
    dotnetCode: `// COMMAND (EF Core Change Tracking & Validation):\npublic async Task Handle(CreateOrderCmd cmd) {\n    var order = Order.Create(cmd.Items);\n    ctx.Orders.Add(order);\n    await ctx.SaveChangesAsync();\n}\n\n// QUERY (Dapper Direct SQL with NOLOCK / Covering Index):\npublic async Task<IReadOnlyList<OrderSummaryDto>> GetFeedAsync() {\n    using var conn = new SqlConnection(_connString);\n    return (await conn.QueryAsync<OrderSummaryDto>(\n        \"SELECT Id, OrderNumber, Total, Status FROM Orders WITH (NOLOCK) WHERE Status = @s\",\n        new { s = \"Active\" }\n    )).AsList();\n}`,
    dotnetSoundbite: "Hybrid CQRS uses EF Core for rich transactional domain writes, and Dapper for microsecond-latency read projections.",
    dotnetNuance: "Dapper bypasses EF Core change tracker allocation overhead, reading raw TDS packets directly into DTOs.",
    coreEquivalency: "Separation of concerns: Rich domain model for writes, high-performance optimized pipelines for reads.",
    interviewPunchline: "Hybrid CQRS: EF Core for transactional domain writes, Dapper for high-throughput zero-allocation reads."
  },
  {
    id: "optimistic-concurrency",
    category: "Database & SQL",
    name: "21. Optimistic Concurrency",
    angularTitle: "Optimistic UI with State Rollback on Error",
    angularCode: `toggleTodo(id: string) {\n  const prev = this.todos();\n  this.todos.update(list => list.map(t => t.id === id ? { ...t, done: !t.done } : t));\n  \n  this.api.toggle(id).subscribe({\n    error: () => this.todos.set(prev) // Rollback on failure\n  });\n}`,
    angularSoundbite: "Optimistic UI renders instant feedback to the user while preserving a snapshot for rollback if the network or API fails.",
    angularNuance: "Display clear retry or conflict toast notifications if rollback is triggered.",
    dotnetTitle: "SQL Server RowVersion & DbUpdateConcurrencyException",
    dotnetCode: `public class Customer {\n    public Guid Id { get; set; }\n    public string Name { get; set; } = \"\";\n    [Timestamp]\n    public byte[] RowVersion { get; set; } = [];\n}\n\n// Handled inside Unit of Work:\ntry {\n    await ctx.SaveChangesAsync();\n} catch (DbUpdateConcurrencyException) {\n    return Conflict(\"Record was modified by another user. Please reload.\");\n}`,
    dotnetSoundbite: "SQL Server RowVersion timestamp columns allow EF Core to detect mid-flight collisions, throwing DbUpdateConcurrencyException.",
    dotnetNuance: "Generates SQL: WHERE Id = @id AND RowVersion = @rowVersion; if 0 rows affected, concurrency conflict is raised.",
    coreEquivalency: "End-to-end concurrency management: Optimistic UI on the client, RowVersion conflict detection on SQL Server.",
    interviewPunchline: "SQL Server RowVersion detects concurrent overwrites; Angular Optimistic UI delivers instant feedback with clean rollback."
  },
  {
    id: "error-handling-testing",
    category: "Architecture & Testing",
    name: "22. Error Handling & Testing",
    angularTitle: "Global ErrorHandler + Vitest / Playwright",
    angularCode: `@Injectable()\nexport class GlobalLoggingErrorHandler implements ErrorHandler {\n  handleError(error: unknown) {\n    console.error('Unhandled SPA Error:', error);\n    // Ship telemetry to Datadog / Application Insights\n  }\n}`,
    angularSoundbite: "Angular's Global ErrorHandler catches uncaught client exceptions, funneling stack traces into centralized telemetry.",
    angularNuance: "Combine with HttpInterceptor to map RFC 7807 problem details into user-friendly notifications.",
    dotnetTitle: "IExceptionHandler (RFC 7807) + xUnit / Testcontainers",
    dotnetCode: `public class GlobalExceptionHandler(ILogger<GlobalExceptionHandler> logger) : IExceptionHandler {\n    public async ValueTask<bool> TryHandleAsync(HttpContext ctx, Exception ex, CancellationToken ct) {\n        logger.LogError(ex, \"Unhandled Exception: {Msg}\", ex.Message);\n        var problem = new ProblemDetails {\n            Status = StatusCodes.Status500InternalServerError,\n            Title = \"Internal Server Error\",\n            Detail = ex.Message\n        };\n        ctx.Response.StatusCode = 500;\n        await ctx.Response.WriteAsJsonAsync(problem, ct);\n        return true;\n    }\n}`,
    dotnetSoundbite: "ASP.NET Core 8 IExceptionHandler returns standardized RFC 7807 ProblemDetails payloads for all unhandled server errors.",
    dotnetNuance: "Testcontainers in xUnit spins up real Docker SQL Server and Redis instances for authentic, non-mocked integration tests.",
    coreEquivalency: "Both enforce RFC 7807 error standardization and real-environment integration testing across the entire stack.",
    interviewPunchline: "Standardize on RFC 7807 ProblemDetails across the API, and test against real databases using Testcontainers."
  }
];

export const SCENARIO_NARRATIVES: ScenarioNarrative[] = [
  {
    id: "threadpool-starvation",
    title: "ThreadPool Starvation & Sync-Over-Async Outage",
    archetype: "Production Outages & War Stories",
    coreIssue: "Sync-over-async (.Result / .GetAwaiter().GetResult()) in hot paths exhausts the .NET CLR ThreadPool under high concurrent traffic.",
    tenSecondAnchor: "In our core payment gateway, response times spiked from 25ms to 15 seconds under 8,000 req/s due to ThreadPool starvation caused by legacy sync-over-async blocking calls.",
    fullScript: `During a flash sale promotion, our payment processing microservice experienced a catastrophic latency spike from 25 milliseconds to over 15 seconds, followed by widespread HTTP 503 gateway timeouts.

Investigating our Grafana metrics and dotnet-counters, CPU utilization was sitting below 35%, but the CLR ThreadPool Work Item Queue length climbed past 4,000, while thread count climbed slowly at 2 threads per second.

The root cause was a legacy logging utility and a Redis caching lookup using '.GetAwaiter().GetResult()' inside an async controller action. When concurrent load surged, worker threads became blocked waiting on asynchronous I/O completion. Because worker threads were blocked synchronously, incoming requests had to wait for the ThreadPool's Hill Climbing heuristic to inject new threads at the default throttle of 2 per second.

We resolved this with a three-step intervention:
1. First, as an immediate emergency mitigation, we dialed up ThreadPool.SetMinThreads to 500 across all pods, giving the system breathing room to process backlogged queues.
2. Second, we refactored the entire call stack to be 'async all the way down', replacing all blocking calls with native 'await' statements and configuring ASP.NET Core analyzer rules to fail builds on any .Result or .Wait() invocations.
3. Third, we instrumented Prometheus metrics for ThreadPool queue length and worker thread saturation.

Within 10 minutes of deploying the full async fix, ThreadPool queue depth stabilized at zero, and p99 latency dropped back down to 18ms under 10,000 requests per second.`,
    steeringBait: [
      "Ask me about how the CLR ThreadPool Hill Climbing algorithm determines when to inject new worker threads.",
      "I can explain why Task.Run() on pure I/O operations is an anti-pattern that exacerbates thread context switching."
    ],
    redFlagPitfalls: [
      "Never suggest ThreadPool.SetMinThreads as a permanent fix—it is purely a temporary emergency band-aid.",
      "Don't confuse CPU-bound starvation with I/O-bound synchronous blocking."
    ],
    telemetryMetrics: "p99 latency dropped from 15.2s to 18ms; ThreadPool queue depth reduced from 4,200 to 0."
  },
  {
    id: "clr-gen2-angular-leaks",
    title: "CLR Gen 2 Retention vs. Angular DOM Leaks",
    archetype: "Production Outages & War Stories",
    coreIssue: "Memory leaks in managed runtimes caused by root-anchored event subscriptions and un-destroyed RxJS streams.",
    tenSecondAnchor: "We diagnosed a multi-gigabyte memory leak where long-lived singleton event subscriptions anchored short-lived components in both .NET Gen 2 heaps and Angular DOM trees.",
    fullScript: `We observed a gradual memory creep where our Kubernetes pods were being killed by OOMKilled after 36 hours of continuous traffic, while users reported browser tab lag after prolonged use.

On the .NET backend, we captured a heap snapshot using 'dotnet-gcdump' and analyzed it in Visual Studio Diagnostic Tools. We discovered millions of 'OrderContext' instances rooted in Gen 2 memory. A singleton 'NotificationService' had registered C# event handlers on transient per-request services. Because the singleton never unsubscribed, the GC could not collect the transient instances, dragging entire object graphs into Gen 2 sweeps.

On the Angular frontend, Chrome DevTools heap snapshots revealed detached DOM tree nodes and retained RxJS Subject subscribers inside our trade monitoring table. Components were being destroyed during route navigation, but continuous interval subscriptions lacked unsubscription logic.

We remediated both layers systematically:
1. On .NET, we replaced C# language events with MediatR in-process notifications and verified that all event publishers held weak references or were managed through scoped lifetimes.
2. On Angular, we adopted 'takeUntilDestroyed(inject(DestroyRef))' across all 45 reactive services and components, ensuring automatic teardown upon component destruction.

After deploying, .NET Gen 2 collection time plummeted by 82%, pod memory usage flattened at a predictable 420MB, and Angular client DOM memory held steady at 45MB over 8 hours of live trading.`,
    steeringBait: [
      "I can break down how the GC Mark-and-Sweep phase handles generational promotion from Gen 0 to Gen 2.",
      "Let's discuss how Chrome's Retainer Tree distinguishes between Shallow Size and Retained Size during memory leak diagnosis."
    ],
    redFlagPitfalls: [
      "Never call GC.Collect() in production as a workaround for event leaks—it forces a stop-the-world pause.",
      "Don't assume Angular ngOnDestroy is foolproof if you forget to unsubscribe from global root subjects."
    ],
    telemetryMetrics: "Pod memory stabilized at 420MB; Gen 2 GC pauses reduced from 450ms to 8ms."
  },
  {
    id: "loh-fragmentation-datas",
    title: "Diagnosing Gen 2 / LOH Memory Leaks & .NET 8/9 DATAS",
    archetype: "Production Outages & War Stories",
    coreIssue: "85,000+ byte array allocations landing on the uncompacted Large Object Heap (LOH), causing fragmentation and blocking full GC sweeps in Kubernetes.",
    tenSecondAnchor: "We eliminated Kubernetes OOMKilled pod crashes caused by 85KB+ PDF report buffers fragmenting the uncompacted Large Object Heap by implementing ArrayPool memory pooling and enabling .NET 9 DATAS.",
    fullScript: `Our document generation service was crashing intermittently in Kubernetes with exit code 137 (OOMKilled), despite processing moderate report volumes.

Using 'dotnet-dump' and 'dotnet-trace', we discovered that our PDF rendering pipeline was allocating 120KB byte arrays per document. Because allocations exceeding 85,000 bytes bypass Gen 0/1/2 and land directly on the Large Object Heap (LOH), they are not compacted during regular GC sweeps. Over time, LOH memory became severely fragmented, forcing the runtime to request more virtual address space until the container memory limit (1GB) was breached.

To eliminate this architectural defect:
1. We refactored document generation to use 'ArrayPool<byte>.Shared' and 'RecyclableMemoryStream', renting and returning memory buffers rather than allocating on the heap.
2. In our .NET 8/9 runtime configuration, we enabled Dynamic Adaptation to Application Sizes (DATAS via DOTNET_GCDynamicAdaptationMode=1), which automatically tunes GC heap sizes to actual workload demand rather than container limits.
3. We verified zero LOH allocations using the 'AllocationTick' event in dotnet-counters.

Post-deployment, memory allocations dropped by 94%, LOH fragmentation was reduced to zero, and the service sustained 50,000 PDF generations without a single restart.`,
    steeringBait: [
      "Ask me why the 85,000-byte threshold was chosen for the Large Object Heap and how DATAS fundamentally changes GC memory tuning in Kubernetes.",
      "I can walk through how RecyclableMemoryStream prevents Gen 2 promotion through pooled buffer pooling."
    ],
    redFlagPitfalls: [
      "Never forget to return rented ArrayPool buffers inside a finally block—buffer leakage defeats pooling.",
      "Don't increase Kubernetes memory limits blindly when the underlying issue is memory fragmentation."
    ],
    telemetryMetrics: "Heap allocations reduced by 94%; 0 OOMKilled crashes over 90 consecutive days."
  },
  {
    id: "rxjs-race-conditions",
    title: "RxJS Higher-Order Operators & Race Condition Defense",
    archetype: "Production Outages & War Stories",
    coreIssue: "Double-billing and dropped database mutations caused by selecting incorrect RxJS flattening operators.",
    tenSecondAnchor: "We fixed an urgent billing bug where rapid double-clicks bypassed UI buttons by replacing mergeMap with exhaustMap on payment dispatches and switchMap on search lookups.",
    fullScript: `We encountered a high-severity customer incident where users on mobile connections were occasionally double-billed during checkout, while other users reported that search auto-complete displays showed outdated results.

Analyzing our Angular code, the checkout form was using 'mergeMap' to trigger the payment API on button click. When a user double-tapped on a laggy connection, 'mergeMap' concurrently executed both HTTP POST requests. Because the first request had not yet completed, our optimistic button disable flag hadn't propagated in time.

Simultaneously, our search bar was using 'concatMap'. When users typed rapidly, previous search queries were queued sequentially, causing late-arriving search results to overwrite newer queries.

We established a strict RxJS Flattening Operator Matrix across our frontend architecture:
- 'exhaustMap' for non-reentrant write actions (e.g., checkout buttons, login submissions, payment execution) to definitively ignore subsequent emissions until the active stream completes.
- 'switchMap' for cancelable read queries (e.g., search autocomplete, tab switching) to automatically cancel previous in-flight HTTP requests.
- 'concatMap' for sequential, order-critical mutations (e.g., audit logging, message queueing).
- 'mergeMap' strictly for parallel, non-conflicting background downloads.

Additionally, we added server-side Idempotency Keys (UUIDs stored in Redis with 60-second TTLs) to guarantee single-execution semantics even if network packets are retransmitted.`,
    steeringBait: [
      "I can demonstrate how to build an Idempotent API action filter in ASP.NET Core using Redis and distributed locks.",
      "Let's discuss how Angular Signals computed properties prevent race conditions compared to manual RxJS combineLatest pipelines."
    ],
    redFlagPitfalls: [
      "Never use switchMap on HTTP POST/PUT write requests—canceling an in-flight write does NOT cancel server-side processing.",
      "Don't rely solely on client-side button disabling to prevent double-submit bugs."
    ],
    telemetryMetrics: "Duplicate payment transactions dropped to absolute 0; search input latency reduced by 60%."
  },
  {
    id: "channels-vs-queues",
    title: "High-Throughput Ingestion: System.Threading.Channels vs External Queues",
    archetype: "Strategic Steering & Baiting",
    coreIssue: "Replacing heavy distributed broker overhead with in-process System.Threading.Channels for sub-millisecond backpressure pipelines.",
    tenSecondAnchor: "To ingest 50,000 IoT telemetry packets per second on a single node, we built a bounded System.Threading.Channel pipeline that delivers non-blocking backpressure with zero external queue overhead.",
    fullScript: `When architecting our IoT device telemetry gateway, the initial proposal was to route all incoming HTTP packets immediately into an external Kafka/RabbitMQ cluster. However, under high burst volume, network I/O serialization overhead added 15ms latency per packet and strained broker connections.

I designed an in-process producer-consumer pipeline using 'System.Threading.Channels.Channel.CreateBounded<TelemetryPacket>(new BoundedChannelOptions(50_000) { FullMode = BoundedChannelFullMode.Wait })'.

This gave us three architectural advantages:
1. Microsecond in-memory buffering with zero serialization overhead.
2. Built-in async backpressure: when the buffer fills, the HTTP controller endpoint asynchronously yields (awaits WriteAsync), slowing down incoming producers without blocking threads.
3. Batch draining: Background worker tasks drain up to 500 items at a time from the channel using 'ChannelReader.ReadAllAsync()', flushing bulk writes directly to SQL Server using SqlBulkCopy and to TimescaleDB.

For catastrophic node failure defense, we persist a lightweight local append-only WAL (Write-Ahead Log) on NVMe before channel write, giving us Kafka-like durability at in-memory processing speeds.`,
    steeringBait: [
      "I'd love to break down the architectural decision framework for when an in-memory Channel is superior to an external Kafka/RabbitMQ broker.",
      "We can discuss how BoundedChannelFullMode.DropOldest enables real-time sensor sampling without memory bloat."
    ],
    redFlagPitfalls: [
      "Never use Unbounded Channels in production unless memory is infinite—unbounded queues will eventually OOM under load spikes.",
      "Don't use Channels across process boundaries; distributed workloads still require Kafka, RabbitMQ, or Azure Service Bus."
    ],
    telemetryMetrics: "Ingestion throughput reached 65,000 msgs/sec per pod; CPU usage reduced by 55% compared to RabbitMQ client."
  },
  {
    id: "class-struct-record",
    title: "Class vs. Struct vs. Record: Memory Layout & Zero-Allocation C#",
    archetype: "Strategic Steering & Baiting",
    coreIssue: "Heap vs. Stack memory allocation, boxing penalties, defensive copying, and zero-allocation high-performance parsing with Span<T>.",
    tenSecondAnchor: "In our high-frequency order matching engine, we eliminated 1.2GB/min of GC churn by transitioning from heap-allocated classes to readonly ref structs and Memory<T> slicing.",
    fullScript: `Senior candidates often know the basic difference between class (reference type) and struct (value type), but lead engineers understand the deep memory layout, cache locality, and boxing trade-offs in modern .NET 8/9.

In our FIX protocol financial parsing engine, every incoming message was initially parsed into a class object, generating 1.2GB of Gen 0 garbage every minute and causing frequent GC pauses.

We systematically restructured our type hierarchy:
1. For data contracts and immutable DTOs, we used C# 'record class' for value equality and non-destructive 'with' mutation.
2. For short-lived mathematical coordinates and pricing points, we used 'readonly record struct', ensuring stack allocation and preventing the GC from ever tracking the object.
3. For string and byte parsing, we eliminated string allocations entirely by using 'ReadOnlySpan<char>' and 'ref struct' parsers with 'MemoryMarshal'.

Because 'ref struct' cannot be boxed, cannot be captured in async state machines, and is guaranteed to live only on the stack, it produces zero heap allocations. This reduced our GC pause time to zero and allowed our matching engine to process orders in sub-20 microseconds.`,
    steeringBait: [
      "I can explain why casting a struct to an interface (e.g., (IEquatable<T>)myStruct) causes silent heap boxing.",
      "Let's discuss how Memory<T> differs from Span<T> when working across asynchronous await boundaries."
    ],
    redFlagPitfalls: [
      "Never create non-readonly structs—mutable structs cause insidious defensive copying bugs.",
      "Don't use ref struct inside async methods or generic collections (like List<T>) because they cannot cross heap boundaries."
    ],
    telemetryMetrics: "Heap allocations reduced from 1.2GB/min to 0 KB in parsing path; p99 latency dropped to 18μs."
  },
  {
    id: "async-await-internals",
    title: "Async/Await Internals: IOCP vs. CPU ThreadPool",
    archetype: "Strategic Steering & Baiting",
    coreIssue: "Understanding how true asynchronous I/O leverages OS I/O Completion Ports (IOCP) with zero OS threads in flight.",
    tenSecondAnchor: "A common misconception is that async/await runs on background threads; in reality, true asynchronous I/O uses OS I/O Completion Ports with zero thread utilization while waiting.",
    fullScript: `When interviewers ask about async/await, they are looking for whether a candidate understands the compiler state machine and the distinction between CPU-bound work and I/O-bound operations.

When you execute 'await httpClient.GetAsync()', no OS thread is sitting idle waiting for network packets. Here is what actually happens:
1. The .NET runtime registers an asynchronous request with the Windows kernel (via Win32 OVERLAPPED structures) or Linux epoll/io_uring.
2. The calling worker thread is immediately returned to the ThreadPool to handle other incoming HTTP requests.
3. When network packets arrive from the network interface card (NIC), a hardware interrupt signals the kernel, which posts an entry to the OS I/O Completion Port (IOCP).
4. The .NET runtime IOCP polling thread wakes up, unpacks the completion packet, and schedules the Continuation on the ThreadPool to resume execution at the await point.

This is why wrapping a synchronous call in 'Task.Run(() => syncCall())' is an anti-pattern for I/O operations—it wastes a ThreadPool thread just to block on I/O, defeating the scalability benefits of async/await.`,
    steeringBait: [
      "I can detail how the compiler transforms async methods into a generated IAsyncStateMachine struct with MoveNext() dispatch.",
      "Let's talk about ConfigureAwait(false) in class libraries vs ASP.NET Core's absence of SynchronizationContext."
    ],
    redFlagPitfalls: [
      "Never say 'async/await creates a background thread for database calls'—true I/O uses 0 threads during flight.",
      "Don't recommend ConfigureAwait(false) inside ASP.NET Core controllers; ASP.NET Core has no SynchronizationContext."
    ],
    telemetryMetrics: "Enabled 25,000 concurrent connections on a 4-core container by eliminating thread-per-request blocking."
  },
  {
    id: "hybrid-cqrs-ef-dapper",
    title: "Hybrid CQRS: EF Core (Writes) + Dapper (Reads)",
    archetype: "Architectural Trade-Offs & System Design",
    coreIssue: "Using EF Core Change Tracking for transactional domain writes, and routing high-throughput read feeds through Dapper with NOLOCK for microsecond latency.",
    tenSecondAnchor: "We built a Hybrid CQRS architecture combining EF Core's rich change-tracking domain model for transactional writes with Dapper's zero-overhead micro-ORM for high-throughput read queries.",
    fullScript: `In enterprise systems, choosing between EF Core and Dapper is often framed as a false dichotomy. In our high-scale commerce platform, we leveraged both within a clean Vertical Slice CQRS architecture.

For the Command side (Writes):
- We utilize EF Core 8/9 with DbContext. Change tracking, optimistic concurrency via RowVersion, domain event dispatching, and rich navigation relationships guarantee business rule invariants during complex checkout transactions.

For the Query side (Reads):
- Read feeds (e.g., product catalogs, order history, dashboard reports) bypass EF Core entirely. We inject raw IDbConnection and execute raw SQL queries through Dapper.
- Dapper deserializes raw SQL tabular data directly into lightweight C# records in microsecond latency with zero change-tracking memory allocation.
- We leverage SQL Server 'WITH (NOLOCK)' (or Snapshot Isolation) and index hints to ensure heavy reporting queries never lock transactional rows.

This gave us the best of both worlds: domain integrity and transaction safety for writes, alongside raw SQL performance (matching hand-written ADO.NET) for reads.`,
    steeringBait: [
      "I can discuss how EF Core 8's ExecuteUpdateAsync and ExecuteDeleteAsync provide bulk set-based operations without loading entities into memory.",
      "Let's explore how SQL Server Read Committed Snapshot Isolation (RCSI) eliminates reader-writer lock contention."
    ],
    redFlagPitfalls: [
      "Don't write complex domain business rules inside Dapper queries—keep domain invariants encapsulated in the write model.",
      "Never use NOLOCK on financial ledger tables where dirty reads would cause duplicate calculation errors."
    ],
    telemetryMetrics: "Dashboard read throughput increased 4x; API memory usage dropped by 68%."
  },
  {
    id: "cache-stampede-hybridcache",
    title: "Cache Stampede Defense: .NET 9 HybridCache & L1/L2 Tiering",
    archetype: "Architectural Trade-Offs & System Design",
    coreIssue: "Preventing database crashes when hot cache keys expire under heavy concurrent traffic.",
    tenSecondAnchor: "We defended our database against cache stampedes during flash sales by implementing .NET 9's new HybridCache, which combines in-memory L1, distributed Redis L2, and atomic key-locking.",
    fullScript: `When a hot cache key (such as the homepage product catalog) expires under 10,000 concurrent requests per second, standard caching implementations trigger a Cache Stampede: all 10,000 requests miss the cache simultaneously and bombard the database with identical heavy queries, causing CPU saturation and cascading outages.

Previously, teams built custom distributed locks with Redis and RedLock. In .NET 9, we adopted the native 'HybridCache' API:
1. Two-Tier Storage: HybridCache provides in-process L1 memory caching (sub-microsecond access) backed by an out-of-process distributed L2 cache (Redis).
2. Built-in Atomic Stampede Locking: When a cache miss occurs, HybridCache uses internal per-key semaphores to guarantee that only one factory delegate executes to query the database. The other 9,999 requests asynchronously wait and receive the populated result.
3. Tag-Based Eviction: We tag cached entries (e.g., 'category:electronics') to invalidate hundreds of related keys with a single call when catalog data changes.

This eliminated cache stampedes entirely and dropped database CPU load during flash sales from 95% down to a flat 12%.`,
    steeringBait: [
      "I can compare HybridCache against manual IMemoryCache + IDistributedCache lock synchronization.",
      "Let's discuss how Redis Cache-Aside with probabilistic early expiration (XFetch algorithm) defends legacy systems."
    ],
    redFlagPitfalls: [
      "Never rely on IMemoryCache alone across multi-pod deployments without an L2 Redis synchronization layer.",
      "Don't set identical fixed TTLs on thousands of related keys—always add random jitter to prevent synchronized expiration."
    ],
    telemetryMetrics: "Database CPU dropped from 95% to 12%; 0 duplicate database queries during cache key expiration."
  },
  {
    id: "ienumerable-vs-iqueryable",
    title: "The IEnumerable vs. IQueryable Trap",
    archetype: "Architectural Trade-Offs & System Design",
    coreIssue: "Accidental early materialization pulling millions of rows into client RAM before filtering.",
    tenSecondAnchor: "We resolved an out-of-memory crash caused by a developer casting an EF Core DbSet to IEnumerable before filtering, which secretly executed SELECT * on a 4-million-row table.",
    fullScript: `A subtle but catastrophic trap in .NET full-stack development is confusing IEnumerable<T> with IQueryable<T>.

In our user administration portal, an endpoint took 45 seconds to load and frequently caused container OOM restarts. Reviewing the LINQ code:
'IEnumerable<User> users = _dbContext.Users; var activeUsers = users.Where(u => u.IsActive).Take(20).ToList();'

Because the developer declared the variable as 'IEnumerable<User>', the LINQ '.Where()' method called the in-memory Enumerable extension method instead of Queryable. EF Core was forced to materialize and stream all 4.2 million user rows across the network into memory before filtering client-side.

By simply preserving 'IQueryable<User>' until terminal execution:
'var activeUsers = await _dbContext.Users.Where(u => u.IsActive).Take(20).ToListAsync();'

The C# expression tree was translated into optimal SQL: 'SELECT TOP (20) ... FROM Users WHERE IsActive = 1', executing an instant index seek in 2 milliseconds with zero memory overhead.

We implemented CI/CD Roslyn analyzers (EF Core Query Logging in development) to flag any premature materialization before deployment.`,
    steeringBait: [
      "I can explain how LINQ Expression Trees (Expression<Func<T, bool>>) are parsed by EF Core's Relational Query Translation engine.",
      "Let's discuss when in-memory client evaluation is appropriate vs when it must be explicitly disallowed."
    ],
    redFlagPitfalls: [
      "Never call .ToList() or .AsEnumerable() before .Where(), .Select(), or .Take() filters.",
      "Don't call custom C# methods inside IQueryable expression trees if they cannot be translated to SQL."
    ],
    telemetryMetrics: "Query duration dropped from 45 seconds to 2ms; data transfer dropped from 850MB to 4KB."
  },
  {
    id: "zerotrust-token-rotation",
    title: "Zero-Trust Full-Stack Security & Refresh Token Family Rotation",
    archetype: "Full-Stack Angular ↔ .NET Integration",
    coreIssue: "Short-lived in-memory JWTs paired with HttpOnly SameSite=Strict cookies and automatic token family theft detection.",
    tenSecondAnchor: "We implemented an enterprise-grade Zero-Trust authentication architecture using short-lived in-memory JWTs in Angular and HttpOnly SameSite=Strict refresh cookies with family theft rotation in .NET.",
    fullScript: `Securing Single Page Applications against both Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) requires a coordinated full-stack protocol.

Many developers store JWT access tokens in browser 'localStorage'. This is a critical security vulnerability: any third-party script or XSS flaw can steal the token with 'localStorage.getItem()'.

Our zero-trust architecture enforces a multi-layer defense:
1. Angular Client Memory: The 15-minute Access Token is stored strictly in a private TypeScript closure variable inside our AuthService. It is never written to localStorage, sessionStorage, or IndexedDB.
2. HttpOnly Refresh Cookies: The 7-day Refresh Token is delivered in a 'Set-Cookie: HttpOnly; Secure; SameSite=Strict; Path=/api/auth' header. JavaScript cannot read this cookie, eliminating XSS extraction.
3. Token Family Rotation & Theft Detection: In SQL Server, every refresh token belongs to a Family ID. When a token is used to refresh the session, it is immediately invalidated and a new token is issued. If an attacker attempts to replay a previously used refresh token, our .NET security handler detects the reuse and immediately revokes all tokens in that user's family, terminating all active sessions.
4. Angular Mutex Interceptor: When a 401 Unauthorized occurs, a RxJS BehaviorSubject mutex queues parallel HTTP requests, triggers a single silent refresh, updates the in-memory token, and replays the queued requests seamlessly.`,
    steeringBait: [
      "I can explain how SameSite=Strict cookies prevent CSRF attacks without requiring custom anti-forgery tokens.",
      "Let's discuss how Content Security Policy (CSP) headers with nonces eliminate inline script execution in Angular."
    ],
    redFlagPitfalls: [
      "Never store JWTs in localStorage—always state that access tokens belong in JavaScript memory.",
      "Don't permit refresh token reuse without an automated revocation policy for the entire token family."
    ],
    telemetryMetrics: "0 token theft vulnerabilities; silent session refresh executes in 45ms with 0 user disruption."
  },
  {
    id: "zonejs-to-signals",
    title: "Angular Change Detection Revolution: Zone.js to Zoneless Signals",
    archetype: "Full-Stack Angular ↔ .NET Integration",
    coreIssue: "Moving from global monkey-patching and top-down dirty checking to fine-grained signal dependency graphs and zoneless rendering.",
    tenSecondAnchor: "We boosted our Angular frontend rendering performance by 3x by migrating from Zone.js top-down dirty-checking to Angular 18 fine-grained Signals with Zoneless Change Detection.",
    fullScript: `For years, Angular relied on Zone.js to monkey-patch all browser asynchronous APIs (setTimeout, addEventListener, Promise). Whenever any async event fired anywhere in the app, Zone.js triggered a full top-down dirty-check of the entire component tree from root to leaf.

In our real-time financial dashboard displaying 500 stock tickers, Zone.js dirty checking consumed 60% of main-thread CPU time, causing dropped frames during high-frequency price updates.

In Angular 18, we converted the application to Zoneless Signals:
1. We enabled 'provideExperimentalZonelessChangeDetection()' in app.config.ts and removed Zone.js from angular.json polyfills, reducing bundle size by 35KB.
2. We refactored component inputs and state to 'signal()', 'computed()', and 'input()'.
3. Instead of checking thousands of un-changed DOM nodes, Angular's reactive signal graph tracks exact component dependencies. When a ticker signal updates, only the micro-DOM node bound to that specific signal re-renders.

This decoupled our rendering pipeline from global event loops, dropped main-thread CPU utilization from 60% to 8%, and maintained a solid 60 FPS under continuous WebSocket data streams.`,
    steeringBait: [
      "I can explain how Angular's internal Signal graph maintains producer-consumer relationships with glitch-free topological evaluation.",
      "Let's discuss how RxJS toSignal() and toObservable() interop bridges asynchronous streams with synchronous view models."
    ],
    redFlagPitfalls: [
      "Don't use Signal effects to mutate other signals—this creates infinite reactive cycles; use computed() instead.",
      "Never leave legacy third-party libraries that rely on Zone.js un-adapted when enabling zoneless mode."
    ],
    telemetryMetrics: "Bundle size reduced by 35KB; main-thread CPU usage dropped from 60% to 8%; steady 60 FPS."
  },
  {
    id: "keyset-pagination",
    title: "Enterprise REST API Design: Keyset Pagination & PUT vs. PATCH",
    archetype: "Full-Stack Angular ↔ .NET Integration",
    coreIssue: "Eliminating OFFSET degradation (.Skip().Take()) in SQL Server via O(log N) Clustered Index Keyset seeks, and clarifying PUT vs JSON Merge Patch semantics.",
    tenSecondAnchor: "We eliminated multi-second query degradation on large database tables by replacing legacy OFFSET-FETCH with Keyset Seek pagination, pairing it with RFC 7396 JSON Merge Patch updates.",
    fullScript: `In high-scale enterprise APIs, two common anti-patterns are offset pagination and ambiguous update semantics.

1. Keyset (Cursor) Pagination over Offset-Fetch:
Many APIs use '.Skip(100000).Take(50)'. In SQL Server, 'OFFSET 100000' forces the storage engine to read, sort, and discard 100,000 index rows before returning 50 rows, causing query times to degrade from 5ms on page 1 to 8 seconds on page 2,000.
We replaced this with Keyset Pagination:
'WHERE (CreatedAt < @cursorDate OR (CreatedAt = @cursorDate AND Id < @cursorId)) ORDER BY CreatedAt DESC, Id DESC FETCH FIRST 50 ROWS ONLY'
Because this uses a direct B-Tree index seek, page 2,000 loads in the exact same 3 milliseconds as page 1.

2. Idempotent PUT vs Delta PATCH (RFC 7396):
- HTTP PUT represents complete resource replacement (must be idempotent).
- HTTP PATCH represents partial delta modification. We implement RFC 7396 JSON Merge Patch using 'JsonPatchDocument<T>' or delta DTOs to ensure clients only transmit modified fields, eliminating race conditions where concurrent editors overwrite each other's unrelated properties.`,
    steeringBait: [
      "I can demonstrate how to build an opaque base64-encoded cursor token that encapsulates multi-column composite index keys.",
      "Let's talk about the exact HTTP status codes (200 OK vs 204 No Content vs 409 Conflict) for concurrent PATCH updates."
    ],
    redFlagPitfalls: [
      "Never use OFFSET/FETCH on tables with millions of rows that require deep scrolling or infinite feeds.",
      "Don't treat HTTP PUT as a partial update—PUT is explicitly defined by RFC standards as full replacement."
    ],
    telemetryMetrics: "Deep pagination query latency reduced from 8.2s to 3ms (2,700x speedup); payload size reduced by 70% with PATCH."
  },
  {
    id: "repository-pattern-debate",
    title: "The Repository Pattern Debate over EF Core",
    archetype: "Counter-Grill & Architecture Deflectors",
    coreIssue: "Debunking the cargo-cult use of generic IRepository<T> wrappers that cripple EF Core's advanced capabilities.",
    tenSecondAnchor: "I actively advocate against wrapping EF Core in generic IRepository<T> abstractions because DbSet<T> is already an in-memory repository and DbContext is already a Unit of Work.",
    fullScript: `A pervasive architectural anti-pattern in .NET applications is wrapping Entity Framework Core inside a generic 'IRepository<T>' and 'IUnitOfWork' abstraction.

When candidates are asked about repository patterns, dogmatic answers praise generic repositories for 'decoupling the database'. As a lead engineer, I push back on this dogma with three concrete technical reasons:
1. EF Core is already an abstraction: 'DbSet<T>' implements Repository, and 'DbContext' implements Unit of Work. Wrapping it in 'IRepository<T>' creates a leaky abstraction that disables EF Core features like '.AsSplitQuery()', '.AsNoTracking()', '.ExecuteUpdateAsync()', and complex projections.
2. Generic Repositories lead to the N+1 problem: Generic repositories expose methods like 'GetById(int id)' or 'GetAll()', encouraging developers to fetch root entities and loop over related collections in memory.
3. Testability is a solved problem: Instead of mocking 50 repository interfaces with Moq, modern .NET testing uses 'Testcontainers' to spin up real Docker SQL Server instances in milliseconds, verifying authentic SQL generation, constraints, and transactions.

Our Modern Alternative:
We adopt Vertical Slice Architecture with MediatR / FastEndpoints. Feature handlers query 'DbContext' directly using tailored LINQ projections, encapsulating queries where they belong without bloat.`,
    steeringBait: [
      "I can explain how Testcontainers with Respawn gives instant database state resets between integration test runs.",
      "Let's discuss when a specialized Query Object pattern is warranted for complex multi-tenant query filters."
    ],
    redFlagPitfalls: [
      "Never say 'we use generic IRepository so we can easily swap SQL Server for Mongo tomorrow'—enterprise apps almost never swap relational engines, and ORM semantics are incompatible anyway.",
      "Don't mock DbContext with InMemoryDatabase for tests—it lacks relational constraint enforcement (use Testcontainers with real SQL Server)."
    ],
    telemetryMetrics: "Eliminated 120 redundant repository wrapper classes; test reliability increased to 100% with Testcontainers."
  },
  {
    id: "debunking-microfrontends",
    title: "Debunking Premature Micro-Frontends & Modular Standalone Architecture",
    archetype: "Counter-Grill & Architecture Deflectors",
    coreIssue: "Pushing back on Module Federation micro-frontend hype in favor of Angular Standalone Components in an Nx Monorepo.",
    tenSecondAnchor: "Unless you have 50+ engineers with truly autonomous deployment cadence, Micro-Frontends introduce massive version skew and operational drag; an Nx Modular Monorepo with Standalone Components is vastly superior.",
    fullScript: `Micro-frontends via Webpack Module Federation were heavily hyped as the default architecture for modern web applications. In practice, premature adoption introduces severe operational penalties:
1. Version Skew & Shared Dependency Hell: When Micro-Frontend A uses Angular 17 and Micro-Frontend B uses Angular 18, the browser is forced to download two entire framework runtimes, destroying Core Web Vitals (LCP and TBT).
2. Complex Distributed State: Sharing authentication state, routing synchronization, and design system tokens across isolated micro-apps creates brittle runtime event bridges.
3. Operational CI/CD Drag: Managing 15 separate build pipelines, CDN deployment targets, and E2E contract testing slows down developer velocity.

Our Battle-Tested Approach:
We use an Nx Monorepo with Angular Standalone Components and strict boundary linting rules:
- Route-level lazy loading ('loadComponent: () => import(...)') ensures users only download JavaScript for the view they visit.
- Nx Module Boundaries enforce architectural layers (feature, UI, data-access, util) at compile-time via ESLint.
- Single version policy ensures all features share a unified, tree-shaken Angular runtime with zero duplicate downloads.

Micro-frontends are an organizational scaling solution for 100+ siloed developers, NOT a performance optimization.`,
    steeringBait: [
      "I can break down how Nx computation caching speeds up CI/CD pipelines by only rebuilding affected project graphs.",
      "Let's discuss how Angular 18 @defer provides micro-frontend-like code splitting without any runtime federation complexity."
    ],
    redFlagPitfalls: [
      "Never recommend Micro-Frontends for small-to-medium teams—it is an architectural anti-pattern for teams under 30 developers.",
      "Don't ignore the bundle size penalty of loading multiple Angular runtimes in a single browser tab."
    ],
    telemetryMetrics: "Initial bundle size reduced from 4.8MB to 420KB; build times dropped 70% using Nx affected caching."
  },
  {
    id: "efcore-cartesian-explosion",
    title: "EF Core Cartesian Explosion vs. Split Queries & Set-Based Mutations",
    archetype: "Architectural Trade-Offs & System Design",
    coreIssue: "Eagerly loading multiple child collections with .Include() multiplying relational result rows, solved by .AsSplitQuery() and .ExecuteUpdateAsync().",
    tenSecondAnchor: "We fixed an API timeout that transferred 180MB of duplicate SQL join rows by enabling .AsSplitQuery() on multi-collection queries and using .ExecuteUpdateAsync() for bulk updates.",
    fullScript: `When querying relational databases with Entity Framework Core, developers frequently write queries like:
'ctx.Orders.Include(o => o.Items).Include(o => o.Discounts).Include(o => o.Shipments).ToListAsync()'

Under default Single Query mode, SQL Server generates a massive multi-table LEFT JOIN. If an order has 10 items, 5 discounts, and 3 shipments, SQL Server returns 150 rows for a single order. In all 150 rows, the order columns, item columns, and discount columns are repeatedly duplicated across the TDS wire protocol, causing a Cartesian Explosion.

We resolved this with two modern EF Core techniques:
1. '.AsSplitQuery()': EF Core splits the query into 4 clean, focused SQL queries executed in parallel/sequence over the same DbContext connection. Each table is read once with zero row multiplication, reducing wire payload from 180MB to 1.2MB.
2. Set-Based Bulk Updates via '.ExecuteUpdateAsync()': Instead of loading 5,000 entities into memory, modifying properties in a loop, and calling SaveChangesAsync() (which generates 5,000 separate UPDATE statements), we execute:
'await ctx.Orders.Where(o => o.Status == \"Pending\").ExecuteUpdateAsync(s => s.SetProperty(o => o.Status, \"Archived\"));'
This generates a single atomic SQL statement executed directly in the database engine in 8 milliseconds.`,
    steeringBait: [
      "I can explain the transaction isolation trade-off with Split Queries (potential non-repeatable reads without snapshot isolation).",
      "Let's discuss how EF Core 8/9 translates Complex Types and JSON Columns (json_value in SQL Server)."
    ],
    redFlagPitfalls: [
      "Never execute bulk updates by loading thousands of entities into EF Core change tracking—use ExecuteUpdateAsync.",
      "Be aware that AsSplitQuery without a transaction can result in inconsistent reads if child rows are mutated mid-flight."
    ],
    telemetryMetrics: "Data payload reduced from 180MB to 1.2MB (99.3% reduction); bulk update time slashed from 14s to 8ms."
  },
  {
    id: "httpclientfactory-dns",
    title: "IHttpClientFactory vs. new HttpClient() Socket Exhaustion",
    archetype: "Architectural Trade-Offs & System Design",
    coreIssue: "Resolving TIME_WAIT socket exhaustion and DNS change staleness via IHttpClientFactory connection pooling.",
    tenSecondAnchor: "We eliminated socket exhaustion crashes during peak load by replacing 'new HttpClient()' with IHttpClientFactory, solving both OS socket leaks and DNS update staleness.",
    fullScript: `A classic .NET interview scenario is explaining why 'using var client = new HttpClient()' causes socket exhaustion.

Even though the HttpClient object is disposed, the underlying OS socket remains in the 'TIME_WAIT' state for 240 seconds (Windows default). Under heavy load (5,000 req/s), all available TCP ephemeral ports are consumed, throwing 'SocketException: Only one usage of each socket address is normally permitted'.

However, making HttpClient a static singleton introduces a secondary bug: DNS Staleness. If a microservice or DNS record changes its IP address, the singleton HttpClient holds open the original socket and continues sending traffic to the old IP.

The Solution: 'IHttpClientFactory' in ASP.NET Core:
1. IHttpClientFactory manages an active pool of 'HttpMessageHandler' instances with a default lifetime of 2 minutes.
2. When a handler expires, it is gracefully retired after active connections complete, and a new handler is created to re-resolve DNS records.
3. The lightweight 'HttpClient' instances created by the factory are disposable wrappers over the pooled handlers, giving clean developer ergonomics with zero socket leaks.`,
    steeringBait: [
      "I can discuss how SocketsHttpHandler in modern .NET provides PooledConnectionLifetime for microsecond DNS rotation.",
      "Let's talk about Typed HttpClients with Polly resilience handlers registered in dependency injection."
    ],
    redFlagPitfalls: [
      "Never instantiate new HttpClient() inside controller actions or per-request loops.",
      "Don't make HttpClient a static singleton without configuring PooledConnectionLifetime on SocketsHttpHandler."
    ],
    telemetryMetrics: "0 TIME_WAIT socket exhaustion errors under 20,000 req/s; DNS failovers execute seamlessly in under 2 minutes."
  },
  {
    id: "request-pipeline-forwarded-headers",
    title: "ASP.NET Core Request Pipeline: Middleware Ordering & Forwarded Headers",
    archetype: "Strategic Steering & Baiting",
    coreIssue: "Mastering deterministic onion middleware ordering and reverse proxy IP extraction via ForwardedHeadersOptions.",
    tenSecondAnchor: "We resolved a security vulnerability where client IP rate limiting was bypassed behind Kubernetes Ingress by configuring ForwardedHeadersOptions and enforcing deterministic middleware ordering.",
    fullScript: `In ASP.NET Core, the HTTP request pipeline is structured as an onion architecture of chained middleware. The order in which middleware is registered in 'Program.cs' determines the exact execution flow for requests and responses.

In one production incident, client IP rate limiting and OAuth redirect URLs failed because our pods ran behind an NGINX Ingress controller and AWS ALB. 'context.Connection.RemoteIpAddress' was returning the internal IP of the Kubernetes Ingress proxy rather than the real client IP.

We resolved this with precision configuration:
1. We configured 'UseForwardedHeaders(new ForwardedHeadersOptions { ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto })'.
2. Security Hardening: To prevent IP Spoofing attacks where malicious users forge their own 'X-Forwarded-For' headers, we locked 'KnownNetworks' and 'KnownProxies' to trust only our internal Kubernetes subnet.
3. Strict Pipeline Ordering:
   - ExceptionHandler (outermost to catch all exceptions)
   - ForwardedHeaders (before security to resolve real IP & HTTPS scheme)
   - Hsts / HttpsRedirection
   - Routing
   - Cors (before Auth to handle preflight OPTIONS)
   - Authentication (identifies user)
   - Authorization (enforces policies)
   - RateLimiting
   - Endpoint Mapping (executes controller/minimal API)`,
    steeringBait: [
      "I can detail how ASP.NET Core Endpoint Routing separates route matching (UseRouting) from route execution (UseEndpoints).",
      "Let's discuss how custom Middleware with IMiddlewareFactory provides per-request scoped dependency resolution."
    ],
    redFlagPitfalls: [
      "Never register UseCors after UseAuthentication/UseAuthorization—preflight OPTIONS requests will fail with 401 Unauthorized.",
      "Never enable ForwardedHeaders without configuring KnownNetworks or KnownProxies in production."
    ],
    telemetryMetrics: "Accurate client IP resolution restored; 100% of forged IP spoofing attempts blocked at edge."
  }
];

export const SQL_PERFORMANCE_RULES: SqlRule[] = [
  {
    id: "sargable-dates",
    title: "1. SARGable Date & Time Range Seeks",
    badPattern: "WHERE CreatedAt.Date == targetDate\n-- Translates to SQL: WHERE CONVERT(date, [c].[CreatedAt]) = @targetDate (FORCES FULL TABLE SCAN)",
    optimizedPattern: "var nextDay = targetDate.AddDays(1);\nWHERE CreatedAt >= targetDate && CreatedAt < nextDay\n-- Translates to SQL: WHERE [c].[CreatedAt] >= @targetDate AND [c].[CreatedAt] < @nextDay (INDEX SEEK)",
    explanation: "Wrapping indexed columns in functions (CONVERT, YEAR, SUBSTRING) prevents the SQL query optimizer from utilizing the B-Tree index structure. Using boundary ranges enables O(log N) Clustered/Non-Clustered Index Seeks.",
    productionImpact: "Converts a 4-second Full Table Scan on 10M rows into a 1.5ms Index Seek."
  },
  {
    id: "covering-index-include",
    title: "2. Covering Indexes with INCLUDE Columns",
    badPattern: "SELECT * FROM Orders WHERE CustomerId = @id\n-- Forces Key Lookups back to Clustered Index for non-indexed columns",
    optimizedPattern: "CREATE NONCLUSTERED INDEX IX_Orders_CustomerId \nON Orders (CustomerId) \nINCLUDE (OrderNumber, TotalAmount, Status);",
    explanation: "By including frequently queried projection columns in the non-clustered index leaf level using INCLUDE, SQL Server satisfies the entire query from the index without costly Key Lookups to the clustered table.",
    productionImpact: "Eliminates 90% of disk I/O reads by serving queries directly from memory-cached index pages."
  },
  {
    id: "split-queries",
    title: "3. Multi-Collection Split Queries",
    badPattern: "ctx.Orders.Include(o => o.Items).Include(o => o.Logs).ToListAsync();\n-- Generates massive single query with Cartesian explosion duplicate rows",
    optimizedPattern: "ctx.Orders.Include(o => o.Items).Include(o => o.Logs).AsSplitQuery().ToListAsync();\n-- Generates separate, linear SQL queries without row duplication",
    explanation: "When eagerly loading multiple 1:N collections, a single SQL query multiplies rows (10 items x 10 logs = 100 rows per order). Split queries transmit each collection once, slashing network payload.",
    productionImpact: "Reduces data transfer payload from 180MB to 1.2MB for heavy composite object graphs."
  },
  {
    id: "set-based-updates",
    title: "4. Set-Based Bulk Updates (.ExecuteUpdateAsync)",
    badPattern: "var list = await ctx.Orders.Where(o => o.IsOld).ToListAsync();\nforeach(var o in list) o.Status = \"Archived\";\nawait ctx.SaveChangesAsync(); // 5,000 separate UPDATE queries",
    optimizedPattern: "await ctx.Orders.Where(o => o.IsOld)\n    .ExecuteUpdateAsync(s => s.SetProperty(o => o.Status, \"Archived\"));\n-- Generates single atomic SQL: UPDATE Orders SET Status = 'Archived' WHERE IsOld = 1",
    explanation: "Bypasses in-memory EF Core entity loading and change tracking entirely, executing a single atomic set-based SQL UPDATE command directly on the database engine.",
    productionImpact: "Reduces execution time from 14 seconds to 8 milliseconds for thousands of affected records."
  },
  {
    id: "migration-bundles",
    title: "5. Safe CI/CD Migration Bundles (Expand/Contract)",
    badPattern: "// In Program.cs on startup across 10 Kubernetes pods:\napp.Services.CreateScope().ServiceProvider.GetRequiredService<AppDbContext>().Database.Migrate();",
    optimizedPattern: "// In CI/CD deployment pipeline before pod rollout:\ndotnet ef migrations bundle --output ./efbundle\n./efbundle --connection \"$PROD_SQL_CONN_STR\"",
    explanation: "Executing Database.Migrate() during application startup across multiple container replicas causes database schema lock contention and startup failure. Standalone Migration Bundles decouple schema deployment from container lifecycle.",
    productionImpact: "Guarantees zero-downtime deployments and eliminates Kubernetes pod crash loops during schema migrations."
  },
  {
    id: "optimistic-rowversion",
    title: "6. Optimistic Concurrency with RowVersion",
    badPattern: "// Blind overwriting of updated records without concurrency checks:\nctx.Update(user);\nawait ctx.SaveChangesAsync(); // Overwrites concurrent edits silently",
    optimizedPattern: "public class User {\n    public Guid Id { get; set; }\n    [Timestamp]\n    public byte[] RowVersion { get; set; } = [];\n}\n// EF Core checks RowVersion and throws DbUpdateConcurrencyException on collision",
    explanation: "SQL Server automatically updates the RowVersion byte array on every row modification. EF Core appends WHERE RowVersion = @originalVersion to the UPDATE statement, preventing lost updates.",
    productionImpact: "Prevents silent data loss and race conditions in collaborative multi-user enterprise systems."
  }
];

export const FULLSTACK_DOTNET_ANGULAR_MATRIX_EXAMPLE: ComparisonWorkspaceData & { mindMap: MindMapData } = {
  topic: "Full-Stack (.NET 8/9 + Angular 18+ + SQL) Master Architectural Matrix",
  overview: "Comprehensive master interview preparation studio and cross-framework Rosetta Stone matrix bridging modern Angular 18+ frontend architecture, ASP.NET Core 8/9 / C# 12 backend engineering, and high-performance SQL Server tuning.",
  domainType: "approaches",
  criteria: [
    { id: "c1", label: "Runtime Performance", description: "Memory layout, GC impact, zero-allocation capabilities, and rendering latency." },
    { id: "c2", label: "Architectural Parity", description: "Symmetry between frontend reactive models and backend service pipelines." },
    { id: "c3", label: "Security & Resilience", description: "Zero-trust token rotation, XSS/SQLi defense, and circuit breaker resilience." },
    { id: "c4", label: "Data Access Efficiency", description: "SARGable indexing, query splitting, connection pooling, and optimistic concurrency." },
    { id: "c5", label: "Delivery Soundbite", description: "Crisp 10-second confidence anchors and lead architectural soundbites." }
  ],
  options: [
    {
      id: "opt_angular18",
      label: "Angular 18+ Modern Frontend",
      tagline: "Signals, Functional DI, @defer, Zoneless Change Detection",
      description: "Next-generation Angular architecture leveraging fine-grained Signals, functional inject() contexts, built-in control flow (@if, @for), deferred component loading (@defer), and standalone modularity.",
      badge: "Frontend Lead",
      scores: {
        c1: { criterionId: "c1", rating: 5, displayValue: "60 FPS Zoneless Signals", note: "Eliminates Zone.js dirty-checking overhead with fine-grained signal graphs." },
        c2: { criterionId: "c2", rating: 5, displayValue: "Full Symmetry", note: "inject() and Functional Interceptors mirror .NET Primary Constructors and Middleware." },
        c3: { criterionId: "c3", rating: 5, displayValue: "In-Memory Auth", note: "In-memory token storage prevents XSS; Mutex Interceptor queues 401 retries." },
        c4: { criterionId: "c4", rating: 4, displayValue: "Lean View Models", note: "TypeScript readonly interfaces project only necessary UI view fields." },
        c5: { criterionId: "c5", rating: 5, displayValue: "Lead Soundbite Ready", note: "Zoneless Signals for synchronous state; RxJS for asynchronous event streams." }
      }
    },
    {
      id: "opt_dotnet89",
      label: ".NET 8/9 & C# 12 Backend",
      tagline: "Primary Constructors, Hybrid CQRS, Polly v8, Channels, DATAS GC",
      description: "High-throughput cloud-native ASP.NET Core backend utilizing C# 12 Primary Constructors, System.Threading.Channels, Hybrid CQRS with Dapper and EF Core, Polly v8 resilience pipelines, and .NET 9 HybridCache.",
      badge: "Backend Lead",
      scores: {
        c1: { criterionId: "c1", rating: 5, displayValue: "Sub-ms Latency", note: "Non-allocating ref structs, Span<T>, System.Threading.Channels, and DATAS GC." },
        c2: { criterionId: "c2", rating: 5, displayValue: "Full Symmetry", note: "Primary Constructors and Onion Middleware align with modern frontend paradigms." },
        c3: { criterionId: "c3", rating: 5, displayValue: "Zero-Trust Ready", note: "HttpOnly SameSite=Strict cookies with Token Family theft rotation." },
        c4: { criterionId: "c4", rating: 5, displayValue: "Hybrid CQRS & Split", note: "EF Core for transactional writes; Dapper with NOLOCK for high-throughput reads." },
        c5: { criterionId: "c5", rating: 5, displayValue: "Lead Soundbite Ready", note: "Hybrid CQRS: EF Core for transactional domain writes, Dapper for zero-overhead reads." }
      }
    },
    {
      id: "opt_sqlserver",
      label: "SQL Server & EF Core Performance",
      tagline: "SARGable Seeks, Covering Indexes, RowVersion, Migration Bundles",
      description: "Enterprise relational database design emphasizing SARGable boundary seeks, Covering Non-Clustered Indexes with INCLUDE columns, RowVersion optimistic concurrency, and CI/CD standalone migration bundles.",
      badge: "Data Architect",
      scores: {
        c1: { criterionId: "c1", rating: 5, displayValue: "O(log N) Seeks", note: "SARGable predicates eliminate Full Table Scans across multi-million-row tables." },
        c2: { criterionId: "c2", rating: 4, displayValue: "Direct DTO Mapping", note: "LINQ .Select() projections map directly to SQL Covering Index leaf pages." },
        c3: { criterionId: "c3", rating: 5, displayValue: "FormattableString Parameterization", note: "FromSqlInterpolated prevents SQL injection by default." },
        c4: { criterionId: "c4", rating: 5, displayValue: "Zero Cartesian Bloat", note: ".AsSplitQuery() eliminates row duplication across multi-collection joins." },
        c5: { criterionId: "c5", rating: 5, displayValue: "Lead Soundbite Ready", note: "Never wrap indexed columns in SQL functions; use boundary ranges for B-Tree seeks." }
      }
    }
  ],
  suggestedNextSteps: [
    "Rehearse 90-second delivery scripts in the Scenario Teleprompter tab",
    "Study the 22 Rosetta Stone cross-framework symmetrical paradigms",
    "Review SQL SARGability and Covering Index optimization rules"
  ],
  mindMap: {
    nodes: [
      {
        id: "fs_root",
        label: "Master Full-Stack (.NET 8/9 + Angular 18+ + SQL) Interview Studio",
        description: "Senior & Lead architectural mastery blueprint: 22 Rosetta Stone cross-framework paradigms, 18 scenario-based incident narratives, and SQL Server performance tuning.",
        type: "topic"
      },
      {
        id: "fs_p1",
        label: "🌐 Rosetta Stone Cross-Framework Paradigms",
        description: "22 symmetric architectural mappings bridging modern Angular 18+ frontend and .NET 8/9 backend paradigms.",
        type: "topic"
      },
      {
        id: "fs_p2",
        label: "🎯 18 Scenario-Based Architectural Narratives",
        description: "Battle-tested 90-second delivery scripts covering outages, strategic steering, system trade-offs, and counter-grilling.",
        type: "topic"
      },
      {
        id: "fs_p3",
        label: "🗄️ SQL & EF Core Performance Tuning Rules",
        description: "Core rules for SARGability, Covering Indexes, Migration Bundles, Concurrency, and Split Queries.",
        type: "topic"
      },
      {
        id: "fs_p1_di",
        label: "1. Dependency Injection & Service Lifetimes",
        description: "Angular functional inject() and Element Injectors paired with C# 12 Primary Constructors and Scoped/Transient/Singleton lifetimes.",
        type: "concept"
      },
      {
        id: "fs_p1_state",
        label: "2. Reactive State & Streaming",
        description: "Angular Signals and RxJS Push streams paired with System.Threading.Channels and C# IAsyncEnumerable pull streams.",
        type: "concept"
      },
      {
        id: "fs_p1_security",
        label: "3. Zero-Trust Security & Token Rotation",
        description: "In-memory client access tokens paired with HttpOnly SameSite=Strict cookies and token family theft detection.",
        type: "concept"
      },
      {
        id: "fs_p1_perf",
        label: "4. Performance, @defer & Serialization",
        description: "Angular @defer viewport code splitting paired with System.Text.Json reflection-free Source Generators.",
        type: "concept"
      },
      {
        id: "fs_p2_outages",
        label: "🚨 Production Outages & War Stories",
        description: "ThreadPool starvation, CLR Gen 2 retention vs Angular DOM leaks, LOH fragmentation with DATAS, and RxJS race conditions.",
        type: "concept"
      },
      {
        id: "fs_p2_steering",
        label: "🎯 Strategic Steering & Conversation Baiting",
        description: "Channels vs Queues, Class vs Struct vs Record memory layout, and Async/Await IOCP kernel internals.",
        type: "concept"
      },
      {
        id: "fs_p2_tradeoffs",
        label: "⚖️ System Design & Architectural Trade-offs",
        description: "Hybrid CQRS (EF Core + Dapper), Cache Stampede defense (HybridCache), and EF Core Cartesian Explosion vs Split Queries.",
        type: "concept"
      },
      {
        id: "fs_p2_deflectors",
        label: "🛡️ Counter-Grill & Architecture Deflectors",
        description: "Dismantling generic IRepository<T> over EF Core and debunking premature Micro-Frontends.",
        type: "concept"
      }
    ],
    edges: [
      { source: "fs_root", target: "fs_p1", label: "Paradigms" },
      { source: "fs_root", target: "fs_p2", label: "Scenarios" },
      { source: "fs_root", target: "fs_p3", label: "SQL Rules" },
      { source: "fs_p1", target: "fs_p1_di" },
      { source: "fs_p1", target: "fs_p1_state" },
      { source: "fs_p1", target: "fs_p1_security" },
      { source: "fs_p1", target: "fs_p1_perf" },
      { source: "fs_p2", target: "fs_p2_outages" },
      { source: "fs_p2", target: "fs_p2_steering" },
      { source: "fs_p2", target: "fs_p2_tradeoffs" },
      { source: "fs_p2", target: "fs_p2_deflectors" }
    ]
  }
};
