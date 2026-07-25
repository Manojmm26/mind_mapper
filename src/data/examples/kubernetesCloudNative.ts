import { MindMapData } from "../../services/llmService";

export const KUBERNETES_CLOUD_NATIVE_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "k8s_root",
      "label": "Kubernetes Cloud Native Ecosystem",
      "description": "Kubernetes orchestration engine built on declarative state reconciliation, container runtimes, distributed consensus (etcd), and CNI/CSI standards.",
      "type": "topic"
    },
    {
      "id": "k8s_p1",
      "label": "Container Runtime & OCI",
      "description": "OCI specs define image format and runtime execution; containerd/CRI-O interface via CRI gRPC with kubelet.",
      "type": "concept"
    },
    {
      "id": "k8s_p2",
      "label": "Control Plane Internals",
      "description": "API server handles REST operations, etcd provides Raft-based CP state, controller-manager runs reconciliation loops.",
      "type": "concept"
    },
    {
      "id": "k8s_p3",
      "label": "Workload Resources",
      "description": "Higher-level APIs (Deployments, StatefulSets) manage Pod lifecycles, rollout strategies, and self-healing.",
      "type": "concept"
    },
    {
      "id": "k8s_p4",
      "label": "Networking",
      "description": "CNI plugins manage pod network namespaces; kube-proxy implements Service load balancing via iptables/IPVS/eBPF.",
      "type": "concept"
    },
    {
      "id": "k8s_p5",
      "label": "Storage (CSI)",
      "description": "Container Storage Interface decouples in-tree volume plugins; drivers implement Controller/Node RPCs for attach/mount.",
      "type": "concept"
    },
    {
      "id": "k8s_p6",
      "label": "Security",
      "description": "RBAC controls API access; Pod Security Admission enforces pod capabilities; network policies isolate L3/L4 traffic.",
      "type": "concept"
    },
    {
      "id": "k8s_p7",
      "label": "Observability",
      "description": "Prometheus collects time-series metrics via pull model; OpenTelemetry standardizes tracing; Loki handles log aggregation.",
      "type": "concept"
    },
    {
      "id": "k8s_p8",
      "label": "Operators, Helm & GitOps",
      "description": "Custom Resource Definitions extend APIs; GitOps controllers (ArgoCD/Flux) sync cluster state from Git repositories.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t1",
      "label": "OCI Image Spec",
      "description": "OCI image manifest: schemaVersion+mediaType+config(digest+size)+layers[]; image index multi-arch selects by os/arch.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t1_s1",
      "label": "Image Manifest",
      "description": "JSON document defining the layers and configuration of a single architecture container image.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t1_s1_d1",
      "label": "Image Manifest Detail 1",
      "description": "For Image Manifest implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t1_s1_d2",
      "label": "Image Manifest Detail 2",
      "description": "Image Manifest components in Container Runtime & OCI serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t1_s2",
      "label": "Image Index",
      "description": "Maps platform (os/amd64, os/arm64) to specific image manifests for multi-arch support.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t1_s2_d1",
      "label": "Image Index Detail 1",
      "description": "The API representation of Image Index reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t1_s2_d2",
      "label": "Image Index Detail 2",
      "description": "In the context of OCI Image Spec, Image Index allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t1_s3",
      "label": "Layer Digests",
      "description": "SHA256 hashes of tar archives representing filesystem changes; enables content-addressable storage.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t1_s3_d1",
      "label": "Layer Digests Detail 1",
      "description": "The kubelet calculates pod eviction thresholds by monitoring memory.available and nodefs.available metrics scraped directly from cAdvisor.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t1_s3_d2",
      "label": "Layer Digests Detail 2",
      "description": "The API representation of Layer Digests reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t1_s4",
      "label": "Image Config",
      "description": "Specifies entrypoint, cmd, environment variables, and working directory applied at runtime.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t1_s4_d1",
      "label": "Image Config Detail 1",
      "description": "Image Config components in Container Runtime & OCI serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t1_s4_d2",
      "label": "Image Config Detail 2",
      "description": "For Image Config implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t1_s5",
      "label": "Media Types",
      "description": "application/vnd.oci.image.manifest.v1+json identifies OCI compliant manifests vs Docker schema v2.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t1_s5_d1",
      "label": "Media Types Detail 1",
      "description": "When evaluating Media Types, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t1_s5_d2",
      "label": "Media Types Detail 2",
      "description": "When a Pod is deleted, its deletionTimestamp is set, and it remains in Terminating state until all finalizers are removed by their respective controllers.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t2",
      "label": "containerd & Snapshotters",
      "description": "containerd overlayfs snapshotter: lowerdir=image layers, upperdir=writable container layer, workdir=temp.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t2_s1",
      "label": "OverlayFS Lowerdir",
      "description": "Read-only base image layers mounted via overlayfs; changes are prohibited directly on these files.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t2_s1_d1",
      "label": "OverlayFS Lowerdir Detail 1",
      "description": "The API representation of OverlayFS Lowerdir reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t2_s1_d2",
      "label": "OverlayFS Lowerdir Detail 2",
      "description": "Under the hood, OverlayFS Lowerdir relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t2_s2",
      "label": "OverlayFS Upperdir",
      "description": "Writable container layer where modified or newly created files reside during container execution.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t2_s2_d1",
      "label": "OverlayFS Upperdir Detail 1",
      "description": "Native OverlayFS Upperdir behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t2_s2_d2",
      "label": "OverlayFS Upperdir Detail 2",
      "description": "OverlayFS Upperdir components in Container Runtime & OCI serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t2_s3",
      "label": "containerd-shim",
      "description": "containerd-shim-runc-v2 process stays alive per pod, decouples container lifecycle from containerd restart.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t2_s3_d1",
      "label": "containerd-shim Detail 1",
      "description": "HorizontalPodAutoscaler queries the metrics.k8s.io API (served by metrics-server) for CPU/memory, or custom.metrics.k8s.io for Prometheus adapter metrics.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t2_s3_d2",
      "label": "containerd-shim Detail 2",
      "description": "Native containerd-shim behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t2_s4",
      "label": "Snapshotter API",
      "description": "Pluggable storage backend interface for containerd; alternatives include btrfs, zfs, and devmapper.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t2_s4_d1",
      "label": "Snapshotter API Detail 1",
      "description": "The Snapshotter API reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t2_s4_d2",
      "label": "Snapshotter API Detail 2",
      "description": "In the context of containerd & Snapshotters, Snapshotter API allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t2_s5",
      "label": "Garbage Collection",
      "description": "containerd automatically removes unused snapshots and blobs based on reference counting and leases.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t2_s5_d1",
      "label": "Garbage Collection Detail 1",
      "description": "The API representation of Garbage Collection reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t2_s5_d2",
      "label": "Garbage Collection Detail 2",
      "description": "Taints use the NoExecute effect to immediately evict running pods that lack a matching toleration, whereas NoSchedule only prevents new assignments.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t3",
      "label": "CRI & runc",
      "description": "CRI: kubelet calls RunPodSandbox->CreateContainer->StartContainer via gRPC to container runtime.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t3_s1",
      "label": "RunPodSandbox",
      "description": "CRI RPC that sets up the pod network namespace and cgroup sandbox before any app container starts.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t3_s1_d1",
      "label": "RunPodSandbox Detail 1",
      "description": "Native RunPodSandbox behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t3_s1_d2",
      "label": "RunPodSandbox Detail 2",
      "description": "The API representation of RunPodSandbox reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t3_s2",
      "label": "CreateContainer",
      "description": "CRI RPC that prepares the root filesystem and configures the container execution parameters.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t3_s2_d1",
      "label": "CreateContainer Detail 1",
      "description": "The API representation of CreateContainer reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t3_s2_d2",
      "label": "CreateContainer Detail 2",
      "description": "Native CreateContainer behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t3_s3",
      "label": "runc Namespaces",
      "description": "runc creates namespaces via clone(CLONE_NEWPID|CLONE_NEWNET|CLONE_NEWNS|CLONE_NEWUTS|CLONE_NEWIPC).",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t3_s3_d1",
      "label": "runc Namespaces Detail 1",
      "description": "ServiceAccounts automatically create a projected volume in k8s 1.21+ which mounts short-lived, auto-rotating tokens instead of static Secret-based tokens.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t3_s3_d2",
      "label": "runc Namespaces Detail 2",
      "description": "Native runc Namespaces behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t3_s4",
      "label": "cgroup integration",
      "description": "runc joins the specified cgroup before executing the container process to enforce resource limits.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t3_s4_d1",
      "label": "cgroup integration Detail 1",
      "description": "The cgroup integration reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t3_s4_d2",
      "label": "cgroup integration Detail 2",
      "description": "Under the hood, cgroup integration relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t3_s5",
      "label": "ExecSync",
      "description": "Synchronous CRI endpoint for running commands inside an existing container, used by kubectl exec.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t3_s5_d1",
      "label": "ExecSync Detail 1",
      "description": "Under the hood, ExecSync relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t3_s5_d2",
      "label": "ExecSync Detail 2",
      "description": "The Node authorization mode explicitly limits kubelet access, only allowing it to read Secrets/ConfigMaps bound to Pods actually scheduled on that specific node.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t4",
      "label": "Rootless Containers",
      "description": "newuidmap maps UID 0 inside container to host UID 100000+ via /etc/subuid; no privileged operations.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t4_s1",
      "label": "User Namespaces",
      "description": "Isolates user and group IDs; UID 0 in the container acts as an unprivileged user on the host.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t4_s1_d1",
      "label": "User Namespaces Detail 1",
      "description": "For User Namespaces implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t4_s1_d2",
      "label": "User Namespaces Detail 2",
      "description": "Native User Namespaces behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t4_s2",
      "label": "/etc/subuid",
      "description": "System file defining the range of subordinate user IDs assigned to a host user for mapping.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t4_s2_d1",
      "label": "/etc/subuid Detail 1",
      "description": "/etc/subuid components in Container Runtime & OCI serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t4_s2_d2",
      "label": "/etc/subuid Detail 2",
      "description": "Native /etc/subuid behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t4_s3",
      "label": "RootlessKit",
      "description": "Utility that sets up the user namespaces and network namespace for rootless container runtimes.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t4_s3_d1",
      "label": "RootlessKit Detail 1",
      "description": "Ephemeral containers are injected into running pods via the /ephemeralcontainers subresource and do not trigger a pod restart; they lack ports or resources.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t4_s3_d2",
      "label": "RootlessKit Detail 2",
      "description": "In the context of Rootless Containers, RootlessKit allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t4_s4",
      "label": "Network limitations",
      "description": "Rootless containers often use slirp4netns or VPNKit instead of veth pairs due to lack of CAP_NET_ADMIN.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t4_s4_d1",
      "label": "Network limitations Detail 1",
      "description": "Under the hood, Network limitations relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t4_s4_d2",
      "label": "Network limitations Detail 2",
      "description": "Native Network limitations behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t4_s5",
      "label": "Cgroup v2 requirement",
      "description": "Rootless resource limitation (CPU/memory) relies on cgroup v2 delegation via systemd user sessions.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t4_s5_d1",
      "label": "Cgroup v2 requirement Detail 1",
      "description": "Under the hood, Cgroup v2 requirement relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t4_s5_d2",
      "label": "Cgroup v2 requirement Detail 2",
      "description": "When externalTrafficPolicy is set to Local on a LoadBalancer Service, kube-proxy drops packets arriving on nodes that do not host a ready endpoint pod.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t5",
      "label": "gVisor & Kata",
      "description": "gVisor Sentry: Go-based kernel handles syscalls, host kernel never sees guest syscalls.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t5_s1",
      "label": "gVisor Sentry",
      "description": "User-space kernel written in Go that intercepts and implements Linux syscalls for sandboxed processes.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t5_s1_d1",
      "label": "gVisor Sentry Detail 1",
      "description": "Under the hood, gVisor Sentry relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t5_s1_d2",
      "label": "gVisor Sentry Detail 2",
      "description": "When evaluating gVisor Sentry, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t5_s2",
      "label": "gVisor Gofer",
      "description": "File proxy process in gVisor that mediates access to the host filesystem to prevent escapes.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t5_s2_d1",
      "label": "gVisor Gofer Detail 1",
      "description": "In the context of gVisor & Kata, gVisor Gofer allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t5_s2_d2",
      "label": "gVisor Gofer Detail 2",
      "description": "For gVisor Gofer implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t5_s3",
      "label": "Kata Micro-VMs",
      "description": "Kata: QEMU micro-VM per pod, kata-agent inside VM serves CRI gRPC requests.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t5_s3_d1",
      "label": "Kata Micro-VMs Detail 1",
      "description": "The apiserver's max-mutating-requests-inflight flag (default 200) prevents overload by rate-limiting incoming POST/PUT/PATCH requests before admission.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t5_s3_d2",
      "label": "Kata Micro-VMs Detail 2",
      "description": "Under the hood, Kata Micro-VMs relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t5_s4",
      "label": "virtio-fs",
      "description": "Shared file system standard used by Kata to mount host directories into the guest micro-VM efficiently.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t5_s4_d1",
      "label": "virtio-fs Detail 1",
      "description": "For virtio-fs implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t5_s4_d2",
      "label": "virtio-fs Detail 2",
      "description": "When evaluating virtio-fs, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t5_s5",
      "label": "virtio-vsock",
      "description": "Zero-configuration socket connection for CRI communication between host kata-runtime and guest kata-agent.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t5_s5_d1",
      "label": "virtio-vsock Detail 1",
      "description": "When evaluating virtio-vsock, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t5_s5_d2",
      "label": "virtio-vsock Detail 2",
      "description": "A PodDisruptionBudget (PDB) blocks the Eviction API from removing a pod (e.g., during node drain) if it would drop available replicas below minAvailable.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t6",
      "label": "Image Building",
      "description": "Buildkit: content-addressable cache, --mount=type=cache persists /root/.cache across builds.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t6_s1",
      "label": "Parallel Stage Execution",
      "description": "BuildKit builds independent multi-stage targets concurrently by analyzing the dependency DAG.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t6_s1_d1",
      "label": "Parallel Stage Execution Detail 1",
      "description": "Under the hood, Parallel Stage Execution relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t6_s1_d2",
      "label": "Parallel Stage Execution Detail 2",
      "description": "The Parallel Stage Execution reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t6_s2",
      "label": "Cache Mounts",
      "description": "RUN --mount=type=cache persists package manager caches (like npm or apt) across different build invocations.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t6_s2_d1",
      "label": "Cache Mounts Detail 1",
      "description": "Under the hood, Cache Mounts relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t6_s2_d2",
      "label": "Cache Mounts Detail 2",
      "description": "For Cache Mounts implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t6_s3",
      "label": "Secret Mounts",
      "description": "RUN --mount=type=secret allows accessing credentials during build without leaving them in the final image layers.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t6_s3_d1",
      "label": "Secret Mounts Detail 1",
      "description": "The kube-scheduler's DefaultPreemption plugin evicts lower-priority pods to make room for a Pending pod with higher PriorityClass value.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t6_s3_d2",
      "label": "Secret Mounts Detail 2",
      "description": "The API representation of Secret Mounts reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t6_s4",
      "label": "Content-Addressable Cache",
      "description": "BuildKit identifies cache hits by hashing the exact build inputs rather than relying solely on instruction order.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t6_s4_d1",
      "label": "Content-Addressable Cache Detail 1",
      "description": "Native Content-Addressable Cache behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t6_s4_d2",
      "label": "Content-Addressable Cache Detail 2",
      "description": "When evaluating Content-Addressable Cache, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t6_s5",
      "label": "Remote Cache Export",
      "description": "BuildKit can push cache manifests and blobs to an external registry via --export-cache type=registry.",
      "type": "concept"
    },
    {
      "id": "k8s_p1_t6_s5_d1",
      "label": "Remote Cache Export Detail 1",
      "description": "The API representation of Remote Cache Export reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p1_t6_s5_d2",
      "label": "Remote Cache Export Detail 2",
      "description": "Secret data is base64 encoded in YAML manifests but is stored in plain-text (or encrypted via KMS) inside the etcd database.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t1",
      "label": "API Server Request Flow",
      "description": "API server authn: x509 client cert CN=username, Bearer token JWT, OIDC id_token validated against issuer JWKS.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t1_s1",
      "label": "X.509 Authentication",
      "description": "Extracts username from Subject Common Name (CN) and group memberships from Organization (O) fields.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t1_s1_d1",
      "label": "X.509 Authentication Detail 1",
      "description": "Native X.509 Authentication behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t1_s1_d2",
      "label": "X.509 Authentication Detail 2",
      "description": "The X.509 Authentication reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t1_s2",
      "label": "OIDC Integration",
      "description": "Validates JWT id_tokens using the OIDC discovery endpoint and JWKS signatures from external identity providers.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t1_s2_d1",
      "label": "OIDC Integration Detail 1",
      "description": "When evaluating OIDC Integration, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t1_s2_d2",
      "label": "OIDC Integration Detail 2",
      "description": "The OIDC Integration reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t1_s3",
      "label": "MutatingAdmissionWebhook",
      "description": "MutatingAdmissionWebhook: called with AdmissionReview, returns patches as JSON patch array to modify objects.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t1_s3_d1",
      "label": "MutatingAdmissionWebhook Detail 1",
      "description": "EndpointSlice objects limit the number of endpoints to 100 by default; this prevents the massive etcd payload sizes caused by monolithic Endpoints resources.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t1_s3_d2",
      "label": "MutatingAdmissionWebhook Detail 2",
      "description": "For MutatingAdmissionWebhook implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t1_s4",
      "label": "ValidatingAdmissionWebhook",
      "description": "Validates constraints after mutation; rejects the request entirely if the final object violates policies.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t1_s4_d1",
      "label": "ValidatingAdmissionWebhook Detail 1",
      "description": "Native ValidatingAdmissionWebhook behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t1_s4_d2",
      "label": "ValidatingAdmissionWebhook Detail 2",
      "description": "Under the hood, ValidatingAdmissionWebhook relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t1_s5",
      "label": "Optimistic Concurrency",
      "description": "Updates require the resourceVersion to match etcd to prevent race conditions during concurrent modifications.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t1_s5_d1",
      "label": "Optimistic Concurrency Detail 1",
      "description": "When evaluating Optimistic Concurrency, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t1_s5_d2",
      "label": "Optimistic Concurrency Detail 2",
      "description": "A headless service creates a DNS A/AAAA record for every Ready pod backing the service, bypassing the kube-proxy virtual IP layer entirely.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t2",
      "label": "etcd Raft",
      "description": "etcd Raft: leader sends AppendEntries heartbeat every 100ms; entry committed after majority acknowledges.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t2_s1",
      "label": "Raft Leader Election",
      "description": "Followers transition to candidate state if no heartbeat is received within the randomized election timeout.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t2_s1_d1",
      "label": "Raft Leader Election Detail 1",
      "description": "In the context of etcd Raft, Raft Leader Election allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t2_s1_d2",
      "label": "Raft Leader Election Detail 2",
      "description": "For Raft Leader Election implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t2_s2",
      "label": "AppendEntries RPC",
      "description": "Leader replicates log entries to followers; entry is only applied to state machine after majority quorum (floor(N/2)+1).",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t2_s2_d1",
      "label": "AppendEntries RPC Detail 1",
      "description": "Under the hood, AppendEntries RPC relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t2_s2_d2",
      "label": "AppendEntries RPC Detail 2",
      "description": "The API representation of AppendEntries RPC reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t2_s3",
      "label": "etcd WAL (Write-Ahead Log)",
      "description": "Append-only journal segments where raft proposals are durably written before being applied or acknowledged.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t2_s3_d1",
      "label": "etcd WAL (Write-Ahead Log) Detail 1",
      "description": "Kubelet's topology manager aligns CPU, memory, and device allocations (like GPUs) to the same NUMA node to maximize cache performance.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t2_s3_d2",
      "label": "etcd WAL (Write-Ahead Log) Detail 2",
      "description": "Under the hood, etcd WAL (Write-Ahead Log) relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t2_s4",
      "label": "MVCC & boltdb",
      "description": "etcd stores key-value pairs in a b+tree boltdb; maintains multiple revisions of keys for watch events.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t2_s4_d1",
      "label": "MVCC & boltdb Detail 1",
      "description": "Under the hood, MVCC & boltdb relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t2_s4_d2",
      "label": "MVCC & boltdb Detail 2",
      "description": "When evaluating MVCC & boltdb, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t2_s5",
      "label": "Snapshot Compaction",
      "description": "Periodically compacts history by saving current state and discarding old WAL segments to reclaim disk space.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t2_s5_d1",
      "label": "Snapshot Compaction Detail 1",
      "description": "Under the hood, Snapshot Compaction relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t2_s5_d2",
      "label": "Snapshot Compaction Detail 2",
      "description": "The subPath field in a volume mount allows mounting a single file or directory from a ConfigMap/PVC without shadowing the entire destination directory.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t3",
      "label": "Scheduler Framework",
      "description": "QueueSort->PreFilter->Filter->PostFilter->PreScore->Score->Reserve->Permit->Bind.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t3_s1",
      "label": "Filter Plugins",
      "description": "Evaluates hard constraints like nodeSelector, taints/tolerations, and resource requests to eliminate invalid nodes.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t3_s1_d1",
      "label": "Filter Plugins Detail 1",
      "description": "When evaluating Filter Plugins, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t3_s1_d2",
      "label": "Filter Plugins Detail 2",
      "description": "Under the hood, Filter Plugins relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t3_s2",
      "label": "Score Plugins",
      "description": "Ranks feasible nodes; Score plugins return 0-100, normalized to MaxNodeScore for the final ranking.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t3_s2_d1",
      "label": "Score Plugins Detail 1",
      "description": "Score Plugins components in Control Plane Internals serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t3_s2_d2",
      "label": "Score Plugins Detail 2",
      "description": "The API representation of Score Plugins reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t3_s3",
      "label": "NodeAffinity Scoring",
      "description": "Calculates weight based on preferredDuringSchedulingIgnoredDuringExecution node affinity rules.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t3_s3_d1",
      "label": "NodeAffinity Scoring Detail 1",
      "description": "Downward API can expose pod annotations, labels, and resource limits (requests.cpu, limits.memory) as environment variables via fieldRef.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t3_s3_d2",
      "label": "NodeAffinity Scoring Detail 2",
      "description": "The NodeAffinity Scoring reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t3_s4",
      "label": "PodTopologySpread",
      "description": "Ensures pods are distributed evenly across zones/nodes based on maxSkew and topologyKey constraints.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t3_s4_d1",
      "label": "PodTopologySpread Detail 1",
      "description": "PodTopologySpread components in Control Plane Internals serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t3_s4_d2",
      "label": "PodTopologySpread Detail 2",
      "description": "When evaluating PodTopologySpread, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t3_s5",
      "label": "Bind Plugin",
      "description": "Issues the API call to update the Pod object with the selected nodeName, committing the scheduling decision.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t3_s5_d1",
      "label": "Bind Plugin Detail 1",
      "description": "Bind Plugin components in Control Plane Internals serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t3_s5_d2",
      "label": "Bind Plugin Detail 2",
      "description": "A static pod is managed directly by the kubelet from a manifest file in /etc/kubernetes/manifests, bypassing the kube-scheduler completely.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t4",
      "label": "Controller Manager",
      "description": "kube-controller-manager runs 30+ controllers; informer pattern: ListWatch API server -> local indexer cache.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t4_s1",
      "label": "Deployment Controller",
      "description": "Watches Deployments, creates/scales ReplicaSets to match spec.replicas during rollouts.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t4_s1_d1",
      "label": "Deployment Controller Detail 1",
      "description": "In the context of Controller Manager, Deployment Controller allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t4_s1_d2",
      "label": "Deployment Controller Detail 2",
      "description": "The API representation of Deployment Controller reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t4_s2",
      "label": "Informer Pattern",
      "description": "Efficiently synchronizes object state using List/Watch APIs to maintain an in-memory thread-safe cache.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t4_s2_d1",
      "label": "Informer Pattern Detail 1",
      "description": "Under the hood, Informer Pattern relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t4_s2_d2",
      "label": "Informer Pattern Detail 2",
      "description": "The Informer Pattern reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t4_s3",
      "label": "Workqueue",
      "description": "Event handler queues item keys; reconcile loop processes keys with rate-limiting and exponential backoff on errors.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t4_s3_d1",
      "label": "Workqueue Detail 1",
      "description": "ClusterRole bindings to the system:anonymous user expose API endpoints unauthenticated, a common misconfiguration leading to cluster takeover.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t4_s3_d2",
      "label": "Workqueue Detail 2",
      "description": "When evaluating Workqueue, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t4_s4",
      "label": "Garbage Collector Controller",
      "description": "Uses ownerReferences to cascade deletion; deletes dependent objects when the owner is deleted (e.g., Pods of a ReplicaSet).",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t4_s4_d1",
      "label": "Garbage Collector Controller Detail 1",
      "description": "Garbage Collector Controller components in Control Plane Internals serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t4_s4_d2",
      "label": "Garbage Collector Controller Detail 2",
      "description": "For Garbage Collector Controller implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t4_s5",
      "label": "EndpointSlice Controller",
      "description": "Watches Services and Pods; dynamically groups Pod IPs into EndpointSlice objects to avoid large Endpoint updates.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t4_s5_d1",
      "label": "EndpointSlice Controller Detail 1",
      "description": "EndpointSlice Controller components in Control Plane Internals serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t4_s5_d2",
      "label": "EndpointSlice Controller Detail 2",
      "description": "Setting spec.shareProcessNamespace=true allows containers in a pod to see each other's processes via ptrace, useful for sidecar debugging.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t5",
      "label": "Cloud Controller",
      "description": "cloud-controller-manager: NodeController checks cloud instance exists, RouteController manages VPC routes.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t5_s1",
      "label": "Node Lifecycle",
      "description": "NodeController periodically polls the cloud provider API to delete Kubernetes Node objects if the VM is terminated.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t5_s1_d1",
      "label": "Node Lifecycle Detail 1",
      "description": "Node Lifecycle components in Control Plane Internals serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t5_s1_d2",
      "label": "Node Lifecycle Detail 2",
      "description": "Node Lifecycle components in Control Plane Internals serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t5_s2",
      "label": "ServiceController",
      "description": "Watches Services of type LoadBalancer; calls cloud API to provision external LBs and configure target groups.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t5_s2_d1",
      "label": "ServiceController Detail 1",
      "description": "When evaluating ServiceController, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t5_s2_d2",
      "label": "ServiceController Detail 2",
      "description": "When evaluating ServiceController, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t5_s3",
      "label": "RouteController",
      "description": "Configures cloud VPC routing tables to ensure Pod CIDRs are routable across the cluster network.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t5_s3_d1",
      "label": "RouteController Detail 1",
      "description": "The kubelet calculates pod eviction thresholds by monitoring memory.available and nodefs.available metrics scraped directly from cAdvisor.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t5_s3_d2",
      "label": "RouteController Detail 2",
      "description": "Native RouteController behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t5_s4",
      "label": "Volume Lifecycle",
      "description": "Legacy in-tree cloud storage provisioners; mostly migrated to external CSI controllers now.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t5_s4_d1",
      "label": "Volume Lifecycle Detail 1",
      "description": "The Volume Lifecycle reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t5_s4_d2",
      "label": "Volume Lifecycle Detail 2",
      "description": "The Volume Lifecycle reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t5_s5",
      "label": "Cloud API Rate Limits",
      "description": "Implements caching and batching to avoid hitting cloud provider API rate limits during large cluster autoscaling events.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t5_s5_d1",
      "label": "Cloud API Rate Limits Detail 1",
      "description": "The API representation of Cloud API Rate Limits reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t5_s5_d2",
      "label": "Cloud API Rate Limits Detail 2",
      "description": "When a Pod is deleted, its deletionTimestamp is set, and it remains in Terminating state until all finalizers are removed by their respective controllers.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t6",
      "label": "Leader Election",
      "description": "Lease object in kube-system, holder renews every leaseDurationSeconds=15s, retries every retryPeriod=2s.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t6_s1",
      "label": "Lease API Object",
      "description": "Lightweight coordination primitive in the coordination.k8s.io group used exclusively for locking.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t6_s1_d1",
      "label": "Lease API Object Detail 1",
      "description": "When evaluating Lease API Object, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t6_s1_d2",
      "label": "Lease API Object Detail 2",
      "description": "The Lease API Object reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t6_s2",
      "label": "RenewDeadline",
      "description": "If the active leader fails to renew the Lease before this deadline, it steps down.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t6_s2_d1",
      "label": "RenewDeadline Detail 1",
      "description": "For RenewDeadline implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t6_s2_d2",
      "label": "RenewDeadline Detail 2",
      "description": "When evaluating RenewDeadline, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t6_s3",
      "label": "Optimistic Locking Update",
      "description": "Leader attempts to update Lease; fails if resourceVersion changed, preventing split-brain.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t6_s3_d1",
      "label": "Optimistic Locking Update Detail 1",
      "description": "HorizontalPodAutoscaler queries the metrics.k8s.io API (served by metrics-server) for CPU/memory, or custom.metrics.k8s.io for Prometheus adapter metrics.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t6_s3_d2",
      "label": "Optimistic Locking Update Detail 2",
      "description": "When evaluating Optimistic Locking Update, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t6_s4",
      "label": "Controller HA",
      "description": "kube-scheduler and kube-controller-manager run active-passive setups relying on this lease mechanism.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t6_s4_d1",
      "label": "Controller HA Detail 1",
      "description": "The Controller HA reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t6_s4_d2",
      "label": "Controller HA Detail 2",
      "description": "When evaluating Controller HA, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t6_s5",
      "label": "Client-go Leaderelection",
      "description": "Standard Go library package providing the leaderelection.RunOrDie loop used by most Kubernetes operators.",
      "type": "concept"
    },
    {
      "id": "k8s_p2_t6_s5_d1",
      "label": "Client-go Leaderelection Detail 1",
      "description": "When evaluating Client-go Leaderelection, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p2_t6_s5_d2",
      "label": "Client-go Leaderelection Detail 2",
      "description": "Taints use the NoExecute effect to immediately evict running pods that lack a matching toleration, whereas NoSchedule only prevents new assignments.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t1",
      "label": "Pod Lifecycle & QoS",
      "description": "Pod QoS: Guaranteed requires requests==limits for ALL containers including init; BestEffort has NO requests/limits.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t1_s1",
      "label": "OOM Killer Behavior",
      "description": "OOM killer evicts BestEffort first, then Burstable, never Guaranteed unless it exceeds its own strict limit.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t1_s1_d1",
      "label": "OOM Killer Behavior Detail 1",
      "description": "OOM Killer Behavior components in Workload Resources serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t1_s1_d2",
      "label": "OOM Killer Behavior Detail 2",
      "description": "Native OOM Killer Behavior behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t1_s2",
      "label": "Init Containers",
      "description": "Init containers run sequentially; if any fails, pod restarts from failed init container (restartPolicy=Always).",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t1_s2_d1",
      "label": "Init Containers Detail 1",
      "description": "The Init Containers reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t1_s2_d2",
      "label": "Init Containers Detail 2",
      "description": "Native Init Containers behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t1_s3",
      "label": "App Container Startup",
      "description": "App containers don't start until all inits succeed; used for DB migrations or waiting for dependencies.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t1_s3_d1",
      "label": "App Container Startup Detail 1",
      "description": "ServiceAccounts automatically create a projected volume in k8s 1.21+ which mounts short-lived, auto-rotating tokens instead of static Secret-based tokens.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t1_s3_d2",
      "label": "App Container Startup Detail 2",
      "description": "When evaluating App Container Startup, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t1_s4",
      "label": "PreStop Hook",
      "description": "Executes before SIGTERM; blocks pod termination until it completes or terminationGracePeriodSeconds expires.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t1_s4_d1",
      "label": "PreStop Hook Detail 1",
      "description": "When evaluating PreStop Hook, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t1_s4_d2",
      "label": "PreStop Hook Detail 2",
      "description": "For PreStop Hook implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t1_s5",
      "label": "Readiness Probe",
      "description": "Determines if a pod is added to Service endpoints; failing it stops traffic but does not restart the container.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t1_s5_d1",
      "label": "Readiness Probe Detail 1",
      "description": "Under the hood, Readiness Probe relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t1_s5_d2",
      "label": "Readiness Probe Detail 2",
      "description": "The Node authorization mode explicitly limits kubelet access, only allowing it to read Secrets/ConfigMaps bound to Pods actually scheduled on that specific node.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t2",
      "label": "Deployments & Rolling Updates",
      "description": "Deployment rolling update: kubectl rollout status watches ReplicaSet old->new ratio; maxSurge/maxUnavailable.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t2_s1",
      "label": "maxSurge",
      "description": "maxSurge=1 means 1 extra pod can be created above desired replicas during a rolling update.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t2_s1_d1",
      "label": "maxSurge Detail 1",
      "description": "Native maxSurge behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t2_s1_d2",
      "label": "maxSurge Detail 2",
      "description": "The maxSurge reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t2_s2",
      "label": "maxUnavailable",
      "description": "maxUnavailable=0 means zero downtime rollout; all original pods must be running while new ones spin up.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t2_s2_d1",
      "label": "maxUnavailable Detail 1",
      "description": "Native maxUnavailable behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t2_s2_d2",
      "label": "maxUnavailable Detail 2",
      "description": "Under the hood, maxUnavailable relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t2_s3",
      "label": "ReplicaSet Hashing",
      "description": "Deployment creates ReplicaSets named with a pod-template-hash label based on the pod spec.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t2_s3_d1",
      "label": "ReplicaSet Hashing Detail 1",
      "description": "Ephemeral containers are injected into running pods via the /ephemeralcontainers subresource and do not trigger a pod restart; they lack ports or resources.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t2_s3_d2",
      "label": "ReplicaSet Hashing Detail 2",
      "description": "Under the hood, ReplicaSet Hashing relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t2_s4",
      "label": "Rollback Mechanism",
      "description": "Keeps revisionHistoryLimit old ReplicaSets scaled to 0; rollout undo scales back the previous ReplicaSet.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t2_s4_d1",
      "label": "Rollback Mechanism Detail 1",
      "description": "Native Rollback Mechanism behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t2_s4_d2",
      "label": "Rollback Mechanism Detail 2",
      "description": "Rollback Mechanism components in Workload Resources serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t2_s5",
      "label": "Progress Deadline",
      "description": "progressDeadlineSeconds aborts the rollout if new pods fail to become ready within the timeframe.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t2_s5_d1",
      "label": "Progress Deadline Detail 1",
      "description": "The Progress Deadline reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t2_s5_d2",
      "label": "Progress Deadline Detail 2",
      "description": "When externalTrafficPolicy is set to Local on a LoadBalancer Service, kube-proxy drops packets arriving on nodes that do not host a ready endpoint pod.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t3",
      "label": "StatefulSets",
      "description": "StatefulSet stable identity: pod-0 DNS = pod-0.headless-svc.namespace.svc.cluster.local.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t3_s1",
      "label": "Stable Network Identity",
      "description": "Provides predictable, ordinal-based hostnames that persist across pod rescheduling.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t3_s1_d1",
      "label": "Stable Network Identity Detail 1",
      "description": "In the context of StatefulSets, Stable Network Identity allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t3_s1_d2",
      "label": "Stable Network Identity Detail 2",
      "description": "Native Stable Network Identity behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t3_s2",
      "label": "Volume Claim Templates",
      "description": "PVCs named data-pod-0 persist across pod restarts; dynamically provisions unique volumes per ordinal.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t3_s2_d1",
      "label": "Volume Claim Templates Detail 1",
      "description": "Under the hood, Volume Claim Templates relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t3_s2_d2",
      "label": "Volume Claim Templates Detail 2",
      "description": "Volume Claim Templates components in Workload Resources serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t3_s3",
      "label": "Ordered Startup",
      "description": "pod-1 will not start until pod-0 is running and ready; ensures safe cluster bootstrapping.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t3_s3_d1",
      "label": "Ordered Startup Detail 1",
      "description": "The apiserver's max-mutating-requests-inflight flag (default 200) prevents overload by rate-limiting incoming POST/PUT/PATCH requests before admission.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t3_s3_d2",
      "label": "Ordered Startup Detail 2",
      "description": "Native Ordered Startup behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t3_s4",
      "label": "Ordered Termination",
      "description": "Scale down deletes highest ordinal first; gracefully removes members from distributed systems.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t3_s4_d1",
      "label": "Ordered Termination Detail 1",
      "description": "Native Ordered Termination behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t3_s4_d2",
      "label": "Ordered Termination Detail 2",
      "description": "In the context of StatefulSets, Ordered Termination allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t3_s5",
      "label": "Headless Service Required",
      "description": "Relies on a Service with clusterIP: None to create SRV records for each individual pod.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t3_s5_d1",
      "label": "Headless Service Required Detail 1",
      "description": "The API representation of Headless Service Required reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t3_s5_d2",
      "label": "Headless Service Required Detail 2",
      "description": "A PodDisruptionBudget (PDB) blocks the Eviction API from removing a pod (e.g., during node drain) if it would drop available replicas below minAvailable.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t4",
      "label": "DaemonSets",
      "description": "DaemonSet updates: updateStrategy=RollingUpdate, maxUnavailable=1 (default); schedules one pod per node.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t4_s1",
      "label": "Rolling Update Strategy",
      "description": "Deletes one pod at a time across nodes; maxUnavailable limits concurrent disruptions.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t4_s1_d1",
      "label": "Rolling Update Strategy Detail 1",
      "description": "The API representation of Rolling Update Strategy reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t4_s1_d2",
      "label": "Rolling Update Strategy Detail 2",
      "description": "Native Rolling Update Strategy behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t4_s2",
      "label": "OnDelete Strategy",
      "description": "OnDelete requires manual pod deletion to trigger update; useful for controlled, manual rolling upgrades.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t4_s2_d1",
      "label": "OnDelete Strategy Detail 1",
      "description": "In the context of DaemonSets, OnDelete Strategy allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t4_s2_d2",
      "label": "OnDelete Strategy Detail 2",
      "description": "When evaluating OnDelete Strategy, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t4_s3",
      "label": "Control Plane Scheduling",
      "description": "Tolerations allow scheduling on control-plane nodes (node-role.kubernetes.io/control-plane).",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t4_s3_d1",
      "label": "Control Plane Scheduling Detail 1",
      "description": "The kube-scheduler's DefaultPreemption plugin evicts lower-priority pods to make room for a Pending pod with higher PriorityClass value.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t4_s3_d2",
      "label": "Control Plane Scheduling Detail 2",
      "description": "The Control Plane Scheduling reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t4_s4",
      "label": "Node Selection",
      "description": "nodeSelector or nodeAffinity restricts which nodes the DaemonSet runs on (e.g., GPU nodes only).",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t4_s4_d1",
      "label": "Node Selection Detail 1",
      "description": "The Node Selection reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t4_s4_d2",
      "label": "Node Selection Detail 2",
      "description": "Node Selection components in Workload Resources serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t4_s5",
      "label": "Orphaned Pod Pruning",
      "description": "If node labels change and no longer match, the DaemonSet controller automatically evicts the pod.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t4_s5_d1",
      "label": "Orphaned Pod Pruning Detail 1",
      "description": "Under the hood, Orphaned Pod Pruning relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t4_s5_d2",
      "label": "Orphaned Pod Pruning Detail 2",
      "description": "Secret data is base64 encoded in YAML manifests but is stored in plain-text (or encrypted via KMS) inside the etcd database.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t5",
      "label": "Jobs & CronJobs",
      "description": "Job indexed mode: JOB_COMPLETION_INDEX env 0..N-1, pod per index; CronJob allows missed schedules.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t5_s1",
      "label": "Indexed Jobs",
      "description": "succeeded when completions pods complete; each pod gets a unique index for parallel partitioned processing.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t5_s1_d1",
      "label": "Indexed Jobs Detail 1",
      "description": "In the context of Jobs & CronJobs, Indexed Jobs allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t5_s1_d2",
      "label": "Indexed Jobs Detail 2",
      "description": "The Indexed Jobs reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t5_s2",
      "label": "Active Deadline",
      "description": "activeDeadlineSeconds forcibly terminates the Job if it runs longer than the specified duration.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t5_s2_d1",
      "label": "Active Deadline Detail 1",
      "description": "For Active Deadline implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t5_s2_d2",
      "label": "Active Deadline Detail 2",
      "description": "Native Active Deadline behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t5_s3",
      "label": "CronJob startingDeadline",
      "description": "startingDeadlineSeconds=60 allows missed schedule within 60s window before skipping the run entirely.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t5_s3_d1",
      "label": "CronJob startingDeadline Detail 1",
      "description": "EndpointSlice objects limit the number of endpoints to 100 by default; this prevents the massive etcd payload sizes caused by monolithic Endpoints resources.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t5_s3_d2",
      "label": "CronJob startingDeadline Detail 2",
      "description": "For CronJob startingDeadline implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t5_s4",
      "label": "Concurrency Policy",
      "description": "concurrencyPolicy=Replace kills running job before starting new; Forbid prevents overlapping runs.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t5_s4_d1",
      "label": "Concurrency Policy Detail 1",
      "description": "In the context of Jobs & CronJobs, Concurrency Policy allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t5_s4_d2",
      "label": "Concurrency Policy Detail 2",
      "description": "Under the hood, Concurrency Policy relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t5_s5",
      "label": "Job History Limits",
      "description": "successfulJobsHistoryLimit and failedJobsHistoryLimit clean up old completed Job and Pod resources automatically.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t5_s5_d1",
      "label": "Job History Limits Detail 1",
      "description": "When evaluating Job History Limits, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t5_s5_d2",
      "label": "Job History Limits Detail 2",
      "description": "A headless service creates a DNS A/AAAA record for every Ready pod backing the service, bypassing the kube-proxy virtual IP layer entirely.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t6",
      "label": "HPA & KEDA",
      "description": "HPA v2: scaleDown stabilizationWindowSeconds=300 prevents thrashing; KEDA triggers on external metrics.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t6_s1",
      "label": "Stabilization Window",
      "description": "Uses the highest recommendation within the past 300s to avoid rapid scale-down oscillating thrashing.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t6_s1_d1",
      "label": "Stabilization Window Detail 1",
      "description": "Under the hood, Stabilization Window relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t6_s1_d2",
      "label": "Stabilization Window Detail 2",
      "description": "For Stabilization Window implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t6_s2",
      "label": "Custom Metrics API",
      "description": "HPA queries external metric providers (like Prometheus Adapter) for non-CPU/Memory scaling.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t6_s2_d1",
      "label": "Custom Metrics API Detail 1",
      "description": "For Custom Metrics API implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t6_s2_d2",
      "label": "Custom Metrics API Detail 2",
      "description": "Under the hood, Custom Metrics API relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t6_s3",
      "label": "KEDA ScaledObject",
      "description": "CRD that maps external event sources (Kafka lag/Prometheus/SQS) to HPA metric targets.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t6_s3_d1",
      "label": "KEDA ScaledObject Detail 1",
      "description": "Kubelet's topology manager aligns CPU, memory, and device allocations (like GPUs) to the same NUMA node to maximize cache performance.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t6_s3_d2",
      "label": "KEDA ScaledObject Detail 2",
      "description": "When evaluating KEDA ScaledObject, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t6_s4",
      "label": "Scale to Zero",
      "description": "KEDA can scale Deployments to 0 replicas, whereas standard HPA requires at least 1 replica.",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t6_s4_d1",
      "label": "Scale to Zero Detail 1",
      "description": "Native Scale to Zero behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t6_s4_d2",
      "label": "Scale to Zero Detail 2",
      "description": "The API representation of Scale to Zero reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t6_s5",
      "label": "Scaling Policies",
      "description": "Allows defining absolute max rate of change (e.g., scale up by max 10 pods per minute).",
      "type": "concept"
    },
    {
      "id": "k8s_p3_t6_s5_d1",
      "label": "Scaling Policies Detail 1",
      "description": "Scaling Policies components in Workload Resources serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p3_t6_s5_d2",
      "label": "Scaling Policies Detail 2",
      "description": "The subPath field in a volume mount allows mounting a single file or directory from a ConfigMap/PVC without shadowing the entire destination directory.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t1",
      "label": "CNI Plugins",
      "description": "CNI ADD: plugin receives netns path, creates veth pair (eth0 in pod, cethXXX on host), IPAM assigns IP.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t1_s1",
      "label": "veth Pairs",
      "description": "Virtual ethernet cable connects the pod network namespace to the host network namespace.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t1_s1_d1",
      "label": "veth Pairs Detail 1",
      "description": "When evaluating veth Pairs, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t1_s1_d2",
      "label": "veth Pairs Detail 2",
      "description": "veth Pairs components in Networking serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t1_s2",
      "label": "IPAM Delegation",
      "description": "host-local IPAM assigns pod IP from CIDR and stores allocation state on disk.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t1_s2_d1",
      "label": "IPAM Delegation Detail 1",
      "description": "For IPAM Delegation implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t1_s2_d2",
      "label": "IPAM Delegation Detail 2",
      "description": "Native IPAM Delegation behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t1_s3",
      "label": "Flannel VXLAN",
      "description": "packet from pod->flannel.1 VTEP->VXLAN UDP 8472 encapsulation->remote node flannel.1->pod.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t1_s3_d1",
      "label": "Flannel VXLAN Detail 1",
      "description": "Downward API can expose pod annotations, labels, and resource limits (requests.cpu, limits.memory) as environment variables via fieldRef.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t1_s3_d2",
      "label": "Flannel VXLAN Detail 2",
      "description": "When evaluating Flannel VXLAN, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t1_s4",
      "label": "Flannel etcd Mapping",
      "description": "backend stores MAC->VTEP IP mappings in etcd to route VXLAN packets across L3 networks.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t1_s4_d1",
      "label": "Flannel etcd Mapping Detail 1",
      "description": "The API representation of Flannel etcd Mapping reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t1_s4_d2",
      "label": "Flannel etcd Mapping Detail 2",
      "description": "For Flannel etcd Mapping implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t1_s5",
      "label": "Calico BGP",
      "description": "each node runs BIRD daemon, peers with route reflectors; pod CIDR advertised as /26 BGP routes, no encapsulation.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t1_s5_d1",
      "label": "Calico BGP Detail 1",
      "description": "When evaluating Calico BGP, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t1_s5_d2",
      "label": "Calico BGP Detail 2",
      "description": "A static pod is managed directly by the kubelet from a manifest file in /etc/kubernetes/manifests, bypassing the kube-scheduler completely.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t2",
      "label": "Service Types & kube-proxy",
      "description": "kube-proxy iptables: PREROUTING DNAT chain, -m statistic --mode random --probability for endpoint selection.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t2_s1",
      "label": "iptables Proxy Mode",
      "description": "Creates KUBE-SERVICES chain in PREROUTING; intercepts ClusterIP traffic and applies SNAT/DNAT rules.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t2_s1_d1",
      "label": "iptables Proxy Mode Detail 1",
      "description": "When evaluating iptables Proxy Mode, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t2_s1_d2",
      "label": "iptables Proxy Mode Detail 2",
      "description": "In the context of Service Types & kube-proxy, iptables Proxy Mode allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t2_s2",
      "label": "IPVS Proxy Mode",
      "description": "Uses Linux IP Virtual Server for O(1) matching and complex load balancing algorithms (rr, lc, dh).",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t2_s2_d1",
      "label": "IPVS Proxy Mode Detail 1",
      "description": "When evaluating IPVS Proxy Mode, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t2_s2_d2",
      "label": "IPVS Proxy Mode Detail 2",
      "description": "Native IPVS Proxy Mode behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t2_s3",
      "label": "NodePort Routing",
      "description": "DNAT to ClusterIP, MASQUERADE src IP for return traffic to ensure it routes back through the proxy node.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t2_s3_d1",
      "label": "NodePort Routing Detail 1",
      "description": "ClusterRole bindings to the system:anonymous user expose API endpoints unauthenticated, a common misconfiguration leading to cluster takeover.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t2_s3_d2",
      "label": "NodePort Routing Detail 2",
      "description": "The NodePort Routing reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t2_s4",
      "label": "externalTrafficPolicy: Local",
      "description": "Preserves client source IP by routing NodePort traffic ONLY to local endpoints; drops traffic if none exist.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t2_s4_d1",
      "label": "externalTrafficPolicy: Local Detail 1",
      "description": "externalTrafficPolicy: Local components in Networking serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t2_s4_d2",
      "label": "externalTrafficPolicy: Local Detail 2",
      "description": "For externalTrafficPolicy: Local implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t2_s5",
      "label": "MetalLB L2 Mode",
      "description": "MetalLB speaker sends GARP for service IP, ARP requests answered by elected speaker node; failover via memberlist.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t2_s5_d1",
      "label": "MetalLB L2 Mode Detail 1",
      "description": "The API representation of MetalLB L2 Mode reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t2_s5_d2",
      "label": "MetalLB L2 Mode Detail 2",
      "description": "Setting spec.shareProcessNamespace=true allows containers in a pod to see each other's processes via ptrace, useful for sidecar debugging.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t3",
      "label": "Ingress & Gateway API",
      "description": "Gateway API: HTTPRoute parentRefs point to Gateway listeners; cross-namespace via ReferenceGrant.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t3_s1",
      "label": "Ingress Controller",
      "description": "Nginx parses Ingress resources into nginx.conf reloads; relies heavily on custom annotations for advanced routing.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t3_s1_d1",
      "label": "Ingress Controller Detail 1",
      "description": "Native Ingress Controller behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t3_s1_d2",
      "label": "Ingress Controller Detail 2",
      "description": "Ingress Controller components in Networking serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t3_s2",
      "label": "Gateway API Roles",
      "description": "Separates concerns: GatewayClass (Provider), Gateway (Cluster Admin), HTTPRoute (App Developer).",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t3_s2_d1",
      "label": "Gateway API Roles Detail 1",
      "description": "The Gateway API Roles reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t3_s2_d2",
      "label": "Gateway API Roles Detail 2",
      "description": "When evaluating Gateway API Roles, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t3_s3",
      "label": "HTTPRoute Matching",
      "description": "Supports advanced matching on headers, query parameters, and methods without relying on annotations.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t3_s3_d1",
      "label": "HTTPRoute Matching Detail 1",
      "description": "The kubelet calculates pod eviction thresholds by monitoring memory.available and nodefs.available metrics scraped directly from cAdvisor.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t3_s3_d2",
      "label": "HTTPRoute Matching Detail 2",
      "description": "HTTPRoute Matching components in Networking serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t3_s4",
      "label": "ReferenceGrant",
      "description": "Explicitly allows cross-namespace references (e.g., Route in app-ns forwarding to Service in db-ns).",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t3_s4_d1",
      "label": "ReferenceGrant Detail 1",
      "description": "When evaluating ReferenceGrant, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t3_s4_d2",
      "label": "ReferenceGrant Detail 2",
      "description": "ReferenceGrant components in Networking serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t3_s5",
      "label": "Traffic Splitting",
      "description": "HTTPRoute backendRefs support weight parameters for native canary deployments and A/B testing.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t3_s5_d1",
      "label": "Traffic Splitting Detail 1",
      "description": "Traffic Splitting components in Networking serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t3_s5_d2",
      "label": "Traffic Splitting Detail 2",
      "description": "When a Pod is deleted, its deletionTimestamp is set, and it remains in Terminating state until all finalizers are removed by their respective controllers.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t4",
      "label": "Istio Service Mesh",
      "description": "Istio: istiod pushes xDS config to Envoy sidecars; mutual TLS via SPIFFE SVIDs.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t4_s1",
      "label": "Envoy Sidecar",
      "description": "Intercepts all inbound/outbound pod traffic via iptables REDIRECT to port 15001.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t4_s1_d1",
      "label": "Envoy Sidecar Detail 1",
      "description": "In the context of Istio Service Mesh, Envoy Sidecar allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t4_s1_d2",
      "label": "Envoy Sidecar Detail 2",
      "description": "The API representation of Envoy Sidecar reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t4_s2",
      "label": "xDS API",
      "description": "CDS clusters = upstream services; EDS = endpoints from k8s EndpointSlice pushed dynamically.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t4_s2_d1",
      "label": "xDS API Detail 1",
      "description": "When evaluating xDS API, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t4_s2_d2",
      "label": "xDS API Detail 2",
      "description": "Native xDS API behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t4_s3",
      "label": "mTLS Handshake",
      "description": "both client+server present SPIFFE X.509 SVIDs issued by Citadel; encrypts and authenticates L4 traffic.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t4_s3_d1",
      "label": "mTLS Handshake Detail 1",
      "description": "HorizontalPodAutoscaler queries the metrics.k8s.io API (served by metrics-server) for CPU/memory, or custom.metrics.k8s.io for Prometheus adapter metrics.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t4_s3_d2",
      "label": "mTLS Handshake Detail 2",
      "description": "mTLS Handshake components in Networking serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t4_s4",
      "label": "VirtualService",
      "description": "Defines L7 routing rules, retries, timeouts, and fault injection applied at the client Envoy sidecar.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t4_s4_d1",
      "label": "VirtualService Detail 1",
      "description": "The VirtualService reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t4_s4_d2",
      "label": "VirtualService Detail 2",
      "description": "VirtualService components in Networking serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t4_s5",
      "label": "DestinationRule",
      "description": "Configures client-side load balancing, connection pooling, and circuit breaking for an upstream service.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t4_s5_d1",
      "label": "DestinationRule Detail 1",
      "description": "The API representation of DestinationRule reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t4_s5_d2",
      "label": "DestinationRule Detail 2",
      "description": "Taints use the NoExecute effect to immediately evict running pods that lack a matching toleration, whereas NoSchedule only prevents new assignments.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t5",
      "label": "Network Policy",
      "description": "NetworkPolicy: CNI plugin enforces; kube-proxy does NOT; empty podSelector selects all pods in namespace.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t5_s1",
      "label": "Default Deny",
      "description": "A NetworkPolicy with empty podSelector and empty ingress/egress lists isolates all pods in the namespace.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t5_s1_d1",
      "label": "Default Deny Detail 1",
      "description": "Under the hood, Default Deny relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t5_s1_d2",
      "label": "Default Deny Detail 2",
      "description": "For Default Deny implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t5_s2",
      "label": "Policy Enforcement",
      "description": "Implemented via iptables (Calico) or eBPF (Cilium) at the node level, dropping packets before they reach the pod.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t5_s2_d1",
      "label": "Policy Enforcement Detail 1",
      "description": "For Policy Enforcement implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t5_s2_d2",
      "label": "Policy Enforcement Detail 2",
      "description": "Under the hood, Policy Enforcement relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t5_s3",
      "label": "Directionality",
      "description": "policyTypes Ingress+Egress both needed for bidirectional control; traffic must be allowed on both ends.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t5_s3_d1",
      "label": "Directionality Detail 1",
      "description": "ServiceAccounts automatically create a projected volume in k8s 1.21+ which mounts short-lived, auto-rotating tokens instead of static Secret-based tokens.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t5_s3_d2",
      "label": "Directionality Detail 2",
      "description": "Directionality components in Networking serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t5_s4",
      "label": "Namespace Selectors",
      "description": "Matches namespaces by labels; traffic is allowed if both namespaceSelector and podSelector conditions are met.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t5_s4_d1",
      "label": "Namespace Selectors Detail 1",
      "description": "The API representation of Namespace Selectors reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t5_s4_d2",
      "label": "Namespace Selectors Detail 2",
      "description": "In the context of Network Policy, Namespace Selectors allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t5_s5",
      "label": "Cilium eBPF Policies",
      "description": "Cilium evaluates policies using BPF maps keyed by numeric endpoint identity rather than IP addresses.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t5_s5_d1",
      "label": "Cilium eBPF Policies Detail 1",
      "description": "Under the hood, Cilium eBPF Policies relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t5_s5_d2",
      "label": "Cilium eBPF Policies Detail 2",
      "description": "The Node authorization mode explicitly limits kubelet access, only allowing it to read Secrets/ConfigMaps bound to Pods actually scheduled on that specific node.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t6",
      "label": "DNS",
      "description": "CoreDNS: serves cluster.local zone; pod DNS = pod-ip.namespace.pod.cluster.local.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t6_s1",
      "label": "Service DNS Records",
      "description": "Resolves svc-name.namespace.svc.cluster.local to the Virtual IP (ClusterIP) of the Service.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t6_s1_d1",
      "label": "Service DNS Records Detail 1",
      "description": "The Service DNS Records reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t6_s1_d2",
      "label": "Service DNS Records Detail 2",
      "description": "In the context of DNS, Service DNS Records allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t6_s2",
      "label": "Headless SRV Records",
      "description": "SRV records for headless service: _port._proto.svc.namespace.svc.cluster.local returns all pod IPs directly.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t6_s2_d1",
      "label": "Headless SRV Records Detail 1",
      "description": "Native Headless SRV Records behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t6_s2_d2",
      "label": "Headless SRV Records Detail 2",
      "description": "The Headless SRV Records reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t6_s3",
      "label": "ndots configuration",
      "description": "ndots:5 in resolv.conf causes up to 5 sequential DNS queries with search domains before querying root.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t6_s3_d1",
      "label": "ndots configuration Detail 1",
      "description": "Ephemeral containers are injected into running pods via the /ephemeralcontainers subresource and do not trigger a pod restart; they lack ports or resources.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t6_s3_d2",
      "label": "ndots configuration Detail 2",
      "description": "In the context of DNS, ndots configuration allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t6_s4",
      "label": "NodeLocal DNSCache",
      "description": "DaemonSet running CoreDNS on link-local IP to bypass conntrack SNAT limits and reduce DNS latency.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t6_s4_d1",
      "label": "NodeLocal DNSCache Detail 1",
      "description": "When evaluating NodeLocal DNSCache, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t6_s4_d2",
      "label": "NodeLocal DNSCache Detail 2",
      "description": "NodeLocal DNSCache components in Networking serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t6_s5",
      "label": "Corefile Plugins",
      "description": "Kubernetes plugin watches API server for Service/Endpoint changes; forward plugin handles external resolution.",
      "type": "concept"
    },
    {
      "id": "k8s_p4_t6_s5_d1",
      "label": "Corefile Plugins Detail 1",
      "description": "The API representation of Corefile Plugins reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p4_t6_s5_d2",
      "label": "Corefile Plugins Detail 2",
      "description": "When externalTrafficPolicy is set to Local on a LoadBalancer Service, kube-proxy drops packets arriving on nodes that do not host a ready endpoint pod.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t1",
      "label": "CSI Architecture",
      "description": "CSI Controller handles Create/Delete/Attach; Node plugin handles Stage/Publish (format/mount).",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t1_s1",
      "label": "Controller Plugin",
      "description": "Runs as a StatefulSet or Deployment; communicates with external cloud APIs to provision and attach LUNs.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t1_s1_d1",
      "label": "Controller Plugin Detail 1",
      "description": "When evaluating Controller Plugin, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t1_s1_d2",
      "label": "Controller Plugin Detail 2",
      "description": "When evaluating Controller Plugin, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t1_s2",
      "label": "Node Plugin",
      "description": "Runs as a DaemonSet; communicates with local host OS via iSCSI/NVMe to format and mount devices.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t1_s2_d1",
      "label": "Node Plugin Detail 1",
      "description": "In the context of CSI Architecture, Node Plugin allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t1_s2_d2",
      "label": "Node Plugin Detail 2",
      "description": "In the context of CSI Architecture, Node Plugin allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t1_s3",
      "label": "external-provisioner",
      "description": "Sidecar container that watches PVC objects and invokes the CSI Controller CreateVolume RPC.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t1_s3_d1",
      "label": "external-provisioner Detail 1",
      "description": "The apiserver's max-mutating-requests-inflight flag (default 200) prevents overload by rate-limiting incoming POST/PUT/PATCH requests before admission.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t1_s3_d2",
      "label": "external-provisioner Detail 2",
      "description": "For external-provisioner implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t1_s4",
      "label": "NodeStageVolume",
      "description": "Formats the block device (e.g., ext4/xfs) and mounts it to a global staging path on the node.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t1_s4_d1",
      "label": "NodeStageVolume Detail 1",
      "description": "Native NodeStageVolume behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t1_s4_d2",
      "label": "NodeStageVolume Detail 2",
      "description": "Native NodeStageVolume behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t1_s5",
      "label": "NodePublishVolume",
      "description": "Performs a bind-mount from the global staging path to the specific pod directory.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t1_s5_d1",
      "label": "NodePublishVolume Detail 1",
      "description": "When evaluating NodePublishVolume, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t1_s5_d2",
      "label": "NodePublishVolume Detail 2",
      "description": "A PodDisruptionBudget (PDB) blocks the Eviction API from removing a pod (e.g., during node drain) if it would drop available replicas below minAvailable.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t2",
      "label": "PV/PVC Lifecycle",
      "description": "PV Retain: PV remains after PVC deletion with status=Released; manual cleanup required.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t2_s1",
      "label": "Delete Policy",
      "description": "external-provisioner calls DeleteVolume RPC immediately when PVC is deleted to destroy the cloud disk.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t2_s1_d1",
      "label": "Delete Policy Detail 1",
      "description": "The API representation of Delete Policy reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t2_s1_d2",
      "label": "Delete Policy Detail 2",
      "description": "The API representation of Delete Policy reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t2_s2",
      "label": "Retain Policy",
      "description": "Requires admin to manually delete the PV object and the underlying storage asset to prevent data loss.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t2_s2_d1",
      "label": "Retain Policy Detail 1",
      "description": "The API representation of Retain Policy reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t2_s2_d2",
      "label": "Retain Policy Detail 2",
      "description": "The API representation of Retain Policy reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t2_s3",
      "label": "PVC Binding",
      "description": "Controller matches PVC resource requests and label selectors to an available PV, changing status to Bound.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t2_s3_d1",
      "label": "PVC Binding Detail 1",
      "description": "The kube-scheduler's DefaultPreemption plugin evicts lower-priority pods to make room for a Pending pod with higher PriorityClass value.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t2_s3_d2",
      "label": "PVC Binding Detail 2",
      "description": "In the context of PV/PVC Lifecycle, PVC Binding allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t2_s4",
      "label": "ReadWriteOncePod",
      "description": "(RWOP GA in 1.29): scheduler enforces only one pod across cluster mounts PV; prevents split-brain for databases.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t2_s4_d1",
      "label": "ReadWriteOncePod Detail 1",
      "description": "The ReadWriteOncePod reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t2_s4_d2",
      "label": "ReadWriteOncePod Detail 2",
      "description": "The ReadWriteOncePod reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t2_s5",
      "label": "Volume Expansion",
      "description": "Modifying PVC storage size triggers ControllerExpandVolume (resizes block) and NodeExpandVolume (resizes filesystem).",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t2_s5_d1",
      "label": "Volume Expansion Detail 1",
      "description": "The Volume Expansion reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t2_s5_d2",
      "label": "Volume Expansion Detail 2",
      "description": "Secret data is base64 encoded in YAML manifests but is stored in plain-text (or encrypted via KMS) inside the etcd database.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t3",
      "label": "StorageClass & Provisioning",
      "description": "StorageClass parameters configure cloud disk type/IOPS; volumeBindingMode controls scheduling timing.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t3_s1",
      "label": "Provisioner Parameters",
      "description": "StorageClass ebs.csi.aws.com: parameters type=gp3 iops=3000 throughput=125MiB encrypted=true.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t3_s1_d1",
      "label": "Provisioner Parameters Detail 1",
      "description": "The API representation of Provisioner Parameters reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t3_s1_d2",
      "label": "Provisioner Parameters Detail 2",
      "description": "Under the hood, Provisioner Parameters relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t3_s2",
      "label": "volumeBindingMode",
      "description": "WaitForFirstConsumer delays PV binding until a pod is scheduled, reading pod zone from node topology.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t3_s2_d1",
      "label": "volumeBindingMode Detail 1",
      "description": "volumeBindingMode components in Storage (CSI) serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t3_s2_d2",
      "label": "volumeBindingMode Detail 2",
      "description": "When evaluating volumeBindingMode, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t3_s3",
      "label": "Immediate Binding",
      "description": "Provisions the disk immediately; can cause unschedulable pods if disk is created in zone A but node is in zone B.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t3_s3_d1",
      "label": "Immediate Binding Detail 1",
      "description": "EndpointSlice objects limit the number of endpoints to 100 by default; this prevents the massive etcd payload sizes caused by monolithic Endpoints resources.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t3_s3_d2",
      "label": "Immediate Binding Detail 2",
      "description": "The API representation of Immediate Binding reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t3_s4",
      "label": "Default StorageClass",
      "description": "Annotated with is-default-class; automatically applied to PVCs that do not specify a storageClassName.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t3_s4_d1",
      "label": "Default StorageClass Detail 1",
      "description": "The API representation of Default StorageClass reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t3_s4_d2",
      "label": "Default StorageClass Detail 2",
      "description": "For Default StorageClass implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t3_s5",
      "label": "Topology AllowedTopologies",
      "description": "Restricts the provisioner to create disks only in specific zones specified in the StorageClass.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t3_s5_d1",
      "label": "Topology AllowedTopologies Detail 1",
      "description": "When evaluating Topology AllowedTopologies, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t3_s5_d2",
      "label": "Topology AllowedTopologies Detail 2",
      "description": "A headless service creates a DNS A/AAAA record for every Ready pod backing the service, bypassing the kube-proxy virtual IP layer entirely.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t4",
      "label": "Volume Snapshots",
      "description": "VolumeSnapshot: VolumeSnapshotClass driver+deletionPolicy; controller creates VolumeSnapshotContent.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t4_s1",
      "label": "Snapshot Controller",
      "description": "Watches VolumeSnapshot objects and calls CSI CreateSnapshot RPC to invoke cloud provider snapshot APIs.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t4_s1_d1",
      "label": "Snapshot Controller Detail 1",
      "description": "In the context of Volume Snapshots, Snapshot Controller allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t4_s1_d2",
      "label": "Snapshot Controller Detail 2",
      "description": "In the context of Volume Snapshots, Snapshot Controller allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t4_s2",
      "label": "VolumeSnapshotContent",
      "description": "Cluster-scoped resource representing the actual physical snapshot (similar to PV vs PVC relationship).",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t4_s2_d1",
      "label": "VolumeSnapshotContent Detail 1",
      "description": "The API representation of VolumeSnapshotContent reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t4_s2_d2",
      "label": "VolumeSnapshotContent Detail 2",
      "description": "The API representation of VolumeSnapshotContent reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t4_s3",
      "label": "Restore from Snapshot",
      "description": "Create a new PVC with spec.dataSource.kind=VolumeSnapshot; CSI driver provisions disk from the snapshot.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t4_s3_d1",
      "label": "Restore from Snapshot Detail 1",
      "description": "Kubelet's topology manager aligns CPU, memory, and device allocations (like GPUs) to the same NUMA node to maximize cache performance.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t4_s3_d2",
      "label": "Restore from Snapshot Detail 2",
      "description": "The API representation of Restore from Snapshot reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t4_s4",
      "label": "Application Consistency",
      "description": "Often requires pre-hook execution (like fsfreeze) to ensure filesystem buffers are flushed before snapshotting.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t4_s4_d1",
      "label": "Application Consistency Detail 1",
      "description": "Native Application Consistency behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t4_s4_d2",
      "label": "Application Consistency Detail 2",
      "description": "Native Application Consistency behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t4_s5",
      "label": "Deletion Policies",
      "description": "Retain vs Delete determines if the underlying cloud snapshot is destroyed when the VolumeSnapshot object is deleted.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t4_s5_d1",
      "label": "Deletion Policies Detail 1",
      "description": "When evaluating Deletion Policies, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t4_s5_d2",
      "label": "Deletion Policies Detail 2",
      "description": "The subPath field in a volume mount allows mounting a single file or directory from a ConfigMap/PVC without shadowing the entire destination directory.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t5",
      "label": "Local Persistent Volumes",
      "description": "local PV: nodeAffinity.required matchExpressions hostname binding; no dynamic provisioner.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t5_s1",
      "label": "Static Provisioning",
      "description": "Admin must manually create PV objects mapping to specific host paths or block devices.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t5_s1_d1",
      "label": "Static Provisioning Detail 1",
      "description": "In the context of Local Persistent Volumes, Static Provisioning allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t5_s1_d2",
      "label": "Static Provisioning Detail 2",
      "description": "In the context of Local Persistent Volumes, Static Provisioning allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t5_s2",
      "label": "Node Affinity",
      "description": "Ties the PV to a specific node; scheduler reads this to ensure pod lands on the node with the disk.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t5_s2_d1",
      "label": "Node Affinity Detail 1",
      "description": "The API representation of Node Affinity reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t5_s2_d2",
      "label": "Node Affinity Detail 2",
      "description": "The API representation of Node Affinity reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t5_s3",
      "label": "static-provisioner daemon",
      "description": "Helper DaemonSet that automatically discovers directories under a host path and creates local PV objects.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t5_s3_d1",
      "label": "static-provisioner daemon Detail 1",
      "description": "Downward API can expose pod annotations, labels, and resource limits (requests.cpu, limits.memory) as environment variables via fieldRef.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t5_s3_d2",
      "label": "static-provisioner daemon Detail 2",
      "description": "When evaluating static-provisioner daemon, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t5_s4",
      "label": "Performance",
      "description": "Provides bare-metal NVMe performance without network latency overhead; ideal for distributed DBs like Cassandra.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t5_s4_d1",
      "label": "Performance Detail 1",
      "description": "In the context of Local Persistent Volumes, Performance allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t5_s4_d2",
      "label": "Performance Detail 2",
      "description": "In the context of Local Persistent Volumes, Performance allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t5_s5",
      "label": "Failure Domain",
      "description": "If the node dies, the data is lost; application-level replication is strictly required.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t5_s5_d1",
      "label": "Failure Domain Detail 1",
      "description": "Failure Domain components in Storage (CSI) serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t5_s5_d2",
      "label": "Failure Domain Detail 2",
      "description": "A static pod is managed directly by the kubelet from a manifest file in /etc/kubernetes/manifests, bypassing the kube-scheduler completely.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t6",
      "label": "Advanced Volume Types",
      "description": "Projected volumes inject service account tokens; ephemeral CSI volumes follow pod lifecycle.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t6_s1",
      "label": "Projected Volumes",
      "description": "Combines Secrets, ConfigMaps, DownwardAPI, and ServiceAccountTokens into a single directory mount.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t6_s1_d1",
      "label": "Projected Volumes Detail 1",
      "description": "The Projected Volumes reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t6_s1_d2",
      "label": "Projected Volumes Detail 2",
      "description": "When evaluating Projected Volumes, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t6_s2",
      "label": "OIDC Token Projection",
      "description": "serviceAccountToken audience=vault.example.com expirationSeconds=3600 auto-rotated by kubelet.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t6_s2_d1",
      "label": "OIDC Token Projection Detail 1",
      "description": "OIDC Token Projection components in Storage (CSI) serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t6_s2_d2",
      "label": "OIDC Token Projection Detail 2",
      "description": "When evaluating OIDC Token Projection, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t6_s3",
      "label": "CSI Ephemeral Volumes",
      "description": "spec.volumes[].csi.driver inline, lifecycle directly bound to pod; deleted when pod terminates.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t6_s3_d1",
      "label": "CSI Ephemeral Volumes Detail 1",
      "description": "ClusterRole bindings to the system:anonymous user expose API endpoints unauthenticated, a common misconfiguration leading to cluster takeover.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t6_s3_d2",
      "label": "CSI Ephemeral Volumes Detail 2",
      "description": "The API representation of CSI Ephemeral Volumes reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t6_s4",
      "label": "secrets-store-csi-driver",
      "description": "Mounts secrets from Vault, AWS SSM, or Azure KeyVault as files; syncs to Kubernetes Secrets.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t6_s4_d1",
      "label": "secrets-store-csi-driver Detail 1",
      "description": "The API representation of secrets-store-csi-driver reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t6_s4_d2",
      "label": "secrets-store-csi-driver Detail 2",
      "description": "For secrets-store-csi-driver implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t6_s5",
      "label": "Downward API",
      "description": "Exposes pod metadata (labels, annotations, IP, CPU limits) as files or environment variables.",
      "type": "concept"
    },
    {
      "id": "k8s_p5_t6_s5_d1",
      "label": "Downward API Detail 1",
      "description": "In the context of Advanced Volume Types, Downward API allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p5_t6_s5_d2",
      "label": "Downward API Detail 2",
      "description": "Setting spec.shareProcessNamespace=true allows containers in a pod to see each other's processes via ptrace, useful for sidecar debugging.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t1",
      "label": "RBAC & ServiceAccounts",
      "description": "ClusterRole aggregation: aggregationRule labelSelector merges rules; automountServiceAccountToken=false.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t1_s1",
      "label": "RoleBinding vs ClusterRoleBinding",
      "description": "RoleBinding grants permissions within a specific namespace; ClusterRoleBinding grants cluster-wide.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t1_s1_d1",
      "label": "RoleBinding vs ClusterRoleBinding Detail 1",
      "description": "Native RoleBinding vs ClusterRoleBinding behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t1_s1_d2",
      "label": "RoleBinding vs ClusterRoleBinding Detail 2",
      "description": "When evaluating RoleBinding vs ClusterRoleBinding, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t1_s2",
      "label": "Aggregation Rules",
      "description": "Dynamically merges permissions from multiple ClusterRoles matching a labelSelector into a single role.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t1_s2_d1",
      "label": "Aggregation Rules Detail 1",
      "description": "In the context of RBAC & ServiceAccounts, Aggregation Rules allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t1_s2_d2",
      "label": "Aggregation Rules Detail 2",
      "description": "When evaluating Aggregation Rules, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t1_s3",
      "label": "Token Auto-mounting",
      "description": "automountServiceAccountToken=false prevents kubelet from injecting API credentials into the pod.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t1_s3_d1",
      "label": "Token Auto-mounting Detail 1",
      "description": "The kubelet calculates pod eviction thresholds by monitoring memory.available and nodefs.available metrics scraped directly from cAdvisor.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t1_s3_d2",
      "label": "Token Auto-mounting Detail 2",
      "description": "In the context of RBAC & ServiceAccounts, Token Auto-mounting allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t1_s4",
      "label": "Bound Service Account Tokens",
      "description": "Projected SA tokens have audience+expiry bound to a specific pod; kubelet rotates before expiry.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t1_s4_d1",
      "label": "Bound Service Account Tokens Detail 1",
      "description": "Bound Service Account Tokens components in Security serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t1_s4_d2",
      "label": "Bound Service Account Tokens Detail 2",
      "description": "For Bound Service Account Tokens implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t1_s5",
      "label": "SubjectAccessReview",
      "description": "API endpoint used to query the authorization engine to check if a user can perform an action.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t1_s5_d1",
      "label": "SubjectAccessReview Detail 1",
      "description": "When evaluating SubjectAccessReview, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t1_s5_d2",
      "label": "SubjectAccessReview Detail 2",
      "description": "When a Pod is deleted, its deletionTimestamp is set, and it remains in Terminating state until all finalizers are removed by their respective controllers.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t2",
      "label": "Network Policy Enforcement",
      "description": "NetworkPolicy: Calico translates to eBPF/iptables; Cilium uses BPF maps keyed by pod label identity.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t2_s1",
      "label": "Calico iptables Data Plane",
      "description": "Compiles NetworkPolicy to complex iptables mark and match rules in the mangle and filter tables.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t2_s1_d1",
      "label": "Calico iptables Data Plane Detail 1",
      "description": "The Calico iptables Data Plane reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t2_s1_d2",
      "label": "Calico iptables Data Plane Detail 2",
      "description": "Under the hood, Calico iptables Data Plane relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t2_s2",
      "label": "Cilium Identity Model",
      "description": "Allocates a numerical security identity based on pod labels; BPF maps evaluate traffic using these IDs.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t2_s2_d1",
      "label": "Cilium Identity Model Detail 1",
      "description": "Native Cilium Identity Model behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t2_s2_d2",
      "label": "Cilium Identity Model Detail 2",
      "description": "The API representation of Cilium Identity Model reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t2_s3",
      "label": "Namespace Label Requirements",
      "description": "namespaceSelector requires explicit labels on Namespace objects; k8s 1.21+ automatically adds kubernetes.io/metadata.name.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t2_s3_d1",
      "label": "Namespace Label Requirements Detail 1",
      "description": "HorizontalPodAutoscaler queries the metrics.k8s.io API (served by metrics-server) for CPU/memory, or custom.metrics.k8s.io for Prometheus adapter metrics.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t2_s3_d2",
      "label": "Namespace Label Requirements Detail 2",
      "description": "For Namespace Label Requirements implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t2_s4",
      "label": "Egress Restrictions",
      "description": "Blocking egress requires allowing DNS (UDP 53) to kube-dns, otherwise application resolution fails.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t2_s4_d1",
      "label": "Egress Restrictions Detail 1",
      "description": "The API representation of Egress Restrictions reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t2_s4_d2",
      "label": "Egress Restrictions Detail 2",
      "description": "In the context of Network Policy Enforcement, Egress Restrictions allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t2_s5",
      "label": "GlobalNetworkPolicy",
      "description": "Calico/Cilium CRDs that apply rules cluster-wide, superseding or defaulting namespace-scoped policies.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t2_s5_d1",
      "label": "GlobalNetworkPolicy Detail 1",
      "description": "When evaluating GlobalNetworkPolicy, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t2_s5_d2",
      "label": "GlobalNetworkPolicy Detail 2",
      "description": "Taints use the NoExecute effect to immediately evict running pods that lack a matching toleration, whereas NoSchedule only prevents new assignments.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t3",
      "label": "Pod Security",
      "description": "Pod Security restricted: runAsNonRoot=true, allowPrivilegeEscalation=false, capabilities drop ALL.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t3_s1",
      "label": "Pod Security Admission (PSA)",
      "description": "Built-in admission controller replacing PSP; enforces baseline/restricted profiles via namespace labels.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t3_s1_d1",
      "label": "Pod Security Admission (PSA) Detail 1",
      "description": "The Pod Security Admission (PSA) reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t3_s1_d2",
      "label": "Pod Security Admission (PSA) Detail 2",
      "description": "For Pod Security Admission (PSA) implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t3_s2",
      "label": "runAsNonRoot",
      "description": "Requires container to run as a non-zero UID; fails admission if image USER is implicitly root.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t3_s2_d1",
      "label": "runAsNonRoot Detail 1",
      "description": "The runAsNonRoot reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t3_s2_d2",
      "label": "runAsNonRoot Detail 2",
      "description": "For runAsNonRoot implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t3_s3",
      "label": "allowPrivilegeEscalation",
      "description": "Sets no_new_privs flag, preventing the setuid bit on binaries from granting extra privileges.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t3_s3_d1",
      "label": "allowPrivilegeEscalation Detail 1",
      "description": "ServiceAccounts automatically create a projected volume in k8s 1.21+ which mounts short-lived, auto-rotating tokens instead of static Secret-based tokens.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t3_s3_d2",
      "label": "allowPrivilegeEscalation Detail 2",
      "description": "The allowPrivilegeEscalation reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t3_s4",
      "label": "seccompProfile",
      "description": "seccompProfile=RuntimeDefault blocks dangerous syscalls like ptrace or unshare at the kernel level.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t3_s4_d1",
      "label": "seccompProfile Detail 1",
      "description": "Under the hood, seccompProfile relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t3_s4_d2",
      "label": "seccompProfile Detail 2",
      "description": "seccompProfile components in Security serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t3_s5",
      "label": "Linux Capabilities",
      "description": "capabilities drop ALL removes default capabilities (CAP_CHOWN, CAP_NET_RAW); add NET_BIND_SERVICE explicitly if needed.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t3_s5_d1",
      "label": "Linux Capabilities Detail 1",
      "description": "Linux Capabilities components in Security serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t3_s5_d2",
      "label": "Linux Capabilities Detail 2",
      "description": "The Node authorization mode explicitly limits kubelet access, only allowing it to read Secrets/ConfigMaps bound to Pods actually scheduled on that specific node.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t4",
      "label": "OPA Gatekeeper",
      "description": "Gatekeeper ConstraintTemplate: rego policy in spec.targets.rego; violation[{\"msg\": msg}] triggers deny.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t4_s1",
      "label": "ConstraintTemplate",
      "description": "CRD defining a Rego policy logic and a schema for input parameters used by Constraints.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t4_s1_d1",
      "label": "ConstraintTemplate Detail 1",
      "description": "For ConstraintTemplate implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t4_s1_d2",
      "label": "ConstraintTemplate Detail 2",
      "description": "Under the hood, ConstraintTemplate relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t4_s2",
      "label": "Rego Evaluation",
      "description": "input.review.object accesses resource fields in Rego; policies evaluate on AdmissionReview webhooks.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t4_s2_d1",
      "label": "Rego Evaluation Detail 1",
      "description": "The API representation of Rego Evaluation reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t4_s2_d2",
      "label": "Rego Evaluation Detail 2",
      "description": "Native Rego Evaluation behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t4_s3",
      "label": "Violation Messaging",
      "description": "Yielding a string to the violation set causes Gatekeeper to reject the API request with that message.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t4_s3_d1",
      "label": "Violation Messaging Detail 1",
      "description": "Ephemeral containers are injected into running pods via the /ephemeralcontainers subresource and do not trigger a pod restart; they lack ports or resources.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t4_s3_d2",
      "label": "Violation Messaging Detail 2",
      "description": "In the context of OPA Gatekeeper, Violation Messaging allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t4_s4",
      "label": "Audit Controller",
      "description": "Periodically evaluates all existing cluster resources against Constraints and reports violations in status.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t4_s4_d1",
      "label": "Audit Controller Detail 1",
      "description": "Audit Controller components in Security serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t4_s4_d2",
      "label": "Audit Controller Detail 2",
      "description": "The Audit Controller reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t4_s5",
      "label": "Kyverno Alternative",
      "description": "Validates via YAML pattern matching, mutates via JSON patch, and generates resources without writing Rego.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t4_s5_d1",
      "label": "Kyverno Alternative Detail 1",
      "description": "The API representation of Kyverno Alternative reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t4_s5_d2",
      "label": "Kyverno Alternative Detail 2",
      "description": "When externalTrafficPolicy is set to Local on a LoadBalancer Service, kube-proxy drops packets arriving on nodes that do not host a ready endpoint pod.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t5",
      "label": "Supply Chain Security",
      "description": "cosign keyless: GitHub Actions OIDC->Fulcio CA; Trivy integrated in CI pre-push gate.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t5_s1",
      "label": "Keyless Signing (Sigstore)",
      "description": "Uses ephemeral keys bound to OIDC identity via Fulcio CA; avoids long-term key management.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t5_s1_d1",
      "label": "Keyless Signing (Sigstore) Detail 1",
      "description": "In the context of Supply Chain Security, Keyless Signing (Sigstore) allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t5_s1_d2",
      "label": "Keyless Signing (Sigstore) Detail 2",
      "description": "Keyless Signing (Sigstore) components in Security serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t5_s2",
      "label": "Rekor Transparency Log",
      "description": "Signature and inclusion proof stored in an immutable append-only ledger to verify artifact provenance.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t5_s2_d1",
      "label": "Rekor Transparency Log Detail 1",
      "description": "When evaluating Rekor Transparency Log, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t5_s2_d2",
      "label": "Rekor Transparency Log Detail 2",
      "description": "Rekor Transparency Log components in Security serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t5_s3",
      "label": "Admission Verification",
      "description": "Policy Controllers (like Kyverno or Sigstore Policy Controller) verify image signatures before pod creation.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t5_s3_d1",
      "label": "Admission Verification Detail 1",
      "description": "The apiserver's max-mutating-requests-inflight flag (default 200) prevents overload by rate-limiting incoming POST/PUT/PATCH requests before admission.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t5_s3_d2",
      "label": "Admission Verification Detail 2",
      "description": "Under the hood, Admission Verification relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t5_s4",
      "label": "Trivy Scanning",
      "description": "trivy image --format sarif --exit-code 1 --severity HIGH,CRITICAL breaks CI pipeline on vulnerabilities.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t5_s4_d1",
      "label": "Trivy Scanning Detail 1",
      "description": "The API representation of Trivy Scanning reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t5_s4_d2",
      "label": "Trivy Scanning Detail 2",
      "description": "Trivy Scanning components in Security serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t5_s5",
      "label": "SBOM Generation",
      "description": "Software Bill of Materials (SPDX/CycloneDX) attached to image registry for continuous vulnerability monitoring.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t5_s5_d1",
      "label": "SBOM Generation Detail 1",
      "description": "The SBOM Generation reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t5_s5_d2",
      "label": "SBOM Generation Detail 2",
      "description": "A PodDisruptionBudget (PDB) blocks the Eviction API from removing a pod (e.g., during node drain) if it would drop available replicas below minAvailable.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t6",
      "label": "Secret Encryption",
      "description": "EncryptionConfiguration: aescbc key rotation-add new key first, rotate secrets, remove old key.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t6_s1",
      "label": "EncryptionConfiguration",
      "description": "API server flag that encrypts Secret and ConfigMap resources at rest in the etcd database.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t6_s1_d1",
      "label": "EncryptionConfiguration Detail 1",
      "description": "EncryptionConfiguration components in Security serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t6_s1_d2",
      "label": "EncryptionConfiguration Detail 2",
      "description": "Native EncryptionConfiguration behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t6_s2",
      "label": "aescbc Provider",
      "description": "Uses AES-CBC with PKCS#7 padding; requires managing static keys in a file on master nodes.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t6_s2_d1",
      "label": "aescbc Provider Detail 1",
      "description": "The aescbc Provider reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t6_s2_d2",
      "label": "aescbc Provider Detail 2",
      "description": "In the context of Secret Encryption, aescbc Provider allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t6_s3",
      "label": "KMS Plugin Provider",
      "description": "Delegates encryption of the Data Encryption Key (DEK) to AWS KMS or HashiCorp Vault.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t6_s3_d1",
      "label": "KMS Plugin Provider Detail 1",
      "description": "The kube-scheduler's DefaultPreemption plugin evicts lower-priority pods to make room for a Pending pod with higher PriorityClass value.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t6_s3_d2",
      "label": "KMS Plugin Provider Detail 2",
      "description": "In the context of Secret Encryption, KMS Plugin Provider allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t6_s4",
      "label": "Key Rotation Process",
      "description": "Add new key as first provider (encrypts new writes), run kubectl replace on all secrets, remove old key.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t6_s4_d1",
      "label": "Key Rotation Process Detail 1",
      "description": "When evaluating Key Rotation Process, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t6_s4_d2",
      "label": "Key Rotation Process Detail 2",
      "description": "The Key Rotation Process reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t6_s5",
      "label": "Identity Provider Security",
      "description": "Encrypting etcd prevents someone with raw filesystem access to etcd nodes from dumping plain-text secrets.",
      "type": "concept"
    },
    {
      "id": "k8s_p6_t6_s5_d1",
      "label": "Identity Provider Security Detail 1",
      "description": "When evaluating Identity Provider Security, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p6_t6_s5_d2",
      "label": "Identity Provider Security Detail 2",
      "description": "Secret data is base64 encoded in YAML manifests but is stored in plain-text (or encrypted via KMS) inside the etcd database.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t1",
      "label": "Prometheus & Metrics",
      "description": "Prometheus scrape: kubelet /metrics/cadvisor for container CPU/mem; TSDB blocks.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t1_s1",
      "label": "cAdvisor Metrics",
      "description": "kubelet exposes container_cpu_usage_seconds_total from cgroups via /metrics/cadvisor endpoint.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t1_s1_d1",
      "label": "cAdvisor Metrics Detail 1",
      "description": "For cAdvisor Metrics implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t1_s1_d2",
      "label": "cAdvisor Metrics Detail 2",
      "description": "The cAdvisor Metrics reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t1_s2",
      "label": "kube-state-metrics",
      "description": "Deployment that listens to k8s API and exposes object state (e.g., kube_pod_status_phase) as metrics.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t1_s2_d1",
      "label": "kube-state-metrics Detail 1",
      "description": "kube-state-metrics components in Observability serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t1_s2_d2",
      "label": "kube-state-metrics Detail 2",
      "description": "Under the hood, kube-state-metrics relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t1_s3",
      "label": "Prometheus TSDB",
      "description": "Stores 2h in-memory blocks; flushes to on-disk blocks with inverted index (postings list per label).",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t1_s3_d1",
      "label": "Prometheus TSDB Detail 1",
      "description": "EndpointSlice objects limit the number of endpoints to 100 by default; this prevents the massive etcd payload sizes caused by monolithic Endpoints resources.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t1_s3_d2",
      "label": "Prometheus TSDB Detail 2",
      "description": "Native Prometheus TSDB behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t1_s4",
      "label": "Compaction",
      "description": "Merges overlapping blocks and drops deleted series to optimize query performance and disk space.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t1_s4_d1",
      "label": "Compaction Detail 1",
      "description": "Compaction components in Observability serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t1_s4_d2",
      "label": "Compaction Detail 2",
      "description": "Under the hood, Compaction relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t1_s5",
      "label": "Rate Calculation",
      "description": "PromQL rate() uses linear regression on first/last samples for counters; irate() uses only the last two samples.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t1_s5_d1",
      "label": "Rate Calculation Detail 1",
      "description": "For Rate Calculation implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t1_s5_d2",
      "label": "Rate Calculation Detail 2",
      "description": "A headless service creates a DNS A/AAAA record for every Ready pod backing the service, bypassing the kube-proxy virtual IP layer entirely.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t2",
      "label": "Alertmanager",
      "description": "Alertmanager: route.receiver selects notification channel; group_by clusters related alerts.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t2_s1",
      "label": "Routing Tree",
      "description": "Matches alert labels to a route.receiver to determine notification channel (Slack, PagerDuty).",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t2_s1_d1",
      "label": "Routing Tree Detail 1",
      "description": "The Routing Tree reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t2_s1_d2",
      "label": "Routing Tree Detail 2",
      "description": "For Routing Tree implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t2_s2",
      "label": "Grouping (group_by)",
      "description": "Clusters multiple related alerts (e.g., same cluster/namespace) into a single notification batch.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t2_s2_d1",
      "label": "Grouping (group_by) Detail 1",
      "description": "Native Grouping (group_by) behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t2_s2_d2",
      "label": "Grouping (group_by) Detail 2",
      "description": "In the context of Alertmanager, Grouping (group_by) allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t2_s3",
      "label": "Inhibition Rules",
      "description": "inhibit_rule suppresses symptom alerts (DatabaseDown) when a root cause alert (NodeDown) fires.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t2_s3_d1",
      "label": "Inhibition Rules Detail 1",
      "description": "Kubelet's topology manager aligns CPU, memory, and device allocations (like GPUs) to the same NUMA node to maximize cache performance.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t2_s3_d2",
      "label": "Inhibition Rules Detail 2",
      "description": "The Inhibition Rules reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t2_s4",
      "label": "Silences",
      "description": "Temporary, manually created rules that mute alerts matching specific label regexps during maintenance.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t2_s4_d1",
      "label": "Silences Detail 1",
      "description": "For Silences implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t2_s4_d2",
      "label": "Silences Detail 2",
      "description": "The Silences reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t2_s5",
      "label": "Recording Rules",
      "description": "Precomputes expensive queries (- record: job:http:rate5m expr: rate(requests[5m])) and stores as new metrics.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t2_s5_d1",
      "label": "Recording Rules Detail 1",
      "description": "In the context of Alertmanager, Recording Rules allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t2_s5_d2",
      "label": "Recording Rules Detail 2",
      "description": "The subPath field in a volume mount allows mounting a single file or directory from a ConfigMap/PVC without shadowing the entire destination directory.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t3",
      "label": "Logging (Loki)",
      "description": "Loki labels: {namespace, pod, container} from k8s metadata; high-cardinality in log line.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t3_s1",
      "label": "Label Indexing",
      "description": "Indexes only metadata labels (like pod or namespace), leaving the raw log text unindexed to save space.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t3_s1_d1",
      "label": "Label Indexing Detail 1",
      "description": "For Label Indexing implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t3_s1_d2",
      "label": "Label Indexing Detail 2",
      "description": "Label Indexing components in Observability serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t3_s2",
      "label": "High Cardinality Anti-Pattern",
      "description": "Putting user_id or request_id in Loki labels causes index explosion and OOM crashes.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t3_s2_d1",
      "label": "High Cardinality Anti-Pattern Detail 1",
      "description": "Native High Cardinality Anti-Pattern behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t3_s2_d2",
      "label": "High Cardinality Anti-Pattern Detail 2",
      "description": "The API representation of High Cardinality Anti-Pattern reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t3_s3",
      "label": "LogQL Filtering",
      "description": "{ns=\"prod\"} | json | status > 499 filters streams then parses JSON and evaluates numeric conditions.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t3_s3_d1",
      "label": "LogQL Filtering Detail 1",
      "description": "Downward API can expose pod annotations, labels, and resource limits (requests.cpu, limits.memory) as environment variables via fieldRef.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t3_s3_d2",
      "label": "LogQL Filtering Detail 2",
      "description": "Native LogQL Filtering behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t3_s4",
      "label": "Metric Extraction",
      "description": "rate({ns=\"prod\"}[5m]) calculates requests per second directly from log volume without Prometheus.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t3_s4_d1",
      "label": "Metric Extraction Detail 1",
      "description": "In the context of Logging (Loki), Metric Extraction allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t3_s4_d2",
      "label": "Metric Extraction Detail 2",
      "description": "When evaluating Metric Extraction, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t3_s5",
      "label": "Promtail / Fluent Bit",
      "description": "DaemonSet agent reads /var/log/containers/*.log, attaches k8s metadata, and pushes to Loki API.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t3_s5_d1",
      "label": "Promtail / Fluent Bit Detail 1",
      "description": "In the context of Logging (Loki), Promtail / Fluent Bit allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t3_s5_d2",
      "label": "Promtail / Fluent Bit Detail 2",
      "description": "A static pod is managed directly by the kubelet from a manifest file in /etc/kubernetes/manifests, bypassing the kube-scheduler completely.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t4",
      "label": "Distributed Tracing",
      "description": "Jaeger sampling: probabilistic 0.1% in production; W3C traceparent context propagation.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t4_s1",
      "label": "Head-based Sampling",
      "description": "Decision to trace made at the first service (API Gateway); probabilistic 0.1% sampling for high traffic.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t4_s1_d1",
      "label": "Head-based Sampling Detail 1",
      "description": "The Head-based Sampling reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t4_s1_d2",
      "label": "Head-based Sampling Detail 2",
      "description": "In the context of Distributed Tracing, Head-based Sampling allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t4_s2",
      "label": "Tail-based Sampling",
      "description": "Collects all spans temporarily; Grafana Tempo decides to keep traces only if they contain errors or high latency.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t4_s2_d1",
      "label": "Tail-based Sampling Detail 1",
      "description": "Tail-based Sampling components in Observability serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t4_s2_d2",
      "label": "Tail-based Sampling Detail 2",
      "description": "Native Tail-based Sampling behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t4_s3",
      "label": "W3C traceparent",
      "description": "HTTP Header format: 00-{16byte trace id}-{8byte span id}-01(sampled flag) propagated between microservices.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t4_s3_d1",
      "label": "W3C traceparent Detail 1",
      "description": "ClusterRole bindings to the system:anonymous user expose API endpoints unauthenticated, a common misconfiguration leading to cluster takeover.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t4_s3_d2",
      "label": "W3C traceparent Detail 2",
      "description": "Native W3C traceparent behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t4_s4",
      "label": "Span Context",
      "description": "Contains the Trace ID, Span ID, and Baggage (arbitrary key-values passed down the call chain).",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t4_s4_d1",
      "label": "Span Context Detail 1",
      "description": "In the context of Distributed Tracing, Span Context allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t4_s4_d2",
      "label": "Span Context Detail 2",
      "description": "The Span Context reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t4_s5",
      "label": "TraceQL",
      "description": "Query language to filter traces based on span attributes and duration without scanning the entire backend.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t4_s5_d1",
      "label": "TraceQL Detail 1",
      "description": "For TraceQL implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t4_s5_d2",
      "label": "TraceQL Detail 2",
      "description": "Setting spec.shareProcessNamespace=true allows containers in a pod to see each other's processes via ptrace, useful for sidecar debugging.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t5",
      "label": "OpenTelemetry",
      "description": "OTel collector batch processor: send_batch_size=8192 timeout=200ms reduces export calls.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t5_s1",
      "label": "Receiver Pipelines",
      "description": "Ingests telemetry (OTLP, Jaeger, Prometheus) and standardizes into the internal pdata format.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t5_s1_d1",
      "label": "Receiver Pipelines Detail 1",
      "description": "Native Receiver Pipelines behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t5_s1_d2",
      "label": "Receiver Pipelines Detail 2",
      "description": "Receiver Pipelines components in Observability serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t5_s2",
      "label": "Batch Processor",
      "description": "send_batch_size=8192 timeout=200ms compresses data and reduces network calls to backend destinations.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t5_s2_d1",
      "label": "Batch Processor Detail 1",
      "description": "Batch Processor components in Observability serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t5_s2_d2",
      "label": "Batch Processor Detail 2",
      "description": "Native Batch Processor behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t5_s3",
      "label": "Memory Limiter Processor",
      "description": "spike_limit_mib=300 forces garbage collection and drops data when usage exceeds limits to prevent OOM.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t5_s3_d1",
      "label": "Memory Limiter Processor Detail 1",
      "description": "The kubelet calculates pod eviction thresholds by monitoring memory.available and nodefs.available metrics scraped directly from cAdvisor.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t5_s3_d2",
      "label": "Memory Limiter Processor Detail 2",
      "description": "For Memory Limiter Processor implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t5_s4",
      "label": "Exporter Configuration",
      "description": "Translates pdata and pushes to external vendors (Datadog, New Relic) or open-source backends.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t5_s4_d1",
      "label": "Exporter Configuration Detail 1",
      "description": "When evaluating Exporter Configuration, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t5_s4_d2",
      "label": "Exporter Configuration Detail 2",
      "description": "Exporter Configuration components in Observability serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t5_s5",
      "label": "Auto-Instrumentation",
      "description": "OTel Operator injects sidecars or modifies pod environments to dynamically attach Java/Python tracing agents.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t5_s5_d1",
      "label": "Auto-Instrumentation Detail 1",
      "description": "When evaluating Auto-Instrumentation, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t5_s5_d2",
      "label": "Auto-Instrumentation Detail 2",
      "description": "When a Pod is deleted, its deletionTimestamp is set, and it remains in Terminating state until all finalizers are removed by their respective controllers.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t6",
      "label": "SLOs & DORA",
      "description": "SLO burn rate: 1h window 14.4x burn rate triggers page; DORA deployment frequency via git tags.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t6_s1",
      "label": "Error Budgets",
      "description": "A 99.9% SLO allows 0.1% error budget over 30 days (43 minutes of downtime allowed).",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t6_s1_d1",
      "label": "Error Budgets Detail 1",
      "description": "Error Budgets components in Observability serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t6_s1_d2",
      "label": "Error Budgets Detail 2",
      "description": "The API representation of Error Budgets reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t6_s2",
      "label": "Multi-Window Burn Rate",
      "description": "Alerts if 1h window > 14.4x burn rate OR 6h window > 6x burn rate; prevents alert fatigue from minor spikes.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t6_s2_d1",
      "label": "Multi-Window Burn Rate Detail 1",
      "description": "The API representation of Multi-Window Burn Rate reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t6_s2_d2",
      "label": "Multi-Window Burn Rate Detail 2",
      "description": "Under the hood, Multi-Window Burn Rate relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t6_s3",
      "label": "DORA Deployment Frequency",
      "description": "Measures how often code is deployed to production, calculated via Git tags or CI/CD deployment events.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t6_s3_d1",
      "label": "DORA Deployment Frequency Detail 1",
      "description": "HorizontalPodAutoscaler queries the metrics.k8s.io API (served by metrics-server) for CPU/memory, or custom.metrics.k8s.io for Prometheus adapter metrics.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t6_s3_d2",
      "label": "DORA Deployment Frequency Detail 2",
      "description": "When evaluating DORA Deployment Frequency, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t6_s4",
      "label": "DORA Lead Time",
      "description": "Measures the time from first commit to production deployment, indicating cycle time efficiency.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t6_s4_d1",
      "label": "DORA Lead Time Detail 1",
      "description": "When evaluating DORA Lead Time, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t6_s4_d2",
      "label": "DORA Lead Time Detail 2",
      "description": "Under the hood, DORA Lead Time relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t6_s5",
      "label": "DORA MTTR",
      "description": "Mean Time To Recovery tracks the average time taken to restore service after an incident is declared.",
      "type": "concept"
    },
    {
      "id": "k8s_p7_t6_s5_d1",
      "label": "DORA MTTR Detail 1",
      "description": "Under the hood, DORA MTTR relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p7_t6_s5_d2",
      "label": "DORA MTTR Detail 2",
      "description": "Taints use the NoExecute effect to immediately evict running pods that lack a matching toleration, whereas NoSchedule only prevents new assignments.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t1",
      "label": "Operator Pattern",
      "description": "Operator: CRD spec defines desired state; controller reconciles spec vs actual status.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t1_s1",
      "label": "Custom Resource Definitions",
      "description": "Extends Kubernetes API with domain-specific objects (e.g., PostgresCluster replicas=3 version=\"14\").",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t1_s1_d1",
      "label": "Custom Resource Definitions Detail 1",
      "description": "In the context of Operator Pattern, Custom Resource Definitions allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t1_s1_d2",
      "label": "Custom Resource Definitions Detail 2",
      "description": "In the context of Operator Pattern, Custom Resource Definitions allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t1_s2",
      "label": "Reconciliation Loop",
      "description": "Controller continuously compares CRD spec (desired) vs actual cluster status, making API calls to converge.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t1_s2_d1",
      "label": "Reconciliation Loop Detail 1",
      "description": "In the context of Operator Pattern, Reconciliation Loop allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t1_s2_d2",
      "label": "Reconciliation Loop Detail 2",
      "description": "In the context of Operator Pattern, Reconciliation Loop allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t1_s3",
      "label": "Status Subresource",
      "description": "Allows updating the object status independently of the spec without triggering validation webhooks.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t1_s3_d1",
      "label": "Status Subresource Detail 1",
      "description": "ServiceAccounts automatically create a projected volume in k8s 1.21+ which mounts short-lived, auto-rotating tokens instead of static Secret-based tokens.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t1_s3_d2",
      "label": "Status Subresource Detail 2",
      "description": "Under the hood, Status Subresource relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t1_s4",
      "label": "Finalizers",
      "description": "Blocks deletion of the CRD instance until the controller cleans up external cloud resources or DB schemas.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t1_s4_d1",
      "label": "Finalizers Detail 1",
      "description": "Under the hood, Finalizers relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t1_s4_d2",
      "label": "Finalizers Detail 2",
      "description": "Under the hood, Finalizers relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t1_s5",
      "label": "Generation Tracking",
      "description": "metadata.generation increments on spec change; controller updates status.observedGeneration to confirm processing.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t1_s5_d1",
      "label": "Generation Tracking Detail 1",
      "description": "In the context of Operator Pattern, Generation Tracking allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t1_s5_d2",
      "label": "Generation Tracking Detail 2",
      "description": "The Node authorization mode explicitly limits kubelet access, only allowing it to read Secrets/ConfigMaps bound to Pods actually scheduled on that specific node.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t2",
      "label": "controller-runtime",
      "description": "controller-runtime: manager.Add(reconciler) registers; Reconcile returns RequeueAfter.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t2_s1",
      "label": "Manager Registration",
      "description": "manager.Add(reconciler) sets up the shared caches, webhooks, and leader election for the operator.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t2_s1_d1",
      "label": "Manager Registration Detail 1",
      "description": "Under the hood, Manager Registration relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t2_s1_d2",
      "label": "Manager Registration Detail 2",
      "description": "For Manager Registration implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t2_s2",
      "label": "Reconcile Result",
      "description": "Returns ctrl.Result{RequeueAfter: 30s} to schedule a periodic sync or simple requeue on transient errors.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t2_s2_d1",
      "label": "Reconcile Result Detail 1",
      "description": "Under the hood, Reconcile Result relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t2_s2_d2",
      "label": "Reconcile Result Detail 2",
      "description": "The Reconcile Result reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t2_s3",
      "label": "Client Caching",
      "description": "Client.Get() reads from the local Informer cache by default, avoiding API server overload.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t2_s3_d1",
      "label": "Client Caching Detail 1",
      "description": "Ephemeral containers are injected into running pods via the /ephemeralcontainers subresource and do not trigger a pod restart; they lack ports or resources.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t2_s3_d2",
      "label": "Client Caching Detail 2",
      "description": "Client Caching components in Operators, Helm & GitOps serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t2_s4",
      "label": "Kubebuilder RBAC Markers",
      "description": "//+kubebuilder:rbac:groups=apps,resources=deployments,verbs=get;list generates RBAC manifests via controller-gen.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t2_s4_d1",
      "label": "Kubebuilder RBAC Markers Detail 1",
      "description": "Under the hood, Kubebuilder RBAC Markers relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t2_s4_d2",
      "label": "Kubebuilder RBAC Markers Detail 2",
      "description": "The Kubebuilder RBAC Markers reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t2_s5",
      "label": "Print Columns",
      "description": "//+kubebuilder:printcolumn adds custom columns to the output of kubectl get myresource.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t2_s5_d1",
      "label": "Print Columns Detail 1",
      "description": "In the context of controller-runtime, Print Columns allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t2_s5_d2",
      "label": "Print Columns Detail 2",
      "description": "When externalTrafficPolicy is set to Local on a LoadBalancer Service, kube-proxy drops packets arriving on nodes that do not host a ready endpoint pod.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t3",
      "label": "Helm Chart Internals",
      "description": "Helm values hierarchy: chart defaults -> values.yaml -> -f override -> --set (highest).",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t3_s1",
      "label": "Values Hierarchy",
      "description": "Overrides apply sequentially; --set has highest precedence over -f files and default values.yaml.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t3_s1_d1",
      "label": "Values Hierarchy Detail 1",
      "description": "For Values Hierarchy implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t3_s1_d2",
      "label": "Values Hierarchy Detail 2",
      "description": "The Values Hierarchy reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t3_s2",
      "label": "Go Template Sprig",
      "description": "Helm templates use Go text/template with Sprig functions; .Values.image.tag is injected dynamically.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t3_s2_d1",
      "label": "Go Template Sprig Detail 1",
      "description": "The API representation of Go Template Sprig reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t3_s2_d2",
      "label": "Go Template Sprig Detail 2",
      "description": "When evaluating Go Template Sprig, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t3_s3",
      "label": "Helm Hooks",
      "description": "helm.sh/hook=pre-install runs before chart resources; hook-weight=-5 determines execution order.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t3_s3_d1",
      "label": "Helm Hooks Detail 1",
      "description": "The apiserver's max-mutating-requests-inflight flag (default 200) prevents overload by rate-limiting incoming POST/PUT/PATCH requests before admission.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t3_s3_d2",
      "label": "Helm Hooks Detail 2",
      "description": "Under the hood, Helm Hooks relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t3_s4",
      "label": "Hook Cleanup Policies",
      "description": "hook-delete-policy=before-hook-creation automatically deletes the previous hook pod before running a new one.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t3_s4_d1",
      "label": "Hook Cleanup Policies Detail 1",
      "description": "When evaluating Hook Cleanup Policies, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t3_s4_d2",
      "label": "Hook Cleanup Policies Detail 2",
      "description": "The API representation of Hook Cleanup Policies reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t3_s5",
      "label": "Secret Storage",
      "description": "Helm tracks release state by storing compressed protobuf data inside Secret objects in the deployment namespace.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t3_s5_d1",
      "label": "Secret Storage Detail 1",
      "description": "Under the hood, Secret Storage relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t3_s5_d2",
      "label": "Secret Storage Detail 2",
      "description": "A PodDisruptionBudget (PDB) blocks the Eviction API from removing a pod (e.g., during node drain) if it would drop available replicas below minAvailable.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t4",
      "label": "Kustomize",
      "description": "Kustomize resources list declares base manifests; patches:strategic merge or path-based.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t4_s1",
      "label": "Base and Overlays",
      "description": "Allows maintaining a generic base deployment and environment-specific overlays (dev, prod) without templating.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t4_s1_d1",
      "label": "Base and Overlays Detail 1",
      "description": "For Base and Overlays implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t4_s1_d2",
      "label": "Base and Overlays Detail 2",
      "description": "When evaluating Base and Overlays, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t4_s2",
      "label": "Strategic Merge Patches",
      "description": "Understands Kubernetes object schema to intelligently merge lists, like adding a container to a Pod spec.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t4_s2_d1",
      "label": "Strategic Merge Patches Detail 1",
      "description": "For Strategic Merge Patches implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t4_s2_d2",
      "label": "Strategic Merge Patches Detail 2",
      "description": "In the context of Kustomize, Strategic Merge Patches allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t4_s3",
      "label": "Common Transformers",
      "description": "namePrefix/nameSuffix/commonLabels are globally applied to all resources in the kustomization.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t4_s3_d1",
      "label": "Common Transformers Detail 1",
      "description": "The kube-scheduler's DefaultPreemption plugin evicts lower-priority pods to make room for a Pending pod with higher PriorityClass value.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t4_s3_d2",
      "label": "Common Transformers Detail 2",
      "description": "In the context of Kustomize, Common Transformers allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t4_s4",
      "label": "SecretGenerator",
      "description": "Creates Secret from literals or files and appends a content hash to the name to trigger pod rollouts.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t4_s4_d1",
      "label": "SecretGenerator Detail 1",
      "description": "The SecretGenerator reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t4_s4_d2",
      "label": "SecretGenerator Detail 2",
      "description": "In the context of Kustomize, SecretGenerator allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t4_s5",
      "label": "Vars and Replacements",
      "description": "Replacements feature allows extracting a generated name from one resource and injecting it into another.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t4_s5_d1",
      "label": "Vars and Replacements Detail 1",
      "description": "The Vars and Replacements reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t4_s5_d2",
      "label": "Vars and Replacements Detail 2",
      "description": "Secret data is base64 encoded in YAML manifests but is stored in plain-text (or encrypted via KMS) inside the etcd database.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t5",
      "label": "ArgoCD",
      "description": "ArgoCD Application: syncPolicy.automated.prune=true removes orphaned resources.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t5_s1",
      "label": "Automated Sync Policy",
      "description": "syncPolicy.automated.prune=true removes objects from the cluster if deleted from Git.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t5_s1_d1",
      "label": "Automated Sync Policy Detail 1",
      "description": "In the context of ArgoCD, Automated Sync Policy allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t5_s1_d2",
      "label": "Automated Sync Policy Detail 2",
      "description": "The API representation of Automated Sync Policy reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t5_s2",
      "label": "Self-Healing",
      "description": "selfHeal=true detects out-of-band kubectl manual changes and aggressively reverts them to match Git.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t5_s2_d1",
      "label": "Self-Healing Detail 1",
      "description": "Self-Healing components in Operators, Helm & GitOps serializes the state into a protobuf payload stored in the custom resource status field; the OOM killer will prioritize this process if the memory.usage_in_bytes exceeds the hard limit.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t5_s2_d2",
      "label": "Self-Healing Detail 2",
      "description": "For Self-Healing implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t5_s3",
      "label": "Sync Waves",
      "description": "Resources annotated with argocd.argoproj.io/sync-wave=\"-1\" are deployed before wave 0; respects dependencies.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t5_s3_d1",
      "label": "Sync Waves Detail 1",
      "description": "EndpointSlice objects limit the number of endpoints to 100 by default; this prevents the massive etcd payload sizes caused by monolithic Endpoints resources.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t5_s3_d2",
      "label": "Sync Waves Detail 2",
      "description": "Under the hood, Sync Waves relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t5_s4",
      "label": "Sync Hooks",
      "description": "PreSync hooks run database migrations before the new application manifests are applied.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t5_s4_d1",
      "label": "Sync Hooks Detail 1",
      "description": "For Sync Hooks implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t5_s4_d2",
      "label": "Sync Hooks Detail 2",
      "description": "Under the hood, Sync Hooks relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t5_s5",
      "label": "App of Apps Pattern",
      "description": "A root Application points to a folder of other Application manifests to bootstrap an entire cluster.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t5_s5_d1",
      "label": "App of Apps Pattern Detail 1",
      "description": "When evaluating App of Apps Pattern, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t5_s5_d2",
      "label": "App of Apps Pattern Detail 2",
      "description": "A headless service creates a DNS A/AAAA record for every Ready pod backing the service, bypassing the kube-proxy virtual IP layer entirely.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t6",
      "label": "Flux",
      "description": "Flux GitRepository: interval=1m polls git SHA; HelmRelease: remediation.retries=3.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t6_s1",
      "label": "Source Controller",
      "description": "GitRepository interval=1m polls Git, creates a tarball of manifests, and exposes it via HTTP.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t6_s1_d1",
      "label": "Source Controller Detail 1",
      "description": "The API representation of Source Controller reads the /proc/sys/net/ipv4/ip_forward flag to ensure routing is enabled on the host network; this bypasses the standard iptables traversal, reducing CPU context switches during high load.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t6_s1_d2",
      "label": "Source Controller Detail 2",
      "description": "When evaluating Source Controller, uses a token bucket rate limiter configured with qps=50 and burst=100 for API requests; older versions fallback to polling the API server every 30 seconds if watch is disconnected.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t6_s2",
      "label": "Kustomize Controller",
      "description": "Downloads the artifact from Source Controller, runs kustomize build, and applies it via Server-Side Apply.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t6_s2_d1",
      "label": "Kustomize Controller Detail 1",
      "description": "The Kustomize Controller reconciler parses the spec.replicas field to calculate the desired delta against the current readyReplicas count; if it fails, the controller requeues the event with an exponential backoff starting at 5ms.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t6_s2_d2",
      "label": "Kustomize Controller Detail 2",
      "description": "For Kustomize Controller implementations, compares the resourceVersion of the cached object against the etcd backend to detect conflicts; this triggers an asynchronous watch event dispatched to all registered local informers.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t6_s3",
      "label": "Helm Controller",
      "description": "HelmRelease specifies remediation.retries=3; performs automated rollback if helm test or release fails.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t6_s3_d1",
      "label": "Helm Controller Detail 1",
      "description": "Kubelet's topology manager aligns CPU, memory, and device allocations (like GPUs) to the same NUMA node to maximize cache performance.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t6_s3_d2",
      "label": "Helm Controller Detail 2",
      "description": "Native Helm Controller behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t6_s4",
      "label": "Image Update Automation",
      "description": "imagePullPolicy polls registry; patches the Git repo with new image tags automatically upon new releases.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t6_s4_d1",
      "label": "Image Update Automation Detail 1",
      "description": "In the context of Flux, Image Update Automation allocates an ephemeral port range from 32768 to 60999 for outgoing SNAT connections; admission controllers will reject this if the namespace is labeled with pod-security.kubernetes.io/enforce=restricted.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t6_s4_d2",
      "label": "Image Update Automation Detail 2",
      "description": "Native Image Update Automation behavior invokes the gRPC Create interface with a timeout of 2 minutes to prevent hanging goroutines; the resulting x509 certificate includes the pod IP in the Subject Alternative Name (SAN) extension.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t6_s5",
      "label": "Post Renderers",
      "description": "Allows applying Kustomize patches sequentially after the Helm templating engine completes rendering.",
      "type": "concept"
    },
    {
      "id": "k8s_p8_t6_s5_d1",
      "label": "Post Renderers Detail 1",
      "description": "Under the hood, Post Renderers relies on the CNI ADD command to inject the default route via the bridge interface; this requires CAP_SYS_ADMIN privileges on the container execution environment.",
      "type": "example"
    },
    {
      "id": "k8s_p8_t6_s5_d2",
      "label": "Post Renderers Detail 2",
      "description": "The subPath field in a volume mount allows mounting a single file or directory from a ConfigMap/PVC without shadowing the entire destination directory.",
      "type": "example"
    }
  ],
  "edges": [
    {
      "source": "k8s_root",
      "target": "k8s_p1"
    },
    {
      "source": "k8s_root",
      "target": "k8s_p2"
    },
    {
      "source": "k8s_root",
      "target": "k8s_p3"
    },
    {
      "source": "k8s_root",
      "target": "k8s_p4"
    },
    {
      "source": "k8s_root",
      "target": "k8s_p5"
    },
    {
      "source": "k8s_root",
      "target": "k8s_p6"
    },
    {
      "source": "k8s_root",
      "target": "k8s_p7"
    },
    {
      "source": "k8s_root",
      "target": "k8s_p8"
    },
    {
      "source": "k8s_p1",
      "target": "k8s_p1_t1"
    },
    {
      "source": "k8s_p1_t1",
      "target": "k8s_p1_t1_s1"
    },
    {
      "source": "k8s_p1_t1_s1",
      "target": "k8s_p1_t1_s1_d1"
    },
    {
      "source": "k8s_p1_t1_s1",
      "target": "k8s_p1_t1_s1_d2"
    },
    {
      "source": "k8s_p1_t1",
      "target": "k8s_p1_t1_s2"
    },
    {
      "source": "k8s_p1_t1_s2",
      "target": "k8s_p1_t1_s2_d1"
    },
    {
      "source": "k8s_p1_t1_s2",
      "target": "k8s_p1_t1_s2_d2"
    },
    {
      "source": "k8s_p1_t1",
      "target": "k8s_p1_t1_s3"
    },
    {
      "source": "k8s_p1_t1_s3",
      "target": "k8s_p1_t1_s3_d1"
    },
    {
      "source": "k8s_p1_t1_s3",
      "target": "k8s_p1_t1_s3_d2"
    },
    {
      "source": "k8s_p1_t1",
      "target": "k8s_p1_t1_s4"
    },
    {
      "source": "k8s_p1_t1_s4",
      "target": "k8s_p1_t1_s4_d1"
    },
    {
      "source": "k8s_p1_t1_s4",
      "target": "k8s_p1_t1_s4_d2"
    },
    {
      "source": "k8s_p1_t1",
      "target": "k8s_p1_t1_s5"
    },
    {
      "source": "k8s_p1_t1_s5",
      "target": "k8s_p1_t1_s5_d1"
    },
    {
      "source": "k8s_p1_t1_s5",
      "target": "k8s_p1_t1_s5_d2"
    },
    {
      "source": "k8s_p1",
      "target": "k8s_p1_t2"
    },
    {
      "source": "k8s_p1_t2",
      "target": "k8s_p1_t2_s1"
    },
    {
      "source": "k8s_p1_t2_s1",
      "target": "k8s_p1_t2_s1_d1"
    },
    {
      "source": "k8s_p1_t2_s1",
      "target": "k8s_p1_t2_s1_d2"
    },
    {
      "source": "k8s_p1_t2",
      "target": "k8s_p1_t2_s2"
    },
    {
      "source": "k8s_p1_t2_s2",
      "target": "k8s_p1_t2_s2_d1"
    },
    {
      "source": "k8s_p1_t2_s2",
      "target": "k8s_p1_t2_s2_d2"
    },
    {
      "source": "k8s_p1_t2",
      "target": "k8s_p1_t2_s3"
    },
    {
      "source": "k8s_p1_t2_s3",
      "target": "k8s_p1_t2_s3_d1"
    },
    {
      "source": "k8s_p1_t2_s3",
      "target": "k8s_p1_t2_s3_d2"
    },
    {
      "source": "k8s_p1_t2",
      "target": "k8s_p1_t2_s4"
    },
    {
      "source": "k8s_p1_t2_s4",
      "target": "k8s_p1_t2_s4_d1"
    },
    {
      "source": "k8s_p1_t2_s4",
      "target": "k8s_p1_t2_s4_d2"
    },
    {
      "source": "k8s_p1_t2",
      "target": "k8s_p1_t2_s5"
    },
    {
      "source": "k8s_p1_t2_s5",
      "target": "k8s_p1_t2_s5_d1"
    },
    {
      "source": "k8s_p1_t2_s5",
      "target": "k8s_p1_t2_s5_d2"
    },
    {
      "source": "k8s_p1",
      "target": "k8s_p1_t3"
    },
    {
      "source": "k8s_p1_t3",
      "target": "k8s_p1_t3_s1"
    },
    {
      "source": "k8s_p1_t3_s1",
      "target": "k8s_p1_t3_s1_d1"
    },
    {
      "source": "k8s_p1_t3_s1",
      "target": "k8s_p1_t3_s1_d2"
    },
    {
      "source": "k8s_p1_t3",
      "target": "k8s_p1_t3_s2"
    },
    {
      "source": "k8s_p1_t3_s2",
      "target": "k8s_p1_t3_s2_d1"
    },
    {
      "source": "k8s_p1_t3_s2",
      "target": "k8s_p1_t3_s2_d2"
    },
    {
      "source": "k8s_p1_t3",
      "target": "k8s_p1_t3_s3"
    },
    {
      "source": "k8s_p1_t3_s3",
      "target": "k8s_p1_t3_s3_d1"
    },
    {
      "source": "k8s_p1_t3_s3",
      "target": "k8s_p1_t3_s3_d2"
    },
    {
      "source": "k8s_p1_t3",
      "target": "k8s_p1_t3_s4"
    },
    {
      "source": "k8s_p1_t3_s4",
      "target": "k8s_p1_t3_s4_d1"
    },
    {
      "source": "k8s_p1_t3_s4",
      "target": "k8s_p1_t3_s4_d2"
    },
    {
      "source": "k8s_p1_t3",
      "target": "k8s_p1_t3_s5"
    },
    {
      "source": "k8s_p1_t3_s5",
      "target": "k8s_p1_t3_s5_d1"
    },
    {
      "source": "k8s_p1_t3_s5",
      "target": "k8s_p1_t3_s5_d2"
    },
    {
      "source": "k8s_p1",
      "target": "k8s_p1_t4"
    },
    {
      "source": "k8s_p1_t4",
      "target": "k8s_p1_t4_s1"
    },
    {
      "source": "k8s_p1_t4_s1",
      "target": "k8s_p1_t4_s1_d1"
    },
    {
      "source": "k8s_p1_t4_s1",
      "target": "k8s_p1_t4_s1_d2"
    },
    {
      "source": "k8s_p1_t4",
      "target": "k8s_p1_t4_s2"
    },
    {
      "source": "k8s_p1_t4_s2",
      "target": "k8s_p1_t4_s2_d1"
    },
    {
      "source": "k8s_p1_t4_s2",
      "target": "k8s_p1_t4_s2_d2"
    },
    {
      "source": "k8s_p1_t4",
      "target": "k8s_p1_t4_s3"
    },
    {
      "source": "k8s_p1_t4_s3",
      "target": "k8s_p1_t4_s3_d1"
    },
    {
      "source": "k8s_p1_t4_s3",
      "target": "k8s_p1_t4_s3_d2"
    },
    {
      "source": "k8s_p1_t4",
      "target": "k8s_p1_t4_s4"
    },
    {
      "source": "k8s_p1_t4_s4",
      "target": "k8s_p1_t4_s4_d1"
    },
    {
      "source": "k8s_p1_t4_s4",
      "target": "k8s_p1_t4_s4_d2"
    },
    {
      "source": "k8s_p1_t4",
      "target": "k8s_p1_t4_s5"
    },
    {
      "source": "k8s_p1_t4_s5",
      "target": "k8s_p1_t4_s5_d1"
    },
    {
      "source": "k8s_p1_t4_s5",
      "target": "k8s_p1_t4_s5_d2"
    },
    {
      "source": "k8s_p1",
      "target": "k8s_p1_t5"
    },
    {
      "source": "k8s_p1_t5",
      "target": "k8s_p1_t5_s1"
    },
    {
      "source": "k8s_p1_t5_s1",
      "target": "k8s_p1_t5_s1_d1"
    },
    {
      "source": "k8s_p1_t5_s1",
      "target": "k8s_p1_t5_s1_d2"
    },
    {
      "source": "k8s_p1_t5",
      "target": "k8s_p1_t5_s2"
    },
    {
      "source": "k8s_p1_t5_s2",
      "target": "k8s_p1_t5_s2_d1"
    },
    {
      "source": "k8s_p1_t5_s2",
      "target": "k8s_p1_t5_s2_d2"
    },
    {
      "source": "k8s_p1_t5",
      "target": "k8s_p1_t5_s3"
    },
    {
      "source": "k8s_p1_t5_s3",
      "target": "k8s_p1_t5_s3_d1"
    },
    {
      "source": "k8s_p1_t5_s3",
      "target": "k8s_p1_t5_s3_d2"
    },
    {
      "source": "k8s_p1_t5",
      "target": "k8s_p1_t5_s4"
    },
    {
      "source": "k8s_p1_t5_s4",
      "target": "k8s_p1_t5_s4_d1"
    },
    {
      "source": "k8s_p1_t5_s4",
      "target": "k8s_p1_t5_s4_d2"
    },
    {
      "source": "k8s_p1_t5",
      "target": "k8s_p1_t5_s5"
    },
    {
      "source": "k8s_p1_t5_s5",
      "target": "k8s_p1_t5_s5_d1"
    },
    {
      "source": "k8s_p1_t5_s5",
      "target": "k8s_p1_t5_s5_d2"
    },
    {
      "source": "k8s_p1",
      "target": "k8s_p1_t6"
    },
    {
      "source": "k8s_p1_t6",
      "target": "k8s_p1_t6_s1"
    },
    {
      "source": "k8s_p1_t6_s1",
      "target": "k8s_p1_t6_s1_d1"
    },
    {
      "source": "k8s_p1_t6_s1",
      "target": "k8s_p1_t6_s1_d2"
    },
    {
      "source": "k8s_p1_t6",
      "target": "k8s_p1_t6_s2"
    },
    {
      "source": "k8s_p1_t6_s2",
      "target": "k8s_p1_t6_s2_d1"
    },
    {
      "source": "k8s_p1_t6_s2",
      "target": "k8s_p1_t6_s2_d2"
    },
    {
      "source": "k8s_p1_t6",
      "target": "k8s_p1_t6_s3"
    },
    {
      "source": "k8s_p1_t6_s3",
      "target": "k8s_p1_t6_s3_d1"
    },
    {
      "source": "k8s_p1_t6_s3",
      "target": "k8s_p1_t6_s3_d2"
    },
    {
      "source": "k8s_p1_t6",
      "target": "k8s_p1_t6_s4"
    },
    {
      "source": "k8s_p1_t6_s4",
      "target": "k8s_p1_t6_s4_d1"
    },
    {
      "source": "k8s_p1_t6_s4",
      "target": "k8s_p1_t6_s4_d2"
    },
    {
      "source": "k8s_p1_t6",
      "target": "k8s_p1_t6_s5"
    },
    {
      "source": "k8s_p1_t6_s5",
      "target": "k8s_p1_t6_s5_d1"
    },
    {
      "source": "k8s_p1_t6_s5",
      "target": "k8s_p1_t6_s5_d2"
    },
    {
      "source": "k8s_p2",
      "target": "k8s_p2_t1"
    },
    {
      "source": "k8s_p2_t1",
      "target": "k8s_p2_t1_s1"
    },
    {
      "source": "k8s_p2_t1_s1",
      "target": "k8s_p2_t1_s1_d1"
    },
    {
      "source": "k8s_p2_t1_s1",
      "target": "k8s_p2_t1_s1_d2"
    },
    {
      "source": "k8s_p2_t1",
      "target": "k8s_p2_t1_s2"
    },
    {
      "source": "k8s_p2_t1_s2",
      "target": "k8s_p2_t1_s2_d1"
    },
    {
      "source": "k8s_p2_t1_s2",
      "target": "k8s_p2_t1_s2_d2"
    },
    {
      "source": "k8s_p2_t1",
      "target": "k8s_p2_t1_s3"
    },
    {
      "source": "k8s_p2_t1_s3",
      "target": "k8s_p2_t1_s3_d1"
    },
    {
      "source": "k8s_p2_t1_s3",
      "target": "k8s_p2_t1_s3_d2"
    },
    {
      "source": "k8s_p2_t1",
      "target": "k8s_p2_t1_s4"
    },
    {
      "source": "k8s_p2_t1_s4",
      "target": "k8s_p2_t1_s4_d1"
    },
    {
      "source": "k8s_p2_t1_s4",
      "target": "k8s_p2_t1_s4_d2"
    },
    {
      "source": "k8s_p2_t1",
      "target": "k8s_p2_t1_s5"
    },
    {
      "source": "k8s_p2_t1_s5",
      "target": "k8s_p2_t1_s5_d1"
    },
    {
      "source": "k8s_p2_t1_s5",
      "target": "k8s_p2_t1_s5_d2"
    },
    {
      "source": "k8s_p2",
      "target": "k8s_p2_t2"
    },
    {
      "source": "k8s_p2_t2",
      "target": "k8s_p2_t2_s1"
    },
    {
      "source": "k8s_p2_t2_s1",
      "target": "k8s_p2_t2_s1_d1"
    },
    {
      "source": "k8s_p2_t2_s1",
      "target": "k8s_p2_t2_s1_d2"
    },
    {
      "source": "k8s_p2_t2",
      "target": "k8s_p2_t2_s2"
    },
    {
      "source": "k8s_p2_t2_s2",
      "target": "k8s_p2_t2_s2_d1"
    },
    {
      "source": "k8s_p2_t2_s2",
      "target": "k8s_p2_t2_s2_d2"
    },
    {
      "source": "k8s_p2_t2",
      "target": "k8s_p2_t2_s3"
    },
    {
      "source": "k8s_p2_t2_s3",
      "target": "k8s_p2_t2_s3_d1"
    },
    {
      "source": "k8s_p2_t2_s3",
      "target": "k8s_p2_t2_s3_d2"
    },
    {
      "source": "k8s_p2_t2",
      "target": "k8s_p2_t2_s4"
    },
    {
      "source": "k8s_p2_t2_s4",
      "target": "k8s_p2_t2_s4_d1"
    },
    {
      "source": "k8s_p2_t2_s4",
      "target": "k8s_p2_t2_s4_d2"
    },
    {
      "source": "k8s_p2_t2",
      "target": "k8s_p2_t2_s5"
    },
    {
      "source": "k8s_p2_t2_s5",
      "target": "k8s_p2_t2_s5_d1"
    },
    {
      "source": "k8s_p2_t2_s5",
      "target": "k8s_p2_t2_s5_d2"
    },
    {
      "source": "k8s_p2",
      "target": "k8s_p2_t3"
    },
    {
      "source": "k8s_p2_t3",
      "target": "k8s_p2_t3_s1"
    },
    {
      "source": "k8s_p2_t3_s1",
      "target": "k8s_p2_t3_s1_d1"
    },
    {
      "source": "k8s_p2_t3_s1",
      "target": "k8s_p2_t3_s1_d2"
    },
    {
      "source": "k8s_p2_t3",
      "target": "k8s_p2_t3_s2"
    },
    {
      "source": "k8s_p2_t3_s2",
      "target": "k8s_p2_t3_s2_d1"
    },
    {
      "source": "k8s_p2_t3_s2",
      "target": "k8s_p2_t3_s2_d2"
    },
    {
      "source": "k8s_p2_t3",
      "target": "k8s_p2_t3_s3"
    },
    {
      "source": "k8s_p2_t3_s3",
      "target": "k8s_p2_t3_s3_d1"
    },
    {
      "source": "k8s_p2_t3_s3",
      "target": "k8s_p2_t3_s3_d2"
    },
    {
      "source": "k8s_p2_t3",
      "target": "k8s_p2_t3_s4"
    },
    {
      "source": "k8s_p2_t3_s4",
      "target": "k8s_p2_t3_s4_d1"
    },
    {
      "source": "k8s_p2_t3_s4",
      "target": "k8s_p2_t3_s4_d2"
    },
    {
      "source": "k8s_p2_t3",
      "target": "k8s_p2_t3_s5"
    },
    {
      "source": "k8s_p2_t3_s5",
      "target": "k8s_p2_t3_s5_d1"
    },
    {
      "source": "k8s_p2_t3_s5",
      "target": "k8s_p2_t3_s5_d2"
    },
    {
      "source": "k8s_p2",
      "target": "k8s_p2_t4"
    },
    {
      "source": "k8s_p2_t4",
      "target": "k8s_p2_t4_s1"
    },
    {
      "source": "k8s_p2_t4_s1",
      "target": "k8s_p2_t4_s1_d1"
    },
    {
      "source": "k8s_p2_t4_s1",
      "target": "k8s_p2_t4_s1_d2"
    },
    {
      "source": "k8s_p2_t4",
      "target": "k8s_p2_t4_s2"
    },
    {
      "source": "k8s_p2_t4_s2",
      "target": "k8s_p2_t4_s2_d1"
    },
    {
      "source": "k8s_p2_t4_s2",
      "target": "k8s_p2_t4_s2_d2"
    },
    {
      "source": "k8s_p2_t4",
      "target": "k8s_p2_t4_s3"
    },
    {
      "source": "k8s_p2_t4_s3",
      "target": "k8s_p2_t4_s3_d1"
    },
    {
      "source": "k8s_p2_t4_s3",
      "target": "k8s_p2_t4_s3_d2"
    },
    {
      "source": "k8s_p2_t4",
      "target": "k8s_p2_t4_s4"
    },
    {
      "source": "k8s_p2_t4_s4",
      "target": "k8s_p2_t4_s4_d1"
    },
    {
      "source": "k8s_p2_t4_s4",
      "target": "k8s_p2_t4_s4_d2"
    },
    {
      "source": "k8s_p2_t4",
      "target": "k8s_p2_t4_s5"
    },
    {
      "source": "k8s_p2_t4_s5",
      "target": "k8s_p2_t4_s5_d1"
    },
    {
      "source": "k8s_p2_t4_s5",
      "target": "k8s_p2_t4_s5_d2"
    },
    {
      "source": "k8s_p2",
      "target": "k8s_p2_t5"
    },
    {
      "source": "k8s_p2_t5",
      "target": "k8s_p2_t5_s1"
    },
    {
      "source": "k8s_p2_t5_s1",
      "target": "k8s_p2_t5_s1_d1"
    },
    {
      "source": "k8s_p2_t5_s1",
      "target": "k8s_p2_t5_s1_d2"
    },
    {
      "source": "k8s_p2_t5",
      "target": "k8s_p2_t5_s2"
    },
    {
      "source": "k8s_p2_t5_s2",
      "target": "k8s_p2_t5_s2_d1"
    },
    {
      "source": "k8s_p2_t5_s2",
      "target": "k8s_p2_t5_s2_d2"
    },
    {
      "source": "k8s_p2_t5",
      "target": "k8s_p2_t5_s3"
    },
    {
      "source": "k8s_p2_t5_s3",
      "target": "k8s_p2_t5_s3_d1"
    },
    {
      "source": "k8s_p2_t5_s3",
      "target": "k8s_p2_t5_s3_d2"
    },
    {
      "source": "k8s_p2_t5",
      "target": "k8s_p2_t5_s4"
    },
    {
      "source": "k8s_p2_t5_s4",
      "target": "k8s_p2_t5_s4_d1"
    },
    {
      "source": "k8s_p2_t5_s4",
      "target": "k8s_p2_t5_s4_d2"
    },
    {
      "source": "k8s_p2_t5",
      "target": "k8s_p2_t5_s5"
    },
    {
      "source": "k8s_p2_t5_s5",
      "target": "k8s_p2_t5_s5_d1"
    },
    {
      "source": "k8s_p2_t5_s5",
      "target": "k8s_p2_t5_s5_d2"
    },
    {
      "source": "k8s_p2",
      "target": "k8s_p2_t6"
    },
    {
      "source": "k8s_p2_t6",
      "target": "k8s_p2_t6_s1"
    },
    {
      "source": "k8s_p2_t6_s1",
      "target": "k8s_p2_t6_s1_d1"
    },
    {
      "source": "k8s_p2_t6_s1",
      "target": "k8s_p2_t6_s1_d2"
    },
    {
      "source": "k8s_p2_t6",
      "target": "k8s_p2_t6_s2"
    },
    {
      "source": "k8s_p2_t6_s2",
      "target": "k8s_p2_t6_s2_d1"
    },
    {
      "source": "k8s_p2_t6_s2",
      "target": "k8s_p2_t6_s2_d2"
    },
    {
      "source": "k8s_p2_t6",
      "target": "k8s_p2_t6_s3"
    },
    {
      "source": "k8s_p2_t6_s3",
      "target": "k8s_p2_t6_s3_d1"
    },
    {
      "source": "k8s_p2_t6_s3",
      "target": "k8s_p2_t6_s3_d2"
    },
    {
      "source": "k8s_p2_t6",
      "target": "k8s_p2_t6_s4"
    },
    {
      "source": "k8s_p2_t6_s4",
      "target": "k8s_p2_t6_s4_d1"
    },
    {
      "source": "k8s_p2_t6_s4",
      "target": "k8s_p2_t6_s4_d2"
    },
    {
      "source": "k8s_p2_t6",
      "target": "k8s_p2_t6_s5"
    },
    {
      "source": "k8s_p2_t6_s5",
      "target": "k8s_p2_t6_s5_d1"
    },
    {
      "source": "k8s_p2_t6_s5",
      "target": "k8s_p2_t6_s5_d2"
    },
    {
      "source": "k8s_p3",
      "target": "k8s_p3_t1"
    },
    {
      "source": "k8s_p3_t1",
      "target": "k8s_p3_t1_s1"
    },
    {
      "source": "k8s_p3_t1_s1",
      "target": "k8s_p3_t1_s1_d1"
    },
    {
      "source": "k8s_p3_t1_s1",
      "target": "k8s_p3_t1_s1_d2"
    },
    {
      "source": "k8s_p3_t1",
      "target": "k8s_p3_t1_s2"
    },
    {
      "source": "k8s_p3_t1_s2",
      "target": "k8s_p3_t1_s2_d1"
    },
    {
      "source": "k8s_p3_t1_s2",
      "target": "k8s_p3_t1_s2_d2"
    },
    {
      "source": "k8s_p3_t1",
      "target": "k8s_p3_t1_s3"
    },
    {
      "source": "k8s_p3_t1_s3",
      "target": "k8s_p3_t1_s3_d1"
    },
    {
      "source": "k8s_p3_t1_s3",
      "target": "k8s_p3_t1_s3_d2"
    },
    {
      "source": "k8s_p3_t1",
      "target": "k8s_p3_t1_s4"
    },
    {
      "source": "k8s_p3_t1_s4",
      "target": "k8s_p3_t1_s4_d1"
    },
    {
      "source": "k8s_p3_t1_s4",
      "target": "k8s_p3_t1_s4_d2"
    },
    {
      "source": "k8s_p3_t1",
      "target": "k8s_p3_t1_s5"
    },
    {
      "source": "k8s_p3_t1_s5",
      "target": "k8s_p3_t1_s5_d1"
    },
    {
      "source": "k8s_p3_t1_s5",
      "target": "k8s_p3_t1_s5_d2"
    },
    {
      "source": "k8s_p3",
      "target": "k8s_p3_t2"
    },
    {
      "source": "k8s_p3_t2",
      "target": "k8s_p3_t2_s1"
    },
    {
      "source": "k8s_p3_t2_s1",
      "target": "k8s_p3_t2_s1_d1"
    },
    {
      "source": "k8s_p3_t2_s1",
      "target": "k8s_p3_t2_s1_d2"
    },
    {
      "source": "k8s_p3_t2",
      "target": "k8s_p3_t2_s2"
    },
    {
      "source": "k8s_p3_t2_s2",
      "target": "k8s_p3_t2_s2_d1"
    },
    {
      "source": "k8s_p3_t2_s2",
      "target": "k8s_p3_t2_s2_d2"
    },
    {
      "source": "k8s_p3_t2",
      "target": "k8s_p3_t2_s3"
    },
    {
      "source": "k8s_p3_t2_s3",
      "target": "k8s_p3_t2_s3_d1"
    },
    {
      "source": "k8s_p3_t2_s3",
      "target": "k8s_p3_t2_s3_d2"
    },
    {
      "source": "k8s_p3_t2",
      "target": "k8s_p3_t2_s4"
    },
    {
      "source": "k8s_p3_t2_s4",
      "target": "k8s_p3_t2_s4_d1"
    },
    {
      "source": "k8s_p3_t2_s4",
      "target": "k8s_p3_t2_s4_d2"
    },
    {
      "source": "k8s_p3_t2",
      "target": "k8s_p3_t2_s5"
    },
    {
      "source": "k8s_p3_t2_s5",
      "target": "k8s_p3_t2_s5_d1"
    },
    {
      "source": "k8s_p3_t2_s5",
      "target": "k8s_p3_t2_s5_d2"
    },
    {
      "source": "k8s_p3",
      "target": "k8s_p3_t3"
    },
    {
      "source": "k8s_p3_t3",
      "target": "k8s_p3_t3_s1"
    },
    {
      "source": "k8s_p3_t3_s1",
      "target": "k8s_p3_t3_s1_d1"
    },
    {
      "source": "k8s_p3_t3_s1",
      "target": "k8s_p3_t3_s1_d2"
    },
    {
      "source": "k8s_p3_t3",
      "target": "k8s_p3_t3_s2"
    },
    {
      "source": "k8s_p3_t3_s2",
      "target": "k8s_p3_t3_s2_d1"
    },
    {
      "source": "k8s_p3_t3_s2",
      "target": "k8s_p3_t3_s2_d2"
    },
    {
      "source": "k8s_p3_t3",
      "target": "k8s_p3_t3_s3"
    },
    {
      "source": "k8s_p3_t3_s3",
      "target": "k8s_p3_t3_s3_d1"
    },
    {
      "source": "k8s_p3_t3_s3",
      "target": "k8s_p3_t3_s3_d2"
    },
    {
      "source": "k8s_p3_t3",
      "target": "k8s_p3_t3_s4"
    },
    {
      "source": "k8s_p3_t3_s4",
      "target": "k8s_p3_t3_s4_d1"
    },
    {
      "source": "k8s_p3_t3_s4",
      "target": "k8s_p3_t3_s4_d2"
    },
    {
      "source": "k8s_p3_t3",
      "target": "k8s_p3_t3_s5"
    },
    {
      "source": "k8s_p3_t3_s5",
      "target": "k8s_p3_t3_s5_d1"
    },
    {
      "source": "k8s_p3_t3_s5",
      "target": "k8s_p3_t3_s5_d2"
    },
    {
      "source": "k8s_p3",
      "target": "k8s_p3_t4"
    },
    {
      "source": "k8s_p3_t4",
      "target": "k8s_p3_t4_s1"
    },
    {
      "source": "k8s_p3_t4_s1",
      "target": "k8s_p3_t4_s1_d1"
    },
    {
      "source": "k8s_p3_t4_s1",
      "target": "k8s_p3_t4_s1_d2"
    },
    {
      "source": "k8s_p3_t4",
      "target": "k8s_p3_t4_s2"
    },
    {
      "source": "k8s_p3_t4_s2",
      "target": "k8s_p3_t4_s2_d1"
    },
    {
      "source": "k8s_p3_t4_s2",
      "target": "k8s_p3_t4_s2_d2"
    },
    {
      "source": "k8s_p3_t4",
      "target": "k8s_p3_t4_s3"
    },
    {
      "source": "k8s_p3_t4_s3",
      "target": "k8s_p3_t4_s3_d1"
    },
    {
      "source": "k8s_p3_t4_s3",
      "target": "k8s_p3_t4_s3_d2"
    },
    {
      "source": "k8s_p3_t4",
      "target": "k8s_p3_t4_s4"
    },
    {
      "source": "k8s_p3_t4_s4",
      "target": "k8s_p3_t4_s4_d1"
    },
    {
      "source": "k8s_p3_t4_s4",
      "target": "k8s_p3_t4_s4_d2"
    },
    {
      "source": "k8s_p3_t4",
      "target": "k8s_p3_t4_s5"
    },
    {
      "source": "k8s_p3_t4_s5",
      "target": "k8s_p3_t4_s5_d1"
    },
    {
      "source": "k8s_p3_t4_s5",
      "target": "k8s_p3_t4_s5_d2"
    },
    {
      "source": "k8s_p3",
      "target": "k8s_p3_t5"
    },
    {
      "source": "k8s_p3_t5",
      "target": "k8s_p3_t5_s1"
    },
    {
      "source": "k8s_p3_t5_s1",
      "target": "k8s_p3_t5_s1_d1"
    },
    {
      "source": "k8s_p3_t5_s1",
      "target": "k8s_p3_t5_s1_d2"
    },
    {
      "source": "k8s_p3_t5",
      "target": "k8s_p3_t5_s2"
    },
    {
      "source": "k8s_p3_t5_s2",
      "target": "k8s_p3_t5_s2_d1"
    },
    {
      "source": "k8s_p3_t5_s2",
      "target": "k8s_p3_t5_s2_d2"
    },
    {
      "source": "k8s_p3_t5",
      "target": "k8s_p3_t5_s3"
    },
    {
      "source": "k8s_p3_t5_s3",
      "target": "k8s_p3_t5_s3_d1"
    },
    {
      "source": "k8s_p3_t5_s3",
      "target": "k8s_p3_t5_s3_d2"
    },
    {
      "source": "k8s_p3_t5",
      "target": "k8s_p3_t5_s4"
    },
    {
      "source": "k8s_p3_t5_s4",
      "target": "k8s_p3_t5_s4_d1"
    },
    {
      "source": "k8s_p3_t5_s4",
      "target": "k8s_p3_t5_s4_d2"
    },
    {
      "source": "k8s_p3_t5",
      "target": "k8s_p3_t5_s5"
    },
    {
      "source": "k8s_p3_t5_s5",
      "target": "k8s_p3_t5_s5_d1"
    },
    {
      "source": "k8s_p3_t5_s5",
      "target": "k8s_p3_t5_s5_d2"
    },
    {
      "source": "k8s_p3",
      "target": "k8s_p3_t6"
    },
    {
      "source": "k8s_p3_t6",
      "target": "k8s_p3_t6_s1"
    },
    {
      "source": "k8s_p3_t6_s1",
      "target": "k8s_p3_t6_s1_d1"
    },
    {
      "source": "k8s_p3_t6_s1",
      "target": "k8s_p3_t6_s1_d2"
    },
    {
      "source": "k8s_p3_t6",
      "target": "k8s_p3_t6_s2"
    },
    {
      "source": "k8s_p3_t6_s2",
      "target": "k8s_p3_t6_s2_d1"
    },
    {
      "source": "k8s_p3_t6_s2",
      "target": "k8s_p3_t6_s2_d2"
    },
    {
      "source": "k8s_p3_t6",
      "target": "k8s_p3_t6_s3"
    },
    {
      "source": "k8s_p3_t6_s3",
      "target": "k8s_p3_t6_s3_d1"
    },
    {
      "source": "k8s_p3_t6_s3",
      "target": "k8s_p3_t6_s3_d2"
    },
    {
      "source": "k8s_p3_t6",
      "target": "k8s_p3_t6_s4"
    },
    {
      "source": "k8s_p3_t6_s4",
      "target": "k8s_p3_t6_s4_d1"
    },
    {
      "source": "k8s_p3_t6_s4",
      "target": "k8s_p3_t6_s4_d2"
    },
    {
      "source": "k8s_p3_t6",
      "target": "k8s_p3_t6_s5"
    },
    {
      "source": "k8s_p3_t6_s5",
      "target": "k8s_p3_t6_s5_d1"
    },
    {
      "source": "k8s_p3_t6_s5",
      "target": "k8s_p3_t6_s5_d2"
    },
    {
      "source": "k8s_p4",
      "target": "k8s_p4_t1"
    },
    {
      "source": "k8s_p4_t1",
      "target": "k8s_p4_t1_s1"
    },
    {
      "source": "k8s_p4_t1_s1",
      "target": "k8s_p4_t1_s1_d1"
    },
    {
      "source": "k8s_p4_t1_s1",
      "target": "k8s_p4_t1_s1_d2"
    },
    {
      "source": "k8s_p4_t1",
      "target": "k8s_p4_t1_s2"
    },
    {
      "source": "k8s_p4_t1_s2",
      "target": "k8s_p4_t1_s2_d1"
    },
    {
      "source": "k8s_p4_t1_s2",
      "target": "k8s_p4_t1_s2_d2"
    },
    {
      "source": "k8s_p4_t1",
      "target": "k8s_p4_t1_s3"
    },
    {
      "source": "k8s_p4_t1_s3",
      "target": "k8s_p4_t1_s3_d1"
    },
    {
      "source": "k8s_p4_t1_s3",
      "target": "k8s_p4_t1_s3_d2"
    },
    {
      "source": "k8s_p4_t1",
      "target": "k8s_p4_t1_s4"
    },
    {
      "source": "k8s_p4_t1_s4",
      "target": "k8s_p4_t1_s4_d1"
    },
    {
      "source": "k8s_p4_t1_s4",
      "target": "k8s_p4_t1_s4_d2"
    },
    {
      "source": "k8s_p4_t1",
      "target": "k8s_p4_t1_s5"
    },
    {
      "source": "k8s_p4_t1_s5",
      "target": "k8s_p4_t1_s5_d1"
    },
    {
      "source": "k8s_p4_t1_s5",
      "target": "k8s_p4_t1_s5_d2"
    },
    {
      "source": "k8s_p4",
      "target": "k8s_p4_t2"
    },
    {
      "source": "k8s_p4_t2",
      "target": "k8s_p4_t2_s1"
    },
    {
      "source": "k8s_p4_t2_s1",
      "target": "k8s_p4_t2_s1_d1"
    },
    {
      "source": "k8s_p4_t2_s1",
      "target": "k8s_p4_t2_s1_d2"
    },
    {
      "source": "k8s_p4_t2",
      "target": "k8s_p4_t2_s2"
    },
    {
      "source": "k8s_p4_t2_s2",
      "target": "k8s_p4_t2_s2_d1"
    },
    {
      "source": "k8s_p4_t2_s2",
      "target": "k8s_p4_t2_s2_d2"
    },
    {
      "source": "k8s_p4_t2",
      "target": "k8s_p4_t2_s3"
    },
    {
      "source": "k8s_p4_t2_s3",
      "target": "k8s_p4_t2_s3_d1"
    },
    {
      "source": "k8s_p4_t2_s3",
      "target": "k8s_p4_t2_s3_d2"
    },
    {
      "source": "k8s_p4_t2",
      "target": "k8s_p4_t2_s4"
    },
    {
      "source": "k8s_p4_t2_s4",
      "target": "k8s_p4_t2_s4_d1"
    },
    {
      "source": "k8s_p4_t2_s4",
      "target": "k8s_p4_t2_s4_d2"
    },
    {
      "source": "k8s_p4_t2",
      "target": "k8s_p4_t2_s5"
    },
    {
      "source": "k8s_p4_t2_s5",
      "target": "k8s_p4_t2_s5_d1"
    },
    {
      "source": "k8s_p4_t2_s5",
      "target": "k8s_p4_t2_s5_d2"
    },
    {
      "source": "k8s_p4",
      "target": "k8s_p4_t3"
    },
    {
      "source": "k8s_p4_t3",
      "target": "k8s_p4_t3_s1"
    },
    {
      "source": "k8s_p4_t3_s1",
      "target": "k8s_p4_t3_s1_d1"
    },
    {
      "source": "k8s_p4_t3_s1",
      "target": "k8s_p4_t3_s1_d2"
    },
    {
      "source": "k8s_p4_t3",
      "target": "k8s_p4_t3_s2"
    },
    {
      "source": "k8s_p4_t3_s2",
      "target": "k8s_p4_t3_s2_d1"
    },
    {
      "source": "k8s_p4_t3_s2",
      "target": "k8s_p4_t3_s2_d2"
    },
    {
      "source": "k8s_p4_t3",
      "target": "k8s_p4_t3_s3"
    },
    {
      "source": "k8s_p4_t3_s3",
      "target": "k8s_p4_t3_s3_d1"
    },
    {
      "source": "k8s_p4_t3_s3",
      "target": "k8s_p4_t3_s3_d2"
    },
    {
      "source": "k8s_p4_t3",
      "target": "k8s_p4_t3_s4"
    },
    {
      "source": "k8s_p4_t3_s4",
      "target": "k8s_p4_t3_s4_d1"
    },
    {
      "source": "k8s_p4_t3_s4",
      "target": "k8s_p4_t3_s4_d2"
    },
    {
      "source": "k8s_p4_t3",
      "target": "k8s_p4_t3_s5"
    },
    {
      "source": "k8s_p4_t3_s5",
      "target": "k8s_p4_t3_s5_d1"
    },
    {
      "source": "k8s_p4_t3_s5",
      "target": "k8s_p4_t3_s5_d2"
    },
    {
      "source": "k8s_p4",
      "target": "k8s_p4_t4"
    },
    {
      "source": "k8s_p4_t4",
      "target": "k8s_p4_t4_s1"
    },
    {
      "source": "k8s_p4_t4_s1",
      "target": "k8s_p4_t4_s1_d1"
    },
    {
      "source": "k8s_p4_t4_s1",
      "target": "k8s_p4_t4_s1_d2"
    },
    {
      "source": "k8s_p4_t4",
      "target": "k8s_p4_t4_s2"
    },
    {
      "source": "k8s_p4_t4_s2",
      "target": "k8s_p4_t4_s2_d1"
    },
    {
      "source": "k8s_p4_t4_s2",
      "target": "k8s_p4_t4_s2_d2"
    },
    {
      "source": "k8s_p4_t4",
      "target": "k8s_p4_t4_s3"
    },
    {
      "source": "k8s_p4_t4_s3",
      "target": "k8s_p4_t4_s3_d1"
    },
    {
      "source": "k8s_p4_t4_s3",
      "target": "k8s_p4_t4_s3_d2"
    },
    {
      "source": "k8s_p4_t4",
      "target": "k8s_p4_t4_s4"
    },
    {
      "source": "k8s_p4_t4_s4",
      "target": "k8s_p4_t4_s4_d1"
    },
    {
      "source": "k8s_p4_t4_s4",
      "target": "k8s_p4_t4_s4_d2"
    },
    {
      "source": "k8s_p4_t4",
      "target": "k8s_p4_t4_s5"
    },
    {
      "source": "k8s_p4_t4_s5",
      "target": "k8s_p4_t4_s5_d1"
    },
    {
      "source": "k8s_p4_t4_s5",
      "target": "k8s_p4_t4_s5_d2"
    },
    {
      "source": "k8s_p4",
      "target": "k8s_p4_t5"
    },
    {
      "source": "k8s_p4_t5",
      "target": "k8s_p4_t5_s1"
    },
    {
      "source": "k8s_p4_t5_s1",
      "target": "k8s_p4_t5_s1_d1"
    },
    {
      "source": "k8s_p4_t5_s1",
      "target": "k8s_p4_t5_s1_d2"
    },
    {
      "source": "k8s_p4_t5",
      "target": "k8s_p4_t5_s2"
    },
    {
      "source": "k8s_p4_t5_s2",
      "target": "k8s_p4_t5_s2_d1"
    },
    {
      "source": "k8s_p4_t5_s2",
      "target": "k8s_p4_t5_s2_d2"
    },
    {
      "source": "k8s_p4_t5",
      "target": "k8s_p4_t5_s3"
    },
    {
      "source": "k8s_p4_t5_s3",
      "target": "k8s_p4_t5_s3_d1"
    },
    {
      "source": "k8s_p4_t5_s3",
      "target": "k8s_p4_t5_s3_d2"
    },
    {
      "source": "k8s_p4_t5",
      "target": "k8s_p4_t5_s4"
    },
    {
      "source": "k8s_p4_t5_s4",
      "target": "k8s_p4_t5_s4_d1"
    },
    {
      "source": "k8s_p4_t5_s4",
      "target": "k8s_p4_t5_s4_d2"
    },
    {
      "source": "k8s_p4_t5",
      "target": "k8s_p4_t5_s5"
    },
    {
      "source": "k8s_p4_t5_s5",
      "target": "k8s_p4_t5_s5_d1"
    },
    {
      "source": "k8s_p4_t5_s5",
      "target": "k8s_p4_t5_s5_d2"
    },
    {
      "source": "k8s_p4",
      "target": "k8s_p4_t6"
    },
    {
      "source": "k8s_p4_t6",
      "target": "k8s_p4_t6_s1"
    },
    {
      "source": "k8s_p4_t6_s1",
      "target": "k8s_p4_t6_s1_d1"
    },
    {
      "source": "k8s_p4_t6_s1",
      "target": "k8s_p4_t6_s1_d2"
    },
    {
      "source": "k8s_p4_t6",
      "target": "k8s_p4_t6_s2"
    },
    {
      "source": "k8s_p4_t6_s2",
      "target": "k8s_p4_t6_s2_d1"
    },
    {
      "source": "k8s_p4_t6_s2",
      "target": "k8s_p4_t6_s2_d2"
    },
    {
      "source": "k8s_p4_t6",
      "target": "k8s_p4_t6_s3"
    },
    {
      "source": "k8s_p4_t6_s3",
      "target": "k8s_p4_t6_s3_d1"
    },
    {
      "source": "k8s_p4_t6_s3",
      "target": "k8s_p4_t6_s3_d2"
    },
    {
      "source": "k8s_p4_t6",
      "target": "k8s_p4_t6_s4"
    },
    {
      "source": "k8s_p4_t6_s4",
      "target": "k8s_p4_t6_s4_d1"
    },
    {
      "source": "k8s_p4_t6_s4",
      "target": "k8s_p4_t6_s4_d2"
    },
    {
      "source": "k8s_p4_t6",
      "target": "k8s_p4_t6_s5"
    },
    {
      "source": "k8s_p4_t6_s5",
      "target": "k8s_p4_t6_s5_d1"
    },
    {
      "source": "k8s_p4_t6_s5",
      "target": "k8s_p4_t6_s5_d2"
    },
    {
      "source": "k8s_p5",
      "target": "k8s_p5_t1"
    },
    {
      "source": "k8s_p5_t1",
      "target": "k8s_p5_t1_s1"
    },
    {
      "source": "k8s_p5_t1_s1",
      "target": "k8s_p5_t1_s1_d1"
    },
    {
      "source": "k8s_p5_t1_s1",
      "target": "k8s_p5_t1_s1_d2"
    },
    {
      "source": "k8s_p5_t1",
      "target": "k8s_p5_t1_s2"
    },
    {
      "source": "k8s_p5_t1_s2",
      "target": "k8s_p5_t1_s2_d1"
    },
    {
      "source": "k8s_p5_t1_s2",
      "target": "k8s_p5_t1_s2_d2"
    },
    {
      "source": "k8s_p5_t1",
      "target": "k8s_p5_t1_s3"
    },
    {
      "source": "k8s_p5_t1_s3",
      "target": "k8s_p5_t1_s3_d1"
    },
    {
      "source": "k8s_p5_t1_s3",
      "target": "k8s_p5_t1_s3_d2"
    },
    {
      "source": "k8s_p5_t1",
      "target": "k8s_p5_t1_s4"
    },
    {
      "source": "k8s_p5_t1_s4",
      "target": "k8s_p5_t1_s4_d1"
    },
    {
      "source": "k8s_p5_t1_s4",
      "target": "k8s_p5_t1_s4_d2"
    },
    {
      "source": "k8s_p5_t1",
      "target": "k8s_p5_t1_s5"
    },
    {
      "source": "k8s_p5_t1_s5",
      "target": "k8s_p5_t1_s5_d1"
    },
    {
      "source": "k8s_p5_t1_s5",
      "target": "k8s_p5_t1_s5_d2"
    },
    {
      "source": "k8s_p5",
      "target": "k8s_p5_t2"
    },
    {
      "source": "k8s_p5_t2",
      "target": "k8s_p5_t2_s1"
    },
    {
      "source": "k8s_p5_t2_s1",
      "target": "k8s_p5_t2_s1_d1"
    },
    {
      "source": "k8s_p5_t2_s1",
      "target": "k8s_p5_t2_s1_d2"
    },
    {
      "source": "k8s_p5_t2",
      "target": "k8s_p5_t2_s2"
    },
    {
      "source": "k8s_p5_t2_s2",
      "target": "k8s_p5_t2_s2_d1"
    },
    {
      "source": "k8s_p5_t2_s2",
      "target": "k8s_p5_t2_s2_d2"
    },
    {
      "source": "k8s_p5_t2",
      "target": "k8s_p5_t2_s3"
    },
    {
      "source": "k8s_p5_t2_s3",
      "target": "k8s_p5_t2_s3_d1"
    },
    {
      "source": "k8s_p5_t2_s3",
      "target": "k8s_p5_t2_s3_d2"
    },
    {
      "source": "k8s_p5_t2",
      "target": "k8s_p5_t2_s4"
    },
    {
      "source": "k8s_p5_t2_s4",
      "target": "k8s_p5_t2_s4_d1"
    },
    {
      "source": "k8s_p5_t2_s4",
      "target": "k8s_p5_t2_s4_d2"
    },
    {
      "source": "k8s_p5_t2",
      "target": "k8s_p5_t2_s5"
    },
    {
      "source": "k8s_p5_t2_s5",
      "target": "k8s_p5_t2_s5_d1"
    },
    {
      "source": "k8s_p5_t2_s5",
      "target": "k8s_p5_t2_s5_d2"
    },
    {
      "source": "k8s_p5",
      "target": "k8s_p5_t3"
    },
    {
      "source": "k8s_p5_t3",
      "target": "k8s_p5_t3_s1"
    },
    {
      "source": "k8s_p5_t3_s1",
      "target": "k8s_p5_t3_s1_d1"
    },
    {
      "source": "k8s_p5_t3_s1",
      "target": "k8s_p5_t3_s1_d2"
    },
    {
      "source": "k8s_p5_t3",
      "target": "k8s_p5_t3_s2"
    },
    {
      "source": "k8s_p5_t3_s2",
      "target": "k8s_p5_t3_s2_d1"
    },
    {
      "source": "k8s_p5_t3_s2",
      "target": "k8s_p5_t3_s2_d2"
    },
    {
      "source": "k8s_p5_t3",
      "target": "k8s_p5_t3_s3"
    },
    {
      "source": "k8s_p5_t3_s3",
      "target": "k8s_p5_t3_s3_d1"
    },
    {
      "source": "k8s_p5_t3_s3",
      "target": "k8s_p5_t3_s3_d2"
    },
    {
      "source": "k8s_p5_t3",
      "target": "k8s_p5_t3_s4"
    },
    {
      "source": "k8s_p5_t3_s4",
      "target": "k8s_p5_t3_s4_d1"
    },
    {
      "source": "k8s_p5_t3_s4",
      "target": "k8s_p5_t3_s4_d2"
    },
    {
      "source": "k8s_p5_t3",
      "target": "k8s_p5_t3_s5"
    },
    {
      "source": "k8s_p5_t3_s5",
      "target": "k8s_p5_t3_s5_d1"
    },
    {
      "source": "k8s_p5_t3_s5",
      "target": "k8s_p5_t3_s5_d2"
    },
    {
      "source": "k8s_p5",
      "target": "k8s_p5_t4"
    },
    {
      "source": "k8s_p5_t4",
      "target": "k8s_p5_t4_s1"
    },
    {
      "source": "k8s_p5_t4_s1",
      "target": "k8s_p5_t4_s1_d1"
    },
    {
      "source": "k8s_p5_t4_s1",
      "target": "k8s_p5_t4_s1_d2"
    },
    {
      "source": "k8s_p5_t4",
      "target": "k8s_p5_t4_s2"
    },
    {
      "source": "k8s_p5_t4_s2",
      "target": "k8s_p5_t4_s2_d1"
    },
    {
      "source": "k8s_p5_t4_s2",
      "target": "k8s_p5_t4_s2_d2"
    },
    {
      "source": "k8s_p5_t4",
      "target": "k8s_p5_t4_s3"
    },
    {
      "source": "k8s_p5_t4_s3",
      "target": "k8s_p5_t4_s3_d1"
    },
    {
      "source": "k8s_p5_t4_s3",
      "target": "k8s_p5_t4_s3_d2"
    },
    {
      "source": "k8s_p5_t4",
      "target": "k8s_p5_t4_s4"
    },
    {
      "source": "k8s_p5_t4_s4",
      "target": "k8s_p5_t4_s4_d1"
    },
    {
      "source": "k8s_p5_t4_s4",
      "target": "k8s_p5_t4_s4_d2"
    },
    {
      "source": "k8s_p5_t4",
      "target": "k8s_p5_t4_s5"
    },
    {
      "source": "k8s_p5_t4_s5",
      "target": "k8s_p5_t4_s5_d1"
    },
    {
      "source": "k8s_p5_t4_s5",
      "target": "k8s_p5_t4_s5_d2"
    },
    {
      "source": "k8s_p5",
      "target": "k8s_p5_t5"
    },
    {
      "source": "k8s_p5_t5",
      "target": "k8s_p5_t5_s1"
    },
    {
      "source": "k8s_p5_t5_s1",
      "target": "k8s_p5_t5_s1_d1"
    },
    {
      "source": "k8s_p5_t5_s1",
      "target": "k8s_p5_t5_s1_d2"
    },
    {
      "source": "k8s_p5_t5",
      "target": "k8s_p5_t5_s2"
    },
    {
      "source": "k8s_p5_t5_s2",
      "target": "k8s_p5_t5_s2_d1"
    },
    {
      "source": "k8s_p5_t5_s2",
      "target": "k8s_p5_t5_s2_d2"
    },
    {
      "source": "k8s_p5_t5",
      "target": "k8s_p5_t5_s3"
    },
    {
      "source": "k8s_p5_t5_s3",
      "target": "k8s_p5_t5_s3_d1"
    },
    {
      "source": "k8s_p5_t5_s3",
      "target": "k8s_p5_t5_s3_d2"
    },
    {
      "source": "k8s_p5_t5",
      "target": "k8s_p5_t5_s4"
    },
    {
      "source": "k8s_p5_t5_s4",
      "target": "k8s_p5_t5_s4_d1"
    },
    {
      "source": "k8s_p5_t5_s4",
      "target": "k8s_p5_t5_s4_d2"
    },
    {
      "source": "k8s_p5_t5",
      "target": "k8s_p5_t5_s5"
    },
    {
      "source": "k8s_p5_t5_s5",
      "target": "k8s_p5_t5_s5_d1"
    },
    {
      "source": "k8s_p5_t5_s5",
      "target": "k8s_p5_t5_s5_d2"
    },
    {
      "source": "k8s_p5",
      "target": "k8s_p5_t6"
    },
    {
      "source": "k8s_p5_t6",
      "target": "k8s_p5_t6_s1"
    },
    {
      "source": "k8s_p5_t6_s1",
      "target": "k8s_p5_t6_s1_d1"
    },
    {
      "source": "k8s_p5_t6_s1",
      "target": "k8s_p5_t6_s1_d2"
    },
    {
      "source": "k8s_p5_t6",
      "target": "k8s_p5_t6_s2"
    },
    {
      "source": "k8s_p5_t6_s2",
      "target": "k8s_p5_t6_s2_d1"
    },
    {
      "source": "k8s_p5_t6_s2",
      "target": "k8s_p5_t6_s2_d2"
    },
    {
      "source": "k8s_p5_t6",
      "target": "k8s_p5_t6_s3"
    },
    {
      "source": "k8s_p5_t6_s3",
      "target": "k8s_p5_t6_s3_d1"
    },
    {
      "source": "k8s_p5_t6_s3",
      "target": "k8s_p5_t6_s3_d2"
    },
    {
      "source": "k8s_p5_t6",
      "target": "k8s_p5_t6_s4"
    },
    {
      "source": "k8s_p5_t6_s4",
      "target": "k8s_p5_t6_s4_d1"
    },
    {
      "source": "k8s_p5_t6_s4",
      "target": "k8s_p5_t6_s4_d2"
    },
    {
      "source": "k8s_p5_t6",
      "target": "k8s_p5_t6_s5"
    },
    {
      "source": "k8s_p5_t6_s5",
      "target": "k8s_p5_t6_s5_d1"
    },
    {
      "source": "k8s_p5_t6_s5",
      "target": "k8s_p5_t6_s5_d2"
    },
    {
      "source": "k8s_p6",
      "target": "k8s_p6_t1"
    },
    {
      "source": "k8s_p6_t1",
      "target": "k8s_p6_t1_s1"
    },
    {
      "source": "k8s_p6_t1_s1",
      "target": "k8s_p6_t1_s1_d1"
    },
    {
      "source": "k8s_p6_t1_s1",
      "target": "k8s_p6_t1_s1_d2"
    },
    {
      "source": "k8s_p6_t1",
      "target": "k8s_p6_t1_s2"
    },
    {
      "source": "k8s_p6_t1_s2",
      "target": "k8s_p6_t1_s2_d1"
    },
    {
      "source": "k8s_p6_t1_s2",
      "target": "k8s_p6_t1_s2_d2"
    },
    {
      "source": "k8s_p6_t1",
      "target": "k8s_p6_t1_s3"
    },
    {
      "source": "k8s_p6_t1_s3",
      "target": "k8s_p6_t1_s3_d1"
    },
    {
      "source": "k8s_p6_t1_s3",
      "target": "k8s_p6_t1_s3_d2"
    },
    {
      "source": "k8s_p6_t1",
      "target": "k8s_p6_t1_s4"
    },
    {
      "source": "k8s_p6_t1_s4",
      "target": "k8s_p6_t1_s4_d1"
    },
    {
      "source": "k8s_p6_t1_s4",
      "target": "k8s_p6_t1_s4_d2"
    },
    {
      "source": "k8s_p6_t1",
      "target": "k8s_p6_t1_s5"
    },
    {
      "source": "k8s_p6_t1_s5",
      "target": "k8s_p6_t1_s5_d1"
    },
    {
      "source": "k8s_p6_t1_s5",
      "target": "k8s_p6_t1_s5_d2"
    },
    {
      "source": "k8s_p6",
      "target": "k8s_p6_t2"
    },
    {
      "source": "k8s_p6_t2",
      "target": "k8s_p6_t2_s1"
    },
    {
      "source": "k8s_p6_t2_s1",
      "target": "k8s_p6_t2_s1_d1"
    },
    {
      "source": "k8s_p6_t2_s1",
      "target": "k8s_p6_t2_s1_d2"
    },
    {
      "source": "k8s_p6_t2",
      "target": "k8s_p6_t2_s2"
    },
    {
      "source": "k8s_p6_t2_s2",
      "target": "k8s_p6_t2_s2_d1"
    },
    {
      "source": "k8s_p6_t2_s2",
      "target": "k8s_p6_t2_s2_d2"
    },
    {
      "source": "k8s_p6_t2",
      "target": "k8s_p6_t2_s3"
    },
    {
      "source": "k8s_p6_t2_s3",
      "target": "k8s_p6_t2_s3_d1"
    },
    {
      "source": "k8s_p6_t2_s3",
      "target": "k8s_p6_t2_s3_d2"
    },
    {
      "source": "k8s_p6_t2",
      "target": "k8s_p6_t2_s4"
    },
    {
      "source": "k8s_p6_t2_s4",
      "target": "k8s_p6_t2_s4_d1"
    },
    {
      "source": "k8s_p6_t2_s4",
      "target": "k8s_p6_t2_s4_d2"
    },
    {
      "source": "k8s_p6_t2",
      "target": "k8s_p6_t2_s5"
    },
    {
      "source": "k8s_p6_t2_s5",
      "target": "k8s_p6_t2_s5_d1"
    },
    {
      "source": "k8s_p6_t2_s5",
      "target": "k8s_p6_t2_s5_d2"
    },
    {
      "source": "k8s_p6",
      "target": "k8s_p6_t3"
    },
    {
      "source": "k8s_p6_t3",
      "target": "k8s_p6_t3_s1"
    },
    {
      "source": "k8s_p6_t3_s1",
      "target": "k8s_p6_t3_s1_d1"
    },
    {
      "source": "k8s_p6_t3_s1",
      "target": "k8s_p6_t3_s1_d2"
    },
    {
      "source": "k8s_p6_t3",
      "target": "k8s_p6_t3_s2"
    },
    {
      "source": "k8s_p6_t3_s2",
      "target": "k8s_p6_t3_s2_d1"
    },
    {
      "source": "k8s_p6_t3_s2",
      "target": "k8s_p6_t3_s2_d2"
    },
    {
      "source": "k8s_p6_t3",
      "target": "k8s_p6_t3_s3"
    },
    {
      "source": "k8s_p6_t3_s3",
      "target": "k8s_p6_t3_s3_d1"
    },
    {
      "source": "k8s_p6_t3_s3",
      "target": "k8s_p6_t3_s3_d2"
    },
    {
      "source": "k8s_p6_t3",
      "target": "k8s_p6_t3_s4"
    },
    {
      "source": "k8s_p6_t3_s4",
      "target": "k8s_p6_t3_s4_d1"
    },
    {
      "source": "k8s_p6_t3_s4",
      "target": "k8s_p6_t3_s4_d2"
    },
    {
      "source": "k8s_p6_t3",
      "target": "k8s_p6_t3_s5"
    },
    {
      "source": "k8s_p6_t3_s5",
      "target": "k8s_p6_t3_s5_d1"
    },
    {
      "source": "k8s_p6_t3_s5",
      "target": "k8s_p6_t3_s5_d2"
    },
    {
      "source": "k8s_p6",
      "target": "k8s_p6_t4"
    },
    {
      "source": "k8s_p6_t4",
      "target": "k8s_p6_t4_s1"
    },
    {
      "source": "k8s_p6_t4_s1",
      "target": "k8s_p6_t4_s1_d1"
    },
    {
      "source": "k8s_p6_t4_s1",
      "target": "k8s_p6_t4_s1_d2"
    },
    {
      "source": "k8s_p6_t4",
      "target": "k8s_p6_t4_s2"
    },
    {
      "source": "k8s_p6_t4_s2",
      "target": "k8s_p6_t4_s2_d1"
    },
    {
      "source": "k8s_p6_t4_s2",
      "target": "k8s_p6_t4_s2_d2"
    },
    {
      "source": "k8s_p6_t4",
      "target": "k8s_p6_t4_s3"
    },
    {
      "source": "k8s_p6_t4_s3",
      "target": "k8s_p6_t4_s3_d1"
    },
    {
      "source": "k8s_p6_t4_s3",
      "target": "k8s_p6_t4_s3_d2"
    },
    {
      "source": "k8s_p6_t4",
      "target": "k8s_p6_t4_s4"
    },
    {
      "source": "k8s_p6_t4_s4",
      "target": "k8s_p6_t4_s4_d1"
    },
    {
      "source": "k8s_p6_t4_s4",
      "target": "k8s_p6_t4_s4_d2"
    },
    {
      "source": "k8s_p6_t4",
      "target": "k8s_p6_t4_s5"
    },
    {
      "source": "k8s_p6_t4_s5",
      "target": "k8s_p6_t4_s5_d1"
    },
    {
      "source": "k8s_p6_t4_s5",
      "target": "k8s_p6_t4_s5_d2"
    },
    {
      "source": "k8s_p6",
      "target": "k8s_p6_t5"
    },
    {
      "source": "k8s_p6_t5",
      "target": "k8s_p6_t5_s1"
    },
    {
      "source": "k8s_p6_t5_s1",
      "target": "k8s_p6_t5_s1_d1"
    },
    {
      "source": "k8s_p6_t5_s1",
      "target": "k8s_p6_t5_s1_d2"
    },
    {
      "source": "k8s_p6_t5",
      "target": "k8s_p6_t5_s2"
    },
    {
      "source": "k8s_p6_t5_s2",
      "target": "k8s_p6_t5_s2_d1"
    },
    {
      "source": "k8s_p6_t5_s2",
      "target": "k8s_p6_t5_s2_d2"
    },
    {
      "source": "k8s_p6_t5",
      "target": "k8s_p6_t5_s3"
    },
    {
      "source": "k8s_p6_t5_s3",
      "target": "k8s_p6_t5_s3_d1"
    },
    {
      "source": "k8s_p6_t5_s3",
      "target": "k8s_p6_t5_s3_d2"
    },
    {
      "source": "k8s_p6_t5",
      "target": "k8s_p6_t5_s4"
    },
    {
      "source": "k8s_p6_t5_s4",
      "target": "k8s_p6_t5_s4_d1"
    },
    {
      "source": "k8s_p6_t5_s4",
      "target": "k8s_p6_t5_s4_d2"
    },
    {
      "source": "k8s_p6_t5",
      "target": "k8s_p6_t5_s5"
    },
    {
      "source": "k8s_p6_t5_s5",
      "target": "k8s_p6_t5_s5_d1"
    },
    {
      "source": "k8s_p6_t5_s5",
      "target": "k8s_p6_t5_s5_d2"
    },
    {
      "source": "k8s_p6",
      "target": "k8s_p6_t6"
    },
    {
      "source": "k8s_p6_t6",
      "target": "k8s_p6_t6_s1"
    },
    {
      "source": "k8s_p6_t6_s1",
      "target": "k8s_p6_t6_s1_d1"
    },
    {
      "source": "k8s_p6_t6_s1",
      "target": "k8s_p6_t6_s1_d2"
    },
    {
      "source": "k8s_p6_t6",
      "target": "k8s_p6_t6_s2"
    },
    {
      "source": "k8s_p6_t6_s2",
      "target": "k8s_p6_t6_s2_d1"
    },
    {
      "source": "k8s_p6_t6_s2",
      "target": "k8s_p6_t6_s2_d2"
    },
    {
      "source": "k8s_p6_t6",
      "target": "k8s_p6_t6_s3"
    },
    {
      "source": "k8s_p6_t6_s3",
      "target": "k8s_p6_t6_s3_d1"
    },
    {
      "source": "k8s_p6_t6_s3",
      "target": "k8s_p6_t6_s3_d2"
    },
    {
      "source": "k8s_p6_t6",
      "target": "k8s_p6_t6_s4"
    },
    {
      "source": "k8s_p6_t6_s4",
      "target": "k8s_p6_t6_s4_d1"
    },
    {
      "source": "k8s_p6_t6_s4",
      "target": "k8s_p6_t6_s4_d2"
    },
    {
      "source": "k8s_p6_t6",
      "target": "k8s_p6_t6_s5"
    },
    {
      "source": "k8s_p6_t6_s5",
      "target": "k8s_p6_t6_s5_d1"
    },
    {
      "source": "k8s_p6_t6_s5",
      "target": "k8s_p6_t6_s5_d2"
    },
    {
      "source": "k8s_p7",
      "target": "k8s_p7_t1"
    },
    {
      "source": "k8s_p7_t1",
      "target": "k8s_p7_t1_s1"
    },
    {
      "source": "k8s_p7_t1_s1",
      "target": "k8s_p7_t1_s1_d1"
    },
    {
      "source": "k8s_p7_t1_s1",
      "target": "k8s_p7_t1_s1_d2"
    },
    {
      "source": "k8s_p7_t1",
      "target": "k8s_p7_t1_s2"
    },
    {
      "source": "k8s_p7_t1_s2",
      "target": "k8s_p7_t1_s2_d1"
    },
    {
      "source": "k8s_p7_t1_s2",
      "target": "k8s_p7_t1_s2_d2"
    },
    {
      "source": "k8s_p7_t1",
      "target": "k8s_p7_t1_s3"
    },
    {
      "source": "k8s_p7_t1_s3",
      "target": "k8s_p7_t1_s3_d1"
    },
    {
      "source": "k8s_p7_t1_s3",
      "target": "k8s_p7_t1_s3_d2"
    },
    {
      "source": "k8s_p7_t1",
      "target": "k8s_p7_t1_s4"
    },
    {
      "source": "k8s_p7_t1_s4",
      "target": "k8s_p7_t1_s4_d1"
    },
    {
      "source": "k8s_p7_t1_s4",
      "target": "k8s_p7_t1_s4_d2"
    },
    {
      "source": "k8s_p7_t1",
      "target": "k8s_p7_t1_s5"
    },
    {
      "source": "k8s_p7_t1_s5",
      "target": "k8s_p7_t1_s5_d1"
    },
    {
      "source": "k8s_p7_t1_s5",
      "target": "k8s_p7_t1_s5_d2"
    },
    {
      "source": "k8s_p7",
      "target": "k8s_p7_t2"
    },
    {
      "source": "k8s_p7_t2",
      "target": "k8s_p7_t2_s1"
    },
    {
      "source": "k8s_p7_t2_s1",
      "target": "k8s_p7_t2_s1_d1"
    },
    {
      "source": "k8s_p7_t2_s1",
      "target": "k8s_p7_t2_s1_d2"
    },
    {
      "source": "k8s_p7_t2",
      "target": "k8s_p7_t2_s2"
    },
    {
      "source": "k8s_p7_t2_s2",
      "target": "k8s_p7_t2_s2_d1"
    },
    {
      "source": "k8s_p7_t2_s2",
      "target": "k8s_p7_t2_s2_d2"
    },
    {
      "source": "k8s_p7_t2",
      "target": "k8s_p7_t2_s3"
    },
    {
      "source": "k8s_p7_t2_s3",
      "target": "k8s_p7_t2_s3_d1"
    },
    {
      "source": "k8s_p7_t2_s3",
      "target": "k8s_p7_t2_s3_d2"
    },
    {
      "source": "k8s_p7_t2",
      "target": "k8s_p7_t2_s4"
    },
    {
      "source": "k8s_p7_t2_s4",
      "target": "k8s_p7_t2_s4_d1"
    },
    {
      "source": "k8s_p7_t2_s4",
      "target": "k8s_p7_t2_s4_d2"
    },
    {
      "source": "k8s_p7_t2",
      "target": "k8s_p7_t2_s5"
    },
    {
      "source": "k8s_p7_t2_s5",
      "target": "k8s_p7_t2_s5_d1"
    },
    {
      "source": "k8s_p7_t2_s5",
      "target": "k8s_p7_t2_s5_d2"
    },
    {
      "source": "k8s_p7",
      "target": "k8s_p7_t3"
    },
    {
      "source": "k8s_p7_t3",
      "target": "k8s_p7_t3_s1"
    },
    {
      "source": "k8s_p7_t3_s1",
      "target": "k8s_p7_t3_s1_d1"
    },
    {
      "source": "k8s_p7_t3_s1",
      "target": "k8s_p7_t3_s1_d2"
    },
    {
      "source": "k8s_p7_t3",
      "target": "k8s_p7_t3_s2"
    },
    {
      "source": "k8s_p7_t3_s2",
      "target": "k8s_p7_t3_s2_d1"
    },
    {
      "source": "k8s_p7_t3_s2",
      "target": "k8s_p7_t3_s2_d2"
    },
    {
      "source": "k8s_p7_t3",
      "target": "k8s_p7_t3_s3"
    },
    {
      "source": "k8s_p7_t3_s3",
      "target": "k8s_p7_t3_s3_d1"
    },
    {
      "source": "k8s_p7_t3_s3",
      "target": "k8s_p7_t3_s3_d2"
    },
    {
      "source": "k8s_p7_t3",
      "target": "k8s_p7_t3_s4"
    },
    {
      "source": "k8s_p7_t3_s4",
      "target": "k8s_p7_t3_s4_d1"
    },
    {
      "source": "k8s_p7_t3_s4",
      "target": "k8s_p7_t3_s4_d2"
    },
    {
      "source": "k8s_p7_t3",
      "target": "k8s_p7_t3_s5"
    },
    {
      "source": "k8s_p7_t3_s5",
      "target": "k8s_p7_t3_s5_d1"
    },
    {
      "source": "k8s_p7_t3_s5",
      "target": "k8s_p7_t3_s5_d2"
    },
    {
      "source": "k8s_p7",
      "target": "k8s_p7_t4"
    },
    {
      "source": "k8s_p7_t4",
      "target": "k8s_p7_t4_s1"
    },
    {
      "source": "k8s_p7_t4_s1",
      "target": "k8s_p7_t4_s1_d1"
    },
    {
      "source": "k8s_p7_t4_s1",
      "target": "k8s_p7_t4_s1_d2"
    },
    {
      "source": "k8s_p7_t4",
      "target": "k8s_p7_t4_s2"
    },
    {
      "source": "k8s_p7_t4_s2",
      "target": "k8s_p7_t4_s2_d1"
    },
    {
      "source": "k8s_p7_t4_s2",
      "target": "k8s_p7_t4_s2_d2"
    },
    {
      "source": "k8s_p7_t4",
      "target": "k8s_p7_t4_s3"
    },
    {
      "source": "k8s_p7_t4_s3",
      "target": "k8s_p7_t4_s3_d1"
    },
    {
      "source": "k8s_p7_t4_s3",
      "target": "k8s_p7_t4_s3_d2"
    },
    {
      "source": "k8s_p7_t4",
      "target": "k8s_p7_t4_s4"
    },
    {
      "source": "k8s_p7_t4_s4",
      "target": "k8s_p7_t4_s4_d1"
    },
    {
      "source": "k8s_p7_t4_s4",
      "target": "k8s_p7_t4_s4_d2"
    },
    {
      "source": "k8s_p7_t4",
      "target": "k8s_p7_t4_s5"
    },
    {
      "source": "k8s_p7_t4_s5",
      "target": "k8s_p7_t4_s5_d1"
    },
    {
      "source": "k8s_p7_t4_s5",
      "target": "k8s_p7_t4_s5_d2"
    },
    {
      "source": "k8s_p7",
      "target": "k8s_p7_t5"
    },
    {
      "source": "k8s_p7_t5",
      "target": "k8s_p7_t5_s1"
    },
    {
      "source": "k8s_p7_t5_s1",
      "target": "k8s_p7_t5_s1_d1"
    },
    {
      "source": "k8s_p7_t5_s1",
      "target": "k8s_p7_t5_s1_d2"
    },
    {
      "source": "k8s_p7_t5",
      "target": "k8s_p7_t5_s2"
    },
    {
      "source": "k8s_p7_t5_s2",
      "target": "k8s_p7_t5_s2_d1"
    },
    {
      "source": "k8s_p7_t5_s2",
      "target": "k8s_p7_t5_s2_d2"
    },
    {
      "source": "k8s_p7_t5",
      "target": "k8s_p7_t5_s3"
    },
    {
      "source": "k8s_p7_t5_s3",
      "target": "k8s_p7_t5_s3_d1"
    },
    {
      "source": "k8s_p7_t5_s3",
      "target": "k8s_p7_t5_s3_d2"
    },
    {
      "source": "k8s_p7_t5",
      "target": "k8s_p7_t5_s4"
    },
    {
      "source": "k8s_p7_t5_s4",
      "target": "k8s_p7_t5_s4_d1"
    },
    {
      "source": "k8s_p7_t5_s4",
      "target": "k8s_p7_t5_s4_d2"
    },
    {
      "source": "k8s_p7_t5",
      "target": "k8s_p7_t5_s5"
    },
    {
      "source": "k8s_p7_t5_s5",
      "target": "k8s_p7_t5_s5_d1"
    },
    {
      "source": "k8s_p7_t5_s5",
      "target": "k8s_p7_t5_s5_d2"
    },
    {
      "source": "k8s_p7",
      "target": "k8s_p7_t6"
    },
    {
      "source": "k8s_p7_t6",
      "target": "k8s_p7_t6_s1"
    },
    {
      "source": "k8s_p7_t6_s1",
      "target": "k8s_p7_t6_s1_d1"
    },
    {
      "source": "k8s_p7_t6_s1",
      "target": "k8s_p7_t6_s1_d2"
    },
    {
      "source": "k8s_p7_t6",
      "target": "k8s_p7_t6_s2"
    },
    {
      "source": "k8s_p7_t6_s2",
      "target": "k8s_p7_t6_s2_d1"
    },
    {
      "source": "k8s_p7_t6_s2",
      "target": "k8s_p7_t6_s2_d2"
    },
    {
      "source": "k8s_p7_t6",
      "target": "k8s_p7_t6_s3"
    },
    {
      "source": "k8s_p7_t6_s3",
      "target": "k8s_p7_t6_s3_d1"
    },
    {
      "source": "k8s_p7_t6_s3",
      "target": "k8s_p7_t6_s3_d2"
    },
    {
      "source": "k8s_p7_t6",
      "target": "k8s_p7_t6_s4"
    },
    {
      "source": "k8s_p7_t6_s4",
      "target": "k8s_p7_t6_s4_d1"
    },
    {
      "source": "k8s_p7_t6_s4",
      "target": "k8s_p7_t6_s4_d2"
    },
    {
      "source": "k8s_p7_t6",
      "target": "k8s_p7_t6_s5"
    },
    {
      "source": "k8s_p7_t6_s5",
      "target": "k8s_p7_t6_s5_d1"
    },
    {
      "source": "k8s_p7_t6_s5",
      "target": "k8s_p7_t6_s5_d2"
    },
    {
      "source": "k8s_p8",
      "target": "k8s_p8_t1"
    },
    {
      "source": "k8s_p8_t1",
      "target": "k8s_p8_t1_s1"
    },
    {
      "source": "k8s_p8_t1_s1",
      "target": "k8s_p8_t1_s1_d1"
    },
    {
      "source": "k8s_p8_t1_s1",
      "target": "k8s_p8_t1_s1_d2"
    },
    {
      "source": "k8s_p8_t1",
      "target": "k8s_p8_t1_s2"
    },
    {
      "source": "k8s_p8_t1_s2",
      "target": "k8s_p8_t1_s2_d1"
    },
    {
      "source": "k8s_p8_t1_s2",
      "target": "k8s_p8_t1_s2_d2"
    },
    {
      "source": "k8s_p8_t1",
      "target": "k8s_p8_t1_s3"
    },
    {
      "source": "k8s_p8_t1_s3",
      "target": "k8s_p8_t1_s3_d1"
    },
    {
      "source": "k8s_p8_t1_s3",
      "target": "k8s_p8_t1_s3_d2"
    },
    {
      "source": "k8s_p8_t1",
      "target": "k8s_p8_t1_s4"
    },
    {
      "source": "k8s_p8_t1_s4",
      "target": "k8s_p8_t1_s4_d1"
    },
    {
      "source": "k8s_p8_t1_s4",
      "target": "k8s_p8_t1_s4_d2"
    },
    {
      "source": "k8s_p8_t1",
      "target": "k8s_p8_t1_s5"
    },
    {
      "source": "k8s_p8_t1_s5",
      "target": "k8s_p8_t1_s5_d1"
    },
    {
      "source": "k8s_p8_t1_s5",
      "target": "k8s_p8_t1_s5_d2"
    },
    {
      "source": "k8s_p8",
      "target": "k8s_p8_t2"
    },
    {
      "source": "k8s_p8_t2",
      "target": "k8s_p8_t2_s1"
    },
    {
      "source": "k8s_p8_t2_s1",
      "target": "k8s_p8_t2_s1_d1"
    },
    {
      "source": "k8s_p8_t2_s1",
      "target": "k8s_p8_t2_s1_d2"
    },
    {
      "source": "k8s_p8_t2",
      "target": "k8s_p8_t2_s2"
    },
    {
      "source": "k8s_p8_t2_s2",
      "target": "k8s_p8_t2_s2_d1"
    },
    {
      "source": "k8s_p8_t2_s2",
      "target": "k8s_p8_t2_s2_d2"
    },
    {
      "source": "k8s_p8_t2",
      "target": "k8s_p8_t2_s3"
    },
    {
      "source": "k8s_p8_t2_s3",
      "target": "k8s_p8_t2_s3_d1"
    },
    {
      "source": "k8s_p8_t2_s3",
      "target": "k8s_p8_t2_s3_d2"
    },
    {
      "source": "k8s_p8_t2",
      "target": "k8s_p8_t2_s4"
    },
    {
      "source": "k8s_p8_t2_s4",
      "target": "k8s_p8_t2_s4_d1"
    },
    {
      "source": "k8s_p8_t2_s4",
      "target": "k8s_p8_t2_s4_d2"
    },
    {
      "source": "k8s_p8_t2",
      "target": "k8s_p8_t2_s5"
    },
    {
      "source": "k8s_p8_t2_s5",
      "target": "k8s_p8_t2_s5_d1"
    },
    {
      "source": "k8s_p8_t2_s5",
      "target": "k8s_p8_t2_s5_d2"
    },
    {
      "source": "k8s_p8",
      "target": "k8s_p8_t3"
    },
    {
      "source": "k8s_p8_t3",
      "target": "k8s_p8_t3_s1"
    },
    {
      "source": "k8s_p8_t3_s1",
      "target": "k8s_p8_t3_s1_d1"
    },
    {
      "source": "k8s_p8_t3_s1",
      "target": "k8s_p8_t3_s1_d2"
    },
    {
      "source": "k8s_p8_t3",
      "target": "k8s_p8_t3_s2"
    },
    {
      "source": "k8s_p8_t3_s2",
      "target": "k8s_p8_t3_s2_d1"
    },
    {
      "source": "k8s_p8_t3_s2",
      "target": "k8s_p8_t3_s2_d2"
    },
    {
      "source": "k8s_p8_t3",
      "target": "k8s_p8_t3_s3"
    },
    {
      "source": "k8s_p8_t3_s3",
      "target": "k8s_p8_t3_s3_d1"
    },
    {
      "source": "k8s_p8_t3_s3",
      "target": "k8s_p8_t3_s3_d2"
    },
    {
      "source": "k8s_p8_t3",
      "target": "k8s_p8_t3_s4"
    },
    {
      "source": "k8s_p8_t3_s4",
      "target": "k8s_p8_t3_s4_d1"
    },
    {
      "source": "k8s_p8_t3_s4",
      "target": "k8s_p8_t3_s4_d2"
    },
    {
      "source": "k8s_p8_t3",
      "target": "k8s_p8_t3_s5"
    },
    {
      "source": "k8s_p8_t3_s5",
      "target": "k8s_p8_t3_s5_d1"
    },
    {
      "source": "k8s_p8_t3_s5",
      "target": "k8s_p8_t3_s5_d2"
    },
    {
      "source": "k8s_p8",
      "target": "k8s_p8_t4"
    },
    {
      "source": "k8s_p8_t4",
      "target": "k8s_p8_t4_s1"
    },
    {
      "source": "k8s_p8_t4_s1",
      "target": "k8s_p8_t4_s1_d1"
    },
    {
      "source": "k8s_p8_t4_s1",
      "target": "k8s_p8_t4_s1_d2"
    },
    {
      "source": "k8s_p8_t4",
      "target": "k8s_p8_t4_s2"
    },
    {
      "source": "k8s_p8_t4_s2",
      "target": "k8s_p8_t4_s2_d1"
    },
    {
      "source": "k8s_p8_t4_s2",
      "target": "k8s_p8_t4_s2_d2"
    },
    {
      "source": "k8s_p8_t4",
      "target": "k8s_p8_t4_s3"
    },
    {
      "source": "k8s_p8_t4_s3",
      "target": "k8s_p8_t4_s3_d1"
    },
    {
      "source": "k8s_p8_t4_s3",
      "target": "k8s_p8_t4_s3_d2"
    },
    {
      "source": "k8s_p8_t4",
      "target": "k8s_p8_t4_s4"
    },
    {
      "source": "k8s_p8_t4_s4",
      "target": "k8s_p8_t4_s4_d1"
    },
    {
      "source": "k8s_p8_t4_s4",
      "target": "k8s_p8_t4_s4_d2"
    },
    {
      "source": "k8s_p8_t4",
      "target": "k8s_p8_t4_s5"
    },
    {
      "source": "k8s_p8_t4_s5",
      "target": "k8s_p8_t4_s5_d1"
    },
    {
      "source": "k8s_p8_t4_s5",
      "target": "k8s_p8_t4_s5_d2"
    },
    {
      "source": "k8s_p8",
      "target": "k8s_p8_t5"
    },
    {
      "source": "k8s_p8_t5",
      "target": "k8s_p8_t5_s1"
    },
    {
      "source": "k8s_p8_t5_s1",
      "target": "k8s_p8_t5_s1_d1"
    },
    {
      "source": "k8s_p8_t5_s1",
      "target": "k8s_p8_t5_s1_d2"
    },
    {
      "source": "k8s_p8_t5",
      "target": "k8s_p8_t5_s2"
    },
    {
      "source": "k8s_p8_t5_s2",
      "target": "k8s_p8_t5_s2_d1"
    },
    {
      "source": "k8s_p8_t5_s2",
      "target": "k8s_p8_t5_s2_d2"
    },
    {
      "source": "k8s_p8_t5",
      "target": "k8s_p8_t5_s3"
    },
    {
      "source": "k8s_p8_t5_s3",
      "target": "k8s_p8_t5_s3_d1"
    },
    {
      "source": "k8s_p8_t5_s3",
      "target": "k8s_p8_t5_s3_d2"
    },
    {
      "source": "k8s_p8_t5",
      "target": "k8s_p8_t5_s4"
    },
    {
      "source": "k8s_p8_t5_s4",
      "target": "k8s_p8_t5_s4_d1"
    },
    {
      "source": "k8s_p8_t5_s4",
      "target": "k8s_p8_t5_s4_d2"
    },
    {
      "source": "k8s_p8_t5",
      "target": "k8s_p8_t5_s5"
    },
    {
      "source": "k8s_p8_t5_s5",
      "target": "k8s_p8_t5_s5_d1"
    },
    {
      "source": "k8s_p8_t5_s5",
      "target": "k8s_p8_t5_s5_d2"
    },
    {
      "source": "k8s_p8",
      "target": "k8s_p8_t6"
    },
    {
      "source": "k8s_p8_t6",
      "target": "k8s_p8_t6_s1"
    },
    {
      "source": "k8s_p8_t6_s1",
      "target": "k8s_p8_t6_s1_d1"
    },
    {
      "source": "k8s_p8_t6_s1",
      "target": "k8s_p8_t6_s1_d2"
    },
    {
      "source": "k8s_p8_t6",
      "target": "k8s_p8_t6_s2"
    },
    {
      "source": "k8s_p8_t6_s2",
      "target": "k8s_p8_t6_s2_d1"
    },
    {
      "source": "k8s_p8_t6_s2",
      "target": "k8s_p8_t6_s2_d2"
    },
    {
      "source": "k8s_p8_t6",
      "target": "k8s_p8_t6_s3"
    },
    {
      "source": "k8s_p8_t6_s3",
      "target": "k8s_p8_t6_s3_d1"
    },
    {
      "source": "k8s_p8_t6_s3",
      "target": "k8s_p8_t6_s3_d2"
    },
    {
      "source": "k8s_p8_t6",
      "target": "k8s_p8_t6_s4"
    },
    {
      "source": "k8s_p8_t6_s4",
      "target": "k8s_p8_t6_s4_d1"
    },
    {
      "source": "k8s_p8_t6_s4",
      "target": "k8s_p8_t6_s4_d2"
    },
    {
      "source": "k8s_p8_t6",
      "target": "k8s_p8_t6_s5"
    },
    {
      "source": "k8s_p8_t6_s5",
      "target": "k8s_p8_t6_s5_d1"
    },
    {
      "source": "k8s_p8_t6_s5",
      "target": "k8s_p8_t6_s5_d2"
    }
  ]
};
