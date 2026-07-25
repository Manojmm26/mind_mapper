import { MindMapData } from "../../services/llmService";

export const SECURITY_ENGINEERING_EXAMPLE: MindMapData = {
  nodes: [
  {
    "id": "sec_root",
    "label": "Security Engineering",
    "description": "Security engineering integrates architectural threat modeling, applied cryptography, and robust infrastructure controls to proactively defend against sophisticated adversarial attacks.",
    "type": "topic"
  },
  {
    "id": "sec_p1",
    "label": "Threat Modeling",
    "description": "Threat modeling identifies architectural flaws early; STRIDE evaluates Spoofing, Tampering, Repudiation, Info Disclosure, DoS, and Elevation of Privilege against trust boundaries in data flow diagrams.",
    "type": "concept"
  },
  {
    "id": "tm_stride",
    "label": "STRIDE Framework",
    "description": "STRIDE applies systematically to DFD elements: data flows risk tampering/disclosure, processes risk all six, data stores risk tampering/disclosure/DoS, and interactors risk spoofing/repudiation.",
    "type": "example"
  },
  {
    "id": "tm_stride_sub0",
    "label": "Spoofing Defenses",
    "description": "Spoofing mitigations require strong authentication; FIDO2 utilizes public key cryptography where the private key never leaves the secure enclave, preventing credential replay.",
    "type": "decision"
  },
  {
    "id": "tm_stride_sub0_l1",
    "label": "Spoofing Defenses Fact 1",
    "description": "Spoofing mitigations require strong authentication.",
    "type": "action"
  },
  {
    "id": "tm_stride_sub0_l2",
    "label": "Spoofing Defenses Fact 2",
    "description": "FIDO2 utilizes public key cryptography where the private key never leaves the secure enclave, preventing credential replay.",
    "type": "source"
  },
  {
    "id": "tm_stride_sub1",
    "label": "Tampering Mitigations",
    "description": "Tampering is mitigated by integrity controls; HMAC-SHA256 ensures data integrity in transit by mixing a shared secret with the message payload.",
    "type": "decision"
  },
  {
    "id": "tm_stride_sub1_l1",
    "label": "Tampering Mitigations Fact 1",
    "description": "Tampering is mitigated by integrity controls.",
    "type": "action"
  },
  {
    "id": "tm_stride_sub1_l2",
    "label": "Tampering Mitigations Fact 2",
    "description": "HMAC-SHA256 ensures data integrity in transit by mixing a shared secret with the message payload.",
    "type": "source"
  },
  {
    "id": "tm_stride_sub2",
    "label": "Repudiation Logs",
    "description": "Repudiation is defeated by non-repudiable audit trails; WORM storage combined with digital signatures over log batches ensures operations cannot be denied.",
    "type": "decision"
  },
  {
    "id": "tm_stride_sub2_l1",
    "label": "Repudiation Logs Fact 1",
    "description": "Repudiation is defeated by non-repudiable audit trails.",
    "type": "action"
  },
  {
    "id": "tm_stride_sub2_l2",
    "label": "Repudiation Logs Fact 2",
    "description": "WORM storage combined with digital signatures over log batches ensures operations cannot be denied.",
    "type": "source"
  },
  {
    "id": "tm_stride_sub3",
    "label": "Info Disclosure",
    "description": "Information disclosure targets data at rest and in transit; TLS 1.3 provides forward secrecy by default using ephemeral Diffie-Hellman key exchanges.",
    "type": "decision"
  },
  {
    "id": "tm_stride_sub3_l1",
    "label": "Info Disclosure Fact 1",
    "description": "Information disclosure targets data at rest and in transit.",
    "type": "action"
  },
  {
    "id": "tm_stride_sub3_l2",
    "label": "Info Disclosure Fact 2",
    "description": "TLS 1.3 provides forward secrecy by default using ephemeral Diffie-Hellman key exchanges.",
    "type": "source"
  },
  {
    "id": "tm_stride_sub4",
    "label": "Elevation of Privilege",
    "description": "Elevation of privilege requires strict authorization boundaries; RBAC assigns roles rather than direct permissions, while ABAC evaluates contextual attributes during runtime.",
    "type": "decision"
  },
  {
    "id": "tm_stride_sub4_l1",
    "label": "Elevation of Privilege Fact 1",
    "description": "Elevation of privilege requires strict authorization boundaries.",
    "type": "action"
  },
  {
    "id": "tm_stride_sub4_l2",
    "label": "Elevation of Privilege Fact 2",
    "description": "RBAC assigns roles rather than direct permissions, while ABAC evaluates contextual attributes during runtime.",
    "type": "source"
  },
  {
    "id": "tm_dread",
    "label": "DREAD Scoring",
    "description": "DREAD quantifies risk by scoring Damage potential, Reproducibility, Exploitability, Affected users, and Discoverability on a 1-10 scale to prioritize remediation.",
    "type": "example"
  },
  {
    "id": "tm_dread_sub0",
    "label": "Damage Potential",
    "description": "Damage potential assesses maximum impact; a full database dump scores higher than a localized XSS impacting a single session.",
    "type": "decision"
  },
  {
    "id": "tm_dread_sub0_l1",
    "label": "Damage Potential Fact 1",
    "description": "Damage potential assesses maximum impact.",
    "type": "action"
  },
  {
    "id": "tm_dread_sub0_l2",
    "label": "Damage Potential Fact 2",
    "description": "a full database dump scores higher than a localized XSS impacting a single session.",
    "type": "source"
  },
  {
    "id": "tm_dread_sub1",
    "label": "Reproducibility",
    "description": "Reproducibility measures exploit reliability; a deterministic buffer overflow scores higher than a race condition requiring exact millisecond timing.",
    "type": "decision"
  },
  {
    "id": "tm_dread_sub1_l1",
    "label": "Reproducibility Fact 1",
    "description": "Reproducibility measures exploit reliability.",
    "type": "action"
  },
  {
    "id": "tm_dread_sub1_l2",
    "label": "Reproducibility Fact 2",
    "description": "a deterministic buffer overflow scores higher than a race condition requiring exact millisecond timing.",
    "type": "source"
  },
  {
    "id": "tm_dread_sub2",
    "label": "Exploitability",
    "description": "Exploitability evaluates attacker skill required; a public Metasploit module lowers the barrier to entry compared to a custom ROP chain.",
    "type": "decision"
  },
  {
    "id": "tm_dread_sub2_l1",
    "label": "Exploitability Fact 1",
    "description": "Exploitability evaluates attacker skill required.",
    "type": "action"
  },
  {
    "id": "tm_dread_sub2_l2",
    "label": "Exploitability Fact 2",
    "description": "a public Metasploit module lowers the barrier to entry compared to a custom ROP chain.",
    "type": "source"
  },
  {
    "id": "tm_dread_sub3",
    "label": "Affected Users",
    "description": "Affected users calculates blast radius; an unauthenticated RCE on a public-facing API scores higher than an authenticated intranet vulnerability.",
    "type": "decision"
  },
  {
    "id": "tm_dread_sub3_l1",
    "label": "Affected Users Fact 1",
    "description": "Affected users calculates blast radius.",
    "type": "action"
  },
  {
    "id": "tm_dread_sub3_l2",
    "label": "Affected Users Fact 2",
    "description": "an unauthenticated RCE on a public-facing API scores higher than an authenticated intranet vulnerability.",
    "type": "source"
  },
  {
    "id": "tm_dread_sub4",
    "label": "Discoverability",
    "description": "Discoverability considers how easily the flaw is found; a verbose error message revealing SQL syntax is highly discoverable compared to a blind timing attack.",
    "type": "decision"
  },
  {
    "id": "tm_dread_sub4_l1",
    "label": "Discoverability Fact 1",
    "description": "Discoverability considers how easily the flaw is found.",
    "type": "action"
  },
  {
    "id": "tm_dread_sub4_l2",
    "label": "Discoverability Fact 2",
    "description": "a verbose error message revealing SQL syntax is highly discoverable compared to a blind timing attack.",
    "type": "source"
  },
  {
    "id": "tm_pasta",
    "label": "PASTA Process",
    "description": "Process for Attack Simulation and Threat Analysis (PASTA) is a 7-stage risk-centric threat modeling methodology aligning technical requirements with business objectives.",
    "type": "example"
  },
  {
    "id": "tm_pasta_sub0",
    "label": "Business Objectives",
    "description": "Stage 1 defines business impact; identifying regulatory requirements like GDPR Article 25 helps prioritize privacy-enhancing architectures.",
    "type": "decision"
  },
  {
    "id": "tm_pasta_sub0_l1",
    "label": "Business Objectives Fact 1",
    "description": "Stage 1 defines business impact.",
    "type": "action"
  },
  {
    "id": "tm_pasta_sub0_l2",
    "label": "Business Objectives Fact 2",
    "description": "identifying regulatory requirements like GDPR Article 25 helps prioritize privacy-enhancing architectures.",
    "type": "source"
  },
  {
    "id": "tm_pasta_sub1",
    "label": "Technical Scope",
    "description": "Stage 2 maps the technical environment; discovering hidden APIs and legacy endpoints prevents unmanaged attack surface exposure.",
    "type": "decision"
  },
  {
    "id": "tm_pasta_sub1_l1",
    "label": "Technical Scope Fact 1",
    "description": "Stage 2 maps the technical environment.",
    "type": "action"
  },
  {
    "id": "tm_pasta_sub1_l2",
    "label": "Technical Scope Fact 2",
    "description": "discovering hidden APIs and legacy endpoints prevents unmanaged attack surface exposure.",
    "type": "source"
  },
  {
    "id": "tm_pasta_sub2",
    "label": "Application Decomposition",
    "description": "Stage 3 creates DFDs and trust boundaries; identifying where data transitions from an untrusted public network to a trusted backend dictates control placement.",
    "type": "decision"
  },
  {
    "id": "tm_pasta_sub2_l1",
    "label": "Application Decomposition Fact 1",
    "description": "Stage 3 creates DFDs and trust boundaries.",
    "type": "action"
  },
  {
    "id": "tm_pasta_sub2_l2",
    "label": "Application Decomposition Fact 2",
    "description": "identifying where data transitions from an untrusted public network to a trusted backend dictates control placement.",
    "type": "source"
  },
  {
    "id": "tm_pasta_sub3",
    "label": "Threat Analysis",
    "description": "Stage 4 correlates threats from intelligence sources; integrating MITRE ATT&CK profiles helps anticipate specific adversary behaviors targeting the sector.",
    "type": "decision"
  },
  {
    "id": "tm_pasta_sub3_l1",
    "label": "Threat Analysis Fact 1",
    "description": "Stage 4 correlates threats from intelligence sources.",
    "type": "action"
  },
  {
    "id": "tm_pasta_sub3_l2",
    "label": "Threat Analysis Fact 2",
    "description": "integrating MITRE ATT&CK profiles helps anticipate specific adversary behaviors targeting the sector.",
    "type": "source"
  },
  {
    "id": "tm_pasta_sub4",
    "label": "Vulnerability Analysis",
    "description": "Stage 5 maps weaknesses to threats; correlating known CVEs and weak configuration states to potential attack vectors.",
    "type": "decision"
  },
  {
    "id": "tm_pasta_sub4_l1",
    "label": "Vulnerability Analysis Fact 1",
    "description": "Stage 5 maps weaknesses to threats.",
    "type": "action"
  },
  {
    "id": "tm_pasta_sub4_l2",
    "label": "Vulnerability Analysis Fact 2",
    "description": "correlating known CVEs and weak configuration states to potential attack vectors.",
    "type": "source"
  },
  {
    "id": "tm_mitre",
    "label": "MITRE ATT&CK",
    "description": "MITRE ATT&CK models adversary tactics (the 'why') and techniques (the 'how'), providing a taxonomy for mapping defensive coverage and detection engineering.",
    "type": "example"
  },
  {
    "id": "tm_mitre_sub0",
    "label": "Initial Access",
    "description": "Initial access techniques bypass the perimeter; spearphishing attachments often use malicious macros or LNK files to execute initial payload droppers.",
    "type": "decision"
  },
  {
    "id": "tm_mitre_sub0_l1",
    "label": "Initial Access Fact 1",
    "description": "Initial access techniques bypass the perimeter.",
    "type": "action"
  },
  {
    "id": "tm_mitre_sub0_l2",
    "label": "Initial Access Fact 2",
    "description": "spearphishing attachments often use malicious macros or LNK files to execute initial payload droppers.",
    "type": "source"
  },
  {
    "id": "tm_mitre_sub1",
    "label": "Credential Access",
    "description": "Credential access aims to steal identities; LSASS memory dumping extracts NTLM hashes or plaintext passwords for lateral movement.",
    "type": "decision"
  },
  {
    "id": "tm_mitre_sub1_l1",
    "label": "Credential Access Fact 1",
    "description": "Credential access aims to steal identities.",
    "type": "action"
  },
  {
    "id": "tm_mitre_sub1_l2",
    "label": "Credential Access Fact 2",
    "description": "LSASS memory dumping extracts NTLM hashes or plaintext passwords for lateral movement.",
    "type": "source"
  },
  {
    "id": "tm_mitre_sub2",
    "label": "Lateral Movement",
    "description": "Lateral movement uses compromised credentials; Pass-the-Hash relies on NTLM hashes to authenticate without the plaintext password over SMB.",
    "type": "decision"
  },
  {
    "id": "tm_mitre_sub2_l1",
    "label": "Lateral Movement Fact 1",
    "description": "Lateral movement uses compromised credentials.",
    "type": "action"
  },
  {
    "id": "tm_mitre_sub2_l2",
    "label": "Lateral Movement Fact 2",
    "description": "Pass-the-Hash relies on NTLM hashes to authenticate without the plaintext password over SMB.",
    "type": "source"
  },
  {
    "id": "tm_mitre_sub3",
    "label": "Defense Evasion",
    "description": "Defense evasion bypasses security controls; process hollowing injects malicious code into a suspended legitimate process to evade EDR hooks.",
    "type": "decision"
  },
  {
    "id": "tm_mitre_sub3_l1",
    "label": "Defense Evasion Fact 1",
    "description": "Defense evasion bypasses security controls.",
    "type": "action"
  },
  {
    "id": "tm_mitre_sub3_l2",
    "label": "Defense Evasion Fact 2",
    "description": "process hollowing injects malicious code into a suspended legitimate process to evade EDR hooks.",
    "type": "source"
  },
  {
    "id": "tm_mitre_sub4",
    "label": "Command and Control",
    "description": "Command and control maintains persistent access; domain fronting hides malicious traffic within legitimate CDN TLS connections.",
    "type": "decision"
  },
  {
    "id": "tm_mitre_sub4_l1",
    "label": "Command and Control Fact 1",
    "description": "Command and control maintains persistent access.",
    "type": "action"
  },
  {
    "id": "tm_mitre_sub4_l2",
    "label": "Command and Control Fact 2",
    "description": "domain fronting hides malicious traffic within legitimate CDN TLS connections.",
    "type": "source"
  },
  {
    "id": "tm_killchain",
    "label": "Cyber Kill Chain",
    "description": "The Lockheed Martin Cyber Kill Chain describes a 7-phase model of an attack: Reconnaissance, Weaponization, Delivery, Exploitation, Installation, C2, and Actions on Objectives.",
    "type": "example"
  },
  {
    "id": "tm_killchain_sub0",
    "label": "Reconnaissance",
    "description": "Reconnaissance gathers intelligence; active scanning with Nmap maps open ports while passive OSINT leverages Shodan for exposed infrastructure.",
    "type": "decision"
  },
  {
    "id": "tm_killchain_sub0_l1",
    "label": "Reconnaissance Fact 1",
    "description": "Reconnaissance gathers intelligence.",
    "type": "action"
  },
  {
    "id": "tm_killchain_sub0_l2",
    "label": "Reconnaissance Fact 2",
    "description": "active scanning with Nmap maps open ports while passive OSINT leverages Shodan for exposed infrastructure.",
    "type": "source"
  },
  {
    "id": "tm_killchain_sub1",
    "label": "Weaponization",
    "description": "Weaponization pairs an exploit with a payload; creating a malicious PDF embedded with shellcode targeting an Acrobat reader vulnerability.",
    "type": "decision"
  },
  {
    "id": "tm_killchain_sub1_l1",
    "label": "Weaponization Fact 1",
    "description": "Weaponization pairs an exploit with a payload.",
    "type": "action"
  },
  {
    "id": "tm_killchain_sub1_l2",
    "label": "Weaponization Fact 2",
    "description": "creating a malicious PDF embedded with shellcode targeting an Acrobat reader vulnerability.",
    "type": "source"
  },
  {
    "id": "tm_killchain_sub2",
    "label": "Delivery & Exploit",
    "description": "Delivery vectors transport the payload; exploitation triggers the vulnerability, such as a buffer overflow hijacking the instruction pointer.",
    "type": "decision"
  },
  {
    "id": "tm_killchain_sub2_l1",
    "label": "Delivery & Exploit Fact 1",
    "description": "Delivery vectors transport the payload.",
    "type": "action"
  },
  {
    "id": "tm_killchain_sub2_l2",
    "label": "Delivery & Exploit Fact 2",
    "description": "exploitation triggers the vulnerability, such as a buffer overflow hijacking the instruction pointer.",
    "type": "source"
  },
  {
    "id": "tm_killchain_sub3",
    "label": "Installation",
    "description": "Installation establishes persistence; modifying registry Run keys or scheduling malicious cron jobs ensures the payload survives reboots.",
    "type": "decision"
  },
  {
    "id": "tm_killchain_sub3_l1",
    "label": "Installation Fact 1",
    "description": "Installation establishes persistence.",
    "type": "action"
  },
  {
    "id": "tm_killchain_sub3_l2",
    "label": "Installation Fact 2",
    "description": "modifying registry Run keys or scheduling malicious cron jobs ensures the payload survives reboots.",
    "type": "source"
  },
  {
    "id": "tm_killchain_sub4",
    "label": "C2 & Actions",
    "description": "C2 channels provide remote control; Actions on Objectives execute the primary goal, like deploying ransomware or exfiltrating data via DNS tunneling.",
    "type": "decision"
  },
  {
    "id": "tm_killchain_sub4_l1",
    "label": "C2 & Actions Fact 1",
    "description": "C2 channels provide remote control.",
    "type": "action"
  },
  {
    "id": "tm_killchain_sub4_l2",
    "label": "C2 & Actions Fact 2",
    "description": "Actions on Objectives execute the primary goal, like deploying ransomware or exfiltrating data via DNS tunneling.",
    "type": "source"
  },
  {
    "id": "tm_blast",
    "label": "Blast Radius",
    "description": "Blast radius estimation quantifies the maximum possible damage of a compromised component, guiding isolation strategies like network segmentation and IAM least privilege.",
    "type": "example"
  },
  {
    "id": "tm_blast_sub0",
    "label": "Asset Criticality",
    "description": "Asset criticality tiers categorize systems by impact; Tier 0 assets like Active Directory Domain Controllers represent total enterprise compromise if breached.",
    "type": "decision"
  },
  {
    "id": "tm_blast_sub0_l1",
    "label": "Asset Criticality Fact 1",
    "description": "Asset criticality tiers categorize systems by impact.",
    "type": "action"
  },
  {
    "id": "tm_blast_sub0_l2",
    "label": "Asset Criticality Fact 2",
    "description": "Tier 0 assets like Active Directory Domain Controllers represent total enterprise compromise if breached.",
    "type": "source"
  },
  {
    "id": "tm_blast_sub1",
    "label": "Network Segmentation",
    "description": "Segmentation limits blast radius; placing payment processing in a dedicated VLAN restricts lateral movement from compromised corporate workstations.",
    "type": "decision"
  },
  {
    "id": "tm_blast_sub1_l1",
    "label": "Network Segmentation Fact 1",
    "description": "Segmentation limits blast radius.",
    "type": "action"
  },
  {
    "id": "tm_blast_sub1_l2",
    "label": "Network Segmentation Fact 2",
    "description": "placing payment processing in a dedicated VLAN restricts lateral movement from compromised corporate workstations.",
    "type": "source"
  },
  {
    "id": "tm_blast_sub2",
    "label": "IAM Isolation",
    "description": "IAM boundary policies restrict escalation; AWS SCPs can explicitly deny IAM user creation, preventing attackers from establishing secondary persistence mechanisms.",
    "type": "decision"
  },
  {
    "id": "tm_blast_sub2_l1",
    "label": "IAM Isolation Fact 1",
    "description": "IAM boundary policies restrict escalation.",
    "type": "action"
  },
  {
    "id": "tm_blast_sub2_l2",
    "label": "IAM Isolation Fact 2",
    "description": "AWS SCPs can explicitly deny IAM user creation, preventing attackers from establishing secondary persistence mechanisms.",
    "type": "source"
  },
  {
    "id": "tm_blast_sub3",
    "label": "Data Partitioning",
    "description": "Data partitioning limits exposure; encrypting different tenant databases with unique KMS keys prevents a single key compromise from exposing all tenant data.",
    "type": "decision"
  },
  {
    "id": "tm_blast_sub3_l1",
    "label": "Data Partitioning Fact 1",
    "description": "Data partitioning limits exposure.",
    "type": "action"
  },
  {
    "id": "tm_blast_sub3_l2",
    "label": "Data Partitioning Fact 2",
    "description": "encrypting different tenant databases with unique KMS keys prevents a single key compromise from exposing all tenant data.",
    "type": "source"
  },
  {
    "id": "tm_blast_sub4",
    "label": "Failure Domains",
    "description": "Failure domains limit cascading impacts; isolating microservices into separate Kubernetes namespaces enforces strict network policies via CNI.",
    "type": "decision"
  },
  {
    "id": "tm_blast_sub4_l1",
    "label": "Failure Domains Fact 1",
    "description": "Failure domains limit cascading impacts.",
    "type": "action"
  },
  {
    "id": "tm_blast_sub4_l2",
    "label": "Failure Domains Fact 2",
    "description": "isolating microservices into separate Kubernetes namespaces enforces strict network policies via CNI.",
    "type": "source"
  },
  {
    "id": "sec_p2",
    "label": "Web App Security",
    "description": "Web application security focuses on mitigating OWASP Top 10 risks; vulnerabilities often stem from unsanitized input, broken access controls, and misconfigured security headers.",
    "type": "concept"
  },
  {
    "id": "app_sqli",
    "label": "SQL Injection",
    "description": "SQL injection exploits unsanitized input concatenated into queries; parameterized queries (prepared statements) bind variables separately from SQL syntax, making injection structurally impossible regardless of input content.",
    "type": "example"
  },
  {
    "id": "app_sqli_sub0",
    "label": "Union Based",
    "description": "Union-based SQLi appends queries; attackers use UNION SELECT to extract data from other tables into the original application response.",
    "type": "decision"
  },
  {
    "id": "app_sqli_sub0_l1",
    "label": "Union Based Fact 1",
    "description": "Union-based SQLi appends queries.",
    "type": "action"
  },
  {
    "id": "app_sqli_sub0_l2",
    "label": "Union Based Fact 2",
    "description": "attackers use UNION SELECT to extract data from other tables into the original application response.",
    "type": "source"
  },
  {
    "id": "app_sqli_sub1",
    "label": "Error Based",
    "description": "Error-based SQLi forces database errors; verbose error messages leak database structure and occasionally data through casting errors.",
    "type": "decision"
  },
  {
    "id": "app_sqli_sub1_l1",
    "label": "Error Based Fact 1",
    "description": "Error-based SQLi forces database errors.",
    "type": "action"
  },
  {
    "id": "app_sqli_sub1_l2",
    "label": "Error Based Fact 2",
    "description": "verbose error messages leak database structure and occasionally data through casting errors.",
    "type": "source"
  },
  {
    "id": "app_sqli_sub2",
    "label": "Blind Boolean",
    "description": "Boolean-based blind SQLi infers data letter by letter; injecting conditional statements and observing response differences (e.g., HTTP 200 vs 404).",
    "type": "decision"
  },
  {
    "id": "app_sqli_sub2_l1",
    "label": "Blind Boolean Fact 1",
    "description": "Boolean-based blind SQLi infers data letter by letter.",
    "type": "action"
  },
  {
    "id": "app_sqli_sub2_l2",
    "label": "Blind Boolean Fact 2",
    "description": "injecting conditional statements and observing response differences (e.g., HTTP 200 vs 404).",
    "type": "source"
  },
  {
    "id": "app_sqli_sub3",
    "label": "Blind Time",
    "description": "Time-based blind SQLi uses delays; functions like pg_sleep() or WAITFOR DELAY verify syntax execution when responses do not visibly change.",
    "type": "decision"
  },
  {
    "id": "app_sqli_sub3_l1",
    "label": "Blind Time Fact 1",
    "description": "Time-based blind SQLi uses delays.",
    "type": "action"
  },
  {
    "id": "app_sqli_sub3_l2",
    "label": "Blind Time Fact 2",
    "description": "functions like pg_sleep() or WAITFOR DELAY verify syntax execution when responses do not visibly change.",
    "type": "source"
  },
  {
    "id": "app_sqli_sub4",
    "label": "Parameterized Defense",
    "description": "Prepared statements pre-compile the SQL template; user input is treated strictly as data parameters, neutralizing any injected SQL metacharacters.",
    "type": "decision"
  },
  {
    "id": "app_sqli_sub4_l1",
    "label": "Parameterized Defense Fact 1",
    "description": "Prepared statements pre-compile the SQL template.",
    "type": "action"
  },
  {
    "id": "app_sqli_sub4_l2",
    "label": "Parameterized Defense Fact 2",
    "description": "user input is treated strictly as data parameters, neutralizing any injected SQL metacharacters.",
    "type": "source"
  },
  {
    "id": "app_xss",
    "label": "Cross-Site Scripting",
    "description": "XSS allows attackers to execute arbitrary JavaScript in the victim's browser; modern mitigation relies on Content Security Policy (CSP) script-src nonce or strict-dynamic.",
    "type": "example"
  },
  {
    "id": "app_xss_sub0",
    "label": "Stored XSS",
    "description": "Stored XSS saves the payload in the database; it executes whenever a victim views the affected record, making it highly impactful for privilege escalation.",
    "type": "decision"
  },
  {
    "id": "app_xss_sub0_l1",
    "label": "Stored XSS Fact 1",
    "description": "Stored XSS saves the payload in the database.",
    "type": "action"
  },
  {
    "id": "app_xss_sub0_l2",
    "label": "Stored XSS Fact 2",
    "description": "it executes whenever a victim views the affected record, making it highly impactful for privilege escalation.",
    "type": "source"
  },
  {
    "id": "app_xss_sub1",
    "label": "Reflected XSS",
    "description": "Reflected XSS bounces the payload off the web server; it requires social engineering to trick a user into clicking a specially crafted malicious link.",
    "type": "decision"
  },
  {
    "id": "app_xss_sub1_l1",
    "label": "Reflected XSS Fact 1",
    "description": "Reflected XSS bounces the payload off the web server.",
    "type": "action"
  },
  {
    "id": "app_xss_sub1_l2",
    "label": "Reflected XSS Fact 2",
    "description": "it requires social engineering to trick a user into clicking a specially crafted malicious link.",
    "type": "source"
  },
  {
    "id": "app_xss_sub2",
    "label": "DOM XSS",
    "description": "DOM-based XSS executes entirely client-side; source payloads flow into dangerous sinks like innerHTML or eval() without server interaction.",
    "type": "decision"
  },
  {
    "id": "app_xss_sub2_l1",
    "label": "DOM XSS Fact 1",
    "description": "DOM-based XSS executes entirely client-side.",
    "type": "action"
  },
  {
    "id": "app_xss_sub2_l2",
    "label": "DOM XSS Fact 2",
    "description": "source payloads flow into dangerous sinks like innerHTML or eval() without server interaction.",
    "type": "source"
  },
  {
    "id": "app_xss_sub3",
    "label": "CSP Defense",
    "description": "CSP restricts resource loading; a strict CSP using script-src with a cryptographic nonce prevents the execution of inline scripts and unauthorized external files.",
    "type": "decision"
  },
  {
    "id": "app_xss_sub3_l1",
    "label": "CSP Defense Fact 1",
    "description": "CSP restricts resource loading.",
    "type": "action"
  },
  {
    "id": "app_xss_sub3_l2",
    "label": "CSP Defense Fact 2",
    "description": "a strict CSP using script-src with a cryptographic nonce prevents the execution of inline scripts and unauthorized external files.",
    "type": "source"
  },
  {
    "id": "app_xss_sub4",
    "label": "Contextual Encoding",
    "description": "Context-aware output encoding sanitizes characters; encoding < as &lt; for HTML body differs from encoding required within a JavaScript string context.",
    "type": "decision"
  },
  {
    "id": "app_xss_sub4_l1",
    "label": "Contextual Encoding Fact 1",
    "description": "Context-aware output encoding sanitizes characters.",
    "type": "action"
  },
  {
    "id": "app_xss_sub4_l2",
    "label": "Contextual Encoding Fact 2",
    "description": "encoding < as &lt.",
    "type": "source"
  },
  {
    "id": "app_ssrf",
    "label": "SSRF",
    "description": "Server-Side Request Forgery tricks a server into making HTTP requests to internal resources; defenses mandate strict allowlists and blocking RFC1918 private IP ranges.",
    "type": "example"
  },
  {
    "id": "app_ssrf_sub0",
    "label": "Internal Port Scan",
    "description": "SSRF can port scan internal networks; observing response times or HTTP status codes reveals internal services running behind the firewall.",
    "type": "decision"
  },
  {
    "id": "app_ssrf_sub0_l1",
    "label": "Internal Port Scan Fact 1",
    "description": "SSRF can port scan internal networks.",
    "type": "action"
  },
  {
    "id": "app_ssrf_sub0_l2",
    "label": "Internal Port Scan Fact 2",
    "description": "observing response times or HTTP status codes reveals internal services running behind the firewall.",
    "type": "source"
  },
  {
    "id": "app_ssrf_sub1",
    "label": "Cloud Metadata",
    "description": "Cloud environments are vulnerable via metadata services; attackers request http://169.254.169.254/ to extract temporary IAM credentials in AWS.",
    "type": "decision"
  },
  {
    "id": "app_ssrf_sub1_l1",
    "label": "Cloud Metadata Fact 1",
    "description": "Cloud environments are vulnerable via metadata services.",
    "type": "action"
  },
  {
    "id": "app_ssrf_sub1_l2",
    "label": "Cloud Metadata Fact 2",
    "description": "attackers request http://169.254.169.254/ to extract temporary IAM credentials in AWS.",
    "type": "source"
  },
  {
    "id": "app_ssrf_sub2",
    "label": "Blind SSRF",
    "description": "Blind SSRF provides no direct response; attackers use out-of-band (OOB) techniques like DNS lookups to custom domains to verify execution.",
    "type": "decision"
  },
  {
    "id": "app_ssrf_sub2_l1",
    "label": "Blind SSRF Fact 1",
    "description": "Blind SSRF provides no direct response.",
    "type": "action"
  },
  {
    "id": "app_ssrf_sub2_l2",
    "label": "Blind SSRF Fact 2",
    "description": "attackers use out-of-band (OOB) techniques like DNS lookups to custom domains to verify execution.",
    "type": "source"
  },
  {
    "id": "app_ssrf_sub3",
    "label": "Defense Allowlists",
    "description": "Allowlists validate the target URL; strictly validating the hostname against a known-good list prevents requests to arbitrary or internal domains.",
    "type": "decision"
  },
  {
    "id": "app_ssrf_sub3_l1",
    "label": "Defense Allowlists Fact 1",
    "description": "Allowlists validate the target URL.",
    "type": "action"
  },
  {
    "id": "app_ssrf_sub3_l2",
    "label": "Defense Allowlists Fact 2",
    "description": "strictly validating the hostname against a known-good list prevents requests to arbitrary or internal domains.",
    "type": "source"
  },
  {
    "id": "app_ssrf_sub4",
    "label": "Defense IMDSv2",
    "description": "AWS IMDSv2 mitigates SSRF; it requires a PUT request to obtain a session token before accessing metadata, which most SSRF vulnerabilities cannot perform.",
    "type": "decision"
  },
  {
    "id": "app_ssrf_sub4_l1",
    "label": "Defense IMDSv2 Fact 1",
    "description": "AWS IMDSv2 mitigates SSRF.",
    "type": "action"
  },
  {
    "id": "app_ssrf_sub4_l2",
    "label": "Defense IMDSv2 Fact 2",
    "description": "it requires a PUT request to obtain a session token before accessing metadata, which most SSRF vulnerabilities cannot perform.",
    "type": "source"
  },
  {
    "id": "app_idor",
    "label": "IDOR & Access Control",
    "description": "Insecure Direct Object Reference occurs when access controls aren't verified on object identifiers; using UUIDs instead of sequential IDs mitigates enumeration, but strict ownership checks remain mandatory.",
    "type": "example"
  },
  {
    "id": "app_idor_sub0",
    "label": "Sequential IDs",
    "description": "Sequential integer IDs enable easy enumeration; an attacker accessing /api/user/100 can trivially guess /api/user/101 to access other records.",
    "type": "decision"
  },
  {
    "id": "app_idor_sub0_l1",
    "label": "Sequential IDs Fact 1",
    "description": "Sequential integer IDs enable easy enumeration.",
    "type": "action"
  },
  {
    "id": "app_idor_sub0_l2",
    "label": "Sequential IDs Fact 2",
    "description": "an attacker accessing /api/user/100 can trivially guess /api/user/101 to access other records.",
    "type": "source"
  },
  {
    "id": "app_idor_sub1",
    "label": "UUIDv4 Mitigation",
    "description": "UUIDv4 provides 122 bits of randomness; the vast address space makes guessing valid identifiers statistically impossible, preventing simple enumeration.",
    "type": "decision"
  },
  {
    "id": "app_idor_sub1_l1",
    "label": "UUIDv4 Mitigation Fact 1",
    "description": "UUIDv4 provides 122 bits of randomness.",
    "type": "action"
  },
  {
    "id": "app_idor_sub1_l2",
    "label": "UUIDv4 Mitigation Fact 2",
    "description": "the vast address space makes guessing valid identifiers statistically impossible, preventing simple enumeration.",
    "type": "source"
  },
  {
    "id": "app_idor_sub2",
    "label": "Missing AuthZ",
    "description": "Even with UUIDs, missing authorization checks allow access; the backend must explicitly verify the authenticated user has permission to view the requested UUID.",
    "type": "decision"
  },
  {
    "id": "app_idor_sub2_l1",
    "label": "Missing AuthZ Fact 1",
    "description": "Even with UUIDs, missing authorization checks allow access.",
    "type": "action"
  },
  {
    "id": "app_idor_sub2_l2",
    "label": "Missing AuthZ Fact 2",
    "description": "the backend must explicitly verify the authenticated user has permission to view the requested UUID.",
    "type": "source"
  },
  {
    "id": "app_idor_sub3",
    "label": "Privilege Escalation",
    "description": "Vertical privilege escalation bypasses role checks; modifying a request parameter from role=user to role=admin exploits missing server-side enforcement.",
    "type": "decision"
  },
  {
    "id": "app_idor_sub3_l1",
    "label": "Privilege Escalation Fact 1",
    "description": "Vertical privilege escalation bypasses role checks.",
    "type": "action"
  },
  {
    "id": "app_idor_sub3_l2",
    "label": "Privilege Escalation Fact 2",
    "description": "modifying a request parameter from role=user to role=admin exploits missing server-side enforcement.",
    "type": "source"
  },
  {
    "id": "app_idor_sub4",
    "label": "JWT Algorithm Attack",
    "description": "JWT alg:none attacks bypass signature verification; libraries must explicitly restrict accepted algorithms and reject tokens lacking a cryptographic signature.",
    "type": "decision"
  },
  {
    "id": "app_idor_sub4_l1",
    "label": "JWT Algorithm Attack Fact 1",
    "description": "JWT alg:none attacks bypass signature verification.",
    "type": "action"
  },
  {
    "id": "app_idor_sub4_l2",
    "label": "JWT Algorithm Attack Fact 2",
    "description": "libraries must explicitly restrict accepted algorithms and reject tokens lacking a cryptographic signature.",
    "type": "source"
  },
  {
    "id": "app_xxe",
    "label": "XXE & Deserialization",
    "description": "XML External Entity attacks exploit parsers evaluating external entities; mitigation requires completely disabling external entity and DTD processing in the XML parser configuration.",
    "type": "example"
  },
  {
    "id": "app_xxe_sub0",
    "label": "File Disclosure",
    "description": "XXE can read local files; defining an entity pointing to file:///etc/passwd allows extracting sensitive system files through the XML response.",
    "type": "decision"
  },
  {
    "id": "app_xxe_sub0_l1",
    "label": "File Disclosure Fact 1",
    "description": "XXE can read local files.",
    "type": "action"
  },
  {
    "id": "app_xxe_sub0_l2",
    "label": "File Disclosure Fact 2",
    "description": "defining an entity pointing to file:///etc/passwd allows extracting sensitive system files through the XML response.",
    "type": "source"
  },
  {
    "id": "app_xxe_sub1",
    "label": "OOB XXE",
    "description": "Out-of-band XXE exfiltrates data via external requests; parameter entities can construct URLs containing file contents and send them to attacker-controlled servers.",
    "type": "decision"
  },
  {
    "id": "app_xxe_sub1_l1",
    "label": "OOB XXE Fact 1",
    "description": "Out-of-band XXE exfiltrates data via external requests.",
    "type": "action"
  },
  {
    "id": "app_xxe_sub1_l2",
    "label": "OOB XXE Fact 2",
    "description": "parameter entities can construct URLs containing file contents and send them to attacker-controlled servers.",
    "type": "source"
  },
  {
    "id": "app_xxe_sub2",
    "label": "SSTI",
    "description": "Server-Side Template Injection executes arbitrary code; injecting Jinja2 payloads like {{ config.__class__.__init__.__globals__ }} escapes the template sandbox to achieve RCE.",
    "type": "decision"
  },
  {
    "id": "app_xxe_sub2_l1",
    "label": "SSTI Fact 1",
    "description": "Server-Side Template Injection executes arbitrary code.",
    "type": "action"
  },
  {
    "id": "app_xxe_sub2_l2",
    "label": "SSTI Fact 2",
    "description": "injecting Jinja2 payloads like {{ config.__class__.__init__.__globals__ }} escapes the template sandbox to achieve RCE.",
    "type": "source"
  },
  {
    "id": "app_xxe_sub3",
    "label": "Insecure Deserialization",
    "description": "Insecure deserialization instantiates untrusted objects; Java deserialization flaws allow executing arbitrary gadget chains present in the application classpath.",
    "type": "decision"
  },
  {
    "id": "app_xxe_sub3_l1",
    "label": "Insecure Deserialization Fact 1",
    "description": "Insecure deserialization instantiates untrusted objects.",
    "type": "action"
  },
  {
    "id": "app_xxe_sub3_l2",
    "label": "Insecure Deserialization Fact 2",
    "description": "Java deserialization flaws allow executing arbitrary gadget chains present in the application classpath.",
    "type": "source"
  },
  {
    "id": "app_xxe_sub4",
    "label": "Parser Hardening",
    "description": "Parser hardening prevents XXE; disabling DOCTYPE declarations in libraries like libxml2 fundamentally blocks the vulnerability vector.",
    "type": "decision"
  },
  {
    "id": "app_xxe_sub4_l1",
    "label": "Parser Hardening Fact 1",
    "description": "Parser hardening prevents XXE.",
    "type": "action"
  },
  {
    "id": "app_xxe_sub4_l2",
    "label": "Parser Hardening Fact 2",
    "description": "disabling DOCTYPE declarations in libraries like libxml2 fundamentally blocks the vulnerability vector.",
    "type": "source"
  },
  {
    "id": "app_headers",
    "label": "Security Headers & CSRF",
    "description": "HTTP security headers provide defense-in-depth; CSRF is mitigated by SameSite=Strict cookies and anti-CSRF double-submit tokens to ensure request intentionality.",
    "type": "example"
  },
  {
    "id": "app_headers_sub0",
    "label": "CORS Misconfig",
    "description": "CORS misconfiguration with a wildcard (*) origin and allow-credentials true exposes sensitive authenticated data to any requesting domain.",
    "type": "decision"
  },
  {
    "id": "app_headers_sub0_l1",
    "label": "CORS Misconfig Fact 1",
    "description": "CORS misconfiguration with a wildcard (*) origin and allow-credentials true exposes sensitive authenticated data to any requesting domain.",
    "type": "action"
  },
  {
    "id": "app_headers_sub0_l2",
    "label": "CORS Misconfig Fact 2",
    "description": "CORS Misconfig requires explicit cryptographic or logical separation enforcement.",
    "type": "source"
  },
  {
    "id": "app_headers_sub1",
    "label": "Clickjacking",
    "description": "Clickjacking overlays invisible frames over malicious buttons; mitigated by X-Frame-Options DENY or modern CSP frame-ancestors 'none'.",
    "type": "decision"
  },
  {
    "id": "app_headers_sub1_l1",
    "label": "Clickjacking Fact 1",
    "description": "Clickjacking overlays invisible frames over malicious buttons.",
    "type": "action"
  },
  {
    "id": "app_headers_sub1_l2",
    "label": "Clickjacking Fact 2",
    "description": "mitigated by X-Frame-Options DENY or modern CSP frame-ancestors 'none'.",
    "type": "source"
  },
  {
    "id": "app_headers_sub2",
    "label": "HSTS",
    "description": "HTTP Strict Transport Security (HSTS) enforces HTTPS; setting max-age and includeSubDomains prevents SSL stripping and man-in-the-middle downgrade attacks.",
    "type": "decision"
  },
  {
    "id": "app_headers_sub2_l1",
    "label": "HSTS Fact 1",
    "description": "HTTP Strict Transport Security (HSTS) enforces HTTPS.",
    "type": "action"
  },
  {
    "id": "app_headers_sub2_l2",
    "label": "HSTS Fact 2",
    "description": "setting max-age and includeSubDomains prevents SSL stripping and man-in-the-middle downgrade attacks.",
    "type": "source"
  },
  {
    "id": "app_headers_sub3",
    "label": "CSRF Tokens",
    "description": "Anti-CSRF tokens validate request origin; the synchronizer token pattern requires the client to submit a unique, cryptographically strong token tied to the session.",
    "type": "decision"
  },
  {
    "id": "app_headers_sub3_l1",
    "label": "CSRF Tokens Fact 1",
    "description": "Anti-CSRF tokens validate request origin.",
    "type": "action"
  },
  {
    "id": "app_headers_sub3_l2",
    "label": "CSRF Tokens Fact 2",
    "description": "the synchronizer token pattern requires the client to submit a unique, cryptographically strong token tied to the session.",
    "type": "source"
  },
  {
    "id": "app_headers_sub4",
    "label": "SameSite Cookies",
    "description": "SameSite=Strict cookie attribute prevents the browser from sending cookies in cross-site requests, effectively neutralizing CSRF without additional token infrastructure.",
    "type": "decision"
  },
  {
    "id": "app_headers_sub4_l1",
    "label": "SameSite Cookies Fact 1",
    "description": "SameSite=Strict cookie attribute prevents the browser from sending cookies in cross-site requests, effectively neutralizing CSRF without additional token infrastructure.",
    "type": "action"
  },
  {
    "id": "app_headers_sub4_l2",
    "label": "SameSite Cookies Fact 2",
    "description": "SameSite Cookies requires explicit cryptographic or logical separation enforcement.",
    "type": "source"
  },
  {
    "id": "sec_p3",
    "label": "Network Security",
    "description": "Network security relies on strong cryptographic protocols, segmentation, and continuous monitoring to protect data in transit and isolate critical infrastructure segments.",
    "type": "concept"
  },
  {
    "id": "net_tls",
    "label": "TLS 1.3 & PKI",
    "description": "TLS 1.3 removes RSA key exchange entirely, mandating ephemeral (EC)DHE for all handshakes, achieving forward secrecy by default; the client sends key_share in the first ClientHello, enabling 1-RTT handshakes.",
    "type": "example"
  },
  {
    "id": "net_tls_sub0",
    "label": "1-RTT Handshake",
    "description": "The 1-RTT handshake reduces latency; the client aggressively guesses the key exchange algorithm and includes the key_share in the ClientHello.",
    "type": "decision"
  },
  {
    "id": "net_tls_sub0_l1",
    "label": "1-RTT Handshake Fact 1",
    "description": "The 1-RTT handshake reduces latency.",
    "type": "action"
  },
  {
    "id": "net_tls_sub0_l2",
    "label": "1-RTT Handshake Fact 2",
    "description": "the client aggressively guesses the key exchange algorithm and includes the key_share in the ClientHello.",
    "type": "source"
  },
  {
    "id": "net_tls_sub1",
    "label": "0-RTT Resumption",
    "description": "0-RTT allows immediate data transmission for resumed sessions; however, early data is susceptible to replay attacks without strict server-side mitigations.",
    "type": "decision"
  },
  {
    "id": "net_tls_sub1_l1",
    "label": "0-RTT Resumption Fact 1",
    "description": "0-RTT allows immediate data transmission for resumed sessions.",
    "type": "action"
  },
  {
    "id": "net_tls_sub1_l2",
    "label": "0-RTT Resumption Fact 2",
    "description": "however, early data is susceptible to replay attacks without strict server-side mitigations.",
    "type": "source"
  },
  {
    "id": "net_tls_sub2",
    "label": "Certificate Chain",
    "description": "Validation verifies the certificate chain; the leaf certificate is signed by an intermediate CA, which chains up to a root CA trusted in the local trust store.",
    "type": "decision"
  },
  {
    "id": "net_tls_sub2_l1",
    "label": "Certificate Chain Fact 1",
    "description": "Validation verifies the certificate chain.",
    "type": "action"
  },
  {
    "id": "net_tls_sub2_l2",
    "label": "Certificate Chain Fact 2",
    "description": "the leaf certificate is signed by an intermediate CA, which chains up to a root CA trusted in the local trust store.",
    "type": "source"
  },
  {
    "id": "net_tls_sub3",
    "label": "OCSP Stapling",
    "description": "OCSP stapling improves privacy and performance; the server pre-fetches the revocation status and provides it during the handshake, eliminating a client round-trip to the CA.",
    "type": "decision"
  },
  {
    "id": "net_tls_sub3_l1",
    "label": "OCSP Stapling Fact 1",
    "description": "OCSP stapling improves privacy and performance.",
    "type": "action"
  },
  {
    "id": "net_tls_sub3_l2",
    "label": "OCSP Stapling Fact 2",
    "description": "the server pre-fetches the revocation status and provides it during the handshake, eliminating a client round-trip to the CA.",
    "type": "source"
  },
  {
    "id": "net_tls_sub4",
    "label": "mTLS",
    "description": "Mutual TLS (mTLS) authenticates both parties; the server requests a client certificate, ensuring only authorized devices or services can establish a connection.",
    "type": "decision"
  },
  {
    "id": "net_tls_sub4_l1",
    "label": "mTLS Fact 1",
    "description": "Mutual TLS (mTLS) authenticates both parties.",
    "type": "action"
  },
  {
    "id": "net_tls_sub4_l2",
    "label": "mTLS Fact 2",
    "description": "the server requests a client certificate, ensuring only authorized devices or services can establish a connection.",
    "type": "source"
  },
  {
    "id": "net_fw",
    "label": "Firewalls & IDS",
    "description": "Stateful firewalls maintain a connection tracking table to correlate incoming packets with established sessions, while Intrusion Detection Systems (IDS) rely on signature and anomaly detection.",
    "type": "example"
  },
  {
    "id": "net_fw_sub0",
    "label": "Stateful Tracking",
    "description": "Stateful inspection tracks TCP sequence numbers and connection states; it automatically allows return traffic for established outbound connections without explicit rules.",
    "type": "decision"
  },
  {
    "id": "net_fw_sub0_l1",
    "label": "Stateful Tracking Fact 1",
    "description": "Stateful inspection tracks TCP sequence numbers and connection states.",
    "type": "action"
  },
  {
    "id": "net_fw_sub0_l2",
    "label": "Stateful Tracking Fact 2",
    "description": "it automatically allows return traffic for established outbound connections without explicit rules.",
    "type": "source"
  },
  {
    "id": "net_fw_sub1",
    "label": "Next-Gen Firewalls",
    "description": "NGFWs perform deep packet inspection; application-layer awareness allows blocking specific layer 7 behaviors rather than just TCP/UDP ports.",
    "type": "decision"
  },
  {
    "id": "net_fw_sub1_l1",
    "label": "Next-Gen Firewalls Fact 1",
    "description": "NGFWs perform deep packet inspection.",
    "type": "action"
  },
  {
    "id": "net_fw_sub1_l2",
    "label": "Next-Gen Firewalls Fact 2",
    "description": "application-layer awareness allows blocking specific layer 7 behaviors rather than just TCP/UDP ports.",
    "type": "source"
  },
  {
    "id": "net_fw_sub2",
    "label": "Snort Signatures",
    "description": "Snort rules define traffic patterns; a header like 'alert tcp $EXTERNAL_NET any -> $HTTP_SERVERS $HTTP_PORTS' targets specific protocols and directions.",
    "type": "decision"
  },
  {
    "id": "net_fw_sub2_l1",
    "label": "Snort Signatures Fact 1",
    "description": "Snort rules define traffic patterns.",
    "type": "action"
  },
  {
    "id": "net_fw_sub2_l2",
    "label": "Snort Signatures Fact 2",
    "description": "a header like 'alert tcp $EXTERNAL_NET any -> $HTTP_SERVERS $HTTP_PORTS' targets specific protocols and directions.",
    "type": "source"
  },
  {
    "id": "net_fw_sub3",
    "label": "Anomaly Detection",
    "description": "Anomaly-based IDS establishes baselines; statistical deviations, such as a sudden spike in DNS TXT queries, flag potential command and control exfiltration.",
    "type": "decision"
  },
  {
    "id": "net_fw_sub3_l1",
    "label": "Anomaly Detection Fact 1",
    "description": "Anomaly-based IDS establishes baselines.",
    "type": "action"
  },
  {
    "id": "net_fw_sub3_l2",
    "label": "Anomaly Detection Fact 2",
    "description": "statistical deviations, such as a sudden spike in DNS TXT queries, flag potential command and control exfiltration.",
    "type": "source"
  },
  {
    "id": "net_fw_sub4",
    "label": "Evasion Techniques",
    "description": "Attackers evade IDS through fragmentation; splitting payloads across multiple overlapping IP fragments can confuse simplistic signature matching engines.",
    "type": "decision"
  },
  {
    "id": "net_fw_sub4_l1",
    "label": "Evasion Techniques Fact 1",
    "description": "Attackers evade IDS through fragmentation.",
    "type": "action"
  },
  {
    "id": "net_fw_sub4_l2",
    "label": "Evasion Techniques Fact 2",
    "description": "splitting payloads across multiple overlapping IP fragments can confuse simplistic signature matching engines.",
    "type": "source"
  },
  {
    "id": "net_bgp",
    "label": "Routing & L2 Attacks",
    "description": "BGP hijack prefix hijacking redirects traffic globally; RPKI cryptographic validation secures routing updates, while L2 defenses like DAI mitigate local ARP spoofing.",
    "type": "example"
  },
  {
    "id": "net_bgp_sub0",
    "label": "BGP Hijacking",
    "description": "BGP hijacking exploits trust; an AS announces a more specific prefix for a target IP block, causing global routers to redirect traffic to the attacker.",
    "type": "decision"
  },
  {
    "id": "net_bgp_sub0_l1",
    "label": "BGP Hijacking Fact 1",
    "description": "BGP hijacking exploits trust.",
    "type": "action"
  },
  {
    "id": "net_bgp_sub0_l2",
    "label": "BGP Hijacking Fact 2",
    "description": "an AS announces a more specific prefix for a target IP block, causing global routers to redirect traffic to the attacker.",
    "type": "source"
  },
  {
    "id": "net_bgp_sub1",
    "label": "RPKI Validation",
    "description": "Resource Public Key Infrastructure (RPKI) issues Route Origin Authorizations (ROAs); routers cryptographically verify that an AS is authorized to announce a specific prefix.",
    "type": "decision"
  },
  {
    "id": "net_bgp_sub1_l1",
    "label": "RPKI Validation Fact 1",
    "description": "Resource Public Key Infrastructure (RPKI) issues Route Origin Authorizations (ROAs).",
    "type": "action"
  },
  {
    "id": "net_bgp_sub1_l2",
    "label": "RPKI Validation Fact 2",
    "description": "routers cryptographically verify that an AS is authorized to announce a specific prefix.",
    "type": "source"
  },
  {
    "id": "net_bgp_sub2",
    "label": "ARP Spoofing",
    "description": "ARP spoofing poisons local caches; attackers broadcast gratuitous ARP replies linking their MAC address to the default gateway's IP, intercepting subnet traffic.",
    "type": "decision"
  },
  {
    "id": "net_bgp_sub2_l1",
    "label": "ARP Spoofing Fact 1",
    "description": "ARP spoofing poisons local caches.",
    "type": "action"
  },
  {
    "id": "net_bgp_sub2_l2",
    "label": "ARP Spoofing Fact 2",
    "description": "attackers broadcast gratuitous ARP replies linking their MAC address to the default gateway's IP, intercepting subnet traffic.",
    "type": "source"
  },
  {
    "id": "net_bgp_sub3",
    "label": "DAI Mitigation",
    "description": "Dynamic ARP Inspection (DAI) relies on DHCP snooping bindings; switches drop ARP packets with invalid IP-to-MAC mappings, preventing spoofing.",
    "type": "decision"
  },
  {
    "id": "net_bgp_sub3_l1",
    "label": "DAI Mitigation Fact 1",
    "description": "Dynamic ARP Inspection (DAI) relies on DHCP snooping bindings.",
    "type": "action"
  },
  {
    "id": "net_bgp_sub3_l2",
    "label": "DAI Mitigation Fact 2",
    "description": "switches drop ARP packets with invalid IP-to-MAC mappings, preventing spoofing.",
    "type": "source"
  },
  {
    "id": "net_bgp_sub4",
    "label": "VLAN Hopping",
    "description": "VLAN hopping exploits trunking protocols; double-tagging 802.1Q frames allows attackers to inject unidirectional traffic into restricted VLANs.",
    "type": "decision"
  },
  {
    "id": "net_bgp_sub4_l1",
    "label": "VLAN Hopping Fact 1",
    "description": "VLAN hopping exploits trunking protocols.",
    "type": "action"
  },
  {
    "id": "net_bgp_sub4_l2",
    "label": "VLAN Hopping Fact 2",
    "description": "double-tagging 802.1Q frames allows attackers to inject unidirectional traffic into restricted VLANs.",
    "type": "source"
  },
  {
    "id": "net_vpn",
    "label": "VPNs & WireGuard",
    "description": "Modern VPNs favor minimal attack surfaces; WireGuard uses the Noise_IK handshake pattern with ChaCha20-Poly1305, operating in kernel space for high throughput and reduced complexity.",
    "type": "example"
  },
  {
    "id": "net_vpn_sub0",
    "label": "WireGuard Noise_IK",
    "description": "The Noise_IK pattern provides 1-RTT authenticated key exchange; static public keys are known in advance, ensuring immediate cryptographic verification.",
    "type": "decision"
  },
  {
    "id": "net_vpn_sub0_l1",
    "label": "WireGuard Noise_IK Fact 1",
    "description": "The Noise_IK pattern provides 1-RTT authenticated key exchange.",
    "type": "action"
  },
  {
    "id": "net_vpn_sub0_l2",
    "label": "WireGuard Noise_IK Fact 2",
    "description": "static public keys are known in advance, ensuring immediate cryptographic verification.",
    "type": "source"
  },
  {
    "id": "net_vpn_sub1",
    "label": "ChaCha20-Poly1305",
    "description": "WireGuard mandates ChaCha20-Poly1305 AEAD; it is faster in software than AES without hardware acceleration and highly resistant to timing attacks.",
    "type": "decision"
  },
  {
    "id": "net_vpn_sub1_l1",
    "label": "ChaCha20-Poly1305 Fact 1",
    "description": "WireGuard mandates ChaCha20-Poly1305 AEAD.",
    "type": "action"
  },
  {
    "id": "net_vpn_sub1_l2",
    "label": "ChaCha20-Poly1305 Fact 2",
    "description": "it is faster in software than AES without hardware acceleration and highly resistant to timing attacks.",
    "type": "source"
  },
  {
    "id": "net_vpn_sub2",
    "label": "Cryptokey Routing",
    "description": "WireGuard implements cryptokey routing; each network interface associates public keys with specific allowed IPs, inherently enforcing network ACLs at the cryptographic layer.",
    "type": "decision"
  },
  {
    "id": "net_vpn_sub2_l1",
    "label": "Cryptokey Routing Fact 1",
    "description": "WireGuard implements cryptokey routing.",
    "type": "action"
  },
  {
    "id": "net_vpn_sub2_l2",
    "label": "Cryptokey Routing Fact 2",
    "description": "each network interface associates public keys with specific allowed IPs, inherently enforcing network ACLs at the cryptographic layer.",
    "type": "source"
  },
  {
    "id": "net_vpn_sub3",
    "label": "IPsec IKEv2",
    "description": "IPsec IKEv2 establishes SAs; Phase 1 creates a secure tunnel for management, while Phase 2 negotiates specific ESP parameters for the data payload.",
    "type": "decision"
  },
  {
    "id": "net_vpn_sub3_l1",
    "label": "IPsec IKEv2 Fact 1",
    "description": "IPsec IKEv2 establishes SAs.",
    "type": "action"
  },
  {
    "id": "net_vpn_sub3_l2",
    "label": "IPsec IKEv2 Fact 2",
    "description": "Phase 1 creates a secure tunnel for management, while Phase 2 negotiates specific ESP parameters for the data payload.",
    "type": "source"
  },
  {
    "id": "net_vpn_sub4",
    "label": "Perfect Forward Secrecy",
    "description": "PFS ensures past traffic remains secure; using ephemeral Diffie-Hellman groups during key negotiation prevents decryption if long-term static keys are compromised.",
    "type": "decision"
  },
  {
    "id": "net_vpn_sub4_l1",
    "label": "Perfect Forward Secrecy Fact 1",
    "description": "PFS ensures past traffic remains secure.",
    "type": "action"
  },
  {
    "id": "net_vpn_sub4_l2",
    "label": "Perfect Forward Secrecy Fact 2",
    "description": "using ephemeral Diffie-Hellman groups during key negotiation prevents decryption if long-term static keys are compromised.",
    "type": "source"
  },
  {
    "id": "net_seg",
    "label": "Segmentation & Zero Trust",
    "description": "Zero Trust Architecture eliminates implicit trust based on network location; continuous verification of identity and context governs access to strictly segmented micro-perimeters.",
    "type": "example"
  },
  {
    "id": "net_seg_sub0",
    "label": "Microsegmentation",
    "description": "Microsegmentation isolates workloads; applying fine-grained policies down to the host or container level severely restricts lateral movement post-compromise.",
    "type": "decision"
  },
  {
    "id": "net_seg_sub0_l1",
    "label": "Microsegmentation Fact 1",
    "description": "Microsegmentation isolates workloads.",
    "type": "action"
  },
  {
    "id": "net_seg_sub0_l2",
    "label": "Microsegmentation Fact 2",
    "description": "applying fine-grained policies down to the host or container level severely restricts lateral movement post-compromise.",
    "type": "source"
  },
  {
    "id": "net_seg_sub1",
    "label": "Contextual Access",
    "description": "Context-aware proxies evaluate posture; device health, location, and user identity determine access rather than simple VPN connectivity.",
    "type": "decision"
  },
  {
    "id": "net_seg_sub1_l1",
    "label": "Contextual Access Fact 1",
    "description": "Context-aware proxies evaluate posture.",
    "type": "action"
  },
  {
    "id": "net_seg_sub1_l2",
    "label": "Contextual Access Fact 2",
    "description": "device health, location, and user identity determine access rather than simple VPN connectivity.",
    "type": "source"
  },
  {
    "id": "net_seg_sub2",
    "label": "Software-Defined Perimeter",
    "description": "SDP obscures infrastructure; the control plane authenticates the user before the data plane establishes a connection, hiding services from unauthenticated network scans.",
    "type": "decision"
  },
  {
    "id": "net_seg_sub2_l1",
    "label": "Software-Defined Perimeter Fact 1",
    "description": "SDP obscures infrastructure.",
    "type": "action"
  },
  {
    "id": "net_seg_sub2_l2",
    "label": "Software-Defined Perimeter Fact 2",
    "description": "the control plane authenticates the user before the data plane establishes a connection, hiding services from unauthenticated network scans.",
    "type": "source"
  },
  {
    "id": "net_seg_sub3",
    "label": "802.1X NAC",
    "description": "Network Access Control uses 802.1X; EAP-TLS requires client certificates for switch port authentication, preventing rogue devices from accessing corporate VLANs.",
    "type": "decision"
  },
  {
    "id": "net_seg_sub3_l1",
    "label": "802.1X NAC Fact 1",
    "description": "Network Access Control uses 802.1X.",
    "type": "action"
  },
  {
    "id": "net_seg_sub3_l2",
    "label": "802.1X NAC Fact 2",
    "description": "EAP-TLS requires client certificates for switch port authentication, preventing rogue devices from accessing corporate VLANs.",
    "type": "source"
  },
  {
    "id": "net_seg_sub4",
    "label": "Service Mesh",
    "description": "Service meshes like Istio enforce mTLS; Sidecar proxies automatically encrypt and authenticate inter-service RPCs, implementing Zero Trust within Kubernetes clusters.",
    "type": "decision"
  },
  {
    "id": "net_seg_sub4_l1",
    "label": "Service Mesh Fact 1",
    "description": "Service meshes like Istio enforce mTLS.",
    "type": "action"
  },
  {
    "id": "net_seg_sub4_l2",
    "label": "Service Mesh Fact 2",
    "description": "Sidecar proxies automatically encrypt and authenticate inter-service RPCs, implementing Zero Trust within Kubernetes clusters.",
    "type": "source"
  },
  {
    "id": "net_ddos",
    "label": "DDoS Mitigation",
    "description": "DDoS attacks exhaust network or application resources; mitigation strategies involve Anycast routing, BGP Flowspec for upstream filtering, and rate-limiting at the edge.",
    "type": "example"
  },
  {
    "id": "net_ddos_sub0",
    "label": "Volumetric Attacks",
    "description": "Volumetric attacks overwhelm bandwidth; NTP or DNS amplification exploits connectionless UDP protocols to reflect large responses toward the victim's IP.",
    "type": "decision"
  },
  {
    "id": "net_ddos_sub0_l1",
    "label": "Volumetric Attacks Fact 1",
    "description": "Volumetric attacks overwhelm bandwidth.",
    "type": "action"
  },
  {
    "id": "net_ddos_sub0_l2",
    "label": "Volumetric Attacks Fact 2",
    "description": "NTP or DNS amplification exploits connectionless UDP protocols to reflect large responses toward the victim's IP.",
    "type": "source"
  },
  {
    "id": "net_ddos_sub1",
    "label": "Anycast Routing",
    "description": "Anycast absorbs volumetric floods; advertising the same IP across multiple global data centers distributes the attack traffic geographically, preventing localized saturation.",
    "type": "decision"
  },
  {
    "id": "net_ddos_sub1_l1",
    "label": "Anycast Routing Fact 1",
    "description": "Anycast absorbs volumetric floods.",
    "type": "action"
  },
  {
    "id": "net_ddos_sub1_l2",
    "label": "Anycast Routing Fact 2",
    "description": "advertising the same IP across multiple global data centers distributes the attack traffic geographically, preventing localized saturation.",
    "type": "source"
  },
  {
    "id": "net_ddos_sub2",
    "label": "Protocol Attacks",
    "description": "Protocol attacks exhaust state tables; SYN floods overwhelm the server's half-open connection queue, preventing legitimate TCP handshakes from completing.",
    "type": "decision"
  },
  {
    "id": "net_ddos_sub2_l1",
    "label": "Protocol Attacks Fact 1",
    "description": "Protocol attacks exhaust state tables.",
    "type": "action"
  },
  {
    "id": "net_ddos_sub2_l2",
    "label": "Protocol Attacks Fact 2",
    "description": "SYN floods overwhelm the server's half-open connection queue, preventing legitimate TCP handshakes from completing.",
    "type": "source"
  },
  {
    "id": "net_ddos_sub3",
    "label": "SYN Cookies",
    "description": "SYN cookies mitigate state exhaustion; the server encodes connection state cryptographically in the initial sequence number, dropping the requirement to store half-open states.",
    "type": "decision"
  },
  {
    "id": "net_ddos_sub3_l1",
    "label": "SYN Cookies Fact 1",
    "description": "SYN cookies mitigate state exhaustion.",
    "type": "action"
  },
  {
    "id": "net_ddos_sub3_l2",
    "label": "SYN Cookies Fact 2",
    "description": "the server encodes connection state cryptographically in the initial sequence number, dropping the requirement to store half-open states.",
    "type": "source"
  },
  {
    "id": "net_ddos_sub4",
    "label": "Application Layer DoS",
    "description": "Layer 7 attacks mimic legitimate traffic; HTTP GET floods or Slowloris exhaust server threads by keeping connections open intentionally slowly.",
    "type": "decision"
  },
  {
    "id": "net_ddos_sub4_l1",
    "label": "Application Layer DoS Fact 1",
    "description": "Layer 7 attacks mimic legitimate traffic.",
    "type": "action"
  },
  {
    "id": "net_ddos_sub4_l2",
    "label": "Application Layer DoS Fact 2",
    "description": "HTTP GET floods or Slowloris exhaust server threads by keeping connections open intentionally slowly.",
    "type": "source"
  },
  {
    "id": "sec_p4",
    "label": "Identity & Access Management",
    "description": "IAM secures the perimeter in cloud-native environments; robust identity relies on modern federated protocols like OAuth2 and OIDC, backed by hardware-bound strong authentication.",
    "type": "concept"
  },
  {
    "id": "iam_oauth",
    "label": "OAuth2 & OIDC",
    "description": "OAuth2 authorization code with PKCE prevents authorization code interception; OIDC layers identity by returning an ID token containing verifiable JWT claims like sub, iss, and aud.",
    "type": "example"
  },
  {
    "id": "iam_oauth_sub0",
    "label": "PKCE Flow",
    "description": "PKCE secures mobile and SPA flows; the client generates a random code_verifier and sends its SHA-256 hash (code_challenge) during the authorization request.",
    "type": "decision"
  },
  {
    "id": "iam_oauth_sub0_l1",
    "label": "PKCE Flow Fact 1",
    "description": "PKCE secures mobile and SPA flows.",
    "type": "action"
  },
  {
    "id": "iam_oauth_sub0_l2",
    "label": "PKCE Flow Fact 2",
    "description": "the client generates a random code_verifier and sends its SHA-256 hash (code_challenge) during the authorization request.",
    "type": "source"
  },
  {
    "id": "iam_oauth_sub1",
    "label": "Authorization Code",
    "description": "The authorization code is exchanged for tokens; this back-channel communication keeps the access token out of the browser history and referrer headers.",
    "type": "decision"
  },
  {
    "id": "iam_oauth_sub1_l1",
    "label": "Authorization Code Fact 1",
    "description": "The authorization code is exchanged for tokens.",
    "type": "action"
  },
  {
    "id": "iam_oauth_sub1_l2",
    "label": "Authorization Code Fact 2",
    "description": "this back-channel communication keeps the access token out of the browser history and referrer headers.",
    "type": "source"
  },
  {
    "id": "iam_oauth_sub2",
    "label": "JWT Claims",
    "description": "OIDC ID tokens are JWTs; the 'sub' claim provides a unique identifier, while 'exp' and 'iat' manage token lifespan and 'nonce' prevents replay attacks.",
    "type": "decision"
  },
  {
    "id": "iam_oauth_sub2_l1",
    "label": "JWT Claims Fact 1",
    "description": "OIDC ID tokens are JWTs.",
    "type": "action"
  },
  {
    "id": "iam_oauth_sub2_l2",
    "label": "JWT Claims Fact 2",
    "description": "the 'sub' claim provides a unique identifier, while 'exp' and 'iat' manage token lifespan and 'nonce' prevents replay attacks.",
    "type": "source"
  },
  {
    "id": "iam_oauth_sub3",
    "label": "Access vs ID Tokens",
    "description": "Access tokens authorize API calls, whereas ID tokens authenticate the user to the client; ID tokens should never be sent to backend APIs as authorization credentials.",
    "type": "decision"
  },
  {
    "id": "iam_oauth_sub3_l1",
    "label": "Access vs ID Tokens Fact 1",
    "description": "Access tokens authorize API calls, whereas ID tokens authenticate the user to the client.",
    "type": "action"
  },
  {
    "id": "iam_oauth_sub3_l2",
    "label": "Access vs ID Tokens Fact 2",
    "description": "ID tokens should never be sent to backend APIs as authorization credentials.",
    "type": "source"
  },
  {
    "id": "iam_oauth_sub4",
    "label": "Refresh Tokens",
    "description": "Refresh tokens provide long-lived access; token rotation automatically invalidates the old refresh token upon use, detecting and mitigating token theft.",
    "type": "decision"
  },
  {
    "id": "iam_oauth_sub4_l1",
    "label": "Refresh Tokens Fact 1",
    "description": "Refresh tokens provide long-lived access.",
    "type": "action"
  },
  {
    "id": "iam_oauth_sub4_l2",
    "label": "Refresh Tokens Fact 2",
    "description": "token rotation automatically invalidates the old refresh token upon use, detecting and mitigating token theft.",
    "type": "source"
  },
  {
    "id": "iam_fido",
    "label": "FIDO2 & WebAuthn",
    "description": "FIDO2/WebAuthn uses public-key cryptography; during registration the authenticator generates a key pair, and during authentication it signs a server challenge with the private key, defeating phishing.",
    "type": "example"
  },
  {
    "id": "iam_fido_sub0",
    "label": "Registration Ceremony",
    "description": "Registration creates a credential; the relying party provides a challenge, and the authenticator returns the new public key and an attestation signature.",
    "type": "decision"
  },
  {
    "id": "iam_fido_sub0_l1",
    "label": "Registration Ceremony Fact 1",
    "description": "Registration creates a credential.",
    "type": "action"
  },
  {
    "id": "iam_fido_sub0_l2",
    "label": "Registration Ceremony Fact 2",
    "description": "the relying party provides a challenge, and the authenticator returns the new public key and an attestation signature.",
    "type": "source"
  },
  {
    "id": "iam_fido_sub1",
    "label": "Authentication Ceremony",
    "description": "Authentication verifies presence; the authenticator uses the stored private key to sign the relying party's challenge, proving possession without transmitting secrets.",
    "type": "decision"
  },
  {
    "id": "iam_fido_sub1_l1",
    "label": "Authentication Ceremony Fact 1",
    "description": "Authentication verifies presence.",
    "type": "action"
  },
  {
    "id": "iam_fido_sub1_l2",
    "label": "Authentication Ceremony Fact 2",
    "description": "the authenticator uses the stored private key to sign the relying party's challenge, proving possession without transmitting secrets.",
    "type": "source"
  },
  {
    "id": "iam_fido_sub2",
    "label": "Phishing Resistance",
    "description": "WebAuthn binds the key to the origin; the browser ensures the signature is strictly tied to the relying party's domain, rendering phishing proxies useless.",
    "type": "decision"
  },
  {
    "id": "iam_fido_sub2_l1",
    "label": "Phishing Resistance Fact 1",
    "description": "WebAuthn binds the key to the origin.",
    "type": "action"
  },
  {
    "id": "iam_fido_sub2_l2",
    "label": "Phishing Resistance Fact 2",
    "description": "the browser ensures the signature is strictly tied to the relying party's domain, rendering phishing proxies useless.",
    "type": "source"
  },
  {
    "id": "iam_fido_sub3",
    "label": "User Verification",
    "description": "User verification (UV) ensures local authentication; requiring a biometric or PIN unlocks the authenticator locally before it signs the WebAuthn challenge.",
    "type": "decision"
  },
  {
    "id": "iam_fido_sub3_l1",
    "label": "User Verification Fact 1",
    "description": "User verification (UV) ensures local authentication.",
    "type": "action"
  },
  {
    "id": "iam_fido_sub3_l2",
    "label": "User Verification Fact 2",
    "description": "requiring a biometric or PIN unlocks the authenticator locally before it signs the WebAuthn challenge.",
    "type": "source"
  },
  {
    "id": "iam_fido_sub4",
    "label": "Discoverable Credentials",
    "description": "Discoverable credentials (passkeys) store the user identifier on the device; this enables passwordless, username-less flows where the device selects the appropriate account.",
    "type": "decision"
  },
  {
    "id": "iam_fido_sub4_l1",
    "label": "Discoverable Credentials Fact 1",
    "description": "Discoverable credentials (passkeys) store the user identifier on the device.",
    "type": "action"
  },
  {
    "id": "iam_fido_sub4_l2",
    "label": "Discoverable Credentials Fact 2",
    "description": "this enables passwordless, username-less flows where the device selects the appropriate account.",
    "type": "source"
  },
  {
    "id": "iam_saml",
    "label": "SAML & Kerberos",
    "description": "Legacy enterprise federation relies on SAML 2.0 XML assertions, while internal Active Directory environments utilize Kerberos Ticket Granting Tickets (TGT) and Service (TGS) tickets.",
    "type": "example"
  },
  {
    "id": "iam_saml_sub0",
    "label": "SAML Assertions",
    "description": "SAML Identity Providers issue assertions; these XML documents contain authentication statements and attributes, heavily relying on XML digital signatures for integrity.",
    "type": "decision"
  },
  {
    "id": "iam_saml_sub0_l1",
    "label": "SAML Assertions Fact 1",
    "description": "SAML Identity Providers issue assertions.",
    "type": "action"
  },
  {
    "id": "iam_saml_sub0_l2",
    "label": "SAML Assertions Fact 2",
    "description": "these XML documents contain authentication statements and attributes, heavily relying on XML digital signatures for integrity.",
    "type": "source"
  },
  {
    "id": "iam_saml_sub1",
    "label": "XML Signature Wrapping",
    "description": "SAML implementations risk XSW attacks; if the Service Provider poorly validates the signature scope, attackers can inject malicious unsigned assertions alongside legitimate signed ones.",
    "type": "decision"
  },
  {
    "id": "iam_saml_sub1_l1",
    "label": "XML Signature Wrapping Fact 1",
    "description": "SAML implementations risk XSW attacks.",
    "type": "action"
  },
  {
    "id": "iam_saml_sub1_l2",
    "label": "XML Signature Wrapping Fact 2",
    "description": "if the Service Provider poorly validates the signature scope, attackers can inject malicious unsigned assertions alongside legitimate signed ones.",
    "type": "source"
  },
  {
    "id": "iam_saml_sub2",
    "label": "Kerberos TGT",
    "description": "Kerberos starts with a TGT; the user authenticates to the KDC using their password hash to decrypt a session key, granting them a Ticket Granting Ticket.",
    "type": "decision"
  },
  {
    "id": "iam_saml_sub2_l1",
    "label": "Kerberos TGT Fact 1",
    "description": "Kerberos starts with a TGT.",
    "type": "action"
  },
  {
    "id": "iam_saml_sub2_l2",
    "label": "Kerberos TGT Fact 2",
    "description": "the user authenticates to the KDC using their password hash to decrypt a session key, granting them a Ticket Granting Ticket.",
    "type": "source"
  },
  {
    "id": "iam_saml_sub3",
    "label": "Kerberos TGS",
    "description": "TGS tickets authorize service access; the client presents the TGT to the KDC to request a service ticket, which is encrypted with the target service's password hash.",
    "type": "decision"
  },
  {
    "id": "iam_saml_sub3_l1",
    "label": "Kerberos TGS Fact 1",
    "description": "TGS tickets authorize service access.",
    "type": "action"
  },
  {
    "id": "iam_saml_sub3_l2",
    "label": "Kerberos TGS Fact 2",
    "description": "the client presents the TGT to the KDC to request a service ticket, which is encrypted with the target service's password hash.",
    "type": "source"
  },
  {
    "id": "iam_saml_sub4",
    "label": "Kerberoasting",
    "description": "Kerberoasting targets service accounts; any authenticated user can request a TGS for an SPN and crack the service account's password hash offline.",
    "type": "decision"
  },
  {
    "id": "iam_saml_sub4_l1",
    "label": "Kerberoasting Fact 1",
    "description": "Kerberoasting targets service accounts.",
    "type": "action"
  },
  {
    "id": "iam_saml_sub4_l2",
    "label": "Kerberoasting Fact 2",
    "description": "any authenticated user can request a TGS for an SPN and crack the service account's password hash offline.",
    "type": "source"
  },
  {
    "id": "iam_rbac",
    "label": "RBAC & ABAC",
    "description": "Role-Based Access Control assigns permissions to roles to simplify administration, while Attribute-Based Access Control dynamically evaluates context policies during runtime.",
    "type": "example"
  },
  {
    "id": "iam_rbac_sub0",
    "label": "Role Assignments",
    "description": "RBAC aggregates permissions; users are assigned roles (e.g., 'Editor'), which in turn contain specific permissions (e.g., 'write_post'), reducing mapping complexity.",
    "type": "decision"
  },
  {
    "id": "iam_rbac_sub0_l1",
    "label": "Role Assignments Fact 1",
    "description": "RBAC aggregates permissions.",
    "type": "action"
  },
  {
    "id": "iam_rbac_sub0_l2",
    "label": "Role Assignments Fact 2",
    "description": "users are assigned roles (e.g., 'Editor'), which in turn contain specific permissions (e.g., 'write_post'), reducing mapping complexity.",
    "type": "source"
  },
  {
    "id": "iam_rbac_sub1",
    "label": "Role Explosion",
    "description": "RBAC suffers from role explosion; accommodating complex edge cases often requires creating hundreds of highly specific roles that become impossible to manage.",
    "type": "decision"
  },
  {
    "id": "iam_rbac_sub1_l1",
    "label": "Role Explosion Fact 1",
    "description": "RBAC suffers from role explosion.",
    "type": "action"
  },
  {
    "id": "iam_rbac_sub1_l2",
    "label": "Role Explosion Fact 2",
    "description": "accommodating complex edge cases often requires creating hundreds of highly specific roles that become impossible to manage.",
    "type": "source"
  },
  {
    "id": "iam_rbac_sub2",
    "label": "Attribute Evaluation",
    "description": "ABAC utilizes contextual data; policies combine subject attributes (department), resource attributes (classification), and environment (IP address) to grant access.",
    "type": "decision"
  },
  {
    "id": "iam_rbac_sub2_l1",
    "label": "Attribute Evaluation Fact 1",
    "description": "ABAC utilizes contextual data.",
    "type": "action"
  },
  {
    "id": "iam_rbac_sub2_l2",
    "label": "Attribute Evaluation Fact 2",
    "description": "policies combine subject attributes (department), resource attributes (classification), and environment (IP address) to grant access.",
    "type": "source"
  },
  {
    "id": "iam_rbac_sub3",
    "label": "Policy Engines",
    "description": "ABAC requires robust policy engines; tools like Open Policy Agent (OPA) decouple authorization logic from application code, evaluating Rego policies against JSON input.",
    "type": "decision"
  },
  {
    "id": "iam_rbac_sub3_l1",
    "label": "Policy Engines Fact 1",
    "description": "ABAC requires robust policy engines.",
    "type": "action"
  },
  {
    "id": "iam_rbac_sub3_l2",
    "label": "Policy Engines Fact 2",
    "description": "tools like Open Policy Agent (OPA) decouple authorization logic from application code, evaluating Rego policies against JSON input.",
    "type": "source"
  },
  {
    "id": "iam_rbac_sub4",
    "label": "Just-In-Time Access",
    "description": "JIT access limits standing privileges; administrators request temporary elevation for specific tasks, which auto-expires after a set duration, minimizing the compromise window.",
    "type": "decision"
  },
  {
    "id": "iam_rbac_sub4_l1",
    "label": "Just-In-Time Access Fact 1",
    "description": "JIT access limits standing privileges.",
    "type": "action"
  },
  {
    "id": "iam_rbac_sub4_l2",
    "label": "Just-In-Time Access Fact 2",
    "description": "administrators request temporary elevation for specific tasks, which auto-expires after a set duration, minimizing the compromise window.",
    "type": "source"
  },
  {
    "id": "iam_priv",
    "label": "Privilege Escalation",
    "description": "Privilege escalation vectors exploit misconfigurations; Linux systems suffer from weak sudo rules or SUID binaries, while Windows environments are targeted via token impersonation.",
    "type": "example"
  },
  {
    "id": "iam_priv_sub0",
    "label": "SUID Binaries",
    "description": "SUID binaries execute with owner privileges; if a tool like 'find' or 'nmap' has the SUID bit set, attackers can leverage their execution features to spawn a root shell.",
    "type": "decision"
  },
  {
    "id": "iam_priv_sub0_l1",
    "label": "SUID Binaries Fact 1",
    "description": "SUID binaries execute with owner privileges.",
    "type": "action"
  },
  {
    "id": "iam_priv_sub0_l2",
    "label": "SUID Binaries Fact 2",
    "description": "if a tool like 'find' or 'nmap' has the SUID bit set, attackers can leverage their execution features to spawn a root shell.",
    "type": "source"
  },
  {
    "id": "iam_priv_sub1",
    "label": "Sudo Misconfigurations",
    "description": "Sudo rules must be precise; allowing users to run 'sudo tar' or 'sudo vi' enables trivial shell escapes if the commands support invoking subshells.",
    "type": "decision"
  },
  {
    "id": "iam_priv_sub1_l1",
    "label": "Sudo Misconfigurations Fact 1",
    "description": "Sudo rules must be precise.",
    "type": "action"
  },
  {
    "id": "iam_priv_sub1_l2",
    "label": "Sudo Misconfigurations Fact 2",
    "description": "allowing users to run 'sudo tar' or 'sudo vi' enables trivial shell escapes if the commands support invoking subshells.",
    "type": "source"
  },
  {
    "id": "iam_priv_sub2",
    "label": "Windows Tokens",
    "description": "Windows uses access tokens; SeImpersonatePrivilege allows a process to impersonate any client connecting to it, commonly exploited by tools like PrintSpoofer.",
    "type": "decision"
  },
  {
    "id": "iam_priv_sub2_l1",
    "label": "Windows Tokens Fact 1",
    "description": "Windows uses access tokens.",
    "type": "action"
  },
  {
    "id": "iam_priv_sub2_l2",
    "label": "Windows Tokens Fact 2",
    "description": "SeImpersonatePrivilege allows a process to impersonate any client connecting to it, commonly exploited by tools like PrintSpoofer.",
    "type": "source"
  },
  {
    "id": "iam_priv_sub3",
    "label": "PAM Modules",
    "description": "Pluggable Authentication Modules control Linux auth; the execution order in /etc/pam.d/ dictates whether a failure in pam_env or pam_unix denies access entirely.",
    "type": "decision"
  },
  {
    "id": "iam_priv_sub3_l1",
    "label": "PAM Modules Fact 1",
    "description": "Pluggable Authentication Modules control Linux auth.",
    "type": "action"
  },
  {
    "id": "iam_priv_sub3_l2",
    "label": "PAM Modules Fact 2",
    "description": "the execution order in /etc/pam.d/ dictates whether a failure in pam_env or pam_unix denies access entirely.",
    "type": "source"
  },
  {
    "id": "iam_priv_sub4",
    "label": "Unquoted Service Paths",
    "description": "Windows services risk path interception; unquoted paths containing spaces (e.g., C:\\Program Files\\app.exe) allow an attacker to place a malicious Program.exe that executes first.",
    "type": "decision"
  },
  {
    "id": "iam_priv_sub4_l1",
    "label": "Unquoted Service Paths Fact 1",
    "description": "Windows services risk path interception.",
    "type": "action"
  },
  {
    "id": "iam_priv_sub4_l2",
    "label": "Unquoted Service Paths Fact 2",
    "description": "unquoted paths containing spaces (e.g., C:\\Program Files\\app.exe) allow an attacker to place a malicious Program.exe that executes first.",
    "type": "source"
  },
  {
    "id": "iam_sso",
    "label": "SSO & Sessions",
    "description": "Single Sign-On centralization creates a high-value target; session management requires secure cookie attributes, strict timeout enforcement, and defense against session fixation.",
    "type": "example"
  },
  {
    "id": "iam_sso_sub0",
    "label": "Session Fixation",
    "description": "Session fixation forces a known ID; the application must explicitly regenerate the session identifier upon successful authentication to invalidate pre-authentication tokens.",
    "type": "decision"
  },
  {
    "id": "iam_sso_sub0_l1",
    "label": "Session Fixation Fact 1",
    "description": "Session fixation forces a known ID.",
    "type": "action"
  },
  {
    "id": "iam_sso_sub0_l2",
    "label": "Session Fixation Fact 2",
    "description": "the application must explicitly regenerate the session identifier upon successful authentication to invalidate pre-authentication tokens.",
    "type": "source"
  },
  {
    "id": "iam_sso_sub1",
    "label": "Cookie Security Flags",
    "description": "Cookies require secure flags; the Secure flag ensures transmission only over HTTPS, while HttpOnly prevents JavaScript from accessing the cookie, mitigating XSS theft.",
    "type": "decision"
  },
  {
    "id": "iam_sso_sub1_l1",
    "label": "Cookie Security Flags Fact 1",
    "description": "Cookies require secure flags.",
    "type": "action"
  },
  {
    "id": "iam_sso_sub1_l2",
    "label": "Cookie Security Flags Fact 2",
    "description": "the Secure flag ensures transmission only over HTTPS, while HttpOnly prevents JavaScript from accessing the cookie, mitigating XSS theft.",
    "type": "source"
  },
  {
    "id": "iam_sso_sub2",
    "label": "Session Expiration",
    "description": "Absolute timeouts force re-authentication; relying solely on idle timeouts allows an actively used stolen session to remain valid indefinitely.",
    "type": "decision"
  },
  {
    "id": "iam_sso_sub2_l1",
    "label": "Session Expiration Fact 1",
    "description": "Absolute timeouts force re-authentication.",
    "type": "action"
  },
  {
    "id": "iam_sso_sub2_l2",
    "label": "Session Expiration Fact 2",
    "description": "relying solely on idle timeouts allows an actively used stolen session to remain valid indefinitely.",
    "type": "source"
  },
  {
    "id": "iam_sso_sub3",
    "label": "Concurrent Sessions",
    "description": "Restricting concurrent sessions mitigates credential sharing; tracking active tokens in a fast datastore like Redis allows the system to revoke older sessions globally.",
    "type": "decision"
  },
  {
    "id": "iam_sso_sub3_l1",
    "label": "Concurrent Sessions Fact 1",
    "description": "Restricting concurrent sessions mitigates credential sharing.",
    "type": "action"
  },
  {
    "id": "iam_sso_sub3_l2",
    "label": "Concurrent Sessions Fact 2",
    "description": "tracking active tokens in a fast datastore like Redis allows the system to revoke older sessions globally.",
    "type": "source"
  },
  {
    "id": "iam_sso_sub4",
    "label": "SSO Logout",
    "description": "Single Logout (SLO) is complex; federated protocols require broadcasting logout requests to all participating service providers to ensure the user is completely de-authenticated.",
    "type": "decision"
  },
  {
    "id": "iam_sso_sub4_l1",
    "label": "SSO Logout Fact 1",
    "description": "Single Logout (SLO) is complex.",
    "type": "action"
  },
  {
    "id": "iam_sso_sub4_l2",
    "label": "SSO Logout Fact 2",
    "description": "federated protocols require broadcasting logout requests to all participating service providers to ensure the user is completely de-authenticated.",
    "type": "source"
  },
  {
    "id": "sec_p5",
    "label": "Applied Cryptography",
    "description": "Applied cryptography emphasizes standard implementation over custom design; misuse of initialization vectors, weak padding, or insecure key derivation leads to catastrophic data compromise.",
    "type": "concept"
  },
  {
    "id": "crypto_sym",
    "label": "Symmetric Encryption",
    "description": "Modern symmetric encryption relies on Authenticated Encryption with Associated Data (AEAD); AES-GCM requires strict 96-bit nonce uniqueness to prevent key recovery.",
    "type": "example"
  },
  {
    "id": "crypto_sym_sub0",
    "label": "AES-GCM Nonce Reuse",
    "description": "GCM mode uses Galois counter mode for authentication; reusing a nonce with the same key allows an attacker to compute the authentication key (H) and forge messages.",
    "type": "decision"
  },
  {
    "id": "crypto_sym_sub0_l1",
    "label": "AES-GCM Nonce Reuse Fact 1",
    "description": "GCM mode uses Galois counter mode for authentication.",
    "type": "action"
  },
  {
    "id": "crypto_sym_sub0_l2",
    "label": "AES-GCM Nonce Reuse Fact 2",
    "description": "reusing a nonce with the same key allows an attacker to compute the authentication key (H) and forge messages.",
    "type": "source"
  },
  {
    "id": "crypto_sym_sub1",
    "label": "ChaCha20-Poly1305",
    "description": "ChaCha20 is a stream cipher paired with the Poly1305 MAC; it is highly performant on systems lacking AES-NI hardware instructions and avoids cache-timing attacks.",
    "type": "decision"
  },
  {
    "id": "crypto_sym_sub1_l1",
    "label": "ChaCha20-Poly1305 Fact 1",
    "description": "ChaCha20 is a stream cipher paired with the Poly1305 MAC.",
    "type": "action"
  },
  {
    "id": "crypto_sym_sub1_l2",
    "label": "ChaCha20-Poly1305 Fact 2",
    "description": "it is highly performant on systems lacking AES-NI hardware instructions and avoids cache-timing attacks.",
    "type": "source"
  },
  {
    "id": "crypto_sym_sub2",
    "label": "ECB Mode Flaws",
    "description": "Electronic Codebook (ECB) encrypts identical plaintext blocks to identical ciphertext blocks; it fails to hide data patterns, rendering it insecure for most applications.",
    "type": "decision"
  },
  {
    "id": "crypto_sym_sub2_l1",
    "label": "ECB Mode Flaws Fact 1",
    "description": "Electronic Codebook (ECB) encrypts identical plaintext blocks to identical ciphertext blocks.",
    "type": "action"
  },
  {
    "id": "crypto_sym_sub2_l2",
    "label": "ECB Mode Flaws Fact 2",
    "description": "it fails to hide data patterns, rendering it insecure for most applications.",
    "type": "source"
  },
  {
    "id": "crypto_sym_sub3",
    "label": "CBC Padding Oracles",
    "description": "CBC mode requires padding; if a server leaks whether decrypted padding is valid (via errors or timing), attackers can decrypt the ciphertext byte-by-byte without the key.",
    "type": "decision"
  },
  {
    "id": "crypto_sym_sub3_l1",
    "label": "CBC Padding Oracles Fact 1",
    "description": "CBC mode requires padding.",
    "type": "action"
  },
  {
    "id": "crypto_sym_sub3_l2",
    "label": "CBC Padding Oracles Fact 2",
    "description": "if a server leaks whether decrypted padding is valid (via errors or timing), attackers can decrypt the ciphertext byte-by-byte without the key.",
    "type": "source"
  },
  {
    "id": "crypto_sym_sub4",
    "label": "MAC-then-Encrypt",
    "description": "MAC-then-Encrypt is structurally fragile; the preferred standard is Encrypt-then-MAC, which verifies ciphertext integrity before attempting decryption, blocking chosen-ciphertext attacks.",
    "type": "decision"
  },
  {
    "id": "crypto_sym_sub4_l1",
    "label": "MAC-then-Encrypt Fact 1",
    "description": "MAC-then-Encrypt is structurally fragile.",
    "type": "action"
  },
  {
    "id": "crypto_sym_sub4_l2",
    "label": "MAC-then-Encrypt Fact 2",
    "description": "the preferred standard is Encrypt-then-MAC, which verifies ciphertext integrity before attempting decryption, blocking chosen-ciphertext attacks.",
    "type": "source"
  },
  {
    "id": "crypto_asym",
    "label": "Asymmetric Cryptography",
    "description": "Asymmetric systems solve key distribution; RSA relies on integer factorization hardness, while Elliptic Curve Cryptography (ECC) leverages the discrete logarithm problem over finite fields.",
    "type": "example"
  },
  {
    "id": "crypto_asym_sub0",
    "label": "RSA Padding",
    "description": "Raw RSA is deterministic; RSA-OAEP uses Mask Generation Function (MGF1) to randomize padding, mitigating the chosen-ciphertext vulnerabilities inherent in older PKCS#1 v1.5 padding.",
    "type": "decision"
  },
  {
    "id": "crypto_asym_sub0_l1",
    "label": "RSA Padding Fact 1",
    "description": "Raw RSA is deterministic.",
    "type": "action"
  },
  {
    "id": "crypto_asym_sub0_l2",
    "label": "RSA Padding Fact 2",
    "description": "RSA-OAEP uses Mask Generation Function (MGF1) to randomize padding, mitigating the chosen-ciphertext vulnerabilities inherent in older PKCS#1 v1.5 padding.",
    "type": "source"
  },
  {
    "id": "crypto_asym_sub1",
    "label": "ECDH X25519",
    "description": "Elliptic Curve Diffie-Hellman establishes shared secrets; Curve25519 is specifically designed for speed and resistance to timing side-channels during scalar multiplication.",
    "type": "decision"
  },
  {
    "id": "crypto_asym_sub1_l1",
    "label": "ECDH X25519 Fact 1",
    "description": "Elliptic Curve Diffie-Hellman establishes shared secrets.",
    "type": "action"
  },
  {
    "id": "crypto_asym_sub1_l2",
    "label": "ECDH X25519 Fact 2",
    "description": "Curve25519 is specifically designed for speed and resistance to timing side-channels during scalar multiplication.",
    "type": "source"
  },
  {
    "id": "crypto_asym_sub2",
    "label": "Key Sizes",
    "description": "ECC provides equivalent security with smaller keys; a 256-bit elliptic curve key offers comparable cryptographic strength to a massive 3072-bit RSA modulus.",
    "type": "decision"
  },
  {
    "id": "crypto_asym_sub2_l1",
    "label": "Key Sizes Fact 1",
    "description": "ECC provides equivalent security with smaller keys.",
    "type": "action"
  },
  {
    "id": "crypto_asym_sub2_l2",
    "label": "Key Sizes Fact 2",
    "description": "a 256-bit elliptic curve key offers comparable cryptographic strength to a massive 3072-bit RSA modulus.",
    "type": "source"
  },
  {
    "id": "crypto_asym_sub3",
    "label": "Digital Signatures",
    "description": "Signatures provide non-repudiation; ECDSA requires a cryptographically secure random nonce (k) for every signature; nonce reuse trivially leaks the long-term private key.",
    "type": "decision"
  },
  {
    "id": "crypto_asym_sub3_l1",
    "label": "Digital Signatures Fact 1",
    "description": "Signatures provide non-repudiation.",
    "type": "action"
  },
  {
    "id": "crypto_asym_sub3_l2",
    "label": "Digital Signatures Fact 2",
    "description": "ECDSA requires a cryptographically secure random nonce (k) for every signature.",
    "type": "source"
  },
  {
    "id": "crypto_asym_sub4",
    "label": "EdDSA Signatures",
    "description": "Ed25519 uses twisted Edwards curves; it fundamentally prevents nonce reuse vulnerabilities by deterministically generating the nonce from the message and private key.",
    "type": "decision"
  },
  {
    "id": "crypto_asym_sub4_l1",
    "label": "EdDSA Signatures Fact 1",
    "description": "Ed25519 uses twisted Edwards curves.",
    "type": "action"
  },
  {
    "id": "crypto_asym_sub4_l2",
    "label": "EdDSA Signatures Fact 2",
    "description": "it fundamentally prevents nonce reuse vulnerabilities by deterministically generating the nonce from the message and private key.",
    "type": "source"
  },
  {
    "id": "crypto_kdf",
    "label": "Key Derivation",
    "description": "Key Derivation Functions (KDFs) transform passwords into keys or expand entropy; HKDF uses an extract-and-expand approach, while Argon2 provides ASIC-resistant password hashing.",
    "type": "example"
  },
  {
    "id": "crypto_kdf_sub0",
    "label": "HKDF Extract & Expand",
    "description": "HKDF is HMAC-based; the extract phase concentrates entropy using a salt into a PRK, while the expand phase deterministically generates multiple specific keys (OKM).",
    "type": "decision"
  },
  {
    "id": "crypto_kdf_sub0_l1",
    "label": "HKDF Extract & Expand Fact 1",
    "description": "HKDF is HMAC-based.",
    "type": "action"
  },
  {
    "id": "crypto_kdf_sub0_l2",
    "label": "HKDF Extract & Expand Fact 2",
    "description": "the extract phase concentrates entropy using a salt into a PRK, while the expand phase deterministically generates multiple specific keys (OKM).",
    "type": "source"
  },
  {
    "id": "crypto_kdf_sub1",
    "label": "Password Hashing",
    "description": "Passwords lack entropy; fast hashes like SHA-256 are easily cracked. Secure storage requires iterative, slow algorithms to thwart brute-force attacks.",
    "type": "decision"
  },
  {
    "id": "crypto_kdf_sub1_l1",
    "label": "Password Hashing Fact 1",
    "description": "Passwords lack entropy.",
    "type": "action"
  },
  {
    "id": "crypto_kdf_sub1_l2",
    "label": "Password Hashing Fact 2",
    "description": "fast hashes like SHA-256 are easily cracked. Secure storage requires iterative, slow algorithms to thwart brute-force attacks.",
    "type": "source"
  },
  {
    "id": "crypto_kdf_sub2",
    "label": "Argon2",
    "description": "Argon2 is the modern standard for passwords; Argon2id balances resistance against both GPU cracking (time cost) and dedicated ASIC hardware (memory hardness).",
    "type": "decision"
  },
  {
    "id": "crypto_kdf_sub2_l1",
    "label": "Argon2 Fact 1",
    "description": "Argon2 is the modern standard for passwords.",
    "type": "action"
  },
  {
    "id": "crypto_kdf_sub2_l2",
    "label": "Argon2 Fact 2",
    "description": "Argon2id balances resistance against both GPU cracking (time cost) and dedicated ASIC hardware (memory hardness).",
    "type": "source"
  },
  {
    "id": "crypto_kdf_sub3",
    "label": "PBKDF2 & scrypt",
    "description": "PBKDF2 uses repeated HMAC iterations but lacks memory hardness; scrypt improves this by requiring large, dynamically generated memory blocks during computation.",
    "type": "decision"
  },
  {
    "id": "crypto_kdf_sub3_l1",
    "label": "PBKDF2 & scrypt Fact 1",
    "description": "PBKDF2 uses repeated HMAC iterations but lacks memory hardness.",
    "type": "action"
  },
  {
    "id": "crypto_kdf_sub3_l2",
    "label": "PBKDF2 & scrypt Fact 2",
    "description": "scrypt improves this by requiring large, dynamically generated memory blocks during computation.",
    "type": "source"
  },
  {
    "id": "crypto_kdf_sub4",
    "label": "Salting",
    "description": "Salts prevent precomputation; appending a unique, random minimum 128-bit salt to each password prevents rainbow table attacks and ensures identical passwords hash differently.",
    "type": "decision"
  },
  {
    "id": "crypto_kdf_sub4_l1",
    "label": "Salting Fact 1",
    "description": "Salts prevent precomputation.",
    "type": "action"
  },
  {
    "id": "crypto_kdf_sub4_l2",
    "label": "Salting Fact 2",
    "description": "appending a unique, random minimum 128-bit salt to each password prevents rainbow table attacks and ensures identical passwords hash differently.",
    "type": "source"
  },
  {
    "id": "crypto_pq",
    "label": "Post-Quantum Cryptography",
    "description": "Quantum computers running Shor's algorithm threaten RSA and ECC; NIST standardization of lattice-based cryptography, such as ML-KEM and ML-DSA, prepares for the Q-Day migration.",
    "type": "example"
  },
  {
    "id": "crypto_pq_sub0",
    "label": "Shor's Algorithm",
    "description": "Shor's algorithm efficiently solves prime factorization and discrete logarithms; a sufficiently capable cryptographically relevant quantum computer (CRQC) breaks current asymmetric primitives entirely.",
    "type": "decision"
  },
  {
    "id": "crypto_pq_sub0_l1",
    "label": "Shor's Algorithm Fact 1",
    "description": "Shor's algorithm efficiently solves prime factorization and discrete logarithms.",
    "type": "action"
  },
  {
    "id": "crypto_pq_sub0_l2",
    "label": "Shor's Algorithm Fact 2",
    "description": "a sufficiently capable cryptographically relevant quantum computer (CRQC) breaks current asymmetric primitives entirely.",
    "type": "source"
  },
  {
    "id": "crypto_pq_sub1",
    "label": "ML-KEM (Kyber)",
    "description": "ML-KEM (FIPS 203) is a Key Encapsulation Mechanism; it bases its security on the computational hardness of the Module Learning With Errors (MLWE) problem on lattices.",
    "type": "decision"
  },
  {
    "id": "crypto_pq_sub1_l1",
    "label": "ML-KEM (Kyber) Fact 1",
    "description": "ML-KEM (FIPS 203) is a Key Encapsulation Mechanism.",
    "type": "action"
  },
  {
    "id": "crypto_pq_sub1_l2",
    "label": "ML-KEM (Kyber) Fact 2",
    "description": "it bases its security on the computational hardness of the Module Learning With Errors (MLWE) problem on lattices.",
    "type": "source"
  },
  {
    "id": "crypto_pq_sub2",
    "label": "ML-DSA (Dilithium)",
    "description": "ML-DSA (FIPS 204) provides post-quantum digital signatures; it uses a Fiat-Shamir with aborts approach over lattice structures to replace ECDSA and RSA signatures.",
    "type": "decision"
  },
  {
    "id": "crypto_pq_sub2_l1",
    "label": "ML-DSA (Dilithium) Fact 1",
    "description": "ML-DSA (FIPS 204) provides post-quantum digital signatures.",
    "type": "action"
  },
  {
    "id": "crypto_pq_sub2_l2",
    "label": "ML-DSA (Dilithium) Fact 2",
    "description": "it uses a Fiat-Shamir with aborts approach over lattice structures to replace ECDSA and RSA signatures.",
    "type": "source"
  },
  {
    "id": "crypto_pq_sub3",
    "label": "Hybrid Handshakes",
    "description": "Transition strategies use hybrid models; TLS handshakes combine classical X25519 with post-quantum ML-KEM, maintaining compliance while protecting against 'harvest now, decrypt later' attacks.",
    "type": "decision"
  },
  {
    "id": "crypto_pq_sub3_l1",
    "label": "Hybrid Handshakes Fact 1",
    "description": "Transition strategies use hybrid models.",
    "type": "action"
  },
  {
    "id": "crypto_pq_sub3_l2",
    "label": "Hybrid Handshakes Fact 2",
    "description": "TLS handshakes combine classical X25519 with post-quantum ML-KEM, maintaining compliance while protecting against 'harvest now, decrypt later' attacks.",
    "type": "source"
  },
  {
    "id": "crypto_pq_sub4",
    "label": "Hash-Based Signatures",
    "description": "Stateful hash-based signatures like XMSS are quantum-resistant; they rely purely on the security of the underlying hash function but require strict state management to prevent key reuse.",
    "type": "decision"
  },
  {
    "id": "crypto_pq_sub4_l1",
    "label": "Hash-Based Signatures Fact 1",
    "description": "Stateful hash-based signatures like XMSS are quantum-resistant.",
    "type": "action"
  },
  {
    "id": "crypto_pq_sub4_l2",
    "label": "Hash-Based Signatures Fact 2",
    "description": "they rely purely on the security of the underlying hash function but require strict state management to prevent key reuse.",
    "type": "source"
  },
  {
    "id": "crypto_zkp",
    "label": "Zero-Knowledge Proofs",
    "description": "Zero-Knowledge Proofs allow a prover to demonstrate knowledge of a secret without revealing it; SNARKs provide highly succinct proofs, while STARKs offer quantum-resistant transparency.",
    "type": "example"
  },
  {
    "id": "crypto_zkp_sub0",
    "label": "zk-SNARKs",
    "description": "Succinct Non-Interactive Arguments of Knowledge are extremely small and fast to verify; however, many constructions require a multi-party trusted setup ceremony to generate proving parameters.",
    "type": "decision"
  },
  {
    "id": "crypto_zkp_sub0_l1",
    "label": "zk-SNARKs Fact 1",
    "description": "Succinct Non-Interactive Arguments of Knowledge are extremely small and fast to verify.",
    "type": "action"
  },
  {
    "id": "crypto_zkp_sub0_l2",
    "label": "zk-SNARKs Fact 2",
    "description": "however, many constructions require a multi-party trusted setup ceremony to generate proving parameters.",
    "type": "source"
  },
  {
    "id": "crypto_zkp_sub1",
    "label": "Trusted Setup Toxic Waste",
    "description": "In SNARK trusted setups, the randomness used (toxic waste) must be destroyed; if compromised, an attacker can forge false proofs indistinguishable from legitimate ones.",
    "type": "decision"
  },
  {
    "id": "crypto_zkp_sub1_l1",
    "label": "Trusted Setup Toxic Waste Fact 1",
    "description": "In SNARK trusted setups, the randomness used (toxic waste) must be destroyed.",
    "type": "action"
  },
  {
    "id": "crypto_zkp_sub1_l2",
    "label": "Trusted Setup Toxic Waste Fact 2",
    "description": "if compromised, an attacker can forge false proofs indistinguishable from legitimate ones.",
    "type": "source"
  },
  {
    "id": "crypto_zkp_sub2",
    "label": "zk-STARKs",
    "description": "Scalable Transparent Arguments of Knowledge eliminate the trusted setup; they rely on lean hash functions rather than elliptic curve pairings, making them inherently quantum-resistant.",
    "type": "decision"
  },
  {
    "id": "crypto_zkp_sub2_l1",
    "label": "zk-STARKs Fact 1",
    "description": "Scalable Transparent Arguments of Knowledge eliminate the trusted setup.",
    "type": "action"
  },
  {
    "id": "crypto_zkp_sub2_l2",
    "label": "zk-STARKs Fact 2",
    "description": "they rely on lean hash functions rather than elliptic curve pairings, making them inherently quantum-resistant.",
    "type": "source"
  },
  {
    "id": "crypto_zkp_sub3",
    "label": "Commitment Schemes",
    "description": "Pedersen commitments allow binding a value without revealing it; they are perfectly hiding and computationally binding, fundamental for anonymous transactions.",
    "type": "decision"
  },
  {
    "id": "crypto_zkp_sub3_l1",
    "label": "Commitment Schemes Fact 1",
    "description": "Pedersen commitments allow binding a value without revealing it.",
    "type": "action"
  },
  {
    "id": "crypto_zkp_sub3_l2",
    "label": "Commitment Schemes Fact 2",
    "description": "they are perfectly hiding and computationally binding, fundamental for anonymous transactions.",
    "type": "source"
  },
  {
    "id": "crypto_zkp_sub4",
    "label": "Homomorphic Encryption",
    "description": "Fully Homomorphic Encryption (FHE) allows arbitrary computation on ciphertexts; the decrypted result matches the operations as if performed on plaintext, revolutionizing secure cloud computing.",
    "type": "decision"
  },
  {
    "id": "crypto_zkp_sub4_l1",
    "label": "Homomorphic Encryption Fact 1",
    "description": "Fully Homomorphic Encryption (FHE) allows arbitrary computation on ciphertexts.",
    "type": "action"
  },
  {
    "id": "crypto_zkp_sub4_l2",
    "label": "Homomorphic Encryption Fact 2",
    "description": "the decrypted result matches the operations as if performed on plaintext, revolutionizing secure cloud computing.",
    "type": "source"
  },
  {
    "id": "crypto_hsm",
    "label": "Hardware Cryptography",
    "description": "Hardware Security Modules (HSMs) provide logical and physical protection for cryptographic material; FIPS 140-3 Level 3 guarantees tamper-evident physical security boundaries.",
    "type": "example"
  },
  {
    "id": "crypto_hsm_sub0",
    "label": "FIPS 140-3 Standard",
    "description": "FIPS 140-3 defines security requirements for cryptographic modules; Level 3 mandates physical tamper resistance, zeroizing plaintext keys upon detecting enclosure penetration.",
    "type": "decision"
  },
  {
    "id": "crypto_hsm_sub0_l1",
    "label": "FIPS 140-3 Standard Fact 1",
    "description": "FIPS 140-3 defines security requirements for cryptographic modules.",
    "type": "action"
  },
  {
    "id": "crypto_hsm_sub0_l2",
    "label": "FIPS 140-3 Standard Fact 2",
    "description": "Level 3 mandates physical tamper resistance, zeroizing plaintext keys upon detecting enclosure penetration.",
    "type": "source"
  },
  {
    "id": "crypto_hsm_sub1",
    "label": "Trusted Execution Environments",
    "description": "TEEs like Intel SGX or ARM TrustZone create secure enclaves; memory encryption ensures the host OS or hypervisor cannot read data processed within the enclave.",
    "type": "decision"
  },
  {
    "id": "crypto_hsm_sub1_l1",
    "label": "Trusted Execution Environments Fact 1",
    "description": "TEEs like Intel SGX or ARM TrustZone create secure enclaves.",
    "type": "action"
  },
  {
    "id": "crypto_hsm_sub1_l2",
    "label": "Trusted Execution Environments Fact 2",
    "description": "memory encryption ensures the host OS or hypervisor cannot read data processed within the enclave.",
    "type": "source"
  },
  {
    "id": "crypto_hsm_sub2",
    "label": "TPM PCRs",
    "description": "Trusted Platform Modules measure boot states; Platform Configuration Registers (PCRs) store cryptographic hashes of boot components, preventing unlocking of disk encryption if malware alters the bootloader.",
    "type": "decision"
  },
  {
    "id": "crypto_hsm_sub2_l1",
    "label": "TPM PCRs Fact 1",
    "description": "Trusted Platform Modules measure boot states.",
    "type": "action"
  },
  {
    "id": "crypto_hsm_sub2_l2",
    "label": "TPM PCRs Fact 2",
    "description": "Platform Configuration Registers (PCRs) store cryptographic hashes of boot components, preventing unlocking of disk encryption if malware alters the bootloader.",
    "type": "source"
  },
  {
    "id": "crypto_hsm_sub3",
    "label": "Shamir's Secret Sharing",
    "description": "Shamir's Secret Sharing splits a master key; a k-of-n threshold scheme requires a minimum number of key custodians to physically present their shards to reconstruct the key.",
    "type": "decision"
  },
  {
    "id": "crypto_hsm_sub3_l1",
    "label": "Shamir's Secret Sharing Fact 1",
    "description": "Shamir's Secret Sharing splits a master key.",
    "type": "action"
  },
  {
    "id": "crypto_hsm_sub3_l2",
    "label": "Shamir's Secret Sharing Fact 2",
    "description": "a k-of-n threshold scheme requires a minimum number of key custodians to physically present their shards to reconstruct the key.",
    "type": "source"
  },
  {
    "id": "crypto_hsm_sub4",
    "label": "Entropy Sources",
    "description": "Hardware random number generators (TRNGs) sample physical phenomena; thermal noise or quantum effects provide true non-deterministic entropy for cryptographically secure key generation.",
    "type": "decision"
  },
  {
    "id": "crypto_hsm_sub4_l1",
    "label": "Entropy Sources Fact 1",
    "description": "Hardware random number generators (TRNGs) sample physical phenomena.",
    "type": "action"
  },
  {
    "id": "crypto_hsm_sub4_l2",
    "label": "Entropy Sources Fact 2",
    "description": "thermal noise or quantum effects provide true non-deterministic entropy for cryptographically secure key generation.",
    "type": "source"
  },
  {
    "id": "sec_p6",
    "label": "Cloud & Infrastructure Security",
    "description": "Cloud security operates on the shared responsibility model; securing infrastructure-as-code and container lifecycles requires continuous posture management and keyless signing.",
    "type": "concept"
  },
  {
    "id": "cld_cspm",
    "label": "Cloud Posture Management",
    "description": "CSPM continuously scans cloud environments for misconfigurations; detecting public S3 buckets, overly permissive security groups, and unencrypted volumes prevents automated exploitation.",
    "type": "example"
  },
  {
    "id": "cld_cspm_sub0",
    "label": "IaC Scanning",
    "description": "Shift-left security scans Infrastructure as Code; tools like Checkov evaluate Terraform templates against policies before deployment, catching flaws in CI/CD pipelines.",
    "type": "decision"
  },
  {
    "id": "cld_cspm_sub0_l1",
    "label": "IaC Scanning Fact 1",
    "description": "Shift-left security scans Infrastructure as Code.",
    "type": "action"
  },
  {
    "id": "cld_cspm_sub0_l2",
    "label": "IaC Scanning Fact 2",
    "description": "tools like Checkov evaluate Terraform templates against policies before deployment, catching flaws in CI/CD pipelines.",
    "type": "source"
  },
  {
    "id": "cld_cspm_sub1",
    "label": "Public S3 Exposure",
    "description": "S3 misconfigurations cause massive breaches; enabling AWS Block Public Access at the account level overrides permissive bucket policies or ACLs preventing data leakage.",
    "type": "decision"
  },
  {
    "id": "cld_cspm_sub1_l1",
    "label": "Public S3 Exposure Fact 1",
    "description": "S3 misconfigurations cause massive breaches.",
    "type": "action"
  },
  {
    "id": "cld_cspm_sub1_l2",
    "label": "Public S3 Exposure Fact 2",
    "description": "enabling AWS Block Public Access at the account level overrides permissive bucket policies or ACLs preventing data leakage.",
    "type": "source"
  },
  {
    "id": "cld_cspm_sub2",
    "label": "Security Group Rules",
    "description": "Over-permissive ingress rules invite attacks; allowing 0.0.0.0/0 on port 22 or 3389 exposes management interfaces to global brute-force scanning botnets.",
    "type": "decision"
  },
  {
    "id": "cld_cspm_sub2_l1",
    "label": "Security Group Rules Fact 1",
    "description": "Over-permissive ingress rules invite attacks.",
    "type": "action"
  },
  {
    "id": "cld_cspm_sub2_l2",
    "label": "Security Group Rules Fact 2",
    "description": "allowing 0.0.0.0/0 on port 22 or 3389 exposes management interfaces to global brute-force scanning botnets.",
    "type": "source"
  },
  {
    "id": "cld_cspm_sub3",
    "label": "CWPP Runtime Protection",
    "description": "Cloud Workload Protection Platforms monitor execution; eBPF agents in the kernel track syscalls to detect container escapes or unexpected process execution.",
    "type": "decision"
  },
  {
    "id": "cld_cspm_sub3_l1",
    "label": "CWPP Runtime Protection Fact 1",
    "description": "Cloud Workload Protection Platforms monitor execution.",
    "type": "action"
  },
  {
    "id": "cld_cspm_sub3_l2",
    "label": "CWPP Runtime Protection Fact 2",
    "description": "eBPF agents in the kernel track syscalls to detect container escapes or unexpected process execution.",
    "type": "source"
  },
  {
    "id": "cld_cspm_sub4",
    "label": "Agentless Scanning",
    "description": "Agentless scanning creates volume snapshots; taking temporary snapshots of EBS volumes allows offline vulnerability scanning without impacting the performance of running workloads.",
    "type": "decision"
  },
  {
    "id": "cld_cspm_sub4_l1",
    "label": "Agentless Scanning Fact 1",
    "description": "Agentless scanning creates volume snapshots.",
    "type": "action"
  },
  {
    "id": "cld_cspm_sub4_l2",
    "label": "Agentless Scanning Fact 2",
    "description": "taking temporary snapshots of EBS volumes allows offline vulnerability scanning without impacting the performance of running workloads.",
    "type": "source"
  },
  {
    "id": "cld_iam",
    "label": "Cloud Identity & Access",
    "description": "Cloud IAM enforces the principle of least privilege; AWS Service Control Policies (SCPs) define organization-wide guardrails that supersede individual IAM user permissions.",
    "type": "example"
  },
  {
    "id": "cld_iam_sub0",
    "label": "Deny by Default",
    "description": "IAM operates on explicit deny; a permission must be explicitly granted, and any explicit deny in an SCP or resource policy immediately overrides all allows.",
    "type": "decision"
  },
  {
    "id": "cld_iam_sub0_l1",
    "label": "Deny by Default Fact 1",
    "description": "IAM operates on explicit deny.",
    "type": "action"
  },
  {
    "id": "cld_iam_sub0_l2",
    "label": "Deny by Default Fact 2",
    "description": "a permission must be explicitly granted, and any explicit deny in an SCP or resource policy immediately overrides all allows.",
    "type": "source"
  },
  {
    "id": "cld_iam_sub1",
    "label": "Assume Role Dynamics",
    "description": "STS AssumeRole generates temporary credentials; short-lived access keys, secret keys, and session tokens limit the exposure window if credentials are inadvertently leaked.",
    "type": "decision"
  },
  {
    "id": "cld_iam_sub1_l1",
    "label": "Assume Role Dynamics Fact 1",
    "description": "STS AssumeRole generates temporary credentials.",
    "type": "action"
  },
  {
    "id": "cld_iam_sub1_l2",
    "label": "Assume Role Dynamics Fact 2",
    "description": "short-lived access keys, secret keys, and session tokens limit the exposure window if credentials are inadvertently leaked.",
    "type": "source"
  },
  {
    "id": "cld_iam_sub2",
    "label": "Resource Policies",
    "description": "Resource policies attach to the asset; KMS key policies determine who can utilize the encryption key, often restricting usage strictly to specific authorized IAM roles.",
    "type": "decision"
  },
  {
    "id": "cld_iam_sub2_l1",
    "label": "Resource Policies Fact 1",
    "description": "Resource policies attach to the asset.",
    "type": "action"
  },
  {
    "id": "cld_iam_sub2_l2",
    "label": "Resource Policies Fact 2",
    "description": "KMS key policies determine who can utilize the encryption key, often restricting usage strictly to specific authorized IAM roles.",
    "type": "source"
  },
  {
    "id": "cld_iam_sub3",
    "label": "IMDSv2 Enforcement",
    "description": "Enforcing IMDSv2 blocks SSRF credential theft; requiring a session token via a PUT request ensures attackers leveraging simple GET-based SSRF cannot retrieve EC2 metadata.",
    "type": "decision"
  },
  {
    "id": "cld_iam_sub3_l1",
    "label": "IMDSv2 Enforcement Fact 1",
    "description": "Enforcing IMDSv2 blocks SSRF credential theft.",
    "type": "action"
  },
  {
    "id": "cld_iam_sub3_l2",
    "label": "IMDSv2 Enforcement Fact 2",
    "description": "requiring a session token via a PUT request ensures attackers leveraging simple GET-based SSRF cannot retrieve EC2 metadata.",
    "type": "source"
  },
  {
    "id": "cld_iam_sub4",
    "label": "Cross-Account Access",
    "description": "Cross-account roles replace static keys; trusting a third-party account ID with a strict ExternalId prevents the confused deputy problem during cross-account access.",
    "type": "decision"
  },
  {
    "id": "cld_iam_sub4_l1",
    "label": "Cross-Account Access Fact 1",
    "description": "Cross-account roles replace static keys.",
    "type": "action"
  },
  {
    "id": "cld_iam_sub4_l2",
    "label": "Cross-Account Access Fact 2",
    "description": "trusting a third-party account ID with a strict ExternalId prevents the confused deputy problem during cross-account access.",
    "type": "source"
  },
  {
    "id": "cld_vault",
    "label": "Secrets Management",
    "description": "Hardcoded secrets are a primary breach vector; HashiCorp Vault provides centralized secrets management, dynamic credential generation, and encryption-as-a-service.",
    "type": "example"
  },
  {
    "id": "cld_vault_sub0",
    "label": "Dynamic Secrets",
    "description": "Vault generates dynamic secrets on demand; requesting a database credential spawns a unique, TTL-bound user that is automatically revoked when the lease expires.",
    "type": "decision"
  },
  {
    "id": "cld_vault_sub0_l1",
    "label": "Dynamic Secrets Fact 1",
    "description": "Vault generates dynamic secrets on demand.",
    "type": "action"
  },
  {
    "id": "cld_vault_sub0_l2",
    "label": "Dynamic Secrets Fact 2",
    "description": "requesting a database credential spawns a unique, TTL-bound user that is automatically revoked when the lease expires.",
    "type": "source"
  },
  {
    "id": "cld_vault_sub1",
    "label": "Transit Secrets Engine",
    "description": "Transit engine provides encryption-as-a-service; applications send plaintext to Vault and receive ciphertext, ensuring the application itself never possesses the encryption keys.",
    "type": "decision"
  },
  {
    "id": "cld_vault_sub1_l1",
    "label": "Transit Secrets Engine Fact 1",
    "description": "Transit engine provides encryption-as-a-service.",
    "type": "action"
  },
  {
    "id": "cld_vault_sub1_l2",
    "label": "Transit Secrets Engine Fact 2",
    "description": "applications send plaintext to Vault and receive ciphertext, ensuring the application itself never possesses the encryption keys.",
    "type": "source"
  },
  {
    "id": "cld_vault_sub2",
    "label": "AppRole Authentication",
    "description": "AppRole authenticates machines; separating the RoleID (pushed via config) and SecretID (injected via CI/CD) ensures strong authentication for non-human identities.",
    "type": "decision"
  },
  {
    "id": "cld_vault_sub2_l1",
    "label": "AppRole Authentication Fact 1",
    "description": "AppRole authenticates machines.",
    "type": "action"
  },
  {
    "id": "cld_vault_sub2_l2",
    "label": "AppRole Authentication Fact 2",
    "description": "separating the RoleID (pushed via config) and SecretID (injected via CI/CD) ensures strong authentication for non-human identities.",
    "type": "source"
  },
  {
    "id": "cld_vault_sub3",
    "label": "Auto-Unseal",
    "description": "Vault requires unsealing upon restart; configuring AWS KMS for auto-unseal decrypts the master key automatically, removing the need for manual Shamir shard entry during scaling.",
    "type": "decision"
  },
  {
    "id": "cld_vault_sub3_l1",
    "label": "Auto-Unseal Fact 1",
    "description": "Vault requires unsealing upon restart.",
    "type": "action"
  },
  {
    "id": "cld_vault_sub3_l2",
    "label": "Auto-Unseal Fact 2",
    "description": "configuring AWS KMS for auto-unseal decrypts the master key automatically, removing the need for manual Shamir shard entry during scaling.",
    "type": "source"
  },
  {
    "id": "cld_vault_sub4",
    "label": "Secret Sprawl Prevention",
    "description": "Centralization eliminates sprawl; scanning repositories with tools like TruffleHog detects hardcoded secrets, forcing developers to retrieve them securely from the central vault at runtime.",
    "type": "decision"
  },
  {
    "id": "cld_vault_sub4_l1",
    "label": "Secret Sprawl Prevention Fact 1",
    "description": "Centralization eliminates sprawl.",
    "type": "action"
  },
  {
    "id": "cld_vault_sub4_l2",
    "label": "Secret Sprawl Prevention Fact 2",
    "description": "scanning repositories with tools like TruffleHog detects hardcoded secrets, forcing developers to retrieve them securely from the central vault at runtime.",
    "type": "source"
  },
  {
    "id": "cld_supply",
    "label": "Software Supply Chain",
    "description": "Supply chain security secures the build pipeline; SLSA Level 3 requires hermetic, reproducible builds and cryptographic provenance attestations to prevent tampering.",
    "type": "example"
  },
  {
    "id": "cld_supply_sub0",
    "label": "SBOM Generation",
    "description": "Software Bill of Materials catalogs dependencies; CycloneDX JSON format provides a machine-readable inventory of all open-source libraries used within the application.",
    "type": "decision"
  },
  {
    "id": "cld_supply_sub0_l1",
    "label": "SBOM Generation Fact 1",
    "description": "Software Bill of Materials catalogs dependencies.",
    "type": "action"
  },
  {
    "id": "cld_supply_sub0_l2",
    "label": "SBOM Generation Fact 2",
    "description": "CycloneDX JSON format provides a machine-readable inventory of all open-source libraries used within the application.",
    "type": "source"
  },
  {
    "id": "cld_supply_sub1",
    "label": "Sigstore Keyless Signing",
    "description": "Cosign enables keyless signing; it leverages OIDC identities and a transparency log (Rekor) to sign container images, eliminating the need for long-term GPG key management.",
    "type": "decision"
  },
  {
    "id": "cld_supply_sub1_l1",
    "label": "Sigstore Keyless Signing Fact 1",
    "description": "Cosign enables keyless signing.",
    "type": "action"
  },
  {
    "id": "cld_supply_sub1_l2",
    "label": "Sigstore Keyless Signing Fact 2",
    "description": "it leverages OIDC identities and a transparency log (Rekor) to sign container images, eliminating the need for long-term GPG key management.",
    "type": "source"
  },
  {
    "id": "cld_supply_sub2",
    "label": "Hermetic Builds",
    "description": "Hermetic builds isolate the environment; preventing the build process from accessing the external network ensures deterministic outputs and blocks malicious runtime dependency fetching.",
    "type": "decision"
  },
  {
    "id": "cld_supply_sub2_l1",
    "label": "Hermetic Builds Fact 1",
    "description": "Hermetic builds isolate the environment.",
    "type": "action"
  },
  {
    "id": "cld_supply_sub2_l2",
    "label": "Hermetic Builds Fact 2",
    "description": "preventing the build process from accessing the external network ensures deterministic outputs and blocks malicious runtime dependency fetching.",
    "type": "source"
  },
  {
    "id": "cld_supply_sub3",
    "label": "Provenance Attestation",
    "description": "Provenance proves the origin; cryptographic attestations verify that the binary was built by a specific GitHub Actions runner from a specific git commit, preventing pipeline injection.",
    "type": "decision"
  },
  {
    "id": "cld_supply_sub3_l1",
    "label": "Provenance Attestation Fact 1",
    "description": "Provenance proves the origin.",
    "type": "action"
  },
  {
    "id": "cld_supply_sub3_l2",
    "label": "Provenance Attestation Fact 2",
    "description": "cryptographic attestations verify that the binary was built by a specific GitHub Actions runner from a specific git commit, preventing pipeline injection.",
    "type": "source"
  },
  {
    "id": "cld_supply_sub4",
    "label": "Dependency Confusion",
    "description": "Dependency confusion exploits package managers; attackers publish high-version malicious packages to public registries, tricking internal builds into pulling them instead of private packages.",
    "type": "decision"
  },
  {
    "id": "cld_supply_sub4_l1",
    "label": "Dependency Confusion Fact 1",
    "description": "Dependency confusion exploits package managers.",
    "type": "action"
  },
  {
    "id": "cld_supply_sub4_l2",
    "label": "Dependency Confusion Fact 2",
    "description": "attackers publish high-version malicious packages to public registries, tricking internal builds into pulling them instead of private packages.",
    "type": "source"
  },
  {
    "id": "cld_cont",
    "label": "Container Security",
    "description": "Container security relies on namespace isolation and minimal attack surfaces; distroless images reduce vulnerability counts, while Trivy scans for CVEs before deployment.",
    "type": "example"
  },
  {
    "id": "cld_cont_sub0",
    "label": "Rootless Containers",
    "description": "Rootless Docker maps the container root to a non-privileged host user; container escape vulnerabilities yield limited host access since the process lacks true UID 0 capabilities.",
    "type": "decision"
  },
  {
    "id": "cld_cont_sub0_l1",
    "label": "Rootless Containers Fact 1",
    "description": "Rootless Docker maps the container root to a non-privileged host user.",
    "type": "action"
  },
  {
    "id": "cld_cont_sub0_l2",
    "label": "Rootless Containers Fact 2",
    "description": "container escape vulnerabilities yield limited host access since the process lacks true UID 0 capabilities.",
    "type": "source"
  },
  {
    "id": "cld_cont_sub1",
    "label": "Seccomp Profiles",
    "description": "Seccomp limits kernel attack surface; a strict profile filters out dangerous system calls like ptrace or kexec_load, mitigating kernel-level exploit execution within the container.",
    "type": "decision"
  },
  {
    "id": "cld_cont_sub1_l1",
    "label": "Seccomp Profiles Fact 1",
    "description": "Seccomp limits kernel attack surface.",
    "type": "action"
  },
  {
    "id": "cld_cont_sub1_l2",
    "label": "Seccomp Profiles Fact 2",
    "description": "a strict profile filters out dangerous system calls like ptrace or kexec_load, mitigating kernel-level exploit execution within the container.",
    "type": "source"
  },
  {
    "id": "cld_cont_sub2",
    "label": "Read-Only RootFS",
    "description": "Immutability hardens containers; running with a read-only root filesystem prevents attackers from dropping payloads or modifying system binaries post-compromise.",
    "type": "decision"
  },
  {
    "id": "cld_cont_sub2_l1",
    "label": "Read-Only RootFS Fact 1",
    "description": "Immutability hardens containers.",
    "type": "action"
  },
  {
    "id": "cld_cont_sub2_l2",
    "label": "Read-Only RootFS Fact 2",
    "description": "running with a read-only root filesystem prevents attackers from dropping payloads or modifying system binaries post-compromise.",
    "type": "source"
  },
  {
    "id": "cld_cont_sub3",
    "label": "Capabilities Dropping",
    "description": "Linux capabilities partition root power; dropping ALL capabilities and only adding specifically required ones (like NET_BIND_SERVICE) enforces least privilege on the process.",
    "type": "decision"
  },
  {
    "id": "cld_cont_sub3_l1",
    "label": "Capabilities Dropping Fact 1",
    "description": "Linux capabilities partition root power.",
    "type": "action"
  },
  {
    "id": "cld_cont_sub3_l2",
    "label": "Capabilities Dropping Fact 2",
    "description": "dropping ALL capabilities and only adding specifically required ones (like NET_BIND_SERVICE) enforces least privilege on the process.",
    "type": "source"
  },
  {
    "id": "cld_cont_sub4",
    "label": "CVE Scanning",
    "description": "Container scanners evaluate layers; Trivy parses the image manifest to identify vulnerable OS packages and language-specific dependencies, filtering by CVSS score for critical remediation.",
    "type": "decision"
  },
  {
    "id": "cld_cont_sub4_l1",
    "label": "CVE Scanning Fact 1",
    "description": "Container scanners evaluate layers.",
    "type": "action"
  },
  {
    "id": "cld_cont_sub4_l2",
    "label": "CVE Scanning Fact 2",
    "description": "Trivy parses the image manifest to identify vulnerable OS packages and language-specific dependencies, filtering by CVSS score for critical remediation.",
    "type": "source"
  },
  {
    "id": "cld_k8s",
    "label": "Kubernetes Security",
    "description": "Kubernetes demands strict RBAC and Admission Controllers; OPA Gatekeeper enforces cluster-wide policies, preventing the deployment of privileged containers or images from untrusted registries.",
    "type": "example"
  },
  {
    "id": "cld_k8s_sub0",
    "label": "RBAC Authorization",
    "description": "K8s RBAC binds Roles to ServiceAccounts; ensuring pods run with minimal permissions prevents a compromised pod from extracting secrets from the entire namespace.",
    "type": "decision"
  },
  {
    "id": "cld_k8s_sub0_l1",
    "label": "RBAC Authorization Fact 1",
    "description": "K8s RBAC binds Roles to ServiceAccounts.",
    "type": "action"
  },
  {
    "id": "cld_k8s_sub0_l2",
    "label": "RBAC Authorization Fact 2",
    "description": "ensuring pods run with minimal permissions prevents a compromised pod from extracting secrets from the entire namespace.",
    "type": "source"
  },
  {
    "id": "cld_k8s_sub1",
    "label": "Network Policies",
    "description": "NetworkPolicies act as micro-firewalls; defining a default-deny policy explicitly requires developers to whitelist which pods can communicate, stopping lateral movement.",
    "type": "decision"
  },
  {
    "id": "cld_k8s_sub1_l1",
    "label": "Network Policies Fact 1",
    "description": "NetworkPolicies act as micro-firewalls.",
    "type": "action"
  },
  {
    "id": "cld_k8s_sub1_l2",
    "label": "Network Policies Fact 2",
    "description": "defining a default-deny policy explicitly requires developers to whitelist which pods can communicate, stopping lateral movement.",
    "type": "source"
  },
  {
    "id": "cld_k8s_sub2",
    "label": "Admission Controllers",
    "description": "Validating admission webhooks evaluate requests; OPA Gatekeeper intercepts API requests to enforce policies, such as denying pods that request hostNetwork or privileged execution.",
    "type": "decision"
  },
  {
    "id": "cld_k8s_sub2_l1",
    "label": "Admission Controllers Fact 1",
    "description": "Validating admission webhooks evaluate requests.",
    "type": "action"
  },
  {
    "id": "cld_k8s_sub2_l2",
    "label": "Admission Controllers Fact 2",
    "description": "OPA Gatekeeper intercepts API requests to enforce policies, such as denying pods that request hostNetwork or privileged execution.",
    "type": "source"
  },
  {
    "id": "cld_k8s_sub3",
    "label": "Kubelet Authentication",
    "description": "The Kubelet API must be secured; disabling anonymous access and enforcing x509 client certificate authentication prevents attackers from manually scheduling malicious workloads on nodes.",
    "type": "decision"
  },
  {
    "id": "cld_k8s_sub3_l1",
    "label": "Kubelet Authentication Fact 1",
    "description": "The Kubelet API must be secured.",
    "type": "action"
  },
  {
    "id": "cld_k8s_sub3_l2",
    "label": "Kubelet Authentication Fact 2",
    "description": "disabling anonymous access and enforcing x509 client certificate authentication prevents attackers from manually scheduling malicious workloads on nodes.",
    "type": "source"
  },
  {
    "id": "cld_k8s_sub4",
    "label": "Secret Encryption",
    "description": "etcd stores cluster state; configuring an EncryptionConfiguration ensures that Kubernetes secrets are encrypted at rest using an external KMS, rather than stored as base64 plaintext.",
    "type": "decision"
  },
  {
    "id": "cld_k8s_sub4_l1",
    "label": "Secret Encryption Fact 1",
    "description": "etcd stores cluster state.",
    "type": "action"
  },
  {
    "id": "cld_k8s_sub4_l2",
    "label": "Secret Encryption Fact 2",
    "description": "configuring an EncryptionConfiguration ensures that Kubernetes secrets are encrypted at rest using an external KMS, rather than stored as base64 plaintext.",
    "type": "source"
  },
  {
    "id": "sec_p7",
    "label": "Offensive Security",
    "description": "Offensive security actively tests defenses through red teaming and penetration testing; methodologies follow the kill chain from OSINT reconnaissance to post-exploitation lateral movement.",
    "type": "concept"
  },
  {
    "id": "off_osint",
    "label": "OSINT & Recon",
    "description": "Open Source Intelligence gathers data without direct interaction; Shodan and Censys provide internet-wide port scanning data, while Maltego graphs entity relationships.",
    "type": "example"
  },
  {
    "id": "off_osint_sub0",
    "label": "Shodan Dorks",
    "description": "Shodan indexes service banners; queries like 'port:9200 product:elastic' quickly identify exposed, unauthenticated Elasticsearch clusters across the internet.",
    "type": "decision"
  },
  {
    "id": "off_osint_sub0_l1",
    "label": "Shodan Dorks Fact 1",
    "description": "Shodan indexes service banners.",
    "type": "action"
  },
  {
    "id": "off_osint_sub0_l2",
    "label": "Shodan Dorks Fact 2",
    "description": "queries like 'port:9200 product:elastic' quickly identify exposed, unauthenticated Elasticsearch clusters across the internet.",
    "type": "source"
  },
  {
    "id": "off_osint_sub1",
    "label": "Certificate Transparency",
    "description": "CT logs publicly record issued certificates; searching crt.sh reveals internal subdomains and infrastructure staging environments before they are officially announced.",
    "type": "decision"
  },
  {
    "id": "off_osint_sub1_l1",
    "label": "Certificate Transparency Fact 1",
    "description": "CT logs publicly record issued certificates.",
    "type": "action"
  },
  {
    "id": "off_osint_sub1_l2",
    "label": "Certificate Transparency Fact 2",
    "description": "searching crt.sh reveals internal subdomains and infrastructure staging environments before they are officially announced.",
    "type": "source"
  },
  {
    "id": "off_osint_sub2",
    "label": "GitHub Dorking",
    "description": "Source code repositories leak secrets; automated searches for 'AKIA' or 'BEGIN RSA PRIVATE KEY' in recent commits identify credentials accidentally pushed to public repositories.",
    "type": "decision"
  },
  {
    "id": "off_osint_sub2_l1",
    "label": "GitHub Dorking Fact 1",
    "description": "Source code repositories leak secrets.",
    "type": "action"
  },
  {
    "id": "off_osint_sub2_l2",
    "label": "GitHub Dorking Fact 2",
    "description": "automated searches for 'AKIA' or 'BEGIN RSA PRIVATE KEY' in recent commits identify credentials accidentally pushed to public repositories.",
    "type": "source"
  },
  {
    "id": "off_osint_sub3",
    "label": "Maltego Graphs",
    "description": "Maltego visualizes connections; starting with a domain name, transforms query DNS and WHOIS records to build a comprehensive map of the target's external infrastructure.",
    "type": "decision"
  },
  {
    "id": "off_osint_sub3_l1",
    "label": "Maltego Graphs Fact 1",
    "description": "Maltego visualizes connections.",
    "type": "action"
  },
  {
    "id": "off_osint_sub3_l2",
    "label": "Maltego Graphs Fact 2",
    "description": "starting with a domain name, transforms query DNS and WHOIS records to build a comprehensive map of the target's external infrastructure.",
    "type": "source"
  },
  {
    "id": "off_osint_sub4",
    "label": "Passive DNS",
    "description": "Passive DNS databases store historical resolutions; this allows analysts to track infrastructure changes and identify hidden IP addresses previously associated with a target domain.",
    "type": "decision"
  },
  {
    "id": "off_osint_sub4_l1",
    "label": "Passive DNS Fact 1",
    "description": "Passive DNS databases store historical resolutions.",
    "type": "action"
  },
  {
    "id": "off_osint_sub4_l2",
    "label": "Passive DNS Fact 2",
    "description": "this allows analysts to track infrastructure changes and identify hidden IP addresses previously associated with a target domain.",
    "type": "source"
  },
  {
    "id": "off_vuln",
    "label": "Vulnerability Scoring",
    "description": "Vulnerability management relies on standardized scoring; CVEs utilize the CVSS v3 framework to quantify severity based on Attack Vector, Complexity, Privileges, and User Interaction.",
    "type": "example"
  },
  {
    "id": "off_vuln_sub0",
    "label": "CVSS Attack Vector",
    "description": "The Network (N) vector indicates remote exploitability; a vulnerability requiring physical access (P) poses significantly less systemic risk than one exploitable globally.",
    "type": "decision"
  },
  {
    "id": "off_vuln_sub0_l1",
    "label": "CVSS Attack Vector Fact 1",
    "description": "The Network (N) vector indicates remote exploitability.",
    "type": "action"
  },
  {
    "id": "off_vuln_sub0_l2",
    "label": "CVSS Attack Vector Fact 2",
    "description": "a vulnerability requiring physical access (P) poses significantly less systemic risk than one exploitable globally.",
    "type": "source"
  },
  {
    "id": "off_vuln_sub1",
    "label": "CVSS Complexity",
    "description": "Attack Complexity (AC) measures reliability; a low complexity exploit works consistently, whereas high complexity requires precise timing or specific memory layout conditions.",
    "type": "decision"
  },
  {
    "id": "off_vuln_sub1_l1",
    "label": "CVSS Complexity Fact 1",
    "description": "Attack Complexity (AC) measures reliability.",
    "type": "action"
  },
  {
    "id": "off_vuln_sub1_l2",
    "label": "CVSS Complexity Fact 2",
    "description": "a low complexity exploit works consistently, whereas high complexity requires precise timing or specific memory layout conditions.",
    "type": "source"
  },
  {
    "id": "off_vuln_sub2",
    "label": "CVSS Privileges",
    "description": "Privileges Required (PR) evaluates access; vulnerabilities requiring administrative access (High) have a smaller attack surface than zero-click unauthenticated (None) exploits.",
    "type": "decision"
  },
  {
    "id": "off_vuln_sub2_l1",
    "label": "CVSS Privileges Fact 1",
    "description": "Privileges Required (PR) evaluates access.",
    "type": "action"
  },
  {
    "id": "off_vuln_sub2_l2",
    "label": "CVSS Privileges Fact 2",
    "description": "vulnerabilities requiring administrative access (High) have a smaller attack surface than zero-click unauthenticated (None) exploits.",
    "type": "source"
  },
  {
    "id": "off_vuln_sub3",
    "label": "Exploit-DB Searchsploit",
    "description": "Searchsploit provides local access to Exploit-DB; offensive teams use it to rapidly identify and adapt public Proof of Concept code for specific software versions encountered.",
    "type": "decision"
  },
  {
    "id": "off_vuln_sub3_l1",
    "label": "Exploit-DB Searchsploit Fact 1",
    "description": "Searchsploit provides local access to Exploit-DB.",
    "type": "action"
  },
  {
    "id": "off_vuln_sub3_l2",
    "label": "Exploit-DB Searchsploit Fact 2",
    "description": "offensive teams use it to rapidly identify and adapt public Proof of Concept code for specific software versions encountered.",
    "type": "source"
  },
  {
    "id": "off_vuln_sub4",
    "label": "Weaponization",
    "description": "Exploit weaponization adapts PoCs; modifying standard buffer overflows to bypass modern mitigations like ASLR and DEP using custom Return Oriented Programming (ROP) chains.",
    "type": "decision"
  },
  {
    "id": "off_vuln_sub4_l1",
    "label": "Weaponization Fact 1",
    "description": "Exploit weaponization adapts PoCs.",
    "type": "action"
  },
  {
    "id": "off_vuln_sub4_l2",
    "label": "Weaponization Fact 2",
    "description": "modifying standard buffer overflows to bypass modern mitigations like ASLR and DEP using custom Return Oriented Programming (ROP) chains.",
    "type": "source"
  },
  {
    "id": "off_privesc",
    "label": "Privilege Escalation",
    "description": "Post-exploitation focuses on privilege escalation; attackers identify writable cron jobs, exploit kernel vulnerabilities, or abuse Windows token impersonation to gain SYSTEM or root.",
    "type": "example"
  },
  {
    "id": "off_privesc_sub0",
    "label": "Writable Cron Jobs",
    "description": "Cron jobs running as root execute scripts; if a script or its directory is world-writable, attackers inject reverse shells that trigger upon the next scheduled execution.",
    "type": "decision"
  },
  {
    "id": "off_privesc_sub0_l1",
    "label": "Writable Cron Jobs Fact 1",
    "description": "Cron jobs running as root execute scripts.",
    "type": "action"
  },
  {
    "id": "off_privesc_sub0_l2",
    "label": "Writable Cron Jobs Fact 2",
    "description": "if a script or its directory is world-writable, attackers inject reverse shells that trigger upon the next scheduled execution.",
    "type": "source"
  },
  {
    "id": "off_privesc_sub1",
    "label": "Kernel Exploits",
    "description": "Kernel exploits target OS vulnerabilities; tools like Dirty COW (CVE-2016-5195) exploit race conditions in memory management to gain immediate root access.",
    "type": "decision"
  },
  {
    "id": "off_privesc_sub1_l1",
    "label": "Kernel Exploits Fact 1",
    "description": "Kernel exploits target OS vulnerabilities.",
    "type": "action"
  },
  {
    "id": "off_privesc_sub1_l2",
    "label": "Kernel Exploits Fact 2",
    "description": "tools like Dirty COW (CVE-2016-5195) exploit race conditions in memory management to gain immediate root access.",
    "type": "source"
  },
  {
    "id": "off_privesc_sub2",
    "label": "DLL Hijacking",
    "description": "Windows applications load DLLs dynamically; placing a malicious DLL in a directory searched prior to the legitimate DLL's location allows code execution in the application's context.",
    "type": "decision"
  },
  {
    "id": "off_privesc_sub2_l1",
    "label": "DLL Hijacking Fact 1",
    "description": "Windows applications load DLLs dynamically.",
    "type": "action"
  },
  {
    "id": "off_privesc_sub2_l2",
    "label": "DLL Hijacking Fact 2",
    "description": "placing a malicious DLL in a directory searched prior to the legitimate DLL's location allows code execution in the application's context.",
    "type": "source"
  },
  {
    "id": "off_privesc_sub3",
    "label": "AlwaysInstallElevated",
    "description": "Windows MSI misconfigurations are dangerous; if AlwaysInstallElevated is enabled in the registry, any user can execute a malicious MSI package with NT AUTHORITY\\SYSTEM privileges.",
    "type": "decision"
  },
  {
    "id": "off_privesc_sub3_l1",
    "label": "AlwaysInstallElevated Fact 1",
    "description": "Windows MSI misconfigurations are dangerous.",
    "type": "action"
  },
  {
    "id": "off_privesc_sub3_l2",
    "label": "AlwaysInstallElevated Fact 2",
    "description": "if AlwaysInstallElevated is enabled in the registry, any user can execute a malicious MSI package with NT AUTHORITY\\SYSTEM privileges.",
    "type": "source"
  },
  {
    "id": "off_privesc_sub4",
    "label": "SUID Enumeration",
    "description": "Running 'find / -perm -4000' locates SUID binaries; exploiting customized or misconfigured binaries (like GTFOBins) allows users to break out of restricted shells.",
    "type": "decision"
  },
  {
    "id": "off_privesc_sub4_l1",
    "label": "SUID Enumeration Fact 1",
    "description": "Running 'find / -perm -4000' locates SUID binaries.",
    "type": "action"
  },
  {
    "id": "off_privesc_sub4_l2",
    "label": "SUID Enumeration Fact 2",
    "description": "exploiting customized or misconfigured binaries (like GTFOBins) allows users to break out of restricted shells.",
    "type": "source"
  },
  {
    "id": "off_lat",
    "label": "Lateral Movement",
    "description": "Lateral movement traverses the network utilizing compromised credentials; Pass-the-Hash bypasses plaintext passwords, while PsExec and WMI execute commands remotely.",
    "type": "example"
  },
  {
    "id": "off_lat_sub0",
    "label": "Pass-the-Hash",
    "description": "Pass-the-Hash exploits NTLM authentication; attackers capture the NTLM hash via LSASS and use it directly with tools like Mimikatz or CrackMapExec to authenticate to other hosts.",
    "type": "decision"
  },
  {
    "id": "off_lat_sub0_l1",
    "label": "Pass-the-Hash Fact 1",
    "description": "Pass-the-Hash exploits NTLM authentication.",
    "type": "action"
  },
  {
    "id": "off_lat_sub0_l2",
    "label": "Pass-the-Hash Fact 2",
    "description": "attackers capture the NTLM hash via LSASS and use it directly with tools like Mimikatz or CrackMapExec to authenticate to other hosts.",
    "type": "source"
  },
  {
    "id": "off_lat_sub1",
    "label": "WMI Execution",
    "description": "Windows Management Instrumentation provides stealthy execution; WMI avoids dropping executables to disk, executing commands remotely through standardized RPC endpoints.",
    "type": "decision"
  },
  {
    "id": "off_lat_sub1_l1",
    "label": "WMI Execution Fact 1",
    "description": "Windows Management Instrumentation provides stealthy execution.",
    "type": "action"
  },
  {
    "id": "off_lat_sub1_l2",
    "label": "WMI Execution Fact 2",
    "description": "WMI avoids dropping executables to disk, executing commands remotely through standardized RPC endpoints.",
    "type": "source"
  },
  {
    "id": "off_lat_sub2",
    "label": "SMB Relay",
    "description": "SMB relay intercepts authentication; if SMB signing is disabled, an attacker positions themselves as a man-in-the-middle to forward captured NTLMv2 hashes to execute commands on target servers.",
    "type": "decision"
  },
  {
    "id": "off_lat_sub2_l1",
    "label": "SMB Relay Fact 1",
    "description": "SMB relay intercepts authentication.",
    "type": "action"
  },
  {
    "id": "off_lat_sub2_l2",
    "label": "SMB Relay Fact 2",
    "description": "if SMB signing is disabled, an attacker positions themselves as a man-in-the-middle to forward captured NTLMv2 hashes to execute commands on target servers.",
    "type": "source"
  },
  {
    "id": "off_lat_sub3",
    "label": "BloodHound Paths",
    "description": "BloodHound maps Active Directory; it uses graph theory to visualize complex attack paths, identifying the shortest route from a compromised user to Domain Admin privileges.",
    "type": "decision"
  },
  {
    "id": "off_lat_sub3_l1",
    "label": "BloodHound Paths Fact 1",
    "description": "BloodHound maps Active Directory.",
    "type": "action"
  },
  {
    "id": "off_lat_sub3_l2",
    "label": "BloodHound Paths Fact 2",
    "description": "it uses graph theory to visualize complex attack paths, identifying the shortest route from a compromised user to Domain Admin privileges.",
    "type": "source"
  },
  {
    "id": "off_lat_sub4",
    "label": "SSH Key Hijacking",
    "description": "Compromising developer workstations yields SSH keys; traversing .ssh directories provides access to private keys and known_hosts files for pivoting into production servers.",
    "type": "decision"
  },
  {
    "id": "off_lat_sub4_l1",
    "label": "SSH Key Hijacking Fact 1",
    "description": "Compromising developer workstations yields SSH keys.",
    "type": "action"
  },
  {
    "id": "off_lat_sub4_l2",
    "label": "SSH Key Hijacking Fact 2",
    "description": "traversing .ssh directories provides access to private keys and known_hosts files for pivoting into production servers.",
    "type": "source"
  },
  {
    "id": "off_c2",
    "label": "Command & Control",
    "description": "Command and Control (C2) frameworks maintain persistent access; Cobalt Strike uses Malleable C2 profiles to mimic legitimate traffic and evade network detection systems.",
    "type": "example"
  },
  {
    "id": "off_c2_sub0",
    "label": "Malleable C2 Profiles",
    "description": "Malleable profiles shape traffic; customizing HTTP headers, URIs, and payload encoding allows the Beacon to blend seamlessly with normal web browsing or API calls.",
    "type": "decision"
  },
  {
    "id": "off_c2_sub0_l1",
    "label": "Malleable C2 Profiles Fact 1",
    "description": "Malleable profiles shape traffic.",
    "type": "action"
  },
  {
    "id": "off_c2_sub0_l2",
    "label": "Malleable C2 Profiles Fact 2",
    "description": "customizing HTTP headers, URIs, and payload encoding allows the Beacon to blend seamlessly with normal web browsing or API calls.",
    "type": "source"
  },
  {
    "id": "off_c2_sub1",
    "label": "Domain Fronting",
    "description": "Domain fronting obfuscates the destination; the DNS request and SNI point to a highly trusted CDN domain, while the HTTP Host header directs traffic to the attacker's infrastructure.",
    "type": "decision"
  },
  {
    "id": "off_c2_sub1_l1",
    "label": "Domain Fronting Fact 1",
    "description": "Domain fronting obfuscates the destination.",
    "type": "action"
  },
  {
    "id": "off_c2_sub1_l2",
    "label": "Domain Fronting Fact 2",
    "description": "the DNS request and SNI point to a highly trusted CDN domain, while the HTTP Host header directs traffic to the attacker's infrastructure.",
    "type": "source"
  },
  {
    "id": "off_c2_sub2",
    "label": "DNS Tunneling",
    "description": "DNS tunneling bypasses direct outbound blocks; data is encoded within subdomains of TXT record queries, communicating with the attacker's authoritative name server.",
    "type": "decision"
  },
  {
    "id": "off_c2_sub2_l1",
    "label": "DNS Tunneling Fact 1",
    "description": "DNS tunneling bypasses direct outbound blocks.",
    "type": "action"
  },
  {
    "id": "off_c2_sub2_l2",
    "label": "DNS Tunneling Fact 2",
    "description": "data is encoded within subdomains of TXT record queries, communicating with the attacker's authoritative name server.",
    "type": "source"
  },
  {
    "id": "off_c2_sub3",
    "label": "In-Memory Execution",
    "description": "Reflective DLL injection executes payloads in memory; avoiding disk I/O prevents traditional antivirus scanners from analyzing the malicious binary signature.",
    "type": "decision"
  },
  {
    "id": "off_c2_sub3_l1",
    "label": "In-Memory Execution Fact 1",
    "description": "Reflective DLL injection executes payloads in memory.",
    "type": "action"
  },
  {
    "id": "off_c2_sub3_l2",
    "label": "In-Memory Execution Fact 2",
    "description": "avoiding disk I/O prevents traditional antivirus scanners from analyzing the malicious binary signature.",
    "type": "source"
  },
  {
    "id": "off_c2_sub4",
    "label": "Beaconing Jitter",
    "description": "Beacons introduce sleep and jitter; randomizing the callback interval prevents security operations centers from identifying rigid, predictable communication patterns.",
    "type": "decision"
  },
  {
    "id": "off_c2_sub4_l1",
    "label": "Beaconing Jitter Fact 1",
    "description": "Beacons introduce sleep and jitter.",
    "type": "action"
  },
  {
    "id": "off_c2_sub4_l2",
    "label": "Beaconing Jitter Fact 2",
    "description": "randomizing the callback interval prevents security operations centers from identifying rigid, predictable communication patterns.",
    "type": "source"
  },
  {
    "id": "off_team",
    "label": "Red & Purple Teaming",
    "description": "Red teams simulate adversary operations in assumed breach scenarios; Purple teaming merges offensive techniques with defensive detection engineering to actively improve SIEM rules.",
    "type": "example"
  },
  {
    "id": "off_team_sub0",
    "label": "Assumed Breach",
    "description": "Assumed breach scenarios skip the perimeter; testing begins with standard user access, focusing entirely on internal controls, lateral movement, and data exfiltration resilience.",
    "type": "decision"
  },
  {
    "id": "off_team_sub0_l1",
    "label": "Assumed Breach Fact 1",
    "description": "Assumed breach scenarios skip the perimeter.",
    "type": "action"
  },
  {
    "id": "off_team_sub0_l2",
    "label": "Assumed Breach Fact 2",
    "description": "testing begins with standard user access, focusing entirely on internal controls, lateral movement, and data exfiltration resilience.",
    "type": "source"
  },
  {
    "id": "off_team_sub1",
    "label": "Detection Engineering",
    "description": "Purple teams develop detections iteratively; the red team executes a specific MITRE ATT&CK technique, and the blue team builds SIEM correlation rules to consistently detect it.",
    "type": "decision"
  },
  {
    "id": "off_team_sub1_l1",
    "label": "Detection Engineering Fact 1",
    "description": "Purple teams develop detections iteratively.",
    "type": "action"
  },
  {
    "id": "off_team_sub1_l2",
    "label": "Detection Engineering Fact 2",
    "description": "the red team executes a specific MITRE ATT&CK technique, and the blue team builds SIEM correlation rules to consistently detect it.",
    "type": "source"
  },
  {
    "id": "off_team_sub2",
    "label": "Adversary Emulation",
    "description": "Emulation mimics specific threat actors; replicating the exact TTPs of APT29 ensures defenses are calibrated against relevant, real-world state-sponsored threats.",
    "type": "decision"
  },
  {
    "id": "off_team_sub2_l1",
    "label": "Adversary Emulation Fact 1",
    "description": "Emulation mimics specific threat actors.",
    "type": "action"
  },
  {
    "id": "off_team_sub2_l2",
    "label": "Adversary Emulation Fact 2",
    "description": "replicating the exact TTPs of APT29 ensures defenses are calibrated against relevant, real-world state-sponsored threats.",
    "type": "source"
  },
  {
    "id": "off_team_sub3",
    "label": "Deception Technology",
    "description": "Honeypots and honeytokens deceive attackers; planting fake AWS keys or decoy database credentials provides high-fidelity alerts when an attacker attempts to utilize them.",
    "type": "decision"
  },
  {
    "id": "off_team_sub3_l1",
    "label": "Deception Technology Fact 1",
    "description": "Honeypots and honeytokens deceive attackers.",
    "type": "action"
  },
  {
    "id": "off_team_sub3_l2",
    "label": "Deception Technology Fact 2",
    "description": "planting fake AWS keys or decoy database credentials provides high-fidelity alerts when an attacker attempts to utilize them.",
    "type": "source"
  },
  {
    "id": "off_team_sub4",
    "label": "Actionable Reporting",
    "description": "Offensive reporting must be actionable; detailing the exploitation narrative alongside specific remediation guidance ensures engineering teams can effectively close the identified gaps.",
    "type": "decision"
  },
  {
    "id": "off_team_sub4_l1",
    "label": "Actionable Reporting Fact 1",
    "description": "Offensive reporting must be actionable.",
    "type": "action"
  },
  {
    "id": "off_team_sub4_l2",
    "label": "Actionable Reporting Fact 2",
    "description": "detailing the exploitation narrative alongside specific remediation guidance ensures engineering teams can effectively close the identified gaps.",
    "type": "source"
  },
  {
    "id": "sec_p8",
    "label": "Compliance & IR",
    "description": "Compliance frameworks mandate security controls, while Incident Response playbooks dictate the systematic approach to containing and eradicating active threats.",
    "type": "concept"
  },
  {
    "id": "comp_soc",
    "label": "Compliance Frameworks",
    "description": "Frameworks structure governance; SOC 2 Type II evaluates 5 trust services criteria over time, while ISO 27001 Annex A provides 93 specific controls organized into 4 themes.",
    "type": "example"
  },
  {
    "id": "comp_soc_sub0",
    "label": "SOC 2 Type II",
    "description": "Type II reports assess operational effectiveness over an observation period (usually 6-12 months), proving that controls for Security, Availability, and Confidentiality are consistently followed.",
    "type": "decision"
  },
  {
    "id": "comp_soc_sub0_l1",
    "label": "SOC 2 Type II Fact 1",
    "description": "Type II reports assess operational effectiveness over an observation period (usually 6-12 months), proving that controls for Security, Availability, and Confidentiality are consistently followed.",
    "type": "action"
  },
  {
    "id": "comp_soc_sub0_l2",
    "label": "SOC 2 Type II Fact 2",
    "description": "SOC 2 Type II requires explicit cryptographic or logical separation enforcement.",
    "type": "source"
  },
  {
    "id": "comp_soc_sub1",
    "label": "ISO 27001 Controls",
    "description": "ISO 27001 emphasizes continuous improvement; Annex A controls cover organizational, people, physical, and technological themes to build a comprehensive Information Security Management System (ISMS).",
    "type": "decision"
  },
  {
    "id": "comp_soc_sub1_l1",
    "label": "ISO 27001 Controls Fact 1",
    "description": "ISO 27001 emphasizes continuous improvement.",
    "type": "action"
  },
  {
    "id": "comp_soc_sub1_l2",
    "label": "ISO 27001 Controls Fact 2",
    "description": "Annex A controls cover organizational, people, physical, and technological themes to build a comprehensive Information Security Management System (ISMS).",
    "type": "source"
  },
  {
    "id": "comp_soc_sub2",
    "label": "PCI-DSS v4",
    "description": "PCI-DSS mandates strict Cardholder Data Environment (CDE) segmentation; Requirement 11 enforces continuous external vulnerability scanning and regular internal penetration testing.",
    "type": "decision"
  },
  {
    "id": "comp_soc_sub2_l1",
    "label": "PCI-DSS v4 Fact 1",
    "description": "PCI-DSS mandates strict Cardholder Data Environment (CDE) segmentation.",
    "type": "action"
  },
  {
    "id": "comp_soc_sub2_l2",
    "label": "PCI-DSS v4 Fact 2",
    "description": "Requirement 11 enforces continuous external vulnerability scanning and regular internal penetration testing.",
    "type": "source"
  },
  {
    "id": "comp_soc_sub3",
    "label": "GDPR Article 25",
    "description": "GDPR demands Data Protection by Design and by Default; integrating privacy considerations directly into the SDLC architecture is legally required for processing EU citizen data.",
    "type": "decision"
  },
  {
    "id": "comp_soc_sub3_l1",
    "label": "GDPR Article 25 Fact 1",
    "description": "GDPR demands Data Protection by Design and by Default.",
    "type": "action"
  },
  {
    "id": "comp_soc_sub3_l2",
    "label": "GDPR Article 25 Fact 2",
    "description": "integrating privacy considerations directly into the SDLC architecture is legally required for processing EU citizen data.",
    "type": "source"
  },
  {
    "id": "comp_soc_sub4",
    "label": "HIPAA Safeguards",
    "description": "HIPAA requires technical safeguards; implementing strong encryption at rest and in transit is necessary to protect Electronic Protected Health Information (ePHI) from unauthorized disclosure.",
    "type": "decision"
  },
  {
    "id": "comp_soc_sub4_l1",
    "label": "HIPAA Safeguards Fact 1",
    "description": "HIPAA requires technical safeguards.",
    "type": "action"
  },
  {
    "id": "comp_soc_sub4_l2",
    "label": "HIPAA Safeguards Fact 2",
    "description": "implementing strong encryption at rest and in transit is necessary to protect Electronic Protected Health Information (ePHI) from unauthorized disclosure.",
    "type": "source"
  },
  {
    "id": "comp_nist",
    "label": "NIST CSF 2.0",
    "description": "The NIST Cybersecurity Framework 2.0 organizes activities into six core functions: Govern, Identify, Protect, Detect, Respond, and Recover, aligning risk management with business outcomes.",
    "type": "example"
  },
  {
    "id": "comp_nist_sub0",
    "label": "Govern & Identify",
    "description": "Governance establishes the strategy; Identification requires maintaining a comprehensive asset inventory and understanding supply chain risks to prioritize security investments.",
    "type": "decision"
  },
  {
    "id": "comp_nist_sub0_l1",
    "label": "Govern & Identify Fact 1",
    "description": "Governance establishes the strategy.",
    "type": "action"
  },
  {
    "id": "comp_nist_sub0_l2",
    "label": "Govern & Identify Fact 2",
    "description": "Identification requires maintaining a comprehensive asset inventory and understanding supply chain risks to prioritize security investments.",
    "type": "source"
  },
  {
    "id": "comp_nist_sub1",
    "label": "Protect Function",
    "description": "Protection implements safeguards; deploying IAM architectures, network segmentation, and endpoint protection platforms physically limits the impact of potential cybersecurity events.",
    "type": "decision"
  },
  {
    "id": "comp_nist_sub1_l1",
    "label": "Protect Function Fact 1",
    "description": "Protection implements safeguards.",
    "type": "action"
  },
  {
    "id": "comp_nist_sub1_l2",
    "label": "Protect Function Fact 2",
    "description": "deploying IAM architectures, network segmentation, and endpoint protection platforms physically limits the impact of potential cybersecurity events.",
    "type": "source"
  },
  {
    "id": "comp_nist_sub2",
    "label": "Detect Function",
    "description": "Detection enables timely discovery; deploying SIEM solutions and configuring continuous monitoring ensures anomalous activities are flagged before they escalate into breaches.",
    "type": "decision"
  },
  {
    "id": "comp_nist_sub2_l1",
    "label": "Detect Function Fact 1",
    "description": "Detection enables timely discovery.",
    "type": "action"
  },
  {
    "id": "comp_nist_sub2_l2",
    "label": "Detect Function Fact 2",
    "description": "deploying SIEM solutions and configuring continuous monitoring ensures anomalous activities are flagged before they escalate into breaches.",
    "type": "source"
  },
  {
    "id": "comp_nist_sub3",
    "label": "Respond Function",
    "description": "Response executes the incident playbook; actions include communications with stakeholders, technical containment, and forensic analysis to understand the breach scope.",
    "type": "decision"
  },
  {
    "id": "comp_nist_sub3_l1",
    "label": "Respond Function Fact 1",
    "description": "Response executes the incident playbook.",
    "type": "action"
  },
  {
    "id": "comp_nist_sub3_l2",
    "label": "Respond Function Fact 2",
    "description": "actions include communications with stakeholders, technical containment, and forensic analysis to understand the breach scope.",
    "type": "source"
  },
  {
    "id": "comp_nist_sub4",
    "label": "Recover Function",
    "description": "Recovery restores normal operations; executing resilient backup restorations and communicating post-incident improvements ensures business continuity following an attack.",
    "type": "decision"
  },
  {
    "id": "comp_nist_sub4_l1",
    "label": "Recover Function Fact 1",
    "description": "Recovery restores normal operations.",
    "type": "action"
  },
  {
    "id": "comp_nist_sub4_l2",
    "label": "Recover Function Fact 2",
    "description": "executing resilient backup restorations and communicating post-incident improvements ensures business continuity following an attack.",
    "type": "source"
  },
  {
    "id": "comp_ir",
    "label": "Incident Response",
    "description": "IR playbooks follow a structured lifecycle: Preparation, Identification, Containment, Eradication, Recovery, and Lessons Learned, minimizing chaos during high-stress breaches.",
    "type": "example"
  },
  {
    "id": "comp_ir_sub0",
    "label": "Preparation Phase",
    "description": "Preparation is critical; developing out-of-band communication channels and conducting tabletop exercises ensures the team executes smoothly when the primary network is compromised.",
    "type": "decision"
  },
  {
    "id": "comp_ir_sub0_l1",
    "label": "Preparation Phase Fact 1",
    "description": "Preparation is critical.",
    "type": "action"
  },
  {
    "id": "comp_ir_sub0_l2",
    "label": "Preparation Phase Fact 2",
    "description": "developing out-of-band communication channels and conducting tabletop exercises ensures the team executes smoothly when the primary network is compromised.",
    "type": "source"
  },
  {
    "id": "comp_ir_sub1",
    "label": "Identification Phase",
    "description": "Identification declares the incident; security analysts triage SIEM alerts and endpoint telemetry to confirm a true positive breach versus a benign anomaly.",
    "type": "decision"
  },
  {
    "id": "comp_ir_sub1_l1",
    "label": "Identification Phase Fact 1",
    "description": "Identification declares the incident.",
    "type": "action"
  },
  {
    "id": "comp_ir_sub1_l2",
    "label": "Identification Phase Fact 2",
    "description": "security analysts triage SIEM alerts and endpoint telemetry to confirm a true positive breach versus a benign anomaly.",
    "type": "source"
  },
  {
    "id": "comp_ir_sub2",
    "label": "Containment Strategy",
    "description": "Containment stops the bleeding; isolating infected subnets and revoking compromised credentials prevents the adversary from moving laterally while the investigation continues.",
    "type": "decision"
  },
  {
    "id": "comp_ir_sub2_l1",
    "label": "Containment Strategy Fact 1",
    "description": "Containment stops the bleeding.",
    "type": "action"
  },
  {
    "id": "comp_ir_sub2_l2",
    "label": "Containment Strategy Fact 2",
    "description": "isolating infected subnets and revoking compromised credentials prevents the adversary from moving laterally while the investigation continues.",
    "type": "source"
  },
  {
    "id": "comp_ir_sub3",
    "label": "Eradication Process",
    "description": "Eradication removes the threat; patching vulnerabilities, removing persistent backdoors, and rebuilding compromised servers from known-good images ensures a clean environment.",
    "type": "decision"
  },
  {
    "id": "comp_ir_sub3_l1",
    "label": "Eradication Process Fact 1",
    "description": "Eradication removes the threat.",
    "type": "action"
  },
  {
    "id": "comp_ir_sub3_l2",
    "label": "Eradication Process Fact 2",
    "description": "patching vulnerabilities, removing persistent backdoors, and rebuilding compromised servers from known-good images ensures a clean environment.",
    "type": "source"
  },
  {
    "id": "comp_ir_sub4",
    "label": "Lessons Learned",
    "description": "Post-incident reviews drive improvement; analyzing the root cause and updating the IR playbook prevents identical future breaches and improves overall organizational resilience.",
    "type": "decision"
  },
  {
    "id": "comp_ir_sub4_l1",
    "label": "Lessons Learned Fact 1",
    "description": "Post-incident reviews drive improvement.",
    "type": "action"
  },
  {
    "id": "comp_ir_sub4_l2",
    "label": "Lessons Learned Fact 2",
    "description": "analyzing the root cause and updating the IR playbook prevents identical future breaches and improves overall organizational resilience.",
    "type": "source"
  },
  {
    "id": "comp_siem",
    "label": "SIEM & Detection",
    "description": "SIEM systems aggregate logs for correlation; robust detection engineering relies on complex rule logic mapping directly to MITRE ATT&CK techniques to minimize false positives.",
    "type": "example"
  },
  {
    "id": "comp_siem_sub0",
    "label": "Correlation Rules",
    "description": "Correlation rules identify patterns; detecting five failed login attempts followed by a successful login from a new IP address triggers an impossible travel or brute-force alert.",
    "type": "decision"
  },
  {
    "id": "comp_siem_sub0_l1",
    "label": "Correlation Rules Fact 1",
    "description": "Correlation rules identify patterns.",
    "type": "action"
  },
  {
    "id": "comp_siem_sub0_l2",
    "label": "Correlation Rules Fact 2",
    "description": "detecting five failed login attempts followed by a successful login from a new IP address triggers an impossible travel or brute-force alert.",
    "type": "source"
  },
  {
    "id": "comp_siem_sub1",
    "label": "Log Ingestion",
    "description": "Log ingestion requires standardization; parsing unstructured syslog data into Common Information Model (CIM) formats enables consistent querying across disparate security tools.",
    "type": "decision"
  },
  {
    "id": "comp_siem_sub1_l1",
    "label": "Log Ingestion Fact 1",
    "description": "Log ingestion requires standardization.",
    "type": "action"
  },
  {
    "id": "comp_siem_sub1_l2",
    "label": "Log Ingestion Fact 2",
    "description": "parsing unstructured syslog data into Common Information Model (CIM) formats enables consistent querying across disparate security tools.",
    "type": "source"
  },
  {
    "id": "comp_siem_sub2",
    "label": "SOAR Automation",
    "description": "Security Orchestration, Automation, and Response speeds triage; SOAR playbooks automatically enrich alerts with threat intelligence and can isolate hosts without human intervention.",
    "type": "decision"
  },
  {
    "id": "comp_siem_sub2_l1",
    "label": "SOAR Automation Fact 1",
    "description": "Security Orchestration, Automation, and Response speeds triage.",
    "type": "action"
  },
  {
    "id": "comp_siem_sub2_l2",
    "label": "SOAR Automation Fact 2",
    "description": "SOAR playbooks automatically enrich alerts with threat intelligence and can isolate hosts without human intervention.",
    "type": "source"
  },
  {
    "id": "comp_siem_sub3",
    "label": "Threat Hunting",
    "description": "Threat hunting is proactive; analysts query data lakes for indicators of compromise (IoCs) or behavioral anomalies that bypassed automated SIEM correlation rules.",
    "type": "decision"
  },
  {
    "id": "comp_siem_sub3_l1",
    "label": "Threat Hunting Fact 1",
    "description": "Threat hunting is proactive.",
    "type": "action"
  },
  {
    "id": "comp_siem_sub3_l2",
    "label": "Threat Hunting Fact 2",
    "description": "analysts query data lakes for indicators of compromise (IoCs) or behavioral anomalies that bypassed automated SIEM correlation rules.",
    "type": "source"
  },
  {
    "id": "comp_siem_sub4",
    "label": "Alert Fatigue",
    "description": "Tuning reduces alert fatigue; systematically adjusting thresholds and whitelisting known administrative behaviors prevents analysts from ignoring critical true positive alerts.",
    "type": "decision"
  },
  {
    "id": "comp_siem_sub4_l1",
    "label": "Alert Fatigue Fact 1",
    "description": "Tuning reduces alert fatigue.",
    "type": "action"
  },
  {
    "id": "comp_siem_sub4_l2",
    "label": "Alert Fatigue Fact 2",
    "description": "systematically adjusting thresholds and whitelisting known administrative behaviors prevents analysts from ignoring critical true positive alerts.",
    "type": "source"
  },
  {
    "id": "comp_forensic",
    "label": "Digital Forensics",
    "description": "Forensic analysis requires strict chain of custody and evidence handling; memory forensics captures live state, while disk imaging analyzes file system artifacts without altering timestamps.",
    "type": "example"
  },
  {
    "id": "comp_forensic_sub0",
    "label": "Chain of Custody",
    "description": "Chain of custody maintains legal admissibility; meticulously documenting who handled the evidence, when, and how ensures cryptographic hashes prove data integrity in court.",
    "type": "decision"
  },
  {
    "id": "comp_forensic_sub0_l1",
    "label": "Chain of Custody Fact 1",
    "description": "Chain of custody maintains legal admissibility.",
    "type": "action"
  },
  {
    "id": "comp_forensic_sub0_l2",
    "label": "Chain of Custody Fact 2",
    "description": "meticulously documenting who handled the evidence, when, and how ensures cryptographic hashes prove data integrity in court.",
    "type": "source"
  },
  {
    "id": "comp_forensic_sub1",
    "label": "Memory Forensics",
    "description": "RAM captures volatile artifacts; tools like Volatility analyze memory dumps to find unencrypted passwords, hidden rootkits, and injected process threads lost upon reboot.",
    "type": "decision"
  },
  {
    "id": "comp_forensic_sub1_l1",
    "label": "Memory Forensics Fact 1",
    "description": "RAM captures volatile artifacts.",
    "type": "action"
  },
  {
    "id": "comp_forensic_sub1_l2",
    "label": "Memory Forensics Fact 2",
    "description": "tools like Volatility analyze memory dumps to find unencrypted passwords, hidden rootkits, and injected process threads lost upon reboot.",
    "type": "source"
  },
  {
    "id": "comp_forensic_sub2",
    "label": "Disk Imaging",
    "description": "Disk imaging creates bit-for-bit copies; writing the image through a hardware write-blocker ensures the original drive remains completely unaltered during forensic extraction.",
    "type": "decision"
  },
  {
    "id": "comp_forensic_sub2_l1",
    "label": "Disk Imaging Fact 1",
    "description": "Disk imaging creates bit-for-bit copies.",
    "type": "action"
  },
  {
    "id": "comp_forensic_sub2_l2",
    "label": "Disk Imaging Fact 2",
    "description": "writing the image through a hardware write-blocker ensures the original drive remains completely unaltered during forensic extraction.",
    "type": "source"
  },
  {
    "id": "comp_forensic_sub3",
    "label": "Timeline Analysis",
    "description": "Timelining reconstructs events; parsing NTFS MFT artifacts and Windows event logs generates a chronological sequence of attacker actions and file modifications.",
    "type": "decision"
  },
  {
    "id": "comp_forensic_sub3_l1",
    "label": "Timeline Analysis Fact 1",
    "description": "Timelining reconstructs events.",
    "type": "action"
  },
  {
    "id": "comp_forensic_sub3_l2",
    "label": "Timeline Analysis Fact 2",
    "description": "parsing NTFS MFT artifacts and Windows event logs generates a chronological sequence of attacker actions and file modifications.",
    "type": "source"
  },
  {
    "id": "comp_forensic_sub4",
    "label": "Anti-Forensics",
    "description": "Attackers deploy anti-forensics; clearing event logs, timestamp stomping (modifying file creation dates), and utilizing encrypted file containers complicate the forensic investigation.",
    "type": "decision"
  },
  {
    "id": "comp_forensic_sub4_l1",
    "label": "Anti-Forensics Fact 1",
    "description": "Attackers deploy anti-forensics.",
    "type": "action"
  },
  {
    "id": "comp_forensic_sub4_l2",
    "label": "Anti-Forensics Fact 2",
    "description": "clearing event logs, timestamp stomping (modifying file creation dates), and utilizing encrypted file containers complicate the forensic investigation.",
    "type": "source"
  },
  {
    "id": "comp_tabletop",
    "label": "Tabletop Exercises",
    "description": "Tabletop exercises simulate crises to test organizational readiness; scenario injects evaluate executive decision-making, communication plans, and technical playbook efficacy.",
    "type": "example"
  },
  {
    "id": "comp_tabletop_sub0",
    "label": "Scenario Design",
    "description": "Scenarios must be realistic; simulating a ransomware infection targeting core databases forces teams to evaluate backup restoration timelines and RTO/RPO objectives.",
    "type": "decision"
  },
  {
    "id": "comp_tabletop_sub0_l1",
    "label": "Scenario Design Fact 1",
    "description": "Scenarios must be realistic.",
    "type": "action"
  },
  {
    "id": "comp_tabletop_sub0_l2",
    "label": "Scenario Design Fact 2",
    "description": "simulating a ransomware infection targeting core databases forces teams to evaluate backup restoration timelines and RTO/RPO objectives.",
    "type": "source"
  },
  {
    "id": "comp_tabletop_sub1",
    "label": "Executive Involvement",
    "description": "Executives participate in decision-making; testing whether the business is prepared to pay a ransom or handle PR fallout ensures alignment between technical and leadership teams.",
    "type": "decision"
  },
  {
    "id": "comp_tabletop_sub1_l1",
    "label": "Executive Involvement Fact 1",
    "description": "Executives participate in decision-making.",
    "type": "action"
  },
  {
    "id": "comp_tabletop_sub1_l2",
    "label": "Executive Involvement Fact 2",
    "description": "testing whether the business is prepared to pay a ransom or handle PR fallout ensures alignment between technical and leadership teams.",
    "type": "source"
  },
  {
    "id": "comp_tabletop_sub2",
    "label": "Dynamic Injects",
    "description": "Injects introduce complications; pausing the exercise to announce that backups have also been encrypted forces the team to pivot and rely on secondary contingencies.",
    "type": "decision"
  },
  {
    "id": "comp_tabletop_sub2_l1",
    "label": "Dynamic Injects Fact 1",
    "description": "Injects introduce complications.",
    "type": "action"
  },
  {
    "id": "comp_tabletop_sub2_l2",
    "label": "Dynamic Injects Fact 2",
    "description": "pausing the exercise to announce that backups have also been encrypted forces the team to pivot and rely on secondary contingencies.",
    "type": "source"
  },
  {
    "id": "comp_tabletop_sub3",
    "label": "Out-of-Band Comms",
    "description": "Exercises validate communication; confirming that the team knows how to coordinate using Signal or dedicated off-network bridges when Exchange/Slack are considered compromised.",
    "type": "decision"
  },
  {
    "id": "comp_tabletop_sub3_l1",
    "label": "Out-of-Band Comms Fact 1",
    "description": "Exercises validate communication.",
    "type": "action"
  },
  {
    "id": "comp_tabletop_sub3_l2",
    "label": "Out-of-Band Comms Fact 2",
    "description": "confirming that the team knows how to coordinate using Signal or dedicated off-network bridges when Exchange/Slack are considered compromised.",
    "type": "source"
  },
  {
    "id": "comp_tabletop_sub4",
    "label": "Action Items",
    "description": "Tabletops yield action items; discovering a gap in log retention policies during the exercise directly drives backlog tasks to extend SIEM storage prior to a real incident.",
    "type": "decision"
  },
  {
    "id": "comp_tabletop_sub4_l1",
    "label": "Action Items Fact 1",
    "description": "Tabletops yield action items.",
    "type": "action"
  },
  {
    "id": "comp_tabletop_sub4_l2",
    "label": "Action Items Fact 2",
    "description": "discovering a gap in log retention policies during the exercise directly drives backlog tasks to extend SIEM storage prior to a real incident.",
    "type": "source"
  }
],
  edges: [
  {
    "source": "sec_root",
    "target": "sec_p1"
  },
  {
    "source": "sec_p1",
    "target": "tm_stride"
  },
  {
    "source": "tm_stride",
    "target": "tm_stride_sub0"
  },
  {
    "source": "tm_stride_sub0",
    "target": "tm_stride_sub0_l1"
  },
  {
    "source": "tm_stride_sub0",
    "target": "tm_stride_sub0_l2"
  },
  {
    "source": "tm_stride",
    "target": "tm_stride_sub1"
  },
  {
    "source": "tm_stride_sub1",
    "target": "tm_stride_sub1_l1"
  },
  {
    "source": "tm_stride_sub1",
    "target": "tm_stride_sub1_l2"
  },
  {
    "source": "tm_stride",
    "target": "tm_stride_sub2"
  },
  {
    "source": "tm_stride_sub2",
    "target": "tm_stride_sub2_l1"
  },
  {
    "source": "tm_stride_sub2",
    "target": "tm_stride_sub2_l2"
  },
  {
    "source": "tm_stride",
    "target": "tm_stride_sub3"
  },
  {
    "source": "tm_stride_sub3",
    "target": "tm_stride_sub3_l1"
  },
  {
    "source": "tm_stride_sub3",
    "target": "tm_stride_sub3_l2"
  },
  {
    "source": "tm_stride",
    "target": "tm_stride_sub4"
  },
  {
    "source": "tm_stride_sub4",
    "target": "tm_stride_sub4_l1"
  },
  {
    "source": "tm_stride_sub4",
    "target": "tm_stride_sub4_l2"
  },
  {
    "source": "sec_p1",
    "target": "tm_dread"
  },
  {
    "source": "tm_dread",
    "target": "tm_dread_sub0"
  },
  {
    "source": "tm_dread_sub0",
    "target": "tm_dread_sub0_l1"
  },
  {
    "source": "tm_dread_sub0",
    "target": "tm_dread_sub0_l2"
  },
  {
    "source": "tm_dread",
    "target": "tm_dread_sub1"
  },
  {
    "source": "tm_dread_sub1",
    "target": "tm_dread_sub1_l1"
  },
  {
    "source": "tm_dread_sub1",
    "target": "tm_dread_sub1_l2"
  },
  {
    "source": "tm_dread",
    "target": "tm_dread_sub2"
  },
  {
    "source": "tm_dread_sub2",
    "target": "tm_dread_sub2_l1"
  },
  {
    "source": "tm_dread_sub2",
    "target": "tm_dread_sub2_l2"
  },
  {
    "source": "tm_dread",
    "target": "tm_dread_sub3"
  },
  {
    "source": "tm_dread_sub3",
    "target": "tm_dread_sub3_l1"
  },
  {
    "source": "tm_dread_sub3",
    "target": "tm_dread_sub3_l2"
  },
  {
    "source": "tm_dread",
    "target": "tm_dread_sub4"
  },
  {
    "source": "tm_dread_sub4",
    "target": "tm_dread_sub4_l1"
  },
  {
    "source": "tm_dread_sub4",
    "target": "tm_dread_sub4_l2"
  },
  {
    "source": "sec_p1",
    "target": "tm_pasta"
  },
  {
    "source": "tm_pasta",
    "target": "tm_pasta_sub0"
  },
  {
    "source": "tm_pasta_sub0",
    "target": "tm_pasta_sub0_l1"
  },
  {
    "source": "tm_pasta_sub0",
    "target": "tm_pasta_sub0_l2"
  },
  {
    "source": "tm_pasta",
    "target": "tm_pasta_sub1"
  },
  {
    "source": "tm_pasta_sub1",
    "target": "tm_pasta_sub1_l1"
  },
  {
    "source": "tm_pasta_sub1",
    "target": "tm_pasta_sub1_l2"
  },
  {
    "source": "tm_pasta",
    "target": "tm_pasta_sub2"
  },
  {
    "source": "tm_pasta_sub2",
    "target": "tm_pasta_sub2_l1"
  },
  {
    "source": "tm_pasta_sub2",
    "target": "tm_pasta_sub2_l2"
  },
  {
    "source": "tm_pasta",
    "target": "tm_pasta_sub3"
  },
  {
    "source": "tm_pasta_sub3",
    "target": "tm_pasta_sub3_l1"
  },
  {
    "source": "tm_pasta_sub3",
    "target": "tm_pasta_sub3_l2"
  },
  {
    "source": "tm_pasta",
    "target": "tm_pasta_sub4"
  },
  {
    "source": "tm_pasta_sub4",
    "target": "tm_pasta_sub4_l1"
  },
  {
    "source": "tm_pasta_sub4",
    "target": "tm_pasta_sub4_l2"
  },
  {
    "source": "sec_p1",
    "target": "tm_mitre"
  },
  {
    "source": "tm_mitre",
    "target": "tm_mitre_sub0"
  },
  {
    "source": "tm_mitre_sub0",
    "target": "tm_mitre_sub0_l1"
  },
  {
    "source": "tm_mitre_sub0",
    "target": "tm_mitre_sub0_l2"
  },
  {
    "source": "tm_mitre",
    "target": "tm_mitre_sub1"
  },
  {
    "source": "tm_mitre_sub1",
    "target": "tm_mitre_sub1_l1"
  },
  {
    "source": "tm_mitre_sub1",
    "target": "tm_mitre_sub1_l2"
  },
  {
    "source": "tm_mitre",
    "target": "tm_mitre_sub2"
  },
  {
    "source": "tm_mitre_sub2",
    "target": "tm_mitre_sub2_l1"
  },
  {
    "source": "tm_mitre_sub2",
    "target": "tm_mitre_sub2_l2"
  },
  {
    "source": "tm_mitre",
    "target": "tm_mitre_sub3"
  },
  {
    "source": "tm_mitre_sub3",
    "target": "tm_mitre_sub3_l1"
  },
  {
    "source": "tm_mitre_sub3",
    "target": "tm_mitre_sub3_l2"
  },
  {
    "source": "tm_mitre",
    "target": "tm_mitre_sub4"
  },
  {
    "source": "tm_mitre_sub4",
    "target": "tm_mitre_sub4_l1"
  },
  {
    "source": "tm_mitre_sub4",
    "target": "tm_mitre_sub4_l2"
  },
  {
    "source": "sec_p1",
    "target": "tm_killchain"
  },
  {
    "source": "tm_killchain",
    "target": "tm_killchain_sub0"
  },
  {
    "source": "tm_killchain_sub0",
    "target": "tm_killchain_sub0_l1"
  },
  {
    "source": "tm_killchain_sub0",
    "target": "tm_killchain_sub0_l2"
  },
  {
    "source": "tm_killchain",
    "target": "tm_killchain_sub1"
  },
  {
    "source": "tm_killchain_sub1",
    "target": "tm_killchain_sub1_l1"
  },
  {
    "source": "tm_killchain_sub1",
    "target": "tm_killchain_sub1_l2"
  },
  {
    "source": "tm_killchain",
    "target": "tm_killchain_sub2"
  },
  {
    "source": "tm_killchain_sub2",
    "target": "tm_killchain_sub2_l1"
  },
  {
    "source": "tm_killchain_sub2",
    "target": "tm_killchain_sub2_l2"
  },
  {
    "source": "tm_killchain",
    "target": "tm_killchain_sub3"
  },
  {
    "source": "tm_killchain_sub3",
    "target": "tm_killchain_sub3_l1"
  },
  {
    "source": "tm_killchain_sub3",
    "target": "tm_killchain_sub3_l2"
  },
  {
    "source": "tm_killchain",
    "target": "tm_killchain_sub4"
  },
  {
    "source": "tm_killchain_sub4",
    "target": "tm_killchain_sub4_l1"
  },
  {
    "source": "tm_killchain_sub4",
    "target": "tm_killchain_sub4_l2"
  },
  {
    "source": "sec_p1",
    "target": "tm_blast"
  },
  {
    "source": "tm_blast",
    "target": "tm_blast_sub0"
  },
  {
    "source": "tm_blast_sub0",
    "target": "tm_blast_sub0_l1"
  },
  {
    "source": "tm_blast_sub0",
    "target": "tm_blast_sub0_l2"
  },
  {
    "source": "tm_blast",
    "target": "tm_blast_sub1"
  },
  {
    "source": "tm_blast_sub1",
    "target": "tm_blast_sub1_l1"
  },
  {
    "source": "tm_blast_sub1",
    "target": "tm_blast_sub1_l2"
  },
  {
    "source": "tm_blast",
    "target": "tm_blast_sub2"
  },
  {
    "source": "tm_blast_sub2",
    "target": "tm_blast_sub2_l1"
  },
  {
    "source": "tm_blast_sub2",
    "target": "tm_blast_sub2_l2"
  },
  {
    "source": "tm_blast",
    "target": "tm_blast_sub3"
  },
  {
    "source": "tm_blast_sub3",
    "target": "tm_blast_sub3_l1"
  },
  {
    "source": "tm_blast_sub3",
    "target": "tm_blast_sub3_l2"
  },
  {
    "source": "tm_blast",
    "target": "tm_blast_sub4"
  },
  {
    "source": "tm_blast_sub4",
    "target": "tm_blast_sub4_l1"
  },
  {
    "source": "tm_blast_sub4",
    "target": "tm_blast_sub4_l2"
  },
  {
    "source": "sec_root",
    "target": "sec_p2"
  },
  {
    "source": "sec_p2",
    "target": "app_sqli"
  },
  {
    "source": "app_sqli",
    "target": "app_sqli_sub0"
  },
  {
    "source": "app_sqli_sub0",
    "target": "app_sqli_sub0_l1"
  },
  {
    "source": "app_sqli_sub0",
    "target": "app_sqli_sub0_l2"
  },
  {
    "source": "app_sqli",
    "target": "app_sqli_sub1"
  },
  {
    "source": "app_sqli_sub1",
    "target": "app_sqli_sub1_l1"
  },
  {
    "source": "app_sqli_sub1",
    "target": "app_sqli_sub1_l2"
  },
  {
    "source": "app_sqli",
    "target": "app_sqli_sub2"
  },
  {
    "source": "app_sqli_sub2",
    "target": "app_sqli_sub2_l1"
  },
  {
    "source": "app_sqli_sub2",
    "target": "app_sqli_sub2_l2"
  },
  {
    "source": "app_sqli",
    "target": "app_sqli_sub3"
  },
  {
    "source": "app_sqli_sub3",
    "target": "app_sqli_sub3_l1"
  },
  {
    "source": "app_sqli_sub3",
    "target": "app_sqli_sub3_l2"
  },
  {
    "source": "app_sqli",
    "target": "app_sqli_sub4"
  },
  {
    "source": "app_sqli_sub4",
    "target": "app_sqli_sub4_l1"
  },
  {
    "source": "app_sqli_sub4",
    "target": "app_sqli_sub4_l2"
  },
  {
    "source": "sec_p2",
    "target": "app_xss"
  },
  {
    "source": "app_xss",
    "target": "app_xss_sub0"
  },
  {
    "source": "app_xss_sub0",
    "target": "app_xss_sub0_l1"
  },
  {
    "source": "app_xss_sub0",
    "target": "app_xss_sub0_l2"
  },
  {
    "source": "app_xss",
    "target": "app_xss_sub1"
  },
  {
    "source": "app_xss_sub1",
    "target": "app_xss_sub1_l1"
  },
  {
    "source": "app_xss_sub1",
    "target": "app_xss_sub1_l2"
  },
  {
    "source": "app_xss",
    "target": "app_xss_sub2"
  },
  {
    "source": "app_xss_sub2",
    "target": "app_xss_sub2_l1"
  },
  {
    "source": "app_xss_sub2",
    "target": "app_xss_sub2_l2"
  },
  {
    "source": "app_xss",
    "target": "app_xss_sub3"
  },
  {
    "source": "app_xss_sub3",
    "target": "app_xss_sub3_l1"
  },
  {
    "source": "app_xss_sub3",
    "target": "app_xss_sub3_l2"
  },
  {
    "source": "app_xss",
    "target": "app_xss_sub4"
  },
  {
    "source": "app_xss_sub4",
    "target": "app_xss_sub4_l1"
  },
  {
    "source": "app_xss_sub4",
    "target": "app_xss_sub4_l2"
  },
  {
    "source": "sec_p2",
    "target": "app_ssrf"
  },
  {
    "source": "app_ssrf",
    "target": "app_ssrf_sub0"
  },
  {
    "source": "app_ssrf_sub0",
    "target": "app_ssrf_sub0_l1"
  },
  {
    "source": "app_ssrf_sub0",
    "target": "app_ssrf_sub0_l2"
  },
  {
    "source": "app_ssrf",
    "target": "app_ssrf_sub1"
  },
  {
    "source": "app_ssrf_sub1",
    "target": "app_ssrf_sub1_l1"
  },
  {
    "source": "app_ssrf_sub1",
    "target": "app_ssrf_sub1_l2"
  },
  {
    "source": "app_ssrf",
    "target": "app_ssrf_sub2"
  },
  {
    "source": "app_ssrf_sub2",
    "target": "app_ssrf_sub2_l1"
  },
  {
    "source": "app_ssrf_sub2",
    "target": "app_ssrf_sub2_l2"
  },
  {
    "source": "app_ssrf",
    "target": "app_ssrf_sub3"
  },
  {
    "source": "app_ssrf_sub3",
    "target": "app_ssrf_sub3_l1"
  },
  {
    "source": "app_ssrf_sub3",
    "target": "app_ssrf_sub3_l2"
  },
  {
    "source": "app_ssrf",
    "target": "app_ssrf_sub4"
  },
  {
    "source": "app_ssrf_sub4",
    "target": "app_ssrf_sub4_l1"
  },
  {
    "source": "app_ssrf_sub4",
    "target": "app_ssrf_sub4_l2"
  },
  {
    "source": "sec_p2",
    "target": "app_idor"
  },
  {
    "source": "app_idor",
    "target": "app_idor_sub0"
  },
  {
    "source": "app_idor_sub0",
    "target": "app_idor_sub0_l1"
  },
  {
    "source": "app_idor_sub0",
    "target": "app_idor_sub0_l2"
  },
  {
    "source": "app_idor",
    "target": "app_idor_sub1"
  },
  {
    "source": "app_idor_sub1",
    "target": "app_idor_sub1_l1"
  },
  {
    "source": "app_idor_sub1",
    "target": "app_idor_sub1_l2"
  },
  {
    "source": "app_idor",
    "target": "app_idor_sub2"
  },
  {
    "source": "app_idor_sub2",
    "target": "app_idor_sub2_l1"
  },
  {
    "source": "app_idor_sub2",
    "target": "app_idor_sub2_l2"
  },
  {
    "source": "app_idor",
    "target": "app_idor_sub3"
  },
  {
    "source": "app_idor_sub3",
    "target": "app_idor_sub3_l1"
  },
  {
    "source": "app_idor_sub3",
    "target": "app_idor_sub3_l2"
  },
  {
    "source": "app_idor",
    "target": "app_idor_sub4"
  },
  {
    "source": "app_idor_sub4",
    "target": "app_idor_sub4_l1"
  },
  {
    "source": "app_idor_sub4",
    "target": "app_idor_sub4_l2"
  },
  {
    "source": "sec_p2",
    "target": "app_xxe"
  },
  {
    "source": "app_xxe",
    "target": "app_xxe_sub0"
  },
  {
    "source": "app_xxe_sub0",
    "target": "app_xxe_sub0_l1"
  },
  {
    "source": "app_xxe_sub0",
    "target": "app_xxe_sub0_l2"
  },
  {
    "source": "app_xxe",
    "target": "app_xxe_sub1"
  },
  {
    "source": "app_xxe_sub1",
    "target": "app_xxe_sub1_l1"
  },
  {
    "source": "app_xxe_sub1",
    "target": "app_xxe_sub1_l2"
  },
  {
    "source": "app_xxe",
    "target": "app_xxe_sub2"
  },
  {
    "source": "app_xxe_sub2",
    "target": "app_xxe_sub2_l1"
  },
  {
    "source": "app_xxe_sub2",
    "target": "app_xxe_sub2_l2"
  },
  {
    "source": "app_xxe",
    "target": "app_xxe_sub3"
  },
  {
    "source": "app_xxe_sub3",
    "target": "app_xxe_sub3_l1"
  },
  {
    "source": "app_xxe_sub3",
    "target": "app_xxe_sub3_l2"
  },
  {
    "source": "app_xxe",
    "target": "app_xxe_sub4"
  },
  {
    "source": "app_xxe_sub4",
    "target": "app_xxe_sub4_l1"
  },
  {
    "source": "app_xxe_sub4",
    "target": "app_xxe_sub4_l2"
  },
  {
    "source": "sec_p2",
    "target": "app_headers"
  },
  {
    "source": "app_headers",
    "target": "app_headers_sub0"
  },
  {
    "source": "app_headers_sub0",
    "target": "app_headers_sub0_l1"
  },
  {
    "source": "app_headers_sub0",
    "target": "app_headers_sub0_l2"
  },
  {
    "source": "app_headers",
    "target": "app_headers_sub1"
  },
  {
    "source": "app_headers_sub1",
    "target": "app_headers_sub1_l1"
  },
  {
    "source": "app_headers_sub1",
    "target": "app_headers_sub1_l2"
  },
  {
    "source": "app_headers",
    "target": "app_headers_sub2"
  },
  {
    "source": "app_headers_sub2",
    "target": "app_headers_sub2_l1"
  },
  {
    "source": "app_headers_sub2",
    "target": "app_headers_sub2_l2"
  },
  {
    "source": "app_headers",
    "target": "app_headers_sub3"
  },
  {
    "source": "app_headers_sub3",
    "target": "app_headers_sub3_l1"
  },
  {
    "source": "app_headers_sub3",
    "target": "app_headers_sub3_l2"
  },
  {
    "source": "app_headers",
    "target": "app_headers_sub4"
  },
  {
    "source": "app_headers_sub4",
    "target": "app_headers_sub4_l1"
  },
  {
    "source": "app_headers_sub4",
    "target": "app_headers_sub4_l2"
  },
  {
    "source": "sec_root",
    "target": "sec_p3"
  },
  {
    "source": "sec_p3",
    "target": "net_tls"
  },
  {
    "source": "net_tls",
    "target": "net_tls_sub0"
  },
  {
    "source": "net_tls_sub0",
    "target": "net_tls_sub0_l1"
  },
  {
    "source": "net_tls_sub0",
    "target": "net_tls_sub0_l2"
  },
  {
    "source": "net_tls",
    "target": "net_tls_sub1"
  },
  {
    "source": "net_tls_sub1",
    "target": "net_tls_sub1_l1"
  },
  {
    "source": "net_tls_sub1",
    "target": "net_tls_sub1_l2"
  },
  {
    "source": "net_tls",
    "target": "net_tls_sub2"
  },
  {
    "source": "net_tls_sub2",
    "target": "net_tls_sub2_l1"
  },
  {
    "source": "net_tls_sub2",
    "target": "net_tls_sub2_l2"
  },
  {
    "source": "net_tls",
    "target": "net_tls_sub3"
  },
  {
    "source": "net_tls_sub3",
    "target": "net_tls_sub3_l1"
  },
  {
    "source": "net_tls_sub3",
    "target": "net_tls_sub3_l2"
  },
  {
    "source": "net_tls",
    "target": "net_tls_sub4"
  },
  {
    "source": "net_tls_sub4",
    "target": "net_tls_sub4_l1"
  },
  {
    "source": "net_tls_sub4",
    "target": "net_tls_sub4_l2"
  },
  {
    "source": "sec_p3",
    "target": "net_fw"
  },
  {
    "source": "net_fw",
    "target": "net_fw_sub0"
  },
  {
    "source": "net_fw_sub0",
    "target": "net_fw_sub0_l1"
  },
  {
    "source": "net_fw_sub0",
    "target": "net_fw_sub0_l2"
  },
  {
    "source": "net_fw",
    "target": "net_fw_sub1"
  },
  {
    "source": "net_fw_sub1",
    "target": "net_fw_sub1_l1"
  },
  {
    "source": "net_fw_sub1",
    "target": "net_fw_sub1_l2"
  },
  {
    "source": "net_fw",
    "target": "net_fw_sub2"
  },
  {
    "source": "net_fw_sub2",
    "target": "net_fw_sub2_l1"
  },
  {
    "source": "net_fw_sub2",
    "target": "net_fw_sub2_l2"
  },
  {
    "source": "net_fw",
    "target": "net_fw_sub3"
  },
  {
    "source": "net_fw_sub3",
    "target": "net_fw_sub3_l1"
  },
  {
    "source": "net_fw_sub3",
    "target": "net_fw_sub3_l2"
  },
  {
    "source": "net_fw",
    "target": "net_fw_sub4"
  },
  {
    "source": "net_fw_sub4",
    "target": "net_fw_sub4_l1"
  },
  {
    "source": "net_fw_sub4",
    "target": "net_fw_sub4_l2"
  },
  {
    "source": "sec_p3",
    "target": "net_bgp"
  },
  {
    "source": "net_bgp",
    "target": "net_bgp_sub0"
  },
  {
    "source": "net_bgp_sub0",
    "target": "net_bgp_sub0_l1"
  },
  {
    "source": "net_bgp_sub0",
    "target": "net_bgp_sub0_l2"
  },
  {
    "source": "net_bgp",
    "target": "net_bgp_sub1"
  },
  {
    "source": "net_bgp_sub1",
    "target": "net_bgp_sub1_l1"
  },
  {
    "source": "net_bgp_sub1",
    "target": "net_bgp_sub1_l2"
  },
  {
    "source": "net_bgp",
    "target": "net_bgp_sub2"
  },
  {
    "source": "net_bgp_sub2",
    "target": "net_bgp_sub2_l1"
  },
  {
    "source": "net_bgp_sub2",
    "target": "net_bgp_sub2_l2"
  },
  {
    "source": "net_bgp",
    "target": "net_bgp_sub3"
  },
  {
    "source": "net_bgp_sub3",
    "target": "net_bgp_sub3_l1"
  },
  {
    "source": "net_bgp_sub3",
    "target": "net_bgp_sub3_l2"
  },
  {
    "source": "net_bgp",
    "target": "net_bgp_sub4"
  },
  {
    "source": "net_bgp_sub4",
    "target": "net_bgp_sub4_l1"
  },
  {
    "source": "net_bgp_sub4",
    "target": "net_bgp_sub4_l2"
  },
  {
    "source": "sec_p3",
    "target": "net_vpn"
  },
  {
    "source": "net_vpn",
    "target": "net_vpn_sub0"
  },
  {
    "source": "net_vpn_sub0",
    "target": "net_vpn_sub0_l1"
  },
  {
    "source": "net_vpn_sub0",
    "target": "net_vpn_sub0_l2"
  },
  {
    "source": "net_vpn",
    "target": "net_vpn_sub1"
  },
  {
    "source": "net_vpn_sub1",
    "target": "net_vpn_sub1_l1"
  },
  {
    "source": "net_vpn_sub1",
    "target": "net_vpn_sub1_l2"
  },
  {
    "source": "net_vpn",
    "target": "net_vpn_sub2"
  },
  {
    "source": "net_vpn_sub2",
    "target": "net_vpn_sub2_l1"
  },
  {
    "source": "net_vpn_sub2",
    "target": "net_vpn_sub2_l2"
  },
  {
    "source": "net_vpn",
    "target": "net_vpn_sub3"
  },
  {
    "source": "net_vpn_sub3",
    "target": "net_vpn_sub3_l1"
  },
  {
    "source": "net_vpn_sub3",
    "target": "net_vpn_sub3_l2"
  },
  {
    "source": "net_vpn",
    "target": "net_vpn_sub4"
  },
  {
    "source": "net_vpn_sub4",
    "target": "net_vpn_sub4_l1"
  },
  {
    "source": "net_vpn_sub4",
    "target": "net_vpn_sub4_l2"
  },
  {
    "source": "sec_p3",
    "target": "net_seg"
  },
  {
    "source": "net_seg",
    "target": "net_seg_sub0"
  },
  {
    "source": "net_seg_sub0",
    "target": "net_seg_sub0_l1"
  },
  {
    "source": "net_seg_sub0",
    "target": "net_seg_sub0_l2"
  },
  {
    "source": "net_seg",
    "target": "net_seg_sub1"
  },
  {
    "source": "net_seg_sub1",
    "target": "net_seg_sub1_l1"
  },
  {
    "source": "net_seg_sub1",
    "target": "net_seg_sub1_l2"
  },
  {
    "source": "net_seg",
    "target": "net_seg_sub2"
  },
  {
    "source": "net_seg_sub2",
    "target": "net_seg_sub2_l1"
  },
  {
    "source": "net_seg_sub2",
    "target": "net_seg_sub2_l2"
  },
  {
    "source": "net_seg",
    "target": "net_seg_sub3"
  },
  {
    "source": "net_seg_sub3",
    "target": "net_seg_sub3_l1"
  },
  {
    "source": "net_seg_sub3",
    "target": "net_seg_sub3_l2"
  },
  {
    "source": "net_seg",
    "target": "net_seg_sub4"
  },
  {
    "source": "net_seg_sub4",
    "target": "net_seg_sub4_l1"
  },
  {
    "source": "net_seg_sub4",
    "target": "net_seg_sub4_l2"
  },
  {
    "source": "sec_p3",
    "target": "net_ddos"
  },
  {
    "source": "net_ddos",
    "target": "net_ddos_sub0"
  },
  {
    "source": "net_ddos_sub0",
    "target": "net_ddos_sub0_l1"
  },
  {
    "source": "net_ddos_sub0",
    "target": "net_ddos_sub0_l2"
  },
  {
    "source": "net_ddos",
    "target": "net_ddos_sub1"
  },
  {
    "source": "net_ddos_sub1",
    "target": "net_ddos_sub1_l1"
  },
  {
    "source": "net_ddos_sub1",
    "target": "net_ddos_sub1_l2"
  },
  {
    "source": "net_ddos",
    "target": "net_ddos_sub2"
  },
  {
    "source": "net_ddos_sub2",
    "target": "net_ddos_sub2_l1"
  },
  {
    "source": "net_ddos_sub2",
    "target": "net_ddos_sub2_l2"
  },
  {
    "source": "net_ddos",
    "target": "net_ddos_sub3"
  },
  {
    "source": "net_ddos_sub3",
    "target": "net_ddos_sub3_l1"
  },
  {
    "source": "net_ddos_sub3",
    "target": "net_ddos_sub3_l2"
  },
  {
    "source": "net_ddos",
    "target": "net_ddos_sub4"
  },
  {
    "source": "net_ddos_sub4",
    "target": "net_ddos_sub4_l1"
  },
  {
    "source": "net_ddos_sub4",
    "target": "net_ddos_sub4_l2"
  },
  {
    "source": "sec_root",
    "target": "sec_p4"
  },
  {
    "source": "sec_p4",
    "target": "iam_oauth"
  },
  {
    "source": "iam_oauth",
    "target": "iam_oauth_sub0"
  },
  {
    "source": "iam_oauth_sub0",
    "target": "iam_oauth_sub0_l1"
  },
  {
    "source": "iam_oauth_sub0",
    "target": "iam_oauth_sub0_l2"
  },
  {
    "source": "iam_oauth",
    "target": "iam_oauth_sub1"
  },
  {
    "source": "iam_oauth_sub1",
    "target": "iam_oauth_sub1_l1"
  },
  {
    "source": "iam_oauth_sub1",
    "target": "iam_oauth_sub1_l2"
  },
  {
    "source": "iam_oauth",
    "target": "iam_oauth_sub2"
  },
  {
    "source": "iam_oauth_sub2",
    "target": "iam_oauth_sub2_l1"
  },
  {
    "source": "iam_oauth_sub2",
    "target": "iam_oauth_sub2_l2"
  },
  {
    "source": "iam_oauth",
    "target": "iam_oauth_sub3"
  },
  {
    "source": "iam_oauth_sub3",
    "target": "iam_oauth_sub3_l1"
  },
  {
    "source": "iam_oauth_sub3",
    "target": "iam_oauth_sub3_l2"
  },
  {
    "source": "iam_oauth",
    "target": "iam_oauth_sub4"
  },
  {
    "source": "iam_oauth_sub4",
    "target": "iam_oauth_sub4_l1"
  },
  {
    "source": "iam_oauth_sub4",
    "target": "iam_oauth_sub4_l2"
  },
  {
    "source": "sec_p4",
    "target": "iam_fido"
  },
  {
    "source": "iam_fido",
    "target": "iam_fido_sub0"
  },
  {
    "source": "iam_fido_sub0",
    "target": "iam_fido_sub0_l1"
  },
  {
    "source": "iam_fido_sub0",
    "target": "iam_fido_sub0_l2"
  },
  {
    "source": "iam_fido",
    "target": "iam_fido_sub1"
  },
  {
    "source": "iam_fido_sub1",
    "target": "iam_fido_sub1_l1"
  },
  {
    "source": "iam_fido_sub1",
    "target": "iam_fido_sub1_l2"
  },
  {
    "source": "iam_fido",
    "target": "iam_fido_sub2"
  },
  {
    "source": "iam_fido_sub2",
    "target": "iam_fido_sub2_l1"
  },
  {
    "source": "iam_fido_sub2",
    "target": "iam_fido_sub2_l2"
  },
  {
    "source": "iam_fido",
    "target": "iam_fido_sub3"
  },
  {
    "source": "iam_fido_sub3",
    "target": "iam_fido_sub3_l1"
  },
  {
    "source": "iam_fido_sub3",
    "target": "iam_fido_sub3_l2"
  },
  {
    "source": "iam_fido",
    "target": "iam_fido_sub4"
  },
  {
    "source": "iam_fido_sub4",
    "target": "iam_fido_sub4_l1"
  },
  {
    "source": "iam_fido_sub4",
    "target": "iam_fido_sub4_l2"
  },
  {
    "source": "sec_p4",
    "target": "iam_saml"
  },
  {
    "source": "iam_saml",
    "target": "iam_saml_sub0"
  },
  {
    "source": "iam_saml_sub0",
    "target": "iam_saml_sub0_l1"
  },
  {
    "source": "iam_saml_sub0",
    "target": "iam_saml_sub0_l2"
  },
  {
    "source": "iam_saml",
    "target": "iam_saml_sub1"
  },
  {
    "source": "iam_saml_sub1",
    "target": "iam_saml_sub1_l1"
  },
  {
    "source": "iam_saml_sub1",
    "target": "iam_saml_sub1_l2"
  },
  {
    "source": "iam_saml",
    "target": "iam_saml_sub2"
  },
  {
    "source": "iam_saml_sub2",
    "target": "iam_saml_sub2_l1"
  },
  {
    "source": "iam_saml_sub2",
    "target": "iam_saml_sub2_l2"
  },
  {
    "source": "iam_saml",
    "target": "iam_saml_sub3"
  },
  {
    "source": "iam_saml_sub3",
    "target": "iam_saml_sub3_l1"
  },
  {
    "source": "iam_saml_sub3",
    "target": "iam_saml_sub3_l2"
  },
  {
    "source": "iam_saml",
    "target": "iam_saml_sub4"
  },
  {
    "source": "iam_saml_sub4",
    "target": "iam_saml_sub4_l1"
  },
  {
    "source": "iam_saml_sub4",
    "target": "iam_saml_sub4_l2"
  },
  {
    "source": "sec_p4",
    "target": "iam_rbac"
  },
  {
    "source": "iam_rbac",
    "target": "iam_rbac_sub0"
  },
  {
    "source": "iam_rbac_sub0",
    "target": "iam_rbac_sub0_l1"
  },
  {
    "source": "iam_rbac_sub0",
    "target": "iam_rbac_sub0_l2"
  },
  {
    "source": "iam_rbac",
    "target": "iam_rbac_sub1"
  },
  {
    "source": "iam_rbac_sub1",
    "target": "iam_rbac_sub1_l1"
  },
  {
    "source": "iam_rbac_sub1",
    "target": "iam_rbac_sub1_l2"
  },
  {
    "source": "iam_rbac",
    "target": "iam_rbac_sub2"
  },
  {
    "source": "iam_rbac_sub2",
    "target": "iam_rbac_sub2_l1"
  },
  {
    "source": "iam_rbac_sub2",
    "target": "iam_rbac_sub2_l2"
  },
  {
    "source": "iam_rbac",
    "target": "iam_rbac_sub3"
  },
  {
    "source": "iam_rbac_sub3",
    "target": "iam_rbac_sub3_l1"
  },
  {
    "source": "iam_rbac_sub3",
    "target": "iam_rbac_sub3_l2"
  },
  {
    "source": "iam_rbac",
    "target": "iam_rbac_sub4"
  },
  {
    "source": "iam_rbac_sub4",
    "target": "iam_rbac_sub4_l1"
  },
  {
    "source": "iam_rbac_sub4",
    "target": "iam_rbac_sub4_l2"
  },
  {
    "source": "sec_p4",
    "target": "iam_priv"
  },
  {
    "source": "iam_priv",
    "target": "iam_priv_sub0"
  },
  {
    "source": "iam_priv_sub0",
    "target": "iam_priv_sub0_l1"
  },
  {
    "source": "iam_priv_sub0",
    "target": "iam_priv_sub0_l2"
  },
  {
    "source": "iam_priv",
    "target": "iam_priv_sub1"
  },
  {
    "source": "iam_priv_sub1",
    "target": "iam_priv_sub1_l1"
  },
  {
    "source": "iam_priv_sub1",
    "target": "iam_priv_sub1_l2"
  },
  {
    "source": "iam_priv",
    "target": "iam_priv_sub2"
  },
  {
    "source": "iam_priv_sub2",
    "target": "iam_priv_sub2_l1"
  },
  {
    "source": "iam_priv_sub2",
    "target": "iam_priv_sub2_l2"
  },
  {
    "source": "iam_priv",
    "target": "iam_priv_sub3"
  },
  {
    "source": "iam_priv_sub3",
    "target": "iam_priv_sub3_l1"
  },
  {
    "source": "iam_priv_sub3",
    "target": "iam_priv_sub3_l2"
  },
  {
    "source": "iam_priv",
    "target": "iam_priv_sub4"
  },
  {
    "source": "iam_priv_sub4",
    "target": "iam_priv_sub4_l1"
  },
  {
    "source": "iam_priv_sub4",
    "target": "iam_priv_sub4_l2"
  },
  {
    "source": "sec_p4",
    "target": "iam_sso"
  },
  {
    "source": "iam_sso",
    "target": "iam_sso_sub0"
  },
  {
    "source": "iam_sso_sub0",
    "target": "iam_sso_sub0_l1"
  },
  {
    "source": "iam_sso_sub0",
    "target": "iam_sso_sub0_l2"
  },
  {
    "source": "iam_sso",
    "target": "iam_sso_sub1"
  },
  {
    "source": "iam_sso_sub1",
    "target": "iam_sso_sub1_l1"
  },
  {
    "source": "iam_sso_sub1",
    "target": "iam_sso_sub1_l2"
  },
  {
    "source": "iam_sso",
    "target": "iam_sso_sub2"
  },
  {
    "source": "iam_sso_sub2",
    "target": "iam_sso_sub2_l1"
  },
  {
    "source": "iam_sso_sub2",
    "target": "iam_sso_sub2_l2"
  },
  {
    "source": "iam_sso",
    "target": "iam_sso_sub3"
  },
  {
    "source": "iam_sso_sub3",
    "target": "iam_sso_sub3_l1"
  },
  {
    "source": "iam_sso_sub3",
    "target": "iam_sso_sub3_l2"
  },
  {
    "source": "iam_sso",
    "target": "iam_sso_sub4"
  },
  {
    "source": "iam_sso_sub4",
    "target": "iam_sso_sub4_l1"
  },
  {
    "source": "iam_sso_sub4",
    "target": "iam_sso_sub4_l2"
  },
  {
    "source": "sec_root",
    "target": "sec_p5"
  },
  {
    "source": "sec_p5",
    "target": "crypto_sym"
  },
  {
    "source": "crypto_sym",
    "target": "crypto_sym_sub0"
  },
  {
    "source": "crypto_sym_sub0",
    "target": "crypto_sym_sub0_l1"
  },
  {
    "source": "crypto_sym_sub0",
    "target": "crypto_sym_sub0_l2"
  },
  {
    "source": "crypto_sym",
    "target": "crypto_sym_sub1"
  },
  {
    "source": "crypto_sym_sub1",
    "target": "crypto_sym_sub1_l1"
  },
  {
    "source": "crypto_sym_sub1",
    "target": "crypto_sym_sub1_l2"
  },
  {
    "source": "crypto_sym",
    "target": "crypto_sym_sub2"
  },
  {
    "source": "crypto_sym_sub2",
    "target": "crypto_sym_sub2_l1"
  },
  {
    "source": "crypto_sym_sub2",
    "target": "crypto_sym_sub2_l2"
  },
  {
    "source": "crypto_sym",
    "target": "crypto_sym_sub3"
  },
  {
    "source": "crypto_sym_sub3",
    "target": "crypto_sym_sub3_l1"
  },
  {
    "source": "crypto_sym_sub3",
    "target": "crypto_sym_sub3_l2"
  },
  {
    "source": "crypto_sym",
    "target": "crypto_sym_sub4"
  },
  {
    "source": "crypto_sym_sub4",
    "target": "crypto_sym_sub4_l1"
  },
  {
    "source": "crypto_sym_sub4",
    "target": "crypto_sym_sub4_l2"
  },
  {
    "source": "sec_p5",
    "target": "crypto_asym"
  },
  {
    "source": "crypto_asym",
    "target": "crypto_asym_sub0"
  },
  {
    "source": "crypto_asym_sub0",
    "target": "crypto_asym_sub0_l1"
  },
  {
    "source": "crypto_asym_sub0",
    "target": "crypto_asym_sub0_l2"
  },
  {
    "source": "crypto_asym",
    "target": "crypto_asym_sub1"
  },
  {
    "source": "crypto_asym_sub1",
    "target": "crypto_asym_sub1_l1"
  },
  {
    "source": "crypto_asym_sub1",
    "target": "crypto_asym_sub1_l2"
  },
  {
    "source": "crypto_asym",
    "target": "crypto_asym_sub2"
  },
  {
    "source": "crypto_asym_sub2",
    "target": "crypto_asym_sub2_l1"
  },
  {
    "source": "crypto_asym_sub2",
    "target": "crypto_asym_sub2_l2"
  },
  {
    "source": "crypto_asym",
    "target": "crypto_asym_sub3"
  },
  {
    "source": "crypto_asym_sub3",
    "target": "crypto_asym_sub3_l1"
  },
  {
    "source": "crypto_asym_sub3",
    "target": "crypto_asym_sub3_l2"
  },
  {
    "source": "crypto_asym",
    "target": "crypto_asym_sub4"
  },
  {
    "source": "crypto_asym_sub4",
    "target": "crypto_asym_sub4_l1"
  },
  {
    "source": "crypto_asym_sub4",
    "target": "crypto_asym_sub4_l2"
  },
  {
    "source": "sec_p5",
    "target": "crypto_kdf"
  },
  {
    "source": "crypto_kdf",
    "target": "crypto_kdf_sub0"
  },
  {
    "source": "crypto_kdf_sub0",
    "target": "crypto_kdf_sub0_l1"
  },
  {
    "source": "crypto_kdf_sub0",
    "target": "crypto_kdf_sub0_l2"
  },
  {
    "source": "crypto_kdf",
    "target": "crypto_kdf_sub1"
  },
  {
    "source": "crypto_kdf_sub1",
    "target": "crypto_kdf_sub1_l1"
  },
  {
    "source": "crypto_kdf_sub1",
    "target": "crypto_kdf_sub1_l2"
  },
  {
    "source": "crypto_kdf",
    "target": "crypto_kdf_sub2"
  },
  {
    "source": "crypto_kdf_sub2",
    "target": "crypto_kdf_sub2_l1"
  },
  {
    "source": "crypto_kdf_sub2",
    "target": "crypto_kdf_sub2_l2"
  },
  {
    "source": "crypto_kdf",
    "target": "crypto_kdf_sub3"
  },
  {
    "source": "crypto_kdf_sub3",
    "target": "crypto_kdf_sub3_l1"
  },
  {
    "source": "crypto_kdf_sub3",
    "target": "crypto_kdf_sub3_l2"
  },
  {
    "source": "crypto_kdf",
    "target": "crypto_kdf_sub4"
  },
  {
    "source": "crypto_kdf_sub4",
    "target": "crypto_kdf_sub4_l1"
  },
  {
    "source": "crypto_kdf_sub4",
    "target": "crypto_kdf_sub4_l2"
  },
  {
    "source": "sec_p5",
    "target": "crypto_pq"
  },
  {
    "source": "crypto_pq",
    "target": "crypto_pq_sub0"
  },
  {
    "source": "crypto_pq_sub0",
    "target": "crypto_pq_sub0_l1"
  },
  {
    "source": "crypto_pq_sub0",
    "target": "crypto_pq_sub0_l2"
  },
  {
    "source": "crypto_pq",
    "target": "crypto_pq_sub1"
  },
  {
    "source": "crypto_pq_sub1",
    "target": "crypto_pq_sub1_l1"
  },
  {
    "source": "crypto_pq_sub1",
    "target": "crypto_pq_sub1_l2"
  },
  {
    "source": "crypto_pq",
    "target": "crypto_pq_sub2"
  },
  {
    "source": "crypto_pq_sub2",
    "target": "crypto_pq_sub2_l1"
  },
  {
    "source": "crypto_pq_sub2",
    "target": "crypto_pq_sub2_l2"
  },
  {
    "source": "crypto_pq",
    "target": "crypto_pq_sub3"
  },
  {
    "source": "crypto_pq_sub3",
    "target": "crypto_pq_sub3_l1"
  },
  {
    "source": "crypto_pq_sub3",
    "target": "crypto_pq_sub3_l2"
  },
  {
    "source": "crypto_pq",
    "target": "crypto_pq_sub4"
  },
  {
    "source": "crypto_pq_sub4",
    "target": "crypto_pq_sub4_l1"
  },
  {
    "source": "crypto_pq_sub4",
    "target": "crypto_pq_sub4_l2"
  },
  {
    "source": "sec_p5",
    "target": "crypto_zkp"
  },
  {
    "source": "crypto_zkp",
    "target": "crypto_zkp_sub0"
  },
  {
    "source": "crypto_zkp_sub0",
    "target": "crypto_zkp_sub0_l1"
  },
  {
    "source": "crypto_zkp_sub0",
    "target": "crypto_zkp_sub0_l2"
  },
  {
    "source": "crypto_zkp",
    "target": "crypto_zkp_sub1"
  },
  {
    "source": "crypto_zkp_sub1",
    "target": "crypto_zkp_sub1_l1"
  },
  {
    "source": "crypto_zkp_sub1",
    "target": "crypto_zkp_sub1_l2"
  },
  {
    "source": "crypto_zkp",
    "target": "crypto_zkp_sub2"
  },
  {
    "source": "crypto_zkp_sub2",
    "target": "crypto_zkp_sub2_l1"
  },
  {
    "source": "crypto_zkp_sub2",
    "target": "crypto_zkp_sub2_l2"
  },
  {
    "source": "crypto_zkp",
    "target": "crypto_zkp_sub3"
  },
  {
    "source": "crypto_zkp_sub3",
    "target": "crypto_zkp_sub3_l1"
  },
  {
    "source": "crypto_zkp_sub3",
    "target": "crypto_zkp_sub3_l2"
  },
  {
    "source": "crypto_zkp",
    "target": "crypto_zkp_sub4"
  },
  {
    "source": "crypto_zkp_sub4",
    "target": "crypto_zkp_sub4_l1"
  },
  {
    "source": "crypto_zkp_sub4",
    "target": "crypto_zkp_sub4_l2"
  },
  {
    "source": "sec_p5",
    "target": "crypto_hsm"
  },
  {
    "source": "crypto_hsm",
    "target": "crypto_hsm_sub0"
  },
  {
    "source": "crypto_hsm_sub0",
    "target": "crypto_hsm_sub0_l1"
  },
  {
    "source": "crypto_hsm_sub0",
    "target": "crypto_hsm_sub0_l2"
  },
  {
    "source": "crypto_hsm",
    "target": "crypto_hsm_sub1"
  },
  {
    "source": "crypto_hsm_sub1",
    "target": "crypto_hsm_sub1_l1"
  },
  {
    "source": "crypto_hsm_sub1",
    "target": "crypto_hsm_sub1_l2"
  },
  {
    "source": "crypto_hsm",
    "target": "crypto_hsm_sub2"
  },
  {
    "source": "crypto_hsm_sub2",
    "target": "crypto_hsm_sub2_l1"
  },
  {
    "source": "crypto_hsm_sub2",
    "target": "crypto_hsm_sub2_l2"
  },
  {
    "source": "crypto_hsm",
    "target": "crypto_hsm_sub3"
  },
  {
    "source": "crypto_hsm_sub3",
    "target": "crypto_hsm_sub3_l1"
  },
  {
    "source": "crypto_hsm_sub3",
    "target": "crypto_hsm_sub3_l2"
  },
  {
    "source": "crypto_hsm",
    "target": "crypto_hsm_sub4"
  },
  {
    "source": "crypto_hsm_sub4",
    "target": "crypto_hsm_sub4_l1"
  },
  {
    "source": "crypto_hsm_sub4",
    "target": "crypto_hsm_sub4_l2"
  },
  {
    "source": "sec_root",
    "target": "sec_p6"
  },
  {
    "source": "sec_p6",
    "target": "cld_cspm"
  },
  {
    "source": "cld_cspm",
    "target": "cld_cspm_sub0"
  },
  {
    "source": "cld_cspm_sub0",
    "target": "cld_cspm_sub0_l1"
  },
  {
    "source": "cld_cspm_sub0",
    "target": "cld_cspm_sub0_l2"
  },
  {
    "source": "cld_cspm",
    "target": "cld_cspm_sub1"
  },
  {
    "source": "cld_cspm_sub1",
    "target": "cld_cspm_sub1_l1"
  },
  {
    "source": "cld_cspm_sub1",
    "target": "cld_cspm_sub1_l2"
  },
  {
    "source": "cld_cspm",
    "target": "cld_cspm_sub2"
  },
  {
    "source": "cld_cspm_sub2",
    "target": "cld_cspm_sub2_l1"
  },
  {
    "source": "cld_cspm_sub2",
    "target": "cld_cspm_sub2_l2"
  },
  {
    "source": "cld_cspm",
    "target": "cld_cspm_sub3"
  },
  {
    "source": "cld_cspm_sub3",
    "target": "cld_cspm_sub3_l1"
  },
  {
    "source": "cld_cspm_sub3",
    "target": "cld_cspm_sub3_l2"
  },
  {
    "source": "cld_cspm",
    "target": "cld_cspm_sub4"
  },
  {
    "source": "cld_cspm_sub4",
    "target": "cld_cspm_sub4_l1"
  },
  {
    "source": "cld_cspm_sub4",
    "target": "cld_cspm_sub4_l2"
  },
  {
    "source": "sec_p6",
    "target": "cld_iam"
  },
  {
    "source": "cld_iam",
    "target": "cld_iam_sub0"
  },
  {
    "source": "cld_iam_sub0",
    "target": "cld_iam_sub0_l1"
  },
  {
    "source": "cld_iam_sub0",
    "target": "cld_iam_sub0_l2"
  },
  {
    "source": "cld_iam",
    "target": "cld_iam_sub1"
  },
  {
    "source": "cld_iam_sub1",
    "target": "cld_iam_sub1_l1"
  },
  {
    "source": "cld_iam_sub1",
    "target": "cld_iam_sub1_l2"
  },
  {
    "source": "cld_iam",
    "target": "cld_iam_sub2"
  },
  {
    "source": "cld_iam_sub2",
    "target": "cld_iam_sub2_l1"
  },
  {
    "source": "cld_iam_sub2",
    "target": "cld_iam_sub2_l2"
  },
  {
    "source": "cld_iam",
    "target": "cld_iam_sub3"
  },
  {
    "source": "cld_iam_sub3",
    "target": "cld_iam_sub3_l1"
  },
  {
    "source": "cld_iam_sub3",
    "target": "cld_iam_sub3_l2"
  },
  {
    "source": "cld_iam",
    "target": "cld_iam_sub4"
  },
  {
    "source": "cld_iam_sub4",
    "target": "cld_iam_sub4_l1"
  },
  {
    "source": "cld_iam_sub4",
    "target": "cld_iam_sub4_l2"
  },
  {
    "source": "sec_p6",
    "target": "cld_vault"
  },
  {
    "source": "cld_vault",
    "target": "cld_vault_sub0"
  },
  {
    "source": "cld_vault_sub0",
    "target": "cld_vault_sub0_l1"
  },
  {
    "source": "cld_vault_sub0",
    "target": "cld_vault_sub0_l2"
  },
  {
    "source": "cld_vault",
    "target": "cld_vault_sub1"
  },
  {
    "source": "cld_vault_sub1",
    "target": "cld_vault_sub1_l1"
  },
  {
    "source": "cld_vault_sub1",
    "target": "cld_vault_sub1_l2"
  },
  {
    "source": "cld_vault",
    "target": "cld_vault_sub2"
  },
  {
    "source": "cld_vault_sub2",
    "target": "cld_vault_sub2_l1"
  },
  {
    "source": "cld_vault_sub2",
    "target": "cld_vault_sub2_l2"
  },
  {
    "source": "cld_vault",
    "target": "cld_vault_sub3"
  },
  {
    "source": "cld_vault_sub3",
    "target": "cld_vault_sub3_l1"
  },
  {
    "source": "cld_vault_sub3",
    "target": "cld_vault_sub3_l2"
  },
  {
    "source": "cld_vault",
    "target": "cld_vault_sub4"
  },
  {
    "source": "cld_vault_sub4",
    "target": "cld_vault_sub4_l1"
  },
  {
    "source": "cld_vault_sub4",
    "target": "cld_vault_sub4_l2"
  },
  {
    "source": "sec_p6",
    "target": "cld_supply"
  },
  {
    "source": "cld_supply",
    "target": "cld_supply_sub0"
  },
  {
    "source": "cld_supply_sub0",
    "target": "cld_supply_sub0_l1"
  },
  {
    "source": "cld_supply_sub0",
    "target": "cld_supply_sub0_l2"
  },
  {
    "source": "cld_supply",
    "target": "cld_supply_sub1"
  },
  {
    "source": "cld_supply_sub1",
    "target": "cld_supply_sub1_l1"
  },
  {
    "source": "cld_supply_sub1",
    "target": "cld_supply_sub1_l2"
  },
  {
    "source": "cld_supply",
    "target": "cld_supply_sub2"
  },
  {
    "source": "cld_supply_sub2",
    "target": "cld_supply_sub2_l1"
  },
  {
    "source": "cld_supply_sub2",
    "target": "cld_supply_sub2_l2"
  },
  {
    "source": "cld_supply",
    "target": "cld_supply_sub3"
  },
  {
    "source": "cld_supply_sub3",
    "target": "cld_supply_sub3_l1"
  },
  {
    "source": "cld_supply_sub3",
    "target": "cld_supply_sub3_l2"
  },
  {
    "source": "cld_supply",
    "target": "cld_supply_sub4"
  },
  {
    "source": "cld_supply_sub4",
    "target": "cld_supply_sub4_l1"
  },
  {
    "source": "cld_supply_sub4",
    "target": "cld_supply_sub4_l2"
  },
  {
    "source": "sec_p6",
    "target": "cld_cont"
  },
  {
    "source": "cld_cont",
    "target": "cld_cont_sub0"
  },
  {
    "source": "cld_cont_sub0",
    "target": "cld_cont_sub0_l1"
  },
  {
    "source": "cld_cont_sub0",
    "target": "cld_cont_sub0_l2"
  },
  {
    "source": "cld_cont",
    "target": "cld_cont_sub1"
  },
  {
    "source": "cld_cont_sub1",
    "target": "cld_cont_sub1_l1"
  },
  {
    "source": "cld_cont_sub1",
    "target": "cld_cont_sub1_l2"
  },
  {
    "source": "cld_cont",
    "target": "cld_cont_sub2"
  },
  {
    "source": "cld_cont_sub2",
    "target": "cld_cont_sub2_l1"
  },
  {
    "source": "cld_cont_sub2",
    "target": "cld_cont_sub2_l2"
  },
  {
    "source": "cld_cont",
    "target": "cld_cont_sub3"
  },
  {
    "source": "cld_cont_sub3",
    "target": "cld_cont_sub3_l1"
  },
  {
    "source": "cld_cont_sub3",
    "target": "cld_cont_sub3_l2"
  },
  {
    "source": "cld_cont",
    "target": "cld_cont_sub4"
  },
  {
    "source": "cld_cont_sub4",
    "target": "cld_cont_sub4_l1"
  },
  {
    "source": "cld_cont_sub4",
    "target": "cld_cont_sub4_l2"
  },
  {
    "source": "sec_p6",
    "target": "cld_k8s"
  },
  {
    "source": "cld_k8s",
    "target": "cld_k8s_sub0"
  },
  {
    "source": "cld_k8s_sub0",
    "target": "cld_k8s_sub0_l1"
  },
  {
    "source": "cld_k8s_sub0",
    "target": "cld_k8s_sub0_l2"
  },
  {
    "source": "cld_k8s",
    "target": "cld_k8s_sub1"
  },
  {
    "source": "cld_k8s_sub1",
    "target": "cld_k8s_sub1_l1"
  },
  {
    "source": "cld_k8s_sub1",
    "target": "cld_k8s_sub1_l2"
  },
  {
    "source": "cld_k8s",
    "target": "cld_k8s_sub2"
  },
  {
    "source": "cld_k8s_sub2",
    "target": "cld_k8s_sub2_l1"
  },
  {
    "source": "cld_k8s_sub2",
    "target": "cld_k8s_sub2_l2"
  },
  {
    "source": "cld_k8s",
    "target": "cld_k8s_sub3"
  },
  {
    "source": "cld_k8s_sub3",
    "target": "cld_k8s_sub3_l1"
  },
  {
    "source": "cld_k8s_sub3",
    "target": "cld_k8s_sub3_l2"
  },
  {
    "source": "cld_k8s",
    "target": "cld_k8s_sub4"
  },
  {
    "source": "cld_k8s_sub4",
    "target": "cld_k8s_sub4_l1"
  },
  {
    "source": "cld_k8s_sub4",
    "target": "cld_k8s_sub4_l2"
  },
  {
    "source": "sec_root",
    "target": "sec_p7"
  },
  {
    "source": "sec_p7",
    "target": "off_osint"
  },
  {
    "source": "off_osint",
    "target": "off_osint_sub0"
  },
  {
    "source": "off_osint_sub0",
    "target": "off_osint_sub0_l1"
  },
  {
    "source": "off_osint_sub0",
    "target": "off_osint_sub0_l2"
  },
  {
    "source": "off_osint",
    "target": "off_osint_sub1"
  },
  {
    "source": "off_osint_sub1",
    "target": "off_osint_sub1_l1"
  },
  {
    "source": "off_osint_sub1",
    "target": "off_osint_sub1_l2"
  },
  {
    "source": "off_osint",
    "target": "off_osint_sub2"
  },
  {
    "source": "off_osint_sub2",
    "target": "off_osint_sub2_l1"
  },
  {
    "source": "off_osint_sub2",
    "target": "off_osint_sub2_l2"
  },
  {
    "source": "off_osint",
    "target": "off_osint_sub3"
  },
  {
    "source": "off_osint_sub3",
    "target": "off_osint_sub3_l1"
  },
  {
    "source": "off_osint_sub3",
    "target": "off_osint_sub3_l2"
  },
  {
    "source": "off_osint",
    "target": "off_osint_sub4"
  },
  {
    "source": "off_osint_sub4",
    "target": "off_osint_sub4_l1"
  },
  {
    "source": "off_osint_sub4",
    "target": "off_osint_sub4_l2"
  },
  {
    "source": "sec_p7",
    "target": "off_vuln"
  },
  {
    "source": "off_vuln",
    "target": "off_vuln_sub0"
  },
  {
    "source": "off_vuln_sub0",
    "target": "off_vuln_sub0_l1"
  },
  {
    "source": "off_vuln_sub0",
    "target": "off_vuln_sub0_l2"
  },
  {
    "source": "off_vuln",
    "target": "off_vuln_sub1"
  },
  {
    "source": "off_vuln_sub1",
    "target": "off_vuln_sub1_l1"
  },
  {
    "source": "off_vuln_sub1",
    "target": "off_vuln_sub1_l2"
  },
  {
    "source": "off_vuln",
    "target": "off_vuln_sub2"
  },
  {
    "source": "off_vuln_sub2",
    "target": "off_vuln_sub2_l1"
  },
  {
    "source": "off_vuln_sub2",
    "target": "off_vuln_sub2_l2"
  },
  {
    "source": "off_vuln",
    "target": "off_vuln_sub3"
  },
  {
    "source": "off_vuln_sub3",
    "target": "off_vuln_sub3_l1"
  },
  {
    "source": "off_vuln_sub3",
    "target": "off_vuln_sub3_l2"
  },
  {
    "source": "off_vuln",
    "target": "off_vuln_sub4"
  },
  {
    "source": "off_vuln_sub4",
    "target": "off_vuln_sub4_l1"
  },
  {
    "source": "off_vuln_sub4",
    "target": "off_vuln_sub4_l2"
  },
  {
    "source": "sec_p7",
    "target": "off_privesc"
  },
  {
    "source": "off_privesc",
    "target": "off_privesc_sub0"
  },
  {
    "source": "off_privesc_sub0",
    "target": "off_privesc_sub0_l1"
  },
  {
    "source": "off_privesc_sub0",
    "target": "off_privesc_sub0_l2"
  },
  {
    "source": "off_privesc",
    "target": "off_privesc_sub1"
  },
  {
    "source": "off_privesc_sub1",
    "target": "off_privesc_sub1_l1"
  },
  {
    "source": "off_privesc_sub1",
    "target": "off_privesc_sub1_l2"
  },
  {
    "source": "off_privesc",
    "target": "off_privesc_sub2"
  },
  {
    "source": "off_privesc_sub2",
    "target": "off_privesc_sub2_l1"
  },
  {
    "source": "off_privesc_sub2",
    "target": "off_privesc_sub2_l2"
  },
  {
    "source": "off_privesc",
    "target": "off_privesc_sub3"
  },
  {
    "source": "off_privesc_sub3",
    "target": "off_privesc_sub3_l1"
  },
  {
    "source": "off_privesc_sub3",
    "target": "off_privesc_sub3_l2"
  },
  {
    "source": "off_privesc",
    "target": "off_privesc_sub4"
  },
  {
    "source": "off_privesc_sub4",
    "target": "off_privesc_sub4_l1"
  },
  {
    "source": "off_privesc_sub4",
    "target": "off_privesc_sub4_l2"
  },
  {
    "source": "sec_p7",
    "target": "off_lat"
  },
  {
    "source": "off_lat",
    "target": "off_lat_sub0"
  },
  {
    "source": "off_lat_sub0",
    "target": "off_lat_sub0_l1"
  },
  {
    "source": "off_lat_sub0",
    "target": "off_lat_sub0_l2"
  },
  {
    "source": "off_lat",
    "target": "off_lat_sub1"
  },
  {
    "source": "off_lat_sub1",
    "target": "off_lat_sub1_l1"
  },
  {
    "source": "off_lat_sub1",
    "target": "off_lat_sub1_l2"
  },
  {
    "source": "off_lat",
    "target": "off_lat_sub2"
  },
  {
    "source": "off_lat_sub2",
    "target": "off_lat_sub2_l1"
  },
  {
    "source": "off_lat_sub2",
    "target": "off_lat_sub2_l2"
  },
  {
    "source": "off_lat",
    "target": "off_lat_sub3"
  },
  {
    "source": "off_lat_sub3",
    "target": "off_lat_sub3_l1"
  },
  {
    "source": "off_lat_sub3",
    "target": "off_lat_sub3_l2"
  },
  {
    "source": "off_lat",
    "target": "off_lat_sub4"
  },
  {
    "source": "off_lat_sub4",
    "target": "off_lat_sub4_l1"
  },
  {
    "source": "off_lat_sub4",
    "target": "off_lat_sub4_l2"
  },
  {
    "source": "sec_p7",
    "target": "off_c2"
  },
  {
    "source": "off_c2",
    "target": "off_c2_sub0"
  },
  {
    "source": "off_c2_sub0",
    "target": "off_c2_sub0_l1"
  },
  {
    "source": "off_c2_sub0",
    "target": "off_c2_sub0_l2"
  },
  {
    "source": "off_c2",
    "target": "off_c2_sub1"
  },
  {
    "source": "off_c2_sub1",
    "target": "off_c2_sub1_l1"
  },
  {
    "source": "off_c2_sub1",
    "target": "off_c2_sub1_l2"
  },
  {
    "source": "off_c2",
    "target": "off_c2_sub2"
  },
  {
    "source": "off_c2_sub2",
    "target": "off_c2_sub2_l1"
  },
  {
    "source": "off_c2_sub2",
    "target": "off_c2_sub2_l2"
  },
  {
    "source": "off_c2",
    "target": "off_c2_sub3"
  },
  {
    "source": "off_c2_sub3",
    "target": "off_c2_sub3_l1"
  },
  {
    "source": "off_c2_sub3",
    "target": "off_c2_sub3_l2"
  },
  {
    "source": "off_c2",
    "target": "off_c2_sub4"
  },
  {
    "source": "off_c2_sub4",
    "target": "off_c2_sub4_l1"
  },
  {
    "source": "off_c2_sub4",
    "target": "off_c2_sub4_l2"
  },
  {
    "source": "sec_p7",
    "target": "off_team"
  },
  {
    "source": "off_team",
    "target": "off_team_sub0"
  },
  {
    "source": "off_team_sub0",
    "target": "off_team_sub0_l1"
  },
  {
    "source": "off_team_sub0",
    "target": "off_team_sub0_l2"
  },
  {
    "source": "off_team",
    "target": "off_team_sub1"
  },
  {
    "source": "off_team_sub1",
    "target": "off_team_sub1_l1"
  },
  {
    "source": "off_team_sub1",
    "target": "off_team_sub1_l2"
  },
  {
    "source": "off_team",
    "target": "off_team_sub2"
  },
  {
    "source": "off_team_sub2",
    "target": "off_team_sub2_l1"
  },
  {
    "source": "off_team_sub2",
    "target": "off_team_sub2_l2"
  },
  {
    "source": "off_team",
    "target": "off_team_sub3"
  },
  {
    "source": "off_team_sub3",
    "target": "off_team_sub3_l1"
  },
  {
    "source": "off_team_sub3",
    "target": "off_team_sub3_l2"
  },
  {
    "source": "off_team",
    "target": "off_team_sub4"
  },
  {
    "source": "off_team_sub4",
    "target": "off_team_sub4_l1"
  },
  {
    "source": "off_team_sub4",
    "target": "off_team_sub4_l2"
  },
  {
    "source": "sec_root",
    "target": "sec_p8"
  },
  {
    "source": "sec_p8",
    "target": "comp_soc"
  },
  {
    "source": "comp_soc",
    "target": "comp_soc_sub0"
  },
  {
    "source": "comp_soc_sub0",
    "target": "comp_soc_sub0_l1"
  },
  {
    "source": "comp_soc_sub0",
    "target": "comp_soc_sub0_l2"
  },
  {
    "source": "comp_soc",
    "target": "comp_soc_sub1"
  },
  {
    "source": "comp_soc_sub1",
    "target": "comp_soc_sub1_l1"
  },
  {
    "source": "comp_soc_sub1",
    "target": "comp_soc_sub1_l2"
  },
  {
    "source": "comp_soc",
    "target": "comp_soc_sub2"
  },
  {
    "source": "comp_soc_sub2",
    "target": "comp_soc_sub2_l1"
  },
  {
    "source": "comp_soc_sub2",
    "target": "comp_soc_sub2_l2"
  },
  {
    "source": "comp_soc",
    "target": "comp_soc_sub3"
  },
  {
    "source": "comp_soc_sub3",
    "target": "comp_soc_sub3_l1"
  },
  {
    "source": "comp_soc_sub3",
    "target": "comp_soc_sub3_l2"
  },
  {
    "source": "comp_soc",
    "target": "comp_soc_sub4"
  },
  {
    "source": "comp_soc_sub4",
    "target": "comp_soc_sub4_l1"
  },
  {
    "source": "comp_soc_sub4",
    "target": "comp_soc_sub4_l2"
  },
  {
    "source": "sec_p8",
    "target": "comp_nist"
  },
  {
    "source": "comp_nist",
    "target": "comp_nist_sub0"
  },
  {
    "source": "comp_nist_sub0",
    "target": "comp_nist_sub0_l1"
  },
  {
    "source": "comp_nist_sub0",
    "target": "comp_nist_sub0_l2"
  },
  {
    "source": "comp_nist",
    "target": "comp_nist_sub1"
  },
  {
    "source": "comp_nist_sub1",
    "target": "comp_nist_sub1_l1"
  },
  {
    "source": "comp_nist_sub1",
    "target": "comp_nist_sub1_l2"
  },
  {
    "source": "comp_nist",
    "target": "comp_nist_sub2"
  },
  {
    "source": "comp_nist_sub2",
    "target": "comp_nist_sub2_l1"
  },
  {
    "source": "comp_nist_sub2",
    "target": "comp_nist_sub2_l2"
  },
  {
    "source": "comp_nist",
    "target": "comp_nist_sub3"
  },
  {
    "source": "comp_nist_sub3",
    "target": "comp_nist_sub3_l1"
  },
  {
    "source": "comp_nist_sub3",
    "target": "comp_nist_sub3_l2"
  },
  {
    "source": "comp_nist",
    "target": "comp_nist_sub4"
  },
  {
    "source": "comp_nist_sub4",
    "target": "comp_nist_sub4_l1"
  },
  {
    "source": "comp_nist_sub4",
    "target": "comp_nist_sub4_l2"
  },
  {
    "source": "sec_p8",
    "target": "comp_ir"
  },
  {
    "source": "comp_ir",
    "target": "comp_ir_sub0"
  },
  {
    "source": "comp_ir_sub0",
    "target": "comp_ir_sub0_l1"
  },
  {
    "source": "comp_ir_sub0",
    "target": "comp_ir_sub0_l2"
  },
  {
    "source": "comp_ir",
    "target": "comp_ir_sub1"
  },
  {
    "source": "comp_ir_sub1",
    "target": "comp_ir_sub1_l1"
  },
  {
    "source": "comp_ir_sub1",
    "target": "comp_ir_sub1_l2"
  },
  {
    "source": "comp_ir",
    "target": "comp_ir_sub2"
  },
  {
    "source": "comp_ir_sub2",
    "target": "comp_ir_sub2_l1"
  },
  {
    "source": "comp_ir_sub2",
    "target": "comp_ir_sub2_l2"
  },
  {
    "source": "comp_ir",
    "target": "comp_ir_sub3"
  },
  {
    "source": "comp_ir_sub3",
    "target": "comp_ir_sub3_l1"
  },
  {
    "source": "comp_ir_sub3",
    "target": "comp_ir_sub3_l2"
  },
  {
    "source": "comp_ir",
    "target": "comp_ir_sub4"
  },
  {
    "source": "comp_ir_sub4",
    "target": "comp_ir_sub4_l1"
  },
  {
    "source": "comp_ir_sub4",
    "target": "comp_ir_sub4_l2"
  },
  {
    "source": "sec_p8",
    "target": "comp_siem"
  },
  {
    "source": "comp_siem",
    "target": "comp_siem_sub0"
  },
  {
    "source": "comp_siem_sub0",
    "target": "comp_siem_sub0_l1"
  },
  {
    "source": "comp_siem_sub0",
    "target": "comp_siem_sub0_l2"
  },
  {
    "source": "comp_siem",
    "target": "comp_siem_sub1"
  },
  {
    "source": "comp_siem_sub1",
    "target": "comp_siem_sub1_l1"
  },
  {
    "source": "comp_siem_sub1",
    "target": "comp_siem_sub1_l2"
  },
  {
    "source": "comp_siem",
    "target": "comp_siem_sub2"
  },
  {
    "source": "comp_siem_sub2",
    "target": "comp_siem_sub2_l1"
  },
  {
    "source": "comp_siem_sub2",
    "target": "comp_siem_sub2_l2"
  },
  {
    "source": "comp_siem",
    "target": "comp_siem_sub3"
  },
  {
    "source": "comp_siem_sub3",
    "target": "comp_siem_sub3_l1"
  },
  {
    "source": "comp_siem_sub3",
    "target": "comp_siem_sub3_l2"
  },
  {
    "source": "comp_siem",
    "target": "comp_siem_sub4"
  },
  {
    "source": "comp_siem_sub4",
    "target": "comp_siem_sub4_l1"
  },
  {
    "source": "comp_siem_sub4",
    "target": "comp_siem_sub4_l2"
  },
  {
    "source": "sec_p8",
    "target": "comp_forensic"
  },
  {
    "source": "comp_forensic",
    "target": "comp_forensic_sub0"
  },
  {
    "source": "comp_forensic_sub0",
    "target": "comp_forensic_sub0_l1"
  },
  {
    "source": "comp_forensic_sub0",
    "target": "comp_forensic_sub0_l2"
  },
  {
    "source": "comp_forensic",
    "target": "comp_forensic_sub1"
  },
  {
    "source": "comp_forensic_sub1",
    "target": "comp_forensic_sub1_l1"
  },
  {
    "source": "comp_forensic_sub1",
    "target": "comp_forensic_sub1_l2"
  },
  {
    "source": "comp_forensic",
    "target": "comp_forensic_sub2"
  },
  {
    "source": "comp_forensic_sub2",
    "target": "comp_forensic_sub2_l1"
  },
  {
    "source": "comp_forensic_sub2",
    "target": "comp_forensic_sub2_l2"
  },
  {
    "source": "comp_forensic",
    "target": "comp_forensic_sub3"
  },
  {
    "source": "comp_forensic_sub3",
    "target": "comp_forensic_sub3_l1"
  },
  {
    "source": "comp_forensic_sub3",
    "target": "comp_forensic_sub3_l2"
  },
  {
    "source": "comp_forensic",
    "target": "comp_forensic_sub4"
  },
  {
    "source": "comp_forensic_sub4",
    "target": "comp_forensic_sub4_l1"
  },
  {
    "source": "comp_forensic_sub4",
    "target": "comp_forensic_sub4_l2"
  },
  {
    "source": "sec_p8",
    "target": "comp_tabletop"
  },
  {
    "source": "comp_tabletop",
    "target": "comp_tabletop_sub0"
  },
  {
    "source": "comp_tabletop_sub0",
    "target": "comp_tabletop_sub0_l1"
  },
  {
    "source": "comp_tabletop_sub0",
    "target": "comp_tabletop_sub0_l2"
  },
  {
    "source": "comp_tabletop",
    "target": "comp_tabletop_sub1"
  },
  {
    "source": "comp_tabletop_sub1",
    "target": "comp_tabletop_sub1_l1"
  },
  {
    "source": "comp_tabletop_sub1",
    "target": "comp_tabletop_sub1_l2"
  },
  {
    "source": "comp_tabletop",
    "target": "comp_tabletop_sub2"
  },
  {
    "source": "comp_tabletop_sub2",
    "target": "comp_tabletop_sub2_l1"
  },
  {
    "source": "comp_tabletop_sub2",
    "target": "comp_tabletop_sub2_l2"
  },
  {
    "source": "comp_tabletop",
    "target": "comp_tabletop_sub3"
  },
  {
    "source": "comp_tabletop_sub3",
    "target": "comp_tabletop_sub3_l1"
  },
  {
    "source": "comp_tabletop_sub3",
    "target": "comp_tabletop_sub3_l2"
  },
  {
    "source": "comp_tabletop",
    "target": "comp_tabletop_sub4"
  },
  {
    "source": "comp_tabletop_sub4",
    "target": "comp_tabletop_sub4_l1"
  },
  {
    "source": "comp_tabletop_sub4",
    "target": "comp_tabletop_sub4_l2"
  }
]
};
