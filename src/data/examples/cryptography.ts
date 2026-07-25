import { MindMapData } from "../../services/llmService";

export const CRYPTOGRAPHY_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "crypto_root",
      "label": "Modern Cryptography & Cybersecurity Engineering",
      "description": "Advanced concepts in modern cryptographic systems and security engineering.",
      "type": "topic"
    },
    {
      "id": "crypto_root_p0",
      "label": "Symmetric Encryption",
      "description": "Fast encryption using a single shared key for bulk data.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p0_t0",
      "label": "AES-256-GCM",
      "description": "Advanced Encryption Standard in Galois/Counter Mode.",
      "type": "topic"
    },
    {
      "id": "crypto_root_p0_t0_d0",
      "label": "Block Cipher",
      "description": "Operates on fixed-size blocks of 128 bits.",
      "type": "example"
    },
    {
      "id": "crypto_root_p0_t0_d1",
      "label": "Authenticated Encryption",
      "description": "Provides both data confidentiality and integrity.",
      "type": "example"
    },
    {
      "id": "crypto_root_p0_t0_d2",
      "label": "Nonce Management",
      "description": "Requires a strictly unique IV per encryption.",
      "type": "example"
    },
    {
      "id": "crypto_root_p0_t0_d3",
      "label": "Hardware Acceleration",
      "description": "AES-NI instructions enable high-speed processing.",
      "type": "example"
    },
    {
      "id": "crypto_root_p0_t1",
      "label": "ChaCha20-Poly1305",
      "description": "High-performance stream cipher and MAC combination.",
      "type": "topic"
    },
    {
      "id": "crypto_root_p0_t1_d0",
      "label": "Stream Cipher",
      "description": "Encrypts data bit by bit, avoiding padding issues.",
      "type": "example"
    },
    {
      "id": "crypto_root_p0_t1_d1",
      "label": "Software Optimized",
      "description": "Faster than AES on mobile devices without hardware AES support.",
      "type": "example"
    },
    {
      "id": "crypto_root_p0_t1_d2",
      "label": "Poly1305 MAC",
      "description": "Extremely fast one-time authenticator for message integrity.",
      "type": "example"
    },
    {
      "id": "crypto_root_p0_t1_d3",
      "label": "RFC 8439",
      "description": "Standardized for core Internet protocols like TLS and WireGuard.",
      "type": "example"
    },
    {
      "id": "crypto_root_p0_t2",
      "label": "Key Management",
      "description": "Securely handling and storing symmetric keys.",
      "type": "topic"
    },
    {
      "id": "crypto_root_p0_t2_d0",
      "label": "Key Rotation",
      "description": "Periodically changing encryption keys to limit compromise blast radius.",
      "type": "example"
    },
    {
      "id": "crypto_root_p0_t2_d1",
      "label": "KMS Systems",
      "description": "AWS KMS, HashiCorp Vault for centralized, audited key storage.",
      "type": "example"
    },
    {
      "id": "crypto_root_p0_t2_d2",
      "label": "Envelope Encryption",
      "description": "Encrypting Data Encryption Keys (DEKs) with a master KEK.",
      "type": "example"
    },
    {
      "id": "crypto_root_p0_t2_d3",
      "label": "Key Derivation (HKDF)",
      "description": "Extracting multiple cryptographic keys from a single master secret.",
      "type": "example"
    },
    {
      "id": "crypto_root_p0_t3",
      "label": "Legacy Algorithms",
      "description": "Older symmetric algorithms and why they are deprecated.",
      "type": "topic"
    },
    {
      "id": "crypto_root_p0_t3_d0",
      "label": "DES / 3DES",
      "description": "Vulnerable to brute force due to small key sizes (56-bit).",
      "type": "example"
    },
    {
      "id": "crypto_root_p0_t3_d1",
      "label": "RC4",
      "description": "Stream cipher broken by biases in the keystream.",
      "type": "example"
    },
    {
      "id": "crypto_root_p0_t3_d2",
      "label": "AES-CBC",
      "description": "Vulnerable to padding oracle attacks if not paired with a strong MAC.",
      "type": "example"
    },
    {
      "id": "crypto_root_p0_t3_d3",
      "label": "MD5/SHA-1",
      "description": "Legacy hash functions vulnerable to collision attacks.",
      "type": "example"
    },
    {
      "id": "crypto_root_p1",
      "label": "Asymmetric PKI",
      "description": "Public Key Infrastructure using mathematically linked key pairs.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p1_t0",
      "label": "RSA-OAEP",
      "description": "Rivest-Shamir-Adleman with Optimal Asymmetric Encryption Padding.",
      "type": "topic"
    },
    {
      "id": "crypto_root_p1_t0_d0",
      "label": "Factoring Problem",
      "description": "Security relies on the immense difficulty of factoring large composite primes.",
      "type": "example"
    },
    {
      "id": "crypto_root_p1_t0_d1",
      "label": "Key Sizes",
      "description": "Typically 2048, 3072, or 4096 bits for modern security margins.",
      "type": "example"
    },
    {
      "id": "crypto_root_p1_t0_d2",
      "label": "OAEP Padding",
      "description": "Randomized padding scheme preventing chosen-ciphertext attacks.",
      "type": "example"
    },
    {
      "id": "crypto_root_p1_t0_d3",
      "label": "Performance Costs",
      "description": "Computationally expensive; usually only encrypts small symmetric keys.",
      "type": "example"
    },
    {
      "id": "crypto_root_p1_t1",
      "label": "Elliptic Curve Cryptography",
      "description": "Smaller keys offering equivalent security to massive RSA keys.",
      "type": "topic"
    },
    {
      "id": "crypto_root_p1_t1_d0",
      "label": "secp256k1",
      "description": "The specific Koblitz curve utilized heavily in Bitcoin and Ethereum.",
      "type": "example"
    },
    {
      "id": "crypto_root_p1_t1_d1",
      "label": "NIST P-256",
      "description": "Widely used standard curve for web TLS and general internet security.",
      "type": "example"
    },
    {
      "id": "crypto_root_p1_t1_d2",
      "label": "ECDSA",
      "description": "Elliptic Curve Digital Signature Algorithm for proving authenticity.",
      "type": "example"
    },
    {
      "id": "crypto_root_p1_t1_d3",
      "label": "EdDSA / Ed25519",
      "description": "High-speed, highly secure, misuse-resistant signature scheme.",
      "type": "example"
    },
    {
      "id": "crypto_root_p1_t2",
      "label": "Certificate Infrastructure",
      "description": "The trust fabric of the web via digital certificates.",
      "type": "topic"
    },
    {
      "id": "crypto_root_p1_t2_d0",
      "label": "X.509 Certificates",
      "description": "Standard format binding a public key to an identity.",
      "type": "example"
    },
    {
      "id": "crypto_root_p1_t2_d1",
      "label": "Certificate Authorities",
      "description": "Trusted entities (e.g., Let's Encrypt) that sign certificates.",
      "type": "example"
    },
    {
      "id": "crypto_root_p1_t2_d2",
      "label": "Revocation (CRL/OCSP)",
      "description": "Mechanisms to check if a certificate has been compromised.",
      "type": "example"
    },
    {
      "id": "crypto_root_p1_t2_d3",
      "label": "Mutual TLS (mTLS)",
      "description": "Both client and server authenticate each other via certificates.",
      "type": "example"
    },
    {
      "id": "crypto_root_p1_t3",
      "label": "Certificate Transparency",
      "description": "Public, auditable logs of all issued TLS certificates.",
      "type": "topic"
    },
    {
      "id": "crypto_root_p1_t3_d0",
      "label": "Append-only Logs",
      "description": "Cryptographically verifiable public ledgers of certificates.",
      "type": "example"
    },
    {
      "id": "crypto_root_p1_t3_d1",
      "label": "Merkle Trees",
      "description": "Data structure used to efficiently prove inclusion in the log.",
      "type": "example"
    },
    {
      "id": "crypto_root_p1_t3_d2",
      "label": "SCTs",
      "description": "Signed Certificate Timestamps returned by logs to browsers.",
      "type": "example"
    },
    {
      "id": "crypto_root_p1_t3_d3",
      "label": "Rogue Cert Detection",
      "description": "Allows domain owners to monitor for misissued certificates.",
      "type": "example"
    },
    {
      "id": "crypto_root_p2",
      "label": "Network Security & Protocols",
      "description": "Securing data in transit across untrusted networks.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p2_t0",
      "label": "TLS 1.3 Handshake",
      "description": "Modern, secure, and fast connection establishment.",
      "type": "topic"
    },
    {
      "id": "crypto_root_p2_t0_d0",
      "label": "1-RTT Handshake",
      "description": "Client and server establish encrypted channels in one round trip.",
      "type": "example"
    },
    {
      "id": "crypto_root_p2_t0_d1",
      "label": "0-RTT (Early Data)",
      "description": "Resuming connections with zero round trips (requires replay protection).",
      "type": "example"
    },
    {
      "id": "crypto_root_p2_t0_d2",
      "label": "Key Schedule",
      "description": "Complex internal state machine for deriving session keys.",
      "type": "example"
    },
    {
      "id": "crypto_root_p2_t0_d3",
      "label": "Cipher Suites",
      "description": "Reduced to a few secure AEAD options (e.g., TLS_AES_256_GCM_SHA384).",
      "type": "example"
    },
    {
      "id": "crypto_root_p2_t1",
      "label": "Authentication (FIDO2)",
      "description": "Passwordless, hardware-backed, phishing-resistant authentication.",
      "type": "topic"
    },
    {
      "id": "crypto_root_p2_t1_d0",
      "label": "WebAuthn",
      "description": "W3C API for public key credentials in browsers.",
      "type": "example"
    },
    {
      "id": "crypto_root_p2_t1_d1",
      "label": "Passkeys",
      "description": "Discoverable, multi-device credentials synced via cloud ecosystems.",
      "type": "example"
    },
    {
      "id": "crypto_root_p2_t1_d2",
      "label": "CTAP2",
      "description": "Client to Authenticator Protocol for talking to security keys.",
      "type": "example"
    },
    {
      "id": "crypto_root_p2_t1_d3",
      "label": "Hardware Tokens",
      "description": "YubiKeys and secure enclaves acting as roaming authenticators.",
      "type": "example"
    },
    {
      "id": "crypto_root_p2_t2",
      "label": "Hash Functions",
      "description": "One-way deterministic mapping of data to fixed sizes.",
      "type": "topic"
    },
    {
      "id": "crypto_root_p2_t2_d0",
      "label": "SHA-3",
      "description": "Keccak sponge construction, highly resistant to length extension attacks.",
      "type": "example"
    },
    {
      "id": "crypto_root_p2_t2_d1",
      "label": "BLAKE3",
      "description": "Highly parallelizable, extremely fast cryptographic hash function.",
      "type": "example"
    },
    {
      "id": "crypto_root_p2_t2_d2",
      "label": "Password Hashing",
      "description": "Argon2, bcrypt, scrypt (memory-hard functions to resist ASICs).",
      "type": "example"
    },
    {
      "id": "crypto_root_p2_t2_d3",
      "label": "HMAC",
      "description": "Hash-based Message Authentication Code for verifying data integrity.",
      "type": "example"
    },
    {
      "id": "crypto_root_p2_t3",
      "label": "VPNs and Tunnels",
      "description": "Encrypted point-to-point network links.",
      "type": "topic"
    },
    {
      "id": "crypto_root_p2_t3_d0",
      "label": "WireGuard",
      "description": "Modern, extremely lean VPN protocol using Noise protocol framework.",
      "type": "example"
    },
    {
      "id": "crypto_root_p2_t3_d1",
      "label": "IPsec",
      "description": "Traditional suite for securing IP communications at network layer.",
      "type": "example"
    },
    {
      "id": "crypto_root_p2_t3_d2",
      "label": "OpenVPN",
      "description": "TLS-based VPN, highly configurable but complex.",
      "type": "example"
    },
    {
      "id": "crypto_root_p2_t3_d3",
      "label": "Zero Trust Network Access",
      "description": "Identity-aware proxies replacing traditional perimeter VPNs.",
      "type": "example"
    },
    {
      "id": "crypto_root_p3",
      "label": "Advanced & Future Cryptography",
      "description": "Cutting-edge cryptographic techniques and future defenses.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p3_t0",
      "label": "Post-Quantum Cryptography",
      "description": "Algorithms resisting future quantum computer attacks.",
      "type": "topic"
    },
    {
      "id": "crypto_root_p3_t0_d0",
      "label": "Shor's Algorithm",
      "description": "The quantum algorithm that threatens RSA and discrete logarithm systems.",
      "type": "example"
    },
    {
      "id": "crypto_root_p3_t0_d1",
      "label": "ML-KEM (Kyber)",
      "description": "NIST FIPS 203 standardized lattice-based key encapsulation mechanism.",
      "type": "example"
    },
    {
      "id": "crypto_root_p3_t0_d2",
      "label": "ML-DSA (Dilithium)",
      "description": "NIST FIPS 204 standardized lattice-based digital signatures.",
      "type": "example"
    },
    {
      "id": "crypto_root_p3_t0_d3",
      "label": "Hybrid TLS",
      "description": "Combining classical ECC with PQC in the current transition phase.",
      "type": "example"
    },
    {
      "id": "crypto_root_p3_t1",
      "label": "Zero-Knowledge Proofs",
      "description": "Mathematical methods to prove knowledge without revealing it.",
      "type": "topic"
    },
    {
      "id": "crypto_root_p3_t1_d0",
      "label": "zk-SNARKs",
      "description": "Succinct Non-interactive ARguments of Knowledge (often requires trusted setup).",
      "type": "example"
    },
    {
      "id": "crypto_root_p3_t1_d1",
      "label": "zk-STARKs",
      "description": "Scalable Transparent ARguments of Knowledge (no trusted setup required).",
      "type": "example"
    },
    {
      "id": "crypto_root_p3_t1_d2",
      "label": "Arithmetic Circuits",
      "description": "Representing arbitrary computation as mathematical polynomials and gates.",
      "type": "example"
    },
    {
      "id": "crypto_root_p3_t1_d3",
      "label": "Applications",
      "description": "Privacy coins (Zcash), blockchain L2 rollups, identity verification.",
      "type": "example"
    },
    {
      "id": "crypto_root_p3_t2",
      "label": "Secret Sharing & MPC",
      "description": "Distributing trust and keys across multiple parties.",
      "type": "topic"
    },
    {
      "id": "crypto_root_p3_t2_d0",
      "label": "Shamir Secret Sharing",
      "description": "Splitting a key into M-of-N parts using polynomial interpolation.",
      "type": "example"
    },
    {
      "id": "crypto_root_p3_t2_d1",
      "label": "Multi-Party Computation",
      "description": "Jointly computing a function over private inputs without revealing them.",
      "type": "example"
    },
    {
      "id": "crypto_root_p3_t2_d2",
      "label": "Threshold Signatures",
      "description": "Requiring multiple parties to cooperatively generate a single signature.",
      "type": "example"
    },
    {
      "id": "crypto_root_p3_t2_d3",
      "label": "Homomorphic Encryption",
      "description": "Performing computations on ciphertext without decrypting it first.",
      "type": "example"
    },
    {
      "id": "crypto_root_p3_t3",
      "label": "Hardware Security",
      "description": "Protecting keys at rest and in use via physical isolation.",
      "type": "topic"
    },
    {
      "id": "crypto_root_p3_t3_d0",
      "label": "Secure Enclaves",
      "description": "Intel SGX, ARM TrustZone hardware-isolated execution environments.",
      "type": "example"
    },
    {
      "id": "crypto_root_p3_t3_d1",
      "label": "HSMs",
      "description": "Hardware Security Modules used in enterprise for key management.",
      "type": "example"
    },
    {
      "id": "crypto_root_p3_t3_d2",
      "label": "TPMs",
      "description": "Trusted Platform Modules on motherboards for secure boot and attestation.",
      "type": "example"
    },
    {
      "id": "crypto_root_p3_t3_d3",
      "label": "Side-Channel Attacks",
      "description": "Exploiting timing, power consumption, or EM radiation to extract keys.",
      "type": "example"
    },
    {
      "id": "crypto_root_p4",
      "label": "Identity & Access Control",
      "description": "Managing identities, roles, and authorization.",
      "type": "concept"
    },
    {
      "id": "crypto_root_p4_t0",
      "label": "OAuth 2.0 & OIDC",
      "description": "Delegated authorization and federated identity.",
      "type": "topic"
    },
    {
      "id": "crypto_root_p4_t0_d0",
      "label": "Authorization Code Flow",
      "description": "Secure flow for exchanging codes for tokens.",
      "type": "example"
    },
    {
      "id": "crypto_root_p4_t0_d1",
      "label": "JWT (JSON Web Tokens)",
      "description": "Stateless, cryptographically signed claims.",
      "type": "example"
    },
    {
      "id": "crypto_root_p4_t0_d2",
      "label": "Scopes and Claims",
      "description": "Granular permissions requested by the client.",
      "type": "example"
    },
    {
      "id": "crypto_root_p4_t0_d3",
      "label": "PKCE",
      "description": "Proof Key for Code Exchange preventing interception.",
      "type": "example"
    },
    {
      "id": "crypto_root_p4_t1",
      "label": "Access Control Models",
      "description": "Structuring permissions and policies.",
      "type": "topic"
    },
    {
      "id": "crypto_root_p4_t1_d0",
      "label": "RBAC",
      "description": "Role-Based Access Control grouping permissions by job function.",
      "type": "example"
    },
    {
      "id": "crypto_root_p4_t1_d1",
      "label": "ABAC",
      "description": "Attribute-Based Access Control using dynamic rules.",
      "type": "example"
    },
    {
      "id": "crypto_root_p4_t1_d2",
      "label": "ReBAC",
      "description": "Relationship-Based Access Control using graph hierarchies.",
      "type": "example"
    },
    {
      "id": "crypto_root_p4_t1_d3",
      "label": "Policy as Code",
      "description": "OPA (Open Policy Agent) for centralized policy evaluation.",
      "type": "example"
    },
    {
      "id": "crypto_root_p4_t2",
      "label": "Identity Federation",
      "description": "Trusting identities across organizational boundaries.",
      "type": "topic"
    },
    {
      "id": "crypto_root_p4_t2_d0",
      "label": "SAML 2.0",
      "description": "XML-based enterprise federation standard.",
      "type": "example"
    },
    {
      "id": "crypto_root_p4_t2_d1",
      "label": "Identity Providers (IdP)",
      "description": "Systems like Okta, Auth0, or Azure AD.",
      "type": "example"
    },
    {
      "id": "crypto_root_p4_t2_d2",
      "label": "Service Providers (SP)",
      "description": "The application consuming the identity assertions.",
      "type": "example"
    },
    {
      "id": "crypto_root_p4_t2_d3",
      "label": "Just-In-Time Provisioning",
      "description": "Creating user accounts dynamically upon first login.",
      "type": "example"
    },
    {
      "id": "crypto_root_p4_t3",
      "label": "Session Management",
      "description": "Handling active user authentication states safely.",
      "type": "topic"
    },
    {
      "id": "crypto_root_p4_t3_d0",
      "label": "Refresh Tokens",
      "description": "Long-lived tokens used to obtain new access tokens.",
      "type": "example"
    },
    {
      "id": "crypto_root_p4_t3_d1",
      "label": "Session Revocation",
      "description": "Mechanisms to instantly terminate compromised sessions.",
      "type": "example"
    },
    {
      "id": "crypto_root_p4_t3_d2",
      "label": "Cookie Security",
      "description": "Setting HttpOnly, Secure, and SameSite attributes.",
      "type": "example"
    },
    {
      "id": "crypto_root_p4_t3_d3",
      "label": "Token Binding",
      "description": "Tying a token to a specific client TLS connection.",
      "type": "example"
    }
  ],
  "edges": [
    {
      "source": "crypto_root",
      "target": "crypto_root_p0"
    },
    {
      "source": "crypto_root_p0",
      "target": "crypto_root_p0_t0"
    },
    {
      "source": "crypto_root_p0_t0",
      "target": "crypto_root_p0_t0_d0"
    },
    {
      "source": "crypto_root_p0_t0",
      "target": "crypto_root_p0_t0_d1"
    },
    {
      "source": "crypto_root_p0_t0",
      "target": "crypto_root_p0_t0_d2"
    },
    {
      "source": "crypto_root_p0_t0",
      "target": "crypto_root_p0_t0_d3"
    },
    {
      "source": "crypto_root_p0",
      "target": "crypto_root_p0_t1"
    },
    {
      "source": "crypto_root_p0_t1",
      "target": "crypto_root_p0_t1_d0"
    },
    {
      "source": "crypto_root_p0_t1",
      "target": "crypto_root_p0_t1_d1"
    },
    {
      "source": "crypto_root_p0_t1",
      "target": "crypto_root_p0_t1_d2"
    },
    {
      "source": "crypto_root_p0_t1",
      "target": "crypto_root_p0_t1_d3"
    },
    {
      "source": "crypto_root_p0",
      "target": "crypto_root_p0_t2"
    },
    {
      "source": "crypto_root_p0_t2",
      "target": "crypto_root_p0_t2_d0"
    },
    {
      "source": "crypto_root_p0_t2",
      "target": "crypto_root_p0_t2_d1"
    },
    {
      "source": "crypto_root_p0_t2",
      "target": "crypto_root_p0_t2_d2"
    },
    {
      "source": "crypto_root_p0_t2",
      "target": "crypto_root_p0_t2_d3"
    },
    {
      "source": "crypto_root_p0",
      "target": "crypto_root_p0_t3"
    },
    {
      "source": "crypto_root_p0_t3",
      "target": "crypto_root_p0_t3_d0"
    },
    {
      "source": "crypto_root_p0_t3",
      "target": "crypto_root_p0_t3_d1"
    },
    {
      "source": "crypto_root_p0_t3",
      "target": "crypto_root_p0_t3_d2"
    },
    {
      "source": "crypto_root_p0_t3",
      "target": "crypto_root_p0_t3_d3"
    },
    {
      "source": "crypto_root",
      "target": "crypto_root_p1"
    },
    {
      "source": "crypto_root_p1",
      "target": "crypto_root_p1_t0"
    },
    {
      "source": "crypto_root_p1_t0",
      "target": "crypto_root_p1_t0_d0"
    },
    {
      "source": "crypto_root_p1_t0",
      "target": "crypto_root_p1_t0_d1"
    },
    {
      "source": "crypto_root_p1_t0",
      "target": "crypto_root_p1_t0_d2"
    },
    {
      "source": "crypto_root_p1_t0",
      "target": "crypto_root_p1_t0_d3"
    },
    {
      "source": "crypto_root_p1",
      "target": "crypto_root_p1_t1"
    },
    {
      "source": "crypto_root_p1_t1",
      "target": "crypto_root_p1_t1_d0"
    },
    {
      "source": "crypto_root_p1_t1",
      "target": "crypto_root_p1_t1_d1"
    },
    {
      "source": "crypto_root_p1_t1",
      "target": "crypto_root_p1_t1_d2"
    },
    {
      "source": "crypto_root_p1_t1",
      "target": "crypto_root_p1_t1_d3"
    },
    {
      "source": "crypto_root_p1",
      "target": "crypto_root_p1_t2"
    },
    {
      "source": "crypto_root_p1_t2",
      "target": "crypto_root_p1_t2_d0"
    },
    {
      "source": "crypto_root_p1_t2",
      "target": "crypto_root_p1_t2_d1"
    },
    {
      "source": "crypto_root_p1_t2",
      "target": "crypto_root_p1_t2_d2"
    },
    {
      "source": "crypto_root_p1_t2",
      "target": "crypto_root_p1_t2_d3"
    },
    {
      "source": "crypto_root_p1",
      "target": "crypto_root_p1_t3"
    },
    {
      "source": "crypto_root_p1_t3",
      "target": "crypto_root_p1_t3_d0"
    },
    {
      "source": "crypto_root_p1_t3",
      "target": "crypto_root_p1_t3_d1"
    },
    {
      "source": "crypto_root_p1_t3",
      "target": "crypto_root_p1_t3_d2"
    },
    {
      "source": "crypto_root_p1_t3",
      "target": "crypto_root_p1_t3_d3"
    },
    {
      "source": "crypto_root",
      "target": "crypto_root_p2"
    },
    {
      "source": "crypto_root_p2",
      "target": "crypto_root_p2_t0"
    },
    {
      "source": "crypto_root_p2_t0",
      "target": "crypto_root_p2_t0_d0"
    },
    {
      "source": "crypto_root_p2_t0",
      "target": "crypto_root_p2_t0_d1"
    },
    {
      "source": "crypto_root_p2_t0",
      "target": "crypto_root_p2_t0_d2"
    },
    {
      "source": "crypto_root_p2_t0",
      "target": "crypto_root_p2_t0_d3"
    },
    {
      "source": "crypto_root_p2",
      "target": "crypto_root_p2_t1"
    },
    {
      "source": "crypto_root_p2_t1",
      "target": "crypto_root_p2_t1_d0"
    },
    {
      "source": "crypto_root_p2_t1",
      "target": "crypto_root_p2_t1_d1"
    },
    {
      "source": "crypto_root_p2_t1",
      "target": "crypto_root_p2_t1_d2"
    },
    {
      "source": "crypto_root_p2_t1",
      "target": "crypto_root_p2_t1_d3"
    },
    {
      "source": "crypto_root_p2",
      "target": "crypto_root_p2_t2"
    },
    {
      "source": "crypto_root_p2_t2",
      "target": "crypto_root_p2_t2_d0"
    },
    {
      "source": "crypto_root_p2_t2",
      "target": "crypto_root_p2_t2_d1"
    },
    {
      "source": "crypto_root_p2_t2",
      "target": "crypto_root_p2_t2_d2"
    },
    {
      "source": "crypto_root_p2_t2",
      "target": "crypto_root_p2_t2_d3"
    },
    {
      "source": "crypto_root_p2",
      "target": "crypto_root_p2_t3"
    },
    {
      "source": "crypto_root_p2_t3",
      "target": "crypto_root_p2_t3_d0"
    },
    {
      "source": "crypto_root_p2_t3",
      "target": "crypto_root_p2_t3_d1"
    },
    {
      "source": "crypto_root_p2_t3",
      "target": "crypto_root_p2_t3_d2"
    },
    {
      "source": "crypto_root_p2_t3",
      "target": "crypto_root_p2_t3_d3"
    },
    {
      "source": "crypto_root",
      "target": "crypto_root_p3"
    },
    {
      "source": "crypto_root_p3",
      "target": "crypto_root_p3_t0"
    },
    {
      "source": "crypto_root_p3_t0",
      "target": "crypto_root_p3_t0_d0"
    },
    {
      "source": "crypto_root_p3_t0",
      "target": "crypto_root_p3_t0_d1"
    },
    {
      "source": "crypto_root_p3_t0",
      "target": "crypto_root_p3_t0_d2"
    },
    {
      "source": "crypto_root_p3_t0",
      "target": "crypto_root_p3_t0_d3"
    },
    {
      "source": "crypto_root_p3",
      "target": "crypto_root_p3_t1"
    },
    {
      "source": "crypto_root_p3_t1",
      "target": "crypto_root_p3_t1_d0"
    },
    {
      "source": "crypto_root_p3_t1",
      "target": "crypto_root_p3_t1_d1"
    },
    {
      "source": "crypto_root_p3_t1",
      "target": "crypto_root_p3_t1_d2"
    },
    {
      "source": "crypto_root_p3_t1",
      "target": "crypto_root_p3_t1_d3"
    },
    {
      "source": "crypto_root_p3",
      "target": "crypto_root_p3_t2"
    },
    {
      "source": "crypto_root_p3_t2",
      "target": "crypto_root_p3_t2_d0"
    },
    {
      "source": "crypto_root_p3_t2",
      "target": "crypto_root_p3_t2_d1"
    },
    {
      "source": "crypto_root_p3_t2",
      "target": "crypto_root_p3_t2_d2"
    },
    {
      "source": "crypto_root_p3_t2",
      "target": "crypto_root_p3_t2_d3"
    },
    {
      "source": "crypto_root_p3",
      "target": "crypto_root_p3_t3"
    },
    {
      "source": "crypto_root_p3_t3",
      "target": "crypto_root_p3_t3_d0"
    },
    {
      "source": "crypto_root_p3_t3",
      "target": "crypto_root_p3_t3_d1"
    },
    {
      "source": "crypto_root_p3_t3",
      "target": "crypto_root_p3_t3_d2"
    },
    {
      "source": "crypto_root_p3_t3",
      "target": "crypto_root_p3_t3_d3"
    },
    {
      "source": "crypto_root",
      "target": "crypto_root_p4"
    },
    {
      "source": "crypto_root_p4",
      "target": "crypto_root_p4_t0"
    },
    {
      "source": "crypto_root_p4_t0",
      "target": "crypto_root_p4_t0_d0"
    },
    {
      "source": "crypto_root_p4_t0",
      "target": "crypto_root_p4_t0_d1"
    },
    {
      "source": "crypto_root_p4_t0",
      "target": "crypto_root_p4_t0_d2"
    },
    {
      "source": "crypto_root_p4_t0",
      "target": "crypto_root_p4_t0_d3"
    },
    {
      "source": "crypto_root_p4",
      "target": "crypto_root_p4_t1"
    },
    {
      "source": "crypto_root_p4_t1",
      "target": "crypto_root_p4_t1_d0"
    },
    {
      "source": "crypto_root_p4_t1",
      "target": "crypto_root_p4_t1_d1"
    },
    {
      "source": "crypto_root_p4_t1",
      "target": "crypto_root_p4_t1_d2"
    },
    {
      "source": "crypto_root_p4_t1",
      "target": "crypto_root_p4_t1_d3"
    },
    {
      "source": "crypto_root_p4",
      "target": "crypto_root_p4_t2"
    },
    {
      "source": "crypto_root_p4_t2",
      "target": "crypto_root_p4_t2_d0"
    },
    {
      "source": "crypto_root_p4_t2",
      "target": "crypto_root_p4_t2_d1"
    },
    {
      "source": "crypto_root_p4_t2",
      "target": "crypto_root_p4_t2_d2"
    },
    {
      "source": "crypto_root_p4_t2",
      "target": "crypto_root_p4_t2_d3"
    },
    {
      "source": "crypto_root_p4",
      "target": "crypto_root_p4_t3"
    },
    {
      "source": "crypto_root_p4_t3",
      "target": "crypto_root_p4_t3_d0"
    },
    {
      "source": "crypto_root_p4_t3",
      "target": "crypto_root_p4_t3_d1"
    },
    {
      "source": "crypto_root_p4_t3",
      "target": "crypto_root_p4_t3_d2"
    },
    {
      "source": "crypto_root_p4_t3",
      "target": "crypto_root_p4_t3_d3"
    }
  ]
};
