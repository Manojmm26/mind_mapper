import { MindMapData } from "../../services/llmService";

export const ML_FROM_FIRST_PRINCIPLES_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "ml_root",
      "label": "Machine Learning & Deep Learning from First Principles",
      "description": "Massive foundational blueprint covering mathematics, classical algorithms, neural network mechanics, computer vision, sequence models, training infrastructure, MLOps, and AI safety.",
      "type": "topic"
    },
    {
      "id": "ml_root_p1",
      "label": "Linear Algebra & Calculus Foundations",
      "description": "Mathematical machinery underlying neural representations, loss landscapes, vector spaces, and gradient optimizations.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t1",
      "label": "Vector Spaces & Inner Products",
      "description": "High-dimensional vector representations, inner products, norms, and spatial geometric projections.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t1_s1",
      "label": "Cosine Similarity & Distance",
      "description": "Measures normalized vector alignment: cos(θ) = (A·B) / (||A||*||B||), ranging from -1 to 1 regardless of magnitude.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t1_s1_d1",
      "label": "Dot Product Normalization",
      "description": "Dividing by Euclidean L2 norms cancels vector scaling, making cosine distance robust to document or embedding length variations.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t1_s1_d2",
      "label": "High-Dimensional Orthogonality",
      "description": "In d > 1000 spaces, randomly sampled vectors are near-orthogonal with probability close to 1 due to concentration of measure.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t1_s2",
      "label": "L1 and L2 Norm Metrics",
      "description": "L1 Manhattan norm sum(|x_i|) enforces sparse feature metrics; L2 Euclidean norm sqrt(sum(x_i^2)) penalizes large outliers.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t1_s2_d1",
      "label": "Manhattan Distance Sparsity",
      "description": "L1 norm contour lines have sharp diamond corners along axes, forcing optimization solutions directly onto coordinate hyperplanes.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t1_s2_d2",
      "label": "Euclidean Isotropic Geometry",
      "description": "L2 norm produces spherical hypersphere level sets, invariant to coordinate system rotations in vector spaces.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t1_s3",
      "label": "Vector Projections & Subspaces",
      "description": "Projecting vector u onto vector v: proj_v(u) = ((u·v)/||v||^2)*v, decomposing signals into orthogonal components.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t1_s3_d1",
      "label": "Gram-Schmidt Orthogonalization",
      "description": "Iteratively subtracts vector projections to construct an orthonormal basis from any linearly independent set of vectors.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t1_s3_d2",
      "label": "Null Space & Rank-Nullity",
      "description": "The dimension of a matrix domain equals its rank plus the dimension of its kernel null space dim(null(A)) + rank(A) = n.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t1_s4",
      "label": "Matrix Multiplication Mechanics",
      "description": "Transformation composition C = AB where C_ij = sum_k(A_ik * B_kj), scaling with O(n^3) naive or O(n^2.81) Strassen complexity.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t1_s4_d1",
      "label": "BLAS Gemm Hardware Acceleration",
      "description": "General Matrix Multiply leverages GPU SIMD instruction sets (Tensor Cores) using tiled memory access for peak FLOPS.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t1_s4_d2",
      "label": "Non-Commutative Linear Transforms",
      "description": "Matrix multiplication AB ≠ BA reflects that order of geometric rotations and shear transformations matters in higher dimensions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t1_s5",
      "label": "Determinants & Linear Volume",
      "description": "det(A) quantifies the hyper-volume scaling factor of a linear transformation; det(A) = 0 indicates a singular non-invertible matrix.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t1_s5_d1",
      "label": "Orientation Flip & Negative Det",
      "description": "A negative determinant signals that the transformation flips spatial orientation (e.g. left-handed vs right-handed coordinate frame).",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t1_s5_d2",
      "label": "Product Rule for Determinants",
      "description": "det(AB) = det(A)*det(B) allows multi-stage linear transformations to compute total volume scaling multiplicatively.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t2",
      "label": "Matrix Decomposition & Eigendecomposition",
      "description": "Diagonalization, Singular Value Decomposition (SVD), spectral theorem, and principal component axes.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t2_s1",
      "label": "Eigenvalues & Eigenvectors",
      "description": "Av = λv defines invariant directions v where matrix A acts strictly as a scalar scaling factor λ.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t2_s1_d1",
      "label": "Characteristic Equation det(A - λI) = 0",
      "description": "Roots of the characteristic polynomial determine the complete set of eigenvalues for square real matrices.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t2_s1_d2",
      "label": "Spectral Theorem for Symmetric Matrices",
      "description": "Real symmetric matrices A = A^T possess real eigenvalues and a complete orthonormal set of eigenvectors.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t2_s2",
      "label": "Singular Value Decomposition (SVD)",
      "description": "Factorization A = U Σ V^T decomposes any rectangular matrix into left singular vectors U, singular values Σ, right singular vectors V^T.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t2_s2_d1",
      "label": "Truncated Low-Rank Approximation",
      "description": "Eckart-Young-Mirsky theorem proves keeping top k singular values yields the optimal rank-k Frobenius norm approximation.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t2_s2_d2",
      "label": "Condition Number & Matrix Inversion",
      "description": "Condition number κ(A) = σ_max / σ_min measures sensitivity of linear systems to numerical precision errors.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t2_s3",
      "label": "Principal Component Analysis (PCA)",
      "description": "Identifies orthogonal axes maximizing feature variance by computing eigenvectors of sample covariance matrix C = (1/N) X^T X.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t2_s3_d1",
      "label": "Explained Variance Ratio",
      "description": "Fraction of variance retained by k components equals sum(λ_1..λ_k) / sum(λ_1..λ_d), guiding dimensionality reduction bounds.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t2_s3_d2",
      "label": "Centering & Covariance Diagonalization",
      "description": "Feature mean-centering is strictly required prior to PCA to ensure the first component passes through the empirical data centroid.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t2_s4",
      "label": "Positive Semi-Definite Matrices",
      "description": "Matrix A is PSD if x^T A x ≥ 0 for all non-zero vectors x, guaranteeing non-negative eigenvalues and convex quadratic forms.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t2_s4_d1",
      "label": "Kernel Matrix Mercer Condition",
      "description": "Gram matrices K_ij = k(x_i, x_j) must be PSD for valid Hilbert space implicit feature mapping in kernel methods.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t2_s4_d2",
      "label": "Cholesky Decomposition A = L L^T",
      "description": "Decomposes symmetric PSD matrices into lower triangular L, enabling O(n^3/6) efficient Gaussian process sampling.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t2_s5",
      "label": "Pseudoinverse & Least Squares",
      "description": "Moore-Penrose pseudoinverse A^+ = (A^T A)^-1 A^T provides minimum L2 norm solutions to overdetermined linear systems Ax = b.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t2_s5_d1",
      "label": "SVD-based Pseudoinverse",
      "description": "Computed by transposing V, inverting non-zero singular values in Σ, and transposing U: A^+ = V Σ^+ U^T.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t2_s5_d2",
      "label": "Projection Matrix P = A (A^T A)^-1 A^T",
      "description": "Projects vector b orthogonally onto the column space col(A), minimizing residual error ||Ax - b||^2.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t3",
      "label": "Multivariate Calculus & Gradients",
      "description": "Partial derivatives, gradient vectors, directional derivatives, and steepest descent directions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t3_s1",
      "label": "Gradient Vector ∇f",
      "description": "Vector of first-order partial derivatives ∇f = [∂f/∂x_1, ..., ∂f/∂x_d]^T pointing in the direction of maximum rate of scalar function increase.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t3_s1_d1",
      "label": "Directional Derivative v·∇f",
      "description": "Quantifies the rate of change of f along arbitrary unit vector direction v: D_v f = ∇f · v.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t3_s1_d2",
      "label": "Level Sets & Gradient Orthogonality",
      "description": "Gradient ∇f is strictly perpendicular to contour lines and level surfaces f(x) = c at every point.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t3_s2",
      "label": "Jacobian Matrix J",
      "description": "Matrix of all first-order partial derivatives J_ij = ∂f_i / ∂x_j mapping vector inputs x ∈ R^n to vector outputs f(x) ∈ R^m.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t3_s2_d1",
      "label": "Local Linear Approximation f(x + Δ) ≈ f(x) + J Δ",
      "description": "Jacobian represents the best local linear transformation approximation of a multi-variable vector function.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t3_s2_d2",
      "label": "Change of Variables Det(J)",
      "description": "Absolute determinant |det(J)| scales volume elements dV_y = |det(J)| dV_x when transforming probability density functions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t3_s3",
      "label": "Hessian Matrix H",
      "description": "Symmetric d × d matrix of second-order partial derivatives H_ij = ∂^2 f / (∂x_i ∂x_j) describing local curvature of scalar function f.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t3_s3_d1",
      "label": "Local Extrema Test det(H) and Tr(H)",
      "description": "Positive definite H (all λ > 0) indicates strict local minimum; indefinite H indicates a saddle point.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t3_s3_d2",
      "label": "Ill-Conditioned Loss Landscapes",
      "description": "High ratio λ_max / λ_min in Hessian causes gradient descent to oscillate wildly along steep ravine walls.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t3_s4",
      "label": "Taylor Series Approximations",
      "description": "Expands smooth function f(x + v) = f(x) + ∇f^T v + (1/2) v^T H v + O(||v||^3) for local quadratic loss surface modeling.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t3_s4_d1",
      "label": "Newton-Raphson Update Δ = -H^-1 ∇f",
      "description": "Uses second-order Taylor expansion to jump directly to the minimum of quadratic approximations in 1 step.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t3_s4_d2",
      "label": "Truncation Error & Radius of Convergence",
      "description": "Higher-order residual terms bound the spatial domain where local polynomial models remain valid representations.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t3_s5",
      "label": "Chain Rule for Vector Calculus",
      "description": "Calculates derivative of composite functions: if z = g(y) and y = f(x), then ∂z/∂x = (∂z/∂y) (∂y/∂x) via matrix multiplication.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t3_s5_d1",
      "label": "Reverse-Mode Automatic Differentiation",
      "description": "Evaluates chain rule from scalar loss backward to inputs, computing full gradient in 1 pass with cost proportional to forward pass.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t3_s5_d2",
      "label": "Forward-Mode Automatic Differentiation",
      "description": "Evaluates chain rule along forward evaluation graph using dual numbers, efficient when input dim n << output dim m.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t4",
      "label": "Optimization & Convexity Theory",
      "description": "Convex sets, convex functions, Lagrange multipliers, KKT conditions, and duality theory.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t4_s1",
      "label": "Convex Functions & Jensen's Inequality",
      "description": "Function f is convex if f(λx + (1-λ)y) ≤ λf(x) + (1-λ)f(y); guarantees every local minimum is a global minimum.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t4_s1_d1",
      "label": "Jensen's Inequality f(E[X]) ≤ E[f(X)]",
      "description": "Fundamental bound for convex functions, forming the mathematical basis for Variational Inference and EM algorithm derivation.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t4_s1_d2",
      "label": "Epigraph & Subgradient Definition",
      "description": "A function is convex iff its epigraph is a convex set; subgradients g generalize derivatives for non-smooth convex functions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t4_s2",
      "label": "Lagrange Multipliers & Constrained Opt",
      "description": "Maximizes or minimizes f(x) subject to equality constraints g_i(x) = 0 by finding stationary points of L(x, λ) = f(x) + sum(λ_i g_i(x)).",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t4_s2_d1",
      "label": "Gradient Alignment ∇f = -sum(λ_i ∇g_i)",
      "description": "Constraint boundary forces objective gradient to align parallel to constraint normals at optimal boundary points.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t4_s2_d2",
      "label": "Equality Constraint Manifold",
      "description": "Lagrange multipliers act as forces restricting optimization trajectories onto lower-dimensional hyper-surfaces.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t4_s3",
      "label": "Karush-Kuhn-Tucker (KKT) Conditions",
      "description": "First-order necessary conditions for non-linear inequality constrained optimization: stationarity, primal feasibility, dual feasibility, complementary slackness.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t4_s3_d1",
      "label": "Complementary Slackness λ_i h_i(x*) = 0",
      "description": "Requires either the dual constraint multiplier is zero (inactive) or the inequality constraint is active (h_i(x*) = 0).",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t4_s3_d2",
      "label": "SVM Margin Boundary Derivation",
      "description": "KKT conditions prove that only data points lying directly on the margin hyperplanes have non-zero Lagrange multipliers (support vectors).",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t4_s4",
      "label": "Duality Theory & Wolfe Dual",
      "description": "Primal problem min f(x) maps to Dual max g(λ, ν); weak duality bounds min Primal ≥ max Dual; strong duality gives equality for Slater's condition.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t4_s4_d1",
      "label": "Slater's Condition for Strong Duality",
      "description": "Strict feasibility (exists x inside relative interior of domain where h_i(x) < 0) guarantees zero duality gap.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t4_s4_d2",
      "label": "Kernel Trick Enablement via Dual",
      "description": "Formulating SVM in dual space replaces feature vector inner products with kernel evaluation functions k(x_i, x_j).",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t4_s5",
      "label": "Lipschitz Continuity & Gradient Smoothness",
      "description": "Function derivative has L-Lipschitz smoothness ||∇f(x) - ∇f(y)|| ≤ L ||x - y||, bounding maximum curvature and setting maximum stable learning rate α < 2/L.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t4_s5_d1",
      "label": "Descent Lemma Bound",
      "description": "Guarantees function value decrease per gradient step: f(x - α ∇f) ≤ f(x) - α(1 - α L / 2) ||∇f||^2.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t4_s5_d2",
      "label": "Upper Bounding Hessian Spectrum",
      "description": "L-smoothness implies the largest eigenvalue of the Hessian matrix is bounded by L: λ_max(H) ≤ L.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t5",
      "label": "Probability & Information Theory",
      "description": "Probability distributions, Bayes rule, MLE, MAP, Entropy, Mutual Information, and KL divergence.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t5_s1",
      "label": "Bayes Theorem & Posterior Inference",
      "description": "P(θ|X) = P(X|θ) P(θ) / P(X) updates prior probability P(θ) using likelihood P(X|θ) to compute exact posterior distribution.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t5_s1_d1",
      "label": "Evidence Marginal P(X) = ∫ P(X|θ) P(θ) dθ",
      "description": "High-dimensional integration over parameter space makes exact Bayesian inference intractable for deep neural network weights.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t5_s1_d2",
      "label": "Conjugate Priors & Closed-Form Updates",
      "description": "Prior and posterior belong to same parametric family (e.g. Beta-Binomial, Gaussian-Gaussian) enabling analytic posterior calculation.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t5_s2",
      "label": "Maximum Likelihood Estimation (MLE)",
      "description": "Finds parameter θ* maximizing sample log-likelihood sum(log P(x_i | θ)), equivalent to minimizing KL divergence KL(P_data || P_model).",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t5_s2_d1",
      "label": "Log-Likelihood Convexity",
      "description": "Taking logarithm converts product of independent likelihoods into tractable sum, turning exponential family MLE into convex optimization.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t5_s2_d2",
      "label": "Asymptotic Efficiency & Consistency",
      "description": "MLE estimators achieve Cramer-Rao lower bound variance as sample size N → ∞ under mild regularity conditions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t5_s3",
      "label": "Maximum A Posteriori (MAP)",
      "description": "Finds θ* maximizing log P(X|θ) + log P(θ); Gaussian prior adds L2 weight decay penalty; Laplacian prior adds L1 regularization penalty.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t5_s3_d1",
      "label": "Gaussian Prior L2 Weight Decay",
      "description": "Log P(θ) ~ N(0, σ^2) contributes -(1/2σ^2) ||θ||^2 term to the objective, penalizing weight magnitude.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t5_s3_d2",
      "label": "Laplace Prior L1 Sparsity",
      "description": "Log P(θ) ~ Laplace(0, b) contributes -(1/b) |θ|_1 term, forcing parameters to zero at MAP solution point.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t5_s4",
      "label": "Shannon Entropy H(X)",
      "description": "Quantifies expected information content or uncertainty: H(X) = -sum(P(x) log P(x)) measured in nats or bits.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t5_s4_d1",
      "label": "Uniform Distribution Maximum Uncertainty",
      "description": "For discrete variable with K states, entropy is maximized at log(K) when all states are equiprobable.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t5_s4_d2",
      "label": "Differential Entropy for Continuous Variables",
      "description": "H(X) = -∫ f(x) log f(x) dx can be negative; Gaussian distribution maximizes differential entropy for a fixed variance.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t5_s5",
      "label": "Kullback-Leibler (KL) Divergence",
      "description": "Asymmetric measure of probability distribution difference: KL(P || Q) = sum(P(x) log(P(x) / Q(x))) ≥ 0.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t5_s5_d1",
      "label": "Zero-Avoiding Forward KL(P || Q)",
      "description": "Maximizing -KL(P || Q) forces Q to cover all modes of P (mode covering behavior in MLE).",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t5_s5_d2",
      "label": "Zero-Forcing Reverse KL(Q || P)",
      "description": "Minimizing KL(Q || P) forces Q to snap to a single dominant peak of P (mode seeking behavior in Variational Inference).",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t6",
      "label": "Numerical Precision & Linear Solvers",
      "description": "Floating point formats, underflow/overflow, condition numbers, and iterative Krylov solvers.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t6_s1",
      "label": "IEEE 754 Floating Point Representations",
      "description": "FP32 (1 sign, 8 exponent, 23 mantissa), FP16 (1, 5, 10), BF16 (1, 8, 7), and FP8 (E4M3 / E5M2) hardware trade-offs.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t6_s1_d1",
      "label": "BF16 Exponent Range Match to FP32",
      "description": "Bfloat16 maintains full 8-bit exponent width of FP32, eliminating underflow/overflow without needing dynamic loss scaling.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t6_s1_d2",
      "label": "Subnormal Numbers & Denorm Flushing",
      "description": "Flushing subnormal numbers near 0 to zero in hardware prevents severe SIMD pipeline execution speed penalties.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t6_s2",
      "label": "Log-Sum-Exp Trick for Numerical Stability",
      "description": "Computes log(sum(exp(x_i))) stably by subtracting maximum value m = max(x_i): m + log(sum(exp(x_i - m))).",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t6_s2_d1",
      "label": "Softmax Overflow Prevention",
      "description": "Prevents exp(x_i) from producing Inf when logits exceed +88.7 in FP32 or +11.0 in FP16 arithmetic.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t6_s2_d2",
      "label": "Cross-Entropy Loss Stability",
      "description": "Combines Log-Softmax directly with negative log-likelihood loss to avoid computing 0 or log(0) intermediate steps.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t6_s3",
      "label": "Grad ill-conditioning & Preconditioning",
      "description": "Preconditioning linear system A x = b by multiplying by inverse approximation P^-1 A x = P^-1 b to equalize singular values.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t6_s3_d1",
      "label": "Natural Gradient Optimization",
      "description": "Preconditions standard gradient by inverse Fisher Information Matrix F^-1 ∇L, moving in steepest descent along probability manifold.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t6_s3_d2",
      "label": "K-FAC (Kronecker-factored Approximate Curvature)",
      "description": "Approximates Fisher Information Matrix as Kronecker products of layer input and output gradient covariance matrices.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t6_s4",
      "label": "Conjugate Gradient Method",
      "description": "Iterative O(N) solver for linear system Ax = b with symmetric PSD A, searching along A-orthogonal conjugate directions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t6_s4_d1",
      "label": "Superlinear Convergence Guarantee",
      "description": "Guaranteed exact convergence in at most N steps for N-dimensional system, far faster than steepest descent.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t6_s4_d2",
      "label": "Hessian-Free Optimization",
      "description": "Computes Hessian-vector products H v via finite differences or autograd without ever constructing explicit N × N Hessian matrix.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t6_s5",
      "label": "Stochastic Gradient Variance Bounds",
      "description": "Unbiased mini-batch estimate E[g_i] = ∇L has variance Var(g_i) = σ^2, requiring learning rate decay α_t ~ 1/t for asymptotic convergence.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t6_s5_d1",
      "label": "Mini-Batch Size Variance Reduction",
      "description": "Increasing batch size by factor B reduces gradient estimate variance by 1/B, allowing proportional learning rate scaling.",
      "type": "concept"
    },
    {
      "id": "ml_root_p1_t6_s5_d2",
      "label": "Robbins-Monro Conditions",
      "description": "Guarantees convergence of stochastic approximation if sum(α_t) = ∞ (infinite reach) and sum(α_t^2) < ∞ (variance squelched).",
      "type": "concept"
    },
    {
      "id": "ml_root_p2",
      "label": "Classical Machine Learning Algorithms",
      "description": "Supervised and unsupervised non-deep learning algorithms, regularization, tree structures, and kernel machines.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t1",
      "label": "Linear & Logistic Regression Models",
      "description": "Ordinary Least Squares, Logit link functions, Sigmoid activations, and maximum likelihood fitting.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t1_s1",
      "label": "Ordinary Least Squares (OLS) Closed Form",
      "description": "Analytical solution w* = (X^T X)^-1 X^T y minimizes mean squared error ||y - Xw||^2.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t1_s1_d1",
      "label": "Gauss-Markov Theorem",
      "description": "Proves OLS is the Best Linear Unbiased Estimator (BLUE) under homoscedastic, uncorrelated noise assumptions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t1_s1_d2",
      "label": "Multicollinearity & Singular Matrices",
      "description": "Highly correlated features make X^T X near-singular, inflating weight variance and creating numerical instability.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t1_s2",
      "label": "Logistic Regression & Cross-Entropy",
      "description": "Models binary probability P(y=1|x) = σ(w^T x) = 1 / (1 + exp(-w^T x)) trained via Bernoulli log-likelihood minimization.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t1_s2_d1",
      "label": "Binary Cross-Entropy Loss L(w)",
      "description": "L(w) = -sum(y_i log(p_i) + (1 - y_i) log(1 - p_i)), a convex loss function without non-global local minima.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t1_s2_d2",
      "label": "Log-Odds Linear Decision Boundary",
      "description": "Decision boundary w^T x = 0 represents hyper-plane where log-odds ratio log(p / (1 - p)) equals zero.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t1_s3",
      "label": "Ridge Regression (L2 Regularization)",
      "description": "Adds penalty λ ||w||_2^2 to OLS, yielding closed-form solution w* = (X^T X + λ I)^-1 X^T y.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t1_s3_d1",
      "label": "Bias-Variance Trade-off Adjustment",
      "description": "Increasing λ introduces small estimation bias while dramatically shrinking weight variance caused by feature collinearity.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t1_s3_d2",
      "label": "SVD Weight Shrinkage View",
      "description": "Shrinks principal component weights by factor σ_i^2 / (σ_i^2 + λ), penalizing directions with small singular values.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t1_s4",
      "label": "Lasso Regression (L1 Regularization)",
      "description": "Adds penalty λ ||w||_1 to objective, driving less important feature weights strictly to zero for automatic feature selection.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t1_s4_d1",
      "label": "Subgradient Coordinate Descent",
      "description": "Optimizes non-smooth L1 norm using soft-thresholding operator S_λ(w_i) = sign(w_i) max(0, |w_i| - λ).",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t1_s4_d2",
      "label": "Sparsity & High-Dimensional p > n",
      "description": "Lasso can select at most n non-zero features when number of parameters p greatly exceeds sample size n.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t1_s5",
      "label": "ElasticNet Regularization",
      "description": "Combines L1 and L2 penalties λ_1 ||w||_1 + λ_2 ||w||_2^2 to handle grouped correlated features while maintaining sparsity.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t1_s5_d1",
      "label": "Grouping Effect for Correlated Inputs",
      "description": "L2 component forces strongly correlated features to share similar weight magnitudes rather than selecting one arbitrarily.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t1_s5_d2",
      "label": "Double Shrinkage Correction",
      "description": "Rescales ElasticNet weight estimates by (1 + λ_2) to correct for double-counting parameter shrinkage bias.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t2",
      "label": "Support Vector Machines (SVM)",
      "description": "Max-margin hyperplanes, dual formulations, soft-margin slack variables, and kernel transformations.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t2_s1",
      "label": "Maximum Margin Hyperplane",
      "description": "Finds decision boundary w^T x + b = 0 maximizing geometric margin 2 / ||w|| subject to y_i (w^T x_i + b) ≥ 1.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t2_s1_d1",
      "label": "Primal Formulation min (1/2)||w||^2",
      "description": "Constrained quadratic programming problem whose solution depends exclusively on boundary support vector points.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t2_s1_d2",
      "label": "Unique Global Optimal Solution",
      "description": "Convex quadratic objective with linear constraints guarantees single global minimum without local optima trap risks.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t2_s2",
      "label": "Soft-Margin SVM & Slack Variables ξ_i",
      "description": "Introduces slack variables ξ_i ≥ 0 with penalty C sum(ξ_i) to allow controlled misclassifications on non-separable data.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t2_s2_d1",
      "label": "Hyperparameter C Trade-off",
      "description": "Large C heavily penalizes misclassification (narrow margin, high variance); small C permits margin violations (wide margin, high bias).",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t2_s2_d2",
      "label": "Hinge Loss Equivalence max(0, 1 - y f(x))",
      "description": "Soft-margin SVM primal objective is mathematically equivalent to unconstrained Hinge Loss minimization with L2 weight decay.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t2_s3",
      "label": "Dual SVM Formulation & Multipliers",
      "description": "Maximizes Dual L_D(α) = sum(α_i) - (1/2) sum(α_i α_j y_i y_j x_i^T x_j) subject to 0 ≤ α_i ≤ C and sum(α_i y_i) = 0.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t2_s3_d1",
      "label": "Sparsity of Dual Variables α_i",
      "description": "Only points violating or lying on the margin hyper-plane have α_i > 0; all interior points have α_i = 0.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t2_s3_d2",
      "label": "Weight Vector Reconstruction w = sum(α_i y_i x_i)",
      "description": "Expresses final classification vector w strictly as a linear combination of original training support vector patterns.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t2_s4",
      "label": "Kernel Trick & Hilbert Space Mapping",
      "description": "Replaces inner products x_i^T x_j with kernel function K(x_i, x_j) = Φ(x_i)^T Φ(x_j) mapping inputs to infinite-dimensional space.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t2_s4_d1",
      "label": "Radial Basis Function (RBF) Gaussian Kernel",
      "description": "K(x, x') = exp(-γ ||x - x'||^2) implicitly projects samples into infinite-dimensional RKHS feature space.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t2_s4_d2",
      "label": "Polynomial Kernel K(x, x') = (x^T x' + c)^d",
      "description": "Computes all degree-d feature interactions explicitly without computing intermediate feature vectors directly.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t2_s5",
      "label": "Sequential Minimal Optimization (SMO)",
      "description": "Breakthrough algorithm that solves SVM dual quadratic program by analytically optimizing minimal sub-problem of 2 α_i variables per step.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t2_s5_d1",
      "label": "Heuristic Pair Selection",
      "description": "Selects first multiplier α_1 violating KKT conditions and second multiplier α_2 maximizing step size |E_1 - E_2|.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t2_s5_d2",
      "label": "Analytical Closed-Form Step",
      "description": "Avoids expensive N × N matrix inversion by solving 2-variable constrained quadratic sub-problems analytically.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t3",
      "label": "Decision Trees & Ensemble Methods",
      "description": "CART trees, impurity metrics, Random Forests, Gradient Boosted Trees, XGBoost, and LightGBM.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t3_s1",
      "label": "CART & Impurity Metrics (Gini / Entropy)",
      "description": "Recursive binary splitting using Gini impurity 1 - sum(p_i^2) or Entropy -sum(p_i log p_i) to maximize information gain.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t3_s1_d1",
      "label": "Gini Impurity vs Information Entropy",
      "description": "Gini is computationally faster (no log evaluation); both metrics yield nearly identical split locations in practice.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t3_s1_d2",
      "label": "Regression Trees & Variance Reduction",
      "description": "Splits continuous targets by minimizing total residual squared error sum((y_i - c_left)^2) + sum((y_j - c_right)^2).",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t3_s2",
      "label": "Tree Pruning & Overfitting Mitigation",
      "description": "Cost-complexity pruning minimizes R_α(T) = R(T) + α |T|, balancing tree misclassification error R(T) with subtree size |T|.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t3_s2_d1",
      "label": "Pre-Pruning Early Stopping Rules",
      "description": "Stops tree growth early based on maximum depth, minimum sample count per leaf, or minimum impurity decrease thresholds.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t3_s2_d2",
      "label": "Post-Pruning Subtree Replacement",
      "description": "Grows full deep tree first, then collapses subtrees bottom-up if cross-validation error does not degrade significantly.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t3_s3",
      "label": "Random Forests & Bagging Ensemble",
      "description": "Bootstrap Aggregating (Bagging) builds N independent deep trees on bootstrap sub-samples with random feature subsetting (sqrt(p)).",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t3_s3_d1",
      "label": "Decorrelately-Subsampled Feature Trees",
      "description": "Randomly picking k = sqrt(p) features at each node split decorrelates individual trees, dramatically lowering ensemble variance.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t3_s3_d2",
      "label": "Out-Of-Bag (OOB) Error Estimation",
      "description": "Evaluates model performance on ~37% of training data left out of each bootstrap sample, replacing external validation sets.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t3_s4",
      "label": "Gradient Boosting Machines (GBM)",
      "description": "Sequential ensemble fitting new weak trees F_m(x) = F_{m-1}(x) + γ_m h_m(x) to pseudo-residuals -∂L / ∂F_{m-1} of prior models.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t3_s4_d1",
      "label": "Gradient Descent in Function Space",
      "description": "Treats tree predictions as continuous function parameters, taking gradient steps toward optimal target loss function values.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t3_s4_d2",
      "label": "Shrinkage Rate (Learning Rate η)",
      "description": "Scales each added tree prediction by small factor η ∈ [0.01, 0.1] to prevent early overfitting and improve generalization.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t3_s5",
      "label": "XGBoost & LightGBM Optimizations",
      "description": "Second-order Taylor expansion loss approximation, L1/L2 tree regularization, histogram binning, and GPU tree building.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t3_s5_d1",
      "label": "Second-Order Loss Expansion (g_i and h_i)",
      "description": "Uses exact first (gradients g_i) and second (Hessians h_i) derivatives to compute optimal leaf values w* = -sum(g_i) / (sum(h_i) + λ).",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t3_s5_d2",
      "label": "LightGBM Gradient-Based One-Side Sampling (GOSS)",
      "description": "Keeps instances with large gradients and randomly samples small gradient instances to dramatically speed up histogram building.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t4",
      "label": "Clustering & Unsupervised Learning",
      "description": "K-Means, Hierarchical Clustering, DBSCAN density models, and Gaussian Mixture Models (GMM).",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t4_s1",
      "label": "K-Means Lloyd's Algorithm",
      "description": "Partitions N observations into K clusters by alternating between assigning points to nearest centroid and updating centroid positions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t4_s1_d1",
      "label": "K-Means++ Centroid Seeding",
      "description": "Initializes cluster centers with probability proportional to D(x)^2 squared distance from nearest existing center, bounding error to O(log K).",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t4_s1_d2",
      "label": "Non-Convex Local Optima Convergence",
      "description": "Minimizes inertia sum(||x_i - μ_k||^2); guaranteed to converge to local minimum but sensitive to initial seed selection.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t4_s2",
      "label": "Hierarchical Agglomerative Clustering",
      "description": "Bottom-up tree construction merging closest clusters based on Single, Complete, Average, or Ward's minimum variance linkage.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t4_s2_d1",
      "label": "Ward's Minimum Variance Linkage",
      "description": "Merges pair of clusters that minimizes total within-cluster variance increase, producing compact spherical clusters.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t4_s2_d2",
      "label": "Dendrogram Cut & Cluster Extraction",
      "description": "Visual tree structure allows thresholding distance cut lines at arbitrary height to select optimal cluster counts dynamically.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t4_s3",
      "label": "DBSCAN Density-Based Clustering",
      "description": "Groups points with ≥ MinPts neighbors within MinPts radius ε; identifies arbitrary shapes and isolates noise points.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t4_s3_d1",
      "label": "Core, Border, and Noise Point Topology",
      "description": "Core points have ≥ MinPts in ε-neighborhood; Border points are within ε of a Core point; Noise points are disconnected.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t4_s3_d2",
      "label": "No Prespecified K & Arbitrary Clusters",
      "description": "Discovers clusters of arbitrary non-spherical shapes (e.g. concentric rings) without needing cluster count K upfront.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t4_s4",
      "label": "Gaussian Mixture Models (GMM)",
      "description": "Probabilistic density model representing data as mixture of K Gaussian distributions P(x) = sum(π_k N(x | μ_k, Σ_k)).",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t4_s4_d1",
      "label": "Soft Cluster Assignment Responsibilities γ_nk",
      "description": "Computes posterior probability γ_nk that component k generated sample x_n, allowing overlapping cluster boundaries.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t4_s4_d2",
      "label": "Covariance Matrix Constraints",
      "description": "Full, Tied, Diagonal, or Spherical covariance choices balance cluster spatial flexibility with parameter estimation stability.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t4_s5",
      "label": "Expectation-Maximization (EM) Algorithm",
      "description": "Iterative two-step framework for latent variable models: E-step calculates posterior responsibilities; M-step updates model parameters.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t4_s5_d1",
      "label": "E-Step Responsibility Computation",
      "description": "Calculates expected value of complete log-likelihood with respect to current posterior distribution over latent variables.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t4_s5_d2",
      "label": "M-Step Parameter Maximization",
      "description": "Updates parameters μ_k, Σ_k, π_k by maximizing expected complete log-likelihood evaluated during E-step.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t5",
      "label": "Dimensionality Reduction & Manifolds",
      "description": "t-SNE, UMAP, Multidimensional Scaling (MDS), and Isomap non-linear manifold embeddings.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t5_s1",
      "label": "t-Distributed Stochastic Neighbor Embedding",
      "description": "Non-linear dimension reduction matching high-dimensional Gaussian point similarities p_ij with low-dimensional Student-t similarities q_ij.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t5_s1_d1",
      "label": "Crowding Problem & Heavy-Tailed Student-t",
      "description": "Using 1-DOF Student-t distribution in low-dimensional space prevents moderate distance points from collapsing into a single central cluster.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t5_s1_d2",
      "label": "Perplexity Parameter & Local vs Global Topology",
      "description": "Perplexity balances local neighbor sensitivity (typical range 5-50); t-SNE preserves local clusters but distorts global distances.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t5_s2",
      "label": "UMAP (Uniform Manifold Approximation)",
      "description": "Manifold learning based on Riemannian geometry and fuzzy simplicial sets, scaling faster than t-SNE while retaining global structure.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t5_s2_d1",
      "label": "Fuzzy Set Intersection & Graph Construction",
      "description": "Constructs weighted k-nearest neighbor fuzzy simplicial set graph representing high-dimensional topological manifold manifold.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t5_s2_d2",
      "label": "Cross-Entropy Layout Optimization",
      "description": "Minimizes fuzzy set cross-entropy loss between high-dimensional and low-dimensional representations using SGD.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t5_s3",
      "label": "Multidimensional Scaling (MDS)",
      "description": "Places data points in low-dimensional space to preserve pairwise distance matrix D_ij as closely as possible.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t5_s3_d1",
      "label": "Metric vs Non-Metric MDS Objective",
      "description": "Metric MDS minimizes Stress ||d_ij - δ_ij||^2; Non-Metric MDS preserves relative monotonic ranking order of distances.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t5_s3_d2",
      "label": "Strain Minimization & Classical Scaling",
      "description": "Classical MDS converts distance matrix to inner product Gram matrix, recovering exact PCA projections for Euclidean distances.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t5_s4",
      "label": "Isomap Non-Linear Manifold Embedding",
      "description": "Extends MDS by replacing Euclidean distances with shortest path geodesic distances calculated along k-nearest neighbor graph.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t5_s4_d1",
      "label": "Geodesic Distance Graph Construction",
      "description": "Computes all-pairs shortest paths using Dijkstra or Floyd-Warshall algorithm along local k-nearest neighbor neighborhood graph.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t5_s4_d2",
      "label": "Unrolling Non-Linear Swiss Roll Manifolds",
      "description": "Successfully preserves global non-linear geometry by measuring distance along manifold surface rather than through empty ambient space.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t5_s5",
      "label": "Kernel PCA Non-Linear Feature Spaces",
      "description": "Performs standard linear PCA in implicit high-dimensional RKHS feature space by diagonalizing Kernel Gram matrix K_ij.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t5_s5_d1",
      "label": "Gram Matrix Double Centering K_hat",
      "description": "Centers kernel matrix in feature space using K_hat = K - 1_N K - K 1_N + 1_N K 1_N prior to eigendecomposition.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t5_s5_d2",
      "label": "Pre-Image Problem in Reconstruction",
      "description": "Mapping arbitrary low-dimensional projections back to original input space requires non-trivial numerical pre-image approximation.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t6",
      "label": "Naive Bayes & Probabilistic Classifiers",
      "description": "Bayesian independence assumptions, Gaussian Naive Bayes, Multinomial text classification, and Laplace smoothing.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t6_s1",
      "label": "Conditional Independence Assumption",
      "description": "Assumes features x_i are conditionally independent given class label y: P(x|y) = product(P(x_i|y)), simplifying full joint estimation.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t6_s1_d1",
      "label": "Decoupled Feature Parameter Estimation",
      "description": "Reduces parameter estimation from exponential O(C d^k) down to linear O(C d) independent 1D density estimations.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t6_s1_d2",
      "label": "Surprising Classification Robustness",
      "description": "Even when independence assumption is violated, Naive Bayes often yields accurate decision boundaries if probability ranks hold.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t6_s2",
      "label": "Gaussian Naive Bayes (Continuous Features)",
      "description": "Models continuous feature likelihood P(x_i|y=c) using 1D Normal distribution N(μ_ic, σ^2_ic) fit on class subset samples.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t6_s2_d1",
      "label": "Class-Conditional Mean & Variance Estimation",
      "description": "Estimates mean μ_ic and variance σ^2_ic independently for each class category using sample maximum likelihood formulas.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t6_s2_d2",
      "label": "Quadratic vs Linear Decision Boundaries",
      "description": "Sharing variance σ^2_i across all classes produces linear boundaries; individual class variances produce quadratic boundaries.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t6_s3",
      "label": "Multinomial Naive Bayes (Text/Counts)",
      "description": "Models discrete feature counts (e.g. word frequency vectors in documents) using Multinomial likelihood distributions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t6_s3_d1",
      "label": "Bag-of-Words Document Likelihood",
      "description": "Calculates document probability P(doc|c) as product of individual word probabilities P(w_t|c)^n_t raised to word frequency power.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t6_s3_d2",
      "label": "Log-Likelihood Summation Efficiency",
      "description": "Evaluates classification decisions in log-space: log P(c|x) ∝ log P(c) + sum(n_i log P(w_i|c)) using fast sparse dot products.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t6_s4",
      "label": "Laplace & Additive Smoothing (Additive α)",
      "description": "Prevents zero probability estimation errors P(w_i|c) = 0 for unseen vocabulary terms by adding smoothing constant α > 0.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t6_s4_d1",
      "label": "Zero Probability Product Catastrophe",
      "description": "Without smoothing, single unseen feature word causes total posterior product P(x|y) to drop strictly to zero.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t6_s4_d2",
      "label": "Laplace (α=1) vs Lidstone (α < 1) Formula",
      "description": "P(w_i|c) = (count(w_i, c) + α) / (total_words_c + α |V|), distributing uniform prior mass across all vocabulary words.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t6_s5",
      "label": "Bernoulli Naive Bayes (Binary Features)",
      "description": "Models presence or absence of binary indicator features (x_i ∈ {0, 1}) using Bernoulli probability distributions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t6_s5_d1",
      "label": "Explicit Absence Penalty Evaluation",
      "description": "Unlike Multinomial model, Bernoulli model explicitly factors in feature absence: P(x_i=0|c) = (1 - P(x_i=1|c)).",
      "type": "concept"
    },
    {
      "id": "ml_root_p2_t6_s5_d2",
      "label": "Short Text & Keyword Presence Domain",
      "description": "Ideal for short text classification tasks (e.g. spam detection, sentiment classification) where keyword presence matters more than word count.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3",
      "label": "Deep Neural Network Foundations",
      "description": "Forward pass, activations, backpropagation, weight initialization, normalization layers, and deep residual connections.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t1",
      "label": "Forward Propagation & Activation Mechanics",
      "description": "Layer transformations z = W x + b, non-linear activation maps a = σ(z), and universal approximation bounds.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t1_s1",
      "label": "ReLU & Leaky ReLU Variants",
      "description": "Rectified Linear Unit f(x) = max(0, x) prevents gradient saturation for positive inputs while suffering from dying ReLU on negative inputs.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t1_s1_d1",
      "label": "Dying ReLU Zero Gradient Problem",
      "description": "If neuron inputs are consistently negative, gradient drops strictly to zero, permanently freezing weight updates during training.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t1_s1_d2",
      "label": "Leaky ReLU Slope Parameter α = 0.01",
      "description": "Introduces small non-zero slope f(x) = max(α x, x) for negative values to maintain active gradient flow across all neurons.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t1_s2",
      "label": "GELU & Swish Smooth Activations",
      "description": "GELU x Φ(x) and Swish x σ(β x) provide smooth non-monotonic activation curves, improving gradient flow in Transformer architectures.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t1_s2_d1",
      "label": "Probabilistic Dropout-Like Stochastic Interpretation",
      "description": "GELU scales input x by probability that a standard Normal variable is less than x, smoothing the activation boundary.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t1_s2_d2",
      "label": "Sub-Zero Dip & Negative Regularization",
      "description": "Small negative dip for values near zero acts as a smooth regularizer, preventing complete dead-neuron cutoff.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t1_s3",
      "label": "Softmax Temperature Scaling",
      "description": "Converts raw logits z into probability vector p_i = exp(z_i / T) / sum(exp(z_j / T)), controlled by temperature parameter T.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t1_s3_d1",
      "label": "High Temperature Smooth Entropy",
      "description": "T > 1 smooths probability output toward uniform distribution, increasing entropy for model distillation and sampling.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t1_s3_d2",
      "label": "Low Temperature Argmax Sharpening",
      "description": "T < 1 sharpens distribution toward one-hot vector representation, making model output deterministic as T → 0.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t1_s4",
      "label": "Universal Approximation Theorem",
      "description": "Proves single hidden layer feedforward network with non-linear activation can approximate any continuous function on compact subsets of R^n.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t1_s4_d1",
      "label": "Width vs Depth Computational Efficiency",
      "description": "While single shallow network requires exponentially wide layer count O(2^n), deep networks approximate complex functions with polynomial parameter scaling.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t1_s4_d2",
      "label": "Non-Linearity Requirement Bound",
      "description": "Theorem strictly fails for purely linear activations, which collapse multi-layer networks into single linear matrix transformations W_total = W_k ... W_1.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t1_s5",
      "label": "Vanishing & Exploding Gradient Dynamics",
      "description": "Deep multiplication of Jacobian matrices J_1 ... J_L causes gradients to decay exponentially to 0 or explode to infinity.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t1_s5_d1",
      "label": "Sigmoid Derivative Maximum (0.25)",
      "description": "Max derivative σ'(z) ≤ 0.25 causes 10-layer network to attenuate backward gradient magnitude by factor (0.25)^10 ≈ 10^-6.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t1_s5_d2",
      "label": "Gradient Norm Clipping Threshold",
      "description": "Rescales gradient vector g ← g (threshold / ||g||) when norm ||g|| exceeds cutoff to prevent catastrophic optimizer destabilization.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t2",
      "label": "Weight Initialization & Layer Normalization",
      "description": "Xavier/Glorot init, He/Kaiming init, Batch Normalization, Layer Normalization, and Group Normalization.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t2_s1",
      "label": "Xavier / Glorot Weight Initialization",
      "description": "Draws weights from N(0, 2 / (fan_in + fan_out)) to maintain variance of activations and gradients equal across linear layers.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t2_s1_d1",
      "label": "Zero-Centered Symmetric Activation Assumption",
      "description": "Derived under assumption of linear or zero-centered symmetric activations (e.g. Tanh), maintaining Var(a_l) = Var(a_{l-1}).",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t2_s1_d2",
      "label": "Variance Collapse with ReLU Activations",
      "description": "Fails when applied to ReLU because zeroing out negative inputs cuts variance in half, causing signal decay in deep networks.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t2_s2",
      "label": "He / Kaiming Initialization for ReLU",
      "description": "Draws weights from N(0, 2 / fan_in) specifically accounting for ReLU zeroing out 50% of activations.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t2_s2_d1",
      "label": "Factor 2 Variance Correction",
      "description": "Extra factor of 2 doubles weight variance to compensate for 0-rectification variance loss, enabling 100+ layer training.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t2_s2_d2",
      "label": "Fan-In vs Fan-Out Variance Preservation",
      "description": "Fan-in preserves activation variance during forward pass; Fan-out preserves gradient variance during backward propagation pass.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t2_s3",
      "label": "Batch Normalization (BatchNorm)",
      "description": "Normalizes mini-batch activations to zero mean and unit variance, followed by learnable scale γ and shift β parameters.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t2_s3_d1",
      "label": "Internal Covariate Shift Reduction",
      "description": "Stabilizes layer input distributions during training, allowing significantly higher learning rates (e.g. 10x) without divergence.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t2_s3_d2",
      "label": "Running Statistics at Inference Time",
      "description": "Replaces mini-batch statistics during evaluation with exponentially moving averages of training mean E[x] and variance Var[x].",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t2_s4",
      "label": "Layer Normalization (LayerNorm)",
      "description": "Normalizes across feature dimensions independently per sample, making normalization invariant to mini-batch size.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t2_s4_d1",
      "label": "Sequence Model & Transformer Applicability",
      "description": "Calculates mean and variance across hidden channels per token, perfectly suited for variable-length RNNs and Transformers.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t2_s4_d2",
      "label": "Batch Size Independence",
      "description": "Works identically for batch size B=1, eliminating BatchNorm dependency on large mini-batches for stable training.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t2_s5",
      "label": "RMSNorm & Group Normalization",
      "description": "RMSNorm normalizes by root-mean-square without mean-centering; GroupNorm normalizes across channel sub-groups.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t2_s5_d1",
      "label": "RMSNorm Computational Efficiency",
      "description": "Eliminates mean calculation step y_i = (x_i / RMS(x)) γ_i, cutting normalization runtime overhead by 10-50% in LLMs.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t2_s5_d2",
      "label": "GroupNorm Micro-Batch Robustness",
      "description": "Divides channels into G groups, maintaining high segmentation and detection accuracy even with batch size 1 or 2 per GPU.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t3",
      "label": "Backpropagation & Autograd Graph",
      "description": "Computational graphs, reverse-mode automatic differentiation, gradient accumulation, and memory management.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t3_s1",
      "label": "Directed Acyclic Computational Graph",
      "description": "Represents network operations as DAG where nodes are tensors and edges are primitive differential operators.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t3_s1_d1",
      "label": "Dynamic vs Static Graph Execution",
      "description": "PyTorch dynamic eager graphs build DAG per iteration; TensorFlow static graphs optimize execution graph ahead-of-time.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t3_s1_d2",
      "label": "Topological Sorting Forward Pass",
      "description": "Orders tensor computations topologically during forward pass to guarantee inputs are ready prior to node evaluation.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t3_s2",
      "label": "Reverse-Mode Automatic Differentiation",
      "description": "Traverses graph backward from scalar loss node L, applying vector-Jacobian products (VJP) at each intermediate node.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t3_s2_d1",
      "label": "Vector-Jacobian Product (VJP) v^T J",
      "description": "Computes backward gradient delta v^T J directly without constructing full intermediate Jacobian matrices explicitly.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t3_s2_d2",
      "label": "Memory Activation Stashing",
      "description": "Requires retaining all intermediate forward activation tensors in memory until backward pass completes for that layer.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t3_s3",
      "label": "Gradient Accumulation & Micro-Batching",
      "description": "Accumulates gradients over K micro-batches prior to calling optimizer step: g_total += g_k / K, scaling effective batch size.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t3_s3_d1",
      "label": "Memory-Constrained Large Batch Simulation",
      "description": "Enables training with huge target batch size (e.g. 4096) on GPUs with limited VRAM capacity by splitting across K steps.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t3_s3_d2",
      "label": "Optimizer State Invariance",
      "description": "Optimizer momentum and variance states update exactly once per macro-batch, keeping optimization trajectory identical.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t3_s4",
      "label": "Activation Checkpointing (Recomputation)",
      "description": "Discards intermediate layer activations during forward pass and recomputes them on demand during backward pass.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t3_s4_d1",
      "label": "Trading 33% Extra Compute for 70% VRAM Memory",
      "description": "Trades 1 additional forward pass per layer (~33% compute overhead) to reduce peak activation memory footprint dramatically.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t3_s4_d2",
      "label": "Segment Boundary Checkpoint Allocation",
      "description": "Places memory checkpoints at Transformer layer boundaries, storing only input embeddings per block.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t3_s5",
      "label": "Gradient Checkpointing & In-Place Ops",
      "description": "In-place tensor modifications (e.g. relu_) destroy data needed by autograd graph, raising runtime differentiation errors.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t3_s5_d1",
      "label": "Version Counter Autograd Safety Check",
      "description": "PyTorch tracks tensor modification version counters, throwing runtime error if tensor modified in-place is needed for backward.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t3_s5_d2",
      "label": "Custom Autograd Function Registration",
      "description": "Developer defines explicit forward(ctx, x) and backward(ctx, grad_out) methods, manually stashing tensors with ctx.save_for_backward.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t4",
      "label": "Deep Architectures & Residual Networks",
      "description": "ResNet skip connections, DenseNet feature reuse, Highway Networks, and MobileNet depthwise separable convolutions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t4_s1",
      "label": "Residual Learning & Skip Connections",
      "description": "Reformulates layer transformation to learn residual mapping F(x) = H(x) - x, outputting y = F(x) + x.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t4_s1_d1",
      "label": "Gradient Identity Highway ∂y/∂x = ∂F/∂x + 1",
      "description": "Addition of 1 in gradient flow ensures gradient can propagate back unimpeded to early layers regardless of depth.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t4_s1_d2",
      "label": "Degradation Problem Solution",
      "description": "Solves degradation issue where 50+ layer plain networks performed worse than 20-layer networks due to optimization difficulty.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t4_s2",
      "label": "ResNet Bottleneck Blocks (1x1 -> 3x3 -> 1x1)",
      "description": "Uses 1x1 conv to reduce dimensions, 3x3 conv for spatial processing, and 1x1 conv to restore dimension, cutting FLOPs.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t4_s2_d1",
      "label": "Channel Compression Factor 4x",
      "description": "Reduces 256 input channels down to 64 for 3x3 conv, then expands back to 256, cutting compute by ~9x versus 3x3-3x3.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t4_s2_d2",
      "label": "Projection Shortcuts for Dimension Change",
      "description": "Uses 1x1 strided convolution on identity path when spatial resolution or channel count changes across residual blocks.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t4_s3",
      "label": "DenseNet Feature Concatenation",
      "description": "Connects each layer to every other layer in feed-forward fashion: x_l = H_l([x_0, x_1, ..., x_{l-1}]), encouraging feature reuse.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t4_s3_d1",
      "label": "Implicit Deep Supervision Effect",
      "description": "Short paths between all layers allow early layers to receive direct supervision signals from loss function.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t4_s3_d2",
      "label": "Transition Layers & Feature Compression",
      "description": "Uses 1x1 conv and 2x2 average pooling transition blocks between dense blocks to reduce feature map channel count.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t4_s4",
      "label": "Depthwise Separable Convolutions",
      "description": "Splits standard convolution into 2 steps: Depthwise (spatial filter per channel) + Pointwise (1x1 conv across channels).",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t4_s4_d1",
      "label": "FLOPs Reduction Ratio (1/N + 1/D_k^2)",
      "description": "Reduces computational cost by 8-9x compared to standard 3x3 convolution with minimal loss in classification accuracy.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t4_s4_d2",
      "label": "MobileNet Architecture Foundation",
      "description": "Forms core building block for lightweight mobile models (MobileNet v1/v2/v3), enabling real-time edge device inference.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t4_s5",
      "label": "Inverted Residuals & Linear Bottlenecks",
      "description": "MobileNetV2 block expands input channels (6x), applies depthwise conv, then compresses back to low-dim linear bottleneck.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t4_s5_d1",
      "label": "Linear Bottleneck Non-Linearity Avoidance",
      "description": "Omits ReLU after final pointwise compression layer to prevent destructive zero-clipping of low-dimensional manifold features.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t4_s5_d2",
      "label": "Expansion Layer Memory Efficiency",
      "description": "Expands channel capacity internally inside residual block while keeping memory interfaces between blocks compact.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t5",
      "label": "Regularization & Overfitting Defense",
      "description": "Weight decay, Dropout variants, Stochastic Depth, Label Smoothing, and Data Augmentations.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t5_s1",
      "label": "L2 Weight Decay vs L1 Regularization",
      "description": "L2 penalty (1/2) λ ||W||_2^2 pulls weights toward 0 proportional to magnitude; L1 penalty λ ||W||_1 induces exact sparsity.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t5_s1_d1",
      "label": "Gradient Update Shrinkage Effect",
      "description": "L2 weight decay updates weights as W ← (1 - α λ) W - α ∇L, applying continuous exponential weight decay on every step.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t5_s1_d2",
      "label": "Subgradient Zero-Crossing Snap",
      "description": "L1 regularization derivative is constant sign(W), forcing small weights to cross zero and snap to exactly 0.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t5_s2",
      "label": "Dropout & Inverted Dropout Scaling",
      "description": "Randomly zeroes out activations with probability p during training; Inverted Dropout scales remaining activations by 1/(1-p).",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t5_s2_d1",
      "label": "Ensemble Co-Adaptation Prevention",
      "description": "Prevents complex co-adaptation of neurons by forcing each feature to perform usefully in combination with random sub-networks.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t5_s2_d2",
      "label": "No Modification at Inference Time",
      "description": "Inverted Dropout scaling during training allows forward pass at inference time to run completely un-modified.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t5_s3",
      "label": "Spatial Dropout & DropPath (Stochastic Depth)",
      "description": "Spatial Dropout drops entire 2D feature maps; DropPath randomly drops entire residual sub-blocks during training.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t5_s3_d1",
      "label": "Spatial Autocorrelation Countermeasure",
      "description": "Standard dropout fails on conv maps due to neighboring pixel correlation; Spatial Dropout drops entire channel activation maps.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t5_s3_d2",
      "label": "Stochastic Depth Model Shrinkage",
      "description": "Randomly bypasses entire layers during training, shortening effective network depth while keeping deep model during test.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t5_s4",
      "label": "Label Smoothing Regularization",
      "description": "Replaces hard 1-hot targets with smoothed distribution y_i = (1 - ε) y_i + ε / K, preventing overconfident output logits.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t5_s4_d1",
      "label": "Logit Push Boundary Prevention",
      "description": "Hard cross-entropy pushes correct logit to +∞; Label Smoothing bounds target logit difference to log((1-ε) K / ε).",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t5_s4_d2",
      "label": "Clustering Feature Representation Impact",
      "description": "Forces embeddings of same class to cluster tightly around equidistant hyper-spherical points in representation space.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t5_s5",
      "label": "Mixup & CutMix Data Augmentation",
      "description": "Mixup interpolates pairs of inputs x = λ x_i + (1-λ) x_j and targets y = λ y_i + (1-λ) y_j; CutMix pastes image patches.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t5_s5_d1",
      "label": "Linear Interpolation Between Training Samples",
      "description": "Forces linear behavior in feature transitions between classes, reducing overconfident predictions on out-of-distribution inputs.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t5_s5_d2",
      "label": "CutMix Localization & Occlusion Robustness",
      "description": "Replaces rectangular patch of image with patch from another image, encouraging model to rely on multiple visual cues.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t6",
      "label": "Hyperparameter Tuning & Neural Architecture Search",
      "description": "Grid search, Random search, Bayesian Optimization, Hyperband, and NAS search spaces.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t6_s1",
      "label": "Random Search vs Grid Search Bounds",
      "description": "Random search explores continuous hyperparameter spaces significantly faster than grid search for unequal parameter importance.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t6_s1_d1",
      "label": "Effective Dimensionality Exploitation",
      "description": "Grid search wastes trials along unimportant dimensions; Random search tests unique values along every parameter axis.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t6_s1_d2",
      "label": "Sobol Sequence Quasi-Random Sampling",
      "description": "Uses deterministic low-discrepancy Sobol sequences to cover hyperparameter space more uniformly than pseudo-random sampling.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t6_s2",
      "label": "Bayesian Optimization & Gaussian Processes",
      "description": "Fits surrogate Gaussian Process model P(acc | hp) and maximizes Acquisition Function (e.g. Expected Improvement) to pick next trial.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t6_s2_d1",
      "label": "Expected Improvement (EI) Acquisition",
      "description": "EI(x) = E[max(0, f(x) - f(x*))] balances exploration (high model uncertainty) with exploitation (high predicted performance).",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t6_s2_d2",
      "label": "TPE (Tree-structured Parzen Estimators)",
      "description": "Models P(x|y) densities above and below metric threshold, handling categorical and conditional hyperparameters efficiently.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t6_s3",
      "label": "Hyperband & Successive Halving",
      "description": "Early stopping algorithm that allocates resources dynamically, evaluating many configurations on small budgets and keeping top 1/k.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t6_s3_d1",
      "label": "Successive Halving Resource Allocation",
      "description": "Starts N configs with small budget (e.g. 1 epoch), prunes worst 50%, and doubles budget for survivors iteratively.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t6_s3_d2",
      "label": "Hyperband Exploration-Exploitation Bracket",
      "description": "Loops Successive Halving across multiple bracket tradeoffs between many short runs vs few long runs.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t6_s4",
      "label": "Neural Architecture Search (NAS) Search Spaces",
      "description": "Automates architecture design by searching over macro topology graphs or micro cell blocks (normal and reduction cells).",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t6_s4_d1",
      "label": "Cell-Based Search Space Paradigm",
      "description": "Searches for repeatable DAG cell blocks (Normal Cell and Reduction Cell) which are then stacked to form full deep network.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t6_s4_d2",
      "label": "Reinforcement Learning Controller",
      "description": "Uses RNN controller policy network trained via REINFORCE to generate architecture strings evaluated on validation set.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t6_s5",
      "label": "Differentiable NAS (DARTS)",
      "description": "Relaxes discrete operation choice to continuous softmax over candidate ops: sum(exp(α_o) o(x) / sum(exp(α_o'))), optimizing via gradient descent.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t6_s5_d1",
      "label": "Joint Architecture & Weight Optimization",
      "description": "Alternates between updating architecture parameters α with validation loss and network weights W with training loss.",
      "type": "concept"
    },
    {
      "id": "ml_root_p3_t6_s5_d2",
      "label": "Order-of-Magnitude Speedup",
      "description": "Reduces NAS search cost from 10,000 GPU hours down to a single GPU day by turning discrete search into continuous autograd.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4",
      "label": "CNNs & Computer Vision",
      "description": "Convolution math, pooling, CNN architectures (ResNet/EfficientNet/ViT), object detection (YOLO/Faster-RCNN), segmentation (U-Net/SAM), and CLIP.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t1",
      "label": "Convolution Operation",
      "description": "Cross-correlation between input feature map and learned filter kernel: (I * K)[i,j] = sum_m sum_n I[i+m, j+n] K[m,n].",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t1_s1",
      "label": "Receptive Field Growth per Layer",
      "description": "Effective receptive field after L layers with kernel size k: RF = 1 + L*(k-1); strided convs grow RF faster without dilation.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t1_s1_d1",
      "label": "Dilated Convolution RF Expansion",
      "description": "Dilation rate d inserts d-1 zeros between kernel elements, expanding RF to k + (k-1)*(d-1) without extra parameters.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t1_s1_d2",
      "label": "Depthwise Separable Parameter Count",
      "description": "Standard 3x3 conv: D_k^2*M*N params; Depthwise separable: D_k^2*M + M*N params — 8-9x fewer for 3x3 case.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t1_s2",
      "label": "Padding & Stride Output Size Formula",
      "description": "Output spatial dim = floor((W + 2P - K) / S) + 1; SAME padding P=(K-1)/2 keeps spatial dims equal for stride-1.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t1_s2_d1",
      "label": "VALID vs SAME Padding Mode",
      "description": "VALID padding produces shrinking feature maps; SAME padding uses zero-padding to maintain WxH through each conv layer.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t1_s2_d2",
      "label": "Strided Downsampling vs Pooling",
      "description": "Strided conv (S=2) learns optimal downsampling filter; avg/max pooling uses fixed non-learned spatial aggregation.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t1_s3",
      "label": "1x1 Convolution Channel Mixing",
      "description": "Projects across channels at each spatial location independently — equivalent to MLP applied per pixel, controlling channel depth cheaply.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t1_s3_d1",
      "label": "Network-in-Network Bottleneck Design",
      "description": "1x1 conv reduces/expands channel count without spatial computation — used in ResNet bottlenecks (256->64->256).",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t1_s3_d2",
      "label": "Pointwise Computation Cost",
      "description": "1x1 conv: H*W*C_in*C_out FLOPs vs 3x3 conv: H*W*C_in*C_out*9 FLOPs — enables cheap channel projection.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t1_s4",
      "label": "Transposed Convolution (Deconv)",
      "description": "Upsamples spatial dims by inserting stride-1 zeros between input elements then applying conv — output size (H-1)*S+K for no padding.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t1_s4_d1",
      "label": "Checkerboard Artifact Problem",
      "description": "Stride-2 transposed conv creates uneven overlap pattern producing checkerboard artifacts; fixed by bilinear upsample + 1x1 conv.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t1_s4_d2",
      "label": "Gradient of Strided Forward Conv",
      "description": "Backward pass of strided conv IS a transposed conv — architecturally identical operations with swapped input/output roles.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t1_s5",
      "label": "Atrous Spatial Pyramid Pooling (ASPP)",
      "description": "Applies parallel dilated convolutions with rates {6,12,18} to capture multi-scale context without resolution loss in segmentation.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t1_s5_d1",
      "label": "DeepLab v3+ Context Encoding",
      "description": "ASPP merges 1x1, 3x3 dilated convolutions and global average pooling branch, concatenating for dense prediction output.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t1_s5_d2",
      "label": "Dilation Rate vs Scale Sensitivity",
      "description": "Each dilation branch captures features at different effective scales — rate 6 local textures, rate 18 coarse region structures.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t2",
      "label": "Pooling & Spatial Reduction",
      "description": "Max pooling (gradient only through argmax), average pooling, global average pooling for spatial invariance.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t2_s1",
      "label": "Max Pooling Argmax Gradient",
      "description": "Backprop passes gradient only to the position that was the max within each pool window; all other positions get zero gradient.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t2_s1_d1",
      "label": "Spatial Invariance to Small Translations",
      "description": "Max pool over 2x2 windows makes features invariant to 1-pixel translations of input patterns within each pooling region.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t2_s1_d2",
      "label": "Winner-Takes-All Information Loss",
      "description": "Max pooling discards exact feature positions and magnitude, losing fine-grained localization required for dense prediction.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t2_s2",
      "label": "Global Average Pooling (GAP)",
      "description": "Averages entire spatial feature map to single value per channel, eliminating fully-connected layers for classification heads.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t2_s2_d1",
      "label": "Spatial Average vs Flatten+FC",
      "description": "GAP forces network to identify discriminative features across entire spatial extent — stronger regularizer than FC layers.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t2_s2_d2",
      "label": "Class Activation Maps (CAM)",
      "description": "GAP enables visualization of class discriminative regions: CAM = sum over channels of w_c * f_k(x,y), highlighting activation areas.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t2_s3",
      "label": "Adaptive Average Pooling",
      "description": "Pools input to arbitrary target output size, enabling networks to accept variable resolution inputs in PyTorch.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t2_s3_d1",
      "label": "SPP-Net Spatial Pyramid Pooling",
      "description": "Pools to multiple fixed output sizes [1x1, 2x2, 4x4] simultaneously, concatenating for resolution-invariant feature extraction.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t2_s3_d2",
      "label": "Transfer Learning Resolution Mismatch Fix",
      "description": "Adaptive pool between backbone and classifier head allows fine-tuning at higher resolution than original pre-training.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t2_s4",
      "label": "Stochastic Pooling",
      "description": "Randomly samples within each pooling region weighted by activation magnitudes, acting as implicit data augmentation.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t2_s4_d1",
      "label": "Probabilistic Selection P(i) = a_i/sum(a_j)",
      "description": "At inference, uses expectation (average pooling); at training, samples position proportional to activation probability.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t2_s4_d2",
      "label": "Implicit Model Ensembling Effect",
      "description": "Each training forward pass creates distinct pooling configuration, effectively training ensemble of sub-networks.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t2_s5",
      "label": "RoI Pooling & RoI Align",
      "description": "Extracts fixed-size features from arbitrary-size region proposals in detection; RoI Align uses bilinear interpolation to fix misalignment.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t2_s5_d1",
      "label": "Quantization Error in RoI Pooling",
      "description": "Integer bin boundaries cause misalignment between proposal coords and feature map grid, hurting small object performance.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t2_s5_d2",
      "label": "Bilinear Interpolation in RoI Align",
      "description": "Samples 4 regular points per bin using bilinear interpolation, eliminating quantization errors for precise mask prediction.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t3",
      "label": "Object Detection Architectures",
      "description": "Two-stage Faster-RCNN, single-stage YOLO, SSD anchor strategies, anchor-free detection (FCOS/CenterNet).",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t3_s1",
      "label": "Faster-RCNN Region Proposal Network",
      "description": "Slides 3x3 window over feature map; at each location predicts objectness + boxes for 9 anchors (3 scales x 3 ratios).",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t3_s1_d1",
      "label": "Shared Feature Map Computation",
      "description": "Backbone computes features once for entire image; RPN and detection head both use these shared feature maps, avoiding redundancy.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t3_s1_d2",
      "label": "NMS Post-Processing IoU Threshold",
      "description": "Non-Maximum Suppression removes overlapping boxes with IoU > 0.7 for RPN; 0.5 for final detections.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t3_s2",
      "label": "YOLO Unified Grid Detection",
      "description": "Divides image into S x S grid; each cell predicts B bounding boxes + confidence + C class probs in single forward pass.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t3_s2_d1",
      "label": "YOLO v8 Anchor-Free Decoupled Head",
      "description": "YOLOv8 uses decoupled classification + regression heads with distribution focal loss (DFL) replacing anchor boxes.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t3_s2_d2",
      "label": "YOLO Grid Cell Responsibility",
      "description": "Cell containing object's center is responsible for prediction — only cells near object centers get positive training signal.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t3_s3",
      "label": "Feature Pyramid Network (FPN)",
      "description": "Adds top-down lateral connections between backbone levels, producing multi-scale feature pyramid for detecting objects of all sizes.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t3_s3_d1",
      "label": "P3-P7 Multi-Scale Feature Maps",
      "description": "FPN outputs 5 feature map scales; small anchors assigned to P3 (fine-grained), large anchors to P7 (coarse semantics).",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t3_s3_d2",
      "label": "Lateral 1x1 Connection Channel Alignment",
      "description": "1x1 conv on each backbone level matches channel count to FPN's uniform 256-channel specification before element-wise addition.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t3_s4",
      "label": "Anchor-Free FCOS & CenterNet",
      "description": "FCOS predicts (l, r, t, b) distance-from-point-to-box-boundary per pixel; CenterNet detects center heatmap + offset + size.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t3_s4_d1",
      "label": "FCOS Centerness Suppression Branch",
      "description": "Centerness score min(l,r)/max(l,r) * min(t,b)/max(t,b) suppresses off-center low-quality bounding box predictions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t3_s4_d2",
      "label": "Gaussian Heatmap Rendering",
      "description": "CenterNet renders target heatmap with 2D Gaussian σ=sqrt(wh)/3 at object centers for dense training signal.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t3_s5",
      "label": "Detection Metrics: mAP & IoU",
      "description": "Mean Average Precision integrates precision-recall curve across IoU thresholds (e.g. COCO mAP averages over IoU 0.5:0.95:0.05).",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t3_s5_d1",
      "label": "AP50 vs COCO mAP Calculation",
      "description": "AP50 uses single IoU=0.5 threshold; COCO mAP averages 10 thresholds {0.5, 0.55, ..., 0.95} for stricter localization evaluation.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t3_s5_d2",
      "label": "Interpolated 11-Point Precision-Recall",
      "description": "Approximates area under PR curve at 11 recall points {0.0, 0.1, ..., 1.0}, averaging precision at each recall level.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t4",
      "label": "Image Segmentation Architectures",
      "description": "Semantic segmentation (FCN/DeepLab/U-Net), instance segmentation (Mask-RCNN), panoptic segmentation, and SAM.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t4_s1",
      "label": "Fully Convolutional Networks (FCN)",
      "description": "Converts classification network FC layers to 1x1 convolutions, enabling dense pixel prediction via bilinear upsampling to input resolution.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t4_s1_d1",
      "label": "Skip Connections for FCN-8s",
      "description": "Adds pool3 predictions (8x scale) to upsampled pool4+fc predictions, recovering lost fine spatial detail.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t4_s1_d2",
      "label": "Stride-8 Feature Map Final Scale",
      "description": "Produces predictions 8x smaller than input; final 8x bilinear upsample achieves pixel-accurate segmentation maps.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t4_s2",
      "label": "U-Net Encoder-Decoder Architecture",
      "description": "Symmetric encoder contracts spatial dims (max pool) while decoder expands (transposed conv) using skip connections from encoder to decoder.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t4_s2_d1",
      "label": "Skip Connection Spatial Detail Transfer",
      "description": "Concatenates encoder feature maps to decoder at matching resolution, providing high-frequency spatial detail lost in pooling.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t4_s2_d2",
      "label": "Medical Imaging Data Efficiency",
      "description": "U-Net trained on 30 images with heavy augmentation outperforms sliding-window CNN trained on thousands of patches.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t4_s3",
      "label": "Mask R-CNN Instance Segmentation",
      "description": "Extends Faster-RCNN with parallel mask branch predicting 28x28 binary mask per RoI Align proposal for each instance.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t4_s3_d1",
      "label": "Decoupled Classification & Mask Branch",
      "description": "Mask branch trained with binary cross-entropy only for ground-truth class, not competing across all K class masks.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t4_s3_d2",
      "label": "Keypoint Detection Extension",
      "description": "Same Mask-RCNN architecture predicts one-hot 17-keypoint heatmaps by treating keypoints as single-pixel masks.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t4_s4",
      "label": "Segment Anything Model (SAM)",
      "description": "Promptable segmentation model: image encoder (ViT-H), prompt encoder (points/boxes/text), lightweight mask decoder with 3 output masks.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t4_s4_d1",
      "label": "SA-1B Dataset Scale",
      "description": "Trained on 11M images and 1.1B masks collected with model-in-the-loop annotation engine — largest segmentation dataset.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t4_s4_d2",
      "label": "Ambiguity-Aware Triple Mask Output",
      "description": "Predicts 3 masks (whole, part, sub-part) per prompt with confidence scores, letting user select appropriate granularity level.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t4_s5",
      "label": "Panoptic Segmentation (Stuff + Things)",
      "description": "Unifies semantic segmentation (amorphous stuff: sky/road) and instance segmentation (countable things: cars/people) in one prediction.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t4_s5_d1",
      "label": "Panoptic Quality (PQ) Metric",
      "description": "PQ = (sum TP IoU) / (|TP| + 0.5|FP| + 0.5|FN|), combining segmentation quality and recognition quality into single score.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t4_s5_d2",
      "label": "Panoptic FPN Architecture Merge",
      "description": "Combines FPN semantic head (stuff) with Mask-RCNN instance head (things), resolving overlaps by instance priority rule.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t5",
      "label": "Vision Transformers & CLIP",
      "description": "ViT patch embeddings, multi-head self-attention for images, DeiT training, CLIP contrastive pre-training.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t5_s1",
      "label": "ViT Patch Embedding & Position Encoding",
      "description": "Divides 224x224 image into 16x16 patches -> 196 tokens; each flattened patch projected to 768-dim embedding + learnable position embeddings.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t5_s1_d1",
      "label": "CLS Token Global Representation",
      "description": "Learnable [CLS] token prepended to sequence; its final embedding used as global image representation for classification head.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t5_s1_d2",
      "label": "Quadratic Attention Scaling O(N^2)",
      "description": "Self-attention on 196 tokens costs O(196^2) = 38k comparisons per layer — 2-4x more compute than equivalent CNN.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t5_s2",
      "label": "Multi-Head Self-Attention for Images",
      "description": "Each head learns Q, K, V projection; attention = softmax(Q K^T / sqrt(d_k)) V; different heads attend to different spatial relationships.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t5_s2_d1",
      "label": "Low-Level Texture vs High-Level Semantic Heads",
      "description": "Early ViT layers attend locally (similar to CNN); later layers develop global attention patterns covering full image extent.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t5_s2_d2",
      "label": "Windowed Attention in Swin Transformer",
      "description": "Swin partitions image into 7x7 windows; shifts window between layers for cross-window interaction at O(N) linear cost.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t5_s3",
      "label": "DeiT Knowledge Distillation Token",
      "description": "Adds distillation token alongside CLS token; trained with soft labels from CNN teacher — enables efficient ViT training without large datasets.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t5_s3_d1",
      "label": "Hard Distillation Label Target",
      "description": "Distillation token is trained against teacher's argmax class prediction rather than soft probability distribution output.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t5_s3_d2",
      "label": "Data Augmentation Requirement for ViT",
      "description": "ViTs need heavy augmentation (RandAugment/Mixup/CutMix/repeated augmentation) to overcome weaker inductive biases vs CNNs.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t5_s4",
      "label": "CLIP Contrastive Language-Image Pre-Training",
      "description": "Trains image encoder + text encoder jointly; maximizes cosine similarity of N matching (image, text) pairs vs N^2-N mismatched pairs.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t5_s4_d1",
      "label": "Temperature-Scaled InfoNCE Loss",
      "description": "L = -log(exp(s_ii/τ) / sum_j(exp(s_ij/τ))); temperature τ learned as log-parameterized scalar, typically τ ≈ 0.07.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t5_s4_d2",
      "label": "Zero-Shot Transfer via Prompt Engineering",
      "description": "Computes similarity of image to text prompts 'a photo of a {class}' for each class without any task-specific training.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t5_s5",
      "label": "Attention Rollout & Visualization",
      "description": "Traces attention flow through ViT by multiplying attention maps across layers with skip-connection accounting, revealing attended regions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t5_s5_d1",
      "label": "Raw Attention Map per Head",
      "description": "Each head produces 197x197 attention matrix; aggregating across heads and layers reveals which patches influence CLS token prediction.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t5_s5_d2",
      "label": "GradCAM for ViT Gradient Attribution",
      "description": "Computes gradients of class score w.r.t. attention weights, weighted average of attention maps for class-discriminative visualization.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t6",
      "label": "Transfer Learning & Fine-Tuning Strategy",
      "description": "Pre-trained feature extraction, fine-tuning learning rate schedules, domain adaptation, and few-shot learning.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t6_s1",
      "label": "Linear Probing vs Full Fine-Tuning",
      "description": "Linear probe: freeze backbone, train only classification head; Full fine-tuning: update all weights — latter better with sufficient data.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t6_s1_d1",
      "label": "Layer-Wise Learning Rate Decay",
      "description": "Multiplies learning rate by decay factor per layer from head to base: lr_l = base_lr * decay^(num_layers - l), protecting early features.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t6_s1_d2",
      "label": "Catastrophic Forgetting Prevention",
      "description": "Very low fine-tuning LR (1e-5 vs 1e-3) preserves pre-trained knowledge; early layer freezing prevents overwriting learned features.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t6_s2",
      "label": "Domain Adaptation & Shift Handling",
      "description": "Adapts model trained on source domain to target domain using domain adversarial training or feature alignment techniques.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t6_s2_d1",
      "label": "Domain Adversarial Neural Networks (DANN)",
      "description": "Gradient reversal layer trains encoder to be domain-invariant while fooling domain classifier, aligning source and target features.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t6_s2_d2",
      "label": "Test-Time Augmentation (TTA) for Shift",
      "description": "Averages predictions across multiple augmented versions of test input (flips, crops, brightness) to reduce distribution shift impact.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t6_s3",
      "label": "Few-Shot Learning & Meta-Learning",
      "description": "Learns to learn from K examples per class using episodic training; Model-Agnostic Meta-Learning (MAML) finds initialization for fast adaptation.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t6_s3_d1",
      "label": "Prototypical Networks Class Centroids",
      "description": "Computes prototype embedding as mean of K support examples per class; classifies by nearest prototype using Euclidean distance.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t6_s3_d2",
      "label": "MAML Second-Order Gradient Computation",
      "description": "Meta-loss gradient requires differentiating through inner-loop SGD steps, computing expensive second-order derivatives of task loss.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t6_s4",
      "label": "LoRA Low-Rank Adaptation",
      "description": "Freezes pre-trained weights W; adds trainable low-rank decomposition W' = W + BA where B ∈ R^(d x r), A ∈ R^(r x k), r << d.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t6_s4_d1",
      "label": "Rank r Parameter Reduction",
      "description": "For rank r=16 in 1024x1024 layer: trains 2*1024*16=32768 vs 1,048,576 full fine-tune params — 96.9% reduction.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t6_s4_d2",
      "label": "QLoRA 4-bit Quantized Backbone",
      "description": "Combines 4-bit NF4 quantization of frozen backbone with BF16 LoRA adapters, training 70B models on single consumer GPU.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t6_s5",
      "label": "Adapter Modules & Prompt Tuning",
      "description": "Inserts small trainable bottleneck modules (d -> r -> d) after each transformer layer; only adapter weights trained during fine-tuning.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t6_s5_d1",
      "label": "Prefix Tuning Continuous Prompt Prepend",
      "description": "Prepends trainable continuous prefix tokens to K,V matrices in each attention layer — tunes 0.1% parameters vs full fine-tuning.",
      "type": "concept"
    },
    {
      "id": "ml_root_p4_t6_s5_d2",
      "label": "Adapter Residual Bottleneck Initialization",
      "description": "Initializes adapter near-identity (near-zero W_down) so initial fine-tuning begins from well-performing pre-trained state.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5",
      "label": "Sequence Models & NLP",
      "description": "RNNs, LSTMs, GRUs, attention mechanisms, Transformer architecture, BERT, GPT, and modern LLM internals.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t1",
      "label": "Recurrent Neural Networks & BPTT",
      "description": "h_t = tanh(W_h h_{t-1} + W_x x_t + b); unrolled backprop through time multiplies T Jacobians causing vanishing/exploding gradients.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t1_s1",
      "label": "Vanishing Gradient Over Long Sequences",
      "description": "Gradient ∂L/∂h_1 = product_{t=1}^{T} ∂h_{t+1}/∂h_t; if spectral radius < 1 this product exponentially decays to 0.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t1_s1_d1",
      "label": "Spectral Radius < 1 Decay Bound",
      "description": "If W_h eigenvalues satisfy |λ| < 1, gradient signal vanishes geometrically across T timesteps, losing early context.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t1_s1_d2",
      "label": "Truncated BPTT Sequence Length",
      "description": "Truncates backprop at K steps (e.g. 35 for language models) to bound compute and partially mitigate vanishing gradients.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t1_s2",
      "label": "Exploding Gradient Clip",
      "description": "Gradient norm clipping: if ||g|| > threshold then g = g * threshold / ||g||; preserves direction while bounding magnitude.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t1_s2_d1",
      "label": "Global vs Per-Layer Clipping Strategy",
      "description": "Global norm clip applied across all parameters prevents one layer's exploding gradient from corrupting entire parameter update.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t1_s2_d2",
      "label": "Orthogonal Weight Initialization",
      "description": "Initializing W_h as orthogonal matrix (|λ|=1 exactly) maintains gradient magnitude near 1.0 during early training.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t1_s3",
      "label": "Bidirectional RNNs",
      "description": "Runs separate forward RNN (left-to-right) and backward RNN (right-to-left), concatenating hidden states for full context at each position.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t1_s3_d1",
      "label": "Non-Autoregressive Inference Only",
      "description": "Requires full sequence at inference time — cannot generate text token-by-token; used in classification/encoding tasks.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t1_s3_d2",
      "label": "Sentence Embedding Concatenation",
      "description": "Final h_T from forward + h_1 from backward concatenated as sequence representation, capturing both prefix and suffix contexts.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t1_s4",
      "label": "Teacher Forcing Training Strategy",
      "description": "Feeds ground-truth tokens as inputs at each step during training, decoupling each step from previous prediction errors.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t1_s4_d1",
      "label": "Exposure Bias at Inference",
      "description": "Model trained on ground-truth inputs but evaluated on own (possibly wrong) previous outputs — distribution mismatch causes error cascading.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t1_s4_d2",
      "label": "Scheduled Sampling Fix",
      "description": "Gradually replaces teacher inputs with own predicted tokens as training progresses, bridging train-test distribution gap.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t1_s5",
      "label": "Sequence-to-Sequence Architecture",
      "description": "Encoder RNN reads source sequence into fixed-size context vector c = h_T; Decoder RNN generates target tokens conditioned on c.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t1_s5_d1",
      "label": "Bottleneck Context Vector Problem",
      "description": "Single vector must compress entire source sequence — fails for long sequences where crucial early information is lost.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t1_s5_d2",
      "label": "Attention Bypass of Bottleneck",
      "description": "Attention mechanism replaces single context vector with weighted sum over all encoder hidden states, giving direct access to full sequence.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t2",
      "label": "LSTM Gates & GRU Mechanism",
      "description": "LSTM 4-gate architecture (forget/input/cell/output) solves vanishing gradient by maintaining additive cell state gradient highway.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t2_s1",
      "label": "LSTM Forget Gate f_t",
      "description": "f_t = σ(W_f [h_{t-1}, x_t] + b_f); multiplies cell state to selectively erase irrelevant past information from long-term memory.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t2_s1_d1",
      "label": "Gate Saturation Gradient Flow",
      "description": "When f_t=1 (sigmoid near 1), ∂C_t/∂C_{t-1} = f_t ≈ 1, maintaining unattenuated gradient highway through cell state.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t2_s1_d2",
      "label": "Forget Gate Bias Initialization to 1.0",
      "description": "Initializing forget gate bias to 1.0 starts gates open, letting gradients flow freely until training teaches selective forgetting.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t2_s2",
      "label": "LSTM Input & Cell Update Gates",
      "description": "i_t = σ(W_i [h,x]+b); g_t = tanh(W_g [h,x]+b); C_t = f_t*C_{t-1} + i_t*g_t — adds new content selectively.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t2_s2_d1",
      "label": "Additive Cell State Gradient Highway",
      "description": "C_t update is additive: ∂C_t/∂C_{t-1} = f_t; this is the key innovation providing near-constant gradient flow unlike RNNs.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t2_s2_d2",
      "label": "Bounded Cell Activation tanh(C_t)",
      "description": "Cell state passed through tanh squash to bound output to (-1,1), preventing unbounded hidden state growth over time.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t2_s3",
      "label": "LSTM Output Gate & Hidden State",
      "description": "o_t = σ(W_o [h,x]+b); h_t = o_t * tanh(C_t) — output gate controls what portion of cell state to expose as hidden state.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t2_s3_d1",
      "label": "Separate Memory vs Working State",
      "description": "C_t is long-term memory; h_t is short-term working state — output gate selectively exposes relevant memory for current output.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t2_s3_d2",
      "label": "LSTM vs GRU Parameter Count",
      "description": "LSTM: 4 gates with 4*(n^2 + nm + n) params; GRU: 3 gates with 3*(n^2 + nm + n) — GRU 25% fewer parameters.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t2_s4",
      "label": "GRU Reset & Update Gates",
      "description": "z_t = σ(W_z [h,x]); r_t = σ(W_r [h,x]); h_t = (1-z_t)*h_{t-1} + z_t*tanh(W[r_t*h_{t-1},x]) — merged cell+hidden state.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t2_s4_d1",
      "label": "Reset Gate Selective Context Erasure",
      "description": "r_t=0 erases past hidden state entirely; r_t=1 preserves all — allows new independent context computation from scratch.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t2_s4_d2",
      "label": "Update Gate Interpolation h_t",
      "description": "z_t linearly interpolates between retaining h_{t-1} (z=0) and adopting candidate h~ (z=1), learning optimal memory mixing.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t2_s5",
      "label": "LSTM Peephole Connections",
      "description": "Allows gates to observe current cell state C_{t-1} directly: f_t = σ(W_f [C_{t-1}, h_{t-1}, x_t] + b_f).",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t2_s5_d1",
      "label": "Precise Timing Signal Learning",
      "description": "Peephole connections enable LSTM to precisely count and time repeating patterns — critical for CTC speech alignment tasks.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t2_s5_d2",
      "label": "Marginally Better Performance",
      "description": "Peephole variants show modest improvements on timing-sensitive tasks but add 3*n parameters per layer to LSTM.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t3",
      "label": "Attention & Transformer Architecture",
      "description": "Scaled dot-product attention, multi-head attention, positional encodings, encoder-decoder Transformer, and efficient attention variants.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t3_s1",
      "label": "Scaled Dot-Product Attention",
      "description": "Attention(Q,K,V) = softmax(Q K^T / sqrt(d_k)) V; scaling by 1/sqrt(d_k) prevents dot products from growing large in high-dimensional spaces.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t3_s1_d1",
      "label": "Large d_k Softmax Saturation Problem",
      "description": "Without scaling, dot products grow O(d_k) in magnitude, pushing softmax into saturated near-zero gradient regions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t3_s1_d2",
      "label": "Attention Weight Sparsity via Temperature",
      "description": "Division by sqrt(d_k) keeps softmax input variance ~1, producing moderate peaking rather than near-one-hot attention patterns.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t3_s2",
      "label": "Multi-Head Attention Parallelism",
      "description": "Projects Q,K,V h times to d_k=d_model/h each; computes h parallel attention heads; concatenates and projects: O=W_O [head_1,...,head_h].",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t3_s2_d1",
      "label": "Different Heads Learn Different Relations",
      "description": "Each head specializes independently: some attend syntactically (subject-verb), others semantically (coreference) or positionally.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t3_s2_d2",
      "label": "Concat+Project Total Cost Equivalence",
      "description": "h heads of d_k=d/h dims cost exactly same FLOPs as single full-dim attention — parallelism is free in terms of compute.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t3_s3",
      "label": "Positional Encoding (Sinusoidal vs Learned)",
      "description": "Sinusoidal PE: PE(pos,2i)=sin(pos/10000^{2i/d}), PE(pos,2i+1)=cos(...); enables model to infer relative positions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t3_s3_d1",
      "label": "Extrapolation Beyond Training Length",
      "description": "Sinusoidal encoding generalizes to longer sequences than seen in training; learned positional embeddings strictly fail to extrapolate.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t3_s3_d2",
      "label": "Rotary Positional Embedding (RoPE)",
      "description": "Rotates Q and K vectors by angle proportional to position: RoPE(x, m) = R_m x where R_m is a rotation matrix, enabling relative position attention.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t3_s4",
      "label": "Feed-Forward Sublayer (FFN)",
      "description": "Two-layer MLP applied identically per position: FFN(x) = W_2 max(0, W_1 x + b_1) + b_2 with d_ff = 4*d_model.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t3_s4_d1",
      "label": "FFN as Key-Value Memory Store",
      "description": "Recent analysis shows FFN layers act as factual knowledge stores — lower layers store surface patterns, upper layers store factual associations.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t3_s4_d2",
      "label": "SwiGLU Activation Replacement",
      "description": "LLaMA/PaLM use SwiGLU(x) = Swish(xW_1) * (xW_2) with 2/3 d_ff, matching standard FFN performance at lower parameter count.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t3_s5",
      "label": "Flash Attention IO-Aware Implementation",
      "description": "Reorders attention computation for GPU memory hierarchy: tiles Q,K,V in SRAM, avoids O(N^2) HBM reads by computing softmax in streaming fashion.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t3_s5_d1",
      "label": "HBM Memory Bandwidth Bottleneck",
      "description": "Standard attention writes N^2 attention matrix to HBM; FlashAttention avoids this, cutting memory IO by 5-20x for long sequences.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t3_s5_d2",
      "label": "FlashAttention-2 Work Partitioning",
      "description": "Distributes sequence length dimension across GPU thread blocks, improving parallelism by 2-4x over FlashAttention-1.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t4",
      "label": "BERT & Masked Language Modeling",
      "description": "Bidirectional encoder pre-training via MLM (15% masking) + NSP, then fine-tuned with task-specific classification head.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t4_s1",
      "label": "Masked Language Modeling (MLM) Task",
      "description": "Randomly masks 15% of tokens: 80% replaced with [MASK], 10% random token, 10% unchanged — model predicts original token.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t4_s1_d1",
      "label": "Prediction Head Architecture",
      "description": "12-layer BERT: masked positions projected through BERT FFN + GELU + LayerNorm + vocab linear to predict from 30k vocab.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t4_s1_d2",
      "label": "No [MASK] Token at Fine-Tuning",
      "description": "The 10% random + 10% unchanged strategy reduces mismatch between pre-training [MASK] tokens and unseen inference inputs.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t4_s2",
      "label": "Next Sentence Prediction (NSP) Task",
      "description": "Trains model on 50% consecutive sentence pairs (IsNext) and 50% random pairs (NotNext) using [CLS] embedding classification.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t4_s2_d1",
      "label": "NSP Removed in RoBERTa Training",
      "description": "RoBERTa showed NSP hurts performance — removing it and training 10x longer with dynamic masking improves GLUE scores significantly.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t4_s2_d2",
      "label": "Sentence Order Prediction in ALBERT",
      "description": "ALBERT replaces NSP with Sentence Order Prediction (SOP): distinguishes swapped vs correct sentence order — harder and more useful.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t4_s3",
      "label": "WordPiece & BPE Tokenization",
      "description": "Splits words into subword units (e.g. 'unbelievable' -> 'un ##believ ##able') to handle OOV words with fixed 30k vocab.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t4_s3_d1",
      "label": "Byte Pair Encoding (BPE) Merge Rules",
      "description": "BPE iteratively merges most frequent symbol pairs from character vocabulary, building subword vocabulary of target size.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t4_s3_d2",
      "label": "SentencePiece Language-Agnostic Tokenizer",
      "description": "Treats input as raw unicode characters, enabling multilingual models without language-specific pre-tokenization rules.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t4_s4",
      "label": "BERT Fine-Tuning Downstream Tasks",
      "description": "Adds task-specific head (linear classifier on [CLS]) and fine-tunes full model end-to-end on labeled data for 3 epochs.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t4_s4_d1",
      "label": "Classification Task [CLS] Head",
      "description": "Single linear layer W ∈ R^{K x H} on [CLS] embedding for K-class classification; cross-entropy fine-tuning with Adam LR=2e-5.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t4_s4_d2",
      "label": "Token-Level Tasks with Per-Token Head",
      "description": "NER/QA tasks apply per-token classifier to all T token embeddings independently, not just [CLS] summary representation.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t4_s5",
      "label": "Efficient BERT Variants (DistilBERT/ALBERT/TinyBERT)",
      "description": "DistilBERT removes 50% layers via knowledge distillation; ALBERT uses cross-layer parameter sharing; TinyBERT uses 4-layer distillation.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t4_s5_d1",
      "label": "DistilBERT Soft Label Distillation",
      "description": "Student trained on teacher's soft logit distribution (temperature T=4) + student's hard label loss + cosine embedding similarity.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t4_s5_d2",
      "label": "ALBERT Cross-Layer Weight Sharing",
      "description": "All 12 transformer layers share identical parameters; factorizes embedding matrix to 128-dim before projecting to hidden dim.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t5",
      "label": "GPT & Autoregressive Language Models",
      "description": "Causal decoder-only LM pre-training, KV-cache inference optimization, scaling laws, and instruction tuning.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t5_s1",
      "label": "Causal Self-Attention Masking",
      "description": "Upper-triangular mask prevents each position i from attending to positions j > i: attention score = -inf for j > i before softmax.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t5_s1_d1",
      "label": "Next-Token Prediction Objective",
      "description": "Maximizes sum(log P(x_t | x_1...x_{t-1})) — every token position provides training signal simultaneously via masked attention.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t5_s1_d2",
      "label": "Decoder-Only vs Encoder-Decoder",
      "description": "Decoder-only (GPT) is simpler and scales better; Encoder-decoder (T5) handles both understanding and generation tasks natively.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t5_s2",
      "label": "KV-Cache Inference Optimization",
      "description": "Caches Key and Value matrices from all past tokens; each new token only computes Q for current position, avoiding O(T^2) recomputation.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t5_s2_d1",
      "label": "Memory Growth Per Sequence",
      "description": "KV-cache memory = 2 * num_layers * num_heads * head_dim * seq_len * batch_size * 2 bytes (BF16) — grows linearly with T.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t5_s2_d2",
      "label": "Multi-Query Attention (MQA) Memory Reduction",
      "description": "Shares single K,V head across all Q heads, reducing KV-cache size by num_heads factor — used in PaLM/Falcon for efficiency.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t5_s3",
      "label": "Scaling Laws (Chinchilla)",
      "description": "Chinchilla shows optimal loss L(N,D) ≈ E + A/N^α + B/D^β; 70B Chinchilla model trained on 1.4T tokens beats 280B Gopher trained on 300B.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t5_s3_d1",
      "label": "Compute-Optimal Token-to-Parameter Ratio",
      "description": "Chinchilla law: train on ~20 tokens per parameter for compute-optimal LLM training (e.g. 70B model needs 1.4T tokens).",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t5_s3_d2",
      "label": "Irreducible Loss Term E = 1.69 nats",
      "description": "Irreducible entropy floor E represents unlearnable randomness in natural language — true language entropy lower bound.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t5_s4",
      "label": "Instruction Tuning & RLHF",
      "description": "Fine-tunes on (instruction, response) pairs (SFT); then trains reward model; then optimizes policy with PPO proximal policy optimization.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t5_s4_d1",
      "label": "Reward Model Preference Pairs",
      "description": "Reward model trained on human pairwise comparisons (y_w preferred over y_l): loss = -log(σ(r(x,y_w) - r(x,y_l))).",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t5_s4_d2",
      "label": "PPO KL Penalty from Reference Model",
      "description": "PPO objective: r(x,y) - β KL(π_θ || π_ref) prevents policy from diverging too far from initial SFT model behaviors.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t5_s5",
      "label": "Speculative Decoding Acceleration",
      "description": "Small draft model generates K tokens speculatively; target model verifies in parallel; accepts prefix up to first disagreement.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t5_s5_d1",
      "label": "Lossless Acceptance Criterion",
      "description": "Accepts draft token t if rand() < min(1, p_target(t) / p_draft(t)) — guarantees identical distribution to target model sampling.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t5_s5_d2",
      "label": "2-3x Latency Speedup at Same Quality",
      "description": "Achieves 2-3x throughput improvement since target model evaluates K tokens per forward pass vs 1 token for standard decoding.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t6",
      "label": "LLM Architecture Internals",
      "description": "Modern LLM design decisions: RoPE, GQA, SwiGLU, mixture-of-experts, context length extension, and speculative decoding.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t6_s1",
      "label": "Grouped Query Attention (GQA)",
      "description": "G groups share K,V heads among multiple Q heads: G=1 is MHA, G=num_heads is MQA; GQA balances quality vs KV-cache size.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t6_s1_d1",
      "label": "Llama 2 70B: 8 KV Heads, 64 Q Heads",
      "description": "8 KV head groups shared across 64 query heads — 8x reduction in KV-cache memory vs standard MHA at negligible quality loss.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t6_s1_d2",
      "label": "Interpolation Between MHA and MQA Quality",
      "description": "GQA with G groups matches MHA quality more closely than MQA while achieving proportional KV-cache memory savings.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t6_s2",
      "label": "Sparse Mixture of Experts (MoE)",
      "description": "Replaces dense FFN with N expert FFNs; router selects top-k experts per token; only k/N parameters active per forward pass.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t6_s2_d1",
      "label": "Load Balancing Auxiliary Loss",
      "description": "Auxiliary loss penalizes uneven expert routing: L_aux = N * sum(f_i * P_i) where f_i is fraction of tokens routed to expert i.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t6_s2_d2",
      "label": "Mixtral 8x7B = 46.7B Total, 12.9B Active",
      "description": "8 FFN experts each 7B; router selects 2 per token — effective compute equals 12.9B dense model while accessing 46.7B parameters.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t6_s3",
      "label": "Context Length Extension Techniques",
      "description": "Extending beyond training context: position interpolation (PI) re-scales positions; YaRN uses frequency-based NTK-aware interpolation.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t6_s3_d1",
      "label": "Positional Interpolation Scaling Factor",
      "description": "PI scales position index: pos' = pos * (original_L / target_L), compressing positions into trained range then fine-tuning.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t6_s3_d2",
      "label": "Long Context Attention Sparsity (Ring Attention)",
      "description": "Ring attention shards sequence across devices: each device handles local chunk, passes KV to next device in ring fashion.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t6_s4",
      "label": "Tokenizer Vocabulary & Efficiency",
      "description": "Larger vocab (128k BPE in Llama 3) reduces tokens per character, lowering sequence lengths and inference FLOPs for same text.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t6_s4_d1",
      "label": "Byte Fallback for Unknown Characters",
      "description": "Models trained with byte fallback represent any Unicode character via its individual UTF-8 bytes, ensuring zero OOV tokens.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t6_s4_d2",
      "label": "Vocabulary Size vs Embedding Parameter Cost",
      "description": "128k vocab x 4096 dim = 500M embedding parameters; embedding weight tying with LM head shares these to reduce model size.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t6_s5",
      "label": "Model Quantization (PTQ & QAT)",
      "description": "Post-Training Quantization reduces weights to INT8/INT4/FP8 using calibration data; QAT simulates quantization during fine-tuning.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t6_s5_d1",
      "label": "GPTQ Row-Wise Quantization Algorithm",
      "description": "Quantizes weights column-by-column, compensating error in remaining weights using Hessian inverse — enables accurate 4-bit LLMs.",
      "type": "concept"
    },
    {
      "id": "ml_root_p5_t6_s5_d2",
      "label": "AWQ Salient Weight Protection",
      "description": "Identifies 1% salient weights (high activation magnitude) to protect at high precision, keeping all others at 4-bit.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6",
      "label": "Training Infrastructure & Optimization",
      "description": "SGD variants, Adam/AdamW, learning rate schedules, mixed precision training, distributed training, and ZeRO optimizer.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t1",
      "label": "Gradient Descent Variants",
      "description": "Batch GD, Stochastic GD, Mini-batch GD, momentum, Nesterov acceleration, and adaptive learning rate methods.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t1_s1",
      "label": "SGD Momentum Update",
      "description": "v_t = β v_{t-1} + (1-β) ∇L; w_t = w_{t-1} - α v_t; momentum β=0.9 accumulates exponentially weighted gradient history.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t1_s1_d1",
      "label": "Physical Velocity Analogy",
      "description": "Momentum term builds velocity in persistent gradient directions, allowing optimization to roll over flat curvature saddle regions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t1_s1_d2",
      "label": "Nesterov Lookahead Gradient",
      "description": "Computes gradient at lookahead point w - βv rather than current w, providing better approximation of future gradient direction.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t1_s2",
      "label": "Adam: Adaptive Moment Estimation",
      "description": "m_t = β1 m_{t-1} + (1-β1) g; v_t = β2 v_{t-1} + (1-β2) g^2; w -= α m_hat/(sqrt(v_hat)+ε); β1=0.9, β2=0.999, ε=1e-8.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t1_s2_d1",
      "label": "Bias Correction for Cold Start",
      "description": "m_hat = m/(1-β1^t) and v_hat = v/(1-β2^t) correct for zero-initialization bias in early training steps.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t1_s2_d2",
      "label": "Per-Parameter Adaptive Learning Rates",
      "description": "Dividing by sqrt(v_hat) scales learning rate inversely to gradient magnitude history — large gradient params get small effective LR.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t1_s3",
      "label": "AdamW Decoupled Weight Decay",
      "description": "Separates weight decay from gradient update: w_t = (1 - λ) w_{t-1} - α m_hat/(sqrt(v_hat)+ε); fixes Adam's L2 regularization inconsistency.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t1_s3_d1",
      "label": "Adam L2 vs AdamW Weight Decay Difference",
      "description": "Adding L2 penalty to Adam loss adapts weight decay by gradient history — decoupled AdamW applies uniform multiplicative decay.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t1_s3_d2",
      "label": "AdamW as Standard for Transformer Training",
      "description": "AdamW with weight decay 0.1 is standard for LLM training; Llama/GPT-4/PaLM all use AdamW.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t1_s4",
      "label": "Learning Rate Warmup & Cosine Decay",
      "description": "Linear warmup for N_warmup steps prevents early gradient explosion; cosine annealing: lr_t = lr_min + 0.5(lr_max - lr_min)(1 + cos(πt/T)).",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t1_s4_d1",
      "label": "Warmup Prevents Large Initial Updates",
      "description": "Adam's bias-corrected v_hat is very small in first few steps, causing large effective LR — warmup keeps actual LR small initially.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t1_s4_d2",
      "label": "Cosine Decay with Restarts (SGDR)",
      "description": "Cosine annealing with hard restarts allows model to escape local minima and explore new regions periodically.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t1_s5",
      "label": "Gradient Clipping by Global Norm",
      "description": "Computes global gradient norm ||g||_2 = sqrt(sum ||g_i||^2); if > threshold clips: g = g * threshold / ||g||.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t1_s5_d1",
      "label": "Default max_norm=1.0 in Transformer Training",
      "description": "LLM training universally clips gradient norm at 1.0 to prevent occasional large gradient spikes from destabilizing training.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t1_s5_d2",
      "label": "Norm vs Value Clipping Comparison",
      "description": "Norm clipping preserves gradient direction; value clipping (elementwise threshold) can distort update direction and slow convergence.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t2",
      "label": "Mixed Precision & Numerical Formats",
      "description": "BF16/FP16 training, loss scaling, FP8 E4M3/E5M2 for H100, and TF32 compute format.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t2_s1",
      "label": "FP16 Training & Dynamic Loss Scaling",
      "description": "FP16 can underflow (gradients round to 0) or overflow (NaN); dynamic loss scaling multiplies loss by S, divides gradients by S.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t2_s1_d1",
      "label": "Scale Factor Adjustment Policy",
      "description": "If no inf/NaN in K=2000 steps, double S; if inf/NaN detected, halve S and skip this optimizer step.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t2_s1_d2",
      "label": "Master Weight in FP32 Preservation",
      "description": "Optimizer states (momentum, variance) and master weights kept in FP32; FP16 copy used only for forward/backward computation.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t2_s2",
      "label": "BF16 Wide Exponent Advantage",
      "description": "BF16 has same 8-bit exponent as FP32 (range ±3.39e38 vs FP16 ±65504) — eliminates overflow with minimal mantissa precision loss.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t2_s2_d1",
      "label": "Mantissa Precision Trade-off",
      "description": "BF16 7-bit mantissa vs FP16 10-bit: BF16 represents ~3 significant decimal digits vs ~3.3 for FP16 — negligible for DNN gradients.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t2_s2_d2",
      "label": "Google TPU Native BF16 Support",
      "description": "TPUs natively compute matrix multiplications in BF16 since TPU v2 — BF16 training requires no special loss scaling handling.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t2_s3",
      "label": "FP8 E4M3 and E5M2 Formats for H100",
      "description": "NVIDIA H100 Tensor Cores support FP8: E4M3 (high precision, limited range) for forward; E5M2 (wider range) for backward passes.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t2_s3_d1",
      "label": "Per-Tensor Scaling Quantization",
      "description": "FP8 training requires per-tensor amax (absolute maximum) scaling factors: scale = 448 / amax to use full FP8 range.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t2_s3_d2",
      "label": "2x FLOPS Benefit Over BF16",
      "description": "FP8 Tensor Core throughput is 2x compared to BF16 on H100, enabling near-2x training speedup with careful quantization.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t2_s4",
      "label": "TF32 (19-bit) GPU Compute Format",
      "description": "Ampere+ GPU internal accumulation uses TF32: 1 sign + 8 exponent + 10 mantissa = 19 bits; inputs/outputs remain FP32.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t2_s4_d1",
      "label": "3x Tensor Core Speedup Over FP32",
      "description": "TF32 matrix multiply provides 3x throughput improvement over full FP32, enabled by default on Ampere (A100) for most models.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t2_s4_d2",
      "label": "Transparent to PyTorch Code",
      "description": "No code changes needed; controlled by torch.backends.cuda.matmul.allow_tf32 flag, enabled by default since PyTorch 1.11.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t2_s5",
      "label": "Quantization-Aware Training (QAT)",
      "description": "Simulates quantization noise during training with straight-through estimator gradients, producing models robust to quantized inference.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t2_s5_d1",
      "label": "Straight-Through Estimator (STE)",
      "description": "Passes gradient through non-differentiable quantize() function unchanged: ∂round(x)/∂x = 1 — enables end-to-end backprop.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t2_s5_d2",
      "label": "PACT Learned Clipping Boundary",
      "description": "Parameterized Clipping Activation (PACT) learns optimal quantization clipping boundary α jointly with model weights.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t3",
      "label": "Distributed Data Parallel (DDP)",
      "description": "Copies full model to each GPU; runs forward/backward on local mini-batch; all-reduces gradients via NCCL for synchronization.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t3_s1",
      "label": "All-Reduce Gradient Synchronization",
      "description": "NCCL Ring-AllReduce: each of N GPUs contributes and receives gradients; bandwidth-optimal O(2(N-1)/N) vs O(N) naive broadcast.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t3_s1_d1",
      "label": "Ring AllReduce Bandwidth Efficiency",
      "description": "Sends exactly 2*(N-1)/N * data_size bytes per GPU regardless of N — near-100% network bandwidth utilization as N scales.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t3_s1_d2",
      "label": "Bucket Gradient Accumulation",
      "description": "DDP accumulates gradients into 25MB buckets, launching AllReduce as each bucket fills — overlaps AllReduce with backward pass.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t3_s2",
      "label": "DDP vs DataParallel (DP) Comparison",
      "description": "DP uses parameter server (single GPU bottleneck); DDP uses all-reduce (symmetric) — DDP is 2-3x faster for multi-GPU training.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t3_s2_d1",
      "label": "GIL Bottleneck in DataParallel",
      "description": "PyTorch's DataParallel runs multiple threads under one process GIL — forces sequential execution reducing GPU utilization severely.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t3_s2_d2",
      "label": "DDP Multi-Process Architecture",
      "description": "Each GPU gets dedicated process; no GIL contention; each process loads full model copy independently.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t3_s3",
      "label": "Gradient Sync Overlap with Backward",
      "description": "DDP uses hook-based mechanism to trigger AllReduce immediately when each parameter's gradient is computed, not waiting for full backward.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t3_s3_d1",
      "label": "Registered Autograd Hook Trigger",
      "description": "register_hook() fires AllReduce immediately for parameter group when its gradients are ready, maximizing compute-communication overlap.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t3_s3_d2",
      "label": "Communication Bucket Ordering",
      "description": "Reversed layer order for bucket assignment: last layers sync first (ready first in backward), maximizing pipeline overlap.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t3_s4",
      "label": "FSDP Fully Sharded Data Parallel",
      "description": "Shards model parameters, gradients, AND optimizer states across GPUs (ZeRO-3); all-gathers parameters before each layer's forward pass.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t3_s4_d1",
      "label": "All-Gather Before Forward + Reduce-Scatter After Backward",
      "description": "FSDP: gather full layer params (all-gather) → forward/backward → scatter-reduce gradient shards → discard gathered params to free memory.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t3_s4_d2",
      "label": "Linear Memory Scaling O(params/num_GPUs)",
      "description": "FSDP enables training 70B+ models across 64+ GPUs with each GPU holding only 1/64 of total parameters.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t3_s5",
      "label": "Pipeline Parallelism with Micro-Batching",
      "description": "Splits model layers across GPUs in stages; micro-batches flow through pipeline — GPUi feeds GPUi+1 while working on next micro-batch.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t3_s5_d1",
      "label": "1F1B Pipeline Schedule",
      "description": "One-Forward-One-Backward schedule: after warmup each GPU alternates F and B passes, minimizing pipeline bubble to (p-1)/m where p=stages, m=micro-batches.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t3_s5_d2",
      "label": "Interleaved Schedule Bubble Reduction",
      "description": "Further reduces bubble by assigning multiple non-consecutive layer chunks per GPU, requiring extra P2P communications.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t4",
      "label": "ZeRO Optimizer Stages",
      "description": "Zero Redundancy Optimizer partitions optimizer states (S1), gradients (S2), and parameters (S3) across GPUs.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t4_s1",
      "label": "ZeRO Stage 1: Optimizer State Partition",
      "description": "Partitions Adam m, v states and FP32 master weights across N GPUs; each GPU holds 1/N; requires reduce-scatter + broadcast each step.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t4_s1_d1",
      "label": "Memory Reduction Factor for Stage 1",
      "description": "Adam optimizer uses 12 bytes/param (FP32 weight + 2 moment vectors); Stage 1 reduces this to 12/N bytes per GPU.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t4_s1_d2",
      "label": "Communication Equivalent to DDP",
      "description": "Stage 1 requires same AllReduce volume as DDP; optimizer states retrieved via broadcast to perform local parameter updates.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t4_s2",
      "label": "ZeRO Stage 2: Gradient Sharding",
      "description": "Each GPU holds gradients for only its own 1/N parameter shard; reduces gradient memory from 2 bytes/param to 2/N bytes/param.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t4_s2_d1",
      "label": "Reduce-Scatter Gradient Collection",
      "description": "After backward, reduce-scatter sends each GPU only the gradient shard it owns — remaining gradients discarded immediately.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t4_s2_d2",
      "label": "Stage 2 vs DDP Communication Volume",
      "description": "Same AllReduce volume as DDP but memory footprint reduced by N for optimizer states + gradients — no extra communication cost.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t4_s3",
      "label": "ZeRO Stage 3: Parameter Sharding",
      "description": "Parameters themselves sharded across GPUs; all-gather required before each layer's forward pass; parameters discarded after use.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t4_s3_d1",
      "label": "All-Gather Before Each Layer Forward",
      "description": "Stage 3 performs N-1 all-gather operations per forward pass (one per layer), adding 2x communication volume vs DDP.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t4_s3_d2",
      "label": "Enabling 100B+ Model Training",
      "description": "Stage 3 enables single-copy training of models too large for any individual GPU — 175B GPT-3 trained with ZeRO-3 on 1024 V100s.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t4_s4",
      "label": "ZeRO-Infinity CPU/NVMe Offloading",
      "description": "Offloads optimizer states (CPU) and parameters (NVMe) to slower memory tiers, enabling trillion-parameter training on GPU clusters.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t4_s4_d1",
      "label": "Bandwidth-Optimal CPU Offload",
      "description": "Overlaps GPU compute with CPU pinned-memory copies via PCIe DMA; achieves near-peak GPU throughput despite slow CPU offload.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t4_s4_d2",
      "label": "NVMe Bandwidth Limitation",
      "description": "Modern NVMe delivers 7 GB/s vs GPU compute needing 80 GB/s — only feasible for very large batch sizes masking I/O latency.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t4_s5",
      "label": "Tensor Parallelism (Megatron-LM)",
      "description": "Splits individual matrix multiplications across GPUs: column-parallel A, row-parallel B; requires all-reduce inside each transformer layer.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t4_s5_d1",
      "label": "Column-Row Parallel FFN Layer Split",
      "description": "W1 split column-wise across GPUs (each GPU holds W1/N columns); W2 split row-wise; single all-reduce after W2 output.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t4_s5_d2",
      "label": "Attention Head Parallelism",
      "description": "Multi-head attention trivially parallelizes by assigning heads to different GPUs — each GPU computes its head subset independently.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t5",
      "label": "Batch Size, Throughput & Hardware Utilization",
      "description": "Batch size scaling rules, MFU (Model FLOP Utilization), GPU roofline model, memory bandwidth bounds.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t5_s1",
      "label": "Linear Batch Size Scaling Rule",
      "description": "When increasing batch size by k, increase learning rate by k (linear scaling rule) or by sqrt(k) — validated for SGD, approximately for Adam.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t5_s1_d1",
      "label": "Gradient Noise Scale Breakeven Point",
      "description": "Optimal batch size where gradient noise equals curvature signal — typically 1M-10M tokens for LLMs.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t5_s1_d2",
      "label": "Critical Batch Size & Loss of Efficiency",
      "description": "Beyond critical batch size, additional compute for larger batches yields diminishing returns in wall-clock efficiency.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t5_s2",
      "label": "Model FLOP Utilization (MFU)",
      "description": "MFU = (actual observed FLOPS) / (theoretical peak FLOPS); GPT-3 training achieved ~50% MFU on A100 — 50% hardware efficiency.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t5_s2_d1",
      "label": "Achievable vs Peak Tensor Core FLOPS",
      "description": "A100 peak BF16: 312 TFLOPS; real Transformer training achieves 150-200 TFLOPS (~50-65% MFU with FlashAttention).",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t5_s2_d2",
      "label": "Memory Bandwidth Bound for Small Batches",
      "description": "Small batch inference is memory bandwidth bound (not compute bound) — GPU spends more time loading weights than computing.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t5_s3",
      "label": "Roofline Model for GPU Optimization",
      "description": "Performance bounded by MIN(compute_peak, bandwidth * arithmetic_intensity) — compute bound for large matmuls, bandwidth bound for small ops.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t5_s3_d1",
      "label": "Arithmetic Intensity of Transformer Ops",
      "description": "GEMMs: O(n^3) / O(n^2) = O(n) — compute bound for large n; ElementWise ops: O(1) arithmetic intensity — always BW bound.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t5_s3_d2",
      "label": "Kernel Fusion to Raise Intensity",
      "description": "Fusing LayerNorm+Linear into single CUDA kernel reads/writes data once, raising effective arithmetic intensity dramatically.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t5_s4",
      "label": "Gradient Checkpointing Trade-offs",
      "description": "Segment model into checkpoints; store only boundary activations; recompute internal activations on demand during backward pass.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t5_s4_d1",
      "label": "sqrt(N) Memory Optimal Checkpointing",
      "description": "Placing checkpoints every sqrt(L) layers minimizes total memory to O(sqrt(L)) at cost of one extra forward pass.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t5_s4_d2",
      "label": "Selective Checkpointing Priority",
      "description": "Checkpoint only memory-expensive layers (attention patterns); skip cheap-to-recompute layers (LayerNorm/Dropout) to minimize overhead.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t5_s5",
      "label": "Multi-Node Training with InfiniBand",
      "description": "InfiniBand HDR 200Gb/s connects GPU nodes for NCCL AllReduce; NVLink 600GB/s connects GPUs within same node.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t5_s5_d1",
      "label": "NCCL Topology-Aware Communication",
      "description": "NCCL automatically detects NVLink vs PCIe vs IB topology and selects optimal AllReduce algorithm for each communication pattern.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t5_s5_d2",
      "label": "RDMA Zero-Copy Data Transfer",
      "description": "InfiniBand RDMA bypasses CPU, directly transferring GPU memory to remote GPU memory with microsecond latency.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t6",
      "label": "Hyperparameter Optimization for LLMs",
      "description": "LR warmup tuning, weight decay, dropout in LLMs, learning rate range tests, and gradient checkpointing strategies.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t6_s1",
      "label": "LR Finder Range Test (Leslie Smith)",
      "description": "Trains model increasing LR from very small to very large across a single epoch; selects LR just before loss divergence point.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t6_s1_d1",
      "label": "Loss vs LR Curve Inflection Point",
      "description": "Optimal LR sits at inflection point of loss-LR curve — steepest descent, neither too flat (slow) nor diverging (too fast).",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t6_s1_d2",
      "label": "One-Cycle Policy Derived from Range Test",
      "description": "Super-convergence cycles between base LR and max LR over training, achieving faster convergence than fixed-LR training.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t6_s2",
      "label": "Weight Decay Sensitivity in LLMs",
      "description": "LLM training uses weight decay 0.1 (AdamW); too low: poor generalization; too high: underfitting — typically sweep {0.01, 0.1}.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t6_s2_d1",
      "label": "Embedding Layer No Weight Decay",
      "description": "Embedding matrices often excluded from weight decay — sparse updates mean decay would disproportionately shrink rare token embeddings.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t6_s2_d2",
      "label": "Bias Terms No Weight Decay Convention",
      "description": "Biases and LayerNorm parameters (gain/bias) always excluded from weight decay to avoid over-regularizing normalization layers.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t6_s3",
      "label": "Dropout in Large Language Models",
      "description": "LLMs typically use dropout 0.0-0.1; GPT-3 used 0.1 residual dropout; Llama uses 0.0 dropout — regularization via data/batch size sufficient.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t6_s3_d1",
      "label": "Dropout Interference with FlashAttention",
      "description": "Attention dropout inside FlashAttention requires storing random mask at full N^2 precision — often dropped to maintain memory savings.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t6_s3_d2",
      "label": "Pre-Norm vs Post-Norm Dropout Placement",
      "description": "Pre-norm architectures typically apply dropout before residual addition; post-norm applies after LayerNorm around sublayer output.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t6_s4",
      "label": "Gradient Noise & Learning Rate Interaction",
      "description": "Larger batches have lower gradient noise variance; allow proportionally larger LR — batch doubling allows LR doubling (linear rule).",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t6_s4_d1",
      "label": "Warm-Up Duration Recommendation",
      "description": "Warmup for min(10k, train_steps*5%) steps is common practice — enough to stabilize Adam's variance estimate v_hat.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t6_s4_d2",
      "label": "Cooldown Phase for Stable Final Convergence",
      "description": "Reducing LR to near-zero in final 10% of training allows weights to settle into sharp local minima for best test performance.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t6_s5",
      "label": "Checkpoint Averaging & Model Souping",
      "description": "Averages parameters from multiple checkpoints or independently trained models, improving generalization without extra inference cost.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t6_s5_d1",
      "label": "Stochastic Weight Averaging (SWA)",
      "description": "Averages checkpoints taken at regular intervals during training with cyclical LR — approximates flat loss basin solutions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p6_t6_s5_d2",
      "label": "Model Soup: Average Zero-Shot Accuracy",
      "description": "Wortsman et al. show averaging fine-tuned model variants that share same pre-training improves accuracy by 1-2% on distribution shifts.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7",
      "label": "Model Evaluation & MLOps",
      "description": "Classification metrics, calibration, experiment tracking, model serving, monitoring, feature stores, and CI/CD for ML.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t1",
      "label": "Classification & Ranking Metrics",
      "description": "Precision, Recall, F1, ROC-AUC, PR-AUC, MRR, NDCG for evaluation across class imbalanced settings.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t1_s1",
      "label": "Precision, Recall & F1 Score",
      "description": "Precision = TP/(TP+FP); Recall = TP/(TP+FN); F1 = 2PR/(P+R); F-beta = (1+β^2)PR/(β^2 P + R) weights recall β-times.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t1_s1_d1",
      "label": "Macro vs Micro vs Weighted Average",
      "description": "Macro averages per-class F1 equally; Micro sums TP/FP/FN globally; Weighted weights by class support for imbalanced data.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t1_s1_d2",
      "label": "Precision-Recall Tradeoff at Threshold",
      "description": "Increasing classification threshold raises precision (fewer FP) and lowers recall (more FN) — optimal threshold via F1 maximization.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t1_s2",
      "label": "ROC-AUC & PR-AUC",
      "description": "ROC-AUC = probability that random positive ranks above random negative; PR-AUC better for class imbalance (skews to minority class).",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t1_s2_d1",
      "label": "ROC-AUC Imbalance Insensitivity",
      "description": "ROC-AUC unchanged when negative class size increases — PR-AUC degrades, better reflecting real detector performance on rare events.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t1_s2_d2",
      "label": "Average Precision (AP) Interpretation",
      "description": "AP = area under PR curve via trapezoidal rule; summarizes precision-recall tradeoff across all possible detection thresholds.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t1_s3",
      "label": "Confusion Matrix Analysis",
      "description": "2x2 (binary) or KxK (multi-class) matrix showing true/false positive/negative counts — reveals systematic class confusion patterns.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t1_s3_d1",
      "label": "Class Imbalance Impact on Accuracy",
      "description": "99% accuracy on 1% positive class by predicting all negatives — confusion matrix reveals 0% recall for positive class.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t1_s3_d2",
      "label": "Normalized Confusion Matrix for Classes",
      "description": "Row-normalizing confusion matrix shows conditional probability of predicted label given true label for per-class comparison.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t1_s4",
      "label": "NDCG for Ranking Models",
      "description": "Normalized Discounted Cumulative Gain: DCG = sum(rel_i / log2(i+1)); NDCG = DCG / IDCG (ideal DCG); measures top-k ranking quality.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t1_s4_d1",
      "label": "Position Discount log2(i+1) Factor",
      "description": "Logarithmic discounting penalizes relevant items placed lower in ranking — retrieving relevant item at position 1 vs position 10 weighs 3x higher.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t1_s4_d2",
      "label": "Graded Relevance Extension",
      "description": "NDCG supports graded relevance scores (0,1,2,3) unlike binary AP — captures nuanced relevance levels in recommendation tasks.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t1_s5",
      "label": "Regression Metrics (MAE/MSE/RMSE/MAPE)",
      "description": "MAE = mean|y-ŷ| robust to outliers; MSE = mean(y-ŷ)^2 penalizes large errors; RMSE = sqrt(MSE) in original units.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t1_s5_d1",
      "label": "Huber Loss Robustness Threshold δ",
      "description": "Huber loss = 0.5(y-ŷ)^2 if |y-ŷ|<δ else δ(|y-ŷ|-δ/2); uses MSE near 0 and MAE for large errors — robust to outliers.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t1_s5_d2",
      "label": "MAPE Undefined for Zero Targets",
      "description": "MAPE = mean(|y-ŷ|/|y|) undefined when y=0; sMAPE = 2|y-ŷ|/(|y|+|ŷ|) symmetric variant avoids division by zero.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t2",
      "label": "Model Calibration & Uncertainty",
      "description": "Calibration curves, Expected Calibration Error (ECE), Platt scaling, temperature scaling, and conformal prediction.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t2_s1",
      "label": "Expected Calibration Error (ECE)",
      "description": "ECE = sum_b (|B_b|/N) |acc(B_b) - conf(B_b)|; groups predictions into M=10 confidence bins; measures confidence-accuracy alignment.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t2_s1_d1",
      "label": "Reliability Diagram Visualization",
      "description": "Plots model confidence (x-axis) vs actual accuracy (y-axis) per bin; perfectly calibrated model follows diagonal line.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t2_s1_d2",
      "label": "Overconfident vs Underconfident Models",
      "description": "Overconfident: accuracy < confidence (curve below diagonal); common in neural nets without calibration regularization.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t2_s2",
      "label": "Platt Scaling Logistic Calibration",
      "description": "Fits logistic regression σ(a*f(x) + b) on held-out calibration set to map uncalibrated model scores to calibrated probabilities.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t2_s2_d1",
      "label": "Separate Calibration Holdout Requirement",
      "description": "Calibrating on training data causes overfitting to training score distribution — requires dedicated calibration holdout or cross-val.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t2_s2_d2",
      "label": "Isotonic Regression Non-Parametric Alternative",
      "description": "Fits monotone piecewise constant function via pool adjacent violators algorithm — more flexible than logistic but requires more data.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t2_s3",
      "label": "Temperature Scaling Post-Hoc Calibration",
      "description": "Scales logits by learned scalar T: p = softmax(f(x)/T); T > 1 softens outputs; T < 1 sharpens — single parameter calibration.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t2_s3_d1",
      "label": "Validation NLL Minimization for T",
      "description": "Optimal T minimizes negative log-likelihood on validation set — converges in seconds, does not change model accuracy.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t2_s3_d2",
      "label": "Label Smoothing vs Temperature Scaling",
      "description": "Label smoothing calibrates during training; temperature scaling post-processes existing model — often combined for best calibration.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t2_s4",
      "label": "Conformal Prediction Guarantees",
      "description": "Produces prediction sets with guaranteed coverage: P(Y_test ∈ C(X_test)) ≥ 1-α for any distribution and finite calibration set.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t2_s4_d1",
      "label": "Nonconformity Score & Quantile Threshold",
      "description": "Score s = 1 - softmax(y_true)_prob; threshold q_hat = (1-α) quantile of calibration scores; prediction set = {y: s_y ≤ q_hat}.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t2_s4_d2",
      "label": "Adaptive Prediction Set Size",
      "description": "Conformal sets are smaller for easy examples (single class) and larger for ambiguous examples — adaptive coverage allocation.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t2_s5",
      "label": "Bayesian Deep Learning & Uncertainty",
      "description": "Monte Carlo Dropout at inference: runs K stochastic forward passes, uses mean as prediction and variance as uncertainty estimate.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t2_s5_d1",
      "label": "MC Dropout Approximates Gaussian Process",
      "description": "Gal & Ghahramani proved dropout at inference approximates variational inference in deep Gaussian process, giving Bayesian uncertainty.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t2_s5_d2",
      "label": "Deep Ensembles vs MC Dropout Quality",
      "description": "5-model deep ensemble consistently outperforms MC Dropout for uncertainty estimation despite similar computational cost.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t3",
      "label": "Experiment Tracking & Reproducibility",
      "description": "MLflow, Weights & Biases, DVC for data versioning, experiment metadata logging, and run comparison.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t3_s1",
      "label": "MLflow Tracking API",
      "description": "mlflow.log_metric('accuracy', 0.95, step=100); logs to tracking server; mlflow.log_artifact('model.pkl') stores versioned artifacts.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t3_s1_d1",
      "label": "Run Context Manager & Auto-Logging",
      "description": "with mlflow.start_run(): context manager handles run lifecycle; mlflow.sklearn.autolog() captures all sklearn metrics automatically.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t3_s1_d2",
      "label": "MLflow Model Registry Staging Workflow",
      "description": "Model transitions through Staging → Production → Archived via REST API or UI; enables gated deployment with CI/CD integration.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t3_s2",
      "label": "Weights & Biases (W&B) Features",
      "description": "wandb.log({'loss': loss, 'grad_norm': norm}) every step; gradient/weight histograms, system metrics (GPU%, VRAM), interactive plots.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t3_s2_d1",
      "label": "W&B Sweep Hyperparameter Optimization",
      "description": "Defines sweep config YAML (method: bayes, parameters: {lr: {min: 1e-5, max: 1e-1}}); agents run trials via wandb agent sweep_id.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t3_s2_d2",
      "label": "W&B Artifacts Dataset Versioning",
      "description": "artifact = wandb.Artifact('dataset', type='dataset'); artifact.add_dir('data/'); wandb.run.log_artifact(artifact) tracks data lineage.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t3_s3",
      "label": "DVC Data Version Control",
      "description": "Tracks large data files via .dvc metadata files in Git; data stored in remote (S3/GCS/Azure); dvc repro reruns changed pipeline stages.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t3_s3_d1",
      "label": "Content-Addressed Storage Deduplication",
      "description": "DVC stores files by MD5 hash in cache; unchanged files reused across versions without re-uploading to remote storage.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t3_s3_d2",
      "label": "DVC Pipeline DAG Dependency Tracking",
      "description": "dvc.yaml defines stages with deps/outs/params; dvc repro only reruns stages whose upstream dependencies have changed.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t3_s4",
      "label": "Deterministic Training Reproducibility",
      "description": "torch.manual_seed(42); torch.backends.cudnn.deterministic=True; numpy.random.seed(42) — eliminates non-deterministic CUDA kernels.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t3_s4_d1",
      "label": "cuDNN Non-Deterministic Algorithm Selection",
      "description": "cudnn.benchmark=True selects fastest conv algorithm which varies run-to-run; setting deterministic=True forces reproducible algorithm.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t3_s4_d2",
      "label": "DataLoader Worker Seed Propagation",
      "description": "worker_init_fn must set seeds in each worker process; otherwise data augmentation random state diverges across workers.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t3_s5",
      "label": "Model Cards & Documentation Standards",
      "description": "Structured documentation covering: intended use, training data, evaluation results, limitations, and ethical considerations.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t3_s5_d1",
      "label": "Hugging Face Model Card Template",
      "description": "Standardized README.md with model-index YAML block; enables automatic display of evaluation metrics on Hub model page.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t3_s5_d2",
      "label": "Datasheets for Datasets Standard",
      "description": "Documents collection methodology, composition, preprocessing, uses, and governance for every training and evaluation dataset.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t4",
      "label": "Model Serving & Inference Optimization",
      "description": "TorchServe, Triton Inference Server, ONNX Runtime, batching strategies, quantization for deployment.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t4_s1",
      "label": "ONNX Export & Runtime",
      "description": "torch.onnx.export converts model to ONNX computational graph; onnxruntime executes with hardware-specific CUDA/TensorRT backends.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t4_s1_d1",
      "label": "Operator Set (opset) Versioning",
      "description": "ONNX opset version controls available operators; opset 17 adds attention/layer_norm ops — match exporter and runtime versions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t4_s1_d2",
      "label": "Dynamic Axes for Variable Batch/Sequence",
      "description": "dynamic_axes={'input': {0: 'batch', 1: 'seq_len'}} enables runtime flexibility; static shapes enable maximum TensorRT optimization.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t4_s2",
      "label": "NVIDIA Triton Inference Server",
      "description": "Model repository serves TensorRT/ONNX/PyTorch/TF models; supports dynamic batching, model ensembles, and concurrent model instances.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t4_s2_d1",
      "label": "Dynamic Batching Preferred Batch Sizes",
      "description": "Triton queues requests and batches them (preferred_batch_size=[8,16,32]) for higher GPU utilization vs per-request inference.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t4_s2_d2",
      "label": "Model Ensemble Pipelining",
      "description": "ensemble_model.pbtxt chains pre/post-processing models with main model in single request, reducing client-server round trips.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t4_s3",
      "label": "TensorRT Optimization Layers",
      "description": "Fuses adjacent operations (Conv+BN+ReLU → single kernel), selects optimal kernel implementations per hardware, and quantizes to INT8.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t4_s3_d1",
      "label": "Layer Fusion Kernel Reduction",
      "description": "Conv+BN fusion eliminates separate BN pass — saves 1 memory read/write round-trip per fused layer during inference.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t4_s3_d2",
      "label": "INT8 Calibration Dataset Requirement",
      "description": "TensorRT INT8 requires 500-1000 representative calibration images to determine per-tensor activation ranges for quantization.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t4_s4",
      "label": "vLLM Paged Attention Serving",
      "description": "Manages KV-cache as fixed-size page blocks allocated dynamically; eliminates memory fragmentation; enables continuous batching of LLM requests.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t4_s4_d1",
      "label": "KV Cache Memory Fragmentation Problem",
      "description": "Naive KV-cache pre-allocates max_seq_len contiguous memory; 90%+ GPU memory wasted on average due to variable sequence lengths.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t4_s4_d2",
      "label": "Continuous Batching Token-by-Token",
      "description": "Processes multiple requests simultaneously at different generation steps, filling GPU with new requests as old ones finish tokens.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t4_s5",
      "label": "Canary Deployment & A/B Testing",
      "description": "Routes 5% of traffic to new model version; monitors metrics (latency P99, error rate, business KPIs) before full rollout.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t4_s5_d1",
      "label": "Shadow Mode Evaluation",
      "description": "Runs new model on all traffic alongside production model; logs predictions without serving them — zero-risk comparison.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t4_s5_d2",
      "label": "Statistical Significance Testing",
      "description": "Uses sequential probability ratio test (SPRT) to detect metric differences with controlled false positive/negative rates.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t5",
      "label": "Data & Model Monitoring in Production",
      "description": "Feature drift detection, concept drift, prediction monitoring, retraining triggers, and model health dashboards.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t5_s1",
      "label": "Population Stability Index (PSI) Drift",
      "description": "PSI = sum((Act_i - Exp_i) * ln(Act_i/Exp_i)); PSI < 0.1 stable, 0.1-0.2 slight drift, > 0.2 major distribution shift requiring retraining.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t5_s1_d1",
      "label": "PSI vs KS Test vs Chi-Square",
      "description": "KS test is sensitive to distribution shape; PSI focuses on magnitude of shift in input distribution between reference and current.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t5_s1_d2",
      "label": "Per-Feature vs Joint Drift Detection",
      "description": "Monitoring individual feature PSIs catches specific input degradations; joint drift detection with MMD catches multivariate shifts.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t5_s2",
      "label": "Concept Drift & Label Distribution Shift",
      "description": "Input distribution P(X) stable but P(Y|X) changes (concept drift); both P(X) and P(Y) shift (dataset shift) — need labeled feedback for detection.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t5_s2_d1",
      "label": "Delayed Label Feedback Monitoring",
      "description": "Accumulate predictions; when labels arrive, compare prediction vs actual distribution — measure drift in prediction error rate.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t5_s2_d2",
      "label": "Drift Detector ADWIN Algorithm",
      "description": "ADWIN maintains sliding window; detects drift when mean of old half differs significantly from new half using Hoeffding bound.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t5_s3",
      "label": "Prediction Monitoring & Outlier Detection",
      "description": "Monitors prediction distribution shift, output confidence scores, feature value anomalies, and individual record outlier flags.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t5_s3_d1",
      "label": "Evidently ML Monitoring Reports",
      "description": "Generates HTML/JSON reports comparing production data to training reference — column-by-column distribution comparisons.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t5_s3_d2",
      "label": "Model-Based Anomaly Detection",
      "description": "Trains autoencoder on training data; high reconstruction error on production input signals out-of-distribution anomalous inputs.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t5_s4",
      "label": "Automated Retraining Triggers",
      "description": "Triggers retraining on: metric degradation threshold, data volume milestone, schedule (weekly), or drift detection alert.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t5_s4_d1",
      "label": "Champion-Challenger Continuous Evaluation",
      "description": "New challenger model trained continuously on fresh data; deployed if challenger beats champion model on holdout evaluation set.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t5_s4_d2",
      "label": "Incremental Online Learning Update",
      "description": "For streaming data, updates model incrementally with new samples without full retraining — requires online-compatible algorithms.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t5_s5",
      "label": "SHAP Feature Importance Monitoring",
      "description": "Tracks mean |SHAP| per feature over time; large shifts in feature importance indicate model is relying on different signals.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t5_s5_d1",
      "label": "TreeSHAP Exact Polynomial Algorithm",
      "description": "Computes exact Shapley values for tree ensembles in polynomial time O(TLD^2) vs exponential for arbitrary models.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t5_s5_d2",
      "label": "Global SHAP Summary Plot Interpretation",
      "description": "Beeswarm plot shows each sample's SHAP contribution per feature — reveals non-linear interactions and feature effect directions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t6",
      "label": "ML System Design & CI/CD",
      "description": "Feature stores, training pipelines, ML platform architecture, versioning, and automated testing for ML systems.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t6_s1",
      "label": "Feature Store Architecture (Feast/Tecton)",
      "description": "Decouples feature engineering from model training; online store (Redis/DynamoDB) for low-latency serving; offline store (S3/BigQuery) for training.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t6_s1_d1",
      "label": "Point-in-Time Correct Feature Joins",
      "description": "Feast fetches feature values that existed at event_timestamp, preventing future leakage in historical training dataset generation.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t6_s1_d2",
      "label": "Feature Server Low-Latency SLA (<10ms)",
      "description": "Redis online store achieves P99 < 5ms for feature retrieval; DynamoDB achieves P99 < 20ms — model inference budget permitting.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t6_s2",
      "label": "Training Pipeline CI/CD (GitHub Actions/Kubeflow)",
      "description": "Triggers training pipeline on data/code change; validates data schema; trains model; evaluates on test set; registers if exceeding threshold.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t6_s2_d1",
      "label": "Data Validation Great Expectations Gate",
      "description": "Validates schema, value ranges, nullity, and distribution against expectations before model training — fails fast on data quality issues.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t6_s2_d2",
      "label": "Model Training as Kubernetes Job",
      "description": "Kubeflow Pipelines submits training as K8s Job with resource requests; retries on failure; stores outputs to artifact registry.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t6_s3",
      "label": "ML Testing: Unit, Integration & Property Tests",
      "description": "Unit tests for feature transformations; integration tests for training pipeline; property-based tests for model prediction invariants.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t6_s3_d1",
      "label": "Invariance Tests for Model Predictions",
      "description": "Test that model predictions are invariant to irrelevant input changes (e.g. name anonymization should not change credit score output).",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t6_s3_d2",
      "label": "Directional Expectation Tests",
      "description": "Test that prediction changes in expected direction when feature increases/decreases — income increase should increase loan approval probability.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t6_s4",
      "label": "Model Registry & Lineage Tracking",
      "description": "MLflow/Vertex Model Registry stores model versions with training run ID, dataset version, metrics, and dependency artifacts.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t6_s4_d1",
      "label": "Model Lineage for Audit & Debugging",
      "description": "Complete lineage: raw data → preprocessing → feature engineering → training → model version → deployment → predictions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t6_s4_d2",
      "label": "Semantic Versioning for Model Releases",
      "description": "Major.minor.patch: major = architecture change; minor = retraining; patch = parameter update — enables safe rollback by version.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t6_s5",
      "label": "Load Testing & Latency SLA Validation",
      "description": "Locust/k6 generates synthetic inference requests at 10x expected traffic; validates P50/P95/P99 latency against SLA requirements.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t6_s5_d1",
      "label": "P99 Latency vs Average Latency",
      "description": "P99 latency (99th percentile) is the metric that matters for user experience — average hides tail latency spikes from slow requests.",
      "type": "concept"
    },
    {
      "id": "ml_root_p7_t6_s5_d2",
      "label": "Autoscaling Trigger Threshold Calibration",
      "description": "Horizontal Pod Autoscaler triggers at 70% CPU/GPU utilization target — leaves 30% headroom for traffic spikes before latency degrades.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8",
      "label": "ML Safety, Fairness & Robustness",
      "description": "Adversarial attacks, OOD detection, fairness metrics, interpretability methods, differential privacy, and AI alignment.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t1",
      "label": "Adversarial Examples & Robustness",
      "description": "FGSM, PGD, Carlini-Wagner attacks; adversarial training; certified robustness via randomized smoothing.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t1_s1",
      "label": "FGSM Single-Step Attack",
      "description": "x_adv = x + ε*sign(∇_x L(f(x), y)); moves input in gradient sign direction by ε — fast single-step perturbation attack.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t1_s1_d1",
      "label": "L_∞ Norm Bound ε = 8/255 for Images",
      "description": "ε=8/255 ≈ 0.031 is standard ImageNet adversarial perturbation budget — imperceptible to human eye but fools most classifiers.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t1_s1_d2",
      "label": "FGSM Gradient Masking Limitation",
      "description": "Models with vanishing or obfuscated gradients appear robust to FGSM but remain vulnerable to black-box transfer attacks.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t1_s2",
      "label": "PGD Projected Gradient Descent Attack",
      "description": "Iterates K steps of FGSM with projection: x^{t+1} = Π_{B(x,ε)}(x^t + α*sign(∇_x L(x^t))); strongest first-order attack.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t1_s2_d1",
      "label": "Projection onto L_∞ Ball",
      "description": "Clip(x_adv, x-ε, x+ε) projects back to epsilon-ball after each step, ensuring perturbation magnitude stays within budget.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t1_s2_d2",
      "label": "Madry Min-Max Robust Training Objective",
      "description": "min_θ E[max_{δ: ||δ||<ε} L(f(x+δ; θ), y)] — PGD-AT trains on adversarial examples found by 10-step PGD attack.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t1_s3",
      "label": "Carlini-Wagner (C&W) Optimization Attack",
      "description": "Solves optimization: min ||δ||_2 + c*f(x+δ) where f is change-of-variable loss ensuring adversarial class prediction.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t1_s3_d1",
      "label": "Binary Search for Optimal C Parameter",
      "description": "Outer binary search finds minimum c making x+δ adversarial; inner Adam optimization finds minimum perturbation δ.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t1_s3_d2",
      "label": "Strong Gradient Masking Bypass",
      "description": "C&W's continuous optimization bypasses gradient masking defenses that fool FGSM — considered strongest whitebox attack.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t1_s4",
      "label": "Adversarial Training Defense Robustness",
      "description": "Augments training data with adversarial examples generated by PGD; trades ~10% clean accuracy for significant robust accuracy gain.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t1_s4_d1",
      "label": "Clean-Robust Accuracy Trade-off",
      "description": "PGD-AT achieves ~49% robust accuracy on CIFAR-10 (ε=8/255) while clean accuracy drops from 95% to 84% compared to standard training.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t1_s4_d2",
      "label": "TRADES Regularization Framework",
      "description": "TRADES adds KL divergence term: L_CE(x) + β*KL(f(x)||f(x_adv)); β=6 balances clean and robust accuracy optimally.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t1_s5",
      "label": "Certified Robustness via Randomized Smoothing",
      "description": "Constructs certifiably robust classifier g(x) = argmax_c P[f(x+N(0,σ^2)) = c] with provable L_2 radius guarantee.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t1_s5_d1",
      "label": "Certification Radius r = σ*Φ^{-1}(p_A)",
      "description": "Radius r where no L_2 perturbation can change prediction: r = σ*(Φ^{-1}(p_A) - Φ^{-1}(p_B))/2 using normal CDF.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t1_s5_d2",
      "label": "σ-Accuracy Trade-off for Large Radius",
      "description": "Larger σ gives wider certified radius but lowers clean accuracy — σ=0.5 achieves r≈0.5 with ~40% accuracy on ImageNet.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t2",
      "label": "Out-of-Distribution Detection",
      "description": "Maximum softmax probability (MSP), energy scores, Mahalanobis distance, deep ensembles for OOD confidence.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t2_s1",
      "label": "Maximum Softmax Probability (MSP) Baseline",
      "description": "Hendrycks & Gimpel baseline: use max(softmax(f(x))) as in-distribution confidence; OOD threshold at 95% TPR on ID data.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t2_s1_d1",
      "label": "Overconfidence Problem for OOD Inputs",
      "description": "Neural networks assign high softmax confidence (>90%) to OOD inputs far from training distribution — MSP fails for hard OOD.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t2_s1_d2",
      "label": "Temperature Scaling Softmax Sharpening",
      "description": "ODIN uses temperature T=1000 and input preprocessing to amplify softmax gap between ID and OOD samples for better separation.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t2_s2",
      "label": "Energy-Based OOD Score",
      "description": "E(x) = -log∑_y exp(f_y(x)/T); energy is lower (more negative) for in-distribution; OOD inputs have higher (less negative) energy.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t2_s2_d1",
      "label": "Energy vs Softmax Score Comparison",
      "description": "Energy score derived from Boltzmann distribution — theoretically motivated; outperforms MSP on CIFAR-10 OOD benchmarks by 5-15%.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t2_s2_d2",
      "label": "Energy-Based Training Margin Loss",
      "description": "Fine-tunes model with energy margin loss: m_in=25, m_out=-25 threshold — pushes ID and OOD energies to opposite ends.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t2_s3",
      "label": "Mahalanobis Distance Detector",
      "description": "Fits class-conditional Gaussian N(μ_c, Σ) on penultimate layer features; M-distance M(x) = min_c (z-μ_c)^T Σ^{-1} (z-μ_c).",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t2_s3_d1",
      "label": "Tied Covariance Across Classes",
      "description": "Shared Σ estimated from all training features; per-class Σ overfits with limited data — LDA-like tied covariance is standard.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t2_s3_d2",
      "label": "Feature Ensemble Across Layers",
      "description": "Combining Mahalanobis distances from all layers via logistic regression significantly outperforms single-layer detection.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t2_s4",
      "label": "Deep Ensemble Uncertainty Quantification",
      "description": "5 independently trained networks with different seeds; predictive entropy H[y|x] = -sum p_i log p_i from averaged softmax outputs.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t2_s4_d1",
      "label": "Predictive Uncertainty Decomposition",
      "description": "Total uncertainty = aleatoric (irreducible data noise) + epistemic (model uncertainty from limited training data) — ensembles capture both.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t2_s4_d2",
      "label": "Ensemble Calibration Superiority",
      "description": "5-ensemble achieves ECE < 0.03 on CIFAR-10 vs 0.07 for single model — significant calibration improvement from diversity.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t2_s5",
      "label": "Near-OOD vs Far-OOD Detection Challenges",
      "description": "Near-OOD: semantically similar but different class (CIFAR-10 vs CIFAR-100); Far-OOD: unrelated domains (CIFAR-10 vs SVHN).",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t2_s5_d1",
      "label": "Feature Space Dimensionality Collapse",
      "description": "Near-OOD fails when OOD features lie within same subspace as ID features — requires additional semantic disentanglement.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t2_s5_d2",
      "label": "Benchmarking with OpenOOD Framework",
      "description": "OpenOOD standardizes evaluation across 40+ datasets/methods with consistent ID training — enables fair comparison of OOD detectors.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t3",
      "label": "Fairness & Bias Mitigation",
      "description": "Demographic parity, equalized odds, individual fairness, causal fairness, and algorithmic bias mitigation techniques.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t3_s1",
      "label": "Demographic Parity (Statistical Parity)",
      "description": "P(ŷ=1|A=0) = P(ŷ=1|A=1); requires equal positive prediction rate across protected groups A regardless of ground truth.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t3_s1_d1",
      "label": "Disparate Impact Ratio 4/5 Rule",
      "description": "EEOC 4/5 rule: selection rate for any group < 80% of highest group's rate indicates adverse impact in hiring decisions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t3_s1_d2",
      "label": "Impossibility of Simultaneous Fairness Criteria",
      "description": "Chouldechova's theorem: DP, equalized odds, and calibration cannot all hold simultaneously when base rates differ across groups.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t3_s2",
      "label": "Equalized Odds (TPR & FPR Parity)",
      "description": "P(ŷ=1|A=0,Y=y) = P(ŷ=1|A=1,Y=y) for y ∈ {0,1}; requires equal true positive AND false positive rates across groups.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t3_s2_d1",
      "label": "Equal Opportunity Weaker Condition",
      "description": "Equal Opportunity requires only TPR parity (not FPR) — more lenient condition appropriate when FP and FN have different costs.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t3_s2_d2",
      "label": "Post-Processing Threshold Adjustment",
      "description": "Sets different classification thresholds per group to achieve equalized odds — simple post-hoc approach without model retraining.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t3_s3",
      "label": "Individual Fairness Metric Learning",
      "description": "Similar individuals should receive similar treatment: d(x_i, x_j) < ε → d(f(x_i), f(x_j)) < δ; requires a meaningful task-specific distance metric.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t3_s3_d1",
      "label": "Task-Specific Similarity Metric Definition",
      "description": "Defining fair similarity metric requires domain expertise — what features make two loan applicants similarly creditworthy is non-trivial.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t3_s3_d2",
      "label": "Lipschitz Condition Enforcement",
      "description": "Enforces individual fairness via regularization: L_fairness = sum_{i,j} max(0, d(f(x_i),f(x_j)) - λ d(x_i,x_j)).",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t3_s4",
      "label": "Causal Fairness & Counterfactual Equity",
      "description": "Asks: would prediction change if individual belonged to different protected group? Requires causal graph of data generation process.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t3_s4_d1",
      "label": "Counterfactual Fairness Definition",
      "description": "Prediction is counterfactually fair if ŷ(U, A=a) = ŷ(U, A=a') for all values a, a' — race/gender change shouldn't change prediction.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t3_s4_d2",
      "label": "Causal Graph Identification Problem",
      "description": "Must specify which variables are descendants of protected attribute A in causal DAG — unmeasured confounders make identification challenging.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t3_s5",
      "label": "Pre/In/Post-Processing Bias Mitigation",
      "description": "Pre-processing: reweigh samples; In-processing: adversarial fairness constraints; Post-processing: calibrated equalized odds threshold.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t3_s5_d1",
      "label": "Reweighing Sample Importance Weights",
      "description": "Assigns higher training weight to underrepresented (protected group, label) combinations to achieve balanced influence on loss.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t3_s5_d2",
      "label": "Adversarial Debiasing Architecture",
      "description": "Trains predictor to minimize task loss while simultaneously fooling adversarial classifier from predicting protected attribute from representations.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t4",
      "label": "Interpretability & Explainability",
      "description": "SHAP, LIME, Integrated Gradients, Concept Activation Vectors, and attention-based explanation methods.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t4_s1",
      "label": "SHAP Shapley Value Attribution",
      "description": "Shapley value φ_i = sum over subsets S (|S|!(n-|S|-1)!/n!) [f(S∪{i}) - f(S)] — fair contribution attribution from cooperative game theory.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t4_s1_d1",
      "label": "TreeSHAP Polynomial Tree Algorithm",
      "description": "Computes exact Shapley values for tree ensembles in O(TLD^2) — exponentially faster than naive 2^n feature subset evaluation.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t4_s1_d2",
      "label": "KernelSHAP Model-Agnostic Approximation",
      "description": "Approximates Shapley values by solving weighted linear regression over coalitions — compatible with any black-box model.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t4_s2",
      "label": "LIME Local Interpretable Model Explanations",
      "description": "Fits linear model L locally around instance x using perturbed samples weighted by proximity: min L(f, g, π_x) + Ω(g).",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t4_s2_d1",
      "label": "Tabular Perturbation by Feature Masking",
      "description": "LIME for tabular data perturbs by setting features to 0 (or distribution sample); trains sparse linear model on K-nearest perturbed samples.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t4_s2_d2",
      "label": "Instability Across LIME Runs",
      "description": "Random perturbation sampling causes LIME explanations to vary across runs — Anchors method provides stable logical rule explanations.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t4_s3",
      "label": "Integrated Gradients Path Attribution",
      "description": "IG_i = (x_i - x'_i) * ∫_0^1 ∂F(x' + α(x-x'))/∂x_i dα integrated from baseline x' (black/zero image) to input x.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t4_s3_d1",
      "label": "Completeness Axiom Satisfaction",
      "description": "Sum of Integrated Gradients equals output difference: sum IG_i = F(x) - F(x') — ensures attributions fully explain prediction gap.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t4_s3_d2",
      "label": "Baseline Sensitivity Impact",
      "description": "Choice of baseline x' significantly affects IG attribution — black image (0) standard for vision; max-distance or average for NLP.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t4_s4",
      "label": "TCAV Concept Activation Vectors",
      "description": "Trains linear classifier on concept examples vs random in activation space; TCAV score = fraction of inputs where prediction increases along concept direction.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t4_s4_d1",
      "label": "Human-Defined Concept Probing",
      "description": "Concepts (e.g. 'stripes' for zebra detection) defined by curated example images; CAV trained on concept vs random activation pairs.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t4_s4_d2",
      "label": "Statistical Significance Testing for TCAV",
      "description": "Tests TCAV score against random concept baselines using two-sided t-test to ensure concept direction is meaningful.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t4_s5",
      "label": "Gradient-Weighted Class Activation Maps (GradCAM)",
      "description": "Weights spatial feature map by gradient of class score w.r.t. feature map: α_k^c = GAP(∂y^c/∂A^k); L_GradCAM = ReLU(sum α_k^c A^k).",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t4_s5_d1",
      "label": "ReLU Suppresses Negative Influence Regions",
      "description": "ReLU on GradCAM output retains only regions that positively influence class c prediction, giving cleaner visualization.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t4_s5_d2",
      "label": "EigenCAM Feature Space Alternative",
      "description": "Uses first PCA component of feature maps rather than class gradient — gradient-free and more stable for diverse class predictions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t5",
      "label": "Differential Privacy & Federated Learning",
      "description": "DP-SGD gradient perturbation, ε-δ privacy budgets, FedAvg aggregation, and secure aggregation protocols.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t5_s1",
      "label": "Differential Privacy ε-δ Guarantee",
      "description": "M is (ε,δ)-DP if: P[M(D) ∈ S] ≤ e^ε P[M(D') ∈ S] + δ for any adjacent datasets D, D' differing in one record.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t5_s1_d1",
      "label": "Privacy Budget Interpretation",
      "description": "ε=1 provides strong privacy (indistinguishable output); ε=10 provides weak privacy; δ=1/N^2 for N training samples is standard.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t5_s1_d2",
      "label": "Composition Theorem Budget Accumulation",
      "description": "Sequential composition: k mechanisms with ε each gives kε total; advanced composition via Rényi DP achieves sqrt(k) ε growth.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t5_s2",
      "label": "DP-SGD Gradient Noise Mechanism",
      "description": "Clips per-sample gradients to L2 norm C; adds Gaussian noise N(0, σ^2 C^2 I) to sum; divides by batch size B.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t5_s2_d1",
      "label": "Per-Sample Gradient Clipping in JAX/Opacus",
      "description": "Requires computing individual gradients per sample (not batch average); Opacus library adds per-sample gradient hooks to PyTorch.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t5_s2_d2",
      "label": "Moments Accountant Privacy Accounting",
      "description": "Tracks privacy budget using moments accountant (Rényi DP) — tighter bound than naive composition, enabling more gradient steps per ε.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t5_s3",
      "label": "Federated Averaging (FedAvg) Algorithm",
      "description": "Server broadcasts global model; K clients train for E local epochs on local data; server aggregates: w_global = sum(n_k/n * w_k).",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t5_s3_d1",
      "label": "Client Heterogeneity (Non-IID) Challenge",
      "description": "Non-IID data across clients causes client drift — local optimization moves clients apart; FedProx adds proximal penalty term.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t5_s3_d2",
      "label": "Communication Efficiency Compression",
      "description": "Gradient sparsification/quantization reduces uplink bandwidth: sending top-k=1% gradients by magnitude reduces comm by 100x.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t5_s4",
      "label": "Federated Learning System Architecture",
      "description": "TensorFlow Federated or PySyft manages client selection, model distribution, aggregation, and secure communication protocols.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t5_s4_d1",
      "label": "Secure Aggregation Protocol",
      "description": "Clients mask gradients with random vectors that cancel in aggregation: server learns only sum, not individual client gradients.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t5_s4_d2",
      "label": "Asynchronous vs Synchronous Federation",
      "description": "Synchronous FedAvg waits for all K clients — slow clients bottleneck; async updates with staleness discounting for faster convergence.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t5_s5",
      "label": "Membership Inference & Model Inversion Attacks",
      "description": "Membership inference predicts if sample was in training set; model inversion reconstructs training samples from model predictions.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t5_s5_d1",
      "label": "Shadow Model Membership Attack",
      "description": "Trains shadow models on public data to learn prediction confidence patterns distinguishing member vs non-member training samples.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t5_s5_d2",
      "label": "GAN-Based Model Inversion",
      "description": "Optimizes latent code z to maximize P_model(y|G(z)) — reconstructs face from face recognition model's confidence scores.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t6",
      "label": "AI Alignment & RLHF Safety",
      "description": "Reward hacking, constitutional AI, RLHF, red-teaming, jailbreaks, and AI safety evaluation benchmarks.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t6_s1",
      "label": "Reward Hacking & Goodhart's Law",
      "description": "When proxy reward is optimized, it ceases to be a good measure of true objective: model learns to maximize reward via unintended shortcuts.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t6_s1_d1",
      "label": "Specification Gaming Examples",
      "description": "Boat racing agent spinning in circles for boat collision reward; RL agent grabbing reward without completing task objective.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t6_s1_d2",
      "label": "KL Penalty to Prevent Reward Hacking",
      "description": "PPO with KL(π_θ || π_ref) penalty prevents policy from deviating too far, bounding reward hacking magnitude.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t6_s2",
      "label": "Constitutional AI (CAI) Principles",
      "description": "Anthropic's approach: model critiques and revises its own outputs against a written constitution of harmlessness/helpfulness principles.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t6_s2_d1",
      "label": "RLHF from AI Feedback (RLAIF)",
      "description": "Generates preference labels using another model as judge against constitutional principles — scales without human annotators.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t6_s2_d2",
      "label": "Self-Critique Revision Loop",
      "description": "Model generates response, critiques it against principle (e.g. 'Is this response harmful?'), then revises to address critique.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t6_s3",
      "label": "Red Teaming & Jailbreak Taxonomy",
      "description": "Adversarial prompting: role-playing attacks, token smuggling, payload splitting, and indirect prompt injection via tool outputs.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t6_s3_d1",
      "label": "Universal Adversarial Suffix (GCG Attack)",
      "description": "Greedy Coordinate Gradient attack appends adversarial token suffix to bypass safety training — transfers across different LLM families.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t6_s3_d2",
      "label": "Many-Shot Jailbreaking (MSJ)",
      "description": "Filling long context with synthetic examples of policy violations trains in-context to comply — leverages long context window as attack surface.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t6_s4",
      "label": "Scalable Oversight & Debate Protocol",
      "description": "Addresses inability to supervise superhuman models: humans judge debate between two AI agents arguing for and against an answer.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t6_s4_d1",
      "label": "Iterated Amplification (IDA) Framework",
      "description": "Decomposes hard questions into easier subproblems solvable by humans; amplifies human oversight by recursively leveraging AI assistance.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t6_s4_d2",
      "label": "Weak-to-Strong Generalization",
      "description": "OpenAI research: strong models trained on weak model labels learn to exceed weak model performance — suggests scalable alignment path.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t6_s5",
      "label": "AI Safety Evaluation Benchmarks",
      "description": "MT-Bench (instruction following), HarmBench (safety violations), TruthfulQA (hallucination), WMDP (dangerous capability), MMLU (general knowledge).",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t6_s5_d1",
      "label": "HarmBench 400 Behaviors Taxonomy",
      "description": "Classifies 400 harmful behaviors across chemical weapons, cyberoffense, misinformation, hate speech — standardizes red-teaming evaluation.",
      "type": "concept"
    },
    {
      "id": "ml_root_p8_t6_s5_d2",
      "label": "TruthfulQA Adversarial Question Design",
      "description": "817 questions designed so large LLMs give confidently wrong answers due to common misconceptions — measures truthfulness vs memorized falsehoods.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "source": "ml_root",
      "target": "ml_root_p1"
    },
    {
      "source": "ml_root_p1",
      "target": "ml_root_p1_t1"
    },
    {
      "source": "ml_root_p1_t1",
      "target": "ml_root_p1_t1_s1"
    },
    {
      "source": "ml_root_p1_t1_s1",
      "target": "ml_root_p1_t1_s1_d1"
    },
    {
      "source": "ml_root_p1_t1_s1",
      "target": "ml_root_p1_t1_s1_d2"
    },
    {
      "source": "ml_root_p1_t1",
      "target": "ml_root_p1_t1_s2"
    },
    {
      "source": "ml_root_p1_t1_s2",
      "target": "ml_root_p1_t1_s2_d1"
    },
    {
      "source": "ml_root_p1_t1_s2",
      "target": "ml_root_p1_t1_s2_d2"
    },
    {
      "source": "ml_root_p1_t1",
      "target": "ml_root_p1_t1_s3"
    },
    {
      "source": "ml_root_p1_t1_s3",
      "target": "ml_root_p1_t1_s3_d1"
    },
    {
      "source": "ml_root_p1_t1_s3",
      "target": "ml_root_p1_t1_s3_d2"
    },
    {
      "source": "ml_root_p1_t1",
      "target": "ml_root_p1_t1_s4"
    },
    {
      "source": "ml_root_p1_t1_s4",
      "target": "ml_root_p1_t1_s4_d1"
    },
    {
      "source": "ml_root_p1_t1_s4",
      "target": "ml_root_p1_t1_s4_d2"
    },
    {
      "source": "ml_root_p1_t1",
      "target": "ml_root_p1_t1_s5"
    },
    {
      "source": "ml_root_p1_t1_s5",
      "target": "ml_root_p1_t1_s5_d1"
    },
    {
      "source": "ml_root_p1_t1_s5",
      "target": "ml_root_p1_t1_s5_d2"
    },
    {
      "source": "ml_root_p1",
      "target": "ml_root_p1_t2"
    },
    {
      "source": "ml_root_p1_t2",
      "target": "ml_root_p1_t2_s1"
    },
    {
      "source": "ml_root_p1_t2_s1",
      "target": "ml_root_p1_t2_s1_d1"
    },
    {
      "source": "ml_root_p1_t2_s1",
      "target": "ml_root_p1_t2_s1_d2"
    },
    {
      "source": "ml_root_p1_t2",
      "target": "ml_root_p1_t2_s2"
    },
    {
      "source": "ml_root_p1_t2_s2",
      "target": "ml_root_p1_t2_s2_d1"
    },
    {
      "source": "ml_root_p1_t2_s2",
      "target": "ml_root_p1_t2_s2_d2"
    },
    {
      "source": "ml_root_p1_t2",
      "target": "ml_root_p1_t2_s3"
    },
    {
      "source": "ml_root_p1_t2_s3",
      "target": "ml_root_p1_t2_s3_d1"
    },
    {
      "source": "ml_root_p1_t2_s3",
      "target": "ml_root_p1_t2_s3_d2"
    },
    {
      "source": "ml_root_p1_t2",
      "target": "ml_root_p1_t2_s4"
    },
    {
      "source": "ml_root_p1_t2_s4",
      "target": "ml_root_p1_t2_s4_d1"
    },
    {
      "source": "ml_root_p1_t2_s4",
      "target": "ml_root_p1_t2_s4_d2"
    },
    {
      "source": "ml_root_p1_t2",
      "target": "ml_root_p1_t2_s5"
    },
    {
      "source": "ml_root_p1_t2_s5",
      "target": "ml_root_p1_t2_s5_d1"
    },
    {
      "source": "ml_root_p1_t2_s5",
      "target": "ml_root_p1_t2_s5_d2"
    },
    {
      "source": "ml_root_p1",
      "target": "ml_root_p1_t3"
    },
    {
      "source": "ml_root_p1_t3",
      "target": "ml_root_p1_t3_s1"
    },
    {
      "source": "ml_root_p1_t3_s1",
      "target": "ml_root_p1_t3_s1_d1"
    },
    {
      "source": "ml_root_p1_t3_s1",
      "target": "ml_root_p1_t3_s1_d2"
    },
    {
      "source": "ml_root_p1_t3",
      "target": "ml_root_p1_t3_s2"
    },
    {
      "source": "ml_root_p1_t3_s2",
      "target": "ml_root_p1_t3_s2_d1"
    },
    {
      "source": "ml_root_p1_t3_s2",
      "target": "ml_root_p1_t3_s2_d2"
    },
    {
      "source": "ml_root_p1_t3",
      "target": "ml_root_p1_t3_s3"
    },
    {
      "source": "ml_root_p1_t3_s3",
      "target": "ml_root_p1_t3_s3_d1"
    },
    {
      "source": "ml_root_p1_t3_s3",
      "target": "ml_root_p1_t3_s3_d2"
    },
    {
      "source": "ml_root_p1_t3",
      "target": "ml_root_p1_t3_s4"
    },
    {
      "source": "ml_root_p1_t3_s4",
      "target": "ml_root_p1_t3_s4_d1"
    },
    {
      "source": "ml_root_p1_t3_s4",
      "target": "ml_root_p1_t3_s4_d2"
    },
    {
      "source": "ml_root_p1_t3",
      "target": "ml_root_p1_t3_s5"
    },
    {
      "source": "ml_root_p1_t3_s5",
      "target": "ml_root_p1_t3_s5_d1"
    },
    {
      "source": "ml_root_p1_t3_s5",
      "target": "ml_root_p1_t3_s5_d2"
    },
    {
      "source": "ml_root_p1",
      "target": "ml_root_p1_t4"
    },
    {
      "source": "ml_root_p1_t4",
      "target": "ml_root_p1_t4_s1"
    },
    {
      "source": "ml_root_p1_t4_s1",
      "target": "ml_root_p1_t4_s1_d1"
    },
    {
      "source": "ml_root_p1_t4_s1",
      "target": "ml_root_p1_t4_s1_d2"
    },
    {
      "source": "ml_root_p1_t4",
      "target": "ml_root_p1_t4_s2"
    },
    {
      "source": "ml_root_p1_t4_s2",
      "target": "ml_root_p1_t4_s2_d1"
    },
    {
      "source": "ml_root_p1_t4_s2",
      "target": "ml_root_p1_t4_s2_d2"
    },
    {
      "source": "ml_root_p1_t4",
      "target": "ml_root_p1_t4_s3"
    },
    {
      "source": "ml_root_p1_t4_s3",
      "target": "ml_root_p1_t4_s3_d1"
    },
    {
      "source": "ml_root_p1_t4_s3",
      "target": "ml_root_p1_t4_s3_d2"
    },
    {
      "source": "ml_root_p1_t4",
      "target": "ml_root_p1_t4_s4"
    },
    {
      "source": "ml_root_p1_t4_s4",
      "target": "ml_root_p1_t4_s4_d1"
    },
    {
      "source": "ml_root_p1_t4_s4",
      "target": "ml_root_p1_t4_s4_d2"
    },
    {
      "source": "ml_root_p1_t4",
      "target": "ml_root_p1_t4_s5"
    },
    {
      "source": "ml_root_p1_t4_s5",
      "target": "ml_root_p1_t4_s5_d1"
    },
    {
      "source": "ml_root_p1_t4_s5",
      "target": "ml_root_p1_t4_s5_d2"
    },
    {
      "source": "ml_root_p1",
      "target": "ml_root_p1_t5"
    },
    {
      "source": "ml_root_p1_t5",
      "target": "ml_root_p1_t5_s1"
    },
    {
      "source": "ml_root_p1_t5_s1",
      "target": "ml_root_p1_t5_s1_d1"
    },
    {
      "source": "ml_root_p1_t5_s1",
      "target": "ml_root_p1_t5_s1_d2"
    },
    {
      "source": "ml_root_p1_t5",
      "target": "ml_root_p1_t5_s2"
    },
    {
      "source": "ml_root_p1_t5_s2",
      "target": "ml_root_p1_t5_s2_d1"
    },
    {
      "source": "ml_root_p1_t5_s2",
      "target": "ml_root_p1_t5_s2_d2"
    },
    {
      "source": "ml_root_p1_t5",
      "target": "ml_root_p1_t5_s3"
    },
    {
      "source": "ml_root_p1_t5_s3",
      "target": "ml_root_p1_t5_s3_d1"
    },
    {
      "source": "ml_root_p1_t5_s3",
      "target": "ml_root_p1_t5_s3_d2"
    },
    {
      "source": "ml_root_p1_t5",
      "target": "ml_root_p1_t5_s4"
    },
    {
      "source": "ml_root_p1_t5_s4",
      "target": "ml_root_p1_t5_s4_d1"
    },
    {
      "source": "ml_root_p1_t5_s4",
      "target": "ml_root_p1_t5_s4_d2"
    },
    {
      "source": "ml_root_p1_t5",
      "target": "ml_root_p1_t5_s5"
    },
    {
      "source": "ml_root_p1_t5_s5",
      "target": "ml_root_p1_t5_s5_d1"
    },
    {
      "source": "ml_root_p1_t5_s5",
      "target": "ml_root_p1_t5_s5_d2"
    },
    {
      "source": "ml_root_p1",
      "target": "ml_root_p1_t6"
    },
    {
      "source": "ml_root_p1_t6",
      "target": "ml_root_p1_t6_s1"
    },
    {
      "source": "ml_root_p1_t6_s1",
      "target": "ml_root_p1_t6_s1_d1"
    },
    {
      "source": "ml_root_p1_t6_s1",
      "target": "ml_root_p1_t6_s1_d2"
    },
    {
      "source": "ml_root_p1_t6",
      "target": "ml_root_p1_t6_s2"
    },
    {
      "source": "ml_root_p1_t6_s2",
      "target": "ml_root_p1_t6_s2_d1"
    },
    {
      "source": "ml_root_p1_t6_s2",
      "target": "ml_root_p1_t6_s2_d2"
    },
    {
      "source": "ml_root_p1_t6",
      "target": "ml_root_p1_t6_s3"
    },
    {
      "source": "ml_root_p1_t6_s3",
      "target": "ml_root_p1_t6_s3_d1"
    },
    {
      "source": "ml_root_p1_t6_s3",
      "target": "ml_root_p1_t6_s3_d2"
    },
    {
      "source": "ml_root_p1_t6",
      "target": "ml_root_p1_t6_s4"
    },
    {
      "source": "ml_root_p1_t6_s4",
      "target": "ml_root_p1_t6_s4_d1"
    },
    {
      "source": "ml_root_p1_t6_s4",
      "target": "ml_root_p1_t6_s4_d2"
    },
    {
      "source": "ml_root_p1_t6",
      "target": "ml_root_p1_t6_s5"
    },
    {
      "source": "ml_root_p1_t6_s5",
      "target": "ml_root_p1_t6_s5_d1"
    },
    {
      "source": "ml_root_p1_t6_s5",
      "target": "ml_root_p1_t6_s5_d2"
    },
    {
      "source": "ml_root",
      "target": "ml_root_p2"
    },
    {
      "source": "ml_root_p2",
      "target": "ml_root_p2_t1"
    },
    {
      "source": "ml_root_p2_t1",
      "target": "ml_root_p2_t1_s1"
    },
    {
      "source": "ml_root_p2_t1_s1",
      "target": "ml_root_p2_t1_s1_d1"
    },
    {
      "source": "ml_root_p2_t1_s1",
      "target": "ml_root_p2_t1_s1_d2"
    },
    {
      "source": "ml_root_p2_t1",
      "target": "ml_root_p2_t1_s2"
    },
    {
      "source": "ml_root_p2_t1_s2",
      "target": "ml_root_p2_t1_s2_d1"
    },
    {
      "source": "ml_root_p2_t1_s2",
      "target": "ml_root_p2_t1_s2_d2"
    },
    {
      "source": "ml_root_p2_t1",
      "target": "ml_root_p2_t1_s3"
    },
    {
      "source": "ml_root_p2_t1_s3",
      "target": "ml_root_p2_t1_s3_d1"
    },
    {
      "source": "ml_root_p2_t1_s3",
      "target": "ml_root_p2_t1_s3_d2"
    },
    {
      "source": "ml_root_p2_t1",
      "target": "ml_root_p2_t1_s4"
    },
    {
      "source": "ml_root_p2_t1_s4",
      "target": "ml_root_p2_t1_s4_d1"
    },
    {
      "source": "ml_root_p2_t1_s4",
      "target": "ml_root_p2_t1_s4_d2"
    },
    {
      "source": "ml_root_p2_t1",
      "target": "ml_root_p2_t1_s5"
    },
    {
      "source": "ml_root_p2_t1_s5",
      "target": "ml_root_p2_t1_s5_d1"
    },
    {
      "source": "ml_root_p2_t1_s5",
      "target": "ml_root_p2_t1_s5_d2"
    },
    {
      "source": "ml_root_p2",
      "target": "ml_root_p2_t2"
    },
    {
      "source": "ml_root_p2_t2",
      "target": "ml_root_p2_t2_s1"
    },
    {
      "source": "ml_root_p2_t2_s1",
      "target": "ml_root_p2_t2_s1_d1"
    },
    {
      "source": "ml_root_p2_t2_s1",
      "target": "ml_root_p2_t2_s1_d2"
    },
    {
      "source": "ml_root_p2_t2",
      "target": "ml_root_p2_t2_s2"
    },
    {
      "source": "ml_root_p2_t2_s2",
      "target": "ml_root_p2_t2_s2_d1"
    },
    {
      "source": "ml_root_p2_t2_s2",
      "target": "ml_root_p2_t2_s2_d2"
    },
    {
      "source": "ml_root_p2_t2",
      "target": "ml_root_p2_t2_s3"
    },
    {
      "source": "ml_root_p2_t2_s3",
      "target": "ml_root_p2_t2_s3_d1"
    },
    {
      "source": "ml_root_p2_t2_s3",
      "target": "ml_root_p2_t2_s3_d2"
    },
    {
      "source": "ml_root_p2_t2",
      "target": "ml_root_p2_t2_s4"
    },
    {
      "source": "ml_root_p2_t2_s4",
      "target": "ml_root_p2_t2_s4_d1"
    },
    {
      "source": "ml_root_p2_t2_s4",
      "target": "ml_root_p2_t2_s4_d2"
    },
    {
      "source": "ml_root_p2_t2",
      "target": "ml_root_p2_t2_s5"
    },
    {
      "source": "ml_root_p2_t2_s5",
      "target": "ml_root_p2_t2_s5_d1"
    },
    {
      "source": "ml_root_p2_t2_s5",
      "target": "ml_root_p2_t2_s5_d2"
    },
    {
      "source": "ml_root_p2",
      "target": "ml_root_p2_t3"
    },
    {
      "source": "ml_root_p2_t3",
      "target": "ml_root_p2_t3_s1"
    },
    {
      "source": "ml_root_p2_t3_s1",
      "target": "ml_root_p2_t3_s1_d1"
    },
    {
      "source": "ml_root_p2_t3_s1",
      "target": "ml_root_p2_t3_s1_d2"
    },
    {
      "source": "ml_root_p2_t3",
      "target": "ml_root_p2_t3_s2"
    },
    {
      "source": "ml_root_p2_t3_s2",
      "target": "ml_root_p2_t3_s2_d1"
    },
    {
      "source": "ml_root_p2_t3_s2",
      "target": "ml_root_p2_t3_s2_d2"
    },
    {
      "source": "ml_root_p2_t3",
      "target": "ml_root_p2_t3_s3"
    },
    {
      "source": "ml_root_p2_t3_s3",
      "target": "ml_root_p2_t3_s3_d1"
    },
    {
      "source": "ml_root_p2_t3_s3",
      "target": "ml_root_p2_t3_s3_d2"
    },
    {
      "source": "ml_root_p2_t3",
      "target": "ml_root_p2_t3_s4"
    },
    {
      "source": "ml_root_p2_t3_s4",
      "target": "ml_root_p2_t3_s4_d1"
    },
    {
      "source": "ml_root_p2_t3_s4",
      "target": "ml_root_p2_t3_s4_d2"
    },
    {
      "source": "ml_root_p2_t3",
      "target": "ml_root_p2_t3_s5"
    },
    {
      "source": "ml_root_p2_t3_s5",
      "target": "ml_root_p2_t3_s5_d1"
    },
    {
      "source": "ml_root_p2_t3_s5",
      "target": "ml_root_p2_t3_s5_d2"
    },
    {
      "source": "ml_root_p2",
      "target": "ml_root_p2_t4"
    },
    {
      "source": "ml_root_p2_t4",
      "target": "ml_root_p2_t4_s1"
    },
    {
      "source": "ml_root_p2_t4_s1",
      "target": "ml_root_p2_t4_s1_d1"
    },
    {
      "source": "ml_root_p2_t4_s1",
      "target": "ml_root_p2_t4_s1_d2"
    },
    {
      "source": "ml_root_p2_t4",
      "target": "ml_root_p2_t4_s2"
    },
    {
      "source": "ml_root_p2_t4_s2",
      "target": "ml_root_p2_t4_s2_d1"
    },
    {
      "source": "ml_root_p2_t4_s2",
      "target": "ml_root_p2_t4_s2_d2"
    },
    {
      "source": "ml_root_p2_t4",
      "target": "ml_root_p2_t4_s3"
    },
    {
      "source": "ml_root_p2_t4_s3",
      "target": "ml_root_p2_t4_s3_d1"
    },
    {
      "source": "ml_root_p2_t4_s3",
      "target": "ml_root_p2_t4_s3_d2"
    },
    {
      "source": "ml_root_p2_t4",
      "target": "ml_root_p2_t4_s4"
    },
    {
      "source": "ml_root_p2_t4_s4",
      "target": "ml_root_p2_t4_s4_d1"
    },
    {
      "source": "ml_root_p2_t4_s4",
      "target": "ml_root_p2_t4_s4_d2"
    },
    {
      "source": "ml_root_p2_t4",
      "target": "ml_root_p2_t4_s5"
    },
    {
      "source": "ml_root_p2_t4_s5",
      "target": "ml_root_p2_t4_s5_d1"
    },
    {
      "source": "ml_root_p2_t4_s5",
      "target": "ml_root_p2_t4_s5_d2"
    },
    {
      "source": "ml_root_p2",
      "target": "ml_root_p2_t5"
    },
    {
      "source": "ml_root_p2_t5",
      "target": "ml_root_p2_t5_s1"
    },
    {
      "source": "ml_root_p2_t5_s1",
      "target": "ml_root_p2_t5_s1_d1"
    },
    {
      "source": "ml_root_p2_t5_s1",
      "target": "ml_root_p2_t5_s1_d2"
    },
    {
      "source": "ml_root_p2_t5",
      "target": "ml_root_p2_t5_s2"
    },
    {
      "source": "ml_root_p2_t5_s2",
      "target": "ml_root_p2_t5_s2_d1"
    },
    {
      "source": "ml_root_p2_t5_s2",
      "target": "ml_root_p2_t5_s2_d2"
    },
    {
      "source": "ml_root_p2_t5",
      "target": "ml_root_p2_t5_s3"
    },
    {
      "source": "ml_root_p2_t5_s3",
      "target": "ml_root_p2_t5_s3_d1"
    },
    {
      "source": "ml_root_p2_t5_s3",
      "target": "ml_root_p2_t5_s3_d2"
    },
    {
      "source": "ml_root_p2_t5",
      "target": "ml_root_p2_t5_s4"
    },
    {
      "source": "ml_root_p2_t5_s4",
      "target": "ml_root_p2_t5_s4_d1"
    },
    {
      "source": "ml_root_p2_t5_s4",
      "target": "ml_root_p2_t5_s4_d2"
    },
    {
      "source": "ml_root_p2_t5",
      "target": "ml_root_p2_t5_s5"
    },
    {
      "source": "ml_root_p2_t5_s5",
      "target": "ml_root_p2_t5_s5_d1"
    },
    {
      "source": "ml_root_p2_t5_s5",
      "target": "ml_root_p2_t5_s5_d2"
    },
    {
      "source": "ml_root_p2",
      "target": "ml_root_p2_t6"
    },
    {
      "source": "ml_root_p2_t6",
      "target": "ml_root_p2_t6_s1"
    },
    {
      "source": "ml_root_p2_t6_s1",
      "target": "ml_root_p2_t6_s1_d1"
    },
    {
      "source": "ml_root_p2_t6_s1",
      "target": "ml_root_p2_t6_s1_d2"
    },
    {
      "source": "ml_root_p2_t6",
      "target": "ml_root_p2_t6_s2"
    },
    {
      "source": "ml_root_p2_t6_s2",
      "target": "ml_root_p2_t6_s2_d1"
    },
    {
      "source": "ml_root_p2_t6_s2",
      "target": "ml_root_p2_t6_s2_d2"
    },
    {
      "source": "ml_root_p2_t6",
      "target": "ml_root_p2_t6_s3"
    },
    {
      "source": "ml_root_p2_t6_s3",
      "target": "ml_root_p2_t6_s3_d1"
    },
    {
      "source": "ml_root_p2_t6_s3",
      "target": "ml_root_p2_t6_s3_d2"
    },
    {
      "source": "ml_root_p2_t6",
      "target": "ml_root_p2_t6_s4"
    },
    {
      "source": "ml_root_p2_t6_s4",
      "target": "ml_root_p2_t6_s4_d1"
    },
    {
      "source": "ml_root_p2_t6_s4",
      "target": "ml_root_p2_t6_s4_d2"
    },
    {
      "source": "ml_root_p2_t6",
      "target": "ml_root_p2_t6_s5"
    },
    {
      "source": "ml_root_p2_t6_s5",
      "target": "ml_root_p2_t6_s5_d1"
    },
    {
      "source": "ml_root_p2_t6_s5",
      "target": "ml_root_p2_t6_s5_d2"
    },
    {
      "source": "ml_root",
      "target": "ml_root_p3"
    },
    {
      "source": "ml_root_p3",
      "target": "ml_root_p3_t1"
    },
    {
      "source": "ml_root_p3_t1",
      "target": "ml_root_p3_t1_s1"
    },
    {
      "source": "ml_root_p3_t1_s1",
      "target": "ml_root_p3_t1_s1_d1"
    },
    {
      "source": "ml_root_p3_t1_s1",
      "target": "ml_root_p3_t1_s1_d2"
    },
    {
      "source": "ml_root_p3_t1",
      "target": "ml_root_p3_t1_s2"
    },
    {
      "source": "ml_root_p3_t1_s2",
      "target": "ml_root_p3_t1_s2_d1"
    },
    {
      "source": "ml_root_p3_t1_s2",
      "target": "ml_root_p3_t1_s2_d2"
    },
    {
      "source": "ml_root_p3_t1",
      "target": "ml_root_p3_t1_s3"
    },
    {
      "source": "ml_root_p3_t1_s3",
      "target": "ml_root_p3_t1_s3_d1"
    },
    {
      "source": "ml_root_p3_t1_s3",
      "target": "ml_root_p3_t1_s3_d2"
    },
    {
      "source": "ml_root_p3_t1",
      "target": "ml_root_p3_t1_s4"
    },
    {
      "source": "ml_root_p3_t1_s4",
      "target": "ml_root_p3_t1_s4_d1"
    },
    {
      "source": "ml_root_p3_t1_s4",
      "target": "ml_root_p3_t1_s4_d2"
    },
    {
      "source": "ml_root_p3_t1",
      "target": "ml_root_p3_t1_s5"
    },
    {
      "source": "ml_root_p3_t1_s5",
      "target": "ml_root_p3_t1_s5_d1"
    },
    {
      "source": "ml_root_p3_t1_s5",
      "target": "ml_root_p3_t1_s5_d2"
    },
    {
      "source": "ml_root_p3",
      "target": "ml_root_p3_t2"
    },
    {
      "source": "ml_root_p3_t2",
      "target": "ml_root_p3_t2_s1"
    },
    {
      "source": "ml_root_p3_t2_s1",
      "target": "ml_root_p3_t2_s1_d1"
    },
    {
      "source": "ml_root_p3_t2_s1",
      "target": "ml_root_p3_t2_s1_d2"
    },
    {
      "source": "ml_root_p3_t2",
      "target": "ml_root_p3_t2_s2"
    },
    {
      "source": "ml_root_p3_t2_s2",
      "target": "ml_root_p3_t2_s2_d1"
    },
    {
      "source": "ml_root_p3_t2_s2",
      "target": "ml_root_p3_t2_s2_d2"
    },
    {
      "source": "ml_root_p3_t2",
      "target": "ml_root_p3_t2_s3"
    },
    {
      "source": "ml_root_p3_t2_s3",
      "target": "ml_root_p3_t2_s3_d1"
    },
    {
      "source": "ml_root_p3_t2_s3",
      "target": "ml_root_p3_t2_s3_d2"
    },
    {
      "source": "ml_root_p3_t2",
      "target": "ml_root_p3_t2_s4"
    },
    {
      "source": "ml_root_p3_t2_s4",
      "target": "ml_root_p3_t2_s4_d1"
    },
    {
      "source": "ml_root_p3_t2_s4",
      "target": "ml_root_p3_t2_s4_d2"
    },
    {
      "source": "ml_root_p3_t2",
      "target": "ml_root_p3_t2_s5"
    },
    {
      "source": "ml_root_p3_t2_s5",
      "target": "ml_root_p3_t2_s5_d1"
    },
    {
      "source": "ml_root_p3_t2_s5",
      "target": "ml_root_p3_t2_s5_d2"
    },
    {
      "source": "ml_root_p3",
      "target": "ml_root_p3_t3"
    },
    {
      "source": "ml_root_p3_t3",
      "target": "ml_root_p3_t3_s1"
    },
    {
      "source": "ml_root_p3_t3_s1",
      "target": "ml_root_p3_t3_s1_d1"
    },
    {
      "source": "ml_root_p3_t3_s1",
      "target": "ml_root_p3_t3_s1_d2"
    },
    {
      "source": "ml_root_p3_t3",
      "target": "ml_root_p3_t3_s2"
    },
    {
      "source": "ml_root_p3_t3_s2",
      "target": "ml_root_p3_t3_s2_d1"
    },
    {
      "source": "ml_root_p3_t3_s2",
      "target": "ml_root_p3_t3_s2_d2"
    },
    {
      "source": "ml_root_p3_t3",
      "target": "ml_root_p3_t3_s3"
    },
    {
      "source": "ml_root_p3_t3_s3",
      "target": "ml_root_p3_t3_s3_d1"
    },
    {
      "source": "ml_root_p3_t3_s3",
      "target": "ml_root_p3_t3_s3_d2"
    },
    {
      "source": "ml_root_p3_t3",
      "target": "ml_root_p3_t3_s4"
    },
    {
      "source": "ml_root_p3_t3_s4",
      "target": "ml_root_p3_t3_s4_d1"
    },
    {
      "source": "ml_root_p3_t3_s4",
      "target": "ml_root_p3_t3_s4_d2"
    },
    {
      "source": "ml_root_p3_t3",
      "target": "ml_root_p3_t3_s5"
    },
    {
      "source": "ml_root_p3_t3_s5",
      "target": "ml_root_p3_t3_s5_d1"
    },
    {
      "source": "ml_root_p3_t3_s5",
      "target": "ml_root_p3_t3_s5_d2"
    },
    {
      "source": "ml_root_p3",
      "target": "ml_root_p3_t4"
    },
    {
      "source": "ml_root_p3_t4",
      "target": "ml_root_p3_t4_s1"
    },
    {
      "source": "ml_root_p3_t4_s1",
      "target": "ml_root_p3_t4_s1_d1"
    },
    {
      "source": "ml_root_p3_t4_s1",
      "target": "ml_root_p3_t4_s1_d2"
    },
    {
      "source": "ml_root_p3_t4",
      "target": "ml_root_p3_t4_s2"
    },
    {
      "source": "ml_root_p3_t4_s2",
      "target": "ml_root_p3_t4_s2_d1"
    },
    {
      "source": "ml_root_p3_t4_s2",
      "target": "ml_root_p3_t4_s2_d2"
    },
    {
      "source": "ml_root_p3_t4",
      "target": "ml_root_p3_t4_s3"
    },
    {
      "source": "ml_root_p3_t4_s3",
      "target": "ml_root_p3_t4_s3_d1"
    },
    {
      "source": "ml_root_p3_t4_s3",
      "target": "ml_root_p3_t4_s3_d2"
    },
    {
      "source": "ml_root_p3_t4",
      "target": "ml_root_p3_t4_s4"
    },
    {
      "source": "ml_root_p3_t4_s4",
      "target": "ml_root_p3_t4_s4_d1"
    },
    {
      "source": "ml_root_p3_t4_s4",
      "target": "ml_root_p3_t4_s4_d2"
    },
    {
      "source": "ml_root_p3_t4",
      "target": "ml_root_p3_t4_s5"
    },
    {
      "source": "ml_root_p3_t4_s5",
      "target": "ml_root_p3_t4_s5_d1"
    },
    {
      "source": "ml_root_p3_t4_s5",
      "target": "ml_root_p3_t4_s5_d2"
    },
    {
      "source": "ml_root_p3",
      "target": "ml_root_p3_t5"
    },
    {
      "source": "ml_root_p3_t5",
      "target": "ml_root_p3_t5_s1"
    },
    {
      "source": "ml_root_p3_t5_s1",
      "target": "ml_root_p3_t5_s1_d1"
    },
    {
      "source": "ml_root_p3_t5_s1",
      "target": "ml_root_p3_t5_s1_d2"
    },
    {
      "source": "ml_root_p3_t5",
      "target": "ml_root_p3_t5_s2"
    },
    {
      "source": "ml_root_p3_t5_s2",
      "target": "ml_root_p3_t5_s2_d1"
    },
    {
      "source": "ml_root_p3_t5_s2",
      "target": "ml_root_p3_t5_s2_d2"
    },
    {
      "source": "ml_root_p3_t5",
      "target": "ml_root_p3_t5_s3"
    },
    {
      "source": "ml_root_p3_t5_s3",
      "target": "ml_root_p3_t5_s3_d1"
    },
    {
      "source": "ml_root_p3_t5_s3",
      "target": "ml_root_p3_t5_s3_d2"
    },
    {
      "source": "ml_root_p3_t5",
      "target": "ml_root_p3_t5_s4"
    },
    {
      "source": "ml_root_p3_t5_s4",
      "target": "ml_root_p3_t5_s4_d1"
    },
    {
      "source": "ml_root_p3_t5_s4",
      "target": "ml_root_p3_t5_s4_d2"
    },
    {
      "source": "ml_root_p3_t5",
      "target": "ml_root_p3_t5_s5"
    },
    {
      "source": "ml_root_p3_t5_s5",
      "target": "ml_root_p3_t5_s5_d1"
    },
    {
      "source": "ml_root_p3_t5_s5",
      "target": "ml_root_p3_t5_s5_d2"
    },
    {
      "source": "ml_root_p3",
      "target": "ml_root_p3_t6"
    },
    {
      "source": "ml_root_p3_t6",
      "target": "ml_root_p3_t6_s1"
    },
    {
      "source": "ml_root_p3_t6_s1",
      "target": "ml_root_p3_t6_s1_d1"
    },
    {
      "source": "ml_root_p3_t6_s1",
      "target": "ml_root_p3_t6_s1_d2"
    },
    {
      "source": "ml_root_p3_t6",
      "target": "ml_root_p3_t6_s2"
    },
    {
      "source": "ml_root_p3_t6_s2",
      "target": "ml_root_p3_t6_s2_d1"
    },
    {
      "source": "ml_root_p3_t6_s2",
      "target": "ml_root_p3_t6_s2_d2"
    },
    {
      "source": "ml_root_p3_t6",
      "target": "ml_root_p3_t6_s3"
    },
    {
      "source": "ml_root_p3_t6_s3",
      "target": "ml_root_p3_t6_s3_d1"
    },
    {
      "source": "ml_root_p3_t6_s3",
      "target": "ml_root_p3_t6_s3_d2"
    },
    {
      "source": "ml_root_p3_t6",
      "target": "ml_root_p3_t6_s4"
    },
    {
      "source": "ml_root_p3_t6_s4",
      "target": "ml_root_p3_t6_s4_d1"
    },
    {
      "source": "ml_root_p3_t6_s4",
      "target": "ml_root_p3_t6_s4_d2"
    },
    {
      "source": "ml_root_p3_t6",
      "target": "ml_root_p3_t6_s5"
    },
    {
      "source": "ml_root_p3_t6_s5",
      "target": "ml_root_p3_t6_s5_d1"
    },
    {
      "source": "ml_root_p3_t6_s5",
      "target": "ml_root_p3_t6_s5_d2"
    },
    {
      "source": "ml_root",
      "target": "ml_root_p4"
    },
    {
      "source": "ml_root_p4",
      "target": "ml_root_p4_t1"
    },
    {
      "source": "ml_root_p4_t1",
      "target": "ml_root_p4_t1_s1"
    },
    {
      "source": "ml_root_p4_t1_s1",
      "target": "ml_root_p4_t1_s1_d1"
    },
    {
      "source": "ml_root_p4_t1_s1",
      "target": "ml_root_p4_t1_s1_d2"
    },
    {
      "source": "ml_root_p4_t1",
      "target": "ml_root_p4_t1_s2"
    },
    {
      "source": "ml_root_p4_t1_s2",
      "target": "ml_root_p4_t1_s2_d1"
    },
    {
      "source": "ml_root_p4_t1_s2",
      "target": "ml_root_p4_t1_s2_d2"
    },
    {
      "source": "ml_root_p4_t1",
      "target": "ml_root_p4_t1_s3"
    },
    {
      "source": "ml_root_p4_t1_s3",
      "target": "ml_root_p4_t1_s3_d1"
    },
    {
      "source": "ml_root_p4_t1_s3",
      "target": "ml_root_p4_t1_s3_d2"
    },
    {
      "source": "ml_root_p4_t1",
      "target": "ml_root_p4_t1_s4"
    },
    {
      "source": "ml_root_p4_t1_s4",
      "target": "ml_root_p4_t1_s4_d1"
    },
    {
      "source": "ml_root_p4_t1_s4",
      "target": "ml_root_p4_t1_s4_d2"
    },
    {
      "source": "ml_root_p4_t1",
      "target": "ml_root_p4_t1_s5"
    },
    {
      "source": "ml_root_p4_t1_s5",
      "target": "ml_root_p4_t1_s5_d1"
    },
    {
      "source": "ml_root_p4_t1_s5",
      "target": "ml_root_p4_t1_s5_d2"
    },
    {
      "source": "ml_root_p4",
      "target": "ml_root_p4_t2"
    },
    {
      "source": "ml_root_p4_t2",
      "target": "ml_root_p4_t2_s1"
    },
    {
      "source": "ml_root_p4_t2_s1",
      "target": "ml_root_p4_t2_s1_d1"
    },
    {
      "source": "ml_root_p4_t2_s1",
      "target": "ml_root_p4_t2_s1_d2"
    },
    {
      "source": "ml_root_p4_t2",
      "target": "ml_root_p4_t2_s2"
    },
    {
      "source": "ml_root_p4_t2_s2",
      "target": "ml_root_p4_t2_s2_d1"
    },
    {
      "source": "ml_root_p4_t2_s2",
      "target": "ml_root_p4_t2_s2_d2"
    },
    {
      "source": "ml_root_p4_t2",
      "target": "ml_root_p4_t2_s3"
    },
    {
      "source": "ml_root_p4_t2_s3",
      "target": "ml_root_p4_t2_s3_d1"
    },
    {
      "source": "ml_root_p4_t2_s3",
      "target": "ml_root_p4_t2_s3_d2"
    },
    {
      "source": "ml_root_p4_t2",
      "target": "ml_root_p4_t2_s4"
    },
    {
      "source": "ml_root_p4_t2_s4",
      "target": "ml_root_p4_t2_s4_d1"
    },
    {
      "source": "ml_root_p4_t2_s4",
      "target": "ml_root_p4_t2_s4_d2"
    },
    {
      "source": "ml_root_p4_t2",
      "target": "ml_root_p4_t2_s5"
    },
    {
      "source": "ml_root_p4_t2_s5",
      "target": "ml_root_p4_t2_s5_d1"
    },
    {
      "source": "ml_root_p4_t2_s5",
      "target": "ml_root_p4_t2_s5_d2"
    },
    {
      "source": "ml_root_p4",
      "target": "ml_root_p4_t3"
    },
    {
      "source": "ml_root_p4_t3",
      "target": "ml_root_p4_t3_s1"
    },
    {
      "source": "ml_root_p4_t3_s1",
      "target": "ml_root_p4_t3_s1_d1"
    },
    {
      "source": "ml_root_p4_t3_s1",
      "target": "ml_root_p4_t3_s1_d2"
    },
    {
      "source": "ml_root_p4_t3",
      "target": "ml_root_p4_t3_s2"
    },
    {
      "source": "ml_root_p4_t3_s2",
      "target": "ml_root_p4_t3_s2_d1"
    },
    {
      "source": "ml_root_p4_t3_s2",
      "target": "ml_root_p4_t3_s2_d2"
    },
    {
      "source": "ml_root_p4_t3",
      "target": "ml_root_p4_t3_s3"
    },
    {
      "source": "ml_root_p4_t3_s3",
      "target": "ml_root_p4_t3_s3_d1"
    },
    {
      "source": "ml_root_p4_t3_s3",
      "target": "ml_root_p4_t3_s3_d2"
    },
    {
      "source": "ml_root_p4_t3",
      "target": "ml_root_p4_t3_s4"
    },
    {
      "source": "ml_root_p4_t3_s4",
      "target": "ml_root_p4_t3_s4_d1"
    },
    {
      "source": "ml_root_p4_t3_s4",
      "target": "ml_root_p4_t3_s4_d2"
    },
    {
      "source": "ml_root_p4_t3",
      "target": "ml_root_p4_t3_s5"
    },
    {
      "source": "ml_root_p4_t3_s5",
      "target": "ml_root_p4_t3_s5_d1"
    },
    {
      "source": "ml_root_p4_t3_s5",
      "target": "ml_root_p4_t3_s5_d2"
    },
    {
      "source": "ml_root_p4",
      "target": "ml_root_p4_t4"
    },
    {
      "source": "ml_root_p4_t4",
      "target": "ml_root_p4_t4_s1"
    },
    {
      "source": "ml_root_p4_t4_s1",
      "target": "ml_root_p4_t4_s1_d1"
    },
    {
      "source": "ml_root_p4_t4_s1",
      "target": "ml_root_p4_t4_s1_d2"
    },
    {
      "source": "ml_root_p4_t4",
      "target": "ml_root_p4_t4_s2"
    },
    {
      "source": "ml_root_p4_t4_s2",
      "target": "ml_root_p4_t4_s2_d1"
    },
    {
      "source": "ml_root_p4_t4_s2",
      "target": "ml_root_p4_t4_s2_d2"
    },
    {
      "source": "ml_root_p4_t4",
      "target": "ml_root_p4_t4_s3"
    },
    {
      "source": "ml_root_p4_t4_s3",
      "target": "ml_root_p4_t4_s3_d1"
    },
    {
      "source": "ml_root_p4_t4_s3",
      "target": "ml_root_p4_t4_s3_d2"
    },
    {
      "source": "ml_root_p4_t4",
      "target": "ml_root_p4_t4_s4"
    },
    {
      "source": "ml_root_p4_t4_s4",
      "target": "ml_root_p4_t4_s4_d1"
    },
    {
      "source": "ml_root_p4_t4_s4",
      "target": "ml_root_p4_t4_s4_d2"
    },
    {
      "source": "ml_root_p4_t4",
      "target": "ml_root_p4_t4_s5"
    },
    {
      "source": "ml_root_p4_t4_s5",
      "target": "ml_root_p4_t4_s5_d1"
    },
    {
      "source": "ml_root_p4_t4_s5",
      "target": "ml_root_p4_t4_s5_d2"
    },
    {
      "source": "ml_root_p4",
      "target": "ml_root_p4_t5"
    },
    {
      "source": "ml_root_p4_t5",
      "target": "ml_root_p4_t5_s1"
    },
    {
      "source": "ml_root_p4_t5_s1",
      "target": "ml_root_p4_t5_s1_d1"
    },
    {
      "source": "ml_root_p4_t5_s1",
      "target": "ml_root_p4_t5_s1_d2"
    },
    {
      "source": "ml_root_p4_t5",
      "target": "ml_root_p4_t5_s2"
    },
    {
      "source": "ml_root_p4_t5_s2",
      "target": "ml_root_p4_t5_s2_d1"
    },
    {
      "source": "ml_root_p4_t5_s2",
      "target": "ml_root_p4_t5_s2_d2"
    },
    {
      "source": "ml_root_p4_t5",
      "target": "ml_root_p4_t5_s3"
    },
    {
      "source": "ml_root_p4_t5_s3",
      "target": "ml_root_p4_t5_s3_d1"
    },
    {
      "source": "ml_root_p4_t5_s3",
      "target": "ml_root_p4_t5_s3_d2"
    },
    {
      "source": "ml_root_p4_t5",
      "target": "ml_root_p4_t5_s4"
    },
    {
      "source": "ml_root_p4_t5_s4",
      "target": "ml_root_p4_t5_s4_d1"
    },
    {
      "source": "ml_root_p4_t5_s4",
      "target": "ml_root_p4_t5_s4_d2"
    },
    {
      "source": "ml_root_p4_t5",
      "target": "ml_root_p4_t5_s5"
    },
    {
      "source": "ml_root_p4_t5_s5",
      "target": "ml_root_p4_t5_s5_d1"
    },
    {
      "source": "ml_root_p4_t5_s5",
      "target": "ml_root_p4_t5_s5_d2"
    },
    {
      "source": "ml_root_p4",
      "target": "ml_root_p4_t6"
    },
    {
      "source": "ml_root_p4_t6",
      "target": "ml_root_p4_t6_s1"
    },
    {
      "source": "ml_root_p4_t6_s1",
      "target": "ml_root_p4_t6_s1_d1"
    },
    {
      "source": "ml_root_p4_t6_s1",
      "target": "ml_root_p4_t6_s1_d2"
    },
    {
      "source": "ml_root_p4_t6",
      "target": "ml_root_p4_t6_s2"
    },
    {
      "source": "ml_root_p4_t6_s2",
      "target": "ml_root_p4_t6_s2_d1"
    },
    {
      "source": "ml_root_p4_t6_s2",
      "target": "ml_root_p4_t6_s2_d2"
    },
    {
      "source": "ml_root_p4_t6",
      "target": "ml_root_p4_t6_s3"
    },
    {
      "source": "ml_root_p4_t6_s3",
      "target": "ml_root_p4_t6_s3_d1"
    },
    {
      "source": "ml_root_p4_t6_s3",
      "target": "ml_root_p4_t6_s3_d2"
    },
    {
      "source": "ml_root_p4_t6",
      "target": "ml_root_p4_t6_s4"
    },
    {
      "source": "ml_root_p4_t6_s4",
      "target": "ml_root_p4_t6_s4_d1"
    },
    {
      "source": "ml_root_p4_t6_s4",
      "target": "ml_root_p4_t6_s4_d2"
    },
    {
      "source": "ml_root_p4_t6",
      "target": "ml_root_p4_t6_s5"
    },
    {
      "source": "ml_root_p4_t6_s5",
      "target": "ml_root_p4_t6_s5_d1"
    },
    {
      "source": "ml_root_p4_t6_s5",
      "target": "ml_root_p4_t6_s5_d2"
    },
    {
      "source": "ml_root",
      "target": "ml_root_p5"
    },
    {
      "source": "ml_root_p5",
      "target": "ml_root_p5_t1"
    },
    {
      "source": "ml_root_p5_t1",
      "target": "ml_root_p5_t1_s1"
    },
    {
      "source": "ml_root_p5_t1_s1",
      "target": "ml_root_p5_t1_s1_d1"
    },
    {
      "source": "ml_root_p5_t1_s1",
      "target": "ml_root_p5_t1_s1_d2"
    },
    {
      "source": "ml_root_p5_t1",
      "target": "ml_root_p5_t1_s2"
    },
    {
      "source": "ml_root_p5_t1_s2",
      "target": "ml_root_p5_t1_s2_d1"
    },
    {
      "source": "ml_root_p5_t1_s2",
      "target": "ml_root_p5_t1_s2_d2"
    },
    {
      "source": "ml_root_p5_t1",
      "target": "ml_root_p5_t1_s3"
    },
    {
      "source": "ml_root_p5_t1_s3",
      "target": "ml_root_p5_t1_s3_d1"
    },
    {
      "source": "ml_root_p5_t1_s3",
      "target": "ml_root_p5_t1_s3_d2"
    },
    {
      "source": "ml_root_p5_t1",
      "target": "ml_root_p5_t1_s4"
    },
    {
      "source": "ml_root_p5_t1_s4",
      "target": "ml_root_p5_t1_s4_d1"
    },
    {
      "source": "ml_root_p5_t1_s4",
      "target": "ml_root_p5_t1_s4_d2"
    },
    {
      "source": "ml_root_p5_t1",
      "target": "ml_root_p5_t1_s5"
    },
    {
      "source": "ml_root_p5_t1_s5",
      "target": "ml_root_p5_t1_s5_d1"
    },
    {
      "source": "ml_root_p5_t1_s5",
      "target": "ml_root_p5_t1_s5_d2"
    },
    {
      "source": "ml_root_p5",
      "target": "ml_root_p5_t2"
    },
    {
      "source": "ml_root_p5_t2",
      "target": "ml_root_p5_t2_s1"
    },
    {
      "source": "ml_root_p5_t2_s1",
      "target": "ml_root_p5_t2_s1_d1"
    },
    {
      "source": "ml_root_p5_t2_s1",
      "target": "ml_root_p5_t2_s1_d2"
    },
    {
      "source": "ml_root_p5_t2",
      "target": "ml_root_p5_t2_s2"
    },
    {
      "source": "ml_root_p5_t2_s2",
      "target": "ml_root_p5_t2_s2_d1"
    },
    {
      "source": "ml_root_p5_t2_s2",
      "target": "ml_root_p5_t2_s2_d2"
    },
    {
      "source": "ml_root_p5_t2",
      "target": "ml_root_p5_t2_s3"
    },
    {
      "source": "ml_root_p5_t2_s3",
      "target": "ml_root_p5_t2_s3_d1"
    },
    {
      "source": "ml_root_p5_t2_s3",
      "target": "ml_root_p5_t2_s3_d2"
    },
    {
      "source": "ml_root_p5_t2",
      "target": "ml_root_p5_t2_s4"
    },
    {
      "source": "ml_root_p5_t2_s4",
      "target": "ml_root_p5_t2_s4_d1"
    },
    {
      "source": "ml_root_p5_t2_s4",
      "target": "ml_root_p5_t2_s4_d2"
    },
    {
      "source": "ml_root_p5_t2",
      "target": "ml_root_p5_t2_s5"
    },
    {
      "source": "ml_root_p5_t2_s5",
      "target": "ml_root_p5_t2_s5_d1"
    },
    {
      "source": "ml_root_p5_t2_s5",
      "target": "ml_root_p5_t2_s5_d2"
    },
    {
      "source": "ml_root_p5",
      "target": "ml_root_p5_t3"
    },
    {
      "source": "ml_root_p5_t3",
      "target": "ml_root_p5_t3_s1"
    },
    {
      "source": "ml_root_p5_t3_s1",
      "target": "ml_root_p5_t3_s1_d1"
    },
    {
      "source": "ml_root_p5_t3_s1",
      "target": "ml_root_p5_t3_s1_d2"
    },
    {
      "source": "ml_root_p5_t3",
      "target": "ml_root_p5_t3_s2"
    },
    {
      "source": "ml_root_p5_t3_s2",
      "target": "ml_root_p5_t3_s2_d1"
    },
    {
      "source": "ml_root_p5_t3_s2",
      "target": "ml_root_p5_t3_s2_d2"
    },
    {
      "source": "ml_root_p5_t3",
      "target": "ml_root_p5_t3_s3"
    },
    {
      "source": "ml_root_p5_t3_s3",
      "target": "ml_root_p5_t3_s3_d1"
    },
    {
      "source": "ml_root_p5_t3_s3",
      "target": "ml_root_p5_t3_s3_d2"
    },
    {
      "source": "ml_root_p5_t3",
      "target": "ml_root_p5_t3_s4"
    },
    {
      "source": "ml_root_p5_t3_s4",
      "target": "ml_root_p5_t3_s4_d1"
    },
    {
      "source": "ml_root_p5_t3_s4",
      "target": "ml_root_p5_t3_s4_d2"
    },
    {
      "source": "ml_root_p5_t3",
      "target": "ml_root_p5_t3_s5"
    },
    {
      "source": "ml_root_p5_t3_s5",
      "target": "ml_root_p5_t3_s5_d1"
    },
    {
      "source": "ml_root_p5_t3_s5",
      "target": "ml_root_p5_t3_s5_d2"
    },
    {
      "source": "ml_root_p5",
      "target": "ml_root_p5_t4"
    },
    {
      "source": "ml_root_p5_t4",
      "target": "ml_root_p5_t4_s1"
    },
    {
      "source": "ml_root_p5_t4_s1",
      "target": "ml_root_p5_t4_s1_d1"
    },
    {
      "source": "ml_root_p5_t4_s1",
      "target": "ml_root_p5_t4_s1_d2"
    },
    {
      "source": "ml_root_p5_t4",
      "target": "ml_root_p5_t4_s2"
    },
    {
      "source": "ml_root_p5_t4_s2",
      "target": "ml_root_p5_t4_s2_d1"
    },
    {
      "source": "ml_root_p5_t4_s2",
      "target": "ml_root_p5_t4_s2_d2"
    },
    {
      "source": "ml_root_p5_t4",
      "target": "ml_root_p5_t4_s3"
    },
    {
      "source": "ml_root_p5_t4_s3",
      "target": "ml_root_p5_t4_s3_d1"
    },
    {
      "source": "ml_root_p5_t4_s3",
      "target": "ml_root_p5_t4_s3_d2"
    },
    {
      "source": "ml_root_p5_t4",
      "target": "ml_root_p5_t4_s4"
    },
    {
      "source": "ml_root_p5_t4_s4",
      "target": "ml_root_p5_t4_s4_d1"
    },
    {
      "source": "ml_root_p5_t4_s4",
      "target": "ml_root_p5_t4_s4_d2"
    },
    {
      "source": "ml_root_p5_t4",
      "target": "ml_root_p5_t4_s5"
    },
    {
      "source": "ml_root_p5_t4_s5",
      "target": "ml_root_p5_t4_s5_d1"
    },
    {
      "source": "ml_root_p5_t4_s5",
      "target": "ml_root_p5_t4_s5_d2"
    },
    {
      "source": "ml_root_p5",
      "target": "ml_root_p5_t5"
    },
    {
      "source": "ml_root_p5_t5",
      "target": "ml_root_p5_t5_s1"
    },
    {
      "source": "ml_root_p5_t5_s1",
      "target": "ml_root_p5_t5_s1_d1"
    },
    {
      "source": "ml_root_p5_t5_s1",
      "target": "ml_root_p5_t5_s1_d2"
    },
    {
      "source": "ml_root_p5_t5",
      "target": "ml_root_p5_t5_s2"
    },
    {
      "source": "ml_root_p5_t5_s2",
      "target": "ml_root_p5_t5_s2_d1"
    },
    {
      "source": "ml_root_p5_t5_s2",
      "target": "ml_root_p5_t5_s2_d2"
    },
    {
      "source": "ml_root_p5_t5",
      "target": "ml_root_p5_t5_s3"
    },
    {
      "source": "ml_root_p5_t5_s3",
      "target": "ml_root_p5_t5_s3_d1"
    },
    {
      "source": "ml_root_p5_t5_s3",
      "target": "ml_root_p5_t5_s3_d2"
    },
    {
      "source": "ml_root_p5_t5",
      "target": "ml_root_p5_t5_s4"
    },
    {
      "source": "ml_root_p5_t5_s4",
      "target": "ml_root_p5_t5_s4_d1"
    },
    {
      "source": "ml_root_p5_t5_s4",
      "target": "ml_root_p5_t5_s4_d2"
    },
    {
      "source": "ml_root_p5_t5",
      "target": "ml_root_p5_t5_s5"
    },
    {
      "source": "ml_root_p5_t5_s5",
      "target": "ml_root_p5_t5_s5_d1"
    },
    {
      "source": "ml_root_p5_t5_s5",
      "target": "ml_root_p5_t5_s5_d2"
    },
    {
      "source": "ml_root_p5",
      "target": "ml_root_p5_t6"
    },
    {
      "source": "ml_root_p5_t6",
      "target": "ml_root_p5_t6_s1"
    },
    {
      "source": "ml_root_p5_t6_s1",
      "target": "ml_root_p5_t6_s1_d1"
    },
    {
      "source": "ml_root_p5_t6_s1",
      "target": "ml_root_p5_t6_s1_d2"
    },
    {
      "source": "ml_root_p5_t6",
      "target": "ml_root_p5_t6_s2"
    },
    {
      "source": "ml_root_p5_t6_s2",
      "target": "ml_root_p5_t6_s2_d1"
    },
    {
      "source": "ml_root_p5_t6_s2",
      "target": "ml_root_p5_t6_s2_d2"
    },
    {
      "source": "ml_root_p5_t6",
      "target": "ml_root_p5_t6_s3"
    },
    {
      "source": "ml_root_p5_t6_s3",
      "target": "ml_root_p5_t6_s3_d1"
    },
    {
      "source": "ml_root_p5_t6_s3",
      "target": "ml_root_p5_t6_s3_d2"
    },
    {
      "source": "ml_root_p5_t6",
      "target": "ml_root_p5_t6_s4"
    },
    {
      "source": "ml_root_p5_t6_s4",
      "target": "ml_root_p5_t6_s4_d1"
    },
    {
      "source": "ml_root_p5_t6_s4",
      "target": "ml_root_p5_t6_s4_d2"
    },
    {
      "source": "ml_root_p5_t6",
      "target": "ml_root_p5_t6_s5"
    },
    {
      "source": "ml_root_p5_t6_s5",
      "target": "ml_root_p5_t6_s5_d1"
    },
    {
      "source": "ml_root_p5_t6_s5",
      "target": "ml_root_p5_t6_s5_d2"
    },
    {
      "source": "ml_root",
      "target": "ml_root_p6"
    },
    {
      "source": "ml_root_p6",
      "target": "ml_root_p6_t1"
    },
    {
      "source": "ml_root_p6_t1",
      "target": "ml_root_p6_t1_s1"
    },
    {
      "source": "ml_root_p6_t1_s1",
      "target": "ml_root_p6_t1_s1_d1"
    },
    {
      "source": "ml_root_p6_t1_s1",
      "target": "ml_root_p6_t1_s1_d2"
    },
    {
      "source": "ml_root_p6_t1",
      "target": "ml_root_p6_t1_s2"
    },
    {
      "source": "ml_root_p6_t1_s2",
      "target": "ml_root_p6_t1_s2_d1"
    },
    {
      "source": "ml_root_p6_t1_s2",
      "target": "ml_root_p6_t1_s2_d2"
    },
    {
      "source": "ml_root_p6_t1",
      "target": "ml_root_p6_t1_s3"
    },
    {
      "source": "ml_root_p6_t1_s3",
      "target": "ml_root_p6_t1_s3_d1"
    },
    {
      "source": "ml_root_p6_t1_s3",
      "target": "ml_root_p6_t1_s3_d2"
    },
    {
      "source": "ml_root_p6_t1",
      "target": "ml_root_p6_t1_s4"
    },
    {
      "source": "ml_root_p6_t1_s4",
      "target": "ml_root_p6_t1_s4_d1"
    },
    {
      "source": "ml_root_p6_t1_s4",
      "target": "ml_root_p6_t1_s4_d2"
    },
    {
      "source": "ml_root_p6_t1",
      "target": "ml_root_p6_t1_s5"
    },
    {
      "source": "ml_root_p6_t1_s5",
      "target": "ml_root_p6_t1_s5_d1"
    },
    {
      "source": "ml_root_p6_t1_s5",
      "target": "ml_root_p6_t1_s5_d2"
    },
    {
      "source": "ml_root_p6",
      "target": "ml_root_p6_t2"
    },
    {
      "source": "ml_root_p6_t2",
      "target": "ml_root_p6_t2_s1"
    },
    {
      "source": "ml_root_p6_t2_s1",
      "target": "ml_root_p6_t2_s1_d1"
    },
    {
      "source": "ml_root_p6_t2_s1",
      "target": "ml_root_p6_t2_s1_d2"
    },
    {
      "source": "ml_root_p6_t2",
      "target": "ml_root_p6_t2_s2"
    },
    {
      "source": "ml_root_p6_t2_s2",
      "target": "ml_root_p6_t2_s2_d1"
    },
    {
      "source": "ml_root_p6_t2_s2",
      "target": "ml_root_p6_t2_s2_d2"
    },
    {
      "source": "ml_root_p6_t2",
      "target": "ml_root_p6_t2_s3"
    },
    {
      "source": "ml_root_p6_t2_s3",
      "target": "ml_root_p6_t2_s3_d1"
    },
    {
      "source": "ml_root_p6_t2_s3",
      "target": "ml_root_p6_t2_s3_d2"
    },
    {
      "source": "ml_root_p6_t2",
      "target": "ml_root_p6_t2_s4"
    },
    {
      "source": "ml_root_p6_t2_s4",
      "target": "ml_root_p6_t2_s4_d1"
    },
    {
      "source": "ml_root_p6_t2_s4",
      "target": "ml_root_p6_t2_s4_d2"
    },
    {
      "source": "ml_root_p6_t2",
      "target": "ml_root_p6_t2_s5"
    },
    {
      "source": "ml_root_p6_t2_s5",
      "target": "ml_root_p6_t2_s5_d1"
    },
    {
      "source": "ml_root_p6_t2_s5",
      "target": "ml_root_p6_t2_s5_d2"
    },
    {
      "source": "ml_root_p6",
      "target": "ml_root_p6_t3"
    },
    {
      "source": "ml_root_p6_t3",
      "target": "ml_root_p6_t3_s1"
    },
    {
      "source": "ml_root_p6_t3_s1",
      "target": "ml_root_p6_t3_s1_d1"
    },
    {
      "source": "ml_root_p6_t3_s1",
      "target": "ml_root_p6_t3_s1_d2"
    },
    {
      "source": "ml_root_p6_t3",
      "target": "ml_root_p6_t3_s2"
    },
    {
      "source": "ml_root_p6_t3_s2",
      "target": "ml_root_p6_t3_s2_d1"
    },
    {
      "source": "ml_root_p6_t3_s2",
      "target": "ml_root_p6_t3_s2_d2"
    },
    {
      "source": "ml_root_p6_t3",
      "target": "ml_root_p6_t3_s3"
    },
    {
      "source": "ml_root_p6_t3_s3",
      "target": "ml_root_p6_t3_s3_d1"
    },
    {
      "source": "ml_root_p6_t3_s3",
      "target": "ml_root_p6_t3_s3_d2"
    },
    {
      "source": "ml_root_p6_t3",
      "target": "ml_root_p6_t3_s4"
    },
    {
      "source": "ml_root_p6_t3_s4",
      "target": "ml_root_p6_t3_s4_d1"
    },
    {
      "source": "ml_root_p6_t3_s4",
      "target": "ml_root_p6_t3_s4_d2"
    },
    {
      "source": "ml_root_p6_t3",
      "target": "ml_root_p6_t3_s5"
    },
    {
      "source": "ml_root_p6_t3_s5",
      "target": "ml_root_p6_t3_s5_d1"
    },
    {
      "source": "ml_root_p6_t3_s5",
      "target": "ml_root_p6_t3_s5_d2"
    },
    {
      "source": "ml_root_p6",
      "target": "ml_root_p6_t4"
    },
    {
      "source": "ml_root_p6_t4",
      "target": "ml_root_p6_t4_s1"
    },
    {
      "source": "ml_root_p6_t4_s1",
      "target": "ml_root_p6_t4_s1_d1"
    },
    {
      "source": "ml_root_p6_t4_s1",
      "target": "ml_root_p6_t4_s1_d2"
    },
    {
      "source": "ml_root_p6_t4",
      "target": "ml_root_p6_t4_s2"
    },
    {
      "source": "ml_root_p6_t4_s2",
      "target": "ml_root_p6_t4_s2_d1"
    },
    {
      "source": "ml_root_p6_t4_s2",
      "target": "ml_root_p6_t4_s2_d2"
    },
    {
      "source": "ml_root_p6_t4",
      "target": "ml_root_p6_t4_s3"
    },
    {
      "source": "ml_root_p6_t4_s3",
      "target": "ml_root_p6_t4_s3_d1"
    },
    {
      "source": "ml_root_p6_t4_s3",
      "target": "ml_root_p6_t4_s3_d2"
    },
    {
      "source": "ml_root_p6_t4",
      "target": "ml_root_p6_t4_s4"
    },
    {
      "source": "ml_root_p6_t4_s4",
      "target": "ml_root_p6_t4_s4_d1"
    },
    {
      "source": "ml_root_p6_t4_s4",
      "target": "ml_root_p6_t4_s4_d2"
    },
    {
      "source": "ml_root_p6_t4",
      "target": "ml_root_p6_t4_s5"
    },
    {
      "source": "ml_root_p6_t4_s5",
      "target": "ml_root_p6_t4_s5_d1"
    },
    {
      "source": "ml_root_p6_t4_s5",
      "target": "ml_root_p6_t4_s5_d2"
    },
    {
      "source": "ml_root_p6",
      "target": "ml_root_p6_t5"
    },
    {
      "source": "ml_root_p6_t5",
      "target": "ml_root_p6_t5_s1"
    },
    {
      "source": "ml_root_p6_t5_s1",
      "target": "ml_root_p6_t5_s1_d1"
    },
    {
      "source": "ml_root_p6_t5_s1",
      "target": "ml_root_p6_t5_s1_d2"
    },
    {
      "source": "ml_root_p6_t5",
      "target": "ml_root_p6_t5_s2"
    },
    {
      "source": "ml_root_p6_t5_s2",
      "target": "ml_root_p6_t5_s2_d1"
    },
    {
      "source": "ml_root_p6_t5_s2",
      "target": "ml_root_p6_t5_s2_d2"
    },
    {
      "source": "ml_root_p6_t5",
      "target": "ml_root_p6_t5_s3"
    },
    {
      "source": "ml_root_p6_t5_s3",
      "target": "ml_root_p6_t5_s3_d1"
    },
    {
      "source": "ml_root_p6_t5_s3",
      "target": "ml_root_p6_t5_s3_d2"
    },
    {
      "source": "ml_root_p6_t5",
      "target": "ml_root_p6_t5_s4"
    },
    {
      "source": "ml_root_p6_t5_s4",
      "target": "ml_root_p6_t5_s4_d1"
    },
    {
      "source": "ml_root_p6_t5_s4",
      "target": "ml_root_p6_t5_s4_d2"
    },
    {
      "source": "ml_root_p6_t5",
      "target": "ml_root_p6_t5_s5"
    },
    {
      "source": "ml_root_p6_t5_s5",
      "target": "ml_root_p6_t5_s5_d1"
    },
    {
      "source": "ml_root_p6_t5_s5",
      "target": "ml_root_p6_t5_s5_d2"
    },
    {
      "source": "ml_root_p6",
      "target": "ml_root_p6_t6"
    },
    {
      "source": "ml_root_p6_t6",
      "target": "ml_root_p6_t6_s1"
    },
    {
      "source": "ml_root_p6_t6_s1",
      "target": "ml_root_p6_t6_s1_d1"
    },
    {
      "source": "ml_root_p6_t6_s1",
      "target": "ml_root_p6_t6_s1_d2"
    },
    {
      "source": "ml_root_p6_t6",
      "target": "ml_root_p6_t6_s2"
    },
    {
      "source": "ml_root_p6_t6_s2",
      "target": "ml_root_p6_t6_s2_d1"
    },
    {
      "source": "ml_root_p6_t6_s2",
      "target": "ml_root_p6_t6_s2_d2"
    },
    {
      "source": "ml_root_p6_t6",
      "target": "ml_root_p6_t6_s3"
    },
    {
      "source": "ml_root_p6_t6_s3",
      "target": "ml_root_p6_t6_s3_d1"
    },
    {
      "source": "ml_root_p6_t6_s3",
      "target": "ml_root_p6_t6_s3_d2"
    },
    {
      "source": "ml_root_p6_t6",
      "target": "ml_root_p6_t6_s4"
    },
    {
      "source": "ml_root_p6_t6_s4",
      "target": "ml_root_p6_t6_s4_d1"
    },
    {
      "source": "ml_root_p6_t6_s4",
      "target": "ml_root_p6_t6_s4_d2"
    },
    {
      "source": "ml_root_p6_t6",
      "target": "ml_root_p6_t6_s5"
    },
    {
      "source": "ml_root_p6_t6_s5",
      "target": "ml_root_p6_t6_s5_d1"
    },
    {
      "source": "ml_root_p6_t6_s5",
      "target": "ml_root_p6_t6_s5_d2"
    },
    {
      "source": "ml_root",
      "target": "ml_root_p7"
    },
    {
      "source": "ml_root_p7",
      "target": "ml_root_p7_t1"
    },
    {
      "source": "ml_root_p7_t1",
      "target": "ml_root_p7_t1_s1"
    },
    {
      "source": "ml_root_p7_t1_s1",
      "target": "ml_root_p7_t1_s1_d1"
    },
    {
      "source": "ml_root_p7_t1_s1",
      "target": "ml_root_p7_t1_s1_d2"
    },
    {
      "source": "ml_root_p7_t1",
      "target": "ml_root_p7_t1_s2"
    },
    {
      "source": "ml_root_p7_t1_s2",
      "target": "ml_root_p7_t1_s2_d1"
    },
    {
      "source": "ml_root_p7_t1_s2",
      "target": "ml_root_p7_t1_s2_d2"
    },
    {
      "source": "ml_root_p7_t1",
      "target": "ml_root_p7_t1_s3"
    },
    {
      "source": "ml_root_p7_t1_s3",
      "target": "ml_root_p7_t1_s3_d1"
    },
    {
      "source": "ml_root_p7_t1_s3",
      "target": "ml_root_p7_t1_s3_d2"
    },
    {
      "source": "ml_root_p7_t1",
      "target": "ml_root_p7_t1_s4"
    },
    {
      "source": "ml_root_p7_t1_s4",
      "target": "ml_root_p7_t1_s4_d1"
    },
    {
      "source": "ml_root_p7_t1_s4",
      "target": "ml_root_p7_t1_s4_d2"
    },
    {
      "source": "ml_root_p7_t1",
      "target": "ml_root_p7_t1_s5"
    },
    {
      "source": "ml_root_p7_t1_s5",
      "target": "ml_root_p7_t1_s5_d1"
    },
    {
      "source": "ml_root_p7_t1_s5",
      "target": "ml_root_p7_t1_s5_d2"
    },
    {
      "source": "ml_root_p7",
      "target": "ml_root_p7_t2"
    },
    {
      "source": "ml_root_p7_t2",
      "target": "ml_root_p7_t2_s1"
    },
    {
      "source": "ml_root_p7_t2_s1",
      "target": "ml_root_p7_t2_s1_d1"
    },
    {
      "source": "ml_root_p7_t2_s1",
      "target": "ml_root_p7_t2_s1_d2"
    },
    {
      "source": "ml_root_p7_t2",
      "target": "ml_root_p7_t2_s2"
    },
    {
      "source": "ml_root_p7_t2_s2",
      "target": "ml_root_p7_t2_s2_d1"
    },
    {
      "source": "ml_root_p7_t2_s2",
      "target": "ml_root_p7_t2_s2_d2"
    },
    {
      "source": "ml_root_p7_t2",
      "target": "ml_root_p7_t2_s3"
    },
    {
      "source": "ml_root_p7_t2_s3",
      "target": "ml_root_p7_t2_s3_d1"
    },
    {
      "source": "ml_root_p7_t2_s3",
      "target": "ml_root_p7_t2_s3_d2"
    },
    {
      "source": "ml_root_p7_t2",
      "target": "ml_root_p7_t2_s4"
    },
    {
      "source": "ml_root_p7_t2_s4",
      "target": "ml_root_p7_t2_s4_d1"
    },
    {
      "source": "ml_root_p7_t2_s4",
      "target": "ml_root_p7_t2_s4_d2"
    },
    {
      "source": "ml_root_p7_t2",
      "target": "ml_root_p7_t2_s5"
    },
    {
      "source": "ml_root_p7_t2_s5",
      "target": "ml_root_p7_t2_s5_d1"
    },
    {
      "source": "ml_root_p7_t2_s5",
      "target": "ml_root_p7_t2_s5_d2"
    },
    {
      "source": "ml_root_p7",
      "target": "ml_root_p7_t3"
    },
    {
      "source": "ml_root_p7_t3",
      "target": "ml_root_p7_t3_s1"
    },
    {
      "source": "ml_root_p7_t3_s1",
      "target": "ml_root_p7_t3_s1_d1"
    },
    {
      "source": "ml_root_p7_t3_s1",
      "target": "ml_root_p7_t3_s1_d2"
    },
    {
      "source": "ml_root_p7_t3",
      "target": "ml_root_p7_t3_s2"
    },
    {
      "source": "ml_root_p7_t3_s2",
      "target": "ml_root_p7_t3_s2_d1"
    },
    {
      "source": "ml_root_p7_t3_s2",
      "target": "ml_root_p7_t3_s2_d2"
    },
    {
      "source": "ml_root_p7_t3",
      "target": "ml_root_p7_t3_s3"
    },
    {
      "source": "ml_root_p7_t3_s3",
      "target": "ml_root_p7_t3_s3_d1"
    },
    {
      "source": "ml_root_p7_t3_s3",
      "target": "ml_root_p7_t3_s3_d2"
    },
    {
      "source": "ml_root_p7_t3",
      "target": "ml_root_p7_t3_s4"
    },
    {
      "source": "ml_root_p7_t3_s4",
      "target": "ml_root_p7_t3_s4_d1"
    },
    {
      "source": "ml_root_p7_t3_s4",
      "target": "ml_root_p7_t3_s4_d2"
    },
    {
      "source": "ml_root_p7_t3",
      "target": "ml_root_p7_t3_s5"
    },
    {
      "source": "ml_root_p7_t3_s5",
      "target": "ml_root_p7_t3_s5_d1"
    },
    {
      "source": "ml_root_p7_t3_s5",
      "target": "ml_root_p7_t3_s5_d2"
    },
    {
      "source": "ml_root_p7",
      "target": "ml_root_p7_t4"
    },
    {
      "source": "ml_root_p7_t4",
      "target": "ml_root_p7_t4_s1"
    },
    {
      "source": "ml_root_p7_t4_s1",
      "target": "ml_root_p7_t4_s1_d1"
    },
    {
      "source": "ml_root_p7_t4_s1",
      "target": "ml_root_p7_t4_s1_d2"
    },
    {
      "source": "ml_root_p7_t4",
      "target": "ml_root_p7_t4_s2"
    },
    {
      "source": "ml_root_p7_t4_s2",
      "target": "ml_root_p7_t4_s2_d1"
    },
    {
      "source": "ml_root_p7_t4_s2",
      "target": "ml_root_p7_t4_s2_d2"
    },
    {
      "source": "ml_root_p7_t4",
      "target": "ml_root_p7_t4_s3"
    },
    {
      "source": "ml_root_p7_t4_s3",
      "target": "ml_root_p7_t4_s3_d1"
    },
    {
      "source": "ml_root_p7_t4_s3",
      "target": "ml_root_p7_t4_s3_d2"
    },
    {
      "source": "ml_root_p7_t4",
      "target": "ml_root_p7_t4_s4"
    },
    {
      "source": "ml_root_p7_t4_s4",
      "target": "ml_root_p7_t4_s4_d1"
    },
    {
      "source": "ml_root_p7_t4_s4",
      "target": "ml_root_p7_t4_s4_d2"
    },
    {
      "source": "ml_root_p7_t4",
      "target": "ml_root_p7_t4_s5"
    },
    {
      "source": "ml_root_p7_t4_s5",
      "target": "ml_root_p7_t4_s5_d1"
    },
    {
      "source": "ml_root_p7_t4_s5",
      "target": "ml_root_p7_t4_s5_d2"
    },
    {
      "source": "ml_root_p7",
      "target": "ml_root_p7_t5"
    },
    {
      "source": "ml_root_p7_t5",
      "target": "ml_root_p7_t5_s1"
    },
    {
      "source": "ml_root_p7_t5_s1",
      "target": "ml_root_p7_t5_s1_d1"
    },
    {
      "source": "ml_root_p7_t5_s1",
      "target": "ml_root_p7_t5_s1_d2"
    },
    {
      "source": "ml_root_p7_t5",
      "target": "ml_root_p7_t5_s2"
    },
    {
      "source": "ml_root_p7_t5_s2",
      "target": "ml_root_p7_t5_s2_d1"
    },
    {
      "source": "ml_root_p7_t5_s2",
      "target": "ml_root_p7_t5_s2_d2"
    },
    {
      "source": "ml_root_p7_t5",
      "target": "ml_root_p7_t5_s3"
    },
    {
      "source": "ml_root_p7_t5_s3",
      "target": "ml_root_p7_t5_s3_d1"
    },
    {
      "source": "ml_root_p7_t5_s3",
      "target": "ml_root_p7_t5_s3_d2"
    },
    {
      "source": "ml_root_p7_t5",
      "target": "ml_root_p7_t5_s4"
    },
    {
      "source": "ml_root_p7_t5_s4",
      "target": "ml_root_p7_t5_s4_d1"
    },
    {
      "source": "ml_root_p7_t5_s4",
      "target": "ml_root_p7_t5_s4_d2"
    },
    {
      "source": "ml_root_p7_t5",
      "target": "ml_root_p7_t5_s5"
    },
    {
      "source": "ml_root_p7_t5_s5",
      "target": "ml_root_p7_t5_s5_d1"
    },
    {
      "source": "ml_root_p7_t5_s5",
      "target": "ml_root_p7_t5_s5_d2"
    },
    {
      "source": "ml_root_p7",
      "target": "ml_root_p7_t6"
    },
    {
      "source": "ml_root_p7_t6",
      "target": "ml_root_p7_t6_s1"
    },
    {
      "source": "ml_root_p7_t6_s1",
      "target": "ml_root_p7_t6_s1_d1"
    },
    {
      "source": "ml_root_p7_t6_s1",
      "target": "ml_root_p7_t6_s1_d2"
    },
    {
      "source": "ml_root_p7_t6",
      "target": "ml_root_p7_t6_s2"
    },
    {
      "source": "ml_root_p7_t6_s2",
      "target": "ml_root_p7_t6_s2_d1"
    },
    {
      "source": "ml_root_p7_t6_s2",
      "target": "ml_root_p7_t6_s2_d2"
    },
    {
      "source": "ml_root_p7_t6",
      "target": "ml_root_p7_t6_s3"
    },
    {
      "source": "ml_root_p7_t6_s3",
      "target": "ml_root_p7_t6_s3_d1"
    },
    {
      "source": "ml_root_p7_t6_s3",
      "target": "ml_root_p7_t6_s3_d2"
    },
    {
      "source": "ml_root_p7_t6",
      "target": "ml_root_p7_t6_s4"
    },
    {
      "source": "ml_root_p7_t6_s4",
      "target": "ml_root_p7_t6_s4_d1"
    },
    {
      "source": "ml_root_p7_t6_s4",
      "target": "ml_root_p7_t6_s4_d2"
    },
    {
      "source": "ml_root_p7_t6",
      "target": "ml_root_p7_t6_s5"
    },
    {
      "source": "ml_root_p7_t6_s5",
      "target": "ml_root_p7_t6_s5_d1"
    },
    {
      "source": "ml_root_p7_t6_s5",
      "target": "ml_root_p7_t6_s5_d2"
    },
    {
      "source": "ml_root",
      "target": "ml_root_p8"
    },
    {
      "source": "ml_root_p8",
      "target": "ml_root_p8_t1"
    },
    {
      "source": "ml_root_p8_t1",
      "target": "ml_root_p8_t1_s1"
    },
    {
      "source": "ml_root_p8_t1_s1",
      "target": "ml_root_p8_t1_s1_d1"
    },
    {
      "source": "ml_root_p8_t1_s1",
      "target": "ml_root_p8_t1_s1_d2"
    },
    {
      "source": "ml_root_p8_t1",
      "target": "ml_root_p8_t1_s2"
    },
    {
      "source": "ml_root_p8_t1_s2",
      "target": "ml_root_p8_t1_s2_d1"
    },
    {
      "source": "ml_root_p8_t1_s2",
      "target": "ml_root_p8_t1_s2_d2"
    },
    {
      "source": "ml_root_p8_t1",
      "target": "ml_root_p8_t1_s3"
    },
    {
      "source": "ml_root_p8_t1_s3",
      "target": "ml_root_p8_t1_s3_d1"
    },
    {
      "source": "ml_root_p8_t1_s3",
      "target": "ml_root_p8_t1_s3_d2"
    },
    {
      "source": "ml_root_p8_t1",
      "target": "ml_root_p8_t1_s4"
    },
    {
      "source": "ml_root_p8_t1_s4",
      "target": "ml_root_p8_t1_s4_d1"
    },
    {
      "source": "ml_root_p8_t1_s4",
      "target": "ml_root_p8_t1_s4_d2"
    },
    {
      "source": "ml_root_p8_t1",
      "target": "ml_root_p8_t1_s5"
    },
    {
      "source": "ml_root_p8_t1_s5",
      "target": "ml_root_p8_t1_s5_d1"
    },
    {
      "source": "ml_root_p8_t1_s5",
      "target": "ml_root_p8_t1_s5_d2"
    },
    {
      "source": "ml_root_p8",
      "target": "ml_root_p8_t2"
    },
    {
      "source": "ml_root_p8_t2",
      "target": "ml_root_p8_t2_s1"
    },
    {
      "source": "ml_root_p8_t2_s1",
      "target": "ml_root_p8_t2_s1_d1"
    },
    {
      "source": "ml_root_p8_t2_s1",
      "target": "ml_root_p8_t2_s1_d2"
    },
    {
      "source": "ml_root_p8_t2",
      "target": "ml_root_p8_t2_s2"
    },
    {
      "source": "ml_root_p8_t2_s2",
      "target": "ml_root_p8_t2_s2_d1"
    },
    {
      "source": "ml_root_p8_t2_s2",
      "target": "ml_root_p8_t2_s2_d2"
    },
    {
      "source": "ml_root_p8_t2",
      "target": "ml_root_p8_t2_s3"
    },
    {
      "source": "ml_root_p8_t2_s3",
      "target": "ml_root_p8_t2_s3_d1"
    },
    {
      "source": "ml_root_p8_t2_s3",
      "target": "ml_root_p8_t2_s3_d2"
    },
    {
      "source": "ml_root_p8_t2",
      "target": "ml_root_p8_t2_s4"
    },
    {
      "source": "ml_root_p8_t2_s4",
      "target": "ml_root_p8_t2_s4_d1"
    },
    {
      "source": "ml_root_p8_t2_s4",
      "target": "ml_root_p8_t2_s4_d2"
    },
    {
      "source": "ml_root_p8_t2",
      "target": "ml_root_p8_t2_s5"
    },
    {
      "source": "ml_root_p8_t2_s5",
      "target": "ml_root_p8_t2_s5_d1"
    },
    {
      "source": "ml_root_p8_t2_s5",
      "target": "ml_root_p8_t2_s5_d2"
    },
    {
      "source": "ml_root_p8",
      "target": "ml_root_p8_t3"
    },
    {
      "source": "ml_root_p8_t3",
      "target": "ml_root_p8_t3_s1"
    },
    {
      "source": "ml_root_p8_t3_s1",
      "target": "ml_root_p8_t3_s1_d1"
    },
    {
      "source": "ml_root_p8_t3_s1",
      "target": "ml_root_p8_t3_s1_d2"
    },
    {
      "source": "ml_root_p8_t3",
      "target": "ml_root_p8_t3_s2"
    },
    {
      "source": "ml_root_p8_t3_s2",
      "target": "ml_root_p8_t3_s2_d1"
    },
    {
      "source": "ml_root_p8_t3_s2",
      "target": "ml_root_p8_t3_s2_d2"
    },
    {
      "source": "ml_root_p8_t3",
      "target": "ml_root_p8_t3_s3"
    },
    {
      "source": "ml_root_p8_t3_s3",
      "target": "ml_root_p8_t3_s3_d1"
    },
    {
      "source": "ml_root_p8_t3_s3",
      "target": "ml_root_p8_t3_s3_d2"
    },
    {
      "source": "ml_root_p8_t3",
      "target": "ml_root_p8_t3_s4"
    },
    {
      "source": "ml_root_p8_t3_s4",
      "target": "ml_root_p8_t3_s4_d1"
    },
    {
      "source": "ml_root_p8_t3_s4",
      "target": "ml_root_p8_t3_s4_d2"
    },
    {
      "source": "ml_root_p8_t3",
      "target": "ml_root_p8_t3_s5"
    },
    {
      "source": "ml_root_p8_t3_s5",
      "target": "ml_root_p8_t3_s5_d1"
    },
    {
      "source": "ml_root_p8_t3_s5",
      "target": "ml_root_p8_t3_s5_d2"
    },
    {
      "source": "ml_root_p8",
      "target": "ml_root_p8_t4"
    },
    {
      "source": "ml_root_p8_t4",
      "target": "ml_root_p8_t4_s1"
    },
    {
      "source": "ml_root_p8_t4_s1",
      "target": "ml_root_p8_t4_s1_d1"
    },
    {
      "source": "ml_root_p8_t4_s1",
      "target": "ml_root_p8_t4_s1_d2"
    },
    {
      "source": "ml_root_p8_t4",
      "target": "ml_root_p8_t4_s2"
    },
    {
      "source": "ml_root_p8_t4_s2",
      "target": "ml_root_p8_t4_s2_d1"
    },
    {
      "source": "ml_root_p8_t4_s2",
      "target": "ml_root_p8_t4_s2_d2"
    },
    {
      "source": "ml_root_p8_t4",
      "target": "ml_root_p8_t4_s3"
    },
    {
      "source": "ml_root_p8_t4_s3",
      "target": "ml_root_p8_t4_s3_d1"
    },
    {
      "source": "ml_root_p8_t4_s3",
      "target": "ml_root_p8_t4_s3_d2"
    },
    {
      "source": "ml_root_p8_t4",
      "target": "ml_root_p8_t4_s4"
    },
    {
      "source": "ml_root_p8_t4_s4",
      "target": "ml_root_p8_t4_s4_d1"
    },
    {
      "source": "ml_root_p8_t4_s4",
      "target": "ml_root_p8_t4_s4_d2"
    },
    {
      "source": "ml_root_p8_t4",
      "target": "ml_root_p8_t4_s5"
    },
    {
      "source": "ml_root_p8_t4_s5",
      "target": "ml_root_p8_t4_s5_d1"
    },
    {
      "source": "ml_root_p8_t4_s5",
      "target": "ml_root_p8_t4_s5_d2"
    },
    {
      "source": "ml_root_p8",
      "target": "ml_root_p8_t5"
    },
    {
      "source": "ml_root_p8_t5",
      "target": "ml_root_p8_t5_s1"
    },
    {
      "source": "ml_root_p8_t5_s1",
      "target": "ml_root_p8_t5_s1_d1"
    },
    {
      "source": "ml_root_p8_t5_s1",
      "target": "ml_root_p8_t5_s1_d2"
    },
    {
      "source": "ml_root_p8_t5",
      "target": "ml_root_p8_t5_s2"
    },
    {
      "source": "ml_root_p8_t5_s2",
      "target": "ml_root_p8_t5_s2_d1"
    },
    {
      "source": "ml_root_p8_t5_s2",
      "target": "ml_root_p8_t5_s2_d2"
    },
    {
      "source": "ml_root_p8_t5",
      "target": "ml_root_p8_t5_s3"
    },
    {
      "source": "ml_root_p8_t5_s3",
      "target": "ml_root_p8_t5_s3_d1"
    },
    {
      "source": "ml_root_p8_t5_s3",
      "target": "ml_root_p8_t5_s3_d2"
    },
    {
      "source": "ml_root_p8_t5",
      "target": "ml_root_p8_t5_s4"
    },
    {
      "source": "ml_root_p8_t5_s4",
      "target": "ml_root_p8_t5_s4_d1"
    },
    {
      "source": "ml_root_p8_t5_s4",
      "target": "ml_root_p8_t5_s4_d2"
    },
    {
      "source": "ml_root_p8_t5",
      "target": "ml_root_p8_t5_s5"
    },
    {
      "source": "ml_root_p8_t5_s5",
      "target": "ml_root_p8_t5_s5_d1"
    },
    {
      "source": "ml_root_p8_t5_s5",
      "target": "ml_root_p8_t5_s5_d2"
    },
    {
      "source": "ml_root_p8",
      "target": "ml_root_p8_t6"
    },
    {
      "source": "ml_root_p8_t6",
      "target": "ml_root_p8_t6_s1"
    },
    {
      "source": "ml_root_p8_t6_s1",
      "target": "ml_root_p8_t6_s1_d1"
    },
    {
      "source": "ml_root_p8_t6_s1",
      "target": "ml_root_p8_t6_s1_d2"
    },
    {
      "source": "ml_root_p8_t6",
      "target": "ml_root_p8_t6_s2"
    },
    {
      "source": "ml_root_p8_t6_s2",
      "target": "ml_root_p8_t6_s2_d1"
    },
    {
      "source": "ml_root_p8_t6_s2",
      "target": "ml_root_p8_t6_s2_d2"
    },
    {
      "source": "ml_root_p8_t6",
      "target": "ml_root_p8_t6_s3"
    },
    {
      "source": "ml_root_p8_t6_s3",
      "target": "ml_root_p8_t6_s3_d1"
    },
    {
      "source": "ml_root_p8_t6_s3",
      "target": "ml_root_p8_t6_s3_d2"
    },
    {
      "source": "ml_root_p8_t6",
      "target": "ml_root_p8_t6_s4"
    },
    {
      "source": "ml_root_p8_t6_s4",
      "target": "ml_root_p8_t6_s4_d1"
    },
    {
      "source": "ml_root_p8_t6_s4",
      "target": "ml_root_p8_t6_s4_d2"
    },
    {
      "source": "ml_root_p8_t6",
      "target": "ml_root_p8_t6_s5"
    },
    {
      "source": "ml_root_p8_t6_s5",
      "target": "ml_root_p8_t6_s5_d1"
    },
    {
      "source": "ml_root_p8_t6_s5",
      "target": "ml_root_p8_t6_s5_d2"
    }
  ]
};
