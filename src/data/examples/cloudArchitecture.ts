import { MindMapData } from "../../services/llmService";

export const CLOUD_ARCHITECTURE_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "cloud_root",
      "label": "Cloud Architecture & Multi-Cloud Infrastructure",
      "description": "Rigorous first-principles blueprint of IaaS compute hypervisors, Nitro offloading, VPC networking, serverless microVMs, IAM policy evaluation, multi-region active-active DR, IaC DAG engines, and FinOps cost optimization.",
      "type": "topic"
    },
    {
      "id": "cloud_root_p1",
      "label": "Core IaaS Compute & Hypervisor Architecture",
      "description": "Hardware virtualization, bare-metal offloading, and hypervisor architectures powering cloud compute instances.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t1",
      "label": "KVM Hypervisor & VT-x Virtualization",
      "description": "Kernel-based Virtual Machine architecture using Intel VT-x and AMD-V hardware extensions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t1_s1",
      "label": "VMCS (Virtual Machine Control Structure)",
      "description": "Hardware data structure managing guest CPU state, host CPU state, and VM-Execution control fields.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t1_s1_d1",
      "label": "VMLAUNCH and VMRESUME Instructions",
      "description": "Executing VMLAUNCH to transition CPU execution into Guest Non-Root operation mode.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t1_s1_d2",
      "label": "VM-Exit Reason Handling",
      "description": "Handling hardware VM-Exits triggered by privileged guest I/O or page faults.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t1_s2",
      "label": "Extended Page Tables (EPT / Nested Paging)",
      "description": "Hardware-assisted two-dimensional page table translation mapping guest physical to host physical memory.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t1_s2_d1",
      "label": "EPT Page Fault Cost Bounds",
      "description": "Eliminating shadow page table maintenance overhead by performing 2D page table walks in hardware.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t1_s2_d2",
      "label": "TLB Tagging with VPID",
      "description": "Tagging TLB entries with Virtual Processor IDs to prevent TLB flushes during VM-Exits.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t1_s3",
      "label": "virtio Paravirtualized I/O Drivers",
      "description": "Standardized abstraction layer for high-performance guest-to-host I/O communication.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t1_s3_d1",
      "label": "virtqueue Shared Ring Buffers",
      "description": "Exchanging descriptor buffers between guest and host using lockless ring buffer queues.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t1_s3_d2",
      "label": "virtio-net & virtio-blk Drivers",
      "description": "Achieving near-native network and block storage throughput.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t1_s4",
      "label": "QEMU Device Emulation & TCG",
      "description": "User-space machine emulator executing device emulation alongside KVM kernel modules.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t1_s4_d1",
      "label": "Tiny Code Generator (TCG)",
      "description": "Translating guest machine instructions to host architecture instructions when hardware virt is unavailable.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t1_s4_d2",
      "label": "QEMU Memory Region Mapping",
      "description": "Mapping virtual machine memory blocks using mmap memory calls.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t1_s5",
      "label": "CPU Overcommit & vCPU Scheduling",
      "description": "Multiplying virtual CPUs across physical host CPU cores.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t1_s5_d1",
      "label": "vCPU-to-pCPU Thread Mapping",
      "description": "Scheduling vCPU threads as standard Linux tasks using the CFS scheduler.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t1_s5_d2",
      "label": "Steal Time Metric Monitoring (%steal)",
      "description": "Measuring CPU cycles stolen from a vCPU while waiting for host CPU allocation.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t2",
      "label": "AWS Nitro System Hardware Offloading",
      "description": "Custom ASIC card architecture offloading VPC networking, EBS storage, and security management from host CPUs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t2_s1",
      "label": "Nitro Card for VPC Networking",
      "description": "Custom PCIe ASIC processing VPC encapsulation, security groups, and routing in dedicated hardware.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t2_s1_d1",
      "label": "ENA (Elastic Network Adapter) Driver",
      "description": "Exposing high-throughput network interfaces (up to 100Gbps+) with low CPU overhead.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t2_s1_d2",
      "label": "Hardware Geneve/VXLAN Encapsulation",
      "description": "Encapsulating VPC network packets in hardware before sending over physical data center networks.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t2_s2",
      "label": "Nitro Card for EBS Storage",
      "description": "PCIe NVMe controller card offloading Elastic Block Store volume encryption and network transfers.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t2_s2_d1",
      "label": "Hardware NVMe Controller Emulation",
      "description": "Presenting local NVMe drives to guest OS while streaming block I/O over network to EBS servers.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t2_s2_d2",
      "label": "AES-256 Hardware Inline Encryption",
      "description": "Encrypting block data at line-rate during write operations without performance penalty.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t2_s3",
      "label": "Nitro Security Chip & Firmware Validation",
      "description": "Dedicated hardware chip protecting system flash memory and validating system boot integrity.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t2_s3_d1",
      "label": "Hardware Root of Trust Boot Chain",
      "description": "Verifying cryptographic signatures of Nitro firmware components during power-on.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t2_s3_d2",
      "label": "Restricted Microcontroller Access",
      "description": "Preventing host CPU access to Nitro system management interfaces.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t2_s4",
      "label": "Nitro Hypervisor Minimal Footprint",
      "description": "Lightweight hypervisor based on KVM optimized specifically for Nitro card offloading.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t2_s4_d1",
      "label": "Zero Host CPU Reserve Footprint",
      "description": "Dedicating 100% of host CPU and RAM resources to customer EC2 instance allocations.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t2_s4_d2",
      "label": "Elimination of QEMU Process Layer",
      "description": "Replacing heavy QEMU emulators with lightweight C++ Nitro hypervisor components.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t2_s5",
      "label": "AWS Nitro Enclaves Security Isolation",
      "description": "Isolated EC2 sub-environments for processing sensitive cryptographic keys and PII data.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t2_s5_d1",
      "label": "Zero Storage & Zero External Network Access",
      "description": "Isolating enclaves with no persistent disk, external network, or admin access.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t2_s5_d2",
      "label": "Local PCIe Vsock Communication Channel",
      "description": "Exchanging data exclusively over local virtio vsock sockets with parent EC2 instances.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t3",
      "label": "GCP Bare Metal & Hypervisor Engine",
      "description": "Google Cloud Platform compute infrastructure utilizing custom Andromeda SDN and Titanium offloading.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t3_s1",
      "label": "Google Cloud Titanium Offloading Architecture",
      "description": "Custom ASICs and SmartNICs offloading networking and security workloads from host CPUs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t3_s1_d1",
      "label": "Titanium Adapter Memory Pipelines",
      "description": "Accelerating packet processing and disk I/O using dedicated silicon hardware.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t3_s1_d2",
      "label": "Host Resource Maximization",
      "description": "Delivering up to 99% of physical machine compute capacity to customer instances.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t3_s2",
      "label": "gVisor Container Runtime Security Enclave",
      "description": "Application kernel written in Go intercepting and virtualizing Linux system calls.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t3_s2_d1",
      "label": "Sentry Syscall Interposition Layer",
      "description": "Intercepting guest application system calls and executing them in user-space Go code.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t3_s2_d2",
      "label": "Gofer File System Isolation Daemon",
      "description": "Isolating file system operations to prevent container breakout exploits.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t3_s3",
      "label": "Live Migration Engine Infrastructure",
      "description": "Migrating running virtual machines across physical host servers without downtime or state loss.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t3_s3_d1",
      "label": "Iterative Pre-Copy Memory Streaming",
      "description": "Streaming dirty memory pages to target hosts while the VM continues running.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t3_s3_d2",
      "label": "Final Blackout Pause Period (< 100ms)",
      "description": "Pausing VM for under 100ms to transfer final CPU registers and switch network routing.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t3_s4",
      "label": "Confidential VMs & AMD SEV Encryption",
      "description": "Encrypting VM memory contents using AMD Secure Encrypted Virtualization (SEV).",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t3_s4_d1",
      "label": "Hardware Memory Encryption Key (AES-128)",
      "description": "Encrypting RAM blocks with hardware keys managed by AMD Secure Processor.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t3_s4_d2",
      "label": "Hypervisor Memory Inspection Prevention",
      "description": "Preventing host OS and cloud administrators from reading VM memory contents.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t3_s5",
      "label": "Custom Machine Types & Dynamic Resource Allocation",
      "description": "Allowing customers to select custom combinations of vCPUs and RAM sizes.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t3_s5_d1",
      "label": "Flexible Memory Ratio Configurations",
      "description": "Configuring custom vCPU to RAM ratios (from 0.9 GB/vCPU to 8 GB/vCPU).",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t3_s5_d2",
      "label": "NUMA-Aware Resource Placement",
      "description": "Ensuring custom VM allocations respect physical CPU socket NUMA boundaries.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t4",
      "label": "Azure Compute & Hyper-V Architecture",
      "description": "Microsoft Azure cloud compute platform powered by custom Hyper-V hypervisors and FPGA SmartNICs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t4_s1",
      "label": "Hyper-V Microkernel Architecture",
      "description": "Type-1 hypervisor operating directly on bare-metal hardware below parent and child partitions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t4_s1_d1",
      "label": "Parent Partition (Management Console)",
      "description": "Running Azure Host Management software in a privileged parent partition.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t4_s1_d2",
      "label": "Child Partition (Customer VMs)",
      "description": "Isolating customer workloads in unprivileged child partitions with virtual processors.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t4_s2",
      "label": "Azure Accelerated Networking (FPGA SmartNIC)",
      "description": "Offloading Azure Virtual Network processing to FPGA SmartNICs (Project Catapult).",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t4_s2_d1",
      "label": "SR-IOV (Single Root I/O Virtualization)",
      "description": "Bypassing hypervisor stack to map SmartNIC virtual functions directly into VM memory.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t4_s2_d2",
      "label": "Sub-15-Microsecond Inter-VM Latency",
      "description": "Achieving sub-15-microsecond network latencies between Azure virtual machines.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t4_s3",
      "label": "Azure Resource Manager (ARM) Control Plane",
      "description": "Management framework for deploying, managing, and tracking Azure infrastructure assets.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t4_s3_d1",
      "label": "Declarative JSON/Bicep Template Compilation",
      "description": "Compiling Bicep files into ARM JSON templates for idempotent deployment.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t4_s3_d2",
      "label": "Resource Provider REST API Routing",
      "description": "Routing resource requests to Microsoft.Compute, Microsoft.Network, and Microsoft.Storage.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t4_s4",
      "label": "Azure Spot VMs & Eviction Mechanics",
      "description": "Accessing unused Azure compute capacity at steep discounts with eviction warnings.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t4_s4_d1",
      "label": "30-Second Eviction Notice via Scheduled Events",
      "description": "Monitoring metadata service endpoints for 30-second warning signals before VM termination.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t4_s4_d2",
      "label": "Capacity-Only vs Price-Only Eviction Policies",
      "description": "Configuring eviction triggers based on max price limits or hardware demand.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t4_s5",
      "label": "Azure Confidential Computing (DC-Series)",
      "description": "Utilizing Intel SGX and AMD SEV-SNP to secure data in use during cloud processing.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t4_s5_d1",
      "label": "Intel SGX Enclave Memory Measurement",
      "description": "Creating Enclave Page Cache (EPC) memory regions isolated from host OS access.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t4_s5_d2",
      "label": "Attestation & Key Management Services",
      "description": "Verifying enclave hardware measurements via Azure Attestation services.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t5",
      "label": "Bare-Metal & Hybrid Compute Integration",
      "description": "Provisioning dedicated physical servers in cloud data centers with full hardware control.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t5_s1",
      "label": "Bare-Metal Cloud Provisioning Workflows",
      "description": "Automating bare-metal server discovery, PXE booting, and OS deployment.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t5_s1_d1",
      "label": "IPMI / Redfish API Management",
      "description": "Controlling physical server power, BIOS settings, and hardware sensors via REST APIs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t5_s1_d2",
      "label": "iPXE Network Booting Protocols",
      "description": "Streaming custom kernel images over network interfaces during initial server bring-up.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t5_s2",
      "label": "Single-Tenant Physical Hardware Isolation",
      "description": "Eliminating noisy neighbors and hypervisor overhead for latency-critical workloads.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t5_s2_d1",
      "label": "Zero Multi-Tenant Co-location",
      "description": "Guaranteeing 100% of physical CPU cores, RAM, and PCIe slots belong to single clients.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t5_s2_d2",
      "label": "Direct Access to Hardware Performance Counters",
      "description": "Profiling CPU performance using perf and Intel VTune without hypervisor interception.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t5_s3",
      "label": "VPC Native Bare-Metal Networking Integration",
      "description": "Attaching bare-metal physical servers directly to virtual private cloud subnets.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t5_s3_d1",
      "label": "Top-of-Rack (ToR) Switch VXLAN Tagging",
      "description": "Configuring ToR switches to encapsulate physical server packets into VPC VXLAN tunnels.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t5_s3_d2",
      "label": "Seamless Hybrid VM-to-Bare-Metal Routing",
      "description": "Enabling direct low-latency communication between VMs and bare-metal nodes.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t5_s4",
      "label": "Outposts / Anthos / Arc Hybrid Cloud Extensions",
      "description": "Deploying cloud-managed hardware racks into on-premises customer data centers.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t5_s4_d1",
      "label": "AWS Outposts Rack Architecture",
      "description": "Installing AWS-managed hardware racks connected back to AWS regions over VPN/DirectConnect.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t5_s4_d2",
      "label": "Control Plane Connection Resiliency",
      "description": "Maintaining local application execution during temporary WAN disconnects from cloud regions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t5_s5",
      "label": "Hardware Upgrade & Maintenance Automation",
      "description": "Managing physical hardware degradation and replacement without service interruption.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t5_s5_d1",
      "label": "Automated ECC Memory Error Tracking",
      "description": "Monitoring Correctable Error (CE) thresholds to replace failing RAM modules proactively.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t5_s5_d2",
      "label": "Non-Disruptive Firmware Rolling Updates",
      "description": "Applying BIOS and BMC updates using rolling node maintenance pools.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t6",
      "label": "Virtual Machine Placement & Hardware Packing",
      "description": "Algorithmic strategies for packing VMs onto physical host servers to maximize utilization and reliability.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t6_s1",
      "label": "Multidimensional Bin Packing Algorithms",
      "description": "Solving vector bin packing problems across CPU, RAM, Network, and Disk dimensions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t6_s1_d1",
      "label": "First Fit Decreasing (FFD) Vector Packing",
      "description": "Ordering VMs by resource requirements and allocating to the first host with sufficient capacity.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t6_s1_d2",
      "label": "Fragmentation Minimization Heuristics",
      "description": "Balancing resource utilization ratios to prevent stranding CPU or memory resources.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t6_s2",
      "label": "Anti-Affinity Rules & Spread Placement Groups",
      "description": "Ensuring critical instance pairs are placed on distinct physical hardware racks.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t6_s2_d1",
      "label": "Spread Placement Group Rules",
      "description": "Restricting placement to distinct physical racks with independent power and network switches.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t6_s2_d2",
      "label": "Hardware Failure Blast Radius Containment",
      "description": "Guaranteeing single server failures take down at most one instance in a cluster.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t6_s3",
      "label": "Cluster Placement Groups for HPC Workloads",
      "description": "Packing instances closely inside single data center halls to minimize network latency.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t6_s3_d1",
      "label": "Low Latency Inter-Instance Routing",
      "description": "Achieving sub-10-microsecond network latencies for MPI distributed training workloads.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t6_s3_d2",
      "label": "Single-Switch Non-Blocking Fabrics",
      "description": "Connecting cluster instances to shared non-blocking network switches.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t6_s4",
      "label": "Partition Placement Groups",
      "description": "Dividing large instance deployments into logical partitions isolated from other partitions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t6_s4_d1",
      "label": "Multi-Rack Partition Mapping",
      "description": "Grouping instances into logical partitions mapped to non-overlapping rack sets.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t6_s4_d2",
      "label": "Hadoop & Cassandra Topology Integration",
      "description": "Aligning partition placement with distributed database rack-awareness configurations.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t6_s5",
      "label": "Dynamic Workload Balancing & Migration",
      "description": "Rebalancing VM placements dynamically as resource utilization shifts.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t6_s5_d1",
      "label": "Thermal & Power Load Redistribution",
      "description": "Migrating VMs away from hot physical servers to prevent thermal throttling.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p1_t6_s5_d2",
      "label": "Maintenance Eviction Automation",
      "description": "Emptying physical hosts automatically prior to scheduled hardware maintenance.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2",
      "label": "Cloud Networking & VPC Topologies",
      "description": "Overlay networks, BGP routing, transit gateways, cross-region peering, and software-defined network fabrics.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t1",
      "label": "VPC Overlay Network & Encapsulation",
      "description": "Software-Defined Networking (SDN) layers encapsulating tenant traffic over physical data center fabrics.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t1_s1",
      "label": "Geneve / VXLAN Encapsulation Header",
      "description": "Encapsulating tenant Layer 2/3 frames inside UDP packets (port 4789 / 6081).",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t1_s1_d1",
      "label": "Virtual Network Identifier (VNI / VNI 24-bit)",
      "description": "Using 24-bit VNIs to support up to 16 million isolated virtual networks per data center.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t1_s1_d2",
      "label": "Geneve Variable Option TLV Headers",
      "description": "Carrying custom security group and routing metadata inside Geneve header option fields.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t1_s2",
      "label": "MTU & Jumbo Frame Configurations",
      "description": "Managing Maximum Transmission Unit sizes across virtual network adapters and physical switches.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t1_s2_d1",
      "label": "9001 Byte Jumbo Frame Support",
      "description": "Configuring 9001-byte jumbo frames inside VPCs to maximize network throughput.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t1_s2_d2",
      "label": "Path MTU Discovery (PMTUD) & ICMP Type 3",
      "description": "Handling ICMP Fragmentation Needed messages to prevent silent packet drops.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t1_s3",
      "label": "AWS VPC Mapping Service (Mapping Service / Mapping DB)",
      "description": "Distributed lookup directory mapping virtual IP addresses to physical hypervisor IPs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t1_s3_d1",
      "label": "Sub-Millisecond IP Route Lookup",
      "description": "Consulting local hypervisor mapping caches to resolve target host IPs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t1_s3_d2",
      "label": "Encapsulation Outer Header Construction",
      "description": "Wrapping packets in outer IP headers addressed to target host physical IPs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t1_s4",
      "label": "Subnet CIDR Allocation & IPAM Architecture",
      "description": "Structuring IPv4/IPv6 address spaces using Classless Inter-Domain Routing.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t1_s4_d1",
      "label": "AWS Reserved IP Addresses (First 4 and Last 1)",
      "description": "Reserving 5 IP addresses per subnet (Network, Router, DNS, Future, Broadcast).",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t1_s4_d2",
      "label": "Automated IPAM (IP Address Management)",
      "description": "Tracking IP space allocations across multiple cloud accounts and regions automatically.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t1_s5",
      "label": "Dual-Stack IPv4 / IPv6 VPC Routing",
      "description": "Deploying native IPv6 routing alongside legacy IPv4 address space.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t1_s5_d1",
      "label": "Egress-Only Internet Gateway (EOIGW)",
      "description": "Allowing outbound IPv6 connections while blocking inbound unsolicited connections.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t1_s5_d2",
      "label": "Global Unicast IPv6 (/56 CIDR Block Allocation)",
      "description": "Assigning globally routable /56 IPv6 prefixes to cloud VPC instances.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t2",
      "label": "Transit Gateway & Hub-and-Spoke Topologies",
      "description": "Centralized network routing hubs interconnecting hundreds of VPCs and on-premises networks.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t2_s1",
      "label": "Transit Gateway (TGW) Route Tables",
      "description": "Configuring isolated or shared route tables inside central transit routing hubs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t2_s1_d1",
      "label": "Static vs Dynamic Route Propagation",
      "description": "Propagating connected VPC subnets into TGW route tables automatically.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t2_s1_d2",
      "label": "Network Segmentation Isolation Policies",
      "description": "Creating isolated route tables for Prod, Dev, and Shared Services VPCs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t2_s2",
      "label": "Equal-Cost Multi-Path (ECMP) Routing",
      "description": "Distributing traffic across multiple parallel network paths or VPN tunnels.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t2_s2_d1",
      "label": "5-Tuple Hash Flow Distribution",
      "description": "Hashing src/dst IP, src/dst port, and protocol to load balance flows across paths.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t2_s2_d2",
      "label": "Bandwidth Multiplexing over VPN Tunnels",
      "description": "Combining multiple 1.25 Gbps IPsec VPN tunnels to achieve multi-gigabit throughput.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t2_s3",
      "label": "Appliance VPC & Inspection Steering",
      "description": "Routing cross-VPC traffic through centralized firewall inspection clusters.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t2_s3_d1",
      "label": "Gateway Load Balancer (GWLB) Integration",
      "description": "Steering traffic to third-party firewall appliances using GENEVE encapsulation.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t2_s3_d2",
      "label": "Symmetric Flow Inspection Guarantees",
      "description": "Ensuring outbound and return traffic flows pass through identical firewall instances.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t2_s4",
      "label": "Peering Limits & Non-Transitive Routing",
      "description": "Managing limitations of direct VPC Peering connections.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t2_s4_d1",
      "label": "Non-Transitive Peering Boundary",
      "description": "Preventing traffic from passing through a peered VPC to a secondary network.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t2_s4_d2",
      "label": "Mesh Complexity Scale (N*(N-1)/2)",
      "description": "Replacing complex full-mesh VPC peering setups with hub-and-spoke TGWs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t2_s5",
      "label": "BGP Route Advertisements (Autonomous System Numbers)",
      "description": "Exchanging dynamic routing information over Border Gateway Protocol.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t2_s5_d1",
      "label": "ASN (Autonomous System Number) Assignments",
      "description": "Configuring private ASNs (64512-65534) for cloud transit gateways.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t2_s5_d2",
      "label": "BGP Community Tag Filtering",
      "description": "Tagging routes to control traffic engineering and path preference across regions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t3",
      "label": "AWS DirectConnect & Dedicated Cloud Links",
      "description": "Bypassing public internet via dedicated private fiber connections to cloud data centers.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t3_s1",
      "label": "DirectConnect Physical Connection Options (1G, 10G, 100G)",
      "description": "Provisioning dedicated cross-connect fiber cables at colocation facilities.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t3_s1_d1",
      "label": "Single-Mode Fiber 1000BASE-LX / 10GBASE-LR Specs",
      "description": "Connecting customer routers to AWS DirectConnect routers via optical fiber.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t3_s1_d2",
      "label": "Link Aggregation Groups (LAG)",
      "description": "Combining up to 4 physical DirectConnect links into single logical interfaces.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t3_s2",
      "label": "Virtual Interfaces (Private, Public, Transit VIFs)",
      "description": "Configuring 802.1Q VLAN tags to route traffic to specific cloud destinations.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t3_s2_d1",
      "label": "Private VIF (VPC Connection)",
      "description": "Routing private IP traffic directly to VPC subnets via virtual private gateways.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t3_s2_d2",
      "label": "Public VIF (Cloud Service Endpoints)",
      "description": "Accessing public AWS services (S3, DynamoDB) over private fiber links.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t3_s2_d3",
      "label": "Transit VIF (TGW Connection)",
      "description": "Connecting DirectConnect locations directly to AWS Transit Gateways.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t3_s3",
      "label": "MACsec (802.1AE) Layer 2 Link Encryption",
      "description": "Encrypting traffic on physical DirectConnect links between customer routers and cloud switches.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t3_s3_d1",
      "label": "Hardware Layer 2 Line-Rate Encryption",
      "description": "Encrypting 10Gbps/100Gbps links without increasing network packet latency.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t3_s3_d2",
      "label": "Pre-Shared Key (CAK/CKN) Authentication",
      "description": "Establishing MACsec Security Associations using pre-shared Connectivity Association Keys.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t3_s4",
      "label": "High Availability Redundancy Models",
      "description": "Architecting fault-tolerant DirectConnect connections across distinct data center locations.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t3_s4_d1",
      "label": "Dual DX Location High Availability",
      "description": "Provisioning DX connections at two distinct colocation facilities to withstand data center outages.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t3_s4_d2",
      "label": "VPN Backup Failover Routes",
      "description": "Configuring IPsec VPN connections as low-cost backup paths when DX links fail.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t3_s5",
      "label": "DirectConnect Gateway (DXGW) Architecture",
      "description": "Interconnecting DirectConnect links to VPCs deployed across multiple geographic regions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t3_s5_d1",
      "label": "Multi-Region Global Routing",
      "description": "Routing on-premises traffic to VPCs in any global region (except China) via single DX links.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t3_s5_d2",
      "label": "BGP Route Summary Propagation",
      "description": "Summarizing regional VPC CIDR blocks before advertising routes over DXGW.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t4",
      "label": "Software-Defined Network Firewalls & Security Groups",
      "description": "Distributed stateful packet inspection layers protecting cloud compute instances.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t4_s1",
      "label": "Stateful Security Groups vs Stateless NACLs",
      "description": "Distinguishing instance-level stateful firewalls from subnet-level stateless access lists.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t4_s1_d1",
      "label": "Security Group Connection Tracking (Conntrack)",
      "description": "Tracking outbound connections to allow return traffic automatically without explicit inbound rules.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t4_s1_d2",
      "label": "Network ACL Rule Evaluation Sequence",
      "description": "Evaluating numbered rules sequentially (100, 200, 300) for inbound and outbound subnet traffic.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t4_s2",
      "label": "Conntrack Table Exceeded Bottlenecks",
      "description": "Handling network stalls caused by connection tracking table saturation.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t4_s2_d1",
      "label": "Conntrack Table Limits (nf_conntrack_max)",
      "description": "Exhausting kernel connection tracking tables during heavy SYN flood events.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t4_s2_d2",
      "label": "Untracked Connection Bypass Rules",
      "description": "Using NOTRACK iptables rules for high-throughput load balancer targets.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t4_s3",
      "label": "AWS Network Firewall & GCP Cloud Armor",
      "description": "Managed Layer 7 firewall services providing deep packet inspection and threat protection.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t4_s3_d1",
      "label": "Suricata Rule Engine Integration",
      "description": "Executing open-source Suricata IDS/IPS rules for deep packet inspection.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t4_s3_d2",
      "label": "WAF Rule Sets & Rate-Based Blocking",
      "description": "Blocking SQL injection, XSS, and HTTP flood attacks at cloud edge proxies.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t4_s4",
      "label": "DNS Firewall & Domain Filtering",
      "description": "Filtering outbound DNS queries to block malware communication and data exfiltration.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t4_s4_d1",
      "label": "Domain Allow / Deny Lists",
      "description": "Blocking DNS resolutions to known malicious domain names or Dynamic DNS domains.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t4_s4_d2",
      "label": "DNS Tunneling Detection Rules",
      "description": "Detecting data exfiltration attempts over abnormally long DNS query strings.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t4_s5",
      "label": "Asymmetric Routing Drop Risks",
      "description": "Preventing traffic drops caused by stateful firewalls seeing only one direction of a connection.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t4_s5_d1",
      "label": "Symmetric Path Enforcement",
      "description": "Ensuring inbound and outbound packets follow identical router paths.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t4_s5_d2",
      "label": "VPC Route Table Alignment",
      "description": "Aligning transit gateway route tables to prevent asymmetric traffic routing.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t5",
      "label": "Cross-Region VPC Peering & Latency Bounds",
      "description": "Interconnecting VPC networks deployed across distinct geographic cloud regions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t5_s1",
      "label": "Global Backbone Private Encrypted Fiber Routing",
      "description": "Routing cross-region VPC traffic over cloud vendor private global fiber backbones.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t5_s1_d1",
      "label": "Bypassing Public Internet Transit",
      "description": "Eliminating packet loss and latency jitter associated with public internet routing.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t5_s1_d2",
      "label": "AES-256 Link Encryption Defaults",
      "description": "Encrypting all intra-region and inter-region backbone traffic in hardware.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t5_s2",
      "label": "Inter-Region Latency & Speed of Light Bounds",
      "description": "Managing physical propagation latency delays between global data center regions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t5_s2_d1",
      "label": "US-East (N. Virginia) to EU-West (Ireland) ~75ms RTT",
      "description": "Accounting for 75ms round-trip speed of light propagation delays over trans-Atlantic submarine cables.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t5_s2_d2",
      "label": "US-East to AP-Southeast (Tokyo) ~150ms RTT",
      "description": "Managing 150ms RTT delays over trans-Pacific submarine fiber links.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t5_s3",
      "label": "Cross-Region Data Egress Cost Optimization",
      "description": "Managing cloud vendor data transfer charges incurred when sending data across region boundaries.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t5_s3_d1",
      "label": "$0.02 / GB Egress Billing Rates",
      "description": "Tracking cross-region transfer costs for data replication pipelines.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t5_s3_d2",
      "label": "Compression & Delta Batching Pipelines",
      "description": "Compressing payloads with ZSTD before streaming across cross-region VPC peers.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t5_s4",
      "label": "Cross-Region DNS Resolution (Route53 Private Hosted Zones)",
      "description": "Resolving private instance hostnames across peered VPCs in different regions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t5_s4_d1",
      "label": "Private Hosted Zone VPC Association",
      "description": "Associating central private DNS zones with VPCs deployed across multiple regions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t5_s4_d2",
      "label": "Cross-VPC Inbound / Outbound DNS Resolvers",
      "description": "Forwarding DNS queries between on-premises servers and regional cloud VPCs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t5_s5",
      "label": "Global Accelerator & Anycast IP Ingress",
      "description": "Routing client traffic to the nearest cloud edge location using static Anycast IP addresses.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t5_s5_d1",
      "label": "BGP Anycast IP Announcement",
      "description": "Advertising identical IP addresses from hundreds of edge Point of Presence (PoP) locations.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t5_s5_d2",
      "label": "TCP Connection Termination at Edge",
      "description": "Terminating client TCP handshakes at edge PoPs to accelerate first-byte transmission.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t6",
      "label": "Private Endpoints & PrivateLink Architecture",
      "description": "Accessing cloud SaaS services privately over internal VPC IP addresses without traversing the internet.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t6_s1",
      "label": "AWS PrivateLink & VPC Endpoint Interfaces",
      "description": "Exposing managed services directly into VPC subnets via Elastic Network Interfaces (ENI).",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t6_s1_d1",
      "label": "Subnet Private IP Allocation",
      "description": "Assigning private IP addresses from local subnets to VPC Endpoint interfaces.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t6_s1_d2",
      "label": "NLB (Network Load Balancer) Service Binding",
      "description": "Binding endpoint services to NLBs running in provider VPC accounts.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t6_s2",
      "label": "Gateway Endpoints (S3 & DynamoDB)",
      "description": "Prefix-list-based VPC route table targets for accessing S3 and DynamoDB without public IPs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t6_s2_d1",
      "label": "Route Table Target Configurations",
      "description": "Routing S3 traffic to Gateway Endpoints via route table entries.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t6_s2_d2",
      "label": "Zero Cost Gateway Endpoints",
      "description": "Utilizing free Gateway Endpoints instead of paid Interface Endpoints for heavy object storage access.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t6_s3",
      "label": "VPC Endpoint Policies & Access Restrictions",
      "description": "Attaching IAM resource policies to VPC Endpoints to restrict access to authorized resources.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t6_s3_d1",
      "label": "Principal & Action Restriction Rules",
      "description": "Restricting endpoint usage to specific AWS accounts, IAM roles, or S3 bucket IDs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t6_s3_d2",
      "label": "Exfiltration Prevention Safeguards",
      "description": "Blocking requests attempting to upload data to unauthorized external cloud buckets.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t6_s4",
      "label": "DNS Alias Overrides for Private Endpoints",
      "description": "Overriding public service DNS hostnames to resolve to private endpoint IPs automatically.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t6_s4_d1",
      "label": "Private DNS Enabled Flag Setup",
      "description": "Overriding s3.us-east-1.amazonaws.com to return local ENI private IPs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t6_s4_d2",
      "label": "Application Code Zero-Change Compatibility",
      "description": "Enabling existing application code to use private links without changing API URL hostnames.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t6_s5",
      "label": "Cross-Tenant Service Provider Publishing",
      "description": "Publishing internal microservices as PrivateLink services for external enterprise clients.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t6_s5_d1",
      "label": "Client Account Whitelisting Policies",
      "description": "Approving specific client AWS account IDs to connect to published service endpoints.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p2_t6_s5_d2",
      "label": "Overlapping IP Address Isolation",
      "description": "Connecting client VPCs with overlapping CIDR blocks safely using NAT translation.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3",
      "label": "Serverless Compute & MicroVM Architecture",
      "description": "Event-driven serverless platforms, container isolation engines, cold start mitigation, and concurrency management.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t1",
      "label": "AWS Lambda Firecracker MicroVM Architecture",
      "description": "Open-source minimalist virtual machine monitor written in Rust for serverless workloads.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t1_s1",
      "label": "KVM-Based MicroVM Isolation",
      "description": "Running user functions in isolated Linux microVMs executed on KVM hypervisors.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t1_s1_d1",
      "label": "< 5ms MicroVM Startup Time",
      "description": "Achieving sub-5-millisecond execution container creation speeds.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t1_s1_d2",
      "label": "< 5MB Memory Overhead Per Instance",
      "description": "Restricting hypervisor RAM overhead to 5MB per running microVM.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t1_s2",
      "label": "Stripped Device Model (Minimal Devices)",
      "description": "Omitting non-essential virtual hardware drivers (USB, PCI, sound) to reduce attack surfaces.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t1_s2_d1",
      "label": "virtio-net, virtio-block, vsock Only",
      "description": "Exposing minimal paravirtualized network, block storage, and control socket drivers.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t1_s2_d2",
      "label": "Zero Unused Driver Attack Vectors",
      "description": "Eliminating security vulnerabilities inherent in complex hypervisor hardware emulators.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t1_s3",
      "label": "Rust Memory Safety & Jailer Process",
      "description": "Enforcing security sandboxing around Firecracker processes using Linux cgroups and seccomp.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t1_s3_d1",
      "label": "Seccomp Syscall Filtering Filters",
      "description": "Restricting allowed Firecracker host kernel system calls to minimal whitelist sets.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t1_s3_d2",
      "label": "Chroot & User Namespace Isolation",
      "description": "Jailing Firecracker processes in unprivileged user namespaces and empty filesystem roots.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t1_s4",
      "label": "Firecracker Snapshot & Restore Engine",
      "description": "Saving microVM CPU registers and RAM state to disk for instant function warm-starts.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t1_s4_d1",
      "label": "Memory State Page File Mapping",
      "description": "Writing microVM RAM memory pages into static snapshot files.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t1_s4_d2",
      "label": "Sub-10ms Snapshot Resume Speeds",
      "description": "Resuming running microVM instances from snapshot state files in milliseconds.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t1_s5",
      "label": "Overcommit & Density Optimization",
      "description": "Packing thousands of isolated microVMs onto single bare-metal host servers.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t1_s5_d1",
      "label": "1000+ MicroVMs Per Physical Host",
      "description": "Achieving high tenant density on 128-core bare-metal servers.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t1_s5_d2",
      "label": "Fast MicroVM Reclamation Lifecycle",
      "description": "Terminating and freeing microVM resources immediately upon function execution completion.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t2",
      "label": "Cold Start Mechanics & Warm Pool Management",
      "description": "Analyzing causes of initial function execution latencies and strategies for warm instance retention.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t2_s1",
      "label": "Cold Start Sequence Lifecycle Stages",
      "description": "Understanding sequential steps executed during initial serverless function invocations.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t2_s1_d1",
      "label": "Download Code -> Create MicroVM -> Init Runtime -> Run Code",
      "description": "Measuring latency components contributing to cold start duration.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t2_s1_d2",
      "label": "Language Runtime Initialization Overhead",
      "description": "Comparing fast Node.js/Go init times (50-200ms) against heavy Java/Python runtime init times (1-3s).",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t2_s2",
      "label": "Provisioned Concurrency (AWS Lambda)",
      "description": "Pre-warming execution environments to guarantee zero cold start latencies.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t2_s2_d1",
      "label": "Pre-Initialized Runtime Environment Pools",
      "description": "Keeping configured counts of microVM environments initialized and ready.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t2_s2_d2",
      "label": "Sub-10ms Execution SLA Guarantees",
      "description": "Eliminating cold start delays for latency-sensitive financial and web APIs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t2_s3",
      "label": "AWS Lambda SnapStart for Java",
      "description": "Snapshotting pre-initialized Java VM states to reduce cold starts by up to 90%.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t2_s3_d1",
      "label": "CRaC (Coordinated Restore at Checkpoint)",
      "description": "Executing framework initialization before taking Firecracker VM memory snapshots.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t2_s3_d2",
      "label": "Unique Randomness & Secret Handling",
      "description": "Re-seeding CSPRNGs upon snapshot restore to prevent duplicate random key generation.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t2_s4",
      "label": "VPC ENI Attachment Optimization",
      "description": "Eliminating legacy 10-second VPC cold start delays using pre-created network interfaces.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t2_s4_d1",
      "label": "AWS Hyperplane ENI Connection Sharing",
      "description": "Sharing pre-provisioned VPC ENIs across multiple Lambda function instances.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t2_s4_d2",
      "label": "Sub-100ms VPC Cold Start Times",
      "description": "Reducing VPC function attachment latencies from 10 seconds down to sub-100ms.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t2_s5",
      "label": "Keep-Alive Ping Hacks & Warm Heuristics",
      "description": "Sending periodic dummy requests to keep serverless execution environments alive.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t2_s5_d1",
      "label": "5-Minute Scheduled Event Pings",
      "description": "Invoking functions every 5 minutes to prevent cloud providers from reaping idle containers.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t2_s5_d2",
      "label": "Limitations Under Concurrent Spikes",
      "description": "Recognizing that single ping requests warm only single container instances.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t3",
      "label": "Cloud Run & Container Serverless Engines",
      "description": "Executing arbitrary Docker containers on fully managed serverless infrastructure.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t3_s1",
      "label": "Knative Serving Architecture Foundation",
      "description": "Open-source Kubernetes framework powering Google Cloud Run serverless deployments.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t3_s1_d1",
      "label": "Autoscaler (KPA) Queue Depth Monitoring",
      "description": "Monitoring active HTTP request concurrency per container instance.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t3_s1_d2",
      "label": "Scale-to-Zero Pod Termination",
      "description": "Terminating container pods completely when no HTTP requests arrive within idle timeouts.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t3_s2",
      "label": "Multi-Concurrency Per Instance (1 to 1000)",
      "description": "Processing multiple concurrent HTTP requests within single container instances.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t3_s2_d1",
      "label": "concurrency Parameter Tuning",
      "description": "Configuring max allowed concurrent requests (e.g. 80 requests/instance).",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t3_s2_d2",
      "label": "Resource Utilization Efficiency",
      "description": "Reducing cold start frequencies by routing concurrent requests to active containers.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t3_s3",
      "label": "CPU Allocation Modes (Always-On vs Request-Throttled)",
      "description": "Selecting CPU allocation behaviors during request idle periods.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t3_s3_d1",
      "label": "CPU Throttled Outside Requests",
      "description": "Disabling CPU access when no HTTP requests are actively processing to reduce costs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t3_s3_d2",
      "label": "Always-Allocated CPU Mode",
      "description": "Maintaining dedicated CPU access for background tasks and async queue listeners.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t3_s4",
      "label": "Min Instances & Warm Container Buffers",
      "description": "Configuring minimum container counts to guarantee instant response readiness.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t3_s4_d1",
      "label": "min-instances Setup",
      "description": "Maintaining a baseline pool of warm container instances to handle baseline traffic.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t3_s4_d2",
      "label": "Billing Impact of Min Instances",
      "description": "Paying standard idle rates for minimum container counts continuously.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t3_s5",
      "label": "HTTP/2 & gRPC Streaming Serverless Support",
      "description": "Streaming bidirectional data over long-lived HTTP/2 and gRPC connections.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t3_s5_d1",
      "label": "60-Minute Maximum Request Timeout",
      "description": "Supporting long-running streaming tasks up to 60-minute execution bounds.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t3_s5_d2",
      "label": "Server-Sent Events (SSE) Push Delivery",
      "description": "Streaming real-time AI tokens or telemetry directly to connected web clients.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t4",
      "label": "Serverless Event Source Mapping & Triggers",
      "description": "Ingesting events automatically from queues, object stores, and database streams into functions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t4_s1",
      "label": "AWS Event Source Mapping (ESM) Architecture",
      "description": "Polling service infrastructure reading records from Kinesis, DynamoDB, or SQS queues.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t4_s1_d1",
      "label": "Batch Size & Batch Window Parameters",
      "description": "Gathering records up to batch_size (e.g. 100 records) or max_batch_window (e.g. 5 seconds).",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t4_s1_d2",
      "label": "Parallelization Factor Per Partition",
      "description": "Processing single Kinesis partitions with up to 10 concurrent Lambda invocations.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t4_s2",
      "label": "Bisect on Function Error Safeguards",
      "description": "Splitting failed event batches automatically to isolate corrupt records.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t4_s2_d1",
      "label": "Recursive Batch Binary Splitting",
      "description": "Splitting failing 100-record batches into two 50-record batches upon function error.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t4_s2_d2",
      "label": "Targeted Bad Record Isolation",
      "description": "Isolating single poison pill records and routing them to On-Failure Destinations.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t4_s3",
      "label": "EventBridge Event Bus & Pattern Filtering",
      "description": "Serverless event bus routing JSON events using declarative pattern matching.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t4_s3_d1",
      "label": "JSON Content-Based Filtering Rules",
      "description": "Filtering events by source, detail-type, or numeric attribute ranges before function triggering.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t4_s3_d2",
      "label": "Schema Registry Auto-Discovery",
      "description": "Inferring and tracking event JSON schemas automatically.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t4_s4",
      "label": "S3 Object Lambda Transformations",
      "description": "Executing custom Python/Node.js code inline during S3 GetObject API calls.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t4_s4_d1",
      "label": "On-The-Fly Data Redaction & Watermarking",
      "description": "Redacting PII fields or adding image watermarks dynamically as files are downloaded.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t4_s4_d2",
      "label": "Zero Duplicate File Storage Overhead",
      "description": "Eliminating pre-processed file copies by computing transformations dynamically on request.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t4_s5",
      "label": "Dead Letter Queues & On-Failure Destinations",
      "description": "Routing failed asynchronous function executions to SQS, SNS, or EventBridge.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t4_s5_d1",
      "label": "Asynchronous Invocation Retry Limits",
      "description": "Retrying async function invocations twice before executing destination routing.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t4_s5_d2",
      "label": "Execution Context Payload Attachment",
      "description": "Attaching stack traces, request IDs, and input event payloads to error records.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t5",
      "label": "Stateful Serverless Orchestration (Step Functions)",
      "description": "Orchestrating multi-step serverless workflows using visual state machines.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t5_s1",
      "label": "Amazon States Language (ASL) Declarative Specs",
      "description": "JSON-based state machine definitions describing workflow steps and error paths.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t5_s1_d1",
      "label": "Task, Choice, Parallel, and Map States",
      "description": "Defining conditional branching, parallel executions, and array iteration loops.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t5_s1_d2",
      "label": "Catch and Retry Exception Blocks",
      "description": "Configuring exponential backoffs and custom error handlers per workflow state.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t5_s2",
      "label": "Standard vs Express Step Functions",
      "description": "Selecting workflow types based on duration, throughput, and execution cost.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t5_s2_d1",
      "label": "Standard Workflows (Up to 1 Year Execution)",
      "description": "Managing long-running audit-able workflows with exact-once execution guarantees.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t5_s2_d2",
      "label": "Express Workflows (High-Throughput Streaming)",
      "description": "Executing up to 100,000 requests/sec for short-duration (<5 min) event processing.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t5_s3",
      "label": "Callback Pattern (.sync Task Tokens)",
      "description": "Pausing state machine execution until external human or system tasks complete.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t5_s3_d1",
      "label": "Task Token Generation (taskToken)",
      "description": "Emitting unique tokens and waiting for SendTaskSuccess / SendTaskFailure API calls.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t5_s3_d2",
      "label": "Multi-Day Approval Waiting States",
      "description": "Pausing workflows for days without consuming compute resources while waiting for callbacks.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t5_s4",
      "label": "Map State Parallel Item Processing",
      "description": "Iterating through large JSON arrays to execute child workflows in parallel.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t5_s4_d1",
      "label": "Distributed Map State Execution",
      "description": "Processing millions of items in parallel S3 data streams using sub-workflows.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t5_s4_d2",
      "label": "MaxConcurrency Concurrency Limits",
      "description": "Throttling parallel item iterations to prevent overwhelming downstream databases.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t5_s5",
      "label": "State Machine Execution History Audit Trails",
      "description": "Inspecting event execution logs for debugging and regulatory compliance.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t5_s5_d1",
      "label": "Step-by-Step Input/Output Data Auditing",
      "description": "Recording exact JSON input and output payloads for every state transition.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t5_s5_d2",
      "label": "Visual State Machine Execution Replay",
      "description": "Rendering color-coded visual graphs highlighting failed workflow steps.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t6",
      "label": "Serverless Compute & MicroVM Architecture Topic 6",
      "description": "Detailed first-principles mechanics for Serverless Compute & MicroVM Architecture topic 6.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t6_s1",
      "label": "Serverless Compute & MicroVM Architecture Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Serverless Compute & MicroVM Architecture Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t6_s1_d1",
      "label": "Serverless Compute & MicroVM Architecture Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Serverless Compute & MicroVM Architecture Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t6_s1_d2",
      "label": "Serverless Compute & MicroVM Architecture Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Serverless Compute & MicroVM Architecture Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t6_s2",
      "label": "Serverless Compute & MicroVM Architecture Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Serverless Compute & MicroVM Architecture Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t6_s2_d1",
      "label": "Serverless Compute & MicroVM Architecture Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Serverless Compute & MicroVM Architecture Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t6_s2_d2",
      "label": "Serverless Compute & MicroVM Architecture Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Serverless Compute & MicroVM Architecture Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t6_s3",
      "label": "Serverless Compute & MicroVM Architecture Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Serverless Compute & MicroVM Architecture Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t6_s3_d1",
      "label": "Serverless Compute & MicroVM Architecture Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Serverless Compute & MicroVM Architecture Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t6_s3_d2",
      "label": "Serverless Compute & MicroVM Architecture Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Serverless Compute & MicroVM Architecture Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t6_s4",
      "label": "Serverless Compute & MicroVM Architecture Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Serverless Compute & MicroVM Architecture Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t6_s4_d1",
      "label": "Serverless Compute & MicroVM Architecture Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Serverless Compute & MicroVM Architecture Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t6_s4_d2",
      "label": "Serverless Compute & MicroVM Architecture Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Serverless Compute & MicroVM Architecture Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t6_s5",
      "label": "Serverless Compute & MicroVM Architecture Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Serverless Compute & MicroVM Architecture Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t6_s5_d1",
      "label": "Serverless Compute & MicroVM Architecture Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Serverless Compute & MicroVM Architecture Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p3_t6_s5_d2",
      "label": "Serverless Compute & MicroVM Architecture Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Serverless Compute & MicroVM Architecture Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4",
      "label": "Identity & Access Management (IAM) & Security",
      "description": "Fine-grained authorization, policy evaluation engines, federated identity, and zero-trust security architectures.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t1",
      "label": "AWS IAM Policy Evaluation Engine",
      "description": "Deterministic evaluation logic processing JSON policies to grant or deny API requests.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t1_s1",
      "label": "Default Deny & Explicit Deny Precedence",
      "description": "Enforcing strict policy evaluation hierarchy: Explicit Deny > Explicit Allow > Default Deny.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t1_s1_d1",
      "label": "Explicit Deny Override Rule",
      "description": "Overriding all Allow statements instantly if any applicable policy contains an Explicit Deny.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t1_s1_d2",
      "label": "Implicit Default Deny Baseline",
      "description": "Denying all API requests by default unless an explicit Allow statement is matched.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t1_s2",
      "label": "Policy Categories & Intersection Logic",
      "description": "Evaluating Identity-based, Resource-based, SCPs, Permission Boundaries, and Session policies.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t1_s2_d1",
      "label": "Service Control Policies (SCP) Organizational Bounds",
      "description": "Setting maximum allowed permission boundaries across AWS Organization accounts.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t1_s2_d2",
      "label": "Permissions Boundary Intersection Limits",
      "description": "Restricting effective IAM role permissions to the intersection of role policies and boundaries.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t1_s3",
      "label": "Policy Condition Keys & Operators",
      "description": "Enforcing fine-grained context checks during policy evaluation passes.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t1_s3_d1",
      "label": "aws:PrincipalArn & aws:SourceIp Checks",
      "description": "Restricting API access to specific user identities or source IP address ranges.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t1_s3_d2",
      "label": "StringEquals, NumericLessThan, DateGreaterThan",
      "description": "Evaluating boolean condition operators against request context keys.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t1_s4",
      "label": "AWS STS AssumeRole & Temporary Credentials",
      "description": "Issuing short-lived access keys via Security Token Service (STS).",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t1_s4_d1",
      "label": "AccessKeyId, SecretAccessKey, SessionToken Triplet",
      "description": "Generating temporary 15-minute to 12-hour credential triplets.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t1_s4_d2",
      "label": "ExternalId Anti-Confused-Deputy Defense",
      "description": "Requiring secret ExternalId strings when third-party vendors assume IAM roles.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t1_s5",
      "label": "Resource-Based Policy Cross-Account Access",
      "description": "Granting access to AWS resources (S3, KMS, SQS) across account boundaries.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t1_s5_d1",
      "label": "Principal Account ID Whitelisting",
      "description": "Specifying external AWS account ARNs in resource policy Principal elements.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t1_s5_d2",
      "label": "Confused Deputy Attack Prevention",
      "description": "Combining resource policies with condition keys to prevent unauthorized multi-tenant access.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t2",
      "label": "OAuth 2.0 & OpenID Connect (OIDC) Federation",
      "description": "Standardized protocols for user authentication and delegated API authorization.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t2_s1",
      "label": "Authorization Code Flow with PKCE",
      "description": "Secure authentication flow for mobile and single-page apps preventing code interception.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t2_s1_d1",
      "label": "Code Verifier & Code Challenge (SHA-256)",
      "description": "Generating random code verifier and sending SHA-256 hash challenge in auth request.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t2_s1_d2",
      "label": "Authorization Code Exchange Step",
      "description": "Exchanging auth code plus plaintext code verifier for tokens at authorization servers.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t2_s2",
      "label": "JWT (JSON Web Token) Anatomy & Verification",
      "description": "Self-contained cryptographically signed tokens carrying claims between parties.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t2_s2_d1",
      "label": "Header.Payload.Signature Triple Structure",
      "description": "Encoding base64url JSON header, payload claims, and cryptographic signature.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t2_s2_d2",
      "label": "JWKS (JSON Web Key Set) Public Key Verification",
      "description": "Fetching public keys from /.well-known/jwks.json to verify RS256/ES256 signatures.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t2_s3",
      "label": "OIDC Identity Tokens vs OAuth Access Tokens",
      "description": "Distinguishing identity assertions (ID Token) from API access authorizations (Access Token).",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t2_s3_d1",
      "label": "ID Token Payload Claims (sub, iss, aud, exp)",
      "description": "Asserting user identity attributes for consumption by client applications.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t2_s3_d2",
      "label": "Access Token Opaque / JWT API Scopes",
      "description": "Carrying authorization scopes (e.g. read:orders) for consumption by resource APIs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t2_s4",
      "label": "Workload Identity Federation (GitHub / K8s to Cloud)",
      "description": "Exchanging external OIDC tokens for cloud IAM credentials without static secrets.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t2_s4_d1",
      "label": "GitHub Actions OIDC ID Token Issuance",
      "description": "Issuing short-lived OIDC tokens containing repository and git ref claims.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t2_s4_d2",
      "label": "AWS / GCP Workload Identity Provider Trust",
      "description": "Exchanging GitHub OIDC tokens for short-lived cloud IAM roles automatically.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t2_s5",
      "label": "Token Revocation & Introspection Protocols",
      "description": "Validating and revoking active OAuth access and refresh tokens.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t2_s5_d1",
      "label": "OAuth 2.0 Token Introspection (RFC 7662)",
      "description": "Querying authorization servers to check active status of opaque access tokens.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t2_s5_d2",
      "label": "Token Revocation Endpoint (RFC 7009)",
      "description": "Invalidating refresh tokens immediately upon user logout or security alerts.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t3",
      "label": "Zero Trust Architecture & BeyondCorp",
      "description": "Security model eliminating implicit trust based on network location, verifying every request.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t3_s1",
      "label": "Never Trust, Always Verify Core Rule",
      "description": "Requiring explicit authentication, authorization, and encryption for all network requests.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t3_s1_d1",
      "label": "Elimination of Internal Network Perimeter Trust",
      "description": "Treating corporate internal networks as untrusted public networks.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t3_s1_d2",
      "label": "Continuous Per-Request Policy Evaluation",
      "description": "Re-evaluating identity, device health, and context on every HTTP API request.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t3_s2",
      "label": "Device Posture & Health Attestation",
      "description": "Checking endpoint device security status before granting application access.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t3_s2_d1",
      "label": "OS Patch Level & Disk Encryption Verification",
      "description": "Verifying device compliance via Endpoint Detection and Response (EDR) agents.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t3_s2_d2",
      "label": "Hardware Device Certificates (TPM / Secure Enclave)",
      "description": "Authenticating connecting laptops using client X.509 certificates stored in hardware TPMs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t3_s3",
      "label": "Identity-Aware Proxy (IAP) Architecture",
      "description": "Positioning reverse proxies in front of applications to enforce authentication.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t3_s3_d1",
      "label": "Google BeyondCorp Access Context Manager",
      "description": "Interception of all HTTP web traffic by central identity-aware proxies.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t3_s3_d2",
      "label": "Zero VPN Access Pattern",
      "description": "Providing secure employee access to internal tools without corporate VPNs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t3_s4",
      "label": "Micro-segmentation & mTLS Data Plane",
      "description": "Encrypting and authenticating all service-to-service communications inside data centers.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t3_s4_d1",
      "label": "SPIFFE / SPIRE Workload Identity Issuance",
      "description": "Issuing short-lived X.509 SVID certificates to running container pods.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t3_s4_d2",
      "label": "Mutual TLS (mTLS) Encryption Mandate",
      "description": "Enforcing bidirectional certificate verification for all internal microservice calls.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t3_s5",
      "label": "Just-in-Time (JIT) & Least Privilege Access",
      "description": "Granting temporary elevated administrative access strictly on-demand.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t3_s5_d1",
      "label": "Temporary Access Escalation Approvals",
      "description": "Granting 1-hour admin access upon manager ticket approval.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t3_s5_d2",
      "label": "Automated Session Expiration Sweeps",
      "description": "Revoking elevated permissions automatically when access windows expire.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t4",
      "label": "Secrets Management & Key Vault Infrastructure",
      "description": "Centralized storage, rotation, and auditing of API keys, passwords, and database credentials.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t4_s1",
      "label": "HashiCorp Vault Key-Value (KV v2) Engine",
      "description": "Versioning secrets engine providing encrypted key-value storage with rollback.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t4_s1_d1",
      "label": "Shamir Secret Sharing Master Key Unsealing",
      "description": "Requiring 3 of 5 unseal key holders to unseal Vault master keys on boot.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t4_s1_d2",
      "label": "Soft-Delete and Version History Retention",
      "description": "Maintaining historical versions of secrets for rollback capabilities.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t4_s2",
      "label": "Dynamic Secrets Generation (Database & AWS)",
      "description": "Generating short-lived database and cloud credentials on-the-fly for clients.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t4_s2_d1",
      "label": "On-Demand SQL User Creation",
      "description": "Creating temporary database users (e.g. v-app-123) with 1-hour TTL lifetimes.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t4_s2_d2",
      "label": "Zero Static Password Exposure",
      "description": "Eliminating hardcoded long-lived database passwords in application configs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t4_s3",
      "label": "Vault Transit Secrets Engine (Encryption-as-a-Service)",
      "description": "Encrypting and decrypting application data without exposing private keys.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t4_s3_d1",
      "label": "Datakey Generation & Convergent Encryption",
      "description": "Encrypting sensitive fields via Vault APIs using HSM-backed master keys.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t4_s3_d2",
      "label": "Centralized Cryptographic Key Rotation",
      "description": "Rotating master transit keys without re-writing encrypted database records.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t4_s4",
      "label": "AWS Secrets Manager Automated Rotation",
      "description": "Automating database password rotation using Lambda rotation functions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t4_s4_d1",
      "label": "4-Step Rotation Workflow (create, set, test, finish)",
      "description": "Executing 4-stage Lambda rotation logic to update passwords in DB and Vault simultaneously.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t4_s4_d2",
      "label": "Dual-User Rotation Strategy",
      "description": "Alternating between user_A and user_B to avoid interrupting active connections.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t4_s5",
      "label": "Kubernetes External Secrets Operator (ESO)",
      "description": "Synchronizing external secrets stores (Vault, AWS Secrets Manager) into Kubernetes Secret objects.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t4_s5_d1",
      "label": "SecretStore & ExternalSecret CRD Specs",
      "description": "Defining declarative custom resources to pull target secret keys into subnets.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t4_s5_d2",
      "label": "Automated Secret Synchronization Loops",
      "description": "Polling external stores every 10 minutes to update cluster secret objects automatically.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t5",
      "label": "Identity & Access Management (IAM) & Security Topic 5",
      "description": "Detailed first-principles mechanics for Identity & Access Management (IAM) & Security topic 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t5_s1",
      "label": "Identity & Access Management (IAM) & Security Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Identity & Access Management (IAM) & Security Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t5_s1_d1",
      "label": "Identity & Access Management (IAM) & Security Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Identity & Access Management (IAM) & Security Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t5_s1_d2",
      "label": "Identity & Access Management (IAM) & Security Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Identity & Access Management (IAM) & Security Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t5_s2",
      "label": "Identity & Access Management (IAM) & Security Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Identity & Access Management (IAM) & Security Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t5_s2_d1",
      "label": "Identity & Access Management (IAM) & Security Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Identity & Access Management (IAM) & Security Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t5_s2_d2",
      "label": "Identity & Access Management (IAM) & Security Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Identity & Access Management (IAM) & Security Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t5_s3",
      "label": "Identity & Access Management (IAM) & Security Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Identity & Access Management (IAM) & Security Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t5_s3_d1",
      "label": "Identity & Access Management (IAM) & Security Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Identity & Access Management (IAM) & Security Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t5_s3_d2",
      "label": "Identity & Access Management (IAM) & Security Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Identity & Access Management (IAM) & Security Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t5_s4",
      "label": "Identity & Access Management (IAM) & Security Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Identity & Access Management (IAM) & Security Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t5_s4_d1",
      "label": "Identity & Access Management (IAM) & Security Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Identity & Access Management (IAM) & Security Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t5_s4_d2",
      "label": "Identity & Access Management (IAM) & Security Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Identity & Access Management (IAM) & Security Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t5_s5",
      "label": "Identity & Access Management (IAM) & Security Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Identity & Access Management (IAM) & Security Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t5_s5_d1",
      "label": "Identity & Access Management (IAM) & Security Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Identity & Access Management (IAM) & Security Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t5_s5_d2",
      "label": "Identity & Access Management (IAM) & Security Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Identity & Access Management (IAM) & Security Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t6",
      "label": "Identity & Access Management (IAM) & Security Topic 6",
      "description": "Detailed first-principles mechanics for Identity & Access Management (IAM) & Security topic 6.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t6_s1",
      "label": "Identity & Access Management (IAM) & Security Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Identity & Access Management (IAM) & Security Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t6_s1_d1",
      "label": "Identity & Access Management (IAM) & Security Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Identity & Access Management (IAM) & Security Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t6_s1_d2",
      "label": "Identity & Access Management (IAM) & Security Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Identity & Access Management (IAM) & Security Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t6_s2",
      "label": "Identity & Access Management (IAM) & Security Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Identity & Access Management (IAM) & Security Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t6_s2_d1",
      "label": "Identity & Access Management (IAM) & Security Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Identity & Access Management (IAM) & Security Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t6_s2_d2",
      "label": "Identity & Access Management (IAM) & Security Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Identity & Access Management (IAM) & Security Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t6_s3",
      "label": "Identity & Access Management (IAM) & Security Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Identity & Access Management (IAM) & Security Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t6_s3_d1",
      "label": "Identity & Access Management (IAM) & Security Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Identity & Access Management (IAM) & Security Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t6_s3_d2",
      "label": "Identity & Access Management (IAM) & Security Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Identity & Access Management (IAM) & Security Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t6_s4",
      "label": "Identity & Access Management (IAM) & Security Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Identity & Access Management (IAM) & Security Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t6_s4_d1",
      "label": "Identity & Access Management (IAM) & Security Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Identity & Access Management (IAM) & Security Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t6_s4_d2",
      "label": "Identity & Access Management (IAM) & Security Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Identity & Access Management (IAM) & Security Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t6_s5",
      "label": "Identity & Access Management (IAM) & Security Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Identity & Access Management (IAM) & Security Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t6_s5_d1",
      "label": "Identity & Access Management (IAM) & Security Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Identity & Access Management (IAM) & Security Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p4_t6_s5_d2",
      "label": "Identity & Access Management (IAM) & Security Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Identity & Access Management (IAM) & Security Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5",
      "label": "Cloud Storage & File Systems",
      "description": "Object stores, block storage IOPS limits, distributed network file systems, and archival storage engines.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t1",
      "label": "AWS S3 Object Storage Internals",
      "description": "Massively scalable key-value object store designed for 99.999999999% (11 9s) durability.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t1_s1",
      "label": "Erasure Coding & Multi-AZ Data Distribution",
      "description": "Splitting object payload data across multiple Availability Zones to withstand hardware loss.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t1_s1_d1",
      "label": "Reed-Solomon (8+4) Erasure Coding",
      "description": "Dividing data into 8 data blocks and 4 parity blocks to tolerate 4 concurrent disk failures.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t1_s1_d2",
      "label": "Multi-AZ Concurrent Writes",
      "description": "Streaming object blocks to 3 distinct physical data centers before returning success.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t1_s2",
      "label": "S3 Strong Read-After-Write Consistency",
      "description": "Guaranteeing immediate consistency for PUT and DELETE operations across all keys.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t1_s2_d1",
      "label": "Atomic Index Metadata Updates",
      "description": "Updating global index directories atomically prior to acknowledging writes.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t1_s2_d2",
      "label": "Elimination of Eventual Consistency Stalls",
      "description": "Eliminating historical list and read inconsistencies following object updates.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t1_s3",
      "label": "Multipart Upload Protocol (5MB to 5TB Objects)",
      "description": "Uploading large objects in parallel parts to maximize throughput and reliability.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t1_s3_d1",
      "label": "Initiate, UploadPart, CompleteMultipartUpload",
      "description": "Uploading 5MB-5GB object chunks in parallel threads.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t1_s3_d2",
      "label": "Aborted Upload Lifecycle Purge Rules",
      "description": "Setting bucket lifecycle rules to abort incomplete multipart uploads after 7 days.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t1_s4",
      "label": "S3 Express One Zone (Directory Buckets)",
      "description": "Ultra-low-latency single-AZ storage class delivering single-digit millisecond data access.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t1_s4_d1",
      "label": "10x Faster Data Access Speeds",
      "description": "Achieving sub-10ms GET and PUT latencies for AI training and analytics workloads.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t1_s4_d2",
      "label": "Directory Bucket Key Partitioning",
      "description": "Structuring keys in directory hierarchies optimized for high QPS operations.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t1_s5",
      "label": "S3 Byte-Range Fetching Optimization",
      "description": "Fetching specific byte ranges from large objects to accelerate analytical queries.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t1_s5_d1",
      "label": "Range: bytes=start-end HTTP Headers",
      "description": "Downloading specific Parquet footer metadata blocks without fetching entire files.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t1_s5_d2",
      "label": "Parallel Multi-Range Download Threads",
      "description": "Splitting large object downloads across parallel threads reading distinct byte ranges.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t2",
      "label": "AWS EBS & Cloud Block Storage Architecture",
      "description": "Network-attached persistent block storage volumes providing low-latency storage for databases.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t2_s1",
      "label": "EBS gp3 vs io2 Block Performance Bounds",
      "description": "Configuring baseline and provisioned IOPS and throughput parameters.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t2_s1_d1",
      "label": "gp3 Provisioned IOPS & Throughput Decoupling",
      "description": "Configuring up to 16,000 IOPS and 1,000 MB/s independently of volume size.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t2_s1_d2",
      "label": "io2 Block Express (64,000 IOPS / 4,000 MB/s)",
      "description": "Achieving sub-millisecond latencies backed by SAN-like NVMe hardware.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t2_s2",
      "label": "EBS Burst Bucket & Token Credit Mechanics",
      "description": "Accumulating and consuming IOPS burst credits on smaller gp2/gp3 volumes.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t2_s2_d1",
      "label": "Baseline 3 IOPS / GB Credit Refill",
      "description": "Refilling burst buckets at 3 IOPS per GB up to 3,000 IOPS caps.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t2_s2_d2",
      "label": "Burst Balance Depletion Performance Drop",
      "description": "Throttling volume throughput down to baseline speeds when burst credits empty.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t2_s3",
      "label": "EBS Snapshot Copy-on-Write Infrastructure",
      "description": "Point-in-time incremental volume snapshots stored in AWS S3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t2_s3_d1",
      "label": "Block-Level Incremental Delta Snapshots",
      "description": "Copying only modified 4KB block sectors since the previous snapshot.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t2_s3_d2",
      "label": "Fast Snapshot Restore (FSR) Pre-Warming",
      "description": "Pre-warming volume blocks to eliminate initial read latency penalties on restored volumes.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t2_s4",
      "label": "EBS Volume Multi-Attach (io1 / io2)",
      "description": "Attaching single block volumes to multiple EC2 instances simultaneously.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t2_s4_d1",
      "label": "NVMe Reservation Commands",
      "description": "Coordinating cluster file system access (e.g. GFS2, OCFS2) using NVMe reservations.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t2_s4_d2",
      "label": "Shared Block Storage for Clustered DBs",
      "description": "Supporting active-active clustered database engines on cloud infrastructure.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t2_s5",
      "label": "Instance Store NVMe (Ephemeral Local Storage)",
      "description": "Physically attached PCIe NVMe SSDs delivering maximum IOPS and lowest latencies.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t2_s5_d1",
      "label": "Millions of IOPS at Sub-100-Microsecond Latencies",
      "description": "Achieving direct hardware performance bypassing network block storage.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t2_s5_d2",
      "label": "Data Loss Risks on Instance Stop/Terminate",
      "description": "Losing all instance store data when EC2 instances stop or physically fail.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t3",
      "label": "Cloud File Systems (EFS, FSx & Azure Files)",
      "description": "Managed network file systems accessible concurrently across thousands of compute nodes.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t3_s1",
      "label": "AWS EFS NFSv4 Network Protocol Implementation",
      "description": "POSIX-compliant shared file system accessible concurrently over NFSv4 protocols.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t3_s1_d1",
      "label": "NFSv4 State Lock Management",
      "description": "Managing file locking and lease states across concurrent client instances.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t3_s1_d2",
      "label": "Mount Target VPC IP Endpoints",
      "description": "Creating Network Interfaces in subnets to route NFS traffic internally.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t3_s2",
      "label": "Bursting vs Provisioned Throughput Modes",
      "description": "Configuring file system throughput scaling based on total stored capacity.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t3_s2_d1",
      "label": "Bursting Throughput (50 KiB/s per GiB stored)",
      "description": "Scaling allowed throughput proportionally with stored data volume.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t3_s2_d2",
      "label": "Provisioned Mode Fixed MB/s Allocation",
      "description": "Allocating fixed high throughput (e.g. 500 MB/s) regardless of stored data volume.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t3_s3",
      "label": "Lustre High-Performance Storage (FSx for Lustre)",
      "description": "POSIX parallel file system designed for HPC and AI distributed training clusters.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t3_s3_d1",
      "label": "Hundreds of GB/s Throughput Capability",
      "description": "Streaming data to thousands of compute cores concurrently.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t3_s3_d2",
      "label": "Direct S3 Sync Integration",
      "description": "Presenting S3 buckets as local POSIX file paths automatically.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t3_s4",
      "label": "Azure NetApp Files (ANF) Architecture",
      "description": "Enterprise bare-metal NetApp storage arrays integrated into Azure data centers.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t3_s4_d1",
      "label": "Sub-Millisecond File Latencies",
      "description": "Delivering enterprise ONTAP storage performance for SAP HANA and Oracle DBs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t3_s4_d2",
      "label": "Service Level Performance Tiers (Standard, Premium, Ultra)",
      "description": "Scaling MB/s throughput per allocated TB storage tier.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t3_s5",
      "label": "Distributed File Locking & Metadata Operations",
      "description": "Handling metadata bottlenecks caused by heavy small-file directory operations.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t3_s5_d1",
      "label": "Metadata Operation Latency Constraints",
      "description": "Managing latency overheads during heavy ls -la or find operations.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t3_s5_d2",
      "label": "Local Client Caching Controls",
      "description": "Tuning lookup cache timeouts (actimeo) to balance metadata freshness against latency.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t4",
      "label": "Archival & Cold Storage Tiering Engines",
      "description": "Low-cost deep archive storage classes for long-term compliance retention.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t4_s1",
      "label": "S3 Glacier Deep Archive ($0.00099 / GB / Month)",
      "description": "Ultra-low-cost storage class designed for 7-10 year compliance archiving.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t4_s1_d1",
      "label": "Physical Tape & Dense Optical Disk Backends",
      "description": "Storing data on offline tape libraries to minimize power and cooling costs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t4_s1_d2",
      "label": "12-Hour Retrieval SLA Options",
      "description": "Selecting Bulk retrieval options delivering archived objects within 12 hours.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t4_s2",
      "label": "Automated Lifecycle Transition Policies",
      "description": "Configuring rule engines to transition objects across storage classes automatically.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t4_s2_d1",
      "label": "Standard -> IA (30 days) -> Glacier (90 days) Rules",
      "description": "Migrating inactive objects down storage tiers over time based on age.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t4_s2_d2",
      "label": "Minimum Object Size & Duration Constraints",
      "description": "Accounting for 128KB minimum billable sizes and 30-day minimum retention rules.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t4_s3",
      "label": "S3 Intelligent-Tiering Auto-Optimization",
      "description": "Monitoring access patterns and moving objects between access tiers automatically.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t4_s3_d1",
      "label": "Frequent, Infrequent, and Archive Access Tiers",
      "description": "Moving un-accessed objects down tiers without operational overhead or retrieval fees.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t4_s3_d2",
      "label": "Zero Retrieval Fee Advantage",
      "description": "Eliminating penalty fees when cold objects are suddenly accessed by analytical jobs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t4_s4",
      "label": "Retrieval SLA Speed Tiers (Expedited vs Standard vs Bulk)",
      "description": "Selecting object retrieval speed options when accessing archived Glacier data.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t4_s4_d1",
      "label": "Expedited Retrieval (1-5 Minutes)",
      "description": "Retrieving critical archived objects in minutes during urgent data recovery events.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t4_s4_d2",
      "label": "Standard Retrieval (3-5 Hours)",
      "description": "Standard data restoration window for routine batch analysis.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t4_s5",
      "label": "Immutable Object Lock & WORM Compliance",
      "description": "Enforcing Write-Once-Read-Many (WORM) policies to comply with SEC Rule 17a-4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t4_s5_d1",
      "label": "Compliance vs Governance Retention Modes",
      "description": "Preventing object deletion by any user including root accounts during compliance retention windows.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t4_s5_d2",
      "label": "Legal Hold Flags",
      "description": "Placing indefinite legal hold flags on objects to prevent deletion during active litigation.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t5",
      "label": "Cloud Storage & File Systems Topic 5",
      "description": "Detailed first-principles mechanics for Cloud Storage & File Systems topic 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t5_s1",
      "label": "Cloud Storage & File Systems Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Cloud Storage & File Systems Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t5_s1_d1",
      "label": "Cloud Storage & File Systems Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud Storage & File Systems Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t5_s1_d2",
      "label": "Cloud Storage & File Systems Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud Storage & File Systems Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t5_s2",
      "label": "Cloud Storage & File Systems Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Cloud Storage & File Systems Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t5_s2_d1",
      "label": "Cloud Storage & File Systems Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud Storage & File Systems Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t5_s2_d2",
      "label": "Cloud Storage & File Systems Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud Storage & File Systems Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t5_s3",
      "label": "Cloud Storage & File Systems Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Cloud Storage & File Systems Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t5_s3_d1",
      "label": "Cloud Storage & File Systems Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud Storage & File Systems Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t5_s3_d2",
      "label": "Cloud Storage & File Systems Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud Storage & File Systems Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t5_s4",
      "label": "Cloud Storage & File Systems Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Cloud Storage & File Systems Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t5_s4_d1",
      "label": "Cloud Storage & File Systems Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud Storage & File Systems Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t5_s4_d2",
      "label": "Cloud Storage & File Systems Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud Storage & File Systems Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t5_s5",
      "label": "Cloud Storage & File Systems Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Cloud Storage & File Systems Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t5_s5_d1",
      "label": "Cloud Storage & File Systems Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud Storage & File Systems Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t5_s5_d2",
      "label": "Cloud Storage & File Systems Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud Storage & File Systems Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t6",
      "label": "Cloud Storage & File Systems Topic 6",
      "description": "Detailed first-principles mechanics for Cloud Storage & File Systems topic 6.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t6_s1",
      "label": "Cloud Storage & File Systems Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Cloud Storage & File Systems Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t6_s1_d1",
      "label": "Cloud Storage & File Systems Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud Storage & File Systems Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t6_s1_d2",
      "label": "Cloud Storage & File Systems Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud Storage & File Systems Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t6_s2",
      "label": "Cloud Storage & File Systems Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Cloud Storage & File Systems Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t6_s2_d1",
      "label": "Cloud Storage & File Systems Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud Storage & File Systems Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t6_s2_d2",
      "label": "Cloud Storage & File Systems Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud Storage & File Systems Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t6_s3",
      "label": "Cloud Storage & File Systems Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Cloud Storage & File Systems Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t6_s3_d1",
      "label": "Cloud Storage & File Systems Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud Storage & File Systems Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t6_s3_d2",
      "label": "Cloud Storage & File Systems Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud Storage & File Systems Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t6_s4",
      "label": "Cloud Storage & File Systems Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Cloud Storage & File Systems Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t6_s4_d1",
      "label": "Cloud Storage & File Systems Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud Storage & File Systems Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t6_s4_d2",
      "label": "Cloud Storage & File Systems Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud Storage & File Systems Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t6_s5",
      "label": "Cloud Storage & File Systems Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Cloud Storage & File Systems Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t6_s5_d1",
      "label": "Cloud Storage & File Systems Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud Storage & File Systems Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p5_t6_s5_d2",
      "label": "Cloud Storage & File Systems Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud Storage & File Systems Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6",
      "label": "Disaster Recovery & Multi-Region Resilience",
      "description": "RTO/RPO metrics, failover patterns, global database replication, and cross-region high availability.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t1",
      "label": "Recovery Metrics (RTO & RPO Bounds)",
      "description": "Foundational business metrics defining maximum acceptable downtime and data loss.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t1_s1",
      "label": "Recovery Time Objective (RTO)",
      "description": "Target time duration required to restore business operations after an outage.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t1_s1_d1",
      "label": "RTO Time Measurement Window",
      "description": "Measuring time elapsed from initial outage detection to fully restored operational service.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t1_s1_d2",
      "label": "Financial Cost of Downtime Math",
      "description": "Evaluating business financial losses incurred per hour of RTO downtime.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t1_s2",
      "label": "Recovery Point Objective (RPO)",
      "description": "Maximum acceptable data loss measured in time units of un-replicated transactions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t1_s2_d1",
      "label": "Zero RPO Synchronous Mandate",
      "description": "Requiring zero data loss via synchronous cross-AZ database replication.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t1_s2_d2",
      "label": "Asynchronous Replication Data Loss Gap",
      "description": "Measuring un-replicated transaction gaps created by asynchronous cross-region links.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t1_s3",
      "label": "Disaster Recovery Strategy Matrix",
      "description": "Selecting DR topologies: Backup/Restore, Pilot Light, Warm Standby, Active-Active.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t1_s3_d1",
      "label": "Backup & Restore (RTO: Hours, RPO: Hours)",
      "description": "Rebuilding infrastructure from backups stored in object storage.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t1_s3_d2",
      "label": "Active-Active Multi-Region (RTO: Near-Zero, RPO: Near-Zero)",
      "description": "Serving traffic simultaneously from multiple regions with live data replication.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t1_s4",
      "label": "Pilot Light vs Warm Standby Architectures",
      "description": "Balancing infrastructure standby costs against recovery speeds.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t1_s4_d1",
      "label": "Pilot Light Topology (Minimal Core Databases)",
      "description": "Maintaining live database replicas while leaving app server pools powered off until failover.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t1_s4_d2",
      "label": "Warm Standby Topology (Scaled-Down Fleet)",
      "description": "Running small scaled-down application server fleets ready to autoscale instantly.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t1_s5",
      "label": "Disaster Recovery Testing & Chaos Drills",
      "description": "Validating DR automation through scheduled failover testing.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t1_s5_d1",
      "label": "Region Failover Simulation Drills",
      "description": "Redirecting production traffic away from primary regions during business hours.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t1_s5_d2",
      "label": "Automated Route53 DNS Failover Re-pointing",
      "description": "Testing automated health check DNS updates to route traffic to backup regions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t2",
      "label": "AWS Route53 Global DNS Failover Engine",
      "description": "Global DNS routing service delivering latency-based, health-checked traffic distribution.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t2_s1",
      "label": "Route53 Health Check Probes",
      "description": "Monitoring endpoint health from global probe locations every 10 or 30 seconds.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t2_s1_d1",
      "label": "HTTP/HTTPS/TCP Health Probing",
      "description": "Probing endpoint IP paths and requiring 200 OK responses within 2-second limits.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t2_s1_d2",
      "label": "Failure Threshold Consecutiveness (e.g. 3 failures)",
      "description": "Marking endpoints unhealthy after 3 consecutive failed probe checks.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t2_s2",
      "label": "Latency-Based & Geolocation Routing Rules",
      "description": "Routing client requests to cloud regions offering lowest latency or matching geographic rules.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t2_s2_d1",
      "label": "Global Network Latency Measurement Tables",
      "description": "Directing users to regional resources based on historical round-trip latency data.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t2_s2_d2",
      "label": "GeoDNS Country & Continent Matching",
      "description": "Restricting user traffic to regional data centers for regulatory compliance.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t2_s3",
      "label": "Route53 Application Recovery Controller (ARC)",
      "description": "Managing high-reliability failover controls across multiple availability zones and regions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t2_s3_d1",
      "label": "Routing Control On/Off Toggles",
      "description": "Using simple atomic routing control switches to redirect traffic during regional outages.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t2_s3_d2",
      "label": "Safety Rules & Quorum Assertions",
      "description": "Enforcing safety rules (e.g. prevent turning off both regions simultaneously) to avoid self-inflicted outages.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t2_s4",
      "label": "DNS TTL (Time-to-Live) Fast-Failover Tuning",
      "description": "Setting short DNS record TTLs to ensure fast client failover propagation.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t2_s4_d1",
      "label": "60-Second Short TTL Setup",
      "description": "Configuring 60-second TTLs on failover records to limit stale DNS caching by ISPs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t2_s4_d2",
      "label": "Client-Side DNS Caching Overrides",
      "description": "Handling non-compliant client applications that ignore short DNS TTL expiration signals.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t2_s5",
      "label": "Failover Alias Record Chains",
      "description": "Chaining primary and secondary alias records to route around regional infrastructure outages.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t2_s5_d1",
      "label": "Primary / Secondary Failover Records",
      "description": "Configuring automatic DNS failover to secondary endpoints when primary health checks fail.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t2_s5_d2",
      "label": "Evaluate Target Health Settings",
      "description": "Evaluating nested load balancer target health recursively within DNS alias trees.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t3",
      "label": "Multi-Region Active-Active Database Replication",
      "description": "Synchronizing database state continuously across geographically separated cloud regions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t3_s1",
      "label": "DynamoDB Global Tables Replication",
      "description": "Multi-master active-active replication across selected AWS regions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t3_s1_d1",
      "label": "Asynchronous Multi-Master Change Streaming",
      "description": "Replicating item mutations across regional tables within single-digit seconds.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t3_s1_d2",
      "label": "Last-Write-Wins (LWW) Conflict Resolution",
      "description": "Resolving concurrent write collisions using physical timestamp ordering.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t3_s2",
      "label": "AWS Aurora Global Database Architecture",
      "description": "Dedicated storage-level replication streaming redo logs across regions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t3_s2_d1",
      "label": "Storage Layer Physical Redo Log Streaming",
      "description": "Bypassing database engine layers to stream redo logs directly from storage nodes.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t3_s2_d2",
      "label": "Sub-Second Global Replication Lag",
      "description": "Achieving sub-second replication lag across continents with minimal compute impact.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t3_s3",
      "label": "CockroachDB Multi-Region Survival Goals",
      "description": "Configuring distributed SQL databases to survive full region outages.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t3_s3_d1",
      "label": "REGIONS and SURVIVAL GOAL Syntax",
      "description": "Configuring ALTER DATABASE db SURVIVAL GOAL = REGION FAILURE.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t3_s3_d2",
      "label": "Raft Leader Quorum Placements",
      "description": "Distributing Raft replicas across 3+ regions to maintain write consensus during region loss.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t3_s4",
      "label": "Cross-Region Write Conflict Avoidance",
      "description": "Designing application data models to isolate writes by user geographic location.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t3_s4_d1",
      "label": "User-to-Region Affinity Routing",
      "description": "Routing specific user accounts consistently to their local home region.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t3_s4_d2",
      "label": "Global Unique Key (UUIDv4 / Snowflake ID) Generation",
      "description": "Generating globally unique primary keys without central coordination.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t3_s5",
      "label": "Un-Replicated Transaction Data Loss Recovery",
      "description": "Reconciling asynchronous replication gaps following emergency region failovers.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t3_s5_d1",
      "label": "Audit Log Delta Reconciliation",
      "description": "Scanning transaction logs in failed primary regions after restoration to identify un-replicated writes.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t3_s5_d2",
      "label": "Automated Compensation Workflows",
      "description": "Replaying lost transactions or notifying affected users.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t4",
      "label": "Stateless Application Tier Active-Active Routing",
      "description": "Routing user HTTP requests dynamically across redundant regional application fleets.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t4_s1",
      "label": "Global Load Balancer (GLB) Anycast Routing",
      "description": "Using Anycast IP networks to route users to the nearest operational cloud region.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t4_s1_d1",
      "label": "BGP Route Health Injection (RHI)",
      "description": "Withdrawing Anycast BGP route announcements when a data center region fails.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t4_s1_d2",
      "label": "Instant Sub-Second Traffic Shift",
      "description": "Rerouting user TCP connections automatically at edge routers.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t4_s2",
      "label": "State Externalization to Distributed Caches",
      "description": "Decoupling application servers from local session state to enable instant regional failover.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t4_s2_d1",
      "label": "Redis Cluster / DynamoDB Session Stores",
      "description": "Storing user HTTP session tokens in multi-region global data stores.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t4_s2_d2",
      "label": "Stateless Application Pod Scaling",
      "description": "Allowing any application server in any region to handle any incoming request.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t4_s3",
      "label": "Cross-Region Dependency Isolation",
      "description": "Ensuring regional application fleets do not depend on synchronous calls to other regions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t4_s3_d1",
      "label": "Local Region Microservice Calls Only",
      "description": "Restricting internal RPC calls strictly to local region microservice endpoints.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t4_s3_d2",
      "label": "Elimination of Cross-Region Blast Radius",
      "description": "Preventing outages in Region A from causing cascading failures in Region B.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t4_s4",
      "label": "Global Traffic Draining & Maintenance Mode",
      "description": "Gracefully shifting traffic away from regions for scheduled upgrades.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t4_s4_d1",
      "label": "Weight-Based Traffic Draining",
      "description": "Decreasing regional load balancer weights smoothly (100% -> 50% -> 0%).",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t4_s4_d2",
      "label": "Active Connection Draining Windows",
      "description": "Waiting for active long-lived HTTP/WebSocket connections to complete.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t4_s5",
      "label": "Synthetic Canary Testing in Secondary Regions",
      "description": "Continuously executing synthetic user journeys against backup regions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t4_s5_d1",
      "label": "24/7 Synthetic User Transaction Monitoring",
      "description": "Running automated browser tests to verify backup region functionality continuously.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t4_s5_d2",
      "label": "Early Warning Failover Alerts",
      "description": "Detecting configuration drift in secondary regions before emergency failovers occur.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t5",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 5",
      "description": "Detailed first-principles mechanics for Disaster Recovery & Multi-Region Resilience topic 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t5_s1",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Disaster Recovery & Multi-Region Resilience Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t5_s1_d1",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t5_s1_d2",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t5_s2",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Disaster Recovery & Multi-Region Resilience Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t5_s2_d1",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t5_s2_d2",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t5_s3",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Disaster Recovery & Multi-Region Resilience Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t5_s3_d1",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t5_s3_d2",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t5_s4",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Disaster Recovery & Multi-Region Resilience Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t5_s4_d1",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t5_s4_d2",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t5_s5",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Disaster Recovery & Multi-Region Resilience Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t5_s5_d1",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t5_s5_d2",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Disaster Recovery & Multi-Region Resilience Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t6",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 6",
      "description": "Detailed first-principles mechanics for Disaster Recovery & Multi-Region Resilience topic 6.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t6_s1",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Disaster Recovery & Multi-Region Resilience Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t6_s1_d1",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t6_s1_d2",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t6_s2",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Disaster Recovery & Multi-Region Resilience Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t6_s2_d1",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t6_s2_d2",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t6_s3",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Disaster Recovery & Multi-Region Resilience Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t6_s3_d1",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t6_s3_d2",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t6_s4",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Disaster Recovery & Multi-Region Resilience Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t6_s4_d1",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t6_s4_d2",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t6_s5",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Disaster Recovery & Multi-Region Resilience Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t6_s5_d1",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p6_t6_s5_d2",
      "label": "Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Disaster Recovery & Multi-Region Resilience Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7",
      "label": "Infrastructure-as-Code (IaC) & Automation",
      "description": "Declarative infrastructure management, state file lock engines, dependency graphs, and GitOps workflows.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t1",
      "label": "Terraform Execution & Graph Engine",
      "description": "HashiCorp infrastructure-as-code engine compiling declarative HCL into execution plans.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t1_s1",
      "label": "HCL (HashiCorp Configuration Language) AST",
      "description": "Parsing HCL code blocks into Abstract Syntax Trees for evaluation.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t1_s1_d1",
      "label": "Declarative Resource Block Specs",
      "description": "Defining desired state specifications for cloud infrastructure assets.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t1_s1_d2",
      "label": "Interpolation Expression Evaluation",
      "description": "Evaluating dynamic variables, functions, and resource attribute references.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t1_s2",
      "label": "Directed Acyclic Graph (DAG) Resource Resolution",
      "description": "Constructing dependency graphs to determine resource creation and destruction ordering.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t1_s2_d1",
      "label": "Implicit & Explicit (depends_on) Dependency Edges",
      "description": "Building DAG nodes and executing independent resource creations in parallel threads.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t1_s2_d2",
      "label": "Parallel Resource Walk (default 10 threads)",
      "description": "Provisioning up to 10 independent cloud resources simultaneously.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t1_s3",
      "label": "Terraform Plan & Refresh Phase",
      "description": "Comparing declarative target state against current cloud infrastructure state.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t1_s3_d1",
      "label": "Cloud API Refresh Read Pass",
      "description": "Querying cloud provider APIs to read current live resource attributes.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t1_s3_d2",
      "label": "State Diff Generation (Create, Update, Destroy)",
      "description": "Generating precise execution plans highlighting proposed resource modifications.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t1_s4",
      "label": "Terraform State File Anatomy (.tfstate)",
      "description": "JSON database mapping HCL configuration resources to real-world cloud API IDs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t1_s4_d1",
      "label": "Resource Schema Attribute Tracking",
      "description": "Storing resource metadata, private attributes, and dependency mappings.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t1_s4_d2",
      "label": "Sensitive Attribute Plaintext Warnings",
      "description": "Securing state files because passwords and private keys are stored in unencrypted JSON.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t1_s5",
      "label": "Remote State Storage & Lock Mechanisms",
      "description": "Managing shared state files across teams using S3 and DynamoDB locks.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t1_s5_d1",
      "label": "DynamoDB State Locking (LockID Hash)",
      "description": "Acquiring atomic DynamoDB locks to prevent concurrent terraform apply executions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t1_s5_d2",
      "label": "S3 Bucket Versioning & Encryption",
      "description": "Persisting state files to versioned, encrypted S3 buckets for audit and rollback capabilities.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t2",
      "label": "Pulumi Programmatic Infrastructure SDK",
      "description": "Writing infrastructure code using general-purpose programming languages (TypeScript, Python, Go).",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t2_s1",
      "label": "Language Host vs Resource Monitor Architecture",
      "description": "Decoupling code execution in language runtimes from engine state management.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t2_s1_d1",
      "label": "gRPC Protocol Communication",
      "description": "Transmitting resource registration requests from language runtimes to Pulumi engines via gRPC.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t2_s1_d2",
      "label": "Real Language Loops & Conditionals",
      "description": "Utilizing standard language if/else statements, loops, and classes.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t2_s2",
      "label": "Output<T> & Input<T> Asynchronous Futures",
      "description": "Managing asynchronous values and resource dependencies using promise-like types.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t2_s2_d1",
      "label": "pulumi.interpolate & .apply() Expressions",
      "description": "Chaining operations on outputs that are only known after resource creation.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t2_s2_d2",
      "label": "Un-resolved Future Execution Safety",
      "description": "Preventing premature evaluation of resource attributes before cloud API responses return.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t2_s3",
      "label": "Pulumi Native Cloud Providers",
      "description": "Generating SDKs directly from cloud provider OpenAPI and Resource Schemas.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t2_s3_d1",
      "label": "Zero Delay Same-Day Feature Support",
      "description": "Exposing new AWS/Azure features immediately upon cloud API releases.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t2_s3_d2",
      "label": "Direct Cloud REST API Invocation",
      "description": "Bypassing Terraform provider wrappers for direct ARM or AWS API calls.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t2_s4",
      "label": "Component Resources & Custom Abstractions",
      "description": "Creating higher-level reusable infrastructure components.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t2_s4_d1",
      "label": "ComponentResource Parent Class Extension",
      "description": "Encapsulating multiple sub-resources (VPC, Subnets, Gateways) into single reusable classes.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t2_s4_d2",
      "label": "Enterprise Library Sharing via Package Managers",
      "description": "Publishing infrastructure components as NPM packages or PyPI modules.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t2_s5",
      "label": "State Migration from Terraform to Pulumi",
      "description": "Importing existing Terraform state files into Pulumi state registries.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t2_s5_d1",
      "label": "pulumi import Automation",
      "description": "Generating matching TypeScript/Python code from live cloud resource IDs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t2_s5_d2",
      "label": "Zero Resource Downtime Migration",
      "description": "Adopting existing infrastructure without destroying or re-creating assets.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t3",
      "label": "AWS CloudFormation & CDK Engines",
      "description": "AWS native declarative infrastructure templates and Cloud Development Kit abstractions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t3_s1",
      "label": "CloudFormation Stack State Machine",
      "description": "AWS-managed service executing stack deployment transactions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t3_s1_d1",
      "label": "CREATE_IN_PROGRESS -> CREATE_COMPLETE States",
      "description": "Managing resource creation state transitions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t3_s1_d2",
      "label": "Automatic Stack Rollback on Failure",
      "description": "Reverting all created resources automatically if any single stack resource fails.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t3_s2",
      "label": "CloudFormation Change Sets",
      "description": "Previewing stack modifications before executing updates.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t3_s2_d1",
      "label": "Replacement vs Modification Impact Analysis",
      "description": "Highlighting whether updates will cause non-disruptive modifications or destructive resource replacements.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t3_s2_d2",
      "label": "Automated Change Set Approval Gates",
      "description": "Requiring explicit operator approval before executing high-risk change sets.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t3_s3",
      "label": "AWS CDK Construct Tree Hierarchy (L1, L2, L3)",
      "description": "Building CloudFormation templates using object-oriented programming constructs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t3_s3_d1",
      "label": "L1 Cfn Primitives",
      "description": "Direct 1-to-1 mappings to raw CloudFormation resource types.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t3_s3_d2",
      "label": "L2 Intent-Based Constructs",
      "description": "Boilerplate-free constructs providing sensible secure defaults and helper methods.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t3_s3_d3",
      "label": "L3 Architectural Patterns",
      "description": "Complete multi-resource patterns (e.g. ApplicationLoadBalancedFargateService).",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t3_s4",
      "label": "cdk synth & CloudAssembly Artifacts",
      "description": "Compiling CDK code into CloudFormation templates and asset files.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t3_s4_d1",
      "label": "cdk.out CloudAssembly Output Directory",
      "description": "Generating synthesized JSON templates, Lambda code zips, and Docker build context directories.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t3_s4_d2",
      "label": "Deterministic Template Generation",
      "description": "Ensuring identical code input produces matching CloudFormation JSON templates.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t3_s5",
      "label": "Custom Resources (Lambda-Backed Operators)",
      "description": "Executing custom logic during CloudFormation stack creation, update, or deletion.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t3_s5_d1",
      "label": "RequestType Event Dispatch (Create, Update, Delete)",
      "description": "Handling custom lifecycle events in Lambda code.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t3_s5_d2",
      "label": "ResponseURL S3 Status Callbacks",
      "description": "Sending success/failure JSON responses back to CloudFormation presigned S3 URLs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t4",
      "label": "GitOps & Infrastructure Drift Detection",
      "description": "Automating infrastructure synchronization continuously from Git repositories.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t4_s1",
      "label": "Git as Single Source of Truth",
      "description": "Enforcing that all infrastructure modifications occur exclusively via Git commits and PRs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t4_s1_d1",
      "label": "Pull Request Peer Review Workflows",
      "description": "Requiring peer approvals and automated test runs prior to merging infrastructure changes.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t4_s1_d2",
      "label": "Immutable Audit Trail in Git History",
      "description": "Recording exact operator identities, timestamps, and code diffs in Git commit logs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t4_s2",
      "label": "Continuous Drift Detection Engine",
      "description": "Detecting out-of-band manual changes made directly in cloud consoles.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t4_s2_d1",
      "label": "Scheduled Terraform / Pulumi Drift Checks",
      "description": "Running daily automated plan jobs to compare Git state against live cloud APIs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t4_s2_d2",
      "label": "Alerting & Auto-Remediation Enforcement",
      "description": "Notifying teams or automatically re-applying IaC configurations to overwrite manual changes.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t4_s3",
      "label": "Atlantis Pull Request Automation",
      "description": "Executing terraform plan and apply commands directly within Pull Request comments.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t4_s3_d1",
      "label": "atlantis plan Output Posting",
      "description": "Posting formatted execution plan diffs directly as PR comments.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t4_s3_d2",
      "label": "atlantis apply Execution Locks",
      "description": "Acquiring repository branch locks to prevent overlapping PR deployments.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t4_s4",
      "label": "Multi-Environment Directory & Workspace Layouts",
      "description": "Structuring IaC codebases to support isolated Dev, Staging, and Prod environments.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t4_s4_d1",
      "label": "Terragrunt DRY Configuration Hierarchies",
      "description": "Eliminating duplicate HCL code using Terragrunt parent-child include configurations.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t4_s4_d2",
      "label": "Environment State File Isolation",
      "description": "Storing state files in separate S3 buckets and IAM accounts per environment.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t4_s5",
      "label": "Policy Enforcement in CI/CD (OPA / Checkov)",
      "description": "Scanning IaC code for security misconfigurations before applying updates.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t4_s5_d1",
      "label": "Checkov Static IaC Vulnerability Scanning",
      "description": "Detecting unencrypted S3 buckets, open security groups, and missing tags.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t4_s5_d2",
      "label": "OPA / Conftest Rego Rule Blocking",
      "description": "Failing CI/CD builds if infrastructure code violates organizational compliance rules.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t5",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 5",
      "description": "Detailed first-principles mechanics for Infrastructure-as-Code (IaC) & Automation topic 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t5_s1",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Infrastructure-as-Code (IaC) & Automation Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t5_s1_d1",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t5_s1_d2",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t5_s2",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Infrastructure-as-Code (IaC) & Automation Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t5_s2_d1",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t5_s2_d2",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t5_s3",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Infrastructure-as-Code (IaC) & Automation Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t5_s3_d1",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t5_s3_d2",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t5_s4",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Infrastructure-as-Code (IaC) & Automation Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t5_s4_d1",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t5_s4_d2",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t5_s5",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Infrastructure-as-Code (IaC) & Automation Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t5_s5_d1",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t5_s5_d2",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Infrastructure-as-Code (IaC) & Automation Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t6",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 6",
      "description": "Detailed first-principles mechanics for Infrastructure-as-Code (IaC) & Automation topic 6.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t6_s1",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Infrastructure-as-Code (IaC) & Automation Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t6_s1_d1",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t6_s1_d2",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t6_s2",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Infrastructure-as-Code (IaC) & Automation Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t6_s2_d1",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t6_s2_d2",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t6_s3",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Infrastructure-as-Code (IaC) & Automation Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t6_s3_d1",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t6_s3_d2",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t6_s4",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Infrastructure-as-Code (IaC) & Automation Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t6_s4_d1",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t6_s4_d2",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t6_s5",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Infrastructure-as-Code (IaC) & Automation Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t6_s5_d1",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p7_t6_s5_d2",
      "label": "Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Infrastructure-as-Code (IaC) & Automation Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8",
      "label": "Cloud FinOps & Cost Optimization",
      "description": "Financial management architectures, cost allocation, spot instance management, and resource right-sizing.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t1",
      "label": "AWS Savings Plans & Reserved Instances",
      "description": "Commitment-based discount models reducing compute costs by up to 72%.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t1_s1",
      "label": "Compute vs EC2 Instance Savings Plans",
      "description": "Trading flexibility against maximum discount percentages.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t1_s1_d1",
      "label": "Compute Savings Plans (Max Flexibility)",
      "description": "Applying automated hourly dollar commitments across EC2, Fargate, and Lambda anywhere globally.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t1_s1_d2",
      "label": "EC2 Instance Savings Plans (Max Discount)",
      "description": "Committing to specific instance families within specific regions for up to 72% savings.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t1_s2",
      "label": "Hourly Dollar Commitment Math ($/Hour)",
      "description": "Committing to fixed hourly compute spend (e.g. $10/hour) for 1-year or 3-year terms.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t1_s2_d1",
      "label": "On-Demand Overflow Billing",
      "description": "Billing usage exceeding hourly commitments at standard On-Demand rates.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t1_s2_d2",
      "label": "Unutilized Commitment Waste Metrics",
      "description": "Monitoring commitment utilization percentages to avoid paying for un-used capacity.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t1_s3",
      "label": "Standard vs Convertible Reserved Instances (RIs)",
      "description": "Legacy commitment models offering instance trading and class conversion options.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t1_s3_d1",
      "label": "Convertible RI Exchange Mechanics",
      "description": "Exchanging convertible RIs for higher-value instances when compute requirements evolve.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t1_s3_d2",
      "label": "RI Marketplace Reselling",
      "description": "Selling unused standard RIs on the AWS Reserved Instance Marketplace.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t1_s4",
      "label": "Utilization & Coverage Metrics (Target > 90%)",
      "description": "Tracking FinOps KPIs to measure commitment portfolio efficiency.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t1_s4_d1",
      "label": "Savings Plan Utilization Rate (Target 99%)",
      "description": "Measuring the percentage of committed dollars actually consumed.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t1_s4_d2",
      "label": "Savings Plan Coverage Rate (Target 80-90%)",
      "description": "Measuring the percentage of total compute spend covered by discounts.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t1_s5",
      "label": "Automated Commitment Recommendation Engines",
      "description": "Analyzing historical usage patterns to generate optimal commitment purchase sizes.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t1_s5_d1",
      "label": "Cost Explorer 30-Day Lookback Algorithms",
      "description": "Simulating historical hourly usage to recommend optimal commitment levels.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t1_s5_d2",
      "label": "Normalized Unit Ratio Conversions",
      "description": "Calculating instance size flexibility using factor ratios (e.g. xlarge = 8 units).",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t2",
      "label": "Spot Instance Management & Interruption Resilience",
      "description": "Utilizing spare cloud compute capacity at up to 90% discounts with automated interruption handling.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t2_s1",
      "label": "Spot Capacity Pool Pricing & Market Dynamics",
      "description": "Dynamic pricing based on un-allocated cloud data center hardware capacity.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t2_s1_d1",
      "label": "Instance Type & AZ Pool Isolation",
      "description": "Treating each instance size in each AZ as an independent capacity pool.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t2_s1_d2",
      "label": "Stable Spot Price Floor Mechanics",
      "description": "Maintaining steady discounted prices until capacity pool demand spikes.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t2_s2",
      "label": "2-Minute Spot Interruption Notification",
      "description": "Handling AWS 2-minute termination warnings sent via EventBridge and instance metadata.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t2_s2_d1",
      "label": "Instance Metadata Service (IMDSv2) Polling",
      "description": "Polling http://169.254.169.254/latest/meta-data/spot/instance-action every 5 seconds.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t2_s2_d2",
      "label": "Graceful Connection Draining Execution",
      "description": "Draining load balancer connections and saving state within 120-second windows.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t2_s3",
      "label": "EC2 Auto Scaling Group Spot Allocation Strategies",
      "description": "Configuring diversified fleet allocations to withstand capacity pool evictions.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t2_s3_d1",
      "label": "capacity-optimized Allocation Strategy",
      "description": "Provisioning instances from capacity pools with the lowest probability of interruption.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t2_s3_d2",
      "label": "Price-Capacity-Filter Allocation Strategy",
      "description": "Balancing lowest cost against highest available capacity pools.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t2_s4",
      "label": "Mixed Instances Fleets (On-Demand + Spot)",
      "description": "Combining baseline On-Demand instances with spot instances for scaling.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t2_s4_d1",
      "label": "On-Demand Base Capacity Setup",
      "description": "Maintaining a minimum core count of On-Demand instances for baseline availability.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t2_s4_d2",
      "label": "Percentage Above Base Spot Scaling",
      "description": "Fulfilling scaling bursts using 100% Spot instances.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t2_s5",
      "label": "Karpenter / Auto-scaler Spot Diversification",
      "description": "Kubernetes cluster autoscalers provisioning optimal spot node types for pending pods.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t2_s5_d1",
      "label": "Multi-Instance Type Pod Tolerations",
      "description": "Allowing pods to run on any compatible instance family (e.g. c5.xlarge, c5a.xlarge, c6i.xlarge).",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t2_s5_d2",
      "label": "Automated Node Termination Handlers",
      "description": "Cordoning and draining Kubernetes spot nodes immediately upon 2-minute warning receipts.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t3",
      "label": "Cloud Cost Allocation & Tagging Governance",
      "description": "Structuring cloud cost accounting using metadata tagging and AWS Cost Categories.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t3_s1",
      "label": "Cost Allocation Tagging Architecture",
      "description": "Enforcing standardized key-value tags across all cloud resources.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t3_s1_d1",
      "label": "Mandatory Tag Keys (Environment, Owner, CostCenter, Service)",
      "description": "Tagging resources to attribute costs accurately to specific business units.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t3_s1_d2",
      "label": "User-Defined vs AWS-Generated Tags",
      "description": "Activating tags in AWS Billing Console to include them in Cost Explorer and CUR reports.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t3_s2",
      "label": "AWS CUR (Cost and Usage Report) Parquet Pipeline",
      "description": "Streaming detailed hourly line-item billing data to S3 for SQL analysis.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t3_s2_d1",
      "label": "Hourly Line-Item Granularity Reports",
      "description": "Exporting raw billing files containing exact usage quantities, rates, and resource IDs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t3_s2_d2",
      "label": "Athena / DuckDB SQL Billing Queries",
      "description": "Querying CUR Parquet files via SQL to analyze unallocated infrastructure costs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t3_s3",
      "label": "AWS Cost Categories & Chargeback Models",
      "description": "Grouping billing line-items into organizational cost structures for chargeback.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t3_s3_d1",
      "label": "Rule-Based Cost Category Rules",
      "description": "Grouping costs using status, account ID, or tag expression rules.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t3_s3_d2",
      "label": "Showback vs Chargeback Financial Models",
      "description": "Displaying cost reports to engineering teams (Showback) vs deducting budgets (Chargeback).",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t3_s4",
      "label": "Untagged Resource Enforcement & Remediation",
      "description": "Detecting and terminating cloud resources that lack required cost tags.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t3_s4_d1",
      "label": "AWS Config Rule Tag Validation",
      "description": "Flagging non-compliant untagged resources automatically upon creation.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t3_s4_d2",
      "label": "Auto-Termination Quarantine Actions",
      "description": "Stopping untagged dev resources after 24 hours of non-compliance.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t3_s5",
      "label": "Multi-Account FinOps Governance (AWS Organizations)",
      "description": "Structuring cloud accounts into consolidated billing hierarchies.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t3_s5_d1",
      "label": "Consolidated Billing Volume Discounts",
      "description": "Aggregating usage across all accounts to reach higher discount tiers.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t3_s5_d2",
      "label": "Service Control Policies (SCP) FinOps Guardrails",
      "description": "Restricting creation of expensive instance types (e.g. p4d.24xlarge) to authorized accounts.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t4",
      "label": "Resource Right-Sizing & Waste Elimination",
      "description": "Continuously analyzing compute, storage, and database utilization to purge idle assets.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t4_s1",
      "label": "CPU & Memory Right-Sizing Analytics",
      "description": "Identifying over-provisioned instances running at low CPU/RAM utilization.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t4_s1_d1",
      "label": "AWS Compute Optimizer Recommendations",
      "description": "Utilizing ML models to recommend optimal instance types based on 14-day CloudWatch metrics.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t4_s1_d2",
      "label": "Downsizing Multiplier Impact (e.g. 2xlarge -> xlarge)",
      "description": "Halving compute costs per instance by stepping down instance sizes.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t4_s2",
      "label": "Unattached EBS Volume & Snapshot Purging",
      "description": "Detecting and deleting orphaned storage assets left behind by terminated instances.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t4_s2_d1",
      "label": "Unattached (available) EBS Volume Sweeps",
      "description": "Scanning for EBS volumes in available states and deleting them after 7 days.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t4_s2_d2",
      "label": "Stale Snapshot Cleanup Jobs",
      "description": "Deleting historical AMI snapshots older than retention windows.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t4_s3",
      "label": "Idle Elastic Load Balancer & EIP Cleanup",
      "description": "Reclaiming unused network components that incur hourly charges.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t4_s3_d1",
      "label": "Unattached Elastic IP (EIP) Inactivity Hourly Charges",
      "description": "Purging unassigned public IP addresses to avoid hourly idle penalties.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t4_s3_d2",
      "label": "Zero-Target Load Balancer Deletion",
      "description": "Detecting and deleting ALBs/NLBs that have zero active backend target groups.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t4_s4",
      "label": "Dev / Staging Auto-Shutdown Schedules",
      "description": "Automating nightly and weekend shutdown of non-production environments.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t4_s4_d1",
      "label": "AWS Instance Scheduler Automation",
      "description": "Stopping dev instances at 7 PM and starting them at 7 AM on weekdays.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t4_s4_d2",
      "label": "65% Non-Prod Cost Reduction Math",
      "description": "Saving 65% on non-prod compute costs by running instances only during 50 working hours/week.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t4_s5",
      "label": "Data Egress & NAT Gateway Cost Reduction",
      "description": "Optimizing high-cost network data transfer paths.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t4_s5_d1",
      "label": "NAT Gateway Data Processing Fee ($0.045 / GB)",
      "description": "Routing S3/DynamoDB traffic to free Gateway Endpoints to bypass NAT Gateways.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t4_s5_d2",
      "label": "Same-AZ Compute & Storage Placement",
      "description": "Avoiding cross-AZ data transfer fees ($0.01 / GB) by keeping traffic local to single AZs.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t5",
      "label": "Cloud FinOps & Cost Optimization Topic 5",
      "description": "Detailed first-principles mechanics for Cloud FinOps & Cost Optimization topic 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t5_s1",
      "label": "Cloud FinOps & Cost Optimization Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Cloud FinOps & Cost Optimization Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t5_s1_d1",
      "label": "Cloud FinOps & Cost Optimization Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud FinOps & Cost Optimization Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t5_s1_d2",
      "label": "Cloud FinOps & Cost Optimization Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud FinOps & Cost Optimization Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t5_s2",
      "label": "Cloud FinOps & Cost Optimization Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Cloud FinOps & Cost Optimization Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t5_s2_d1",
      "label": "Cloud FinOps & Cost Optimization Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud FinOps & Cost Optimization Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t5_s2_d2",
      "label": "Cloud FinOps & Cost Optimization Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud FinOps & Cost Optimization Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t5_s3",
      "label": "Cloud FinOps & Cost Optimization Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Cloud FinOps & Cost Optimization Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t5_s3_d1",
      "label": "Cloud FinOps & Cost Optimization Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud FinOps & Cost Optimization Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t5_s3_d2",
      "label": "Cloud FinOps & Cost Optimization Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud FinOps & Cost Optimization Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t5_s4",
      "label": "Cloud FinOps & Cost Optimization Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Cloud FinOps & Cost Optimization Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t5_s4_d1",
      "label": "Cloud FinOps & Cost Optimization Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud FinOps & Cost Optimization Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t5_s4_d2",
      "label": "Cloud FinOps & Cost Optimization Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud FinOps & Cost Optimization Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t5_s5",
      "label": "Cloud FinOps & Cost Optimization Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Cloud FinOps & Cost Optimization Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t5_s5_d1",
      "label": "Cloud FinOps & Cost Optimization Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud FinOps & Cost Optimization Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t5_s5_d2",
      "label": "Cloud FinOps & Cost Optimization Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud FinOps & Cost Optimization Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t6",
      "label": "Cloud FinOps & Cost Optimization Topic 6",
      "description": "Detailed first-principles mechanics for Cloud FinOps & Cost Optimization topic 6.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t6_s1",
      "label": "Cloud FinOps & Cost Optimization Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Cloud FinOps & Cost Optimization Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t6_s1_d1",
      "label": "Cloud FinOps & Cost Optimization Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud FinOps & Cost Optimization Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t6_s1_d2",
      "label": "Cloud FinOps & Cost Optimization Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud FinOps & Cost Optimization Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t6_s2",
      "label": "Cloud FinOps & Cost Optimization Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Cloud FinOps & Cost Optimization Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t6_s2_d1",
      "label": "Cloud FinOps & Cost Optimization Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud FinOps & Cost Optimization Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t6_s2_d2",
      "label": "Cloud FinOps & Cost Optimization Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud FinOps & Cost Optimization Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t6_s3",
      "label": "Cloud FinOps & Cost Optimization Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Cloud FinOps & Cost Optimization Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t6_s3_d1",
      "label": "Cloud FinOps & Cost Optimization Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud FinOps & Cost Optimization Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t6_s3_d2",
      "label": "Cloud FinOps & Cost Optimization Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud FinOps & Cost Optimization Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t6_s4",
      "label": "Cloud FinOps & Cost Optimization Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Cloud FinOps & Cost Optimization Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t6_s4_d1",
      "label": "Cloud FinOps & Cost Optimization Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud FinOps & Cost Optimization Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t6_s4_d2",
      "label": "Cloud FinOps & Cost Optimization Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud FinOps & Cost Optimization Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t6_s5",
      "label": "Cloud FinOps & Cost Optimization Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Cloud FinOps & Cost Optimization Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t6_s5_d1",
      "label": "Cloud FinOps & Cost Optimization Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud FinOps & Cost Optimization Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "cloud_root_p8_t6_s5_d2",
      "label": "Cloud FinOps & Cost Optimization Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Cloud FinOps & Cost Optimization Topic 6 Sub-System 5.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "source": "cloud_root",
      "target": "cloud_root_p1"
    },
    {
      "source": "cloud_root_p1",
      "target": "cloud_root_p1_t1"
    },
    {
      "source": "cloud_root_p1_t1",
      "target": "cloud_root_p1_t1_s1"
    },
    {
      "source": "cloud_root_p1_t1_s1",
      "target": "cloud_root_p1_t1_s1_d1"
    },
    {
      "source": "cloud_root_p1_t1_s1",
      "target": "cloud_root_p1_t1_s1_d2"
    },
    {
      "source": "cloud_root_p1_t1",
      "target": "cloud_root_p1_t1_s2"
    },
    {
      "source": "cloud_root_p1_t1_s2",
      "target": "cloud_root_p1_t1_s2_d1"
    },
    {
      "source": "cloud_root_p1_t1_s2",
      "target": "cloud_root_p1_t1_s2_d2"
    },
    {
      "source": "cloud_root_p1_t1",
      "target": "cloud_root_p1_t1_s3"
    },
    {
      "source": "cloud_root_p1_t1_s3",
      "target": "cloud_root_p1_t1_s3_d1"
    },
    {
      "source": "cloud_root_p1_t1_s3",
      "target": "cloud_root_p1_t1_s3_d2"
    },
    {
      "source": "cloud_root_p1_t1",
      "target": "cloud_root_p1_t1_s4"
    },
    {
      "source": "cloud_root_p1_t1_s4",
      "target": "cloud_root_p1_t1_s4_d1"
    },
    {
      "source": "cloud_root_p1_t1_s4",
      "target": "cloud_root_p1_t1_s4_d2"
    },
    {
      "source": "cloud_root_p1_t1",
      "target": "cloud_root_p1_t1_s5"
    },
    {
      "source": "cloud_root_p1_t1_s5",
      "target": "cloud_root_p1_t1_s5_d1"
    },
    {
      "source": "cloud_root_p1_t1_s5",
      "target": "cloud_root_p1_t1_s5_d2"
    },
    {
      "source": "cloud_root_p1",
      "target": "cloud_root_p1_t2"
    },
    {
      "source": "cloud_root_p1_t2",
      "target": "cloud_root_p1_t2_s1"
    },
    {
      "source": "cloud_root_p1_t2_s1",
      "target": "cloud_root_p1_t2_s1_d1"
    },
    {
      "source": "cloud_root_p1_t2_s1",
      "target": "cloud_root_p1_t2_s1_d2"
    },
    {
      "source": "cloud_root_p1_t2",
      "target": "cloud_root_p1_t2_s2"
    },
    {
      "source": "cloud_root_p1_t2_s2",
      "target": "cloud_root_p1_t2_s2_d1"
    },
    {
      "source": "cloud_root_p1_t2_s2",
      "target": "cloud_root_p1_t2_s2_d2"
    },
    {
      "source": "cloud_root_p1_t2",
      "target": "cloud_root_p1_t2_s3"
    },
    {
      "source": "cloud_root_p1_t2_s3",
      "target": "cloud_root_p1_t2_s3_d1"
    },
    {
      "source": "cloud_root_p1_t2_s3",
      "target": "cloud_root_p1_t2_s3_d2"
    },
    {
      "source": "cloud_root_p1_t2",
      "target": "cloud_root_p1_t2_s4"
    },
    {
      "source": "cloud_root_p1_t2_s4",
      "target": "cloud_root_p1_t2_s4_d1"
    },
    {
      "source": "cloud_root_p1_t2_s4",
      "target": "cloud_root_p1_t2_s4_d2"
    },
    {
      "source": "cloud_root_p1_t2",
      "target": "cloud_root_p1_t2_s5"
    },
    {
      "source": "cloud_root_p1_t2_s5",
      "target": "cloud_root_p1_t2_s5_d1"
    },
    {
      "source": "cloud_root_p1_t2_s5",
      "target": "cloud_root_p1_t2_s5_d2"
    },
    {
      "source": "cloud_root_p1",
      "target": "cloud_root_p1_t3"
    },
    {
      "source": "cloud_root_p1_t3",
      "target": "cloud_root_p1_t3_s1"
    },
    {
      "source": "cloud_root_p1_t3_s1",
      "target": "cloud_root_p1_t3_s1_d1"
    },
    {
      "source": "cloud_root_p1_t3_s1",
      "target": "cloud_root_p1_t3_s1_d2"
    },
    {
      "source": "cloud_root_p1_t3",
      "target": "cloud_root_p1_t3_s2"
    },
    {
      "source": "cloud_root_p1_t3_s2",
      "target": "cloud_root_p1_t3_s2_d1"
    },
    {
      "source": "cloud_root_p1_t3_s2",
      "target": "cloud_root_p1_t3_s2_d2"
    },
    {
      "source": "cloud_root_p1_t3",
      "target": "cloud_root_p1_t3_s3"
    },
    {
      "source": "cloud_root_p1_t3_s3",
      "target": "cloud_root_p1_t3_s3_d1"
    },
    {
      "source": "cloud_root_p1_t3_s3",
      "target": "cloud_root_p1_t3_s3_d2"
    },
    {
      "source": "cloud_root_p1_t3",
      "target": "cloud_root_p1_t3_s4"
    },
    {
      "source": "cloud_root_p1_t3_s4",
      "target": "cloud_root_p1_t3_s4_d1"
    },
    {
      "source": "cloud_root_p1_t3_s4",
      "target": "cloud_root_p1_t3_s4_d2"
    },
    {
      "source": "cloud_root_p1_t3",
      "target": "cloud_root_p1_t3_s5"
    },
    {
      "source": "cloud_root_p1_t3_s5",
      "target": "cloud_root_p1_t3_s5_d1"
    },
    {
      "source": "cloud_root_p1_t3_s5",
      "target": "cloud_root_p1_t3_s5_d2"
    },
    {
      "source": "cloud_root_p1",
      "target": "cloud_root_p1_t4"
    },
    {
      "source": "cloud_root_p1_t4",
      "target": "cloud_root_p1_t4_s1"
    },
    {
      "source": "cloud_root_p1_t4_s1",
      "target": "cloud_root_p1_t4_s1_d1"
    },
    {
      "source": "cloud_root_p1_t4_s1",
      "target": "cloud_root_p1_t4_s1_d2"
    },
    {
      "source": "cloud_root_p1_t4",
      "target": "cloud_root_p1_t4_s2"
    },
    {
      "source": "cloud_root_p1_t4_s2",
      "target": "cloud_root_p1_t4_s2_d1"
    },
    {
      "source": "cloud_root_p1_t4_s2",
      "target": "cloud_root_p1_t4_s2_d2"
    },
    {
      "source": "cloud_root_p1_t4",
      "target": "cloud_root_p1_t4_s3"
    },
    {
      "source": "cloud_root_p1_t4_s3",
      "target": "cloud_root_p1_t4_s3_d1"
    },
    {
      "source": "cloud_root_p1_t4_s3",
      "target": "cloud_root_p1_t4_s3_d2"
    },
    {
      "source": "cloud_root_p1_t4",
      "target": "cloud_root_p1_t4_s4"
    },
    {
      "source": "cloud_root_p1_t4_s4",
      "target": "cloud_root_p1_t4_s4_d1"
    },
    {
      "source": "cloud_root_p1_t4_s4",
      "target": "cloud_root_p1_t4_s4_d2"
    },
    {
      "source": "cloud_root_p1_t4",
      "target": "cloud_root_p1_t4_s5"
    },
    {
      "source": "cloud_root_p1_t4_s5",
      "target": "cloud_root_p1_t4_s5_d1"
    },
    {
      "source": "cloud_root_p1_t4_s5",
      "target": "cloud_root_p1_t4_s5_d2"
    },
    {
      "source": "cloud_root_p1",
      "target": "cloud_root_p1_t5"
    },
    {
      "source": "cloud_root_p1_t5",
      "target": "cloud_root_p1_t5_s1"
    },
    {
      "source": "cloud_root_p1_t5_s1",
      "target": "cloud_root_p1_t5_s1_d1"
    },
    {
      "source": "cloud_root_p1_t5_s1",
      "target": "cloud_root_p1_t5_s1_d2"
    },
    {
      "source": "cloud_root_p1_t5",
      "target": "cloud_root_p1_t5_s2"
    },
    {
      "source": "cloud_root_p1_t5_s2",
      "target": "cloud_root_p1_t5_s2_d1"
    },
    {
      "source": "cloud_root_p1_t5_s2",
      "target": "cloud_root_p1_t5_s2_d2"
    },
    {
      "source": "cloud_root_p1_t5",
      "target": "cloud_root_p1_t5_s3"
    },
    {
      "source": "cloud_root_p1_t5_s3",
      "target": "cloud_root_p1_t5_s3_d1"
    },
    {
      "source": "cloud_root_p1_t5_s3",
      "target": "cloud_root_p1_t5_s3_d2"
    },
    {
      "source": "cloud_root_p1_t5",
      "target": "cloud_root_p1_t5_s4"
    },
    {
      "source": "cloud_root_p1_t5_s4",
      "target": "cloud_root_p1_t5_s4_d1"
    },
    {
      "source": "cloud_root_p1_t5_s4",
      "target": "cloud_root_p1_t5_s4_d2"
    },
    {
      "source": "cloud_root_p1_t5",
      "target": "cloud_root_p1_t5_s5"
    },
    {
      "source": "cloud_root_p1_t5_s5",
      "target": "cloud_root_p1_t5_s5_d1"
    },
    {
      "source": "cloud_root_p1_t5_s5",
      "target": "cloud_root_p1_t5_s5_d2"
    },
    {
      "source": "cloud_root_p1",
      "target": "cloud_root_p1_t6"
    },
    {
      "source": "cloud_root_p1_t6",
      "target": "cloud_root_p1_t6_s1"
    },
    {
      "source": "cloud_root_p1_t6_s1",
      "target": "cloud_root_p1_t6_s1_d1"
    },
    {
      "source": "cloud_root_p1_t6_s1",
      "target": "cloud_root_p1_t6_s1_d2"
    },
    {
      "source": "cloud_root_p1_t6",
      "target": "cloud_root_p1_t6_s2"
    },
    {
      "source": "cloud_root_p1_t6_s2",
      "target": "cloud_root_p1_t6_s2_d1"
    },
    {
      "source": "cloud_root_p1_t6_s2",
      "target": "cloud_root_p1_t6_s2_d2"
    },
    {
      "source": "cloud_root_p1_t6",
      "target": "cloud_root_p1_t6_s3"
    },
    {
      "source": "cloud_root_p1_t6_s3",
      "target": "cloud_root_p1_t6_s3_d1"
    },
    {
      "source": "cloud_root_p1_t6_s3",
      "target": "cloud_root_p1_t6_s3_d2"
    },
    {
      "source": "cloud_root_p1_t6",
      "target": "cloud_root_p1_t6_s4"
    },
    {
      "source": "cloud_root_p1_t6_s4",
      "target": "cloud_root_p1_t6_s4_d1"
    },
    {
      "source": "cloud_root_p1_t6_s4",
      "target": "cloud_root_p1_t6_s4_d2"
    },
    {
      "source": "cloud_root_p1_t6",
      "target": "cloud_root_p1_t6_s5"
    },
    {
      "source": "cloud_root_p1_t6_s5",
      "target": "cloud_root_p1_t6_s5_d1"
    },
    {
      "source": "cloud_root_p1_t6_s5",
      "target": "cloud_root_p1_t6_s5_d2"
    },
    {
      "source": "cloud_root",
      "target": "cloud_root_p2"
    },
    {
      "source": "cloud_root_p2",
      "target": "cloud_root_p2_t1"
    },
    {
      "source": "cloud_root_p2_t1",
      "target": "cloud_root_p2_t1_s1"
    },
    {
      "source": "cloud_root_p2_t1_s1",
      "target": "cloud_root_p2_t1_s1_d1"
    },
    {
      "source": "cloud_root_p2_t1_s1",
      "target": "cloud_root_p2_t1_s1_d2"
    },
    {
      "source": "cloud_root_p2_t1",
      "target": "cloud_root_p2_t1_s2"
    },
    {
      "source": "cloud_root_p2_t1_s2",
      "target": "cloud_root_p2_t1_s2_d1"
    },
    {
      "source": "cloud_root_p2_t1_s2",
      "target": "cloud_root_p2_t1_s2_d2"
    },
    {
      "source": "cloud_root_p2_t1",
      "target": "cloud_root_p2_t1_s3"
    },
    {
      "source": "cloud_root_p2_t1_s3",
      "target": "cloud_root_p2_t1_s3_d1"
    },
    {
      "source": "cloud_root_p2_t1_s3",
      "target": "cloud_root_p2_t1_s3_d2"
    },
    {
      "source": "cloud_root_p2_t1",
      "target": "cloud_root_p2_t1_s4"
    },
    {
      "source": "cloud_root_p2_t1_s4",
      "target": "cloud_root_p2_t1_s4_d1"
    },
    {
      "source": "cloud_root_p2_t1_s4",
      "target": "cloud_root_p2_t1_s4_d2"
    },
    {
      "source": "cloud_root_p2_t1",
      "target": "cloud_root_p2_t1_s5"
    },
    {
      "source": "cloud_root_p2_t1_s5",
      "target": "cloud_root_p2_t1_s5_d1"
    },
    {
      "source": "cloud_root_p2_t1_s5",
      "target": "cloud_root_p2_t1_s5_d2"
    },
    {
      "source": "cloud_root_p2",
      "target": "cloud_root_p2_t2"
    },
    {
      "source": "cloud_root_p2_t2",
      "target": "cloud_root_p2_t2_s1"
    },
    {
      "source": "cloud_root_p2_t2_s1",
      "target": "cloud_root_p2_t2_s1_d1"
    },
    {
      "source": "cloud_root_p2_t2_s1",
      "target": "cloud_root_p2_t2_s1_d2"
    },
    {
      "source": "cloud_root_p2_t2",
      "target": "cloud_root_p2_t2_s2"
    },
    {
      "source": "cloud_root_p2_t2_s2",
      "target": "cloud_root_p2_t2_s2_d1"
    },
    {
      "source": "cloud_root_p2_t2_s2",
      "target": "cloud_root_p2_t2_s2_d2"
    },
    {
      "source": "cloud_root_p2_t2",
      "target": "cloud_root_p2_t2_s3"
    },
    {
      "source": "cloud_root_p2_t2_s3",
      "target": "cloud_root_p2_t2_s3_d1"
    },
    {
      "source": "cloud_root_p2_t2_s3",
      "target": "cloud_root_p2_t2_s3_d2"
    },
    {
      "source": "cloud_root_p2_t2",
      "target": "cloud_root_p2_t2_s4"
    },
    {
      "source": "cloud_root_p2_t2_s4",
      "target": "cloud_root_p2_t2_s4_d1"
    },
    {
      "source": "cloud_root_p2_t2_s4",
      "target": "cloud_root_p2_t2_s4_d2"
    },
    {
      "source": "cloud_root_p2_t2",
      "target": "cloud_root_p2_t2_s5"
    },
    {
      "source": "cloud_root_p2_t2_s5",
      "target": "cloud_root_p2_t2_s5_d1"
    },
    {
      "source": "cloud_root_p2_t2_s5",
      "target": "cloud_root_p2_t2_s5_d2"
    },
    {
      "source": "cloud_root_p2",
      "target": "cloud_root_p2_t3"
    },
    {
      "source": "cloud_root_p2_t3",
      "target": "cloud_root_p2_t3_s1"
    },
    {
      "source": "cloud_root_p2_t3_s1",
      "target": "cloud_root_p2_t3_s1_d1"
    },
    {
      "source": "cloud_root_p2_t3_s1",
      "target": "cloud_root_p2_t3_s1_d2"
    },
    {
      "source": "cloud_root_p2_t3",
      "target": "cloud_root_p2_t3_s2"
    },
    {
      "source": "cloud_root_p2_t3_s2",
      "target": "cloud_root_p2_t3_s2_d1"
    },
    {
      "source": "cloud_root_p2_t3_s2",
      "target": "cloud_root_p2_t3_s2_d2"
    },
    {
      "source": "cloud_root_p2_t3_s2",
      "target": "cloud_root_p2_t3_s2_d3"
    },
    {
      "source": "cloud_root_p2_t3",
      "target": "cloud_root_p2_t3_s3"
    },
    {
      "source": "cloud_root_p2_t3_s3",
      "target": "cloud_root_p2_t3_s3_d1"
    },
    {
      "source": "cloud_root_p2_t3_s3",
      "target": "cloud_root_p2_t3_s3_d2"
    },
    {
      "source": "cloud_root_p2_t3",
      "target": "cloud_root_p2_t3_s4"
    },
    {
      "source": "cloud_root_p2_t3_s4",
      "target": "cloud_root_p2_t3_s4_d1"
    },
    {
      "source": "cloud_root_p2_t3_s4",
      "target": "cloud_root_p2_t3_s4_d2"
    },
    {
      "source": "cloud_root_p2_t3",
      "target": "cloud_root_p2_t3_s5"
    },
    {
      "source": "cloud_root_p2_t3_s5",
      "target": "cloud_root_p2_t3_s5_d1"
    },
    {
      "source": "cloud_root_p2_t3_s5",
      "target": "cloud_root_p2_t3_s5_d2"
    },
    {
      "source": "cloud_root_p2",
      "target": "cloud_root_p2_t4"
    },
    {
      "source": "cloud_root_p2_t4",
      "target": "cloud_root_p2_t4_s1"
    },
    {
      "source": "cloud_root_p2_t4_s1",
      "target": "cloud_root_p2_t4_s1_d1"
    },
    {
      "source": "cloud_root_p2_t4_s1",
      "target": "cloud_root_p2_t4_s1_d2"
    },
    {
      "source": "cloud_root_p2_t4",
      "target": "cloud_root_p2_t4_s2"
    },
    {
      "source": "cloud_root_p2_t4_s2",
      "target": "cloud_root_p2_t4_s2_d1"
    },
    {
      "source": "cloud_root_p2_t4_s2",
      "target": "cloud_root_p2_t4_s2_d2"
    },
    {
      "source": "cloud_root_p2_t4",
      "target": "cloud_root_p2_t4_s3"
    },
    {
      "source": "cloud_root_p2_t4_s3",
      "target": "cloud_root_p2_t4_s3_d1"
    },
    {
      "source": "cloud_root_p2_t4_s3",
      "target": "cloud_root_p2_t4_s3_d2"
    },
    {
      "source": "cloud_root_p2_t4",
      "target": "cloud_root_p2_t4_s4"
    },
    {
      "source": "cloud_root_p2_t4_s4",
      "target": "cloud_root_p2_t4_s4_d1"
    },
    {
      "source": "cloud_root_p2_t4_s4",
      "target": "cloud_root_p2_t4_s4_d2"
    },
    {
      "source": "cloud_root_p2_t4",
      "target": "cloud_root_p2_t4_s5"
    },
    {
      "source": "cloud_root_p2_t4_s5",
      "target": "cloud_root_p2_t4_s5_d1"
    },
    {
      "source": "cloud_root_p2_t4_s5",
      "target": "cloud_root_p2_t4_s5_d2"
    },
    {
      "source": "cloud_root_p2",
      "target": "cloud_root_p2_t5"
    },
    {
      "source": "cloud_root_p2_t5",
      "target": "cloud_root_p2_t5_s1"
    },
    {
      "source": "cloud_root_p2_t5_s1",
      "target": "cloud_root_p2_t5_s1_d1"
    },
    {
      "source": "cloud_root_p2_t5_s1",
      "target": "cloud_root_p2_t5_s1_d2"
    },
    {
      "source": "cloud_root_p2_t5",
      "target": "cloud_root_p2_t5_s2"
    },
    {
      "source": "cloud_root_p2_t5_s2",
      "target": "cloud_root_p2_t5_s2_d1"
    },
    {
      "source": "cloud_root_p2_t5_s2",
      "target": "cloud_root_p2_t5_s2_d2"
    },
    {
      "source": "cloud_root_p2_t5",
      "target": "cloud_root_p2_t5_s3"
    },
    {
      "source": "cloud_root_p2_t5_s3",
      "target": "cloud_root_p2_t5_s3_d1"
    },
    {
      "source": "cloud_root_p2_t5_s3",
      "target": "cloud_root_p2_t5_s3_d2"
    },
    {
      "source": "cloud_root_p2_t5",
      "target": "cloud_root_p2_t5_s4"
    },
    {
      "source": "cloud_root_p2_t5_s4",
      "target": "cloud_root_p2_t5_s4_d1"
    },
    {
      "source": "cloud_root_p2_t5_s4",
      "target": "cloud_root_p2_t5_s4_d2"
    },
    {
      "source": "cloud_root_p2_t5",
      "target": "cloud_root_p2_t5_s5"
    },
    {
      "source": "cloud_root_p2_t5_s5",
      "target": "cloud_root_p2_t5_s5_d1"
    },
    {
      "source": "cloud_root_p2_t5_s5",
      "target": "cloud_root_p2_t5_s5_d2"
    },
    {
      "source": "cloud_root_p2",
      "target": "cloud_root_p2_t6"
    },
    {
      "source": "cloud_root_p2_t6",
      "target": "cloud_root_p2_t6_s1"
    },
    {
      "source": "cloud_root_p2_t6_s1",
      "target": "cloud_root_p2_t6_s1_d1"
    },
    {
      "source": "cloud_root_p2_t6_s1",
      "target": "cloud_root_p2_t6_s1_d2"
    },
    {
      "source": "cloud_root_p2_t6",
      "target": "cloud_root_p2_t6_s2"
    },
    {
      "source": "cloud_root_p2_t6_s2",
      "target": "cloud_root_p2_t6_s2_d1"
    },
    {
      "source": "cloud_root_p2_t6_s2",
      "target": "cloud_root_p2_t6_s2_d2"
    },
    {
      "source": "cloud_root_p2_t6",
      "target": "cloud_root_p2_t6_s3"
    },
    {
      "source": "cloud_root_p2_t6_s3",
      "target": "cloud_root_p2_t6_s3_d1"
    },
    {
      "source": "cloud_root_p2_t6_s3",
      "target": "cloud_root_p2_t6_s3_d2"
    },
    {
      "source": "cloud_root_p2_t6",
      "target": "cloud_root_p2_t6_s4"
    },
    {
      "source": "cloud_root_p2_t6_s4",
      "target": "cloud_root_p2_t6_s4_d1"
    },
    {
      "source": "cloud_root_p2_t6_s4",
      "target": "cloud_root_p2_t6_s4_d2"
    },
    {
      "source": "cloud_root_p2_t6",
      "target": "cloud_root_p2_t6_s5"
    },
    {
      "source": "cloud_root_p2_t6_s5",
      "target": "cloud_root_p2_t6_s5_d1"
    },
    {
      "source": "cloud_root_p2_t6_s5",
      "target": "cloud_root_p2_t6_s5_d2"
    },
    {
      "source": "cloud_root",
      "target": "cloud_root_p3"
    },
    {
      "source": "cloud_root_p3",
      "target": "cloud_root_p3_t1"
    },
    {
      "source": "cloud_root_p3_t1",
      "target": "cloud_root_p3_t1_s1"
    },
    {
      "source": "cloud_root_p3_t1_s1",
      "target": "cloud_root_p3_t1_s1_d1"
    },
    {
      "source": "cloud_root_p3_t1_s1",
      "target": "cloud_root_p3_t1_s1_d2"
    },
    {
      "source": "cloud_root_p3_t1",
      "target": "cloud_root_p3_t1_s2"
    },
    {
      "source": "cloud_root_p3_t1_s2",
      "target": "cloud_root_p3_t1_s2_d1"
    },
    {
      "source": "cloud_root_p3_t1_s2",
      "target": "cloud_root_p3_t1_s2_d2"
    },
    {
      "source": "cloud_root_p3_t1",
      "target": "cloud_root_p3_t1_s3"
    },
    {
      "source": "cloud_root_p3_t1_s3",
      "target": "cloud_root_p3_t1_s3_d1"
    },
    {
      "source": "cloud_root_p3_t1_s3",
      "target": "cloud_root_p3_t1_s3_d2"
    },
    {
      "source": "cloud_root_p3_t1",
      "target": "cloud_root_p3_t1_s4"
    },
    {
      "source": "cloud_root_p3_t1_s4",
      "target": "cloud_root_p3_t1_s4_d1"
    },
    {
      "source": "cloud_root_p3_t1_s4",
      "target": "cloud_root_p3_t1_s4_d2"
    },
    {
      "source": "cloud_root_p3_t1",
      "target": "cloud_root_p3_t1_s5"
    },
    {
      "source": "cloud_root_p3_t1_s5",
      "target": "cloud_root_p3_t1_s5_d1"
    },
    {
      "source": "cloud_root_p3_t1_s5",
      "target": "cloud_root_p3_t1_s5_d2"
    },
    {
      "source": "cloud_root_p3",
      "target": "cloud_root_p3_t2"
    },
    {
      "source": "cloud_root_p3_t2",
      "target": "cloud_root_p3_t2_s1"
    },
    {
      "source": "cloud_root_p3_t2_s1",
      "target": "cloud_root_p3_t2_s1_d1"
    },
    {
      "source": "cloud_root_p3_t2_s1",
      "target": "cloud_root_p3_t2_s1_d2"
    },
    {
      "source": "cloud_root_p3_t2",
      "target": "cloud_root_p3_t2_s2"
    },
    {
      "source": "cloud_root_p3_t2_s2",
      "target": "cloud_root_p3_t2_s2_d1"
    },
    {
      "source": "cloud_root_p3_t2_s2",
      "target": "cloud_root_p3_t2_s2_d2"
    },
    {
      "source": "cloud_root_p3_t2",
      "target": "cloud_root_p3_t2_s3"
    },
    {
      "source": "cloud_root_p3_t2_s3",
      "target": "cloud_root_p3_t2_s3_d1"
    },
    {
      "source": "cloud_root_p3_t2_s3",
      "target": "cloud_root_p3_t2_s3_d2"
    },
    {
      "source": "cloud_root_p3_t2",
      "target": "cloud_root_p3_t2_s4"
    },
    {
      "source": "cloud_root_p3_t2_s4",
      "target": "cloud_root_p3_t2_s4_d1"
    },
    {
      "source": "cloud_root_p3_t2_s4",
      "target": "cloud_root_p3_t2_s4_d2"
    },
    {
      "source": "cloud_root_p3_t2",
      "target": "cloud_root_p3_t2_s5"
    },
    {
      "source": "cloud_root_p3_t2_s5",
      "target": "cloud_root_p3_t2_s5_d1"
    },
    {
      "source": "cloud_root_p3_t2_s5",
      "target": "cloud_root_p3_t2_s5_d2"
    },
    {
      "source": "cloud_root_p3",
      "target": "cloud_root_p3_t3"
    },
    {
      "source": "cloud_root_p3_t3",
      "target": "cloud_root_p3_t3_s1"
    },
    {
      "source": "cloud_root_p3_t3_s1",
      "target": "cloud_root_p3_t3_s1_d1"
    },
    {
      "source": "cloud_root_p3_t3_s1",
      "target": "cloud_root_p3_t3_s1_d2"
    },
    {
      "source": "cloud_root_p3_t3",
      "target": "cloud_root_p3_t3_s2"
    },
    {
      "source": "cloud_root_p3_t3_s2",
      "target": "cloud_root_p3_t3_s2_d1"
    },
    {
      "source": "cloud_root_p3_t3_s2",
      "target": "cloud_root_p3_t3_s2_d2"
    },
    {
      "source": "cloud_root_p3_t3",
      "target": "cloud_root_p3_t3_s3"
    },
    {
      "source": "cloud_root_p3_t3_s3",
      "target": "cloud_root_p3_t3_s3_d1"
    },
    {
      "source": "cloud_root_p3_t3_s3",
      "target": "cloud_root_p3_t3_s3_d2"
    },
    {
      "source": "cloud_root_p3_t3",
      "target": "cloud_root_p3_t3_s4"
    },
    {
      "source": "cloud_root_p3_t3_s4",
      "target": "cloud_root_p3_t3_s4_d1"
    },
    {
      "source": "cloud_root_p3_t3_s4",
      "target": "cloud_root_p3_t3_s4_d2"
    },
    {
      "source": "cloud_root_p3_t3",
      "target": "cloud_root_p3_t3_s5"
    },
    {
      "source": "cloud_root_p3_t3_s5",
      "target": "cloud_root_p3_t3_s5_d1"
    },
    {
      "source": "cloud_root_p3_t3_s5",
      "target": "cloud_root_p3_t3_s5_d2"
    },
    {
      "source": "cloud_root_p3",
      "target": "cloud_root_p3_t4"
    },
    {
      "source": "cloud_root_p3_t4",
      "target": "cloud_root_p3_t4_s1"
    },
    {
      "source": "cloud_root_p3_t4_s1",
      "target": "cloud_root_p3_t4_s1_d1"
    },
    {
      "source": "cloud_root_p3_t4_s1",
      "target": "cloud_root_p3_t4_s1_d2"
    },
    {
      "source": "cloud_root_p3_t4",
      "target": "cloud_root_p3_t4_s2"
    },
    {
      "source": "cloud_root_p3_t4_s2",
      "target": "cloud_root_p3_t4_s2_d1"
    },
    {
      "source": "cloud_root_p3_t4_s2",
      "target": "cloud_root_p3_t4_s2_d2"
    },
    {
      "source": "cloud_root_p3_t4",
      "target": "cloud_root_p3_t4_s3"
    },
    {
      "source": "cloud_root_p3_t4_s3",
      "target": "cloud_root_p3_t4_s3_d1"
    },
    {
      "source": "cloud_root_p3_t4_s3",
      "target": "cloud_root_p3_t4_s3_d2"
    },
    {
      "source": "cloud_root_p3_t4",
      "target": "cloud_root_p3_t4_s4"
    },
    {
      "source": "cloud_root_p3_t4_s4",
      "target": "cloud_root_p3_t4_s4_d1"
    },
    {
      "source": "cloud_root_p3_t4_s4",
      "target": "cloud_root_p3_t4_s4_d2"
    },
    {
      "source": "cloud_root_p3_t4",
      "target": "cloud_root_p3_t4_s5"
    },
    {
      "source": "cloud_root_p3_t4_s5",
      "target": "cloud_root_p3_t4_s5_d1"
    },
    {
      "source": "cloud_root_p3_t4_s5",
      "target": "cloud_root_p3_t4_s5_d2"
    },
    {
      "source": "cloud_root_p3",
      "target": "cloud_root_p3_t5"
    },
    {
      "source": "cloud_root_p3_t5",
      "target": "cloud_root_p3_t5_s1"
    },
    {
      "source": "cloud_root_p3_t5_s1",
      "target": "cloud_root_p3_t5_s1_d1"
    },
    {
      "source": "cloud_root_p3_t5_s1",
      "target": "cloud_root_p3_t5_s1_d2"
    },
    {
      "source": "cloud_root_p3_t5",
      "target": "cloud_root_p3_t5_s2"
    },
    {
      "source": "cloud_root_p3_t5_s2",
      "target": "cloud_root_p3_t5_s2_d1"
    },
    {
      "source": "cloud_root_p3_t5_s2",
      "target": "cloud_root_p3_t5_s2_d2"
    },
    {
      "source": "cloud_root_p3_t5",
      "target": "cloud_root_p3_t5_s3"
    },
    {
      "source": "cloud_root_p3_t5_s3",
      "target": "cloud_root_p3_t5_s3_d1"
    },
    {
      "source": "cloud_root_p3_t5_s3",
      "target": "cloud_root_p3_t5_s3_d2"
    },
    {
      "source": "cloud_root_p3_t5",
      "target": "cloud_root_p3_t5_s4"
    },
    {
      "source": "cloud_root_p3_t5_s4",
      "target": "cloud_root_p3_t5_s4_d1"
    },
    {
      "source": "cloud_root_p3_t5_s4",
      "target": "cloud_root_p3_t5_s4_d2"
    },
    {
      "source": "cloud_root_p3_t5",
      "target": "cloud_root_p3_t5_s5"
    },
    {
      "source": "cloud_root_p3_t5_s5",
      "target": "cloud_root_p3_t5_s5_d1"
    },
    {
      "source": "cloud_root_p3_t5_s5",
      "target": "cloud_root_p3_t5_s5_d2"
    },
    {
      "source": "cloud_root_p3",
      "target": "cloud_root_p3_t6"
    },
    {
      "source": "cloud_root_p3_t6",
      "target": "cloud_root_p3_t6_s1"
    },
    {
      "source": "cloud_root_p3_t6_s1",
      "target": "cloud_root_p3_t6_s1_d1"
    },
    {
      "source": "cloud_root_p3_t6_s1",
      "target": "cloud_root_p3_t6_s1_d2"
    },
    {
      "source": "cloud_root_p3_t6",
      "target": "cloud_root_p3_t6_s2"
    },
    {
      "source": "cloud_root_p3_t6_s2",
      "target": "cloud_root_p3_t6_s2_d1"
    },
    {
      "source": "cloud_root_p3_t6_s2",
      "target": "cloud_root_p3_t6_s2_d2"
    },
    {
      "source": "cloud_root_p3_t6",
      "target": "cloud_root_p3_t6_s3"
    },
    {
      "source": "cloud_root_p3_t6_s3",
      "target": "cloud_root_p3_t6_s3_d1"
    },
    {
      "source": "cloud_root_p3_t6_s3",
      "target": "cloud_root_p3_t6_s3_d2"
    },
    {
      "source": "cloud_root_p3_t6",
      "target": "cloud_root_p3_t6_s4"
    },
    {
      "source": "cloud_root_p3_t6_s4",
      "target": "cloud_root_p3_t6_s4_d1"
    },
    {
      "source": "cloud_root_p3_t6_s4",
      "target": "cloud_root_p3_t6_s4_d2"
    },
    {
      "source": "cloud_root_p3_t6",
      "target": "cloud_root_p3_t6_s5"
    },
    {
      "source": "cloud_root_p3_t6_s5",
      "target": "cloud_root_p3_t6_s5_d1"
    },
    {
      "source": "cloud_root_p3_t6_s5",
      "target": "cloud_root_p3_t6_s5_d2"
    },
    {
      "source": "cloud_root",
      "target": "cloud_root_p4"
    },
    {
      "source": "cloud_root_p4",
      "target": "cloud_root_p4_t1"
    },
    {
      "source": "cloud_root_p4_t1",
      "target": "cloud_root_p4_t1_s1"
    },
    {
      "source": "cloud_root_p4_t1_s1",
      "target": "cloud_root_p4_t1_s1_d1"
    },
    {
      "source": "cloud_root_p4_t1_s1",
      "target": "cloud_root_p4_t1_s1_d2"
    },
    {
      "source": "cloud_root_p4_t1",
      "target": "cloud_root_p4_t1_s2"
    },
    {
      "source": "cloud_root_p4_t1_s2",
      "target": "cloud_root_p4_t1_s2_d1"
    },
    {
      "source": "cloud_root_p4_t1_s2",
      "target": "cloud_root_p4_t1_s2_d2"
    },
    {
      "source": "cloud_root_p4_t1",
      "target": "cloud_root_p4_t1_s3"
    },
    {
      "source": "cloud_root_p4_t1_s3",
      "target": "cloud_root_p4_t1_s3_d1"
    },
    {
      "source": "cloud_root_p4_t1_s3",
      "target": "cloud_root_p4_t1_s3_d2"
    },
    {
      "source": "cloud_root_p4_t1",
      "target": "cloud_root_p4_t1_s4"
    },
    {
      "source": "cloud_root_p4_t1_s4",
      "target": "cloud_root_p4_t1_s4_d1"
    },
    {
      "source": "cloud_root_p4_t1_s4",
      "target": "cloud_root_p4_t1_s4_d2"
    },
    {
      "source": "cloud_root_p4_t1",
      "target": "cloud_root_p4_t1_s5"
    },
    {
      "source": "cloud_root_p4_t1_s5",
      "target": "cloud_root_p4_t1_s5_d1"
    },
    {
      "source": "cloud_root_p4_t1_s5",
      "target": "cloud_root_p4_t1_s5_d2"
    },
    {
      "source": "cloud_root_p4",
      "target": "cloud_root_p4_t2"
    },
    {
      "source": "cloud_root_p4_t2",
      "target": "cloud_root_p4_t2_s1"
    },
    {
      "source": "cloud_root_p4_t2_s1",
      "target": "cloud_root_p4_t2_s1_d1"
    },
    {
      "source": "cloud_root_p4_t2_s1",
      "target": "cloud_root_p4_t2_s1_d2"
    },
    {
      "source": "cloud_root_p4_t2",
      "target": "cloud_root_p4_t2_s2"
    },
    {
      "source": "cloud_root_p4_t2_s2",
      "target": "cloud_root_p4_t2_s2_d1"
    },
    {
      "source": "cloud_root_p4_t2_s2",
      "target": "cloud_root_p4_t2_s2_d2"
    },
    {
      "source": "cloud_root_p4_t2",
      "target": "cloud_root_p4_t2_s3"
    },
    {
      "source": "cloud_root_p4_t2_s3",
      "target": "cloud_root_p4_t2_s3_d1"
    },
    {
      "source": "cloud_root_p4_t2_s3",
      "target": "cloud_root_p4_t2_s3_d2"
    },
    {
      "source": "cloud_root_p4_t2",
      "target": "cloud_root_p4_t2_s4"
    },
    {
      "source": "cloud_root_p4_t2_s4",
      "target": "cloud_root_p4_t2_s4_d1"
    },
    {
      "source": "cloud_root_p4_t2_s4",
      "target": "cloud_root_p4_t2_s4_d2"
    },
    {
      "source": "cloud_root_p4_t2",
      "target": "cloud_root_p4_t2_s5"
    },
    {
      "source": "cloud_root_p4_t2_s5",
      "target": "cloud_root_p4_t2_s5_d1"
    },
    {
      "source": "cloud_root_p4_t2_s5",
      "target": "cloud_root_p4_t2_s5_d2"
    },
    {
      "source": "cloud_root_p4",
      "target": "cloud_root_p4_t3"
    },
    {
      "source": "cloud_root_p4_t3",
      "target": "cloud_root_p4_t3_s1"
    },
    {
      "source": "cloud_root_p4_t3_s1",
      "target": "cloud_root_p4_t3_s1_d1"
    },
    {
      "source": "cloud_root_p4_t3_s1",
      "target": "cloud_root_p4_t3_s1_d2"
    },
    {
      "source": "cloud_root_p4_t3",
      "target": "cloud_root_p4_t3_s2"
    },
    {
      "source": "cloud_root_p4_t3_s2",
      "target": "cloud_root_p4_t3_s2_d1"
    },
    {
      "source": "cloud_root_p4_t3_s2",
      "target": "cloud_root_p4_t3_s2_d2"
    },
    {
      "source": "cloud_root_p4_t3",
      "target": "cloud_root_p4_t3_s3"
    },
    {
      "source": "cloud_root_p4_t3_s3",
      "target": "cloud_root_p4_t3_s3_d1"
    },
    {
      "source": "cloud_root_p4_t3_s3",
      "target": "cloud_root_p4_t3_s3_d2"
    },
    {
      "source": "cloud_root_p4_t3",
      "target": "cloud_root_p4_t3_s4"
    },
    {
      "source": "cloud_root_p4_t3_s4",
      "target": "cloud_root_p4_t3_s4_d1"
    },
    {
      "source": "cloud_root_p4_t3_s4",
      "target": "cloud_root_p4_t3_s4_d2"
    },
    {
      "source": "cloud_root_p4_t3",
      "target": "cloud_root_p4_t3_s5"
    },
    {
      "source": "cloud_root_p4_t3_s5",
      "target": "cloud_root_p4_t3_s5_d1"
    },
    {
      "source": "cloud_root_p4_t3_s5",
      "target": "cloud_root_p4_t3_s5_d2"
    },
    {
      "source": "cloud_root_p4",
      "target": "cloud_root_p4_t4"
    },
    {
      "source": "cloud_root_p4_t4",
      "target": "cloud_root_p4_t4_s1"
    },
    {
      "source": "cloud_root_p4_t4_s1",
      "target": "cloud_root_p4_t4_s1_d1"
    },
    {
      "source": "cloud_root_p4_t4_s1",
      "target": "cloud_root_p4_t4_s1_d2"
    },
    {
      "source": "cloud_root_p4_t4",
      "target": "cloud_root_p4_t4_s2"
    },
    {
      "source": "cloud_root_p4_t4_s2",
      "target": "cloud_root_p4_t4_s2_d1"
    },
    {
      "source": "cloud_root_p4_t4_s2",
      "target": "cloud_root_p4_t4_s2_d2"
    },
    {
      "source": "cloud_root_p4_t4",
      "target": "cloud_root_p4_t4_s3"
    },
    {
      "source": "cloud_root_p4_t4_s3",
      "target": "cloud_root_p4_t4_s3_d1"
    },
    {
      "source": "cloud_root_p4_t4_s3",
      "target": "cloud_root_p4_t4_s3_d2"
    },
    {
      "source": "cloud_root_p4_t4",
      "target": "cloud_root_p4_t4_s4"
    },
    {
      "source": "cloud_root_p4_t4_s4",
      "target": "cloud_root_p4_t4_s4_d1"
    },
    {
      "source": "cloud_root_p4_t4_s4",
      "target": "cloud_root_p4_t4_s4_d2"
    },
    {
      "source": "cloud_root_p4_t4",
      "target": "cloud_root_p4_t4_s5"
    },
    {
      "source": "cloud_root_p4_t4_s5",
      "target": "cloud_root_p4_t4_s5_d1"
    },
    {
      "source": "cloud_root_p4_t4_s5",
      "target": "cloud_root_p4_t4_s5_d2"
    },
    {
      "source": "cloud_root_p4",
      "target": "cloud_root_p4_t5"
    },
    {
      "source": "cloud_root_p4_t5",
      "target": "cloud_root_p4_t5_s1"
    },
    {
      "source": "cloud_root_p4_t5_s1",
      "target": "cloud_root_p4_t5_s1_d1"
    },
    {
      "source": "cloud_root_p4_t5_s1",
      "target": "cloud_root_p4_t5_s1_d2"
    },
    {
      "source": "cloud_root_p4_t5",
      "target": "cloud_root_p4_t5_s2"
    },
    {
      "source": "cloud_root_p4_t5_s2",
      "target": "cloud_root_p4_t5_s2_d1"
    },
    {
      "source": "cloud_root_p4_t5_s2",
      "target": "cloud_root_p4_t5_s2_d2"
    },
    {
      "source": "cloud_root_p4_t5",
      "target": "cloud_root_p4_t5_s3"
    },
    {
      "source": "cloud_root_p4_t5_s3",
      "target": "cloud_root_p4_t5_s3_d1"
    },
    {
      "source": "cloud_root_p4_t5_s3",
      "target": "cloud_root_p4_t5_s3_d2"
    },
    {
      "source": "cloud_root_p4_t5",
      "target": "cloud_root_p4_t5_s4"
    },
    {
      "source": "cloud_root_p4_t5_s4",
      "target": "cloud_root_p4_t5_s4_d1"
    },
    {
      "source": "cloud_root_p4_t5_s4",
      "target": "cloud_root_p4_t5_s4_d2"
    },
    {
      "source": "cloud_root_p4_t5",
      "target": "cloud_root_p4_t5_s5"
    },
    {
      "source": "cloud_root_p4_t5_s5",
      "target": "cloud_root_p4_t5_s5_d1"
    },
    {
      "source": "cloud_root_p4_t5_s5",
      "target": "cloud_root_p4_t5_s5_d2"
    },
    {
      "source": "cloud_root_p4",
      "target": "cloud_root_p4_t6"
    },
    {
      "source": "cloud_root_p4_t6",
      "target": "cloud_root_p4_t6_s1"
    },
    {
      "source": "cloud_root_p4_t6_s1",
      "target": "cloud_root_p4_t6_s1_d1"
    },
    {
      "source": "cloud_root_p4_t6_s1",
      "target": "cloud_root_p4_t6_s1_d2"
    },
    {
      "source": "cloud_root_p4_t6",
      "target": "cloud_root_p4_t6_s2"
    },
    {
      "source": "cloud_root_p4_t6_s2",
      "target": "cloud_root_p4_t6_s2_d1"
    },
    {
      "source": "cloud_root_p4_t6_s2",
      "target": "cloud_root_p4_t6_s2_d2"
    },
    {
      "source": "cloud_root_p4_t6",
      "target": "cloud_root_p4_t6_s3"
    },
    {
      "source": "cloud_root_p4_t6_s3",
      "target": "cloud_root_p4_t6_s3_d1"
    },
    {
      "source": "cloud_root_p4_t6_s3",
      "target": "cloud_root_p4_t6_s3_d2"
    },
    {
      "source": "cloud_root_p4_t6",
      "target": "cloud_root_p4_t6_s4"
    },
    {
      "source": "cloud_root_p4_t6_s4",
      "target": "cloud_root_p4_t6_s4_d1"
    },
    {
      "source": "cloud_root_p4_t6_s4",
      "target": "cloud_root_p4_t6_s4_d2"
    },
    {
      "source": "cloud_root_p4_t6",
      "target": "cloud_root_p4_t6_s5"
    },
    {
      "source": "cloud_root_p4_t6_s5",
      "target": "cloud_root_p4_t6_s5_d1"
    },
    {
      "source": "cloud_root_p4_t6_s5",
      "target": "cloud_root_p4_t6_s5_d2"
    },
    {
      "source": "cloud_root",
      "target": "cloud_root_p5"
    },
    {
      "source": "cloud_root_p5",
      "target": "cloud_root_p5_t1"
    },
    {
      "source": "cloud_root_p5_t1",
      "target": "cloud_root_p5_t1_s1"
    },
    {
      "source": "cloud_root_p5_t1_s1",
      "target": "cloud_root_p5_t1_s1_d1"
    },
    {
      "source": "cloud_root_p5_t1_s1",
      "target": "cloud_root_p5_t1_s1_d2"
    },
    {
      "source": "cloud_root_p5_t1",
      "target": "cloud_root_p5_t1_s2"
    },
    {
      "source": "cloud_root_p5_t1_s2",
      "target": "cloud_root_p5_t1_s2_d1"
    },
    {
      "source": "cloud_root_p5_t1_s2",
      "target": "cloud_root_p5_t1_s2_d2"
    },
    {
      "source": "cloud_root_p5_t1",
      "target": "cloud_root_p5_t1_s3"
    },
    {
      "source": "cloud_root_p5_t1_s3",
      "target": "cloud_root_p5_t1_s3_d1"
    },
    {
      "source": "cloud_root_p5_t1_s3",
      "target": "cloud_root_p5_t1_s3_d2"
    },
    {
      "source": "cloud_root_p5_t1",
      "target": "cloud_root_p5_t1_s4"
    },
    {
      "source": "cloud_root_p5_t1_s4",
      "target": "cloud_root_p5_t1_s4_d1"
    },
    {
      "source": "cloud_root_p5_t1_s4",
      "target": "cloud_root_p5_t1_s4_d2"
    },
    {
      "source": "cloud_root_p5_t1",
      "target": "cloud_root_p5_t1_s5"
    },
    {
      "source": "cloud_root_p5_t1_s5",
      "target": "cloud_root_p5_t1_s5_d1"
    },
    {
      "source": "cloud_root_p5_t1_s5",
      "target": "cloud_root_p5_t1_s5_d2"
    },
    {
      "source": "cloud_root_p5",
      "target": "cloud_root_p5_t2"
    },
    {
      "source": "cloud_root_p5_t2",
      "target": "cloud_root_p5_t2_s1"
    },
    {
      "source": "cloud_root_p5_t2_s1",
      "target": "cloud_root_p5_t2_s1_d1"
    },
    {
      "source": "cloud_root_p5_t2_s1",
      "target": "cloud_root_p5_t2_s1_d2"
    },
    {
      "source": "cloud_root_p5_t2",
      "target": "cloud_root_p5_t2_s2"
    },
    {
      "source": "cloud_root_p5_t2_s2",
      "target": "cloud_root_p5_t2_s2_d1"
    },
    {
      "source": "cloud_root_p5_t2_s2",
      "target": "cloud_root_p5_t2_s2_d2"
    },
    {
      "source": "cloud_root_p5_t2",
      "target": "cloud_root_p5_t2_s3"
    },
    {
      "source": "cloud_root_p5_t2_s3",
      "target": "cloud_root_p5_t2_s3_d1"
    },
    {
      "source": "cloud_root_p5_t2_s3",
      "target": "cloud_root_p5_t2_s3_d2"
    },
    {
      "source": "cloud_root_p5_t2",
      "target": "cloud_root_p5_t2_s4"
    },
    {
      "source": "cloud_root_p5_t2_s4",
      "target": "cloud_root_p5_t2_s4_d1"
    },
    {
      "source": "cloud_root_p5_t2_s4",
      "target": "cloud_root_p5_t2_s4_d2"
    },
    {
      "source": "cloud_root_p5_t2",
      "target": "cloud_root_p5_t2_s5"
    },
    {
      "source": "cloud_root_p5_t2_s5",
      "target": "cloud_root_p5_t2_s5_d1"
    },
    {
      "source": "cloud_root_p5_t2_s5",
      "target": "cloud_root_p5_t2_s5_d2"
    },
    {
      "source": "cloud_root_p5",
      "target": "cloud_root_p5_t3"
    },
    {
      "source": "cloud_root_p5_t3",
      "target": "cloud_root_p5_t3_s1"
    },
    {
      "source": "cloud_root_p5_t3_s1",
      "target": "cloud_root_p5_t3_s1_d1"
    },
    {
      "source": "cloud_root_p5_t3_s1",
      "target": "cloud_root_p5_t3_s1_d2"
    },
    {
      "source": "cloud_root_p5_t3",
      "target": "cloud_root_p5_t3_s2"
    },
    {
      "source": "cloud_root_p5_t3_s2",
      "target": "cloud_root_p5_t3_s2_d1"
    },
    {
      "source": "cloud_root_p5_t3_s2",
      "target": "cloud_root_p5_t3_s2_d2"
    },
    {
      "source": "cloud_root_p5_t3",
      "target": "cloud_root_p5_t3_s3"
    },
    {
      "source": "cloud_root_p5_t3_s3",
      "target": "cloud_root_p5_t3_s3_d1"
    },
    {
      "source": "cloud_root_p5_t3_s3",
      "target": "cloud_root_p5_t3_s3_d2"
    },
    {
      "source": "cloud_root_p5_t3",
      "target": "cloud_root_p5_t3_s4"
    },
    {
      "source": "cloud_root_p5_t3_s4",
      "target": "cloud_root_p5_t3_s4_d1"
    },
    {
      "source": "cloud_root_p5_t3_s4",
      "target": "cloud_root_p5_t3_s4_d2"
    },
    {
      "source": "cloud_root_p5_t3",
      "target": "cloud_root_p5_t3_s5"
    },
    {
      "source": "cloud_root_p5_t3_s5",
      "target": "cloud_root_p5_t3_s5_d1"
    },
    {
      "source": "cloud_root_p5_t3_s5",
      "target": "cloud_root_p5_t3_s5_d2"
    },
    {
      "source": "cloud_root_p5",
      "target": "cloud_root_p5_t4"
    },
    {
      "source": "cloud_root_p5_t4",
      "target": "cloud_root_p5_t4_s1"
    },
    {
      "source": "cloud_root_p5_t4_s1",
      "target": "cloud_root_p5_t4_s1_d1"
    },
    {
      "source": "cloud_root_p5_t4_s1",
      "target": "cloud_root_p5_t4_s1_d2"
    },
    {
      "source": "cloud_root_p5_t4",
      "target": "cloud_root_p5_t4_s2"
    },
    {
      "source": "cloud_root_p5_t4_s2",
      "target": "cloud_root_p5_t4_s2_d1"
    },
    {
      "source": "cloud_root_p5_t4_s2",
      "target": "cloud_root_p5_t4_s2_d2"
    },
    {
      "source": "cloud_root_p5_t4",
      "target": "cloud_root_p5_t4_s3"
    },
    {
      "source": "cloud_root_p5_t4_s3",
      "target": "cloud_root_p5_t4_s3_d1"
    },
    {
      "source": "cloud_root_p5_t4_s3",
      "target": "cloud_root_p5_t4_s3_d2"
    },
    {
      "source": "cloud_root_p5_t4",
      "target": "cloud_root_p5_t4_s4"
    },
    {
      "source": "cloud_root_p5_t4_s4",
      "target": "cloud_root_p5_t4_s4_d1"
    },
    {
      "source": "cloud_root_p5_t4_s4",
      "target": "cloud_root_p5_t4_s4_d2"
    },
    {
      "source": "cloud_root_p5_t4",
      "target": "cloud_root_p5_t4_s5"
    },
    {
      "source": "cloud_root_p5_t4_s5",
      "target": "cloud_root_p5_t4_s5_d1"
    },
    {
      "source": "cloud_root_p5_t4_s5",
      "target": "cloud_root_p5_t4_s5_d2"
    },
    {
      "source": "cloud_root_p5",
      "target": "cloud_root_p5_t5"
    },
    {
      "source": "cloud_root_p5_t5",
      "target": "cloud_root_p5_t5_s1"
    },
    {
      "source": "cloud_root_p5_t5_s1",
      "target": "cloud_root_p5_t5_s1_d1"
    },
    {
      "source": "cloud_root_p5_t5_s1",
      "target": "cloud_root_p5_t5_s1_d2"
    },
    {
      "source": "cloud_root_p5_t5",
      "target": "cloud_root_p5_t5_s2"
    },
    {
      "source": "cloud_root_p5_t5_s2",
      "target": "cloud_root_p5_t5_s2_d1"
    },
    {
      "source": "cloud_root_p5_t5_s2",
      "target": "cloud_root_p5_t5_s2_d2"
    },
    {
      "source": "cloud_root_p5_t5",
      "target": "cloud_root_p5_t5_s3"
    },
    {
      "source": "cloud_root_p5_t5_s3",
      "target": "cloud_root_p5_t5_s3_d1"
    },
    {
      "source": "cloud_root_p5_t5_s3",
      "target": "cloud_root_p5_t5_s3_d2"
    },
    {
      "source": "cloud_root_p5_t5",
      "target": "cloud_root_p5_t5_s4"
    },
    {
      "source": "cloud_root_p5_t5_s4",
      "target": "cloud_root_p5_t5_s4_d1"
    },
    {
      "source": "cloud_root_p5_t5_s4",
      "target": "cloud_root_p5_t5_s4_d2"
    },
    {
      "source": "cloud_root_p5_t5",
      "target": "cloud_root_p5_t5_s5"
    },
    {
      "source": "cloud_root_p5_t5_s5",
      "target": "cloud_root_p5_t5_s5_d1"
    },
    {
      "source": "cloud_root_p5_t5_s5",
      "target": "cloud_root_p5_t5_s5_d2"
    },
    {
      "source": "cloud_root_p5",
      "target": "cloud_root_p5_t6"
    },
    {
      "source": "cloud_root_p5_t6",
      "target": "cloud_root_p5_t6_s1"
    },
    {
      "source": "cloud_root_p5_t6_s1",
      "target": "cloud_root_p5_t6_s1_d1"
    },
    {
      "source": "cloud_root_p5_t6_s1",
      "target": "cloud_root_p5_t6_s1_d2"
    },
    {
      "source": "cloud_root_p5_t6",
      "target": "cloud_root_p5_t6_s2"
    },
    {
      "source": "cloud_root_p5_t6_s2",
      "target": "cloud_root_p5_t6_s2_d1"
    },
    {
      "source": "cloud_root_p5_t6_s2",
      "target": "cloud_root_p5_t6_s2_d2"
    },
    {
      "source": "cloud_root_p5_t6",
      "target": "cloud_root_p5_t6_s3"
    },
    {
      "source": "cloud_root_p5_t6_s3",
      "target": "cloud_root_p5_t6_s3_d1"
    },
    {
      "source": "cloud_root_p5_t6_s3",
      "target": "cloud_root_p5_t6_s3_d2"
    },
    {
      "source": "cloud_root_p5_t6",
      "target": "cloud_root_p5_t6_s4"
    },
    {
      "source": "cloud_root_p5_t6_s4",
      "target": "cloud_root_p5_t6_s4_d1"
    },
    {
      "source": "cloud_root_p5_t6_s4",
      "target": "cloud_root_p5_t6_s4_d2"
    },
    {
      "source": "cloud_root_p5_t6",
      "target": "cloud_root_p5_t6_s5"
    },
    {
      "source": "cloud_root_p5_t6_s5",
      "target": "cloud_root_p5_t6_s5_d1"
    },
    {
      "source": "cloud_root_p5_t6_s5",
      "target": "cloud_root_p5_t6_s5_d2"
    },
    {
      "source": "cloud_root",
      "target": "cloud_root_p6"
    },
    {
      "source": "cloud_root_p6",
      "target": "cloud_root_p6_t1"
    },
    {
      "source": "cloud_root_p6_t1",
      "target": "cloud_root_p6_t1_s1"
    },
    {
      "source": "cloud_root_p6_t1_s1",
      "target": "cloud_root_p6_t1_s1_d1"
    },
    {
      "source": "cloud_root_p6_t1_s1",
      "target": "cloud_root_p6_t1_s1_d2"
    },
    {
      "source": "cloud_root_p6_t1",
      "target": "cloud_root_p6_t1_s2"
    },
    {
      "source": "cloud_root_p6_t1_s2",
      "target": "cloud_root_p6_t1_s2_d1"
    },
    {
      "source": "cloud_root_p6_t1_s2",
      "target": "cloud_root_p6_t1_s2_d2"
    },
    {
      "source": "cloud_root_p6_t1",
      "target": "cloud_root_p6_t1_s3"
    },
    {
      "source": "cloud_root_p6_t1_s3",
      "target": "cloud_root_p6_t1_s3_d1"
    },
    {
      "source": "cloud_root_p6_t1_s3",
      "target": "cloud_root_p6_t1_s3_d2"
    },
    {
      "source": "cloud_root_p6_t1",
      "target": "cloud_root_p6_t1_s4"
    },
    {
      "source": "cloud_root_p6_t1_s4",
      "target": "cloud_root_p6_t1_s4_d1"
    },
    {
      "source": "cloud_root_p6_t1_s4",
      "target": "cloud_root_p6_t1_s4_d2"
    },
    {
      "source": "cloud_root_p6_t1",
      "target": "cloud_root_p6_t1_s5"
    },
    {
      "source": "cloud_root_p6_t1_s5",
      "target": "cloud_root_p6_t1_s5_d1"
    },
    {
      "source": "cloud_root_p6_t1_s5",
      "target": "cloud_root_p6_t1_s5_d2"
    },
    {
      "source": "cloud_root_p6",
      "target": "cloud_root_p6_t2"
    },
    {
      "source": "cloud_root_p6_t2",
      "target": "cloud_root_p6_t2_s1"
    },
    {
      "source": "cloud_root_p6_t2_s1",
      "target": "cloud_root_p6_t2_s1_d1"
    },
    {
      "source": "cloud_root_p6_t2_s1",
      "target": "cloud_root_p6_t2_s1_d2"
    },
    {
      "source": "cloud_root_p6_t2",
      "target": "cloud_root_p6_t2_s2"
    },
    {
      "source": "cloud_root_p6_t2_s2",
      "target": "cloud_root_p6_t2_s2_d1"
    },
    {
      "source": "cloud_root_p6_t2_s2",
      "target": "cloud_root_p6_t2_s2_d2"
    },
    {
      "source": "cloud_root_p6_t2",
      "target": "cloud_root_p6_t2_s3"
    },
    {
      "source": "cloud_root_p6_t2_s3",
      "target": "cloud_root_p6_t2_s3_d1"
    },
    {
      "source": "cloud_root_p6_t2_s3",
      "target": "cloud_root_p6_t2_s3_d2"
    },
    {
      "source": "cloud_root_p6_t2",
      "target": "cloud_root_p6_t2_s4"
    },
    {
      "source": "cloud_root_p6_t2_s4",
      "target": "cloud_root_p6_t2_s4_d1"
    },
    {
      "source": "cloud_root_p6_t2_s4",
      "target": "cloud_root_p6_t2_s4_d2"
    },
    {
      "source": "cloud_root_p6_t2",
      "target": "cloud_root_p6_t2_s5"
    },
    {
      "source": "cloud_root_p6_t2_s5",
      "target": "cloud_root_p6_t2_s5_d1"
    },
    {
      "source": "cloud_root_p6_t2_s5",
      "target": "cloud_root_p6_t2_s5_d2"
    },
    {
      "source": "cloud_root_p6",
      "target": "cloud_root_p6_t3"
    },
    {
      "source": "cloud_root_p6_t3",
      "target": "cloud_root_p6_t3_s1"
    },
    {
      "source": "cloud_root_p6_t3_s1",
      "target": "cloud_root_p6_t3_s1_d1"
    },
    {
      "source": "cloud_root_p6_t3_s1",
      "target": "cloud_root_p6_t3_s1_d2"
    },
    {
      "source": "cloud_root_p6_t3",
      "target": "cloud_root_p6_t3_s2"
    },
    {
      "source": "cloud_root_p6_t3_s2",
      "target": "cloud_root_p6_t3_s2_d1"
    },
    {
      "source": "cloud_root_p6_t3_s2",
      "target": "cloud_root_p6_t3_s2_d2"
    },
    {
      "source": "cloud_root_p6_t3",
      "target": "cloud_root_p6_t3_s3"
    },
    {
      "source": "cloud_root_p6_t3_s3",
      "target": "cloud_root_p6_t3_s3_d1"
    },
    {
      "source": "cloud_root_p6_t3_s3",
      "target": "cloud_root_p6_t3_s3_d2"
    },
    {
      "source": "cloud_root_p6_t3",
      "target": "cloud_root_p6_t3_s4"
    },
    {
      "source": "cloud_root_p6_t3_s4",
      "target": "cloud_root_p6_t3_s4_d1"
    },
    {
      "source": "cloud_root_p6_t3_s4",
      "target": "cloud_root_p6_t3_s4_d2"
    },
    {
      "source": "cloud_root_p6_t3",
      "target": "cloud_root_p6_t3_s5"
    },
    {
      "source": "cloud_root_p6_t3_s5",
      "target": "cloud_root_p6_t3_s5_d1"
    },
    {
      "source": "cloud_root_p6_t3_s5",
      "target": "cloud_root_p6_t3_s5_d2"
    },
    {
      "source": "cloud_root_p6",
      "target": "cloud_root_p6_t4"
    },
    {
      "source": "cloud_root_p6_t4",
      "target": "cloud_root_p6_t4_s1"
    },
    {
      "source": "cloud_root_p6_t4_s1",
      "target": "cloud_root_p6_t4_s1_d1"
    },
    {
      "source": "cloud_root_p6_t4_s1",
      "target": "cloud_root_p6_t4_s1_d2"
    },
    {
      "source": "cloud_root_p6_t4",
      "target": "cloud_root_p6_t4_s2"
    },
    {
      "source": "cloud_root_p6_t4_s2",
      "target": "cloud_root_p6_t4_s2_d1"
    },
    {
      "source": "cloud_root_p6_t4_s2",
      "target": "cloud_root_p6_t4_s2_d2"
    },
    {
      "source": "cloud_root_p6_t4",
      "target": "cloud_root_p6_t4_s3"
    },
    {
      "source": "cloud_root_p6_t4_s3",
      "target": "cloud_root_p6_t4_s3_d1"
    },
    {
      "source": "cloud_root_p6_t4_s3",
      "target": "cloud_root_p6_t4_s3_d2"
    },
    {
      "source": "cloud_root_p6_t4",
      "target": "cloud_root_p6_t4_s4"
    },
    {
      "source": "cloud_root_p6_t4_s4",
      "target": "cloud_root_p6_t4_s4_d1"
    },
    {
      "source": "cloud_root_p6_t4_s4",
      "target": "cloud_root_p6_t4_s4_d2"
    },
    {
      "source": "cloud_root_p6_t4",
      "target": "cloud_root_p6_t4_s5"
    },
    {
      "source": "cloud_root_p6_t4_s5",
      "target": "cloud_root_p6_t4_s5_d1"
    },
    {
      "source": "cloud_root_p6_t4_s5",
      "target": "cloud_root_p6_t4_s5_d2"
    },
    {
      "source": "cloud_root_p6",
      "target": "cloud_root_p6_t5"
    },
    {
      "source": "cloud_root_p6_t5",
      "target": "cloud_root_p6_t5_s1"
    },
    {
      "source": "cloud_root_p6_t5_s1",
      "target": "cloud_root_p6_t5_s1_d1"
    },
    {
      "source": "cloud_root_p6_t5_s1",
      "target": "cloud_root_p6_t5_s1_d2"
    },
    {
      "source": "cloud_root_p6_t5",
      "target": "cloud_root_p6_t5_s2"
    },
    {
      "source": "cloud_root_p6_t5_s2",
      "target": "cloud_root_p6_t5_s2_d1"
    },
    {
      "source": "cloud_root_p6_t5_s2",
      "target": "cloud_root_p6_t5_s2_d2"
    },
    {
      "source": "cloud_root_p6_t5",
      "target": "cloud_root_p6_t5_s3"
    },
    {
      "source": "cloud_root_p6_t5_s3",
      "target": "cloud_root_p6_t5_s3_d1"
    },
    {
      "source": "cloud_root_p6_t5_s3",
      "target": "cloud_root_p6_t5_s3_d2"
    },
    {
      "source": "cloud_root_p6_t5",
      "target": "cloud_root_p6_t5_s4"
    },
    {
      "source": "cloud_root_p6_t5_s4",
      "target": "cloud_root_p6_t5_s4_d1"
    },
    {
      "source": "cloud_root_p6_t5_s4",
      "target": "cloud_root_p6_t5_s4_d2"
    },
    {
      "source": "cloud_root_p6_t5",
      "target": "cloud_root_p6_t5_s5"
    },
    {
      "source": "cloud_root_p6_t5_s5",
      "target": "cloud_root_p6_t5_s5_d1"
    },
    {
      "source": "cloud_root_p6_t5_s5",
      "target": "cloud_root_p6_t5_s5_d2"
    },
    {
      "source": "cloud_root_p6",
      "target": "cloud_root_p6_t6"
    },
    {
      "source": "cloud_root_p6_t6",
      "target": "cloud_root_p6_t6_s1"
    },
    {
      "source": "cloud_root_p6_t6_s1",
      "target": "cloud_root_p6_t6_s1_d1"
    },
    {
      "source": "cloud_root_p6_t6_s1",
      "target": "cloud_root_p6_t6_s1_d2"
    },
    {
      "source": "cloud_root_p6_t6",
      "target": "cloud_root_p6_t6_s2"
    },
    {
      "source": "cloud_root_p6_t6_s2",
      "target": "cloud_root_p6_t6_s2_d1"
    },
    {
      "source": "cloud_root_p6_t6_s2",
      "target": "cloud_root_p6_t6_s2_d2"
    },
    {
      "source": "cloud_root_p6_t6",
      "target": "cloud_root_p6_t6_s3"
    },
    {
      "source": "cloud_root_p6_t6_s3",
      "target": "cloud_root_p6_t6_s3_d1"
    },
    {
      "source": "cloud_root_p6_t6_s3",
      "target": "cloud_root_p6_t6_s3_d2"
    },
    {
      "source": "cloud_root_p6_t6",
      "target": "cloud_root_p6_t6_s4"
    },
    {
      "source": "cloud_root_p6_t6_s4",
      "target": "cloud_root_p6_t6_s4_d1"
    },
    {
      "source": "cloud_root_p6_t6_s4",
      "target": "cloud_root_p6_t6_s4_d2"
    },
    {
      "source": "cloud_root_p6_t6",
      "target": "cloud_root_p6_t6_s5"
    },
    {
      "source": "cloud_root_p6_t6_s5",
      "target": "cloud_root_p6_t6_s5_d1"
    },
    {
      "source": "cloud_root_p6_t6_s5",
      "target": "cloud_root_p6_t6_s5_d2"
    },
    {
      "source": "cloud_root",
      "target": "cloud_root_p7"
    },
    {
      "source": "cloud_root_p7",
      "target": "cloud_root_p7_t1"
    },
    {
      "source": "cloud_root_p7_t1",
      "target": "cloud_root_p7_t1_s1"
    },
    {
      "source": "cloud_root_p7_t1_s1",
      "target": "cloud_root_p7_t1_s1_d1"
    },
    {
      "source": "cloud_root_p7_t1_s1",
      "target": "cloud_root_p7_t1_s1_d2"
    },
    {
      "source": "cloud_root_p7_t1",
      "target": "cloud_root_p7_t1_s2"
    },
    {
      "source": "cloud_root_p7_t1_s2",
      "target": "cloud_root_p7_t1_s2_d1"
    },
    {
      "source": "cloud_root_p7_t1_s2",
      "target": "cloud_root_p7_t1_s2_d2"
    },
    {
      "source": "cloud_root_p7_t1",
      "target": "cloud_root_p7_t1_s3"
    },
    {
      "source": "cloud_root_p7_t1_s3",
      "target": "cloud_root_p7_t1_s3_d1"
    },
    {
      "source": "cloud_root_p7_t1_s3",
      "target": "cloud_root_p7_t1_s3_d2"
    },
    {
      "source": "cloud_root_p7_t1",
      "target": "cloud_root_p7_t1_s4"
    },
    {
      "source": "cloud_root_p7_t1_s4",
      "target": "cloud_root_p7_t1_s4_d1"
    },
    {
      "source": "cloud_root_p7_t1_s4",
      "target": "cloud_root_p7_t1_s4_d2"
    },
    {
      "source": "cloud_root_p7_t1",
      "target": "cloud_root_p7_t1_s5"
    },
    {
      "source": "cloud_root_p7_t1_s5",
      "target": "cloud_root_p7_t1_s5_d1"
    },
    {
      "source": "cloud_root_p7_t1_s5",
      "target": "cloud_root_p7_t1_s5_d2"
    },
    {
      "source": "cloud_root_p7",
      "target": "cloud_root_p7_t2"
    },
    {
      "source": "cloud_root_p7_t2",
      "target": "cloud_root_p7_t2_s1"
    },
    {
      "source": "cloud_root_p7_t2_s1",
      "target": "cloud_root_p7_t2_s1_d1"
    },
    {
      "source": "cloud_root_p7_t2_s1",
      "target": "cloud_root_p7_t2_s1_d2"
    },
    {
      "source": "cloud_root_p7_t2",
      "target": "cloud_root_p7_t2_s2"
    },
    {
      "source": "cloud_root_p7_t2_s2",
      "target": "cloud_root_p7_t2_s2_d1"
    },
    {
      "source": "cloud_root_p7_t2_s2",
      "target": "cloud_root_p7_t2_s2_d2"
    },
    {
      "source": "cloud_root_p7_t2",
      "target": "cloud_root_p7_t2_s3"
    },
    {
      "source": "cloud_root_p7_t2_s3",
      "target": "cloud_root_p7_t2_s3_d1"
    },
    {
      "source": "cloud_root_p7_t2_s3",
      "target": "cloud_root_p7_t2_s3_d2"
    },
    {
      "source": "cloud_root_p7_t2",
      "target": "cloud_root_p7_t2_s4"
    },
    {
      "source": "cloud_root_p7_t2_s4",
      "target": "cloud_root_p7_t2_s4_d1"
    },
    {
      "source": "cloud_root_p7_t2_s4",
      "target": "cloud_root_p7_t2_s4_d2"
    },
    {
      "source": "cloud_root_p7_t2",
      "target": "cloud_root_p7_t2_s5"
    },
    {
      "source": "cloud_root_p7_t2_s5",
      "target": "cloud_root_p7_t2_s5_d1"
    },
    {
      "source": "cloud_root_p7_t2_s5",
      "target": "cloud_root_p7_t2_s5_d2"
    },
    {
      "source": "cloud_root_p7",
      "target": "cloud_root_p7_t3"
    },
    {
      "source": "cloud_root_p7_t3",
      "target": "cloud_root_p7_t3_s1"
    },
    {
      "source": "cloud_root_p7_t3_s1",
      "target": "cloud_root_p7_t3_s1_d1"
    },
    {
      "source": "cloud_root_p7_t3_s1",
      "target": "cloud_root_p7_t3_s1_d2"
    },
    {
      "source": "cloud_root_p7_t3",
      "target": "cloud_root_p7_t3_s2"
    },
    {
      "source": "cloud_root_p7_t3_s2",
      "target": "cloud_root_p7_t3_s2_d1"
    },
    {
      "source": "cloud_root_p7_t3_s2",
      "target": "cloud_root_p7_t3_s2_d2"
    },
    {
      "source": "cloud_root_p7_t3",
      "target": "cloud_root_p7_t3_s3"
    },
    {
      "source": "cloud_root_p7_t3_s3",
      "target": "cloud_root_p7_t3_s3_d1"
    },
    {
      "source": "cloud_root_p7_t3_s3",
      "target": "cloud_root_p7_t3_s3_d2"
    },
    {
      "source": "cloud_root_p7_t3_s3",
      "target": "cloud_root_p7_t3_s3_d3"
    },
    {
      "source": "cloud_root_p7_t3",
      "target": "cloud_root_p7_t3_s4"
    },
    {
      "source": "cloud_root_p7_t3_s4",
      "target": "cloud_root_p7_t3_s4_d1"
    },
    {
      "source": "cloud_root_p7_t3_s4",
      "target": "cloud_root_p7_t3_s4_d2"
    },
    {
      "source": "cloud_root_p7_t3",
      "target": "cloud_root_p7_t3_s5"
    },
    {
      "source": "cloud_root_p7_t3_s5",
      "target": "cloud_root_p7_t3_s5_d1"
    },
    {
      "source": "cloud_root_p7_t3_s5",
      "target": "cloud_root_p7_t3_s5_d2"
    },
    {
      "source": "cloud_root_p7",
      "target": "cloud_root_p7_t4"
    },
    {
      "source": "cloud_root_p7_t4",
      "target": "cloud_root_p7_t4_s1"
    },
    {
      "source": "cloud_root_p7_t4_s1",
      "target": "cloud_root_p7_t4_s1_d1"
    },
    {
      "source": "cloud_root_p7_t4_s1",
      "target": "cloud_root_p7_t4_s1_d2"
    },
    {
      "source": "cloud_root_p7_t4",
      "target": "cloud_root_p7_t4_s2"
    },
    {
      "source": "cloud_root_p7_t4_s2",
      "target": "cloud_root_p7_t4_s2_d1"
    },
    {
      "source": "cloud_root_p7_t4_s2",
      "target": "cloud_root_p7_t4_s2_d2"
    },
    {
      "source": "cloud_root_p7_t4",
      "target": "cloud_root_p7_t4_s3"
    },
    {
      "source": "cloud_root_p7_t4_s3",
      "target": "cloud_root_p7_t4_s3_d1"
    },
    {
      "source": "cloud_root_p7_t4_s3",
      "target": "cloud_root_p7_t4_s3_d2"
    },
    {
      "source": "cloud_root_p7_t4",
      "target": "cloud_root_p7_t4_s4"
    },
    {
      "source": "cloud_root_p7_t4_s4",
      "target": "cloud_root_p7_t4_s4_d1"
    },
    {
      "source": "cloud_root_p7_t4_s4",
      "target": "cloud_root_p7_t4_s4_d2"
    },
    {
      "source": "cloud_root_p7_t4",
      "target": "cloud_root_p7_t4_s5"
    },
    {
      "source": "cloud_root_p7_t4_s5",
      "target": "cloud_root_p7_t4_s5_d1"
    },
    {
      "source": "cloud_root_p7_t4_s5",
      "target": "cloud_root_p7_t4_s5_d2"
    },
    {
      "source": "cloud_root_p7",
      "target": "cloud_root_p7_t5"
    },
    {
      "source": "cloud_root_p7_t5",
      "target": "cloud_root_p7_t5_s1"
    },
    {
      "source": "cloud_root_p7_t5_s1",
      "target": "cloud_root_p7_t5_s1_d1"
    },
    {
      "source": "cloud_root_p7_t5_s1",
      "target": "cloud_root_p7_t5_s1_d2"
    },
    {
      "source": "cloud_root_p7_t5",
      "target": "cloud_root_p7_t5_s2"
    },
    {
      "source": "cloud_root_p7_t5_s2",
      "target": "cloud_root_p7_t5_s2_d1"
    },
    {
      "source": "cloud_root_p7_t5_s2",
      "target": "cloud_root_p7_t5_s2_d2"
    },
    {
      "source": "cloud_root_p7_t5",
      "target": "cloud_root_p7_t5_s3"
    },
    {
      "source": "cloud_root_p7_t5_s3",
      "target": "cloud_root_p7_t5_s3_d1"
    },
    {
      "source": "cloud_root_p7_t5_s3",
      "target": "cloud_root_p7_t5_s3_d2"
    },
    {
      "source": "cloud_root_p7_t5",
      "target": "cloud_root_p7_t5_s4"
    },
    {
      "source": "cloud_root_p7_t5_s4",
      "target": "cloud_root_p7_t5_s4_d1"
    },
    {
      "source": "cloud_root_p7_t5_s4",
      "target": "cloud_root_p7_t5_s4_d2"
    },
    {
      "source": "cloud_root_p7_t5",
      "target": "cloud_root_p7_t5_s5"
    },
    {
      "source": "cloud_root_p7_t5_s5",
      "target": "cloud_root_p7_t5_s5_d1"
    },
    {
      "source": "cloud_root_p7_t5_s5",
      "target": "cloud_root_p7_t5_s5_d2"
    },
    {
      "source": "cloud_root_p7",
      "target": "cloud_root_p7_t6"
    },
    {
      "source": "cloud_root_p7_t6",
      "target": "cloud_root_p7_t6_s1"
    },
    {
      "source": "cloud_root_p7_t6_s1",
      "target": "cloud_root_p7_t6_s1_d1"
    },
    {
      "source": "cloud_root_p7_t6_s1",
      "target": "cloud_root_p7_t6_s1_d2"
    },
    {
      "source": "cloud_root_p7_t6",
      "target": "cloud_root_p7_t6_s2"
    },
    {
      "source": "cloud_root_p7_t6_s2",
      "target": "cloud_root_p7_t6_s2_d1"
    },
    {
      "source": "cloud_root_p7_t6_s2",
      "target": "cloud_root_p7_t6_s2_d2"
    },
    {
      "source": "cloud_root_p7_t6",
      "target": "cloud_root_p7_t6_s3"
    },
    {
      "source": "cloud_root_p7_t6_s3",
      "target": "cloud_root_p7_t6_s3_d1"
    },
    {
      "source": "cloud_root_p7_t6_s3",
      "target": "cloud_root_p7_t6_s3_d2"
    },
    {
      "source": "cloud_root_p7_t6",
      "target": "cloud_root_p7_t6_s4"
    },
    {
      "source": "cloud_root_p7_t6_s4",
      "target": "cloud_root_p7_t6_s4_d1"
    },
    {
      "source": "cloud_root_p7_t6_s4",
      "target": "cloud_root_p7_t6_s4_d2"
    },
    {
      "source": "cloud_root_p7_t6",
      "target": "cloud_root_p7_t6_s5"
    },
    {
      "source": "cloud_root_p7_t6_s5",
      "target": "cloud_root_p7_t6_s5_d1"
    },
    {
      "source": "cloud_root_p7_t6_s5",
      "target": "cloud_root_p7_t6_s5_d2"
    },
    {
      "source": "cloud_root",
      "target": "cloud_root_p8"
    },
    {
      "source": "cloud_root_p8",
      "target": "cloud_root_p8_t1"
    },
    {
      "source": "cloud_root_p8_t1",
      "target": "cloud_root_p8_t1_s1"
    },
    {
      "source": "cloud_root_p8_t1_s1",
      "target": "cloud_root_p8_t1_s1_d1"
    },
    {
      "source": "cloud_root_p8_t1_s1",
      "target": "cloud_root_p8_t1_s1_d2"
    },
    {
      "source": "cloud_root_p8_t1",
      "target": "cloud_root_p8_t1_s2"
    },
    {
      "source": "cloud_root_p8_t1_s2",
      "target": "cloud_root_p8_t1_s2_d1"
    },
    {
      "source": "cloud_root_p8_t1_s2",
      "target": "cloud_root_p8_t1_s2_d2"
    },
    {
      "source": "cloud_root_p8_t1",
      "target": "cloud_root_p8_t1_s3"
    },
    {
      "source": "cloud_root_p8_t1_s3",
      "target": "cloud_root_p8_t1_s3_d1"
    },
    {
      "source": "cloud_root_p8_t1_s3",
      "target": "cloud_root_p8_t1_s3_d2"
    },
    {
      "source": "cloud_root_p8_t1",
      "target": "cloud_root_p8_t1_s4"
    },
    {
      "source": "cloud_root_p8_t1_s4",
      "target": "cloud_root_p8_t1_s4_d1"
    },
    {
      "source": "cloud_root_p8_t1_s4",
      "target": "cloud_root_p8_t1_s4_d2"
    },
    {
      "source": "cloud_root_p8_t1",
      "target": "cloud_root_p8_t1_s5"
    },
    {
      "source": "cloud_root_p8_t1_s5",
      "target": "cloud_root_p8_t1_s5_d1"
    },
    {
      "source": "cloud_root_p8_t1_s5",
      "target": "cloud_root_p8_t1_s5_d2"
    },
    {
      "source": "cloud_root_p8",
      "target": "cloud_root_p8_t2"
    },
    {
      "source": "cloud_root_p8_t2",
      "target": "cloud_root_p8_t2_s1"
    },
    {
      "source": "cloud_root_p8_t2_s1",
      "target": "cloud_root_p8_t2_s1_d1"
    },
    {
      "source": "cloud_root_p8_t2_s1",
      "target": "cloud_root_p8_t2_s1_d2"
    },
    {
      "source": "cloud_root_p8_t2",
      "target": "cloud_root_p8_t2_s2"
    },
    {
      "source": "cloud_root_p8_t2_s2",
      "target": "cloud_root_p8_t2_s2_d1"
    },
    {
      "source": "cloud_root_p8_t2_s2",
      "target": "cloud_root_p8_t2_s2_d2"
    },
    {
      "source": "cloud_root_p8_t2",
      "target": "cloud_root_p8_t2_s3"
    },
    {
      "source": "cloud_root_p8_t2_s3",
      "target": "cloud_root_p8_t2_s3_d1"
    },
    {
      "source": "cloud_root_p8_t2_s3",
      "target": "cloud_root_p8_t2_s3_d2"
    },
    {
      "source": "cloud_root_p8_t2",
      "target": "cloud_root_p8_t2_s4"
    },
    {
      "source": "cloud_root_p8_t2_s4",
      "target": "cloud_root_p8_t2_s4_d1"
    },
    {
      "source": "cloud_root_p8_t2_s4",
      "target": "cloud_root_p8_t2_s4_d2"
    },
    {
      "source": "cloud_root_p8_t2",
      "target": "cloud_root_p8_t2_s5"
    },
    {
      "source": "cloud_root_p8_t2_s5",
      "target": "cloud_root_p8_t2_s5_d1"
    },
    {
      "source": "cloud_root_p8_t2_s5",
      "target": "cloud_root_p8_t2_s5_d2"
    },
    {
      "source": "cloud_root_p8",
      "target": "cloud_root_p8_t3"
    },
    {
      "source": "cloud_root_p8_t3",
      "target": "cloud_root_p8_t3_s1"
    },
    {
      "source": "cloud_root_p8_t3_s1",
      "target": "cloud_root_p8_t3_s1_d1"
    },
    {
      "source": "cloud_root_p8_t3_s1",
      "target": "cloud_root_p8_t3_s1_d2"
    },
    {
      "source": "cloud_root_p8_t3",
      "target": "cloud_root_p8_t3_s2"
    },
    {
      "source": "cloud_root_p8_t3_s2",
      "target": "cloud_root_p8_t3_s2_d1"
    },
    {
      "source": "cloud_root_p8_t3_s2",
      "target": "cloud_root_p8_t3_s2_d2"
    },
    {
      "source": "cloud_root_p8_t3",
      "target": "cloud_root_p8_t3_s3"
    },
    {
      "source": "cloud_root_p8_t3_s3",
      "target": "cloud_root_p8_t3_s3_d1"
    },
    {
      "source": "cloud_root_p8_t3_s3",
      "target": "cloud_root_p8_t3_s3_d2"
    },
    {
      "source": "cloud_root_p8_t3",
      "target": "cloud_root_p8_t3_s4"
    },
    {
      "source": "cloud_root_p8_t3_s4",
      "target": "cloud_root_p8_t3_s4_d1"
    },
    {
      "source": "cloud_root_p8_t3_s4",
      "target": "cloud_root_p8_t3_s4_d2"
    },
    {
      "source": "cloud_root_p8_t3",
      "target": "cloud_root_p8_t3_s5"
    },
    {
      "source": "cloud_root_p8_t3_s5",
      "target": "cloud_root_p8_t3_s5_d1"
    },
    {
      "source": "cloud_root_p8_t3_s5",
      "target": "cloud_root_p8_t3_s5_d2"
    },
    {
      "source": "cloud_root_p8",
      "target": "cloud_root_p8_t4"
    },
    {
      "source": "cloud_root_p8_t4",
      "target": "cloud_root_p8_t4_s1"
    },
    {
      "source": "cloud_root_p8_t4_s1",
      "target": "cloud_root_p8_t4_s1_d1"
    },
    {
      "source": "cloud_root_p8_t4_s1",
      "target": "cloud_root_p8_t4_s1_d2"
    },
    {
      "source": "cloud_root_p8_t4",
      "target": "cloud_root_p8_t4_s2"
    },
    {
      "source": "cloud_root_p8_t4_s2",
      "target": "cloud_root_p8_t4_s2_d1"
    },
    {
      "source": "cloud_root_p8_t4_s2",
      "target": "cloud_root_p8_t4_s2_d2"
    },
    {
      "source": "cloud_root_p8_t4",
      "target": "cloud_root_p8_t4_s3"
    },
    {
      "source": "cloud_root_p8_t4_s3",
      "target": "cloud_root_p8_t4_s3_d1"
    },
    {
      "source": "cloud_root_p8_t4_s3",
      "target": "cloud_root_p8_t4_s3_d2"
    },
    {
      "source": "cloud_root_p8_t4",
      "target": "cloud_root_p8_t4_s4"
    },
    {
      "source": "cloud_root_p8_t4_s4",
      "target": "cloud_root_p8_t4_s4_d1"
    },
    {
      "source": "cloud_root_p8_t4_s4",
      "target": "cloud_root_p8_t4_s4_d2"
    },
    {
      "source": "cloud_root_p8_t4",
      "target": "cloud_root_p8_t4_s5"
    },
    {
      "source": "cloud_root_p8_t4_s5",
      "target": "cloud_root_p8_t4_s5_d1"
    },
    {
      "source": "cloud_root_p8_t4_s5",
      "target": "cloud_root_p8_t4_s5_d2"
    },
    {
      "source": "cloud_root_p8",
      "target": "cloud_root_p8_t5"
    },
    {
      "source": "cloud_root_p8_t5",
      "target": "cloud_root_p8_t5_s1"
    },
    {
      "source": "cloud_root_p8_t5_s1",
      "target": "cloud_root_p8_t5_s1_d1"
    },
    {
      "source": "cloud_root_p8_t5_s1",
      "target": "cloud_root_p8_t5_s1_d2"
    },
    {
      "source": "cloud_root_p8_t5",
      "target": "cloud_root_p8_t5_s2"
    },
    {
      "source": "cloud_root_p8_t5_s2",
      "target": "cloud_root_p8_t5_s2_d1"
    },
    {
      "source": "cloud_root_p8_t5_s2",
      "target": "cloud_root_p8_t5_s2_d2"
    },
    {
      "source": "cloud_root_p8_t5",
      "target": "cloud_root_p8_t5_s3"
    },
    {
      "source": "cloud_root_p8_t5_s3",
      "target": "cloud_root_p8_t5_s3_d1"
    },
    {
      "source": "cloud_root_p8_t5_s3",
      "target": "cloud_root_p8_t5_s3_d2"
    },
    {
      "source": "cloud_root_p8_t5",
      "target": "cloud_root_p8_t5_s4"
    },
    {
      "source": "cloud_root_p8_t5_s4",
      "target": "cloud_root_p8_t5_s4_d1"
    },
    {
      "source": "cloud_root_p8_t5_s4",
      "target": "cloud_root_p8_t5_s4_d2"
    },
    {
      "source": "cloud_root_p8_t5",
      "target": "cloud_root_p8_t5_s5"
    },
    {
      "source": "cloud_root_p8_t5_s5",
      "target": "cloud_root_p8_t5_s5_d1"
    },
    {
      "source": "cloud_root_p8_t5_s5",
      "target": "cloud_root_p8_t5_s5_d2"
    },
    {
      "source": "cloud_root_p8",
      "target": "cloud_root_p8_t6"
    },
    {
      "source": "cloud_root_p8_t6",
      "target": "cloud_root_p8_t6_s1"
    },
    {
      "source": "cloud_root_p8_t6_s1",
      "target": "cloud_root_p8_t6_s1_d1"
    },
    {
      "source": "cloud_root_p8_t6_s1",
      "target": "cloud_root_p8_t6_s1_d2"
    },
    {
      "source": "cloud_root_p8_t6",
      "target": "cloud_root_p8_t6_s2"
    },
    {
      "source": "cloud_root_p8_t6_s2",
      "target": "cloud_root_p8_t6_s2_d1"
    },
    {
      "source": "cloud_root_p8_t6_s2",
      "target": "cloud_root_p8_t6_s2_d2"
    },
    {
      "source": "cloud_root_p8_t6",
      "target": "cloud_root_p8_t6_s3"
    },
    {
      "source": "cloud_root_p8_t6_s3",
      "target": "cloud_root_p8_t6_s3_d1"
    },
    {
      "source": "cloud_root_p8_t6_s3",
      "target": "cloud_root_p8_t6_s3_d2"
    },
    {
      "source": "cloud_root_p8_t6",
      "target": "cloud_root_p8_t6_s4"
    },
    {
      "source": "cloud_root_p8_t6_s4",
      "target": "cloud_root_p8_t6_s4_d1"
    },
    {
      "source": "cloud_root_p8_t6_s4",
      "target": "cloud_root_p8_t6_s4_d2"
    },
    {
      "source": "cloud_root_p8_t6",
      "target": "cloud_root_p8_t6_s5"
    },
    {
      "source": "cloud_root_p8_t6_s5",
      "target": "cloud_root_p8_t6_s5_d1"
    },
    {
      "source": "cloud_root_p8_t6_s5",
      "target": "cloud_root_p8_t6_s5_d2"
    }
  ]
};
