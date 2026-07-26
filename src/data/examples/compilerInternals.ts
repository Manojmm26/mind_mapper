import { MindMapData } from "../../services/llmService";

export const COMPILER_INTERNALS_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "compiler_root",
      "label": "Compilers, Programming Language Runtimes & Code Generation",
      "description": "Rigorous first-principles blueprint of Flex/Bison lexer/parser algorithms, Hindley-Milner type inference, SSA intermediate representations, Chaitin-Briggs graph coloring register allocation, JIT compilation, and Language Server Protocol (LSP).",
      "type": "topic"
    },
    {
      "id": "compiler_root_p1",
      "label": "Lexical Analysis & Parsing Algorithms",
      "description": "Lexical tokenization, regular expressions to DFA compilation, LL(k) / LR(1) / LALR parsing, and Pratt parser precedence.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t1",
      "label": "Regular Expressions to DFA Compilation (NFA/DFA)",
      "description": "Converting regular expressions to Deterministic Finite Automata via Thompson's Construction and Subset Construction.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t1_s1",
      "label": "Thompson's Construction Algorithm (Regex -> NFA)",
      "description": "Building Non-Deterministic Finite Automata with epsilon transitions from regular expressions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t1_s1_d1",
      "label": "Epsilon Transition Graph Nodes",
      "description": "Connecting sub-regex state graphs via non-consuming epsilon transitions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t1_s1_d2",
      "label": "Linear State Count Bound (O(N) NFA States)",
      "description": "Guaranteeing state graph size scales linearly with regex character length.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t1_s2",
      "label": "Powerset / Subset Construction (NFA -> DFA)",
      "description": "Converting NFAs to equivalent deterministic finite automata with zero epsilon transitions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t1_s2_d1",
      "label": "Epsilon-Closure Computation",
      "description": "Computing sets of states reachable via epsilon transitions alone.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t1_s2_d2",
      "label": "Worst-Case Exponential State Explosion (2^N States)",
      "description": "Managing theoretical 2^N state count expansion for complex NFA patterns.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t1_s3",
      "label": "Hopcroft's DFA State Minimization Algorithm",
      "description": "Minimizing state count in DFAs to produce optimal minimal state transition tables.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t1_s3_d1",
      "label": "State Partitioning Disjoint Sets",
      "description": "Iteratively splitting state sets based on output transition equivalence.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t1_s3_d2",
      "label": "O(N log N) Optimal Minimal DFA Generation",
      "description": "Producing unique minimal state DFAs for fast runtime matching.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t1_s4",
      "label": "Flex / Lex Lexer Table Generation",
      "description": "Generating high-speed C/C++ lexer code using pre-computed DFA state transition tables.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t1_s4_d1",
      "label": "Direct Array State Lookup (next_state = table[state][char])",
      "description": "Executing token transitions in single array lookup operations per character.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t1_s4_d2",
      "label": "Maximal Munch (Longest Match) Rule",
      "description": "Matching longest valid token strings when input prefix matches multiple regex patterns.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t1_s5",
      "label": "Unicode & UTF-8 Multi-Byte Lexing Mechanics",
      "description": "Handling multi-byte variable-length UTF-8 character encoding sequences during lexing.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t1_s5_d1",
      "label": "Byte-Level vs Codepoint-Level Lexing",
      "description": "Decoding 1-to-4 byte UTF-8 sequences into 32-bit Unicode codepoints.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t1_s5_d2",
      "label": "Unicode Category & Identifier Normalization",
      "description": "Normalizing Unicode identifiers according to UAX #31 standards.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t2",
      "label": "Context-Free Grammars (CFG) & Backus-Naur Form",
      "description": "Formal language definitions using terminals, non-terminals, production rules, and start symbols.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t2_s1",
      "label": "Chomsky Hierarchy Classification (Type-2 Context-Free)",
      "description": "Positioning programming language syntax within formal language hierarchy bounds.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t2_s1_d1",
      "label": "Production Rule Format (A -> alpha)",
      "description": "Restricting left-hand sides to single non-terminal symbols A.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t2_s1_d2",
      "label": "Pushdown Automata (PDA) Recognition",
      "description": "Recognizing context-free languages using stack-based pushdown automata.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t2_s2",
      "label": "Grammar Ambiguity & Dangling-Else Resolution",
      "description": "Identifying and resolving ambiguous grammars producing multiple parse trees for single inputs.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t2_s2_d1",
      "label": "Dangling-Else Ambiguity",
      "description": "Resolving nested if-else association ambiguity by binding else to nearest un-closed if.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t2_s2_d2",
      "label": "Precedence & Associativity Production Escalation",
      "description": "Structuring grammar rules hierarchically to enforce operator precedence.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t2_s3",
      "label": "FIRST and FOLLOW Set Computation",
      "description": "Computing terminal sets starting and following non-terminal production rules.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t2_s3_d1",
      "label": "FIRST Set Iterative Fixed-Point Computation",
      "description": "Extracting all terminal characters that can appear first in derivations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t2_s3_d2",
      "label": "FOLLOW Set End-Marker Tracking",
      "description": "Determining terminals that can immediately follow non-terminals to guide lookahead parsing.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t2_s4",
      "label": "Left-Recursion Elimination Algorithms",
      "description": "Transforming direct and indirect left-recursive rules into right-recursive equivalents.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t2_s4_d1",
      "label": "Direct Left-Recursion Rewrite (A -> A alpha | beta -> A -> beta A', A' -> alpha A' | epsilon)",
      "description": "Eliminating infinite loops in top-down recursive descent parsers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t2_s4_d2",
      "label": "Indirect Left-Recursion Substitution Sweeps",
      "description": "Systematically ordering non-terminals to eliminate hidden cyclic left-dependencies.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t2_s5",
      "label": "Left-Factoring Grammars for LL(1) Parsing",
      "description": "Factoring common production prefixes to enable single-token lookahead decision making.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t2_s5_d1",
      "label": "Prefix Extraction (A -> alpha beta1 | alpha beta2 -> A -> alpha A', A' -> beta1 | beta2)",
      "description": "Deferring parse decisions until common prefixes are processed.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t2_s5_d2",
      "label": "LL(1) Grammar Property Verification",
      "description": "Ensuring FIRST sets of alternative productions are completely disjoint.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t3",
      "label": "Top-Down Parsing (Recursive Descent & LL(k))",
      "description": "Constructing parse trees from root node down to leaf terminals using predictive lookahead.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t3_s1",
      "label": "Hand-Written Recursive Descent Parser Architecture",
      "description": "Structuring parsers as sets of mutually recursive functions corresponding to grammar non-terminals.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t3_s1_d1",
      "label": "Function-per-Non-Terminal Structural Mapping",
      "description": "Mapping grammar rules directly to dedicated parsing functions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t3_s1_d2",
      "label": "Clear Error Recovery & Diagnostic Reporting",
      "description": "Providing rich localized compiler error messages during parsing failures.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t3_s2",
      "label": "LL(1) Predictive Parse Table Generation",
      "description": "Building 2D parse tables M[NonTerminal, Terminal] driving non-recursive stack parsers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t3_s2_d1",
      "label": "Parse Table Population Rules",
      "description": "Placing production A -> alpha in M[A, a] for each terminal a in FIRST(alpha).",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t3_s2_d2",
      "label": "Detecting LL(1) Multiply-Defined Entry Conflicts",
      "description": "Identifying grammar ambiguities where parse table cells contain multiple rules.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t3_s3",
      "label": "LL(k) Strong Lookahead Expansion",
      "description": "Utilizing k lookahead tokens to disambiguate complex grammar choices.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t3_s3_d1",
      "label": "k-Token Lookahead Buffer Maintenance",
      "description": "Peeking k tokens ahead into token streams without consuming them.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t3_s3_d2",
      "label": "Exponential Table Size Growth O(|T|^k)",
      "description": "Managing parse table explosion when k > 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t3_s4",
      "label": "Pratt Operator-Precedence Parsing (Top-Down Operator Precedence)",
      "description": "Vaughan Pratt parsing algorithm handling complex operator expressions with arbitrary precedence.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t3_s4_d1",
      "label": "Null Denotation (Nud) & Left Denotation (Led) Functions",
      "description": "Parsing prefix operators via Nud and infix/postfix operators via Led methods.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t3_s4_d2",
      "label": "Binding Power Integer Numerical Comparison",
      "description": "Iterating expression parsing loops while right-binding power exceeds current threshold.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t3_s5",
      "label": "Parser Error Recovery Strategies (Panic Mode & Phase Synchronization)",
      "description": "Recovering parser execution after encountering syntax errors to report secondary errors.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t3_s5_d1",
      "label": "Panic Mode Synchronizing Token Discard",
      "description": "Discarding tokens until encountering synchronizing tokens (semicolon, closing brace).",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t3_s5_d2",
      "label": "Error Node Insertion in ASTs",
      "description": "Inserting placeholder Error AST nodes to allow downstream semantic analysis passes.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t4",
      "label": "Bottom-Up Parsing (LR(0), SLR(1), LALR(1), LR(1))",
      "description": "Constructing parse trees from leaf terminals up to root node using shift-reduce state machines.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t4_s1",
      "label": "Shift-Reduce Parser Action Mechanics",
      "description": "Executing Shift (push token to stack) and Reduce (replace handle with non-terminal) actions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t4_s1_d1",
      "label": "Shift Action (Push State and Token to Stack)",
      "description": "Consuming incoming token and transitioning to new LR state.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t4_s1_d2",
      "label": "Reduce Action (Pop RHS Length, Push LHS Non-Terminal)",
      "description": "Popping matching right-hand side states and executing grammar reduction.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t4_s2",
      "label": "LR(0) Item Sets & Canonical Collection Construction",
      "description": "Building state automata tracking parser position via dots inside production rules (A -> alpha . beta).",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t4_s2_d1",
      "label": "Closure(I) Operation Execution",
      "description": "Adding all productions for non-terminals following dot markers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t4_s2_d2",
      "label": "Goto(I, X) Transition State Generation",
      "description": "Advancing dot markers past symbol X to generate successor states.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t4_s3",
      "label": "Shift-Reduce & Reduce-Reduce Conflicts",
      "description": "Identifying ambiguity in LR parse tables where multiple valid actions exist.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t4_s3_d1",
      "label": "Shift-Reduce Conflict (Choose Shift vs Reduce)",
      "description": "Resolving ambiguity between shifting next token vs reducing current stack contents.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t4_s3_d2",
      "label": "Reduce-Reduce Conflict (Choose Rule A vs Rule B)",
      "description": "Severe grammar flaw where multiple reduction rules match identical stack contents.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t4_s4",
      "label": "LALR(1) Parsing (Bison / Yacc Default Engine)",
      "description": "Merging LR(1) states with identical LR(0) cores to shrink parse table sizes.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t4_s4_d1",
      "label": "Core State Merging Optimization",
      "description": "Combining lookahead sets across identical core item sets to reduce state count from thousands to hundreds.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t4_s4_d2",
      "label": "Spurious Reduce-Reduce Conflict Introduction",
      "description": "Managing rare instances where merging cores introduces new reduce-reduce conflicts.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t4_s5",
      "label": "GLR (Generalized LR) & Packrat Earley Parsing",
      "description": "Parsing arbitrary context-free or non-deterministic grammars by splitting execution paths.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t4_s5_d1",
      "label": "Forking Stack Execution on Conflict",
      "description": "Splitting parser stack into parallel execution branches when encountering conflicts.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t4_s5_d2",
      "label": "Packrat Parsing (O(N) Time via Memoization)",
      "description": "Parsing Parsing Expression Grammars (PEG) in linear time using memoized results.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t5",
      "label": "Lexical Analysis & Parsing Algorithms Topic 5",
      "description": "Detailed first-principles mechanics for Lexical Analysis & Parsing Algorithms topic 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t5_s1",
      "label": "Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Lexical Analysis & Parsing Algorithms Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t5_s1_d1",
      "label": "Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t5_s1_d2",
      "label": "Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t5_s2",
      "label": "Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Lexical Analysis & Parsing Algorithms Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t5_s2_d1",
      "label": "Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t5_s2_d2",
      "label": "Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t5_s3",
      "label": "Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Lexical Analysis & Parsing Algorithms Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t5_s3_d1",
      "label": "Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t5_s3_d2",
      "label": "Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t5_s4",
      "label": "Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Lexical Analysis & Parsing Algorithms Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t5_s4_d1",
      "label": "Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t5_s4_d2",
      "label": "Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t5_s5",
      "label": "Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Lexical Analysis & Parsing Algorithms Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t5_s5_d1",
      "label": "Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t5_s5_d2",
      "label": "Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Lexical Analysis & Parsing Algorithms Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t6",
      "label": "Lexical Analysis & Parsing Algorithms Topic 6",
      "description": "Detailed first-principles mechanics for Lexical Analysis & Parsing Algorithms topic 6.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t6_s1",
      "label": "Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Lexical Analysis & Parsing Algorithms Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t6_s1_d1",
      "label": "Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t6_s1_d2",
      "label": "Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t6_s2",
      "label": "Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Lexical Analysis & Parsing Algorithms Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t6_s2_d1",
      "label": "Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t6_s2_d2",
      "label": "Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t6_s3",
      "label": "Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Lexical Analysis & Parsing Algorithms Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t6_s3_d1",
      "label": "Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t6_s3_d2",
      "label": "Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t6_s4",
      "label": "Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Lexical Analysis & Parsing Algorithms Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t6_s4_d1",
      "label": "Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t6_s4_d2",
      "label": "Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t6_s5",
      "label": "Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Lexical Analysis & Parsing Algorithms Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t6_s5_d1",
      "label": "Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p1_t6_s5_d2",
      "label": "Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Lexical Analysis & Parsing Algorithms Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2",
      "label": "Semantic Analysis & Type Systems",
      "description": "Symbol tables, Type checking, Hindley-Milner type inference, Lifetime borrow checking, and AST transformations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t1",
      "label": "Symbol Table Architecture & Scoping",
      "description": "Data structures storing identifier declarations, types, and scoping boundaries.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t1_s1",
      "label": "Scoped Symbol Table Hash Map Chains",
      "description": "Hierarchical scope stacks linking local scopes to parent global scopes.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t1_s1_d1",
      "label": "Parent Scope Pointer Chaining",
      "description": "Searching current scope map first, then traversing parent pointers up to global scope.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t1_s1_d2",
      "label": "Scope Enter & Exit Stack Operations",
      "description": "Pushing new scope maps when entering code blocks ({}) and popping on exit.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t1_s2",
      "label": "Shadowing & Variable Re-declaration Auditing",
      "description": "Handling identifier re-declarations in nested inner scopes.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t1_s2_d1",
      "label": "Inner Scope Shadowing Authorization",
      "description": "Allowing inner variable declarations to mask identical outer variable names.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t1_s2_d2",
      "label": "Same-Scope Re-declaration Rejection",
      "description": "Triggering compiler errors when variables are re-declared within identical scope blocks.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t1_s3",
      "label": "Symbol Metadata Encoding (Type, Mutability, Storage Class)",
      "description": "Storing attributes associated with declared symbols.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t1_s3_d1",
      "label": "Type Signature Binding",
      "description": "Binding concrete type definitions to variable and function identifiers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t1_s3_d2",
      "label": "Mutability & Lifetime Attribute Flags",
      "description": "Tracking const/mut qualifiers and static/stack storage classes.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t1_s4",
      "label": "Forward Declaration & Multi-Pass Symbol Resolution",
      "description": "Resolving identifiers declared after their usage sites in source code.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t1_s4_d1",
      "label": "Pass 1 (Collect All Top-Level Declarations)",
      "description": "Populating global symbol tables with class and function signatures before checking function bodies.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t1_s4_d2",
      "label": "Pass 2 (Body Semantic & Type Verification)",
      "description": "Checking expression statement semantics using fully populated symbol tables.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t1_s5",
      "label": "Namespace & Module Import Symbol Aliasing",
      "description": "Managing identifier visibility across multi-file module boundaries.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t1_s5_d1",
      "label": "Qualified Name Resolution (Namespace::Symbol)",
      "description": "Resolving symbols within explicit module namespace boundaries.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t1_s5_d2",
      "label": "Export Symbol Table Serialization",
      "description": "Exporting public interface symbol tables for separate compilation units.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t2",
      "label": "Type Checking & Type Systems",
      "description": "Enforcing type safety rules and verifying expression type correctness.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t2_s1",
      "label": "Static vs Dynamic Type Checking Execution",
      "description": "Verifying type correctness at compile time vs runtime.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t2_s1_d1",
      "label": "Static Type Equivalence Verification",
      "description": "Rejecting invalid type operations during compilation prior to code execution.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t2_s1_d2",
      "label": "Dynamic Type Tag Inspection",
      "description": "Inspecting runtime type tags on values before executing operations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t2_s2",
      "label": "Nominal vs Structural Type Systems",
      "description": "Determining type compatibility based on explicit names vs structure.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t2_s2_d1",
      "label": "Nominal Type System (Java / C++)",
      "description": "Requiring explicit named class inheritance or interface implementations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t2_s2_d2",
      "label": "Structural Type System (TypeScript / Go Interfaces)",
      "description": "Verifying type compatibility based on matching property and method signatures.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t2_s3",
      "label": "Type Coercion & Implicit Casting Rules",
      "description": "Inserting automatic type conversions between compatible types.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t2_s3_d1",
      "label": "Widening Primitive Conversions (int32 -> int64 -> float64)",
      "description": "Promoting narrower numerical types to wider types without precision loss.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t2_s3_d2",
      "label": "Explicit Type Cast AST Node Injection",
      "description": "Injecting Cast AST nodes into expression trees to formalize implicit conversions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t2_s4",
      "label": "Subtyping & Variance (Covariance, Contravariance, Invariance)",
      "description": "Type safety rules for generic container types and function subtyping.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t2_s4_d1",
      "label": "Covariant Return Types (Subtype Out)",
      "description": "Allowing overridden methods to return subtype instances.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t2_s4_d2",
      "label": "Contravariant Parameter Types (Supertype In)",
      "description": "Allowing function arguments to accept broader supertype parameters.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t2_s5",
      "label": "Soundness & Completeness in Type Systems",
      "description": "Theoretical properties of type checkers guaranteeing absence of runtime type errors.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t2_s5_d1",
      "label": "Type Soundness Theorem (\"Well-Typed Programs Cannot Go Wrong\")",
      "description": "Proving that type-checked programs will never execute undefined type operations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t2_s5_d2",
      "label": "Escape Hatches (Unsafe Blocks / Type Asserts)",
      "description": "Bypassing strict type checking via explicit unsafe compiler directives.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t3",
      "label": "Hindley-Milner Type Inference Algorithm (Algorithm W)",
      "description": "Deducing most general types automatically without explicit type annotations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t3_s1",
      "label": "Type Variables & Un-Typed AST Node Annotation",
      "description": "Assigning fresh type variables alpha, beta to un-annotated AST nodes.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t3_s1_d1",
      "label": "Fresh Type Variable Generation",
      "description": "Instantiating unique placeholder type variables for all expression nodes.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t3_s1_d2",
      "label": "Constraint System Generation",
      "description": "Generating equality constraints between type variables based on AST operations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t3_s2",
      "label": "Robinson's Unification Algorithm",
      "description": "Solving systems of type equations by finding Most General Unifiers (MGU).",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t3_s2_d1",
      "label": "Type Term Matching Rules",
      "description": "Unifying concrete types T1 with type variables alpha by substituting alpha := T1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t3_s2_d2",
      "label": "Occurs Check Safety Constraint",
      "description": "Failing unification if type variable alpha appears inside term T1 (preventing infinite recursive types alpha = List[alpha]).",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t3_s3",
      "label": "Substitution Composition & Environment Updates",
      "description": "Accumulating type substitutions and applying them across environment assumptions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t3_s3_d1",
      "label": "Substitution List Application S(T)",
      "description": "Replacing type variables iteratively with unified concrete types.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t3_s3_d2",
      "label": "Principal Type Scheme Extraction",
      "description": "Deducing most general polymorphic type signatures (forall a. a -> a).",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t3_s4",
      "label": "Let-Polymorphism & Type Generalization",
      "description": "Generalizing type variables into polymorphic quantifiers at let-bindings.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t3_s4_d1",
      "label": "Generalizing Free Type Variables (gen(Env, T))",
      "description": "Converting type variables not bound in current environment into universal quantifiers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t3_s4_d2",
      "label": "Polymorphic Instantiation at Usage Sites",
      "description": "Replacing quantified type variables with fresh type variables upon function invocation.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t3_s5",
      "label": "Hindley-Milner Implementation in Haskell / OCaml",
      "description": "Production type inference engines achieving complete type reconstruction without type annotations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t3_s5_d1",
      "label": "Decidability and Linear Time Performance",
      "description": "Inferring types efficiently in near-linear time for practical codebases.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t3_s5_d2",
      "label": "Complex Error Reporting Challenges",
      "description": "Managing distant unification failures that produce confusing error messages.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t4",
      "label": "Rust Lifetime & Borrow Checking Mechanics",
      "description": "Compile-time memory safety analysis enforcing ownership and borrowing rules without garbage collection.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t4_s1",
      "label": "Ownership & Move Semantics Rules",
      "description": "Enforcing single owner rule for every value in memory.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t4_s1_d1",
      "label": "Value Move Transfer on Assignment",
      "description": "Invalidating source variables when values are moved to new owners.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t4_s1_d2",
      "label": "Drop Trait Auto-Destruction",
      "description": "Injecting automatic memory cleanup calls when owner variables exit scope.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t4_s2",
      "label": "Aliasing XOR Mutability Invariant",
      "description": "Enforcing either N immutable references (&T) OR exactly 1 mutable reference (&mut T) at any time.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t4_s2_d1",
      "label": "Data Race Prevention at Compile Time",
      "description": "Guaranteeing complete absence of concurrent data races by blocking multi-writer aliasing.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t4_s2_d2",
      "label": "Reference Invalidation Audits",
      "description": "Rejecting attempts to mutate data while immutable references are active.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t4_s3",
      "label": "Lifetime Parameter Annotation ('a)",
      "description": "Expressing reference validity regions in function signatures.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t4_s3_d1",
      "label": "Sub-Lifting Lifetime Inclusion ('a: 'b)",
      "description": "Enforcing requirement that lifetime 'a must outlive lifetime 'b.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t4_s3_d2",
      "label": "Lifetime Elision Rules in Signatures",
      "description": "Applying automatic compiler rules to elide explicit lifetime annotations in common functions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t4_s4",
      "label": "Non-Lexical Lifetimes (NLL / Polonius Engine)",
      "description": "Analyzing reference lifetimes based on Control Flow Graph (CFG) execution paths rather than lexical blocks.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t4_s4_d1",
      "label": "Point-Based Lifetime Regions in CFG",
      "description": "Ending reference lifetimes at actual last-use points rather than block closing braces.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t4_s4_d2",
      "label": "Reducing False-Positive Borrow Checker Errors",
      "description": "Allowing valid code patterns previously rejected by strict lexical borrow checkers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t4_s5",
      "label": "Interior Mutability Escape Hatches (Cell / RefCell / Mutex)",
      "description": "Bypassing compile-time borrow rules using runtime safety checks.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t4_s5_d1",
      "label": "RefCell Dynamic Borrow Panic Checks",
      "description": "Enforcing borrowing rules at runtime via panic checks on borrow() / borrow_mut().",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t4_s5_d2",
      "label": "Unsafe Block Raw Pointer Dereferencing (*const T, *mut T)",
      "description": "Disabling borrow checker safety rules inside explicit unsafe blocks.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t5",
      "label": "Semantic Analysis & Type Systems Topic 5",
      "description": "Detailed first-principles mechanics for Semantic Analysis & Type Systems topic 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t5_s1",
      "label": "Semantic Analysis & Type Systems Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Semantic Analysis & Type Systems Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t5_s1_d1",
      "label": "Semantic Analysis & Type Systems Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Semantic Analysis & Type Systems Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t5_s1_d2",
      "label": "Semantic Analysis & Type Systems Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Semantic Analysis & Type Systems Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t5_s2",
      "label": "Semantic Analysis & Type Systems Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Semantic Analysis & Type Systems Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t5_s2_d1",
      "label": "Semantic Analysis & Type Systems Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Semantic Analysis & Type Systems Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t5_s2_d2",
      "label": "Semantic Analysis & Type Systems Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Semantic Analysis & Type Systems Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t5_s3",
      "label": "Semantic Analysis & Type Systems Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Semantic Analysis & Type Systems Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t5_s3_d1",
      "label": "Semantic Analysis & Type Systems Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Semantic Analysis & Type Systems Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t5_s3_d2",
      "label": "Semantic Analysis & Type Systems Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Semantic Analysis & Type Systems Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t5_s4",
      "label": "Semantic Analysis & Type Systems Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Semantic Analysis & Type Systems Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t5_s4_d1",
      "label": "Semantic Analysis & Type Systems Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Semantic Analysis & Type Systems Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t5_s4_d2",
      "label": "Semantic Analysis & Type Systems Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Semantic Analysis & Type Systems Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t5_s5",
      "label": "Semantic Analysis & Type Systems Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Semantic Analysis & Type Systems Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t5_s5_d1",
      "label": "Semantic Analysis & Type Systems Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Semantic Analysis & Type Systems Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t5_s5_d2",
      "label": "Semantic Analysis & Type Systems Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Semantic Analysis & Type Systems Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t6",
      "label": "Semantic Analysis & Type Systems Topic 6",
      "description": "Detailed first-principles mechanics for Semantic Analysis & Type Systems topic 6.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t6_s1",
      "label": "Semantic Analysis & Type Systems Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Semantic Analysis & Type Systems Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t6_s1_d1",
      "label": "Semantic Analysis & Type Systems Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Semantic Analysis & Type Systems Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t6_s1_d2",
      "label": "Semantic Analysis & Type Systems Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Semantic Analysis & Type Systems Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t6_s2",
      "label": "Semantic Analysis & Type Systems Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Semantic Analysis & Type Systems Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t6_s2_d1",
      "label": "Semantic Analysis & Type Systems Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Semantic Analysis & Type Systems Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t6_s2_d2",
      "label": "Semantic Analysis & Type Systems Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Semantic Analysis & Type Systems Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t6_s3",
      "label": "Semantic Analysis & Type Systems Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Semantic Analysis & Type Systems Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t6_s3_d1",
      "label": "Semantic Analysis & Type Systems Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Semantic Analysis & Type Systems Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t6_s3_d2",
      "label": "Semantic Analysis & Type Systems Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Semantic Analysis & Type Systems Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t6_s4",
      "label": "Semantic Analysis & Type Systems Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Semantic Analysis & Type Systems Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t6_s4_d1",
      "label": "Semantic Analysis & Type Systems Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Semantic Analysis & Type Systems Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t6_s4_d2",
      "label": "Semantic Analysis & Type Systems Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Semantic Analysis & Type Systems Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t6_s5",
      "label": "Semantic Analysis & Type Systems Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Semantic Analysis & Type Systems Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t6_s5_d1",
      "label": "Semantic Analysis & Type Systems Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Semantic Analysis & Type Systems Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p2_t6_s5_d2",
      "label": "Semantic Analysis & Type Systems Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Semantic Analysis & Type Systems Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3",
      "label": "Intermediate Representation (IR) & Control Flow",
      "description": "Static Single Assignment (SSA) form, Control Flow Graphs (CFG), Dominator trees, and LLVM IR quadruples.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t1",
      "label": "Static Single Assignment (SSA) Form",
      "description": "IR property where every variable is assigned exactly once and every variable use is defined.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t1_s1",
      "label": "Versioned Variable Assignment (x_1, x_2, x_3)",
      "description": "Renaming variable assignments to generate unique SSA names.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t1_s1_d1",
      "label": "Simplifying Dataflow Analysis",
      "description": "Explicitly linking variable uses directly to single definition sites.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t1_s1_d2",
      "label": "Eliminating False Data Dependencies (Anti & Output Dependencies)",
      "description": "Removing Write-After-Read (WAR) and Write-After-Write (WAW) hazards.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t1_s2",
      "label": "Phi (phi) Node Function Insertion",
      "description": "Merging variable versions originating from distinct converging control flow paths.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t1_s2_d1",
      "label": "Control Flow Convergence Selection (x_3 = phi(x_1, x_2))",
      "description": "Selecting variable version based on preceding control flow block.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t1_s2_d2",
      "label": "Minimal SSA Form Phi Placement Rules",
      "description": "Inserting phi functions strictly at iterated dominance frontiers to minimize IR size.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t1_s3",
      "label": "Dominator Trees & Dominance Frontiers",
      "description": "Graph algorithms computing dominance relationships across basic blocks.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t1_s3_d1",
      "label": "Dominance Condition (Node A Dominates B: A -> B)",
      "description": "Node A dominates B if every path from entry to B must pass through A.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t1_s3_d2",
      "label": "Dominance Frontier DF(A)",
      "description": "Set of nodes Y where A dominates a predecessor of Y, but does not strictly dominate Y itself.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t1_s4",
      "label": "Cytron et al. SSA Construction Algorithm",
      "description": "Classic algorithm computing dominance frontiers and placing phi functions in O(N^2) or linear time.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t1_s4_d1",
      "label": "Lengauer-Tarjan Dominator Tree Algorithm",
      "description": "Computing immediate dominators efficiently using disjoint-set evaluation.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t1_s4_d2",
      "label": "Variable Renaming Stack Traversal",
      "description": "Traversing dominator trees to rename variables and populate phi arguments.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t1_s5",
      "label": "De-SSA / Destruction Phase (SSA -> Machine Assembly)",
      "description": "Eliminating phi functions prior to native code generation.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t1_s5_d1",
      "label": "Phi Node Register Copy Emission",
      "description": "Replacing phi nodes with explicit copy instructions in predecessor basic blocks.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t1_s5_d2",
      "label": "Critical Edge Splitting & Lost Copy Prevention",
      "description": "Splitting control flow edges to prevent copy instruction placement conflicts.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t2",
      "label": "Control Flow Graphs (CFG) & Basic Blocks",
      "description": "Directed graph representation of program execution paths.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t2_s1",
      "label": "Basic Block Construction Principles",
      "description": "Partitioning linear instruction sequences into maximal basic blocks.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t2_s1_d1",
      "label": "Single Entry, Single Exit Invariant",
      "description": "Guaranteeing execution enters strictly at first instruction and leaves at last.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t2_s1_d2",
      "label": "Leader Instruction Identification",
      "description": "Identifying basic block entry leaders (entry point, branch targets, instructions after branches).",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t2_s2",
      "label": "CFG Edge Types (Fall-Through, Conditional, Loop Back)",
      "description": "Connecting basic blocks with directed control flow edges.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t2_s2_d1",
      "label": "Conditional Branch Dual Edges (True/False Branches)",
      "description": "Branching to target blocks based on condition evaluation.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t2_s2_d2",
      "label": "Loop Back Edges & Header Identification",
      "description": "Identifying tail-to-header back-edges defining natural program loops.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t2_s3",
      "label": "Natural Loops & Strongly Connected Components (SCC)",
      "description": "Detecting loop structures in CFGs using Tarjan's algorithm.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t2_s3_d1",
      "label": "Single Loop Header Entry Condition",
      "description": "Defining natural loops as subgraphs with single entry headers dominating all loop nodes.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t2_s3_d2",
      "label": "Loop Pre-Header Basic Block Insertion",
      "description": "Injecting pre-header blocks to host loop-invariant code motion optimizations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t2_s4",
      "label": "Irreducible Control Flow Detection",
      "description": "Handling unstructured jump graphs containing multiple loop entry points.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t2_s4_d1",
      "label": "Multi-Entry Loop Hazards (goto Into Loop Bodies)",
      "description": "Detecting CFGs where natural loop dominator properties fail.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t2_s4_d2",
      "label": "Node Splitting Transformation",
      "description": "Duplicating basic blocks to transform irreducible CFGs into reducible graphs.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t2_s5",
      "label": "CFG Pruning & Dead Block Elimination",
      "description": "Removing unreachable basic blocks from control flow graphs.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t2_s5_d1",
      "label": "Unreachable Node Reachability Sweeps",
      "description": "Traversing CFG from entry node to identify un-visited blocks.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t2_s5_d2",
      "label": "Branch Folding (Constant Condition Propagation)",
      "description": "Replacing conditional branches with unconditional jumps when conditions evaluate to constants.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t3",
      "label": "LLVM IR Architecture & Quadruples",
      "description": "Universal strongly-typed intermediate representation engine underpinning LLVM compilers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t3_s1",
      "label": "LLVM IR Three Formats (In-Memory, Bitcode, Textual .ll)",
      "description": "Three equivalent representations of LLVM IR.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t3_s1_d1",
      "label": "Textual Assembly (.ll Files)",
      "description": "Human-readable typed assembly syntax used for debugging compiler passes.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t3_s1_d2",
      "label": "Binary Bitcode (.bc Files)",
      "description": "Compact bitcode representation for fast disk I/O and link-time optimization.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t3_s2",
      "label": "LLVM Strongly-Typed Instruction Set",
      "description": "Explicit typing on every IR instruction value (i32, float, i8*).",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t3_s2_d1",
      "label": "Infinite Virtual Register Set (%1, %2, %x)",
      "description": "Assuming unlimited SSA virtual registers to decouple code generation from target hardware limits.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t3_s2_d2",
      "label": "Explicit Memory Load/Store Instructions (load, store, getelementptr)",
      "description": "Enforcing strict separation between register values and memory pointers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t3_s3",
      "label": "GetElementPtr (GEP) Address Arithmetic Math",
      "description": "Calculating memory struct and array element offset pointers safely.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t3_s3_d1",
      "label": "GEP Index Computation Formula",
      "description": "Calculating byte offsets based on target struct layout types without hardcoded pointer math.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t3_s3_d2",
      "label": "Inbounds Keyword Constraints",
      "description": "Informing optimizers that GEP calculations remain within allocated memory bounds.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t3_s4",
      "label": "LLVM Pass Manager Architecture (Legacy vs New Pass Manager)",
      "description": "Orchestrating transformation and analysis passes over IR modules, functions, and loops.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t3_s4_d1",
      "label": "Analysis Pass Dependency Preservation",
      "description": "Caching analysis results (Dominator Tree, Loop Info) until invalidated by transformation passes.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t3_s4_d2",
      "label": "Pipeline Pass Scheduling (O1, O2, O3, Oz)",
      "description": "Ordering optimization passes to maximize code quality and speed.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t3_s5",
      "label": "LLVM Intrinsic Functions (&llvm.memcpy, &llvm.lifetime)",
      "description": "Special target-aware built-in instructions embedded directly in IR.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t3_s5_d1",
      "label": "Target-Specific Assembly Expansion",
      "description": "Lowering intrinsics into optimal native CPU instructions (e.g. SIMD vectors).",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t3_s5_d2",
      "label": "Memory Lifetime Scoping Hints (lifetime.start / lifetime.end)",
      "description": "Informing stack allocators when local variable stack space can be safely re-used.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t4",
      "label": "High-Level vs Low-Level IR Multi-Tier Pipelines",
      "description": "Using multiple intermediate representation tiers during compiler compilation.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t4_s1",
      "label": "High-Level AST-Like IR (Rust HIR / Swift SIL)",
      "description": "Preserving source-language semantics for high-level type checking and borrowing rules.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t4_s1_d1",
      "label": "High-Level Language Semantics Retention",
      "description": "Retaining pattern matching, closures, and async constructs in IR.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t4_s1_d2",
      "label": "Domain-Specific Safety Auditing",
      "description": "Executing borrow checking and lifetime analysis before lowering to generic IR.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t4_s2",
      "label": "Mid-Level Optimizer IR (Rust MIR / MLIR)",
      "description": "Simplified control flow IR optimized for domain-specific transformations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t4_s2_d1",
      "label": "MLIR (Multi-Level Intermediate Representation Framework)",
      "description": "Building modular extensible IR dialects for AI, GPU, and quantum compilers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t4_s2_d2",
      "label": "Dialect Lowering Pipelines (e.g. Linalg -> Vector -> LLVM)",
      "description": "Lowering high-level tensor operations step-by-step to low-level target IR.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t4_s3",
      "label": "Low-Level Machine IR (LLVM SelectionDAG / GlobalISel)",
      "description": "Target-dependent IR representing physical hardware instructions and registers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t4_s3_d1",
      "label": "Instruction Selection (Target Node Lowering)",
      "description": "Mapping target-agnostic IR nodes to physical target assembly instructions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t4_s3_d2",
      "label": "Physical Register Assignment Preparation",
      "description": "Lowering virtual registers to target machine instruction constraints.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t4_s4",
      "label": "Tree-Based vs Linear 3-Address Code (3AC) Quadruples",
      "description": "Comparing structural AST representations against linear instruction tuples.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t4_s4_d1",
      "label": "3-Address Code Format (result := arg1 op arg2)",
      "description": "Representing complex expressions as linear sequences of simple binary operations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t4_s4_d2",
      "label": "Quadruples (op, arg1, arg2, result) vs Triples",
      "description": "Structuring fixed-size 4-field tuples for fast compiler array manipulation.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t4_s5",
      "label": "CPS (Continuation-Passing Style) IR for Functional Languages",
      "description": "IR representation where every function takes an explicit continuation argument.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t4_s5_d1",
      "label": "Eliminating Explicit Call Stacks",
      "description": "Converting all function returns into tail-call continuation invocations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t4_s5_d2",
      "label": "First-Class Control Flow Abstractions (Async/Await, Call/CC)",
      "description": "Implementing coroutines and continuations seamlessly via CPS transformations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t5",
      "label": "Intermediate Representation (IR) & Control Flow Topic 5",
      "description": "Detailed first-principles mechanics for Intermediate Representation (IR) & Control Flow topic 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t5_s1",
      "label": "Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Intermediate Representation (IR) & Control Flow Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t5_s1_d1",
      "label": "Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t5_s1_d2",
      "label": "Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t5_s2",
      "label": "Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Intermediate Representation (IR) & Control Flow Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t5_s2_d1",
      "label": "Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t5_s2_d2",
      "label": "Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t5_s3",
      "label": "Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Intermediate Representation (IR) & Control Flow Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t5_s3_d1",
      "label": "Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t5_s3_d2",
      "label": "Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t5_s4",
      "label": "Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Intermediate Representation (IR) & Control Flow Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t5_s4_d1",
      "label": "Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t5_s4_d2",
      "label": "Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t5_s5",
      "label": "Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Intermediate Representation (IR) & Control Flow Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t5_s5_d1",
      "label": "Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t5_s5_d2",
      "label": "Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Intermediate Representation (IR) & Control Flow Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t6",
      "label": "Intermediate Representation (IR) & Control Flow Topic 6",
      "description": "Detailed first-principles mechanics for Intermediate Representation (IR) & Control Flow topic 6.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t6_s1",
      "label": "Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Intermediate Representation (IR) & Control Flow Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t6_s1_d1",
      "label": "Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t6_s1_d2",
      "label": "Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t6_s2",
      "label": "Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Intermediate Representation (IR) & Control Flow Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t6_s2_d1",
      "label": "Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t6_s2_d2",
      "label": "Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t6_s3",
      "label": "Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Intermediate Representation (IR) & Control Flow Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t6_s3_d1",
      "label": "Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t6_s3_d2",
      "label": "Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t6_s4",
      "label": "Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Intermediate Representation (IR) & Control Flow Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t6_s4_d1",
      "label": "Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t6_s4_d2",
      "label": "Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t6_s5",
      "label": "Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Intermediate Representation (IR) & Control Flow Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t6_s5_d1",
      "label": "Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p3_t6_s5_d2",
      "label": "Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Intermediate Representation (IR) & Control Flow Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4",
      "label": "Compiler Optimization Passes",
      "description": "Dead Code Elimination (DCE), Common Subexpression Elimination (CSE), Loop Vectorization, and Inlining.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t1",
      "label": "Dead Code & Dead Store Elimination (DCE / DSE)",
      "description": "Identifying and removing instructions whose outputs do not affect program behavior.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t1_s1",
      "label": "Liveness Analysis & Dead Instruction Pruning",
      "description": "Backward dataflow analysis calculating live variable sets at every basic block.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t1_s1_d1",
      "label": "Live Variable Backward Dataflow Equations",
      "description": "Computing LiveIn[B] = Use[B] U (LiveOut[B] - Def[B]).",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t1_s1_d2",
      "label": "Removing Un-Used Instructions (Zero Side-Effects)",
      "description": "Deleting instructions whose destination variables are absent from LiveOut sets.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t1_s2",
      "label": "Dead Store Elimination (DSE)",
      "description": "Removing memory store operations overwritten prior to subsequent reads.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t1_s2_d1",
      "label": "Redundant Store Sequence Detection",
      "description": "Identifying consecutive stores to identical memory addresses without intervening reads.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t1_s2_d2",
      "label": "Aliasing Analysis Dependency Checks",
      "description": "Verifying pointer aliasing to ensure stores are safely dead before removal.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t1_s3",
      "label": "Aggressive Dead Code Elimination (ADCE)",
      "description": "Assuming all instructions are dead until proven required for observable program control flow.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t1_s3_d1",
      "label": "Control-Dependence Graph Worklist Sweep",
      "description": "Marking essential side-effect instructions (I/O, returns) and recursively marking their dependencies.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t1_s3_d2",
      "label": "Sweeping Un-Marked Code Paths",
      "description": "Deleting all un-marked basic blocks and instructions in a single pass.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t1_s4",
      "label": "Unreachable Code Elimination",
      "description": "Removing basic blocks disconnected from the control flow graph entry node.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t1_s4_d1",
      "label": "CFG Reachability Traversal",
      "description": "Traversing control flow graphs to locate orphan basic blocks.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t1_s4_d2",
      "label": "Pruning Conditional Jumps with Constant Predicates",
      "description": "Converting conditional branches to single unconditional jumps when conditions evaluate to constants.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t1_s5",
      "label": "Side-Effect Verification Safeguards",
      "description": "Preventing illegal removal of instructions modifying global memory or throwing exceptions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t1_s5_d1",
      "label": "Volatile & Atomic Memory Access Protection",
      "description": "Preserving volatile pointer reads and atomic memory synchronization operations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t1_s5_d2",
      "label": "Exception Throwing Instruction Safeguards",
      "description": "Retaining operations that may raise CPU arithmetic traps (e.g. division by zero).",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t2",
      "label": "Common Subexpression Elimination (CSE) & GVN",
      "description": "Detecting and removing redundant identical mathematical computations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t2_s1",
      "label": "Local Common Subexpression Elimination (Within Basic Block)",
      "description": "Scanning single basic blocks to re-use pre-computed expression values.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t2_s1_d1",
      "label": "Value Table Hash Mapping",
      "description": "Hashing expression tuples (op, arg1, arg2) to discover identical computations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t2_s1_d2",
      "label": "Replacing Redundant Computations with Register Copies",
      "description": "Replacing redundant instructions with copies of previously computed virtual registers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t2_s2",
      "label": "Global Value Numbering (GVN)",
      "description": "Assigning unique numeric value numbers to equivalent expressions across full CFGs.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t2_s2_d1",
      "label": "Dominator Tree Traversal GVN",
      "description": "Propagating value numbers down dominator trees to detect global subexpression equivalence.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t2_s2_d2",
      "label": "Algebraic Identity Simplification (x + 0 -> x, x * 1 -> x)",
      "description": "Simplifying algebraic identities during value numbering passes.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t2_s3",
      "label": "Sparse Conditional Constant Propagation (SCCP)",
      "description": "Simultaneously propagating constants and evaluating conditional branches in single pass.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t2_s3_d1",
      "label": "Wegman-Zadeck Algorithm Mechanics",
      "description": "Combining constant propagation lattices with control flow worklists.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t2_s3_d2",
      "label": "Eliminating Un-Reachable Branch Computations",
      "description": "Proving branches unreachable to unlock deep subexpression eliminations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t2_s4",
      "label": "Partial Redundancy Elimination (PRE / Lazy Code Motion)",
      "description": "Moving computations to execution paths where expressions are not yet computed.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t2_s4_d1",
      "label": "Combining CSE and Loop Invariant Code Motion",
      "description": "Eliminating expressions that are partially redundant along specific control paths.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t2_s4_d2",
      "label": "Optimal Code Placement (Minimizing Register Pressure)",
      "description": "Placing inserted computations as late as possible to minimize register lifetimes.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t2_s5",
      "label": "Loop-Invariant Code Motion (LICM)",
      "description": "Hoisting invariant computations out of loop bodies into pre-header basic blocks.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t2_s5_d1",
      "label": "Loop Invariant Detection Criteria",
      "description": "Identifying instructions whose operands are constants or defined outside the loop.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t2_s5_d2",
      "label": "Safe Hoisting Conditions (Dominance & Side-Effects)",
      "description": "Verifying hoisted instructions dominate all loop exits or cannot raise exceptions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t3",
      "label": "Loop Optimizations & Auto-Vectorization",
      "description": "Transforming program loops to improve execution speed, cache locality, and SIMD parallelism.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t3_s1",
      "label": "Loop Unrolling & Unroll-and-Jam",
      "description": "Replicating loop bodies multiple times to reduce loop overhead and increase instruction-level parallelism.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t3_s1_d1",
      "label": "Unroll Factor Selection (e.g. Unroll 4x)",
      "description": "Replicating loop bodies 4 times while adjusting step sizes to reduce branch overhead.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t3_s1_d2",
      "label": "Handling Remainder Epilogue Loops",
      "description": "Generating epilogue loops to handle remaining iterations when counts are not multiples of unroll factors.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t3_s2",
      "label": "Loop Interchange & Cache Memory Locality",
      "description": "Swapping nested loop order to align array access patterns with physical cache lines.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t3_s2_d1",
      "label": "Row-Major vs Column-Major Access Alignment",
      "description": "Re-ordering nested loops so inner loops access contiguous memory locations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t3_s2_d2",
      "label": "Cache Miss Reduction (Eliminating Strided Access)",
      "description": "Reducing CPU cache misses by 90%+ through contiguous memory access.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t3_s3",
      "label": "Loop Fusion (Jamming) & Loop Fission (Splitting)",
      "description": "Combining adjacent loops or splitting complex loops into smaller sub-loops.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t3_s3_d1",
      "label": "Loop Fusion (Combining Loops with Identical Bounds)",
      "description": "Merging loops to increase data locality in CPU registers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t3_s3_d2",
      "label": "Loop Fission (Splitting Heavy Loops)",
      "description": "Breaking large loops into smaller loops to fit working sets inside L1 instruction caches.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t3_s4",
      "label": "SIMD Auto-Vectorization & Dependency Analysis",
      "description": "Transforming scalar loop operations into single-instruction multi-data (SIMD) vector instructions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t3_s4_d1",
      "label": "Loop-Carried Distance Vector Analysis",
      "description": "Verifying absence of backward data dependencies preventing parallel iteration execution.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t3_s4_d2",
      "label": "Vector Loop Generation (AVX-512 / ARM NEON)",
      "description": "Emitting vector instructions operating on 4, 8, or 16 elements simultaneously.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t3_s5",
      "label": "Polyhedral Loop Optimization Framework",
      "description": "Mathematical framework modeling nested loop iterations as integer polyhedra.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t3_s5_d1",
      "label": "Affine Transformation Matrices",
      "description": "Applying affine space-time transformations to optimize loop tiling and parallelization.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t3_s5_d2",
      "label": "Automatic Parallel GPU Kernel Generation",
      "description": "Transforming complex nested CPU loops into parallel CUDA/OpenCL GPU kernels.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t4",
      "label": "Function Inlining & Interprocedural Optimization (IPO)",
      "description": "Replacing function call sites directly with body code to eliminate call overhead and unlock secondary optimizations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t4_s1",
      "label": "Inlining Cost-Benefit Heuristic Models",
      "description": "Evaluating instruction size growth vs execution speed gains for candidate inlining functions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t4_s1_d1",
      "label": "Function Size Threshold Limits (Instruction Count Rules)",
      "description": "Inlining small functions (< 20 instructions) automatically while capping large function growth.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t4_s1_d2",
      "label": "Call Site Hotness Weighting (Profile-Guided Inlining)",
      "description": "Prioritizing inlining for hot call sites inside tight loops.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t4_s2",
      "label": "Call Overhead Elimination Benefits",
      "description": "Removing calling convention register saves, argument passing, and jump instructions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t4_s2_d1",
      "label": "Eliminating Stack Frame Setup (push/pop rbp)",
      "description": "Bypassing function stack frame creation overhead.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t4_s2_d2",
      "label": "Unlocking Secondary Contextual Optimizations",
      "description": "Enabling constant propagation and dead code elimination across caller-callee boundaries.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t4_s3",
      "label": "Code Bloat & Instruction Cache Penalties",
      "description": "Managing negative side-effects of over-aggressive function inlining.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t4_s3_d1",
      "label": "Instruction Cache (I-Cache) Thrashing",
      "description": "Exceeding L1 instruction cache capacities (32KB), causing severe performance drops.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t4_s3_d2",
      "label": "Binary Size Inflation",
      "description": "Increasing executable binary sizes significantly.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t4_s4",
      "label": "Link-Time Optimization (LTO / Whole-Program Optimization)",
      "description": "Executing interprocedural optimizations across independent source file boundaries during linking.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t4_s4_d1",
      "label": "Cross-Module Bitcode Linkage (ThinLTO)",
      "description": "Parsing and optimizing LLVM bitcode across all application modules simultaneously.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t4_s4_d2",
      "label": "Global Dead Function & VTable Pruning",
      "description": "Deleting un-referenced global functions and virtual table entries across full programs.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t4_s5",
      "label": "Profile-Guided Optimization (PGO / FDO)",
      "description": "Utilizing runtime execution profiles to guide compiler optimization decisions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t4_s5_d1",
      "label": "Instrumentation Build & Profile Generation",
      "description": "Compiling instrumented binaries to record branch probabilities and call counts during sample runs.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t4_s5_d2",
      "label": "Profile-Driven Code Layout & Branch Alignment",
      "description": "Re-ordering basic blocks so hot branches execute straight-through without jumps.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t5",
      "label": "Compiler Optimization Passes Topic 5",
      "description": "Detailed first-principles mechanics for Compiler Optimization Passes topic 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t5_s1",
      "label": "Compiler Optimization Passes Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Compiler Optimization Passes Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t5_s1_d1",
      "label": "Compiler Optimization Passes Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Compiler Optimization Passes Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t5_s1_d2",
      "label": "Compiler Optimization Passes Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Compiler Optimization Passes Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t5_s2",
      "label": "Compiler Optimization Passes Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Compiler Optimization Passes Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t5_s2_d1",
      "label": "Compiler Optimization Passes Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Compiler Optimization Passes Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t5_s2_d2",
      "label": "Compiler Optimization Passes Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Compiler Optimization Passes Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t5_s3",
      "label": "Compiler Optimization Passes Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Compiler Optimization Passes Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t5_s3_d1",
      "label": "Compiler Optimization Passes Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Compiler Optimization Passes Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t5_s3_d2",
      "label": "Compiler Optimization Passes Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Compiler Optimization Passes Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t5_s4",
      "label": "Compiler Optimization Passes Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Compiler Optimization Passes Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t5_s4_d1",
      "label": "Compiler Optimization Passes Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Compiler Optimization Passes Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t5_s4_d2",
      "label": "Compiler Optimization Passes Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Compiler Optimization Passes Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t5_s5",
      "label": "Compiler Optimization Passes Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Compiler Optimization Passes Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t5_s5_d1",
      "label": "Compiler Optimization Passes Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Compiler Optimization Passes Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t5_s5_d2",
      "label": "Compiler Optimization Passes Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Compiler Optimization Passes Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t6",
      "label": "Compiler Optimization Passes Topic 6",
      "description": "Detailed first-principles mechanics for Compiler Optimization Passes topic 6.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t6_s1",
      "label": "Compiler Optimization Passes Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Compiler Optimization Passes Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t6_s1_d1",
      "label": "Compiler Optimization Passes Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Compiler Optimization Passes Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t6_s1_d2",
      "label": "Compiler Optimization Passes Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Compiler Optimization Passes Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t6_s2",
      "label": "Compiler Optimization Passes Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Compiler Optimization Passes Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t6_s2_d1",
      "label": "Compiler Optimization Passes Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Compiler Optimization Passes Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t6_s2_d2",
      "label": "Compiler Optimization Passes Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Compiler Optimization Passes Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t6_s3",
      "label": "Compiler Optimization Passes Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Compiler Optimization Passes Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t6_s3_d1",
      "label": "Compiler Optimization Passes Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Compiler Optimization Passes Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t6_s3_d2",
      "label": "Compiler Optimization Passes Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Compiler Optimization Passes Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t6_s4",
      "label": "Compiler Optimization Passes Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Compiler Optimization Passes Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t6_s4_d1",
      "label": "Compiler Optimization Passes Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Compiler Optimization Passes Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t6_s4_d2",
      "label": "Compiler Optimization Passes Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Compiler Optimization Passes Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t6_s5",
      "label": "Compiler Optimization Passes Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Compiler Optimization Passes Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t6_s5_d1",
      "label": "Compiler Optimization Passes Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Compiler Optimization Passes Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p4_t6_s5_d2",
      "label": "Compiler Optimization Passes Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Compiler Optimization Passes Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5",
      "label": "Register Allocation & Code Generation",
      "description": "Chaitin-Briggs graph coloring register allocation, linear scan allocation, instruction selection, and machine code emission.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t1",
      "label": "Chaitin-Briggs Graph Coloring Register Allocation",
      "description": "Mapping an infinite set of virtual registers to a finite set of physical CPU registers using graph coloring.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t1_s1",
      "label": "Interference Graph Construction",
      "description": "Building undirected graphs where nodes represent virtual registers and edges represent simultaneous liveness.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t1_s1_d1",
      "label": "Liveness Interference Edges",
      "description": "Connecting virtual registers with edges if they are live at identical instruction points.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t1_s1_d2",
      "label": "K-Coloring Target (K = Physical Register Count)",
      "description": "Attempting to color interference graphs using K physical register colors.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t1_s2",
      "label": "Kempe's Heuristic & Simplification Phase",
      "description": "Iteratively removing nodes with degree < K from interference graphs.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t1_s2_d1",
      "label": "Degree < K Node Removal Stack Push",
      "description": "Pushing degree < K nodes onto evaluation stacks (guaranteed colorable upon restoration).",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t1_s2_d2",
      "label": "Graph Simplification Success",
      "description": "Reducing full interference graphs to empty sets when all nodes satisfy degree < K.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t1_s3",
      "label": "Spill Candidate Selection & Optimistic Coloring",
      "description": "Handling nodes where all remaining candidate nodes have degree >= K.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t1_s3_d1",
      "label": "Potential Spill Selection (Spill Heuristic Cost = Cost / Degree)",
      "description": "Selecting virtual registers with lowest spill cost to mark as potential spills.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t1_s3_d2",
      "label": "Optimistic Coloring Attempt (Briggs Modification)",
      "description": "Attempting to color potential spill nodes anyway during graph reconstruction.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t1_s4",
      "label": "Memory Spilling & Reload Instruction Injection",
      "description": "Allocating stack slots for virtual registers that fail graph coloring.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t1_s4_d1",
      "label": "Stack Frame Local Slot Allocation",
      "description": "Assigning memory stack offsets for spilled virtual registers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t1_s4_d2",
      "label": "Store Spill & Load Reload Code Injection",
      "description": "Injecting memory store instructions after definitions and load instructions before uses.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t1_s5",
      "label": "Register Coalescing (George / Parkheuristics)",
      "description": "Merging virtual registers connected by copy instructions (x := y) to eliminate copy operations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t1_s5_d1",
      "label": "Conservative Coalescing Criteria",
      "description": "Merging nodes only if resulting merged nodes do not introduce new spills.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t1_s5_d2",
      "label": "Eliminating Redundant Move Instructions",
      "description": "Removing move instructions (mov rax, rbx) when registers are coalesced.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t2",
      "label": "Linear Scan Register Allocation (Poletto & Sarkar)",
      "description": "Fast single-pass register allocation algorithm designed for JIT compilers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t2_s1",
      "label": "Linear Live Range Interval Sorting",
      "description": "Sorting virtual register live ranges by starting instruction index.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t2_s1_d1",
      "label": "Live Range Interval Format [start_idx, end_idx]",
      "description": "Computing contiguous interval ranges for all virtual registers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t2_s1_d2",
      "label": "Single-Pass Sorted Array Traversal",
      "description": "Scanning live range intervals in linear order without building complex interference graphs.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t2_s2",
      "label": "Active Register List Maintenance",
      "description": "Tracking currently allocated physical registers during scan traversal.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t2_s2_d1",
      "label": "Expired Interval Removal",
      "description": "Releasing physical registers when active intervals end before current start_idx.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t2_s2_d2",
      "label": "Assigning Available Free Registers",
      "description": "Assigning first available physical register color to newly active intervals.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t2_s3",
      "label": "Heuristic Spilling (Spill Longest Remaining Interval)",
      "description": "Selecting intervals to spill when all physical registers are actively occupied.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t2_s3_d1",
      "label": "End-Point Distance Comparison",
      "description": "Comparing current interval end point against active interval end points.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t2_s3_d2",
      "label": "Spilling Interval Extending Farthest into Future",
      "description": "Spilling interval that ends farthest in the future to maximize register availability.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t2_s4",
      "label": "O(N) Time Complexity JIT Advantage",
      "description": "Achieving sub-millisecond register allocation execution speed.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t2_s4_d1",
      "label": "10-100x Faster Execution than Graph Coloring",
      "description": "Allocating registers in near-linear time O(N) relative to variable count.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t2_s4_d2",
      "label": "Ideal Match for V8 / HotSpot JIT Compilers",
      "description": "Generating machine code rapidly during runtime JIT compilation.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t2_s5",
      "label": "Second-Chance Bin Packing Register Allocation",
      "description": "Advanced linear scan variant handling non-contiguous split live ranges.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t2_s5_d1",
      "label": "Live Range Splitting Around Heavy Loops",
      "description": "Splitting intervals to keep variables in registers inside loops and spilled outside.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t2_s5_d2",
      "label": "Approaching Graph Coloring Quality at JIT Speeds",
      "description": "Generating code within 5% of graph coloring performance.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t3",
      "label": "Instruction Selection & Tree Pattern Matching",
      "description": "Mapping intermediate representation (IR) nodes to target machine assembly instructions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t3_s1",
      "label": "Maximal Munch Algorithm (Tree Cover Parsing)",
      "description": "Top-down greedy algorithm matching largest target instruction patterns to IR subtrees.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t3_s1_d1",
      "label": "Target Machine Instruction Pattern Rule Books",
      "description": "Defining tree patterns corresponding to native hardware instructions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t3_s1_d2",
      "label": "Greedy Root-First Tree Coverage",
      "description": "Selecting largest matching instruction patterns starting at IR tree roots.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t3_s2",
      "label": "Dynamic Programming Instruction Selection (IBURG / BURG)",
      "description": "Finding provably minimum-cost instruction covers over IR trees.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t3_s2_d1",
      "label": "Bottom-Up Cost Annotation Pass",
      "description": "Computing minimum cost instruction covers for all subtrees using dynamic programming.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t3_s2_d2",
      "label": "Top-Down Target Code Generation Pass",
      "description": "Emitting optimal instruction sequences matching computed minimum costs.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t3_s3",
      "label": "Complex Addressing Mode Matching (x86 [base + index*scale + disp])",
      "description": "Matching multi-operation IR trees into single complex hardware addressing instructions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t3_s3_d1",
      "label": "Fusing Add, Multiply, and Load IR Nodes",
      "description": "Mapping (base + (index * 4) + 12) into single x86 [rbx + rci*4 + 12] instructions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t3_s3_d2",
      "label": "Reducing Instruction Count and Binary Size",
      "description": "Emitting compact high-efficiency native assembly.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t3_s4",
      "label": "LLVM SelectionDAG & GlobalISel Frameworks",
      "description": "LLVM target instruction selection engines.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t3_s4_d1",
      "label": "SelectionDAG Graph Lowering",
      "description": "Lowering LLVM IR to target DAG nodes and executing TableGen pattern matching.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t3_s4_d2",
      "label": "GlobalISel Fast Global Instruction Selection",
      "description": "Replacing SelectionDAG with faster linear IR instruction selection engine.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t3_s5",
      "label": "Target Architecture ISA Constraints (x86 vs ARM vs RISC-V)",
      "description": "Handling target-specific instruction set architecture rules.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t3_s5_d1",
      "label": "x86 Two-Address Code Constraints (dst = dst op src)",
      "description": "Injecting move instructions to handle 2-address instruction formats.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t3_s5_d2",
      "label": "RISC-V Three-Address Register File Simplicity",
      "description": "Mapping IR quadruples cleanly to 3-address RISC instructions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t4",
      "label": "Calling Conventions & Stack Frame Generation",
      "description": "Managing ABI calling conventions, stack frame layouts, and function prologues/epilogues.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t4_s1",
      "label": "System V AMD64 ABI Register Passing Conventions",
      "description": "Standard Linux/macOS x86-64 calling convention passing arguments in registers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t4_s1_d1",
      "label": "Argument Register Assignment Order (rdi, rsi, rdx, rcx, r8, r9)",
      "description": "Passing first 6 integer/pointer arguments in specific registers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t4_s1_d2",
      "label": "Floating Point Register Passing (xmm0 - xmm7)",
      "description": "Passing floating point arguments in dedicated SIMD registers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t4_s2",
      "label": "Caller-Saved (Scratch) vs Callee-Saved Registers",
      "description": "Rules determining which function is responsible for preserving register values across calls.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t4_s2_d1",
      "label": "Caller-Saved Registers (rax, rcx, rdx, r8-r11)",
      "description": "Requiring caller to save registers on stack before issuing call instructions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t4_s2_d2",
      "label": "Callee-Saved Registers (rbx, rsp, rbp, r12-r15)",
      "description": "Requiring called functions to preserve and restore register values before returning.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t4_s3",
      "label": "Stack Frame Layout & 16-Byte Alignment Rule",
      "description": "Structuring physical memory stack frames for local variables and saved registers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t4_s3_d1",
      "label": "16-Byte Stack Pointer Alignment Constraint",
      "description": "Enforcing 16-byte stack alignment prior to executing call instructions (required for SIMD instructions).",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t4_s3_d2",
      "label": "Frame Pointer (rbp) Chain Maintenance",
      "description": "Pushing old rbp and setting rbp = rsp to build stack frame trace chains.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t4_s4",
      "label": "Function Prologue & Epilogue Code Emission",
      "description": "Emitting machine assembly code entering and exiting function calls.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t4_s4_d1",
      "label": "Prologue Execution (push rbp; mov rbp, rsp; sub rsp, N)",
      "description": "Allocating local stack space and saving callee-saved registers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t4_s4_d2",
      "label": "Epilogue Execution (mov rsp, rbp; pop rbp; ret)",
      "description": "Restoring stack pointers and callee-saved registers before returning.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t4_s5",
      "label": "Zero-Overhead DWARF Exception Handling Tables (.eh_frame)",
      "description": "Generating out-of-band unwind tables for C++ exceptions without runtime execution penalty.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t4_s5_d1",
      "label": "CFI (Call Frame Information) Directives",
      "description": "Emitting .cfi_def_cfa and .cfi_offset directives to build stack unwinding tables.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t4_s5_d2",
      "label": "Zero Execution Penalty for Non-Throwing Code Paths",
      "description": "Incurring zero runtime overhead until exceptions are actually thrown.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t5",
      "label": "Register Allocation & Code Generation Topic 5",
      "description": "Detailed first-principles mechanics for Register Allocation & Code Generation topic 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t5_s1",
      "label": "Register Allocation & Code Generation Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Register Allocation & Code Generation Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t5_s1_d1",
      "label": "Register Allocation & Code Generation Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Register Allocation & Code Generation Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t5_s1_d2",
      "label": "Register Allocation & Code Generation Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Register Allocation & Code Generation Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t5_s2",
      "label": "Register Allocation & Code Generation Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Register Allocation & Code Generation Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t5_s2_d1",
      "label": "Register Allocation & Code Generation Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Register Allocation & Code Generation Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t5_s2_d2",
      "label": "Register Allocation & Code Generation Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Register Allocation & Code Generation Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t5_s3",
      "label": "Register Allocation & Code Generation Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Register Allocation & Code Generation Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t5_s3_d1",
      "label": "Register Allocation & Code Generation Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Register Allocation & Code Generation Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t5_s3_d2",
      "label": "Register Allocation & Code Generation Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Register Allocation & Code Generation Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t5_s4",
      "label": "Register Allocation & Code Generation Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Register Allocation & Code Generation Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t5_s4_d1",
      "label": "Register Allocation & Code Generation Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Register Allocation & Code Generation Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t5_s4_d2",
      "label": "Register Allocation & Code Generation Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Register Allocation & Code Generation Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t5_s5",
      "label": "Register Allocation & Code Generation Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Register Allocation & Code Generation Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t5_s5_d1",
      "label": "Register Allocation & Code Generation Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Register Allocation & Code Generation Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t5_s5_d2",
      "label": "Register Allocation & Code Generation Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Register Allocation & Code Generation Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t6",
      "label": "Register Allocation & Code Generation Topic 6",
      "description": "Detailed first-principles mechanics for Register Allocation & Code Generation topic 6.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t6_s1",
      "label": "Register Allocation & Code Generation Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Register Allocation & Code Generation Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t6_s1_d1",
      "label": "Register Allocation & Code Generation Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Register Allocation & Code Generation Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t6_s1_d2",
      "label": "Register Allocation & Code Generation Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Register Allocation & Code Generation Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t6_s2",
      "label": "Register Allocation & Code Generation Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Register Allocation & Code Generation Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t6_s2_d1",
      "label": "Register Allocation & Code Generation Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Register Allocation & Code Generation Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t6_s2_d2",
      "label": "Register Allocation & Code Generation Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Register Allocation & Code Generation Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t6_s3",
      "label": "Register Allocation & Code Generation Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Register Allocation & Code Generation Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t6_s3_d1",
      "label": "Register Allocation & Code Generation Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Register Allocation & Code Generation Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t6_s3_d2",
      "label": "Register Allocation & Code Generation Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Register Allocation & Code Generation Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t6_s4",
      "label": "Register Allocation & Code Generation Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Register Allocation & Code Generation Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t6_s4_d1",
      "label": "Register Allocation & Code Generation Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Register Allocation & Code Generation Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t6_s4_d2",
      "label": "Register Allocation & Code Generation Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Register Allocation & Code Generation Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t6_s5",
      "label": "Register Allocation & Code Generation Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Register Allocation & Code Generation Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t6_s5_d1",
      "label": "Register Allocation & Code Generation Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Register Allocation & Code Generation Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p5_t6_s5_d2",
      "label": "Register Allocation & Code Generation Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Register Allocation & Code Generation Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6",
      "label": "Garbage Collection & Memory Runtimes",
      "description": "Tracing GC Mark-Sweep/Mark-Compact, Generational GC, Reference counting with cycle collection, and Arena allocators.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t1",
      "label": "Tracing Garbage Collection (Mark-Sweep & Mark-Compact)",
      "description": "Automated memory management algorithms identifying live objects via root graph reachability.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t1_s1",
      "label": "Root Set Identification (Stack, Registers, Global Variables)",
      "description": "Starting garbage collection by identifying all direct pointers held in active execution contexts.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t1_s1_d1",
      "label": "Stack Frame Pointer Scanning",
      "description": "Scanning CPU registers and stack frames for object references.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t1_s1_d2",
      "label": "Global and Static Variable Pointer Auditing",
      "description": "Including all global module variables in initial root sets.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t1_s2",
      "label": "Tri-Color Graph Marking Algorithm (White, Grey, Black)",
      "description": "Classifying objects during graph traversal to manage concurrent marking states.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t1_s2_d1",
      "label": "White (Un-visited Candidate Dead), Grey (Visited Children Pending), Black (Visited Children Complete)",
      "description": "Traversing object graphs until grey set is empty.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t1_s2_d2",
      "label": "Write Barrier Safety Maintenance",
      "description": "Intercepting pointer writes during concurrent marking to prevent black objects from pointing to white objects unnoticed.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t1_s3",
      "label": "Sweep Phase & Free List Reconstruction",
      "description": "Scanning memory pages to add un-marked white objects back to free lists.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t1_s3_d1",
      "label": "Free List Page Reconstruction",
      "description": "Linking un-marked memory blocks into free list data structures.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t1_s3_d2",
      "label": "Destructor / Finalizer Execution",
      "description": "Invoking object finalizer hooks prior to memory release.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t1_s4",
      "label": "Compact Phase & Memory De-fragmentation",
      "description": "Relocating surviving objects into contiguous memory blocks to eliminate heap fragmentation.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t1_s4_d1",
      "label": "Two-Finger Compacting Algorithm",
      "description": "Relocating objects from high memory addresses to free low memory slots.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t1_s4_d2",
      "label": "Pointer Updating (Forwarding Addresses)",
      "description": "Updating all reference pointers to match new object addresses.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t1_s5",
      "label": "Stop-the-World (STW) Pause Minimization",
      "description": "Architectural techniques for reducing main application thread pause times.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t1_s5_d1",
      "label": "Incremental Marking Steps",
      "description": "Slicing marking work into short steps interleaved with application execution.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t1_s5_d2",
      "label": "Parallel & Concurrent Worker Threads",
      "description": "Utilizing background CPU cores to perform marking and sweeping in parallel.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t2",
      "label": "Generational Garbage Collection & Card Tables",
      "description": "Optimizing GC performance based on the empirical Weak Generational Hypothesis (most objects die young).",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t2_s1",
      "label": "Young Gen (Eden / Survivor) vs Old Gen Segmentation",
      "description": "Partitioning memory heaps into specialized generation zones.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t2_s1_d1",
      "label": "Eden Space Allocation & Fast Bump Allocation",
      "description": "Allocating new objects sequentially using fast bump pointers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t2_s1_d2",
      "label": "Survivor Space Copying (Tenuring Threshold)",
      "description": "Copying surviving objects between Survivor spaces before promoting to Old Gen.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t2_s2",
      "label": "Card Table & Remembered Set Architecture",
      "description": "Tracking old-to-young generation pointers without scanning full Old Generation heaps.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t2_s2_d1",
      "label": "Card Table Byte Array (1 Byte per 512 Bytes Heap)",
      "description": "Mapping memory regions to single card bytes.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t2_s2_d2",
      "label": "Dirty Card Marking via Write Barriers",
      "description": "Setting card bytes dirty when old generation objects are modified to point to young objects.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t2_s3",
      "label": "Minor GC (Scavenge) Fast Execution",
      "description": "Reclaiming young generation memory independently in sub-milliseconds.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t2_s3_d1",
      "label": "Scanning Root Set + Dirty Card Tables Only",
      "description": "Bypassing 99% of Old Generation memory scanning during minor GCs.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t2_s3_d2",
      "label": "High Memory Reclamation Rates (> 90% Yield)",
      "description": "Reclaiming vast majority of young memory in single quick passes.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t2_s4",
      "label": "Major Full GC (Old Gen Sweep & Compact)",
      "description": "Executing full heap collection when Old Generation memory fills.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t2_s4_d1",
      "label": "Infrequent Major GC Triggers",
      "description": "Running full collections only when promoted objects fill Old Space.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t2_s4_d2",
      "label": "Adaptive Tenuring Threshold Tuning",
      "description": "Adjusting promotion age thresholds based on object survival rates.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t2_s5",
      "label": "Java HotSpot G1 & ZGC Garbage Collectors",
      "description": "Modern low-latency enterprise garbage collectors.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t2_s5_d1",
      "label": "G1 Region-Based Garbage Collection",
      "description": "Partitioning heaps into thousands of equal regions and collecting regions with most garbage.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t2_s5_d2",
      "label": "ZGC Colored Pointers & Load Barriers (< 1ms Pauses)",
      "description": "Achieving sub-millisecond pause times across multi-terabyte heaps using 64-bit colored pointers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t3",
      "label": "Reference Counting & Cycle Collection",
      "description": "Immediate deterministic memory management tracking reference counts per object.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t3_s1",
      "label": "Reference Counter Increment / Decrement Mechanics",
      "description": "Updating object reference counters on assignment and scope exit.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t3_s1_d1",
      "label": "Immediate Deterministic Destruction (Count == 0)",
      "description": "De-allocating memory instantly when reference count drops to zero.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t3_s1_d2",
      "label": "Cascading Sub-Object Destruction",
      "description": "Recursively decrementing child reference counts upon parent destruction.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t3_s2",
      "label": "Cyclic Reference Memory Leak Hazard",
      "description": "Failure of naive reference counting when objects form self-referencing loops (A -> B -> A).",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t3_s2_d1",
      "label": "Orphaned Isolated Cycle Leaks",
      "description": "Leaving isolated cyclic graphs un-collected because reference counts never reach zero.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t3_s2_d2",
      "label": "Weak References (WeakRef / std::weak_ptr)",
      "description": "Breaking reference cycles using non-owning weak references.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t3_s3",
      "label": "Bacon-Rajan Trial Deletion Cycle Collection",
      "description": "Algorithm detecting and reclaiming unreachable reference-counted cycles in linear time.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t3_s3_d1",
      "label": "Purple Candidate Cycle Buffering",
      "description": "Buffering objects whose reference counts decrease but remain non-zero.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t3_s3_d2",
      "label": "Trial Deletion Marking & Restoration Sweeps",
      "description": "Simulating count decrements to isolate self-sustaining cyclic subgraphs.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t3_s4",
      "label": "Atomic Reference Counting Overhead (ARC in Swift/Rust)",
      "description": "Thread-safe reference counting using atomic CPU instructions (LOCK XADD).",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t3_s4_d1",
      "label": "Atomic Bus Locking Penalty",
      "description": "Incurring 10-50x higher instruction costs for thread-safe atomic counter updates.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t3_s4_d2",
      "label": "Non-Atomic Swift/Rust Optimizations (Rc vs Arc)",
      "description": "Using single-threaded non-atomic counters (Rc) when thread safety is un-needed.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t3_s5",
      "label": "Swift Automatic Reference Counting (ARC) Compiler Passes",
      "description": "Compiler-driven injection of retain and release calls during build compilation.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t3_s5_d1",
      "label": "Static Retain/Release Optimization Passes",
      "description": "Eliminating redundant retain/release pairs through static code analysis.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t3_s5_d2",
      "label": "Zero Runtime GC Thread Overhead",
      "description": "Achieving deterministic memory management without background GC threads.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t4",
      "label": "Memory Arenas & Custom Pool Allocators",
      "description": "High-performance memory allocation strategies bypassing general-purpose malloc/free.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t4_s1",
      "label": "Arena (Region-Based / Bump) Allocator Architecture",
      "description": "Allocating memory sequentially from large pre-allocated contiguous memory blocks.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t4_s1_d1",
      "label": "Sub-Nanosecond Bump Pointer Allocation (ptr += size)",
      "description": "Allocating memory in single pointer addition instructions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t4_s1_d2",
      "label": "Zero-Cost Mass De-allocation (ptr = start_ptr)",
      "description": "Freeing millions of allocated objects instantly by resetting arena pointers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t4_s2",
      "label": "Fixed-Size Block Pool Allocators",
      "description": "Managing free-lists of identical fixed-size memory chunks.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t4_s2_d1",
      "label": "Intra-Chunk Free-List Pointer Chaining",
      "description": "Embedding free-list pointers inside un-allocated memory blocks.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t4_s2_d2",
      "label": "Zero External Memory Fragmentation",
      "description": "Eliminating memory fragmentation for high-frequency fixed-size allocations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t4_s3",
      "label": "Slab Allocator Architecture (Linux Kernel / Memcached)",
      "description": "Caching initialized kernel object structures in dedicated slab pools.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t4_s3_d1",
      "label": "Object Constructor Pre-Initialization",
      "description": "Re-using pre-initialized object states to avoid repeated constructor calls.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t4_s3_d2",
      "label": "Slab Alignment to CPU Hardware Cache Lines",
      "description": "Aligning slab objects to 64-byte boundaries to maximize cache line hits.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t4_s4",
      "label": "General-Purpose Allocator Architecture (jemalloc / tcmalloc)",
      "description": "High-performance multi-threaded memory allocators.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t4_s4_d1",
      "label": "Thread-Local Caching (tcmalloc Thread Caches)",
      "description": "Allocating small objects from thread-local pools without acquiring global locks.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t4_s4_d2",
      "label": "Size-Class Binned Allocation Arenas",
      "description": "Binning allocations into discrete size classes (8, 16, 32, 64 bytes) to limit fragmentation.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t4_s5",
      "label": "Explicit Custom Memory Management in Game & Database Engines",
      "description": "Bypassing default OS allocators for deterministic low-latency performance.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t4_s5_d1",
      "label": "Per-Frame Temporary Arena Allocators",
      "description": "Resetting game frame memory arenas at the end of every render loop.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t4_s5_d2",
      "label": "Pre-Allocating Database Buffer Pool Arrays",
      "description": "Allocating gigabytes of RAM on startup to manage memory manually.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t5",
      "label": "Garbage Collection & Memory Runtimes Topic 5",
      "description": "Detailed first-principles mechanics for Garbage Collection & Memory Runtimes topic 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t5_s1",
      "label": "Garbage Collection & Memory Runtimes Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Garbage Collection & Memory Runtimes Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t5_s1_d1",
      "label": "Garbage Collection & Memory Runtimes Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Garbage Collection & Memory Runtimes Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t5_s1_d2",
      "label": "Garbage Collection & Memory Runtimes Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Garbage Collection & Memory Runtimes Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t5_s2",
      "label": "Garbage Collection & Memory Runtimes Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Garbage Collection & Memory Runtimes Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t5_s2_d1",
      "label": "Garbage Collection & Memory Runtimes Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Garbage Collection & Memory Runtimes Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t5_s2_d2",
      "label": "Garbage Collection & Memory Runtimes Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Garbage Collection & Memory Runtimes Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t5_s3",
      "label": "Garbage Collection & Memory Runtimes Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Garbage Collection & Memory Runtimes Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t5_s3_d1",
      "label": "Garbage Collection & Memory Runtimes Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Garbage Collection & Memory Runtimes Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t5_s3_d2",
      "label": "Garbage Collection & Memory Runtimes Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Garbage Collection & Memory Runtimes Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t5_s4",
      "label": "Garbage Collection & Memory Runtimes Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Garbage Collection & Memory Runtimes Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t5_s4_d1",
      "label": "Garbage Collection & Memory Runtimes Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Garbage Collection & Memory Runtimes Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t5_s4_d2",
      "label": "Garbage Collection & Memory Runtimes Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Garbage Collection & Memory Runtimes Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t5_s5",
      "label": "Garbage Collection & Memory Runtimes Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Garbage Collection & Memory Runtimes Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t5_s5_d1",
      "label": "Garbage Collection & Memory Runtimes Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Garbage Collection & Memory Runtimes Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t5_s5_d2",
      "label": "Garbage Collection & Memory Runtimes Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Garbage Collection & Memory Runtimes Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t6",
      "label": "Garbage Collection & Memory Runtimes Topic 6",
      "description": "Detailed first-principles mechanics for Garbage Collection & Memory Runtimes topic 6.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t6_s1",
      "label": "Garbage Collection & Memory Runtimes Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Garbage Collection & Memory Runtimes Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t6_s1_d1",
      "label": "Garbage Collection & Memory Runtimes Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Garbage Collection & Memory Runtimes Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t6_s1_d2",
      "label": "Garbage Collection & Memory Runtimes Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Garbage Collection & Memory Runtimes Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t6_s2",
      "label": "Garbage Collection & Memory Runtimes Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Garbage Collection & Memory Runtimes Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t6_s2_d1",
      "label": "Garbage Collection & Memory Runtimes Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Garbage Collection & Memory Runtimes Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t6_s2_d2",
      "label": "Garbage Collection & Memory Runtimes Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Garbage Collection & Memory Runtimes Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t6_s3",
      "label": "Garbage Collection & Memory Runtimes Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Garbage Collection & Memory Runtimes Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t6_s3_d1",
      "label": "Garbage Collection & Memory Runtimes Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Garbage Collection & Memory Runtimes Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t6_s3_d2",
      "label": "Garbage Collection & Memory Runtimes Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Garbage Collection & Memory Runtimes Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t6_s4",
      "label": "Garbage Collection & Memory Runtimes Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Garbage Collection & Memory Runtimes Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t6_s4_d1",
      "label": "Garbage Collection & Memory Runtimes Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Garbage Collection & Memory Runtimes Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t6_s4_d2",
      "label": "Garbage Collection & Memory Runtimes Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Garbage Collection & Memory Runtimes Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t6_s5",
      "label": "Garbage Collection & Memory Runtimes Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Garbage Collection & Memory Runtimes Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t6_s5_d1",
      "label": "Garbage Collection & Memory Runtimes Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Garbage Collection & Memory Runtimes Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p6_t6_s5_d2",
      "label": "Garbage Collection & Memory Runtimes Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Garbage Collection & Memory Runtimes Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7",
      "label": "Just-In-Time (JIT) Compilation & Runtimes",
      "description": "Tiered JIT compilation, On-Stack Replacement (OSR), Inline Caching, and dynamic binary translation.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t1",
      "label": "Tiered JIT Compilation Architecture",
      "description": "Multi-tier execution runtimes balancing fast startup speeds with peak optimized execution performance.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t1_s1",
      "label": "Tier 0: Interpreter / Baseline Compiler",
      "description": "Executing bytecode instantly with zero compilation delay.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t1_s1_d1",
      "label": "Zero Startup Delay Execution",
      "description": "Parsing and running code immediately upon load.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t1_s1_d2",
      "label": "Profiling Feedback Collection",
      "description": "Gathering execution counts and runtime type statistics.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t1_s2",
      "label": "Tier 1: Mid-Tier Fast JIT (V8 Maglev / Java C1 Client)",
      "description": "Compiling hot code quickly into basic machine assembly.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t1_s2_d1",
      "label": "Fast Non-Heavy Optimizing Compilation",
      "description": "Generating machine code 10x faster than full optimizing compilers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t1_s2_d2",
      "label": "Basic Loop & Type Optimizations",
      "description": "Applying lightweight optimizations for moderately hot functions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t1_s3",
      "label": "Tier 2: Optimizing JIT (V8 TurboFan / Java C2 Server / PyPy)",
      "description": "Heavy SSA-based optimizing compiler generating peak-efficiency machine code.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t1_s3_d1",
      "label": "Deep Speculative Optimization Passes",
      "description": "Applying inline caching, vectorization, and loop unrolling.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t1_s3_d2",
      "label": "High CPU Resource Consumption",
      "description": "Expending substantial background CPU time for maximum execution speed.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t1_s4",
      "label": "Execution Profiling Counters & Tier-Up Thresholds",
      "description": "Monitoring invocation counts to trigger tier compilation transitions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t1_s4_d1",
      "label": "Invocation & Backedge Counter Traps",
      "description": "Incrementing execution counters on function entry and loop back-edges.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t1_s4_d2",
      "label": "Asynchronous Background Compilation Requests",
      "description": "Dispatching JIT compilation tasks to background threads without blocking execution.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t1_s5",
      "label": "Java HotSpot JVM Tiered Compilation Flow",
      "description": "Production multi-tier JVM compilation pipeline (Interpreter -> C1 -> C2).",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t1_s5_d1",
      "label": "C1 Profiling Feedback Collection",
      "description": "Compiling code with C1 to collect high-speed execution profiles for C2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t1_s5_d2",
      "label": "Peak Execution Performance Stability",
      "description": "Achieving C++ equivalent execution speeds for long-running server applications.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t2",
      "label": "On-Stack Replacement (OSR)",
      "description": "Replacing un-optimized function stack frames with optimized machine code stack frames mid-execution during active loops.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t2_s1",
      "label": "Long-Running Loop Hot Spot Trigger",
      "description": "Detecting hot loops executing millions of iterations inside single function calls.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t2_s1_d1",
      "label": "Backedge Counter Threshold Exceeded",
      "description": "Triggering OSR when loop iteration counts cross hot thresholds.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t2_s1_d2",
      "label": "Bypassing Standard Function Entry Tier-Up",
      "description": "Upgrading active loop execution without waiting for function re-invocation.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t2_s2",
      "label": "Stack Frame Re-construction & Mapping",
      "description": "Translating interpreter stack frame variables into optimized machine code registers/stack slots.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t2_s2_d1",
      "label": "OSR Migration Entry Point (OSR Stub)",
      "description": "Generating special JIT entry points matching active loop state.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t2_s2_d2",
      "label": "Mapping Interpreter Local Variables to Machine Registers",
      "description": "Populating CPU registers with current local variable values.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t2_s3",
      "label": "Continuation Jump into Optimized Loop Body",
      "description": "Jumping directly into optimized loop machine code at the OSR entry point.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t2_s3_d1",
      "label": "Seamless Mid-Execution Transition",
      "description": "Resuming loop execution in native machine code without state corruption.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t2_s3_d2",
      "label": "100x Speedup for Heavy Computational Loops",
      "description": "Accelerating long-running loops immediately.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t2_s4",
      "label": "De-optimization Out of OSR Frames",
      "description": "Handling de-optimization events occurring inside OSR-compiled machine code.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t2_s4_d1",
      "label": "Un-winding Machine Frame Back to Interpreter Stack",
      "description": "Deconstructing machine frames and restoring interpreter state if type assumptions fail.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t2_s4_d2",
      "label": "Resuming Execution in Interpreter at Next Bytecode",
      "description": "Falling back safely to interpreted execution.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t2_s5",
      "label": "PyPy PyPy JIT Tracing & OSR Mechanics",
      "description": "Tracing JIT compiler generating optimized machine code for hot execution loops.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t2_s5_d1",
      "label": "Recording Execution Traces (Loop Tracing)",
      "description": "Recording exact executed bytecode sequences across loop iterations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t2_s5_d2",
      "label": "Compiling Linear Guarded Machine Code Traces",
      "description": "Compiling un-branched linear machine code for traced loop paths.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t3",
      "label": "Dynamic Binary Translation & Emulation Runtimes",
      "description": "Translating machine instructions of one CPU architecture into executable instructions of another CPU architecture at runtime.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t3_s1",
      "label": "Apple Rosetta 2 Architecture (x86-64 -> ARM64 AOT/JIT)",
      "description": "Translating x86-64 Mac applications to execute on ARM64 Apple Silicon.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t3_s1_d1",
      "label": "Ahead-of-Time (AOT) Binary Translation",
      "description": "Translating x86-64 application binaries to ARM64 instructions during installation.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t3_s1_d2",
      "label": "JIT Binary Translation for Dynamic Code",
      "description": "Translating dynamically generated x86-64 JIT code at runtime.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t3_s2",
      "label": "Memory Ordering Model Emulation (TSO -> Weak Memory)",
      "description": "Emulating x86 Total Store Order (TSO) memory model on weakly-ordered ARM hardware.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t3_s2_d1",
      "label": "Hardware TSO Switch (Apple Silicon TSO Bit)",
      "description": "Enabling hardware TSO memory ordering mode on Apple M-series CPU cores.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t3_s2_d2",
      "label": "Eliminating Heavy Memory Barrier Instructions",
      "description": "Achieving 70-90% native speed by avoiding manual memory fence injections.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t3_s3",
      "label": "Basic Block Translation Cache & Hash Lookup",
      "description": "Caching translated target machine basic blocks to eliminate redundant translation.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t3_s3_d1",
      "label": "Translation Block (TB) Cache Hash Tables",
      "description": "Mapping source instruction addresses to translated target assembly blocks.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t3_s3_d2",
      "label": "Direct Block Chaining (Bypassing Dispatch Loops)",
      "description": "Patching jump instructions at block ends to link translated blocks directly.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t3_s4",
      "label": "QEMU Dynamic Binary Translator (TCG - Tiny Code Generator)",
      "description": "Open-source emulator compiling source architecture instructions to target assembly via TCG IR.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t3_s4_d1",
      "label": "Source Assembly -> TCG IR -> Target Assembly",
      "description": "Decoding source instructions into intermediate TCG ops before target emission.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t3_s4_d2",
      "label": "Cross-Platform System Emulation",
      "description": "Emulating full ARM, RISC-V, and x86 hardware platforms on arbitrary hosts.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t3_s5",
      "label": "QEMU & Box86 User-Space Emulation Speed",
      "description": "Executing x86 Linux binaries directly on ARM Linux systems.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t3_s5_d1",
      "label": "System Call Pass-Through (Direct Host Syscalls)",
      "description": "Passing POSIX system calls directly to host Linux kernels without emulation.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t3_s5_d2",
      "label": "Native Host Library Wrapping",
      "description": "Wrapping native ARM x11/OpenGL libraries to execute host graphics acceleration.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t4",
      "label": "WebAssembly (Wasm) JIT Engines (Wasmtime / Wasmer)",
      "description": "Compiling and executing WebAssembly modules outside web browsers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t4_s1",
      "label": "Cranelift JIT Compiler Architecture (Wasmtime Backend)",
      "description": "Fast, safety-focused compiler backend designed for WebAssembly.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t4_s1_d1",
      "label": "Sub-Millisecond Compilation Speed",
      "description": "Generating native machine code rapidly without heavy optimization passes.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t4_s1_d2",
      "label": "Strict Memory Safety Invariants",
      "description": "Enforcing sandbox bounds and stack safety checks in generated machine code.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t4_s2",
      "label": "Wasm Linear Memory Bounds Checking Strategies",
      "description": "Verifying Wasm memory accesses remain inside allocated sandbox regions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t4_s2_d1",
      "label": "Explicit Guard Pages (4GB Virtual Memory Reservation)",
      "description": "Reserving 4GB virtual address spaces to trigger hardware OS page faults on out-of-bounds accesses.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t4_s2_d2",
      "label": "Eliminating In-Line Explicit Bounds Checks",
      "description": "Removing explicit comparison instructions to achieve native memory execution speeds.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t4_s3",
      "label": "WASI (WebAssembly System Interface) System Calls",
      "description": "Standardized POSIX-like system call interface for standalone WebAssembly runtimes.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t4_s3_d1",
      "label": "Capabilities-Based Security Model",
      "description": "Granting explicit sandboxed file and network handles to Wasm modules.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t4_s3_d2",
      "label": "Cross-Platform Serverless Execution",
      "description": "Executing identical Wasm binaries across Linux, macOS, and Windows serverless nodes.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t4_s4",
      "label": "Embedding Wasm Runtimes in Host Applications (C / Rust / Go)",
      "description": "Using Wasm runtimes to execute untrusted user plugins safely.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t4_s4_d1",
      "label": "Host-Guest Memory Sharing APIs",
      "description": "Exposing host application functions to Wasm guest modules.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t4_s4_d2",
      "label": "Nanosecond Plugin Execution Overhead",
      "description": "Running untrusted user plugins safely with near-zero overhead.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t4_s5",
      "label": "Wasm Compilation Caching & Pre-Compilation (AOT Wasm)",
      "description": "Pre-compiling Wasm modules into native shared objects (.so / .dll) for instant execution.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t4_s5_d1",
      "label": "wasmtime compile AOT Binary Generation",
      "description": "Saving pre-compiled native machine code artifacts to disk.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t4_s5_d2",
      "label": "Instant Serverless Cold Start Execution (< 1ms)",
      "description": "Starting Wasm microservices in sub-milliseconds.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t5",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 5",
      "description": "Detailed first-principles mechanics for Just-In-Time (JIT) Compilation & Runtimes topic 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t5_s1",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Just-In-Time (JIT) Compilation & Runtimes Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t5_s1_d1",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t5_s1_d2",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t5_s2",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Just-In-Time (JIT) Compilation & Runtimes Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t5_s2_d1",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t5_s2_d2",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t5_s3",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Just-In-Time (JIT) Compilation & Runtimes Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t5_s3_d1",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t5_s3_d2",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t5_s4",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Just-In-Time (JIT) Compilation & Runtimes Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t5_s4_d1",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t5_s4_d2",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t5_s5",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Just-In-Time (JIT) Compilation & Runtimes Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t5_s5_d1",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t5_s5_d2",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Just-In-Time (JIT) Compilation & Runtimes Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t6",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 6",
      "description": "Detailed first-principles mechanics for Just-In-Time (JIT) Compilation & Runtimes topic 6.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t6_s1",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Just-In-Time (JIT) Compilation & Runtimes Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t6_s1_d1",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t6_s1_d2",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t6_s2",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Just-In-Time (JIT) Compilation & Runtimes Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t6_s2_d1",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t6_s2_d2",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t6_s3",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Just-In-Time (JIT) Compilation & Runtimes Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t6_s3_d1",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t6_s3_d2",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t6_s4",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Just-In-Time (JIT) Compilation & Runtimes Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t6_s4_d1",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t6_s4_d2",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t6_s5",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Just-In-Time (JIT) Compilation & Runtimes Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t6_s5_d1",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p7_t6_s5_d2",
      "label": "Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Just-In-Time (JIT) Compilation & Runtimes Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8",
      "label": "Language Tooling & Language Server Protocol (LSP)",
      "description": "LSP JSON-RPC specification, AST codemods, incremental compilation, and source maps.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t1",
      "label": "Language Server Protocol (LSP) JSON-RPC Spec",
      "description": "Microsoft open protocol standardizing communication between IDE editors and language tooling.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t1_s1",
      "label": "Client-Server JSON-RPC 2.0 Protocol Architecture",
      "description": "Decoupling IDE editors (VS Code, Neovim) from background language analysis engines.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t1_s1_d1",
      "label": "Standard Input/Output (stdio) & TCP Transport",
      "description": "Exchanging JSON-RPC messages over stdio pipes or TCP sockets.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t1_s1_d2",
      "label": "N-Editors to M-Languages Matrix Reduction",
      "description": "Eliminating N x M integration effort by writing single LSP servers per language.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t1_s2",
      "label": "Core LSP Requests (textDocument/completion, hover, definition)",
      "description": "Standardized requests powering IDE developer features.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t1_s2_d1",
      "label": "textDocument/completion (Autocomplete Suggestions)",
      "description": "Returning context-aware code completion items and snippets.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t1_s2_d2",
      "label": "textDocument/definition (Go to Definition)",
      "description": "Returning source file URI and target range coordinates for symbols.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t1_s2_d3",
      "label": "textDocument/hover (Type Signatures & Documentation)",
      "description": "Displaying Markdown hover cards with type info and docstrings.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t1_s3",
      "label": "Text Synchronization Models (Full vs Incremental)",
      "description": "Synchronizing document edits between IDE editors and LSP servers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t1_s3_d1",
      "label": "Incremental Text Document Sync (textDocument/didChange)",
      "description": "Sending precise character range delta edits rather than full document strings.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t1_s3_d2",
      "label": "Rope / Piece Table Internal Text Storage",
      "description": "Managing document text using fast rope or piece table data structures.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t1_s4",
      "label": "Diagnostics Publishing (textDocument/publishDiagnostics)",
      "description": "Streaming compiler errors, warnings, and linter suggestions to IDE editors.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t1_s4_d1",
      "label": "Asynchronous Diagnostic Push Notifications",
      "description": "Publishing diagnostic error arrays containing file ranges and severity levels.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t1_s4_d2",
      "label": "Inline Error Squiggly Rendering",
      "description": "Rendering red squiggly underlines directly on error line ranges in editors.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t1_s5",
      "label": "LSP Extensions (Code Actions & Refactoring Commands)",
      "description": "Executing automated code refactoring and quick-fixes via LSP.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t1_s5_d1",
      "label": "WorkspaceEdit Result Payloads",
      "description": "Applying coordinated multi-file text edits automatically across project repositories.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t1_s5_d2",
      "label": "CodeAction Quick-Fix Suggestions",
      "description": "Offering single-click fixes for linter warnings and missing imports.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t2",
      "label": "AST-Based Codemods & Source Transformations",
      "description": "Automating multi-file codebase refactoring by manipulating Abstract Syntax Trees.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t2_s1",
      "label": "Source-to-AST Parsing & CST Preservation",
      "description": "Parsing source code into Concrete Syntax Trees (CST) preserving comments and formatting.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t2_s1_d1",
      "label": "Lossless Syntax Tree (Red-Green Tree Architecture)",
      "description": "Preserving exact whitespace, comments, and formatting tokens for code generation.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t2_s1_d2",
      "label": "jscodeshift & Babel Plugin Architecture",
      "description": "Parsing JavaScript/TypeScript into ESTree-compliant AST representations.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t2_s2",
      "label": "AST Node Traversal & Visitor Pattern",
      "description": "Traversing syntax trees using visitor pattern callbacks to locate target nodes.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t2_s2_d1",
      "label": "Visitor Node Matcher Functions (visitCallExpression)",
      "description": "Intercepting specific AST node types during depth-first tree traversals.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t2_s2_d2",
      "label": "Parent Node Path Tracking",
      "description": "Accessing parent and sibling AST node contexts during modification passes.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t2_s3",
      "label": "Tree Mutation & Code Generation (recast / babel-generator)",
      "description": "Modifying AST nodes and printing formatted source code.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t2_s3_d1",
      "label": "AST Node Replacement and Insertion",
      "description": "Swapping legacy API call nodes with updated function call nodes.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t2_s3_d2",
      "label": "Formatting-Preserving Code Printing",
      "description": "Printing modified AST nodes while preserving original formatting in un-touched code.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t2_s4",
      "label": "Automated Multi-Repository Refactoring at Scale",
      "description": "Executing automated codemod scripts across thousands of enterprise code repositories.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t2_s4_d1",
      "label": "Automated Pull Request Generation Scripts",
      "description": "Running codemods across repos and opening automated PRs.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t2_s4_d2",
      "label": "Eliminating Manual Migration Labor",
      "description": "Migrating millions of lines of legacy code in single automated passes.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t2_s5",
      "label": "Structural Search & Replace (ast-grep / Semgrep)",
      "description": "Searching and rewriting code using syntax-aware pattern matching templates.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t2_s5_d1",
      "label": "Pattern Match Templates ($VAR.foo($ARG))",
      "description": "Matching code structure using wildcard meta-variables.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t2_s5_d2",
      "label": "High-Speed Structural Search Execution",
      "description": "Searching codebases 100x faster than traditional regex searches.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t3",
      "label": "Incremental Compilation & Build Caching Engines",
      "description": "Re-compiling strictly modified code files and caching intermediate artifacts (Bazel / Rust ccache / Turborepo).",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t3_s1",
      "label": "Dependency Graph Construction & Invalidation",
      "description": "Tracking file import dependencies to calculate minimal re-compilation sets.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t3_s1_d1",
      "label": "Directed Acyclic Graph (DAG) Build Dependencies",
      "description": "Modeling build targets and source file dependencies as DAGs.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t3_s1_d2",
      "label": "Downstream Transitive Invalidation Sweep",
      "description": "Invalidating only downstream targets dependent on modified files.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t3_s2",
      "label": "Content-Addressable Artifact Caching (SHA-256 Hashes)",
      "description": "Hashing source code, compiler flags, and environment inputs to cache build outputs.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t3_s2_d1",
      "label": "Build Key Hash Computation (hash(inputs + compiler_version + flags))",
      "description": "Generating unique cache keys representing total build inputs.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t3_s2_d2",
      "label": "Hermetic Build Cache Hit Restorations",
      "description": "Restoring compiled binary artifacts from local or remote caches on cache hits.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t3_s3",
      "label": "Remote Build Execution (RBE) & Parallel Build Clusters",
      "description": "Distributing build compilation tasks across cloud server farms.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t3_s3_d1",
      "label": "Bazel Remote Execution Protocol",
      "description": "Dispatching hermetic compilation actions to remote worker nodes over gRPC.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t3_s3_d2",
      "label": "10x Faster Build Speeds for Large Codebases",
      "description": "Executing hundreds of C++/Java compilation tasks in parallel.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t3_s4",
      "label": "Rust Module Incremental Compilation (rustc)",
      "description": "Re-compiling individual functions and items within single Rust source files.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t3_s4_d1",
      "label": "Red-Green Dependency Graph Tracking",
      "description": "Tracking fine-grained query dependencies to avoid re-evaluating un-changed functions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t3_s4_d2",
      "label": "Incremental LLVM Code Generation",
      "description": "Re-generating LLVM IR only for modified functions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t3_s5",
      "label": "TypeScript Incremental Build Info (.tsbuildinfo)",
      "description": "Saving project AST type graphs to disk to accelerate subsequent tsc builds.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t3_s5_d1",
      "label": "Persistent Type Graph Cache",
      "description": "Loading cached type declarations to bypass re-parsing un-changed files.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t3_s5_d2",
      "label": "Composite Project References (tsconfig.json references)",
      "description": "Structuring multi-package monorepos into independently cached compilation units.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t4",
      "label": "Source Maps & Debugger Integration",
      "description": "Mapping compiled production code back to original source files for debugging.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t4_s1",
      "label": "Source Map V3 JSON Format Spec",
      "description": "Standardized JSON structure mapping compiled line/column coordinates to original source positions.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t4_s1_d1",
      "label": "Source Map Header Fields (version, sources, names, mappings)",
      "description": "Storing original file paths, symbol names, and VLQ-encoded mapping strings.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t4_s1_d2",
      "label": "Inline vs External Source Map Files",
      "description": "Embedding base64 data URLs or linking to external .map files.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t4_s2",
      "label": "Variable-Length Quantity (VLQ) Base64 Encoding",
      "description": "Compressing line and column offset integers into compact Base64 character strings.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t4_s2_d1",
      "label": "Relative Coordinate Delta Encoding",
      "description": "Encoding position changes relative to previous mapping entries to minimize file size.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t4_s2_d2",
      "label": "6-Bit VLQ Character Bitmasking",
      "description": "Splitting multi-digit integers across 6-bit Base64 characters using continuation bits.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t4_s3",
      "label": "Source Map Mapping Decoders & Stack Trace Un-mangling",
      "description": "Translating production minified stack traces back to original source code lines.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t4_s3_d1",
      "label": "Binary Search Mapping Lookup",
      "description": "Finding closest original source position for minified error line/column coordinates.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t4_s3_d2",
      "label": "Production Error Monitoring Integration (Sentry / Bugsnag)",
      "description": "Un-mangling minified production stack traces automatically on error servers.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t4_s4",
      "label": "Debugger Breakpoint Insertion (DWARF & V8 Inspector)",
      "description": "Mapping IDE breakpoints to physical machine assembly or bytecode addresses.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t4_s4_d1",
      "label": "DWARF Debug Info (.debug_info / .debug_line)",
      "description": "Mapping machine assembly addresses back to original C++/Rust source lines.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t4_s4_d2",
      "label": "V8 Inspector Protocol Breakpoint Binding",
      "description": "Setting breakpoints on specific bytecode offset instructions via Chrome DevTools Protocol.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t4_s5",
      "label": "Source Map Security Safeguards in Production",
      "description": "Protecting proprietary source code from being exposed via public source maps.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t4_s5_d1",
      "label": "Restricting Public Source Map Access",
      "description": "Hosting source maps on private internal servers accessible only to error monitoring tools.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t4_s5_d2",
      "label": "Hidden Source Map Headers (X-SourceMap)",
      "description": "Omitting sourceMappingURL comments from public JS assets.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t5",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 5",
      "description": "Detailed first-principles mechanics for Language Tooling & Language Server Protocol (LSP) topic 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t5_s1",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Language Tooling & Language Server Protocol (LSP) Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t5_s1_d1",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t5_s1_d2",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t5_s2",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Language Tooling & Language Server Protocol (LSP) Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t5_s2_d1",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t5_s2_d2",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t5_s3",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Language Tooling & Language Server Protocol (LSP) Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t5_s3_d1",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t5_s3_d2",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t5_s4",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Language Tooling & Language Server Protocol (LSP) Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t5_s4_d1",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t5_s4_d2",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t5_s5",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Language Tooling & Language Server Protocol (LSP) Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t5_s5_d1",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t5_s5_d2",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Language Tooling & Language Server Protocol (LSP) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t6",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 6",
      "description": "Detailed first-principles mechanics for Language Tooling & Language Server Protocol (LSP) topic 6.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t6_s1",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Language Tooling & Language Server Protocol (LSP) Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t6_s1_d1",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t6_s1_d2",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t6_s2",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Language Tooling & Language Server Protocol (LSP) Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t6_s2_d1",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t6_s2_d2",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t6_s3",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Language Tooling & Language Server Protocol (LSP) Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t6_s3_d1",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t6_s3_d2",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t6_s4",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Language Tooling & Language Server Protocol (LSP) Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t6_s4_d1",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t6_s4_d2",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t6_s5",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Language Tooling & Language Server Protocol (LSP) Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t6_s5_d1",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "compiler_root_p8_t6_s5_d2",
      "label": "Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Language Tooling & Language Server Protocol (LSP) Topic 6 Sub-System 5.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "source": "compiler_root",
      "target": "compiler_root_p1"
    },
    {
      "source": "compiler_root_p1",
      "target": "compiler_root_p1_t1"
    },
    {
      "source": "compiler_root_p1_t1",
      "target": "compiler_root_p1_t1_s1"
    },
    {
      "source": "compiler_root_p1_t1_s1",
      "target": "compiler_root_p1_t1_s1_d1"
    },
    {
      "source": "compiler_root_p1_t1_s1",
      "target": "compiler_root_p1_t1_s1_d2"
    },
    {
      "source": "compiler_root_p1_t1",
      "target": "compiler_root_p1_t1_s2"
    },
    {
      "source": "compiler_root_p1_t1_s2",
      "target": "compiler_root_p1_t1_s2_d1"
    },
    {
      "source": "compiler_root_p1_t1_s2",
      "target": "compiler_root_p1_t1_s2_d2"
    },
    {
      "source": "compiler_root_p1_t1",
      "target": "compiler_root_p1_t1_s3"
    },
    {
      "source": "compiler_root_p1_t1_s3",
      "target": "compiler_root_p1_t1_s3_d1"
    },
    {
      "source": "compiler_root_p1_t1_s3",
      "target": "compiler_root_p1_t1_s3_d2"
    },
    {
      "source": "compiler_root_p1_t1",
      "target": "compiler_root_p1_t1_s4"
    },
    {
      "source": "compiler_root_p1_t1_s4",
      "target": "compiler_root_p1_t1_s4_d1"
    },
    {
      "source": "compiler_root_p1_t1_s4",
      "target": "compiler_root_p1_t1_s4_d2"
    },
    {
      "source": "compiler_root_p1_t1",
      "target": "compiler_root_p1_t1_s5"
    },
    {
      "source": "compiler_root_p1_t1_s5",
      "target": "compiler_root_p1_t1_s5_d1"
    },
    {
      "source": "compiler_root_p1_t1_s5",
      "target": "compiler_root_p1_t1_s5_d2"
    },
    {
      "source": "compiler_root_p1",
      "target": "compiler_root_p1_t2"
    },
    {
      "source": "compiler_root_p1_t2",
      "target": "compiler_root_p1_t2_s1"
    },
    {
      "source": "compiler_root_p1_t2_s1",
      "target": "compiler_root_p1_t2_s1_d1"
    },
    {
      "source": "compiler_root_p1_t2_s1",
      "target": "compiler_root_p1_t2_s1_d2"
    },
    {
      "source": "compiler_root_p1_t2",
      "target": "compiler_root_p1_t2_s2"
    },
    {
      "source": "compiler_root_p1_t2_s2",
      "target": "compiler_root_p1_t2_s2_d1"
    },
    {
      "source": "compiler_root_p1_t2_s2",
      "target": "compiler_root_p1_t2_s2_d2"
    },
    {
      "source": "compiler_root_p1_t2",
      "target": "compiler_root_p1_t2_s3"
    },
    {
      "source": "compiler_root_p1_t2_s3",
      "target": "compiler_root_p1_t2_s3_d1"
    },
    {
      "source": "compiler_root_p1_t2_s3",
      "target": "compiler_root_p1_t2_s3_d2"
    },
    {
      "source": "compiler_root_p1_t2",
      "target": "compiler_root_p1_t2_s4"
    },
    {
      "source": "compiler_root_p1_t2_s4",
      "target": "compiler_root_p1_t2_s4_d1"
    },
    {
      "source": "compiler_root_p1_t2_s4",
      "target": "compiler_root_p1_t2_s4_d2"
    },
    {
      "source": "compiler_root_p1_t2",
      "target": "compiler_root_p1_t2_s5"
    },
    {
      "source": "compiler_root_p1_t2_s5",
      "target": "compiler_root_p1_t2_s5_d1"
    },
    {
      "source": "compiler_root_p1_t2_s5",
      "target": "compiler_root_p1_t2_s5_d2"
    },
    {
      "source": "compiler_root_p1",
      "target": "compiler_root_p1_t3"
    },
    {
      "source": "compiler_root_p1_t3",
      "target": "compiler_root_p1_t3_s1"
    },
    {
      "source": "compiler_root_p1_t3_s1",
      "target": "compiler_root_p1_t3_s1_d1"
    },
    {
      "source": "compiler_root_p1_t3_s1",
      "target": "compiler_root_p1_t3_s1_d2"
    },
    {
      "source": "compiler_root_p1_t3",
      "target": "compiler_root_p1_t3_s2"
    },
    {
      "source": "compiler_root_p1_t3_s2",
      "target": "compiler_root_p1_t3_s2_d1"
    },
    {
      "source": "compiler_root_p1_t3_s2",
      "target": "compiler_root_p1_t3_s2_d2"
    },
    {
      "source": "compiler_root_p1_t3",
      "target": "compiler_root_p1_t3_s3"
    },
    {
      "source": "compiler_root_p1_t3_s3",
      "target": "compiler_root_p1_t3_s3_d1"
    },
    {
      "source": "compiler_root_p1_t3_s3",
      "target": "compiler_root_p1_t3_s3_d2"
    },
    {
      "source": "compiler_root_p1_t3",
      "target": "compiler_root_p1_t3_s4"
    },
    {
      "source": "compiler_root_p1_t3_s4",
      "target": "compiler_root_p1_t3_s4_d1"
    },
    {
      "source": "compiler_root_p1_t3_s4",
      "target": "compiler_root_p1_t3_s4_d2"
    },
    {
      "source": "compiler_root_p1_t3",
      "target": "compiler_root_p1_t3_s5"
    },
    {
      "source": "compiler_root_p1_t3_s5",
      "target": "compiler_root_p1_t3_s5_d1"
    },
    {
      "source": "compiler_root_p1_t3_s5",
      "target": "compiler_root_p1_t3_s5_d2"
    },
    {
      "source": "compiler_root_p1",
      "target": "compiler_root_p1_t4"
    },
    {
      "source": "compiler_root_p1_t4",
      "target": "compiler_root_p1_t4_s1"
    },
    {
      "source": "compiler_root_p1_t4_s1",
      "target": "compiler_root_p1_t4_s1_d1"
    },
    {
      "source": "compiler_root_p1_t4_s1",
      "target": "compiler_root_p1_t4_s1_d2"
    },
    {
      "source": "compiler_root_p1_t4",
      "target": "compiler_root_p1_t4_s2"
    },
    {
      "source": "compiler_root_p1_t4_s2",
      "target": "compiler_root_p1_t4_s2_d1"
    },
    {
      "source": "compiler_root_p1_t4_s2",
      "target": "compiler_root_p1_t4_s2_d2"
    },
    {
      "source": "compiler_root_p1_t4",
      "target": "compiler_root_p1_t4_s3"
    },
    {
      "source": "compiler_root_p1_t4_s3",
      "target": "compiler_root_p1_t4_s3_d1"
    },
    {
      "source": "compiler_root_p1_t4_s3",
      "target": "compiler_root_p1_t4_s3_d2"
    },
    {
      "source": "compiler_root_p1_t4",
      "target": "compiler_root_p1_t4_s4"
    },
    {
      "source": "compiler_root_p1_t4_s4",
      "target": "compiler_root_p1_t4_s4_d1"
    },
    {
      "source": "compiler_root_p1_t4_s4",
      "target": "compiler_root_p1_t4_s4_d2"
    },
    {
      "source": "compiler_root_p1_t4",
      "target": "compiler_root_p1_t4_s5"
    },
    {
      "source": "compiler_root_p1_t4_s5",
      "target": "compiler_root_p1_t4_s5_d1"
    },
    {
      "source": "compiler_root_p1_t4_s5",
      "target": "compiler_root_p1_t4_s5_d2"
    },
    {
      "source": "compiler_root_p1",
      "target": "compiler_root_p1_t5"
    },
    {
      "source": "compiler_root_p1_t5",
      "target": "compiler_root_p1_t5_s1"
    },
    {
      "source": "compiler_root_p1_t5_s1",
      "target": "compiler_root_p1_t5_s1_d1"
    },
    {
      "source": "compiler_root_p1_t5_s1",
      "target": "compiler_root_p1_t5_s1_d2"
    },
    {
      "source": "compiler_root_p1_t5",
      "target": "compiler_root_p1_t5_s2"
    },
    {
      "source": "compiler_root_p1_t5_s2",
      "target": "compiler_root_p1_t5_s2_d1"
    },
    {
      "source": "compiler_root_p1_t5_s2",
      "target": "compiler_root_p1_t5_s2_d2"
    },
    {
      "source": "compiler_root_p1_t5",
      "target": "compiler_root_p1_t5_s3"
    },
    {
      "source": "compiler_root_p1_t5_s3",
      "target": "compiler_root_p1_t5_s3_d1"
    },
    {
      "source": "compiler_root_p1_t5_s3",
      "target": "compiler_root_p1_t5_s3_d2"
    },
    {
      "source": "compiler_root_p1_t5",
      "target": "compiler_root_p1_t5_s4"
    },
    {
      "source": "compiler_root_p1_t5_s4",
      "target": "compiler_root_p1_t5_s4_d1"
    },
    {
      "source": "compiler_root_p1_t5_s4",
      "target": "compiler_root_p1_t5_s4_d2"
    },
    {
      "source": "compiler_root_p1_t5",
      "target": "compiler_root_p1_t5_s5"
    },
    {
      "source": "compiler_root_p1_t5_s5",
      "target": "compiler_root_p1_t5_s5_d1"
    },
    {
      "source": "compiler_root_p1_t5_s5",
      "target": "compiler_root_p1_t5_s5_d2"
    },
    {
      "source": "compiler_root_p1",
      "target": "compiler_root_p1_t6"
    },
    {
      "source": "compiler_root_p1_t6",
      "target": "compiler_root_p1_t6_s1"
    },
    {
      "source": "compiler_root_p1_t6_s1",
      "target": "compiler_root_p1_t6_s1_d1"
    },
    {
      "source": "compiler_root_p1_t6_s1",
      "target": "compiler_root_p1_t6_s1_d2"
    },
    {
      "source": "compiler_root_p1_t6",
      "target": "compiler_root_p1_t6_s2"
    },
    {
      "source": "compiler_root_p1_t6_s2",
      "target": "compiler_root_p1_t6_s2_d1"
    },
    {
      "source": "compiler_root_p1_t6_s2",
      "target": "compiler_root_p1_t6_s2_d2"
    },
    {
      "source": "compiler_root_p1_t6",
      "target": "compiler_root_p1_t6_s3"
    },
    {
      "source": "compiler_root_p1_t6_s3",
      "target": "compiler_root_p1_t6_s3_d1"
    },
    {
      "source": "compiler_root_p1_t6_s3",
      "target": "compiler_root_p1_t6_s3_d2"
    },
    {
      "source": "compiler_root_p1_t6",
      "target": "compiler_root_p1_t6_s4"
    },
    {
      "source": "compiler_root_p1_t6_s4",
      "target": "compiler_root_p1_t6_s4_d1"
    },
    {
      "source": "compiler_root_p1_t6_s4",
      "target": "compiler_root_p1_t6_s4_d2"
    },
    {
      "source": "compiler_root_p1_t6",
      "target": "compiler_root_p1_t6_s5"
    },
    {
      "source": "compiler_root_p1_t6_s5",
      "target": "compiler_root_p1_t6_s5_d1"
    },
    {
      "source": "compiler_root_p1_t6_s5",
      "target": "compiler_root_p1_t6_s5_d2"
    },
    {
      "source": "compiler_root",
      "target": "compiler_root_p2"
    },
    {
      "source": "compiler_root_p2",
      "target": "compiler_root_p2_t1"
    },
    {
      "source": "compiler_root_p2_t1",
      "target": "compiler_root_p2_t1_s1"
    },
    {
      "source": "compiler_root_p2_t1_s1",
      "target": "compiler_root_p2_t1_s1_d1"
    },
    {
      "source": "compiler_root_p2_t1_s1",
      "target": "compiler_root_p2_t1_s1_d2"
    },
    {
      "source": "compiler_root_p2_t1",
      "target": "compiler_root_p2_t1_s2"
    },
    {
      "source": "compiler_root_p2_t1_s2",
      "target": "compiler_root_p2_t1_s2_d1"
    },
    {
      "source": "compiler_root_p2_t1_s2",
      "target": "compiler_root_p2_t1_s2_d2"
    },
    {
      "source": "compiler_root_p2_t1",
      "target": "compiler_root_p2_t1_s3"
    },
    {
      "source": "compiler_root_p2_t1_s3",
      "target": "compiler_root_p2_t1_s3_d1"
    },
    {
      "source": "compiler_root_p2_t1_s3",
      "target": "compiler_root_p2_t1_s3_d2"
    },
    {
      "source": "compiler_root_p2_t1",
      "target": "compiler_root_p2_t1_s4"
    },
    {
      "source": "compiler_root_p2_t1_s4",
      "target": "compiler_root_p2_t1_s4_d1"
    },
    {
      "source": "compiler_root_p2_t1_s4",
      "target": "compiler_root_p2_t1_s4_d2"
    },
    {
      "source": "compiler_root_p2_t1",
      "target": "compiler_root_p2_t1_s5"
    },
    {
      "source": "compiler_root_p2_t1_s5",
      "target": "compiler_root_p2_t1_s5_d1"
    },
    {
      "source": "compiler_root_p2_t1_s5",
      "target": "compiler_root_p2_t1_s5_d2"
    },
    {
      "source": "compiler_root_p2",
      "target": "compiler_root_p2_t2"
    },
    {
      "source": "compiler_root_p2_t2",
      "target": "compiler_root_p2_t2_s1"
    },
    {
      "source": "compiler_root_p2_t2_s1",
      "target": "compiler_root_p2_t2_s1_d1"
    },
    {
      "source": "compiler_root_p2_t2_s1",
      "target": "compiler_root_p2_t2_s1_d2"
    },
    {
      "source": "compiler_root_p2_t2",
      "target": "compiler_root_p2_t2_s2"
    },
    {
      "source": "compiler_root_p2_t2_s2",
      "target": "compiler_root_p2_t2_s2_d1"
    },
    {
      "source": "compiler_root_p2_t2_s2",
      "target": "compiler_root_p2_t2_s2_d2"
    },
    {
      "source": "compiler_root_p2_t2",
      "target": "compiler_root_p2_t2_s3"
    },
    {
      "source": "compiler_root_p2_t2_s3",
      "target": "compiler_root_p2_t2_s3_d1"
    },
    {
      "source": "compiler_root_p2_t2_s3",
      "target": "compiler_root_p2_t2_s3_d2"
    },
    {
      "source": "compiler_root_p2_t2",
      "target": "compiler_root_p2_t2_s4"
    },
    {
      "source": "compiler_root_p2_t2_s4",
      "target": "compiler_root_p2_t2_s4_d1"
    },
    {
      "source": "compiler_root_p2_t2_s4",
      "target": "compiler_root_p2_t2_s4_d2"
    },
    {
      "source": "compiler_root_p2_t2",
      "target": "compiler_root_p2_t2_s5"
    },
    {
      "source": "compiler_root_p2_t2_s5",
      "target": "compiler_root_p2_t2_s5_d1"
    },
    {
      "source": "compiler_root_p2_t2_s5",
      "target": "compiler_root_p2_t2_s5_d2"
    },
    {
      "source": "compiler_root_p2",
      "target": "compiler_root_p2_t3"
    },
    {
      "source": "compiler_root_p2_t3",
      "target": "compiler_root_p2_t3_s1"
    },
    {
      "source": "compiler_root_p2_t3_s1",
      "target": "compiler_root_p2_t3_s1_d1"
    },
    {
      "source": "compiler_root_p2_t3_s1",
      "target": "compiler_root_p2_t3_s1_d2"
    },
    {
      "source": "compiler_root_p2_t3",
      "target": "compiler_root_p2_t3_s2"
    },
    {
      "source": "compiler_root_p2_t3_s2",
      "target": "compiler_root_p2_t3_s2_d1"
    },
    {
      "source": "compiler_root_p2_t3_s2",
      "target": "compiler_root_p2_t3_s2_d2"
    },
    {
      "source": "compiler_root_p2_t3",
      "target": "compiler_root_p2_t3_s3"
    },
    {
      "source": "compiler_root_p2_t3_s3",
      "target": "compiler_root_p2_t3_s3_d1"
    },
    {
      "source": "compiler_root_p2_t3_s3",
      "target": "compiler_root_p2_t3_s3_d2"
    },
    {
      "source": "compiler_root_p2_t3",
      "target": "compiler_root_p2_t3_s4"
    },
    {
      "source": "compiler_root_p2_t3_s4",
      "target": "compiler_root_p2_t3_s4_d1"
    },
    {
      "source": "compiler_root_p2_t3_s4",
      "target": "compiler_root_p2_t3_s4_d2"
    },
    {
      "source": "compiler_root_p2_t3",
      "target": "compiler_root_p2_t3_s5"
    },
    {
      "source": "compiler_root_p2_t3_s5",
      "target": "compiler_root_p2_t3_s5_d1"
    },
    {
      "source": "compiler_root_p2_t3_s5",
      "target": "compiler_root_p2_t3_s5_d2"
    },
    {
      "source": "compiler_root_p2",
      "target": "compiler_root_p2_t4"
    },
    {
      "source": "compiler_root_p2_t4",
      "target": "compiler_root_p2_t4_s1"
    },
    {
      "source": "compiler_root_p2_t4_s1",
      "target": "compiler_root_p2_t4_s1_d1"
    },
    {
      "source": "compiler_root_p2_t4_s1",
      "target": "compiler_root_p2_t4_s1_d2"
    },
    {
      "source": "compiler_root_p2_t4",
      "target": "compiler_root_p2_t4_s2"
    },
    {
      "source": "compiler_root_p2_t4_s2",
      "target": "compiler_root_p2_t4_s2_d1"
    },
    {
      "source": "compiler_root_p2_t4_s2",
      "target": "compiler_root_p2_t4_s2_d2"
    },
    {
      "source": "compiler_root_p2_t4",
      "target": "compiler_root_p2_t4_s3"
    },
    {
      "source": "compiler_root_p2_t4_s3",
      "target": "compiler_root_p2_t4_s3_d1"
    },
    {
      "source": "compiler_root_p2_t4_s3",
      "target": "compiler_root_p2_t4_s3_d2"
    },
    {
      "source": "compiler_root_p2_t4",
      "target": "compiler_root_p2_t4_s4"
    },
    {
      "source": "compiler_root_p2_t4_s4",
      "target": "compiler_root_p2_t4_s4_d1"
    },
    {
      "source": "compiler_root_p2_t4_s4",
      "target": "compiler_root_p2_t4_s4_d2"
    },
    {
      "source": "compiler_root_p2_t4",
      "target": "compiler_root_p2_t4_s5"
    },
    {
      "source": "compiler_root_p2_t4_s5",
      "target": "compiler_root_p2_t4_s5_d1"
    },
    {
      "source": "compiler_root_p2_t4_s5",
      "target": "compiler_root_p2_t4_s5_d2"
    },
    {
      "source": "compiler_root_p2",
      "target": "compiler_root_p2_t5"
    },
    {
      "source": "compiler_root_p2_t5",
      "target": "compiler_root_p2_t5_s1"
    },
    {
      "source": "compiler_root_p2_t5_s1",
      "target": "compiler_root_p2_t5_s1_d1"
    },
    {
      "source": "compiler_root_p2_t5_s1",
      "target": "compiler_root_p2_t5_s1_d2"
    },
    {
      "source": "compiler_root_p2_t5",
      "target": "compiler_root_p2_t5_s2"
    },
    {
      "source": "compiler_root_p2_t5_s2",
      "target": "compiler_root_p2_t5_s2_d1"
    },
    {
      "source": "compiler_root_p2_t5_s2",
      "target": "compiler_root_p2_t5_s2_d2"
    },
    {
      "source": "compiler_root_p2_t5",
      "target": "compiler_root_p2_t5_s3"
    },
    {
      "source": "compiler_root_p2_t5_s3",
      "target": "compiler_root_p2_t5_s3_d1"
    },
    {
      "source": "compiler_root_p2_t5_s3",
      "target": "compiler_root_p2_t5_s3_d2"
    },
    {
      "source": "compiler_root_p2_t5",
      "target": "compiler_root_p2_t5_s4"
    },
    {
      "source": "compiler_root_p2_t5_s4",
      "target": "compiler_root_p2_t5_s4_d1"
    },
    {
      "source": "compiler_root_p2_t5_s4",
      "target": "compiler_root_p2_t5_s4_d2"
    },
    {
      "source": "compiler_root_p2_t5",
      "target": "compiler_root_p2_t5_s5"
    },
    {
      "source": "compiler_root_p2_t5_s5",
      "target": "compiler_root_p2_t5_s5_d1"
    },
    {
      "source": "compiler_root_p2_t5_s5",
      "target": "compiler_root_p2_t5_s5_d2"
    },
    {
      "source": "compiler_root_p2",
      "target": "compiler_root_p2_t6"
    },
    {
      "source": "compiler_root_p2_t6",
      "target": "compiler_root_p2_t6_s1"
    },
    {
      "source": "compiler_root_p2_t6_s1",
      "target": "compiler_root_p2_t6_s1_d1"
    },
    {
      "source": "compiler_root_p2_t6_s1",
      "target": "compiler_root_p2_t6_s1_d2"
    },
    {
      "source": "compiler_root_p2_t6",
      "target": "compiler_root_p2_t6_s2"
    },
    {
      "source": "compiler_root_p2_t6_s2",
      "target": "compiler_root_p2_t6_s2_d1"
    },
    {
      "source": "compiler_root_p2_t6_s2",
      "target": "compiler_root_p2_t6_s2_d2"
    },
    {
      "source": "compiler_root_p2_t6",
      "target": "compiler_root_p2_t6_s3"
    },
    {
      "source": "compiler_root_p2_t6_s3",
      "target": "compiler_root_p2_t6_s3_d1"
    },
    {
      "source": "compiler_root_p2_t6_s3",
      "target": "compiler_root_p2_t6_s3_d2"
    },
    {
      "source": "compiler_root_p2_t6",
      "target": "compiler_root_p2_t6_s4"
    },
    {
      "source": "compiler_root_p2_t6_s4",
      "target": "compiler_root_p2_t6_s4_d1"
    },
    {
      "source": "compiler_root_p2_t6_s4",
      "target": "compiler_root_p2_t6_s4_d2"
    },
    {
      "source": "compiler_root_p2_t6",
      "target": "compiler_root_p2_t6_s5"
    },
    {
      "source": "compiler_root_p2_t6_s5",
      "target": "compiler_root_p2_t6_s5_d1"
    },
    {
      "source": "compiler_root_p2_t6_s5",
      "target": "compiler_root_p2_t6_s5_d2"
    },
    {
      "source": "compiler_root",
      "target": "compiler_root_p3"
    },
    {
      "source": "compiler_root_p3",
      "target": "compiler_root_p3_t1"
    },
    {
      "source": "compiler_root_p3_t1",
      "target": "compiler_root_p3_t1_s1"
    },
    {
      "source": "compiler_root_p3_t1_s1",
      "target": "compiler_root_p3_t1_s1_d1"
    },
    {
      "source": "compiler_root_p3_t1_s1",
      "target": "compiler_root_p3_t1_s1_d2"
    },
    {
      "source": "compiler_root_p3_t1",
      "target": "compiler_root_p3_t1_s2"
    },
    {
      "source": "compiler_root_p3_t1_s2",
      "target": "compiler_root_p3_t1_s2_d1"
    },
    {
      "source": "compiler_root_p3_t1_s2",
      "target": "compiler_root_p3_t1_s2_d2"
    },
    {
      "source": "compiler_root_p3_t1",
      "target": "compiler_root_p3_t1_s3"
    },
    {
      "source": "compiler_root_p3_t1_s3",
      "target": "compiler_root_p3_t1_s3_d1"
    },
    {
      "source": "compiler_root_p3_t1_s3",
      "target": "compiler_root_p3_t1_s3_d2"
    },
    {
      "source": "compiler_root_p3_t1",
      "target": "compiler_root_p3_t1_s4"
    },
    {
      "source": "compiler_root_p3_t1_s4",
      "target": "compiler_root_p3_t1_s4_d1"
    },
    {
      "source": "compiler_root_p3_t1_s4",
      "target": "compiler_root_p3_t1_s4_d2"
    },
    {
      "source": "compiler_root_p3_t1",
      "target": "compiler_root_p3_t1_s5"
    },
    {
      "source": "compiler_root_p3_t1_s5",
      "target": "compiler_root_p3_t1_s5_d1"
    },
    {
      "source": "compiler_root_p3_t1_s5",
      "target": "compiler_root_p3_t1_s5_d2"
    },
    {
      "source": "compiler_root_p3",
      "target": "compiler_root_p3_t2"
    },
    {
      "source": "compiler_root_p3_t2",
      "target": "compiler_root_p3_t2_s1"
    },
    {
      "source": "compiler_root_p3_t2_s1",
      "target": "compiler_root_p3_t2_s1_d1"
    },
    {
      "source": "compiler_root_p3_t2_s1",
      "target": "compiler_root_p3_t2_s1_d2"
    },
    {
      "source": "compiler_root_p3_t2",
      "target": "compiler_root_p3_t2_s2"
    },
    {
      "source": "compiler_root_p3_t2_s2",
      "target": "compiler_root_p3_t2_s2_d1"
    },
    {
      "source": "compiler_root_p3_t2_s2",
      "target": "compiler_root_p3_t2_s2_d2"
    },
    {
      "source": "compiler_root_p3_t2",
      "target": "compiler_root_p3_t2_s3"
    },
    {
      "source": "compiler_root_p3_t2_s3",
      "target": "compiler_root_p3_t2_s3_d1"
    },
    {
      "source": "compiler_root_p3_t2_s3",
      "target": "compiler_root_p3_t2_s3_d2"
    },
    {
      "source": "compiler_root_p3_t2",
      "target": "compiler_root_p3_t2_s4"
    },
    {
      "source": "compiler_root_p3_t2_s4",
      "target": "compiler_root_p3_t2_s4_d1"
    },
    {
      "source": "compiler_root_p3_t2_s4",
      "target": "compiler_root_p3_t2_s4_d2"
    },
    {
      "source": "compiler_root_p3_t2",
      "target": "compiler_root_p3_t2_s5"
    },
    {
      "source": "compiler_root_p3_t2_s5",
      "target": "compiler_root_p3_t2_s5_d1"
    },
    {
      "source": "compiler_root_p3_t2_s5",
      "target": "compiler_root_p3_t2_s5_d2"
    },
    {
      "source": "compiler_root_p3",
      "target": "compiler_root_p3_t3"
    },
    {
      "source": "compiler_root_p3_t3",
      "target": "compiler_root_p3_t3_s1"
    },
    {
      "source": "compiler_root_p3_t3_s1",
      "target": "compiler_root_p3_t3_s1_d1"
    },
    {
      "source": "compiler_root_p3_t3_s1",
      "target": "compiler_root_p3_t3_s1_d2"
    },
    {
      "source": "compiler_root_p3_t3",
      "target": "compiler_root_p3_t3_s2"
    },
    {
      "source": "compiler_root_p3_t3_s2",
      "target": "compiler_root_p3_t3_s2_d1"
    },
    {
      "source": "compiler_root_p3_t3_s2",
      "target": "compiler_root_p3_t3_s2_d2"
    },
    {
      "source": "compiler_root_p3_t3",
      "target": "compiler_root_p3_t3_s3"
    },
    {
      "source": "compiler_root_p3_t3_s3",
      "target": "compiler_root_p3_t3_s3_d1"
    },
    {
      "source": "compiler_root_p3_t3_s3",
      "target": "compiler_root_p3_t3_s3_d2"
    },
    {
      "source": "compiler_root_p3_t3",
      "target": "compiler_root_p3_t3_s4"
    },
    {
      "source": "compiler_root_p3_t3_s4",
      "target": "compiler_root_p3_t3_s4_d1"
    },
    {
      "source": "compiler_root_p3_t3_s4",
      "target": "compiler_root_p3_t3_s4_d2"
    },
    {
      "source": "compiler_root_p3_t3",
      "target": "compiler_root_p3_t3_s5"
    },
    {
      "source": "compiler_root_p3_t3_s5",
      "target": "compiler_root_p3_t3_s5_d1"
    },
    {
      "source": "compiler_root_p3_t3_s5",
      "target": "compiler_root_p3_t3_s5_d2"
    },
    {
      "source": "compiler_root_p3",
      "target": "compiler_root_p3_t4"
    },
    {
      "source": "compiler_root_p3_t4",
      "target": "compiler_root_p3_t4_s1"
    },
    {
      "source": "compiler_root_p3_t4_s1",
      "target": "compiler_root_p3_t4_s1_d1"
    },
    {
      "source": "compiler_root_p3_t4_s1",
      "target": "compiler_root_p3_t4_s1_d2"
    },
    {
      "source": "compiler_root_p3_t4",
      "target": "compiler_root_p3_t4_s2"
    },
    {
      "source": "compiler_root_p3_t4_s2",
      "target": "compiler_root_p3_t4_s2_d1"
    },
    {
      "source": "compiler_root_p3_t4_s2",
      "target": "compiler_root_p3_t4_s2_d2"
    },
    {
      "source": "compiler_root_p3_t4",
      "target": "compiler_root_p3_t4_s3"
    },
    {
      "source": "compiler_root_p3_t4_s3",
      "target": "compiler_root_p3_t4_s3_d1"
    },
    {
      "source": "compiler_root_p3_t4_s3",
      "target": "compiler_root_p3_t4_s3_d2"
    },
    {
      "source": "compiler_root_p3_t4",
      "target": "compiler_root_p3_t4_s4"
    },
    {
      "source": "compiler_root_p3_t4_s4",
      "target": "compiler_root_p3_t4_s4_d1"
    },
    {
      "source": "compiler_root_p3_t4_s4",
      "target": "compiler_root_p3_t4_s4_d2"
    },
    {
      "source": "compiler_root_p3_t4",
      "target": "compiler_root_p3_t4_s5"
    },
    {
      "source": "compiler_root_p3_t4_s5",
      "target": "compiler_root_p3_t4_s5_d1"
    },
    {
      "source": "compiler_root_p3_t4_s5",
      "target": "compiler_root_p3_t4_s5_d2"
    },
    {
      "source": "compiler_root_p3",
      "target": "compiler_root_p3_t5"
    },
    {
      "source": "compiler_root_p3_t5",
      "target": "compiler_root_p3_t5_s1"
    },
    {
      "source": "compiler_root_p3_t5_s1",
      "target": "compiler_root_p3_t5_s1_d1"
    },
    {
      "source": "compiler_root_p3_t5_s1",
      "target": "compiler_root_p3_t5_s1_d2"
    },
    {
      "source": "compiler_root_p3_t5",
      "target": "compiler_root_p3_t5_s2"
    },
    {
      "source": "compiler_root_p3_t5_s2",
      "target": "compiler_root_p3_t5_s2_d1"
    },
    {
      "source": "compiler_root_p3_t5_s2",
      "target": "compiler_root_p3_t5_s2_d2"
    },
    {
      "source": "compiler_root_p3_t5",
      "target": "compiler_root_p3_t5_s3"
    },
    {
      "source": "compiler_root_p3_t5_s3",
      "target": "compiler_root_p3_t5_s3_d1"
    },
    {
      "source": "compiler_root_p3_t5_s3",
      "target": "compiler_root_p3_t5_s3_d2"
    },
    {
      "source": "compiler_root_p3_t5",
      "target": "compiler_root_p3_t5_s4"
    },
    {
      "source": "compiler_root_p3_t5_s4",
      "target": "compiler_root_p3_t5_s4_d1"
    },
    {
      "source": "compiler_root_p3_t5_s4",
      "target": "compiler_root_p3_t5_s4_d2"
    },
    {
      "source": "compiler_root_p3_t5",
      "target": "compiler_root_p3_t5_s5"
    },
    {
      "source": "compiler_root_p3_t5_s5",
      "target": "compiler_root_p3_t5_s5_d1"
    },
    {
      "source": "compiler_root_p3_t5_s5",
      "target": "compiler_root_p3_t5_s5_d2"
    },
    {
      "source": "compiler_root_p3",
      "target": "compiler_root_p3_t6"
    },
    {
      "source": "compiler_root_p3_t6",
      "target": "compiler_root_p3_t6_s1"
    },
    {
      "source": "compiler_root_p3_t6_s1",
      "target": "compiler_root_p3_t6_s1_d1"
    },
    {
      "source": "compiler_root_p3_t6_s1",
      "target": "compiler_root_p3_t6_s1_d2"
    },
    {
      "source": "compiler_root_p3_t6",
      "target": "compiler_root_p3_t6_s2"
    },
    {
      "source": "compiler_root_p3_t6_s2",
      "target": "compiler_root_p3_t6_s2_d1"
    },
    {
      "source": "compiler_root_p3_t6_s2",
      "target": "compiler_root_p3_t6_s2_d2"
    },
    {
      "source": "compiler_root_p3_t6",
      "target": "compiler_root_p3_t6_s3"
    },
    {
      "source": "compiler_root_p3_t6_s3",
      "target": "compiler_root_p3_t6_s3_d1"
    },
    {
      "source": "compiler_root_p3_t6_s3",
      "target": "compiler_root_p3_t6_s3_d2"
    },
    {
      "source": "compiler_root_p3_t6",
      "target": "compiler_root_p3_t6_s4"
    },
    {
      "source": "compiler_root_p3_t6_s4",
      "target": "compiler_root_p3_t6_s4_d1"
    },
    {
      "source": "compiler_root_p3_t6_s4",
      "target": "compiler_root_p3_t6_s4_d2"
    },
    {
      "source": "compiler_root_p3_t6",
      "target": "compiler_root_p3_t6_s5"
    },
    {
      "source": "compiler_root_p3_t6_s5",
      "target": "compiler_root_p3_t6_s5_d1"
    },
    {
      "source": "compiler_root_p3_t6_s5",
      "target": "compiler_root_p3_t6_s5_d2"
    },
    {
      "source": "compiler_root",
      "target": "compiler_root_p4"
    },
    {
      "source": "compiler_root_p4",
      "target": "compiler_root_p4_t1"
    },
    {
      "source": "compiler_root_p4_t1",
      "target": "compiler_root_p4_t1_s1"
    },
    {
      "source": "compiler_root_p4_t1_s1",
      "target": "compiler_root_p4_t1_s1_d1"
    },
    {
      "source": "compiler_root_p4_t1_s1",
      "target": "compiler_root_p4_t1_s1_d2"
    },
    {
      "source": "compiler_root_p4_t1",
      "target": "compiler_root_p4_t1_s2"
    },
    {
      "source": "compiler_root_p4_t1_s2",
      "target": "compiler_root_p4_t1_s2_d1"
    },
    {
      "source": "compiler_root_p4_t1_s2",
      "target": "compiler_root_p4_t1_s2_d2"
    },
    {
      "source": "compiler_root_p4_t1",
      "target": "compiler_root_p4_t1_s3"
    },
    {
      "source": "compiler_root_p4_t1_s3",
      "target": "compiler_root_p4_t1_s3_d1"
    },
    {
      "source": "compiler_root_p4_t1_s3",
      "target": "compiler_root_p4_t1_s3_d2"
    },
    {
      "source": "compiler_root_p4_t1",
      "target": "compiler_root_p4_t1_s4"
    },
    {
      "source": "compiler_root_p4_t1_s4",
      "target": "compiler_root_p4_t1_s4_d1"
    },
    {
      "source": "compiler_root_p4_t1_s4",
      "target": "compiler_root_p4_t1_s4_d2"
    },
    {
      "source": "compiler_root_p4_t1",
      "target": "compiler_root_p4_t1_s5"
    },
    {
      "source": "compiler_root_p4_t1_s5",
      "target": "compiler_root_p4_t1_s5_d1"
    },
    {
      "source": "compiler_root_p4_t1_s5",
      "target": "compiler_root_p4_t1_s5_d2"
    },
    {
      "source": "compiler_root_p4",
      "target": "compiler_root_p4_t2"
    },
    {
      "source": "compiler_root_p4_t2",
      "target": "compiler_root_p4_t2_s1"
    },
    {
      "source": "compiler_root_p4_t2_s1",
      "target": "compiler_root_p4_t2_s1_d1"
    },
    {
      "source": "compiler_root_p4_t2_s1",
      "target": "compiler_root_p4_t2_s1_d2"
    },
    {
      "source": "compiler_root_p4_t2",
      "target": "compiler_root_p4_t2_s2"
    },
    {
      "source": "compiler_root_p4_t2_s2",
      "target": "compiler_root_p4_t2_s2_d1"
    },
    {
      "source": "compiler_root_p4_t2_s2",
      "target": "compiler_root_p4_t2_s2_d2"
    },
    {
      "source": "compiler_root_p4_t2",
      "target": "compiler_root_p4_t2_s3"
    },
    {
      "source": "compiler_root_p4_t2_s3",
      "target": "compiler_root_p4_t2_s3_d1"
    },
    {
      "source": "compiler_root_p4_t2_s3",
      "target": "compiler_root_p4_t2_s3_d2"
    },
    {
      "source": "compiler_root_p4_t2",
      "target": "compiler_root_p4_t2_s4"
    },
    {
      "source": "compiler_root_p4_t2_s4",
      "target": "compiler_root_p4_t2_s4_d1"
    },
    {
      "source": "compiler_root_p4_t2_s4",
      "target": "compiler_root_p4_t2_s4_d2"
    },
    {
      "source": "compiler_root_p4_t2",
      "target": "compiler_root_p4_t2_s5"
    },
    {
      "source": "compiler_root_p4_t2_s5",
      "target": "compiler_root_p4_t2_s5_d1"
    },
    {
      "source": "compiler_root_p4_t2_s5",
      "target": "compiler_root_p4_t2_s5_d2"
    },
    {
      "source": "compiler_root_p4",
      "target": "compiler_root_p4_t3"
    },
    {
      "source": "compiler_root_p4_t3",
      "target": "compiler_root_p4_t3_s1"
    },
    {
      "source": "compiler_root_p4_t3_s1",
      "target": "compiler_root_p4_t3_s1_d1"
    },
    {
      "source": "compiler_root_p4_t3_s1",
      "target": "compiler_root_p4_t3_s1_d2"
    },
    {
      "source": "compiler_root_p4_t3",
      "target": "compiler_root_p4_t3_s2"
    },
    {
      "source": "compiler_root_p4_t3_s2",
      "target": "compiler_root_p4_t3_s2_d1"
    },
    {
      "source": "compiler_root_p4_t3_s2",
      "target": "compiler_root_p4_t3_s2_d2"
    },
    {
      "source": "compiler_root_p4_t3",
      "target": "compiler_root_p4_t3_s3"
    },
    {
      "source": "compiler_root_p4_t3_s3",
      "target": "compiler_root_p4_t3_s3_d1"
    },
    {
      "source": "compiler_root_p4_t3_s3",
      "target": "compiler_root_p4_t3_s3_d2"
    },
    {
      "source": "compiler_root_p4_t3",
      "target": "compiler_root_p4_t3_s4"
    },
    {
      "source": "compiler_root_p4_t3_s4",
      "target": "compiler_root_p4_t3_s4_d1"
    },
    {
      "source": "compiler_root_p4_t3_s4",
      "target": "compiler_root_p4_t3_s4_d2"
    },
    {
      "source": "compiler_root_p4_t3",
      "target": "compiler_root_p4_t3_s5"
    },
    {
      "source": "compiler_root_p4_t3_s5",
      "target": "compiler_root_p4_t3_s5_d1"
    },
    {
      "source": "compiler_root_p4_t3_s5",
      "target": "compiler_root_p4_t3_s5_d2"
    },
    {
      "source": "compiler_root_p4",
      "target": "compiler_root_p4_t4"
    },
    {
      "source": "compiler_root_p4_t4",
      "target": "compiler_root_p4_t4_s1"
    },
    {
      "source": "compiler_root_p4_t4_s1",
      "target": "compiler_root_p4_t4_s1_d1"
    },
    {
      "source": "compiler_root_p4_t4_s1",
      "target": "compiler_root_p4_t4_s1_d2"
    },
    {
      "source": "compiler_root_p4_t4",
      "target": "compiler_root_p4_t4_s2"
    },
    {
      "source": "compiler_root_p4_t4_s2",
      "target": "compiler_root_p4_t4_s2_d1"
    },
    {
      "source": "compiler_root_p4_t4_s2",
      "target": "compiler_root_p4_t4_s2_d2"
    },
    {
      "source": "compiler_root_p4_t4",
      "target": "compiler_root_p4_t4_s3"
    },
    {
      "source": "compiler_root_p4_t4_s3",
      "target": "compiler_root_p4_t4_s3_d1"
    },
    {
      "source": "compiler_root_p4_t4_s3",
      "target": "compiler_root_p4_t4_s3_d2"
    },
    {
      "source": "compiler_root_p4_t4",
      "target": "compiler_root_p4_t4_s4"
    },
    {
      "source": "compiler_root_p4_t4_s4",
      "target": "compiler_root_p4_t4_s4_d1"
    },
    {
      "source": "compiler_root_p4_t4_s4",
      "target": "compiler_root_p4_t4_s4_d2"
    },
    {
      "source": "compiler_root_p4_t4",
      "target": "compiler_root_p4_t4_s5"
    },
    {
      "source": "compiler_root_p4_t4_s5",
      "target": "compiler_root_p4_t4_s5_d1"
    },
    {
      "source": "compiler_root_p4_t4_s5",
      "target": "compiler_root_p4_t4_s5_d2"
    },
    {
      "source": "compiler_root_p4",
      "target": "compiler_root_p4_t5"
    },
    {
      "source": "compiler_root_p4_t5",
      "target": "compiler_root_p4_t5_s1"
    },
    {
      "source": "compiler_root_p4_t5_s1",
      "target": "compiler_root_p4_t5_s1_d1"
    },
    {
      "source": "compiler_root_p4_t5_s1",
      "target": "compiler_root_p4_t5_s1_d2"
    },
    {
      "source": "compiler_root_p4_t5",
      "target": "compiler_root_p4_t5_s2"
    },
    {
      "source": "compiler_root_p4_t5_s2",
      "target": "compiler_root_p4_t5_s2_d1"
    },
    {
      "source": "compiler_root_p4_t5_s2",
      "target": "compiler_root_p4_t5_s2_d2"
    },
    {
      "source": "compiler_root_p4_t5",
      "target": "compiler_root_p4_t5_s3"
    },
    {
      "source": "compiler_root_p4_t5_s3",
      "target": "compiler_root_p4_t5_s3_d1"
    },
    {
      "source": "compiler_root_p4_t5_s3",
      "target": "compiler_root_p4_t5_s3_d2"
    },
    {
      "source": "compiler_root_p4_t5",
      "target": "compiler_root_p4_t5_s4"
    },
    {
      "source": "compiler_root_p4_t5_s4",
      "target": "compiler_root_p4_t5_s4_d1"
    },
    {
      "source": "compiler_root_p4_t5_s4",
      "target": "compiler_root_p4_t5_s4_d2"
    },
    {
      "source": "compiler_root_p4_t5",
      "target": "compiler_root_p4_t5_s5"
    },
    {
      "source": "compiler_root_p4_t5_s5",
      "target": "compiler_root_p4_t5_s5_d1"
    },
    {
      "source": "compiler_root_p4_t5_s5",
      "target": "compiler_root_p4_t5_s5_d2"
    },
    {
      "source": "compiler_root_p4",
      "target": "compiler_root_p4_t6"
    },
    {
      "source": "compiler_root_p4_t6",
      "target": "compiler_root_p4_t6_s1"
    },
    {
      "source": "compiler_root_p4_t6_s1",
      "target": "compiler_root_p4_t6_s1_d1"
    },
    {
      "source": "compiler_root_p4_t6_s1",
      "target": "compiler_root_p4_t6_s1_d2"
    },
    {
      "source": "compiler_root_p4_t6",
      "target": "compiler_root_p4_t6_s2"
    },
    {
      "source": "compiler_root_p4_t6_s2",
      "target": "compiler_root_p4_t6_s2_d1"
    },
    {
      "source": "compiler_root_p4_t6_s2",
      "target": "compiler_root_p4_t6_s2_d2"
    },
    {
      "source": "compiler_root_p4_t6",
      "target": "compiler_root_p4_t6_s3"
    },
    {
      "source": "compiler_root_p4_t6_s3",
      "target": "compiler_root_p4_t6_s3_d1"
    },
    {
      "source": "compiler_root_p4_t6_s3",
      "target": "compiler_root_p4_t6_s3_d2"
    },
    {
      "source": "compiler_root_p4_t6",
      "target": "compiler_root_p4_t6_s4"
    },
    {
      "source": "compiler_root_p4_t6_s4",
      "target": "compiler_root_p4_t6_s4_d1"
    },
    {
      "source": "compiler_root_p4_t6_s4",
      "target": "compiler_root_p4_t6_s4_d2"
    },
    {
      "source": "compiler_root_p4_t6",
      "target": "compiler_root_p4_t6_s5"
    },
    {
      "source": "compiler_root_p4_t6_s5",
      "target": "compiler_root_p4_t6_s5_d1"
    },
    {
      "source": "compiler_root_p4_t6_s5",
      "target": "compiler_root_p4_t6_s5_d2"
    },
    {
      "source": "compiler_root",
      "target": "compiler_root_p5"
    },
    {
      "source": "compiler_root_p5",
      "target": "compiler_root_p5_t1"
    },
    {
      "source": "compiler_root_p5_t1",
      "target": "compiler_root_p5_t1_s1"
    },
    {
      "source": "compiler_root_p5_t1_s1",
      "target": "compiler_root_p5_t1_s1_d1"
    },
    {
      "source": "compiler_root_p5_t1_s1",
      "target": "compiler_root_p5_t1_s1_d2"
    },
    {
      "source": "compiler_root_p5_t1",
      "target": "compiler_root_p5_t1_s2"
    },
    {
      "source": "compiler_root_p5_t1_s2",
      "target": "compiler_root_p5_t1_s2_d1"
    },
    {
      "source": "compiler_root_p5_t1_s2",
      "target": "compiler_root_p5_t1_s2_d2"
    },
    {
      "source": "compiler_root_p5_t1",
      "target": "compiler_root_p5_t1_s3"
    },
    {
      "source": "compiler_root_p5_t1_s3",
      "target": "compiler_root_p5_t1_s3_d1"
    },
    {
      "source": "compiler_root_p5_t1_s3",
      "target": "compiler_root_p5_t1_s3_d2"
    },
    {
      "source": "compiler_root_p5_t1",
      "target": "compiler_root_p5_t1_s4"
    },
    {
      "source": "compiler_root_p5_t1_s4",
      "target": "compiler_root_p5_t1_s4_d1"
    },
    {
      "source": "compiler_root_p5_t1_s4",
      "target": "compiler_root_p5_t1_s4_d2"
    },
    {
      "source": "compiler_root_p5_t1",
      "target": "compiler_root_p5_t1_s5"
    },
    {
      "source": "compiler_root_p5_t1_s5",
      "target": "compiler_root_p5_t1_s5_d1"
    },
    {
      "source": "compiler_root_p5_t1_s5",
      "target": "compiler_root_p5_t1_s5_d2"
    },
    {
      "source": "compiler_root_p5",
      "target": "compiler_root_p5_t2"
    },
    {
      "source": "compiler_root_p5_t2",
      "target": "compiler_root_p5_t2_s1"
    },
    {
      "source": "compiler_root_p5_t2_s1",
      "target": "compiler_root_p5_t2_s1_d1"
    },
    {
      "source": "compiler_root_p5_t2_s1",
      "target": "compiler_root_p5_t2_s1_d2"
    },
    {
      "source": "compiler_root_p5_t2",
      "target": "compiler_root_p5_t2_s2"
    },
    {
      "source": "compiler_root_p5_t2_s2",
      "target": "compiler_root_p5_t2_s2_d1"
    },
    {
      "source": "compiler_root_p5_t2_s2",
      "target": "compiler_root_p5_t2_s2_d2"
    },
    {
      "source": "compiler_root_p5_t2",
      "target": "compiler_root_p5_t2_s3"
    },
    {
      "source": "compiler_root_p5_t2_s3",
      "target": "compiler_root_p5_t2_s3_d1"
    },
    {
      "source": "compiler_root_p5_t2_s3",
      "target": "compiler_root_p5_t2_s3_d2"
    },
    {
      "source": "compiler_root_p5_t2",
      "target": "compiler_root_p5_t2_s4"
    },
    {
      "source": "compiler_root_p5_t2_s4",
      "target": "compiler_root_p5_t2_s4_d1"
    },
    {
      "source": "compiler_root_p5_t2_s4",
      "target": "compiler_root_p5_t2_s4_d2"
    },
    {
      "source": "compiler_root_p5_t2",
      "target": "compiler_root_p5_t2_s5"
    },
    {
      "source": "compiler_root_p5_t2_s5",
      "target": "compiler_root_p5_t2_s5_d1"
    },
    {
      "source": "compiler_root_p5_t2_s5",
      "target": "compiler_root_p5_t2_s5_d2"
    },
    {
      "source": "compiler_root_p5",
      "target": "compiler_root_p5_t3"
    },
    {
      "source": "compiler_root_p5_t3",
      "target": "compiler_root_p5_t3_s1"
    },
    {
      "source": "compiler_root_p5_t3_s1",
      "target": "compiler_root_p5_t3_s1_d1"
    },
    {
      "source": "compiler_root_p5_t3_s1",
      "target": "compiler_root_p5_t3_s1_d2"
    },
    {
      "source": "compiler_root_p5_t3",
      "target": "compiler_root_p5_t3_s2"
    },
    {
      "source": "compiler_root_p5_t3_s2",
      "target": "compiler_root_p5_t3_s2_d1"
    },
    {
      "source": "compiler_root_p5_t3_s2",
      "target": "compiler_root_p5_t3_s2_d2"
    },
    {
      "source": "compiler_root_p5_t3",
      "target": "compiler_root_p5_t3_s3"
    },
    {
      "source": "compiler_root_p5_t3_s3",
      "target": "compiler_root_p5_t3_s3_d1"
    },
    {
      "source": "compiler_root_p5_t3_s3",
      "target": "compiler_root_p5_t3_s3_d2"
    },
    {
      "source": "compiler_root_p5_t3",
      "target": "compiler_root_p5_t3_s4"
    },
    {
      "source": "compiler_root_p5_t3_s4",
      "target": "compiler_root_p5_t3_s4_d1"
    },
    {
      "source": "compiler_root_p5_t3_s4",
      "target": "compiler_root_p5_t3_s4_d2"
    },
    {
      "source": "compiler_root_p5_t3",
      "target": "compiler_root_p5_t3_s5"
    },
    {
      "source": "compiler_root_p5_t3_s5",
      "target": "compiler_root_p5_t3_s5_d1"
    },
    {
      "source": "compiler_root_p5_t3_s5",
      "target": "compiler_root_p5_t3_s5_d2"
    },
    {
      "source": "compiler_root_p5",
      "target": "compiler_root_p5_t4"
    },
    {
      "source": "compiler_root_p5_t4",
      "target": "compiler_root_p5_t4_s1"
    },
    {
      "source": "compiler_root_p5_t4_s1",
      "target": "compiler_root_p5_t4_s1_d1"
    },
    {
      "source": "compiler_root_p5_t4_s1",
      "target": "compiler_root_p5_t4_s1_d2"
    },
    {
      "source": "compiler_root_p5_t4",
      "target": "compiler_root_p5_t4_s2"
    },
    {
      "source": "compiler_root_p5_t4_s2",
      "target": "compiler_root_p5_t4_s2_d1"
    },
    {
      "source": "compiler_root_p5_t4_s2",
      "target": "compiler_root_p5_t4_s2_d2"
    },
    {
      "source": "compiler_root_p5_t4",
      "target": "compiler_root_p5_t4_s3"
    },
    {
      "source": "compiler_root_p5_t4_s3",
      "target": "compiler_root_p5_t4_s3_d1"
    },
    {
      "source": "compiler_root_p5_t4_s3",
      "target": "compiler_root_p5_t4_s3_d2"
    },
    {
      "source": "compiler_root_p5_t4",
      "target": "compiler_root_p5_t4_s4"
    },
    {
      "source": "compiler_root_p5_t4_s4",
      "target": "compiler_root_p5_t4_s4_d1"
    },
    {
      "source": "compiler_root_p5_t4_s4",
      "target": "compiler_root_p5_t4_s4_d2"
    },
    {
      "source": "compiler_root_p5_t4",
      "target": "compiler_root_p5_t4_s5"
    },
    {
      "source": "compiler_root_p5_t4_s5",
      "target": "compiler_root_p5_t4_s5_d1"
    },
    {
      "source": "compiler_root_p5_t4_s5",
      "target": "compiler_root_p5_t4_s5_d2"
    },
    {
      "source": "compiler_root_p5",
      "target": "compiler_root_p5_t5"
    },
    {
      "source": "compiler_root_p5_t5",
      "target": "compiler_root_p5_t5_s1"
    },
    {
      "source": "compiler_root_p5_t5_s1",
      "target": "compiler_root_p5_t5_s1_d1"
    },
    {
      "source": "compiler_root_p5_t5_s1",
      "target": "compiler_root_p5_t5_s1_d2"
    },
    {
      "source": "compiler_root_p5_t5",
      "target": "compiler_root_p5_t5_s2"
    },
    {
      "source": "compiler_root_p5_t5_s2",
      "target": "compiler_root_p5_t5_s2_d1"
    },
    {
      "source": "compiler_root_p5_t5_s2",
      "target": "compiler_root_p5_t5_s2_d2"
    },
    {
      "source": "compiler_root_p5_t5",
      "target": "compiler_root_p5_t5_s3"
    },
    {
      "source": "compiler_root_p5_t5_s3",
      "target": "compiler_root_p5_t5_s3_d1"
    },
    {
      "source": "compiler_root_p5_t5_s3",
      "target": "compiler_root_p5_t5_s3_d2"
    },
    {
      "source": "compiler_root_p5_t5",
      "target": "compiler_root_p5_t5_s4"
    },
    {
      "source": "compiler_root_p5_t5_s4",
      "target": "compiler_root_p5_t5_s4_d1"
    },
    {
      "source": "compiler_root_p5_t5_s4",
      "target": "compiler_root_p5_t5_s4_d2"
    },
    {
      "source": "compiler_root_p5_t5",
      "target": "compiler_root_p5_t5_s5"
    },
    {
      "source": "compiler_root_p5_t5_s5",
      "target": "compiler_root_p5_t5_s5_d1"
    },
    {
      "source": "compiler_root_p5_t5_s5",
      "target": "compiler_root_p5_t5_s5_d2"
    },
    {
      "source": "compiler_root_p5",
      "target": "compiler_root_p5_t6"
    },
    {
      "source": "compiler_root_p5_t6",
      "target": "compiler_root_p5_t6_s1"
    },
    {
      "source": "compiler_root_p5_t6_s1",
      "target": "compiler_root_p5_t6_s1_d1"
    },
    {
      "source": "compiler_root_p5_t6_s1",
      "target": "compiler_root_p5_t6_s1_d2"
    },
    {
      "source": "compiler_root_p5_t6",
      "target": "compiler_root_p5_t6_s2"
    },
    {
      "source": "compiler_root_p5_t6_s2",
      "target": "compiler_root_p5_t6_s2_d1"
    },
    {
      "source": "compiler_root_p5_t6_s2",
      "target": "compiler_root_p5_t6_s2_d2"
    },
    {
      "source": "compiler_root_p5_t6",
      "target": "compiler_root_p5_t6_s3"
    },
    {
      "source": "compiler_root_p5_t6_s3",
      "target": "compiler_root_p5_t6_s3_d1"
    },
    {
      "source": "compiler_root_p5_t6_s3",
      "target": "compiler_root_p5_t6_s3_d2"
    },
    {
      "source": "compiler_root_p5_t6",
      "target": "compiler_root_p5_t6_s4"
    },
    {
      "source": "compiler_root_p5_t6_s4",
      "target": "compiler_root_p5_t6_s4_d1"
    },
    {
      "source": "compiler_root_p5_t6_s4",
      "target": "compiler_root_p5_t6_s4_d2"
    },
    {
      "source": "compiler_root_p5_t6",
      "target": "compiler_root_p5_t6_s5"
    },
    {
      "source": "compiler_root_p5_t6_s5",
      "target": "compiler_root_p5_t6_s5_d1"
    },
    {
      "source": "compiler_root_p5_t6_s5",
      "target": "compiler_root_p5_t6_s5_d2"
    },
    {
      "source": "compiler_root",
      "target": "compiler_root_p6"
    },
    {
      "source": "compiler_root_p6",
      "target": "compiler_root_p6_t1"
    },
    {
      "source": "compiler_root_p6_t1",
      "target": "compiler_root_p6_t1_s1"
    },
    {
      "source": "compiler_root_p6_t1_s1",
      "target": "compiler_root_p6_t1_s1_d1"
    },
    {
      "source": "compiler_root_p6_t1_s1",
      "target": "compiler_root_p6_t1_s1_d2"
    },
    {
      "source": "compiler_root_p6_t1",
      "target": "compiler_root_p6_t1_s2"
    },
    {
      "source": "compiler_root_p6_t1_s2",
      "target": "compiler_root_p6_t1_s2_d1"
    },
    {
      "source": "compiler_root_p6_t1_s2",
      "target": "compiler_root_p6_t1_s2_d2"
    },
    {
      "source": "compiler_root_p6_t1",
      "target": "compiler_root_p6_t1_s3"
    },
    {
      "source": "compiler_root_p6_t1_s3",
      "target": "compiler_root_p6_t1_s3_d1"
    },
    {
      "source": "compiler_root_p6_t1_s3",
      "target": "compiler_root_p6_t1_s3_d2"
    },
    {
      "source": "compiler_root_p6_t1",
      "target": "compiler_root_p6_t1_s4"
    },
    {
      "source": "compiler_root_p6_t1_s4",
      "target": "compiler_root_p6_t1_s4_d1"
    },
    {
      "source": "compiler_root_p6_t1_s4",
      "target": "compiler_root_p6_t1_s4_d2"
    },
    {
      "source": "compiler_root_p6_t1",
      "target": "compiler_root_p6_t1_s5"
    },
    {
      "source": "compiler_root_p6_t1_s5",
      "target": "compiler_root_p6_t1_s5_d1"
    },
    {
      "source": "compiler_root_p6_t1_s5",
      "target": "compiler_root_p6_t1_s5_d2"
    },
    {
      "source": "compiler_root_p6",
      "target": "compiler_root_p6_t2"
    },
    {
      "source": "compiler_root_p6_t2",
      "target": "compiler_root_p6_t2_s1"
    },
    {
      "source": "compiler_root_p6_t2_s1",
      "target": "compiler_root_p6_t2_s1_d1"
    },
    {
      "source": "compiler_root_p6_t2_s1",
      "target": "compiler_root_p6_t2_s1_d2"
    },
    {
      "source": "compiler_root_p6_t2",
      "target": "compiler_root_p6_t2_s2"
    },
    {
      "source": "compiler_root_p6_t2_s2",
      "target": "compiler_root_p6_t2_s2_d1"
    },
    {
      "source": "compiler_root_p6_t2_s2",
      "target": "compiler_root_p6_t2_s2_d2"
    },
    {
      "source": "compiler_root_p6_t2",
      "target": "compiler_root_p6_t2_s3"
    },
    {
      "source": "compiler_root_p6_t2_s3",
      "target": "compiler_root_p6_t2_s3_d1"
    },
    {
      "source": "compiler_root_p6_t2_s3",
      "target": "compiler_root_p6_t2_s3_d2"
    },
    {
      "source": "compiler_root_p6_t2",
      "target": "compiler_root_p6_t2_s4"
    },
    {
      "source": "compiler_root_p6_t2_s4",
      "target": "compiler_root_p6_t2_s4_d1"
    },
    {
      "source": "compiler_root_p6_t2_s4",
      "target": "compiler_root_p6_t2_s4_d2"
    },
    {
      "source": "compiler_root_p6_t2",
      "target": "compiler_root_p6_t2_s5"
    },
    {
      "source": "compiler_root_p6_t2_s5",
      "target": "compiler_root_p6_t2_s5_d1"
    },
    {
      "source": "compiler_root_p6_t2_s5",
      "target": "compiler_root_p6_t2_s5_d2"
    },
    {
      "source": "compiler_root_p6",
      "target": "compiler_root_p6_t3"
    },
    {
      "source": "compiler_root_p6_t3",
      "target": "compiler_root_p6_t3_s1"
    },
    {
      "source": "compiler_root_p6_t3_s1",
      "target": "compiler_root_p6_t3_s1_d1"
    },
    {
      "source": "compiler_root_p6_t3_s1",
      "target": "compiler_root_p6_t3_s1_d2"
    },
    {
      "source": "compiler_root_p6_t3",
      "target": "compiler_root_p6_t3_s2"
    },
    {
      "source": "compiler_root_p6_t3_s2",
      "target": "compiler_root_p6_t3_s2_d1"
    },
    {
      "source": "compiler_root_p6_t3_s2",
      "target": "compiler_root_p6_t3_s2_d2"
    },
    {
      "source": "compiler_root_p6_t3",
      "target": "compiler_root_p6_t3_s3"
    },
    {
      "source": "compiler_root_p6_t3_s3",
      "target": "compiler_root_p6_t3_s3_d1"
    },
    {
      "source": "compiler_root_p6_t3_s3",
      "target": "compiler_root_p6_t3_s3_d2"
    },
    {
      "source": "compiler_root_p6_t3",
      "target": "compiler_root_p6_t3_s4"
    },
    {
      "source": "compiler_root_p6_t3_s4",
      "target": "compiler_root_p6_t3_s4_d1"
    },
    {
      "source": "compiler_root_p6_t3_s4",
      "target": "compiler_root_p6_t3_s4_d2"
    },
    {
      "source": "compiler_root_p6_t3",
      "target": "compiler_root_p6_t3_s5"
    },
    {
      "source": "compiler_root_p6_t3_s5",
      "target": "compiler_root_p6_t3_s5_d1"
    },
    {
      "source": "compiler_root_p6_t3_s5",
      "target": "compiler_root_p6_t3_s5_d2"
    },
    {
      "source": "compiler_root_p6",
      "target": "compiler_root_p6_t4"
    },
    {
      "source": "compiler_root_p6_t4",
      "target": "compiler_root_p6_t4_s1"
    },
    {
      "source": "compiler_root_p6_t4_s1",
      "target": "compiler_root_p6_t4_s1_d1"
    },
    {
      "source": "compiler_root_p6_t4_s1",
      "target": "compiler_root_p6_t4_s1_d2"
    },
    {
      "source": "compiler_root_p6_t4",
      "target": "compiler_root_p6_t4_s2"
    },
    {
      "source": "compiler_root_p6_t4_s2",
      "target": "compiler_root_p6_t4_s2_d1"
    },
    {
      "source": "compiler_root_p6_t4_s2",
      "target": "compiler_root_p6_t4_s2_d2"
    },
    {
      "source": "compiler_root_p6_t4",
      "target": "compiler_root_p6_t4_s3"
    },
    {
      "source": "compiler_root_p6_t4_s3",
      "target": "compiler_root_p6_t4_s3_d1"
    },
    {
      "source": "compiler_root_p6_t4_s3",
      "target": "compiler_root_p6_t4_s3_d2"
    },
    {
      "source": "compiler_root_p6_t4",
      "target": "compiler_root_p6_t4_s4"
    },
    {
      "source": "compiler_root_p6_t4_s4",
      "target": "compiler_root_p6_t4_s4_d1"
    },
    {
      "source": "compiler_root_p6_t4_s4",
      "target": "compiler_root_p6_t4_s4_d2"
    },
    {
      "source": "compiler_root_p6_t4",
      "target": "compiler_root_p6_t4_s5"
    },
    {
      "source": "compiler_root_p6_t4_s5",
      "target": "compiler_root_p6_t4_s5_d1"
    },
    {
      "source": "compiler_root_p6_t4_s5",
      "target": "compiler_root_p6_t4_s5_d2"
    },
    {
      "source": "compiler_root_p6",
      "target": "compiler_root_p6_t5"
    },
    {
      "source": "compiler_root_p6_t5",
      "target": "compiler_root_p6_t5_s1"
    },
    {
      "source": "compiler_root_p6_t5_s1",
      "target": "compiler_root_p6_t5_s1_d1"
    },
    {
      "source": "compiler_root_p6_t5_s1",
      "target": "compiler_root_p6_t5_s1_d2"
    },
    {
      "source": "compiler_root_p6_t5",
      "target": "compiler_root_p6_t5_s2"
    },
    {
      "source": "compiler_root_p6_t5_s2",
      "target": "compiler_root_p6_t5_s2_d1"
    },
    {
      "source": "compiler_root_p6_t5_s2",
      "target": "compiler_root_p6_t5_s2_d2"
    },
    {
      "source": "compiler_root_p6_t5",
      "target": "compiler_root_p6_t5_s3"
    },
    {
      "source": "compiler_root_p6_t5_s3",
      "target": "compiler_root_p6_t5_s3_d1"
    },
    {
      "source": "compiler_root_p6_t5_s3",
      "target": "compiler_root_p6_t5_s3_d2"
    },
    {
      "source": "compiler_root_p6_t5",
      "target": "compiler_root_p6_t5_s4"
    },
    {
      "source": "compiler_root_p6_t5_s4",
      "target": "compiler_root_p6_t5_s4_d1"
    },
    {
      "source": "compiler_root_p6_t5_s4",
      "target": "compiler_root_p6_t5_s4_d2"
    },
    {
      "source": "compiler_root_p6_t5",
      "target": "compiler_root_p6_t5_s5"
    },
    {
      "source": "compiler_root_p6_t5_s5",
      "target": "compiler_root_p6_t5_s5_d1"
    },
    {
      "source": "compiler_root_p6_t5_s5",
      "target": "compiler_root_p6_t5_s5_d2"
    },
    {
      "source": "compiler_root_p6",
      "target": "compiler_root_p6_t6"
    },
    {
      "source": "compiler_root_p6_t6",
      "target": "compiler_root_p6_t6_s1"
    },
    {
      "source": "compiler_root_p6_t6_s1",
      "target": "compiler_root_p6_t6_s1_d1"
    },
    {
      "source": "compiler_root_p6_t6_s1",
      "target": "compiler_root_p6_t6_s1_d2"
    },
    {
      "source": "compiler_root_p6_t6",
      "target": "compiler_root_p6_t6_s2"
    },
    {
      "source": "compiler_root_p6_t6_s2",
      "target": "compiler_root_p6_t6_s2_d1"
    },
    {
      "source": "compiler_root_p6_t6_s2",
      "target": "compiler_root_p6_t6_s2_d2"
    },
    {
      "source": "compiler_root_p6_t6",
      "target": "compiler_root_p6_t6_s3"
    },
    {
      "source": "compiler_root_p6_t6_s3",
      "target": "compiler_root_p6_t6_s3_d1"
    },
    {
      "source": "compiler_root_p6_t6_s3",
      "target": "compiler_root_p6_t6_s3_d2"
    },
    {
      "source": "compiler_root_p6_t6",
      "target": "compiler_root_p6_t6_s4"
    },
    {
      "source": "compiler_root_p6_t6_s4",
      "target": "compiler_root_p6_t6_s4_d1"
    },
    {
      "source": "compiler_root_p6_t6_s4",
      "target": "compiler_root_p6_t6_s4_d2"
    },
    {
      "source": "compiler_root_p6_t6",
      "target": "compiler_root_p6_t6_s5"
    },
    {
      "source": "compiler_root_p6_t6_s5",
      "target": "compiler_root_p6_t6_s5_d1"
    },
    {
      "source": "compiler_root_p6_t6_s5",
      "target": "compiler_root_p6_t6_s5_d2"
    },
    {
      "source": "compiler_root",
      "target": "compiler_root_p7"
    },
    {
      "source": "compiler_root_p7",
      "target": "compiler_root_p7_t1"
    },
    {
      "source": "compiler_root_p7_t1",
      "target": "compiler_root_p7_t1_s1"
    },
    {
      "source": "compiler_root_p7_t1_s1",
      "target": "compiler_root_p7_t1_s1_d1"
    },
    {
      "source": "compiler_root_p7_t1_s1",
      "target": "compiler_root_p7_t1_s1_d2"
    },
    {
      "source": "compiler_root_p7_t1",
      "target": "compiler_root_p7_t1_s2"
    },
    {
      "source": "compiler_root_p7_t1_s2",
      "target": "compiler_root_p7_t1_s2_d1"
    },
    {
      "source": "compiler_root_p7_t1_s2",
      "target": "compiler_root_p7_t1_s2_d2"
    },
    {
      "source": "compiler_root_p7_t1",
      "target": "compiler_root_p7_t1_s3"
    },
    {
      "source": "compiler_root_p7_t1_s3",
      "target": "compiler_root_p7_t1_s3_d1"
    },
    {
      "source": "compiler_root_p7_t1_s3",
      "target": "compiler_root_p7_t1_s3_d2"
    },
    {
      "source": "compiler_root_p7_t1",
      "target": "compiler_root_p7_t1_s4"
    },
    {
      "source": "compiler_root_p7_t1_s4",
      "target": "compiler_root_p7_t1_s4_d1"
    },
    {
      "source": "compiler_root_p7_t1_s4",
      "target": "compiler_root_p7_t1_s4_d2"
    },
    {
      "source": "compiler_root_p7_t1",
      "target": "compiler_root_p7_t1_s5"
    },
    {
      "source": "compiler_root_p7_t1_s5",
      "target": "compiler_root_p7_t1_s5_d1"
    },
    {
      "source": "compiler_root_p7_t1_s5",
      "target": "compiler_root_p7_t1_s5_d2"
    },
    {
      "source": "compiler_root_p7",
      "target": "compiler_root_p7_t2"
    },
    {
      "source": "compiler_root_p7_t2",
      "target": "compiler_root_p7_t2_s1"
    },
    {
      "source": "compiler_root_p7_t2_s1",
      "target": "compiler_root_p7_t2_s1_d1"
    },
    {
      "source": "compiler_root_p7_t2_s1",
      "target": "compiler_root_p7_t2_s1_d2"
    },
    {
      "source": "compiler_root_p7_t2",
      "target": "compiler_root_p7_t2_s2"
    },
    {
      "source": "compiler_root_p7_t2_s2",
      "target": "compiler_root_p7_t2_s2_d1"
    },
    {
      "source": "compiler_root_p7_t2_s2",
      "target": "compiler_root_p7_t2_s2_d2"
    },
    {
      "source": "compiler_root_p7_t2",
      "target": "compiler_root_p7_t2_s3"
    },
    {
      "source": "compiler_root_p7_t2_s3",
      "target": "compiler_root_p7_t2_s3_d1"
    },
    {
      "source": "compiler_root_p7_t2_s3",
      "target": "compiler_root_p7_t2_s3_d2"
    },
    {
      "source": "compiler_root_p7_t2",
      "target": "compiler_root_p7_t2_s4"
    },
    {
      "source": "compiler_root_p7_t2_s4",
      "target": "compiler_root_p7_t2_s4_d1"
    },
    {
      "source": "compiler_root_p7_t2_s4",
      "target": "compiler_root_p7_t2_s4_d2"
    },
    {
      "source": "compiler_root_p7_t2",
      "target": "compiler_root_p7_t2_s5"
    },
    {
      "source": "compiler_root_p7_t2_s5",
      "target": "compiler_root_p7_t2_s5_d1"
    },
    {
      "source": "compiler_root_p7_t2_s5",
      "target": "compiler_root_p7_t2_s5_d2"
    },
    {
      "source": "compiler_root_p7",
      "target": "compiler_root_p7_t3"
    },
    {
      "source": "compiler_root_p7_t3",
      "target": "compiler_root_p7_t3_s1"
    },
    {
      "source": "compiler_root_p7_t3_s1",
      "target": "compiler_root_p7_t3_s1_d1"
    },
    {
      "source": "compiler_root_p7_t3_s1",
      "target": "compiler_root_p7_t3_s1_d2"
    },
    {
      "source": "compiler_root_p7_t3",
      "target": "compiler_root_p7_t3_s2"
    },
    {
      "source": "compiler_root_p7_t3_s2",
      "target": "compiler_root_p7_t3_s2_d1"
    },
    {
      "source": "compiler_root_p7_t3_s2",
      "target": "compiler_root_p7_t3_s2_d2"
    },
    {
      "source": "compiler_root_p7_t3",
      "target": "compiler_root_p7_t3_s3"
    },
    {
      "source": "compiler_root_p7_t3_s3",
      "target": "compiler_root_p7_t3_s3_d1"
    },
    {
      "source": "compiler_root_p7_t3_s3",
      "target": "compiler_root_p7_t3_s3_d2"
    },
    {
      "source": "compiler_root_p7_t3",
      "target": "compiler_root_p7_t3_s4"
    },
    {
      "source": "compiler_root_p7_t3_s4",
      "target": "compiler_root_p7_t3_s4_d1"
    },
    {
      "source": "compiler_root_p7_t3_s4",
      "target": "compiler_root_p7_t3_s4_d2"
    },
    {
      "source": "compiler_root_p7_t3",
      "target": "compiler_root_p7_t3_s5"
    },
    {
      "source": "compiler_root_p7_t3_s5",
      "target": "compiler_root_p7_t3_s5_d1"
    },
    {
      "source": "compiler_root_p7_t3_s5",
      "target": "compiler_root_p7_t3_s5_d2"
    },
    {
      "source": "compiler_root_p7",
      "target": "compiler_root_p7_t4"
    },
    {
      "source": "compiler_root_p7_t4",
      "target": "compiler_root_p7_t4_s1"
    },
    {
      "source": "compiler_root_p7_t4_s1",
      "target": "compiler_root_p7_t4_s1_d1"
    },
    {
      "source": "compiler_root_p7_t4_s1",
      "target": "compiler_root_p7_t4_s1_d2"
    },
    {
      "source": "compiler_root_p7_t4",
      "target": "compiler_root_p7_t4_s2"
    },
    {
      "source": "compiler_root_p7_t4_s2",
      "target": "compiler_root_p7_t4_s2_d1"
    },
    {
      "source": "compiler_root_p7_t4_s2",
      "target": "compiler_root_p7_t4_s2_d2"
    },
    {
      "source": "compiler_root_p7_t4",
      "target": "compiler_root_p7_t4_s3"
    },
    {
      "source": "compiler_root_p7_t4_s3",
      "target": "compiler_root_p7_t4_s3_d1"
    },
    {
      "source": "compiler_root_p7_t4_s3",
      "target": "compiler_root_p7_t4_s3_d2"
    },
    {
      "source": "compiler_root_p7_t4",
      "target": "compiler_root_p7_t4_s4"
    },
    {
      "source": "compiler_root_p7_t4_s4",
      "target": "compiler_root_p7_t4_s4_d1"
    },
    {
      "source": "compiler_root_p7_t4_s4",
      "target": "compiler_root_p7_t4_s4_d2"
    },
    {
      "source": "compiler_root_p7_t4",
      "target": "compiler_root_p7_t4_s5"
    },
    {
      "source": "compiler_root_p7_t4_s5",
      "target": "compiler_root_p7_t4_s5_d1"
    },
    {
      "source": "compiler_root_p7_t4_s5",
      "target": "compiler_root_p7_t4_s5_d2"
    },
    {
      "source": "compiler_root_p7",
      "target": "compiler_root_p7_t5"
    },
    {
      "source": "compiler_root_p7_t5",
      "target": "compiler_root_p7_t5_s1"
    },
    {
      "source": "compiler_root_p7_t5_s1",
      "target": "compiler_root_p7_t5_s1_d1"
    },
    {
      "source": "compiler_root_p7_t5_s1",
      "target": "compiler_root_p7_t5_s1_d2"
    },
    {
      "source": "compiler_root_p7_t5",
      "target": "compiler_root_p7_t5_s2"
    },
    {
      "source": "compiler_root_p7_t5_s2",
      "target": "compiler_root_p7_t5_s2_d1"
    },
    {
      "source": "compiler_root_p7_t5_s2",
      "target": "compiler_root_p7_t5_s2_d2"
    },
    {
      "source": "compiler_root_p7_t5",
      "target": "compiler_root_p7_t5_s3"
    },
    {
      "source": "compiler_root_p7_t5_s3",
      "target": "compiler_root_p7_t5_s3_d1"
    },
    {
      "source": "compiler_root_p7_t5_s3",
      "target": "compiler_root_p7_t5_s3_d2"
    },
    {
      "source": "compiler_root_p7_t5",
      "target": "compiler_root_p7_t5_s4"
    },
    {
      "source": "compiler_root_p7_t5_s4",
      "target": "compiler_root_p7_t5_s4_d1"
    },
    {
      "source": "compiler_root_p7_t5_s4",
      "target": "compiler_root_p7_t5_s4_d2"
    },
    {
      "source": "compiler_root_p7_t5",
      "target": "compiler_root_p7_t5_s5"
    },
    {
      "source": "compiler_root_p7_t5_s5",
      "target": "compiler_root_p7_t5_s5_d1"
    },
    {
      "source": "compiler_root_p7_t5_s5",
      "target": "compiler_root_p7_t5_s5_d2"
    },
    {
      "source": "compiler_root_p7",
      "target": "compiler_root_p7_t6"
    },
    {
      "source": "compiler_root_p7_t6",
      "target": "compiler_root_p7_t6_s1"
    },
    {
      "source": "compiler_root_p7_t6_s1",
      "target": "compiler_root_p7_t6_s1_d1"
    },
    {
      "source": "compiler_root_p7_t6_s1",
      "target": "compiler_root_p7_t6_s1_d2"
    },
    {
      "source": "compiler_root_p7_t6",
      "target": "compiler_root_p7_t6_s2"
    },
    {
      "source": "compiler_root_p7_t6_s2",
      "target": "compiler_root_p7_t6_s2_d1"
    },
    {
      "source": "compiler_root_p7_t6_s2",
      "target": "compiler_root_p7_t6_s2_d2"
    },
    {
      "source": "compiler_root_p7_t6",
      "target": "compiler_root_p7_t6_s3"
    },
    {
      "source": "compiler_root_p7_t6_s3",
      "target": "compiler_root_p7_t6_s3_d1"
    },
    {
      "source": "compiler_root_p7_t6_s3",
      "target": "compiler_root_p7_t6_s3_d2"
    },
    {
      "source": "compiler_root_p7_t6",
      "target": "compiler_root_p7_t6_s4"
    },
    {
      "source": "compiler_root_p7_t6_s4",
      "target": "compiler_root_p7_t6_s4_d1"
    },
    {
      "source": "compiler_root_p7_t6_s4",
      "target": "compiler_root_p7_t6_s4_d2"
    },
    {
      "source": "compiler_root_p7_t6",
      "target": "compiler_root_p7_t6_s5"
    },
    {
      "source": "compiler_root_p7_t6_s5",
      "target": "compiler_root_p7_t6_s5_d1"
    },
    {
      "source": "compiler_root_p7_t6_s5",
      "target": "compiler_root_p7_t6_s5_d2"
    },
    {
      "source": "compiler_root",
      "target": "compiler_root_p8"
    },
    {
      "source": "compiler_root_p8",
      "target": "compiler_root_p8_t1"
    },
    {
      "source": "compiler_root_p8_t1",
      "target": "compiler_root_p8_t1_s1"
    },
    {
      "source": "compiler_root_p8_t1_s1",
      "target": "compiler_root_p8_t1_s1_d1"
    },
    {
      "source": "compiler_root_p8_t1_s1",
      "target": "compiler_root_p8_t1_s1_d2"
    },
    {
      "source": "compiler_root_p8_t1",
      "target": "compiler_root_p8_t1_s2"
    },
    {
      "source": "compiler_root_p8_t1_s2",
      "target": "compiler_root_p8_t1_s2_d1"
    },
    {
      "source": "compiler_root_p8_t1_s2",
      "target": "compiler_root_p8_t1_s2_d2"
    },
    {
      "source": "compiler_root_p8_t1_s2",
      "target": "compiler_root_p8_t1_s2_d3"
    },
    {
      "source": "compiler_root_p8_t1",
      "target": "compiler_root_p8_t1_s3"
    },
    {
      "source": "compiler_root_p8_t1_s3",
      "target": "compiler_root_p8_t1_s3_d1"
    },
    {
      "source": "compiler_root_p8_t1_s3",
      "target": "compiler_root_p8_t1_s3_d2"
    },
    {
      "source": "compiler_root_p8_t1",
      "target": "compiler_root_p8_t1_s4"
    },
    {
      "source": "compiler_root_p8_t1_s4",
      "target": "compiler_root_p8_t1_s4_d1"
    },
    {
      "source": "compiler_root_p8_t1_s4",
      "target": "compiler_root_p8_t1_s4_d2"
    },
    {
      "source": "compiler_root_p8_t1",
      "target": "compiler_root_p8_t1_s5"
    },
    {
      "source": "compiler_root_p8_t1_s5",
      "target": "compiler_root_p8_t1_s5_d1"
    },
    {
      "source": "compiler_root_p8_t1_s5",
      "target": "compiler_root_p8_t1_s5_d2"
    },
    {
      "source": "compiler_root_p8",
      "target": "compiler_root_p8_t2"
    },
    {
      "source": "compiler_root_p8_t2",
      "target": "compiler_root_p8_t2_s1"
    },
    {
      "source": "compiler_root_p8_t2_s1",
      "target": "compiler_root_p8_t2_s1_d1"
    },
    {
      "source": "compiler_root_p8_t2_s1",
      "target": "compiler_root_p8_t2_s1_d2"
    },
    {
      "source": "compiler_root_p8_t2",
      "target": "compiler_root_p8_t2_s2"
    },
    {
      "source": "compiler_root_p8_t2_s2",
      "target": "compiler_root_p8_t2_s2_d1"
    },
    {
      "source": "compiler_root_p8_t2_s2",
      "target": "compiler_root_p8_t2_s2_d2"
    },
    {
      "source": "compiler_root_p8_t2",
      "target": "compiler_root_p8_t2_s3"
    },
    {
      "source": "compiler_root_p8_t2_s3",
      "target": "compiler_root_p8_t2_s3_d1"
    },
    {
      "source": "compiler_root_p8_t2_s3",
      "target": "compiler_root_p8_t2_s3_d2"
    },
    {
      "source": "compiler_root_p8_t2",
      "target": "compiler_root_p8_t2_s4"
    },
    {
      "source": "compiler_root_p8_t2_s4",
      "target": "compiler_root_p8_t2_s4_d1"
    },
    {
      "source": "compiler_root_p8_t2_s4",
      "target": "compiler_root_p8_t2_s4_d2"
    },
    {
      "source": "compiler_root_p8_t2",
      "target": "compiler_root_p8_t2_s5"
    },
    {
      "source": "compiler_root_p8_t2_s5",
      "target": "compiler_root_p8_t2_s5_d1"
    },
    {
      "source": "compiler_root_p8_t2_s5",
      "target": "compiler_root_p8_t2_s5_d2"
    },
    {
      "source": "compiler_root_p8",
      "target": "compiler_root_p8_t3"
    },
    {
      "source": "compiler_root_p8_t3",
      "target": "compiler_root_p8_t3_s1"
    },
    {
      "source": "compiler_root_p8_t3_s1",
      "target": "compiler_root_p8_t3_s1_d1"
    },
    {
      "source": "compiler_root_p8_t3_s1",
      "target": "compiler_root_p8_t3_s1_d2"
    },
    {
      "source": "compiler_root_p8_t3",
      "target": "compiler_root_p8_t3_s2"
    },
    {
      "source": "compiler_root_p8_t3_s2",
      "target": "compiler_root_p8_t3_s2_d1"
    },
    {
      "source": "compiler_root_p8_t3_s2",
      "target": "compiler_root_p8_t3_s2_d2"
    },
    {
      "source": "compiler_root_p8_t3",
      "target": "compiler_root_p8_t3_s3"
    },
    {
      "source": "compiler_root_p8_t3_s3",
      "target": "compiler_root_p8_t3_s3_d1"
    },
    {
      "source": "compiler_root_p8_t3_s3",
      "target": "compiler_root_p8_t3_s3_d2"
    },
    {
      "source": "compiler_root_p8_t3",
      "target": "compiler_root_p8_t3_s4"
    },
    {
      "source": "compiler_root_p8_t3_s4",
      "target": "compiler_root_p8_t3_s4_d1"
    },
    {
      "source": "compiler_root_p8_t3_s4",
      "target": "compiler_root_p8_t3_s4_d2"
    },
    {
      "source": "compiler_root_p8_t3",
      "target": "compiler_root_p8_t3_s5"
    },
    {
      "source": "compiler_root_p8_t3_s5",
      "target": "compiler_root_p8_t3_s5_d1"
    },
    {
      "source": "compiler_root_p8_t3_s5",
      "target": "compiler_root_p8_t3_s5_d2"
    },
    {
      "source": "compiler_root_p8",
      "target": "compiler_root_p8_t4"
    },
    {
      "source": "compiler_root_p8_t4",
      "target": "compiler_root_p8_t4_s1"
    },
    {
      "source": "compiler_root_p8_t4_s1",
      "target": "compiler_root_p8_t4_s1_d1"
    },
    {
      "source": "compiler_root_p8_t4_s1",
      "target": "compiler_root_p8_t4_s1_d2"
    },
    {
      "source": "compiler_root_p8_t4",
      "target": "compiler_root_p8_t4_s2"
    },
    {
      "source": "compiler_root_p8_t4_s2",
      "target": "compiler_root_p8_t4_s2_d1"
    },
    {
      "source": "compiler_root_p8_t4_s2",
      "target": "compiler_root_p8_t4_s2_d2"
    },
    {
      "source": "compiler_root_p8_t4",
      "target": "compiler_root_p8_t4_s3"
    },
    {
      "source": "compiler_root_p8_t4_s3",
      "target": "compiler_root_p8_t4_s3_d1"
    },
    {
      "source": "compiler_root_p8_t4_s3",
      "target": "compiler_root_p8_t4_s3_d2"
    },
    {
      "source": "compiler_root_p8_t4",
      "target": "compiler_root_p8_t4_s4"
    },
    {
      "source": "compiler_root_p8_t4_s4",
      "target": "compiler_root_p8_t4_s4_d1"
    },
    {
      "source": "compiler_root_p8_t4_s4",
      "target": "compiler_root_p8_t4_s4_d2"
    },
    {
      "source": "compiler_root_p8_t4",
      "target": "compiler_root_p8_t4_s5"
    },
    {
      "source": "compiler_root_p8_t4_s5",
      "target": "compiler_root_p8_t4_s5_d1"
    },
    {
      "source": "compiler_root_p8_t4_s5",
      "target": "compiler_root_p8_t4_s5_d2"
    },
    {
      "source": "compiler_root_p8",
      "target": "compiler_root_p8_t5"
    },
    {
      "source": "compiler_root_p8_t5",
      "target": "compiler_root_p8_t5_s1"
    },
    {
      "source": "compiler_root_p8_t5_s1",
      "target": "compiler_root_p8_t5_s1_d1"
    },
    {
      "source": "compiler_root_p8_t5_s1",
      "target": "compiler_root_p8_t5_s1_d2"
    },
    {
      "source": "compiler_root_p8_t5",
      "target": "compiler_root_p8_t5_s2"
    },
    {
      "source": "compiler_root_p8_t5_s2",
      "target": "compiler_root_p8_t5_s2_d1"
    },
    {
      "source": "compiler_root_p8_t5_s2",
      "target": "compiler_root_p8_t5_s2_d2"
    },
    {
      "source": "compiler_root_p8_t5",
      "target": "compiler_root_p8_t5_s3"
    },
    {
      "source": "compiler_root_p8_t5_s3",
      "target": "compiler_root_p8_t5_s3_d1"
    },
    {
      "source": "compiler_root_p8_t5_s3",
      "target": "compiler_root_p8_t5_s3_d2"
    },
    {
      "source": "compiler_root_p8_t5",
      "target": "compiler_root_p8_t5_s4"
    },
    {
      "source": "compiler_root_p8_t5_s4",
      "target": "compiler_root_p8_t5_s4_d1"
    },
    {
      "source": "compiler_root_p8_t5_s4",
      "target": "compiler_root_p8_t5_s4_d2"
    },
    {
      "source": "compiler_root_p8_t5",
      "target": "compiler_root_p8_t5_s5"
    },
    {
      "source": "compiler_root_p8_t5_s5",
      "target": "compiler_root_p8_t5_s5_d1"
    },
    {
      "source": "compiler_root_p8_t5_s5",
      "target": "compiler_root_p8_t5_s5_d2"
    },
    {
      "source": "compiler_root_p8",
      "target": "compiler_root_p8_t6"
    },
    {
      "source": "compiler_root_p8_t6",
      "target": "compiler_root_p8_t6_s1"
    },
    {
      "source": "compiler_root_p8_t6_s1",
      "target": "compiler_root_p8_t6_s1_d1"
    },
    {
      "source": "compiler_root_p8_t6_s1",
      "target": "compiler_root_p8_t6_s1_d2"
    },
    {
      "source": "compiler_root_p8_t6",
      "target": "compiler_root_p8_t6_s2"
    },
    {
      "source": "compiler_root_p8_t6_s2",
      "target": "compiler_root_p8_t6_s2_d1"
    },
    {
      "source": "compiler_root_p8_t6_s2",
      "target": "compiler_root_p8_t6_s2_d2"
    },
    {
      "source": "compiler_root_p8_t6",
      "target": "compiler_root_p8_t6_s3"
    },
    {
      "source": "compiler_root_p8_t6_s3",
      "target": "compiler_root_p8_t6_s3_d1"
    },
    {
      "source": "compiler_root_p8_t6_s3",
      "target": "compiler_root_p8_t6_s3_d2"
    },
    {
      "source": "compiler_root_p8_t6",
      "target": "compiler_root_p8_t6_s4"
    },
    {
      "source": "compiler_root_p8_t6_s4",
      "target": "compiler_root_p8_t6_s4_d1"
    },
    {
      "source": "compiler_root_p8_t6_s4",
      "target": "compiler_root_p8_t6_s4_d2"
    },
    {
      "source": "compiler_root_p8_t6",
      "target": "compiler_root_p8_t6_s5"
    },
    {
      "source": "compiler_root_p8_t6_s5",
      "target": "compiler_root_p8_t6_s5_d1"
    },
    {
      "source": "compiler_root_p8_t6_s5",
      "target": "compiler_root_p8_t6_s5_d2"
    }
  ]
};
