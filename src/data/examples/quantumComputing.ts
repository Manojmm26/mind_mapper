import { MindMapData } from "../../services/llmService";

export const QUANTUM_COMPUTING_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "quantum_root",
      "label": "Quantum Computing from First Principles",
      "description": "Rigorous first-principles blueprint of qubit quantum mechanics, Bloch sphere geometry, unitary gate operators, Bell state entanglement, Shor/Grover algorithms, surface code QEC, superconducting transmons, and VQE/QAOA NISQ math.",
      "type": "topic"
    },
    {
      "id": "quantum_root_p1",
      "label": "Qubit Physics & Superposition Mathematics",
      "description": "Quantum mechanical state vectors, Hilbert spaces, Bloch sphere geometry, and Dirac bra-ket notation.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t1",
      "label": "Two-State Quantum Hilbert Space",
      "description": "State vector representations in 2-dimensional complex vector spaces C^2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t1_s1",
      "label": "Dirac Bra-Ket Notation (|psi> and <psi|)",
      "description": "Representing quantum state vectors as column kets |psi> and dual conjugate transpose row bras <psi|.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t1_s1_d1",
      "label": "Ket Vector Column Format",
      "description": "Representing state |psi> = alpha|0> + beta|1> as column vector [alpha, beta]^T.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t1_s1_d2",
      "label": "Bra Vector Row Conjugate Format",
      "description": "Representing bra <psi| as complex conjugate transpose row vector [alpha*, beta*].",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t1_s2",
      "label": "Born Rule Probability Postulate (|alpha|^2 + |beta|^2 = 1)",
      "description": "Probability postulate stating that measurement collapses states to basis states with probability equal to amplitude squared.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t1_s2_d1",
      "label": "Normalization Condition (|alpha|^2 + |beta|^2 = 1)",
      "description": "Enforcing unit length on state vectors to guarantee total measurement probability equals 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t1_s2_d2",
      "label": "Phase Factor Equivalence (e^{i*theta})",
      "description": "Recognizing that global phase factors e^{i*theta} produce physically indistinguishable states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t1_s3",
      "label": "Computational Basis States (|0> and |1>)",
      "description": "Orthonormal basis vectors spanning the single-qubit Hilbert space.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t1_s3_d1",
      "label": "Orthonormality Relation (<0|1> = 0, <0|0> = 1)",
      "description": "Validating zero inner product between orthogonal basis states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t1_s3_d2",
      "label": "Z-Basis Measurement Operator Alignment",
      "description": "Aligning computational basis states with eigenvectors of the Pauli-Z operator.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t1_s4",
      "label": "Superposition State Creation",
      "description": "Constructing linear combinations of computational basis states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t1_s4_d1",
      "label": "Equal Superposition State |+> = (|0> + |1>)/sqrt(2)",
      "description": "Creating symmetric linear superposition with equal 50% measurement probabilities.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t1_s4_d2",
      "label": "Minus Superposition State |-> = (|0> - |1>)/sqrt(2)",
      "description": "Creating asymmetric superposition state with relative pi phase difference.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t1_s5",
      "label": "Multi-Qubit Tensor Product Spaces (H_1 (x) H_2)",
      "description": "Expanding Hilbert space dimensions exponentially ($2^N$) using tensor products.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t1_s5_d1",
      "label": "2^N Dimensional State Vector Scaling",
      "description": "Representing N-qubit quantum states in 2^N dimensional complex Hilbert spaces.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t1_s5_d2",
      "label": "Kronecker Product Matrix Construction",
      "description": "Computing composite state vectors using Kronecker tensor products of individual qubit vectors.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t2",
      "label": "Bloch Sphere Geometric Representation",
      "description": "Mapping single-qubit pure states to points on the unit 3-sphere in R^3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t2_s1",
      "label": "Bloch State Vector Parameterization",
      "description": "Parameterizing pure state vectors using spherical polar coordinates (theta, phi).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t2_s1_d1",
      "label": "Formula |psi> = cos(theta/2)|0> + e^{i*phi}sin(theta/2)|1>",
      "description": "Mapping state angles theta in [0, pi] and phi in [0, 2pi) to sphere coordinates.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t2_s1_d2",
      "label": "Bloch Vector Coordinates (x, y, z)",
      "description": "Computing Cartesian coordinates: x = sin(theta)cos(phi), y = sin(theta)sin(phi), z = cos(theta).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t2_s2",
      "label": "North Pole |0> & South Pole |1> Orientation",
      "description": "Positioning computational basis states at opposite poles of the Bloch sphere.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t2_s2_d1",
      "label": "North Pole (theta=0 -> |0>)",
      "description": "Mapping pure state |0> to Cartesian coordinates (0, 0, 1).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t2_s2_d2",
      "label": "South Pole (theta=pi -> |1>)",
      "description": "Mapping pure state |1> to Cartesian coordinates (0, 0, -1).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t2_s3",
      "label": "Equatorial States (|+>, |->, |i+>, |i->)",
      "description": "Positioning equal superposition states on the Bloch sphere equator (theta = pi/2).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t2_s3_d1",
      "label": "X-Axis Eigenstates (|+> at (1,0,0), |-> at (-1,0,0))",
      "description": "Positioning real superposition states along the X-axis.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t2_s3_d2",
      "label": "Y-Axis Eigenstates (|i+> at (0,1,0), |i-> at (0,-1,0))",
      "description": "Positioning complex superposition states along the Y-axis.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t2_s4",
      "label": "Unitary Rotation Trajectories on the Sphere",
      "description": "Visualizing single-qubit quantum gates as rigid rotations of the Bloch sphere.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t2_s4_d1",
      "label": "Rotation Angle Map (theta Gate Angle -> theta Sphere Angle)",
      "description": "Applying R_n(alpha) rotation matrices to rotate state vectors around unit axes n.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t2_s4_d2",
      "label": "Reversibility & Distance Preservation",
      "description": "Preserving state vector lengths and inner products during unitary rotations.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t2_s5",
      "label": "Mixed States & Inner Sphere Density Matrix (r < 1)",
      "description": "Representing statistical ensembles of states as points inside the Bloch sphere volume.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t2_s5_d1",
      "label": "Density Matrix Formula rho = (I + r_x*X + r_y*Y + r_z*Z) / 2",
      "description": "Mapping mixed states to Bloch vectors r with length |r| < 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t2_s5_d2",
      "label": "Maximally Mixed State Center (r = (0,0,0))",
      "description": "Positioning completely unpolarized mixed states at the origin of the Bloch sphere.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t3",
      "label": "Quantum Measurement & State Collapse",
      "description": "Mathematical formalism describing physical measurement operators and wave function collapse.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t3_s1",
      "label": "Projective (Von Neumann) Measurement Operators",
      "description": "Modeling ideal quantum measurements using Hermitian projection operators P_m.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t3_s1_d1",
      "label": "Idempotent Projection Property (P_m^2 = P_m)",
      "description": "Validating that applying projection operators twice yields identical results.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t3_s1_d2",
      "label": "Probability Formula p(m) = <psi|P_m|psi>",
      "description": "Computing outcome probabilities via expectation values of projection operators.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t3_s2",
      "label": "State Vector Collapse Postulate",
      "description": "Instantaneous transformation of state vectors upon physical measurement execution.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t3_s2_d1",
      "label": "Post-Measurement State |psi_m> = P_m|psi> / sqrt(p(m))",
      "description": "Normalizing collapsed state vectors to unit length after measurement.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t3_s2_d2",
      "label": "Irreversible Loss of Quantum Phase Information",
      "description": "Destroying relative phase amplitudes during projective measurement.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t3_s3",
      "label": "Observable Operators & Expectation Values <O>",
      "description": "Measuring physical observables represented by self-adjoint Hermitian operators O.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t3_s3_d1",
      "label": "Hermitian Eigenvalue Spectrum (O = sum(lambda_i * |i><i|))",
      "description": "Guaranteeing real-valued measurement outcome eigenvalues lambda_i.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t3_s3_d2",
      "label": "Expectation Value Formula <O> = <psi|O|psi> = Tr(rho*O)",
      "description": "Computing ensemble average measurement outcomes.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t3_s4",
      "label": "General POVM (Positive Operator-Valued Measure)",
      "description": "Generalized measurement formalism for open quantum systems and non-orthogonal state discrimination.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t3_s4_d1",
      "label": "POVM Element Condition (sum(E_m) = I, E_m >= 0)",
      "description": "Formulating non-projective measurement sets summing to the identity operator.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t3_s4_d2",
      "label": "Unambiguous State Discrimination Applications",
      "description": "Distinguishing non-orthogonal quantum states without error at the cost of inconclusive outcomes.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t3_s5",
      "label": "Quantum Nondemolition (QND) Measurements",
      "description": "Repeated measurement setups that preserve measurement outcome eigenvalues without introducing noise.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t3_s5_d1",
      "label": "Commutation Condition ([O, H_int] = 0)",
      "description": "Ensuring observable operators commute with interaction Hamiltonians.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t3_s5_d2",
      "label": "Continuous Qubit State Monitoring",
      "description": "Monitoring qubit states continuously without inducing unwanted state transitions.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t4",
      "label": "Density Matrix Formalism & Open Systems",
      "description": "Mathematical framework for representing statistical ensembles, mixed states, and environment decoherence.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t4_s1",
      "label": "Density Matrix Construction (rho = sum(p_i * |psi_i><psi_i|))",
      "description": "Formulating state operators for statistical mixtures of pure quantum states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t4_s1_d1",
      "label": "Hermitian & Positive Semi-Definite Properties",
      "description": "Enforcing rho = rho^dagger and non-negative eigenvalues.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t4_s1_d2",
      "label": "Unit Trace Normalization (Tr(rho) = 1)",
      "description": "Requiring trace of density matrices to equal 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t4_s2",
      "label": "Pure vs Mixed State Criteria (Tr(rho^2))",
      "description": "Distinguishing pure states from statistical mixed states using purity metrics.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t4_s2_d1",
      "label": "Pure State Condition (Tr(rho^2) = 1)",
      "description": "Purity equals 1 if and only if the state is a pure state vector.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t4_s2_d2",
      "label": "Mixed State Condition (Tr(rho^2) < 1)",
      "description": "Purity drops below 1 for statistical mixtures, reaching 1/d for maximally mixed states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t4_s3",
      "label": "Partial Trace & Reduced Density Matrix (rho_A = Tr_B(rho_AB))",
      "description": "Extracting subsystem states from composite entangled system density matrices.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t4_s3_d1",
      "label": "Tracing Out Environmental Subsystems",
      "description": "Integrating out environmental degrees of freedom to obtain reduced state matrices.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t4_s3_d2",
      "label": "Entanglement-Induced Subsystem Decoherence",
      "description": "Demonstrating that subsystems of pure entangled states appear as mixed states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t4_s4",
      "label": "Lindblad Master Equation for Open Quantum Systems",
      "description": "Differential equation describing non-unitary Markovian time evolution of density matrices.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t4_s4_d1",
      "label": "Formula d(rho)/dt = -i[H, rho] + sum(L_k * rho * L_k^dagger - {L_k^dagger * L_k, rho}/2)",
      "description": "Modeling system Hamiltonian evolution alongside jump operators L_k.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t4_s4_d2",
      "label": "Dissipative Energy Relaxation & Dephasing Modeling",
      "description": "Simulating physical qubit decay processes (T1 relaxation, T2 dephasing).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t4_s5",
      "label": "Quantum Fidelity & State Tomography Metrics",
      "description": "Quantifying similarity between experimental density matrices and target theoretical states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t4_s5_d1",
      "label": "Uhlmann's State Fidelity F(rho, sigma) = (Tr(sqrt(sqrt(rho)*sigma*sqrt(rho))))^2",
      "description": "Measuring state overlap distances between 0.0 and 1.0.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t4_s5_d2",
      "label": "Quantum State Tomography (QST) Reconstruction",
      "description": "Reconstructing experimental density matrices from exhaustive projective measurement sets.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t5",
      "label": "Qubit Physics & Superposition Mathematics Topic 5",
      "description": "Detailed first-principles mechanics for Qubit Physics & Superposition Mathematics topic 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t5_s1",
      "label": "Qubit Physics & Superposition Mathematics Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Qubit Physics & Superposition Mathematics Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t5_s1_d1",
      "label": "Qubit Physics & Superposition Mathematics Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Qubit Physics & Superposition Mathematics Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t5_s1_d2",
      "label": "Qubit Physics & Superposition Mathematics Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Qubit Physics & Superposition Mathematics Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t5_s2",
      "label": "Qubit Physics & Superposition Mathematics Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Qubit Physics & Superposition Mathematics Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t5_s2_d1",
      "label": "Qubit Physics & Superposition Mathematics Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Qubit Physics & Superposition Mathematics Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t5_s2_d2",
      "label": "Qubit Physics & Superposition Mathematics Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Qubit Physics & Superposition Mathematics Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t5_s3",
      "label": "Qubit Physics & Superposition Mathematics Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Qubit Physics & Superposition Mathematics Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t5_s3_d1",
      "label": "Qubit Physics & Superposition Mathematics Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Qubit Physics & Superposition Mathematics Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t5_s3_d2",
      "label": "Qubit Physics & Superposition Mathematics Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Qubit Physics & Superposition Mathematics Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t5_s4",
      "label": "Qubit Physics & Superposition Mathematics Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Qubit Physics & Superposition Mathematics Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t5_s4_d1",
      "label": "Qubit Physics & Superposition Mathematics Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Qubit Physics & Superposition Mathematics Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t5_s4_d2",
      "label": "Qubit Physics & Superposition Mathematics Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Qubit Physics & Superposition Mathematics Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t5_s5",
      "label": "Qubit Physics & Superposition Mathematics Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Qubit Physics & Superposition Mathematics Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t5_s5_d1",
      "label": "Qubit Physics & Superposition Mathematics Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Qubit Physics & Superposition Mathematics Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t5_s5_d2",
      "label": "Qubit Physics & Superposition Mathematics Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Qubit Physics & Superposition Mathematics Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t6",
      "label": "Qubit Physics & Superposition Mathematics Topic 6",
      "description": "Detailed first-principles mechanics for Qubit Physics & Superposition Mathematics topic 6.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t6_s1",
      "label": "Qubit Physics & Superposition Mathematics Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Qubit Physics & Superposition Mathematics Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t6_s1_d1",
      "label": "Qubit Physics & Superposition Mathematics Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Qubit Physics & Superposition Mathematics Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t6_s1_d2",
      "label": "Qubit Physics & Superposition Mathematics Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Qubit Physics & Superposition Mathematics Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t6_s2",
      "label": "Qubit Physics & Superposition Mathematics Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Qubit Physics & Superposition Mathematics Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t6_s2_d1",
      "label": "Qubit Physics & Superposition Mathematics Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Qubit Physics & Superposition Mathematics Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t6_s2_d2",
      "label": "Qubit Physics & Superposition Mathematics Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Qubit Physics & Superposition Mathematics Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t6_s3",
      "label": "Qubit Physics & Superposition Mathematics Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Qubit Physics & Superposition Mathematics Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t6_s3_d1",
      "label": "Qubit Physics & Superposition Mathematics Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Qubit Physics & Superposition Mathematics Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t6_s3_d2",
      "label": "Qubit Physics & Superposition Mathematics Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Qubit Physics & Superposition Mathematics Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t6_s4",
      "label": "Qubit Physics & Superposition Mathematics Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Qubit Physics & Superposition Mathematics Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t6_s4_d1",
      "label": "Qubit Physics & Superposition Mathematics Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Qubit Physics & Superposition Mathematics Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t6_s4_d2",
      "label": "Qubit Physics & Superposition Mathematics Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Qubit Physics & Superposition Mathematics Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t6_s5",
      "label": "Qubit Physics & Superposition Mathematics Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Qubit Physics & Superposition Mathematics Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t6_s5_d1",
      "label": "Qubit Physics & Superposition Mathematics Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Qubit Physics & Superposition Mathematics Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p1_t6_s5_d2",
      "label": "Qubit Physics & Superposition Mathematics Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Qubit Physics & Superposition Mathematics Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2",
      "label": "Quantum Gates & Unitary Operators",
      "description": "Pauli operators, single-qubit rotations, 2-qubit CNOT/CZ gates, and universal quantum circuit synthesis.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t1",
      "label": "Pauli Operators (X, Y, Z, I)",
      "description": "Fundamental 2x2 complex Hermitian and Unitary matrices forming a basis for single-qubit operators.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t1_s1",
      "label": "Pauli-X (Bit-Flip / NOT Gate)",
      "description": "Matrix X = [[0, 1], [1, 0]] flipping computational basis states |0> <-> |1>.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t1_s1_d1",
      "label": "State Inversion (X|0> = |1>, X|1> = |0>)",
      "description": "Executing bit-flip transformations on computational basis states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t1_s1_d2",
      "label": "Bloch Sphere 180-Degree X-Axis Rotation",
      "description": "Rotating state vectors by pi radians around the Bloch X-axis.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t1_s2",
      "label": "Pauli-Z (Phase-Flip Gate)",
      "description": "Matrix Z = [[1, 0], [0, -1]] flipping the sign of the |1> state amplitude.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t1_s2_d1",
      "label": "Phase Inversion (Z|0> = |0>, Z|1> = -|1>)",
      "description": "Injecting a pi relative phase shift into the |1> state component.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t1_s2_d2",
      "label": "Superposition Basis Conversion (Z|+> = |->)",
      "description": "Flipping |+> states to |-> states in the X-basis.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t1_s3",
      "label": "Pauli-Y (Combined Bit and Phase Flip Gate)",
      "description": "Matrix Y = [[0, -i], [i, 0]] combining bit-flip and phase-flip operations.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t1_s3_d1",
      "label": "State Transformation (Y|0> = i|1>, Y|1> = -i|0>)",
      "description": "Applying bit-flip while injecting complex phase factors i.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t1_s3_d2",
      "label": "Bloch Sphere 180-Degree Y-Axis Rotation",
      "description": "Rotating state vectors by pi radians around the Bloch Y-axis.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t1_s4",
      "label": "Pauli Group Algebra & Anti-Commutation Rules",
      "description": "Algebraic commutation relations governing Pauli matrix products.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t1_s4_d1",
      "label": "Anti-Commutation Relation ({X, Y} = XY + YX = 0)",
      "description": "Demonstrating that distinct Pauli matrices anti-commute.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t1_s4_d2",
      "label": "Cyclic Multiplication Rules (XY = iZ, YZ = iX, ZX = iY)",
      "description": "Evaluating products of Pauli matrices to yield third Pauli matrices with imaginary units i.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t1_s5",
      "label": "Exponential Matrix Rotations R_n(theta) = exp(-i*theta*n*sigma / 2)",
      "description": "Generating continuous 3D Bloch sphere rotations around arbitrary axis vectors n.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t1_s5_d1",
      "label": "Euler Rotation Formula R_n(theta) = cos(theta/2)I - i*sin(theta/2)(n_x X + n_y Y + n_z Z)",
      "description": "Decomposing unitary matrices into trigonometric Pauli sums.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t1_s5_d2",
      "label": "Arbitrary Single-Qubit Gate Synthesis",
      "description": "Synthesizing any single-qubit unitary gate using ZYZ rotation angle sequences.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t2",
      "label": "Hadamard (H) & Phase (S, T) Gates",
      "description": "Core single-qubit gates generating superpositions and fractional phase shifts.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t2_s1",
      "label": "Hadamard Gate Matrix H = [[1, 1], [1, -1]] / sqrt(2)",
      "description": "Fundamental gate transforming computational basis states into equal superposition states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t2_s1_d1",
      "label": "Superposition Creation (H|0> = |+>, H|1> = |->)",
      "description": "Mapping Z-basis states to X-basis equal superposition states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t2_s1_d2",
      "label": "Self-Inverse Property (H^2 = I)",
      "description": "Validating that applying Hadamard gates twice restores original input states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t2_s2",
      "label": "Phase Gate S (pi/2 Rotation Gate)",
      "description": "Matrix S = [[1, 0], [0, i]] applying a 90-degree phase shift to the |1> state.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t2_s2_d1",
      "label": "Relation to Pauli-Z (S^2 = Z)",
      "description": "Demonstrating that applying two S gates yields a Pauli-Z gate.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t2_s2_d2",
      "label": "Equatorial State Rotation (S|+> = |i+>)",
      "description": "Rotating X-axis superposition states to Y-axis complex superposition states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t2_s3",
      "label": "T Gate (pi/4 Phase Gate / pi/8 Gate)",
      "description": "Matrix T = [[1, 0], [0, e^{i*pi/4}]] applying a 45-degree phase shift to the |1> state.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t2_s3_d1",
      "label": "Relation to Phase Gate (T^2 = S)",
      "description": "Demonstrating that applying two T gates yields an S gate.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t2_s3_d2",
      "label": "Non-Clifford Gate Role in Universal Quantum Computing",
      "description": "Providing the essential non-Clifford gate required to achieve universal quantum computation.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t2_s4",
      "label": "Clifford Group Operations (H, S, CNOT)",
      "description": "Subgroup of unitary operators normalizing the Pauli group (C P C^dagger in P).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t2_s4_d1",
      "label": "Gottesman-Knill Theorem Complexity",
      "description": "Proving that quantum circuits consisting exclusively of Clifford gates are efficiently simulated on classical computers in polynomial time.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t2_s4_d2",
      "label": "Stabilizer State Transformations",
      "description": "Mapping stabilizer states to stabilizer states under Clifford group gate execution.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t2_s5",
      "label": "Solovay-Kitaev Theorem & Gate Approximation",
      "description": "Approximating arbitrary single-qubit unitary gates using discrete gate sets (H, T).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t2_s5_d1",
      "label": "Polylogarithmic Gate Overhead O(log^c(1/epsilon))",
      "description": "Approximating target unitaries within precision epsilon using short discrete gate sequences.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t2_s5_d2",
      "label": "Efficient Fault-Tolerant Circuit Synthesis",
      "description": "Compiling continuous rotation gates into fault-tolerant native gate sets.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t3",
      "label": "Two-Qubit Gates (CNOT, CZ, SWAP)",
      "description": "Multi-qubit entangling gates generating conditional phase and state flips.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t3_s1",
      "label": "Controlled-NOT (CNOT / CX) Gate Architecture",
      "description": "Flipping target qubit state if and only if control qubit state is |1>.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t3_s1_d1",
      "label": "4x4 Unitary Matrix Representation",
      "description": "Structuring CNOT matrix [[1,0,0,0], [0,1,0,0], [0,0,0,1], [0,0,1,0]].",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t3_s1_d2",
      "label": "Entanglement Generation (CNOT|0>|+> = (|00> + |11>)/sqrt(2))",
      "description": "Generating entangled Bell states from product state inputs.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t3_s2",
      "label": "Controlled-Z (CZ) Symmetric Entangling Gate",
      "description": "Injecting a pi relative phase shift if and only if both control and target qubits are in state |1>.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t3_s2_d1",
      "label": "Symmetric Control-Target Equivalence",
      "description": "Demonstrating that control and target roles are mathematically symmetric in CZ gates.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t3_s2_d2",
      "label": "CNOT Equivalence via Hadamard Transformations (CZ = (I (x) H) CNOT (I (x) H))",
      "description": "Converting CZ gates into CNOT gates using Hadamard gates on the target qubit.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t3_s3",
      "label": "SWAP & iSWAP Qubit Exchange Gates",
      "description": "Exchanging quantum states between two physical qubits.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t3_s3_d1",
      "label": "3-CNOT SWAP Gate Construction",
      "description": "Synthesizing SWAP gates using three alternating CNOT gates.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t3_s3_d2",
      "label": "iSWAP Phase-Shift Exchange (Superconducting Native)",
      "description": "Exchanging states while injecting pi/2 phase factors, native to transmon architectures.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t3_s4",
      "label": "Controlled-Phase (CPHASE / R_phi) Gates",
      "description": "Applying continuous phase shifts e^{i*phi} when both qubits are in state |1>.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t3_s4_d1",
      "label": "Continuous Phase Parameter phi Tuning",
      "description": "Configuring custom entangling angles for variational quantum algorithms.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t3_s4_d2",
      "label": "Native Cross-Resonance Drive Implementation",
      "description": "Executing continuous CPHASE gates via microwave drive pulses on coupled transmons.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t3_s5",
      "label": "Toffoli (CCNOT) & Fredkin (CSWAP) 3-Qubit Gates",
      "description": "Universal reversible classical and quantum 3-qubit gates.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t3_s5_d1",
      "label": "Toffoli Gate Construction (6 CNOTs + Single-Qubit Gates)",
      "description": "Decomposing 3-qubit Toffoli gates into 2-qubit native gate primitives.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t3_s5_d2",
      "label": "Reversible Classical Logic Emulation",
      "description": "Executing classical AND, OR, and NOT operations reversibly inside quantum circuits.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t4",
      "label": "Universal Gate Sets & Circuit Decomposition",
      "description": "Synthesizing arbitrary multi-qubit unitary operations using finite native gate sets.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t4_s1",
      "label": "Universal Quantum Gate Set Criteria",
      "description": "Sets of gates capable of approximating any multi-qubit unitary matrix to arbitrary precision.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t4_s1_d1",
      "label": "CNOT + Single-Qubit Rotations Universality",
      "description": "Proving that CNOT alongside arbitrary single-qubit rotations forms a universal gate set.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t4_s1_d2",
      "label": "Clifford + T Discrete Universal Gate Set",
      "description": "Standard fault-tolerant universal gate set for error-corrected quantum computing.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t4_s2",
      "label": "KAK Decomposition (Cartan Decomposition)",
      "description": "Decomposing arbitrary 2-qubit unitary matrices into at most 3 CNOT gates.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t4_s2_d1",
      "label": "Optimal 2-Qubit Gate Compilation",
      "description": "Expressing any U in SU(4) using single-qubit rotations and 3 CNOT gates.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t4_s2_d2",
      "label": "Pulse-Level Gate Minimization",
      "description": "Reducing execution times and gate errors on noisy hardware.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t4_s3",
      "label": "Quantum Circuit DAG Topology",
      "description": "Representing quantum circuits as Directed Acyclic Graphs of gate operations.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t4_s3_d1",
      "label": "Commutation & Gate Rescheduling Passes",
      "description": "Reordering commuting gates in DAGs to minimize circuit depth.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t4_s3_d2",
      "label": "Circuit Depth vs Gate Count Optimization",
      "description": "Balancing parallel execution depth against total gate count.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t4_s4",
      "label": "Transpilation & Hardware Topology Mapping",
      "description": "Mapping abstract quantum circuits to physical hardware qubit coupling graphs.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t4_s4_d1",
      "label": "SWAP Insertion for Non-Adjacent Qubit Gates",
      "description": "Injecting SWAP gates to route quantum information across limited hardware connectivity graphs.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t4_s4_d2",
      "label": "Native Hardware Gate Translation",
      "description": "Translating abstract gates (H, CNOT) into hardware native pulse gates (rz, sx, cz).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t4_s5",
      "label": "Unitary Matrix Equivalence Verification",
      "description": "Verifying that compiled quantum circuits match target unitary specifications.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t4_s5_d1",
      "label": "Matrix Product Comparison U_compiled^dagger * U_target = I",
      "description": "Validating circuit compilation correctness up to global phase factors.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t4_s5_d2",
      "label": "Process Fidelity Calculation",
      "description": "Evaluating compilation accuracy across full circuit unitary matrices.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t5",
      "label": "Quantum Gates & Unitary Operators Topic 5",
      "description": "Detailed first-principles mechanics for Quantum Gates & Unitary Operators topic 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t5_s1",
      "label": "Quantum Gates & Unitary Operators Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Gates & Unitary Operators Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t5_s1_d1",
      "label": "Quantum Gates & Unitary Operators Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Gates & Unitary Operators Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t5_s1_d2",
      "label": "Quantum Gates & Unitary Operators Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Gates & Unitary Operators Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t5_s2",
      "label": "Quantum Gates & Unitary Operators Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Gates & Unitary Operators Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t5_s2_d1",
      "label": "Quantum Gates & Unitary Operators Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Gates & Unitary Operators Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t5_s2_d2",
      "label": "Quantum Gates & Unitary Operators Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Gates & Unitary Operators Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t5_s3",
      "label": "Quantum Gates & Unitary Operators Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Gates & Unitary Operators Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t5_s3_d1",
      "label": "Quantum Gates & Unitary Operators Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Gates & Unitary Operators Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t5_s3_d2",
      "label": "Quantum Gates & Unitary Operators Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Gates & Unitary Operators Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t5_s4",
      "label": "Quantum Gates & Unitary Operators Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Gates & Unitary Operators Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t5_s4_d1",
      "label": "Quantum Gates & Unitary Operators Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Gates & Unitary Operators Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t5_s4_d2",
      "label": "Quantum Gates & Unitary Operators Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Gates & Unitary Operators Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t5_s5",
      "label": "Quantum Gates & Unitary Operators Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Gates & Unitary Operators Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t5_s5_d1",
      "label": "Quantum Gates & Unitary Operators Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Gates & Unitary Operators Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t5_s5_d2",
      "label": "Quantum Gates & Unitary Operators Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Gates & Unitary Operators Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t6",
      "label": "Quantum Gates & Unitary Operators Topic 6",
      "description": "Detailed first-principles mechanics for Quantum Gates & Unitary Operators topic 6.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t6_s1",
      "label": "Quantum Gates & Unitary Operators Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Gates & Unitary Operators Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t6_s1_d1",
      "label": "Quantum Gates & Unitary Operators Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Gates & Unitary Operators Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t6_s1_d2",
      "label": "Quantum Gates & Unitary Operators Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Gates & Unitary Operators Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t6_s2",
      "label": "Quantum Gates & Unitary Operators Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Gates & Unitary Operators Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t6_s2_d1",
      "label": "Quantum Gates & Unitary Operators Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Gates & Unitary Operators Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t6_s2_d2",
      "label": "Quantum Gates & Unitary Operators Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Gates & Unitary Operators Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t6_s3",
      "label": "Quantum Gates & Unitary Operators Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Gates & Unitary Operators Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t6_s3_d1",
      "label": "Quantum Gates & Unitary Operators Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Gates & Unitary Operators Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t6_s3_d2",
      "label": "Quantum Gates & Unitary Operators Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Gates & Unitary Operators Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t6_s4",
      "label": "Quantum Gates & Unitary Operators Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Gates & Unitary Operators Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t6_s4_d1",
      "label": "Quantum Gates & Unitary Operators Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Gates & Unitary Operators Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t6_s4_d2",
      "label": "Quantum Gates & Unitary Operators Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Gates & Unitary Operators Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t6_s5",
      "label": "Quantum Gates & Unitary Operators Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Gates & Unitary Operators Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t6_s5_d1",
      "label": "Quantum Gates & Unitary Operators Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Gates & Unitary Operators Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p2_t6_s5_d2",
      "label": "Quantum Gates & Unitary Operators Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Gates & Unitary Operators Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3",
      "label": "Quantum Entanglement & Non-Locality",
      "description": "Bell state basis vectors, EPR paradox, CHSH inequality violations, and quantum teleportation protocols.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t1",
      "label": "Maximally Entangled Bell States",
      "description": "Orthonormal basis of 4 maximally entangled 2-qubit states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t1_s1",
      "label": "Phi+ Bell State (|Phi+> = (|00> + |11>)/sqrt(2))",
      "description": "Symmetric Bell state exhibiting identical parallel spin correlations.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t1_s1_d1",
      "label": "Perfect Measurement Correlation",
      "description": "Measuring qubit A in state |0> guarantees qubit B collapses to |0> instantly.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t1_s1_d2",
      "label": "Hadamard + CNOT Generation Circuit",
      "description": "Generating |Phi+> by applying H to qubit A followed by CNOT(A, B).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t1_s2",
      "label": "Phi- Bell State (|Phi-> = (|00> - |11>)/sqrt(2))",
      "description": "Bell state with relative pi phase shift between |00> and |11> components.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t1_s2_d1",
      "label": "Phase Flip Generation (Z_A |Phi+> = |Phi->)",
      "description": "Applying Pauli-Z to qubit A to transform |Phi+> into |Phi->.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t1_s2_d2",
      "label": "X-Basis Anti-Correlation Properties",
      "description": "Exhibiting anti-correlated measurement outcomes when measured in the X-basis.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t1_s3",
      "label": "Psi+ Bell State (|Psi+> = (|01> + |10>)/sqrt(2))",
      "description": "Symmetric Bell state exhibiting anti-correlated computational basis states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t1_s3_d1",
      "label": "Bit Flip Generation (X_B |Phi+> = |Psi+>)",
      "description": "Applying Pauli-X to qubit B to transform |Phi+> into |Psi+>.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t1_s3_d2",
      "label": "Computational Basis Anti-Correlation",
      "description": "Measuring qubit A in state |0> guarantees qubit B collapses to |1>.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t1_s4",
      "label": "Psi- Bell State (|Psi-> = (|01> - |10>)/sqrt(2))",
      "description": "Singlet state invariant under all simultaneous identical single-qubit rotations.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t1_s4_d1",
      "label": "Rotationally Invariant Quantum Singlet",
      "description": "Preserving state form (U (x) U)|Psi-> = |Psi-> under any single-qubit unitary U.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t1_s4_d2",
      "label": "Total Angular Momentum Zero State",
      "description": "Representing zero net spin systems in physical quantum mechanics.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t1_s5",
      "label": "Entanglement Monotones & Concurrence Math",
      "description": "Quantifying the degree of entanglement contained within composite state vectors.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t1_s5_d1",
      "label": "Concurrence Formula C(psi) = 2|ad - bc|",
      "description": "Measuring entanglement of arbitrary 2-qubit states |psi> = a|00> + b|01> + c|10> + d|11>.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t1_s5_d2",
      "label": "Entanglement of Formation E_F(C)",
      "description": "Mapping concurrence to von Neumann entropy of reduced density matrices.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t2",
      "label": "EPR Paradox & Bell's Theorem",
      "description": "Proving that quantum mechanics cannot be explained by local hidden variable theories.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t2_s1",
      "label": "Einstein-Podolsky-Rosen (EPR) 1935 Paper",
      "description": "Gedankenexperiment arguing that quantum mechanics is incomplete due to apparent faster-than-light action.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t2_s1_d1",
      "label": "Local Realism Postulate",
      "description": "Assuming physical properties exist independently of measurement (realism) and signals cannot exceed light speed (locality).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t2_s1_d2",
      "label": "Hidden Variables Hypothesis",
      "description": "Proposing that unobserved local parameters determine measurement outcomes deterministically.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t2_s2",
      "label": "Bell's 1964 Inequality Theorem",
      "description": "Mathematical theorem proving that local hidden variable theories impose strict bounds on measurement correlations.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t2_s2_d1",
      "label": "Local Hidden Variable Bound (Correlations <= 2)",
      "description": "Proving that any local realist theory must satisfy Bell inequalities.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t2_s2_d2",
      "label": "Quantum Mechanical Bound (Tsirelson's Bound 2*sqrt(2))",
      "description": "Demonstrating that quantum predictions violate local realist bounds.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t2_s3",
      "label": "CHSH Inequality Format (|S| <= 2)",
      "description": "Clauser-Horne-Shimony-Holt formulation of Bell's inequality optimized for experimental testing.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t2_s3_d1",
      "label": "Correlator Expectation Formula S = E(a,b) - E(a,b') + E(a',b) + E(a',b')",
      "description": "Measuring expectation values across 4 detector angle combinations.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t2_s3_d2",
      "label": "Experimental Violation S = 2*sqrt(2) approx 2.828",
      "description": "Achieving maximum quantum violation at 45-degree relative detector angles.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t2_s4",
      "label": "Loophole-Free Experimental Bell Tests",
      "description": "Closing experimental loopholes (locality, detection, freedom-of-choice) in Bell tests.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t2_s4_d1",
      "label": "Locality Loophole Closure (Fast Random Measurement Switches)",
      "description": "Changing detector angles faster than light propagation times between measurement sites.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t2_s4_d2",
      "label": "Detection Efficiency Loophole Closure (> 80% Efficiency)",
      "description": "Using high-efficiency detectors to ensure measured samples accurately reflect total populations.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t2_s5",
      "label": "No-Signaling Theorem & Causal Bounds",
      "description": "Proving that entanglement collapse cannot transmit classical information faster than light.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t2_s5_d1",
      "label": "Reduced Density Matrix Independence Tr_A(rho_AB)",
      "description": "Demonstrating that local density matrices on side B remain completely unchanged by actions on side A.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t2_s5_d2",
      "label": "Classical Communication Requirement",
      "description": "Requiring classical communication channels to extract useful information from entangled pairs.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t3",
      "label": "Quantum Teleportation Protocol",
      "description": "Transporting an unknown quantum state using an entangled pair and two classical bits.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t3_s1",
      "label": "Protocol Initial Setup (3 Qubits, 1 Bell Pair)",
      "description": "Distributing a shared Bell pair |Phi+> between Alice and Bob.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t3_s1_d1",
      "label": "Input Unknown State |psi>_C = alpha|0> + beta|1>",
      "description": "Preparing target qubit C to be teleported without measuring its amplitudes.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t3_s1_d2",
      "label": "Composite 3-Qubit Input State |psi>_C (x) |Phi+>_AB",
      "description": "Expanding 3-qubit initial state vector in tensor product space.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t3_s2",
      "label": "Alice's Bell State Measurement (BSM)",
      "description": "Alice executing CNOT and Hadamard operations on her two qubits followed by projective measurement.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t3_s2_d1",
      "label": "CNOT(C, A) followed by H(C) Circuit",
      "description": "Transforming Alice's qubits into the Bell measurement basis.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t3_s2_d2",
      "label": "2-Bit Classical Outcome Generation (m_C, m_A in {0,1}^2)",
      "description": "Measuring Alice's two qubits to yield one of 4 classical outcome pairs (00, 01, 10, 11).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t3_s3",
      "label": "Classical Bit Transmission & Bob's Unitary Correction",
      "description": "Bob applying Pauli correction gates to his qubit based on Alice's 2 classical bits.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t3_s3_d1",
      "label": "Correction Table (00 -> I, 01 -> X, 10 -> Z, 11 -> ZX)",
      "description": "Applying conditional Pauli operations to restore original state |psi> on Bob's qubit.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t3_s3_d2",
      "label": "Exact State Reconstruction",
      "description": "Reconstructing target state |psi> on Bob's qubit with 100% theoretical fidelity.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t3_s4",
      "label": "No-Cloning Theorem Compliance",
      "description": "Validating that quantum teleportation destroys the original state, preventing cloning.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t3_s4_d1",
      "label": "Original State Destruction on Measurement",
      "description": "Collapsing Alice's original qubit state during Bell measurement.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t3_s4_d2",
      "label": "No-Cloning Proof (|psi> cannot be duplicated)",
      "description": "Enforcing the fundamental theorem that arbitrary unknown quantum states cannot be cloned.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t3_s5",
      "label": "Entanglement Swapping & Quantum Repeaters",
      "description": "Teleporting entanglement across intermediate nodes to extend quantum communication range.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t3_s5_d1",
      "label": "Inter-Node Bell State Measurement",
      "description": "Executing BSM on two un-entangled qubits from distinct Bell pairs.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t3_s5_d2",
      "label": "Long-Distance Quantum Network Links",
      "description": "Establishing entangled links across global distances via quantum repeater nodes.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t4",
      "label": "Multi-Qubit Entangled States (GHZ & W States)",
      "description": "Multipartite entanglement structures beyond 2-qubit systems.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t4_s1",
      "label": "GHZ (Greenberger-Horne-Zeilinger) State (|GHZ> = (|000> + |111>)/sqrt(2))",
      "description": "Maximally entangled N-qubit state exhibiting extreme sensitivity to particle loss.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t4_s1_d1",
      "label": "N-Qubit Superposition Generation",
      "description": "Generating |GHZ_N> using 1 Hadamard and N-1 sequential CNOT gates.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t4_s1_d2",
      "label": "Total Entanglement Collapse on Single Qubit Trace",
      "description": "Tracing out any single qubit reduces remaining N-1 qubits to an un-entangled mixed state.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t4_s2",
      "label": "W State (|W> = (|100> + |010> + |001>)/sqrt(3))",
      "description": "Multipartite state distributing single excitation unit across N qubits.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t4_s2_d1",
      "label": "Robustness Against Qubit Loss",
      "description": "Tracing out any single qubit leaves remaining N-1 qubits partially entangled.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t4_s2_d2",
      "label": "Quantum Memory & Storage Applications",
      "description": "Storing quantum information in resilient multipartite states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t4_s3",
      "label": "Cluster States & Measurement-Based Quantum Computing (MBQC)",
      "description": "Universal quantum computing architecture driven exclusively by single-qubit measurements on grid states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t4_s3_d1",
      "label": "Highly Entangled 2D Grid Cluster States",
      "description": "Preparing initial 2D lattice cluster states using CZ entangling gates.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t4_s3_d2",
      "label": "Measurement-Driven Computation Progression",
      "description": "Executing quantum logic by measuring lattice qubits sequentially in customized bases.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t4_s4",
      "label": "Entanglement Entropy (Von Neumann Entropy S(rho_A))",
      "description": "Quantifying bipartite entanglement entropy using reduced density matrices.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t4_s4_d1",
      "label": "Formula S(rho_A) = -Tr(rho_A * log2(rho_A))",
      "description": "Computing von Neumann entropy of reduced subsystem A.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t4_s4_d2",
      "label": "Maximum Entropy for Maximally Entangled States",
      "description": "Achieving S(rho_A) = 1 for 2-qubit maximally entangled Bell pairs.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t4_s5",
      "label": "Quantum Key Distribution (QKD) BB84 Protocol",
      "description": "Establishing provably secure symmetric cryptographic keys using quantum state properties.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t4_s5_d1",
      "label": "Dual Basis Encoding (Z-Basis {0,1}, X-Basis {+, -})",
      "description": "Transmitting single photons randomly prepared in one of two non-orthogonal bases.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t4_s5_d2",
      "label": "Eavesdropping Detection via Error Rate (QBER > 11%)",
      "description": "Detecting intercept-resend eavesdropping by monitoring quantum bit error rates.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t5",
      "label": "Quantum Entanglement & Non-Locality Topic 5",
      "description": "Detailed first-principles mechanics for Quantum Entanglement & Non-Locality topic 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t5_s1",
      "label": "Quantum Entanglement & Non-Locality Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Entanglement & Non-Locality Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t5_s1_d1",
      "label": "Quantum Entanglement & Non-Locality Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Entanglement & Non-Locality Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t5_s1_d2",
      "label": "Quantum Entanglement & Non-Locality Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Entanglement & Non-Locality Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t5_s2",
      "label": "Quantum Entanglement & Non-Locality Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Entanglement & Non-Locality Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t5_s2_d1",
      "label": "Quantum Entanglement & Non-Locality Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Entanglement & Non-Locality Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t5_s2_d2",
      "label": "Quantum Entanglement & Non-Locality Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Entanglement & Non-Locality Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t5_s3",
      "label": "Quantum Entanglement & Non-Locality Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Entanglement & Non-Locality Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t5_s3_d1",
      "label": "Quantum Entanglement & Non-Locality Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Entanglement & Non-Locality Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t5_s3_d2",
      "label": "Quantum Entanglement & Non-Locality Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Entanglement & Non-Locality Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t5_s4",
      "label": "Quantum Entanglement & Non-Locality Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Entanglement & Non-Locality Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t5_s4_d1",
      "label": "Quantum Entanglement & Non-Locality Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Entanglement & Non-Locality Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t5_s4_d2",
      "label": "Quantum Entanglement & Non-Locality Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Entanglement & Non-Locality Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t5_s5",
      "label": "Quantum Entanglement & Non-Locality Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Entanglement & Non-Locality Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t5_s5_d1",
      "label": "Quantum Entanglement & Non-Locality Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Entanglement & Non-Locality Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t5_s5_d2",
      "label": "Quantum Entanglement & Non-Locality Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Entanglement & Non-Locality Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t6",
      "label": "Quantum Entanglement & Non-Locality Topic 6",
      "description": "Detailed first-principles mechanics for Quantum Entanglement & Non-Locality topic 6.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t6_s1",
      "label": "Quantum Entanglement & Non-Locality Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Entanglement & Non-Locality Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t6_s1_d1",
      "label": "Quantum Entanglement & Non-Locality Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Entanglement & Non-Locality Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t6_s1_d2",
      "label": "Quantum Entanglement & Non-Locality Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Entanglement & Non-Locality Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t6_s2",
      "label": "Quantum Entanglement & Non-Locality Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Entanglement & Non-Locality Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t6_s2_d1",
      "label": "Quantum Entanglement & Non-Locality Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Entanglement & Non-Locality Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t6_s2_d2",
      "label": "Quantum Entanglement & Non-Locality Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Entanglement & Non-Locality Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t6_s3",
      "label": "Quantum Entanglement & Non-Locality Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Entanglement & Non-Locality Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t6_s3_d1",
      "label": "Quantum Entanglement & Non-Locality Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Entanglement & Non-Locality Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t6_s3_d2",
      "label": "Quantum Entanglement & Non-Locality Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Entanglement & Non-Locality Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t6_s4",
      "label": "Quantum Entanglement & Non-Locality Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Entanglement & Non-Locality Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t6_s4_d1",
      "label": "Quantum Entanglement & Non-Locality Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Entanglement & Non-Locality Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t6_s4_d2",
      "label": "Quantum Entanglement & Non-Locality Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Entanglement & Non-Locality Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t6_s5",
      "label": "Quantum Entanglement & Non-Locality Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Entanglement & Non-Locality Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t6_s5_d1",
      "label": "Quantum Entanglement & Non-Locality Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Entanglement & Non-Locality Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p3_t6_s5_d2",
      "label": "Quantum Entanglement & Non-Locality Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Entanglement & Non-Locality Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4",
      "label": "Quantum Algorithms & Speedups",
      "description": "Quantum Phase Estimation, Shor's factoring, Grover's search $\\mathcal{O}(\\sqrt{N})$, and Quantum Fourier Transform.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t1",
      "label": "Quantum Fourier Transform (QFT)",
      "description": "Quantum analogue of the discrete Fourier transform mapping state amplitudes to frequency space.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t1_s1",
      "label": "QFT Mathematical Transformation Formula",
      "description": "Mapping basis state |j> to sum(e^{2pi*i*j*k / 2^N} |k>) / sqrt(2^N).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t1_s1_d1",
      "label": "Unitary Change of Basis Matrix",
      "description": "Converting computational basis states into phase-encoded frequency representations.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t1_s1_d2",
      "label": "Exponential Speedup vs Classical FFT (O(N * 2^N) down to O(N^2))",
      "description": "Executing Fourier transforms in O(N^2) gates for 2^N data elements.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t1_s2",
      "label": "QFT Quantum Circuit Architecture",
      "description": "Synthesizing QFT circuits using Hadamard gates and controlled phase rotation gates R_k.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t1_s2_d1",
      "label": "Controlled Phase Rotations R_k = [[1, 0], [0, e^{2pi*i / 2^k}]]",
      "description": "Applying fractional phase rotations controlled by target qubit states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t1_s2_d2",
      "label": "Qubit Bit-Reversal SWAP Layer",
      "description": "Reversing qubit ordering at circuit termination to output correct significance order.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t1_s3",
      "label": "Inverse QFT (QFT^dagger)",
      "description": "Reversing phase-encoded frequency data back into computational basis measurement outcomes.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t1_s3_d1",
      "label": "Negative Phase Rotation Execution",
      "description": "Applying R_k^dagger gates to undo phase shifts during phase estimation algorithms.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t1_s3_d2",
      "label": "Phase Estimation Signal Recovery",
      "description": "Extracting high-precision binary representations of quantum eigenvalues.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t1_s4",
      "label": "Approximate QFT Gate Reduction",
      "description": "Pruning small controlled-phase rotations R_k (large k) to reduce circuit depth.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t1_s4_d1",
      "label": "O(N log N) Circuit Depth Reduction",
      "description": "Omitting phase rotations smaller than hardware error thresholds.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t1_s4_d2",
      "label": "Algorithmic Noise Tolerance",
      "description": "Maintaining high algorithm success rates while significantly shortening circuit execution times.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t1_s5",
      "label": "QFT Inability to Read Out Full Amplitude Vector",
      "description": "Understanding that QFT amplitudes cannot be read out directly without collapsing the state.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t1_s5_d1",
      "label": "Sampling vs Full State Vector Access",
      "description": "Recognizing that measuring QFT outputs yields single basis states, not full amplitude arrays.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t1_s5_d2",
      "label": "Subroutine Integration Role",
      "description": "Utilizing QFT exclusively as an internal subroutine within larger quantum algorithms.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t2",
      "label": "Quantum Phase Estimation (QPE)",
      "description": "Key subroutine estimating the phase theta of an eigenvalue U|u> = e^{2pi*i*theta}|u>.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t2_s1",
      "label": "QPE Circuit Register Architecture",
      "description": "Structuring circuits with an evaluation register (t qubits) and a target state register.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t2_s1_d1",
      "label": "Precision Register Initial Superposition (H^{x t})",
      "description": "Preparing t evaluation qubits in an equal superposition state.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t2_s1_d2",
      "label": "Target Register Eigenstate Preparation (|u>)",
      "description": "Initializing target qubits in eigenstate |u> of unitary operator U.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t2_s2",
      "label": "Controlled Unitary Powers (C-U^{2^j})",
      "description": "Applying successive controlled powers of U to inject phase values into the precision register.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t2_s2_d1",
      "label": "Phase Kickback Mechanism",
      "description": "Transferring eigenvalue phases into evaluation qubit amplitudes via controlled-U gates.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t2_s2_d2",
      "label": "Binary Phase Encoding sum(2^{2pi*i * 2^j * theta})",
      "description": "Encoding phase theta in binary fraction form across evaluation qubits.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t2_s3",
      "label": "Inverse QFT Application & Measurement",
      "description": "Applying QFT^dagger to precision qubits to extract binary representation of phase theta.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t2_s3_d1",
      "label": "High-Probability Phase Measurement Output",
      "description": "Measuring evaluation qubits to yield t-bit binary representation of theta.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t2_s3_d2",
      "label": "Success Probability Bound (P >= 4 / pi^2 approx 81%)",
      "description": "Guaranteeing high probability of measuring closest t-bit binary approximation.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t2_s4",
      "label": "QPE Precision vs Qubit Count Scaling (t = n + log(2 + 1/2epsilon))",
      "description": "Scaling evaluation qubit count t to achieve target phase precision and success confidence.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t2_s4_d1",
      "label": "n-Bit Phase Accuracy Guarantee",
      "description": "Adding additional qubits to guarantee n-bit precision with confidence 1-epsilon.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t2_s4_d2",
      "label": "Polynomial Resource Overhead",
      "description": "Achieving exponential phase measurement precision scaling with linear qubit additions.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t2_s5",
      "label": "Applications in HHL & Quantum Chemistry",
      "description": "Deploying QPE to solve linear systems of equations (HHL) and compute molecular ground energies.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t2_s5_d1",
      "label": "HHL Algorithm Matrix Inversion (Ax = b)",
      "description": "Solving linear systems in O(log(N)) time using QPE phase inversion.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t2_s5_d2",
      "label": "Molecular Energy Eigenvalue Estimation",
      "description": "Estimating electronic structure Hamiltonians for drug discovery and materials science.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t3",
      "label": "Shor's Order-Finding & Factoring Algorithm",
      "description": "Polynomial-time quantum algorithm breaking RSA encryption by finding order r of modular exponentiations.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t3_s1",
      "label": "Reduction of Factoring to Order-Finding",
      "description": "Mapping integer prime factorization of N = p*q to finding period r such that x^r = 1 (mod N).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t3_s1_d1",
      "label": "Greatest Common Divisor (GCD) Extraction",
      "description": "Computing prime factors gcd(x^{r/2} - 1, N) and gcd(x^{r/2} + 1, N).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t3_s1_d2",
      "label": "Even Order r Requirement",
      "description": "Selecting random coprime integers x until order r is even and x^{r/2} != -1 (mod N).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t3_s2",
      "label": "Modular Exponentiation Circuit f(a) = x^a mod N",
      "description": "Constructing reversible quantum arithmetic circuits to evaluate modular exponentiation.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t3_s2_d1",
      "label": "Reversible Quantum Multipliers & Adders",
      "description": "Building modular arithmetic circuits using Toffoli and elementary gates.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t3_s2_d2",
      "label": "Dominant Gate Count Bottleneck (O(L^3) Gates)",
      "description": "Accounting for modular exponentiation as the primary computational cost of Shor's algorithm.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t3_s3",
      "label": "Quantum Phase Estimation for Order Finding",
      "description": "Using QPE on modular exponentiation unitary operator U|y> = |x*y mod N> to measure period r.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t3_s3_d1",
      "label": "Eigenvalue Phase Format s/r",
      "description": "Measuring phase values corresponding to integer fractions s/r.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t3_s3_d2",
      "label": "Continued Fractions Algorithm Post-Processing",
      "description": "Processing measured phase floats on classical computers to extract exact integer order r.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t3_s4",
      "label": "Complexity Comparison: Quantum O(L^3) vs Classical GNFS O(exp(L^{1/3}))",
      "description": "Achieving exponential speedup over General Number Field Sieve (GNFS) classical algorithms.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t3_s4_d1",
      "label": "Polynomial Quantum Runtime O(L^3)",
      "description": "Factoring L-bit integers in polynomial time on fault-tolerant quantum computers.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t3_s4_d2",
      "label": "2048-Bit RSA Threat Threshold (~4000 Logical Qubits)",
      "description": "Requiring roughly 4,000 logical qubits (~millions of physical qubits) to break RSA-2048.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t3_s5",
      "label": "Discrete Logarithm Generalization (ECC Impact)",
      "description": "Adapting Shor's algorithm to break Elliptic Curve Cryptography (ECDSA, Ed25519).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t3_s5_d1",
      "label": "Order Finding in Elliptic Curve Groups",
      "description": "Finding private scalar keys k given public curve points Q = [k]P.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t3_s5_d2",
      "label": "Smaller Qubit Count Threat to ECC",
      "description": "Breaking 256-bit ECC using fewer logical qubits (~2,300 logical qubits) than RSA-2048.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t4",
      "label": "Grover's Unstructured Search Algorithm",
      "description": "Quantum search algorithm achieving quadratic speedup O(sqrt(N)) for unstructured database search.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t4_s1",
      "label": "Phase Oracle Operator O|x> = (-1)^{f(x)}|x>",
      "description": "Flipping the sign of marked solution state amplitudes |w> where f(w) = 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t4_s1_d1",
      "label": "Target State Phase Inversion O|w> = -|w>",
      "description": "Injecting a pi phase shift exclusively into winning state components.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t4_s1_d2",
      "label": "Black-Box Function Evaluation",
      "description": "Evaluating oracle conditions without revealing solution indices.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t4_s2",
      "label": "Grover Diffusion Operator (Inversion About the Mean)",
      "description": "Reflecting state vector amplitudes around the average mean amplitude across all states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t4_s2_d1",
      "label": "Diffusion Matrix Formula D = 2|s><s| - I",
      "description": "Applying Hadamard, Pauli-X, multi-controlled Z, and Hadamard gate sequences.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t4_s2_d2",
      "label": "Amplitude Amplification Step",
      "description": "Increasing target state amplitude while decreasing non-target state amplitudes.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t4_s3",
      "label": "Geometric State Rotation Angle theta approx 2/sqrt(N)",
      "description": "Visualizing Grover iterations as 2D rotations in the subspace spanned by target and non-target states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t4_s3_d1",
      "label": "State Rotation Step (theta = 2 * arcsin(1/sqrt(N)))",
      "description": "Rotating state vector by angle theta toward target state |w> per iteration.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t4_s3_d2",
      "label": "Optimal Iteration Count R approx (pi/4) * sqrt(N)",
      "description": "Executing roughly (pi/4)*sqrt(N) iterations to maximize target state probability near 100%.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t4_s4",
      "label": "Over-Rotation Risk & Exact Grover Search",
      "description": "Decreasing target state success probability if iterations exceed optimal count R.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t4_s4_d1",
      "label": "Periodic Probability Oscillation (sin^2((2R+1)theta/2))",
      "description": "Recognizing that continuing iterations past R rotates state vector past target |w>.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t4_s4_d2",
      "label": "Fixed-Point Grover Variants",
      "description": "Modifying phase angles to guarantee monotonic convergence without over-rotation risks.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t4_s5",
      "label": "Multi-Target Grover Scaling & Quantum Counting",
      "description": "Searching databases containing M unknown target solutions.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t4_s5_d1",
      "label": "Multi-Target Iteration Count R approx (pi/4) * sqrt(N/M)",
      "description": "Accelerating search execution as target solution count M increases.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t4_s5_d2",
      "label": "Quantum Counting Algorithm (QPE + Grover)",
      "description": "Estimating target count M in O(sqrt(N)) time using Quantum Phase Estimation on Grover operators.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t5",
      "label": "Quantum Algorithms & Speedups Topic 5",
      "description": "Detailed first-principles mechanics for Quantum Algorithms & Speedups topic 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t5_s1",
      "label": "Quantum Algorithms & Speedups Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Algorithms & Speedups Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t5_s1_d1",
      "label": "Quantum Algorithms & Speedups Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Algorithms & Speedups Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t5_s1_d2",
      "label": "Quantum Algorithms & Speedups Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Algorithms & Speedups Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t5_s2",
      "label": "Quantum Algorithms & Speedups Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Algorithms & Speedups Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t5_s2_d1",
      "label": "Quantum Algorithms & Speedups Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Algorithms & Speedups Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t5_s2_d2",
      "label": "Quantum Algorithms & Speedups Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Algorithms & Speedups Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t5_s3",
      "label": "Quantum Algorithms & Speedups Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Algorithms & Speedups Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t5_s3_d1",
      "label": "Quantum Algorithms & Speedups Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Algorithms & Speedups Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t5_s3_d2",
      "label": "Quantum Algorithms & Speedups Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Algorithms & Speedups Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t5_s4",
      "label": "Quantum Algorithms & Speedups Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Algorithms & Speedups Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t5_s4_d1",
      "label": "Quantum Algorithms & Speedups Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Algorithms & Speedups Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t5_s4_d2",
      "label": "Quantum Algorithms & Speedups Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Algorithms & Speedups Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t5_s5",
      "label": "Quantum Algorithms & Speedups Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Algorithms & Speedups Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t5_s5_d1",
      "label": "Quantum Algorithms & Speedups Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Algorithms & Speedups Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t5_s5_d2",
      "label": "Quantum Algorithms & Speedups Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Algorithms & Speedups Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t6",
      "label": "Quantum Algorithms & Speedups Topic 6",
      "description": "Detailed first-principles mechanics for Quantum Algorithms & Speedups topic 6.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t6_s1",
      "label": "Quantum Algorithms & Speedups Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Algorithms & Speedups Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t6_s1_d1",
      "label": "Quantum Algorithms & Speedups Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Algorithms & Speedups Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t6_s1_d2",
      "label": "Quantum Algorithms & Speedups Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Algorithms & Speedups Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t6_s2",
      "label": "Quantum Algorithms & Speedups Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Algorithms & Speedups Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t6_s2_d1",
      "label": "Quantum Algorithms & Speedups Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Algorithms & Speedups Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t6_s2_d2",
      "label": "Quantum Algorithms & Speedups Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Algorithms & Speedups Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t6_s3",
      "label": "Quantum Algorithms & Speedups Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Algorithms & Speedups Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t6_s3_d1",
      "label": "Quantum Algorithms & Speedups Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Algorithms & Speedups Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t6_s3_d2",
      "label": "Quantum Algorithms & Speedups Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Algorithms & Speedups Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t6_s4",
      "label": "Quantum Algorithms & Speedups Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Algorithms & Speedups Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t6_s4_d1",
      "label": "Quantum Algorithms & Speedups Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Algorithms & Speedups Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t6_s4_d2",
      "label": "Quantum Algorithms & Speedups Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Algorithms & Speedups Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t6_s5",
      "label": "Quantum Algorithms & Speedups Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Algorithms & Speedups Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t6_s5_d1",
      "label": "Quantum Algorithms & Speedups Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Algorithms & Speedups Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p4_t6_s5_d2",
      "label": "Quantum Algorithms & Speedups Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Algorithms & Speedups Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5",
      "label": "Quantum Error Correction (QEC)",
      "description": "Surface codes, stabilizer formalism, syndrome measurement, and logical vs physical qubit scaling.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t1",
      "label": "Stabilizer Formalism & Error Operators",
      "description": "Mathematical framework describing error-correcting codes using Pauli group stabilizer operators.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t1_s1",
      "label": "Stabilizer Group S (S_i |psi_L> = +1 |psi_L>)",
      "description": "Abelian subgroup of Pauli operators for which valid logical code states are +1 eigenstates.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t1_s1_d1",
      "label": "Commutative Operator Requirement ([S_i, S_j] = 0)",
      "description": "Requiring all stabilizer generators to commute to allow simultaneous measurement.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t1_s1_d2",
      "label": "Code Space Definition (Projection onto +1 Subspace)",
      "description": "Defining logical qubit code space as the simultaneous +1 eigenspace of all generators.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t1_s2",
      "label": "Disjoint Pauli Error Detection (X, Z, and Y = iXZ)",
      "description": "Detecting single-qubit bit-flip (X), phase-flip (Z), and combined (Y) errors.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t1_s2_d1",
      "label": "Anti-Commutation Syndrome Signal ({E, S_i} = 0)",
      "description": "Pauli errors anti-commuting with stabilizers yield -1 measurement eigenvalues.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t1_s2_d2",
      "label": "Discretization of Continuous Quantum Errors",
      "description": "Projecting arbitrary continuous phase/angle errors into discrete Pauli errors via measurement.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t1_s3",
      "label": "3-Qubit Bit-Flip & Phase-Flip Codes",
      "description": "Elementary error correcting codes protecting against single bit-flip or phase-flip errors.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t1_s3_d1",
      "label": "Bit-Flip Encoding |0_L> = |000>, |1_L> = |111>",
      "description": "Protecting against single X errors using Z_1 Z_2 and Z_2 Z_3 syndrome checks.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t1_s3_d2",
      "label": "Phase-Flip Encoding |0_L> = |+++>, |1_L> = |--->",
      "description": "Protecting against single Z errors using X_1 X_2 and X_2 X_3 syndrome checks.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t1_s4",
      "label": "Shor 9-Qubit Code (Concatenated Code)",
      "description": "First quantum code protecting against arbitrary single-qubit errors by concatenating bit and phase codes.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t1_s4_d1",
      "label": "Nested Encoding Architecture",
      "description": "Encoding single logical qubits into 9 physical qubits using 8 stabilizer generators.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t1_s4_d2",
      "label": "Simultaneous X and Z Error Correction",
      "description": "Correcting arbitrary single-qubit Pauli X, Y, or Z errors on any physical qubit.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t1_s5",
      "label": "Steane 7-Qubit CSS Code",
      "description": "Calderbank-Shor-Steane (CSS) code mapping classical Hamming codes to quantum stabilizer codes.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t1_s5_d1",
      "label": "Dual Classical 7,4 Hamming Code Structure",
      "description": "Using 3 X-type and 3 Z-type generators derived from parity check matrices.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t1_s5_d2",
      "label": "Transversal Gate Property",
      "description": "Executing logical Clifford gates (H, S, CNOT) bitwise across physical qubits without error propagation.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t2",
      "label": "Surface Code Architecture (2D Lattice)",
      "description": "Leading fault-tolerant QEC architecture operating on 2D nearest-neighbor physical qubit arrays.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t2_s1",
      "label": "Data Qubits & Measure (Ancilla) Qubits Layout",
      "description": "Arranging physical qubits on a 2D square lattice alternating data and syndrome measurement qubits.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t2_s1_d1",
      "label": "Square Grid Planar Topology",
      "description": "Interleaving data qubits with X-type (star) and Z-type (plaquette) ancilla qubits.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t2_s1_d2",
      "label": "Nearest-Neighbor 2-Qubit Gate Radius",
      "description": "Requiring 2-qubit entangling gates strictly between adjacent 2D lattice neighbors.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t2_s2",
      "label": "Star (X-Type) & Plaquette (Z-Type) Stabilizers",
      "description": "Syndrome check operators measuring 4 surrounding data qubits.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t2_s2_d1",
      "label": "Star Operator A_v = X_1 X_2 X_3 X_4",
      "description": "Detecting phase-flip (Z) errors on 4 adjacent vertex data qubits.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t2_s2_d2",
      "label": "Plaquette Operator B_p = Z_1 Z_2 Z_3 Z_4",
      "description": "Detecting bit-flip (X) errors on 4 adjacent face data qubits.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t2_s3",
      "label": "Syndrome Measurement Cycles & Ancilla Readout",
      "description": "Continuously executing CNOT/CZ gate sequences to extract stabilizer eigenvalues into ancillas.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t2_s3_d1",
      "label": "4-Step Entangling Gate Sequence",
      "description": "Executing CNOT gates between data qubits and ancillas to transfer error information.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t2_s3_d2",
      "label": "Non-Destructive Data Qubit Auditing",
      "description": "Extracting error syndromes without measuring or collapsing data qubit superpositions.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t2_s4",
      "label": "Defect Creation & Lattice Surgery Logic",
      "description": "Executing logical qubit operations by manipulating boundaries and defects on surface code sheets.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t2_s4_d1",
      "label": "Puncturing & Defect Pair Braiding",
      "description": "Performing logical gates by moving defect holes around each other on 2D lattices.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t2_s4_d2",
      "label": "Lattice Surgery Patch Merging & Splitting",
      "description": "Executing logical CNOT gates by merging and splitting adjacent surface code patches.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t2_s5",
      "label": "Fault-Tolerant Threshold Theorem (~1% Physical Error Rate)",
      "description": "Proving that logical error rates decay exponentially if physical error rates fall below threshold.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t2_s5_d1",
      "label": "Surface Code 0.7-1.0% Threshold Bound",
      "description": "Achieving fault tolerance with physical gate error rates below ~1%.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t2_s5_d2",
      "label": "Exponential Suppression Law P_logical approx exp(-c * d)",
      "description": "Suppressing logical errors exponentially by increasing code distance d.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t3",
      "label": "Syndrome Decoding & Minimum Weight Perfect Matching",
      "description": "Classical algorithms analyzing 3D error syndrome histories to locate physical error paths.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t3_s1",
      "label": "3D Syndrome Graph (Space-Time Lattice)",
      "description": "Constructing 3D graphs mapping error syndromes across 2D spatial dimensions and time cycles.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t3_s1_d1",
      "label": "Defect Node Creation (-1 Eigenvalues)",
      "description": "Marking space-time graph nodes where stabilizer measurements change value.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t3_s1_d2",
      "label": "Measurement Error Time String Paths",
      "description": "Tracking ancilla measurement errors that manifest as vertical time-like defect pairs.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t3_s2",
      "label": "Minimum Weight Perfect Matching (MWPM) Decoder",
      "description": "Edmonds' Blossom algorithm pairing syndrome defect nodes with minimum path weights.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t3_s2_d1",
      "label": "Graph Edge Weight Assignment (w = -log(p_error))",
      "description": "Assigning edge weights based on physical error probabilities.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t3_s2_d2",
      "label": "Polynomial Time O(V^3) Matching Execution",
      "description": "Pairing syndrome defects to identify most probable physical error chains.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t3_s3",
      "label": "Union-Find & Neural Network Decoders",
      "description": "Ultra-fast decoding algorithms designed for real-time hardware implementation.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t3_s3_d1",
      "label": "Union-Find Almost-Linear Time O(N alpha(N))",
      "description": "Growing cluster boundaries around defects to decode syndromes in near-linear time.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t3_s3_d2",
      "label": "Deep Neural Network Syndrome Decoders",
      "description": "Training neural networks to predict error chains from syndrome patterns in sub-microseconds.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t3_s4",
      "label": "Logical Error Creation (Un-detectable Chains)",
      "description": "Failure mode where physical errors form chains spanning the full code distance d.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t3_s4_d1",
      "label": "Code Distance d Boundary Spanning Chains",
      "description": "Forming error paths of length >= d/2 that fool decoders into applying incorrect corrections.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t3_s4_d2",
      "label": "Logical Operator Inversion (X_L or Z_L Flip)",
      "description": "Inducing un-intended logical state flips due to decoding mis-identifications.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t3_s5",
      "label": "Real-Time Hardware Decoding Latency Constraints",
      "description": "Requirement to decode syndromes faster than the physical QEC cycle time (~1 microsecond).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t3_s5_d1",
      "label": "FPGA & ASIC Hardware Decoder Chips",
      "description": "Implementing decoders on custom silicon to match microsecond QEC cycle speeds.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t3_s5_d2",
      "label": "Decoding Backlog Avoidance (Sub-Microsecond Latency)",
      "description": "Preventing syndrome data accumulation during long logical computations.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t4",
      "label": "Logical vs Physical Qubit Scaling Costs",
      "description": "Quantifying physical hardware resources required to construct reliable fault-tolerant quantum computers.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t4_s1",
      "label": "Code Distance d & Physical Qubit Overhead (N = 2 * d^2)",
      "description": "Scaling physical qubit count per logical qubit as distance d increases.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t4_s1_d1",
      "label": "Distance d=3 (18 Physical Qubits per Logical Qubit)",
      "description": "Minimal surface code patch suppressing single physical errors.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t4_s1_d2",
      "label": "Distance d=27 (1,458 Physical Qubits per Logical Qubit)",
      "description": "Large surface code patch achieving 10^{-15} logical error rates for long algorithms.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t4_s2",
      "label": "Magic State Distillation Infrastructure",
      "description": "Producing high-fidelity non-Clifford T gates using noisy physical T states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t4_s2_d1",
      "label": "Bravyi-Kitaev 15-to-1 Distillation Factories",
      "description": "Consuming 15 noisy T states to produce 1 high-fidelity magic T state.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t4_s2_d2",
      "label": "90%+ Physical Qubit Footprint Allocation",
      "description": "Dedicating over 90% of total physical hardware qubits to magic state distillation factories.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t4_s3",
      "label": "Physical Gate Error Rate Scaling Impact",
      "description": "Analyzing how physical error rates dictate required code distance d.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t4_s3_d1",
      "label": "10^{-3} Physical Error (Distance d=27 Required)",
      "description": "Requiring massive physical qubit counts when operating near fault tolerance thresholds.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t4_s3_d2",
      "label": "10^{-4} Physical Error (Distance d=9 Required)",
      "description": "Reducing physical qubit overhead per logical qubit by 10x with improved physical hardware.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t4_s4",
      "label": "Logical Circuit Execution Time Overhead",
      "description": "Measuring time dilation caused by executing multi-cycle QEC syndrome passes.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t4_s4_d1",
      "label": "Logical Gate Time = d * Physical QEC Cycle Time",
      "description": "Requiring d physical measurement cycles to execute single logical state operations.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t4_s4_d2",
      "label": "Microsecond-to-Millisecond Logical Gate Speeds",
      "description": "Executing logical gates in milliseconds on superconducting transmon architectures.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t4_s5",
      "label": "Million-Qubit Hardware Scale Imperative",
      "description": "Understanding that practical fault-tolerant algorithms require 1M+ physical qubits.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t4_s5_d1",
      "label": "2,000 Logical Qubits -> ~2,000,000 Physical Qubits",
      "description": "Scaling physical chip production to million-qubit levels for useful quantum chemistry.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t4_s5_d2",
      "label": "Cryogenic & Wiring Scalability Bottlenecks",
      "description": "Engineering massive cryogenic cooling and control wiring for million-qubit arrays.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t5",
      "label": "Quantum Error Correction (QEC) Topic 5",
      "description": "Detailed first-principles mechanics for Quantum Error Correction (QEC) topic 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t5_s1",
      "label": "Quantum Error Correction (QEC) Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Error Correction (QEC) Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t5_s1_d1",
      "label": "Quantum Error Correction (QEC) Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Error Correction (QEC) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t5_s1_d2",
      "label": "Quantum Error Correction (QEC) Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Error Correction (QEC) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t5_s2",
      "label": "Quantum Error Correction (QEC) Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Error Correction (QEC) Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t5_s2_d1",
      "label": "Quantum Error Correction (QEC) Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Error Correction (QEC) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t5_s2_d2",
      "label": "Quantum Error Correction (QEC) Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Error Correction (QEC) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t5_s3",
      "label": "Quantum Error Correction (QEC) Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Error Correction (QEC) Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t5_s3_d1",
      "label": "Quantum Error Correction (QEC) Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Error Correction (QEC) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t5_s3_d2",
      "label": "Quantum Error Correction (QEC) Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Error Correction (QEC) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t5_s4",
      "label": "Quantum Error Correction (QEC) Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Error Correction (QEC) Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t5_s4_d1",
      "label": "Quantum Error Correction (QEC) Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Error Correction (QEC) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t5_s4_d2",
      "label": "Quantum Error Correction (QEC) Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Error Correction (QEC) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t5_s5",
      "label": "Quantum Error Correction (QEC) Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Error Correction (QEC) Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t5_s5_d1",
      "label": "Quantum Error Correction (QEC) Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Error Correction (QEC) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t5_s5_d2",
      "label": "Quantum Error Correction (QEC) Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Error Correction (QEC) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t6",
      "label": "Quantum Error Correction (QEC) Topic 6",
      "description": "Detailed first-principles mechanics for Quantum Error Correction (QEC) topic 6.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t6_s1",
      "label": "Quantum Error Correction (QEC) Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Error Correction (QEC) Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t6_s1_d1",
      "label": "Quantum Error Correction (QEC) Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Error Correction (QEC) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t6_s1_d2",
      "label": "Quantum Error Correction (QEC) Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Error Correction (QEC) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t6_s2",
      "label": "Quantum Error Correction (QEC) Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Error Correction (QEC) Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t6_s2_d1",
      "label": "Quantum Error Correction (QEC) Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Error Correction (QEC) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t6_s2_d2",
      "label": "Quantum Error Correction (QEC) Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Error Correction (QEC) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t6_s3",
      "label": "Quantum Error Correction (QEC) Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Error Correction (QEC) Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t6_s3_d1",
      "label": "Quantum Error Correction (QEC) Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Error Correction (QEC) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t6_s3_d2",
      "label": "Quantum Error Correction (QEC) Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Error Correction (QEC) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t6_s4",
      "label": "Quantum Error Correction (QEC) Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Error Correction (QEC) Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t6_s4_d1",
      "label": "Quantum Error Correction (QEC) Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Error Correction (QEC) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t6_s4_d2",
      "label": "Quantum Error Correction (QEC) Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Error Correction (QEC) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t6_s5",
      "label": "Quantum Error Correction (QEC) Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Error Correction (QEC) Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t6_s5_d1",
      "label": "Quantum Error Correction (QEC) Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Error Correction (QEC) Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p5_t6_s5_d2",
      "label": "Quantum Error Correction (QEC) Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Error Correction (QEC) Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6",
      "label": "Physical Quantum Hardware Implementations",
      "description": "Superconducting transmons, trapped ion systems, photonic circuits, and neutral atom arrays.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t1",
      "label": "Superconducting Transmon Qubits",
      "description": "Solid-state quantum processors utilizing non-linear LC circuits and Josephson junctions.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t1_s1",
      "label": "Josephson Junction Non-Linear Inductor (L_J)",
      "description": "Superconducting tunnel junction acting as a non-linear non-dissipative inductor.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t1_s1_d1",
      "label": "Anharmonic Energy Level Separation (E_01 != E_12)",
      "description": "Breaking uniform harmonic oscillator spacing to isolate a 2-level qubit subspace.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t1_s1_d2",
      "label": "Aluminium Oxide (Al2O3) Tunnel Barrier Specs",
      "description": "Fabricating sub-nanometer oxide barriers between superconducting aluminum layers.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t1_s2",
      "label": "Transmon Design Ratio (E_J / E_C >> 50)",
      "description": "Scaling Josephson energy E_J relative to charging energy E_C to suppress charge noise.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t1_s2_d1",
      "label": "Exponential Charge Noise Sensitivity Suppression",
      "description": "Suppressing dephasing caused by background charge fluctuations.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t1_s2_d2",
      "label": "Anharmonicity Reduction Tradeoff (alpha = -E_C)",
      "description": "Accepting minor anharmonicity reduction (alpha approx -200MHz) as a trade-off for stability.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t1_s3",
      "label": "Cryogenic Dilution Refrigerator Architecture (10-15 mK)",
      "description": "Cooling superconducting chips to sub-15-millikelvin temperatures using He3/He4 mixing.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t1_s3_d1",
      "label": "Thermal Excitation Suppression (k_B * T << h * f)",
      "description": "Suppressing thermal population of the |1> state at 5GHz operating frequencies.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t1_s3_d2",
      "label": "Multi-Stage Temperature Shielding (50K, 4K, 1K, 100mK, 10mK)",
      "description": "Attenuating thermal noise through stacked gold-plated copper plates.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t1_s4",
      "label": "Microwave Control Pulses & Dispersive Readout",
      "description": "Manipulating and reading transmon states using microwave pulses and coupled resonators.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t1_s4_d1",
      "label": "Single-Qubit XY Rotations via 5GHz Microwave Drives",
      "description": "Applying shaped Gaussian microwave pulses to execute Bloch sphere rotations.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t1_s4_d2",
      "label": "Dispersive Cavity Frequency Shift Readout",
      "description": "Reading qubit state by measuring state-dependent frequency shifts of coupled readout resonators.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t1_s5",
      "label": "Coherence Time Limits (T1 Relaxation & T2 Dephasing)",
      "description": "Decay times limiting maximum circuit execution depth on physical transmons.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t1_s5_d1",
      "label": "T1 Energy Relaxation Time (~100-300 microseconds)",
      "description": "Lifetime of the excited state |1> decaying spontaneously to ground state |0>.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t1_s5_d2",
      "label": "T2 Dephasing Time (~100-200 microseconds)",
      "description": "Loss of quantum phase coherence due to magnetic flux noise and material defects.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t2",
      "label": "Trapped Ion Quantum Processors",
      "description": "Atomic quantum processors trapping individual charged ions in electromagnetic fields.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t2_s1",
      "label": "Paul Trap RF Electromagnetic Confinement",
      "description": "Trapping single atomic ions (Yb-171+, Ca-40+) in 3D space using oscillating RF electric fields.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t2_s1_d1",
      "label": "Dynamic Quadrupole Electric Field Confinement",
      "description": "Creating 3D time-averaged pseudopotential wells to trap linear ion chains.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t2_s1_d2",
      "label": "Ultra-High Vacuum (UHV < 10^{-11} Torr) Chambers",
      "description": "Preventing background gas collisions from knocking ions out of traps.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t2_s2",
      "label": "Hyperfine Atomic Energy Level Qubits",
      "description": "Encoding qubits into stable ground-state hyperfine energy levels of single ions.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t2_s2_d1",
      "label": "Near-Infinite Spontaneous Emission Lifetime",
      "description": "Achieving intrinsic state lifetimes measured in years.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t2_s2_d2",
      "label": "Identical Atomic Qubit Perfection",
      "description": "Utilizing identical natural atoms, eliminating manufacturing variation across qubits.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t2_s3",
      "label": "Laser Cooling & Optical State Manipulation",
      "description": "Cooling trapped ions to near absolute zero motion using Doppler and sideband laser cooling.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t2_s3_d1",
      "label": "Motional Ground State Cooling (n_phonon = 0)",
      "description": "Cooling ion chain collective vibrational modes to quantum ground state motion.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t2_s3_d2",
      "label": "Resonant Laser Raman Transitions",
      "description": "Driving single-qubit rotations using precise laser pulse pairs.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t2_s4",
      "label": "Mølmer-Sørensen (MS) 2-Qubit Entangling Gate",
      "description": "Executing entangling gates between ions using shared collective vibrational modes.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t2_s4_d1",
      "label": "Bicromatic Laser Field Coupling",
      "description": "Coupling internal spin states to collective motional phonon modes.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t2_s4_d2",
      "label": "High-Fidelity 2-Qubit Gates (> 99.5%)",
      "description": "Achieving industry-leading 2-qubit gate fidelities across all-to-all connected ion chains.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t2_s5",
      "label": "Shuttling & QCCD Architecture (Quantinuum)",
      "description": "Quantum Charge-Coupled Device architecture shuttling physical ions across trap zones.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t2_s5_d1",
      "label": "Physical Ion Shuttling & Re-Ordering",
      "description": "Moving ions dynamically between execution, storage, and readout zones.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t2_s5_d2",
      "label": "All-to-All Qubit Connectivity",
      "description": "Executing 2-qubit gates between arbitrary qubit pairs without SWAP gate overhead.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t3",
      "label": "Photonic Quantum Computing",
      "description": "Optical quantum architecture encoding qubits into single photons traveling through integrated waveguide circuits.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t3_s1",
      "label": "Single-Photon Source & Path / Polarization Encoding",
      "description": "Generating single photons and encoding qubits into polarization angles or waveguide paths.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t3_s1_d1",
      "label": "Spontaneous Parametric Down-Conversion (SPDC)",
      "description": "Generating entangled photon pairs by pumping non-linear crystals with laser pulses.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t3_s1_d2",
      "label": "Dual-Rail Path Encoding (|0> = top, |1> = bottom)",
      "description": "Encoding qubit states based on photon presence in upper or lower optical waveguides.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t3_s2",
      "label": "Integrated Silicon Photonics Waveguides",
      "description": "Routing single photons through lithographically fabricated silicon nitride waveguide circuits.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t3_s2_d1",
      "label": "Mach-Zehnder Interferometer (MZI) Arrays",
      "description": "Constructing programmable single-qubit rotation gates using beam splitters and phase shifters.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t3_s2_d2",
      "label": "Room Temperature Photonic Execution",
      "description": "Running optical waveguide circuits at room temperature without cryostats.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t3_s3",
      "label": "Measurement-Based Linear Optical Quantum Computing (LOQC)",
      "description": "Executing quantum logic using beam splitters, phase shifters, and single-photon detectors.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t3_s3_d1",
      "label": "KLM (Knill-Laflamme-Milburn) Protocol",
      "description": "Proving that universal quantum computing is possible using linear optical elements and measurement.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t3_s3_d2",
      "label": "Probabilistic 2-Qubit Entangling Gates",
      "description": "Executing entangling gates probabilistically, conditioned on single-photon detector counts.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t3_s4",
      "label": "Superconducting Nanowire Single-Photon Detectors (SNSPD)",
      "description": "Ultra-sensitive cryogenic detectors counting individual single-photon arrivals.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t3_s4_d1",
      "label": "> 98% Quantum Detection Efficiency",
      "description": "Detecting single photons with near-perfect efficiency and low dark count rates.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t3_s4_d2",
      "label": "Sub-10-Picosecond Timing Jitter",
      "description": "Timestamping photon arrivals with picosecond temporal precision.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t3_s5",
      "label": "FBQC (Fault-Tolerant Fusion-Based Quantum Computing)",
      "description": "PsiQuantum architecture building 3D resource states by fusing small photonic cluster states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t3_s5_d1",
      "label": "2-Photon Fusion Measurement Gates",
      "description": "Executing projective fusion measurements to construct large 3D cluster states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t3_s5_d2",
      "label": "Mass-Manufactured Silicon Photonic Chips",
      "description": "Leveraging commercial semiconductor fabs to produce millions of optical components.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t4",
      "label": "Neutral Atom Arrays & Reconfigurable Topologies",
      "description": "Quantum processors trapping neutral alkali atoms (Rubidium, Cesium) in 2D/3D optical tweezers.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t4_s1",
      "label": "Optical Tweezer Laser Array Trapping",
      "description": "Trapping hundreds of individual neutral atoms using tightly focused laser beam arrays.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t4_s1_d1",
      "label": "Spatial Light Modulator (SLM) Array Generation",
      "description": "Creating dynamic 2D and 3D grids of optical dipole traps.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t4_s1_d2",
      "label": "Automated Real-Time Atom Assembly (Defect-Free Filling)",
      "description": "Rearranging trapped atoms dynamically to create defect-free filled arrays.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t4_s2",
      "label": "Rydberg State Blockade Mechanism",
      "description": "Exciting atoms to high principal quantum number Rydberg states to execute entangling gates.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t4_s2_d1",
      "label": "Rydberg Blockade Radius (R_b)",
      "description": "Preventing adjacent atoms within radius R_b from being simultaneously excited to Rydberg states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t4_s2_d2",
      "label": "Sub-Microsecond 2-Qubit CZ Gate Execution",
      "description": "Executing fast entangling gates mediated by strong dipole-dipole interactions.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t4_s3",
      "label": "Dynamic Array Reconfiguration During Execution",
      "description": "Physically moving trapped neutral atoms during circuit execution to change connectivity graphs.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t4_s3_d1",
      "label": "Optical Tweezer Shuttling Motions",
      "description": "Moving atom groups smoothly to bring distant qubits into entangling blockade range.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t4_s3_d2",
      "label": "Dynamic Non-Local Qubit Connectivity",
      "description": "Enabling non-local gate execution without executing long chains of SWAP gates.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t4_s4",
      "label": "Analogue Quantum Simulation Mode",
      "description": "Simulating complex spin models and condensed matter physics by tuning atom interactions directly.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t4_s4_d1",
      "label": "Ising & XY Spin Model Hamiltonians",
      "description": "Programming physical atom locations to emulate quantum magnetism and lattice models.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t4_s4_d2",
      "label": "Probing Quantum Phase Transitions",
      "description": "Observing quantum phase transitions in 200+ atom quantum simulators.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t4_s5",
      "label": "Dual-Element Neutral Atom Arrays (QuEra / Harvard)",
      "description": "Combining two distinct atomic species (e.g. Rb and Cs) to allow mid-circuit measurement.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t4_s5_d1",
      "label": "Crosstalk-Free Ancilla Qubit Measurement",
      "description": "Measuring species A ancillas without resonant light scattering disturbing species B data qubits.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t4_s5_d2",
      "label": "Hardware Enabling Surface Code QEC Cycles",
      "description": "Executing continuous QEC syndrome cycles on neutral atom hardware.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t5",
      "label": "Physical Quantum Hardware Implementations Topic 5",
      "description": "Detailed first-principles mechanics for Physical Quantum Hardware Implementations topic 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t5_s1",
      "label": "Physical Quantum Hardware Implementations Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Physical Quantum Hardware Implementations Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t5_s1_d1",
      "label": "Physical Quantum Hardware Implementations Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Physical Quantum Hardware Implementations Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t5_s1_d2",
      "label": "Physical Quantum Hardware Implementations Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Physical Quantum Hardware Implementations Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t5_s2",
      "label": "Physical Quantum Hardware Implementations Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Physical Quantum Hardware Implementations Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t5_s2_d1",
      "label": "Physical Quantum Hardware Implementations Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Physical Quantum Hardware Implementations Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t5_s2_d2",
      "label": "Physical Quantum Hardware Implementations Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Physical Quantum Hardware Implementations Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t5_s3",
      "label": "Physical Quantum Hardware Implementations Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Physical Quantum Hardware Implementations Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t5_s3_d1",
      "label": "Physical Quantum Hardware Implementations Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Physical Quantum Hardware Implementations Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t5_s3_d2",
      "label": "Physical Quantum Hardware Implementations Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Physical Quantum Hardware Implementations Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t5_s4",
      "label": "Physical Quantum Hardware Implementations Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Physical Quantum Hardware Implementations Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t5_s4_d1",
      "label": "Physical Quantum Hardware Implementations Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Physical Quantum Hardware Implementations Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t5_s4_d2",
      "label": "Physical Quantum Hardware Implementations Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Physical Quantum Hardware Implementations Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t5_s5",
      "label": "Physical Quantum Hardware Implementations Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Physical Quantum Hardware Implementations Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t5_s5_d1",
      "label": "Physical Quantum Hardware Implementations Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Physical Quantum Hardware Implementations Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t5_s5_d2",
      "label": "Physical Quantum Hardware Implementations Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Physical Quantum Hardware Implementations Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t6",
      "label": "Physical Quantum Hardware Implementations Topic 6",
      "description": "Detailed first-principles mechanics for Physical Quantum Hardware Implementations topic 6.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t6_s1",
      "label": "Physical Quantum Hardware Implementations Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Physical Quantum Hardware Implementations Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t6_s1_d1",
      "label": "Physical Quantum Hardware Implementations Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Physical Quantum Hardware Implementations Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t6_s1_d2",
      "label": "Physical Quantum Hardware Implementations Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Physical Quantum Hardware Implementations Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t6_s2",
      "label": "Physical Quantum Hardware Implementations Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Physical Quantum Hardware Implementations Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t6_s2_d1",
      "label": "Physical Quantum Hardware Implementations Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Physical Quantum Hardware Implementations Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t6_s2_d2",
      "label": "Physical Quantum Hardware Implementations Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Physical Quantum Hardware Implementations Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t6_s3",
      "label": "Physical Quantum Hardware Implementations Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Physical Quantum Hardware Implementations Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t6_s3_d1",
      "label": "Physical Quantum Hardware Implementations Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Physical Quantum Hardware Implementations Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t6_s3_d2",
      "label": "Physical Quantum Hardware Implementations Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Physical Quantum Hardware Implementations Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t6_s4",
      "label": "Physical Quantum Hardware Implementations Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Physical Quantum Hardware Implementations Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t6_s4_d1",
      "label": "Physical Quantum Hardware Implementations Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Physical Quantum Hardware Implementations Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t6_s4_d2",
      "label": "Physical Quantum Hardware Implementations Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Physical Quantum Hardware Implementations Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t6_s5",
      "label": "Physical Quantum Hardware Implementations Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Physical Quantum Hardware Implementations Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t6_s5_d1",
      "label": "Physical Quantum Hardware Implementations Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Physical Quantum Hardware Implementations Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p6_t6_s5_d2",
      "label": "Physical Quantum Hardware Implementations Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Physical Quantum Hardware Implementations Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7",
      "label": "Quantum Information Theory & Noise Models",
      "description": "Quantum channels, Kraus operators, decoherence mechanisms, trace distance, and randomized benchmarking.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t1",
      "label": "Quantum Channels & Kraus Representation",
      "description": "Completely Positive Trace-Preserving (CPTP) maps describing open quantum system transformations.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t1_s1",
      "label": "Kraus Operator Representation (E(rho) = sum(E_k * rho * E_k^dagger))",
      "description": "Decomposing quantum operations into sets of error operators satisfying sum(E_k^dagger * E_k) = I.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t1_s1_d1",
      "label": "Trace-Preserving Property Maintenance",
      "description": "Ensuring total state probability is conserved during noisy transformations.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t1_s1_d2",
      "label": "Operational System-Environment Interaction Model",
      "description": "Deriving Kraus operators from joint system-environment unitary evolution.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t1_s2",
      "label": "Bit-Flip & Phase-Flip Channel Models",
      "description": "Modeling discrete stochastic Pauli noise channels.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t1_s2_d1",
      "label": "Bit-Flip Channel (E_0 = sqrt(1-p)I, E_1 = sqrt(p)X)",
      "description": "Applying Pauli-X error with probability p.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t1_s2_d2",
      "label": "Phase-Flip Channel (E_0 = sqrt(1-p)I, E_1 = sqrt(p)Z)",
      "description": "Applying Pauli-Z error with probability p.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t1_s3",
      "label": "Depolarizing Noise Channel",
      "description": "Symmetric noise channel replacing state rho with the maximally mixed state I/2 with probability p.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t1_s3_d1",
      "label": "Depolarizing Formula E(rho) = (1-p)rho + (p/3)(X*rho*X + Y*rho*Y + Z*rho*Z)",
      "description": "Applying random Pauli X, Y, or Z errors with equal probability.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t1_s3_d2",
      "label": "Isotropic State Information Destruction",
      "description": "Modeling un-correlated isotropic noise in quantum channels.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t1_s4",
      "label": "Amplitude Damping Channel (T1 Relaxation)",
      "description": "Modeling physical energy loss from an excited qubit state |1> to ground state |0>.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t1_s4_d1",
      "label": "Kraus Operators E_0 = [[1, 0], [0, sqrt(1-gamma)]], E_1 = [[0, sqrt(gamma)], [0, 0]]",
      "description": "Modeling spontaneous decay with decay probability gamma = 1 - e^{-t/T1}.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t1_s4_d2",
      "label": "Asymmetric Non-Trace-Decreasing State Collapse",
      "description": "Driving arbitrary input density matrices toward pure ground state |0><0|.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t1_s5",
      "label": "Phase Damping Channel (T2 Pure Dephasing)",
      "description": "Modeling loss of quantum phase coherence without energy loss.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t1_s5_d1",
      "label": "Off-Diagonal Density Matrix Decay",
      "description": "Damping off-diagonal elements rho_01 and rho_10 by factor e^{-t/T2^*}.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t1_s5_d2",
      "label": "Dephasing Time Relation (1/T2 = 1/(2*T1) + 1/T2_pure)",
      "description": "Combining energy relaxation T1 and pure dephasing T2_pure.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t2",
      "label": "State Metrics (Fidelity & Trace Distance)",
      "description": "Mathematical metrics for measuring distances and similarities between quantum states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t2_s1",
      "label": "Trace Distance D(rho, sigma) = Tr|rho - sigma| / 2",
      "description": "Metric bounding the maximum statistical distinction between two quantum states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t2_s1_d1",
      "label": "Contractive Property under CPTP Maps",
      "description": "Validating that quantum operations cannot increase the trace distance between states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t2_s1_d2",
      "label": "Measurement Outcome Probability Bound",
      "description": "Relating trace distance directly to maximum success probability in state discrimination.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t2_s2",
      "label": "Quantum State Fidelity F(rho, sigma)",
      "description": "Measuring closeness of two density matrices (F = 1 for identical states, F = 0 for orthogonal states).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t2_s2_d1",
      "label": "Pure-Mixed State Fidelity Formula F(|psi>, sigma) = <psi|sigma|psi>",
      "description": "Simplifying fidelity calculation when one state is a pure vector.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t2_s2_d2",
      "label": "Relationship to Trace Distance (1 - sqrt(F) <= D <= sqrt(1 - F))",
      "description": "Bounding trace distance using state fidelity values.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t2_s3",
      "label": "Process Fidelity & Average Gate Fidelity",
      "description": "Quantifying the accuracy of experimental quantum gate implementations compared to ideal unitaries.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t2_s3_d1",
      "label": "Average Gate Fidelity F_avg Formula",
      "description": "Averaging state fidelity across all possible input pure states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t2_s3_d2",
      "label": "Entanglement Fidelity Mapping",
      "description": "Relating process fidelity to state fidelity of maximally entangled states.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t2_s4",
      "label": "Diamond Norm Distance ||E_1 - E_2||_diamond",
      "description": "Standard metric for evaluating physical error rates of quantum channels in fault-tolerance proofs.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t2_s4_d1",
      "label": "Stabilizer Ancilla Entanglement Evaluation",
      "description": "Evaluating channel distance when applied to half of a maximally entangled pair.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t2_s4_d2",
      "label": "Fault-Tolerant Threshold Requirement",
      "description": "Using diamond norm distance to bound worst-case error propagation in QEC.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t2_s5",
      "label": "Quantum Relative Entropy S(rho || sigma)",
      "description": "Asymmetric measure of distinguishability between two density matrices.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t2_s5_d1",
      "label": "Formula S(rho || sigma) = Tr(rho * log2(rho)) - Tr(rho * log2(sigma))",
      "description": "Quantum analogue of classical Kullback-Leibler (KL) divergence.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t2_s5_d2",
      "label": "Monotonicity under Quantum Operations",
      "description": "Proving that processing quantum states never increases relative entropy.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t3",
      "label": "Randomized Benchmarking (RB) & Characterization",
      "description": "Experimental protocols for measuring average gate error rates independently of state preparation and measurement (SPAM) errors.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t3_s1",
      "label": "Standard Clifford Randomized Benchmarking",
      "description": "Executing sequences of random Clifford gates terminated by an exact inverse gate.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t3_s1_d1",
      "label": "Random Clifford Sequence Generation",
      "description": "Sampling random sequences of length m from the Clifford group.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t3_s1_d2",
      "label": "Decay Curve Fitting (P(m) = A * p^m + B)",
      "description": "Fitting sequence survival probability to extract error parameter p.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t3_s2",
      "label": "SPAM Error Robustness Advantage",
      "description": "Isolating physical gate errors from state preparation and measurement (SPAM) errors.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t3_s2_d1",
      "label": "Separation of Gate Errors from Readout Noise",
      "description": "Absorbing SPAM errors into fitting constants A and B.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t3_s2_d2",
      "label": "Average Error Per Clifford Gate Calculation r = (1 - p)(1 - 1/d^2)",
      "description": "Extracting precise average error rates per Clifford gate.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t3_s3",
      "label": "Interleaved Randomized Benchmarking (IRB)",
      "description": "Measuring the specific error rate of a target quantum gate (e.g. single CNOT).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t3_s3_d1",
      "label": "Interleaving Target Gate Gate-by-Gate",
      "description": "Interleaving target gate T between random Clifford gates in RB sequences.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t3_s3_d2",
      "label": "Target Gate Error Extraction r_target",
      "description": "Comparing decay rates of standard RB and interleaved RB sequences.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t3_s4",
      "label": "Cross-Entropy Benchmarking (XEB)",
      "description": "Benchmarking quantum processors using random multi-qubit circuit output probability distributions.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t3_s4_d1",
      "label": "Heavy Output Generation Sampling",
      "description": "Sampling output bitstrings and comparing probabilities against classical simulation predictions.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t3_s4_d2",
      "label": "Quantum Supremacy Benchmark Metric",
      "description": "Demonstrating quantum processor performance on Google Sycamore and USTC Zuchongzhi processors.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t3_s5",
      "label": "Gate Set Tomography (GST)",
      "description": "Comprehensive diagnostic protocol fully characterizing all gates, state preparations, and measurements in a hardware system.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t3_s5_d1",
      "label": "Full Tensor Process Matrix Reconstruction",
      "description": "Reconstructing detailed error generators for every native hardware gate.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t3_s5_d2",
      "label": "Coherent vs Incoherent Error Diagnosis",
      "description": "Distinguishing systematic calibration angle errors from stochastic environment noise.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t4",
      "label": "Readout Error Mitigation (ROEM)",
      "description": "Algorithmic techniques for correcting physical measurement classification errors.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t4_s1",
      "label": "Measurement Confusion Matrix C Construction",
      "description": "Measuring physical assignment probabilities C_ij = P(read i | prepared j).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t4_s1_d1",
      "label": "Preparing Pure Basis States (|00>, |01>, |10>, |11>)",
      "description": "Measuring calibration states to build 2^N x 2^N assignment matrices.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t4_s1_d2",
      "label": "Readout Error Asmetry (P(0|1) != P(1|0))",
      "description": "Accounting for asymmetric decay errors occurring during measurement.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t4_s2",
      "label": "Matrix Inversion Vector Correction (P_true = C^{-1} * P_measured)",
      "description": "Inverting confusion matrices to recover true measurement probability distributions.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t4_s2_d1",
      "label": "Direct Linear System Inversion",
      "description": "Multiplying raw measured probability vectors by inverse confusion matrices.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t4_s2_d2",
      "label": "Negative Probability Un-physicality Management",
      "description": "Handling un-physical negative probabilities produced by naive matrix inversion.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t4_s3",
      "label": "Iterative Bayesian Unfolding & Least Squares Optimization",
      "description": "Advanced statistical estimation methods producing valid physical probability vectors.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t4_s3_d1",
      "label": "Constrained Optimization (min ||C*P_true - P_meas||^2 s.t. P_true >= 0)",
      "description": "Finding closest non-negative probability vector.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t4_s3_d2",
      "label": "Bayesian Iterative Updating",
      "description": "Updating probability estimates iteratively using Bayes' theorem.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t4_s4",
      "label": "Twirled Readout Error Mitigation (TREX)",
      "description": "Randomizing measurement bit-flips to symmetrize readout error matrices.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t4_s4_d1",
      "label": "Random Pre-Measurement Pauli-X Inversion",
      "description": "Applying Pauli-X gates randomly before measurement and flipping classical bits post-readout.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t4_s4_d2",
      "label": "Diagonalization of Confusion Matrices",
      "description": "Simplifying confusion matrices to single-parameter diagonal matrices.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t4_s5",
      "label": "Readout Mitigation Scaling Limitations",
      "description": "Exponential matrix size growth (2^N x 2^N) limiting full readout mitigation on large qubit counts.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t4_s5_d1",
      "label": "Tensor Product Local Readout Approximations",
      "description": "Assuming independent single-qubit readout errors to scale mitigation to 100+ qubits.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t4_s5_d2",
      "label": "Correlated Readout Noise Errors",
      "description": "Managing multi-qubit crosstalk errors during simultaneous readout.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t5",
      "label": "Quantum Information Theory & Noise Models Topic 5",
      "description": "Detailed first-principles mechanics for Quantum Information Theory & Noise Models topic 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t5_s1",
      "label": "Quantum Information Theory & Noise Models Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Information Theory & Noise Models Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t5_s1_d1",
      "label": "Quantum Information Theory & Noise Models Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Information Theory & Noise Models Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t5_s1_d2",
      "label": "Quantum Information Theory & Noise Models Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Information Theory & Noise Models Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t5_s2",
      "label": "Quantum Information Theory & Noise Models Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Information Theory & Noise Models Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t5_s2_d1",
      "label": "Quantum Information Theory & Noise Models Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Information Theory & Noise Models Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t5_s2_d2",
      "label": "Quantum Information Theory & Noise Models Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Information Theory & Noise Models Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t5_s3",
      "label": "Quantum Information Theory & Noise Models Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Information Theory & Noise Models Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t5_s3_d1",
      "label": "Quantum Information Theory & Noise Models Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Information Theory & Noise Models Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t5_s3_d2",
      "label": "Quantum Information Theory & Noise Models Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Information Theory & Noise Models Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t5_s4",
      "label": "Quantum Information Theory & Noise Models Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Information Theory & Noise Models Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t5_s4_d1",
      "label": "Quantum Information Theory & Noise Models Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Information Theory & Noise Models Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t5_s4_d2",
      "label": "Quantum Information Theory & Noise Models Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Information Theory & Noise Models Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t5_s5",
      "label": "Quantum Information Theory & Noise Models Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Information Theory & Noise Models Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t5_s5_d1",
      "label": "Quantum Information Theory & Noise Models Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Information Theory & Noise Models Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t5_s5_d2",
      "label": "Quantum Information Theory & Noise Models Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Information Theory & Noise Models Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t6",
      "label": "Quantum Information Theory & Noise Models Topic 6",
      "description": "Detailed first-principles mechanics for Quantum Information Theory & Noise Models topic 6.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t6_s1",
      "label": "Quantum Information Theory & Noise Models Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Information Theory & Noise Models Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t6_s1_d1",
      "label": "Quantum Information Theory & Noise Models Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Information Theory & Noise Models Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t6_s1_d2",
      "label": "Quantum Information Theory & Noise Models Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Information Theory & Noise Models Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t6_s2",
      "label": "Quantum Information Theory & Noise Models Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Information Theory & Noise Models Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t6_s2_d1",
      "label": "Quantum Information Theory & Noise Models Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Information Theory & Noise Models Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t6_s2_d2",
      "label": "Quantum Information Theory & Noise Models Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Information Theory & Noise Models Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t6_s3",
      "label": "Quantum Information Theory & Noise Models Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Information Theory & Noise Models Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t6_s3_d1",
      "label": "Quantum Information Theory & Noise Models Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Information Theory & Noise Models Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t6_s3_d2",
      "label": "Quantum Information Theory & Noise Models Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Information Theory & Noise Models Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t6_s4",
      "label": "Quantum Information Theory & Noise Models Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Information Theory & Noise Models Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t6_s4_d1",
      "label": "Quantum Information Theory & Noise Models Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Information Theory & Noise Models Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t6_s4_d2",
      "label": "Quantum Information Theory & Noise Models Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Information Theory & Noise Models Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t6_s5",
      "label": "Quantum Information Theory & Noise Models Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Quantum Information Theory & Noise Models Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t6_s5_d1",
      "label": "Quantum Information Theory & Noise Models Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Information Theory & Noise Models Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p7_t6_s5_d2",
      "label": "Quantum Information Theory & Noise Models Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Quantum Information Theory & Noise Models Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8",
      "label": "Variational & NISQ Algorithms (VQE / QAOA)",
      "description": "Hybrid quantum-classical algorithms, Variational Quantum Eigensolver, QAOA optimization, and barren plateaus.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t1",
      "label": "Variational Quantum Eigensolver (VQE)",
      "description": "Hybrid algorithm estimating ground state energies of quantum Hamiltonians on noisy hardware.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t1_s1",
      "label": "Variational Principle Energy Bound E_0 <= <psi(theta)|H|psi(theta)>",
      "description": "Fundamental theorem guaranteeing that expectation value of H is bounded below by ground energy E_0.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t1_s1_d1",
      "label": "Upper Bound Guarantee",
      "description": "Ensuring parameter updates move expectation values closer to true ground state energy.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t1_s1_d2",
      "label": "Trial Wavefunction Parameterization |psi(theta)>",
      "description": "Preparing parameterized quantum states using hardware-efficient or chemistry ansatzes.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t1_s2",
      "label": "Hamiltonian Pauli Decompositions H = sum(c_i * P_i)",
      "description": "Expressing molecular or spin Hamiltonians as linear combinations of Pauli string operators.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t1_s2_d1",
      "label": "Jordan-Wigner / Bravyi-Kitaev Transformations",
      "description": "Mapping fermionic creation and annihilation operators to Pauli spin matrices.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t1_s2_d2",
      "label": "Independent Pauli Expectation Measurements",
      "description": "Measuring expectation values <P_i> in parallel and summing weighted results classically.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t1_s3",
      "label": "Ansatz Circuit Architectures (UCCSD vs Hardware-Efficient)",
      "description": "Selecting parameterized quantum circuit structures for trial wavefunctions.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t1_s3_d1",
      "label": "Unitary Coupled Cluster (UCCSD) Ansatz",
      "description": "Chemically motivated ansatz preserving electron count and spin symmetries.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t1_s3_d2",
      "label": "Hardware-Efficient Ansatz (HEA)",
      "description": "Alternating single-qubit rotations and native entangling gates to minimize circuit depth.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t1_s4",
      "label": "Classical Optimizer Loop Execution (COBYLA, SPSA, Adam)",
      "description": "Updating ansatz parameters theta classically based on measured energy expectation values.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t1_s4_d1",
      "label": "Gradient-Free Optimizers (COBYLA, Nelder-Mead)",
      "description": "Optimizing parameters without evaluating energy gradients on noisy hardware.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t1_s4_d2",
      "label": "Simultaneous Perturbation Stochastic Approximation (SPSA)",
      "description": "Estimating gradients using two function evaluations per optimization step regardless of parameter count.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t1_s5",
      "label": "Parameter-Shift Rule for Exact Gradient Computation",
      "description": "Evaluating exact quantum energy gradients on hardware without finite-difference approximations.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t1_s5_d1",
      "label": "Formula d<H>/d(theta_i) = (<H>(theta_i + pi/2) - <H>(theta_i - pi/2)) / 2",
      "description": "Evaluating exact analytical gradients by shifting parameter angles by +/- pi/2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t1_s5_d2",
      "label": "Hardware Execution Advantage",
      "description": "Computing exact gradients without numerical precision loss.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t2",
      "label": "Quantum Approximate Optimization Algorithm (QAOA)",
      "description": "Variational algorithm solving combinatorial optimization problems (Max-Cut, TSP) on quantum processors.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t2_s1",
      "label": "Problem (Cost) Hamiltonian H_C Construction",
      "description": "Encoding classical cost functions into diagonal Ising spin Hamiltonians.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t2_s1_d1",
      "label": "Max-Cut Cost Mapping H_C = sum(w_ij * (I - Z_i Z_j) / 2)",
      "description": "Encoding graph edge cuts into 2-qubit Pauli-Z interaction terms.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t2_s1_d2",
      "label": "Diagonal Eigenstate Energy Encoding",
      "description": "Ensuring classical solution bitstrings correspond to ground state eigenvectors of H_C.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t2_s2",
      "label": "Mixer Hamiltonian H_B = sum(X_i) & Transverse Fields",
      "description": "Driving quantum superpositions across computational basis states using transverse X-fields.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t2_s2_d1",
      "label": "Transverse Field Driver Operator",
      "description": "Applying single-qubit Pauli-X operations across all qubits.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t2_s2_d2",
      "label": "State Transitions Across Solution Space",
      "description": "Enabling quantum tunneling transitions between candidate cost solutions.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t2_s3",
      "label": "Alternating Operator Layer Ansatz (p Depth Steps)",
      "description": "Constructing QAOA trial states by applying p alternating layers of cost and mixer unitaries.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t2_s3_d1",
      "label": "Formula |gamma, beta> = prod_{k=1}^p exp(-i*beta_k*H_B) * exp(-i*gamma_k*H_C) |+>^{\\otimes N}",
      "description": "Preparing trial states using 2p variational parameters (gamma, beta).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t2_s3_d2",
      "label": "Layer Depth Scaling p -> infinity",
      "description": "Proving convergence to exact optimal classical solutions as layer depth p increases.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t2_s4",
      "label": "Adiabatic Quantum Computation Relationship",
      "description": "Viewing QAOA as a trotterized approximation of continuous adiabatic quantum evolution.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t2_s4_d1",
      "label": "Adiabatic Theorem Ground State Tracking",
      "description": "Evolving ground state of initial H_B slowly into ground state of target H_C.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t2_s4_d2",
      "label": "Short-Depth Heuristic Optimization",
      "description": "Achieving high-quality approximate solutions at low circuit depths (p=1, 2).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t2_s5",
      "label": "Performance Bounds & Approximation Ratios",
      "description": "Evaluating solution quality compared to classical approximation algorithms (Goemans-Williamson).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t2_s5_d1",
      "label": "QAOA p=1 Max-Cut Bound (0.6924 Performance Ratio)",
      "description": "Achieving provable minimum performance ratio of 0.6924 for 3-regular graphs at p=1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t2_s5_d2",
      "label": "Benchmarking Against Classical Solvers",
      "description": "Evaluating NISQ hardware performance against classical integer programming solvers.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t3",
      "label": "Barren Plateaus & Optimization Landscapes",
      "description": "Pervasive trainability bottleneck in variational quantum algorithms where gradients decay exponentially.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t3_s1",
      "label": "Exponential Gradient Vanishing Variance Var(d<H>/d(theta)) ~ O(2^{-N})",
      "description": "Mathematical phenomenon where optimization gradients vanish exponentially with qubit count N.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t3_s1_d1",
      "label": "Flat Cost Function Landscapes",
      "description": "Rendering optimization landscapes featureless, preventing classical optimizers from finding descent directions.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t3_s1_d2",
      "label": "Haar Distributed Random Circuit Asymptotics",
      "description": "Emerging when parameterized ansatz circuits form approximate 2-designs.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t3_s2",
      "label": "Expressebility vs Trainability Tradeoff",
      "description": "Fundamental conflict between ansatz expressive power and gradient trainability.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t3_s2_d1",
      "label": "Overly Expressive Ansatz Traps",
      "description": "Highly expressive deep ansatzes covering full Hilbert spaces suffer severe barren plateaus.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t3_s2_d2",
      "label": "Restricted Domain-Specific Ansatz Solutions",
      "description": "Designing constrained problem-specific ansatzes to preserve non-zero gradients.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t3_s3",
      "label": "Noise-Induced Barren Plateaus (NIBP)",
      "description": "Decoherence and depolarizing noise driving quantum states toward maximally mixed states regardless of parameters.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t3_s3_d1",
      "label": "Environmental Noise Landscape Flattening",
      "description": "Suppressing cost function variations due to physical hardware noise.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t3_s3_d2",
      "label": "Circuit Depth Hard Limits",
      "description": "Imposing strict depth limits beyond which hardware noise destroys trainability.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t3_s4",
      "label": "Layerwise & Local Cost Function Mitigation Strategies",
      "description": "Architectural techniques for mitigating barren plateau phenomena.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t3_s4_d1",
      "label": "Local Cost Functions (Sum of 1-Qubit / 2-Qubit Terms)",
      "description": "Replacing global cost functions with local observables to ensure polynomial gradient scaling.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t3_s4_d2",
      "label": "Layerwise Training & Identity Initializations",
      "description": "Initializing parameters near identity matrices and training parameters sequentially.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t3_s5",
      "label": "Symmetry-Preserving & Quantum Convolutional Architectures",
      "description": "Structuring ansatz topologies to preserve physical problem symmetries.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t3_s5_d1",
      "label": "Particle-Number & Spin-Preserving Gates",
      "description": "Restricting parameter searches strictly to valid physical subspaces.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t3_s5_d2",
      "label": "Quantum Convolutional Neural Networks (QCNN)",
      "description": "Utilizing hierarchical parameter sharing to avoid barren plateaus.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t4",
      "label": "Zero-Noise Extrapolation (ZNE) & Error Mitigation",
      "description": "Software techniques for estimating zero-noise expectation values on un-erroneous NISQ hardware.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t4_s1",
      "label": "Pulse Stretching & Digital Gate Folding Noise Scaling",
      "description": "Artificially scaling physical noise levels in a controlled manner during execution.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t4_s1_d1",
      "label": "Digital Gate Folding (G -> G G^dagger G)",
      "description": "Replacing gate G with 3 gates to scale noise level by factor lambda = 3 without altering unitary logic.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t4_s1_d2",
      "label": "Pulse Duration Stretching",
      "description": "Stretching microwave pulse lengths to increase environmental exposure time.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t4_s2",
      "label": "Linear & Polynomial Extrapolation Models",
      "description": "Fitting expectation values measured at multiple noise factors (lambda = 1, 3, 5) to extrapolate to zero noise (lambda = 0).",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t4_s2_d1",
      "label": "Linear Extrapolation E(0) = 2*E(1) - E(2)",
      "description": "Extrapolating expectation values using linear fit functions.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t4_s2_d2",
      "label": "Richardson Polynomial & Exponential Extrapolation",
      "description": "Fitting higher-order curves to capture non-linear noise scaling behavior.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t4_s3",
      "label": "Probabilistic Error Cancellation (PEC)",
      "description": "Representing ideal un-noisy gates as linear combinations of noisy hardware operations.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t4_s3_d1",
      "label": "Quasi-Probability Distribution Sampling",
      "description": "Sampling noisy execution configurations weighted by positive and negative coefficients.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t4_s3_d2",
      "label": "Sampling Overhead Exponential Cost gamma^2",
      "description": "Trading exponential classical sample counts for exact un-noisy expectation values.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t4_s4",
      "label": "Symmetry Verification & Post-Selection",
      "description": "Discarding measurement samples that violate physical conservation laws.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t4_s4_d1",
      "label": "Particle Count & Parity Check Auditing",
      "description": "Checking that output bitstrings preserve expected particle counts.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t4_s4_d2",
      "label": "Filtering Un-Physical Noise Artifacts",
      "description": "Eliminating noise events that drive systems out of physical subspaces.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t4_s5",
      "label": "Mitiq Open-Source Error Mitigation Toolkit",
      "description": "Python library applying ZNE, PEC, and Readout mitigation to Qiskit, Cirq, and PyQuil circuits.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t4_s5_d1",
      "label": "Compiler-Level Automated Gate Folding",
      "description": "Transforming abstract circuits automatically to inject noise scaling passes.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t4_s5_d2",
      "label": "Hardware Agnostic Execution Interface",
      "description": "Running error-mitigated workflows across IBM Quantum, Rigetti, and Braket hardware.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t5",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 5",
      "description": "Detailed first-principles mechanics for Variational & NISQ Algorithms (VQE / QAOA) topic 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t5_s1",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Variational & NISQ Algorithms (VQE / QAOA) Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t5_s1_d1",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t5_s1_d2",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t5_s2",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Variational & NISQ Algorithms (VQE / QAOA) Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t5_s2_d1",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t5_s2_d2",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t5_s3",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Variational & NISQ Algorithms (VQE / QAOA) Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t5_s3_d1",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t5_s3_d2",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t5_s4",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Variational & NISQ Algorithms (VQE / QAOA) Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t5_s4_d1",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t5_s4_d2",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t5_s5",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Variational & NISQ Algorithms (VQE / QAOA) Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t5_s5_d1",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t5_s5_d2",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variational & NISQ Algorithms (VQE / QAOA) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t6",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 6",
      "description": "Detailed first-principles mechanics for Variational & NISQ Algorithms (VQE / QAOA) topic 6.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t6_s1",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Variational & NISQ Algorithms (VQE / QAOA) Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t6_s1_d1",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t6_s1_d2",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t6_s2",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Variational & NISQ Algorithms (VQE / QAOA) Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t6_s2_d1",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t6_s2_d2",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t6_s3",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Variational & NISQ Algorithms (VQE / QAOA) Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t6_s3_d1",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t6_s3_d2",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t6_s4",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Variational & NISQ Algorithms (VQE / QAOA) Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t6_s4_d1",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t6_s4_d2",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t6_s5",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Variational & NISQ Algorithms (VQE / QAOA) Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t6_s5_d1",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "quantum_root_p8_t6_s5_d2",
      "label": "Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Variational & NISQ Algorithms (VQE / QAOA) Topic 6 Sub-System 5.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "source": "quantum_root",
      "target": "quantum_root_p1"
    },
    {
      "source": "quantum_root_p1",
      "target": "quantum_root_p1_t1"
    },
    {
      "source": "quantum_root_p1_t1",
      "target": "quantum_root_p1_t1_s1"
    },
    {
      "source": "quantum_root_p1_t1_s1",
      "target": "quantum_root_p1_t1_s1_d1"
    },
    {
      "source": "quantum_root_p1_t1_s1",
      "target": "quantum_root_p1_t1_s1_d2"
    },
    {
      "source": "quantum_root_p1_t1",
      "target": "quantum_root_p1_t1_s2"
    },
    {
      "source": "quantum_root_p1_t1_s2",
      "target": "quantum_root_p1_t1_s2_d1"
    },
    {
      "source": "quantum_root_p1_t1_s2",
      "target": "quantum_root_p1_t1_s2_d2"
    },
    {
      "source": "quantum_root_p1_t1",
      "target": "quantum_root_p1_t1_s3"
    },
    {
      "source": "quantum_root_p1_t1_s3",
      "target": "quantum_root_p1_t1_s3_d1"
    },
    {
      "source": "quantum_root_p1_t1_s3",
      "target": "quantum_root_p1_t1_s3_d2"
    },
    {
      "source": "quantum_root_p1_t1",
      "target": "quantum_root_p1_t1_s4"
    },
    {
      "source": "quantum_root_p1_t1_s4",
      "target": "quantum_root_p1_t1_s4_d1"
    },
    {
      "source": "quantum_root_p1_t1_s4",
      "target": "quantum_root_p1_t1_s4_d2"
    },
    {
      "source": "quantum_root_p1_t1",
      "target": "quantum_root_p1_t1_s5"
    },
    {
      "source": "quantum_root_p1_t1_s5",
      "target": "quantum_root_p1_t1_s5_d1"
    },
    {
      "source": "quantum_root_p1_t1_s5",
      "target": "quantum_root_p1_t1_s5_d2"
    },
    {
      "source": "quantum_root_p1",
      "target": "quantum_root_p1_t2"
    },
    {
      "source": "quantum_root_p1_t2",
      "target": "quantum_root_p1_t2_s1"
    },
    {
      "source": "quantum_root_p1_t2_s1",
      "target": "quantum_root_p1_t2_s1_d1"
    },
    {
      "source": "quantum_root_p1_t2_s1",
      "target": "quantum_root_p1_t2_s1_d2"
    },
    {
      "source": "quantum_root_p1_t2",
      "target": "quantum_root_p1_t2_s2"
    },
    {
      "source": "quantum_root_p1_t2_s2",
      "target": "quantum_root_p1_t2_s2_d1"
    },
    {
      "source": "quantum_root_p1_t2_s2",
      "target": "quantum_root_p1_t2_s2_d2"
    },
    {
      "source": "quantum_root_p1_t2",
      "target": "quantum_root_p1_t2_s3"
    },
    {
      "source": "quantum_root_p1_t2_s3",
      "target": "quantum_root_p1_t2_s3_d1"
    },
    {
      "source": "quantum_root_p1_t2_s3",
      "target": "quantum_root_p1_t2_s3_d2"
    },
    {
      "source": "quantum_root_p1_t2",
      "target": "quantum_root_p1_t2_s4"
    },
    {
      "source": "quantum_root_p1_t2_s4",
      "target": "quantum_root_p1_t2_s4_d1"
    },
    {
      "source": "quantum_root_p1_t2_s4",
      "target": "quantum_root_p1_t2_s4_d2"
    },
    {
      "source": "quantum_root_p1_t2",
      "target": "quantum_root_p1_t2_s5"
    },
    {
      "source": "quantum_root_p1_t2_s5",
      "target": "quantum_root_p1_t2_s5_d1"
    },
    {
      "source": "quantum_root_p1_t2_s5",
      "target": "quantum_root_p1_t2_s5_d2"
    },
    {
      "source": "quantum_root_p1",
      "target": "quantum_root_p1_t3"
    },
    {
      "source": "quantum_root_p1_t3",
      "target": "quantum_root_p1_t3_s1"
    },
    {
      "source": "quantum_root_p1_t3_s1",
      "target": "quantum_root_p1_t3_s1_d1"
    },
    {
      "source": "quantum_root_p1_t3_s1",
      "target": "quantum_root_p1_t3_s1_d2"
    },
    {
      "source": "quantum_root_p1_t3",
      "target": "quantum_root_p1_t3_s2"
    },
    {
      "source": "quantum_root_p1_t3_s2",
      "target": "quantum_root_p1_t3_s2_d1"
    },
    {
      "source": "quantum_root_p1_t3_s2",
      "target": "quantum_root_p1_t3_s2_d2"
    },
    {
      "source": "quantum_root_p1_t3",
      "target": "quantum_root_p1_t3_s3"
    },
    {
      "source": "quantum_root_p1_t3_s3",
      "target": "quantum_root_p1_t3_s3_d1"
    },
    {
      "source": "quantum_root_p1_t3_s3",
      "target": "quantum_root_p1_t3_s3_d2"
    },
    {
      "source": "quantum_root_p1_t3",
      "target": "quantum_root_p1_t3_s4"
    },
    {
      "source": "quantum_root_p1_t3_s4",
      "target": "quantum_root_p1_t3_s4_d1"
    },
    {
      "source": "quantum_root_p1_t3_s4",
      "target": "quantum_root_p1_t3_s4_d2"
    },
    {
      "source": "quantum_root_p1_t3",
      "target": "quantum_root_p1_t3_s5"
    },
    {
      "source": "quantum_root_p1_t3_s5",
      "target": "quantum_root_p1_t3_s5_d1"
    },
    {
      "source": "quantum_root_p1_t3_s5",
      "target": "quantum_root_p1_t3_s5_d2"
    },
    {
      "source": "quantum_root_p1",
      "target": "quantum_root_p1_t4"
    },
    {
      "source": "quantum_root_p1_t4",
      "target": "quantum_root_p1_t4_s1"
    },
    {
      "source": "quantum_root_p1_t4_s1",
      "target": "quantum_root_p1_t4_s1_d1"
    },
    {
      "source": "quantum_root_p1_t4_s1",
      "target": "quantum_root_p1_t4_s1_d2"
    },
    {
      "source": "quantum_root_p1_t4",
      "target": "quantum_root_p1_t4_s2"
    },
    {
      "source": "quantum_root_p1_t4_s2",
      "target": "quantum_root_p1_t4_s2_d1"
    },
    {
      "source": "quantum_root_p1_t4_s2",
      "target": "quantum_root_p1_t4_s2_d2"
    },
    {
      "source": "quantum_root_p1_t4",
      "target": "quantum_root_p1_t4_s3"
    },
    {
      "source": "quantum_root_p1_t4_s3",
      "target": "quantum_root_p1_t4_s3_d1"
    },
    {
      "source": "quantum_root_p1_t4_s3",
      "target": "quantum_root_p1_t4_s3_d2"
    },
    {
      "source": "quantum_root_p1_t4",
      "target": "quantum_root_p1_t4_s4"
    },
    {
      "source": "quantum_root_p1_t4_s4",
      "target": "quantum_root_p1_t4_s4_d1"
    },
    {
      "source": "quantum_root_p1_t4_s4",
      "target": "quantum_root_p1_t4_s4_d2"
    },
    {
      "source": "quantum_root_p1_t4",
      "target": "quantum_root_p1_t4_s5"
    },
    {
      "source": "quantum_root_p1_t4_s5",
      "target": "quantum_root_p1_t4_s5_d1"
    },
    {
      "source": "quantum_root_p1_t4_s5",
      "target": "quantum_root_p1_t4_s5_d2"
    },
    {
      "source": "quantum_root_p1",
      "target": "quantum_root_p1_t5"
    },
    {
      "source": "quantum_root_p1_t5",
      "target": "quantum_root_p1_t5_s1"
    },
    {
      "source": "quantum_root_p1_t5_s1",
      "target": "quantum_root_p1_t5_s1_d1"
    },
    {
      "source": "quantum_root_p1_t5_s1",
      "target": "quantum_root_p1_t5_s1_d2"
    },
    {
      "source": "quantum_root_p1_t5",
      "target": "quantum_root_p1_t5_s2"
    },
    {
      "source": "quantum_root_p1_t5_s2",
      "target": "quantum_root_p1_t5_s2_d1"
    },
    {
      "source": "quantum_root_p1_t5_s2",
      "target": "quantum_root_p1_t5_s2_d2"
    },
    {
      "source": "quantum_root_p1_t5",
      "target": "quantum_root_p1_t5_s3"
    },
    {
      "source": "quantum_root_p1_t5_s3",
      "target": "quantum_root_p1_t5_s3_d1"
    },
    {
      "source": "quantum_root_p1_t5_s3",
      "target": "quantum_root_p1_t5_s3_d2"
    },
    {
      "source": "quantum_root_p1_t5",
      "target": "quantum_root_p1_t5_s4"
    },
    {
      "source": "quantum_root_p1_t5_s4",
      "target": "quantum_root_p1_t5_s4_d1"
    },
    {
      "source": "quantum_root_p1_t5_s4",
      "target": "quantum_root_p1_t5_s4_d2"
    },
    {
      "source": "quantum_root_p1_t5",
      "target": "quantum_root_p1_t5_s5"
    },
    {
      "source": "quantum_root_p1_t5_s5",
      "target": "quantum_root_p1_t5_s5_d1"
    },
    {
      "source": "quantum_root_p1_t5_s5",
      "target": "quantum_root_p1_t5_s5_d2"
    },
    {
      "source": "quantum_root_p1",
      "target": "quantum_root_p1_t6"
    },
    {
      "source": "quantum_root_p1_t6",
      "target": "quantum_root_p1_t6_s1"
    },
    {
      "source": "quantum_root_p1_t6_s1",
      "target": "quantum_root_p1_t6_s1_d1"
    },
    {
      "source": "quantum_root_p1_t6_s1",
      "target": "quantum_root_p1_t6_s1_d2"
    },
    {
      "source": "quantum_root_p1_t6",
      "target": "quantum_root_p1_t6_s2"
    },
    {
      "source": "quantum_root_p1_t6_s2",
      "target": "quantum_root_p1_t6_s2_d1"
    },
    {
      "source": "quantum_root_p1_t6_s2",
      "target": "quantum_root_p1_t6_s2_d2"
    },
    {
      "source": "quantum_root_p1_t6",
      "target": "quantum_root_p1_t6_s3"
    },
    {
      "source": "quantum_root_p1_t6_s3",
      "target": "quantum_root_p1_t6_s3_d1"
    },
    {
      "source": "quantum_root_p1_t6_s3",
      "target": "quantum_root_p1_t6_s3_d2"
    },
    {
      "source": "quantum_root_p1_t6",
      "target": "quantum_root_p1_t6_s4"
    },
    {
      "source": "quantum_root_p1_t6_s4",
      "target": "quantum_root_p1_t6_s4_d1"
    },
    {
      "source": "quantum_root_p1_t6_s4",
      "target": "quantum_root_p1_t6_s4_d2"
    },
    {
      "source": "quantum_root_p1_t6",
      "target": "quantum_root_p1_t6_s5"
    },
    {
      "source": "quantum_root_p1_t6_s5",
      "target": "quantum_root_p1_t6_s5_d1"
    },
    {
      "source": "quantum_root_p1_t6_s5",
      "target": "quantum_root_p1_t6_s5_d2"
    },
    {
      "source": "quantum_root",
      "target": "quantum_root_p2"
    },
    {
      "source": "quantum_root_p2",
      "target": "quantum_root_p2_t1"
    },
    {
      "source": "quantum_root_p2_t1",
      "target": "quantum_root_p2_t1_s1"
    },
    {
      "source": "quantum_root_p2_t1_s1",
      "target": "quantum_root_p2_t1_s1_d1"
    },
    {
      "source": "quantum_root_p2_t1_s1",
      "target": "quantum_root_p2_t1_s1_d2"
    },
    {
      "source": "quantum_root_p2_t1",
      "target": "quantum_root_p2_t1_s2"
    },
    {
      "source": "quantum_root_p2_t1_s2",
      "target": "quantum_root_p2_t1_s2_d1"
    },
    {
      "source": "quantum_root_p2_t1_s2",
      "target": "quantum_root_p2_t1_s2_d2"
    },
    {
      "source": "quantum_root_p2_t1",
      "target": "quantum_root_p2_t1_s3"
    },
    {
      "source": "quantum_root_p2_t1_s3",
      "target": "quantum_root_p2_t1_s3_d1"
    },
    {
      "source": "quantum_root_p2_t1_s3",
      "target": "quantum_root_p2_t1_s3_d2"
    },
    {
      "source": "quantum_root_p2_t1",
      "target": "quantum_root_p2_t1_s4"
    },
    {
      "source": "quantum_root_p2_t1_s4",
      "target": "quantum_root_p2_t1_s4_d1"
    },
    {
      "source": "quantum_root_p2_t1_s4",
      "target": "quantum_root_p2_t1_s4_d2"
    },
    {
      "source": "quantum_root_p2_t1",
      "target": "quantum_root_p2_t1_s5"
    },
    {
      "source": "quantum_root_p2_t1_s5",
      "target": "quantum_root_p2_t1_s5_d1"
    },
    {
      "source": "quantum_root_p2_t1_s5",
      "target": "quantum_root_p2_t1_s5_d2"
    },
    {
      "source": "quantum_root_p2",
      "target": "quantum_root_p2_t2"
    },
    {
      "source": "quantum_root_p2_t2",
      "target": "quantum_root_p2_t2_s1"
    },
    {
      "source": "quantum_root_p2_t2_s1",
      "target": "quantum_root_p2_t2_s1_d1"
    },
    {
      "source": "quantum_root_p2_t2_s1",
      "target": "quantum_root_p2_t2_s1_d2"
    },
    {
      "source": "quantum_root_p2_t2",
      "target": "quantum_root_p2_t2_s2"
    },
    {
      "source": "quantum_root_p2_t2_s2",
      "target": "quantum_root_p2_t2_s2_d1"
    },
    {
      "source": "quantum_root_p2_t2_s2",
      "target": "quantum_root_p2_t2_s2_d2"
    },
    {
      "source": "quantum_root_p2_t2",
      "target": "quantum_root_p2_t2_s3"
    },
    {
      "source": "quantum_root_p2_t2_s3",
      "target": "quantum_root_p2_t2_s3_d1"
    },
    {
      "source": "quantum_root_p2_t2_s3",
      "target": "quantum_root_p2_t2_s3_d2"
    },
    {
      "source": "quantum_root_p2_t2",
      "target": "quantum_root_p2_t2_s4"
    },
    {
      "source": "quantum_root_p2_t2_s4",
      "target": "quantum_root_p2_t2_s4_d1"
    },
    {
      "source": "quantum_root_p2_t2_s4",
      "target": "quantum_root_p2_t2_s4_d2"
    },
    {
      "source": "quantum_root_p2_t2",
      "target": "quantum_root_p2_t2_s5"
    },
    {
      "source": "quantum_root_p2_t2_s5",
      "target": "quantum_root_p2_t2_s5_d1"
    },
    {
      "source": "quantum_root_p2_t2_s5",
      "target": "quantum_root_p2_t2_s5_d2"
    },
    {
      "source": "quantum_root_p2",
      "target": "quantum_root_p2_t3"
    },
    {
      "source": "quantum_root_p2_t3",
      "target": "quantum_root_p2_t3_s1"
    },
    {
      "source": "quantum_root_p2_t3_s1",
      "target": "quantum_root_p2_t3_s1_d1"
    },
    {
      "source": "quantum_root_p2_t3_s1",
      "target": "quantum_root_p2_t3_s1_d2"
    },
    {
      "source": "quantum_root_p2_t3",
      "target": "quantum_root_p2_t3_s2"
    },
    {
      "source": "quantum_root_p2_t3_s2",
      "target": "quantum_root_p2_t3_s2_d1"
    },
    {
      "source": "quantum_root_p2_t3_s2",
      "target": "quantum_root_p2_t3_s2_d2"
    },
    {
      "source": "quantum_root_p2_t3",
      "target": "quantum_root_p2_t3_s3"
    },
    {
      "source": "quantum_root_p2_t3_s3",
      "target": "quantum_root_p2_t3_s3_d1"
    },
    {
      "source": "quantum_root_p2_t3_s3",
      "target": "quantum_root_p2_t3_s3_d2"
    },
    {
      "source": "quantum_root_p2_t3",
      "target": "quantum_root_p2_t3_s4"
    },
    {
      "source": "quantum_root_p2_t3_s4",
      "target": "quantum_root_p2_t3_s4_d1"
    },
    {
      "source": "quantum_root_p2_t3_s4",
      "target": "quantum_root_p2_t3_s4_d2"
    },
    {
      "source": "quantum_root_p2_t3",
      "target": "quantum_root_p2_t3_s5"
    },
    {
      "source": "quantum_root_p2_t3_s5",
      "target": "quantum_root_p2_t3_s5_d1"
    },
    {
      "source": "quantum_root_p2_t3_s5",
      "target": "quantum_root_p2_t3_s5_d2"
    },
    {
      "source": "quantum_root_p2",
      "target": "quantum_root_p2_t4"
    },
    {
      "source": "quantum_root_p2_t4",
      "target": "quantum_root_p2_t4_s1"
    },
    {
      "source": "quantum_root_p2_t4_s1",
      "target": "quantum_root_p2_t4_s1_d1"
    },
    {
      "source": "quantum_root_p2_t4_s1",
      "target": "quantum_root_p2_t4_s1_d2"
    },
    {
      "source": "quantum_root_p2_t4",
      "target": "quantum_root_p2_t4_s2"
    },
    {
      "source": "quantum_root_p2_t4_s2",
      "target": "quantum_root_p2_t4_s2_d1"
    },
    {
      "source": "quantum_root_p2_t4_s2",
      "target": "quantum_root_p2_t4_s2_d2"
    },
    {
      "source": "quantum_root_p2_t4",
      "target": "quantum_root_p2_t4_s3"
    },
    {
      "source": "quantum_root_p2_t4_s3",
      "target": "quantum_root_p2_t4_s3_d1"
    },
    {
      "source": "quantum_root_p2_t4_s3",
      "target": "quantum_root_p2_t4_s3_d2"
    },
    {
      "source": "quantum_root_p2_t4",
      "target": "quantum_root_p2_t4_s4"
    },
    {
      "source": "quantum_root_p2_t4_s4",
      "target": "quantum_root_p2_t4_s4_d1"
    },
    {
      "source": "quantum_root_p2_t4_s4",
      "target": "quantum_root_p2_t4_s4_d2"
    },
    {
      "source": "quantum_root_p2_t4",
      "target": "quantum_root_p2_t4_s5"
    },
    {
      "source": "quantum_root_p2_t4_s5",
      "target": "quantum_root_p2_t4_s5_d1"
    },
    {
      "source": "quantum_root_p2_t4_s5",
      "target": "quantum_root_p2_t4_s5_d2"
    },
    {
      "source": "quantum_root_p2",
      "target": "quantum_root_p2_t5"
    },
    {
      "source": "quantum_root_p2_t5",
      "target": "quantum_root_p2_t5_s1"
    },
    {
      "source": "quantum_root_p2_t5_s1",
      "target": "quantum_root_p2_t5_s1_d1"
    },
    {
      "source": "quantum_root_p2_t5_s1",
      "target": "quantum_root_p2_t5_s1_d2"
    },
    {
      "source": "quantum_root_p2_t5",
      "target": "quantum_root_p2_t5_s2"
    },
    {
      "source": "quantum_root_p2_t5_s2",
      "target": "quantum_root_p2_t5_s2_d1"
    },
    {
      "source": "quantum_root_p2_t5_s2",
      "target": "quantum_root_p2_t5_s2_d2"
    },
    {
      "source": "quantum_root_p2_t5",
      "target": "quantum_root_p2_t5_s3"
    },
    {
      "source": "quantum_root_p2_t5_s3",
      "target": "quantum_root_p2_t5_s3_d1"
    },
    {
      "source": "quantum_root_p2_t5_s3",
      "target": "quantum_root_p2_t5_s3_d2"
    },
    {
      "source": "quantum_root_p2_t5",
      "target": "quantum_root_p2_t5_s4"
    },
    {
      "source": "quantum_root_p2_t5_s4",
      "target": "quantum_root_p2_t5_s4_d1"
    },
    {
      "source": "quantum_root_p2_t5_s4",
      "target": "quantum_root_p2_t5_s4_d2"
    },
    {
      "source": "quantum_root_p2_t5",
      "target": "quantum_root_p2_t5_s5"
    },
    {
      "source": "quantum_root_p2_t5_s5",
      "target": "quantum_root_p2_t5_s5_d1"
    },
    {
      "source": "quantum_root_p2_t5_s5",
      "target": "quantum_root_p2_t5_s5_d2"
    },
    {
      "source": "quantum_root_p2",
      "target": "quantum_root_p2_t6"
    },
    {
      "source": "quantum_root_p2_t6",
      "target": "quantum_root_p2_t6_s1"
    },
    {
      "source": "quantum_root_p2_t6_s1",
      "target": "quantum_root_p2_t6_s1_d1"
    },
    {
      "source": "quantum_root_p2_t6_s1",
      "target": "quantum_root_p2_t6_s1_d2"
    },
    {
      "source": "quantum_root_p2_t6",
      "target": "quantum_root_p2_t6_s2"
    },
    {
      "source": "quantum_root_p2_t6_s2",
      "target": "quantum_root_p2_t6_s2_d1"
    },
    {
      "source": "quantum_root_p2_t6_s2",
      "target": "quantum_root_p2_t6_s2_d2"
    },
    {
      "source": "quantum_root_p2_t6",
      "target": "quantum_root_p2_t6_s3"
    },
    {
      "source": "quantum_root_p2_t6_s3",
      "target": "quantum_root_p2_t6_s3_d1"
    },
    {
      "source": "quantum_root_p2_t6_s3",
      "target": "quantum_root_p2_t6_s3_d2"
    },
    {
      "source": "quantum_root_p2_t6",
      "target": "quantum_root_p2_t6_s4"
    },
    {
      "source": "quantum_root_p2_t6_s4",
      "target": "quantum_root_p2_t6_s4_d1"
    },
    {
      "source": "quantum_root_p2_t6_s4",
      "target": "quantum_root_p2_t6_s4_d2"
    },
    {
      "source": "quantum_root_p2_t6",
      "target": "quantum_root_p2_t6_s5"
    },
    {
      "source": "quantum_root_p2_t6_s5",
      "target": "quantum_root_p2_t6_s5_d1"
    },
    {
      "source": "quantum_root_p2_t6_s5",
      "target": "quantum_root_p2_t6_s5_d2"
    },
    {
      "source": "quantum_root",
      "target": "quantum_root_p3"
    },
    {
      "source": "quantum_root_p3",
      "target": "quantum_root_p3_t1"
    },
    {
      "source": "quantum_root_p3_t1",
      "target": "quantum_root_p3_t1_s1"
    },
    {
      "source": "quantum_root_p3_t1_s1",
      "target": "quantum_root_p3_t1_s1_d1"
    },
    {
      "source": "quantum_root_p3_t1_s1",
      "target": "quantum_root_p3_t1_s1_d2"
    },
    {
      "source": "quantum_root_p3_t1",
      "target": "quantum_root_p3_t1_s2"
    },
    {
      "source": "quantum_root_p3_t1_s2",
      "target": "quantum_root_p3_t1_s2_d1"
    },
    {
      "source": "quantum_root_p3_t1_s2",
      "target": "quantum_root_p3_t1_s2_d2"
    },
    {
      "source": "quantum_root_p3_t1",
      "target": "quantum_root_p3_t1_s3"
    },
    {
      "source": "quantum_root_p3_t1_s3",
      "target": "quantum_root_p3_t1_s3_d1"
    },
    {
      "source": "quantum_root_p3_t1_s3",
      "target": "quantum_root_p3_t1_s3_d2"
    },
    {
      "source": "quantum_root_p3_t1",
      "target": "quantum_root_p3_t1_s4"
    },
    {
      "source": "quantum_root_p3_t1_s4",
      "target": "quantum_root_p3_t1_s4_d1"
    },
    {
      "source": "quantum_root_p3_t1_s4",
      "target": "quantum_root_p3_t1_s4_d2"
    },
    {
      "source": "quantum_root_p3_t1",
      "target": "quantum_root_p3_t1_s5"
    },
    {
      "source": "quantum_root_p3_t1_s5",
      "target": "quantum_root_p3_t1_s5_d1"
    },
    {
      "source": "quantum_root_p3_t1_s5",
      "target": "quantum_root_p3_t1_s5_d2"
    },
    {
      "source": "quantum_root_p3",
      "target": "quantum_root_p3_t2"
    },
    {
      "source": "quantum_root_p3_t2",
      "target": "quantum_root_p3_t2_s1"
    },
    {
      "source": "quantum_root_p3_t2_s1",
      "target": "quantum_root_p3_t2_s1_d1"
    },
    {
      "source": "quantum_root_p3_t2_s1",
      "target": "quantum_root_p3_t2_s1_d2"
    },
    {
      "source": "quantum_root_p3_t2",
      "target": "quantum_root_p3_t2_s2"
    },
    {
      "source": "quantum_root_p3_t2_s2",
      "target": "quantum_root_p3_t2_s2_d1"
    },
    {
      "source": "quantum_root_p3_t2_s2",
      "target": "quantum_root_p3_t2_s2_d2"
    },
    {
      "source": "quantum_root_p3_t2",
      "target": "quantum_root_p3_t2_s3"
    },
    {
      "source": "quantum_root_p3_t2_s3",
      "target": "quantum_root_p3_t2_s3_d1"
    },
    {
      "source": "quantum_root_p3_t2_s3",
      "target": "quantum_root_p3_t2_s3_d2"
    },
    {
      "source": "quantum_root_p3_t2",
      "target": "quantum_root_p3_t2_s4"
    },
    {
      "source": "quantum_root_p3_t2_s4",
      "target": "quantum_root_p3_t2_s4_d1"
    },
    {
      "source": "quantum_root_p3_t2_s4",
      "target": "quantum_root_p3_t2_s4_d2"
    },
    {
      "source": "quantum_root_p3_t2",
      "target": "quantum_root_p3_t2_s5"
    },
    {
      "source": "quantum_root_p3_t2_s5",
      "target": "quantum_root_p3_t2_s5_d1"
    },
    {
      "source": "quantum_root_p3_t2_s5",
      "target": "quantum_root_p3_t2_s5_d2"
    },
    {
      "source": "quantum_root_p3",
      "target": "quantum_root_p3_t3"
    },
    {
      "source": "quantum_root_p3_t3",
      "target": "quantum_root_p3_t3_s1"
    },
    {
      "source": "quantum_root_p3_t3_s1",
      "target": "quantum_root_p3_t3_s1_d1"
    },
    {
      "source": "quantum_root_p3_t3_s1",
      "target": "quantum_root_p3_t3_s1_d2"
    },
    {
      "source": "quantum_root_p3_t3",
      "target": "quantum_root_p3_t3_s2"
    },
    {
      "source": "quantum_root_p3_t3_s2",
      "target": "quantum_root_p3_t3_s2_d1"
    },
    {
      "source": "quantum_root_p3_t3_s2",
      "target": "quantum_root_p3_t3_s2_d2"
    },
    {
      "source": "quantum_root_p3_t3",
      "target": "quantum_root_p3_t3_s3"
    },
    {
      "source": "quantum_root_p3_t3_s3",
      "target": "quantum_root_p3_t3_s3_d1"
    },
    {
      "source": "quantum_root_p3_t3_s3",
      "target": "quantum_root_p3_t3_s3_d2"
    },
    {
      "source": "quantum_root_p3_t3",
      "target": "quantum_root_p3_t3_s4"
    },
    {
      "source": "quantum_root_p3_t3_s4",
      "target": "quantum_root_p3_t3_s4_d1"
    },
    {
      "source": "quantum_root_p3_t3_s4",
      "target": "quantum_root_p3_t3_s4_d2"
    },
    {
      "source": "quantum_root_p3_t3",
      "target": "quantum_root_p3_t3_s5"
    },
    {
      "source": "quantum_root_p3_t3_s5",
      "target": "quantum_root_p3_t3_s5_d1"
    },
    {
      "source": "quantum_root_p3_t3_s5",
      "target": "quantum_root_p3_t3_s5_d2"
    },
    {
      "source": "quantum_root_p3",
      "target": "quantum_root_p3_t4"
    },
    {
      "source": "quantum_root_p3_t4",
      "target": "quantum_root_p3_t4_s1"
    },
    {
      "source": "quantum_root_p3_t4_s1",
      "target": "quantum_root_p3_t4_s1_d1"
    },
    {
      "source": "quantum_root_p3_t4_s1",
      "target": "quantum_root_p3_t4_s1_d2"
    },
    {
      "source": "quantum_root_p3_t4",
      "target": "quantum_root_p3_t4_s2"
    },
    {
      "source": "quantum_root_p3_t4_s2",
      "target": "quantum_root_p3_t4_s2_d1"
    },
    {
      "source": "quantum_root_p3_t4_s2",
      "target": "quantum_root_p3_t4_s2_d2"
    },
    {
      "source": "quantum_root_p3_t4",
      "target": "quantum_root_p3_t4_s3"
    },
    {
      "source": "quantum_root_p3_t4_s3",
      "target": "quantum_root_p3_t4_s3_d1"
    },
    {
      "source": "quantum_root_p3_t4_s3",
      "target": "quantum_root_p3_t4_s3_d2"
    },
    {
      "source": "quantum_root_p3_t4",
      "target": "quantum_root_p3_t4_s4"
    },
    {
      "source": "quantum_root_p3_t4_s4",
      "target": "quantum_root_p3_t4_s4_d1"
    },
    {
      "source": "quantum_root_p3_t4_s4",
      "target": "quantum_root_p3_t4_s4_d2"
    },
    {
      "source": "quantum_root_p3_t4",
      "target": "quantum_root_p3_t4_s5"
    },
    {
      "source": "quantum_root_p3_t4_s5",
      "target": "quantum_root_p3_t4_s5_d1"
    },
    {
      "source": "quantum_root_p3_t4_s5",
      "target": "quantum_root_p3_t4_s5_d2"
    },
    {
      "source": "quantum_root_p3",
      "target": "quantum_root_p3_t5"
    },
    {
      "source": "quantum_root_p3_t5",
      "target": "quantum_root_p3_t5_s1"
    },
    {
      "source": "quantum_root_p3_t5_s1",
      "target": "quantum_root_p3_t5_s1_d1"
    },
    {
      "source": "quantum_root_p3_t5_s1",
      "target": "quantum_root_p3_t5_s1_d2"
    },
    {
      "source": "quantum_root_p3_t5",
      "target": "quantum_root_p3_t5_s2"
    },
    {
      "source": "quantum_root_p3_t5_s2",
      "target": "quantum_root_p3_t5_s2_d1"
    },
    {
      "source": "quantum_root_p3_t5_s2",
      "target": "quantum_root_p3_t5_s2_d2"
    },
    {
      "source": "quantum_root_p3_t5",
      "target": "quantum_root_p3_t5_s3"
    },
    {
      "source": "quantum_root_p3_t5_s3",
      "target": "quantum_root_p3_t5_s3_d1"
    },
    {
      "source": "quantum_root_p3_t5_s3",
      "target": "quantum_root_p3_t5_s3_d2"
    },
    {
      "source": "quantum_root_p3_t5",
      "target": "quantum_root_p3_t5_s4"
    },
    {
      "source": "quantum_root_p3_t5_s4",
      "target": "quantum_root_p3_t5_s4_d1"
    },
    {
      "source": "quantum_root_p3_t5_s4",
      "target": "quantum_root_p3_t5_s4_d2"
    },
    {
      "source": "quantum_root_p3_t5",
      "target": "quantum_root_p3_t5_s5"
    },
    {
      "source": "quantum_root_p3_t5_s5",
      "target": "quantum_root_p3_t5_s5_d1"
    },
    {
      "source": "quantum_root_p3_t5_s5",
      "target": "quantum_root_p3_t5_s5_d2"
    },
    {
      "source": "quantum_root_p3",
      "target": "quantum_root_p3_t6"
    },
    {
      "source": "quantum_root_p3_t6",
      "target": "quantum_root_p3_t6_s1"
    },
    {
      "source": "quantum_root_p3_t6_s1",
      "target": "quantum_root_p3_t6_s1_d1"
    },
    {
      "source": "quantum_root_p3_t6_s1",
      "target": "quantum_root_p3_t6_s1_d2"
    },
    {
      "source": "quantum_root_p3_t6",
      "target": "quantum_root_p3_t6_s2"
    },
    {
      "source": "quantum_root_p3_t6_s2",
      "target": "quantum_root_p3_t6_s2_d1"
    },
    {
      "source": "quantum_root_p3_t6_s2",
      "target": "quantum_root_p3_t6_s2_d2"
    },
    {
      "source": "quantum_root_p3_t6",
      "target": "quantum_root_p3_t6_s3"
    },
    {
      "source": "quantum_root_p3_t6_s3",
      "target": "quantum_root_p3_t6_s3_d1"
    },
    {
      "source": "quantum_root_p3_t6_s3",
      "target": "quantum_root_p3_t6_s3_d2"
    },
    {
      "source": "quantum_root_p3_t6",
      "target": "quantum_root_p3_t6_s4"
    },
    {
      "source": "quantum_root_p3_t6_s4",
      "target": "quantum_root_p3_t6_s4_d1"
    },
    {
      "source": "quantum_root_p3_t6_s4",
      "target": "quantum_root_p3_t6_s4_d2"
    },
    {
      "source": "quantum_root_p3_t6",
      "target": "quantum_root_p3_t6_s5"
    },
    {
      "source": "quantum_root_p3_t6_s5",
      "target": "quantum_root_p3_t6_s5_d1"
    },
    {
      "source": "quantum_root_p3_t6_s5",
      "target": "quantum_root_p3_t6_s5_d2"
    },
    {
      "source": "quantum_root",
      "target": "quantum_root_p4"
    },
    {
      "source": "quantum_root_p4",
      "target": "quantum_root_p4_t1"
    },
    {
      "source": "quantum_root_p4_t1",
      "target": "quantum_root_p4_t1_s1"
    },
    {
      "source": "quantum_root_p4_t1_s1",
      "target": "quantum_root_p4_t1_s1_d1"
    },
    {
      "source": "quantum_root_p4_t1_s1",
      "target": "quantum_root_p4_t1_s1_d2"
    },
    {
      "source": "quantum_root_p4_t1",
      "target": "quantum_root_p4_t1_s2"
    },
    {
      "source": "quantum_root_p4_t1_s2",
      "target": "quantum_root_p4_t1_s2_d1"
    },
    {
      "source": "quantum_root_p4_t1_s2",
      "target": "quantum_root_p4_t1_s2_d2"
    },
    {
      "source": "quantum_root_p4_t1",
      "target": "quantum_root_p4_t1_s3"
    },
    {
      "source": "quantum_root_p4_t1_s3",
      "target": "quantum_root_p4_t1_s3_d1"
    },
    {
      "source": "quantum_root_p4_t1_s3",
      "target": "quantum_root_p4_t1_s3_d2"
    },
    {
      "source": "quantum_root_p4_t1",
      "target": "quantum_root_p4_t1_s4"
    },
    {
      "source": "quantum_root_p4_t1_s4",
      "target": "quantum_root_p4_t1_s4_d1"
    },
    {
      "source": "quantum_root_p4_t1_s4",
      "target": "quantum_root_p4_t1_s4_d2"
    },
    {
      "source": "quantum_root_p4_t1",
      "target": "quantum_root_p4_t1_s5"
    },
    {
      "source": "quantum_root_p4_t1_s5",
      "target": "quantum_root_p4_t1_s5_d1"
    },
    {
      "source": "quantum_root_p4_t1_s5",
      "target": "quantum_root_p4_t1_s5_d2"
    },
    {
      "source": "quantum_root_p4",
      "target": "quantum_root_p4_t2"
    },
    {
      "source": "quantum_root_p4_t2",
      "target": "quantum_root_p4_t2_s1"
    },
    {
      "source": "quantum_root_p4_t2_s1",
      "target": "quantum_root_p4_t2_s1_d1"
    },
    {
      "source": "quantum_root_p4_t2_s1",
      "target": "quantum_root_p4_t2_s1_d2"
    },
    {
      "source": "quantum_root_p4_t2",
      "target": "quantum_root_p4_t2_s2"
    },
    {
      "source": "quantum_root_p4_t2_s2",
      "target": "quantum_root_p4_t2_s2_d1"
    },
    {
      "source": "quantum_root_p4_t2_s2",
      "target": "quantum_root_p4_t2_s2_d2"
    },
    {
      "source": "quantum_root_p4_t2",
      "target": "quantum_root_p4_t2_s3"
    },
    {
      "source": "quantum_root_p4_t2_s3",
      "target": "quantum_root_p4_t2_s3_d1"
    },
    {
      "source": "quantum_root_p4_t2_s3",
      "target": "quantum_root_p4_t2_s3_d2"
    },
    {
      "source": "quantum_root_p4_t2",
      "target": "quantum_root_p4_t2_s4"
    },
    {
      "source": "quantum_root_p4_t2_s4",
      "target": "quantum_root_p4_t2_s4_d1"
    },
    {
      "source": "quantum_root_p4_t2_s4",
      "target": "quantum_root_p4_t2_s4_d2"
    },
    {
      "source": "quantum_root_p4_t2",
      "target": "quantum_root_p4_t2_s5"
    },
    {
      "source": "quantum_root_p4_t2_s5",
      "target": "quantum_root_p4_t2_s5_d1"
    },
    {
      "source": "quantum_root_p4_t2_s5",
      "target": "quantum_root_p4_t2_s5_d2"
    },
    {
      "source": "quantum_root_p4",
      "target": "quantum_root_p4_t3"
    },
    {
      "source": "quantum_root_p4_t3",
      "target": "quantum_root_p4_t3_s1"
    },
    {
      "source": "quantum_root_p4_t3_s1",
      "target": "quantum_root_p4_t3_s1_d1"
    },
    {
      "source": "quantum_root_p4_t3_s1",
      "target": "quantum_root_p4_t3_s1_d2"
    },
    {
      "source": "quantum_root_p4_t3",
      "target": "quantum_root_p4_t3_s2"
    },
    {
      "source": "quantum_root_p4_t3_s2",
      "target": "quantum_root_p4_t3_s2_d1"
    },
    {
      "source": "quantum_root_p4_t3_s2",
      "target": "quantum_root_p4_t3_s2_d2"
    },
    {
      "source": "quantum_root_p4_t3",
      "target": "quantum_root_p4_t3_s3"
    },
    {
      "source": "quantum_root_p4_t3_s3",
      "target": "quantum_root_p4_t3_s3_d1"
    },
    {
      "source": "quantum_root_p4_t3_s3",
      "target": "quantum_root_p4_t3_s3_d2"
    },
    {
      "source": "quantum_root_p4_t3",
      "target": "quantum_root_p4_t3_s4"
    },
    {
      "source": "quantum_root_p4_t3_s4",
      "target": "quantum_root_p4_t3_s4_d1"
    },
    {
      "source": "quantum_root_p4_t3_s4",
      "target": "quantum_root_p4_t3_s4_d2"
    },
    {
      "source": "quantum_root_p4_t3",
      "target": "quantum_root_p4_t3_s5"
    },
    {
      "source": "quantum_root_p4_t3_s5",
      "target": "quantum_root_p4_t3_s5_d1"
    },
    {
      "source": "quantum_root_p4_t3_s5",
      "target": "quantum_root_p4_t3_s5_d2"
    },
    {
      "source": "quantum_root_p4",
      "target": "quantum_root_p4_t4"
    },
    {
      "source": "quantum_root_p4_t4",
      "target": "quantum_root_p4_t4_s1"
    },
    {
      "source": "quantum_root_p4_t4_s1",
      "target": "quantum_root_p4_t4_s1_d1"
    },
    {
      "source": "quantum_root_p4_t4_s1",
      "target": "quantum_root_p4_t4_s1_d2"
    },
    {
      "source": "quantum_root_p4_t4",
      "target": "quantum_root_p4_t4_s2"
    },
    {
      "source": "quantum_root_p4_t4_s2",
      "target": "quantum_root_p4_t4_s2_d1"
    },
    {
      "source": "quantum_root_p4_t4_s2",
      "target": "quantum_root_p4_t4_s2_d2"
    },
    {
      "source": "quantum_root_p4_t4",
      "target": "quantum_root_p4_t4_s3"
    },
    {
      "source": "quantum_root_p4_t4_s3",
      "target": "quantum_root_p4_t4_s3_d1"
    },
    {
      "source": "quantum_root_p4_t4_s3",
      "target": "quantum_root_p4_t4_s3_d2"
    },
    {
      "source": "quantum_root_p4_t4",
      "target": "quantum_root_p4_t4_s4"
    },
    {
      "source": "quantum_root_p4_t4_s4",
      "target": "quantum_root_p4_t4_s4_d1"
    },
    {
      "source": "quantum_root_p4_t4_s4",
      "target": "quantum_root_p4_t4_s4_d2"
    },
    {
      "source": "quantum_root_p4_t4",
      "target": "quantum_root_p4_t4_s5"
    },
    {
      "source": "quantum_root_p4_t4_s5",
      "target": "quantum_root_p4_t4_s5_d1"
    },
    {
      "source": "quantum_root_p4_t4_s5",
      "target": "quantum_root_p4_t4_s5_d2"
    },
    {
      "source": "quantum_root_p4",
      "target": "quantum_root_p4_t5"
    },
    {
      "source": "quantum_root_p4_t5",
      "target": "quantum_root_p4_t5_s1"
    },
    {
      "source": "quantum_root_p4_t5_s1",
      "target": "quantum_root_p4_t5_s1_d1"
    },
    {
      "source": "quantum_root_p4_t5_s1",
      "target": "quantum_root_p4_t5_s1_d2"
    },
    {
      "source": "quantum_root_p4_t5",
      "target": "quantum_root_p4_t5_s2"
    },
    {
      "source": "quantum_root_p4_t5_s2",
      "target": "quantum_root_p4_t5_s2_d1"
    },
    {
      "source": "quantum_root_p4_t5_s2",
      "target": "quantum_root_p4_t5_s2_d2"
    },
    {
      "source": "quantum_root_p4_t5",
      "target": "quantum_root_p4_t5_s3"
    },
    {
      "source": "quantum_root_p4_t5_s3",
      "target": "quantum_root_p4_t5_s3_d1"
    },
    {
      "source": "quantum_root_p4_t5_s3",
      "target": "quantum_root_p4_t5_s3_d2"
    },
    {
      "source": "quantum_root_p4_t5",
      "target": "quantum_root_p4_t5_s4"
    },
    {
      "source": "quantum_root_p4_t5_s4",
      "target": "quantum_root_p4_t5_s4_d1"
    },
    {
      "source": "quantum_root_p4_t5_s4",
      "target": "quantum_root_p4_t5_s4_d2"
    },
    {
      "source": "quantum_root_p4_t5",
      "target": "quantum_root_p4_t5_s5"
    },
    {
      "source": "quantum_root_p4_t5_s5",
      "target": "quantum_root_p4_t5_s5_d1"
    },
    {
      "source": "quantum_root_p4_t5_s5",
      "target": "quantum_root_p4_t5_s5_d2"
    },
    {
      "source": "quantum_root_p4",
      "target": "quantum_root_p4_t6"
    },
    {
      "source": "quantum_root_p4_t6",
      "target": "quantum_root_p4_t6_s1"
    },
    {
      "source": "quantum_root_p4_t6_s1",
      "target": "quantum_root_p4_t6_s1_d1"
    },
    {
      "source": "quantum_root_p4_t6_s1",
      "target": "quantum_root_p4_t6_s1_d2"
    },
    {
      "source": "quantum_root_p4_t6",
      "target": "quantum_root_p4_t6_s2"
    },
    {
      "source": "quantum_root_p4_t6_s2",
      "target": "quantum_root_p4_t6_s2_d1"
    },
    {
      "source": "quantum_root_p4_t6_s2",
      "target": "quantum_root_p4_t6_s2_d2"
    },
    {
      "source": "quantum_root_p4_t6",
      "target": "quantum_root_p4_t6_s3"
    },
    {
      "source": "quantum_root_p4_t6_s3",
      "target": "quantum_root_p4_t6_s3_d1"
    },
    {
      "source": "quantum_root_p4_t6_s3",
      "target": "quantum_root_p4_t6_s3_d2"
    },
    {
      "source": "quantum_root_p4_t6",
      "target": "quantum_root_p4_t6_s4"
    },
    {
      "source": "quantum_root_p4_t6_s4",
      "target": "quantum_root_p4_t6_s4_d1"
    },
    {
      "source": "quantum_root_p4_t6_s4",
      "target": "quantum_root_p4_t6_s4_d2"
    },
    {
      "source": "quantum_root_p4_t6",
      "target": "quantum_root_p4_t6_s5"
    },
    {
      "source": "quantum_root_p4_t6_s5",
      "target": "quantum_root_p4_t6_s5_d1"
    },
    {
      "source": "quantum_root_p4_t6_s5",
      "target": "quantum_root_p4_t6_s5_d2"
    },
    {
      "source": "quantum_root",
      "target": "quantum_root_p5"
    },
    {
      "source": "quantum_root_p5",
      "target": "quantum_root_p5_t1"
    },
    {
      "source": "quantum_root_p5_t1",
      "target": "quantum_root_p5_t1_s1"
    },
    {
      "source": "quantum_root_p5_t1_s1",
      "target": "quantum_root_p5_t1_s1_d1"
    },
    {
      "source": "quantum_root_p5_t1_s1",
      "target": "quantum_root_p5_t1_s1_d2"
    },
    {
      "source": "quantum_root_p5_t1",
      "target": "quantum_root_p5_t1_s2"
    },
    {
      "source": "quantum_root_p5_t1_s2",
      "target": "quantum_root_p5_t1_s2_d1"
    },
    {
      "source": "quantum_root_p5_t1_s2",
      "target": "quantum_root_p5_t1_s2_d2"
    },
    {
      "source": "quantum_root_p5_t1",
      "target": "quantum_root_p5_t1_s3"
    },
    {
      "source": "quantum_root_p5_t1_s3",
      "target": "quantum_root_p5_t1_s3_d1"
    },
    {
      "source": "quantum_root_p5_t1_s3",
      "target": "quantum_root_p5_t1_s3_d2"
    },
    {
      "source": "quantum_root_p5_t1",
      "target": "quantum_root_p5_t1_s4"
    },
    {
      "source": "quantum_root_p5_t1_s4",
      "target": "quantum_root_p5_t1_s4_d1"
    },
    {
      "source": "quantum_root_p5_t1_s4",
      "target": "quantum_root_p5_t1_s4_d2"
    },
    {
      "source": "quantum_root_p5_t1",
      "target": "quantum_root_p5_t1_s5"
    },
    {
      "source": "quantum_root_p5_t1_s5",
      "target": "quantum_root_p5_t1_s5_d1"
    },
    {
      "source": "quantum_root_p5_t1_s5",
      "target": "quantum_root_p5_t1_s5_d2"
    },
    {
      "source": "quantum_root_p5",
      "target": "quantum_root_p5_t2"
    },
    {
      "source": "quantum_root_p5_t2",
      "target": "quantum_root_p5_t2_s1"
    },
    {
      "source": "quantum_root_p5_t2_s1",
      "target": "quantum_root_p5_t2_s1_d1"
    },
    {
      "source": "quantum_root_p5_t2_s1",
      "target": "quantum_root_p5_t2_s1_d2"
    },
    {
      "source": "quantum_root_p5_t2",
      "target": "quantum_root_p5_t2_s2"
    },
    {
      "source": "quantum_root_p5_t2_s2",
      "target": "quantum_root_p5_t2_s2_d1"
    },
    {
      "source": "quantum_root_p5_t2_s2",
      "target": "quantum_root_p5_t2_s2_d2"
    },
    {
      "source": "quantum_root_p5_t2",
      "target": "quantum_root_p5_t2_s3"
    },
    {
      "source": "quantum_root_p5_t2_s3",
      "target": "quantum_root_p5_t2_s3_d1"
    },
    {
      "source": "quantum_root_p5_t2_s3",
      "target": "quantum_root_p5_t2_s3_d2"
    },
    {
      "source": "quantum_root_p5_t2",
      "target": "quantum_root_p5_t2_s4"
    },
    {
      "source": "quantum_root_p5_t2_s4",
      "target": "quantum_root_p5_t2_s4_d1"
    },
    {
      "source": "quantum_root_p5_t2_s4",
      "target": "quantum_root_p5_t2_s4_d2"
    },
    {
      "source": "quantum_root_p5_t2",
      "target": "quantum_root_p5_t2_s5"
    },
    {
      "source": "quantum_root_p5_t2_s5",
      "target": "quantum_root_p5_t2_s5_d1"
    },
    {
      "source": "quantum_root_p5_t2_s5",
      "target": "quantum_root_p5_t2_s5_d2"
    },
    {
      "source": "quantum_root_p5",
      "target": "quantum_root_p5_t3"
    },
    {
      "source": "quantum_root_p5_t3",
      "target": "quantum_root_p5_t3_s1"
    },
    {
      "source": "quantum_root_p5_t3_s1",
      "target": "quantum_root_p5_t3_s1_d1"
    },
    {
      "source": "quantum_root_p5_t3_s1",
      "target": "quantum_root_p5_t3_s1_d2"
    },
    {
      "source": "quantum_root_p5_t3",
      "target": "quantum_root_p5_t3_s2"
    },
    {
      "source": "quantum_root_p5_t3_s2",
      "target": "quantum_root_p5_t3_s2_d1"
    },
    {
      "source": "quantum_root_p5_t3_s2",
      "target": "quantum_root_p5_t3_s2_d2"
    },
    {
      "source": "quantum_root_p5_t3",
      "target": "quantum_root_p5_t3_s3"
    },
    {
      "source": "quantum_root_p5_t3_s3",
      "target": "quantum_root_p5_t3_s3_d1"
    },
    {
      "source": "quantum_root_p5_t3_s3",
      "target": "quantum_root_p5_t3_s3_d2"
    },
    {
      "source": "quantum_root_p5_t3",
      "target": "quantum_root_p5_t3_s4"
    },
    {
      "source": "quantum_root_p5_t3_s4",
      "target": "quantum_root_p5_t3_s4_d1"
    },
    {
      "source": "quantum_root_p5_t3_s4",
      "target": "quantum_root_p5_t3_s4_d2"
    },
    {
      "source": "quantum_root_p5_t3",
      "target": "quantum_root_p5_t3_s5"
    },
    {
      "source": "quantum_root_p5_t3_s5",
      "target": "quantum_root_p5_t3_s5_d1"
    },
    {
      "source": "quantum_root_p5_t3_s5",
      "target": "quantum_root_p5_t3_s5_d2"
    },
    {
      "source": "quantum_root_p5",
      "target": "quantum_root_p5_t4"
    },
    {
      "source": "quantum_root_p5_t4",
      "target": "quantum_root_p5_t4_s1"
    },
    {
      "source": "quantum_root_p5_t4_s1",
      "target": "quantum_root_p5_t4_s1_d1"
    },
    {
      "source": "quantum_root_p5_t4_s1",
      "target": "quantum_root_p5_t4_s1_d2"
    },
    {
      "source": "quantum_root_p5_t4",
      "target": "quantum_root_p5_t4_s2"
    },
    {
      "source": "quantum_root_p5_t4_s2",
      "target": "quantum_root_p5_t4_s2_d1"
    },
    {
      "source": "quantum_root_p5_t4_s2",
      "target": "quantum_root_p5_t4_s2_d2"
    },
    {
      "source": "quantum_root_p5_t4",
      "target": "quantum_root_p5_t4_s3"
    },
    {
      "source": "quantum_root_p5_t4_s3",
      "target": "quantum_root_p5_t4_s3_d1"
    },
    {
      "source": "quantum_root_p5_t4_s3",
      "target": "quantum_root_p5_t4_s3_d2"
    },
    {
      "source": "quantum_root_p5_t4",
      "target": "quantum_root_p5_t4_s4"
    },
    {
      "source": "quantum_root_p5_t4_s4",
      "target": "quantum_root_p5_t4_s4_d1"
    },
    {
      "source": "quantum_root_p5_t4_s4",
      "target": "quantum_root_p5_t4_s4_d2"
    },
    {
      "source": "quantum_root_p5_t4",
      "target": "quantum_root_p5_t4_s5"
    },
    {
      "source": "quantum_root_p5_t4_s5",
      "target": "quantum_root_p5_t4_s5_d1"
    },
    {
      "source": "quantum_root_p5_t4_s5",
      "target": "quantum_root_p5_t4_s5_d2"
    },
    {
      "source": "quantum_root_p5",
      "target": "quantum_root_p5_t5"
    },
    {
      "source": "quantum_root_p5_t5",
      "target": "quantum_root_p5_t5_s1"
    },
    {
      "source": "quantum_root_p5_t5_s1",
      "target": "quantum_root_p5_t5_s1_d1"
    },
    {
      "source": "quantum_root_p5_t5_s1",
      "target": "quantum_root_p5_t5_s1_d2"
    },
    {
      "source": "quantum_root_p5_t5",
      "target": "quantum_root_p5_t5_s2"
    },
    {
      "source": "quantum_root_p5_t5_s2",
      "target": "quantum_root_p5_t5_s2_d1"
    },
    {
      "source": "quantum_root_p5_t5_s2",
      "target": "quantum_root_p5_t5_s2_d2"
    },
    {
      "source": "quantum_root_p5_t5",
      "target": "quantum_root_p5_t5_s3"
    },
    {
      "source": "quantum_root_p5_t5_s3",
      "target": "quantum_root_p5_t5_s3_d1"
    },
    {
      "source": "quantum_root_p5_t5_s3",
      "target": "quantum_root_p5_t5_s3_d2"
    },
    {
      "source": "quantum_root_p5_t5",
      "target": "quantum_root_p5_t5_s4"
    },
    {
      "source": "quantum_root_p5_t5_s4",
      "target": "quantum_root_p5_t5_s4_d1"
    },
    {
      "source": "quantum_root_p5_t5_s4",
      "target": "quantum_root_p5_t5_s4_d2"
    },
    {
      "source": "quantum_root_p5_t5",
      "target": "quantum_root_p5_t5_s5"
    },
    {
      "source": "quantum_root_p5_t5_s5",
      "target": "quantum_root_p5_t5_s5_d1"
    },
    {
      "source": "quantum_root_p5_t5_s5",
      "target": "quantum_root_p5_t5_s5_d2"
    },
    {
      "source": "quantum_root_p5",
      "target": "quantum_root_p5_t6"
    },
    {
      "source": "quantum_root_p5_t6",
      "target": "quantum_root_p5_t6_s1"
    },
    {
      "source": "quantum_root_p5_t6_s1",
      "target": "quantum_root_p5_t6_s1_d1"
    },
    {
      "source": "quantum_root_p5_t6_s1",
      "target": "quantum_root_p5_t6_s1_d2"
    },
    {
      "source": "quantum_root_p5_t6",
      "target": "quantum_root_p5_t6_s2"
    },
    {
      "source": "quantum_root_p5_t6_s2",
      "target": "quantum_root_p5_t6_s2_d1"
    },
    {
      "source": "quantum_root_p5_t6_s2",
      "target": "quantum_root_p5_t6_s2_d2"
    },
    {
      "source": "quantum_root_p5_t6",
      "target": "quantum_root_p5_t6_s3"
    },
    {
      "source": "quantum_root_p5_t6_s3",
      "target": "quantum_root_p5_t6_s3_d1"
    },
    {
      "source": "quantum_root_p5_t6_s3",
      "target": "quantum_root_p5_t6_s3_d2"
    },
    {
      "source": "quantum_root_p5_t6",
      "target": "quantum_root_p5_t6_s4"
    },
    {
      "source": "quantum_root_p5_t6_s4",
      "target": "quantum_root_p5_t6_s4_d1"
    },
    {
      "source": "quantum_root_p5_t6_s4",
      "target": "quantum_root_p5_t6_s4_d2"
    },
    {
      "source": "quantum_root_p5_t6",
      "target": "quantum_root_p5_t6_s5"
    },
    {
      "source": "quantum_root_p5_t6_s5",
      "target": "quantum_root_p5_t6_s5_d1"
    },
    {
      "source": "quantum_root_p5_t6_s5",
      "target": "quantum_root_p5_t6_s5_d2"
    },
    {
      "source": "quantum_root",
      "target": "quantum_root_p6"
    },
    {
      "source": "quantum_root_p6",
      "target": "quantum_root_p6_t1"
    },
    {
      "source": "quantum_root_p6_t1",
      "target": "quantum_root_p6_t1_s1"
    },
    {
      "source": "quantum_root_p6_t1_s1",
      "target": "quantum_root_p6_t1_s1_d1"
    },
    {
      "source": "quantum_root_p6_t1_s1",
      "target": "quantum_root_p6_t1_s1_d2"
    },
    {
      "source": "quantum_root_p6_t1",
      "target": "quantum_root_p6_t1_s2"
    },
    {
      "source": "quantum_root_p6_t1_s2",
      "target": "quantum_root_p6_t1_s2_d1"
    },
    {
      "source": "quantum_root_p6_t1_s2",
      "target": "quantum_root_p6_t1_s2_d2"
    },
    {
      "source": "quantum_root_p6_t1",
      "target": "quantum_root_p6_t1_s3"
    },
    {
      "source": "quantum_root_p6_t1_s3",
      "target": "quantum_root_p6_t1_s3_d1"
    },
    {
      "source": "quantum_root_p6_t1_s3",
      "target": "quantum_root_p6_t1_s3_d2"
    },
    {
      "source": "quantum_root_p6_t1",
      "target": "quantum_root_p6_t1_s4"
    },
    {
      "source": "quantum_root_p6_t1_s4",
      "target": "quantum_root_p6_t1_s4_d1"
    },
    {
      "source": "quantum_root_p6_t1_s4",
      "target": "quantum_root_p6_t1_s4_d2"
    },
    {
      "source": "quantum_root_p6_t1",
      "target": "quantum_root_p6_t1_s5"
    },
    {
      "source": "quantum_root_p6_t1_s5",
      "target": "quantum_root_p6_t1_s5_d1"
    },
    {
      "source": "quantum_root_p6_t1_s5",
      "target": "quantum_root_p6_t1_s5_d2"
    },
    {
      "source": "quantum_root_p6",
      "target": "quantum_root_p6_t2"
    },
    {
      "source": "quantum_root_p6_t2",
      "target": "quantum_root_p6_t2_s1"
    },
    {
      "source": "quantum_root_p6_t2_s1",
      "target": "quantum_root_p6_t2_s1_d1"
    },
    {
      "source": "quantum_root_p6_t2_s1",
      "target": "quantum_root_p6_t2_s1_d2"
    },
    {
      "source": "quantum_root_p6_t2",
      "target": "quantum_root_p6_t2_s2"
    },
    {
      "source": "quantum_root_p6_t2_s2",
      "target": "quantum_root_p6_t2_s2_d1"
    },
    {
      "source": "quantum_root_p6_t2_s2",
      "target": "quantum_root_p6_t2_s2_d2"
    },
    {
      "source": "quantum_root_p6_t2",
      "target": "quantum_root_p6_t2_s3"
    },
    {
      "source": "quantum_root_p6_t2_s3",
      "target": "quantum_root_p6_t2_s3_d1"
    },
    {
      "source": "quantum_root_p6_t2_s3",
      "target": "quantum_root_p6_t2_s3_d2"
    },
    {
      "source": "quantum_root_p6_t2",
      "target": "quantum_root_p6_t2_s4"
    },
    {
      "source": "quantum_root_p6_t2_s4",
      "target": "quantum_root_p6_t2_s4_d1"
    },
    {
      "source": "quantum_root_p6_t2_s4",
      "target": "quantum_root_p6_t2_s4_d2"
    },
    {
      "source": "quantum_root_p6_t2",
      "target": "quantum_root_p6_t2_s5"
    },
    {
      "source": "quantum_root_p6_t2_s5",
      "target": "quantum_root_p6_t2_s5_d1"
    },
    {
      "source": "quantum_root_p6_t2_s5",
      "target": "quantum_root_p6_t2_s5_d2"
    },
    {
      "source": "quantum_root_p6",
      "target": "quantum_root_p6_t3"
    },
    {
      "source": "quantum_root_p6_t3",
      "target": "quantum_root_p6_t3_s1"
    },
    {
      "source": "quantum_root_p6_t3_s1",
      "target": "quantum_root_p6_t3_s1_d1"
    },
    {
      "source": "quantum_root_p6_t3_s1",
      "target": "quantum_root_p6_t3_s1_d2"
    },
    {
      "source": "quantum_root_p6_t3",
      "target": "quantum_root_p6_t3_s2"
    },
    {
      "source": "quantum_root_p6_t3_s2",
      "target": "quantum_root_p6_t3_s2_d1"
    },
    {
      "source": "quantum_root_p6_t3_s2",
      "target": "quantum_root_p6_t3_s2_d2"
    },
    {
      "source": "quantum_root_p6_t3",
      "target": "quantum_root_p6_t3_s3"
    },
    {
      "source": "quantum_root_p6_t3_s3",
      "target": "quantum_root_p6_t3_s3_d1"
    },
    {
      "source": "quantum_root_p6_t3_s3",
      "target": "quantum_root_p6_t3_s3_d2"
    },
    {
      "source": "quantum_root_p6_t3",
      "target": "quantum_root_p6_t3_s4"
    },
    {
      "source": "quantum_root_p6_t3_s4",
      "target": "quantum_root_p6_t3_s4_d1"
    },
    {
      "source": "quantum_root_p6_t3_s4",
      "target": "quantum_root_p6_t3_s4_d2"
    },
    {
      "source": "quantum_root_p6_t3",
      "target": "quantum_root_p6_t3_s5"
    },
    {
      "source": "quantum_root_p6_t3_s5",
      "target": "quantum_root_p6_t3_s5_d1"
    },
    {
      "source": "quantum_root_p6_t3_s5",
      "target": "quantum_root_p6_t3_s5_d2"
    },
    {
      "source": "quantum_root_p6",
      "target": "quantum_root_p6_t4"
    },
    {
      "source": "quantum_root_p6_t4",
      "target": "quantum_root_p6_t4_s1"
    },
    {
      "source": "quantum_root_p6_t4_s1",
      "target": "quantum_root_p6_t4_s1_d1"
    },
    {
      "source": "quantum_root_p6_t4_s1",
      "target": "quantum_root_p6_t4_s1_d2"
    },
    {
      "source": "quantum_root_p6_t4",
      "target": "quantum_root_p6_t4_s2"
    },
    {
      "source": "quantum_root_p6_t4_s2",
      "target": "quantum_root_p6_t4_s2_d1"
    },
    {
      "source": "quantum_root_p6_t4_s2",
      "target": "quantum_root_p6_t4_s2_d2"
    },
    {
      "source": "quantum_root_p6_t4",
      "target": "quantum_root_p6_t4_s3"
    },
    {
      "source": "quantum_root_p6_t4_s3",
      "target": "quantum_root_p6_t4_s3_d1"
    },
    {
      "source": "quantum_root_p6_t4_s3",
      "target": "quantum_root_p6_t4_s3_d2"
    },
    {
      "source": "quantum_root_p6_t4",
      "target": "quantum_root_p6_t4_s4"
    },
    {
      "source": "quantum_root_p6_t4_s4",
      "target": "quantum_root_p6_t4_s4_d1"
    },
    {
      "source": "quantum_root_p6_t4_s4",
      "target": "quantum_root_p6_t4_s4_d2"
    },
    {
      "source": "quantum_root_p6_t4",
      "target": "quantum_root_p6_t4_s5"
    },
    {
      "source": "quantum_root_p6_t4_s5",
      "target": "quantum_root_p6_t4_s5_d1"
    },
    {
      "source": "quantum_root_p6_t4_s5",
      "target": "quantum_root_p6_t4_s5_d2"
    },
    {
      "source": "quantum_root_p6",
      "target": "quantum_root_p6_t5"
    },
    {
      "source": "quantum_root_p6_t5",
      "target": "quantum_root_p6_t5_s1"
    },
    {
      "source": "quantum_root_p6_t5_s1",
      "target": "quantum_root_p6_t5_s1_d1"
    },
    {
      "source": "quantum_root_p6_t5_s1",
      "target": "quantum_root_p6_t5_s1_d2"
    },
    {
      "source": "quantum_root_p6_t5",
      "target": "quantum_root_p6_t5_s2"
    },
    {
      "source": "quantum_root_p6_t5_s2",
      "target": "quantum_root_p6_t5_s2_d1"
    },
    {
      "source": "quantum_root_p6_t5_s2",
      "target": "quantum_root_p6_t5_s2_d2"
    },
    {
      "source": "quantum_root_p6_t5",
      "target": "quantum_root_p6_t5_s3"
    },
    {
      "source": "quantum_root_p6_t5_s3",
      "target": "quantum_root_p6_t5_s3_d1"
    },
    {
      "source": "quantum_root_p6_t5_s3",
      "target": "quantum_root_p6_t5_s3_d2"
    },
    {
      "source": "quantum_root_p6_t5",
      "target": "quantum_root_p6_t5_s4"
    },
    {
      "source": "quantum_root_p6_t5_s4",
      "target": "quantum_root_p6_t5_s4_d1"
    },
    {
      "source": "quantum_root_p6_t5_s4",
      "target": "quantum_root_p6_t5_s4_d2"
    },
    {
      "source": "quantum_root_p6_t5",
      "target": "quantum_root_p6_t5_s5"
    },
    {
      "source": "quantum_root_p6_t5_s5",
      "target": "quantum_root_p6_t5_s5_d1"
    },
    {
      "source": "quantum_root_p6_t5_s5",
      "target": "quantum_root_p6_t5_s5_d2"
    },
    {
      "source": "quantum_root_p6",
      "target": "quantum_root_p6_t6"
    },
    {
      "source": "quantum_root_p6_t6",
      "target": "quantum_root_p6_t6_s1"
    },
    {
      "source": "quantum_root_p6_t6_s1",
      "target": "quantum_root_p6_t6_s1_d1"
    },
    {
      "source": "quantum_root_p6_t6_s1",
      "target": "quantum_root_p6_t6_s1_d2"
    },
    {
      "source": "quantum_root_p6_t6",
      "target": "quantum_root_p6_t6_s2"
    },
    {
      "source": "quantum_root_p6_t6_s2",
      "target": "quantum_root_p6_t6_s2_d1"
    },
    {
      "source": "quantum_root_p6_t6_s2",
      "target": "quantum_root_p6_t6_s2_d2"
    },
    {
      "source": "quantum_root_p6_t6",
      "target": "quantum_root_p6_t6_s3"
    },
    {
      "source": "quantum_root_p6_t6_s3",
      "target": "quantum_root_p6_t6_s3_d1"
    },
    {
      "source": "quantum_root_p6_t6_s3",
      "target": "quantum_root_p6_t6_s3_d2"
    },
    {
      "source": "quantum_root_p6_t6",
      "target": "quantum_root_p6_t6_s4"
    },
    {
      "source": "quantum_root_p6_t6_s4",
      "target": "quantum_root_p6_t6_s4_d1"
    },
    {
      "source": "quantum_root_p6_t6_s4",
      "target": "quantum_root_p6_t6_s4_d2"
    },
    {
      "source": "quantum_root_p6_t6",
      "target": "quantum_root_p6_t6_s5"
    },
    {
      "source": "quantum_root_p6_t6_s5",
      "target": "quantum_root_p6_t6_s5_d1"
    },
    {
      "source": "quantum_root_p6_t6_s5",
      "target": "quantum_root_p6_t6_s5_d2"
    },
    {
      "source": "quantum_root",
      "target": "quantum_root_p7"
    },
    {
      "source": "quantum_root_p7",
      "target": "quantum_root_p7_t1"
    },
    {
      "source": "quantum_root_p7_t1",
      "target": "quantum_root_p7_t1_s1"
    },
    {
      "source": "quantum_root_p7_t1_s1",
      "target": "quantum_root_p7_t1_s1_d1"
    },
    {
      "source": "quantum_root_p7_t1_s1",
      "target": "quantum_root_p7_t1_s1_d2"
    },
    {
      "source": "quantum_root_p7_t1",
      "target": "quantum_root_p7_t1_s2"
    },
    {
      "source": "quantum_root_p7_t1_s2",
      "target": "quantum_root_p7_t1_s2_d1"
    },
    {
      "source": "quantum_root_p7_t1_s2",
      "target": "quantum_root_p7_t1_s2_d2"
    },
    {
      "source": "quantum_root_p7_t1",
      "target": "quantum_root_p7_t1_s3"
    },
    {
      "source": "quantum_root_p7_t1_s3",
      "target": "quantum_root_p7_t1_s3_d1"
    },
    {
      "source": "quantum_root_p7_t1_s3",
      "target": "quantum_root_p7_t1_s3_d2"
    },
    {
      "source": "quantum_root_p7_t1",
      "target": "quantum_root_p7_t1_s4"
    },
    {
      "source": "quantum_root_p7_t1_s4",
      "target": "quantum_root_p7_t1_s4_d1"
    },
    {
      "source": "quantum_root_p7_t1_s4",
      "target": "quantum_root_p7_t1_s4_d2"
    },
    {
      "source": "quantum_root_p7_t1",
      "target": "quantum_root_p7_t1_s5"
    },
    {
      "source": "quantum_root_p7_t1_s5",
      "target": "quantum_root_p7_t1_s5_d1"
    },
    {
      "source": "quantum_root_p7_t1_s5",
      "target": "quantum_root_p7_t1_s5_d2"
    },
    {
      "source": "quantum_root_p7",
      "target": "quantum_root_p7_t2"
    },
    {
      "source": "quantum_root_p7_t2",
      "target": "quantum_root_p7_t2_s1"
    },
    {
      "source": "quantum_root_p7_t2_s1",
      "target": "quantum_root_p7_t2_s1_d1"
    },
    {
      "source": "quantum_root_p7_t2_s1",
      "target": "quantum_root_p7_t2_s1_d2"
    },
    {
      "source": "quantum_root_p7_t2",
      "target": "quantum_root_p7_t2_s2"
    },
    {
      "source": "quantum_root_p7_t2_s2",
      "target": "quantum_root_p7_t2_s2_d1"
    },
    {
      "source": "quantum_root_p7_t2_s2",
      "target": "quantum_root_p7_t2_s2_d2"
    },
    {
      "source": "quantum_root_p7_t2",
      "target": "quantum_root_p7_t2_s3"
    },
    {
      "source": "quantum_root_p7_t2_s3",
      "target": "quantum_root_p7_t2_s3_d1"
    },
    {
      "source": "quantum_root_p7_t2_s3",
      "target": "quantum_root_p7_t2_s3_d2"
    },
    {
      "source": "quantum_root_p7_t2",
      "target": "quantum_root_p7_t2_s4"
    },
    {
      "source": "quantum_root_p7_t2_s4",
      "target": "quantum_root_p7_t2_s4_d1"
    },
    {
      "source": "quantum_root_p7_t2_s4",
      "target": "quantum_root_p7_t2_s4_d2"
    },
    {
      "source": "quantum_root_p7_t2",
      "target": "quantum_root_p7_t2_s5"
    },
    {
      "source": "quantum_root_p7_t2_s5",
      "target": "quantum_root_p7_t2_s5_d1"
    },
    {
      "source": "quantum_root_p7_t2_s5",
      "target": "quantum_root_p7_t2_s5_d2"
    },
    {
      "source": "quantum_root_p7",
      "target": "quantum_root_p7_t3"
    },
    {
      "source": "quantum_root_p7_t3",
      "target": "quantum_root_p7_t3_s1"
    },
    {
      "source": "quantum_root_p7_t3_s1",
      "target": "quantum_root_p7_t3_s1_d1"
    },
    {
      "source": "quantum_root_p7_t3_s1",
      "target": "quantum_root_p7_t3_s1_d2"
    },
    {
      "source": "quantum_root_p7_t3",
      "target": "quantum_root_p7_t3_s2"
    },
    {
      "source": "quantum_root_p7_t3_s2",
      "target": "quantum_root_p7_t3_s2_d1"
    },
    {
      "source": "quantum_root_p7_t3_s2",
      "target": "quantum_root_p7_t3_s2_d2"
    },
    {
      "source": "quantum_root_p7_t3",
      "target": "quantum_root_p7_t3_s3"
    },
    {
      "source": "quantum_root_p7_t3_s3",
      "target": "quantum_root_p7_t3_s3_d1"
    },
    {
      "source": "quantum_root_p7_t3_s3",
      "target": "quantum_root_p7_t3_s3_d2"
    },
    {
      "source": "quantum_root_p7_t3",
      "target": "quantum_root_p7_t3_s4"
    },
    {
      "source": "quantum_root_p7_t3_s4",
      "target": "quantum_root_p7_t3_s4_d1"
    },
    {
      "source": "quantum_root_p7_t3_s4",
      "target": "quantum_root_p7_t3_s4_d2"
    },
    {
      "source": "quantum_root_p7_t3",
      "target": "quantum_root_p7_t3_s5"
    },
    {
      "source": "quantum_root_p7_t3_s5",
      "target": "quantum_root_p7_t3_s5_d1"
    },
    {
      "source": "quantum_root_p7_t3_s5",
      "target": "quantum_root_p7_t3_s5_d2"
    },
    {
      "source": "quantum_root_p7",
      "target": "quantum_root_p7_t4"
    },
    {
      "source": "quantum_root_p7_t4",
      "target": "quantum_root_p7_t4_s1"
    },
    {
      "source": "quantum_root_p7_t4_s1",
      "target": "quantum_root_p7_t4_s1_d1"
    },
    {
      "source": "quantum_root_p7_t4_s1",
      "target": "quantum_root_p7_t4_s1_d2"
    },
    {
      "source": "quantum_root_p7_t4",
      "target": "quantum_root_p7_t4_s2"
    },
    {
      "source": "quantum_root_p7_t4_s2",
      "target": "quantum_root_p7_t4_s2_d1"
    },
    {
      "source": "quantum_root_p7_t4_s2",
      "target": "quantum_root_p7_t4_s2_d2"
    },
    {
      "source": "quantum_root_p7_t4",
      "target": "quantum_root_p7_t4_s3"
    },
    {
      "source": "quantum_root_p7_t4_s3",
      "target": "quantum_root_p7_t4_s3_d1"
    },
    {
      "source": "quantum_root_p7_t4_s3",
      "target": "quantum_root_p7_t4_s3_d2"
    },
    {
      "source": "quantum_root_p7_t4",
      "target": "quantum_root_p7_t4_s4"
    },
    {
      "source": "quantum_root_p7_t4_s4",
      "target": "quantum_root_p7_t4_s4_d1"
    },
    {
      "source": "quantum_root_p7_t4_s4",
      "target": "quantum_root_p7_t4_s4_d2"
    },
    {
      "source": "quantum_root_p7_t4",
      "target": "quantum_root_p7_t4_s5"
    },
    {
      "source": "quantum_root_p7_t4_s5",
      "target": "quantum_root_p7_t4_s5_d1"
    },
    {
      "source": "quantum_root_p7_t4_s5",
      "target": "quantum_root_p7_t4_s5_d2"
    },
    {
      "source": "quantum_root_p7",
      "target": "quantum_root_p7_t5"
    },
    {
      "source": "quantum_root_p7_t5",
      "target": "quantum_root_p7_t5_s1"
    },
    {
      "source": "quantum_root_p7_t5_s1",
      "target": "quantum_root_p7_t5_s1_d1"
    },
    {
      "source": "quantum_root_p7_t5_s1",
      "target": "quantum_root_p7_t5_s1_d2"
    },
    {
      "source": "quantum_root_p7_t5",
      "target": "quantum_root_p7_t5_s2"
    },
    {
      "source": "quantum_root_p7_t5_s2",
      "target": "quantum_root_p7_t5_s2_d1"
    },
    {
      "source": "quantum_root_p7_t5_s2",
      "target": "quantum_root_p7_t5_s2_d2"
    },
    {
      "source": "quantum_root_p7_t5",
      "target": "quantum_root_p7_t5_s3"
    },
    {
      "source": "quantum_root_p7_t5_s3",
      "target": "quantum_root_p7_t5_s3_d1"
    },
    {
      "source": "quantum_root_p7_t5_s3",
      "target": "quantum_root_p7_t5_s3_d2"
    },
    {
      "source": "quantum_root_p7_t5",
      "target": "quantum_root_p7_t5_s4"
    },
    {
      "source": "quantum_root_p7_t5_s4",
      "target": "quantum_root_p7_t5_s4_d1"
    },
    {
      "source": "quantum_root_p7_t5_s4",
      "target": "quantum_root_p7_t5_s4_d2"
    },
    {
      "source": "quantum_root_p7_t5",
      "target": "quantum_root_p7_t5_s5"
    },
    {
      "source": "quantum_root_p7_t5_s5",
      "target": "quantum_root_p7_t5_s5_d1"
    },
    {
      "source": "quantum_root_p7_t5_s5",
      "target": "quantum_root_p7_t5_s5_d2"
    },
    {
      "source": "quantum_root_p7",
      "target": "quantum_root_p7_t6"
    },
    {
      "source": "quantum_root_p7_t6",
      "target": "quantum_root_p7_t6_s1"
    },
    {
      "source": "quantum_root_p7_t6_s1",
      "target": "quantum_root_p7_t6_s1_d1"
    },
    {
      "source": "quantum_root_p7_t6_s1",
      "target": "quantum_root_p7_t6_s1_d2"
    },
    {
      "source": "quantum_root_p7_t6",
      "target": "quantum_root_p7_t6_s2"
    },
    {
      "source": "quantum_root_p7_t6_s2",
      "target": "quantum_root_p7_t6_s2_d1"
    },
    {
      "source": "quantum_root_p7_t6_s2",
      "target": "quantum_root_p7_t6_s2_d2"
    },
    {
      "source": "quantum_root_p7_t6",
      "target": "quantum_root_p7_t6_s3"
    },
    {
      "source": "quantum_root_p7_t6_s3",
      "target": "quantum_root_p7_t6_s3_d1"
    },
    {
      "source": "quantum_root_p7_t6_s3",
      "target": "quantum_root_p7_t6_s3_d2"
    },
    {
      "source": "quantum_root_p7_t6",
      "target": "quantum_root_p7_t6_s4"
    },
    {
      "source": "quantum_root_p7_t6_s4",
      "target": "quantum_root_p7_t6_s4_d1"
    },
    {
      "source": "quantum_root_p7_t6_s4",
      "target": "quantum_root_p7_t6_s4_d2"
    },
    {
      "source": "quantum_root_p7_t6",
      "target": "quantum_root_p7_t6_s5"
    },
    {
      "source": "quantum_root_p7_t6_s5",
      "target": "quantum_root_p7_t6_s5_d1"
    },
    {
      "source": "quantum_root_p7_t6_s5",
      "target": "quantum_root_p7_t6_s5_d2"
    },
    {
      "source": "quantum_root",
      "target": "quantum_root_p8"
    },
    {
      "source": "quantum_root_p8",
      "target": "quantum_root_p8_t1"
    },
    {
      "source": "quantum_root_p8_t1",
      "target": "quantum_root_p8_t1_s1"
    },
    {
      "source": "quantum_root_p8_t1_s1",
      "target": "quantum_root_p8_t1_s1_d1"
    },
    {
      "source": "quantum_root_p8_t1_s1",
      "target": "quantum_root_p8_t1_s1_d2"
    },
    {
      "source": "quantum_root_p8_t1",
      "target": "quantum_root_p8_t1_s2"
    },
    {
      "source": "quantum_root_p8_t1_s2",
      "target": "quantum_root_p8_t1_s2_d1"
    },
    {
      "source": "quantum_root_p8_t1_s2",
      "target": "quantum_root_p8_t1_s2_d2"
    },
    {
      "source": "quantum_root_p8_t1",
      "target": "quantum_root_p8_t1_s3"
    },
    {
      "source": "quantum_root_p8_t1_s3",
      "target": "quantum_root_p8_t1_s3_d1"
    },
    {
      "source": "quantum_root_p8_t1_s3",
      "target": "quantum_root_p8_t1_s3_d2"
    },
    {
      "source": "quantum_root_p8_t1",
      "target": "quantum_root_p8_t1_s4"
    },
    {
      "source": "quantum_root_p8_t1_s4",
      "target": "quantum_root_p8_t1_s4_d1"
    },
    {
      "source": "quantum_root_p8_t1_s4",
      "target": "quantum_root_p8_t1_s4_d2"
    },
    {
      "source": "quantum_root_p8_t1",
      "target": "quantum_root_p8_t1_s5"
    },
    {
      "source": "quantum_root_p8_t1_s5",
      "target": "quantum_root_p8_t1_s5_d1"
    },
    {
      "source": "quantum_root_p8_t1_s5",
      "target": "quantum_root_p8_t1_s5_d2"
    },
    {
      "source": "quantum_root_p8",
      "target": "quantum_root_p8_t2"
    },
    {
      "source": "quantum_root_p8_t2",
      "target": "quantum_root_p8_t2_s1"
    },
    {
      "source": "quantum_root_p8_t2_s1",
      "target": "quantum_root_p8_t2_s1_d1"
    },
    {
      "source": "quantum_root_p8_t2_s1",
      "target": "quantum_root_p8_t2_s1_d2"
    },
    {
      "source": "quantum_root_p8_t2",
      "target": "quantum_root_p8_t2_s2"
    },
    {
      "source": "quantum_root_p8_t2_s2",
      "target": "quantum_root_p8_t2_s2_d1"
    },
    {
      "source": "quantum_root_p8_t2_s2",
      "target": "quantum_root_p8_t2_s2_d2"
    },
    {
      "source": "quantum_root_p8_t2",
      "target": "quantum_root_p8_t2_s3"
    },
    {
      "source": "quantum_root_p8_t2_s3",
      "target": "quantum_root_p8_t2_s3_d1"
    },
    {
      "source": "quantum_root_p8_t2_s3",
      "target": "quantum_root_p8_t2_s3_d2"
    },
    {
      "source": "quantum_root_p8_t2",
      "target": "quantum_root_p8_t2_s4"
    },
    {
      "source": "quantum_root_p8_t2_s4",
      "target": "quantum_root_p8_t2_s4_d1"
    },
    {
      "source": "quantum_root_p8_t2_s4",
      "target": "quantum_root_p8_t2_s4_d2"
    },
    {
      "source": "quantum_root_p8_t2",
      "target": "quantum_root_p8_t2_s5"
    },
    {
      "source": "quantum_root_p8_t2_s5",
      "target": "quantum_root_p8_t2_s5_d1"
    },
    {
      "source": "quantum_root_p8_t2_s5",
      "target": "quantum_root_p8_t2_s5_d2"
    },
    {
      "source": "quantum_root_p8",
      "target": "quantum_root_p8_t3"
    },
    {
      "source": "quantum_root_p8_t3",
      "target": "quantum_root_p8_t3_s1"
    },
    {
      "source": "quantum_root_p8_t3_s1",
      "target": "quantum_root_p8_t3_s1_d1"
    },
    {
      "source": "quantum_root_p8_t3_s1",
      "target": "quantum_root_p8_t3_s1_d2"
    },
    {
      "source": "quantum_root_p8_t3",
      "target": "quantum_root_p8_t3_s2"
    },
    {
      "source": "quantum_root_p8_t3_s2",
      "target": "quantum_root_p8_t3_s2_d1"
    },
    {
      "source": "quantum_root_p8_t3_s2",
      "target": "quantum_root_p8_t3_s2_d2"
    },
    {
      "source": "quantum_root_p8_t3",
      "target": "quantum_root_p8_t3_s3"
    },
    {
      "source": "quantum_root_p8_t3_s3",
      "target": "quantum_root_p8_t3_s3_d1"
    },
    {
      "source": "quantum_root_p8_t3_s3",
      "target": "quantum_root_p8_t3_s3_d2"
    },
    {
      "source": "quantum_root_p8_t3",
      "target": "quantum_root_p8_t3_s4"
    },
    {
      "source": "quantum_root_p8_t3_s4",
      "target": "quantum_root_p8_t3_s4_d1"
    },
    {
      "source": "quantum_root_p8_t3_s4",
      "target": "quantum_root_p8_t3_s4_d2"
    },
    {
      "source": "quantum_root_p8_t3",
      "target": "quantum_root_p8_t3_s5"
    },
    {
      "source": "quantum_root_p8_t3_s5",
      "target": "quantum_root_p8_t3_s5_d1"
    },
    {
      "source": "quantum_root_p8_t3_s5",
      "target": "quantum_root_p8_t3_s5_d2"
    },
    {
      "source": "quantum_root_p8",
      "target": "quantum_root_p8_t4"
    },
    {
      "source": "quantum_root_p8_t4",
      "target": "quantum_root_p8_t4_s1"
    },
    {
      "source": "quantum_root_p8_t4_s1",
      "target": "quantum_root_p8_t4_s1_d1"
    },
    {
      "source": "quantum_root_p8_t4_s1",
      "target": "quantum_root_p8_t4_s1_d2"
    },
    {
      "source": "quantum_root_p8_t4",
      "target": "quantum_root_p8_t4_s2"
    },
    {
      "source": "quantum_root_p8_t4_s2",
      "target": "quantum_root_p8_t4_s2_d1"
    },
    {
      "source": "quantum_root_p8_t4_s2",
      "target": "quantum_root_p8_t4_s2_d2"
    },
    {
      "source": "quantum_root_p8_t4",
      "target": "quantum_root_p8_t4_s3"
    },
    {
      "source": "quantum_root_p8_t4_s3",
      "target": "quantum_root_p8_t4_s3_d1"
    },
    {
      "source": "quantum_root_p8_t4_s3",
      "target": "quantum_root_p8_t4_s3_d2"
    },
    {
      "source": "quantum_root_p8_t4",
      "target": "quantum_root_p8_t4_s4"
    },
    {
      "source": "quantum_root_p8_t4_s4",
      "target": "quantum_root_p8_t4_s4_d1"
    },
    {
      "source": "quantum_root_p8_t4_s4",
      "target": "quantum_root_p8_t4_s4_d2"
    },
    {
      "source": "quantum_root_p8_t4",
      "target": "quantum_root_p8_t4_s5"
    },
    {
      "source": "quantum_root_p8_t4_s5",
      "target": "quantum_root_p8_t4_s5_d1"
    },
    {
      "source": "quantum_root_p8_t4_s5",
      "target": "quantum_root_p8_t4_s5_d2"
    },
    {
      "source": "quantum_root_p8",
      "target": "quantum_root_p8_t5"
    },
    {
      "source": "quantum_root_p8_t5",
      "target": "quantum_root_p8_t5_s1"
    },
    {
      "source": "quantum_root_p8_t5_s1",
      "target": "quantum_root_p8_t5_s1_d1"
    },
    {
      "source": "quantum_root_p8_t5_s1",
      "target": "quantum_root_p8_t5_s1_d2"
    },
    {
      "source": "quantum_root_p8_t5",
      "target": "quantum_root_p8_t5_s2"
    },
    {
      "source": "quantum_root_p8_t5_s2",
      "target": "quantum_root_p8_t5_s2_d1"
    },
    {
      "source": "quantum_root_p8_t5_s2",
      "target": "quantum_root_p8_t5_s2_d2"
    },
    {
      "source": "quantum_root_p8_t5",
      "target": "quantum_root_p8_t5_s3"
    },
    {
      "source": "quantum_root_p8_t5_s3",
      "target": "quantum_root_p8_t5_s3_d1"
    },
    {
      "source": "quantum_root_p8_t5_s3",
      "target": "quantum_root_p8_t5_s3_d2"
    },
    {
      "source": "quantum_root_p8_t5",
      "target": "quantum_root_p8_t5_s4"
    },
    {
      "source": "quantum_root_p8_t5_s4",
      "target": "quantum_root_p8_t5_s4_d1"
    },
    {
      "source": "quantum_root_p8_t5_s4",
      "target": "quantum_root_p8_t5_s4_d2"
    },
    {
      "source": "quantum_root_p8_t5",
      "target": "quantum_root_p8_t5_s5"
    },
    {
      "source": "quantum_root_p8_t5_s5",
      "target": "quantum_root_p8_t5_s5_d1"
    },
    {
      "source": "quantum_root_p8_t5_s5",
      "target": "quantum_root_p8_t5_s5_d2"
    },
    {
      "source": "quantum_root_p8",
      "target": "quantum_root_p8_t6"
    },
    {
      "source": "quantum_root_p8_t6",
      "target": "quantum_root_p8_t6_s1"
    },
    {
      "source": "quantum_root_p8_t6_s1",
      "target": "quantum_root_p8_t6_s1_d1"
    },
    {
      "source": "quantum_root_p8_t6_s1",
      "target": "quantum_root_p8_t6_s1_d2"
    },
    {
      "source": "quantum_root_p8_t6",
      "target": "quantum_root_p8_t6_s2"
    },
    {
      "source": "quantum_root_p8_t6_s2",
      "target": "quantum_root_p8_t6_s2_d1"
    },
    {
      "source": "quantum_root_p8_t6_s2",
      "target": "quantum_root_p8_t6_s2_d2"
    },
    {
      "source": "quantum_root_p8_t6",
      "target": "quantum_root_p8_t6_s3"
    },
    {
      "source": "quantum_root_p8_t6_s3",
      "target": "quantum_root_p8_t6_s3_d1"
    },
    {
      "source": "quantum_root_p8_t6_s3",
      "target": "quantum_root_p8_t6_s3_d2"
    },
    {
      "source": "quantum_root_p8_t6",
      "target": "quantum_root_p8_t6_s4"
    },
    {
      "source": "quantum_root_p8_t6_s4",
      "target": "quantum_root_p8_t6_s4_d1"
    },
    {
      "source": "quantum_root_p8_t6_s4",
      "target": "quantum_root_p8_t6_s4_d2"
    },
    {
      "source": "quantum_root_p8_t6",
      "target": "quantum_root_p8_t6_s5"
    },
    {
      "source": "quantum_root_p8_t6_s5",
      "target": "quantum_root_p8_t6_s5_d1"
    },
    {
      "source": "quantum_root_p8_t6_s5",
      "target": "quantum_root_p8_t6_s5_d2"
    }
  ]
};
