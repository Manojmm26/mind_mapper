import { MindMapData } from "../../services/llmService";

export const CRYPTOGRAPHY_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "crypto_root",
      "label": "Applied Cryptography & Zero-Knowledge Proofs",
      "description": "Rigorous first-principles blueprint of symmetric/asymmetric primitives, post-quantum lattice cryptography, zk-SNARK/STARK proof systems, PKI, HSMs, Signal Double Ratchet, and Homomorphic Encryption.",
      "type": "topic"
    },
    {
      "id": "crypto_root_p1",
      "label": "Symmetric Primitives & Block Ciphers",
      "description": "Foundational block cipher transformations, authenticated encryption modes, and key derivation functions.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t1",
      "label": "AES (Advanced Encryption Standard) Architecture",
      "description": "Symmetric block cipher operating on 128-bit state matrices across 10, 12, or 14 rounds.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t1_s1",
      "label": "Galois Field GF(2^8) Arithmetic",
      "description": "Performing mathematical operations in finite field GF(2^8) modulo irreducible polynomial x^8 + x^4 + x^3 + x + 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t1_s1_d1",
      "label": "Byte Substitution (SubBytes S-Box)",
      "description": "Applying non-linear GF(2^8) multiplicative inverse followed by affine transformations.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t1_s1_d2",
      "label": "AES Hardware Vector Acceleration (AES-NI)",
      "description": "Executing SubBytes and MixColumns in dedicated CPU hardware instructions (aesenc).",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t1_s2",
      "label": "AES State Matrix Transformations",
      "description": "Iterating through 4x4 byte state array transformations during round execution.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t1_s2_d1",
      "label": "ShiftRows Cyclic Permutation",
      "description": "Cyclically shifting the last three rows of the state array by 1, 2, and 3 byte offsets.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t1_s2_d2",
      "label": "MixColumns Polynomial Matrix Multiplication",
      "description": "Multiplying state columns by fixed polynomial c(x) over GF(2^8) to provide diffusion.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t1_s3",
      "label": "Key Schedule & Round Key Generation",
      "description": "Expanding 128, 192, or 256-bit master keys into 11, 13, or 15 round key arrays.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t1_s3_d1",
      "label": "RotWord & SubWord Key Operations",
      "description": "Rotating 32-bit words and passing bytes through S-Box lookup tables.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t1_s3_d2",
      "label": "Rcon Round Constant XOR Injection",
      "description": "XORing round constants Rcon[i] to eliminate symmetry across key expansion rounds.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t1_s4",
      "label": "AddRoundKey State XOR",
      "description": "XORing state array bytes directly with corresponding round key bytes.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t1_s4_d1",
      "label": "Initial & Final Round Modifications",
      "description": "Executing initial AddRoundKey pass and omitting MixColumns in the final round.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t1_s4_d2",
      "label": "InvCipher Decryption Transformations",
      "description": "Applying inverse operations (InvSubBytes, InvShiftRows, InvMixColumns) during decryption.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t1_s5",
      "label": "Side-Channel Attack Vulnerabilities (Cache Timing)",
      "description": "Vulnerabilities where software table lookups leak key material via CPU cache timing variations.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t1_s5_d1",
      "label": "Software T-Table Cache Line Leakage",
      "description": "Leaking S-Box memory access patterns to local attacker processes via CPU L1 cache hits/misses.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t1_s5_d2",
      "label": "Constant-Time Bit-Slicing Implementations",
      "description": "Re-implementing AES using bitwise logic operations to guarantee constant execution time.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t2",
      "label": "AES-GCM Authenticated Encryption",
      "description": "Galois Counter Mode combining CTR mode confidentiality with GHASH polynomial MAC authentication.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t2_s1",
      "label": "CTR (Counter Mode) Encryption Engine",
      "description": "Encrypting incrementing counter values with AES to generate pseudorandom key streams.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t2_s1_d1",
      "label": "Keystream XOR Encryption",
      "description": "XORing plaintext blocks directly with encrypted counter values.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t2_s1_d2",
      "label": "Parallel Block Encryption Advantage",
      "description": "Encrypting independent counter blocks simultaneously across parallel AES-NI pipelines.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t2_s2",
      "label": "GHASH Polynomial Multiplication MAC",
      "description": "Computing authentication tags over ciphertext blocks using Galois field GF(2^128) arithmetic.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t2_s2_d1",
      "label": "GF(2^128) Field Multiplication (PCLMULQDQ)",
      "description": "Multiplying ciphertext blocks in GF(2^128) modulo x^128 + x^7 + x^2 + x + 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t2_s2_d2",
      "label": "Additional Authenticated Data (AAD) Ingestion",
      "description": "Authenticating unencrypted header metadata alongside encrypted message payloads.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t2_s3",
      "label": "GCM Nonce Reuse Catastrophic Failure",
      "description": "Complete security collapse occurring when a 96-bit initialization vector (IV) is reused under a key.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t2_s3_d1",
      "label": "Keystream Cancellation Attack",
      "description": "XORing two ciphertexts encrypted under identical nonces to reveal XOR of plaintexts.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t2_s3_d2",
      "label": "GHASH Authentication Key H Recovery",
      "description": "Recovering the hash key H from reused IV signatures to forge valid authentication tags.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t2_s4",
      "label": "AES-GCM-SIV Synthetic IV Resilience",
      "description": "Nonce-misuse-resistant AEAD scheme preventing catastrophic leaks when IVs repeat.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t2_s4_d1",
      "label": "Two-Pass Synthetic IV Derivation",
      "description": "Generating IVs deterministically by hashing plaintext and AAD prior to encryption.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t2_s4_d2",
      "label": "Graceful Degradation Under Nonce Reuse",
      "description": "Restricting security loss to identifying duplicate messages without leaking key material.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t2_s5",
      "label": "Tag Verification Constant-Time Comparison",
      "description": "Comparing computed authentication tags against message tags safely.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t2_s5_d1",
      "label": "Timing Attack Exploitation Risks",
      "description": "Preventing early-exit string comparisons from leaking tag byte values via execution time differences.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t2_s5_d2",
      "label": "Bitwise OR Accumulator Verification",
      "description": "OR-ing byte differences into an accumulator to force constant-time evaluation.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t3",
      "label": "ChaCha20-Poly1305 AEAD Construction",
      "description": "High-speed software cipher combining ChaCha20 stream cipher with Poly1305 MAC.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t3_s1",
      "label": "ChaCha20 Quarter-Round ARX Mechanics",
      "description": "Core transformation operating on 4x4 32-bit state matrices using Addition, Rotation, and XOR.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t3_s1_d1",
      "label": "ARX State Matrix Operation Loop",
      "description": "Executing a += b; d ^= a; d <<<= 16; c += d; b ^= c; b <<<= 12 ... transformations.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t3_s1_d2",
      "label": "Double-Round Column & Diagonal Passes",
      "description": "Executing 20 rounds alternating between column quarter-rounds and diagonal quarter-rounds.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t3_s2",
      "label": "Poly1305 One-Time Authenticator",
      "description": "High-speed evaluation MAC evaluating polynomials in finite field GF(2^130 - 5).",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t3_s2_d1",
      "label": "Polynomial Evaluation Modulo 2^130 - 5",
      "description": "Evaluating message blocks as polynomial terms over prime field 2^130 - 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t3_s2_d2",
      "label": "One-Time Key r Clamp Masking",
      "description": "Clamping key r bits to clear specific bits for constant-time evaluation safety.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t3_s3",
      "label": "Constant-Time Software Performance",
      "description": "Achieving high performance on mobile devices without dedicated hardware vector instructions.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t3_s3_d1",
      "label": "Zero Data-Dependent Memory Access",
      "description": "Eliminating S-Box table lookups to prevent cache-timing side-channel attacks by design.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t3_s3_d2",
      "label": "ARM Neon Vectorization Bounds",
      "description": "Processing 4 quarter-rounds in parallel using 128-bit SIMD Neon registers.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t3_s4",
      "label": "XChaCha20 Extended Nonce Support",
      "description": "Extending ChaCha20 nonces from 96 bits to 192 bits to enable safe random nonce generation.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t3_s4_d1",
      "label": "HChaCha20 Subkey Derivation Pass",
      "description": "Processing first 128 bits of 192-bit nonce with key to derive subkey for standard ChaCha20.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t3_s4_d2",
      "label": "Zero Random Collision Risks",
      "description": "Eliminating nonce collision risks when generating nonces randomly across distributed systems.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t3_s5",
      "label": "TLS 1.3 Suite Standard Integration",
      "description": "Standard adoption of TLS_CHACHA20_POLY1305_SHA256 alongside AES-GCM.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t3_s5_d1",
      "label": "Mobile Battery Efficiency Gains",
      "description": "Consuming significantly less mobile CPU energy than un-accelerated software AES implementations.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t3_s5_d2",
      "label": "RFC 8439 Protocol Specification",
      "description": "Standardizing AEAD payload formatting, nonce construction, and tag concatenation.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t4",
      "label": "HKDF & Key Derivation Functions",
      "description": "HMAC-based Key Derivation Function converting weak input key material into strong cryptographic keys.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t4_s1",
      "label": "HKDF-Extract Phase Mechanics",
      "description": "Extracting a pseudorandom key (PRK) from input key material (IKM) using salt.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t4_s1_d1",
      "label": "PRK = HMAC-Hash(Salt, IKM) Formula",
      "description": "Extracting fixed-length PRK bytes using HMAC with optional salt.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t4_s1_d2",
      "label": "Entropy Concentration Guarantee",
      "description": "Concentrating non-uniform input entropy into uniformly distributed PRK keys.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t4_s2",
      "label": "HKDF-Expand Phase Mechanics",
      "description": "Expanding PRK into multiple cryptographically strong output keys of desired length.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t4_s2_d1",
      "label": "T(i) = HMAC-Hash(PRK, T(i-1) | info | i)",
      "description": "Generating sequential key blocks by chaining HMAC outputs with application context info and counter i.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t4_s2_d2",
      "label": "Application Domain Separation (info)",
      "description": "Injecting distinct info strings to derive isolated encryption, authentication, and IV keys.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t4_s3",
      "label": "Password Hashing & Memory-Hard Functions",
      "description": "Slow key derivation functions designed to resist GPU and ASIC brute-force attacks.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t4_s3_d1",
      "label": "Argon2id (Winner of Password Hashing Competition)",
      "description": "Combining Argon2d (data-dependent) and Argon2i (data-independent) memory passes.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t4_s3_d2",
      "label": "Scrypt & PBKDF2 Tradeoff Analysis",
      "description": "Using large memory buffers (Scrypt) vs sequential SHA-256 iterations (PBKDF2).",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t4_s4",
      "label": "Work Factor Tuning (Cost Parameters)",
      "description": "Configuring time, memory, and parallelism cost parameters for password storage.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t4_s4_d1",
      "label": "Argon2 Memory (m=64MB) & Time (t=3 passes)",
      "description": "Setting memory and time parameters to force 500ms derivation latencies per login.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t4_s4_d2",
      "label": "Bcrypt Work Factor Logarithmic Scale (2^12)",
      "description": "Scaling work factor 12 to force 4096 hashing rounds per password check.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t4_s5",
      "label": "Salt Generation & Collision Prevention",
      "description": "Generating unique random salts for password hashing to prevent rainbow table attacks.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t4_s5_d1",
      "label": "Cryptographically Secure Random Salts (128-bit)",
      "description": "Generating 16-byte random salts via CSPRNGs (/dev/urandom) for every stored password.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t4_s5_d2",
      "label": "Pre-Computed Rainbow Table Invalidation",
      "description": "Ensuring identical passwords produce distinct hash outputs.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t5",
      "label": "Symmetric Primitives & Block Ciphers Topic 5",
      "description": "Detailed first-principles mechanics for Symmetric Primitives & Block Ciphers topic 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t5_s1",
      "label": "Symmetric Primitives & Block Ciphers Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Symmetric Primitives & Block Ciphers Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t5_s1_d1",
      "label": "Symmetric Primitives & Block Ciphers Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Symmetric Primitives & Block Ciphers Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t5_s1_d2",
      "label": "Symmetric Primitives & Block Ciphers Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Symmetric Primitives & Block Ciphers Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t5_s2",
      "label": "Symmetric Primitives & Block Ciphers Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Symmetric Primitives & Block Ciphers Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t5_s2_d1",
      "label": "Symmetric Primitives & Block Ciphers Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Symmetric Primitives & Block Ciphers Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t5_s2_d2",
      "label": "Symmetric Primitives & Block Ciphers Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Symmetric Primitives & Block Ciphers Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t5_s3",
      "label": "Symmetric Primitives & Block Ciphers Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Symmetric Primitives & Block Ciphers Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t5_s3_d1",
      "label": "Symmetric Primitives & Block Ciphers Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Symmetric Primitives & Block Ciphers Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t5_s3_d2",
      "label": "Symmetric Primitives & Block Ciphers Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Symmetric Primitives & Block Ciphers Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t5_s4",
      "label": "Symmetric Primitives & Block Ciphers Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Symmetric Primitives & Block Ciphers Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t5_s4_d1",
      "label": "Symmetric Primitives & Block Ciphers Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Symmetric Primitives & Block Ciphers Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t5_s4_d2",
      "label": "Symmetric Primitives & Block Ciphers Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Symmetric Primitives & Block Ciphers Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t5_s5",
      "label": "Symmetric Primitives & Block Ciphers Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Symmetric Primitives & Block Ciphers Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t5_s5_d1",
      "label": "Symmetric Primitives & Block Ciphers Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Symmetric Primitives & Block Ciphers Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t5_s5_d2",
      "label": "Symmetric Primitives & Block Ciphers Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Symmetric Primitives & Block Ciphers Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t6",
      "label": "Symmetric Primitives & Block Ciphers Topic 6",
      "description": "Detailed first-principles mechanics for Symmetric Primitives & Block Ciphers topic 6.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t6_s1",
      "label": "Symmetric Primitives & Block Ciphers Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Symmetric Primitives & Block Ciphers Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t6_s1_d1",
      "label": "Symmetric Primitives & Block Ciphers Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Symmetric Primitives & Block Ciphers Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t6_s1_d2",
      "label": "Symmetric Primitives & Block Ciphers Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Symmetric Primitives & Block Ciphers Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t6_s2",
      "label": "Symmetric Primitives & Block Ciphers Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Symmetric Primitives & Block Ciphers Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t6_s2_d1",
      "label": "Symmetric Primitives & Block Ciphers Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Symmetric Primitives & Block Ciphers Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t6_s2_d2",
      "label": "Symmetric Primitives & Block Ciphers Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Symmetric Primitives & Block Ciphers Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t6_s3",
      "label": "Symmetric Primitives & Block Ciphers Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Symmetric Primitives & Block Ciphers Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t6_s3_d1",
      "label": "Symmetric Primitives & Block Ciphers Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Symmetric Primitives & Block Ciphers Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t6_s3_d2",
      "label": "Symmetric Primitives & Block Ciphers Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Symmetric Primitives & Block Ciphers Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t6_s4",
      "label": "Symmetric Primitives & Block Ciphers Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Symmetric Primitives & Block Ciphers Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t6_s4_d1",
      "label": "Symmetric Primitives & Block Ciphers Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Symmetric Primitives & Block Ciphers Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t6_s4_d2",
      "label": "Symmetric Primitives & Block Ciphers Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Symmetric Primitives & Block Ciphers Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t6_s5",
      "label": "Symmetric Primitives & Block Ciphers Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Symmetric Primitives & Block Ciphers Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t6_s5_d1",
      "label": "Symmetric Primitives & Block Ciphers Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Symmetric Primitives & Block Ciphers Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t6_s5_d2",
      "label": "Symmetric Primitives & Block Ciphers Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Symmetric Primitives & Block Ciphers Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2",
      "label": "Asymmetric Key Exchange & Signatures",
      "description": "Public-key cryptography based on Discrete Logarithms, Elliptic Curves, and RSA factorization bounds.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t1",
      "label": "Elliptic Curve Cryptography (ECC) Foundations",
      "description": "Public key primitives operating over algebraic structures of elliptic curves over finite fields.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t1_s1",
      "label": "Weierstrass & Edwards Curve Equations",
      "description": "Mathematical formulas defining valid curve point coordinates.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t1_s1_d1",
      "label": "Short Weierstrass Form (y^2 = x^3 + ax + b)",
      "description": "Defining curves like secp256k1 (a=0, b=7) used in Bitcoin and Ethereum.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t1_s1_d2",
      "label": "Twisted Edwards Form (ax^2 + y^2 = 1 + dx^2y^2)",
      "description": "Defining curves like Ed25519 providing complete addition formulas without point-at-infinity exceptions.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t1_s2",
      "label": "Scalar Point Multiplication Q = [k]P",
      "description": "Multiplying curve point P by scalar integer k using double-and-add algorithms.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t1_s2_d1",
      "label": "Double-and-Add Algorithm Steps",
      "description": "Iterating through binary bits of k, executing point doubling and conditional point addition.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t1_s2_d2",
      "label": "Montgomery Ladder Constant-Time Execution",
      "description": "Executing fixed sequence of operations to prevent side-channel timing leaks.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t1_s3",
      "label": "Elliptic Curve Discrete Logarithm Problem (ECDLP)",
      "description": "Hard mathematical problem securing ECC: finding k given P and Q = [k]P.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t1_s3_d1",
      "label": "Pollard's Rho Complexity O(sqrt(N))",
      "description": "Requiring 2^128 operations to break a 256-bit elliptic curve key.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t1_s3_d2",
      "label": "Key Size Efficiency vs RSA",
      "description": "Achieving 3072-bit RSA security level using 256-bit ECC key lengths.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t1_s4",
      "label": "Curve25519 & X25519 Key Exchange",
      "description": "High-speed Montgomery curve designed by Daniel J. Bernstein for Diffie-Hellman key exchange.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t1_s4_d1",
      "label": "x-Coordinate Only Multiplication",
      "description": "Bypassing y-coordinate computation to speed up scalar multiplication.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t1_s4_d2",
      "label": "Small-Subgroup Attack Immunity",
      "description": "Clamping scalar key bits to clear cofactor bits and prevent small-subgroup attacks.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t1_s5",
      "label": "Invalid Curve Attacks & Point Validation",
      "description": "Attacks exploiting implementations that fail to verify if received points lie on the curve.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t1_s5_d1",
      "label": "Weierstrass Equation Validation Check",
      "description": "Verifying y^2 == x^3 + ax + b (mod p) before executing point operations.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t1_s5_d2",
      "label": "Subgroup Order Verification Rules",
      "description": "Multiplying points by curve order n to ensure points belong to the main prime-order subgroup.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t2",
      "label": "ECDH & Ed25519 Digital Signatures",
      "description": "Key agreement protocols and Schnorr-based signature schemes operating on elliptic curves.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t2_s1",
      "label": "ECDH Shared Secret Derivation",
      "description": "Deriving shared secret points between two parties over insecure channels.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t2_s1_d1",
      "label": "S = d_A * Q_B = d_B * Q_A Equivalence",
      "description": "Multiplying private key d_A by peer public key Q_B to yield shared point S.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t2_s1_d2",
      "label": "HKDF Key Derivation Pass",
      "description": "Passing x-coordinate of shared point S through HKDF to derive symmetric encryption keys.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t2_s2",
      "label": "ECDSA Signature Generation & Verification",
      "description": "Standardized digital signature algorithm (ANSI X9.62) using ephemeral nonces k.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t2_s2_d1",
      "label": "Signature Pair (r, s) Calculation",
      "description": "Computing r = x_1 mod n and s = k^-1 * (z + r * d) mod n for hash z.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t2_s2_d2",
      "label": "Deterministic Nonce Derivation (RFC 6979)",
      "description": "Deriving nonce k deterministically via HMAC-SHA256(d, z) to prevent nonce reuse catastrophic leaks.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t2_s3",
      "label": "Ed25519 Edwards-Curve Digital Signature",
      "description": "High-speed Schnorr-like signature scheme operating on Twisted Edwards Curve25519.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t2_s3_d1",
      "label": "SHA-512 Hash State Prefixing",
      "description": "Hashing private key to generate secret scalar and message prefix for deterministic nonce derivation.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t2_s3_d2",
      "label": "Batch Verification Acceleration",
      "description": "Verifying multiple Ed25519 signatures simultaneously using random linear combinations.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t2_s4",
      "label": "ECDSA Nonce Reuse Catastrophic Vulnerability",
      "description": "Recovering private keys instantly when identical nonces k are used for two distinct signatures.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t2_s4_d1",
      "label": "Private Key Recovery Formula",
      "description": "Subtracting signatures s_1 - s_2 to solve for nonce k, then computing private key d.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t2_s4_d2",
      "label": "PlayStation 3 Master Key Compromise Case Study",
      "description": "Famous exploit recovering Sony master signing key due to static nonce implementation.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t2_s5",
      "label": "Schnorr Signatures & Taproot (Bitcoin BIP 340)",
      "description": "Linear signature scheme supporting multi-signature aggregation and batch verification.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t2_s5_d1",
      "label": "Signature Key Aggregation (MuSig)",
      "description": "Combining multiple public keys into a single joint public key and aggregated signature.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t2_s5_d2",
      "label": "Taproot Script Path Commitment",
      "description": "Committing Merkle trees of script conditions into public keys via tweaking.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t3",
      "label": "RSA Cryptosystem & Padding (OAEP / PSS)",
      "description": "Asymmetric algorithm based on prime factorization hardness and modular exponentiation.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t3_s1",
      "label": "RSA Key Generation & Euler Totient",
      "description": "Selecting large primes p and q to construct modulus n = p * q.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t3_s1_d1",
      "label": "Euler Totient phi(n) = (p-1)(q-1)",
      "description": "Computing secret totient and selecting public exponent e=65537.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t3_s1_d2",
      "label": "Modular Inverse Private Key d (d * e = 1 mod phi)",
      "description": "Computing private exponent d via Extended Euclidean Algorithm.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t3_s2",
      "label": "RSA Encryption & Decryption Math",
      "description": "Executing modular exponentiations c = m^e mod n and m = c^d mod n.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t3_s2_d1",
      "label": "Modular Exponentiation c = m^e mod n",
      "description": "Encrypting message integer m using public exponent e and modulus n.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t3_s2_d2",
      "label": "Chinese Remainder Theorem (CRT) Decryption",
      "description": "Speeding up c^d mod n decryption by 4x using CRT decomposition modulo p and q.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t3_s3",
      "label": "RSA-OAEP (Optimal Asymmetric Encryption Padding)",
      "description": "Feistel-network-based padding scheme preventing Bleichenbacher padding oracle attacks.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t3_s3_d1",
      "label": "Mask Generation Function (MGF1)",
      "description": "Masking plaintext with pseudorandom bytes derived from seed values via hash functions.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t3_s3_d2",
      "label": "IND-CCA2 Security Proof Standard",
      "description": "Providing provable security against adaptive chosen-ciphertext attacks.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t3_s4",
      "label": "RSA-PSS (Probabilistic Signature Scheme)",
      "description": "Modern provably secure padding scheme for RSA digital signatures.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t3_s4_d1",
      "label": "Salted Hash Input Formatting",
      "description": "Concatenating message hash, random salt, and fixed padding bytes before signing.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t3_s4_d2",
      "label": "Replacement of Legacy PKCS#1 v1.5 Padding",
      "description": "Eliminating structural flaws inherent in v1.5 signature padding format.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t3_s5",
      "label": "Bleichenbacher Padding Oracle Attack",
      "description": "Adaptive chosen-ciphertext attack exploiting PKCS#1 v1.5 decryption error messages.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t3_s5_d1",
      "label": "Million Request Oracle Probe",
      "description": "Sending modified ciphertexts and observing error responses to decrypt messages byte-by-byte.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t3_s5_d2",
      "label": "Constant-Time Decryption Error Normalization",
      "description": "Ensuring decryption failure responses remain identical regardless of padding validity.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t4",
      "label": "Diffie-Hellman Finite Field Key Exchange",
      "description": "Classical key agreement protocol operating in multiplicative groups of integers modulo prime p.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t4_s1",
      "label": "DH Modular Exponentiation Protocol",
      "description": "Exchanging g^a mod p and g^b mod p over public channels.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t4_s1_d1",
      "label": "Public Group Parameters (Prime p, Generator g)",
      "description": "Selecting 2048-bit to 4096-bit prime modulus p and generator g.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t4_s1_d2",
      "label": "Shared Key Computation (g^ab mod p)",
      "description": "Computing (g^b)^a mod p = (g^a)^b mod p to establish shared secrets.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t4_s2",
      "label": "Discrete Logarithm Problem (DLP)",
      "description": "Hardness assumption: finding private exponent a given g^a mod p.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t4_s2_d1",
      "label": "General Number Field Sieve (GNFS) Complexity",
      "description": "Evaluating sub-exponential algorithm bounds for breaking finite field DH groups.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t4_s2_d2",
      "label": "2048-Bit Minimum Key Length Requirement",
      "description": "Deprecating 1024-bit DH groups due to pre-computation attack capabilities (Logjam attack).",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t4_s3",
      "label": "Ephemeral Diffie-Hellman (DHE / ECDHE)",
      "description": "Generating new key pairs per session to guarantee Forward Secrecy.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t4_s3_d1",
      "label": "Session Ephemeral Private Keys",
      "description": "Discarding private keys immediately after session key derivation.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t4_s3_d2",
      "label": "Forward Secrecy Guarantee",
      "description": "Ensuring long-term private key compromises cannot decrypt past recorded sessions.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t4_s4",
      "label": "Man-in-the-Middle (MITM) Interception",
      "description": "Interception risk when public DH key exchange parameters are unauthenticated.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t4_s4_d1",
      "label": "Unauthenticated Exchange Risk",
      "description": "Attackers injecting custom DH public keys between Alice and Bob.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t4_s4_d2",
      "label": "Digital Signature Authentication Layer",
      "description": "Signing DH public key exchanges using RSA or ECDSA certificates.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t4_s5",
      "label": "Group Validation & Safe Prime Construction",
      "description": "Validating generator and prime properties to prevent subgroup attacks.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t4_s5_d1",
      "label": "Safe Prime Formula p = 2q + 1",
      "description": "Constructing prime p where q is also prime to eliminate small subgroups.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t4_s5_d2",
      "label": "Public Key Range Verification Bounds",
      "description": "Verifying received public keys lie strictly within [2, p-2] bounds.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t5",
      "label": "Asymmetric Key Exchange & Signatures Topic 5",
      "description": "Detailed first-principles mechanics for Asymmetric Key Exchange & Signatures topic 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t5_s1",
      "label": "Asymmetric Key Exchange & Signatures Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Asymmetric Key Exchange & Signatures Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t5_s1_d1",
      "label": "Asymmetric Key Exchange & Signatures Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Asymmetric Key Exchange & Signatures Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t5_s1_d2",
      "label": "Asymmetric Key Exchange & Signatures Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Asymmetric Key Exchange & Signatures Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t5_s2",
      "label": "Asymmetric Key Exchange & Signatures Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Asymmetric Key Exchange & Signatures Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t5_s2_d1",
      "label": "Asymmetric Key Exchange & Signatures Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Asymmetric Key Exchange & Signatures Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t5_s2_d2",
      "label": "Asymmetric Key Exchange & Signatures Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Asymmetric Key Exchange & Signatures Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t5_s3",
      "label": "Asymmetric Key Exchange & Signatures Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Asymmetric Key Exchange & Signatures Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t5_s3_d1",
      "label": "Asymmetric Key Exchange & Signatures Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Asymmetric Key Exchange & Signatures Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t5_s3_d2",
      "label": "Asymmetric Key Exchange & Signatures Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Asymmetric Key Exchange & Signatures Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t5_s4",
      "label": "Asymmetric Key Exchange & Signatures Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Asymmetric Key Exchange & Signatures Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t5_s4_d1",
      "label": "Asymmetric Key Exchange & Signatures Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Asymmetric Key Exchange & Signatures Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t5_s4_d2",
      "label": "Asymmetric Key Exchange & Signatures Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Asymmetric Key Exchange & Signatures Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t5_s5",
      "label": "Asymmetric Key Exchange & Signatures Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Asymmetric Key Exchange & Signatures Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t5_s5_d1",
      "label": "Asymmetric Key Exchange & Signatures Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Asymmetric Key Exchange & Signatures Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t5_s5_d2",
      "label": "Asymmetric Key Exchange & Signatures Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Asymmetric Key Exchange & Signatures Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t6",
      "label": "Asymmetric Key Exchange & Signatures Topic 6",
      "description": "Detailed first-principles mechanics for Asymmetric Key Exchange & Signatures topic 6.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t6_s1",
      "label": "Asymmetric Key Exchange & Signatures Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Asymmetric Key Exchange & Signatures Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t6_s1_d1",
      "label": "Asymmetric Key Exchange & Signatures Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Asymmetric Key Exchange & Signatures Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t6_s1_d2",
      "label": "Asymmetric Key Exchange & Signatures Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Asymmetric Key Exchange & Signatures Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t6_s2",
      "label": "Asymmetric Key Exchange & Signatures Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Asymmetric Key Exchange & Signatures Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t6_s2_d1",
      "label": "Asymmetric Key Exchange & Signatures Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Asymmetric Key Exchange & Signatures Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t6_s2_d2",
      "label": "Asymmetric Key Exchange & Signatures Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Asymmetric Key Exchange & Signatures Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t6_s3",
      "label": "Asymmetric Key Exchange & Signatures Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Asymmetric Key Exchange & Signatures Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t6_s3_d1",
      "label": "Asymmetric Key Exchange & Signatures Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Asymmetric Key Exchange & Signatures Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t6_s3_d2",
      "label": "Asymmetric Key Exchange & Signatures Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Asymmetric Key Exchange & Signatures Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t6_s4",
      "label": "Asymmetric Key Exchange & Signatures Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Asymmetric Key Exchange & Signatures Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t6_s4_d1",
      "label": "Asymmetric Key Exchange & Signatures Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Asymmetric Key Exchange & Signatures Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t6_s4_d2",
      "label": "Asymmetric Key Exchange & Signatures Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Asymmetric Key Exchange & Signatures Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t6_s5",
      "label": "Asymmetric Key Exchange & Signatures Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Asymmetric Key Exchange & Signatures Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t6_s5_d1",
      "label": "Asymmetric Key Exchange & Signatures Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Asymmetric Key Exchange & Signatures Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t6_s5_d2",
      "label": "Asymmetric Key Exchange & Signatures Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Asymmetric Key Exchange & Signatures Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3",
      "label": "Post-Quantum Cryptography (NIST Standards)",
      "description": "Quantum-resistant cryptographic algorithms based on lattice problems, code theory, and hash hierarchies.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t1",
      "label": "Lattice-Based Cryptography Foundations",
      "description": "Cryptographic constructions relying on the hardness of high-dimensional geometric lattice problems.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t1_s1",
      "label": "Learning With Errors (LWE) Problem",
      "description": "Finding secret vector s given noisy linear equations A * s + e = b (mod q).",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t1_s1_d1",
      "label": "Vector Noise Error Term e Injection",
      "description": "Adding small Gaussian noise vectors e to prevent Gaussian elimination solving.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t1_s1_d2",
      "label": "Worst-Case to Average-Case Lattice Hardness",
      "description": "Proving average LWE instance hardness reduces to worst-case lattice problems (SVP).",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t1_s2",
      "label": "Ring-LWE & Module-LWE Extensions",
      "description": "Algebraic optimizations replacing matrices with polynomial rings R_q = Z_q[X]/(X^n + 1).",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t1_s2_d1",
      "label": "Polynomial Ring Multiplication Speedups",
      "description": "Reducing key sizes and matrix multiplication times using polynomial rings.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t1_s2_d2",
      "label": "Number Theoretic Transform (NTT) Polynomial Multiplication",
      "description": "Multiplying polynomials in O(n log n) time using NTT algorithms.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t1_s3",
      "label": "Shortest Vector Problem (SVP) Hardness",
      "description": "Locating the non-zero shortest vector in an n-dimensional geometric lattice.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t1_s3_d1",
      "label": "High-Dimensional Lattice Space (n > 500)",
      "description": "Achieving quantum resistance when lattice dimensions exceed 500.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t1_s3_d2",
      "label": "Lattice Basis Reduction Algorithms (BKZ)",
      "description": "Evaluating post-quantum security margins against Block-Korkine-Zolotarev (BKZ) reduction attacks.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t1_s4",
      "label": "Quantum Shor's Algorithm Impact",
      "description": "Quantum polynomial-time algorithm breaking RSA, ECC, and DH systems.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t1_s4_d1",
      "label": "Quantum Period Finding Mechanics",
      "description": "Using Quantum Fourier Transform (QFT) to compute order of elements in polynomial time.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t1_s4_d2",
      "label": "Lattice Immunity to Shor's Algorithm",
      "description": "Lattice problems lacking periodic group structures vulnerable to QFT reduction.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t1_s5",
      "label": "Quantum Grover's Algorithm & Key Length Scaling",
      "description": "Quantum search algorithm providing quadratic speedup for unstructured brute-force searches.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t1_s5_d1",
      "label": "Quadratic Search Speedup O(sqrt(N))",
      "description": "Halving effective bit-security of symmetric ciphers and hash functions.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t1_s5_d2",
      "label": "AES-256 & SHA-384 Migration Requirement",
      "description": "Doubling symmetric key lengths to 256 bits to maintain 128-bit post-quantum security.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t2",
      "label": "NIST FIPS 203 ML-KEM (Kyber)",
      "description": "Module-Lattice Key Encapsulation Mechanism standardized by NIST for quantum-safe key exchange.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t2_s1",
      "label": "ML-KEM Parameter Sets (512, 768, 1024)",
      "description": "Standardized security categories offering varying levels of post-quantum protection.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t2_s1_d1",
      "label": "ML-KEM-768 Security Level (NIST Level 3)",
      "description": "Providing security equivalent to AES-192; primary recommended general-purpose standard.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t2_s1_d2",
      "label": "Polynomial Vector Dimensions k (k=2, 3, 4)",
      "description": "Scaling module rank k to adjust security vs public key byte size tradeoffs.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t2_s2",
      "label": "Encapsulation & Decapsulation Protocol Flow",
      "description": "Generating shared secrets and ciphertexts using public keys.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t2_s2_d1",
      "label": "Encapsulation Steps (K, C) = Encaps(pk)",
      "description": "Sampling random coins, generating shared secret K, and creating ciphertext vector C.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t2_s2_d2",
      "label": "Decapsulation Steps K = Decaps(sk, C)",
      "description": "Reconstructing shared secret K using secret key sk and received ciphertext C.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t2_s3",
      "label": "Fujisaki-Okamoto (FO) Transform",
      "description": "Converting IND-CPA secure encryption into IND-CCA2 secure key encapsulation.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t2_s3_d1",
      "label": "Implicit Re-Encryption Verification",
      "description": "Re-encrypting message payload during decapsulation to verify ciphertext integrity.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t2_s3_d2",
      "label": "Pseudorandom Key Generation on Failures",
      "description": "Returning deterministic pseudorandom keys on tampered ciphertexts to prevent oracle attacks.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t2_s4",
      "label": "Public Key & Ciphertext Byte Sizes",
      "description": "Managing larger key and ciphertext payloads compared to classic ECC.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t2_s4_d1",
      "label": "ML-KEM-768 Public Key (1184 Bytes)",
      "description": "Managing 1.18 KB public key sizes (vs 32 bytes for Ed25519).",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t2_s4_d2",
      "label": "ML-KEM-768 Ciphertext (1088 Bytes)",
      "description": "Handling 1.08 KB ciphertext payloads in TLS 1.3 ClientHello records.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t2_s5",
      "label": "Hybrid Classical/Post-Quantum KEM Suites",
      "description": "Combining X25519 with ML-KEM to protect against quantum threats without risking classic security.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t2_s5_d1",
      "label": "X25519 + ML-KEM-768 Hybrid Construction",
      "description": "Concatenating shared secrets from X25519 and ML-KEM-768 into single HKDF extraction inputs.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t2_s5_d2",
      "label": "Dual-Security Safety Guarantee",
      "description": "Guaranteeing security as long as either X25519 or ML-KEM remains un-broken.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t3",
      "label": "NIST FIPS 204 ML-DSA (Dilithium)",
      "description": "Module-Lattice Digital Signature Algorithm standardized by NIST for quantum-safe signatures.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t3_s1",
      "label": "Fiat-Shamir with Aborts Protocol",
      "description": "Converting interactive lattice identification schemes into non-interactive digital signatures.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t3_s1_d1",
      "label": "Rejection Sampling Step",
      "description": "Discarding generated candidate signature vectors if they leak secret key information.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t3_s1_d2",
      "label": "Bounded Signature Vector norm ||z|| < gamma",
      "description": "Checking signature vector coefficients to ensure they lie strictly within safe bounds.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t3_s2",
      "label": "ML-DSA Parameter Sets (2, 3, 5)",
      "description": "Standardized security categories (ML-DSA-44, ML-DSA-65, ML-DSA-87).",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t3_s2_d1",
      "label": "ML-DSA-65 Standard (NIST Level 3)",
      "description": "Primary recommended signature suite offering AES-192 equivalent post-quantum security.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t3_s2_d2",
      "label": "Module Matrix Dimensions (k, l)",
      "description": "Configuring k=6, l=5 polynomial matrix bounds for ML-DSA-65.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t3_s3",
      "label": "Signature & Public Key Payload Sizes",
      "description": "Handling larger signature payloads compared to classic ECDSA.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t3_s3_d1",
      "label": "ML-DSA-65 Public Key (1952 Bytes)",
      "description": "Managing 1.95 KB public key sizes in X.509 digital certificates.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t3_s3_d2",
      "label": "ML-DSA-65 Signature Size (3293 Bytes)",
      "description": "Handling 3.29 KB signature byte lengths in network protocol headers.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t3_s4",
      "label": "Deterministic vs Randomized Signing",
      "description": "Optionally injecting random seeds into signature generation to prevent side-channel leaks.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t3_s4_d1",
      "label": "Context String Pre-pending",
      "description": "Prepending context domain separation strings to prevent cross-protocol signature forgery.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t3_s4_d2",
      "label": "Side-Channel Protection via Randomization",
      "description": "Injecting CSPRNG random noise to mask secret polynomial coefficients.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t3_s5",
      "label": "Verification Speed Advantages",
      "description": "Achieving extremely fast signature verification speeds using NTT polynomial operations.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t3_s5_d1",
      "label": "Sub-Millisecond Verification Times",
      "description": "Verifying signatures faster than RSA-4096 and competitive with Ed25519.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t3_s5_d2",
      "label": "NTT Polynomial Matrix Multiplications",
      "description": "Executing vector-matrix polynomial multiplications efficiently on modern CPUs.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t4",
      "label": "Hash-Based & Code-Based Alternatives",
      "description": "Alternative post-quantum primitives based on cryptographic hash functions and error-correcting codes.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t4_s1",
      "label": "NIST FIPS 205 SLH-DSA (SPHINCS+)",
      "description": "Stateless hash-based digital signature scheme relying strictly on hash function security properties.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t4_s1_d1",
      "label": "Zero Lattice Hardness Assumption",
      "description": "Relying only on SHA-256 / SHAKE-256 collision and preimage resistance.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t4_s1_d2",
      "label": "FORS (Forest of Random Subtrees) One-Time Signatures",
      "description": "Signing message digests using hyper-tree structures of one-time signature schemes.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t4_s2",
      "label": "Classic McEliece Code-Based Encryption",
      "description": "Ultra-conservative post-quantum public-key encryption scheme based on Goppa codes.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t4_s2_d1",
      "label": "40-Year Cryptanalytic Track Record",
      "description": "Unbroken security track record since original formulation by Robert McEliece in 1978.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t4_s2_d2",
      "label": "Large Public Key Footprint (1 Megabyte)",
      "description": "Requiring 1MB public key sizes while generating tiny 128-byte ciphertexts.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t4_s3",
      "label": "LMS & XMSS Stateful Hash-Based Signatures",
      "description": "Stateful Merkle tree signature schemes (RFC 8554 / RFC 8391) for firmware signing.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t4_s3_d1",
      "label": "Stateful One-Time Signature Counting",
      "description": "Requiring precise tracking of used Merkle leaf indices to prevent private key reuse.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t4_s3_d2",
      "label": "Firmware & Bootloader Update Use Cases",
      "description": "Ideal for static firmware signing due to small public key sizes and conservative security.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t4_s4",
      "label": "NIST Standardization Category Tradeoffs",
      "description": "Comparing Lattice, Hash, and Code-based schemes across key size, signature size, and speed.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t4_s4_d1",
      "label": "Lattice Schemes (Balanced Efficiency)",
      "description": "Selected for general TLS networking due to balanced key/signature sizes.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t4_s4_d2",
      "label": "Hash Schemes (Maximum Conservative Safety)",
      "description": "Selected as fallback standards due to minimal security assumptions.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t4_s5",
      "label": "Migration Strategies & Crypto-Agility",
      "description": "Designing application architectures to support seamless cipher suite replacement.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t4_s5_d1",
      "label": "Abstract Cryptographic Provider APIs",
      "description": "Decoupling application code from specific algorithm implementations via pluggable APIs.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t4_s5_d2",
      "label": "X.509 Certificate Extension Adaptation",
      "description": "Updating PKI infrastructure to handle 4KB+ post-quantum certificate fields.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t5",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 5",
      "description": "Detailed first-principles mechanics for Post-Quantum Cryptography (NIST Standards) topic 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t5_s1",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Post-Quantum Cryptography (NIST Standards) Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t5_s1_d1",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t5_s1_d2",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t5_s2",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Post-Quantum Cryptography (NIST Standards) Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t5_s2_d1",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t5_s2_d2",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t5_s3",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Post-Quantum Cryptography (NIST Standards) Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t5_s3_d1",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t5_s3_d2",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t5_s4",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Post-Quantum Cryptography (NIST Standards) Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t5_s4_d1",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t5_s4_d2",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t5_s5",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Post-Quantum Cryptography (NIST Standards) Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t5_s5_d1",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t5_s5_d2",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Post-Quantum Cryptography (NIST Standards) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t6",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 6",
      "description": "Detailed first-principles mechanics for Post-Quantum Cryptography (NIST Standards) topic 6.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t6_s1",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Post-Quantum Cryptography (NIST Standards) Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t6_s1_d1",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t6_s1_d2",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t6_s2",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Post-Quantum Cryptography (NIST Standards) Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t6_s2_d1",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t6_s2_d2",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t6_s3",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Post-Quantum Cryptography (NIST Standards) Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t6_s3_d1",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t6_s3_d2",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t6_s4",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Post-Quantum Cryptography (NIST Standards) Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t6_s4_d1",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t6_s4_d2",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t6_s5",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Post-Quantum Cryptography (NIST Standards) Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t6_s5_d1",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t6_s5_d2",
      "label": "Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Post-Quantum Cryptography (NIST Standards) Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4",
      "label": "Zero-Knowledge Proof Systems (ZKP)",
      "description": "Protocols allowing a prover to prove statement truth to a verifier without revealing underlying secret information.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t1",
      "label": "zk-SNARKs & Polynomial Commitments",
      "description": "Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge using elliptic curve pairings.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t1_s1",
      "label": "Groth16 3-Pairing Proof Protocol",
      "description": "Ultra-succinct pairing-based proof system generating 128-byte proofs verified in 3 pairings.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t1_s1_d1",
      "label": "3 Group Element Proof Geometry (pi_A, pi_B, pi_C)",
      "description": "Generating compact proofs consisting of two G1 points and one G2 point.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t1_s1_d2",
      "label": "e(pi_A, pi_B) = e(alpha, beta) + ... Verification",
      "description": "Verifying proofs using 3 bilinear pairing operations in sub-2ms time.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t1_s2",
      "label": "Trusted Setup Ceremonies & Powers of Tau",
      "description": "Multi-party computation (MPC) ceremonies constructing structured reference strings (SRS).",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t1_s2_d1",
      "label": "Toxic Waste Parameter Destruction",
      "description": "Destroying secret randomness s to prevent proof forgery capability.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t1_s2_d2",
      "label": "1-of-N Honest Participant Assumption",
      "description": "Guaranteeing SRS security as long as at least one ceremony participant destroys their secret randomness.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t1_s3",
      "label": "PLONK Universal & Updateable Setup",
      "description": "Modern SNARK architecture using universal trusted setups up to maximum constraint bounds.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t1_s3_d1",
      "label": "Permutation Argument for Copy Constraints",
      "description": "Verifying wire equality across arithmetic gates using Grand Product arguments.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t1_s3_d2",
      "label": "Single Setup for All Circuit Programs",
      "description": "Reusing single SRS setups across distinct application circuits.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t1_s4",
      "label": "KZG (Kate-Zaverucha-Goldberg) Polynomial Commitments",
      "description": "Commitment scheme allowing polynomial evaluation proofs p(z) = v at point z in O(1) space.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t1_s4_d1",
      "label": "Commitment Point C = [p(x)]_1",
      "description": "Committing to polynomial p(X) via SRS G1 point evaluation.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t1_s4_d2",
      "label": "Pairing Evaluation Verification Check",
      "description": "Verifying evaluation proofs using single pairing checks e(C - [v]_1, g_2) == e(W, [x - z]_2).",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t1_s5",
      "label": "Bilinear Pairings over Elliptic Curves (BN254 & BLS12-381)",
      "description": "Pairing-friendly curves mapping G1 x G2 -> GT over target multiplicative fields.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t1_s5_d1",
      "label": "Bilinear Mapping Property e(aP, bQ) = e(P, Q)^(ab)",
      "description": "Evaluating quadratic equations in exponent space to check proof constraints.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t1_s5_d2",
      "label": "BLS12-381 128-Bit Security Standard",
      "description": "Standard 381-bit curve providing 128-bit security for ZK proof systems.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t2",
      "label": "zk-STARKs & FRI Protocol",
      "description": "Scalable Transparent ARKs providing post-quantum zero-knowledge proofs without trusted setup.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t2_s1",
      "label": "Zero Trusted Setup (Transparent Security)",
      "description": "Eliminating toxic waste setup risks by relying on public cryptographic randomness.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t2_s1_d1",
      "label": "Public Coin Interactive Oracle Proofs",
      "description": "Generating verification challenges using Fiat-Shamir hash derivations.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t2_s1_d2",
      "label": "Zero Setup Corruption Risks",
      "description": "Eliminating multi-party setup ceremonies entirely.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t2_s2",
      "label": "FRI (Fast Reed-Solomon IOP of Proximity)",
      "description": "Protocol for proving that a committed vector is close to a low-degree polynomial.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t2_s2_d1",
      "label": "Polynomial Degree Reduction Rounds",
      "description": "Folding high-degree polynomials into lower-degree polynomials using random challenges.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t2_s2_d2",
      "label": "Merkle Tree Commitments & Path Queries",
      "description": "Committing polynomial evaluations in Merkle trees and querying random path branches.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t2_s3",
      "label": "AIR (Algebraic Intermediate Representation)",
      "description": "Arithmetization format representing computation execution traces as transition constraints.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t2_s3_d1",
      "label": "Execution Trace Matrix Layout",
      "description": "Arranging register values across execution steps in N x M state matrices.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t2_s3_d2",
      "label": "Polynomial Transition Boundary Constraints",
      "description": "Enforcing transition logic rules (e.g. state[i+1] == state[i]^2 + c) across all trace rows.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t2_s4",
      "label": "Proof Size & Verification Scaling",
      "description": "Tradeoffs of zk-STARKs: larger proof sizes offset by fast verification scalability.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t2_s4_d1",
      "label": "100KB-200KB Proof Payload Sizes",
      "description": "Managing larger proof payloads compared to 128-byte Groth16 proofs.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t2_s4_d2",
      "label": "Polylogarithmic Verification Time O(log^2 N)",
      "description": "Verifying massive computation traces (millions of steps) in milliseconds.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t2_s5",
      "label": "Post-Quantum ZK Safety",
      "description": "Inherent quantum resistance provided by hash-only cryptographic foundations.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t2_s5_d1",
      "label": "SHA-256 / SHAKE-256 Hash Foundation",
      "description": "Relying exclusively on collision-resistant hash functions without elliptic curve pairings.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t2_s5_d2",
      "label": "Quantum-Safe Long-Term Auditability",
      "description": "Ensuring historical ZK proofs remain verifiable in a post-quantum computing era.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t3",
      "label": "Constraint Systems & Arithmetization",
      "description": "Translating computation logic into mathematical polynomials and constraint systems.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t3_s1",
      "label": "Rank-1 Constraint Systems (R1CS)",
      "description": "Matrix equation representation (A * s) . (B * s) = (C * s) enforcing arithmetic operations.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t3_s1_d1",
      "label": "Witness Vector s = (1, x, out, v1, v2)",
      "description": "Concatenating public inputs, outputs, and private intermediate variables into witness vectors.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t3_s1_d2",
      "label": "Single Multiplication Per Gate Limit",
      "description": "Restricting R1CS gates to single multiplication steps per constraint row.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t3_s2",
      "label": "Plonkish Arithmetization & Custom Gates",
      "description": "Flexible constraint format supporting multi-input addition, multiplication, and custom gates.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t3_s2_d1",
      "label": "Selector Vectors (q_L, q_R, q_O, q_M, q_C)",
      "description": "Enforcing q_L * a + q_R * b + q_O * c + q_M * a*b + q_C = 0 gate equations.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t3_s2_d2",
      "label": "Custom Poseidon Hash Gates",
      "description": "Building dedicated custom gates to execute Poseidon hash rounds in single constraint rows.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t3_s3",
      "label": "Lookup Tables (Plookup & Lasso)",
      "description": "Proving that a variable value exists within a pre-defined lookup table without executing logic.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t3_s3_d1",
      "label": "XOR & SHA-256 Lookup Acceleration",
      "description": "Accelerating bitwise operations by looking up pre-computed outputs in 8-bit tables.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t3_s3_d2",
      "label": "10-100x Constraint Count Reduction",
      "description": "Reducing complex non-arithmetic operation constraints from thousands down to single lookups.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t3_s4",
      "label": "Circom & Noir ZK Domain-Specific Languages",
      "description": "Programming languages for compiling high-level code into ZK constraint systems.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t3_s4_d1",
      "label": "Circom Template Signal Wiring",
      "description": "Writing circuit templates connecting input, output, and intermediate signals.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t3_s4_d2",
      "label": "R1CS & WASM Witness Generator Compilation",
      "description": "Compiling circuits into R1CS constraint files and WASM witness calculation scripts.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t3_s5",
      "label": "ZK-Friendly Hash Functions (Poseidon, Anemoi)",
      "description": "Cryptographic hash functions designed specifically to minimize R1CS/Plonkish gate counts.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t3_s5_d1",
      "label": "Algebraic S-Box (x^5) Operations",
      "description": "Replacing bitwise operations with low-degree S-Boxes (x^5) over prime fields.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t3_s5_d2",
      "label": "8-10x Fewer Constraints than SHA-256",
      "description": "Evaluating hashes in 200 constraints compared to 25,000 constraints for SHA-256.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t4",
      "label": "ZKP Real-World Applications & Rollups",
      "description": "Deploying zero-knowledge proofs for blockchain scaling, private identity, and mixing.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t4_s1",
      "label": "zk-Rollups L2 Blockchain Scaling",
      "description": "Offloading transaction execution off-chain and posting validity proofs to Layer-1 smart contracts.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t4_s1_d1",
      "label": "Batch Transaction Validity Proofs",
      "description": "Aggregating thousands of L2 transactions into single ZK validity proofs.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t4_s1_d2",
      "label": "Sub-Cent Transaction Fee Bounds",
      "description": "Compressing L1 data footprints by posting state diffs alongside ZK proofs.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t4_s2",
      "label": "zkEVM (Zero-Knowledge Ethereum Virtual Machine)",
      "description": "Proving correct execution of arbitrary EVM bytecode transitions in zero-knowledge.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t4_s2_d1",
      "label": "Opcode-Level Execution Trace Proofs",
      "description": "Building constraint systems for every EVM opcode (ADD, SUB, SLOAD, SSTORE).",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t4_s2_d2",
      "label": "Type 1 vs Type 2 vs Type 4 zkEVM Tradeoffs",
      "description": "Balancing full Ethereum equivalence against ZK prover generation speeds.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t4_s3",
      "label": "Tornado Cash & Private Coin Mixing",
      "description": "Anonymizing cryptocurrency transactions using Merkle trees and ZK membership proofs.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t4_s3_d1",
      "label": "Commitment & Nullifier Architecture",
      "description": "Inserting commitment hashes C = Poseidon(secret, nullifier) into on-chain Merkle trees.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t4_s3_d2",
      "label": "Zero-Knowledge Double-Spend Prevention",
      "description": "Publishing nullifier hashes to prevent double-spending without revealing matching deposit nodes.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t4_s4",
      "label": "zk-Identity & Semaphore Protocols",
      "description": "Proving group membership and attributes without revealing individual identity.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t4_s4_d1",
      "label": "Merkle Membership Proof Generation",
      "description": "Proving a public key exists within a group Merkle tree without identifying the leaf index.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t4_s4_d2",
      "label": "Anonymous Voting & Sybil Prevention",
      "description": "Casting votes anonymously while preventing duplicate voting using epoch nullifiers.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t4_s5",
      "label": "Recursive Proof Composition (Halo2 & Boojum)",
      "description": "Verifying ZK proofs inside other ZK proofs to compress arbitrary computation trees.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t4_s5_d1",
      "label": "Accumulator Scheme Proof Aggregation",
      "description": "Combining multiple proofs into single accumulators without full pairing checks.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t4_s5_d2",
      "label": "Infinite Computation Chain Verification",
      "description": "Verifying long-running blockchain histories using single constant-size state proofs.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t5",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 5",
      "description": "Detailed first-principles mechanics for Zero-Knowledge Proof Systems (ZKP) topic 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t5_s1",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Zero-Knowledge Proof Systems (ZKP) Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t5_s1_d1",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t5_s1_d2",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t5_s2",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Zero-Knowledge Proof Systems (ZKP) Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t5_s2_d1",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t5_s2_d2",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t5_s3",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Zero-Knowledge Proof Systems (ZKP) Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t5_s3_d1",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t5_s3_d2",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t5_s4",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Zero-Knowledge Proof Systems (ZKP) Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t5_s4_d1",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t5_s4_d2",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t5_s5",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Zero-Knowledge Proof Systems (ZKP) Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t5_s5_d1",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t5_s5_d2",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Zero-Knowledge Proof Systems (ZKP) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t6",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 6",
      "description": "Detailed first-principles mechanics for Zero-Knowledge Proof Systems (ZKP) topic 6.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t6_s1",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Zero-Knowledge Proof Systems (ZKP) Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t6_s1_d1",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t6_s1_d2",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t6_s2",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Zero-Knowledge Proof Systems (ZKP) Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t6_s2_d1",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t6_s2_d2",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t6_s3",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Zero-Knowledge Proof Systems (ZKP) Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t6_s3_d1",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t6_s3_d2",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t6_s4",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Zero-Knowledge Proof Systems (ZKP) Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t6_s4_d1",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t6_s4_d2",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t6_s5",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Zero-Knowledge Proof Systems (ZKP) Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t6_s5_d1",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t6_s5_d2",
      "label": "Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Zero-Knowledge Proof Systems (ZKP) Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5",
      "label": "Public Key Infrastructure & Web Security",
      "description": "Trust hierarchies, X.509 certificate validation, revocation checking, and TLS 1.3 protocol handshakes.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t1",
      "label": "X.509 Digital Certificates & CA Hierarchies",
      "description": "Standardized format binding public keys to identities using digital signatures of Certificate Authorities.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t1_s1",
      "label": "ASN.1 DER Binary Encoding Structure",
      "description": "Structuring certificate fields using Abstract Syntax Notation One Tag-Length-Value tuples.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t1_s1_d1",
      "label": "TBSCertificate (To-Be-Signed) Block",
      "description": "Encoding serial number, signature algorithm, issuer, validity period, subject, and public key.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t1_s1_d2",
      "label": "Canonical DER Byte Determinism",
      "description": "Enforcing strict single-encoding rules to ensure identical signature verification hashes.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t1_s2",
      "label": "Root & Intermediate CA Trust Chain",
      "description": "Establishing trust via hierarchical chains of digital signatures up to trusted Root CAs.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t1_s2_d1",
      "label": "Self-Signed Root CA Trust Store Embeddings",
      "description": "Embedding OS and browser trust stores with trusted Root CA certificates.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t1_s2_d2",
      "label": "Intermediate CA Signature Validation",
      "description": "Verifying intermediate certificate signatures using parent CA public keys.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t1_s3",
      "label": "SAN (Subject Alternative Name) Extensions",
      "description": "Binding domain names and wildcards to TLS certificates.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t1_s3_d1",
      "label": "dNSName Identity Match Checks",
      "description": "Validating connecting domain names against SAN dNSName certificate entries.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t1_s3_d2",
      "label": "Wildcard Domain Matching Rules (*.domain.com)",
      "description": "Matching single-level subdomain prefixes against wildcard SAN patterns.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t1_s4",
      "label": "Basic Constraints & Key Usage Extensions",
      "description": "Restricting certificate capabilities and preventing unauthorized CA issuance.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t1_s4_d1",
      "label": "cA: TRUE / FALSE Flag Enforcement",
      "description": "Rejecting end-entity certificates that attempt to sign subordinate certificates.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t1_s4_d2",
      "label": "pathLenConstraint Depth Bounds",
      "description": "Restricting the maximum number of subordinate intermediate CAs allowed in a chain.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t1_s5",
      "label": "ACME Protocol (Let's Encrypt Automation)",
      "description": "Automating certificate issuance and renewal via HTTP-01 and DNS-01 challenges.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t1_s5_d1",
      "label": "HTTP-01 Token Provisioning Challenge",
      "description": "Serving ACME tokens at http://<domain>/.well-known/acme-challenge/ paths.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t1_s5_d2",
      "label": "90-Day Short Lifecycle Certificates",
      "description": "Improving security by enforcing 90-day certificate lifetimes with automated renewals.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t2",
      "label": "Certificate Revocation (OCSP & CRLs)",
      "description": "Protocols for discovering revoked digital certificates before expiration.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t2_s1",
      "label": "CRL (Certificate Revocation List)",
      "description": "Periodically published signed lists containing revoked certificate serial numbers.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t2_s1_d1",
      "label": "Serial Number Delta Scanning",
      "description": "Downloading multi-megabyte CRL files to check serial number revocation status.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t2_s1_d2",
      "label": "Bandwidth & Latency Limitations",
      "description": "High network overhead and slow page loads during initial CRL downloads.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t2_s2",
      "label": "OCSP (Online Certificate Status Protocol)",
      "description": "Real-time HTTP query protocol checking certificate status directly with CA responders.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t2_s2_d1",
      "label": "OCSP Request / Response Payloads",
      "description": "Querying CA responders with certificate serial numbers to receive Good, Revoked, or Unknown status.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t2_s2_d2",
      "label": "CA Privacy Leakage Risks",
      "description": "Leaking user browsing history to CA OCSP servers during real-time status queries.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t2_s3",
      "label": "OCSP Stapling (TLS Certificate Status Request)",
      "description": "Web servers caching signed OCSP responses and stapling them into TLS handshakes.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t2_s3_d1",
      "label": "Stapled Response Verification",
      "description": "Verifying CA-signed OCSP timestamps included directly in TLS ServerHello messages.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t2_s3_d2",
      "label": "Client Privacy & Latency Protection",
      "description": "Eliminating client-to-CA OCSP queries to preserve privacy and reduce connection latency.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t2_s4",
      "label": "Must-Staple Certificate Flag",
      "description": "Certificate extension forcing browsers to hard-fail if OCSP stapling is missing.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t2_s4_d1",
      "label": "Revocation Bypass Prevention",
      "description": "Preventing network attackers from blocking OCSP responses to bypass revocation checks.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t2_s4_d2",
      "label": "Hard-Fail Security Guarantee",
      "description": "Aborting TLS connections immediately if servers fail to staple valid OCSP responses.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t2_s5",
      "label": "CRLite & Compact Revocation Sets",
      "description": "Pushing compressed global revocation state to browsers using cascaded Bloom filters.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t2_s5_d1",
      "label": "Cascaded Bloom Filter Compression",
      "description": "Compressing global certificate revocation lists into sub-10MB browser datasets.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t2_s5_d2",
      "label": "Zero Network Query Revocation Checks",
      "description": "Checking revocation status locally in memory without making external network queries.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t3",
      "label": "Certificate Transparency (CT) Logs",
      "description": "Public append-only Merkle tree logs auditing all issued SSL/TLS certificates.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t3_s1",
      "label": "Append-Only Merkle Tree Log Architecture",
      "description": "Storing issued certificates in publicly audit-able Merkle trees.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t3_s1_d1",
      "label": "SHA-256 Merkle Tree Hash Computations",
      "description": "Computing root hashes over ordered certificate leaf nodes.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t3_s1_d2",
      "label": "Consistency & Inclusion Proofs",
      "description": "Generating O(log N) Merkle path proofs verifying certificate inclusion and log consistency.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t3_s2",
      "label": "SCT (Signed Certificate Timestamp)",
      "description": "Cryptographic promise emitted by CT logs guaranteeing certificate inclusion within time bounds.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t3_s2_d1",
      "label": "Maximum Merge Delay (MMD) Promise",
      "description": "Promising certificate inclusion in the log within 24 hours of issuance.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t3_s2_d2",
      "label": "TLS Handshake SCT Embedding",
      "description": "Embedding 2+ SCT signatures inside TLS handshake extensions or X.509 cert fields.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t3_s3",
      "label": "Rogue CA & Mis-issuance Detection",
      "description": "Monitoring CT logs continuously to detect unauthorized certificate issuance for domains.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t3_s3_d1",
      "label": "Real-Time Domain Log Monitors",
      "description": "Parsing CT log streams to alert domain owners when new certificates are issued.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t3_s3_d2",
      "label": "Malicious CA Revocation Triggering",
      "description": "Exposing rogue CAs issuing fraudulent certificates for unauthorized domains.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t3_s4",
      "label": "Chrome CT Enforcement Policy",
      "description": "Mandating CT log inclusion for all public TLS certificates presented in Chrome.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t3_s4_d1",
      "label": "2+ Independent Log SCT Requirement",
      "description": "Rejecting certificates that lack valid SCTs from distinct approved CT logs.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t3_s4_d2",
      "label": "Hard-Fail Handshake Rejection",
      "description": "Displaying NET::ERR_CERTIFICATE_TRANSPARENCY_REQUIRED errors when CT validation fails.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t3_s5",
      "label": "CT Log Auditor & Monitor Roles",
      "description": "Independent servers validating that CT logs maintain append-only consistency.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t3_s5_d1",
      "label": "Log Consistency Proof Verification",
      "description": "Verifying that newer log versions contain older log versions as exact prefixes.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t3_s5_d2",
      "label": "Split-View Attack Prevention",
      "description": "Ensuring CT logs present identical views to all global internet clients.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t4",
      "label": "TLS 1.3 Handshake Protocol & Architecture",
      "description": "Modern transport layer security protocol delivering 1-RTT handshakes and mandatory Forward Secrecy.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t4_s1",
      "label": "1-RTT Handshake Sequence Flow",
      "description": "Establishing encrypted connections in single network round trips.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t4_s1_d1",
      "label": "ClientHello Key Share Transmission",
      "description": "Sending supported cipher suites and key_share public keys in initial ClientHello.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t4_s1_d2",
      "label": "ServerHello Key Agreement Response",
      "description": "Selecting cipher suite and returning server key_share to complete ECDHE key exchange.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t4_s2",
      "label": "HKDF Key Schedule Flow (TLS 1.3)",
      "description": "Deriving early, handshake, and application traffic keys using HKDF.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t4_s2_d1",
      "label": "Handshake Secret & Application Secret Steps",
      "description": "Deriving client_handshake_traffic_key and server_application_traffic_key.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t4_s2_d2",
      "label": "Master Secret Derivation Steps",
      "description": "Extracting Master Secret to derive resumption and exporter keys.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t4_s3",
      "label": "0-RTT Early Data Mode & Replay Risks",
      "description": "Transmitting encrypted application data in initial ClientHello messages during session resumption.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t4_s3_d1",
      "label": "PSK (Pre-Shared Key) Resumption",
      "description": "Encrypting early data using tickets saved from previous TLS sessions.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t4_s3_d2",
      "label": "Anti-Replay Protection Mechanisms",
      "description": "Restricting 0-RTT data to idempotent GET requests or enforcing single-use ticket caches.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t4_s4",
      "label": "Encrypted SNI / Encrypted Client Hello (ECH)",
      "description": "Encrypting Server Name Indication (SNI) extension to prevent network eavesdropping.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t4_s4_d1",
      "label": "Outer vs Inner ClientHello Payload",
      "description": "Encrypting inner ClientHello containing actual domain name using DNS-published ECH keys.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t4_s4_d2",
      "label": "ISP Domain Tracking Blocking",
      "description": "Preventing network providers and censors from observing visited domain names in plaintext.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t4_s5",
      "label": "mTLS (Mutual TLS Authentication)",
      "description": "Authenticating both client and server identities using X.509 certificates.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t4_s5_d1",
      "label": "CertificateRequest Server Message",
      "description": "Requesting client certificates during TLS handshakes in zero-trust environments.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t4_s5_d2",
      "label": "Client CertificateVerify Signature",
      "description": "Client signing handshake transcript with private key to prove identity ownership.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t5",
      "label": "Public Key Infrastructure & Web Security Topic 5",
      "description": "Detailed first-principles mechanics for Public Key Infrastructure & Web Security topic 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t5_s1",
      "label": "Public Key Infrastructure & Web Security Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Public Key Infrastructure & Web Security Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t5_s1_d1",
      "label": "Public Key Infrastructure & Web Security Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Public Key Infrastructure & Web Security Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t5_s1_d2",
      "label": "Public Key Infrastructure & Web Security Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Public Key Infrastructure & Web Security Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t5_s2",
      "label": "Public Key Infrastructure & Web Security Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Public Key Infrastructure & Web Security Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t5_s2_d1",
      "label": "Public Key Infrastructure & Web Security Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Public Key Infrastructure & Web Security Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t5_s2_d2",
      "label": "Public Key Infrastructure & Web Security Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Public Key Infrastructure & Web Security Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t5_s3",
      "label": "Public Key Infrastructure & Web Security Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Public Key Infrastructure & Web Security Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t5_s3_d1",
      "label": "Public Key Infrastructure & Web Security Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Public Key Infrastructure & Web Security Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t5_s3_d2",
      "label": "Public Key Infrastructure & Web Security Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Public Key Infrastructure & Web Security Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t5_s4",
      "label": "Public Key Infrastructure & Web Security Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Public Key Infrastructure & Web Security Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t5_s4_d1",
      "label": "Public Key Infrastructure & Web Security Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Public Key Infrastructure & Web Security Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t5_s4_d2",
      "label": "Public Key Infrastructure & Web Security Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Public Key Infrastructure & Web Security Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t5_s5",
      "label": "Public Key Infrastructure & Web Security Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Public Key Infrastructure & Web Security Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t5_s5_d1",
      "label": "Public Key Infrastructure & Web Security Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Public Key Infrastructure & Web Security Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t5_s5_d2",
      "label": "Public Key Infrastructure & Web Security Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Public Key Infrastructure & Web Security Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t6",
      "label": "Public Key Infrastructure & Web Security Topic 6",
      "description": "Detailed first-principles mechanics for Public Key Infrastructure & Web Security topic 6.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t6_s1",
      "label": "Public Key Infrastructure & Web Security Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Public Key Infrastructure & Web Security Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t6_s1_d1",
      "label": "Public Key Infrastructure & Web Security Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Public Key Infrastructure & Web Security Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t6_s1_d2",
      "label": "Public Key Infrastructure & Web Security Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Public Key Infrastructure & Web Security Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t6_s2",
      "label": "Public Key Infrastructure & Web Security Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Public Key Infrastructure & Web Security Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t6_s2_d1",
      "label": "Public Key Infrastructure & Web Security Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Public Key Infrastructure & Web Security Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t6_s2_d2",
      "label": "Public Key Infrastructure & Web Security Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Public Key Infrastructure & Web Security Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t6_s3",
      "label": "Public Key Infrastructure & Web Security Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Public Key Infrastructure & Web Security Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t6_s3_d1",
      "label": "Public Key Infrastructure & Web Security Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Public Key Infrastructure & Web Security Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t6_s3_d2",
      "label": "Public Key Infrastructure & Web Security Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Public Key Infrastructure & Web Security Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t6_s4",
      "label": "Public Key Infrastructure & Web Security Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Public Key Infrastructure & Web Security Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t6_s4_d1",
      "label": "Public Key Infrastructure & Web Security Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Public Key Infrastructure & Web Security Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t6_s4_d2",
      "label": "Public Key Infrastructure & Web Security Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Public Key Infrastructure & Web Security Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t6_s5",
      "label": "Public Key Infrastructure & Web Security Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Public Key Infrastructure & Web Security Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t6_s5_d1",
      "label": "Public Key Infrastructure & Web Security Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Public Key Infrastructure & Web Security Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p5_t6_s5_d2",
      "label": "Public Key Infrastructure & Web Security Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Public Key Infrastructure & Web Security Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6",
      "label": "Key Management & Hardware Security",
      "description": "Hardware isolation, threshold secret sharing, envelope encryption, and key rotation protocols.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t1",
      "label": "Hardware Security Modules (HSM)",
      "description": "Tamper-resistant physical hardware appliances dedicated to secure cryptographic key storage.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t1_s1",
      "label": "FIPS 140-3 Security Levels (Level 1 to 4)",
      "description": "NIST benchmarks certifying hardware and software cryptographic module security.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t1_s1_d1",
      "label": "FIPS 140-3 Level 3 (Identity Auth & Tamper Response)",
      "description": "Requiring physical tamper detection and identity-based access controls.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t1_s1_d2",
      "label": "FIPS 140-3 Level 4 (Environmental Tamper Destruction)",
      "description": "Zeroizing stored key material immediately upon detecting physical enclosure penetration.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t1_s2",
      "label": "PKCS#11 Cryptoki Standard API",
      "description": "Standardized C-based API for interacting with cryptographic hardware tokens and HSMs.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t1_s2_d1",
      "label": "Session & Object Management Functions",
      "description": "Opening sessions (C_OpenSession) and searching objects (C_FindObjects).",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t1_s2_d2",
      "label": "Non-Exportable Key Operations",
      "description": "Executing C_Sign and C_Decrypt inside HSM hardware without exporting private keys.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t1_s3",
      "label": "Cloud KMS Integration (AWS KMS, Cloud KMS)",
      "description": "Cloud-managed key management services backed by multi-tenant HSM fleets.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t1_s3_d1",
      "label": "Customer Master Key (CMK) Abstractions",
      "description": "Managing logical keys linked to physical HSM-backed key versions.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t1_s3_d2",
      "label": "IAM Policy & Key Spec Enforcement",
      "description": "Enforcing granular IAM permission policies on KMS key execution.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t1_s4",
      "label": "Secure Enclaves (Intel SGX, AWS Nitro Enclaves)",
      "description": "Isolated CPU execution environments protecting code and data from host OS access.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t1_s4_d1",
      "label": "Memory Encryption Engine (MEE)",
      "description": "Encrypting enclave RAM memory blocks in hardware using AES keys.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t1_s4_d2",
      "label": "Attestation Evidence Verification",
      "description": "Generating hardware-signed attestation quotes to prove code integrity before releasing keys.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t1_s5",
      "label": "Key Zeroization & Emergency Erase",
      "description": "Protocols for purging cryptographic keys instantly during physical or network breaches.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t1_s5_d1",
      "label": "Voltage & Temperature Tamper Sensors",
      "description": "Triggering capacitor-powered memory zeroization when environmental bounds are crossed.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t1_s5_d2",
      "label": "Command-Initiated Key Erase (Panic Buttons)",
      "description": "Purging master key memory banks via authenticated emergency API calls.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t2",
      "label": "Shamir's Secret Sharing (SSS)",
      "description": "Threshold cryptography scheme splitting secrets into N shares requiring K shares to reconstruct.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t2_s1",
      "label": "Polynomial Interpolation over Galois Fields",
      "description": "Constructing random degree K-1 polynomials f(x) over prime fields GF(p).",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t2_s1_d1",
      "label": "Secret Point Embeddings f(0) = Secret",
      "description": "Setting polynomial constant term f(0) to the secret value S.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t2_s1_d2",
      "label": "Share Coordinate Evaluation (i, f(i))",
      "description": "Evaluating polynomial at N distinct points to generate N individual shares.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t2_s2",
      "label": "Lagrange Interpolation Reconstruction",
      "description": "Reconstructing polynomial constant term f(0) using any K valid shares.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t2_s2_d1",
      "label": "Lagrange Basis Polynomial Formula",
      "description": "Computing L_j(0) = prod_{m != j} (-x_m) / (x_j - x_m) mod p.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t2_s2_d2",
      "label": "Exact K-Threshold Reconstruction",
      "description": "Reconstructing secret S = sum(y_j * L_j(0)) mod p.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t2_s3",
      "label": "Information-Theoretic Security Proof",
      "description": "Guaranteeing that possessing K-1 or fewer shares reveals zero information about the secret.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t2_s3_d1",
      "label": "Perfect Secrecy Condition",
      "description": "Ensuring all possible candidate secrets remain equally probable given K-1 shares.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t2_s3_d2",
      "label": "Zero Probability Leakage",
      "description": "Eliminating partial information leakage regardless of attacker compute capacity.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t2_s4",
      "label": "Verifiable Secret Sharing (VSS / Feldman)",
      "description": "Adding public commitments to allow share holders to verify their shares are valid.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t2_s4_d1",
      "label": "Pedersen Commitment Verification",
      "description": "Publishing curve point commitments to polynomial coefficients.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t2_s4_d2",
      "label": "Malicious Dealer Detection",
      "description": "Detecting dealer nodes distributing invalid shares prior to reconstruction.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t2_s5",
      "label": "HashiCorp Vault Root Key Unseal",
      "description": "Real-world application of Shamir's Secret Sharing for unsealing master key vaults.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t2_s5_d1",
      "label": "5 Share 3 Threshold Unseal Setup",
      "description": "Requiring 3 of 5 key holders to enter unseal keys to decrypt Vault master keys.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t2_s5_d2",
      "label": "In-Memory Unseal Progress Tracking",
      "description": "Accumulating unseal keys in memory until threshold K is met, then zeroizing shares.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t3",
      "label": "Envelope Encryption & Key Hierarchies",
      "description": "Encrypting plaintext data with data keys and encrypting data keys under master keys.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t3_s1",
      "label": "Data Encryption Key (DEK) vs Key Encryption Key (KEK)",
      "description": "Hierarchical key layering separating data payload encryption from key management.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t3_s1_d1",
      "label": "Local DEK Payload Encryption",
      "description": "Encrypting raw files or database rows locally using high-speed symmetric DEKs.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t3_s1_d2",
      "label": "KEK KMS Wrap Operations",
      "description": "Encrypting DEKs under HSM-protected Master Keys (KEKs) via KMS GenerateDataKey APIs.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t3_s2",
      "label": "Encrypted Data Key (EDK) Storage",
      "description": "Storing encrypted DEKs alongside encrypted ciphertext payloads.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t3_s2_d1",
      "label": "Self-Describing Encrypted Envelopes",
      "description": "Packing EDK, initialization vector, and ciphertext into single stored object files.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t3_s2_d2",
      "label": "Zero Storage Database Key Management",
      "description": "Eliminating central database key storage by storing EDKs inside data records.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t3_s3",
      "label": "Decryption Envelope Workflow",
      "description": "Unwrapping EDKs via KMS to obtain plaintext DEKs for local decryption.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t3_s3_d1",
      "label": "KMS Decrypt API Unwrapping",
      "description": "Sending EDKs to KMS to receive plaintext DEKs in response.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t3_s3_d2",
      "label": "Transient In-Memory DEK Usage",
      "description": "Decrypting data payloads in RAM and zeroizing DEKs immediately after use.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t3_s4",
      "label": "Encryption Context Bounding",
      "description": "Injecting non-secret key-value pairs into KMS encryption and decryption API calls.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t3_s4_d1",
      "label": "AAD Context Binding",
      "description": "Binding KMS operations to specific context key-values (e.g. tenant_id=123).",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t3_s4_d2",
      "label": "Cross-Tenant Decryption Rejection",
      "description": "Rejecting KMS decryption requests if caller encryption contexts do not match.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t3_s5",
      "label": "DEK Caching & Reuse Safeguards",
      "description": "Caching plaintext DEKs locally in application memory to reduce KMS API costs.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t3_s5_d1",
      "label": "Max Bytes Encrypted Limits (e.g. 1GB)",
      "description": "Evicting cached DEKs after encrypting a maximum byte threshold.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t3_s5_d2",
      "label": "Max Age TTL Expiration (e.g. 5 minutes)",
      "description": "Purging cached DEKs from RAM after short expiration timeouts.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t4",
      "label": "Key Rotation & Rekeying Protocols",
      "description": "Automating periodic key replacement to bound the blast radius of key compromises.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t4_s1",
      "label": "Automated KMS Master Key Rotation",
      "description": "Generating new KEK key versions annually while retaining old versions for decryption.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t4_s1_d1",
      "label": "New Key Version Generation",
      "description": "Setting new master key versions as active for all upcoming encryption calls.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t4_s1_d2",
      "label": "Legacy Version Decryption Retention",
      "description": "Retaining historical master key versions indefinitely to decrypt older ciphertexts.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t4_s2",
      "label": "Re-encryption & Re-wrapping Pipelines",
      "description": "Updating encrypted data keys under new master keys without decrypting data payloads.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t4_s2_d1",
      "label": "KMS ReEncrypt API Execution",
      "description": "Re-wrapping EDKs under new KEK versions inside KMS hardware.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t4_s2_d2",
      "label": "Zero Plaintext Exposure Advantage",
      "description": "Updating key wrappers without exposing underlying plaintext payloads to application servers.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t4_s3",
      "label": "Active vs Passive Key Lifecycle States",
      "description": "Managing state transitions: Pre-activation -> Active -> Deactivated -> Compromised -> Destroyed.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t4_s3_d1",
      "label": "Active Encryption Key Windows",
      "description": "Restricting encryption operations to active key versions.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t4_s3_d2",
      "label": "Deactivated Key Read-Only States",
      "description": "Restricting deactivated keys to decryption operations only.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t4_s4",
      "label": "Emergency Key Revocation Workflows",
      "description": "Handling compromised keys by revoking permissions and triggering forced re-keying.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t4_s4_d1",
      "label": "Immediate IAM Policy Revocation",
      "description": "Disabling KMS key usage policies to block compromised key access instantly.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t4_s4_d2",
      "label": "Batch Data Re-encryption Audits",
      "description": "Launching background jobs to re-encrypt all affected datasets under fresh keys.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t4_s5",
      "label": "Cryptographic Key Expiration Enforcement",
      "description": "Enforcing hard expiration dates on API keys, JWTs, and certificates.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t4_s5_d1",
      "label": "exp Claim Validation Bounds",
      "description": "Rejecting authentication tokens containing past expiration timestamps.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t4_s5_d2",
      "label": "Automated Token Renewal Handshakes",
      "description": "Exchanging refresh tokens to obtain updated short-lived access keys.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t5",
      "label": "Key Management & Hardware Security Topic 5",
      "description": "Detailed first-principles mechanics for Key Management & Hardware Security topic 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t5_s1",
      "label": "Key Management & Hardware Security Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Key Management & Hardware Security Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t5_s1_d1",
      "label": "Key Management & Hardware Security Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Key Management & Hardware Security Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t5_s1_d2",
      "label": "Key Management & Hardware Security Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Key Management & Hardware Security Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t5_s2",
      "label": "Key Management & Hardware Security Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Key Management & Hardware Security Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t5_s2_d1",
      "label": "Key Management & Hardware Security Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Key Management & Hardware Security Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t5_s2_d2",
      "label": "Key Management & Hardware Security Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Key Management & Hardware Security Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t5_s3",
      "label": "Key Management & Hardware Security Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Key Management & Hardware Security Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t5_s3_d1",
      "label": "Key Management & Hardware Security Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Key Management & Hardware Security Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t5_s3_d2",
      "label": "Key Management & Hardware Security Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Key Management & Hardware Security Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t5_s4",
      "label": "Key Management & Hardware Security Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Key Management & Hardware Security Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t5_s4_d1",
      "label": "Key Management & Hardware Security Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Key Management & Hardware Security Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t5_s4_d2",
      "label": "Key Management & Hardware Security Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Key Management & Hardware Security Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t5_s5",
      "label": "Key Management & Hardware Security Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Key Management & Hardware Security Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t5_s5_d1",
      "label": "Key Management & Hardware Security Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Key Management & Hardware Security Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t5_s5_d2",
      "label": "Key Management & Hardware Security Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Key Management & Hardware Security Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t6",
      "label": "Key Management & Hardware Security Topic 6",
      "description": "Detailed first-principles mechanics for Key Management & Hardware Security topic 6.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t6_s1",
      "label": "Key Management & Hardware Security Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Key Management & Hardware Security Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t6_s1_d1",
      "label": "Key Management & Hardware Security Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Key Management & Hardware Security Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t6_s1_d2",
      "label": "Key Management & Hardware Security Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Key Management & Hardware Security Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t6_s2",
      "label": "Key Management & Hardware Security Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Key Management & Hardware Security Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t6_s2_d1",
      "label": "Key Management & Hardware Security Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Key Management & Hardware Security Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t6_s2_d2",
      "label": "Key Management & Hardware Security Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Key Management & Hardware Security Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t6_s3",
      "label": "Key Management & Hardware Security Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Key Management & Hardware Security Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t6_s3_d1",
      "label": "Key Management & Hardware Security Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Key Management & Hardware Security Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t6_s3_d2",
      "label": "Key Management & Hardware Security Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Key Management & Hardware Security Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t6_s4",
      "label": "Key Management & Hardware Security Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Key Management & Hardware Security Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t6_s4_d1",
      "label": "Key Management & Hardware Security Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Key Management & Hardware Security Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t6_s4_d2",
      "label": "Key Management & Hardware Security Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Key Management & Hardware Security Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t6_s5",
      "label": "Key Management & Hardware Security Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Key Management & Hardware Security Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t6_s5_d1",
      "label": "Key Management & Hardware Security Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Key Management & Hardware Security Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p6_t6_s5_d2",
      "label": "Key Management & Hardware Security Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Key Management & Hardware Security Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7",
      "label": "Secure Protocols & End-to-End Encryption",
      "description": "Protocols providing double-ratchet E2EE, onion routing, and secure multi-party computation.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t1",
      "label": "Signal Double Ratchet Algorithm",
      "description": "End-to-end encrypted messaging protocol providing Forward Secrecy and Post-Compromise Security.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t1_s1",
      "label": "KDF Chain Ratchet Mechanics",
      "description": "Advancing symmetric key chains step-by-step for every sent and received message.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t1_s1_d1",
      "label": "Message Key Derivation (MK = KDF(CK))",
      "description": "Deriving unique single-use message keys MK and updating chain key CK.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t1_s1_d2",
      "label": "Immediate Message Key Deletion",
      "description": "Deleting message keys immediately after message encryption or decryption.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t1_s2",
      "label": "Diffie-Hellman (DH) Ratchet Passes",
      "description": "Renewing root keys by executing new DH key exchanges whenever reply messages are received.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t1_s2_d1",
      "label": "DH Ephemeral Key Swap Handshake",
      "description": "Attaching new DH public keys to message headers.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t1_s2_d2",
      "label": "Root Key Advance (RK, CK = KDF(RK, DH))",
      "description": "Updating root key RK and initializing new sending/receiving chain keys.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t1_s3",
      "label": "Forward Secrecy Guarantee",
      "description": "Guaranteeing that compromising current keys cannot decrypt past recorded messages.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t1_s3_d1",
      "label": "One-Way KDF Chain Derivation",
      "description": "Preventing backward mathematical derivation of past chain keys from current keys.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t1_s3_d2",
      "label": "Historical Message Key Destruction",
      "description": "Purging old message keys from device RAM immediately after message processing.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t1_s4",
      "label": "Post-Compromise Security (Break-In Recovery)",
      "description": "Guaranteeing that attackers compromising current state lose access after new DH ratchet steps.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t1_s4_d1",
      "label": "DH Ratchet Entropy Refresh",
      "description": "Injecting fresh un-compromised DH randomness into root keys upon client replies.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t1_s4_d2",
      "label": "Self-Healing Protocol Property",
      "description": "Restoring complete communication privacy automatically within 1-2 message turns.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t1_s5",
      "label": "Out-of-Order Message Handling",
      "description": "Handling reordered or dropped message deliveries over unreliable networks.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t1_s5_d1",
      "label": "Skipped Message Key Storage",
      "description": "Advancing KDF chains and storing skipped message keys in temporary local caches.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t1_s5_d2",
      "label": "Bounded Skipped Key Retention",
      "description": "Setting maximum skipped key storage limits to prevent memory exhaustion attacks.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t2",
      "label": "Noise Protocol Framework",
      "description": "Framework for building custom crypto protocols by composing Diffie-Hellman handshakes.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t2_s1",
      "label": "Handshake Pattern Patterns (NK, XX, IK)",
      "description": "Formal 2-letter notation defining static and ephemeral key exchanges.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t2_s1_d1",
      "label": "Noise_XX Pattern (Mutual Authentication)",
      "description": "Exchanging identity public keys securely during handshakes with mutual authentication.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t2_s1_d2",
      "label": "Noise_IK Pattern (0-RTT Server Authentication)",
      "description": "Transmitting 0-RTT early data using pre-known server static public keys.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t2_s2",
      "label": "Tokens & Message Pattern Processing",
      "description": "Parsing sequential handshake tokens: e, s, ee, es, se, ss.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t2_s2_d1",
      "label": "DH Token Execution Sequences",
      "description": "Executing specific DH key exchanges corresponding to token pairs (e.g. es = ephemeral-static).",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t2_s2_d2",
      "label": "Symmetric State Hashing (CipherState)",
      "description": "Hashing handshake tokens continuously into symmetric state keys.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t2_s3",
      "label": "WireGuard VPN Noise_IK Integration",
      "description": "Utilizing Noise_IK patterns for high-speed, low-latency VPN tunnel setup.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t2_s3_d1",
      "label": "1-RTT Connection Establishment",
      "description": "Establishing encrypted IP tunnels in single RTT passes using static Curve25519 keys.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t2_s3_d2",
      "label": "Zero Unauthenticated Response Overhead",
      "description": "Dropping unauthorized handshake packets silently without emitting error responses.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t2_s4",
      "label": "Prologue & Metadata Binding",
      "description": "Binding out-of-band context data into handshake hash states.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t2_s4_d1",
      "label": "Prologue Data Injection",
      "description": "Hashing shared application context data into initial SymmetricState h variables.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t2_s4_d2",
      "label": "Protocol Tampering Rejection",
      "description": "Aborting handshakes if client and server prologue data assumptions differ.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t2_s5",
      "label": "Noise State Machine Architecture",
      "description": "Formal state machine abstractions (HandshakeState, SymmetricState, CipherState).",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t2_s5_d1",
      "label": "CipherState Encrypt/Decrypt Isolation",
      "description": "Managing symmetric encryption keys and 64-bit nonces independently.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t2_s5_d2",
      "label": "Handshake State Destruction",
      "description": "Zeroizing HandshakeState variables once transport mode is activated.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t3",
      "label": "Tor Onion Routing Architecture",
      "description": "Anonymizing network communications using multi-layered encryption over relay circuits.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t3_s1",
      "label": "3-Hop Circuit Construction (Entry, Middle, Exit)",
      "description": "Routing traffic through three independent Tor relay nodes.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t3_s1_d1",
      "label": "Guard / Entry Relay Selection",
      "description": "Routing traffic through persistent long-term Guard relays to prevent Sybil attacks.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t3_s1_d2",
      "label": "Exit Relay Traffic Decryption",
      "description": "Decrypting final payload layers at Exit nodes before forwarding to target destination IPs.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t3_s2",
      "label": "Layered Encryption (Onion Wrapper)",
      "description": "Encrypting payload data with three layers of AES keys corresponding to the 3 circuit relays.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t3_s2_d1",
      "label": "Triple AES-CTR Layer Wrap",
      "description": "Encrypting data: AES_Entry(AES_Middle(AES_Exit(payload))).",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t3_s2_d2",
      "label": "Hop-by-Hop Outer Layer Peeling",
      "description": "Each relay peeling off its corresponding encryption layer before forwarding packets.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t3_s3",
      "label": "Telescoping Circuit Setup (CREATE2 / CREATED2)",
      "description": "Negotiating ephemeral session keys incrementally with each circuit relay node.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t3_s3_d1",
      "label": "Extend Cell Relaying",
      "description": "Establishing keys with Middle relay through Entry relay using ntor handshake.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t3_s3_d2",
      "label": "Zero Identity Disclosure",
      "description": "Ensuring no single relay knows both source IP address and destination IP address.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t3_s4",
      "label": "Tor Onion Services (Hidden Services v3)",
      "description": "Hosting servers anonymously without exposing public IP addresses.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t3_s4_d1",
      "label": "Ed25519 Public Key Address Encoding",
      "description": "Deriving .onion addresses directly from 32-byte Ed25519 public keys.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t3_s4_d2",
      "label": "Rendezvous Point Handshake Architecture",
      "description": "Connecting clients and hidden services via intermediate Rendezvous relays.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t3_s5",
      "label": "Traffic Analysis & Timing Defenses",
      "description": "Defending against adversary passive traffic correlation attacks.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t3_s5_d1",
      "label": "Fixed 512-Byte Cell Payload Framing",
      "description": "Packaging all network data into uniform 512-byte cell packets to mask payload sizes.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t3_s5_d2",
      "label": "Circuit Hopping (10-Minute Expiration)",
      "description": "Rebuilding circuit paths every 10 minutes to prevent long-term traffic profiling.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t4",
      "label": "Secure Multiparty Computation (MPC)",
      "description": "Protocols allowing multiple parties to compute joint functions over inputs while keeping inputs private.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t4_s1",
      "label": "Yao's Garbled Circuits Protocol",
      "description": "Two-party computation protocol converting Boolean circuits into encrypted lookup tables.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t4_s1_d1",
      "label": "Garbled Truth Table Generation",
      "description": "Encrypting gate outputs with wire keys such that only valid input wire keys decrypt outputs.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t4_s1_d2",
      "label": "Oblivious Transfer Wire Key Retrieval",
      "description": "Evaluator retrieving input wire keys corresponding to their secret inputs via OT.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t4_s2",
      "label": "Oblivious Transfer (1-out-of-2 OT)",
      "description": "Protocol allowing receivers to select 1 of 2 sender messages without revealing their choice.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t4_s2_d1",
      "label": "Sender Ignorance Guarantee",
      "description": "Ensuring sender does not learn which message index (0 or 1) the receiver selected.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t4_s2_d2",
      "label": "Receiver Blindness Guarantee",
      "description": "Ensuring receiver learns only the selected message, acquiring zero information about the other message.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t4_s3",
      "label": "Secret Sharing Based MPC (BGW / GMW)",
      "description": "Executing multi-party computation over arithmetic circuits using linear secret sharing.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t4_s3_d1",
      "label": "Addition Gate Local Evaluation",
      "description": "Evaluating addition gates locally by adding secret shares without network communication.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t4_s3_d2",
      "label": "Multiplication Gate Communication Rounds",
      "description": "Exchanging sub-shares during multiplication gates to reduce polynomial degrees.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t4_s4",
      "label": "MPC Threshold Wallets (ECDSA / Ed25519 MPC)",
      "description": "Generating cryptocurrency signatures collaboratively without assembling private keys.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t4_s4_d1",
      "label": "Distributed Key Generation (DKG)",
      "description": "Generating private key shares across nodes such that master private keys never exist in memory.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t4_s4_d2",
      "label": "Threshold Signing Protocols (2-of-3)",
      "description": "Signing transactions when 2 of 3 node share-holders execute interactive MPC passes.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t4_s5",
      "label": "Malicious vs Semi-Honest Security Models",
      "description": "Designing MPC protocols resilient against active adversary cheating.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t4_s5_d1",
      "label": "Semi-Honest (Passive) Adversary Model",
      "description": "Assuming participating nodes follow protocol rules but attempt to infer secret information.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t4_s5_d2",
      "label": "Malicious (Active) ZK Proof Verification",
      "description": "Requiring nodes to provide ZK proofs of correct execution to prevent active cheating.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t5",
      "label": "Secure Protocols & End-to-End Encryption Topic 5",
      "description": "Detailed first-principles mechanics for Secure Protocols & End-to-End Encryption topic 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t5_s1",
      "label": "Secure Protocols & End-to-End Encryption Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Secure Protocols & End-to-End Encryption Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t5_s1_d1",
      "label": "Secure Protocols & End-to-End Encryption Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secure Protocols & End-to-End Encryption Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t5_s1_d2",
      "label": "Secure Protocols & End-to-End Encryption Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secure Protocols & End-to-End Encryption Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t5_s2",
      "label": "Secure Protocols & End-to-End Encryption Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Secure Protocols & End-to-End Encryption Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t5_s2_d1",
      "label": "Secure Protocols & End-to-End Encryption Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secure Protocols & End-to-End Encryption Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t5_s2_d2",
      "label": "Secure Protocols & End-to-End Encryption Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secure Protocols & End-to-End Encryption Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t5_s3",
      "label": "Secure Protocols & End-to-End Encryption Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Secure Protocols & End-to-End Encryption Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t5_s3_d1",
      "label": "Secure Protocols & End-to-End Encryption Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secure Protocols & End-to-End Encryption Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t5_s3_d2",
      "label": "Secure Protocols & End-to-End Encryption Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secure Protocols & End-to-End Encryption Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t5_s4",
      "label": "Secure Protocols & End-to-End Encryption Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Secure Protocols & End-to-End Encryption Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t5_s4_d1",
      "label": "Secure Protocols & End-to-End Encryption Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secure Protocols & End-to-End Encryption Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t5_s4_d2",
      "label": "Secure Protocols & End-to-End Encryption Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secure Protocols & End-to-End Encryption Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t5_s5",
      "label": "Secure Protocols & End-to-End Encryption Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Secure Protocols & End-to-End Encryption Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t5_s5_d1",
      "label": "Secure Protocols & End-to-End Encryption Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secure Protocols & End-to-End Encryption Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t5_s5_d2",
      "label": "Secure Protocols & End-to-End Encryption Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secure Protocols & End-to-End Encryption Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t6",
      "label": "Secure Protocols & End-to-End Encryption Topic 6",
      "description": "Detailed first-principles mechanics for Secure Protocols & End-to-End Encryption topic 6.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t6_s1",
      "label": "Secure Protocols & End-to-End Encryption Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Secure Protocols & End-to-End Encryption Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t6_s1_d1",
      "label": "Secure Protocols & End-to-End Encryption Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secure Protocols & End-to-End Encryption Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t6_s1_d2",
      "label": "Secure Protocols & End-to-End Encryption Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secure Protocols & End-to-End Encryption Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t6_s2",
      "label": "Secure Protocols & End-to-End Encryption Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Secure Protocols & End-to-End Encryption Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t6_s2_d1",
      "label": "Secure Protocols & End-to-End Encryption Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secure Protocols & End-to-End Encryption Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t6_s2_d2",
      "label": "Secure Protocols & End-to-End Encryption Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secure Protocols & End-to-End Encryption Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t6_s3",
      "label": "Secure Protocols & End-to-End Encryption Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Secure Protocols & End-to-End Encryption Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t6_s3_d1",
      "label": "Secure Protocols & End-to-End Encryption Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secure Protocols & End-to-End Encryption Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t6_s3_d2",
      "label": "Secure Protocols & End-to-End Encryption Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secure Protocols & End-to-End Encryption Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t6_s4",
      "label": "Secure Protocols & End-to-End Encryption Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Secure Protocols & End-to-End Encryption Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t6_s4_d1",
      "label": "Secure Protocols & End-to-End Encryption Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secure Protocols & End-to-End Encryption Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t6_s4_d2",
      "label": "Secure Protocols & End-to-End Encryption Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secure Protocols & End-to-End Encryption Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t6_s5",
      "label": "Secure Protocols & End-to-End Encryption Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Secure Protocols & End-to-End Encryption Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t6_s5_d1",
      "label": "Secure Protocols & End-to-End Encryption Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secure Protocols & End-to-End Encryption Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p7_t6_s5_d2",
      "label": "Secure Protocols & End-to-End Encryption Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Secure Protocols & End-to-End Encryption Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8",
      "label": "Homomorphic Encryption & Privacy",
      "description": "Cryptographic schemes enabling direct computation over encrypted ciphertexts without decryption.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t1",
      "label": "Paillier Additively Homomorphic Encryption",
      "description": "Probabilistic asymmetric algorithm supporting addition of encrypted plaintexts.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t1_s1",
      "label": "Paillier Key Generation & Modulus n^2",
      "description": "Selecting primes p and q to construct modulus n = p*q and working in group Z*_{n^2}.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t1_s1_d1",
      "label": "Carmichael Function lambda = lcm(p-1, q-1)",
      "description": "Computing secret exponent lambda to decrypt ciphertexts.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t1_s1_d2",
      "label": "Generator g Selection & L(x) Function",
      "description": "Defining L(u) = (u - 1) / n to extract plaintext values during decryption.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t1_s2",
      "label": "Additive Homomorphic Property Formula",
      "description": "Multiplying two ciphertexts in modulo n^2 yields the encryption of the sum of plaintexts.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t1_s2_d1",
      "label": "E(m_1) * E(m_2) mod n^2 = E(m_1 + m_2 mod n)",
      "description": "Multiplying ciphertexts to add underlying plaintexts without decryption.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t1_s2_d2",
      "label": "E(m_1)^k mod n^2 = E(k * m_1 mod n)",
      "description": "Raising ciphertexts to integer powers k to multiply plaintexts by scalar constants.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t1_s3",
      "label": "Encrypted Aggregation & Electronic Voting",
      "description": "Summing encrypted numbers across distributed untrusted nodes.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t1_s3_d1",
      "label": "Private Encrypted Ballot Tallying",
      "description": "Multiplying encrypted vote ciphertexts to compute total election sums before single decryption.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t1_s3_d2",
      "label": "Privacy-Preserving Metric Aggregation",
      "description": "Aggregating sensitive telemetry metrics without accessing individual user numbers.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t1_s4",
      "label": "Probabilistic Encryption & Random Noise r",
      "description": "Injecting random factor r into ciphertexts so identical plaintexts encrypt to distinct ciphertexts.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t1_s4_d1",
      "label": "Ciphertext Formula c = g^m * r^n mod n^2",
      "description": "Sampling random r in Z*_n for every encryption operation.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t1_s4_d2",
      "label": "Semantic Security (IND-CPA Guarantee)",
      "description": "Preventing attackers from distinguishing which plaintext corresponds to a target ciphertext.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t1_s5",
      "label": "Computational Overhead Limitations",
      "description": "Evaluating performance constraints of large modular exponentiations.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t1_s5_d1",
      "label": "2048-Bit Modulus Size Bounds",
      "description": "Managing 4096-bit ciphertext sizes per encrypted number.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t1_s5_d2",
      "label": "Multiplication Limit (No Ciphertext-Ciphertext Mult)",
      "description": "Restricting operations to addition; unable to multiply two encrypted ciphertexts together.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t2",
      "label": "Fully Homomorphic Encryption (FHE) Schemes",
      "description": "Cryptographic schemes supporting arbitrary evaluation of addition and multiplication circuits over encrypted data.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t2_s1",
      "label": "BGV & BFV Exact Integer FHE Schemes",
      "description": "Lattice-based FHE schemes operating over modular polynomial rings for exact integer arithmetic.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t2_s1_d1",
      "label": "RLWE Ciphertext Structure (c_0, c_1)",
      "description": "Representing ciphertexts as polynomial pairs in ring R_q = Z_q[X]/(X^n + 1).",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t2_s1_d2",
      "label": "Homomorphic Addition & Multiplication Operations",
      "description": "Adding ciphertexts component-wise and multiplying via tensor products.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t2_s2",
      "label": "CKKS Approximate Floating-Point FHE",
      "description": "FHE scheme supporting fixed-point and floating-point arithmetic for machine learning.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t2_s2_d1",
      "label": "Rescaling Operation (Scale Factor Delta)",
      "description": "Rescaling fixed-point scaling factors Delta after ciphertext multiplication.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t2_s2_d2",
      "label": "Encrypted Neural Network Inference",
      "description": "Evaluating neural network activation layers directly on encrypted feature vectors.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t2_s3",
      "label": "TFHE (Fully Homomorphic Encryption over Torus)",
      "description": "Fast FHE scheme optimizing gate-level boolean evaluation and fast bootstrapping.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t2_s3_d1",
      "label": "Sub-100ms Fast Bootstrapping Per Gate",
      "description": "Executing fast bootstrapping evaluations on individual boolean lookup gates.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t2_s3_d2",
      "label": "Encrypted Arbitrary Boolean Circuit Execution",
      "description": "Evaluating AND, OR, XOR, and MUX logic gates directly on encrypted bits.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t2_s4",
      "label": "Key Switching & Relinearization",
      "description": "Reducing ciphertext degree back to size 2 after ciphertext-ciphertext multiplication.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t2_s4_d1",
      "label": "Degree Expansion (2 to 3 Polynomials)",
      "description": "Multiplying two 2-element ciphertexts yields a 3-element quadratic ciphertext.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t2_s4_d2",
      "label": "Relinearization Key (Rlk) Application",
      "description": "Applying evaluation keys to reduce ciphertext degree back to 2 elements.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t2_s5",
      "label": "Hardware Acceleration (FPGA & ASIC FHE Accelerators)",
      "description": "Designing custom hardware to accelerate high-dimensional polynomial operations.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t2_s5_d1",
      "label": "NTT Polynomial Core Hardware Engines",
      "description": "Accelerating Number Theoretic Transforms in dedicated silicon pipelines.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t2_s5_d2",
      "label": "1000x Speedup Target for Production FHE",
      "description": "Reducing FHE compute overhead to bring encrypted cloud inference within millisecond SLAs.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t3",
      "label": "Bootstrapping & FHE Noise Management",
      "description": "Refreshing accumulated noise in ciphertexts to enable unbounded circuit evaluation depth.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t3_s1",
      "label": "Lattice Noise Accumulation Problem",
      "description": "Tracking error term e growth during homomorphic multiplication operations.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t3_s1_d1",
      "label": "Additive vs Multiplicative Noise Growth",
      "description": "Adding ciphertexts increases noise linearly; multiplying ciphertexts increases noise quadratically.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t3_s1_d2",
      "label": "Noise Budget Exhaustion",
      "description": "Decryption failing when accumulated noise exceeds modulo q threshold bounds.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t3_s2",
      "label": "Craig Gentry's Bootstrapping Breakthrough",
      "description": "Evaluating the decryption circuit homomorphically to refresh ciphertext noise levels.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t3_s2_d1",
      "label": "Encrypted Secret Key Evaluation",
      "description": "Evaluating Decrypt(c, sk) homomorphically using an encrypted version of the secret key.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t3_s2_d2",
      "label": "Lower Noise Output Ciphertext Generation",
      "description": "Outputting a fresh valid ciphertext encrypting the same message with reduced noise.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t3_s3",
      "label": "Leveled FHE vs Pure FHE",
      "description": "Selecting parameters to support fixed-depth circuits without expensive bootstrapping.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t3_s3_d1",
      "label": "Multi-Level Modulus Chains (q_0, ..., q_L)",
      "description": "Dropping modulus levels after multiplications (Modulus Switching) to manage noise.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t3_s3_d2",
      "label": "Bootstrapping Avoidance for Fixed Depth",
      "description": "Avoiding bootstrapping overhead when evaluating fixed-depth algorithms (e.g. depth 5).",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t3_s4",
      "label": "Modulus Switching Mechanics",
      "description": "Scaling down ciphertext coefficients to reduce noise without changing underlying messages.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t3_s4_d1",
      "label": "Scale Factor Reduction (q / q')",
      "description": "Rescaling ciphertexts from modulo q to smaller modulo q'.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t3_s4_d2",
      "label": "Proportional Noise Reduction",
      "description": "Reducing noise magnitude proportionally to the modulus scaling factor.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t3_s5",
      "label": "Bootstrapping Computational Complexity",
      "description": "Analyzing the heavy time and memory costs of executing bootstrapping operations.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t3_s5_d1",
      "label": "Multi-Second Single-Thread Latency",
      "description": "Bootstrapping taking seconds of CPU compute per ciphertext variable.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t3_s5_d2",
      "label": "Memory Footprint for Bootstrapping Keys",
      "description": "Requiring multi-gigabyte evaluation key downloads for client devices.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t4",
      "label": "Privacy-Preserving Machine Learning & PSI",
      "description": "Real-world privacy protocols combining FHE, MPC, and Private Set Intersection.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t4_s1",
      "label": "Encrypted Cloud Neural Network Inference",
      "description": "Evaluating trained ML models on encrypted customer inputs without learning user data.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t4_s1_d1",
      "label": "Polynomial Activation Approximations",
      "description": "Replacing ReLU activations with square (x^2) or polynomial approximations for FHE suitability.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t4_s1_d2",
      "label": "Client-Side Key Ownership Guarantee",
      "description": "Keeping decryption keys exclusively on client devices while clouds compute on ciphertexts.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t4_s2",
      "label": "Private Set Intersection (PSI)",
      "description": "Protocols allowing two parties to compute set intersections without revealing non-overlapping items.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t4_s2_d1",
      "label": "DH-Based PSI (Diffie-Hellman Exponentiation)",
      "description": "Hashing set elements to curve points and double-encrypting to find matching points.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t4_s2_d2",
      "label": "Oblivious PRF (OPRF) PSI Speedups",
      "description": "Using OPRF protocols to compute intersections over millions of items in sub-second times.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t4_s3",
      "label": "Differential Privacy (DP) Noise Addition",
      "description": "Injecting mathematical noise into query outputs to prevent individual record identification.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t4_s3_d1",
      "label": "Laplace & Gaussian Noise Mechanisms",
      "description": "Adding noise proportional to query sensitivity and privacy budget epsilon.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t4_s3_d2",
      "label": "Privacy Budget Epsilon (eps) Tracking",
      "description": "Bounding cumulative privacy loss across multiple database queries.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t4_s4",
      "label": "Federated Learning with Secure Aggregation",
      "description": "Training ML models across edge devices while masking individual gradient updates using SecAgg.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t4_s4_d1",
      "label": "Zero-Sum Random Mask Pairing",
      "description": "Pairing edge devices with zero-sum random masks that cancel out when gradients are summed.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t4_s4_d2",
      "label": "Central Server Gradient Unawareness",
      "description": "Ensuring central servers learn only aggregated model updates, never raw user gradients.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t4_s5",
      "label": "Confidential Computing Enclaves for ML",
      "description": "Executing cleartext ML workloads inside hardware-protected CPU/GPU enclaves.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t4_s5_d1",
      "label": "NVIDIA H100 Confidential Computing",
      "description": "Encrypting PCIe bus communications between host CPU memory and GPU VRAM.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t4_s5_d2",
      "label": "Zero Code Modification Deployment",
      "description": "Running standard PyTorch / TensorFlow code inside hardware enclaves without FHE rewriting.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t5",
      "label": "Homomorphic Encryption & Privacy Topic 5",
      "description": "Detailed first-principles mechanics for Homomorphic Encryption & Privacy topic 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t5_s1",
      "label": "Homomorphic Encryption & Privacy Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Homomorphic Encryption & Privacy Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t5_s1_d1",
      "label": "Homomorphic Encryption & Privacy Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Homomorphic Encryption & Privacy Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t5_s1_d2",
      "label": "Homomorphic Encryption & Privacy Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Homomorphic Encryption & Privacy Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t5_s2",
      "label": "Homomorphic Encryption & Privacy Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Homomorphic Encryption & Privacy Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t5_s2_d1",
      "label": "Homomorphic Encryption & Privacy Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Homomorphic Encryption & Privacy Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t5_s2_d2",
      "label": "Homomorphic Encryption & Privacy Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Homomorphic Encryption & Privacy Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t5_s3",
      "label": "Homomorphic Encryption & Privacy Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Homomorphic Encryption & Privacy Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t5_s3_d1",
      "label": "Homomorphic Encryption & Privacy Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Homomorphic Encryption & Privacy Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t5_s3_d2",
      "label": "Homomorphic Encryption & Privacy Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Homomorphic Encryption & Privacy Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t5_s4",
      "label": "Homomorphic Encryption & Privacy Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Homomorphic Encryption & Privacy Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t5_s4_d1",
      "label": "Homomorphic Encryption & Privacy Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Homomorphic Encryption & Privacy Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t5_s4_d2",
      "label": "Homomorphic Encryption & Privacy Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Homomorphic Encryption & Privacy Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t5_s5",
      "label": "Homomorphic Encryption & Privacy Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Homomorphic Encryption & Privacy Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t5_s5_d1",
      "label": "Homomorphic Encryption & Privacy Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Homomorphic Encryption & Privacy Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t5_s5_d2",
      "label": "Homomorphic Encryption & Privacy Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Homomorphic Encryption & Privacy Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t6",
      "label": "Homomorphic Encryption & Privacy Topic 6",
      "description": "Detailed first-principles mechanics for Homomorphic Encryption & Privacy topic 6.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t6_s1",
      "label": "Homomorphic Encryption & Privacy Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Homomorphic Encryption & Privacy Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t6_s1_d1",
      "label": "Homomorphic Encryption & Privacy Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Homomorphic Encryption & Privacy Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t6_s1_d2",
      "label": "Homomorphic Encryption & Privacy Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Homomorphic Encryption & Privacy Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t6_s2",
      "label": "Homomorphic Encryption & Privacy Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Homomorphic Encryption & Privacy Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t6_s2_d1",
      "label": "Homomorphic Encryption & Privacy Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Homomorphic Encryption & Privacy Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t6_s2_d2",
      "label": "Homomorphic Encryption & Privacy Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Homomorphic Encryption & Privacy Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t6_s3",
      "label": "Homomorphic Encryption & Privacy Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Homomorphic Encryption & Privacy Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t6_s3_d1",
      "label": "Homomorphic Encryption & Privacy Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Homomorphic Encryption & Privacy Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t6_s3_d2",
      "label": "Homomorphic Encryption & Privacy Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Homomorphic Encryption & Privacy Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t6_s4",
      "label": "Homomorphic Encryption & Privacy Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Homomorphic Encryption & Privacy Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t6_s4_d1",
      "label": "Homomorphic Encryption & Privacy Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Homomorphic Encryption & Privacy Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t6_s4_d2",
      "label": "Homomorphic Encryption & Privacy Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Homomorphic Encryption & Privacy Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t6_s5",
      "label": "Homomorphic Encryption & Privacy Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Homomorphic Encryption & Privacy Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t6_s5_d1",
      "label": "Homomorphic Encryption & Privacy Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Homomorphic Encryption & Privacy Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p8_t6_s5_d2",
      "label": "Homomorphic Encryption & Privacy Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Homomorphic Encryption & Privacy Topic 6 Sub-System 5.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "source": "crypto_root",
      "target": "crypto_root_p1"
    },
    {
      "source": "crypto_root_p1",
      "target": "crypto_root_p1_t1"
    },
    {
      "source": "crypto_root_p1_t1",
      "target": "crypto_root_p1_t1_s1"
    },
    {
      "source": "crypto_root_p1_t1_s1",
      "target": "crypto_root_p1_t1_s1_d1"
    },
    {
      "source": "crypto_root_p1_t1_s1",
      "target": "crypto_root_p1_t1_s1_d2"
    },
    {
      "source": "crypto_root_p1_t1",
      "target": "crypto_root_p1_t1_s2"
    },
    {
      "source": "crypto_root_p1_t1_s2",
      "target": "crypto_root_p1_t1_s2_d1"
    },
    {
      "source": "crypto_root_p1_t1_s2",
      "target": "crypto_root_p1_t1_s2_d2"
    },
    {
      "source": "crypto_root_p1_t1",
      "target": "crypto_root_p1_t1_s3"
    },
    {
      "source": "crypto_root_p1_t1_s3",
      "target": "crypto_root_p1_t1_s3_d1"
    },
    {
      "source": "crypto_root_p1_t1_s3",
      "target": "crypto_root_p1_t1_s3_d2"
    },
    {
      "source": "crypto_root_p1_t1",
      "target": "crypto_root_p1_t1_s4"
    },
    {
      "source": "crypto_root_p1_t1_s4",
      "target": "crypto_root_p1_t1_s4_d1"
    },
    {
      "source": "crypto_root_p1_t1_s4",
      "target": "crypto_root_p1_t1_s4_d2"
    },
    {
      "source": "crypto_root_p1_t1",
      "target": "crypto_root_p1_t1_s5"
    },
    {
      "source": "crypto_root_p1_t1_s5",
      "target": "crypto_root_p1_t1_s5_d1"
    },
    {
      "source": "crypto_root_p1_t1_s5",
      "target": "crypto_root_p1_t1_s5_d2"
    },
    {
      "source": "crypto_root_p1",
      "target": "crypto_root_p1_t2"
    },
    {
      "source": "crypto_root_p1_t2",
      "target": "crypto_root_p1_t2_s1"
    },
    {
      "source": "crypto_root_p1_t2_s1",
      "target": "crypto_root_p1_t2_s1_d1"
    },
    {
      "source": "crypto_root_p1_t2_s1",
      "target": "crypto_root_p1_t2_s1_d2"
    },
    {
      "source": "crypto_root_p1_t2",
      "target": "crypto_root_p1_t2_s2"
    },
    {
      "source": "crypto_root_p1_t2_s2",
      "target": "crypto_root_p1_t2_s2_d1"
    },
    {
      "source": "crypto_root_p1_t2_s2",
      "target": "crypto_root_p1_t2_s2_d2"
    },
    {
      "source": "crypto_root_p1_t2",
      "target": "crypto_root_p1_t2_s3"
    },
    {
      "source": "crypto_root_p1_t2_s3",
      "target": "crypto_root_p1_t2_s3_d1"
    },
    {
      "source": "crypto_root_p1_t2_s3",
      "target": "crypto_root_p1_t2_s3_d2"
    },
    {
      "source": "crypto_root_p1_t2",
      "target": "crypto_root_p1_t2_s4"
    },
    {
      "source": "crypto_root_p1_t2_s4",
      "target": "crypto_root_p1_t2_s4_d1"
    },
    {
      "source": "crypto_root_p1_t2_s4",
      "target": "crypto_root_p1_t2_s4_d2"
    },
    {
      "source": "crypto_root_p1_t2",
      "target": "crypto_root_p1_t2_s5"
    },
    {
      "source": "crypto_root_p1_t2_s5",
      "target": "crypto_root_p1_t2_s5_d1"
    },
    {
      "source": "crypto_root_p1_t2_s5",
      "target": "crypto_root_p1_t2_s5_d2"
    },
    {
      "source": "crypto_root_p1",
      "target": "crypto_root_p1_t3"
    },
    {
      "source": "crypto_root_p1_t3",
      "target": "crypto_root_p1_t3_s1"
    },
    {
      "source": "crypto_root_p1_t3_s1",
      "target": "crypto_root_p1_t3_s1_d1"
    },
    {
      "source": "crypto_root_p1_t3_s1",
      "target": "crypto_root_p1_t3_s1_d2"
    },
    {
      "source": "crypto_root_p1_t3",
      "target": "crypto_root_p1_t3_s2"
    },
    {
      "source": "crypto_root_p1_t3_s2",
      "target": "crypto_root_p1_t3_s2_d1"
    },
    {
      "source": "crypto_root_p1_t3_s2",
      "target": "crypto_root_p1_t3_s2_d2"
    },
    {
      "source": "crypto_root_p1_t3",
      "target": "crypto_root_p1_t3_s3"
    },
    {
      "source": "crypto_root_p1_t3_s3",
      "target": "crypto_root_p1_t3_s3_d1"
    },
    {
      "source": "crypto_root_p1_t3_s3",
      "target": "crypto_root_p1_t3_s3_d2"
    },
    {
      "source": "crypto_root_p1_t3",
      "target": "crypto_root_p1_t3_s4"
    },
    {
      "source": "crypto_root_p1_t3_s4",
      "target": "crypto_root_p1_t3_s4_d1"
    },
    {
      "source": "crypto_root_p1_t3_s4",
      "target": "crypto_root_p1_t3_s4_d2"
    },
    {
      "source": "crypto_root_p1_t3",
      "target": "crypto_root_p1_t3_s5"
    },
    {
      "source": "crypto_root_p1_t3_s5",
      "target": "crypto_root_p1_t3_s5_d1"
    },
    {
      "source": "crypto_root_p1_t3_s5",
      "target": "crypto_root_p1_t3_s5_d2"
    },
    {
      "source": "crypto_root_p1",
      "target": "crypto_root_p1_t4"
    },
    {
      "source": "crypto_root_p1_t4",
      "target": "crypto_root_p1_t4_s1"
    },
    {
      "source": "crypto_root_p1_t4_s1",
      "target": "crypto_root_p1_t4_s1_d1"
    },
    {
      "source": "crypto_root_p1_t4_s1",
      "target": "crypto_root_p1_t4_s1_d2"
    },
    {
      "source": "crypto_root_p1_t4",
      "target": "crypto_root_p1_t4_s2"
    },
    {
      "source": "crypto_root_p1_t4_s2",
      "target": "crypto_root_p1_t4_s2_d1"
    },
    {
      "source": "crypto_root_p1_t4_s2",
      "target": "crypto_root_p1_t4_s2_d2"
    },
    {
      "source": "crypto_root_p1_t4",
      "target": "crypto_root_p1_t4_s3"
    },
    {
      "source": "crypto_root_p1_t4_s3",
      "target": "crypto_root_p1_t4_s3_d1"
    },
    {
      "source": "crypto_root_p1_t4_s3",
      "target": "crypto_root_p1_t4_s3_d2"
    },
    {
      "source": "crypto_root_p1_t4",
      "target": "crypto_root_p1_t4_s4"
    },
    {
      "source": "crypto_root_p1_t4_s4",
      "target": "crypto_root_p1_t4_s4_d1"
    },
    {
      "source": "crypto_root_p1_t4_s4",
      "target": "crypto_root_p1_t4_s4_d2"
    },
    {
      "source": "crypto_root_p1_t4",
      "target": "crypto_root_p1_t4_s5"
    },
    {
      "source": "crypto_root_p1_t4_s5",
      "target": "crypto_root_p1_t4_s5_d1"
    },
    {
      "source": "crypto_root_p1_t4_s5",
      "target": "crypto_root_p1_t4_s5_d2"
    },
    {
      "source": "crypto_root_p1",
      "target": "crypto_root_p1_t5"
    },
    {
      "source": "crypto_root_p1_t5",
      "target": "crypto_root_p1_t5_s1"
    },
    {
      "source": "crypto_root_p1_t5_s1",
      "target": "crypto_root_p1_t5_s1_d1"
    },
    {
      "source": "crypto_root_p1_t5_s1",
      "target": "crypto_root_p1_t5_s1_d2"
    },
    {
      "source": "crypto_root_p1_t5",
      "target": "crypto_root_p1_t5_s2"
    },
    {
      "source": "crypto_root_p1_t5_s2",
      "target": "crypto_root_p1_t5_s2_d1"
    },
    {
      "source": "crypto_root_p1_t5_s2",
      "target": "crypto_root_p1_t5_s2_d2"
    },
    {
      "source": "crypto_root_p1_t5",
      "target": "crypto_root_p1_t5_s3"
    },
    {
      "source": "crypto_root_p1_t5_s3",
      "target": "crypto_root_p1_t5_s3_d1"
    },
    {
      "source": "crypto_root_p1_t5_s3",
      "target": "crypto_root_p1_t5_s3_d2"
    },
    {
      "source": "crypto_root_p1_t5",
      "target": "crypto_root_p1_t5_s4"
    },
    {
      "source": "crypto_root_p1_t5_s4",
      "target": "crypto_root_p1_t5_s4_d1"
    },
    {
      "source": "crypto_root_p1_t5_s4",
      "target": "crypto_root_p1_t5_s4_d2"
    },
    {
      "source": "crypto_root_p1_t5",
      "target": "crypto_root_p1_t5_s5"
    },
    {
      "source": "crypto_root_p1_t5_s5",
      "target": "crypto_root_p1_t5_s5_d1"
    },
    {
      "source": "crypto_root_p1_t5_s5",
      "target": "crypto_root_p1_t5_s5_d2"
    },
    {
      "source": "crypto_root_p1",
      "target": "crypto_root_p1_t6"
    },
    {
      "source": "crypto_root_p1_t6",
      "target": "crypto_root_p1_t6_s1"
    },
    {
      "source": "crypto_root_p1_t6_s1",
      "target": "crypto_root_p1_t6_s1_d1"
    },
    {
      "source": "crypto_root_p1_t6_s1",
      "target": "crypto_root_p1_t6_s1_d2"
    },
    {
      "source": "crypto_root_p1_t6",
      "target": "crypto_root_p1_t6_s2"
    },
    {
      "source": "crypto_root_p1_t6_s2",
      "target": "crypto_root_p1_t6_s2_d1"
    },
    {
      "source": "crypto_root_p1_t6_s2",
      "target": "crypto_root_p1_t6_s2_d2"
    },
    {
      "source": "crypto_root_p1_t6",
      "target": "crypto_root_p1_t6_s3"
    },
    {
      "source": "crypto_root_p1_t6_s3",
      "target": "crypto_root_p1_t6_s3_d1"
    },
    {
      "source": "crypto_root_p1_t6_s3",
      "target": "crypto_root_p1_t6_s3_d2"
    },
    {
      "source": "crypto_root_p1_t6",
      "target": "crypto_root_p1_t6_s4"
    },
    {
      "source": "crypto_root_p1_t6_s4",
      "target": "crypto_root_p1_t6_s4_d1"
    },
    {
      "source": "crypto_root_p1_t6_s4",
      "target": "crypto_root_p1_t6_s4_d2"
    },
    {
      "source": "crypto_root_p1_t6",
      "target": "crypto_root_p1_t6_s5"
    },
    {
      "source": "crypto_root_p1_t6_s5",
      "target": "crypto_root_p1_t6_s5_d1"
    },
    {
      "source": "crypto_root_p1_t6_s5",
      "target": "crypto_root_p1_t6_s5_d2"
    },
    {
      "source": "crypto_root",
      "target": "crypto_root_p2"
    },
    {
      "source": "crypto_root_p2",
      "target": "crypto_root_p2_t1"
    },
    {
      "source": "crypto_root_p2_t1",
      "target": "crypto_root_p2_t1_s1"
    },
    {
      "source": "crypto_root_p2_t1_s1",
      "target": "crypto_root_p2_t1_s1_d1"
    },
    {
      "source": "crypto_root_p2_t1_s1",
      "target": "crypto_root_p2_t1_s1_d2"
    },
    {
      "source": "crypto_root_p2_t1",
      "target": "crypto_root_p2_t1_s2"
    },
    {
      "source": "crypto_root_p2_t1_s2",
      "target": "crypto_root_p2_t1_s2_d1"
    },
    {
      "source": "crypto_root_p2_t1_s2",
      "target": "crypto_root_p2_t1_s2_d2"
    },
    {
      "source": "crypto_root_p2_t1",
      "target": "crypto_root_p2_t1_s3"
    },
    {
      "source": "crypto_root_p2_t1_s3",
      "target": "crypto_root_p2_t1_s3_d1"
    },
    {
      "source": "crypto_root_p2_t1_s3",
      "target": "crypto_root_p2_t1_s3_d2"
    },
    {
      "source": "crypto_root_p2_t1",
      "target": "crypto_root_p2_t1_s4"
    },
    {
      "source": "crypto_root_p2_t1_s4",
      "target": "crypto_root_p2_t1_s4_d1"
    },
    {
      "source": "crypto_root_p2_t1_s4",
      "target": "crypto_root_p2_t1_s4_d2"
    },
    {
      "source": "crypto_root_p2_t1",
      "target": "crypto_root_p2_t1_s5"
    },
    {
      "source": "crypto_root_p2_t1_s5",
      "target": "crypto_root_p2_t1_s5_d1"
    },
    {
      "source": "crypto_root_p2_t1_s5",
      "target": "crypto_root_p2_t1_s5_d2"
    },
    {
      "source": "crypto_root_p2",
      "target": "crypto_root_p2_t2"
    },
    {
      "source": "crypto_root_p2_t2",
      "target": "crypto_root_p2_t2_s1"
    },
    {
      "source": "crypto_root_p2_t2_s1",
      "target": "crypto_root_p2_t2_s1_d1"
    },
    {
      "source": "crypto_root_p2_t2_s1",
      "target": "crypto_root_p2_t2_s1_d2"
    },
    {
      "source": "crypto_root_p2_t2",
      "target": "crypto_root_p2_t2_s2"
    },
    {
      "source": "crypto_root_p2_t2_s2",
      "target": "crypto_root_p2_t2_s2_d1"
    },
    {
      "source": "crypto_root_p2_t2_s2",
      "target": "crypto_root_p2_t2_s2_d2"
    },
    {
      "source": "crypto_root_p2_t2",
      "target": "crypto_root_p2_t2_s3"
    },
    {
      "source": "crypto_root_p2_t2_s3",
      "target": "crypto_root_p2_t2_s3_d1"
    },
    {
      "source": "crypto_root_p2_t2_s3",
      "target": "crypto_root_p2_t2_s3_d2"
    },
    {
      "source": "crypto_root_p2_t2",
      "target": "crypto_root_p2_t2_s4"
    },
    {
      "source": "crypto_root_p2_t2_s4",
      "target": "crypto_root_p2_t2_s4_d1"
    },
    {
      "source": "crypto_root_p2_t2_s4",
      "target": "crypto_root_p2_t2_s4_d2"
    },
    {
      "source": "crypto_root_p2_t2",
      "target": "crypto_root_p2_t2_s5"
    },
    {
      "source": "crypto_root_p2_t2_s5",
      "target": "crypto_root_p2_t2_s5_d1"
    },
    {
      "source": "crypto_root_p2_t2_s5",
      "target": "crypto_root_p2_t2_s5_d2"
    },
    {
      "source": "crypto_root_p2",
      "target": "crypto_root_p2_t3"
    },
    {
      "source": "crypto_root_p2_t3",
      "target": "crypto_root_p2_t3_s1"
    },
    {
      "source": "crypto_root_p2_t3_s1",
      "target": "crypto_root_p2_t3_s1_d1"
    },
    {
      "source": "crypto_root_p2_t3_s1",
      "target": "crypto_root_p2_t3_s1_d2"
    },
    {
      "source": "crypto_root_p2_t3",
      "target": "crypto_root_p2_t3_s2"
    },
    {
      "source": "crypto_root_p2_t3_s2",
      "target": "crypto_root_p2_t3_s2_d1"
    },
    {
      "source": "crypto_root_p2_t3_s2",
      "target": "crypto_root_p2_t3_s2_d2"
    },
    {
      "source": "crypto_root_p2_t3",
      "target": "crypto_root_p2_t3_s3"
    },
    {
      "source": "crypto_root_p2_t3_s3",
      "target": "crypto_root_p2_t3_s3_d1"
    },
    {
      "source": "crypto_root_p2_t3_s3",
      "target": "crypto_root_p2_t3_s3_d2"
    },
    {
      "source": "crypto_root_p2_t3",
      "target": "crypto_root_p2_t3_s4"
    },
    {
      "source": "crypto_root_p2_t3_s4",
      "target": "crypto_root_p2_t3_s4_d1"
    },
    {
      "source": "crypto_root_p2_t3_s4",
      "target": "crypto_root_p2_t3_s4_d2"
    },
    {
      "source": "crypto_root_p2_t3",
      "target": "crypto_root_p2_t3_s5"
    },
    {
      "source": "crypto_root_p2_t3_s5",
      "target": "crypto_root_p2_t3_s5_d1"
    },
    {
      "source": "crypto_root_p2_t3_s5",
      "target": "crypto_root_p2_t3_s5_d2"
    },
    {
      "source": "crypto_root_p2",
      "target": "crypto_root_p2_t4"
    },
    {
      "source": "crypto_root_p2_t4",
      "target": "crypto_root_p2_t4_s1"
    },
    {
      "source": "crypto_root_p2_t4_s1",
      "target": "crypto_root_p2_t4_s1_d1"
    },
    {
      "source": "crypto_root_p2_t4_s1",
      "target": "crypto_root_p2_t4_s1_d2"
    },
    {
      "source": "crypto_root_p2_t4",
      "target": "crypto_root_p2_t4_s2"
    },
    {
      "source": "crypto_root_p2_t4_s2",
      "target": "crypto_root_p2_t4_s2_d1"
    },
    {
      "source": "crypto_root_p2_t4_s2",
      "target": "crypto_root_p2_t4_s2_d2"
    },
    {
      "source": "crypto_root_p2_t4",
      "target": "crypto_root_p2_t4_s3"
    },
    {
      "source": "crypto_root_p2_t4_s3",
      "target": "crypto_root_p2_t4_s3_d1"
    },
    {
      "source": "crypto_root_p2_t4_s3",
      "target": "crypto_root_p2_t4_s3_d2"
    },
    {
      "source": "crypto_root_p2_t4",
      "target": "crypto_root_p2_t4_s4"
    },
    {
      "source": "crypto_root_p2_t4_s4",
      "target": "crypto_root_p2_t4_s4_d1"
    },
    {
      "source": "crypto_root_p2_t4_s4",
      "target": "crypto_root_p2_t4_s4_d2"
    },
    {
      "source": "crypto_root_p2_t4",
      "target": "crypto_root_p2_t4_s5"
    },
    {
      "source": "crypto_root_p2_t4_s5",
      "target": "crypto_root_p2_t4_s5_d1"
    },
    {
      "source": "crypto_root_p2_t4_s5",
      "target": "crypto_root_p2_t4_s5_d2"
    },
    {
      "source": "crypto_root_p2",
      "target": "crypto_root_p2_t5"
    },
    {
      "source": "crypto_root_p2_t5",
      "target": "crypto_root_p2_t5_s1"
    },
    {
      "source": "crypto_root_p2_t5_s1",
      "target": "crypto_root_p2_t5_s1_d1"
    },
    {
      "source": "crypto_root_p2_t5_s1",
      "target": "crypto_root_p2_t5_s1_d2"
    },
    {
      "source": "crypto_root_p2_t5",
      "target": "crypto_root_p2_t5_s2"
    },
    {
      "source": "crypto_root_p2_t5_s2",
      "target": "crypto_root_p2_t5_s2_d1"
    },
    {
      "source": "crypto_root_p2_t5_s2",
      "target": "crypto_root_p2_t5_s2_d2"
    },
    {
      "source": "crypto_root_p2_t5",
      "target": "crypto_root_p2_t5_s3"
    },
    {
      "source": "crypto_root_p2_t5_s3",
      "target": "crypto_root_p2_t5_s3_d1"
    },
    {
      "source": "crypto_root_p2_t5_s3",
      "target": "crypto_root_p2_t5_s3_d2"
    },
    {
      "source": "crypto_root_p2_t5",
      "target": "crypto_root_p2_t5_s4"
    },
    {
      "source": "crypto_root_p2_t5_s4",
      "target": "crypto_root_p2_t5_s4_d1"
    },
    {
      "source": "crypto_root_p2_t5_s4",
      "target": "crypto_root_p2_t5_s4_d2"
    },
    {
      "source": "crypto_root_p2_t5",
      "target": "crypto_root_p2_t5_s5"
    },
    {
      "source": "crypto_root_p2_t5_s5",
      "target": "crypto_root_p2_t5_s5_d1"
    },
    {
      "source": "crypto_root_p2_t5_s5",
      "target": "crypto_root_p2_t5_s5_d2"
    },
    {
      "source": "crypto_root_p2",
      "target": "crypto_root_p2_t6"
    },
    {
      "source": "crypto_root_p2_t6",
      "target": "crypto_root_p2_t6_s1"
    },
    {
      "source": "crypto_root_p2_t6_s1",
      "target": "crypto_root_p2_t6_s1_d1"
    },
    {
      "source": "crypto_root_p2_t6_s1",
      "target": "crypto_root_p2_t6_s1_d2"
    },
    {
      "source": "crypto_root_p2_t6",
      "target": "crypto_root_p2_t6_s2"
    },
    {
      "source": "crypto_root_p2_t6_s2",
      "target": "crypto_root_p2_t6_s2_d1"
    },
    {
      "source": "crypto_root_p2_t6_s2",
      "target": "crypto_root_p2_t6_s2_d2"
    },
    {
      "source": "crypto_root_p2_t6",
      "target": "crypto_root_p2_t6_s3"
    },
    {
      "source": "crypto_root_p2_t6_s3",
      "target": "crypto_root_p2_t6_s3_d1"
    },
    {
      "source": "crypto_root_p2_t6_s3",
      "target": "crypto_root_p2_t6_s3_d2"
    },
    {
      "source": "crypto_root_p2_t6",
      "target": "crypto_root_p2_t6_s4"
    },
    {
      "source": "crypto_root_p2_t6_s4",
      "target": "crypto_root_p2_t6_s4_d1"
    },
    {
      "source": "crypto_root_p2_t6_s4",
      "target": "crypto_root_p2_t6_s4_d2"
    },
    {
      "source": "crypto_root_p2_t6",
      "target": "crypto_root_p2_t6_s5"
    },
    {
      "source": "crypto_root_p2_t6_s5",
      "target": "crypto_root_p2_t6_s5_d1"
    },
    {
      "source": "crypto_root_p2_t6_s5",
      "target": "crypto_root_p2_t6_s5_d2"
    },
    {
      "source": "crypto_root",
      "target": "crypto_root_p3"
    },
    {
      "source": "crypto_root_p3",
      "target": "crypto_root_p3_t1"
    },
    {
      "source": "crypto_root_p3_t1",
      "target": "crypto_root_p3_t1_s1"
    },
    {
      "source": "crypto_root_p3_t1_s1",
      "target": "crypto_root_p3_t1_s1_d1"
    },
    {
      "source": "crypto_root_p3_t1_s1",
      "target": "crypto_root_p3_t1_s1_d2"
    },
    {
      "source": "crypto_root_p3_t1",
      "target": "crypto_root_p3_t1_s2"
    },
    {
      "source": "crypto_root_p3_t1_s2",
      "target": "crypto_root_p3_t1_s2_d1"
    },
    {
      "source": "crypto_root_p3_t1_s2",
      "target": "crypto_root_p3_t1_s2_d2"
    },
    {
      "source": "crypto_root_p3_t1",
      "target": "crypto_root_p3_t1_s3"
    },
    {
      "source": "crypto_root_p3_t1_s3",
      "target": "crypto_root_p3_t1_s3_d1"
    },
    {
      "source": "crypto_root_p3_t1_s3",
      "target": "crypto_root_p3_t1_s3_d2"
    },
    {
      "source": "crypto_root_p3_t1",
      "target": "crypto_root_p3_t1_s4"
    },
    {
      "source": "crypto_root_p3_t1_s4",
      "target": "crypto_root_p3_t1_s4_d1"
    },
    {
      "source": "crypto_root_p3_t1_s4",
      "target": "crypto_root_p3_t1_s4_d2"
    },
    {
      "source": "crypto_root_p3_t1",
      "target": "crypto_root_p3_t1_s5"
    },
    {
      "source": "crypto_root_p3_t1_s5",
      "target": "crypto_root_p3_t1_s5_d1"
    },
    {
      "source": "crypto_root_p3_t1_s5",
      "target": "crypto_root_p3_t1_s5_d2"
    },
    {
      "source": "crypto_root_p3",
      "target": "crypto_root_p3_t2"
    },
    {
      "source": "crypto_root_p3_t2",
      "target": "crypto_root_p3_t2_s1"
    },
    {
      "source": "crypto_root_p3_t2_s1",
      "target": "crypto_root_p3_t2_s1_d1"
    },
    {
      "source": "crypto_root_p3_t2_s1",
      "target": "crypto_root_p3_t2_s1_d2"
    },
    {
      "source": "crypto_root_p3_t2",
      "target": "crypto_root_p3_t2_s2"
    },
    {
      "source": "crypto_root_p3_t2_s2",
      "target": "crypto_root_p3_t2_s2_d1"
    },
    {
      "source": "crypto_root_p3_t2_s2",
      "target": "crypto_root_p3_t2_s2_d2"
    },
    {
      "source": "crypto_root_p3_t2",
      "target": "crypto_root_p3_t2_s3"
    },
    {
      "source": "crypto_root_p3_t2_s3",
      "target": "crypto_root_p3_t2_s3_d1"
    },
    {
      "source": "crypto_root_p3_t2_s3",
      "target": "crypto_root_p3_t2_s3_d2"
    },
    {
      "source": "crypto_root_p3_t2",
      "target": "crypto_root_p3_t2_s4"
    },
    {
      "source": "crypto_root_p3_t2_s4",
      "target": "crypto_root_p3_t2_s4_d1"
    },
    {
      "source": "crypto_root_p3_t2_s4",
      "target": "crypto_root_p3_t2_s4_d2"
    },
    {
      "source": "crypto_root_p3_t2",
      "target": "crypto_root_p3_t2_s5"
    },
    {
      "source": "crypto_root_p3_t2_s5",
      "target": "crypto_root_p3_t2_s5_d1"
    },
    {
      "source": "crypto_root_p3_t2_s5",
      "target": "crypto_root_p3_t2_s5_d2"
    },
    {
      "source": "crypto_root_p3",
      "target": "crypto_root_p3_t3"
    },
    {
      "source": "crypto_root_p3_t3",
      "target": "crypto_root_p3_t3_s1"
    },
    {
      "source": "crypto_root_p3_t3_s1",
      "target": "crypto_root_p3_t3_s1_d1"
    },
    {
      "source": "crypto_root_p3_t3_s1",
      "target": "crypto_root_p3_t3_s1_d2"
    },
    {
      "source": "crypto_root_p3_t3",
      "target": "crypto_root_p3_t3_s2"
    },
    {
      "source": "crypto_root_p3_t3_s2",
      "target": "crypto_root_p3_t3_s2_d1"
    },
    {
      "source": "crypto_root_p3_t3_s2",
      "target": "crypto_root_p3_t3_s2_d2"
    },
    {
      "source": "crypto_root_p3_t3",
      "target": "crypto_root_p3_t3_s3"
    },
    {
      "source": "crypto_root_p3_t3_s3",
      "target": "crypto_root_p3_t3_s3_d1"
    },
    {
      "source": "crypto_root_p3_t3_s3",
      "target": "crypto_root_p3_t3_s3_d2"
    },
    {
      "source": "crypto_root_p3_t3",
      "target": "crypto_root_p3_t3_s4"
    },
    {
      "source": "crypto_root_p3_t3_s4",
      "target": "crypto_root_p3_t3_s4_d1"
    },
    {
      "source": "crypto_root_p3_t3_s4",
      "target": "crypto_root_p3_t3_s4_d2"
    },
    {
      "source": "crypto_root_p3_t3",
      "target": "crypto_root_p3_t3_s5"
    },
    {
      "source": "crypto_root_p3_t3_s5",
      "target": "crypto_root_p3_t3_s5_d1"
    },
    {
      "source": "crypto_root_p3_t3_s5",
      "target": "crypto_root_p3_t3_s5_d2"
    },
    {
      "source": "crypto_root_p3",
      "target": "crypto_root_p3_t4"
    },
    {
      "source": "crypto_root_p3_t4",
      "target": "crypto_root_p3_t4_s1"
    },
    {
      "source": "crypto_root_p3_t4_s1",
      "target": "crypto_root_p3_t4_s1_d1"
    },
    {
      "source": "crypto_root_p3_t4_s1",
      "target": "crypto_root_p3_t4_s1_d2"
    },
    {
      "source": "crypto_root_p3_t4",
      "target": "crypto_root_p3_t4_s2"
    },
    {
      "source": "crypto_root_p3_t4_s2",
      "target": "crypto_root_p3_t4_s2_d1"
    },
    {
      "source": "crypto_root_p3_t4_s2",
      "target": "crypto_root_p3_t4_s2_d2"
    },
    {
      "source": "crypto_root_p3_t4",
      "target": "crypto_root_p3_t4_s3"
    },
    {
      "source": "crypto_root_p3_t4_s3",
      "target": "crypto_root_p3_t4_s3_d1"
    },
    {
      "source": "crypto_root_p3_t4_s3",
      "target": "crypto_root_p3_t4_s3_d2"
    },
    {
      "source": "crypto_root_p3_t4",
      "target": "crypto_root_p3_t4_s4"
    },
    {
      "source": "crypto_root_p3_t4_s4",
      "target": "crypto_root_p3_t4_s4_d1"
    },
    {
      "source": "crypto_root_p3_t4_s4",
      "target": "crypto_root_p3_t4_s4_d2"
    },
    {
      "source": "crypto_root_p3_t4",
      "target": "crypto_root_p3_t4_s5"
    },
    {
      "source": "crypto_root_p3_t4_s5",
      "target": "crypto_root_p3_t4_s5_d1"
    },
    {
      "source": "crypto_root_p3_t4_s5",
      "target": "crypto_root_p3_t4_s5_d2"
    },
    {
      "source": "crypto_root_p3",
      "target": "crypto_root_p3_t5"
    },
    {
      "source": "crypto_root_p3_t5",
      "target": "crypto_root_p3_t5_s1"
    },
    {
      "source": "crypto_root_p3_t5_s1",
      "target": "crypto_root_p3_t5_s1_d1"
    },
    {
      "source": "crypto_root_p3_t5_s1",
      "target": "crypto_root_p3_t5_s1_d2"
    },
    {
      "source": "crypto_root_p3_t5",
      "target": "crypto_root_p3_t5_s2"
    },
    {
      "source": "crypto_root_p3_t5_s2",
      "target": "crypto_root_p3_t5_s2_d1"
    },
    {
      "source": "crypto_root_p3_t5_s2",
      "target": "crypto_root_p3_t5_s2_d2"
    },
    {
      "source": "crypto_root_p3_t5",
      "target": "crypto_root_p3_t5_s3"
    },
    {
      "source": "crypto_root_p3_t5_s3",
      "target": "crypto_root_p3_t5_s3_d1"
    },
    {
      "source": "crypto_root_p3_t5_s3",
      "target": "crypto_root_p3_t5_s3_d2"
    },
    {
      "source": "crypto_root_p3_t5",
      "target": "crypto_root_p3_t5_s4"
    },
    {
      "source": "crypto_root_p3_t5_s4",
      "target": "crypto_root_p3_t5_s4_d1"
    },
    {
      "source": "crypto_root_p3_t5_s4",
      "target": "crypto_root_p3_t5_s4_d2"
    },
    {
      "source": "crypto_root_p3_t5",
      "target": "crypto_root_p3_t5_s5"
    },
    {
      "source": "crypto_root_p3_t5_s5",
      "target": "crypto_root_p3_t5_s5_d1"
    },
    {
      "source": "crypto_root_p3_t5_s5",
      "target": "crypto_root_p3_t5_s5_d2"
    },
    {
      "source": "crypto_root_p3",
      "target": "crypto_root_p3_t6"
    },
    {
      "source": "crypto_root_p3_t6",
      "target": "crypto_root_p3_t6_s1"
    },
    {
      "source": "crypto_root_p3_t6_s1",
      "target": "crypto_root_p3_t6_s1_d1"
    },
    {
      "source": "crypto_root_p3_t6_s1",
      "target": "crypto_root_p3_t6_s1_d2"
    },
    {
      "source": "crypto_root_p3_t6",
      "target": "crypto_root_p3_t6_s2"
    },
    {
      "source": "crypto_root_p3_t6_s2",
      "target": "crypto_root_p3_t6_s2_d1"
    },
    {
      "source": "crypto_root_p3_t6_s2",
      "target": "crypto_root_p3_t6_s2_d2"
    },
    {
      "source": "crypto_root_p3_t6",
      "target": "crypto_root_p3_t6_s3"
    },
    {
      "source": "crypto_root_p3_t6_s3",
      "target": "crypto_root_p3_t6_s3_d1"
    },
    {
      "source": "crypto_root_p3_t6_s3",
      "target": "crypto_root_p3_t6_s3_d2"
    },
    {
      "source": "crypto_root_p3_t6",
      "target": "crypto_root_p3_t6_s4"
    },
    {
      "source": "crypto_root_p3_t6_s4",
      "target": "crypto_root_p3_t6_s4_d1"
    },
    {
      "source": "crypto_root_p3_t6_s4",
      "target": "crypto_root_p3_t6_s4_d2"
    },
    {
      "source": "crypto_root_p3_t6",
      "target": "crypto_root_p3_t6_s5"
    },
    {
      "source": "crypto_root_p3_t6_s5",
      "target": "crypto_root_p3_t6_s5_d1"
    },
    {
      "source": "crypto_root_p3_t6_s5",
      "target": "crypto_root_p3_t6_s5_d2"
    },
    {
      "source": "crypto_root",
      "target": "crypto_root_p4"
    },
    {
      "source": "crypto_root_p4",
      "target": "crypto_root_p4_t1"
    },
    {
      "source": "crypto_root_p4_t1",
      "target": "crypto_root_p4_t1_s1"
    },
    {
      "source": "crypto_root_p4_t1_s1",
      "target": "crypto_root_p4_t1_s1_d1"
    },
    {
      "source": "crypto_root_p4_t1_s1",
      "target": "crypto_root_p4_t1_s1_d2"
    },
    {
      "source": "crypto_root_p4_t1",
      "target": "crypto_root_p4_t1_s2"
    },
    {
      "source": "crypto_root_p4_t1_s2",
      "target": "crypto_root_p4_t1_s2_d1"
    },
    {
      "source": "crypto_root_p4_t1_s2",
      "target": "crypto_root_p4_t1_s2_d2"
    },
    {
      "source": "crypto_root_p4_t1",
      "target": "crypto_root_p4_t1_s3"
    },
    {
      "source": "crypto_root_p4_t1_s3",
      "target": "crypto_root_p4_t1_s3_d1"
    },
    {
      "source": "crypto_root_p4_t1_s3",
      "target": "crypto_root_p4_t1_s3_d2"
    },
    {
      "source": "crypto_root_p4_t1",
      "target": "crypto_root_p4_t1_s4"
    },
    {
      "source": "crypto_root_p4_t1_s4",
      "target": "crypto_root_p4_t1_s4_d1"
    },
    {
      "source": "crypto_root_p4_t1_s4",
      "target": "crypto_root_p4_t1_s4_d2"
    },
    {
      "source": "crypto_root_p4_t1",
      "target": "crypto_root_p4_t1_s5"
    },
    {
      "source": "crypto_root_p4_t1_s5",
      "target": "crypto_root_p4_t1_s5_d1"
    },
    {
      "source": "crypto_root_p4_t1_s5",
      "target": "crypto_root_p4_t1_s5_d2"
    },
    {
      "source": "crypto_root_p4",
      "target": "crypto_root_p4_t2"
    },
    {
      "source": "crypto_root_p4_t2",
      "target": "crypto_root_p4_t2_s1"
    },
    {
      "source": "crypto_root_p4_t2_s1",
      "target": "crypto_root_p4_t2_s1_d1"
    },
    {
      "source": "crypto_root_p4_t2_s1",
      "target": "crypto_root_p4_t2_s1_d2"
    },
    {
      "source": "crypto_root_p4_t2",
      "target": "crypto_root_p4_t2_s2"
    },
    {
      "source": "crypto_root_p4_t2_s2",
      "target": "crypto_root_p4_t2_s2_d1"
    },
    {
      "source": "crypto_root_p4_t2_s2",
      "target": "crypto_root_p4_t2_s2_d2"
    },
    {
      "source": "crypto_root_p4_t2",
      "target": "crypto_root_p4_t2_s3"
    },
    {
      "source": "crypto_root_p4_t2_s3",
      "target": "crypto_root_p4_t2_s3_d1"
    },
    {
      "source": "crypto_root_p4_t2_s3",
      "target": "crypto_root_p4_t2_s3_d2"
    },
    {
      "source": "crypto_root_p4_t2",
      "target": "crypto_root_p4_t2_s4"
    },
    {
      "source": "crypto_root_p4_t2_s4",
      "target": "crypto_root_p4_t2_s4_d1"
    },
    {
      "source": "crypto_root_p4_t2_s4",
      "target": "crypto_root_p4_t2_s4_d2"
    },
    {
      "source": "crypto_root_p4_t2",
      "target": "crypto_root_p4_t2_s5"
    },
    {
      "source": "crypto_root_p4_t2_s5",
      "target": "crypto_root_p4_t2_s5_d1"
    },
    {
      "source": "crypto_root_p4_t2_s5",
      "target": "crypto_root_p4_t2_s5_d2"
    },
    {
      "source": "crypto_root_p4",
      "target": "crypto_root_p4_t3"
    },
    {
      "source": "crypto_root_p4_t3",
      "target": "crypto_root_p4_t3_s1"
    },
    {
      "source": "crypto_root_p4_t3_s1",
      "target": "crypto_root_p4_t3_s1_d1"
    },
    {
      "source": "crypto_root_p4_t3_s1",
      "target": "crypto_root_p4_t3_s1_d2"
    },
    {
      "source": "crypto_root_p4_t3",
      "target": "crypto_root_p4_t3_s2"
    },
    {
      "source": "crypto_root_p4_t3_s2",
      "target": "crypto_root_p4_t3_s2_d1"
    },
    {
      "source": "crypto_root_p4_t3_s2",
      "target": "crypto_root_p4_t3_s2_d2"
    },
    {
      "source": "crypto_root_p4_t3",
      "target": "crypto_root_p4_t3_s3"
    },
    {
      "source": "crypto_root_p4_t3_s3",
      "target": "crypto_root_p4_t3_s3_d1"
    },
    {
      "source": "crypto_root_p4_t3_s3",
      "target": "crypto_root_p4_t3_s3_d2"
    },
    {
      "source": "crypto_root_p4_t3",
      "target": "crypto_root_p4_t3_s4"
    },
    {
      "source": "crypto_root_p4_t3_s4",
      "target": "crypto_root_p4_t3_s4_d1"
    },
    {
      "source": "crypto_root_p4_t3_s4",
      "target": "crypto_root_p4_t3_s4_d2"
    },
    {
      "source": "crypto_root_p4_t3",
      "target": "crypto_root_p4_t3_s5"
    },
    {
      "source": "crypto_root_p4_t3_s5",
      "target": "crypto_root_p4_t3_s5_d1"
    },
    {
      "source": "crypto_root_p4_t3_s5",
      "target": "crypto_root_p4_t3_s5_d2"
    },
    {
      "source": "crypto_root_p4",
      "target": "crypto_root_p4_t4"
    },
    {
      "source": "crypto_root_p4_t4",
      "target": "crypto_root_p4_t4_s1"
    },
    {
      "source": "crypto_root_p4_t4_s1",
      "target": "crypto_root_p4_t4_s1_d1"
    },
    {
      "source": "crypto_root_p4_t4_s1",
      "target": "crypto_root_p4_t4_s1_d2"
    },
    {
      "source": "crypto_root_p4_t4",
      "target": "crypto_root_p4_t4_s2"
    },
    {
      "source": "crypto_root_p4_t4_s2",
      "target": "crypto_root_p4_t4_s2_d1"
    },
    {
      "source": "crypto_root_p4_t4_s2",
      "target": "crypto_root_p4_t4_s2_d2"
    },
    {
      "source": "crypto_root_p4_t4",
      "target": "crypto_root_p4_t4_s3"
    },
    {
      "source": "crypto_root_p4_t4_s3",
      "target": "crypto_root_p4_t4_s3_d1"
    },
    {
      "source": "crypto_root_p4_t4_s3",
      "target": "crypto_root_p4_t4_s3_d2"
    },
    {
      "source": "crypto_root_p4_t4",
      "target": "crypto_root_p4_t4_s4"
    },
    {
      "source": "crypto_root_p4_t4_s4",
      "target": "crypto_root_p4_t4_s4_d1"
    },
    {
      "source": "crypto_root_p4_t4_s4",
      "target": "crypto_root_p4_t4_s4_d2"
    },
    {
      "source": "crypto_root_p4_t4",
      "target": "crypto_root_p4_t4_s5"
    },
    {
      "source": "crypto_root_p4_t4_s5",
      "target": "crypto_root_p4_t4_s5_d1"
    },
    {
      "source": "crypto_root_p4_t4_s5",
      "target": "crypto_root_p4_t4_s5_d2"
    },
    {
      "source": "crypto_root_p4",
      "target": "crypto_root_p4_t5"
    },
    {
      "source": "crypto_root_p4_t5",
      "target": "crypto_root_p4_t5_s1"
    },
    {
      "source": "crypto_root_p4_t5_s1",
      "target": "crypto_root_p4_t5_s1_d1"
    },
    {
      "source": "crypto_root_p4_t5_s1",
      "target": "crypto_root_p4_t5_s1_d2"
    },
    {
      "source": "crypto_root_p4_t5",
      "target": "crypto_root_p4_t5_s2"
    },
    {
      "source": "crypto_root_p4_t5_s2",
      "target": "crypto_root_p4_t5_s2_d1"
    },
    {
      "source": "crypto_root_p4_t5_s2",
      "target": "crypto_root_p4_t5_s2_d2"
    },
    {
      "source": "crypto_root_p4_t5",
      "target": "crypto_root_p4_t5_s3"
    },
    {
      "source": "crypto_root_p4_t5_s3",
      "target": "crypto_root_p4_t5_s3_d1"
    },
    {
      "source": "crypto_root_p4_t5_s3",
      "target": "crypto_root_p4_t5_s3_d2"
    },
    {
      "source": "crypto_root_p4_t5",
      "target": "crypto_root_p4_t5_s4"
    },
    {
      "source": "crypto_root_p4_t5_s4",
      "target": "crypto_root_p4_t5_s4_d1"
    },
    {
      "source": "crypto_root_p4_t5_s4",
      "target": "crypto_root_p4_t5_s4_d2"
    },
    {
      "source": "crypto_root_p4_t5",
      "target": "crypto_root_p4_t5_s5"
    },
    {
      "source": "crypto_root_p4_t5_s5",
      "target": "crypto_root_p4_t5_s5_d1"
    },
    {
      "source": "crypto_root_p4_t5_s5",
      "target": "crypto_root_p4_t5_s5_d2"
    },
    {
      "source": "crypto_root_p4",
      "target": "crypto_root_p4_t6"
    },
    {
      "source": "crypto_root_p4_t6",
      "target": "crypto_root_p4_t6_s1"
    },
    {
      "source": "crypto_root_p4_t6_s1",
      "target": "crypto_root_p4_t6_s1_d1"
    },
    {
      "source": "crypto_root_p4_t6_s1",
      "target": "crypto_root_p4_t6_s1_d2"
    },
    {
      "source": "crypto_root_p4_t6",
      "target": "crypto_root_p4_t6_s2"
    },
    {
      "source": "crypto_root_p4_t6_s2",
      "target": "crypto_root_p4_t6_s2_d1"
    },
    {
      "source": "crypto_root_p4_t6_s2",
      "target": "crypto_root_p4_t6_s2_d2"
    },
    {
      "source": "crypto_root_p4_t6",
      "target": "crypto_root_p4_t6_s3"
    },
    {
      "source": "crypto_root_p4_t6_s3",
      "target": "crypto_root_p4_t6_s3_d1"
    },
    {
      "source": "crypto_root_p4_t6_s3",
      "target": "crypto_root_p4_t6_s3_d2"
    },
    {
      "source": "crypto_root_p4_t6",
      "target": "crypto_root_p4_t6_s4"
    },
    {
      "source": "crypto_root_p4_t6_s4",
      "target": "crypto_root_p4_t6_s4_d1"
    },
    {
      "source": "crypto_root_p4_t6_s4",
      "target": "crypto_root_p4_t6_s4_d2"
    },
    {
      "source": "crypto_root_p4_t6",
      "target": "crypto_root_p4_t6_s5"
    },
    {
      "source": "crypto_root_p4_t6_s5",
      "target": "crypto_root_p4_t6_s5_d1"
    },
    {
      "source": "crypto_root_p4_t6_s5",
      "target": "crypto_root_p4_t6_s5_d2"
    },
    {
      "source": "crypto_root",
      "target": "crypto_root_p5"
    },
    {
      "source": "crypto_root_p5",
      "target": "crypto_root_p5_t1"
    },
    {
      "source": "crypto_root_p5_t1",
      "target": "crypto_root_p5_t1_s1"
    },
    {
      "source": "crypto_root_p5_t1_s1",
      "target": "crypto_root_p5_t1_s1_d1"
    },
    {
      "source": "crypto_root_p5_t1_s1",
      "target": "crypto_root_p5_t1_s1_d2"
    },
    {
      "source": "crypto_root_p5_t1",
      "target": "crypto_root_p5_t1_s2"
    },
    {
      "source": "crypto_root_p5_t1_s2",
      "target": "crypto_root_p5_t1_s2_d1"
    },
    {
      "source": "crypto_root_p5_t1_s2",
      "target": "crypto_root_p5_t1_s2_d2"
    },
    {
      "source": "crypto_root_p5_t1",
      "target": "crypto_root_p5_t1_s3"
    },
    {
      "source": "crypto_root_p5_t1_s3",
      "target": "crypto_root_p5_t1_s3_d1"
    },
    {
      "source": "crypto_root_p5_t1_s3",
      "target": "crypto_root_p5_t1_s3_d2"
    },
    {
      "source": "crypto_root_p5_t1",
      "target": "crypto_root_p5_t1_s4"
    },
    {
      "source": "crypto_root_p5_t1_s4",
      "target": "crypto_root_p5_t1_s4_d1"
    },
    {
      "source": "crypto_root_p5_t1_s4",
      "target": "crypto_root_p5_t1_s4_d2"
    },
    {
      "source": "crypto_root_p5_t1",
      "target": "crypto_root_p5_t1_s5"
    },
    {
      "source": "crypto_root_p5_t1_s5",
      "target": "crypto_root_p5_t1_s5_d1"
    },
    {
      "source": "crypto_root_p5_t1_s5",
      "target": "crypto_root_p5_t1_s5_d2"
    },
    {
      "source": "crypto_root_p5",
      "target": "crypto_root_p5_t2"
    },
    {
      "source": "crypto_root_p5_t2",
      "target": "crypto_root_p5_t2_s1"
    },
    {
      "source": "crypto_root_p5_t2_s1",
      "target": "crypto_root_p5_t2_s1_d1"
    },
    {
      "source": "crypto_root_p5_t2_s1",
      "target": "crypto_root_p5_t2_s1_d2"
    },
    {
      "source": "crypto_root_p5_t2",
      "target": "crypto_root_p5_t2_s2"
    },
    {
      "source": "crypto_root_p5_t2_s2",
      "target": "crypto_root_p5_t2_s2_d1"
    },
    {
      "source": "crypto_root_p5_t2_s2",
      "target": "crypto_root_p5_t2_s2_d2"
    },
    {
      "source": "crypto_root_p5_t2",
      "target": "crypto_root_p5_t2_s3"
    },
    {
      "source": "crypto_root_p5_t2_s3",
      "target": "crypto_root_p5_t2_s3_d1"
    },
    {
      "source": "crypto_root_p5_t2_s3",
      "target": "crypto_root_p5_t2_s3_d2"
    },
    {
      "source": "crypto_root_p5_t2",
      "target": "crypto_root_p5_t2_s4"
    },
    {
      "source": "crypto_root_p5_t2_s4",
      "target": "crypto_root_p5_t2_s4_d1"
    },
    {
      "source": "crypto_root_p5_t2_s4",
      "target": "crypto_root_p5_t2_s4_d2"
    },
    {
      "source": "crypto_root_p5_t2",
      "target": "crypto_root_p5_t2_s5"
    },
    {
      "source": "crypto_root_p5_t2_s5",
      "target": "crypto_root_p5_t2_s5_d1"
    },
    {
      "source": "crypto_root_p5_t2_s5",
      "target": "crypto_root_p5_t2_s5_d2"
    },
    {
      "source": "crypto_root_p5",
      "target": "crypto_root_p5_t3"
    },
    {
      "source": "crypto_root_p5_t3",
      "target": "crypto_root_p5_t3_s1"
    },
    {
      "source": "crypto_root_p5_t3_s1",
      "target": "crypto_root_p5_t3_s1_d1"
    },
    {
      "source": "crypto_root_p5_t3_s1",
      "target": "crypto_root_p5_t3_s1_d2"
    },
    {
      "source": "crypto_root_p5_t3",
      "target": "crypto_root_p5_t3_s2"
    },
    {
      "source": "crypto_root_p5_t3_s2",
      "target": "crypto_root_p5_t3_s2_d1"
    },
    {
      "source": "crypto_root_p5_t3_s2",
      "target": "crypto_root_p5_t3_s2_d2"
    },
    {
      "source": "crypto_root_p5_t3",
      "target": "crypto_root_p5_t3_s3"
    },
    {
      "source": "crypto_root_p5_t3_s3",
      "target": "crypto_root_p5_t3_s3_d1"
    },
    {
      "source": "crypto_root_p5_t3_s3",
      "target": "crypto_root_p5_t3_s3_d2"
    },
    {
      "source": "crypto_root_p5_t3",
      "target": "crypto_root_p5_t3_s4"
    },
    {
      "source": "crypto_root_p5_t3_s4",
      "target": "crypto_root_p5_t3_s4_d1"
    },
    {
      "source": "crypto_root_p5_t3_s4",
      "target": "crypto_root_p5_t3_s4_d2"
    },
    {
      "source": "crypto_root_p5_t3",
      "target": "crypto_root_p5_t3_s5"
    },
    {
      "source": "crypto_root_p5_t3_s5",
      "target": "crypto_root_p5_t3_s5_d1"
    },
    {
      "source": "crypto_root_p5_t3_s5",
      "target": "crypto_root_p5_t3_s5_d2"
    },
    {
      "source": "crypto_root_p5",
      "target": "crypto_root_p5_t4"
    },
    {
      "source": "crypto_root_p5_t4",
      "target": "crypto_root_p5_t4_s1"
    },
    {
      "source": "crypto_root_p5_t4_s1",
      "target": "crypto_root_p5_t4_s1_d1"
    },
    {
      "source": "crypto_root_p5_t4_s1",
      "target": "crypto_root_p5_t4_s1_d2"
    },
    {
      "source": "crypto_root_p5_t4",
      "target": "crypto_root_p5_t4_s2"
    },
    {
      "source": "crypto_root_p5_t4_s2",
      "target": "crypto_root_p5_t4_s2_d1"
    },
    {
      "source": "crypto_root_p5_t4_s2",
      "target": "crypto_root_p5_t4_s2_d2"
    },
    {
      "source": "crypto_root_p5_t4",
      "target": "crypto_root_p5_t4_s3"
    },
    {
      "source": "crypto_root_p5_t4_s3",
      "target": "crypto_root_p5_t4_s3_d1"
    },
    {
      "source": "crypto_root_p5_t4_s3",
      "target": "crypto_root_p5_t4_s3_d2"
    },
    {
      "source": "crypto_root_p5_t4",
      "target": "crypto_root_p5_t4_s4"
    },
    {
      "source": "crypto_root_p5_t4_s4",
      "target": "crypto_root_p5_t4_s4_d1"
    },
    {
      "source": "crypto_root_p5_t4_s4",
      "target": "crypto_root_p5_t4_s4_d2"
    },
    {
      "source": "crypto_root_p5_t4",
      "target": "crypto_root_p5_t4_s5"
    },
    {
      "source": "crypto_root_p5_t4_s5",
      "target": "crypto_root_p5_t4_s5_d1"
    },
    {
      "source": "crypto_root_p5_t4_s5",
      "target": "crypto_root_p5_t4_s5_d2"
    },
    {
      "source": "crypto_root_p5",
      "target": "crypto_root_p5_t5"
    },
    {
      "source": "crypto_root_p5_t5",
      "target": "crypto_root_p5_t5_s1"
    },
    {
      "source": "crypto_root_p5_t5_s1",
      "target": "crypto_root_p5_t5_s1_d1"
    },
    {
      "source": "crypto_root_p5_t5_s1",
      "target": "crypto_root_p5_t5_s1_d2"
    },
    {
      "source": "crypto_root_p5_t5",
      "target": "crypto_root_p5_t5_s2"
    },
    {
      "source": "crypto_root_p5_t5_s2",
      "target": "crypto_root_p5_t5_s2_d1"
    },
    {
      "source": "crypto_root_p5_t5_s2",
      "target": "crypto_root_p5_t5_s2_d2"
    },
    {
      "source": "crypto_root_p5_t5",
      "target": "crypto_root_p5_t5_s3"
    },
    {
      "source": "crypto_root_p5_t5_s3",
      "target": "crypto_root_p5_t5_s3_d1"
    },
    {
      "source": "crypto_root_p5_t5_s3",
      "target": "crypto_root_p5_t5_s3_d2"
    },
    {
      "source": "crypto_root_p5_t5",
      "target": "crypto_root_p5_t5_s4"
    },
    {
      "source": "crypto_root_p5_t5_s4",
      "target": "crypto_root_p5_t5_s4_d1"
    },
    {
      "source": "crypto_root_p5_t5_s4",
      "target": "crypto_root_p5_t5_s4_d2"
    },
    {
      "source": "crypto_root_p5_t5",
      "target": "crypto_root_p5_t5_s5"
    },
    {
      "source": "crypto_root_p5_t5_s5",
      "target": "crypto_root_p5_t5_s5_d1"
    },
    {
      "source": "crypto_root_p5_t5_s5",
      "target": "crypto_root_p5_t5_s5_d2"
    },
    {
      "source": "crypto_root_p5",
      "target": "crypto_root_p5_t6"
    },
    {
      "source": "crypto_root_p5_t6",
      "target": "crypto_root_p5_t6_s1"
    },
    {
      "source": "crypto_root_p5_t6_s1",
      "target": "crypto_root_p5_t6_s1_d1"
    },
    {
      "source": "crypto_root_p5_t6_s1",
      "target": "crypto_root_p5_t6_s1_d2"
    },
    {
      "source": "crypto_root_p5_t6",
      "target": "crypto_root_p5_t6_s2"
    },
    {
      "source": "crypto_root_p5_t6_s2",
      "target": "crypto_root_p5_t6_s2_d1"
    },
    {
      "source": "crypto_root_p5_t6_s2",
      "target": "crypto_root_p5_t6_s2_d2"
    },
    {
      "source": "crypto_root_p5_t6",
      "target": "crypto_root_p5_t6_s3"
    },
    {
      "source": "crypto_root_p5_t6_s3",
      "target": "crypto_root_p5_t6_s3_d1"
    },
    {
      "source": "crypto_root_p5_t6_s3",
      "target": "crypto_root_p5_t6_s3_d2"
    },
    {
      "source": "crypto_root_p5_t6",
      "target": "crypto_root_p5_t6_s4"
    },
    {
      "source": "crypto_root_p5_t6_s4",
      "target": "crypto_root_p5_t6_s4_d1"
    },
    {
      "source": "crypto_root_p5_t6_s4",
      "target": "crypto_root_p5_t6_s4_d2"
    },
    {
      "source": "crypto_root_p5_t6",
      "target": "crypto_root_p5_t6_s5"
    },
    {
      "source": "crypto_root_p5_t6_s5",
      "target": "crypto_root_p5_t6_s5_d1"
    },
    {
      "source": "crypto_root_p5_t6_s5",
      "target": "crypto_root_p5_t6_s5_d2"
    },
    {
      "source": "crypto_root",
      "target": "crypto_root_p6"
    },
    {
      "source": "crypto_root_p6",
      "target": "crypto_root_p6_t1"
    },
    {
      "source": "crypto_root_p6_t1",
      "target": "crypto_root_p6_t1_s1"
    },
    {
      "source": "crypto_root_p6_t1_s1",
      "target": "crypto_root_p6_t1_s1_d1"
    },
    {
      "source": "crypto_root_p6_t1_s1",
      "target": "crypto_root_p6_t1_s1_d2"
    },
    {
      "source": "crypto_root_p6_t1",
      "target": "crypto_root_p6_t1_s2"
    },
    {
      "source": "crypto_root_p6_t1_s2",
      "target": "crypto_root_p6_t1_s2_d1"
    },
    {
      "source": "crypto_root_p6_t1_s2",
      "target": "crypto_root_p6_t1_s2_d2"
    },
    {
      "source": "crypto_root_p6_t1",
      "target": "crypto_root_p6_t1_s3"
    },
    {
      "source": "crypto_root_p6_t1_s3",
      "target": "crypto_root_p6_t1_s3_d1"
    },
    {
      "source": "crypto_root_p6_t1_s3",
      "target": "crypto_root_p6_t1_s3_d2"
    },
    {
      "source": "crypto_root_p6_t1",
      "target": "crypto_root_p6_t1_s4"
    },
    {
      "source": "crypto_root_p6_t1_s4",
      "target": "crypto_root_p6_t1_s4_d1"
    },
    {
      "source": "crypto_root_p6_t1_s4",
      "target": "crypto_root_p6_t1_s4_d2"
    },
    {
      "source": "crypto_root_p6_t1",
      "target": "crypto_root_p6_t1_s5"
    },
    {
      "source": "crypto_root_p6_t1_s5",
      "target": "crypto_root_p6_t1_s5_d1"
    },
    {
      "source": "crypto_root_p6_t1_s5",
      "target": "crypto_root_p6_t1_s5_d2"
    },
    {
      "source": "crypto_root_p6",
      "target": "crypto_root_p6_t2"
    },
    {
      "source": "crypto_root_p6_t2",
      "target": "crypto_root_p6_t2_s1"
    },
    {
      "source": "crypto_root_p6_t2_s1",
      "target": "crypto_root_p6_t2_s1_d1"
    },
    {
      "source": "crypto_root_p6_t2_s1",
      "target": "crypto_root_p6_t2_s1_d2"
    },
    {
      "source": "crypto_root_p6_t2",
      "target": "crypto_root_p6_t2_s2"
    },
    {
      "source": "crypto_root_p6_t2_s2",
      "target": "crypto_root_p6_t2_s2_d1"
    },
    {
      "source": "crypto_root_p6_t2_s2",
      "target": "crypto_root_p6_t2_s2_d2"
    },
    {
      "source": "crypto_root_p6_t2",
      "target": "crypto_root_p6_t2_s3"
    },
    {
      "source": "crypto_root_p6_t2_s3",
      "target": "crypto_root_p6_t2_s3_d1"
    },
    {
      "source": "crypto_root_p6_t2_s3",
      "target": "crypto_root_p6_t2_s3_d2"
    },
    {
      "source": "crypto_root_p6_t2",
      "target": "crypto_root_p6_t2_s4"
    },
    {
      "source": "crypto_root_p6_t2_s4",
      "target": "crypto_root_p6_t2_s4_d1"
    },
    {
      "source": "crypto_root_p6_t2_s4",
      "target": "crypto_root_p6_t2_s4_d2"
    },
    {
      "source": "crypto_root_p6_t2",
      "target": "crypto_root_p6_t2_s5"
    },
    {
      "source": "crypto_root_p6_t2_s5",
      "target": "crypto_root_p6_t2_s5_d1"
    },
    {
      "source": "crypto_root_p6_t2_s5",
      "target": "crypto_root_p6_t2_s5_d2"
    },
    {
      "source": "crypto_root_p6",
      "target": "crypto_root_p6_t3"
    },
    {
      "source": "crypto_root_p6_t3",
      "target": "crypto_root_p6_t3_s1"
    },
    {
      "source": "crypto_root_p6_t3_s1",
      "target": "crypto_root_p6_t3_s1_d1"
    },
    {
      "source": "crypto_root_p6_t3_s1",
      "target": "crypto_root_p6_t3_s1_d2"
    },
    {
      "source": "crypto_root_p6_t3",
      "target": "crypto_root_p6_t3_s2"
    },
    {
      "source": "crypto_root_p6_t3_s2",
      "target": "crypto_root_p6_t3_s2_d1"
    },
    {
      "source": "crypto_root_p6_t3_s2",
      "target": "crypto_root_p6_t3_s2_d2"
    },
    {
      "source": "crypto_root_p6_t3",
      "target": "crypto_root_p6_t3_s3"
    },
    {
      "source": "crypto_root_p6_t3_s3",
      "target": "crypto_root_p6_t3_s3_d1"
    },
    {
      "source": "crypto_root_p6_t3_s3",
      "target": "crypto_root_p6_t3_s3_d2"
    },
    {
      "source": "crypto_root_p6_t3",
      "target": "crypto_root_p6_t3_s4"
    },
    {
      "source": "crypto_root_p6_t3_s4",
      "target": "crypto_root_p6_t3_s4_d1"
    },
    {
      "source": "crypto_root_p6_t3_s4",
      "target": "crypto_root_p6_t3_s4_d2"
    },
    {
      "source": "crypto_root_p6_t3",
      "target": "crypto_root_p6_t3_s5"
    },
    {
      "source": "crypto_root_p6_t3_s5",
      "target": "crypto_root_p6_t3_s5_d1"
    },
    {
      "source": "crypto_root_p6_t3_s5",
      "target": "crypto_root_p6_t3_s5_d2"
    },
    {
      "source": "crypto_root_p6",
      "target": "crypto_root_p6_t4"
    },
    {
      "source": "crypto_root_p6_t4",
      "target": "crypto_root_p6_t4_s1"
    },
    {
      "source": "crypto_root_p6_t4_s1",
      "target": "crypto_root_p6_t4_s1_d1"
    },
    {
      "source": "crypto_root_p6_t4_s1",
      "target": "crypto_root_p6_t4_s1_d2"
    },
    {
      "source": "crypto_root_p6_t4",
      "target": "crypto_root_p6_t4_s2"
    },
    {
      "source": "crypto_root_p6_t4_s2",
      "target": "crypto_root_p6_t4_s2_d1"
    },
    {
      "source": "crypto_root_p6_t4_s2",
      "target": "crypto_root_p6_t4_s2_d2"
    },
    {
      "source": "crypto_root_p6_t4",
      "target": "crypto_root_p6_t4_s3"
    },
    {
      "source": "crypto_root_p6_t4_s3",
      "target": "crypto_root_p6_t4_s3_d1"
    },
    {
      "source": "crypto_root_p6_t4_s3",
      "target": "crypto_root_p6_t4_s3_d2"
    },
    {
      "source": "crypto_root_p6_t4",
      "target": "crypto_root_p6_t4_s4"
    },
    {
      "source": "crypto_root_p6_t4_s4",
      "target": "crypto_root_p6_t4_s4_d1"
    },
    {
      "source": "crypto_root_p6_t4_s4",
      "target": "crypto_root_p6_t4_s4_d2"
    },
    {
      "source": "crypto_root_p6_t4",
      "target": "crypto_root_p6_t4_s5"
    },
    {
      "source": "crypto_root_p6_t4_s5",
      "target": "crypto_root_p6_t4_s5_d1"
    },
    {
      "source": "crypto_root_p6_t4_s5",
      "target": "crypto_root_p6_t4_s5_d2"
    },
    {
      "source": "crypto_root_p6",
      "target": "crypto_root_p6_t5"
    },
    {
      "source": "crypto_root_p6_t5",
      "target": "crypto_root_p6_t5_s1"
    },
    {
      "source": "crypto_root_p6_t5_s1",
      "target": "crypto_root_p6_t5_s1_d1"
    },
    {
      "source": "crypto_root_p6_t5_s1",
      "target": "crypto_root_p6_t5_s1_d2"
    },
    {
      "source": "crypto_root_p6_t5",
      "target": "crypto_root_p6_t5_s2"
    },
    {
      "source": "crypto_root_p6_t5_s2",
      "target": "crypto_root_p6_t5_s2_d1"
    },
    {
      "source": "crypto_root_p6_t5_s2",
      "target": "crypto_root_p6_t5_s2_d2"
    },
    {
      "source": "crypto_root_p6_t5",
      "target": "crypto_root_p6_t5_s3"
    },
    {
      "source": "crypto_root_p6_t5_s3",
      "target": "crypto_root_p6_t5_s3_d1"
    },
    {
      "source": "crypto_root_p6_t5_s3",
      "target": "crypto_root_p6_t5_s3_d2"
    },
    {
      "source": "crypto_root_p6_t5",
      "target": "crypto_root_p6_t5_s4"
    },
    {
      "source": "crypto_root_p6_t5_s4",
      "target": "crypto_root_p6_t5_s4_d1"
    },
    {
      "source": "crypto_root_p6_t5_s4",
      "target": "crypto_root_p6_t5_s4_d2"
    },
    {
      "source": "crypto_root_p6_t5",
      "target": "crypto_root_p6_t5_s5"
    },
    {
      "source": "crypto_root_p6_t5_s5",
      "target": "crypto_root_p6_t5_s5_d1"
    },
    {
      "source": "crypto_root_p6_t5_s5",
      "target": "crypto_root_p6_t5_s5_d2"
    },
    {
      "source": "crypto_root_p6",
      "target": "crypto_root_p6_t6"
    },
    {
      "source": "crypto_root_p6_t6",
      "target": "crypto_root_p6_t6_s1"
    },
    {
      "source": "crypto_root_p6_t6_s1",
      "target": "crypto_root_p6_t6_s1_d1"
    },
    {
      "source": "crypto_root_p6_t6_s1",
      "target": "crypto_root_p6_t6_s1_d2"
    },
    {
      "source": "crypto_root_p6_t6",
      "target": "crypto_root_p6_t6_s2"
    },
    {
      "source": "crypto_root_p6_t6_s2",
      "target": "crypto_root_p6_t6_s2_d1"
    },
    {
      "source": "crypto_root_p6_t6_s2",
      "target": "crypto_root_p6_t6_s2_d2"
    },
    {
      "source": "crypto_root_p6_t6",
      "target": "crypto_root_p6_t6_s3"
    },
    {
      "source": "crypto_root_p6_t6_s3",
      "target": "crypto_root_p6_t6_s3_d1"
    },
    {
      "source": "crypto_root_p6_t6_s3",
      "target": "crypto_root_p6_t6_s3_d2"
    },
    {
      "source": "crypto_root_p6_t6",
      "target": "crypto_root_p6_t6_s4"
    },
    {
      "source": "crypto_root_p6_t6_s4",
      "target": "crypto_root_p6_t6_s4_d1"
    },
    {
      "source": "crypto_root_p6_t6_s4",
      "target": "crypto_root_p6_t6_s4_d2"
    },
    {
      "source": "crypto_root_p6_t6",
      "target": "crypto_root_p6_t6_s5"
    },
    {
      "source": "crypto_root_p6_t6_s5",
      "target": "crypto_root_p6_t6_s5_d1"
    },
    {
      "source": "crypto_root_p6_t6_s5",
      "target": "crypto_root_p6_t6_s5_d2"
    },
    {
      "source": "crypto_root",
      "target": "crypto_root_p7"
    },
    {
      "source": "crypto_root_p7",
      "target": "crypto_root_p7_t1"
    },
    {
      "source": "crypto_root_p7_t1",
      "target": "crypto_root_p7_t1_s1"
    },
    {
      "source": "crypto_root_p7_t1_s1",
      "target": "crypto_root_p7_t1_s1_d1"
    },
    {
      "source": "crypto_root_p7_t1_s1",
      "target": "crypto_root_p7_t1_s1_d2"
    },
    {
      "source": "crypto_root_p7_t1",
      "target": "crypto_root_p7_t1_s2"
    },
    {
      "source": "crypto_root_p7_t1_s2",
      "target": "crypto_root_p7_t1_s2_d1"
    },
    {
      "source": "crypto_root_p7_t1_s2",
      "target": "crypto_root_p7_t1_s2_d2"
    },
    {
      "source": "crypto_root_p7_t1",
      "target": "crypto_root_p7_t1_s3"
    },
    {
      "source": "crypto_root_p7_t1_s3",
      "target": "crypto_root_p7_t1_s3_d1"
    },
    {
      "source": "crypto_root_p7_t1_s3",
      "target": "crypto_root_p7_t1_s3_d2"
    },
    {
      "source": "crypto_root_p7_t1",
      "target": "crypto_root_p7_t1_s4"
    },
    {
      "source": "crypto_root_p7_t1_s4",
      "target": "crypto_root_p7_t1_s4_d1"
    },
    {
      "source": "crypto_root_p7_t1_s4",
      "target": "crypto_root_p7_t1_s4_d2"
    },
    {
      "source": "crypto_root_p7_t1",
      "target": "crypto_root_p7_t1_s5"
    },
    {
      "source": "crypto_root_p7_t1_s5",
      "target": "crypto_root_p7_t1_s5_d1"
    },
    {
      "source": "crypto_root_p7_t1_s5",
      "target": "crypto_root_p7_t1_s5_d2"
    },
    {
      "source": "crypto_root_p7",
      "target": "crypto_root_p7_t2"
    },
    {
      "source": "crypto_root_p7_t2",
      "target": "crypto_root_p7_t2_s1"
    },
    {
      "source": "crypto_root_p7_t2_s1",
      "target": "crypto_root_p7_t2_s1_d1"
    },
    {
      "source": "crypto_root_p7_t2_s1",
      "target": "crypto_root_p7_t2_s1_d2"
    },
    {
      "source": "crypto_root_p7_t2",
      "target": "crypto_root_p7_t2_s2"
    },
    {
      "source": "crypto_root_p7_t2_s2",
      "target": "crypto_root_p7_t2_s2_d1"
    },
    {
      "source": "crypto_root_p7_t2_s2",
      "target": "crypto_root_p7_t2_s2_d2"
    },
    {
      "source": "crypto_root_p7_t2",
      "target": "crypto_root_p7_t2_s3"
    },
    {
      "source": "crypto_root_p7_t2_s3",
      "target": "crypto_root_p7_t2_s3_d1"
    },
    {
      "source": "crypto_root_p7_t2_s3",
      "target": "crypto_root_p7_t2_s3_d2"
    },
    {
      "source": "crypto_root_p7_t2",
      "target": "crypto_root_p7_t2_s4"
    },
    {
      "source": "crypto_root_p7_t2_s4",
      "target": "crypto_root_p7_t2_s4_d1"
    },
    {
      "source": "crypto_root_p7_t2_s4",
      "target": "crypto_root_p7_t2_s4_d2"
    },
    {
      "source": "crypto_root_p7_t2",
      "target": "crypto_root_p7_t2_s5"
    },
    {
      "source": "crypto_root_p7_t2_s5",
      "target": "crypto_root_p7_t2_s5_d1"
    },
    {
      "source": "crypto_root_p7_t2_s5",
      "target": "crypto_root_p7_t2_s5_d2"
    },
    {
      "source": "crypto_root_p7",
      "target": "crypto_root_p7_t3"
    },
    {
      "source": "crypto_root_p7_t3",
      "target": "crypto_root_p7_t3_s1"
    },
    {
      "source": "crypto_root_p7_t3_s1",
      "target": "crypto_root_p7_t3_s1_d1"
    },
    {
      "source": "crypto_root_p7_t3_s1",
      "target": "crypto_root_p7_t3_s1_d2"
    },
    {
      "source": "crypto_root_p7_t3",
      "target": "crypto_root_p7_t3_s2"
    },
    {
      "source": "crypto_root_p7_t3_s2",
      "target": "crypto_root_p7_t3_s2_d1"
    },
    {
      "source": "crypto_root_p7_t3_s2",
      "target": "crypto_root_p7_t3_s2_d2"
    },
    {
      "source": "crypto_root_p7_t3",
      "target": "crypto_root_p7_t3_s3"
    },
    {
      "source": "crypto_root_p7_t3_s3",
      "target": "crypto_root_p7_t3_s3_d1"
    },
    {
      "source": "crypto_root_p7_t3_s3",
      "target": "crypto_root_p7_t3_s3_d2"
    },
    {
      "source": "crypto_root_p7_t3",
      "target": "crypto_root_p7_t3_s4"
    },
    {
      "source": "crypto_root_p7_t3_s4",
      "target": "crypto_root_p7_t3_s4_d1"
    },
    {
      "source": "crypto_root_p7_t3_s4",
      "target": "crypto_root_p7_t3_s4_d2"
    },
    {
      "source": "crypto_root_p7_t3",
      "target": "crypto_root_p7_t3_s5"
    },
    {
      "source": "crypto_root_p7_t3_s5",
      "target": "crypto_root_p7_t3_s5_d1"
    },
    {
      "source": "crypto_root_p7_t3_s5",
      "target": "crypto_root_p7_t3_s5_d2"
    },
    {
      "source": "crypto_root_p7",
      "target": "crypto_root_p7_t4"
    },
    {
      "source": "crypto_root_p7_t4",
      "target": "crypto_root_p7_t4_s1"
    },
    {
      "source": "crypto_root_p7_t4_s1",
      "target": "crypto_root_p7_t4_s1_d1"
    },
    {
      "source": "crypto_root_p7_t4_s1",
      "target": "crypto_root_p7_t4_s1_d2"
    },
    {
      "source": "crypto_root_p7_t4",
      "target": "crypto_root_p7_t4_s2"
    },
    {
      "source": "crypto_root_p7_t4_s2",
      "target": "crypto_root_p7_t4_s2_d1"
    },
    {
      "source": "crypto_root_p7_t4_s2",
      "target": "crypto_root_p7_t4_s2_d2"
    },
    {
      "source": "crypto_root_p7_t4",
      "target": "crypto_root_p7_t4_s3"
    },
    {
      "source": "crypto_root_p7_t4_s3",
      "target": "crypto_root_p7_t4_s3_d1"
    },
    {
      "source": "crypto_root_p7_t4_s3",
      "target": "crypto_root_p7_t4_s3_d2"
    },
    {
      "source": "crypto_root_p7_t4",
      "target": "crypto_root_p7_t4_s4"
    },
    {
      "source": "crypto_root_p7_t4_s4",
      "target": "crypto_root_p7_t4_s4_d1"
    },
    {
      "source": "crypto_root_p7_t4_s4",
      "target": "crypto_root_p7_t4_s4_d2"
    },
    {
      "source": "crypto_root_p7_t4",
      "target": "crypto_root_p7_t4_s5"
    },
    {
      "source": "crypto_root_p7_t4_s5",
      "target": "crypto_root_p7_t4_s5_d1"
    },
    {
      "source": "crypto_root_p7_t4_s5",
      "target": "crypto_root_p7_t4_s5_d2"
    },
    {
      "source": "crypto_root_p7",
      "target": "crypto_root_p7_t5"
    },
    {
      "source": "crypto_root_p7_t5",
      "target": "crypto_root_p7_t5_s1"
    },
    {
      "source": "crypto_root_p7_t5_s1",
      "target": "crypto_root_p7_t5_s1_d1"
    },
    {
      "source": "crypto_root_p7_t5_s1",
      "target": "crypto_root_p7_t5_s1_d2"
    },
    {
      "source": "crypto_root_p7_t5",
      "target": "crypto_root_p7_t5_s2"
    },
    {
      "source": "crypto_root_p7_t5_s2",
      "target": "crypto_root_p7_t5_s2_d1"
    },
    {
      "source": "crypto_root_p7_t5_s2",
      "target": "crypto_root_p7_t5_s2_d2"
    },
    {
      "source": "crypto_root_p7_t5",
      "target": "crypto_root_p7_t5_s3"
    },
    {
      "source": "crypto_root_p7_t5_s3",
      "target": "crypto_root_p7_t5_s3_d1"
    },
    {
      "source": "crypto_root_p7_t5_s3",
      "target": "crypto_root_p7_t5_s3_d2"
    },
    {
      "source": "crypto_root_p7_t5",
      "target": "crypto_root_p7_t5_s4"
    },
    {
      "source": "crypto_root_p7_t5_s4",
      "target": "crypto_root_p7_t5_s4_d1"
    },
    {
      "source": "crypto_root_p7_t5_s4",
      "target": "crypto_root_p7_t5_s4_d2"
    },
    {
      "source": "crypto_root_p7_t5",
      "target": "crypto_root_p7_t5_s5"
    },
    {
      "source": "crypto_root_p7_t5_s5",
      "target": "crypto_root_p7_t5_s5_d1"
    },
    {
      "source": "crypto_root_p7_t5_s5",
      "target": "crypto_root_p7_t5_s5_d2"
    },
    {
      "source": "crypto_root_p7",
      "target": "crypto_root_p7_t6"
    },
    {
      "source": "crypto_root_p7_t6",
      "target": "crypto_root_p7_t6_s1"
    },
    {
      "source": "crypto_root_p7_t6_s1",
      "target": "crypto_root_p7_t6_s1_d1"
    },
    {
      "source": "crypto_root_p7_t6_s1",
      "target": "crypto_root_p7_t6_s1_d2"
    },
    {
      "source": "crypto_root_p7_t6",
      "target": "crypto_root_p7_t6_s2"
    },
    {
      "source": "crypto_root_p7_t6_s2",
      "target": "crypto_root_p7_t6_s2_d1"
    },
    {
      "source": "crypto_root_p7_t6_s2",
      "target": "crypto_root_p7_t6_s2_d2"
    },
    {
      "source": "crypto_root_p7_t6",
      "target": "crypto_root_p7_t6_s3"
    },
    {
      "source": "crypto_root_p7_t6_s3",
      "target": "crypto_root_p7_t6_s3_d1"
    },
    {
      "source": "crypto_root_p7_t6_s3",
      "target": "crypto_root_p7_t6_s3_d2"
    },
    {
      "source": "crypto_root_p7_t6",
      "target": "crypto_root_p7_t6_s4"
    },
    {
      "source": "crypto_root_p7_t6_s4",
      "target": "crypto_root_p7_t6_s4_d1"
    },
    {
      "source": "crypto_root_p7_t6_s4",
      "target": "crypto_root_p7_t6_s4_d2"
    },
    {
      "source": "crypto_root_p7_t6",
      "target": "crypto_root_p7_t6_s5"
    },
    {
      "source": "crypto_root_p7_t6_s5",
      "target": "crypto_root_p7_t6_s5_d1"
    },
    {
      "source": "crypto_root_p7_t6_s5",
      "target": "crypto_root_p7_t6_s5_d2"
    },
    {
      "source": "crypto_root",
      "target": "crypto_root_p8"
    },
    {
      "source": "crypto_root_p8",
      "target": "crypto_root_p8_t1"
    },
    {
      "source": "crypto_root_p8_t1",
      "target": "crypto_root_p8_t1_s1"
    },
    {
      "source": "crypto_root_p8_t1_s1",
      "target": "crypto_root_p8_t1_s1_d1"
    },
    {
      "source": "crypto_root_p8_t1_s1",
      "target": "crypto_root_p8_t1_s1_d2"
    },
    {
      "source": "crypto_root_p8_t1",
      "target": "crypto_root_p8_t1_s2"
    },
    {
      "source": "crypto_root_p8_t1_s2",
      "target": "crypto_root_p8_t1_s2_d1"
    },
    {
      "source": "crypto_root_p8_t1_s2",
      "target": "crypto_root_p8_t1_s2_d2"
    },
    {
      "source": "crypto_root_p8_t1",
      "target": "crypto_root_p8_t1_s3"
    },
    {
      "source": "crypto_root_p8_t1_s3",
      "target": "crypto_root_p8_t1_s3_d1"
    },
    {
      "source": "crypto_root_p8_t1_s3",
      "target": "crypto_root_p8_t1_s3_d2"
    },
    {
      "source": "crypto_root_p8_t1",
      "target": "crypto_root_p8_t1_s4"
    },
    {
      "source": "crypto_root_p8_t1_s4",
      "target": "crypto_root_p8_t1_s4_d1"
    },
    {
      "source": "crypto_root_p8_t1_s4",
      "target": "crypto_root_p8_t1_s4_d2"
    },
    {
      "source": "crypto_root_p8_t1",
      "target": "crypto_root_p8_t1_s5"
    },
    {
      "source": "crypto_root_p8_t1_s5",
      "target": "crypto_root_p8_t1_s5_d1"
    },
    {
      "source": "crypto_root_p8_t1_s5",
      "target": "crypto_root_p8_t1_s5_d2"
    },
    {
      "source": "crypto_root_p8",
      "target": "crypto_root_p8_t2"
    },
    {
      "source": "crypto_root_p8_t2",
      "target": "crypto_root_p8_t2_s1"
    },
    {
      "source": "crypto_root_p8_t2_s1",
      "target": "crypto_root_p8_t2_s1_d1"
    },
    {
      "source": "crypto_root_p8_t2_s1",
      "target": "crypto_root_p8_t2_s1_d2"
    },
    {
      "source": "crypto_root_p8_t2",
      "target": "crypto_root_p8_t2_s2"
    },
    {
      "source": "crypto_root_p8_t2_s2",
      "target": "crypto_root_p8_t2_s2_d1"
    },
    {
      "source": "crypto_root_p8_t2_s2",
      "target": "crypto_root_p8_t2_s2_d2"
    },
    {
      "source": "crypto_root_p8_t2",
      "target": "crypto_root_p8_t2_s3"
    },
    {
      "source": "crypto_root_p8_t2_s3",
      "target": "crypto_root_p8_t2_s3_d1"
    },
    {
      "source": "crypto_root_p8_t2_s3",
      "target": "crypto_root_p8_t2_s3_d2"
    },
    {
      "source": "crypto_root_p8_t2",
      "target": "crypto_root_p8_t2_s4"
    },
    {
      "source": "crypto_root_p8_t2_s4",
      "target": "crypto_root_p8_t2_s4_d1"
    },
    {
      "source": "crypto_root_p8_t2_s4",
      "target": "crypto_root_p8_t2_s4_d2"
    },
    {
      "source": "crypto_root_p8_t2",
      "target": "crypto_root_p8_t2_s5"
    },
    {
      "source": "crypto_root_p8_t2_s5",
      "target": "crypto_root_p8_t2_s5_d1"
    },
    {
      "source": "crypto_root_p8_t2_s5",
      "target": "crypto_root_p8_t2_s5_d2"
    },
    {
      "source": "crypto_root_p8",
      "target": "crypto_root_p8_t3"
    },
    {
      "source": "crypto_root_p8_t3",
      "target": "crypto_root_p8_t3_s1"
    },
    {
      "source": "crypto_root_p8_t3_s1",
      "target": "crypto_root_p8_t3_s1_d1"
    },
    {
      "source": "crypto_root_p8_t3_s1",
      "target": "crypto_root_p8_t3_s1_d2"
    },
    {
      "source": "crypto_root_p8_t3",
      "target": "crypto_root_p8_t3_s2"
    },
    {
      "source": "crypto_root_p8_t3_s2",
      "target": "crypto_root_p8_t3_s2_d1"
    },
    {
      "source": "crypto_root_p8_t3_s2",
      "target": "crypto_root_p8_t3_s2_d2"
    },
    {
      "source": "crypto_root_p8_t3",
      "target": "crypto_root_p8_t3_s3"
    },
    {
      "source": "crypto_root_p8_t3_s3",
      "target": "crypto_root_p8_t3_s3_d1"
    },
    {
      "source": "crypto_root_p8_t3_s3",
      "target": "crypto_root_p8_t3_s3_d2"
    },
    {
      "source": "crypto_root_p8_t3",
      "target": "crypto_root_p8_t3_s4"
    },
    {
      "source": "crypto_root_p8_t3_s4",
      "target": "crypto_root_p8_t3_s4_d1"
    },
    {
      "source": "crypto_root_p8_t3_s4",
      "target": "crypto_root_p8_t3_s4_d2"
    },
    {
      "source": "crypto_root_p8_t3",
      "target": "crypto_root_p8_t3_s5"
    },
    {
      "source": "crypto_root_p8_t3_s5",
      "target": "crypto_root_p8_t3_s5_d1"
    },
    {
      "source": "crypto_root_p8_t3_s5",
      "target": "crypto_root_p8_t3_s5_d2"
    },
    {
      "source": "crypto_root_p8",
      "target": "crypto_root_p8_t4"
    },
    {
      "source": "crypto_root_p8_t4",
      "target": "crypto_root_p8_t4_s1"
    },
    {
      "source": "crypto_root_p8_t4_s1",
      "target": "crypto_root_p8_t4_s1_d1"
    },
    {
      "source": "crypto_root_p8_t4_s1",
      "target": "crypto_root_p8_t4_s1_d2"
    },
    {
      "source": "crypto_root_p8_t4",
      "target": "crypto_root_p8_t4_s2"
    },
    {
      "source": "crypto_root_p8_t4_s2",
      "target": "crypto_root_p8_t4_s2_d1"
    },
    {
      "source": "crypto_root_p8_t4_s2",
      "target": "crypto_root_p8_t4_s2_d2"
    },
    {
      "source": "crypto_root_p8_t4",
      "target": "crypto_root_p8_t4_s3"
    },
    {
      "source": "crypto_root_p8_t4_s3",
      "target": "crypto_root_p8_t4_s3_d1"
    },
    {
      "source": "crypto_root_p8_t4_s3",
      "target": "crypto_root_p8_t4_s3_d2"
    },
    {
      "source": "crypto_root_p8_t4",
      "target": "crypto_root_p8_t4_s4"
    },
    {
      "source": "crypto_root_p8_t4_s4",
      "target": "crypto_root_p8_t4_s4_d1"
    },
    {
      "source": "crypto_root_p8_t4_s4",
      "target": "crypto_root_p8_t4_s4_d2"
    },
    {
      "source": "crypto_root_p8_t4",
      "target": "crypto_root_p8_t4_s5"
    },
    {
      "source": "crypto_root_p8_t4_s5",
      "target": "crypto_root_p8_t4_s5_d1"
    },
    {
      "source": "crypto_root_p8_t4_s5",
      "target": "crypto_root_p8_t4_s5_d2"
    },
    {
      "source": "crypto_root_p8",
      "target": "crypto_root_p8_t5"
    },
    {
      "source": "crypto_root_p8_t5",
      "target": "crypto_root_p8_t5_s1"
    },
    {
      "source": "crypto_root_p8_t5_s1",
      "target": "crypto_root_p8_t5_s1_d1"
    },
    {
      "source": "crypto_root_p8_t5_s1",
      "target": "crypto_root_p8_t5_s1_d2"
    },
    {
      "source": "crypto_root_p8_t5",
      "target": "crypto_root_p8_t5_s2"
    },
    {
      "source": "crypto_root_p8_t5_s2",
      "target": "crypto_root_p8_t5_s2_d1"
    },
    {
      "source": "crypto_root_p8_t5_s2",
      "target": "crypto_root_p8_t5_s2_d2"
    },
    {
      "source": "crypto_root_p8_t5",
      "target": "crypto_root_p8_t5_s3"
    },
    {
      "source": "crypto_root_p8_t5_s3",
      "target": "crypto_root_p8_t5_s3_d1"
    },
    {
      "source": "crypto_root_p8_t5_s3",
      "target": "crypto_root_p8_t5_s3_d2"
    },
    {
      "source": "crypto_root_p8_t5",
      "target": "crypto_root_p8_t5_s4"
    },
    {
      "source": "crypto_root_p8_t5_s4",
      "target": "crypto_root_p8_t5_s4_d1"
    },
    {
      "source": "crypto_root_p8_t5_s4",
      "target": "crypto_root_p8_t5_s4_d2"
    },
    {
      "source": "crypto_root_p8_t5",
      "target": "crypto_root_p8_t5_s5"
    },
    {
      "source": "crypto_root_p8_t5_s5",
      "target": "crypto_root_p8_t5_s5_d1"
    },
    {
      "source": "crypto_root_p8_t5_s5",
      "target": "crypto_root_p8_t5_s5_d2"
    },
    {
      "source": "crypto_root_p8",
      "target": "crypto_root_p8_t6"
    },
    {
      "source": "crypto_root_p8_t6",
      "target": "crypto_root_p8_t6_s1"
    },
    {
      "source": "crypto_root_p8_t6_s1",
      "target": "crypto_root_p8_t6_s1_d1"
    },
    {
      "source": "crypto_root_p8_t6_s1",
      "target": "crypto_root_p8_t6_s1_d2"
    },
    {
      "source": "crypto_root_p8_t6",
      "target": "crypto_root_p8_t6_s2"
    },
    {
      "source": "crypto_root_p8_t6_s2",
      "target": "crypto_root_p8_t6_s2_d1"
    },
    {
      "source": "crypto_root_p8_t6_s2",
      "target": "crypto_root_p8_t6_s2_d2"
    },
    {
      "source": "crypto_root_p8_t6",
      "target": "crypto_root_p8_t6_s3"
    },
    {
      "source": "crypto_root_p8_t6_s3",
      "target": "crypto_root_p8_t6_s3_d1"
    },
    {
      "source": "crypto_root_p8_t6_s3",
      "target": "crypto_root_p8_t6_s3_d2"
    },
    {
      "source": "crypto_root_p8_t6",
      "target": "crypto_root_p8_t6_s4"
    },
    {
      "source": "crypto_root_p8_t6_s4",
      "target": "crypto_root_p8_t6_s4_d1"
    },
    {
      "source": "crypto_root_p8_t6_s4",
      "target": "crypto_root_p8_t6_s4_d2"
    },
    {
      "source": "crypto_root_p8_t6",
      "target": "crypto_root_p8_t6_s5"
    },
    {
      "source": "crypto_root_p8_t6_s5",
      "target": "crypto_root_p8_t6_s5_d1"
    },
    {
      "source": "crypto_root_p8_t6_s5",
      "target": "crypto_root_p8_t6_s5_d2"
    }
  ]
};
