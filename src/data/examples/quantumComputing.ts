import { MindMapData } from "../../services/llmService";

export const QUANTUM_COMPUTING_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "qc_root",
      "label": "Quantum Computing & Advanced Physics",
      "description": "Full mathematical, algorithmic, and physical foundation of quantum information processing.",
      "type": "topic",
      "importance": "high",
      "tags": [
        "quantum",
        "physics",
        "math",
        "hardware"
      ],
      "confidence": "high"
    },
    {
      "id": "qc_p1",
      "label": "1. Quantum Mechanics & Linear Algebra",
      "description": "Mathematical foundations of quantum state space.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "pillar"
      ]
    },
    {
      "id": "qc_p1_t1",
      "label": "Qubit Hilbert State Space",
      "description": "State vector representations in 2D complex vector spaces.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "qc_p1_t1_s0",
      "label": "Dirac Bra-Ket Notation |ψ⟩ = α|0⟩ + β|1⟩",
      "description": "Mathematical proof and physical principle behind Dirac Bra-Ket Notation |ψ⟩ = α|0⟩ + β|1⟩.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p1_t1_s1",
      "label": "Bloch Sphere Geometric Representation",
      "description": "Mathematical proof and physical principle behind Bloch Sphere Geometric Representation.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p1_t1_s2",
      "label": "Complex Probability Amplitudes (|α|² + |β|² = 1)",
      "description": "Mathematical proof and physical principle behind Complex Probability Amplitudes (|α|² + |β|² = 1).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p1_t1_s3",
      "label": "Tensor Products for Multi-Qubit State Systems",
      "description": "Mathematical proof and physical principle behind Tensor Products for Multi-Qubit State Systems.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p1_t1_s4",
      "label": "Unitary Matrices & Reversible State Transformations",
      "description": "Mathematical proof and physical principle behind Unitary Matrices & Reversible State Transformations.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p1_t2",
      "label": "Quantum Phenomena",
      "description": "Non-classical physical behaviors exploited by quantum algorithms.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "qc_p1_t2_s0",
      "label": "Quantum Superposition of Basis States",
      "description": "Mathematical proof and physical principle behind Quantum Superposition of Basis States.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p1_t2_s1",
      "label": "Quantum Entanglement & EPR Pairs",
      "description": "Mathematical proof and physical principle behind Quantum Entanglement & EPR Pairs.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p1_t2_s2",
      "label": "No-Cloning Theorem Proof",
      "description": "Mathematical proof and physical principle behind No-Cloning Theorem Proof.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p1_t2_s3",
      "label": "Quantum Measurement & Wavefunction Collapse",
      "description": "Mathematical proof and physical principle behind Quantum Measurement & Wavefunction Collapse.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p1_t2_s4",
      "label": "Decoherence & T1/T2 Relaxation Times",
      "description": "Mathematical proof and physical principle behind Decoherence & T1/T2 Relaxation Times.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p2",
      "label": "2. Quantum Logic Gates & Circuits",
      "description": "Reversible quantum transformations.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "pillar"
      ]
    },
    {
      "id": "qc_p2_t1",
      "label": "Single Qubit Gate Set",
      "description": "Rotation operators on the Bloch sphere.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "qc_p2_t1_s0",
      "label": "Hadamard (H) Superposition Gate",
      "description": "Mathematical proof and physical principle behind Hadamard (H) Superposition Gate.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p2_t1_s1",
      "label": "Pauli-X, Y, Z Rotation Operators",
      "description": "Mathematical proof and physical principle behind Pauli-X, Y, Z Rotation Operators.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p2_t1_s2",
      "label": "Phase Gates: S Gate & T Gate (π/4 Rotation)",
      "description": "Mathematical proof and physical principle behind Phase Gates: S Gate & T Gate (π/4 Rotation).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p2_t1_s3",
      "label": "Arbitrary Single-Qubit Rotations R_x, R_y, R_z",
      "description": "Mathematical proof and physical principle behind Arbitrary Single-Qubit Rotations R_x, R_y, R_z.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p2_t2",
      "label": "Multi-Qubit Entangling Gates",
      "description": "Generators of non-local quantum correlations.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "qc_p2_t2_s0",
      "label": "Controlled-NOT (CNOT / CX) Gate",
      "description": "Mathematical proof and physical principle behind Controlled-NOT (CNOT / CX) Gate.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p2_t2_s1",
      "label": "Controlled-Phase (CZ) & SWAP Gates",
      "description": "Mathematical proof and physical principle behind Controlled-Phase (CZ) & SWAP Gates.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p2_t2_s2",
      "label": "Toffoli (CCNOT) 3-Qubit Universal Gate",
      "description": "Mathematical proof and physical principle behind Toffoli (CCNOT) 3-Qubit Universal Gate.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p2_t2_s3",
      "label": "Quantum Circuit Synthesis & Compiler Optimization",
      "description": "Mathematical proof and physical principle behind Quantum Circuit Synthesis & Compiler Optimization.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p3",
      "label": "3. Quantum Algorithms & Complexity",
      "description": "Algorithms demonstrating exponential or quadratic speedups.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "pillar"
      ]
    },
    {
      "id": "qc_p3_t1",
      "label": "Shor's Factorization Algorithm",
      "description": "Polynomial-time integer factorization breaking RSA encryption.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "qc_p3_t1_s0",
      "label": "Quantum Fourier Transform (QFT) Circuit",
      "description": "Mathematical proof and physical principle behind Quantum Fourier Transform (QFT) Circuit.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p3_t1_s1",
      "label": "Quantum Phase Estimation (QPE)",
      "description": "Mathematical proof and physical principle behind Quantum Phase Estimation (QPE).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p3_t1_s2",
      "label": "Modular Exponentiation Circuit Construction",
      "description": "Mathematical proof and physical principle behind Modular Exponentiation Circuit Construction.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p3_t1_s3",
      "label": "Period Finding on Abelian Groups",
      "description": "Mathematical proof and physical principle behind Period Finding on Abelian Groups.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p3_t2",
      "label": "Grover's Search & NISQ Algorithms",
      "description": "Unstructured search and near-term hybrid algorithms.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "qc_p3_t2_s0",
      "label": "Grover Amplitude Amplification Operator",
      "description": "Mathematical proof and physical principle behind Grover Amplitude Amplification Operator.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p3_t2_s1",
      "label": "Variational Quantum Eigensolver (VQE) for Chemistry",
      "description": "Mathematical proof and physical principle behind Variational Quantum Eigensolver (VQE) for Chemistry.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p3_t2_s2",
      "label": "Quantum Approximate Optimization Algorithm (QAOA)",
      "description": "Mathematical proof and physical principle behind Quantum Approximate Optimization Algorithm (QAOA).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p3_t2_s3",
      "label": "Quantum Machine Learning & Quantum SVM",
      "description": "Mathematical proof and physical principle behind Quantum Machine Learning & Quantum SVM.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p4",
      "label": "4. Physical Hardware Modalities",
      "description": "Physical systems engineered for quantum processing.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "pillar"
      ]
    },
    {
      "id": "qc_p4_t1",
      "label": "Superconducting Transmons",
      "description": "Josephson junction LC circuits cooled to 15 mK.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "qc_p4_t1_s0",
      "label": "IBM Quantum & Google Sycamore Processors",
      "description": "Mathematical proof and physical principle behind IBM Quantum & Google Sycamore Processors.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p4_t1_s1",
      "label": "Dilution Refrigerators & Microwave Control Pulses",
      "description": "Mathematical proof and physical principle behind Dilution Refrigerators & Microwave Control Pulses.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p4_t1_s2",
      "label": "Cross-Resonance Drive Entangling Gates",
      "description": "Mathematical proof and physical principle behind Cross-Resonance Drive Entangling Gates.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p4_t1_s3",
      "label": "Superconducting Qubit Readout Resonators",
      "description": "Mathematical proof and physical principle behind Superconducting Qubit Readout Resonators.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p4_t2",
      "label": "Trapped Ions & Photonic Qubits",
      "description": "Atomic states and optical photon circuits.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "topic"
      ]
    },
    {
      "id": "qc_p4_t2_s0",
      "label": "IonQ Laser-Trapped Ytterbium Ions",
      "description": "Mathematical proof and physical principle behind IonQ Laser-Trapped Ytterbium Ions.",
      "type": "concept",
      "importance": "high",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p4_t2_s1",
      "label": "Linear Optical Quantum Computing (LOQC)",
      "description": "Mathematical proof and physical principle behind Linear Optical Quantum Computing (LOQC).",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p4_t2_s2",
      "label": "Topological Qubits & Majorana Zero Modes",
      "description": "Mathematical proof and physical principle behind Topological Qubits & Majorana Zero Modes.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    },
    {
      "id": "qc_p4_t2_s3",
      "label": "Surface Code Fault-Tolerant Error Correction",
      "description": "Mathematical proof and physical principle behind Surface Code Fault-Tolerant Error Correction.",
      "type": "concept",
      "importance": "medium",
      "tags": [
        "detail"
      ]
    }
  ],
  "edges": [
    {
      "source": "qc_root",
      "target": "qc_p1",
      "label": "Subsystem"
    },
    {
      "source": "qc_p1",
      "target": "qc_p1_t1"
    },
    {
      "source": "qc_p1_t1",
      "target": "qc_p1_t1_s0"
    },
    {
      "source": "qc_p1_t1",
      "target": "qc_p1_t1_s1"
    },
    {
      "source": "qc_p1_t1",
      "target": "qc_p1_t1_s2"
    },
    {
      "source": "qc_p1_t1",
      "target": "qc_p1_t1_s3"
    },
    {
      "source": "qc_p1_t1",
      "target": "qc_p1_t1_s4"
    },
    {
      "source": "qc_p1",
      "target": "qc_p1_t2"
    },
    {
      "source": "qc_p1_t2",
      "target": "qc_p1_t2_s0"
    },
    {
      "source": "qc_p1_t2",
      "target": "qc_p1_t2_s1"
    },
    {
      "source": "qc_p1_t2",
      "target": "qc_p1_t2_s2"
    },
    {
      "source": "qc_p1_t2",
      "target": "qc_p1_t2_s3"
    },
    {
      "source": "qc_p1_t2",
      "target": "qc_p1_t2_s4"
    },
    {
      "source": "qc_root",
      "target": "qc_p2",
      "label": "Subsystem"
    },
    {
      "source": "qc_p2",
      "target": "qc_p2_t1"
    },
    {
      "source": "qc_p2_t1",
      "target": "qc_p2_t1_s0"
    },
    {
      "source": "qc_p2_t1",
      "target": "qc_p2_t1_s1"
    },
    {
      "source": "qc_p2_t1",
      "target": "qc_p2_t1_s2"
    },
    {
      "source": "qc_p2_t1",
      "target": "qc_p2_t1_s3"
    },
    {
      "source": "qc_p2",
      "target": "qc_p2_t2"
    },
    {
      "source": "qc_p2_t2",
      "target": "qc_p2_t2_s0"
    },
    {
      "source": "qc_p2_t2",
      "target": "qc_p2_t2_s1"
    },
    {
      "source": "qc_p2_t2",
      "target": "qc_p2_t2_s2"
    },
    {
      "source": "qc_p2_t2",
      "target": "qc_p2_t2_s3"
    },
    {
      "source": "qc_root",
      "target": "qc_p3",
      "label": "Subsystem"
    },
    {
      "source": "qc_p3",
      "target": "qc_p3_t1"
    },
    {
      "source": "qc_p3_t1",
      "target": "qc_p3_t1_s0"
    },
    {
      "source": "qc_p3_t1",
      "target": "qc_p3_t1_s1"
    },
    {
      "source": "qc_p3_t1",
      "target": "qc_p3_t1_s2"
    },
    {
      "source": "qc_p3_t1",
      "target": "qc_p3_t1_s3"
    },
    {
      "source": "qc_p3",
      "target": "qc_p3_t2"
    },
    {
      "source": "qc_p3_t2",
      "target": "qc_p3_t2_s0"
    },
    {
      "source": "qc_p3_t2",
      "target": "qc_p3_t2_s1"
    },
    {
      "source": "qc_p3_t2",
      "target": "qc_p3_t2_s2"
    },
    {
      "source": "qc_p3_t2",
      "target": "qc_p3_t2_s3"
    },
    {
      "source": "qc_root",
      "target": "qc_p4",
      "label": "Subsystem"
    },
    {
      "source": "qc_p4",
      "target": "qc_p4_t1"
    },
    {
      "source": "qc_p4_t1",
      "target": "qc_p4_t1_s0"
    },
    {
      "source": "qc_p4_t1",
      "target": "qc_p4_t1_s1"
    },
    {
      "source": "qc_p4_t1",
      "target": "qc_p4_t1_s2"
    },
    {
      "source": "qc_p4_t1",
      "target": "qc_p4_t1_s3"
    },
    {
      "source": "qc_p4",
      "target": "qc_p4_t2"
    },
    {
      "source": "qc_p4_t2",
      "target": "qc_p4_t2_s0"
    },
    {
      "source": "qc_p4_t2",
      "target": "qc_p4_t2_s1"
    },
    {
      "source": "qc_p4_t2",
      "target": "qc_p4_t2_s2"
    },
    {
      "source": "qc_p4_t2",
      "target": "qc_p4_t2_s3"
    }
  ]
};
