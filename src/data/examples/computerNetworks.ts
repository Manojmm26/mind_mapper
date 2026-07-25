import { MindMapData } from "../../services/llmService";

export const COMPUTER_NETWORKS_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "net_root",
      "label": "Computer Networks",
      "description": "Global interconnected digital communication systems utilizing standard protocol suites for reliable data transmission.",
      "type": "topic"
    },
    {
      "id": "net_p1",
      "label": "Physical & Data Link",
      "description": "Layer 1 and 2 operations including medium access, framing, and signal modulation.",
      "type": "topic"
    },
    {
      "id": "net_p2",
      "label": "Network Layer & IP",
      "description": "Layer 3 packet routing, addressing architectures, and protocol encapsulation.",
      "type": "topic"
    },
    {
      "id": "net_p3",
      "label": "Routing Protocols",
      "description": "Dynamic path selection using distance-vector and link-state algorithms across AS boundaries.",
      "type": "topic"
    },
    {
      "id": "net_p4",
      "label": "Transport Layer",
      "description": "End-to-end connection state, flow control, congestion mitigation, and reliable delivery.",
      "type": "topic"
    },
    {
      "id": "net_p5",
      "label": "Application Protocols",
      "description": "High-level protocols for web, email, and name resolution built on socket interfaces.",
      "type": "topic"
    },
    {
      "id": "net_p6",
      "label": "Network Security",
      "description": "Cryptographic protocols, packet filtering, and identity verification mechanisms.",
      "type": "topic"
    },
    {
      "id": "net_p7",
      "label": "CDN & Modern Internet",
      "description": "Distributed caching, edge computing, peering agreements, and multimedia delivery.",
      "type": "topic"
    },
    {
      "id": "net_p1_t0",
      "label": "Information Theory",
      "description": "WiFi 2.4GHz channel 1 operates at center frequency 2412 MHz with a standard 20MHz spread.",
      "type": "topic"
    },
    {
      "id": "net_p1_t0_s0",
      "label": "Shannon capacity CBlog21SNR",
      "description": "Shannon capacity C=B*log2(1+SNR)",
      "type": "concept"
    },
    {
      "id": "net_p1_t0_s0_l0",
      "label": "Nyquist sampling",
      "description": "Nyquist sampling 2B samples/sec",
      "type": "example"
    },
    {
      "id": "net_p1_t0_s0_l1",
      "label": "QAM64 6",
      "description": "QAM-64 6 bits per symbol",
      "type": "example"
    },
    {
      "id": "net_p1_t0_s1",
      "label": "OFDM subcarrier orthogonality",
      "description": "OFDM subcarrier orthogonality guard interval cyclic prefix",
      "type": "concept"
    },
    {
      "id": "net_p1_t0_s1_l0",
      "label": "80211ax WiFi",
      "description": "802.11ax (WiFi 6) OFDMA resource unit allocation",
      "type": "example"
    },
    {
      "id": "net_p1_t0_s1_l1",
      "label": "Ethernet frame",
      "description": "Ethernet frame: preamble(7B)+SFD(1B)+dst MAC(6B)+src MAC(6B)+EtherType(2B)+payload+FCS(4B)",
      "type": "example"
    },
    {
      "id": "net_p1_t0_s2",
      "label": "8021Q VLAN tag",
      "description": "802.1Q VLAN tag 4 bytes TCI (PCP/DEI/VID)",
      "type": "concept"
    },
    {
      "id": "net_p1_t0_s2_l0",
      "label": "MAC learning",
      "description": "MAC learning flooding unknown unicast frames",
      "type": "example"
    },
    {
      "id": "net_p1_t0_s2_l1",
      "label": "STP BPDU",
      "description": "STP BPDU election root bridge lowest bridge ID",
      "type": "example"
    },
    {
      "id": "net_p1_t0_s3",
      "label": "RSTP port states",
      "description": "RSTP port states (discarding/learning/forwarding)",
      "type": "concept"
    },
    {
      "id": "net_p1_t0_s3_l0",
      "label": "CRC32 polynomial",
      "description": "CRC32 polynomial division error detection",
      "type": "example"
    },
    {
      "id": "net_p1_t0_s3_l1",
      "label": "fiber multimode",
      "description": "fiber multimode vs singlemode (modal dispersion)",
      "type": "example"
    },
    {
      "id": "net_p1_t0_s4",
      "label": "DWDM wavelength division",
      "description": "DWDM wavelength division multiplexing 100GHz channel spacing",
      "type": "concept"
    },
    {
      "id": "net_p1_t0_s4_l0",
      "label": "WiFi 24GHz",
      "description": "WiFi 2.4GHz channel 2 operates at center frequency 2417 MHz with a standard 20MHz spread.",
      "type": "example"
    },
    {
      "id": "net_p1_t0_s4_l1",
      "label": "WiFi 24GHz",
      "description": "WiFi 2.4GHz channel 3 operates at center frequency 2422 MHz with a standard 20MHz spread.",
      "type": "example"
    },
    {
      "id": "net_p1_t1",
      "label": "Modulation & RF",
      "description": "WiFi 2.4GHz channel 4 operates at center frequency 2427 MHz with a standard 20MHz spread.",
      "type": "topic"
    },
    {
      "id": "net_p1_t1_s0",
      "label": "WiFi 24GHz channel",
      "description": "WiFi 2.4GHz channel 5 operates at center frequency 2432 MHz with a standard 20MHz spread.",
      "type": "concept"
    },
    {
      "id": "net_p1_t1_s0_l0",
      "label": "WiFi 24GHz",
      "description": "WiFi 2.4GHz channel 6 operates at center frequency 2437 MHz with a standard 20MHz spread.",
      "type": "example"
    },
    {
      "id": "net_p1_t1_s0_l1",
      "label": "WiFi 24GHz",
      "description": "WiFi 2.4GHz channel 7 operates at center frequency 2442 MHz with a standard 20MHz spread.",
      "type": "example"
    },
    {
      "id": "net_p1_t1_s1",
      "label": "WiFi 24GHz channel",
      "description": "WiFi 2.4GHz channel 8 operates at center frequency 2447 MHz with a standard 20MHz spread.",
      "type": "concept"
    },
    {
      "id": "net_p1_t1_s1_l0",
      "label": "WiFi 24GHz",
      "description": "WiFi 2.4GHz channel 9 operates at center frequency 2452 MHz with a standard 20MHz spread.",
      "type": "example"
    },
    {
      "id": "net_p1_t1_s1_l1",
      "label": "WiFi 24GHz",
      "description": "WiFi 2.4GHz channel 10 operates at center frequency 2457 MHz with a standard 20MHz spread.",
      "type": "example"
    },
    {
      "id": "net_p1_t1_s2",
      "label": "WiFi 24GHz channel",
      "description": "WiFi 2.4GHz channel 11 operates at center frequency 2462 MHz with a standard 20MHz spread.",
      "type": "concept"
    },
    {
      "id": "net_p1_t1_s2_l0",
      "label": "WiFi 24GHz",
      "description": "WiFi 2.4GHz channel 12 operates at center frequency 2467 MHz with a standard 20MHz spread.",
      "type": "example"
    },
    {
      "id": "net_p1_t1_s2_l1",
      "label": "WiFi 24GHz",
      "description": "WiFi 2.4GHz channel 13 operates at center frequency 2472 MHz with a standard 20MHz spread.",
      "type": "example"
    },
    {
      "id": "net_p1_t1_s3",
      "label": "WiFi 24GHz channel",
      "description": "WiFi 2.4GHz channel 14 operates at center frequency 2477 MHz with a standard 20MHz spread.",
      "type": "concept"
    },
    {
      "id": "net_p1_t1_s3_l0",
      "label": "WiFi 24GHz",
      "description": "WiFi 2.4GHz channel 15 operates at center frequency 2482 MHz with a standard 20MHz spread.",
      "type": "example"
    },
    {
      "id": "net_p1_t1_s3_l1",
      "label": "WiFi 24GHz",
      "description": "WiFi 2.4GHz channel 16 operates at center frequency 2487 MHz with a standard 20MHz spread.",
      "type": "example"
    },
    {
      "id": "net_p1_t1_s4",
      "label": "WiFi 24GHz channel",
      "description": "WiFi 2.4GHz channel 17 operates at center frequency 2492 MHz with a standard 20MHz spread.",
      "type": "concept"
    },
    {
      "id": "net_p1_t1_s4_l0",
      "label": "WiFi 24GHz",
      "description": "WiFi 2.4GHz channel 18 operates at center frequency 2497 MHz with a standard 20MHz spread.",
      "type": "example"
    },
    {
      "id": "net_p1_t1_s4_l1",
      "label": "WiFi 24GHz",
      "description": "WiFi 2.4GHz channel 19 operates at center frequency 2502 MHz with a standard 20MHz spread.",
      "type": "example"
    },
    {
      "id": "net_p1_t2",
      "label": "Wireless LAN",
      "description": "WiFi 2.4GHz channel 20 operates at center frequency 2507 MHz with a standard 20MHz spread.",
      "type": "topic"
    },
    {
      "id": "net_p1_t2_s0",
      "label": "WiFi 24GHz channel",
      "description": "WiFi 2.4GHz channel 21 operates at center frequency 2512 MHz with a standard 20MHz spread.",
      "type": "concept"
    },
    {
      "id": "net_p1_t2_s0_l0",
      "label": "WiFi 24GHz",
      "description": "WiFi 2.4GHz channel 22 operates at center frequency 2517 MHz with a standard 20MHz spread.",
      "type": "example"
    },
    {
      "id": "net_p1_t2_s0_l1",
      "label": "WiFi 24GHz",
      "description": "WiFi 2.4GHz channel 23 operates at center frequency 2522 MHz with a standard 20MHz spread.",
      "type": "example"
    },
    {
      "id": "net_p1_t2_s1",
      "label": "WiFi 24GHz channel",
      "description": "WiFi 2.4GHz channel 24 operates at center frequency 2527 MHz with a standard 20MHz spread.",
      "type": "concept"
    },
    {
      "id": "net_p1_t2_s1_l0",
      "label": "WiFi 24GHz",
      "description": "WiFi 2.4GHz channel 25 operates at center frequency 2532 MHz with a standard 20MHz spread.",
      "type": "example"
    },
    {
      "id": "net_p1_t2_s1_l1",
      "label": "WiFi 5GHz",
      "description": "WiFi 5GHz channel 36 has a center frequency of 5180 MHz for non-overlapping OFDM transmission.",
      "type": "example"
    },
    {
      "id": "net_p1_t2_s2",
      "label": "WiFi 5GHz channel",
      "description": "WiFi 5GHz channel 40 has a center frequency of 5200 MHz for non-overlapping OFDM transmission.",
      "type": "concept"
    },
    {
      "id": "net_p1_t2_s2_l0",
      "label": "WiFi 5GHz",
      "description": "WiFi 5GHz channel 44 has a center frequency of 5220 MHz for non-overlapping OFDM transmission.",
      "type": "example"
    },
    {
      "id": "net_p1_t2_s2_l1",
      "label": "WiFi 5GHz",
      "description": "WiFi 5GHz channel 48 has a center frequency of 5240 MHz for non-overlapping OFDM transmission.",
      "type": "example"
    },
    {
      "id": "net_p1_t2_s3",
      "label": "WiFi 5GHz channel",
      "description": "WiFi 5GHz channel 52 has a center frequency of 5260 MHz for non-overlapping OFDM transmission.",
      "type": "concept"
    },
    {
      "id": "net_p1_t2_s3_l0",
      "label": "WiFi 5GHz",
      "description": "WiFi 5GHz channel 56 has a center frequency of 5280 MHz for non-overlapping OFDM transmission.",
      "type": "example"
    },
    {
      "id": "net_p1_t2_s3_l1",
      "label": "WiFi 5GHz",
      "description": "WiFi 5GHz channel 60 has a center frequency of 5300 MHz for non-overlapping OFDM transmission.",
      "type": "example"
    },
    {
      "id": "net_p1_t2_s4",
      "label": "WiFi 5GHz channel",
      "description": "WiFi 5GHz channel 64 has a center frequency of 5320 MHz for non-overlapping OFDM transmission.",
      "type": "concept"
    },
    {
      "id": "net_p1_t2_s4_l0",
      "label": "WiFi 5GHz",
      "description": "WiFi 5GHz channel 68 has a center frequency of 5340 MHz for non-overlapping OFDM transmission.",
      "type": "example"
    },
    {
      "id": "net_p1_t2_s4_l1",
      "label": "WiFi 5GHz",
      "description": "WiFi 5GHz channel 72 has a center frequency of 5360 MHz for non-overlapping OFDM transmission.",
      "type": "example"
    },
    {
      "id": "net_p1_t3",
      "label": "Ethernet Framing",
      "description": "WiFi 5GHz channel 76 has a center frequency of 5380 MHz for non-overlapping OFDM transmission.",
      "type": "topic"
    },
    {
      "id": "net_p1_t3_s0",
      "label": "WiFi 5GHz channel",
      "description": "WiFi 5GHz channel 80 has a center frequency of 5400 MHz for non-overlapping OFDM transmission.",
      "type": "concept"
    },
    {
      "id": "net_p1_t3_s0_l0",
      "label": "WiFi 5GHz",
      "description": "WiFi 5GHz channel 84 has a center frequency of 5420 MHz for non-overlapping OFDM transmission.",
      "type": "example"
    },
    {
      "id": "net_p1_t3_s0_l1",
      "label": "WiFi 5GHz",
      "description": "WiFi 5GHz channel 88 has a center frequency of 5440 MHz for non-overlapping OFDM transmission.",
      "type": "example"
    },
    {
      "id": "net_p1_t3_s1",
      "label": "WiFi 5GHz channel",
      "description": "WiFi 5GHz channel 92 has a center frequency of 5460 MHz for non-overlapping OFDM transmission.",
      "type": "concept"
    },
    {
      "id": "net_p1_t3_s1_l0",
      "label": "WiFi 5GHz",
      "description": "WiFi 5GHz channel 96 has a center frequency of 5480 MHz for non-overlapping OFDM transmission.",
      "type": "example"
    },
    {
      "id": "net_p1_t3_s1_l1",
      "label": "WiFi 5GHz",
      "description": "WiFi 5GHz channel 100 has a center frequency of 5500 MHz for non-overlapping OFDM transmission.",
      "type": "example"
    },
    {
      "id": "net_p1_t3_s2",
      "label": "WiFi 5GHz channel",
      "description": "WiFi 5GHz channel 104 has a center frequency of 5520 MHz for non-overlapping OFDM transmission.",
      "type": "concept"
    },
    {
      "id": "net_p1_t3_s2_l0",
      "label": "WiFi 5GHz",
      "description": "WiFi 5GHz channel 108 has a center frequency of 5540 MHz for non-overlapping OFDM transmission.",
      "type": "example"
    },
    {
      "id": "net_p1_t3_s2_l1",
      "label": "WiFi 5GHz",
      "description": "WiFi 5GHz channel 112 has a center frequency of 5560 MHz for non-overlapping OFDM transmission.",
      "type": "example"
    },
    {
      "id": "net_p1_t3_s3",
      "label": "WiFi 5GHz channel",
      "description": "WiFi 5GHz channel 116 has a center frequency of 5580 MHz for non-overlapping OFDM transmission.",
      "type": "concept"
    },
    {
      "id": "net_p1_t3_s3_l0",
      "label": "WiFi 5GHz",
      "description": "WiFi 5GHz channel 120 has a center frequency of 5600 MHz for non-overlapping OFDM transmission.",
      "type": "example"
    },
    {
      "id": "net_p1_t3_s3_l1",
      "label": "WiFi 5GHz",
      "description": "WiFi 5GHz channel 124 has a center frequency of 5620 MHz for non-overlapping OFDM transmission.",
      "type": "example"
    },
    {
      "id": "net_p1_t3_s4",
      "label": "WiFi 5GHz channel",
      "description": "WiFi 5GHz channel 128 has a center frequency of 5640 MHz for non-overlapping OFDM transmission.",
      "type": "concept"
    },
    {
      "id": "net_p1_t3_s4_l0",
      "label": "WiFi 5GHz",
      "description": "WiFi 5GHz channel 132 has a center frequency of 5660 MHz for non-overlapping OFDM transmission.",
      "type": "example"
    },
    {
      "id": "net_p1_t3_s4_l1",
      "label": "WiFi 5GHz",
      "description": "WiFi 5GHz channel 136 has a center frequency of 5680 MHz for non-overlapping OFDM transmission.",
      "type": "example"
    },
    {
      "id": "net_p1_t4",
      "label": "VLANs & MAC",
      "description": "WiFi 5GHz channel 140 has a center frequency of 5700 MHz for non-overlapping OFDM transmission.",
      "type": "topic"
    },
    {
      "id": "net_p1_t4_s0",
      "label": "WiFi 5GHz channel",
      "description": "WiFi 5GHz channel 144 has a center frequency of 5720 MHz for non-overlapping OFDM transmission.",
      "type": "concept"
    },
    {
      "id": "net_p1_t4_s0_l0",
      "label": "WiFi 5GHz",
      "description": "WiFi 5GHz channel 148 has a center frequency of 5740 MHz for non-overlapping OFDM transmission.",
      "type": "example"
    },
    {
      "id": "net_p1_t4_s0_l1",
      "label": "WiFi 5GHz",
      "description": "WiFi 5GHz channel 152 has a center frequency of 5760 MHz for non-overlapping OFDM transmission.",
      "type": "example"
    },
    {
      "id": "net_p1_t4_s1",
      "label": "WiFi 5GHz channel",
      "description": "WiFi 5GHz channel 156 has a center frequency of 5780 MHz for non-overlapping OFDM transmission.",
      "type": "concept"
    },
    {
      "id": "net_p1_t4_s1_l0",
      "label": "WiFi 5GHz",
      "description": "WiFi 5GHz channel 160 has a center frequency of 5800 MHz for non-overlapping OFDM transmission.",
      "type": "example"
    },
    {
      "id": "net_p1_t4_s1_l1",
      "label": "WiFi 5GHz",
      "description": "WiFi 5GHz channel 164 has a center frequency of 5820 MHz for non-overlapping OFDM transmission.",
      "type": "example"
    },
    {
      "id": "net_p1_t4_s2",
      "label": "VLAN ID 1",
      "description": "VLAN ID 1 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "concept"
    },
    {
      "id": "net_p1_t4_s2_l0",
      "label": "VLAN ID",
      "description": "VLAN ID 2 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t4_s2_l1",
      "label": "VLAN ID",
      "description": "VLAN ID 3 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t4_s3",
      "label": "VLAN ID 4",
      "description": "VLAN ID 4 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "concept"
    },
    {
      "id": "net_p1_t4_s3_l0",
      "label": "VLAN ID",
      "description": "VLAN ID 5 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t4_s3_l1",
      "label": "VLAN ID",
      "description": "VLAN ID 6 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t4_s4",
      "label": "VLAN ID 7",
      "description": "VLAN ID 7 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "concept"
    },
    {
      "id": "net_p1_t4_s4_l0",
      "label": "VLAN ID",
      "description": "VLAN ID 8 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t4_s4_l1",
      "label": "VLAN ID",
      "description": "VLAN ID 9 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t5",
      "label": "Spanning Tree",
      "description": "VLAN ID 10 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "topic"
    },
    {
      "id": "net_p1_t5_s0",
      "label": "VLAN ID 11",
      "description": "VLAN ID 11 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "concept"
    },
    {
      "id": "net_p1_t5_s0_l0",
      "label": "VLAN ID",
      "description": "VLAN ID 12 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t5_s0_l1",
      "label": "VLAN ID",
      "description": "VLAN ID 13 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t5_s1",
      "label": "VLAN ID 14",
      "description": "VLAN ID 14 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "concept"
    },
    {
      "id": "net_p1_t5_s1_l0",
      "label": "VLAN ID",
      "description": "VLAN ID 15 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t5_s1_l1",
      "label": "VLAN ID",
      "description": "VLAN ID 16 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t5_s2",
      "label": "VLAN ID 17",
      "description": "VLAN ID 17 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "concept"
    },
    {
      "id": "net_p1_t5_s2_l0",
      "label": "VLAN ID",
      "description": "VLAN ID 18 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t5_s2_l1",
      "label": "VLAN ID",
      "description": "VLAN ID 19 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t5_s3",
      "label": "VLAN ID 20",
      "description": "VLAN ID 20 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "concept"
    },
    {
      "id": "net_p1_t5_s3_l0",
      "label": "VLAN ID",
      "description": "VLAN ID 21 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t5_s3_l1",
      "label": "VLAN ID",
      "description": "VLAN ID 22 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t5_s4",
      "label": "VLAN ID 23",
      "description": "VLAN ID 23 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "concept"
    },
    {
      "id": "net_p1_t5_s4_l0",
      "label": "VLAN ID",
      "description": "VLAN ID 24 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t5_s4_l1",
      "label": "VLAN ID",
      "description": "VLAN ID 25 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t6",
      "label": "Physical Media",
      "description": "VLAN ID 26 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "topic"
    },
    {
      "id": "net_p1_t6_s0",
      "label": "VLAN ID 27",
      "description": "VLAN ID 27 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "concept"
    },
    {
      "id": "net_p1_t6_s0_l0",
      "label": "VLAN ID",
      "description": "VLAN ID 28 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t6_s0_l1",
      "label": "VLAN ID",
      "description": "VLAN ID 29 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t6_s1",
      "label": "VLAN ID 30",
      "description": "VLAN ID 30 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "concept"
    },
    {
      "id": "net_p1_t6_s1_l0",
      "label": "VLAN ID",
      "description": "VLAN ID 31 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t6_s1_l1",
      "label": "VLAN ID",
      "description": "VLAN ID 32 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t6_s2",
      "label": "VLAN ID 33",
      "description": "VLAN ID 33 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "concept"
    },
    {
      "id": "net_p1_t6_s2_l0",
      "label": "VLAN ID",
      "description": "VLAN ID 34 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t6_s2_l1",
      "label": "VLAN ID",
      "description": "VLAN ID 35 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t6_s3",
      "label": "VLAN ID 36",
      "description": "VLAN ID 36 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "concept"
    },
    {
      "id": "net_p1_t6_s3_l0",
      "label": "VLAN ID",
      "description": "VLAN ID 37 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t6_s3_l1",
      "label": "VLAN ID",
      "description": "VLAN ID 38 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t6_s4",
      "label": "VLAN ID 39",
      "description": "VLAN ID 39 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "concept"
    },
    {
      "id": "net_p1_t6_s4_l0",
      "label": "VLAN ID",
      "description": "VLAN ID 40 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p1_t6_s4_l1",
      "label": "VLAN ID",
      "description": "VLAN ID 41 is processed as an IEEE 802.1Q 12-bit identifier in the Ethernet TCI header.",
      "type": "example"
    },
    {
      "id": "net_p2_t0",
      "label": "IPv4 Header",
      "description": "CIDR /8 network prefix reserves 24 bits for host addresses, yielding 16777214 usable IP endpoints.",
      "type": "topic"
    },
    {
      "id": "net_p2_t0_s0",
      "label": "IPv4 header fields",
      "description": "IPv4 header fields (IHL/DSCP/ECN/total length/TTL/protocol/checksum/src/dst IP)",
      "type": "concept"
    },
    {
      "id": "net_p2_t0_s0_l0",
      "label": "IPv4 fragmentation",
      "description": "IPv4 fragmentation MF flag/fragment offset",
      "type": "example"
    },
    {
      "id": "net_p2_t0_s0_l1",
      "label": "CIDR 24",
      "description": "CIDR /24 = 256 addresses host bits free",
      "type": "example"
    },
    {
      "id": "net_p2_t0_s1",
      "label": "VLSM variable length",
      "description": "VLSM variable length subnet design",
      "type": "concept"
    },
    {
      "id": "net_p2_t0_s1_l0",
      "label": "NAT PAT",
      "description": "NAT PAT overloading single public IP",
      "type": "example"
    },
    {
      "id": "net_p2_t0_s1_l1",
      "label": "IPv6 128bit",
      "description": "IPv6 128-bit colon-hex notation ::1 loopback",
      "type": "example"
    },
    {
      "id": "net_p2_t0_s2",
      "label": "IPv6 extension headers",
      "description": "IPv6 extension headers (Hop-by-Hop/Routing/Fragment/Dest options)",
      "type": "concept"
    },
    {
      "id": "net_p2_t0_s2_l0",
      "label": "ICMPv6 NDP",
      "description": "ICMPv6 NDP neighbor solicitation/advertisement replaces ARP",
      "type": "example"
    },
    {
      "id": "net_p2_t0_s2_l1",
      "label": "DHCPv6 stateful",
      "description": "DHCPv6 stateful vs SLAAC stateless (EUI-64 from MAC)",
      "type": "example"
    },
    {
      "id": "net_p2_t0_s3",
      "label": "multicast PIMSM RPTSPT",
      "description": "multicast PIM-SM RPT/SPT switchover",
      "type": "concept"
    },
    {
      "id": "net_p2_t0_s3_l0",
      "label": "IGMP group",
      "description": "IGMP group membership report",
      "type": "example"
    },
    {
      "id": "net_p2_t0_s3_l1",
      "label": "IP anycast",
      "description": "IP anycast same prefix multiple locations BGP routing to nearest",
      "type": "example"
    },
    {
      "id": "net_p2_t0_s4",
      "label": "CIDR 9 network",
      "description": "CIDR /9 network prefix reserves 23 bits for host addresses, yielding 8388606 usable IP endpoints.",
      "type": "concept"
    },
    {
      "id": "net_p2_t0_s4_l0",
      "label": "CIDR 10",
      "description": "CIDR /10 network prefix reserves 22 bits for host addresses, yielding 4194302 usable IP endpoints.",
      "type": "example"
    },
    {
      "id": "net_p2_t0_s4_l1",
      "label": "CIDR 11",
      "description": "CIDR /11 network prefix reserves 21 bits for host addresses, yielding 2097150 usable IP endpoints.",
      "type": "example"
    },
    {
      "id": "net_p2_t1",
      "label": "IPv4 Addressing",
      "description": "CIDR /12 network prefix reserves 20 bits for host addresses, yielding 1048574 usable IP endpoints.",
      "type": "topic"
    },
    {
      "id": "net_p2_t1_s0",
      "label": "CIDR 13 network",
      "description": "CIDR /13 network prefix reserves 19 bits for host addresses, yielding 524286 usable IP endpoints.",
      "type": "concept"
    },
    {
      "id": "net_p2_t1_s0_l0",
      "label": "CIDR 14",
      "description": "CIDR /14 network prefix reserves 18 bits for host addresses, yielding 262142 usable IP endpoints.",
      "type": "example"
    },
    {
      "id": "net_p2_t1_s0_l1",
      "label": "CIDR 15",
      "description": "CIDR /15 network prefix reserves 17 bits for host addresses, yielding 131070 usable IP endpoints.",
      "type": "example"
    },
    {
      "id": "net_p2_t1_s1",
      "label": "CIDR 16 network",
      "description": "CIDR /16 network prefix reserves 16 bits for host addresses, yielding 65534 usable IP endpoints.",
      "type": "concept"
    },
    {
      "id": "net_p2_t1_s1_l0",
      "label": "CIDR 17",
      "description": "CIDR /17 network prefix reserves 15 bits for host addresses, yielding 32766 usable IP endpoints.",
      "type": "example"
    },
    {
      "id": "net_p2_t1_s1_l1",
      "label": "CIDR 18",
      "description": "CIDR /18 network prefix reserves 14 bits for host addresses, yielding 16382 usable IP endpoints.",
      "type": "example"
    },
    {
      "id": "net_p2_t1_s2",
      "label": "CIDR 19 network",
      "description": "CIDR /19 network prefix reserves 13 bits for host addresses, yielding 8190 usable IP endpoints.",
      "type": "concept"
    },
    {
      "id": "net_p2_t1_s2_l0",
      "label": "CIDR 20",
      "description": "CIDR /20 network prefix reserves 12 bits for host addresses, yielding 4094 usable IP endpoints.",
      "type": "example"
    },
    {
      "id": "net_p2_t1_s2_l1",
      "label": "CIDR 21",
      "description": "CIDR /21 network prefix reserves 11 bits for host addresses, yielding 2046 usable IP endpoints.",
      "type": "example"
    },
    {
      "id": "net_p2_t1_s3",
      "label": "CIDR 22 network",
      "description": "CIDR /22 network prefix reserves 10 bits for host addresses, yielding 1022 usable IP endpoints.",
      "type": "concept"
    },
    {
      "id": "net_p2_t1_s3_l0",
      "label": "CIDR 23",
      "description": "CIDR /23 network prefix reserves 9 bits for host addresses, yielding 510 usable IP endpoints.",
      "type": "example"
    },
    {
      "id": "net_p2_t1_s3_l1",
      "label": "CIDR 24",
      "description": "CIDR /24 network prefix reserves 8 bits for host addresses, yielding 254 usable IP endpoints.",
      "type": "example"
    },
    {
      "id": "net_p2_t1_s4",
      "label": "CIDR 25 network",
      "description": "CIDR /25 network prefix reserves 7 bits for host addresses, yielding 126 usable IP endpoints.",
      "type": "concept"
    },
    {
      "id": "net_p2_t1_s4_l0",
      "label": "CIDR 26",
      "description": "CIDR /26 network prefix reserves 6 bits for host addresses, yielding 62 usable IP endpoints.",
      "type": "example"
    },
    {
      "id": "net_p2_t1_s4_l1",
      "label": "CIDR 27",
      "description": "CIDR /27 network prefix reserves 5 bits for host addresses, yielding 30 usable IP endpoints.",
      "type": "example"
    },
    {
      "id": "net_p2_t2",
      "label": "NAT PAT",
      "description": "CIDR /28 network prefix reserves 4 bits for host addresses, yielding 14 usable IP endpoints.",
      "type": "topic"
    },
    {
      "id": "net_p2_t2_s0",
      "label": "CIDR 29 network",
      "description": "CIDR /29 network prefix reserves 3 bits for host addresses, yielding 6 usable IP endpoints.",
      "type": "concept"
    },
    {
      "id": "net_p2_t2_s0_l0",
      "label": "CIDR 30",
      "description": "CIDR /30 network prefix reserves 2 bits for host addresses, yielding 2 usable IP endpoints.",
      "type": "example"
    },
    {
      "id": "net_p2_t2_s0_l1",
      "label": "CIDR 31",
      "description": "CIDR /31 network prefix reserves 1 bits for host addresses, yielding 0 usable IP endpoints.",
      "type": "example"
    },
    {
      "id": "net_p2_t2_s1",
      "label": "CIDR 32 network",
      "description": "CIDR /32 network prefix reserves 0 bits for host addresses, yielding 0 usable IP endpoints.",
      "type": "concept"
    },
    {
      "id": "net_p2_t2_s1_l0",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::1 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t2_s1_l1",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::2 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t2_s2",
      "label": "IPv6 linklocal interface",
      "description": "IPv6 link-local interface identifier fe80::3 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "concept"
    },
    {
      "id": "net_p2_t2_s2_l0",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::4 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t2_s2_l1",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::5 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t2_s3",
      "label": "IPv6 linklocal interface",
      "description": "IPv6 link-local interface identifier fe80::6 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "concept"
    },
    {
      "id": "net_p2_t2_s3_l0",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::7 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t2_s3_l1",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::8 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t2_s4",
      "label": "IPv6 linklocal interface",
      "description": "IPv6 link-local interface identifier fe80::9 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "concept"
    },
    {
      "id": "net_p2_t2_s4_l0",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::a is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t2_s4_l1",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::b is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t3",
      "label": "IPv6 Base",
      "description": "IPv6 link-local interface identifier fe80::c is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "topic"
    },
    {
      "id": "net_p2_t3_s0",
      "label": "IPv6 linklocal interface",
      "description": "IPv6 link-local interface identifier fe80::d is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "concept"
    },
    {
      "id": "net_p2_t3_s0_l0",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::e is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t3_s0_l1",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::f is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t3_s1",
      "label": "IPv6 linklocal interface",
      "description": "IPv6 link-local interface identifier fe80::10 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "concept"
    },
    {
      "id": "net_p2_t3_s1_l0",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::11 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t3_s1_l1",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::12 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t3_s2",
      "label": "IPv6 linklocal interface",
      "description": "IPv6 link-local interface identifier fe80::13 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "concept"
    },
    {
      "id": "net_p2_t3_s2_l0",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::14 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t3_s2_l1",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::15 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t3_s3",
      "label": "IPv6 linklocal interface",
      "description": "IPv6 link-local interface identifier fe80::16 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "concept"
    },
    {
      "id": "net_p2_t3_s3_l0",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::17 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t3_s3_l1",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::18 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t3_s4",
      "label": "IPv6 linklocal interface",
      "description": "IPv6 link-local interface identifier fe80::19 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "concept"
    },
    {
      "id": "net_p2_t3_s4_l0",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::1a is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t3_s4_l1",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::1b is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t4",
      "label": "IPv6 Extensions",
      "description": "IPv6 link-local interface identifier fe80::1c is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "topic"
    },
    {
      "id": "net_p2_t4_s0",
      "label": "IPv6 linklocal interface",
      "description": "IPv6 link-local interface identifier fe80::1d is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "concept"
    },
    {
      "id": "net_p2_t4_s0_l0",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::1e is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t4_s0_l1",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::1f is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t4_s1",
      "label": "IPv6 linklocal interface",
      "description": "IPv6 link-local interface identifier fe80::20 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "concept"
    },
    {
      "id": "net_p2_t4_s1_l0",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::21 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t4_s1_l1",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::22 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t4_s2",
      "label": "IPv6 linklocal interface",
      "description": "IPv6 link-local interface identifier fe80::23 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "concept"
    },
    {
      "id": "net_p2_t4_s2_l0",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::24 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t4_s2_l1",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::25 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t4_s3",
      "label": "IPv6 linklocal interface",
      "description": "IPv6 link-local interface identifier fe80::26 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "concept"
    },
    {
      "id": "net_p2_t4_s3_l0",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::27 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t4_s3_l1",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::28 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t4_s4",
      "label": "IPv6 linklocal interface",
      "description": "IPv6 link-local interface identifier fe80::29 is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "concept"
    },
    {
      "id": "net_p2_t4_s4_l0",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::2a is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t4_s4_l1",
      "label": "IPv6 linklocal",
      "description": "IPv6 link-local interface identifier fe80::2b is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "example"
    },
    {
      "id": "net_p2_t5",
      "label": "NDP & DHCPv6",
      "description": "IPv6 link-local interface identifier fe80::2c is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "topic"
    },
    {
      "id": "net_p2_t5_s0",
      "label": "IPv6 linklocal interface",
      "description": "IPv6 link-local interface identifier fe80::2d is generated via SLAAC or statically assigned for intra-VLAN routing.",
      "type": "concept"
    },
    {
      "id": "net_p2_t5_s0_l0",
      "label": "IP DSCP",
      "description": "IP DSCP value 0 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "example"
    },
    {
      "id": "net_p2_t5_s0_l1",
      "label": "IP DSCP",
      "description": "IP DSCP value 1 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "example"
    },
    {
      "id": "net_p2_t5_s1",
      "label": "IP DSCP value",
      "description": "IP DSCP value 2 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "concept"
    },
    {
      "id": "net_p2_t5_s1_l0",
      "label": "IP DSCP",
      "description": "IP DSCP value 3 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "example"
    },
    {
      "id": "net_p2_t5_s1_l1",
      "label": "IP DSCP",
      "description": "IP DSCP value 4 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "example"
    },
    {
      "id": "net_p2_t5_s2",
      "label": "IP DSCP value",
      "description": "IP DSCP value 5 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "concept"
    },
    {
      "id": "net_p2_t5_s2_l0",
      "label": "IP DSCP",
      "description": "IP DSCP value 6 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "example"
    },
    {
      "id": "net_p2_t5_s2_l1",
      "label": "IP DSCP",
      "description": "IP DSCP value 7 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "example"
    },
    {
      "id": "net_p2_t5_s3",
      "label": "IP DSCP value",
      "description": "IP DSCP value 8 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "concept"
    },
    {
      "id": "net_p2_t5_s3_l0",
      "label": "IP DSCP",
      "description": "IP DSCP value 9 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "example"
    },
    {
      "id": "net_p2_t5_s3_l1",
      "label": "IP DSCP",
      "description": "IP DSCP value 10 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "example"
    },
    {
      "id": "net_p2_t5_s4",
      "label": "IP DSCP value",
      "description": "IP DSCP value 11 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "concept"
    },
    {
      "id": "net_p2_t5_s4_l0",
      "label": "IP DSCP",
      "description": "IP DSCP value 12 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "example"
    },
    {
      "id": "net_p2_t5_s4_l1",
      "label": "IP DSCP",
      "description": "IP DSCP value 13 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "example"
    },
    {
      "id": "net_p2_t6",
      "label": "IP Multicast",
      "description": "IP DSCP value 14 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "topic"
    },
    {
      "id": "net_p2_t6_s0",
      "label": "IP DSCP value",
      "description": "IP DSCP value 15 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "concept"
    },
    {
      "id": "net_p2_t6_s0_l0",
      "label": "IP DSCP",
      "description": "IP DSCP value 16 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "example"
    },
    {
      "id": "net_p2_t6_s0_l1",
      "label": "IP DSCP",
      "description": "IP DSCP value 17 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "example"
    },
    {
      "id": "net_p2_t6_s1",
      "label": "IP DSCP value",
      "description": "IP DSCP value 18 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "concept"
    },
    {
      "id": "net_p2_t6_s1_l0",
      "label": "IP DSCP",
      "description": "IP DSCP value 19 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "example"
    },
    {
      "id": "net_p2_t6_s1_l1",
      "label": "IP DSCP",
      "description": "IP DSCP value 20 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "example"
    },
    {
      "id": "net_p2_t6_s2",
      "label": "IP DSCP value",
      "description": "IP DSCP value 21 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "concept"
    },
    {
      "id": "net_p2_t6_s2_l0",
      "label": "IP DSCP",
      "description": "IP DSCP value 22 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "example"
    },
    {
      "id": "net_p2_t6_s2_l1",
      "label": "IP DSCP",
      "description": "IP DSCP value 23 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "example"
    },
    {
      "id": "net_p2_t6_s3",
      "label": "IP DSCP value",
      "description": "IP DSCP value 24 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "concept"
    },
    {
      "id": "net_p2_t6_s3_l0",
      "label": "IP DSCP",
      "description": "IP DSCP value 25 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "example"
    },
    {
      "id": "net_p2_t6_s3_l1",
      "label": "IP DSCP",
      "description": "IP DSCP value 26 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "example"
    },
    {
      "id": "net_p2_t6_s4",
      "label": "IP DSCP value",
      "description": "IP DSCP value 27 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "concept"
    },
    {
      "id": "net_p2_t6_s4_l0",
      "label": "IP DSCP",
      "description": "IP DSCP value 28 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "example"
    },
    {
      "id": "net_p2_t6_s4_l1",
      "label": "IP DSCP",
      "description": "IP DSCP value 29 maps to specific Per-Hop Behaviors (PHB) in DiffServ QoS implementations.",
      "type": "example"
    },
    {
      "id": "net_p3_t0",
      "label": "Distance-Vector",
      "description": "Private BGP ASN 64512 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "topic"
    },
    {
      "id": "net_p3_t0_s0",
      "label": "Distancevector BellmanFord duv",
      "description": "Distance-vector Bellman-Ford d(u,v)=min(w(u,x)+d(x,v))",
      "type": "concept"
    },
    {
      "id": "net_p3_t0_s0_l0",
      "label": "RIP v2",
      "description": "RIP v2 UDP port 520 30s updates 15 hop limit infinity",
      "type": "example"
    },
    {
      "id": "net_p3_t0_s0_l1",
      "label": "counttoinfinity spli",
      "description": "count-to-infinity split horizon poison reverse",
      "type": "example"
    },
    {
      "id": "net_p3_t0_s1",
      "label": "OSPF Hello packets",
      "description": "OSPF Hello packets DR/BDR election on broadcast segments",
      "type": "concept"
    },
    {
      "id": "net_p3_t0_s1_l0",
      "label": "OSPF LSA",
      "description": "OSPF LSA type 1 (Router) 2 (Network) 3 (Summary) 5 (External)",
      "type": "example"
    },
    {
      "id": "net_p3_t0_s1_l1",
      "label": "OSPF area",
      "description": "OSPF area 0 backbone transit",
      "type": "example"
    },
    {
      "id": "net_p3_t0_s2",
      "label": "ISIS TLV format",
      "description": "IS-IS TLV format L1/L2 adjacency",
      "type": "concept"
    },
    {
      "id": "net_p3_t0_s2_l0",
      "label": "BGP TCP",
      "description": "BGP TCP port 179 OPEN/UPDATE/NOTIFICATION/KEEPALIVE messages",
      "type": "example"
    },
    {
      "id": "net_p3_t0_s2_l1",
      "label": "BGP UPDATE",
      "description": "BGP UPDATE NLRI + withdrawn routes",
      "type": "example"
    },
    {
      "id": "net_p3_t0_s3",
      "label": "BGP attributes ASPATH",
      "description": "BGP attributes: AS_PATH prepending traffic engineering",
      "type": "concept"
    },
    {
      "id": "net_p3_t0_s3_l0",
      "label": "MPLS label",
      "description": "MPLS label stack 20-bit label 3-bit TC 1-bit S 8-bit TTL",
      "type": "example"
    },
    {
      "id": "net_p3_t0_s3_l1",
      "label": "LDP label",
      "description": "LDP label distribution upstream/downstream",
      "type": "example"
    },
    {
      "id": "net_p3_t0_s4",
      "label": "RSVPTE traffic engineering",
      "description": "RSVP-TE traffic engineering path setup",
      "type": "concept"
    },
    {
      "id": "net_p3_t0_s4_l0",
      "label": "Private BGP",
      "description": "Private BGP ASN 64513 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t0_s4_l1",
      "label": "Private BGP",
      "description": "Private BGP ASN 64514 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t1",
      "label": "Routing Loops",
      "description": "Private BGP ASN 64515 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "topic"
    },
    {
      "id": "net_p3_t1_s0",
      "label": "Private BGP ASN",
      "description": "Private BGP ASN 64516 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "concept"
    },
    {
      "id": "net_p3_t1_s0_l0",
      "label": "Private BGP",
      "description": "Private BGP ASN 64517 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t1_s0_l1",
      "label": "Private BGP",
      "description": "Private BGP ASN 64518 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t1_s1",
      "label": "Private BGP ASN",
      "description": "Private BGP ASN 64519 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "concept"
    },
    {
      "id": "net_p3_t1_s1_l0",
      "label": "Private BGP",
      "description": "Private BGP ASN 64520 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t1_s1_l1",
      "label": "Private BGP",
      "description": "Private BGP ASN 64521 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t1_s2",
      "label": "Private BGP ASN",
      "description": "Private BGP ASN 64522 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "concept"
    },
    {
      "id": "net_p3_t1_s2_l0",
      "label": "Private BGP",
      "description": "Private BGP ASN 64523 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t1_s2_l1",
      "label": "Private BGP",
      "description": "Private BGP ASN 64524 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t1_s3",
      "label": "Private BGP ASN",
      "description": "Private BGP ASN 64525 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "concept"
    },
    {
      "id": "net_p3_t1_s3_l0",
      "label": "Private BGP",
      "description": "Private BGP ASN 64526 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t1_s3_l1",
      "label": "Private BGP",
      "description": "Private BGP ASN 64527 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t1_s4",
      "label": "Private BGP ASN",
      "description": "Private BGP ASN 64528 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "concept"
    },
    {
      "id": "net_p3_t1_s4_l0",
      "label": "Private BGP",
      "description": "Private BGP ASN 64529 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t1_s4_l1",
      "label": "Private BGP",
      "description": "Private BGP ASN 64530 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t2",
      "label": "OSPF Base",
      "description": "Private BGP ASN 64531 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "topic"
    },
    {
      "id": "net_p3_t2_s0",
      "label": "Private BGP ASN",
      "description": "Private BGP ASN 64532 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "concept"
    },
    {
      "id": "net_p3_t2_s0_l0",
      "label": "Private BGP",
      "description": "Private BGP ASN 64533 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t2_s0_l1",
      "label": "Private BGP",
      "description": "Private BGP ASN 64534 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t2_s1",
      "label": "Private BGP ASN",
      "description": "Private BGP ASN 64535 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "concept"
    },
    {
      "id": "net_p3_t2_s1_l0",
      "label": "Private BGP",
      "description": "Private BGP ASN 64536 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t2_s1_l1",
      "label": "Private BGP",
      "description": "Private BGP ASN 64537 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t2_s2",
      "label": "Private BGP ASN",
      "description": "Private BGP ASN 64538 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "concept"
    },
    {
      "id": "net_p3_t2_s2_l0",
      "label": "Private BGP",
      "description": "Private BGP ASN 64539 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t2_s2_l1",
      "label": "Private BGP",
      "description": "Private BGP ASN 64540 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t2_s3",
      "label": "Private BGP ASN",
      "description": "Private BGP ASN 64541 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "concept"
    },
    {
      "id": "net_p3_t2_s3_l0",
      "label": "Private BGP",
      "description": "Private BGP ASN 64542 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t2_s3_l1",
      "label": "Private BGP",
      "description": "Private BGP ASN 64543 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t2_s4",
      "label": "Private BGP ASN",
      "description": "Private BGP ASN 64544 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "concept"
    },
    {
      "id": "net_p3_t2_s4_l0",
      "label": "Private BGP",
      "description": "Private BGP ASN 64545 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t2_s4_l1",
      "label": "Private BGP",
      "description": "Private BGP ASN 64546 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t3",
      "label": "OSPF Architecture",
      "description": "Private BGP ASN 64547 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "topic"
    },
    {
      "id": "net_p3_t3_s0",
      "label": "Private BGP ASN",
      "description": "Private BGP ASN 64548 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "concept"
    },
    {
      "id": "net_p3_t3_s0_l0",
      "label": "Private BGP",
      "description": "Private BGP ASN 64549 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t3_s0_l1",
      "label": "Private BGP",
      "description": "Private BGP ASN 64550 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t3_s1",
      "label": "Private BGP ASN",
      "description": "Private BGP ASN 64551 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "concept"
    },
    {
      "id": "net_p3_t3_s1_l0",
      "label": "Private BGP",
      "description": "Private BGP ASN 64552 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t3_s1_l1",
      "label": "Private BGP",
      "description": "Private BGP ASN 64553 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t3_s2",
      "label": "Private BGP ASN",
      "description": "Private BGP ASN 64554 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "concept"
    },
    {
      "id": "net_p3_t3_s2_l0",
      "label": "Private BGP",
      "description": "Private BGP ASN 64555 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t3_s2_l1",
      "label": "Private BGP",
      "description": "Private BGP ASN 64556 is reserved for internal network domains and filtered before eBGP peering.",
      "type": "example"
    },
    {
      "id": "net_p3_t3_s3",
      "label": "OSPF interface cost",
      "description": "OSPF interface cost for a link is calculated as 100000000 when the reference bandwidth is modified for high-speed routing.",
      "type": "concept"
    },
    {
      "id": "net_p3_t3_s3_l0",
      "label": "OSPF interface",
      "description": "OSPF interface cost for a link is calculated as 50000000 when the reference bandwidth is modified for high-speed routing.",
      "type": "example"
    },
    {
      "id": "net_p3_t3_s3_l1",
      "label": "OSPF interface",
      "description": "OSPF interface cost for a link is calculated as 33333333.333333332 when the reference bandwidth is modified for high-speed routing.",
      "type": "example"
    },
    {
      "id": "net_p3_t3_s4",
      "label": "OSPF interface cost",
      "description": "OSPF interface cost for a link is calculated as 25000000 when the reference bandwidth is modified for high-speed routing.",
      "type": "concept"
    },
    {
      "id": "net_p3_t3_s4_l0",
      "label": "OSPF interface",
      "description": "OSPF interface cost for a link is calculated as 20000000 when the reference bandwidth is modified for high-speed routing.",
      "type": "example"
    },
    {
      "id": "net_p3_t3_s4_l1",
      "label": "OSPF interface",
      "description": "OSPF interface cost for a link is calculated as 16666666.666666666 when the reference bandwidth is modified for high-speed routing.",
      "type": "example"
    },
    {
      "id": "net_p3_t4",
      "label": "IS-IS Protocol",
      "description": "OSPF interface cost for a link is calculated as 14285714.285714285 when the reference bandwidth is modified for high-speed routing.",
      "type": "topic"
    },
    {
      "id": "net_p3_t4_s0",
      "label": "OSPF interface cost",
      "description": "OSPF interface cost for a link is calculated as 12500000 when the reference bandwidth is modified for high-speed routing.",
      "type": "concept"
    },
    {
      "id": "net_p3_t4_s0_l0",
      "label": "OSPF interface",
      "description": "OSPF interface cost for a link is calculated as 11111111.111111112 when the reference bandwidth is modified for high-speed routing.",
      "type": "example"
    },
    {
      "id": "net_p3_t4_s0_l1",
      "label": "OSPF interface",
      "description": "OSPF interface cost for a link is calculated as 10000000 when the reference bandwidth is modified for high-speed routing.",
      "type": "example"
    },
    {
      "id": "net_p3_t4_s1",
      "label": "OSPF interface cost",
      "description": "OSPF interface cost for a link is calculated as 9090909.090909092 when the reference bandwidth is modified for high-speed routing.",
      "type": "concept"
    },
    {
      "id": "net_p3_t4_s1_l0",
      "label": "OSPF interface",
      "description": "OSPF interface cost for a link is calculated as 8333333.333333333 when the reference bandwidth is modified for high-speed routing.",
      "type": "example"
    },
    {
      "id": "net_p3_t4_s1_l1",
      "label": "OSPF interface",
      "description": "OSPF interface cost for a link is calculated as 7692307.692307692 when the reference bandwidth is modified for high-speed routing.",
      "type": "example"
    },
    {
      "id": "net_p3_t4_s2",
      "label": "OSPF interface cost",
      "description": "OSPF interface cost for a link is calculated as 7142857.142857143 when the reference bandwidth is modified for high-speed routing.",
      "type": "concept"
    },
    {
      "id": "net_p3_t4_s2_l0",
      "label": "OSPF interface",
      "description": "OSPF interface cost for a link is calculated as 6666666.666666667 when the reference bandwidth is modified for high-speed routing.",
      "type": "example"
    },
    {
      "id": "net_p3_t4_s2_l1",
      "label": "OSPF interface",
      "description": "OSPF interface cost for a link is calculated as 6250000 when the reference bandwidth is modified for high-speed routing.",
      "type": "example"
    },
    {
      "id": "net_p3_t4_s3",
      "label": "OSPF interface cost",
      "description": "OSPF interface cost for a link is calculated as 5882352.94117647 when the reference bandwidth is modified for high-speed routing.",
      "type": "concept"
    },
    {
      "id": "net_p3_t4_s3_l0",
      "label": "OSPF interface",
      "description": "OSPF interface cost for a link is calculated as 5555555.555555556 when the reference bandwidth is modified for high-speed routing.",
      "type": "example"
    },
    {
      "id": "net_p3_t4_s3_l1",
      "label": "OSPF interface",
      "description": "OSPF interface cost for a link is calculated as 5263157.894736842 when the reference bandwidth is modified for high-speed routing.",
      "type": "example"
    },
    {
      "id": "net_p3_t4_s4",
      "label": "OSPF interface cost",
      "description": "OSPF interface cost for a link is calculated as 5000000 when the reference bandwidth is modified for high-speed routing.",
      "type": "concept"
    },
    {
      "id": "net_p3_t4_s4_l0",
      "label": "OSPF interface",
      "description": "OSPF interface cost for a link is calculated as 4761904.761904762 when the reference bandwidth is modified for high-speed routing.",
      "type": "example"
    },
    {
      "id": "net_p3_t4_s4_l1",
      "label": "OSPF interface",
      "description": "OSPF interface cost for a link is calculated as 4545454.545454546 when the reference bandwidth is modified for high-speed routing.",
      "type": "example"
    },
    {
      "id": "net_p3_t5",
      "label": "BGP Protocol",
      "description": "OSPF interface cost for a link is calculated as 4347826.0869565215 when the reference bandwidth is modified for high-speed routing.",
      "type": "topic"
    },
    {
      "id": "net_p3_t5_s0",
      "label": "OSPF interface cost",
      "description": "OSPF interface cost for a link is calculated as 4166666.6666666665 when the reference bandwidth is modified for high-speed routing.",
      "type": "concept"
    },
    {
      "id": "net_p3_t5_s0_l0",
      "label": "OSPF interface",
      "description": "OSPF interface cost for a link is calculated as 4000000 when the reference bandwidth is modified for high-speed routing.",
      "type": "example"
    },
    {
      "id": "net_p3_t5_s0_l1",
      "label": "OSPF interface",
      "description": "OSPF interface cost for a link is calculated as 3846153.846153846 when the reference bandwidth is modified for high-speed routing.",
      "type": "example"
    },
    {
      "id": "net_p3_t5_s1",
      "label": "OSPF interface cost",
      "description": "OSPF interface cost for a link is calculated as 3703703.703703704 when the reference bandwidth is modified for high-speed routing.",
      "type": "concept"
    },
    {
      "id": "net_p3_t5_s1_l0",
      "label": "OSPF interface",
      "description": "OSPF interface cost for a link is calculated as 3571428.5714285714 when the reference bandwidth is modified for high-speed routing.",
      "type": "example"
    },
    {
      "id": "net_p3_t5_s1_l1",
      "label": "OSPF interface",
      "description": "OSPF interface cost for a link is calculated as 3448275.8620689656 when the reference bandwidth is modified for high-speed routing.",
      "type": "example"
    },
    {
      "id": "net_p3_t5_s2",
      "label": "OSPF interface cost",
      "description": "OSPF interface cost for a link is calculated as 3333333.3333333335 when the reference bandwidth is modified for high-speed routing.",
      "type": "concept"
    },
    {
      "id": "net_p3_t5_s2_l0",
      "label": "OSPF interface",
      "description": "OSPF interface cost for a link is calculated as 3225806.4516129033 when the reference bandwidth is modified for high-speed routing.",
      "type": "example"
    },
    {
      "id": "net_p3_t5_s2_l1",
      "label": "OSPF interface",
      "description": "OSPF interface cost for a link is calculated as 3125000 when the reference bandwidth is modified for high-speed routing.",
      "type": "example"
    },
    {
      "id": "net_p3_t5_s3",
      "label": "OSPF interface cost",
      "description": "OSPF interface cost for a link is calculated as 3030303.0303030303 when the reference bandwidth is modified for high-speed routing.",
      "type": "concept"
    },
    {
      "id": "net_p3_t5_s3_l0",
      "label": "OSPF interface",
      "description": "OSPF interface cost for a link is calculated as 2941176.470588235 when the reference bandwidth is modified for high-speed routing.",
      "type": "example"
    },
    {
      "id": "net_p3_t5_s3_l1",
      "label": "OSPF interface",
      "description": "OSPF interface cost for a link is calculated as 2857142.8571428573 when the reference bandwidth is modified for high-speed routing.",
      "type": "example"
    },
    {
      "id": "net_p3_t5_s4",
      "label": "MPLS label 17",
      "description": "MPLS label 17 is a dynamically allocated forwarding tag mapped to an IP FEC via LDP.",
      "type": "concept"
    },
    {
      "id": "net_p3_t5_s4_l0",
      "label": "MPLS label",
      "description": "MPLS label 18 is a dynamically allocated forwarding tag mapped to an IP FEC via LDP.",
      "type": "example"
    },
    {
      "id": "net_p3_t5_s4_l1",
      "label": "MPLS label",
      "description": "MPLS label 19 is a dynamically allocated forwarding tag mapped to an IP FEC via LDP.",
      "type": "example"
    },
    {
      "id": "net_p3_t6",
      "label": "MPLS & Traffic Eng",
      "description": "MPLS label 20 is a dynamically allocated forwarding tag mapped to an IP FEC via LDP.",
      "type": "topic"
    },
    {
      "id": "net_p3_t6_s0",
      "label": "MPLS label 21",
      "description": "MPLS label 21 is a dynamically allocated forwarding tag mapped to an IP FEC via LDP.",
      "type": "concept"
    },
    {
      "id": "net_p3_t6_s0_l0",
      "label": "MPLS label",
      "description": "MPLS label 22 is a dynamically allocated forwarding tag mapped to an IP FEC via LDP.",
      "type": "example"
    },
    {
      "id": "net_p3_t6_s0_l1",
      "label": "MPLS label",
      "description": "MPLS label 23 is a dynamically allocated forwarding tag mapped to an IP FEC via LDP.",
      "type": "example"
    },
    {
      "id": "net_p3_t6_s1",
      "label": "MPLS label 24",
      "description": "MPLS label 24 is a dynamically allocated forwarding tag mapped to an IP FEC via LDP.",
      "type": "concept"
    },
    {
      "id": "net_p3_t6_s1_l0",
      "label": "MPLS label",
      "description": "MPLS label 25 is a dynamically allocated forwarding tag mapped to an IP FEC via LDP.",
      "type": "example"
    },
    {
      "id": "net_p3_t6_s1_l1",
      "label": "MPLS label",
      "description": "MPLS label 26 is a dynamically allocated forwarding tag mapped to an IP FEC via LDP.",
      "type": "example"
    },
    {
      "id": "net_p3_t6_s2",
      "label": "MPLS label 27",
      "description": "MPLS label 27 is a dynamically allocated forwarding tag mapped to an IP FEC via LDP.",
      "type": "concept"
    },
    {
      "id": "net_p3_t6_s2_l0",
      "label": "MPLS label",
      "description": "MPLS label 28 is a dynamically allocated forwarding tag mapped to an IP FEC via LDP.",
      "type": "example"
    },
    {
      "id": "net_p3_t6_s2_l1",
      "label": "MPLS label",
      "description": "MPLS label 29 is a dynamically allocated forwarding tag mapped to an IP FEC via LDP.",
      "type": "example"
    },
    {
      "id": "net_p3_t6_s3",
      "label": "MPLS label 30",
      "description": "MPLS label 30 is a dynamically allocated forwarding tag mapped to an IP FEC via LDP.",
      "type": "concept"
    },
    {
      "id": "net_p3_t6_s3_l0",
      "label": "MPLS label",
      "description": "MPLS label 31 is a dynamically allocated forwarding tag mapped to an IP FEC via LDP.",
      "type": "example"
    },
    {
      "id": "net_p3_t6_s3_l1",
      "label": "MPLS label",
      "description": "MPLS label 32 is a dynamically allocated forwarding tag mapped to an IP FEC via LDP.",
      "type": "example"
    },
    {
      "id": "net_p3_t6_s4",
      "label": "MPLS label 33",
      "description": "MPLS label 33 is a dynamically allocated forwarding tag mapped to an IP FEC via LDP.",
      "type": "concept"
    },
    {
      "id": "net_p3_t6_s4_l0",
      "label": "MPLS label",
      "description": "MPLS label 34 is a dynamically allocated forwarding tag mapped to an IP FEC via LDP.",
      "type": "example"
    },
    {
      "id": "net_p3_t6_s4_l1",
      "label": "MPLS label",
      "description": "MPLS label 35 is a dynamically allocated forwarding tag mapped to an IP FEC via LDP.",
      "type": "example"
    },
    {
      "id": "net_p4_t0",
      "label": "TCP Handshake",
      "description": "TCP port 21 is assigned by IANA, requiring a 3-way SYN/SYN-ACK/ACK handshake to establish reliable state.",
      "type": "topic"
    },
    {
      "id": "net_p4_t0_s0",
      "label": "TCP threeway handshake",
      "description": "TCP three-way handshake SYN (ISN)/SYN-ACK (server ISN+ACK)/ACK",
      "type": "concept"
    },
    {
      "id": "net_p4_t0_s0_l0",
      "label": "TCP header",
      "description": "TCP header: src port(2)+dst port(2)+seq(4)+ack(4)+flags(1)+window(2)+checksum(2)+urgent(2)",
      "type": "example"
    },
    {
      "id": "net_p4_t0_s0_l1",
      "label": "sliding window",
      "description": "sliding window rwnd flow control vs cwnd congestion control",
      "type": "example"
    },
    {
      "id": "net_p4_t0_s1",
      "label": "Nagle algorithm coalesce",
      "description": "Nagle algorithm coalesce small segments (TCP_NODELAY disables)",
      "type": "concept"
    },
    {
      "id": "net_p4_t0_s1_l0",
      "label": "slow start",
      "description": "slow start cwnd=1MSS doubling until ssthresh",
      "type": "example"
    },
    {
      "id": "net_p4_t0_s1_l1",
      "label": "AIMD additive",
      "description": "AIMD additive increase +1MSS per RTT/multiplicative decrease *0.5 on loss",
      "type": "example"
    },
    {
      "id": "net_p4_t0_s2",
      "label": "SACK option allows",
      "description": "SACK option allows ack specific ranges avoiding full retransmit",
      "type": "concept"
    },
    {
      "id": "net_p4_t0_s2_l0",
      "label": "TIMEWAIT 2MSL",
      "description": "TIME_WAIT 2*MSL prevents duplicate segments",
      "type": "example"
    },
    {
      "id": "net_p4_t0_s2_l1",
      "label": "TCP Fast",
      "description": "TCP Fast Open TFO cookie in SYN reduces RTT",
      "type": "example"
    },
    {
      "id": "net_p4_t0_s3",
      "label": "UDP 8byte header",
      "description": "UDP 8-byte header no retransmit used for DNS/DHCP/QUIC",
      "type": "concept"
    },
    {
      "id": "net_p4_t0_s3_l0",
      "label": "QUIC RFC",
      "description": "QUIC (RFC 9000) runs over UDP with own reliable delivery per stream",
      "type": "example"
    },
    {
      "id": "net_p4_t0_s3_l1",
      "label": "QUIC 0RTT",
      "description": "QUIC 0-RTT resumption using session ticket",
      "type": "example"
    },
    {
      "id": "net_p4_t0_s4",
      "label": "QUIC stream multiplexing",
      "description": "QUIC stream multiplexing no HOL blocking unlike TCP",
      "type": "concept"
    },
    {
      "id": "net_p4_t0_s4_l0",
      "label": "DCCP congestion",
      "description": "DCCP congestion control without reliability",
      "type": "example"
    },
    {
      "id": "net_p4_t0_s4_l1",
      "label": "TCP port",
      "description": "TCP port 22 is assigned by IANA, requiring a 3-way SYN/SYN-ACK/ACK handshake to establish reliable state.",
      "type": "example"
    },
    {
      "id": "net_p4_t1",
      "label": "TCP Header",
      "description": "TCP port 23 is assigned by IANA, requiring a 3-way SYN/SYN-ACK/ACK handshake to establish reliable state.",
      "type": "topic"
    },
    {
      "id": "net_p4_t1_s0",
      "label": "TCP port 25",
      "description": "TCP port 25 is assigned by IANA, requiring a 3-way SYN/SYN-ACK/ACK handshake to establish reliable state.",
      "type": "concept"
    },
    {
      "id": "net_p4_t1_s0_l0",
      "label": "TCP port",
      "description": "TCP port 53 is assigned by IANA, requiring a 3-way SYN/SYN-ACK/ACK handshake to establish reliable state.",
      "type": "example"
    },
    {
      "id": "net_p4_t1_s0_l1",
      "label": "TCP port",
      "description": "TCP port 80 is assigned by IANA, requiring a 3-way SYN/SYN-ACK/ACK handshake to establish reliable state.",
      "type": "example"
    },
    {
      "id": "net_p4_t1_s1",
      "label": "TCP port 110",
      "description": "TCP port 110 is assigned by IANA, requiring a 3-way SYN/SYN-ACK/ACK handshake to establish reliable state.",
      "type": "concept"
    },
    {
      "id": "net_p4_t1_s1_l0",
      "label": "TCP port",
      "description": "TCP port 143 is assigned by IANA, requiring a 3-way SYN/SYN-ACK/ACK handshake to establish reliable state.",
      "type": "example"
    },
    {
      "id": "net_p4_t1_s1_l1",
      "label": "TCP port",
      "description": "TCP port 443 is assigned by IANA, requiring a 3-way SYN/SYN-ACK/ACK handshake to establish reliable state.",
      "type": "example"
    },
    {
      "id": "net_p4_t1_s2",
      "label": "TCP port 465",
      "description": "TCP port 465 is assigned by IANA, requiring a 3-way SYN/SYN-ACK/ACK handshake to establish reliable state.",
      "type": "concept"
    },
    {
      "id": "net_p4_t1_s2_l0",
      "label": "TCP port",
      "description": "TCP port 587 is assigned by IANA, requiring a 3-way SYN/SYN-ACK/ACK handshake to establish reliable state.",
      "type": "example"
    },
    {
      "id": "net_p4_t1_s2_l1",
      "label": "TCP port",
      "description": "TCP port 993 is assigned by IANA, requiring a 3-way SYN/SYN-ACK/ACK handshake to establish reliable state.",
      "type": "example"
    },
    {
      "id": "net_p4_t1_s3",
      "label": "TCP port 995",
      "description": "TCP port 995 is assigned by IANA, requiring a 3-way SYN/SYN-ACK/ACK handshake to establish reliable state.",
      "type": "concept"
    },
    {
      "id": "net_p4_t1_s3_l0",
      "label": "TCP port",
      "description": "TCP port 3306 is assigned by IANA, requiring a 3-way SYN/SYN-ACK/ACK handshake to establish reliable state.",
      "type": "example"
    },
    {
      "id": "net_p4_t1_s3_l1",
      "label": "TCP port",
      "description": "TCP port 5432 is assigned by IANA, requiring a 3-way SYN/SYN-ACK/ACK handshake to establish reliable state.",
      "type": "example"
    },
    {
      "id": "net_p4_t1_s4",
      "label": "TCP port 8080",
      "description": "TCP port 8080 is assigned by IANA, requiring a 3-way SYN/SYN-ACK/ACK handshake to establish reliable state.",
      "type": "concept"
    },
    {
      "id": "net_p4_t1_s4_l0",
      "label": "TCP port",
      "description": "TCP port 8443 is assigned by IANA, requiring a 3-way SYN/SYN-ACK/ACK handshake to establish reliable state.",
      "type": "example"
    },
    {
      "id": "net_p4_t1_s4_l1",
      "label": "TCP port",
      "description": "TCP port 6379 is assigned by IANA, requiring a 3-way SYN/SYN-ACK/ACK handshake to establish reliable state.",
      "type": "example"
    },
    {
      "id": "net_p4_t2",
      "label": "Flow & Congestion",
      "description": "TCP port 27017 is assigned by IANA, requiring a 3-way SYN/SYN-ACK/ACK handshake to establish reliable state.",
      "type": "topic"
    },
    {
      "id": "net_p4_t2_s0",
      "label": "TCP port 9200",
      "description": "TCP port 9200 is assigned by IANA, requiring a 3-way SYN/SYN-ACK/ACK handshake to establish reliable state.",
      "type": "concept"
    },
    {
      "id": "net_p4_t2_s0_l0",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 1 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t2_s0_l1",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 2 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t2_s1",
      "label": "TCP initial congestion",
      "description": "TCP initial congestion window (cwnd) calculation can start at 3 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "concept"
    },
    {
      "id": "net_p4_t2_s1_l0",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 4 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t2_s1_l1",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 5 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t2_s2",
      "label": "TCP initial congestion",
      "description": "TCP initial congestion window (cwnd) calculation can start at 6 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "concept"
    },
    {
      "id": "net_p4_t2_s2_l0",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 7 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t2_s2_l1",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 8 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t2_s3",
      "label": "TCP initial congestion",
      "description": "TCP initial congestion window (cwnd) calculation can start at 9 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "concept"
    },
    {
      "id": "net_p4_t2_s3_l0",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 10 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t2_s3_l1",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 11 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t2_s4",
      "label": "TCP initial congestion",
      "description": "TCP initial congestion window (cwnd) calculation can start at 12 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "concept"
    },
    {
      "id": "net_p4_t2_s4_l0",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 13 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t2_s4_l1",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 14 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t3",
      "label": "TCP Optimization",
      "description": "TCP initial congestion window (cwnd) calculation can start at 15 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "topic"
    },
    {
      "id": "net_p4_t3_s0",
      "label": "TCP initial congestion",
      "description": "TCP initial congestion window (cwnd) calculation can start at 16 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "concept"
    },
    {
      "id": "net_p4_t3_s0_l0",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 17 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t3_s0_l1",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 18 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t3_s1",
      "label": "TCP initial congestion",
      "description": "TCP initial congestion window (cwnd) calculation can start at 19 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "concept"
    },
    {
      "id": "net_p4_t3_s1_l0",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 20 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t3_s1_l1",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 21 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t3_s2",
      "label": "TCP initial congestion",
      "description": "TCP initial congestion window (cwnd) calculation can start at 22 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "concept"
    },
    {
      "id": "net_p4_t3_s2_l0",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 23 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t3_s2_l1",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 24 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t3_s3",
      "label": "TCP initial congestion",
      "description": "TCP initial congestion window (cwnd) calculation can start at 25 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "concept"
    },
    {
      "id": "net_p4_t3_s3_l0",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 26 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t3_s3_l1",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 27 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t3_s4",
      "label": "TCP initial congestion",
      "description": "TCP initial congestion window (cwnd) calculation can start at 28 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "concept"
    },
    {
      "id": "net_p4_t3_s4_l0",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 29 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t3_s4_l1",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 30 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t4",
      "label": "Advanced TCP",
      "description": "TCP initial congestion window (cwnd) calculation can start at 31 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "topic"
    },
    {
      "id": "net_p4_t4_s0",
      "label": "TCP initial congestion",
      "description": "TCP initial congestion window (cwnd) calculation can start at 32 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "concept"
    },
    {
      "id": "net_p4_t4_s0_l0",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 33 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t4_s0_l1",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 34 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t4_s1",
      "label": "TCP initial congestion",
      "description": "TCP initial congestion window (cwnd) calculation can start at 35 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "concept"
    },
    {
      "id": "net_p4_t4_s1_l0",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 36 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t4_s1_l1",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 37 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t4_s2",
      "label": "TCP initial congestion",
      "description": "TCP initial congestion window (cwnd) calculation can start at 38 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "concept"
    },
    {
      "id": "net_p4_t4_s2_l0",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 39 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t4_s2_l1",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 40 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t4_s3",
      "label": "TCP initial congestion",
      "description": "TCP initial congestion window (cwnd) calculation can start at 41 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "concept"
    },
    {
      "id": "net_p4_t4_s3_l0",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 42 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t4_s3_l1",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 43 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t4_s4",
      "label": "TCP initial congestion",
      "description": "TCP initial congestion window (cwnd) calculation can start at 44 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "concept"
    },
    {
      "id": "net_p4_t4_s4_l0",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 45 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t4_s4_l1",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 46 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t5",
      "label": "UDP Protocol",
      "description": "TCP initial congestion window (cwnd) calculation can start at 47 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "topic"
    },
    {
      "id": "net_p4_t5_s0",
      "label": "TCP initial congestion",
      "description": "TCP initial congestion window (cwnd) calculation can start at 48 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "concept"
    },
    {
      "id": "net_p4_t5_s0_l0",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 49 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t5_s0_l1",
      "label": "TCP initial",
      "description": "TCP initial congestion window (cwnd) calculation can start at 50 MSS depending on the specific kernel TCP algorithm in use.",
      "type": "example"
    },
    {
      "id": "net_p4_t5_s1",
      "label": "UDP header length",
      "description": "UDP header length is strictly 8 bytes, with destination port 1025 providing stateless multiplexing.",
      "type": "concept"
    },
    {
      "id": "net_p4_t5_s1_l0",
      "label": "UDP header",
      "description": "UDP header length is strictly 8 bytes, with destination port 1026 providing stateless multiplexing.",
      "type": "example"
    },
    {
      "id": "net_p4_t5_s1_l1",
      "label": "UDP header",
      "description": "UDP header length is strictly 8 bytes, with destination port 1027 providing stateless multiplexing.",
      "type": "example"
    },
    {
      "id": "net_p4_t5_s2",
      "label": "UDP header length",
      "description": "UDP header length is strictly 8 bytes, with destination port 1028 providing stateless multiplexing.",
      "type": "concept"
    },
    {
      "id": "net_p4_t5_s2_l0",
      "label": "UDP header",
      "description": "UDP header length is strictly 8 bytes, with destination port 1029 providing stateless multiplexing.",
      "type": "example"
    },
    {
      "id": "net_p4_t5_s2_l1",
      "label": "UDP header",
      "description": "UDP header length is strictly 8 bytes, with destination port 1030 providing stateless multiplexing.",
      "type": "example"
    },
    {
      "id": "net_p4_t5_s3",
      "label": "UDP header length",
      "description": "UDP header length is strictly 8 bytes, with destination port 1031 providing stateless multiplexing.",
      "type": "concept"
    },
    {
      "id": "net_p4_t5_s3_l0",
      "label": "UDP header",
      "description": "UDP header length is strictly 8 bytes, with destination port 1032 providing stateless multiplexing.",
      "type": "example"
    },
    {
      "id": "net_p4_t5_s3_l1",
      "label": "UDP header",
      "description": "UDP header length is strictly 8 bytes, with destination port 1033 providing stateless multiplexing.",
      "type": "example"
    },
    {
      "id": "net_p4_t5_s4",
      "label": "UDP header length",
      "description": "UDP header length is strictly 8 bytes, with destination port 1034 providing stateless multiplexing.",
      "type": "concept"
    },
    {
      "id": "net_p4_t5_s4_l0",
      "label": "UDP header",
      "description": "UDP header length is strictly 8 bytes, with destination port 1035 providing stateless multiplexing.",
      "type": "example"
    },
    {
      "id": "net_p4_t5_s4_l1",
      "label": "UDP header",
      "description": "UDP header length is strictly 8 bytes, with destination port 1036 providing stateless multiplexing.",
      "type": "example"
    },
    {
      "id": "net_p4_t6",
      "label": "QUIC Transport",
      "description": "UDP header length is strictly 8 bytes, with destination port 1037 providing stateless multiplexing.",
      "type": "topic"
    },
    {
      "id": "net_p4_t6_s0",
      "label": "UDP header length",
      "description": "UDP header length is strictly 8 bytes, with destination port 1038 providing stateless multiplexing.",
      "type": "concept"
    },
    {
      "id": "net_p4_t6_s0_l0",
      "label": "UDP header",
      "description": "UDP header length is strictly 8 bytes, with destination port 1039 providing stateless multiplexing.",
      "type": "example"
    },
    {
      "id": "net_p4_t6_s0_l1",
      "label": "UDP header",
      "description": "UDP header length is strictly 8 bytes, with destination port 1040 providing stateless multiplexing.",
      "type": "example"
    },
    {
      "id": "net_p4_t6_s1",
      "label": "UDP header length",
      "description": "UDP header length is strictly 8 bytes, with destination port 1041 providing stateless multiplexing.",
      "type": "concept"
    },
    {
      "id": "net_p4_t6_s1_l0",
      "label": "UDP header",
      "description": "UDP header length is strictly 8 bytes, with destination port 1042 providing stateless multiplexing.",
      "type": "example"
    },
    {
      "id": "net_p4_t6_s1_l1",
      "label": "UDP header",
      "description": "UDP header length is strictly 8 bytes, with destination port 1043 providing stateless multiplexing.",
      "type": "example"
    },
    {
      "id": "net_p4_t6_s2",
      "label": "UDP header length",
      "description": "UDP header length is strictly 8 bytes, with destination port 1044 providing stateless multiplexing.",
      "type": "concept"
    },
    {
      "id": "net_p4_t6_s2_l0",
      "label": "UDP header",
      "description": "UDP header length is strictly 8 bytes, with destination port 1045 providing stateless multiplexing.",
      "type": "example"
    },
    {
      "id": "net_p4_t6_s2_l1",
      "label": "UDP header",
      "description": "UDP header length is strictly 8 bytes, with destination port 1046 providing stateless multiplexing.",
      "type": "example"
    },
    {
      "id": "net_p4_t6_s3",
      "label": "UDP header length",
      "description": "UDP header length is strictly 8 bytes, with destination port 1047 providing stateless multiplexing.",
      "type": "concept"
    },
    {
      "id": "net_p4_t6_s3_l0",
      "label": "UDP header",
      "description": "UDP header length is strictly 8 bytes, with destination port 1048 providing stateless multiplexing.",
      "type": "example"
    },
    {
      "id": "net_p4_t6_s3_l1",
      "label": "UDP header",
      "description": "UDP header length is strictly 8 bytes, with destination port 1049 providing stateless multiplexing.",
      "type": "example"
    },
    {
      "id": "net_p4_t6_s4",
      "label": "UDP header length",
      "description": "UDP header length is strictly 8 bytes, with destination port 1050 providing stateless multiplexing.",
      "type": "concept"
    },
    {
      "id": "net_p4_t6_s4_l0",
      "label": "UDP header",
      "description": "UDP header length is strictly 8 bytes, with destination port 1051 providing stateless multiplexing.",
      "type": "example"
    },
    {
      "id": "net_p4_t6_s4_l1",
      "label": "UDP header",
      "description": "UDP header length is strictly 8 bytes, with destination port 1052 providing stateless multiplexing.",
      "type": "example"
    },
    {
      "id": "net_p5_t0",
      "label": "DNS Core",
      "description": "HTTP status code 200 adheres to RFC 7231 semantics for explicit client-server state signaling.",
      "type": "topic"
    },
    {
      "id": "net_p5_t0_s0",
      "label": "DNS query types",
      "description": "DNS query types: A(IPv4)/AAAA(IPv6)/MX(mail)/CNAME(alias)/TXT(SPF/DKIM)/SRV(service locator)/PTR(reverse)",
      "type": "concept"
    },
    {
      "id": "net_p5_t0_s0_l0",
      "label": "DNS recursive",
      "description": "DNS recursive resolver iterative queries root→TLD→auth",
      "type": "example"
    },
    {
      "id": "net_p5_t0_s0_l1",
      "label": "DNS TTL",
      "description": "DNS TTL cache negative caching NXDOMAIN",
      "type": "example"
    },
    {
      "id": "net_p5_t0_s1",
      "label": "DoH DNS over",
      "description": "DoH DNS over HTTPS port 443 encrypted from ISP",
      "type": "concept"
    },
    {
      "id": "net_p5_t0_s1_l0",
      "label": "DoT DNS",
      "description": "DoT DNS over TLS port 853",
      "type": "example"
    },
    {
      "id": "net_p5_t0_s1_l1",
      "label": "HTTP11 persistent",
      "description": "HTTP/1.1 persistent connection pipelining HOL blocking",
      "type": "example"
    },
    {
      "id": "net_p5_t0_s2",
      "label": "HTTP2 binary framing",
      "description": "HTTP/2 binary framing HPACK static/dynamic header table compression",
      "type": "concept"
    },
    {
      "id": "net_p5_t0_s2_l0",
      "label": "HTTP2 stream",
      "description": "HTTP/2 stream multiplexing stream IDs server push PUSH_PROMISE",
      "type": "example"
    },
    {
      "id": "net_p5_t0_s2_l1",
      "label": "HTTP3 QUIC",
      "description": "HTTP/3 QUIC streams 0-RTT header QPACK compression",
      "type": "example"
    },
    {
      "id": "net_p5_t0_s3",
      "label": "WebSocket upgrade SecWebSocket",
      "description": "WebSocket upgrade Sec-WebSocket-Key base64 handshake 101 switching",
      "type": "concept"
    },
    {
      "id": "net_p5_t0_s3_l0",
      "label": "gRPC HTTP2",
      "description": "gRPC HTTP/2 trailers Protobuf binary encoding",
      "type": "example"
    },
    {
      "id": "net_p5_t0_s3_l1",
      "label": "SMTP EHLOAUTHDATA",
      "description": "SMTP EHLO/AUTH/DATA RFC 5321",
      "type": "example"
    },
    {
      "id": "net_p5_t0_s4",
      "label": "DKIM signature header",
      "description": "DKIM signature header d=/s= selector DNS lookup",
      "type": "concept"
    },
    {
      "id": "net_p5_t0_s4_l0",
      "label": "SPF TXT",
      "description": "SPF TXT record ip4:/include: mechanisms",
      "type": "example"
    },
    {
      "id": "net_p5_t0_s4_l1",
      "label": "DMARC preject",
      "description": "DMARC p=reject alignment policy",
      "type": "example"
    },
    {
      "id": "net_p5_t1",
      "label": "Encrypted DNS",
      "description": "HTTP status code 201 adheres to RFC 7231 semantics for explicit client-server state signaling.",
      "type": "topic"
    },
    {
      "id": "net_p5_t1_s0",
      "label": "HTTP status code",
      "description": "HTTP status code 202 adheres to RFC 7231 semantics for explicit client-server state signaling.",
      "type": "concept"
    },
    {
      "id": "net_p5_t1_s0_l0",
      "label": "HTTP status",
      "description": "HTTP status code 204 adheres to RFC 7231 semantics for explicit client-server state signaling.",
      "type": "example"
    },
    {
      "id": "net_p5_t1_s0_l1",
      "label": "HTTP status",
      "description": "HTTP status code 301 adheres to RFC 7231 semantics for explicit client-server state signaling.",
      "type": "example"
    },
    {
      "id": "net_p5_t1_s1",
      "label": "HTTP status code",
      "description": "HTTP status code 302 adheres to RFC 7231 semantics for explicit client-server state signaling.",
      "type": "concept"
    },
    {
      "id": "net_p5_t1_s1_l0",
      "label": "HTTP status",
      "description": "HTTP status code 304 adheres to RFC 7231 semantics for explicit client-server state signaling.",
      "type": "example"
    },
    {
      "id": "net_p5_t1_s1_l1",
      "label": "HTTP status",
      "description": "HTTP status code 307 adheres to RFC 7231 semantics for explicit client-server state signaling.",
      "type": "example"
    },
    {
      "id": "net_p5_t1_s2",
      "label": "HTTP status code",
      "description": "HTTP status code 308 adheres to RFC 7231 semantics for explicit client-server state signaling.",
      "type": "concept"
    },
    {
      "id": "net_p5_t1_s2_l0",
      "label": "HTTP status",
      "description": "HTTP status code 400 adheres to RFC 7231 semantics for explicit client-server state signaling.",
      "type": "example"
    },
    {
      "id": "net_p5_t1_s2_l1",
      "label": "HTTP status",
      "description": "HTTP status code 401 adheres to RFC 7231 semantics for explicit client-server state signaling.",
      "type": "example"
    },
    {
      "id": "net_p5_t1_s3",
      "label": "HTTP status code",
      "description": "HTTP status code 403 adheres to RFC 7231 semantics for explicit client-server state signaling.",
      "type": "concept"
    },
    {
      "id": "net_p5_t1_s3_l0",
      "label": "HTTP status",
      "description": "HTTP status code 404 adheres to RFC 7231 semantics for explicit client-server state signaling.",
      "type": "example"
    },
    {
      "id": "net_p5_t1_s3_l1",
      "label": "HTTP status",
      "description": "HTTP status code 405 adheres to RFC 7231 semantics for explicit client-server state signaling.",
      "type": "example"
    },
    {
      "id": "net_p5_t1_s4",
      "label": "HTTP status code",
      "description": "HTTP status code 429 adheres to RFC 7231 semantics for explicit client-server state signaling.",
      "type": "concept"
    },
    {
      "id": "net_p5_t1_s4_l0",
      "label": "HTTP status",
      "description": "HTTP status code 500 adheres to RFC 7231 semantics for explicit client-server state signaling.",
      "type": "example"
    },
    {
      "id": "net_p5_t1_s4_l1",
      "label": "HTTP status",
      "description": "HTTP status code 502 adheres to RFC 7231 semantics for explicit client-server state signaling.",
      "type": "example"
    },
    {
      "id": "net_p5_t2",
      "label": "HTTP/1 & HTTP/2",
      "description": "HTTP status code 503 adheres to RFC 7231 semantics for explicit client-server state signaling.",
      "type": "topic"
    },
    {
      "id": "net_p5_t2_s0",
      "label": "HTTP status code",
      "description": "HTTP status code 504 adheres to RFC 7231 semantics for explicit client-server state signaling.",
      "type": "concept"
    },
    {
      "id": "net_p5_t2_s0_l0",
      "label": "HTTP status",
      "description": "HTTP status code 505 adheres to RFC 7231 semantics for explicit client-server state signaling.",
      "type": "example"
    },
    {
      "id": "net_p5_t2_s0_l1",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.1 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t2_s1",
      "label": "DNS A record",
      "description": "DNS A record mapping to 192.0.2.2 includes a TTL value dictating resolver cache duration.",
      "type": "concept"
    },
    {
      "id": "net_p5_t2_s1_l0",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.3 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t2_s1_l1",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.4 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t2_s2",
      "label": "DNS A record",
      "description": "DNS A record mapping to 192.0.2.5 includes a TTL value dictating resolver cache duration.",
      "type": "concept"
    },
    {
      "id": "net_p5_t2_s2_l0",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.6 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t2_s2_l1",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.7 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t2_s3",
      "label": "DNS A record",
      "description": "DNS A record mapping to 192.0.2.8 includes a TTL value dictating resolver cache duration.",
      "type": "concept"
    },
    {
      "id": "net_p5_t2_s3_l0",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.9 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t2_s3_l1",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.10 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t2_s4",
      "label": "DNS A record",
      "description": "DNS A record mapping to 192.0.2.11 includes a TTL value dictating resolver cache duration.",
      "type": "concept"
    },
    {
      "id": "net_p5_t2_s4_l0",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.12 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t2_s4_l1",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.13 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t3",
      "label": "HTTP/3 & WebSockets",
      "description": "DNS A record mapping to 192.0.2.14 includes a TTL value dictating resolver cache duration.",
      "type": "topic"
    },
    {
      "id": "net_p5_t3_s0",
      "label": "DNS A record",
      "description": "DNS A record mapping to 192.0.2.15 includes a TTL value dictating resolver cache duration.",
      "type": "concept"
    },
    {
      "id": "net_p5_t3_s0_l0",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.16 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t3_s0_l1",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.17 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t3_s1",
      "label": "DNS A record",
      "description": "DNS A record mapping to 192.0.2.18 includes a TTL value dictating resolver cache duration.",
      "type": "concept"
    },
    {
      "id": "net_p5_t3_s1_l0",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.19 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t3_s1_l1",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.20 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t3_s2",
      "label": "DNS A record",
      "description": "DNS A record mapping to 192.0.2.21 includes a TTL value dictating resolver cache duration.",
      "type": "concept"
    },
    {
      "id": "net_p5_t3_s2_l0",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.22 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t3_s2_l1",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.23 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t3_s3",
      "label": "DNS A record",
      "description": "DNS A record mapping to 192.0.2.24 includes a TTL value dictating resolver cache duration.",
      "type": "concept"
    },
    {
      "id": "net_p5_t3_s3_l0",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.25 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t3_s3_l1",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.26 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t3_s4",
      "label": "DNS A record",
      "description": "DNS A record mapping to 192.0.2.27 includes a TTL value dictating resolver cache duration.",
      "type": "concept"
    },
    {
      "id": "net_p5_t3_s4_l0",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.28 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t3_s4_l1",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.29 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t4",
      "label": "RPC Protocols",
      "description": "DNS A record mapping to 192.0.2.30 includes a TTL value dictating resolver cache duration.",
      "type": "topic"
    },
    {
      "id": "net_p5_t4_s0",
      "label": "DNS A record",
      "description": "DNS A record mapping to 192.0.2.31 includes a TTL value dictating resolver cache duration.",
      "type": "concept"
    },
    {
      "id": "net_p5_t4_s0_l0",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.32 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t4_s0_l1",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.33 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t4_s1",
      "label": "DNS A record",
      "description": "DNS A record mapping to 192.0.2.34 includes a TTL value dictating resolver cache duration.",
      "type": "concept"
    },
    {
      "id": "net_p5_t4_s1_l0",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.35 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t4_s1_l1",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.36 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t4_s2",
      "label": "DNS A record",
      "description": "DNS A record mapping to 192.0.2.37 includes a TTL value dictating resolver cache duration.",
      "type": "concept"
    },
    {
      "id": "net_p5_t4_s2_l0",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.38 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t4_s2_l1",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.39 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t4_s3",
      "label": "DNS A record",
      "description": "DNS A record mapping to 192.0.2.40 includes a TTL value dictating resolver cache duration.",
      "type": "concept"
    },
    {
      "id": "net_p5_t4_s3_l0",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.41 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t4_s3_l1",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.42 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t4_s4",
      "label": "DNS A record",
      "description": "DNS A record mapping to 192.0.2.43 includes a TTL value dictating resolver cache duration.",
      "type": "concept"
    },
    {
      "id": "net_p5_t4_s4_l0",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.44 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t4_s4_l1",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.45 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t5",
      "label": "SMTP Protocol",
      "description": "DNS A record mapping to 192.0.2.46 includes a TTL value dictating resolver cache duration.",
      "type": "topic"
    },
    {
      "id": "net_p5_t5_s0",
      "label": "DNS A record",
      "description": "DNS A record mapping to 192.0.2.47 includes a TTL value dictating resolver cache duration.",
      "type": "concept"
    },
    {
      "id": "net_p5_t5_s0_l0",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.48 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t5_s0_l1",
      "label": "DNS A",
      "description": "DNS A record mapping to 192.0.2.49 includes a TTL value dictating resolver cache duration.",
      "type": "example"
    },
    {
      "id": "net_p5_t5_s1",
      "label": "DNS A record",
      "description": "DNS A record mapping to 192.0.2.50 includes a TTL value dictating resolver cache duration.",
      "type": "concept"
    },
    {
      "id": "net_p5_t5_s1_l0",
      "label": "SMTP response",
      "description": "SMTP response code 201 dictates successful processing of mail transaction commands.",
      "type": "example"
    },
    {
      "id": "net_p5_t5_s1_l1",
      "label": "SMTP response",
      "description": "SMTP response code 202 dictates successful processing of mail transaction commands.",
      "type": "example"
    },
    {
      "id": "net_p5_t5_s2",
      "label": "SMTP response code",
      "description": "SMTP response code 203 dictates successful processing of mail transaction commands.",
      "type": "concept"
    },
    {
      "id": "net_p5_t5_s2_l0",
      "label": "SMTP response",
      "description": "SMTP response code 204 dictates successful processing of mail transaction commands.",
      "type": "example"
    },
    {
      "id": "net_p5_t5_s2_l1",
      "label": "SMTP response",
      "description": "SMTP response code 205 dictates successful processing of mail transaction commands.",
      "type": "example"
    },
    {
      "id": "net_p5_t5_s3",
      "label": "SMTP response code",
      "description": "SMTP response code 206 dictates successful processing of mail transaction commands.",
      "type": "concept"
    },
    {
      "id": "net_p5_t5_s3_l0",
      "label": "SMTP response",
      "description": "SMTP response code 207 dictates successful processing of mail transaction commands.",
      "type": "example"
    },
    {
      "id": "net_p5_t5_s3_l1",
      "label": "SMTP response",
      "description": "SMTP response code 208 dictates successful processing of mail transaction commands.",
      "type": "example"
    },
    {
      "id": "net_p5_t5_s4",
      "label": "SMTP response code",
      "description": "SMTP response code 209 dictates successful processing of mail transaction commands.",
      "type": "concept"
    },
    {
      "id": "net_p5_t5_s4_l0",
      "label": "SMTP response",
      "description": "SMTP response code 210 dictates successful processing of mail transaction commands.",
      "type": "example"
    },
    {
      "id": "net_p5_t5_s4_l1",
      "label": "SMTP response",
      "description": "SMTP response code 211 dictates successful processing of mail transaction commands.",
      "type": "example"
    },
    {
      "id": "net_p5_t6",
      "label": "Email Security",
      "description": "SMTP response code 212 dictates successful processing of mail transaction commands.",
      "type": "topic"
    },
    {
      "id": "net_p5_t6_s0",
      "label": "SMTP response code",
      "description": "SMTP response code 213 dictates successful processing of mail transaction commands.",
      "type": "concept"
    },
    {
      "id": "net_p5_t6_s0_l0",
      "label": "SMTP response",
      "description": "SMTP response code 214 dictates successful processing of mail transaction commands.",
      "type": "example"
    },
    {
      "id": "net_p5_t6_s0_l1",
      "label": "SMTP response",
      "description": "SMTP response code 215 dictates successful processing of mail transaction commands.",
      "type": "example"
    },
    {
      "id": "net_p5_t6_s1",
      "label": "SMTP response code",
      "description": "SMTP response code 216 dictates successful processing of mail transaction commands.",
      "type": "concept"
    },
    {
      "id": "net_p5_t6_s1_l0",
      "label": "SMTP response",
      "description": "SMTP response code 217 dictates successful processing of mail transaction commands.",
      "type": "example"
    },
    {
      "id": "net_p5_t6_s1_l1",
      "label": "SMTP response",
      "description": "SMTP response code 218 dictates successful processing of mail transaction commands.",
      "type": "example"
    },
    {
      "id": "net_p5_t6_s2",
      "label": "SMTP response code",
      "description": "SMTP response code 219 dictates successful processing of mail transaction commands.",
      "type": "concept"
    },
    {
      "id": "net_p5_t6_s2_l0",
      "label": "SMTP response",
      "description": "SMTP response code 220 dictates successful processing of mail transaction commands.",
      "type": "example"
    },
    {
      "id": "net_p5_t6_s2_l1",
      "label": "SMTP response",
      "description": "SMTP response code 221 dictates successful processing of mail transaction commands.",
      "type": "example"
    },
    {
      "id": "net_p5_t6_s3",
      "label": "SMTP response code",
      "description": "SMTP response code 222 dictates successful processing of mail transaction commands.",
      "type": "concept"
    },
    {
      "id": "net_p5_t6_s3_l0",
      "label": "SMTP response",
      "description": "SMTP response code 223 dictates successful processing of mail transaction commands.",
      "type": "example"
    },
    {
      "id": "net_p5_t6_s3_l1",
      "label": "SMTP response",
      "description": "SMTP response code 224 dictates successful processing of mail transaction commands.",
      "type": "example"
    },
    {
      "id": "net_p5_t6_s4",
      "label": "SMTP response code",
      "description": "SMTP response code 225 dictates successful processing of mail transaction commands.",
      "type": "concept"
    },
    {
      "id": "net_p5_t6_s4_l0",
      "label": "SMTP response",
      "description": "SMTP response code 226 dictates successful processing of mail transaction commands.",
      "type": "example"
    },
    {
      "id": "net_p5_t6_s4_l1",
      "label": "SMTP response",
      "description": "SMTP response code 227 dictates successful processing of mail transaction commands.",
      "type": "example"
    },
    {
      "id": "net_p6_t0",
      "label": "TLS 1.3",
      "description": "X.509 certificate serial number 1000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "topic"
    },
    {
      "id": "net_p6_t0_s0",
      "label": "TLS 13 key",
      "description": "TLS 1.3 key schedule HKDF-Extract(early_secret)+HKDF-Expand",
      "type": "concept"
    },
    {
      "id": "net_p6_t0_s0_l0",
      "label": "TLS 13",
      "description": "TLS 1.3 ClientHello supported_versions/key_share/signature_algorithms",
      "type": "example"
    },
    {
      "id": "net_p6_t0_s0_l1",
      "label": "X509 certificate",
      "description": "X.509 certificate fields (subject CN/SAN/validity/public key/signature)",
      "type": "example"
    },
    {
      "id": "net_p6_t0_s1",
      "label": "Certificate Transparency SCT",
      "description": "Certificate Transparency SCT proof in TLS extension",
      "type": "concept"
    },
    {
      "id": "net_p6_t0_s1_l0",
      "label": "OCSP stapling",
      "description": "OCSP stapling server embeds signed response avoids CA round-trip",
      "type": "example"
    },
    {
      "id": "net_p6_t0_s1_l1",
      "label": "mTLS clientcertifica",
      "description": "mTLS client_certificate_request in TLS handshake",
      "type": "example"
    },
    {
      "id": "net_p6_t0_s2",
      "label": "iptables tables filternatmangl",
      "description": "iptables tables (filter/nat/mangle) chains (INPUT/OUTPUT/FORWARD) rules",
      "type": "concept"
    },
    {
      "id": "net_p6_t0_s2_l0",
      "label": "nftables nft",
      "description": "nftables nft add rule inet filter input ip saddr ...",
      "type": "example"
    },
    {
      "id": "net_p6_t0_s2_l1",
      "label": "Snort rule",
      "description": "Snort rule: alert tcp any any -> $HOME_NET 80 (msg:\"XSS\"; content:\"<script>\"; sid:1000001;)",
      "type": "example"
    },
    {
      "id": "net_p6_t0_s3",
      "label": "DDoS scrubbing Anycast",
      "description": "DDoS scrubbing Anycast BGP blackhole /32 prefix",
      "type": "concept"
    },
    {
      "id": "net_p6_t0_s3_l0",
      "label": "WireGuard NoiseIK",
      "description": "WireGuard Noise_IK handshake initiator sends ephemeral key",
      "type": "example"
    },
    {
      "id": "net_p6_t0_s3_l1",
      "label": "WireGuard ChaCha20Po",
      "description": "WireGuard ChaCha20-Poly1305 AEAD per-packet encryption",
      "type": "example"
    },
    {
      "id": "net_p6_t0_s4",
      "label": "zerotrust ZTNA enforce",
      "description": "zero-trust ZTNA enforce identity+device posture per request",
      "type": "concept"
    },
    {
      "id": "net_p6_t0_s4_l0",
      "label": "microsegmentation de",
      "description": "microsegmentation deny-by-default east-west traffic",
      "type": "example"
    },
    {
      "id": "net_p6_t0_s4_l1",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 2000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t1",
      "label": "Public Key Infra",
      "description": "X.509 certificate serial number 3000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "topic"
    },
    {
      "id": "net_p6_t1_s0",
      "label": "X509 certificate serial",
      "description": "X.509 certificate serial number 4000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "concept"
    },
    {
      "id": "net_p6_t1_s0_l0",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 5000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t1_s0_l1",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 6000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t1_s1",
      "label": "X509 certificate serial",
      "description": "X.509 certificate serial number 7000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "concept"
    },
    {
      "id": "net_p6_t1_s1_l0",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 8000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t1_s1_l1",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 9000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t1_s2",
      "label": "X509 certificate serial",
      "description": "X.509 certificate serial number 10000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "concept"
    },
    {
      "id": "net_p6_t1_s2_l0",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 11000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t1_s2_l1",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 12000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t1_s3",
      "label": "X509 certificate serial",
      "description": "X.509 certificate serial number 13000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "concept"
    },
    {
      "id": "net_p6_t1_s3_l0",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 14000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t1_s3_l1",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 15000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t1_s4",
      "label": "X509 certificate serial",
      "description": "X.509 certificate serial number 16000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "concept"
    },
    {
      "id": "net_p6_t1_s4_l0",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 17000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t1_s4_l1",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 18000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t2",
      "label": "Firewalls",
      "description": "X.509 certificate serial number 19000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "topic"
    },
    {
      "id": "net_p6_t2_s0",
      "label": "X509 certificate serial",
      "description": "X.509 certificate serial number 20000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "concept"
    },
    {
      "id": "net_p6_t2_s0_l0",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 21000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t2_s0_l1",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 22000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t2_s1",
      "label": "X509 certificate serial",
      "description": "X.509 certificate serial number 23000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "concept"
    },
    {
      "id": "net_p6_t2_s1_l0",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 24000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t2_s1_l1",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 25000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t2_s2",
      "label": "X509 certificate serial",
      "description": "X.509 certificate serial number 26000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "concept"
    },
    {
      "id": "net_p6_t2_s2_l0",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 27000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t2_s2_l1",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 28000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t2_s3",
      "label": "X509 certificate serial",
      "description": "X.509 certificate serial number 29000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "concept"
    },
    {
      "id": "net_p6_t2_s3_l0",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 30000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t2_s3_l1",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 31000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t2_s4",
      "label": "X509 certificate serial",
      "description": "X.509 certificate serial number 32000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "concept"
    },
    {
      "id": "net_p6_t2_s4_l0",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 33000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t2_s4_l1",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 34000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t3",
      "label": "Intrusion Detection",
      "description": "X.509 certificate serial number 35000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "topic"
    },
    {
      "id": "net_p6_t3_s0",
      "label": "X509 certificate serial",
      "description": "X.509 certificate serial number 36000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "concept"
    },
    {
      "id": "net_p6_t3_s0_l0",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 37000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t3_s0_l1",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 38000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t3_s1",
      "label": "X509 certificate serial",
      "description": "X.509 certificate serial number 39000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "concept"
    },
    {
      "id": "net_p6_t3_s1_l0",
      "label": "X509 certificate",
      "description": "X.509 certificate serial number 40000ABCD must be logged to a Certificate Transparency server via SCT.",
      "type": "example"
    },
    {
      "id": "net_p6_t3_s1_l1",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 1 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t3_s2",
      "label": "iptables filter rule",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 2 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "concept"
    },
    {
      "id": "net_p6_t3_s2_l0",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 3 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t3_s2_l1",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 4 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t3_s3",
      "label": "iptables filter rule",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 5 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "concept"
    },
    {
      "id": "net_p6_t3_s3_l0",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 6 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t3_s3_l1",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 7 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t3_s4",
      "label": "iptables filter rule",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 8 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "concept"
    },
    {
      "id": "net_p6_t3_s4_l0",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 9 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t3_s4_l1",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 10 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t4",
      "label": "DDoS Mitigation",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 11 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "topic"
    },
    {
      "id": "net_p6_t4_s0",
      "label": "iptables filter rule",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 12 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "concept"
    },
    {
      "id": "net_p6_t4_s0_l0",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 13 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t4_s0_l1",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 14 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t4_s1",
      "label": "iptables filter rule",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 15 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "concept"
    },
    {
      "id": "net_p6_t4_s1_l0",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 16 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t4_s1_l1",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 17 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t4_s2",
      "label": "iptables filter rule",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 18 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "concept"
    },
    {
      "id": "net_p6_t4_s2_l0",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 19 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t4_s2_l1",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 20 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t4_s3",
      "label": "iptables filter rule",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 21 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "concept"
    },
    {
      "id": "net_p6_t4_s3_l0",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 22 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t4_s3_l1",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 23 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t4_s4",
      "label": "iptables filter rule",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 24 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "concept"
    },
    {
      "id": "net_p6_t4_s4_l0",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 25 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t4_s4_l1",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 26 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t5",
      "label": "VPN Technologies",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 27 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "topic"
    },
    {
      "id": "net_p6_t5_s0",
      "label": "iptables filter rule",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 28 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "concept"
    },
    {
      "id": "net_p6_t5_s0_l0",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 29 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t5_s0_l1",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 30 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t5_s1",
      "label": "iptables filter rule",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 31 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "concept"
    },
    {
      "id": "net_p6_t5_s1_l0",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 32 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t5_s1_l1",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 33 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t5_s2",
      "label": "iptables filter rule",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 34 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "concept"
    },
    {
      "id": "net_p6_t5_s2_l0",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 35 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t5_s2_l1",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 36 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t5_s3",
      "label": "iptables filter rule",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 37 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "concept"
    },
    {
      "id": "net_p6_t5_s3_l0",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 38 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t5_s3_l1",
      "label": "iptables filter",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 39 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "example"
    },
    {
      "id": "net_p6_t5_s4",
      "label": "iptables filter rule",
      "description": "iptables filter rule in the INPUT chain matches packet sequence 40 for stateful firewall inspection (ESTABLISHED, RELATED).",
      "type": "concept"
    },
    {
      "id": "net_p6_t5_s4_l0",
      "label": "TLS 13",
      "description": "TLS 1.3 key_share extension utilizes elliptic curve secp256r1 point format variant 1 for perfect forward secrecy.",
      "type": "example"
    },
    {
      "id": "net_p6_t5_s4_l1",
      "label": "TLS 13",
      "description": "TLS 1.3 key_share extension utilizes elliptic curve secp256r1 point format variant 2 for perfect forward secrecy.",
      "type": "example"
    },
    {
      "id": "net_p6_t6",
      "label": "Zero Trust Architecture",
      "description": "TLS 1.3 key_share extension utilizes elliptic curve secp256r1 point format variant 3 for perfect forward secrecy.",
      "type": "topic"
    },
    {
      "id": "net_p6_t6_s0",
      "label": "TLS 13 keyshare",
      "description": "TLS 1.3 key_share extension utilizes elliptic curve secp256r1 point format variant 4 for perfect forward secrecy.",
      "type": "concept"
    },
    {
      "id": "net_p6_t6_s0_l0",
      "label": "TLS 13",
      "description": "TLS 1.3 key_share extension utilizes elliptic curve secp256r1 point format variant 5 for perfect forward secrecy.",
      "type": "example"
    },
    {
      "id": "net_p6_t6_s0_l1",
      "label": "TLS 13",
      "description": "TLS 1.3 key_share extension utilizes elliptic curve secp256r1 point format variant 6 for perfect forward secrecy.",
      "type": "example"
    },
    {
      "id": "net_p6_t6_s1",
      "label": "TLS 13 keyshare",
      "description": "TLS 1.3 key_share extension utilizes elliptic curve secp256r1 point format variant 7 for perfect forward secrecy.",
      "type": "concept"
    },
    {
      "id": "net_p6_t6_s1_l0",
      "label": "TLS 13",
      "description": "TLS 1.3 key_share extension utilizes elliptic curve secp256r1 point format variant 8 for perfect forward secrecy.",
      "type": "example"
    },
    {
      "id": "net_p6_t6_s1_l1",
      "label": "TLS 13",
      "description": "TLS 1.3 key_share extension utilizes elliptic curve secp256r1 point format variant 9 for perfect forward secrecy.",
      "type": "example"
    },
    {
      "id": "net_p6_t6_s2",
      "label": "TLS 13 keyshare",
      "description": "TLS 1.3 key_share extension utilizes elliptic curve secp256r1 point format variant 10 for perfect forward secrecy.",
      "type": "concept"
    },
    {
      "id": "net_p6_t6_s2_l0",
      "label": "TLS 13",
      "description": "TLS 1.3 key_share extension utilizes elliptic curve secp256r1 point format variant 11 for perfect forward secrecy.",
      "type": "example"
    },
    {
      "id": "net_p6_t6_s2_l1",
      "label": "TLS 13",
      "description": "TLS 1.3 key_share extension utilizes elliptic curve secp256r1 point format variant 12 for perfect forward secrecy.",
      "type": "example"
    },
    {
      "id": "net_p6_t6_s3",
      "label": "TLS 13 keyshare",
      "description": "TLS 1.3 key_share extension utilizes elliptic curve secp256r1 point format variant 13 for perfect forward secrecy.",
      "type": "concept"
    },
    {
      "id": "net_p6_t6_s3_l0",
      "label": "TLS 13",
      "description": "TLS 1.3 key_share extension utilizes elliptic curve secp256r1 point format variant 14 for perfect forward secrecy.",
      "type": "example"
    },
    {
      "id": "net_p6_t6_s3_l1",
      "label": "TLS 13",
      "description": "TLS 1.3 key_share extension utilizes elliptic curve secp256r1 point format variant 15 for perfect forward secrecy.",
      "type": "example"
    },
    {
      "id": "net_p6_t6_s4",
      "label": "TLS 13 keyshare",
      "description": "TLS 1.3 key_share extension utilizes elliptic curve secp256r1 point format variant 16 for perfect forward secrecy.",
      "type": "concept"
    },
    {
      "id": "net_p6_t6_s4_l0",
      "label": "TLS 13",
      "description": "TLS 1.3 key_share extension utilizes elliptic curve secp256r1 point format variant 17 for perfect forward secrecy.",
      "type": "example"
    },
    {
      "id": "net_p6_t6_s4_l1",
      "label": "TLS 13",
      "description": "TLS 1.3 key_share extension utilizes elliptic curve secp256r1 point format variant 18 for perfect forward secrecy.",
      "type": "example"
    },
    {
      "id": "net_p7_t0",
      "label": "CDN Architecture",
      "description": "HTTP Cache-Control header max-age=3600 specifies edge expiration in seconds for static assets.",
      "type": "topic"
    },
    {
      "id": "net_p7_t0_s0",
      "label": "Anycast BGP advertise",
      "description": "Anycast BGP advertise same prefix from multiple PoPs routers send to nearest",
      "type": "concept"
    },
    {
      "id": "net_p7_t0_s0_l0",
      "label": "HTTP cachecontrol",
      "description": "HTTP cache-control: max-age=86400 public stale-while-revalidate=3600",
      "type": "example"
    },
    {
      "id": "net_p7_t0_s0_l1",
      "label": "surrogatekeycachetag",
      "description": "surrogate-key/cache-tag header for targeted purging",
      "type": "example"
    },
    {
      "id": "net_p7_t0_s1",
      "label": "CDN edge TLS",
      "description": "CDN edge TLS termination offload to backend plain HTTP",
      "type": "concept"
    },
    {
      "id": "net_p7_t0_s1_l0",
      "label": "Cloudflare Workers",
      "description": "Cloudflare Workers V8 isolates <1ms cold start per request",
      "type": "example"
    },
    {
      "id": "net_p7_t0_s1_l1",
      "label": "Fastly Compute",
      "description": "Fastly Compute Wasm edge execution",
      "type": "example"
    },
    {
      "id": "net_p7_t0_s2",
      "label": "private backbone PoPtoPoP",
      "description": "private backbone PoP-to-PoP avoid public internet",
      "type": "concept"
    },
    {
      "id": "net_p7_t0_s2_l0",
      "label": "IXP peering",
      "description": "IXP peering reduce transit costs settlement-free",
      "type": "example"
    },
    {
      "id": "net_p7_t0_s2_l1",
      "label": "BGP community",
      "description": "BGP community tagging for traffic steering",
      "type": "example"
    },
    {
      "id": "net_p7_t0_s3",
      "label": "QUIC CDN reduces",
      "description": "QUIC CDN reduces TCP connection overhead for mobile",
      "type": "concept"
    },
    {
      "id": "net_p7_t0_s3_l0",
      "label": "WebRTC ICE",
      "description": "WebRTC ICE candidate gathering (host/srflx/relay)",
      "type": "example"
    },
    {
      "id": "net_p7_t0_s3_l1",
      "label": "STUN binding",
      "description": "STUN binding request mapped address",
      "type": "example"
    },
    {
      "id": "net_p7_t0_s4",
      "label": "TURN relay allocation",
      "description": "TURN relay allocation for symmetric NAT",
      "type": "concept"
    },
    {
      "id": "net_p7_t0_s4_l0",
      "label": "DTLSSRTP media",
      "description": "DTLS-SRTP media encryption",
      "type": "example"
    },
    {
      "id": "net_p7_t0_s4_l1",
      "label": "5G network",
      "description": "5G network slicing QoS per virtual network",
      "type": "example"
    },
    {
      "id": "net_p7_t1",
      "label": "CDN Caching",
      "description": "HTTP Cache-Control header max-age=7200 specifies edge expiration in seconds for static assets.",
      "type": "topic"
    },
    {
      "id": "net_p7_t1_s0",
      "label": "HTTP CacheControl header",
      "description": "HTTP Cache-Control header max-age=10800 specifies edge expiration in seconds for static assets.",
      "type": "concept"
    },
    {
      "id": "net_p7_t1_s0_l0",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=14400 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t1_s0_l1",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=18000 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t1_s1",
      "label": "HTTP CacheControl header",
      "description": "HTTP Cache-Control header max-age=21600 specifies edge expiration in seconds for static assets.",
      "type": "concept"
    },
    {
      "id": "net_p7_t1_s1_l0",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=25200 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t1_s1_l1",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=28800 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t1_s2",
      "label": "HTTP CacheControl header",
      "description": "HTTP Cache-Control header max-age=32400 specifies edge expiration in seconds for static assets.",
      "type": "concept"
    },
    {
      "id": "net_p7_t1_s2_l0",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=36000 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t1_s2_l1",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=39600 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t1_s3",
      "label": "HTTP CacheControl header",
      "description": "HTTP Cache-Control header max-age=43200 specifies edge expiration in seconds for static assets.",
      "type": "concept"
    },
    {
      "id": "net_p7_t1_s3_l0",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=46800 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t1_s3_l1",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=50400 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t1_s4",
      "label": "HTTP CacheControl header",
      "description": "HTTP Cache-Control header max-age=54000 specifies edge expiration in seconds for static assets.",
      "type": "concept"
    },
    {
      "id": "net_p7_t1_s4_l0",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=57600 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t1_s4_l1",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=61200 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t2",
      "label": "Edge Computing",
      "description": "HTTP Cache-Control header max-age=64800 specifies edge expiration in seconds for static assets.",
      "type": "topic"
    },
    {
      "id": "net_p7_t2_s0",
      "label": "HTTP CacheControl header",
      "description": "HTTP Cache-Control header max-age=68400 specifies edge expiration in seconds for static assets.",
      "type": "concept"
    },
    {
      "id": "net_p7_t2_s0_l0",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=72000 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t2_s0_l1",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=75600 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t2_s1",
      "label": "HTTP CacheControl header",
      "description": "HTTP Cache-Control header max-age=79200 specifies edge expiration in seconds for static assets.",
      "type": "concept"
    },
    {
      "id": "net_p7_t2_s1_l0",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=82800 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t2_s1_l1",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=86400 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t2_s2",
      "label": "HTTP CacheControl header",
      "description": "HTTP Cache-Control header max-age=90000 specifies edge expiration in seconds for static assets.",
      "type": "concept"
    },
    {
      "id": "net_p7_t2_s2_l0",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=93600 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t2_s2_l1",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=97200 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t2_s3",
      "label": "HTTP CacheControl header",
      "description": "HTTP Cache-Control header max-age=100800 specifies edge expiration in seconds for static assets.",
      "type": "concept"
    },
    {
      "id": "net_p7_t2_s3_l0",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=104400 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t2_s3_l1",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=108000 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t2_s4",
      "label": "HTTP CacheControl header",
      "description": "HTTP Cache-Control header max-age=111600 specifies edge expiration in seconds for static assets.",
      "type": "concept"
    },
    {
      "id": "net_p7_t2_s4_l0",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=115200 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t2_s4_l1",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=118800 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t3",
      "label": "Internet Backbone",
      "description": "HTTP Cache-Control header max-age=122400 specifies edge expiration in seconds for static assets.",
      "type": "topic"
    },
    {
      "id": "net_p7_t3_s0",
      "label": "HTTP CacheControl header",
      "description": "HTTP Cache-Control header max-age=126000 specifies edge expiration in seconds for static assets.",
      "type": "concept"
    },
    {
      "id": "net_p7_t3_s0_l0",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=129600 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t3_s0_l1",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=133200 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t3_s1",
      "label": "HTTP CacheControl header",
      "description": "HTTP Cache-Control header max-age=136800 specifies edge expiration in seconds for static assets.",
      "type": "concept"
    },
    {
      "id": "net_p7_t3_s1_l0",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=140400 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t3_s1_l1",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=144000 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t3_s2",
      "label": "HTTP CacheControl header",
      "description": "HTTP Cache-Control header max-age=147600 specifies edge expiration in seconds for static assets.",
      "type": "concept"
    },
    {
      "id": "net_p7_t3_s2_l0",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=151200 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t3_s2_l1",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=154800 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t3_s3",
      "label": "HTTP CacheControl header",
      "description": "HTTP Cache-Control header max-age=158400 specifies edge expiration in seconds for static assets.",
      "type": "concept"
    },
    {
      "id": "net_p7_t3_s3_l0",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=162000 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t3_s3_l1",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=165600 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t3_s4",
      "label": "HTTP CacheControl header",
      "description": "HTTP Cache-Control header max-age=169200 specifies edge expiration in seconds for static assets.",
      "type": "concept"
    },
    {
      "id": "net_p7_t3_s4_l0",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=172800 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t3_s4_l1",
      "label": "HTTP CacheControl",
      "description": "HTTP Cache-Control header max-age=176400 specifies edge expiration in seconds for static assets.",
      "type": "example"
    },
    {
      "id": "net_p7_t4",
      "label": "BGP Traffic Eng",
      "description": "HTTP Cache-Control header max-age=180000 specifies edge expiration in seconds for static assets.",
      "type": "topic"
    },
    {
      "id": "net_p7_t4_s0",
      "label": "BGP community string",
      "description": "BGP community string 65000:1 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "concept"
    },
    {
      "id": "net_p7_t4_s0_l0",
      "label": "BGP community",
      "description": "BGP community string 65000:2 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t4_s0_l1",
      "label": "BGP community",
      "description": "BGP community string 65000:3 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t4_s1",
      "label": "BGP community string",
      "description": "BGP community string 65000:4 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "concept"
    },
    {
      "id": "net_p7_t4_s1_l0",
      "label": "BGP community",
      "description": "BGP community string 65000:5 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t4_s1_l1",
      "label": "BGP community",
      "description": "BGP community string 65000:6 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t4_s2",
      "label": "BGP community string",
      "description": "BGP community string 65000:7 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "concept"
    },
    {
      "id": "net_p7_t4_s2_l0",
      "label": "BGP community",
      "description": "BGP community string 65000:8 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t4_s2_l1",
      "label": "BGP community",
      "description": "BGP community string 65000:9 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t4_s3",
      "label": "BGP community string",
      "description": "BGP community string 65000:10 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "concept"
    },
    {
      "id": "net_p7_t4_s3_l0",
      "label": "BGP community",
      "description": "BGP community string 65000:11 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t4_s3_l1",
      "label": "BGP community",
      "description": "BGP community string 65000:12 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t4_s4",
      "label": "BGP community string",
      "description": "BGP community string 65000:13 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "concept"
    },
    {
      "id": "net_p7_t4_s4_l0",
      "label": "BGP community",
      "description": "BGP community string 65000:14 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t4_s4_l1",
      "label": "BGP community",
      "description": "BGP community string 65000:15 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t5",
      "label": "WebRTC Core",
      "description": "BGP community string 65000:16 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "topic"
    },
    {
      "id": "net_p7_t5_s0",
      "label": "BGP community string",
      "description": "BGP community string 65000:17 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "concept"
    },
    {
      "id": "net_p7_t5_s0_l0",
      "label": "BGP community",
      "description": "BGP community string 65000:18 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t5_s0_l1",
      "label": "BGP community",
      "description": "BGP community string 65000:19 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t5_s1",
      "label": "BGP community string",
      "description": "BGP community string 65000:20 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "concept"
    },
    {
      "id": "net_p7_t5_s1_l0",
      "label": "BGP community",
      "description": "BGP community string 65000:21 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t5_s1_l1",
      "label": "BGP community",
      "description": "BGP community string 65000:22 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t5_s2",
      "label": "BGP community string",
      "description": "BGP community string 65000:23 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "concept"
    },
    {
      "id": "net_p7_t5_s2_l0",
      "label": "BGP community",
      "description": "BGP community string 65000:24 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t5_s2_l1",
      "label": "BGP community",
      "description": "BGP community string 65000:25 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t5_s3",
      "label": "BGP community string",
      "description": "BGP community string 65000:26 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "concept"
    },
    {
      "id": "net_p7_t5_s3_l0",
      "label": "BGP community",
      "description": "BGP community string 65000:27 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t5_s3_l1",
      "label": "BGP community",
      "description": "BGP community string 65000:28 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t5_s4",
      "label": "BGP community string",
      "description": "BGP community string 65000:29 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "concept"
    },
    {
      "id": "net_p7_t5_s4_l0",
      "label": "BGP community",
      "description": "BGP community string 65000:30 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t5_s4_l1",
      "label": "BGP community",
      "description": "BGP community string 65000:31 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t6",
      "label": "Media Encryption",
      "description": "BGP community string 65000:32 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "topic"
    },
    {
      "id": "net_p7_t6_s0",
      "label": "BGP community string",
      "description": "BGP community string 65000:33 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "concept"
    },
    {
      "id": "net_p7_t6_s0_l0",
      "label": "BGP community",
      "description": "BGP community string 65000:34 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t6_s0_l1",
      "label": "BGP community",
      "description": "BGP community string 65000:35 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t6_s1",
      "label": "BGP community string",
      "description": "BGP community string 65000:36 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "concept"
    },
    {
      "id": "net_p7_t6_s1_l0",
      "label": "BGP community",
      "description": "BGP community string 65000:37 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t6_s1_l1",
      "label": "BGP community",
      "description": "BGP community string 65000:38 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t6_s2",
      "label": "BGP community string",
      "description": "BGP community string 65000:39 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "concept"
    },
    {
      "id": "net_p7_t6_s2_l0",
      "label": "BGP community",
      "description": "BGP community string 65000:40 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t6_s2_l1",
      "label": "BGP community",
      "description": "BGP community string 65000:41 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t6_s3",
      "label": "BGP community string",
      "description": "BGP community string 65000:42 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "concept"
    },
    {
      "id": "net_p7_t6_s3_l0",
      "label": "BGP community",
      "description": "BGP community string 65000:43 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t6_s3_l1",
      "label": "BGP community",
      "description": "BGP community string 65000:44 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "example"
    },
    {
      "id": "net_p7_t6_s4",
      "label": "BGP community string",
      "description": "BGP community string 65000:45 is used by route servers to signal targeted traffic steering policies at the IXP.",
      "type": "concept"
    },
    {
      "id": "net_p7_t6_s4_l0",
      "label": "WebRTC ICE",
      "description": "WebRTC ICE candidate priority 2130706430 prefers direct host binding before falling back to STUN/TURN relays.",
      "type": "example"
    },
    {
      "id": "net_p7_t6_s4_l1",
      "label": "WebRTC ICE",
      "description": "WebRTC ICE candidate priority 2130706429 prefers direct host binding before falling back to STUN/TURN relays.",
      "type": "example"
    }
  ],
  "edges": [
    {
      "source": "net_root",
      "target": "net_p1"
    },
    {
      "source": "net_root",
      "target": "net_p2"
    },
    {
      "source": "net_root",
      "target": "net_p3"
    },
    {
      "source": "net_root",
      "target": "net_p4"
    },
    {
      "source": "net_root",
      "target": "net_p5"
    },
    {
      "source": "net_root",
      "target": "net_p6"
    },
    {
      "source": "net_root",
      "target": "net_p7"
    },
    {
      "source": "net_p1",
      "target": "net_p1_t0"
    },
    {
      "source": "net_p1_t0",
      "target": "net_p1_t0_s0"
    },
    {
      "source": "net_p1_t0_s0",
      "target": "net_p1_t0_s0_l0"
    },
    {
      "source": "net_p1_t0_s0",
      "target": "net_p1_t0_s0_l1"
    },
    {
      "source": "net_p1_t0",
      "target": "net_p1_t0_s1"
    },
    {
      "source": "net_p1_t0_s1",
      "target": "net_p1_t0_s1_l0"
    },
    {
      "source": "net_p1_t0_s1",
      "target": "net_p1_t0_s1_l1"
    },
    {
      "source": "net_p1_t0",
      "target": "net_p1_t0_s2"
    },
    {
      "source": "net_p1_t0_s2",
      "target": "net_p1_t0_s2_l0"
    },
    {
      "source": "net_p1_t0_s2",
      "target": "net_p1_t0_s2_l1"
    },
    {
      "source": "net_p1_t0",
      "target": "net_p1_t0_s3"
    },
    {
      "source": "net_p1_t0_s3",
      "target": "net_p1_t0_s3_l0"
    },
    {
      "source": "net_p1_t0_s3",
      "target": "net_p1_t0_s3_l1"
    },
    {
      "source": "net_p1_t0",
      "target": "net_p1_t0_s4"
    },
    {
      "source": "net_p1_t0_s4",
      "target": "net_p1_t0_s4_l0"
    },
    {
      "source": "net_p1_t0_s4",
      "target": "net_p1_t0_s4_l1"
    },
    {
      "source": "net_p1",
      "target": "net_p1_t1"
    },
    {
      "source": "net_p1_t1",
      "target": "net_p1_t1_s0"
    },
    {
      "source": "net_p1_t1_s0",
      "target": "net_p1_t1_s0_l0"
    },
    {
      "source": "net_p1_t1_s0",
      "target": "net_p1_t1_s0_l1"
    },
    {
      "source": "net_p1_t1",
      "target": "net_p1_t1_s1"
    },
    {
      "source": "net_p1_t1_s1",
      "target": "net_p1_t1_s1_l0"
    },
    {
      "source": "net_p1_t1_s1",
      "target": "net_p1_t1_s1_l1"
    },
    {
      "source": "net_p1_t1",
      "target": "net_p1_t1_s2"
    },
    {
      "source": "net_p1_t1_s2",
      "target": "net_p1_t1_s2_l0"
    },
    {
      "source": "net_p1_t1_s2",
      "target": "net_p1_t1_s2_l1"
    },
    {
      "source": "net_p1_t1",
      "target": "net_p1_t1_s3"
    },
    {
      "source": "net_p1_t1_s3",
      "target": "net_p1_t1_s3_l0"
    },
    {
      "source": "net_p1_t1_s3",
      "target": "net_p1_t1_s3_l1"
    },
    {
      "source": "net_p1_t1",
      "target": "net_p1_t1_s4"
    },
    {
      "source": "net_p1_t1_s4",
      "target": "net_p1_t1_s4_l0"
    },
    {
      "source": "net_p1_t1_s4",
      "target": "net_p1_t1_s4_l1"
    },
    {
      "source": "net_p1",
      "target": "net_p1_t2"
    },
    {
      "source": "net_p1_t2",
      "target": "net_p1_t2_s0"
    },
    {
      "source": "net_p1_t2_s0",
      "target": "net_p1_t2_s0_l0"
    },
    {
      "source": "net_p1_t2_s0",
      "target": "net_p1_t2_s0_l1"
    },
    {
      "source": "net_p1_t2",
      "target": "net_p1_t2_s1"
    },
    {
      "source": "net_p1_t2_s1",
      "target": "net_p1_t2_s1_l0"
    },
    {
      "source": "net_p1_t2_s1",
      "target": "net_p1_t2_s1_l1"
    },
    {
      "source": "net_p1_t2",
      "target": "net_p1_t2_s2"
    },
    {
      "source": "net_p1_t2_s2",
      "target": "net_p1_t2_s2_l0"
    },
    {
      "source": "net_p1_t2_s2",
      "target": "net_p1_t2_s2_l1"
    },
    {
      "source": "net_p1_t2",
      "target": "net_p1_t2_s3"
    },
    {
      "source": "net_p1_t2_s3",
      "target": "net_p1_t2_s3_l0"
    },
    {
      "source": "net_p1_t2_s3",
      "target": "net_p1_t2_s3_l1"
    },
    {
      "source": "net_p1_t2",
      "target": "net_p1_t2_s4"
    },
    {
      "source": "net_p1_t2_s4",
      "target": "net_p1_t2_s4_l0"
    },
    {
      "source": "net_p1_t2_s4",
      "target": "net_p1_t2_s4_l1"
    },
    {
      "source": "net_p1",
      "target": "net_p1_t3"
    },
    {
      "source": "net_p1_t3",
      "target": "net_p1_t3_s0"
    },
    {
      "source": "net_p1_t3_s0",
      "target": "net_p1_t3_s0_l0"
    },
    {
      "source": "net_p1_t3_s0",
      "target": "net_p1_t3_s0_l1"
    },
    {
      "source": "net_p1_t3",
      "target": "net_p1_t3_s1"
    },
    {
      "source": "net_p1_t3_s1",
      "target": "net_p1_t3_s1_l0"
    },
    {
      "source": "net_p1_t3_s1",
      "target": "net_p1_t3_s1_l1"
    },
    {
      "source": "net_p1_t3",
      "target": "net_p1_t3_s2"
    },
    {
      "source": "net_p1_t3_s2",
      "target": "net_p1_t3_s2_l0"
    },
    {
      "source": "net_p1_t3_s2",
      "target": "net_p1_t3_s2_l1"
    },
    {
      "source": "net_p1_t3",
      "target": "net_p1_t3_s3"
    },
    {
      "source": "net_p1_t3_s3",
      "target": "net_p1_t3_s3_l0"
    },
    {
      "source": "net_p1_t3_s3",
      "target": "net_p1_t3_s3_l1"
    },
    {
      "source": "net_p1_t3",
      "target": "net_p1_t3_s4"
    },
    {
      "source": "net_p1_t3_s4",
      "target": "net_p1_t3_s4_l0"
    },
    {
      "source": "net_p1_t3_s4",
      "target": "net_p1_t3_s4_l1"
    },
    {
      "source": "net_p1",
      "target": "net_p1_t4"
    },
    {
      "source": "net_p1_t4",
      "target": "net_p1_t4_s0"
    },
    {
      "source": "net_p1_t4_s0",
      "target": "net_p1_t4_s0_l0"
    },
    {
      "source": "net_p1_t4_s0",
      "target": "net_p1_t4_s0_l1"
    },
    {
      "source": "net_p1_t4",
      "target": "net_p1_t4_s1"
    },
    {
      "source": "net_p1_t4_s1",
      "target": "net_p1_t4_s1_l0"
    },
    {
      "source": "net_p1_t4_s1",
      "target": "net_p1_t4_s1_l1"
    },
    {
      "source": "net_p1_t4",
      "target": "net_p1_t4_s2"
    },
    {
      "source": "net_p1_t4_s2",
      "target": "net_p1_t4_s2_l0"
    },
    {
      "source": "net_p1_t4_s2",
      "target": "net_p1_t4_s2_l1"
    },
    {
      "source": "net_p1_t4",
      "target": "net_p1_t4_s3"
    },
    {
      "source": "net_p1_t4_s3",
      "target": "net_p1_t4_s3_l0"
    },
    {
      "source": "net_p1_t4_s3",
      "target": "net_p1_t4_s3_l1"
    },
    {
      "source": "net_p1_t4",
      "target": "net_p1_t4_s4"
    },
    {
      "source": "net_p1_t4_s4",
      "target": "net_p1_t4_s4_l0"
    },
    {
      "source": "net_p1_t4_s4",
      "target": "net_p1_t4_s4_l1"
    },
    {
      "source": "net_p1",
      "target": "net_p1_t5"
    },
    {
      "source": "net_p1_t5",
      "target": "net_p1_t5_s0"
    },
    {
      "source": "net_p1_t5_s0",
      "target": "net_p1_t5_s0_l0"
    },
    {
      "source": "net_p1_t5_s0",
      "target": "net_p1_t5_s0_l1"
    },
    {
      "source": "net_p1_t5",
      "target": "net_p1_t5_s1"
    },
    {
      "source": "net_p1_t5_s1",
      "target": "net_p1_t5_s1_l0"
    },
    {
      "source": "net_p1_t5_s1",
      "target": "net_p1_t5_s1_l1"
    },
    {
      "source": "net_p1_t5",
      "target": "net_p1_t5_s2"
    },
    {
      "source": "net_p1_t5_s2",
      "target": "net_p1_t5_s2_l0"
    },
    {
      "source": "net_p1_t5_s2",
      "target": "net_p1_t5_s2_l1"
    },
    {
      "source": "net_p1_t5",
      "target": "net_p1_t5_s3"
    },
    {
      "source": "net_p1_t5_s3",
      "target": "net_p1_t5_s3_l0"
    },
    {
      "source": "net_p1_t5_s3",
      "target": "net_p1_t5_s3_l1"
    },
    {
      "source": "net_p1_t5",
      "target": "net_p1_t5_s4"
    },
    {
      "source": "net_p1_t5_s4",
      "target": "net_p1_t5_s4_l0"
    },
    {
      "source": "net_p1_t5_s4",
      "target": "net_p1_t5_s4_l1"
    },
    {
      "source": "net_p1",
      "target": "net_p1_t6"
    },
    {
      "source": "net_p1_t6",
      "target": "net_p1_t6_s0"
    },
    {
      "source": "net_p1_t6_s0",
      "target": "net_p1_t6_s0_l0"
    },
    {
      "source": "net_p1_t6_s0",
      "target": "net_p1_t6_s0_l1"
    },
    {
      "source": "net_p1_t6",
      "target": "net_p1_t6_s1"
    },
    {
      "source": "net_p1_t6_s1",
      "target": "net_p1_t6_s1_l0"
    },
    {
      "source": "net_p1_t6_s1",
      "target": "net_p1_t6_s1_l1"
    },
    {
      "source": "net_p1_t6",
      "target": "net_p1_t6_s2"
    },
    {
      "source": "net_p1_t6_s2",
      "target": "net_p1_t6_s2_l0"
    },
    {
      "source": "net_p1_t6_s2",
      "target": "net_p1_t6_s2_l1"
    },
    {
      "source": "net_p1_t6",
      "target": "net_p1_t6_s3"
    },
    {
      "source": "net_p1_t6_s3",
      "target": "net_p1_t6_s3_l0"
    },
    {
      "source": "net_p1_t6_s3",
      "target": "net_p1_t6_s3_l1"
    },
    {
      "source": "net_p1_t6",
      "target": "net_p1_t6_s4"
    },
    {
      "source": "net_p1_t6_s4",
      "target": "net_p1_t6_s4_l0"
    },
    {
      "source": "net_p1_t6_s4",
      "target": "net_p1_t6_s4_l1"
    },
    {
      "source": "net_p2",
      "target": "net_p2_t0"
    },
    {
      "source": "net_p2_t0",
      "target": "net_p2_t0_s0"
    },
    {
      "source": "net_p2_t0_s0",
      "target": "net_p2_t0_s0_l0"
    },
    {
      "source": "net_p2_t0_s0",
      "target": "net_p2_t0_s0_l1"
    },
    {
      "source": "net_p2_t0",
      "target": "net_p2_t0_s1"
    },
    {
      "source": "net_p2_t0_s1",
      "target": "net_p2_t0_s1_l0"
    },
    {
      "source": "net_p2_t0_s1",
      "target": "net_p2_t0_s1_l1"
    },
    {
      "source": "net_p2_t0",
      "target": "net_p2_t0_s2"
    },
    {
      "source": "net_p2_t0_s2",
      "target": "net_p2_t0_s2_l0"
    },
    {
      "source": "net_p2_t0_s2",
      "target": "net_p2_t0_s2_l1"
    },
    {
      "source": "net_p2_t0",
      "target": "net_p2_t0_s3"
    },
    {
      "source": "net_p2_t0_s3",
      "target": "net_p2_t0_s3_l0"
    },
    {
      "source": "net_p2_t0_s3",
      "target": "net_p2_t0_s3_l1"
    },
    {
      "source": "net_p2_t0",
      "target": "net_p2_t0_s4"
    },
    {
      "source": "net_p2_t0_s4",
      "target": "net_p2_t0_s4_l0"
    },
    {
      "source": "net_p2_t0_s4",
      "target": "net_p2_t0_s4_l1"
    },
    {
      "source": "net_p2",
      "target": "net_p2_t1"
    },
    {
      "source": "net_p2_t1",
      "target": "net_p2_t1_s0"
    },
    {
      "source": "net_p2_t1_s0",
      "target": "net_p2_t1_s0_l0"
    },
    {
      "source": "net_p2_t1_s0",
      "target": "net_p2_t1_s0_l1"
    },
    {
      "source": "net_p2_t1",
      "target": "net_p2_t1_s1"
    },
    {
      "source": "net_p2_t1_s1",
      "target": "net_p2_t1_s1_l0"
    },
    {
      "source": "net_p2_t1_s1",
      "target": "net_p2_t1_s1_l1"
    },
    {
      "source": "net_p2_t1",
      "target": "net_p2_t1_s2"
    },
    {
      "source": "net_p2_t1_s2",
      "target": "net_p2_t1_s2_l0"
    },
    {
      "source": "net_p2_t1_s2",
      "target": "net_p2_t1_s2_l1"
    },
    {
      "source": "net_p2_t1",
      "target": "net_p2_t1_s3"
    },
    {
      "source": "net_p2_t1_s3",
      "target": "net_p2_t1_s3_l0"
    },
    {
      "source": "net_p2_t1_s3",
      "target": "net_p2_t1_s3_l1"
    },
    {
      "source": "net_p2_t1",
      "target": "net_p2_t1_s4"
    },
    {
      "source": "net_p2_t1_s4",
      "target": "net_p2_t1_s4_l0"
    },
    {
      "source": "net_p2_t1_s4",
      "target": "net_p2_t1_s4_l1"
    },
    {
      "source": "net_p2",
      "target": "net_p2_t2"
    },
    {
      "source": "net_p2_t2",
      "target": "net_p2_t2_s0"
    },
    {
      "source": "net_p2_t2_s0",
      "target": "net_p2_t2_s0_l0"
    },
    {
      "source": "net_p2_t2_s0",
      "target": "net_p2_t2_s0_l1"
    },
    {
      "source": "net_p2_t2",
      "target": "net_p2_t2_s1"
    },
    {
      "source": "net_p2_t2_s1",
      "target": "net_p2_t2_s1_l0"
    },
    {
      "source": "net_p2_t2_s1",
      "target": "net_p2_t2_s1_l1"
    },
    {
      "source": "net_p2_t2",
      "target": "net_p2_t2_s2"
    },
    {
      "source": "net_p2_t2_s2",
      "target": "net_p2_t2_s2_l0"
    },
    {
      "source": "net_p2_t2_s2",
      "target": "net_p2_t2_s2_l1"
    },
    {
      "source": "net_p2_t2",
      "target": "net_p2_t2_s3"
    },
    {
      "source": "net_p2_t2_s3",
      "target": "net_p2_t2_s3_l0"
    },
    {
      "source": "net_p2_t2_s3",
      "target": "net_p2_t2_s3_l1"
    },
    {
      "source": "net_p2_t2",
      "target": "net_p2_t2_s4"
    },
    {
      "source": "net_p2_t2_s4",
      "target": "net_p2_t2_s4_l0"
    },
    {
      "source": "net_p2_t2_s4",
      "target": "net_p2_t2_s4_l1"
    },
    {
      "source": "net_p2",
      "target": "net_p2_t3"
    },
    {
      "source": "net_p2_t3",
      "target": "net_p2_t3_s0"
    },
    {
      "source": "net_p2_t3_s0",
      "target": "net_p2_t3_s0_l0"
    },
    {
      "source": "net_p2_t3_s0",
      "target": "net_p2_t3_s0_l1"
    },
    {
      "source": "net_p2_t3",
      "target": "net_p2_t3_s1"
    },
    {
      "source": "net_p2_t3_s1",
      "target": "net_p2_t3_s1_l0"
    },
    {
      "source": "net_p2_t3_s1",
      "target": "net_p2_t3_s1_l1"
    },
    {
      "source": "net_p2_t3",
      "target": "net_p2_t3_s2"
    },
    {
      "source": "net_p2_t3_s2",
      "target": "net_p2_t3_s2_l0"
    },
    {
      "source": "net_p2_t3_s2",
      "target": "net_p2_t3_s2_l1"
    },
    {
      "source": "net_p2_t3",
      "target": "net_p2_t3_s3"
    },
    {
      "source": "net_p2_t3_s3",
      "target": "net_p2_t3_s3_l0"
    },
    {
      "source": "net_p2_t3_s3",
      "target": "net_p2_t3_s3_l1"
    },
    {
      "source": "net_p2_t3",
      "target": "net_p2_t3_s4"
    },
    {
      "source": "net_p2_t3_s4",
      "target": "net_p2_t3_s4_l0"
    },
    {
      "source": "net_p2_t3_s4",
      "target": "net_p2_t3_s4_l1"
    },
    {
      "source": "net_p2",
      "target": "net_p2_t4"
    },
    {
      "source": "net_p2_t4",
      "target": "net_p2_t4_s0"
    },
    {
      "source": "net_p2_t4_s0",
      "target": "net_p2_t4_s0_l0"
    },
    {
      "source": "net_p2_t4_s0",
      "target": "net_p2_t4_s0_l1"
    },
    {
      "source": "net_p2_t4",
      "target": "net_p2_t4_s1"
    },
    {
      "source": "net_p2_t4_s1",
      "target": "net_p2_t4_s1_l0"
    },
    {
      "source": "net_p2_t4_s1",
      "target": "net_p2_t4_s1_l1"
    },
    {
      "source": "net_p2_t4",
      "target": "net_p2_t4_s2"
    },
    {
      "source": "net_p2_t4_s2",
      "target": "net_p2_t4_s2_l0"
    },
    {
      "source": "net_p2_t4_s2",
      "target": "net_p2_t4_s2_l1"
    },
    {
      "source": "net_p2_t4",
      "target": "net_p2_t4_s3"
    },
    {
      "source": "net_p2_t4_s3",
      "target": "net_p2_t4_s3_l0"
    },
    {
      "source": "net_p2_t4_s3",
      "target": "net_p2_t4_s3_l1"
    },
    {
      "source": "net_p2_t4",
      "target": "net_p2_t4_s4"
    },
    {
      "source": "net_p2_t4_s4",
      "target": "net_p2_t4_s4_l0"
    },
    {
      "source": "net_p2_t4_s4",
      "target": "net_p2_t4_s4_l1"
    },
    {
      "source": "net_p2",
      "target": "net_p2_t5"
    },
    {
      "source": "net_p2_t5",
      "target": "net_p2_t5_s0"
    },
    {
      "source": "net_p2_t5_s0",
      "target": "net_p2_t5_s0_l0"
    },
    {
      "source": "net_p2_t5_s0",
      "target": "net_p2_t5_s0_l1"
    },
    {
      "source": "net_p2_t5",
      "target": "net_p2_t5_s1"
    },
    {
      "source": "net_p2_t5_s1",
      "target": "net_p2_t5_s1_l0"
    },
    {
      "source": "net_p2_t5_s1",
      "target": "net_p2_t5_s1_l1"
    },
    {
      "source": "net_p2_t5",
      "target": "net_p2_t5_s2"
    },
    {
      "source": "net_p2_t5_s2",
      "target": "net_p2_t5_s2_l0"
    },
    {
      "source": "net_p2_t5_s2",
      "target": "net_p2_t5_s2_l1"
    },
    {
      "source": "net_p2_t5",
      "target": "net_p2_t5_s3"
    },
    {
      "source": "net_p2_t5_s3",
      "target": "net_p2_t5_s3_l0"
    },
    {
      "source": "net_p2_t5_s3",
      "target": "net_p2_t5_s3_l1"
    },
    {
      "source": "net_p2_t5",
      "target": "net_p2_t5_s4"
    },
    {
      "source": "net_p2_t5_s4",
      "target": "net_p2_t5_s4_l0"
    },
    {
      "source": "net_p2_t5_s4",
      "target": "net_p2_t5_s4_l1"
    },
    {
      "source": "net_p2",
      "target": "net_p2_t6"
    },
    {
      "source": "net_p2_t6",
      "target": "net_p2_t6_s0"
    },
    {
      "source": "net_p2_t6_s0",
      "target": "net_p2_t6_s0_l0"
    },
    {
      "source": "net_p2_t6_s0",
      "target": "net_p2_t6_s0_l1"
    },
    {
      "source": "net_p2_t6",
      "target": "net_p2_t6_s1"
    },
    {
      "source": "net_p2_t6_s1",
      "target": "net_p2_t6_s1_l0"
    },
    {
      "source": "net_p2_t6_s1",
      "target": "net_p2_t6_s1_l1"
    },
    {
      "source": "net_p2_t6",
      "target": "net_p2_t6_s2"
    },
    {
      "source": "net_p2_t6_s2",
      "target": "net_p2_t6_s2_l0"
    },
    {
      "source": "net_p2_t6_s2",
      "target": "net_p2_t6_s2_l1"
    },
    {
      "source": "net_p2_t6",
      "target": "net_p2_t6_s3"
    },
    {
      "source": "net_p2_t6_s3",
      "target": "net_p2_t6_s3_l0"
    },
    {
      "source": "net_p2_t6_s3",
      "target": "net_p2_t6_s3_l1"
    },
    {
      "source": "net_p2_t6",
      "target": "net_p2_t6_s4"
    },
    {
      "source": "net_p2_t6_s4",
      "target": "net_p2_t6_s4_l0"
    },
    {
      "source": "net_p2_t6_s4",
      "target": "net_p2_t6_s4_l1"
    },
    {
      "source": "net_p3",
      "target": "net_p3_t0"
    },
    {
      "source": "net_p3_t0",
      "target": "net_p3_t0_s0"
    },
    {
      "source": "net_p3_t0_s0",
      "target": "net_p3_t0_s0_l0"
    },
    {
      "source": "net_p3_t0_s0",
      "target": "net_p3_t0_s0_l1"
    },
    {
      "source": "net_p3_t0",
      "target": "net_p3_t0_s1"
    },
    {
      "source": "net_p3_t0_s1",
      "target": "net_p3_t0_s1_l0"
    },
    {
      "source": "net_p3_t0_s1",
      "target": "net_p3_t0_s1_l1"
    },
    {
      "source": "net_p3_t0",
      "target": "net_p3_t0_s2"
    },
    {
      "source": "net_p3_t0_s2",
      "target": "net_p3_t0_s2_l0"
    },
    {
      "source": "net_p3_t0_s2",
      "target": "net_p3_t0_s2_l1"
    },
    {
      "source": "net_p3_t0",
      "target": "net_p3_t0_s3"
    },
    {
      "source": "net_p3_t0_s3",
      "target": "net_p3_t0_s3_l0"
    },
    {
      "source": "net_p3_t0_s3",
      "target": "net_p3_t0_s3_l1"
    },
    {
      "source": "net_p3_t0",
      "target": "net_p3_t0_s4"
    },
    {
      "source": "net_p3_t0_s4",
      "target": "net_p3_t0_s4_l0"
    },
    {
      "source": "net_p3_t0_s4",
      "target": "net_p3_t0_s4_l1"
    },
    {
      "source": "net_p3",
      "target": "net_p3_t1"
    },
    {
      "source": "net_p3_t1",
      "target": "net_p3_t1_s0"
    },
    {
      "source": "net_p3_t1_s0",
      "target": "net_p3_t1_s0_l0"
    },
    {
      "source": "net_p3_t1_s0",
      "target": "net_p3_t1_s0_l1"
    },
    {
      "source": "net_p3_t1",
      "target": "net_p3_t1_s1"
    },
    {
      "source": "net_p3_t1_s1",
      "target": "net_p3_t1_s1_l0"
    },
    {
      "source": "net_p3_t1_s1",
      "target": "net_p3_t1_s1_l1"
    },
    {
      "source": "net_p3_t1",
      "target": "net_p3_t1_s2"
    },
    {
      "source": "net_p3_t1_s2",
      "target": "net_p3_t1_s2_l0"
    },
    {
      "source": "net_p3_t1_s2",
      "target": "net_p3_t1_s2_l1"
    },
    {
      "source": "net_p3_t1",
      "target": "net_p3_t1_s3"
    },
    {
      "source": "net_p3_t1_s3",
      "target": "net_p3_t1_s3_l0"
    },
    {
      "source": "net_p3_t1_s3",
      "target": "net_p3_t1_s3_l1"
    },
    {
      "source": "net_p3_t1",
      "target": "net_p3_t1_s4"
    },
    {
      "source": "net_p3_t1_s4",
      "target": "net_p3_t1_s4_l0"
    },
    {
      "source": "net_p3_t1_s4",
      "target": "net_p3_t1_s4_l1"
    },
    {
      "source": "net_p3",
      "target": "net_p3_t2"
    },
    {
      "source": "net_p3_t2",
      "target": "net_p3_t2_s0"
    },
    {
      "source": "net_p3_t2_s0",
      "target": "net_p3_t2_s0_l0"
    },
    {
      "source": "net_p3_t2_s0",
      "target": "net_p3_t2_s0_l1"
    },
    {
      "source": "net_p3_t2",
      "target": "net_p3_t2_s1"
    },
    {
      "source": "net_p3_t2_s1",
      "target": "net_p3_t2_s1_l0"
    },
    {
      "source": "net_p3_t2_s1",
      "target": "net_p3_t2_s1_l1"
    },
    {
      "source": "net_p3_t2",
      "target": "net_p3_t2_s2"
    },
    {
      "source": "net_p3_t2_s2",
      "target": "net_p3_t2_s2_l0"
    },
    {
      "source": "net_p3_t2_s2",
      "target": "net_p3_t2_s2_l1"
    },
    {
      "source": "net_p3_t2",
      "target": "net_p3_t2_s3"
    },
    {
      "source": "net_p3_t2_s3",
      "target": "net_p3_t2_s3_l0"
    },
    {
      "source": "net_p3_t2_s3",
      "target": "net_p3_t2_s3_l1"
    },
    {
      "source": "net_p3_t2",
      "target": "net_p3_t2_s4"
    },
    {
      "source": "net_p3_t2_s4",
      "target": "net_p3_t2_s4_l0"
    },
    {
      "source": "net_p3_t2_s4",
      "target": "net_p3_t2_s4_l1"
    },
    {
      "source": "net_p3",
      "target": "net_p3_t3"
    },
    {
      "source": "net_p3_t3",
      "target": "net_p3_t3_s0"
    },
    {
      "source": "net_p3_t3_s0",
      "target": "net_p3_t3_s0_l0"
    },
    {
      "source": "net_p3_t3_s0",
      "target": "net_p3_t3_s0_l1"
    },
    {
      "source": "net_p3_t3",
      "target": "net_p3_t3_s1"
    },
    {
      "source": "net_p3_t3_s1",
      "target": "net_p3_t3_s1_l0"
    },
    {
      "source": "net_p3_t3_s1",
      "target": "net_p3_t3_s1_l1"
    },
    {
      "source": "net_p3_t3",
      "target": "net_p3_t3_s2"
    },
    {
      "source": "net_p3_t3_s2",
      "target": "net_p3_t3_s2_l0"
    },
    {
      "source": "net_p3_t3_s2",
      "target": "net_p3_t3_s2_l1"
    },
    {
      "source": "net_p3_t3",
      "target": "net_p3_t3_s3"
    },
    {
      "source": "net_p3_t3_s3",
      "target": "net_p3_t3_s3_l0"
    },
    {
      "source": "net_p3_t3_s3",
      "target": "net_p3_t3_s3_l1"
    },
    {
      "source": "net_p3_t3",
      "target": "net_p3_t3_s4"
    },
    {
      "source": "net_p3_t3_s4",
      "target": "net_p3_t3_s4_l0"
    },
    {
      "source": "net_p3_t3_s4",
      "target": "net_p3_t3_s4_l1"
    },
    {
      "source": "net_p3",
      "target": "net_p3_t4"
    },
    {
      "source": "net_p3_t4",
      "target": "net_p3_t4_s0"
    },
    {
      "source": "net_p3_t4_s0",
      "target": "net_p3_t4_s0_l0"
    },
    {
      "source": "net_p3_t4_s0",
      "target": "net_p3_t4_s0_l1"
    },
    {
      "source": "net_p3_t4",
      "target": "net_p3_t4_s1"
    },
    {
      "source": "net_p3_t4_s1",
      "target": "net_p3_t4_s1_l0"
    },
    {
      "source": "net_p3_t4_s1",
      "target": "net_p3_t4_s1_l1"
    },
    {
      "source": "net_p3_t4",
      "target": "net_p3_t4_s2"
    },
    {
      "source": "net_p3_t4_s2",
      "target": "net_p3_t4_s2_l0"
    },
    {
      "source": "net_p3_t4_s2",
      "target": "net_p3_t4_s2_l1"
    },
    {
      "source": "net_p3_t4",
      "target": "net_p3_t4_s3"
    },
    {
      "source": "net_p3_t4_s3",
      "target": "net_p3_t4_s3_l0"
    },
    {
      "source": "net_p3_t4_s3",
      "target": "net_p3_t4_s3_l1"
    },
    {
      "source": "net_p3_t4",
      "target": "net_p3_t4_s4"
    },
    {
      "source": "net_p3_t4_s4",
      "target": "net_p3_t4_s4_l0"
    },
    {
      "source": "net_p3_t4_s4",
      "target": "net_p3_t4_s4_l1"
    },
    {
      "source": "net_p3",
      "target": "net_p3_t5"
    },
    {
      "source": "net_p3_t5",
      "target": "net_p3_t5_s0"
    },
    {
      "source": "net_p3_t5_s0",
      "target": "net_p3_t5_s0_l0"
    },
    {
      "source": "net_p3_t5_s0",
      "target": "net_p3_t5_s0_l1"
    },
    {
      "source": "net_p3_t5",
      "target": "net_p3_t5_s1"
    },
    {
      "source": "net_p3_t5_s1",
      "target": "net_p3_t5_s1_l0"
    },
    {
      "source": "net_p3_t5_s1",
      "target": "net_p3_t5_s1_l1"
    },
    {
      "source": "net_p3_t5",
      "target": "net_p3_t5_s2"
    },
    {
      "source": "net_p3_t5_s2",
      "target": "net_p3_t5_s2_l0"
    },
    {
      "source": "net_p3_t5_s2",
      "target": "net_p3_t5_s2_l1"
    },
    {
      "source": "net_p3_t5",
      "target": "net_p3_t5_s3"
    },
    {
      "source": "net_p3_t5_s3",
      "target": "net_p3_t5_s3_l0"
    },
    {
      "source": "net_p3_t5_s3",
      "target": "net_p3_t5_s3_l1"
    },
    {
      "source": "net_p3_t5",
      "target": "net_p3_t5_s4"
    },
    {
      "source": "net_p3_t5_s4",
      "target": "net_p3_t5_s4_l0"
    },
    {
      "source": "net_p3_t5_s4",
      "target": "net_p3_t5_s4_l1"
    },
    {
      "source": "net_p3",
      "target": "net_p3_t6"
    },
    {
      "source": "net_p3_t6",
      "target": "net_p3_t6_s0"
    },
    {
      "source": "net_p3_t6_s0",
      "target": "net_p3_t6_s0_l0"
    },
    {
      "source": "net_p3_t6_s0",
      "target": "net_p3_t6_s0_l1"
    },
    {
      "source": "net_p3_t6",
      "target": "net_p3_t6_s1"
    },
    {
      "source": "net_p3_t6_s1",
      "target": "net_p3_t6_s1_l0"
    },
    {
      "source": "net_p3_t6_s1",
      "target": "net_p3_t6_s1_l1"
    },
    {
      "source": "net_p3_t6",
      "target": "net_p3_t6_s2"
    },
    {
      "source": "net_p3_t6_s2",
      "target": "net_p3_t6_s2_l0"
    },
    {
      "source": "net_p3_t6_s2",
      "target": "net_p3_t6_s2_l1"
    },
    {
      "source": "net_p3_t6",
      "target": "net_p3_t6_s3"
    },
    {
      "source": "net_p3_t6_s3",
      "target": "net_p3_t6_s3_l0"
    },
    {
      "source": "net_p3_t6_s3",
      "target": "net_p3_t6_s3_l1"
    },
    {
      "source": "net_p3_t6",
      "target": "net_p3_t6_s4"
    },
    {
      "source": "net_p3_t6_s4",
      "target": "net_p3_t6_s4_l0"
    },
    {
      "source": "net_p3_t6_s4",
      "target": "net_p3_t6_s4_l1"
    },
    {
      "source": "net_p4",
      "target": "net_p4_t0"
    },
    {
      "source": "net_p4_t0",
      "target": "net_p4_t0_s0"
    },
    {
      "source": "net_p4_t0_s0",
      "target": "net_p4_t0_s0_l0"
    },
    {
      "source": "net_p4_t0_s0",
      "target": "net_p4_t0_s0_l1"
    },
    {
      "source": "net_p4_t0",
      "target": "net_p4_t0_s1"
    },
    {
      "source": "net_p4_t0_s1",
      "target": "net_p4_t0_s1_l0"
    },
    {
      "source": "net_p4_t0_s1",
      "target": "net_p4_t0_s1_l1"
    },
    {
      "source": "net_p4_t0",
      "target": "net_p4_t0_s2"
    },
    {
      "source": "net_p4_t0_s2",
      "target": "net_p4_t0_s2_l0"
    },
    {
      "source": "net_p4_t0_s2",
      "target": "net_p4_t0_s2_l1"
    },
    {
      "source": "net_p4_t0",
      "target": "net_p4_t0_s3"
    },
    {
      "source": "net_p4_t0_s3",
      "target": "net_p4_t0_s3_l0"
    },
    {
      "source": "net_p4_t0_s3",
      "target": "net_p4_t0_s3_l1"
    },
    {
      "source": "net_p4_t0",
      "target": "net_p4_t0_s4"
    },
    {
      "source": "net_p4_t0_s4",
      "target": "net_p4_t0_s4_l0"
    },
    {
      "source": "net_p4_t0_s4",
      "target": "net_p4_t0_s4_l1"
    },
    {
      "source": "net_p4",
      "target": "net_p4_t1"
    },
    {
      "source": "net_p4_t1",
      "target": "net_p4_t1_s0"
    },
    {
      "source": "net_p4_t1_s0",
      "target": "net_p4_t1_s0_l0"
    },
    {
      "source": "net_p4_t1_s0",
      "target": "net_p4_t1_s0_l1"
    },
    {
      "source": "net_p4_t1",
      "target": "net_p4_t1_s1"
    },
    {
      "source": "net_p4_t1_s1",
      "target": "net_p4_t1_s1_l0"
    },
    {
      "source": "net_p4_t1_s1",
      "target": "net_p4_t1_s1_l1"
    },
    {
      "source": "net_p4_t1",
      "target": "net_p4_t1_s2"
    },
    {
      "source": "net_p4_t1_s2",
      "target": "net_p4_t1_s2_l0"
    },
    {
      "source": "net_p4_t1_s2",
      "target": "net_p4_t1_s2_l1"
    },
    {
      "source": "net_p4_t1",
      "target": "net_p4_t1_s3"
    },
    {
      "source": "net_p4_t1_s3",
      "target": "net_p4_t1_s3_l0"
    },
    {
      "source": "net_p4_t1_s3",
      "target": "net_p4_t1_s3_l1"
    },
    {
      "source": "net_p4_t1",
      "target": "net_p4_t1_s4"
    },
    {
      "source": "net_p4_t1_s4",
      "target": "net_p4_t1_s4_l0"
    },
    {
      "source": "net_p4_t1_s4",
      "target": "net_p4_t1_s4_l1"
    },
    {
      "source": "net_p4",
      "target": "net_p4_t2"
    },
    {
      "source": "net_p4_t2",
      "target": "net_p4_t2_s0"
    },
    {
      "source": "net_p4_t2_s0",
      "target": "net_p4_t2_s0_l0"
    },
    {
      "source": "net_p4_t2_s0",
      "target": "net_p4_t2_s0_l1"
    },
    {
      "source": "net_p4_t2",
      "target": "net_p4_t2_s1"
    },
    {
      "source": "net_p4_t2_s1",
      "target": "net_p4_t2_s1_l0"
    },
    {
      "source": "net_p4_t2_s1",
      "target": "net_p4_t2_s1_l1"
    },
    {
      "source": "net_p4_t2",
      "target": "net_p4_t2_s2"
    },
    {
      "source": "net_p4_t2_s2",
      "target": "net_p4_t2_s2_l0"
    },
    {
      "source": "net_p4_t2_s2",
      "target": "net_p4_t2_s2_l1"
    },
    {
      "source": "net_p4_t2",
      "target": "net_p4_t2_s3"
    },
    {
      "source": "net_p4_t2_s3",
      "target": "net_p4_t2_s3_l0"
    },
    {
      "source": "net_p4_t2_s3",
      "target": "net_p4_t2_s3_l1"
    },
    {
      "source": "net_p4_t2",
      "target": "net_p4_t2_s4"
    },
    {
      "source": "net_p4_t2_s4",
      "target": "net_p4_t2_s4_l0"
    },
    {
      "source": "net_p4_t2_s4",
      "target": "net_p4_t2_s4_l1"
    },
    {
      "source": "net_p4",
      "target": "net_p4_t3"
    },
    {
      "source": "net_p4_t3",
      "target": "net_p4_t3_s0"
    },
    {
      "source": "net_p4_t3_s0",
      "target": "net_p4_t3_s0_l0"
    },
    {
      "source": "net_p4_t3_s0",
      "target": "net_p4_t3_s0_l1"
    },
    {
      "source": "net_p4_t3",
      "target": "net_p4_t3_s1"
    },
    {
      "source": "net_p4_t3_s1",
      "target": "net_p4_t3_s1_l0"
    },
    {
      "source": "net_p4_t3_s1",
      "target": "net_p4_t3_s1_l1"
    },
    {
      "source": "net_p4_t3",
      "target": "net_p4_t3_s2"
    },
    {
      "source": "net_p4_t3_s2",
      "target": "net_p4_t3_s2_l0"
    },
    {
      "source": "net_p4_t3_s2",
      "target": "net_p4_t3_s2_l1"
    },
    {
      "source": "net_p4_t3",
      "target": "net_p4_t3_s3"
    },
    {
      "source": "net_p4_t3_s3",
      "target": "net_p4_t3_s3_l0"
    },
    {
      "source": "net_p4_t3_s3",
      "target": "net_p4_t3_s3_l1"
    },
    {
      "source": "net_p4_t3",
      "target": "net_p4_t3_s4"
    },
    {
      "source": "net_p4_t3_s4",
      "target": "net_p4_t3_s4_l0"
    },
    {
      "source": "net_p4_t3_s4",
      "target": "net_p4_t3_s4_l1"
    },
    {
      "source": "net_p4",
      "target": "net_p4_t4"
    },
    {
      "source": "net_p4_t4",
      "target": "net_p4_t4_s0"
    },
    {
      "source": "net_p4_t4_s0",
      "target": "net_p4_t4_s0_l0"
    },
    {
      "source": "net_p4_t4_s0",
      "target": "net_p4_t4_s0_l1"
    },
    {
      "source": "net_p4_t4",
      "target": "net_p4_t4_s1"
    },
    {
      "source": "net_p4_t4_s1",
      "target": "net_p4_t4_s1_l0"
    },
    {
      "source": "net_p4_t4_s1",
      "target": "net_p4_t4_s1_l1"
    },
    {
      "source": "net_p4_t4",
      "target": "net_p4_t4_s2"
    },
    {
      "source": "net_p4_t4_s2",
      "target": "net_p4_t4_s2_l0"
    },
    {
      "source": "net_p4_t4_s2",
      "target": "net_p4_t4_s2_l1"
    },
    {
      "source": "net_p4_t4",
      "target": "net_p4_t4_s3"
    },
    {
      "source": "net_p4_t4_s3",
      "target": "net_p4_t4_s3_l0"
    },
    {
      "source": "net_p4_t4_s3",
      "target": "net_p4_t4_s3_l1"
    },
    {
      "source": "net_p4_t4",
      "target": "net_p4_t4_s4"
    },
    {
      "source": "net_p4_t4_s4",
      "target": "net_p4_t4_s4_l0"
    },
    {
      "source": "net_p4_t4_s4",
      "target": "net_p4_t4_s4_l1"
    },
    {
      "source": "net_p4",
      "target": "net_p4_t5"
    },
    {
      "source": "net_p4_t5",
      "target": "net_p4_t5_s0"
    },
    {
      "source": "net_p4_t5_s0",
      "target": "net_p4_t5_s0_l0"
    },
    {
      "source": "net_p4_t5_s0",
      "target": "net_p4_t5_s0_l1"
    },
    {
      "source": "net_p4_t5",
      "target": "net_p4_t5_s1"
    },
    {
      "source": "net_p4_t5_s1",
      "target": "net_p4_t5_s1_l0"
    },
    {
      "source": "net_p4_t5_s1",
      "target": "net_p4_t5_s1_l1"
    },
    {
      "source": "net_p4_t5",
      "target": "net_p4_t5_s2"
    },
    {
      "source": "net_p4_t5_s2",
      "target": "net_p4_t5_s2_l0"
    },
    {
      "source": "net_p4_t5_s2",
      "target": "net_p4_t5_s2_l1"
    },
    {
      "source": "net_p4_t5",
      "target": "net_p4_t5_s3"
    },
    {
      "source": "net_p4_t5_s3",
      "target": "net_p4_t5_s3_l0"
    },
    {
      "source": "net_p4_t5_s3",
      "target": "net_p4_t5_s3_l1"
    },
    {
      "source": "net_p4_t5",
      "target": "net_p4_t5_s4"
    },
    {
      "source": "net_p4_t5_s4",
      "target": "net_p4_t5_s4_l0"
    },
    {
      "source": "net_p4_t5_s4",
      "target": "net_p4_t5_s4_l1"
    },
    {
      "source": "net_p4",
      "target": "net_p4_t6"
    },
    {
      "source": "net_p4_t6",
      "target": "net_p4_t6_s0"
    },
    {
      "source": "net_p4_t6_s0",
      "target": "net_p4_t6_s0_l0"
    },
    {
      "source": "net_p4_t6_s0",
      "target": "net_p4_t6_s0_l1"
    },
    {
      "source": "net_p4_t6",
      "target": "net_p4_t6_s1"
    },
    {
      "source": "net_p4_t6_s1",
      "target": "net_p4_t6_s1_l0"
    },
    {
      "source": "net_p4_t6_s1",
      "target": "net_p4_t6_s1_l1"
    },
    {
      "source": "net_p4_t6",
      "target": "net_p4_t6_s2"
    },
    {
      "source": "net_p4_t6_s2",
      "target": "net_p4_t6_s2_l0"
    },
    {
      "source": "net_p4_t6_s2",
      "target": "net_p4_t6_s2_l1"
    },
    {
      "source": "net_p4_t6",
      "target": "net_p4_t6_s3"
    },
    {
      "source": "net_p4_t6_s3",
      "target": "net_p4_t6_s3_l0"
    },
    {
      "source": "net_p4_t6_s3",
      "target": "net_p4_t6_s3_l1"
    },
    {
      "source": "net_p4_t6",
      "target": "net_p4_t6_s4"
    },
    {
      "source": "net_p4_t6_s4",
      "target": "net_p4_t6_s4_l0"
    },
    {
      "source": "net_p4_t6_s4",
      "target": "net_p4_t6_s4_l1"
    },
    {
      "source": "net_p5",
      "target": "net_p5_t0"
    },
    {
      "source": "net_p5_t0",
      "target": "net_p5_t0_s0"
    },
    {
      "source": "net_p5_t0_s0",
      "target": "net_p5_t0_s0_l0"
    },
    {
      "source": "net_p5_t0_s0",
      "target": "net_p5_t0_s0_l1"
    },
    {
      "source": "net_p5_t0",
      "target": "net_p5_t0_s1"
    },
    {
      "source": "net_p5_t0_s1",
      "target": "net_p5_t0_s1_l0"
    },
    {
      "source": "net_p5_t0_s1",
      "target": "net_p5_t0_s1_l1"
    },
    {
      "source": "net_p5_t0",
      "target": "net_p5_t0_s2"
    },
    {
      "source": "net_p5_t0_s2",
      "target": "net_p5_t0_s2_l0"
    },
    {
      "source": "net_p5_t0_s2",
      "target": "net_p5_t0_s2_l1"
    },
    {
      "source": "net_p5_t0",
      "target": "net_p5_t0_s3"
    },
    {
      "source": "net_p5_t0_s3",
      "target": "net_p5_t0_s3_l0"
    },
    {
      "source": "net_p5_t0_s3",
      "target": "net_p5_t0_s3_l1"
    },
    {
      "source": "net_p5_t0",
      "target": "net_p5_t0_s4"
    },
    {
      "source": "net_p5_t0_s4",
      "target": "net_p5_t0_s4_l0"
    },
    {
      "source": "net_p5_t0_s4",
      "target": "net_p5_t0_s4_l1"
    },
    {
      "source": "net_p5",
      "target": "net_p5_t1"
    },
    {
      "source": "net_p5_t1",
      "target": "net_p5_t1_s0"
    },
    {
      "source": "net_p5_t1_s0",
      "target": "net_p5_t1_s0_l0"
    },
    {
      "source": "net_p5_t1_s0",
      "target": "net_p5_t1_s0_l1"
    },
    {
      "source": "net_p5_t1",
      "target": "net_p5_t1_s1"
    },
    {
      "source": "net_p5_t1_s1",
      "target": "net_p5_t1_s1_l0"
    },
    {
      "source": "net_p5_t1_s1",
      "target": "net_p5_t1_s1_l1"
    },
    {
      "source": "net_p5_t1",
      "target": "net_p5_t1_s2"
    },
    {
      "source": "net_p5_t1_s2",
      "target": "net_p5_t1_s2_l0"
    },
    {
      "source": "net_p5_t1_s2",
      "target": "net_p5_t1_s2_l1"
    },
    {
      "source": "net_p5_t1",
      "target": "net_p5_t1_s3"
    },
    {
      "source": "net_p5_t1_s3",
      "target": "net_p5_t1_s3_l0"
    },
    {
      "source": "net_p5_t1_s3",
      "target": "net_p5_t1_s3_l1"
    },
    {
      "source": "net_p5_t1",
      "target": "net_p5_t1_s4"
    },
    {
      "source": "net_p5_t1_s4",
      "target": "net_p5_t1_s4_l0"
    },
    {
      "source": "net_p5_t1_s4",
      "target": "net_p5_t1_s4_l1"
    },
    {
      "source": "net_p5",
      "target": "net_p5_t2"
    },
    {
      "source": "net_p5_t2",
      "target": "net_p5_t2_s0"
    },
    {
      "source": "net_p5_t2_s0",
      "target": "net_p5_t2_s0_l0"
    },
    {
      "source": "net_p5_t2_s0",
      "target": "net_p5_t2_s0_l1"
    },
    {
      "source": "net_p5_t2",
      "target": "net_p5_t2_s1"
    },
    {
      "source": "net_p5_t2_s1",
      "target": "net_p5_t2_s1_l0"
    },
    {
      "source": "net_p5_t2_s1",
      "target": "net_p5_t2_s1_l1"
    },
    {
      "source": "net_p5_t2",
      "target": "net_p5_t2_s2"
    },
    {
      "source": "net_p5_t2_s2",
      "target": "net_p5_t2_s2_l0"
    },
    {
      "source": "net_p5_t2_s2",
      "target": "net_p5_t2_s2_l1"
    },
    {
      "source": "net_p5_t2",
      "target": "net_p5_t2_s3"
    },
    {
      "source": "net_p5_t2_s3",
      "target": "net_p5_t2_s3_l0"
    },
    {
      "source": "net_p5_t2_s3",
      "target": "net_p5_t2_s3_l1"
    },
    {
      "source": "net_p5_t2",
      "target": "net_p5_t2_s4"
    },
    {
      "source": "net_p5_t2_s4",
      "target": "net_p5_t2_s4_l0"
    },
    {
      "source": "net_p5_t2_s4",
      "target": "net_p5_t2_s4_l1"
    },
    {
      "source": "net_p5",
      "target": "net_p5_t3"
    },
    {
      "source": "net_p5_t3",
      "target": "net_p5_t3_s0"
    },
    {
      "source": "net_p5_t3_s0",
      "target": "net_p5_t3_s0_l0"
    },
    {
      "source": "net_p5_t3_s0",
      "target": "net_p5_t3_s0_l1"
    },
    {
      "source": "net_p5_t3",
      "target": "net_p5_t3_s1"
    },
    {
      "source": "net_p5_t3_s1",
      "target": "net_p5_t3_s1_l0"
    },
    {
      "source": "net_p5_t3_s1",
      "target": "net_p5_t3_s1_l1"
    },
    {
      "source": "net_p5_t3",
      "target": "net_p5_t3_s2"
    },
    {
      "source": "net_p5_t3_s2",
      "target": "net_p5_t3_s2_l0"
    },
    {
      "source": "net_p5_t3_s2",
      "target": "net_p5_t3_s2_l1"
    },
    {
      "source": "net_p5_t3",
      "target": "net_p5_t3_s3"
    },
    {
      "source": "net_p5_t3_s3",
      "target": "net_p5_t3_s3_l0"
    },
    {
      "source": "net_p5_t3_s3",
      "target": "net_p5_t3_s3_l1"
    },
    {
      "source": "net_p5_t3",
      "target": "net_p5_t3_s4"
    },
    {
      "source": "net_p5_t3_s4",
      "target": "net_p5_t3_s4_l0"
    },
    {
      "source": "net_p5_t3_s4",
      "target": "net_p5_t3_s4_l1"
    },
    {
      "source": "net_p5",
      "target": "net_p5_t4"
    },
    {
      "source": "net_p5_t4",
      "target": "net_p5_t4_s0"
    },
    {
      "source": "net_p5_t4_s0",
      "target": "net_p5_t4_s0_l0"
    },
    {
      "source": "net_p5_t4_s0",
      "target": "net_p5_t4_s0_l1"
    },
    {
      "source": "net_p5_t4",
      "target": "net_p5_t4_s1"
    },
    {
      "source": "net_p5_t4_s1",
      "target": "net_p5_t4_s1_l0"
    },
    {
      "source": "net_p5_t4_s1",
      "target": "net_p5_t4_s1_l1"
    },
    {
      "source": "net_p5_t4",
      "target": "net_p5_t4_s2"
    },
    {
      "source": "net_p5_t4_s2",
      "target": "net_p5_t4_s2_l0"
    },
    {
      "source": "net_p5_t4_s2",
      "target": "net_p5_t4_s2_l1"
    },
    {
      "source": "net_p5_t4",
      "target": "net_p5_t4_s3"
    },
    {
      "source": "net_p5_t4_s3",
      "target": "net_p5_t4_s3_l0"
    },
    {
      "source": "net_p5_t4_s3",
      "target": "net_p5_t4_s3_l1"
    },
    {
      "source": "net_p5_t4",
      "target": "net_p5_t4_s4"
    },
    {
      "source": "net_p5_t4_s4",
      "target": "net_p5_t4_s4_l0"
    },
    {
      "source": "net_p5_t4_s4",
      "target": "net_p5_t4_s4_l1"
    },
    {
      "source": "net_p5",
      "target": "net_p5_t5"
    },
    {
      "source": "net_p5_t5",
      "target": "net_p5_t5_s0"
    },
    {
      "source": "net_p5_t5_s0",
      "target": "net_p5_t5_s0_l0"
    },
    {
      "source": "net_p5_t5_s0",
      "target": "net_p5_t5_s0_l1"
    },
    {
      "source": "net_p5_t5",
      "target": "net_p5_t5_s1"
    },
    {
      "source": "net_p5_t5_s1",
      "target": "net_p5_t5_s1_l0"
    },
    {
      "source": "net_p5_t5_s1",
      "target": "net_p5_t5_s1_l1"
    },
    {
      "source": "net_p5_t5",
      "target": "net_p5_t5_s2"
    },
    {
      "source": "net_p5_t5_s2",
      "target": "net_p5_t5_s2_l0"
    },
    {
      "source": "net_p5_t5_s2",
      "target": "net_p5_t5_s2_l1"
    },
    {
      "source": "net_p5_t5",
      "target": "net_p5_t5_s3"
    },
    {
      "source": "net_p5_t5_s3",
      "target": "net_p5_t5_s3_l0"
    },
    {
      "source": "net_p5_t5_s3",
      "target": "net_p5_t5_s3_l1"
    },
    {
      "source": "net_p5_t5",
      "target": "net_p5_t5_s4"
    },
    {
      "source": "net_p5_t5_s4",
      "target": "net_p5_t5_s4_l0"
    },
    {
      "source": "net_p5_t5_s4",
      "target": "net_p5_t5_s4_l1"
    },
    {
      "source": "net_p5",
      "target": "net_p5_t6"
    },
    {
      "source": "net_p5_t6",
      "target": "net_p5_t6_s0"
    },
    {
      "source": "net_p5_t6_s0",
      "target": "net_p5_t6_s0_l0"
    },
    {
      "source": "net_p5_t6_s0",
      "target": "net_p5_t6_s0_l1"
    },
    {
      "source": "net_p5_t6",
      "target": "net_p5_t6_s1"
    },
    {
      "source": "net_p5_t6_s1",
      "target": "net_p5_t6_s1_l0"
    },
    {
      "source": "net_p5_t6_s1",
      "target": "net_p5_t6_s1_l1"
    },
    {
      "source": "net_p5_t6",
      "target": "net_p5_t6_s2"
    },
    {
      "source": "net_p5_t6_s2",
      "target": "net_p5_t6_s2_l0"
    },
    {
      "source": "net_p5_t6_s2",
      "target": "net_p5_t6_s2_l1"
    },
    {
      "source": "net_p5_t6",
      "target": "net_p5_t6_s3"
    },
    {
      "source": "net_p5_t6_s3",
      "target": "net_p5_t6_s3_l0"
    },
    {
      "source": "net_p5_t6_s3",
      "target": "net_p5_t6_s3_l1"
    },
    {
      "source": "net_p5_t6",
      "target": "net_p5_t6_s4"
    },
    {
      "source": "net_p5_t6_s4",
      "target": "net_p5_t6_s4_l0"
    },
    {
      "source": "net_p5_t6_s4",
      "target": "net_p5_t6_s4_l1"
    },
    {
      "source": "net_p6",
      "target": "net_p6_t0"
    },
    {
      "source": "net_p6_t0",
      "target": "net_p6_t0_s0"
    },
    {
      "source": "net_p6_t0_s0",
      "target": "net_p6_t0_s0_l0"
    },
    {
      "source": "net_p6_t0_s0",
      "target": "net_p6_t0_s0_l1"
    },
    {
      "source": "net_p6_t0",
      "target": "net_p6_t0_s1"
    },
    {
      "source": "net_p6_t0_s1",
      "target": "net_p6_t0_s1_l0"
    },
    {
      "source": "net_p6_t0_s1",
      "target": "net_p6_t0_s1_l1"
    },
    {
      "source": "net_p6_t0",
      "target": "net_p6_t0_s2"
    },
    {
      "source": "net_p6_t0_s2",
      "target": "net_p6_t0_s2_l0"
    },
    {
      "source": "net_p6_t0_s2",
      "target": "net_p6_t0_s2_l1"
    },
    {
      "source": "net_p6_t0",
      "target": "net_p6_t0_s3"
    },
    {
      "source": "net_p6_t0_s3",
      "target": "net_p6_t0_s3_l0"
    },
    {
      "source": "net_p6_t0_s3",
      "target": "net_p6_t0_s3_l1"
    },
    {
      "source": "net_p6_t0",
      "target": "net_p6_t0_s4"
    },
    {
      "source": "net_p6_t0_s4",
      "target": "net_p6_t0_s4_l0"
    },
    {
      "source": "net_p6_t0_s4",
      "target": "net_p6_t0_s4_l1"
    },
    {
      "source": "net_p6",
      "target": "net_p6_t1"
    },
    {
      "source": "net_p6_t1",
      "target": "net_p6_t1_s0"
    },
    {
      "source": "net_p6_t1_s0",
      "target": "net_p6_t1_s0_l0"
    },
    {
      "source": "net_p6_t1_s0",
      "target": "net_p6_t1_s0_l1"
    },
    {
      "source": "net_p6_t1",
      "target": "net_p6_t1_s1"
    },
    {
      "source": "net_p6_t1_s1",
      "target": "net_p6_t1_s1_l0"
    },
    {
      "source": "net_p6_t1_s1",
      "target": "net_p6_t1_s1_l1"
    },
    {
      "source": "net_p6_t1",
      "target": "net_p6_t1_s2"
    },
    {
      "source": "net_p6_t1_s2",
      "target": "net_p6_t1_s2_l0"
    },
    {
      "source": "net_p6_t1_s2",
      "target": "net_p6_t1_s2_l1"
    },
    {
      "source": "net_p6_t1",
      "target": "net_p6_t1_s3"
    },
    {
      "source": "net_p6_t1_s3",
      "target": "net_p6_t1_s3_l0"
    },
    {
      "source": "net_p6_t1_s3",
      "target": "net_p6_t1_s3_l1"
    },
    {
      "source": "net_p6_t1",
      "target": "net_p6_t1_s4"
    },
    {
      "source": "net_p6_t1_s4",
      "target": "net_p6_t1_s4_l0"
    },
    {
      "source": "net_p6_t1_s4",
      "target": "net_p6_t1_s4_l1"
    },
    {
      "source": "net_p6",
      "target": "net_p6_t2"
    },
    {
      "source": "net_p6_t2",
      "target": "net_p6_t2_s0"
    },
    {
      "source": "net_p6_t2_s0",
      "target": "net_p6_t2_s0_l0"
    },
    {
      "source": "net_p6_t2_s0",
      "target": "net_p6_t2_s0_l1"
    },
    {
      "source": "net_p6_t2",
      "target": "net_p6_t2_s1"
    },
    {
      "source": "net_p6_t2_s1",
      "target": "net_p6_t2_s1_l0"
    },
    {
      "source": "net_p6_t2_s1",
      "target": "net_p6_t2_s1_l1"
    },
    {
      "source": "net_p6_t2",
      "target": "net_p6_t2_s2"
    },
    {
      "source": "net_p6_t2_s2",
      "target": "net_p6_t2_s2_l0"
    },
    {
      "source": "net_p6_t2_s2",
      "target": "net_p6_t2_s2_l1"
    },
    {
      "source": "net_p6_t2",
      "target": "net_p6_t2_s3"
    },
    {
      "source": "net_p6_t2_s3",
      "target": "net_p6_t2_s3_l0"
    },
    {
      "source": "net_p6_t2_s3",
      "target": "net_p6_t2_s3_l1"
    },
    {
      "source": "net_p6_t2",
      "target": "net_p6_t2_s4"
    },
    {
      "source": "net_p6_t2_s4",
      "target": "net_p6_t2_s4_l0"
    },
    {
      "source": "net_p6_t2_s4",
      "target": "net_p6_t2_s4_l1"
    },
    {
      "source": "net_p6",
      "target": "net_p6_t3"
    },
    {
      "source": "net_p6_t3",
      "target": "net_p6_t3_s0"
    },
    {
      "source": "net_p6_t3_s0",
      "target": "net_p6_t3_s0_l0"
    },
    {
      "source": "net_p6_t3_s0",
      "target": "net_p6_t3_s0_l1"
    },
    {
      "source": "net_p6_t3",
      "target": "net_p6_t3_s1"
    },
    {
      "source": "net_p6_t3_s1",
      "target": "net_p6_t3_s1_l0"
    },
    {
      "source": "net_p6_t3_s1",
      "target": "net_p6_t3_s1_l1"
    },
    {
      "source": "net_p6_t3",
      "target": "net_p6_t3_s2"
    },
    {
      "source": "net_p6_t3_s2",
      "target": "net_p6_t3_s2_l0"
    },
    {
      "source": "net_p6_t3_s2",
      "target": "net_p6_t3_s2_l1"
    },
    {
      "source": "net_p6_t3",
      "target": "net_p6_t3_s3"
    },
    {
      "source": "net_p6_t3_s3",
      "target": "net_p6_t3_s3_l0"
    },
    {
      "source": "net_p6_t3_s3",
      "target": "net_p6_t3_s3_l1"
    },
    {
      "source": "net_p6_t3",
      "target": "net_p6_t3_s4"
    },
    {
      "source": "net_p6_t3_s4",
      "target": "net_p6_t3_s4_l0"
    },
    {
      "source": "net_p6_t3_s4",
      "target": "net_p6_t3_s4_l1"
    },
    {
      "source": "net_p6",
      "target": "net_p6_t4"
    },
    {
      "source": "net_p6_t4",
      "target": "net_p6_t4_s0"
    },
    {
      "source": "net_p6_t4_s0",
      "target": "net_p6_t4_s0_l0"
    },
    {
      "source": "net_p6_t4_s0",
      "target": "net_p6_t4_s0_l1"
    },
    {
      "source": "net_p6_t4",
      "target": "net_p6_t4_s1"
    },
    {
      "source": "net_p6_t4_s1",
      "target": "net_p6_t4_s1_l0"
    },
    {
      "source": "net_p6_t4_s1",
      "target": "net_p6_t4_s1_l1"
    },
    {
      "source": "net_p6_t4",
      "target": "net_p6_t4_s2"
    },
    {
      "source": "net_p6_t4_s2",
      "target": "net_p6_t4_s2_l0"
    },
    {
      "source": "net_p6_t4_s2",
      "target": "net_p6_t4_s2_l1"
    },
    {
      "source": "net_p6_t4",
      "target": "net_p6_t4_s3"
    },
    {
      "source": "net_p6_t4_s3",
      "target": "net_p6_t4_s3_l0"
    },
    {
      "source": "net_p6_t4_s3",
      "target": "net_p6_t4_s3_l1"
    },
    {
      "source": "net_p6_t4",
      "target": "net_p6_t4_s4"
    },
    {
      "source": "net_p6_t4_s4",
      "target": "net_p6_t4_s4_l0"
    },
    {
      "source": "net_p6_t4_s4",
      "target": "net_p6_t4_s4_l1"
    },
    {
      "source": "net_p6",
      "target": "net_p6_t5"
    },
    {
      "source": "net_p6_t5",
      "target": "net_p6_t5_s0"
    },
    {
      "source": "net_p6_t5_s0",
      "target": "net_p6_t5_s0_l0"
    },
    {
      "source": "net_p6_t5_s0",
      "target": "net_p6_t5_s0_l1"
    },
    {
      "source": "net_p6_t5",
      "target": "net_p6_t5_s1"
    },
    {
      "source": "net_p6_t5_s1",
      "target": "net_p6_t5_s1_l0"
    },
    {
      "source": "net_p6_t5_s1",
      "target": "net_p6_t5_s1_l1"
    },
    {
      "source": "net_p6_t5",
      "target": "net_p6_t5_s2"
    },
    {
      "source": "net_p6_t5_s2",
      "target": "net_p6_t5_s2_l0"
    },
    {
      "source": "net_p6_t5_s2",
      "target": "net_p6_t5_s2_l1"
    },
    {
      "source": "net_p6_t5",
      "target": "net_p6_t5_s3"
    },
    {
      "source": "net_p6_t5_s3",
      "target": "net_p6_t5_s3_l0"
    },
    {
      "source": "net_p6_t5_s3",
      "target": "net_p6_t5_s3_l1"
    },
    {
      "source": "net_p6_t5",
      "target": "net_p6_t5_s4"
    },
    {
      "source": "net_p6_t5_s4",
      "target": "net_p6_t5_s4_l0"
    },
    {
      "source": "net_p6_t5_s4",
      "target": "net_p6_t5_s4_l1"
    },
    {
      "source": "net_p6",
      "target": "net_p6_t6"
    },
    {
      "source": "net_p6_t6",
      "target": "net_p6_t6_s0"
    },
    {
      "source": "net_p6_t6_s0",
      "target": "net_p6_t6_s0_l0"
    },
    {
      "source": "net_p6_t6_s0",
      "target": "net_p6_t6_s0_l1"
    },
    {
      "source": "net_p6_t6",
      "target": "net_p6_t6_s1"
    },
    {
      "source": "net_p6_t6_s1",
      "target": "net_p6_t6_s1_l0"
    },
    {
      "source": "net_p6_t6_s1",
      "target": "net_p6_t6_s1_l1"
    },
    {
      "source": "net_p6_t6",
      "target": "net_p6_t6_s2"
    },
    {
      "source": "net_p6_t6_s2",
      "target": "net_p6_t6_s2_l0"
    },
    {
      "source": "net_p6_t6_s2",
      "target": "net_p6_t6_s2_l1"
    },
    {
      "source": "net_p6_t6",
      "target": "net_p6_t6_s3"
    },
    {
      "source": "net_p6_t6_s3",
      "target": "net_p6_t6_s3_l0"
    },
    {
      "source": "net_p6_t6_s3",
      "target": "net_p6_t6_s3_l1"
    },
    {
      "source": "net_p6_t6",
      "target": "net_p6_t6_s4"
    },
    {
      "source": "net_p6_t6_s4",
      "target": "net_p6_t6_s4_l0"
    },
    {
      "source": "net_p6_t6_s4",
      "target": "net_p6_t6_s4_l1"
    },
    {
      "source": "net_p7",
      "target": "net_p7_t0"
    },
    {
      "source": "net_p7_t0",
      "target": "net_p7_t0_s0"
    },
    {
      "source": "net_p7_t0_s0",
      "target": "net_p7_t0_s0_l0"
    },
    {
      "source": "net_p7_t0_s0",
      "target": "net_p7_t0_s0_l1"
    },
    {
      "source": "net_p7_t0",
      "target": "net_p7_t0_s1"
    },
    {
      "source": "net_p7_t0_s1",
      "target": "net_p7_t0_s1_l0"
    },
    {
      "source": "net_p7_t0_s1",
      "target": "net_p7_t0_s1_l1"
    },
    {
      "source": "net_p7_t0",
      "target": "net_p7_t0_s2"
    },
    {
      "source": "net_p7_t0_s2",
      "target": "net_p7_t0_s2_l0"
    },
    {
      "source": "net_p7_t0_s2",
      "target": "net_p7_t0_s2_l1"
    },
    {
      "source": "net_p7_t0",
      "target": "net_p7_t0_s3"
    },
    {
      "source": "net_p7_t0_s3",
      "target": "net_p7_t0_s3_l0"
    },
    {
      "source": "net_p7_t0_s3",
      "target": "net_p7_t0_s3_l1"
    },
    {
      "source": "net_p7_t0",
      "target": "net_p7_t0_s4"
    },
    {
      "source": "net_p7_t0_s4",
      "target": "net_p7_t0_s4_l0"
    },
    {
      "source": "net_p7_t0_s4",
      "target": "net_p7_t0_s4_l1"
    },
    {
      "source": "net_p7",
      "target": "net_p7_t1"
    },
    {
      "source": "net_p7_t1",
      "target": "net_p7_t1_s0"
    },
    {
      "source": "net_p7_t1_s0",
      "target": "net_p7_t1_s0_l0"
    },
    {
      "source": "net_p7_t1_s0",
      "target": "net_p7_t1_s0_l1"
    },
    {
      "source": "net_p7_t1",
      "target": "net_p7_t1_s1"
    },
    {
      "source": "net_p7_t1_s1",
      "target": "net_p7_t1_s1_l0"
    },
    {
      "source": "net_p7_t1_s1",
      "target": "net_p7_t1_s1_l1"
    },
    {
      "source": "net_p7_t1",
      "target": "net_p7_t1_s2"
    },
    {
      "source": "net_p7_t1_s2",
      "target": "net_p7_t1_s2_l0"
    },
    {
      "source": "net_p7_t1_s2",
      "target": "net_p7_t1_s2_l1"
    },
    {
      "source": "net_p7_t1",
      "target": "net_p7_t1_s3"
    },
    {
      "source": "net_p7_t1_s3",
      "target": "net_p7_t1_s3_l0"
    },
    {
      "source": "net_p7_t1_s3",
      "target": "net_p7_t1_s3_l1"
    },
    {
      "source": "net_p7_t1",
      "target": "net_p7_t1_s4"
    },
    {
      "source": "net_p7_t1_s4",
      "target": "net_p7_t1_s4_l0"
    },
    {
      "source": "net_p7_t1_s4",
      "target": "net_p7_t1_s4_l1"
    },
    {
      "source": "net_p7",
      "target": "net_p7_t2"
    },
    {
      "source": "net_p7_t2",
      "target": "net_p7_t2_s0"
    },
    {
      "source": "net_p7_t2_s0",
      "target": "net_p7_t2_s0_l0"
    },
    {
      "source": "net_p7_t2_s0",
      "target": "net_p7_t2_s0_l1"
    },
    {
      "source": "net_p7_t2",
      "target": "net_p7_t2_s1"
    },
    {
      "source": "net_p7_t2_s1",
      "target": "net_p7_t2_s1_l0"
    },
    {
      "source": "net_p7_t2_s1",
      "target": "net_p7_t2_s1_l1"
    },
    {
      "source": "net_p7_t2",
      "target": "net_p7_t2_s2"
    },
    {
      "source": "net_p7_t2_s2",
      "target": "net_p7_t2_s2_l0"
    },
    {
      "source": "net_p7_t2_s2",
      "target": "net_p7_t2_s2_l1"
    },
    {
      "source": "net_p7_t2",
      "target": "net_p7_t2_s3"
    },
    {
      "source": "net_p7_t2_s3",
      "target": "net_p7_t2_s3_l0"
    },
    {
      "source": "net_p7_t2_s3",
      "target": "net_p7_t2_s3_l1"
    },
    {
      "source": "net_p7_t2",
      "target": "net_p7_t2_s4"
    },
    {
      "source": "net_p7_t2_s4",
      "target": "net_p7_t2_s4_l0"
    },
    {
      "source": "net_p7_t2_s4",
      "target": "net_p7_t2_s4_l1"
    },
    {
      "source": "net_p7",
      "target": "net_p7_t3"
    },
    {
      "source": "net_p7_t3",
      "target": "net_p7_t3_s0"
    },
    {
      "source": "net_p7_t3_s0",
      "target": "net_p7_t3_s0_l0"
    },
    {
      "source": "net_p7_t3_s0",
      "target": "net_p7_t3_s0_l1"
    },
    {
      "source": "net_p7_t3",
      "target": "net_p7_t3_s1"
    },
    {
      "source": "net_p7_t3_s1",
      "target": "net_p7_t3_s1_l0"
    },
    {
      "source": "net_p7_t3_s1",
      "target": "net_p7_t3_s1_l1"
    },
    {
      "source": "net_p7_t3",
      "target": "net_p7_t3_s2"
    },
    {
      "source": "net_p7_t3_s2",
      "target": "net_p7_t3_s2_l0"
    },
    {
      "source": "net_p7_t3_s2",
      "target": "net_p7_t3_s2_l1"
    },
    {
      "source": "net_p7_t3",
      "target": "net_p7_t3_s3"
    },
    {
      "source": "net_p7_t3_s3",
      "target": "net_p7_t3_s3_l0"
    },
    {
      "source": "net_p7_t3_s3",
      "target": "net_p7_t3_s3_l1"
    },
    {
      "source": "net_p7_t3",
      "target": "net_p7_t3_s4"
    },
    {
      "source": "net_p7_t3_s4",
      "target": "net_p7_t3_s4_l0"
    },
    {
      "source": "net_p7_t3_s4",
      "target": "net_p7_t3_s4_l1"
    },
    {
      "source": "net_p7",
      "target": "net_p7_t4"
    },
    {
      "source": "net_p7_t4",
      "target": "net_p7_t4_s0"
    },
    {
      "source": "net_p7_t4_s0",
      "target": "net_p7_t4_s0_l0"
    },
    {
      "source": "net_p7_t4_s0",
      "target": "net_p7_t4_s0_l1"
    },
    {
      "source": "net_p7_t4",
      "target": "net_p7_t4_s1"
    },
    {
      "source": "net_p7_t4_s1",
      "target": "net_p7_t4_s1_l0"
    },
    {
      "source": "net_p7_t4_s1",
      "target": "net_p7_t4_s1_l1"
    },
    {
      "source": "net_p7_t4",
      "target": "net_p7_t4_s2"
    },
    {
      "source": "net_p7_t4_s2",
      "target": "net_p7_t4_s2_l0"
    },
    {
      "source": "net_p7_t4_s2",
      "target": "net_p7_t4_s2_l1"
    },
    {
      "source": "net_p7_t4",
      "target": "net_p7_t4_s3"
    },
    {
      "source": "net_p7_t4_s3",
      "target": "net_p7_t4_s3_l0"
    },
    {
      "source": "net_p7_t4_s3",
      "target": "net_p7_t4_s3_l1"
    },
    {
      "source": "net_p7_t4",
      "target": "net_p7_t4_s4"
    },
    {
      "source": "net_p7_t4_s4",
      "target": "net_p7_t4_s4_l0"
    },
    {
      "source": "net_p7_t4_s4",
      "target": "net_p7_t4_s4_l1"
    },
    {
      "source": "net_p7",
      "target": "net_p7_t5"
    },
    {
      "source": "net_p7_t5",
      "target": "net_p7_t5_s0"
    },
    {
      "source": "net_p7_t5_s0",
      "target": "net_p7_t5_s0_l0"
    },
    {
      "source": "net_p7_t5_s0",
      "target": "net_p7_t5_s0_l1"
    },
    {
      "source": "net_p7_t5",
      "target": "net_p7_t5_s1"
    },
    {
      "source": "net_p7_t5_s1",
      "target": "net_p7_t5_s1_l0"
    },
    {
      "source": "net_p7_t5_s1",
      "target": "net_p7_t5_s1_l1"
    },
    {
      "source": "net_p7_t5",
      "target": "net_p7_t5_s2"
    },
    {
      "source": "net_p7_t5_s2",
      "target": "net_p7_t5_s2_l0"
    },
    {
      "source": "net_p7_t5_s2",
      "target": "net_p7_t5_s2_l1"
    },
    {
      "source": "net_p7_t5",
      "target": "net_p7_t5_s3"
    },
    {
      "source": "net_p7_t5_s3",
      "target": "net_p7_t5_s3_l0"
    },
    {
      "source": "net_p7_t5_s3",
      "target": "net_p7_t5_s3_l1"
    },
    {
      "source": "net_p7_t5",
      "target": "net_p7_t5_s4"
    },
    {
      "source": "net_p7_t5_s4",
      "target": "net_p7_t5_s4_l0"
    },
    {
      "source": "net_p7_t5_s4",
      "target": "net_p7_t5_s4_l1"
    },
    {
      "source": "net_p7",
      "target": "net_p7_t6"
    },
    {
      "source": "net_p7_t6",
      "target": "net_p7_t6_s0"
    },
    {
      "source": "net_p7_t6_s0",
      "target": "net_p7_t6_s0_l0"
    },
    {
      "source": "net_p7_t6_s0",
      "target": "net_p7_t6_s0_l1"
    },
    {
      "source": "net_p7_t6",
      "target": "net_p7_t6_s1"
    },
    {
      "source": "net_p7_t6_s1",
      "target": "net_p7_t6_s1_l0"
    },
    {
      "source": "net_p7_t6_s1",
      "target": "net_p7_t6_s1_l1"
    },
    {
      "source": "net_p7_t6",
      "target": "net_p7_t6_s2"
    },
    {
      "source": "net_p7_t6_s2",
      "target": "net_p7_t6_s2_l0"
    },
    {
      "source": "net_p7_t6_s2",
      "target": "net_p7_t6_s2_l1"
    },
    {
      "source": "net_p7_t6",
      "target": "net_p7_t6_s3"
    },
    {
      "source": "net_p7_t6_s3",
      "target": "net_p7_t6_s3_l0"
    },
    {
      "source": "net_p7_t6_s3",
      "target": "net_p7_t6_s3_l1"
    },
    {
      "source": "net_p7_t6",
      "target": "net_p7_t6_s4"
    },
    {
      "source": "net_p7_t6_s4",
      "target": "net_p7_t6_s4_l0"
    },
    {
      "source": "net_p7_t6_s4",
      "target": "net_p7_t6_s4_l1"
    }
  ]
};
