import { MindMapData } from "../../services/llmService";

export const EMBEDDED_SYSTEMS_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "embedded_root",
      "label": "Embedded Systems & Real-Time Operating Systems (RTOS) from First Principles",
      "description": "Rigorous first-principles blueprint of ARM Cortex-M microcontrollers, NVIC vector table initialization, SPI/I2C/CAN-FD bus protocols, FreeRTOS priority inheritance mutexes, memory protection units (MPU), and bare-metal linker scripts.",
      "type": "topic"
    },
    {
      "id": "embedded_root_p1",
      "label": "Microcontroller Architecture & Memory Maps",
      "description": "ARM Cortex-M0/M4/M7 cores, Memory-Mapped I/O (MMIO), Flash vs SRAM memory layouts, and Vector table initialization.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t1",
      "label": "ARM Cortex-M Core Architecture & Registers",
      "description": "Core architecture and register organization of 32-bit ARM Cortex-M microcontrollers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t1_s1",
      "label": "Core Register Set (R0-R12, SP, LR, PC, xPSR)",
      "description": "General-purpose and special-purpose CPU registers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t1_s1_d1",
      "label": "General-Purpose Registers (R0-R7 Low, R8-R12 High)",
      "description": "Executing 32-bit arithmetic and logic instructions across R0-R12 registers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t1_s1_d2",
      "label": "Link Register (LR / R14) Subroutine Return Binding",
      "description": "Storing return addresses for subroutines and EXC_RETURN values for interrupt handlers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t1_s2",
      "label": "Dual Stack Pointer Architecture (MSP vs PSP)",
      "description": "Separating Main Stack Pointer (MSP) from Process Stack Pointer (PSP) for OS security.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t1_s2_d1",
      "label": "Main Stack Pointer (MSP) Kernel & Handler Mode",
      "description": "Used automatically during OS kernel execution and interrupt handler processing.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t1_s2_d2",
      "label": "Process Stack Pointer (PSP) User Thread Mode",
      "description": "Isolating un-privileged user task stacks from OS kernel memory.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t1_s3",
      "label": "Program Status Register (xPSR - APSR, IPSR, EPSR)",
      "description": "Combined 32-bit status register tracking arithmetic flags, interrupt numbers, and execution state.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t1_s3_d1",
      "label": "Application PSR (APSR N, Z, C, V Flags)",
      "description": "Tracking Negative, Zero, Carry, and Overflow condition flags.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t1_s3_d2",
      "label": "Interrupt PSR (IPSR Exception Number)",
      "description": "Reading active ISR exception vector numbers currently being processed.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t1_s4",
      "label": "Privilege Levels (Privileged vs Un-privileged Thread Mode)",
      "description": "Hardware security execution modes preventing user code from corrupting hardware.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t1_s4_d1",
      "label": "Privileged Handler Mode",
      "description": "Enforcing privileged mode automatically whenever executing interrupt handlers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t1_s4_d2",
      "label": "Un-privileged Thread Mode Switch via CONTROL Register",
      "description": "Restricting user application task access to sensitive peripherals.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t1_s5",
      "label": "Cortex-M Pipeline Stages & Branch Speculation",
      "description": "3-stage (Cortex-M0/M3/M4) to 6-stage superscalar (Cortex-M7) pipeline architectures.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t1_s5_d1",
      "label": "Fetch-Decode-Execute 3-Stage Pipeline",
      "description": "Executing instructions in 3 basic pipeline stages.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t1_s5_d2",
      "label": "Branch Target Instruction Cache (BTIC) in Cortex-M7",
      "description": "Eliminating branch penalty cycles using branch prediction caches.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t2",
      "label": "Memory-Mapped I/O (MMIO) & Register Manipulation",
      "description": "Accessing hardware peripherals via fixed memory addresses.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t2_s1",
      "label": "Unified 4GB System Bus Address Space Layout",
      "description": "Mapping Flash, SRAM, Peripherals, and Core System Components into single 32-bit address spaces.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t2_s1_d1",
      "label": "Code Region (0x00000000 - 0x1FFFFFFF)",
      "description": "Mapping internal Flash memory and vector tables.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t2_s1_d2",
      "label": "Peripheral Region (0x40000000 - 0x5FFFFFFF)",
      "description": "Mapping memory registers for timers, UART, SPI, and GPIO hardware.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t2_s2",
      "label": "Volatile Qualifier C/C++ Semantics for MMIO Pointers",
      "description": "Preventing compiler optimizations from eliding repeated register reads/writes.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t2_s2_d1",
      "label": "Disabling Register Caching Optimizations",
      "description": "Forcing compilers to issue physical memory load/store instructions on every access.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t2_s2_d2",
      "label": "Preventing Dead Store Elimination on Hardware Flags",
      "description": "Ensuring status register polling loops physically read hardware registers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t2_s3",
      "label": "Bit-Banding Alias Region Mapping (Cortex-M3/M4)",
      "description": "Mapping 1MB peripheral and SRAM regions to 32MB alias regions for atomic single-bit access.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t2_s3_d1",
      "label": "Atomic Bit-Level Modification Formula",
      "description": "Calculating alias addresses (alias_addr = base + (byte_offset * 32) + (bit_num * 4)).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t2_s3_d2",
      "label": "Eliminating Read-Modify-Write Race Conditions",
      "description": "Setting single GPIO bits without acquiring locks or disabling interrupts.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t2_s4",
      "label": "Atomic Read-Modify-Write Register Bitmasking",
      "description": "Manipulating peripheral register bitfields using C bitwise operators.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t2_s4_d1",
      "label": "Setting Bits (REG |= (1U << BIT_NUM))",
      "description": "Setting specific bitfields without disturbing adjacent bits.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t2_s4_d2",
      "label": "Clearing Bits (REG &= ~(1U << BIT_NUM))",
      "description": "Clearing specific bitfields using inverted bitmasks.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t2_s5",
      "label": "CMSIS (Cortex Microcontroller Software Interface Standard)",
      "description": "ARM vendor-neutral hardware abstraction layer for Cortex-M processors.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t2_s5_d1",
      "label": "Standard Peripheral Struct Definitions",
      "description": "Defining C struct memory layouts matching hardware register offsets.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t2_s5_d2",
      "label": "Core Register Access Functions (__enable_irq(), __disable_irq())",
      "description": "Providing intrinsic assembly wrappers for core CPU configuration.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t3",
      "label": "Embedded Memory Architecture (Flash vs SRAM vs CCM)",
      "description": "Physical storage technologies embedded on microcontroller silicon chips.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t3_s1",
      "label": "Embedded NOR Flash Memory Characteristics",
      "description": "Non-volatile program memory holding binary code and constant data.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t3_s1_d1",
      "label": "Flash Read Wait States (LATENCY Settings)",
      "description": "Inserting Flash wait states when CPU clock frequencies exceed Flash access speeds.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t3_s1_d2",
      "label": "Sector Erase & Page Write Cycles",
      "description": "Erasing Flash sectors to 0xFF before writing binary data.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t3_s2",
      "label": "Internal SRAM (Static RAM) Architecture",
      "description": "Volatile high-speed RAM holding application variables, stack, and heap.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t3_s2_d1",
      "label": "Zero Wait State Access at Full CPU Clock",
      "description": "Accessing SRAM in single clock cycles without CPU wait states.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t3_s2_d2",
      "label": "SRAM1 vs SRAM2 Multi-Bus Matrix Partitioning",
      "description": "Distributing SRAM blocks across independent bus matrices to enable simultaneous CPU and DMA access.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t3_s3",
      "label": "Core Coupled Memory (CCM / Tightly-Coupled Memory TCM)",
      "description": "Dedicated RAM linked directly to CPU instruction/data buses bypassing main bus matrices.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t3_s3_d1",
      "label": "Instruction TCM (ITCM) & Data TCM (DTCM)",
      "description": "Executing critical real-time ISR routines out of ITCM with zero jitter.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t3_s3_d2",
      "label": "Bypassing DMA Access Limitations",
      "description": "Restricting CCM access to CPU cores (inaccessible by standard DMA controllers).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t3_s4",
      "label": "Instruction Cache (I-Cache) & Data Cache (D-Cache) in Cortex-M7",
      "description": "On-chip L1 cache memories accelerating high-speed Cortex-M7 execution.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t3_s4_d1",
      "label": "Cache Invalidation & Clean Maintenance",
      "description": "Cleaning and invalidating D-cache lines before DMA transfers to prevent memory incoherence.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t3_s4_d2",
      "label": "Non-Cacheable Memory MPU Regions",
      "description": "Configuring shared DMA buffers as non-cacheable to avoid coherence bugs.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t3_s5",
      "label": "Direct Memory Access (DMA) Controller Architecture",
      "description": "Hardware engine transferring data between peripherals and memory without CPU intervention.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t3_s5_d1",
      "label": "Circular Buffer DMA Mode",
      "description": "Streaming continuous ADC or UART data into circular RAM buffers automatically.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t3_s5_d2",
      "label": "Double-Buffered DMA Interrupt Triggers (Half-Transfer & Transfer-Complete)",
      "description": "Processing first half of buffer while DMA writes into second half.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t4",
      "label": "Bootloader & Vector Table Initialization",
      "description": "Hardware startup sequence executing upon system reset.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t4_s1",
      "label": "Vector Table Structure & Placement (Address 0x00000000)",
      "description": "Array of 32-bit exception and interrupt handler function pointers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t4_s1_d1",
      "label": "Entry 0: Initial Main Stack Pointer Value (MSP)",
      "description": "Hardware loads top of stack address into MSP automatically at reset.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t4_s1_d2",
      "label": "Entry 1: Reset Handler Function Pointer Address",
      "description": "Hardware jumps to Reset_Handler function pointer to begin execution.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t4_s2",
      "label": "Reset_Handler Assembly Execution Sequence",
      "description": "Initial assembly code executing immediately upon microcontroller power-on.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t4_s2_d1",
      "label": "Copying .data Section from Flash to SRAM",
      "description": "Initializing global initialized variables by copying values from Flash to RAM.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t4_s2_d2",
      "label": "Zero-Initializing .bss Section in SRAM",
      "description": "Zeroing out un-initialized global variables in RAM.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t4_s3",
      "label": "SystemInit() Clock Tree Initialization",
      "description": "Configuring Phase-Locked Loops (PLL) to boost internal clocks to maximum operating frequencies.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t4_s3_d1",
      "label": "HSE (High-Speed External Crystal) Selection",
      "description": "Switching from internal RC oscillator (HSI) to precise external quartz crystal.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t4_s3_d2",
      "label": "PLL Multiplier & Divider Configuration",
      "description": "Multiplying crystal frequencies to achieve target system clock (e.g. 168MHz).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t4_s4",
      "label": "Vector Table Relocation (VTOR Register)",
      "description": "Relocating vector table address dynamically to SRAM or secondary Flash banks.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t4_s4_d1",
      "label": "VTOR (Vector Table Offset Register) Configuration",
      "description": "Updating VTOR to point to custom application vector tables.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t4_s4_d2",
      "label": "In-Field Firmware Update (IAP Bootloaders)",
      "description": "Jumping from custom bootloaders to user application binaries in upper Flash memory.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t4_s5",
      "label": "C++ Static Global Constructor Calls (__libc_init_array)",
      "description": "Executing C++ static object constructors prior to entering main().",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t4_s5_d1",
      "label": "Traversing .init_array Function Pointer Arrays",
      "description": "Calling all C++ static object constructor functions sequentially.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t4_s5_d2",
      "label": "Final Jump to main() Function Entry Point",
      "description": "Entering application main() after hardware and runtime environment setup is complete.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t5",
      "label": "Microcontroller Architecture & Memory Maps Topic 5",
      "description": "Detailed first-principles mechanics for Microcontroller Architecture & Memory Maps topic 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t5_s1",
      "label": "Microcontroller Architecture & Memory Maps Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Microcontroller Architecture & Memory Maps Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t5_s1_d1",
      "label": "Microcontroller Architecture & Memory Maps Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Microcontroller Architecture & Memory Maps Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t5_s1_d2",
      "label": "Microcontroller Architecture & Memory Maps Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Microcontroller Architecture & Memory Maps Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t5_s2",
      "label": "Microcontroller Architecture & Memory Maps Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Microcontroller Architecture & Memory Maps Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t5_s2_d1",
      "label": "Microcontroller Architecture & Memory Maps Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Microcontroller Architecture & Memory Maps Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t5_s2_d2",
      "label": "Microcontroller Architecture & Memory Maps Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Microcontroller Architecture & Memory Maps Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t5_s3",
      "label": "Microcontroller Architecture & Memory Maps Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Microcontroller Architecture & Memory Maps Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t5_s3_d1",
      "label": "Microcontroller Architecture & Memory Maps Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Microcontroller Architecture & Memory Maps Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t5_s3_d2",
      "label": "Microcontroller Architecture & Memory Maps Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Microcontroller Architecture & Memory Maps Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t5_s4",
      "label": "Microcontroller Architecture & Memory Maps Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Microcontroller Architecture & Memory Maps Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t5_s4_d1",
      "label": "Microcontroller Architecture & Memory Maps Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Microcontroller Architecture & Memory Maps Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t5_s4_d2",
      "label": "Microcontroller Architecture & Memory Maps Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Microcontroller Architecture & Memory Maps Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t5_s5",
      "label": "Microcontroller Architecture & Memory Maps Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Microcontroller Architecture & Memory Maps Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t5_s5_d1",
      "label": "Microcontroller Architecture & Memory Maps Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Microcontroller Architecture & Memory Maps Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t5_s5_d2",
      "label": "Microcontroller Architecture & Memory Maps Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Microcontroller Architecture & Memory Maps Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t6",
      "label": "Microcontroller Architecture & Memory Maps Topic 6",
      "description": "Detailed first-principles mechanics for Microcontroller Architecture & Memory Maps topic 6.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t6_s1",
      "label": "Microcontroller Architecture & Memory Maps Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Microcontroller Architecture & Memory Maps Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t6_s1_d1",
      "label": "Microcontroller Architecture & Memory Maps Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Microcontroller Architecture & Memory Maps Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t6_s1_d2",
      "label": "Microcontroller Architecture & Memory Maps Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Microcontroller Architecture & Memory Maps Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t6_s2",
      "label": "Microcontroller Architecture & Memory Maps Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Microcontroller Architecture & Memory Maps Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t6_s2_d1",
      "label": "Microcontroller Architecture & Memory Maps Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Microcontroller Architecture & Memory Maps Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t6_s2_d2",
      "label": "Microcontroller Architecture & Memory Maps Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Microcontroller Architecture & Memory Maps Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t6_s3",
      "label": "Microcontroller Architecture & Memory Maps Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Microcontroller Architecture & Memory Maps Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t6_s3_d1",
      "label": "Microcontroller Architecture & Memory Maps Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Microcontroller Architecture & Memory Maps Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t6_s3_d2",
      "label": "Microcontroller Architecture & Memory Maps Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Microcontroller Architecture & Memory Maps Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t6_s4",
      "label": "Microcontroller Architecture & Memory Maps Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Microcontroller Architecture & Memory Maps Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t6_s4_d1",
      "label": "Microcontroller Architecture & Memory Maps Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Microcontroller Architecture & Memory Maps Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t6_s4_d2",
      "label": "Microcontroller Architecture & Memory Maps Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Microcontroller Architecture & Memory Maps Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t6_s5",
      "label": "Microcontroller Architecture & Memory Maps Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Microcontroller Architecture & Memory Maps Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t6_s5_d1",
      "label": "Microcontroller Architecture & Memory Maps Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Microcontroller Architecture & Memory Maps Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p1_t6_s5_d2",
      "label": "Microcontroller Architecture & Memory Maps Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Microcontroller Architecture & Memory Maps Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2",
      "label": "Interrupt Handling & Hardware Timers",
      "description": "Nested Vectored Interrupt Controller (NVIC), Interrupt Service Routines (ISR), SysTick timer, and Hardware Timers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t1",
      "label": "Nested Vectored Interrupt Controller (NVIC)",
      "description": "Hardware interrupt controller managing priorities, preemption, and vectoring on Cortex-M.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t1_s1",
      "label": "Hardware Vectoring & Zero-Overhead Interrupt Entry",
      "description": "Hardware mechanism jumping directly to ISR addresses without software lookup routines.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t1_s1_d1",
      "label": "Direct ISR Vector Address Fetch",
      "description": "Fetching target ISR address directly from vector table in 12 clock cycles.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t1_s1_d2",
      "label": "Automatic Hardware Context Stacking",
      "description": "Pushing caller registers (R0-R3, R12, LR, PC, xPSR) to active stack automatically.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t1_s2",
      "label": "Preemption Priority vs Sub-Priority Grouping",
      "description": "Configuring 8-bit interrupt priority fields into preemption and sub-priority levels.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t1_s2_d1",
      "label": "Preemption Priority (Higher Priority Interrupts Nesting)",
      "description": "Allowing higher preemption priority ISRs to interrupt running lower priority ISRs.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t1_s2_d2",
      "label": "Sub-Priority Disambiguation",
      "description": "Determining execution order when two pending interrupts share identical preemption priorities.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t1_s3",
      "label": "Tail-Chaining Optimization (6-Cycle ISR Transitions)",
      "description": "Hardware optimization executing consecutive pending ISRs without popping and re-stacking registers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t1_s3_d1",
      "label": "Bypassing Stack Un-winding and Re-stacking",
      "description": "Transitioning between pending ISRs in 6 clock cycles instead of 24 cycles.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t1_s3_d2",
      "label": "Maximizing High-Frequency Interrupt Throughput",
      "description": "Reducing CPU overhead during heavy interrupt bursts.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t1_s4",
      "label": "Late-Arriving Interrupt Optimization",
      "description": "Hardware optimization switching to higher-priority interrupts that arrive during context stacking.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t1_s4_d1",
      "label": "Aborting Low-Priority Vector Fetch",
      "description": "Swapping to higher-priority ISR immediately without wasting stacking cycles.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t1_s4_d2",
      "label": "Minimizing High-Priority Interrupt Latency",
      "description": "Guaranteeing minimum response time for safety-critical interrupts.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t1_s5",
      "label": "Interrupt Masking Registers (PRIMASK, BASEPRI, FAULTMASK)",
      "description": "Disabling interrupts selectively for critical sections.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t1_s5_d1",
      "label": "PRIMASK Global Interrupt Disable (__disable_irq())",
      "description": "Disabling all interrupts except NMI and HardFault.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t1_s5_d2",
      "label": "BASEPRI Priority Threshold Masking",
      "description": "Disabling interrupts with priorities lower than specific BASEPRI values.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t2",
      "label": "Interrupt Service Routine (ISR) Best Practices",
      "description": "Rules for writing deterministic high-speed interrupt service routines.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t2_s1",
      "label": "Minimal Execution Time Principle",
      "description": "Executing minimal essential work inside ISRs before returning.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t2_s1_d1",
      "label": "Offloading Heavy Computation to Deferred Tasks",
      "description": "Clearing interrupt flags and signaling background RTOS tasks to process data.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t2_s1_d2",
      "label": "Avoiding Blocking Operations Inside ISRs",
      "description": "Never executing busy-wait loops, delay functions, or blocking I/O calls inside ISRs.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t2_s2",
      "label": "EXC_RETURN Magic Values & Stacking Un-winding",
      "description": "Special values written to Link Register (LR) informing hardware how to exit ISRs.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t2_s2_d1",
      "label": "EXC_RETURN Values (0xFFFFFFF9 = Return to MSP, 0xFFFFFFFD = Return to PSP)",
      "description": "Triggering hardware stack un-stacking sequence upon returning from ISR.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t2_s2_d2",
      "label": "Restoring CPU Registers Automatically",
      "description": "Popping saved registers (R0-R3, PC, etc.) off the stack automatically.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t2_s3",
      "label": "Shared Data Race Conditions & Volatile Atomic Guards",
      "description": "Protecting variables shared between ISRs and main thread loops.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t2_s3_d1",
      "label": "Volatile Keyword Application on ISR Variables",
      "description": "Forcing main thread loops to re-read variables modified inside ISRs.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t2_s3_d2",
      "label": "Atomic Access & Critical Section Protection",
      "description": "Disabling interrupts temporarily when main thread reads multi-byte variables updated by ISRs.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t2_s4",
      "label": "Re-entrant Interrupt Safe Functions (ISR-Safe APIs)",
      "description": "Calling RTOS functions safely from interrupt contexts.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t2_s4_d1",
      "label": "FreeRTOS FromISR Function Variants (xQueueSendFromISR)",
      "description": "Using specialized non-blocking RTOS functions designed for ISR use.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t2_s4_d2",
      "label": "Yield-From-ISR Flag Checking (portYIELD_FROM_ISR())",
      "description": "Requesting context switch upon ISR exit if high-priority tasks were unblocked.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t2_s5",
      "label": "Spurious Interrupts & Un-Handled Exception Traps",
      "description": "Catching un-expected hardware interrupts safely.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t2_s5_d1",
      "label": "Default_Handler Infinite Loop Traps",
      "description": "Catching un-handled interrupts in default infinite loop handlers for debugging.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t2_s5_d2",
      "label": "Clearing Interrupt Flags Promptly",
      "description": "Clearing peripheral interrupt pending flags inside ISRs to prevent infinite re-triggering.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t3",
      "label": "SysTick System Timer & Hardware Timers",
      "description": "Core 24-bit system tick timer and general-purpose hardware timer peripherals.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t3_s1",
      "label": "Cortex-M SysTick 24-Bit Down-Counter Timer",
      "description": "Standardized 24-bit down-counter dedicated to generating RTOS system tick interrupts.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t3_s1_d1",
      "label": "Reload Value Calculation (RELOAD = (SystemClock / TickRate) - 1)",
      "description": "Setting reload register to fire interrupts at 1000Hz (1ms intervals).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t3_s1_d2",
      "label": "SysTick_Handler RTOS Tick Increment",
      "description": "Incrementing RTOS tick counter and triggering scheduler evaluation every millisecond.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t3_s2",
      "label": "General-Purpose Hardware Timers (TIMx Peripherals)",
      "description": "16-bit and 32-bit hardware timers for precise event timing and waveform generation.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t3_s2_d1",
      "label": "Prescaler (PSC) & Auto-Reload (ARR) Frequency Math",
      "description": "Calculating timer frequency (f = SystemClock / ((PSC + 1) * (ARR + 1))).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t3_s2_d2",
      "label": "Up-Counting, Down-Counting & Center-Aligned Modes",
      "description": "Configuring counter direction modes for specialized timing tasks.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t3_s3",
      "label": "Input Capture Mode & Pulse Width Measurement",
      "description": "Capturing exact timer counter values upon external GPIO signal transitions.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t3_s3_d1",
      "label": "Hardware Edge Detection (Rising / Falling Edges)",
      "description": "Latching timer counter values instantly into capture registers upon edge detection.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t3_s3_d2",
      "label": "Sub-Microsecond Pulse Width & Frequency Measurement",
      "description": "Measuring sensor signal frequencies without CPU polling overhead.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t3_s4",
      "label": "Output Compare & Pulse-Width Modulation (PWM) Generation",
      "description": "Generating continuous square waves with configurable duty cycles.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t3_s4_d1",
      "label": "Duty Cycle Ratio (Duty = CCR / ARR)",
      "description": "Adjusting Capture Compare Register (CCR) to control high-signal pulse width.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t3_s4_d2",
      "label": "Motor Speed & LED Brightness Control Applications",
      "description": "Generating smooth PWM signals to drive motor controllers and dimmable LEDs.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t3_s5",
      "label": "Advanced Control Timers (Complementary Outputs & Dead-Time Insertion)",
      "description": "Specialized timers for driving H-bridge power electronics and 3-phase BLDC motors.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t3_s5_d1",
      "label": "Complementary High/Low Side PWM Outputs",
      "description": "Generating inverted PWM signals for driving push-pull MOSFET pairs.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t3_s5_d2",
      "label": "Hardware Dead-Time Generator",
      "description": "Inserting nanosecond delay gaps between high and low side switches to prevent shoot-through short circuits.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t4",
      "label": "Watchdog Timers (IWDG & WWDG)",
      "description": "Hardware safety monitors resetting microcontrollers if software hangs or enters infinite loops.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t4_s1",
      "label": "Independent Watchdog (IWDG - Internal RC Oscillator)",
      "description": "Hardware timer clocked by isolated internal Low-Speed RC oscillator (LSI ~32kHz).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t4_s1_d1",
      "label": "Immunity to Main Clock Failures",
      "description": "Continuing down-counting even if main crystal oscillator stops functioning.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t4_s1_d2",
      "label": "Watchdog Refresh \"Kicking\" Sequence",
      "description": "Writing key values (0xAAAA) to key register periodically to prevent reset.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t4_s2",
      "label": "Window Watchdog (WWDG - Upper & Lower Time Bounds)",
      "description": "Watchdog timer requiring software refreshes strictly within specific time windows.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t4_s2_d1",
      "label": "Too-Early Refresh Reset Trigger",
      "description": "Resetting CPU if software kicks watchdog before counter falls below upper window limit.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t4_s2_d2",
      "label": "Detecting Runaway Code & Task Execution Anomalies",
      "description": "Catching software bugs executing loops too quickly or skipping execution sequences.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t4_s3",
      "label": "Watchdog Reset Reason Identification",
      "description": "Reading system reset flags upon startup to detect watchdog resets.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t4_s3_d1",
      "label": "Reset Status Register (RCC_CSR) Auditing",
      "description": "Checking whether previous boot was caused by power-on, pin reset, or IWDG reset.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t4_s3_d2",
      "label": "Logging Watchdog Failures to Flash",
      "description": "Saving diagnostic crash logs to non-volatile memory before re-initializing software.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t4_s4",
      "label": "Multi-Task Watchdog Monitoring Architecture",
      "description": "Structuring watchdog refreshes in multi-task RTOS applications.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t4_s4_d1",
      "label": "Task Health Flag Bitmask Aggregation",
      "description": "Requiring all RTOS tasks to set health flags before dedicated watchdog task kicks hardware.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t4_s4_d2",
      "label": "Detecting Single-Task Deadlocks",
      "description": "Resetting system if single task hangs while other tasks continue running.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t4_s5",
      "label": "Debugging Watchdog Invalidation (Freeze in Debug Mode)",
      "description": "Pausing watchdog timers automatically when CPU hits IDE breakpoints.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t4_s5_d1",
      "label": "DBGMCU Peripheral Freeze Configuration",
      "description": "Stopping IWDG counter while CPU is halted in IDE debugger.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t4_s5_d2",
      "label": "Preventing Spurious Watchdog Resets During Step-Debugging",
      "description": "Allowing developers to debug code without watchdog resets.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t5",
      "label": "Interrupt Handling & Hardware Timers Topic 5",
      "description": "Detailed first-principles mechanics for Interrupt Handling & Hardware Timers topic 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t5_s1",
      "label": "Interrupt Handling & Hardware Timers Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Interrupt Handling & Hardware Timers Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t5_s1_d1",
      "label": "Interrupt Handling & Hardware Timers Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Interrupt Handling & Hardware Timers Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t5_s1_d2",
      "label": "Interrupt Handling & Hardware Timers Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Interrupt Handling & Hardware Timers Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t5_s2",
      "label": "Interrupt Handling & Hardware Timers Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Interrupt Handling & Hardware Timers Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t5_s2_d1",
      "label": "Interrupt Handling & Hardware Timers Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Interrupt Handling & Hardware Timers Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t5_s2_d2",
      "label": "Interrupt Handling & Hardware Timers Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Interrupt Handling & Hardware Timers Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t5_s3",
      "label": "Interrupt Handling & Hardware Timers Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Interrupt Handling & Hardware Timers Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t5_s3_d1",
      "label": "Interrupt Handling & Hardware Timers Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Interrupt Handling & Hardware Timers Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t5_s3_d2",
      "label": "Interrupt Handling & Hardware Timers Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Interrupt Handling & Hardware Timers Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t5_s4",
      "label": "Interrupt Handling & Hardware Timers Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Interrupt Handling & Hardware Timers Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t5_s4_d1",
      "label": "Interrupt Handling & Hardware Timers Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Interrupt Handling & Hardware Timers Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t5_s4_d2",
      "label": "Interrupt Handling & Hardware Timers Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Interrupt Handling & Hardware Timers Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t5_s5",
      "label": "Interrupt Handling & Hardware Timers Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Interrupt Handling & Hardware Timers Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t5_s5_d1",
      "label": "Interrupt Handling & Hardware Timers Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Interrupt Handling & Hardware Timers Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t5_s5_d2",
      "label": "Interrupt Handling & Hardware Timers Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Interrupt Handling & Hardware Timers Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t6",
      "label": "Interrupt Handling & Hardware Timers Topic 6",
      "description": "Detailed first-principles mechanics for Interrupt Handling & Hardware Timers topic 6.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t6_s1",
      "label": "Interrupt Handling & Hardware Timers Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Interrupt Handling & Hardware Timers Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t6_s1_d1",
      "label": "Interrupt Handling & Hardware Timers Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Interrupt Handling & Hardware Timers Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t6_s1_d2",
      "label": "Interrupt Handling & Hardware Timers Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Interrupt Handling & Hardware Timers Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t6_s2",
      "label": "Interrupt Handling & Hardware Timers Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Interrupt Handling & Hardware Timers Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t6_s2_d1",
      "label": "Interrupt Handling & Hardware Timers Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Interrupt Handling & Hardware Timers Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t6_s2_d2",
      "label": "Interrupt Handling & Hardware Timers Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Interrupt Handling & Hardware Timers Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t6_s3",
      "label": "Interrupt Handling & Hardware Timers Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Interrupt Handling & Hardware Timers Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t6_s3_d1",
      "label": "Interrupt Handling & Hardware Timers Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Interrupt Handling & Hardware Timers Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t6_s3_d2",
      "label": "Interrupt Handling & Hardware Timers Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Interrupt Handling & Hardware Timers Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t6_s4",
      "label": "Interrupt Handling & Hardware Timers Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Interrupt Handling & Hardware Timers Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t6_s4_d1",
      "label": "Interrupt Handling & Hardware Timers Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Interrupt Handling & Hardware Timers Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t6_s4_d2",
      "label": "Interrupt Handling & Hardware Timers Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Interrupt Handling & Hardware Timers Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t6_s5",
      "label": "Interrupt Handling & Hardware Timers Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Interrupt Handling & Hardware Timers Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t6_s5_d1",
      "label": "Interrupt Handling & Hardware Timers Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Interrupt Handling & Hardware Timers Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p2_t6_s5_d2",
      "label": "Interrupt Handling & Hardware Timers Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Interrupt Handling & Hardware Timers Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3",
      "label": "Peripherals & Communication Bus Protocols",
      "description": "SPI bus 4-wire, I2C 2-wire multi-master, UART/USART asynchronous serial, and CAN bus Automotive 2.0B / CAN-FD.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t1",
      "label": "UART / USART Asynchronous Serial Protocol",
      "description": "Universal Asynchronous Receiver-Transmitter full-duplex point-to-point serial protocol.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t1_s1",
      "label": "UART Frame Format (Start Bit, Data Bits, Parity, Stop Bits)",
      "description": "Asynchronous serial data framing structure.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t1_s1_d1",
      "label": "Start Bit Low Transition (1 Space Bit)",
      "description": "Signaling incoming byte transmission to receiver sampling clocks.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t1_s1_d2",
      "label": "Data Bits (8/9 Bits) & Parity (Even, Odd, None)",
      "description": "Transmitting LSB-first data bits with optional error-checking parity.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t1_s1_d3",
      "label": "Stop Bits (1, 1.5, 2 Mark Bits)",
      "description": "High signal line rest period allowing clock synchronization recovery.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t1_s2",
      "label": "Baud Rate Generator Fractional Divider Math",
      "description": "Configuring USART Baud Rate Register (USART_BRR) to match target baud rates.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t1_s2_d1",
      "label": "Baud Rate Formula (Baud = PeripheralClock / (16 * USARTDIV))",
      "description": "Calculating integer and fractional clock division values.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t1_s2_d2",
      "label": "Baud Rate Error Percentage Limits (< 2.5% Max Error)",
      "description": "Keeping clock frequency deviation under 2.5% to prevent framing errors.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t1_s3",
      "label": "Hardware Flow Control (RTS / CTS Handshaking)",
      "description": "Preventing receiver buffer overflows using physical hardware control lines.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t1_s3_d1",
      "label": "Ready to Send (RTS) Output Line",
      "description": "Asserting RTS low to signal sender that local FIFO buffer has space.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t1_s3_d2",
      "label": "Clear to Send (CTS) Input Line",
      "description": "Pausing transmission when remote receiver de-asserts CTS line.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t1_s4",
      "label": "UART Error Conditions (Framing, Overrun, Parity, Noise Errors)",
      "description": "Handling hardware UART status register error flags.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t1_s4_d1",
      "label": "Overrun Error (ORE - New Byte Received Before Reading Old Byte)",
      "description": "Handling data loss caused by slow CPU read loops.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t1_s4_d2",
      "label": "Framing Error (FE - Invalid Stop Bit Level)",
      "description": "Detecting baud rate mismatches or noisy signal lines.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t1_s5",
      "label": "DMA-Driven Circular Idle-Line UART Receiver",
      "description": "High-efficiency UART receiver using DMA and Idle-Line Detection interrupts.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t1_s5_d1",
      "label": "Idle Line Interrupt (IDLE Flag)",
      "description": "Triggering interrupt when UART line becomes quiet after packet burst.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t1_s5_d2",
      "label": "Zero CPU Copy Overhead",
      "description": "Reading variable-length packet bursts directly out of circular DMA RAM buffers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t2",
      "label": "SPI (Serial Peripheral Interface) Master/Slave Bus",
      "description": "High-speed synchronous 4-wire full-duplex serial bus protocol.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t2_s1",
      "label": "4-Wire Physical Line Signaling (SCK, MOSI, MISO, CS/SS)",
      "description": "Synchronous bus interface connecting master microcontrollers to peripheral sensors/displays.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t2_s1_d1",
      "label": "Master Out Slave In (MOSI) & Master In Slave Out (MISO)",
      "description": "Dedicated full-duplex data lines transmitting data simultaneously.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t2_s1_d2",
      "label": "Chip Select (CS / SS) Active-Low Line",
      "description": "Asserting CS low to select specific peripheral slave targets.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t2_s2",
      "label": "SPI Clock Modes (CPOL & CPHA Configurations)",
      "description": "Four SPI clock modes defining clock polarity and sampling phase.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t2_s2_d1",
      "label": "Clock Polarity (CPOL = 0 Idle Low, CPOL = 1 Idle High)",
      "description": "Setting idle state voltage level of Serial Clock (SCK).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t2_s2_d2",
      "label": "Clock Phase (CPHA = 0 Sample First Edge, CPHA = 1 Sample Second Edge)",
      "description": "Setting clock edge transition where data is latched.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t2_s3",
      "label": "High Speed Transfers (50+ MHz SCK Speeds)",
      "description": "Achieving high data transfer rates for flash memory and LCD displays.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t2_s3_d1",
      "label": "Master Clock Prescaler Configuration",
      "description": "Dividing peripheral clock to match maximum slave frequency.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t2_s3_d2",
      "label": "Full-Duplex Shift Register Exchange",
      "description": "Shifting 1 bit out on MOSI while shifting 1 bit in on MISO per clock cycle.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t2_s4",
      "label": "Multi-Slave Topologies (Independent CS vs Daisy-Chained)",
      "description": "Architectural patterns for connecting multiple SPI slave devices.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t2_s4_d1",
      "label": "Independent CS Star Topology",
      "description": "Using dedicated GPIO Chip Select lines for every peripheral device.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t2_s4_d2",
      "label": "Daisy-Chain Shift Register Topology",
      "description": "Wiring MISO of device N to MOSI of device N+1 to share single CS line.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t2_s5",
      "label": "Quad-SPI (QSPI) & Octal-SPI External Flash Interfacing",
      "description": "Multi-line SPI variants accelerating external Flash memory access.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t2_s5_d1",
      "label": "4-Bit Data Bus (IO0, IO1, IO2, IO3) Parallel Transfers",
      "description": "Transmitting 4 bits per clock cycle to quadruple memory bandwidth.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t2_s5_d2",
      "label": "Memory-Mapped Executive Mode (XIP - Execute-in-Place)",
      "description": "Mapping external QSPI Flash into CPU address space for direct code execution.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t3",
      "label": "I2C (Inter-Integrated Circuit) 2-Wire Bus Protocol",
      "description": "Synchronous multi-master 2-wire open-drain serial bus protocol.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t3_s1",
      "label": "Open-Drain Line Architecture & Pull-Up Resistor Calculation",
      "description": "Physical SCL and SDA lines requiring external pull-up resistors.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t3_s1_d1",
      "label": "Open-Drain High-Z State",
      "description": "Devices driving lines low (GND) or floating high (VCC via pull-up resistor).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t3_s1_d2",
      "label": "Pull-Up Resistor Sizing Math (R_pullup = t_rise / (0.8473 * C_bus))",
      "description": "Calculating resistor values (1.8k - 10k) based on bus capacitance and target speed.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t3_s2",
      "label": "I2C Start, Stop & Repeated Start Framing",
      "description": "Bus condition states defined by SDA transitions while SCL remains High.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t3_s2_d1",
      "label": "START Condition (SDA High-to-Low while SCL High)",
      "description": "Initiating bus transaction ownership.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t3_s2_d2",
      "label": "STOP Condition (SDA Low-to-High while SCL High)",
      "description": "Releasing bus ownership back to idle state.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t3_s3",
      "label": "7-Bit / 10-Bit Slave Addressing & ACK/NACK Bit",
      "description": "Addressing target peripherals and acknowledging byte transfers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t3_s3_d1",
      "label": "7-Bit Address + 1-Bit Read/Write Flag Byte",
      "description": "Transmitting target address followed by R/W bit (0 = Write, 1 = Read).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t3_s3_d2",
      "label": "ACK / NACK Bit (9th Clock Cycle Pull-Down)",
      "description": "Receiver pulling SDA low during 9th clock cycle to confirm byte reception.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t3_s4",
      "label": "I2C Clock Stretching & Multi-Master Bus Arbitration",
      "description": "Advanced I2C features handling slow slaves and multiple masters.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t3_s4_d1",
      "label": "Slave Clock Stretching (Holding SCL Low)",
      "description": "Slow slaves holding SCL line low to pause master clock while processing.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t3_s4_d2",
      "label": "Multi-Master Non-Destructive Arbitration",
      "description": "Masters monitoring SDA line; if master transmits High but senses Low, it loses arbitration gracefully.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t3_s5",
      "label": "I2C Speed Modes (Standard 100kHz, Fast 400kHz, Fast-Plus 1MHz)",
      "description": "Standardized bus frequency operational tiers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t3_s5_d1",
      "label": "Rise Time Limits (300ns Max Rise Time in Fast Mode)",
      "description": "Ensuring bus capacitance does not cause signal distortion at 400kHz.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t3_s5_d2",
      "label": "Hardware I2C Glitch Filter Configuration",
      "description": "Enabling digital noise filters on SCL/SDA inputs to reject spikes.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t4",
      "label": "CAN Bus (Controller Area Network) & CAN-FD",
      "description": "Robust differential 2-wire multi-master automotive and industrial communication bus.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t4_s1",
      "label": "Differential Signal Transmission (CAN_H & CAN_L Lines)",
      "description": "Transmitting signals across twisted-pair wires for extreme noise immunity.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t4_s1_d1",
      "label": "Recessive State (Logical 1: CAN_H = 2.5V, CAN_L = 2.5V, V_diff = 0V)",
      "description": "Bus lines idle at equal voltage.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t4_s1_d2",
      "label": "Dominant State (Logical 0: CAN_H = 3.5V, CAN_L = 1.5V, V_diff = 2.0V)",
      "description": "Transceiver driving differential voltage across bus lines.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t4_s1_d3",
      "label": "120-Ohm Termination Resistors",
      "description": "Placing 120-ohm resistors at extreme ends of bus wires to prevent signal reflection.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t4_s2",
      "label": "CAN 2.0B Frame Format (11-Bit Standard vs 29-Bit Extended ID)",
      "description": "Message frame structure containing identifier, control bits, payload, and CRC.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t4_s2_d1",
      "label": "Message Identifier & Priority Architecture",
      "description": "Assigning message IDs where lower numerical value represents higher message priority.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t4_s2_d2",
      "label": "0-to-8 Byte Data Payload & 15-Bit CRC",
      "description": "Carrying up to 8 bytes of data verified by hardware CRC.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t4_s3",
      "label": "Non-Destructive Bitwise Arbitration",
      "description": "Resolving simultaneous transmissions without losing message data.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t4_s3_d1",
      "label": "Dominant Bit Overwrites Recessive Bit",
      "description": "Dominant 0 bits overwrite recessive 1 bits on the bus.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t4_s3_d2",
      "label": "Graceful Transmission Withdrawal",
      "description": "Nodes transmitting recessive 1 but sensing dominant 0 stop transmitting immediately, allowing higher-priority message to pass undamaged.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t4_s4",
      "label": "CAN Fault Confinement (Error Counters & Bus-Off State)",
      "description": "Hardware mechanisms isolating faulty nodes to protect bus integrity.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t4_s4_d1",
      "label": "Transmit & Receive Error Counters (TEC & REC)",
      "description": "Incrementing error counters when CRC or bit errors occur.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t4_s4_d2",
      "label": "Error Active -> Error Passive -> Bus-Off Transitions",
      "description": "Disconnecting nodes from bus physically if TEC exceeds 255 errors.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t4_s5",
      "label": "CAN-FD (Flexible Data-Rate) Enhancements",
      "description": "Modern CAN standard increasing payload sizes and bit rates.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t4_s5_d1",
      "label": "64-Byte Payload Capacity (8x Increase over CAN 2.0)",
      "description": "Expanding data payload from 8 bytes up to 64 bytes per frame.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t4_s5_d2",
      "label": "Dual Bit Rate Switching (up to 5-8 Mbps Data Phase)",
      "description": "Accelerating clock rate during data payload transmission while retaining 500kbps arbitration rates.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t5",
      "label": "Peripherals & Communication Bus Protocols Topic 5",
      "description": "Detailed first-principles mechanics for Peripherals & Communication Bus Protocols topic 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t5_s1",
      "label": "Peripherals & Communication Bus Protocols Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Peripherals & Communication Bus Protocols Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t5_s1_d1",
      "label": "Peripherals & Communication Bus Protocols Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Peripherals & Communication Bus Protocols Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t5_s1_d2",
      "label": "Peripherals & Communication Bus Protocols Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Peripherals & Communication Bus Protocols Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t5_s2",
      "label": "Peripherals & Communication Bus Protocols Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Peripherals & Communication Bus Protocols Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t5_s2_d1",
      "label": "Peripherals & Communication Bus Protocols Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Peripherals & Communication Bus Protocols Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t5_s2_d2",
      "label": "Peripherals & Communication Bus Protocols Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Peripherals & Communication Bus Protocols Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t5_s3",
      "label": "Peripherals & Communication Bus Protocols Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Peripherals & Communication Bus Protocols Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t5_s3_d1",
      "label": "Peripherals & Communication Bus Protocols Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Peripherals & Communication Bus Protocols Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t5_s3_d2",
      "label": "Peripherals & Communication Bus Protocols Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Peripherals & Communication Bus Protocols Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t5_s4",
      "label": "Peripherals & Communication Bus Protocols Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Peripherals & Communication Bus Protocols Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t5_s4_d1",
      "label": "Peripherals & Communication Bus Protocols Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Peripherals & Communication Bus Protocols Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t5_s4_d2",
      "label": "Peripherals & Communication Bus Protocols Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Peripherals & Communication Bus Protocols Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t5_s5",
      "label": "Peripherals & Communication Bus Protocols Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Peripherals & Communication Bus Protocols Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t5_s5_d1",
      "label": "Peripherals & Communication Bus Protocols Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Peripherals & Communication Bus Protocols Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t5_s5_d2",
      "label": "Peripherals & Communication Bus Protocols Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Peripherals & Communication Bus Protocols Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t6",
      "label": "Peripherals & Communication Bus Protocols Topic 6",
      "description": "Detailed first-principles mechanics for Peripherals & Communication Bus Protocols topic 6.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t6_s1",
      "label": "Peripherals & Communication Bus Protocols Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Peripherals & Communication Bus Protocols Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t6_s1_d1",
      "label": "Peripherals & Communication Bus Protocols Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Peripherals & Communication Bus Protocols Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t6_s1_d2",
      "label": "Peripherals & Communication Bus Protocols Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Peripherals & Communication Bus Protocols Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t6_s2",
      "label": "Peripherals & Communication Bus Protocols Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Peripherals & Communication Bus Protocols Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t6_s2_d1",
      "label": "Peripherals & Communication Bus Protocols Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Peripherals & Communication Bus Protocols Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t6_s2_d2",
      "label": "Peripherals & Communication Bus Protocols Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Peripherals & Communication Bus Protocols Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t6_s3",
      "label": "Peripherals & Communication Bus Protocols Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Peripherals & Communication Bus Protocols Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t6_s3_d1",
      "label": "Peripherals & Communication Bus Protocols Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Peripherals & Communication Bus Protocols Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t6_s3_d2",
      "label": "Peripherals & Communication Bus Protocols Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Peripherals & Communication Bus Protocols Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t6_s4",
      "label": "Peripherals & Communication Bus Protocols Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Peripherals & Communication Bus Protocols Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t6_s4_d1",
      "label": "Peripherals & Communication Bus Protocols Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Peripherals & Communication Bus Protocols Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t6_s4_d2",
      "label": "Peripherals & Communication Bus Protocols Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Peripherals & Communication Bus Protocols Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t6_s5",
      "label": "Peripherals & Communication Bus Protocols Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Peripherals & Communication Bus Protocols Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t6_s5_d1",
      "label": "Peripherals & Communication Bus Protocols Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Peripherals & Communication Bus Protocols Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p3_t6_s5_d2",
      "label": "Peripherals & Communication Bus Protocols Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Peripherals & Communication Bus Protocols Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4",
      "label": "RTOS Task Scheduling & Priorities",
      "description": "Preemptive priority-based scheduling, Rate-Monotonic Scheduling (RMS), Earliest Deadline First (EDF), and Context switching.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t1",
      "label": "Preemptive Priority-Based Task Scheduler",
      "description": "RTOS core scheduler executing highest-priority ready task at all times.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t1_s1",
      "label": "Task States (Running, Ready, Blocked, Suspended)",
      "description": "Lifecycle state machine for tasks managed by RTOS kernels.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t1_s1_d1",
      "label": "Running State (Active CPU Execution)",
      "description": "Task currently occupying CPU core.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t1_s1_d2",
      "label": "Blocked State (Waiting for Event / Time Delay)",
      "description": "Task sleeping or waiting for mutex, queue, or semaphore event.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t1_s2",
      "label": "Preemptive Context Switching Mechanics",
      "description": "Suspending running task instantly when higher-priority task enters Ready state.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t1_s2_d1",
      "label": "Higher-Priority Un-blocking Event Trigger",
      "description": "Switching context immediately upon ISR or semaphore release.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t1_s2_d2",
      "label": "Time-Slicing Round-Robin Scheduling (Equal Priorities)",
      "description": "Sharing CPU time equally among ready tasks sharing identical priorities.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t1_s3",
      "label": "PendSV (Plausible Supervisor Call) Exception Triggering",
      "description": "Cortex-M software interrupt dedicated to executing RTOS context switches safely.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t1_s3_d1",
      "label": "Lowest Priority Exception Assignment (PendSV = 0xFF)",
      "description": "Configuring PendSV to lowest priority to ensure all hardware ISRs finish before context switching.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t1_s3_d2",
      "label": "Avoiding Context Switch Stacking Conflicts",
      "description": "Preventing context switch execution while hardware ISRs are active.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t1_s4",
      "label": "Context Switch Assembly Sequence (TCB Stack Saving)",
      "description": "Assembly code saving current task registers and loading new task registers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t1_s4_d1",
      "label": "Saving Software Context (R4-R11) to Task Stack",
      "description": "Pushing remaining general-purpose registers to active task stack.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t1_s4_d2",
      "label": "Updating Task Control Block (TCB) Stack Pointer",
      "description": "Saving current stack pointer into running task TCB structure.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t1_s4_d3",
      "label": "Restoring New Task Stack Pointer & Registers",
      "description": "Loading stack pointer from target task TCB and popping R4-R11 registers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t1_s5",
      "label": "Task Control Block (TCB) Memory Layout",
      "description": "Kernel data structure storing task execution state.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t1_s5_d1",
      "label": "Stack Top Pointer (Must be First Field in TCB)",
      "description": "Placing current stack pointer at offset 0 for fast assembly access.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t1_s5_d2",
      "label": "Priority, Task Name, and Event ListItem Pointers",
      "description": "Storing task metadata and linked list nodes for scheduler queues.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t2",
      "label": "Rate-Monotonic Scheduling (RMS) Theory",
      "description": "Optimal static-priority scheduling algorithm assigning higher priorities to tasks with shorter periods.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t2_s1",
      "label": "Period-Proportional Static Priority Assignment",
      "description": "Assigning fixed task priorities inversely proportional to task period lengths T_i.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t2_s1_d1",
      "label": "Shorter Period = Higher Priority Rule",
      "description": "Tasks executing frequently (e.g. 10ms period) receive higher priority than slow tasks (e.g. 500ms).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t2_s1_d2",
      "label": "Optimality Proof for Static Priority Schedulers",
      "description": "Proving that if any static priority assignment can meet deadlines, RMS will also meet them.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t2_s2",
      "label": "Liu and Layland Schedulability Bound Theorem",
      "description": "Mathematical formula guaranteeing 100% deadline satisfaction if total CPU utilization is below threshold.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t2_s2_d1",
      "label": "Utilization Bound Formula (U = sum(C_i / T_i) <= n * (2^(1/n) - 1))",
      "description": "Calculating maximum CPU utilization bound for n periodic tasks.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t2_s2_d2",
      "label": "Asymptotic Utilization Limit (ln(2) ~ 69.3% for Large n)",
      "description": "Guaranteeing schedulability if total CPU utilization remains below 69.3%.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t2_s3",
      "label": "Harmonic Task Set Utilization Enhancement (100% CPU Utilization)",
      "description": "Achieving 100% CPU utilization schedulability when task periods are exact multiples (harmonic).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t2_s3_d1",
      "label": "Harmonic Period Condition (T_{i+1} = k * T_i)",
      "description": "Designing task periods as multiples (e.g. 10ms, 20ms, 40ms, 80ms).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t2_s3_d2",
      "label": "Eliminating Schedulability Utilization Loss",
      "description": "Unlocking 100% CPU utilization without missing deadlines.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t2_s4",
      "label": "Response Time Analysis (RTA / Exact Schedulability Test)",
      "description": "Iterative calculation determining exact worst-case response times (WCRT) for tasks.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t2_s4_d1",
      "label": "WCRT Recurrence (R_i^{k+1} = C_i + sum(ceil(R_i^k / T_j) * C_j))",
      "description": "Calculating interference from higher-priority tasks.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t2_s4_d2",
      "label": "Verifying R_i <= D_i Deadline Satisfaction",
      "description": "Proving exact task deadlines are met even when CPU utilization exceeds Liu-Layland bounds.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t2_s5",
      "label": "Execution Time Overrun Protections",
      "description": "Handling tasks that exceed estimated Execution Time (C_i) bounds.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t2_s5_d1",
      "label": "Task Execution Time Budgeting",
      "description": "Monitoring task execution times using hardware timers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t2_s5_d2",
      "label": "Terminating Over-Run Tasks",
      "description": "Suppressing runaway tasks to protect higher-priority system deadlines.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t3",
      "label": "Earliest Deadline First (EDF) Dynamic Scheduling",
      "description": "Optimal dynamic-priority scheduling algorithm assigning highest priority to task closest to deadline.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t3_s1",
      "label": "Dynamic Priority Assignment Rule",
      "description": "Re-evaluating task priorities dynamically based on absolute deadline values (d_i = t + D_i).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t3_s1_d1",
      "label": "Closest Absolute Deadline Execution",
      "description": "Executing task whose deadline is nearest in time regardless of original period.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t3_s1_d2",
      "label": "Dynamic Priority Queue Re-sorting",
      "description": "Re-ordering ready queues as time advances.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t3_s2",
      "label": "100% CPU Utilization Schedulability Bound (U = sum(C_i / T_i) <= 1.0)",
      "description": "Theoretical proof that EDF can schedule any task set up to 100% CPU utilization.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t3_s2_d1",
      "label": "Full Utilization Advantage over RMS",
      "description": "Allowing 30%+ higher CPU utilization than static RMS scheduling.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t3_s2_d2",
      "label": "Eliminating Unused CPU Bandwidth Waste",
      "description": "Maximizing micro-controller execution efficiency.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t3_s3",
      "label": "Domino Effect / Transient Overload Vulnerability",
      "description": "Severe failure mode of EDF when CPU utilization temporarily exceeds 100%.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t3_s3_d1",
      "label": "Cascading Deadline Misses",
      "description": "Single task overrun causing multiple downstream tasks to miss deadlines sequentially.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t3_s3_d2",
      "label": "Un-Predictable Overload Behavior",
      "description": "Difficulty predicting which specific tasks will miss deadlines during overloads.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t3_s4",
      "label": "Constant Bandwidth Server (CBS) Isolation",
      "description": "Isolating aperiodic and soft real-time tasks using dedicated execution budget servers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t3_s4_d1",
      "label": "Replenishing Server Execution Budgets",
      "description": "Assigning fixed execution budgets to non-critical tasks to prevent system overloads.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t3_s4_d2",
      "label": "Enforcing Hard Isolation Boundaries",
      "description": "Protecting critical EDF tasks from un-bounded background tasks.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t3_s5",
      "label": "EDF Implementation Overhead in RTOS Kernels",
      "description": "Reasons why most commercial RTOS kernels favor RMS over EDF.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t3_s5_d1",
      "label": "High O(N) Dynamic Queue Sorting Cost",
      "description": "Re-sorting ready queues dynamically incurs higher CPU overhead than static bitmaps.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t3_s5_d2",
      "label": "Determinism and Simplicity Preference",
      "description": "Preferring predictable static RMS priorities for safety-critical certification.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t4",
      "label": "Idle Task & Tickless Low-Power Modes",
      "description": "Optimizing micro-controller power consumption during periods of zero active task execution.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t4_s1",
      "label": "RTOS Idle Task Execution (Priority 0)",
      "description": "Lowest priority system task executing continuously whenever no user tasks are Ready.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t4_s1_d1",
      "label": "Executing Background Cleanup (Deleting Task Memory)",
      "description": "Freeing TCB and stack memory of deleted tasks inside idle loops.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t4_s1_d2",
      "label": "Entering Low-Power Wait For Interrupt (WFI)",
      "description": "Executing WFI assembly instruction to pause CPU clock until next interrupt.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t4_s2",
      "label": "Tickless Idle Mode (FreeRTOS configUSE_TICKLESS_IDLE)",
      "description": "Suppressing periodic SysTick interrupts during long idle periods to maximize sleep depth.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t4_s2_d1",
      "label": "Stopping Periodic SysTick Interrupts",
      "description": "Disabling 1ms SysTick interrupts when all tasks are sleeping for long durations.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t4_s2_d2",
      "label": "Configuring Low-Power Timer Alarm (LPTIM)",
      "description": "Setting low-power hardware timers to wake CPU right before next task deadline.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t4_s3",
      "label": "Deep Sleep & Stop Mode Entry Sequence",
      "description": "Configuring Cortex-M System Control Block (SCB->SCR) for deep power savings.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t4_s3_d1",
      "label": "SLEEPDEEP Bit Configuration",
      "description": "Enabling deep sleep mode prior to executing WFI instructions.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t4_s3_d2",
      "label": "Power Gating Core Peripherals",
      "description": "Turning off internal high-speed clocks and peripheral power rails.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t4_s4",
      "label": "RTOS Tick Calibration Post-Wakeup",
      "description": "Correcting RTOS tick count variable upon waking from long tickless sleep intervals.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t4_s4_d1",
      "label": "Reading Elapsed Time from Low-Power Timers",
      "description": "Measuring exact elapsed sleep duration in milliseconds.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t4_s4_d2",
      "label": "Step-Advancing Kernel Tick Counter (vTaskStepTick)",
      "description": "Advancing RTOS internal clock forward to reflect slept duration seamlessly.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t4_s5",
      "label": "Micro-Amp System Standby Power Achievement",
      "description": "Reducing total system current draw to micro-amps for battery-powered IoT devices.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t4_s5_d1",
      "label": "Extending Battery Operational Lifespans",
      "description": "Achieving 5-10 year battery lifespans on single coin-cell batteries.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t4_s5_d2",
      "label": "Sub-Millisecond Wakeup Latencies",
      "description": "Waking up rapidly to process external sensor interrupts.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t5",
      "label": "RTOS Task Scheduling & Priorities Topic 5",
      "description": "Detailed first-principles mechanics for RTOS Task Scheduling & Priorities topic 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t5_s1",
      "label": "RTOS Task Scheduling & Priorities Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for RTOS Task Scheduling & Priorities Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t5_s1_d1",
      "label": "RTOS Task Scheduling & Priorities Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Task Scheduling & Priorities Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t5_s1_d2",
      "label": "RTOS Task Scheduling & Priorities Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Task Scheduling & Priorities Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t5_s2",
      "label": "RTOS Task Scheduling & Priorities Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for RTOS Task Scheduling & Priorities Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t5_s2_d1",
      "label": "RTOS Task Scheduling & Priorities Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Task Scheduling & Priorities Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t5_s2_d2",
      "label": "RTOS Task Scheduling & Priorities Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Task Scheduling & Priorities Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t5_s3",
      "label": "RTOS Task Scheduling & Priorities Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for RTOS Task Scheduling & Priorities Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t5_s3_d1",
      "label": "RTOS Task Scheduling & Priorities Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Task Scheduling & Priorities Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t5_s3_d2",
      "label": "RTOS Task Scheduling & Priorities Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Task Scheduling & Priorities Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t5_s4",
      "label": "RTOS Task Scheduling & Priorities Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for RTOS Task Scheduling & Priorities Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t5_s4_d1",
      "label": "RTOS Task Scheduling & Priorities Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Task Scheduling & Priorities Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t5_s4_d2",
      "label": "RTOS Task Scheduling & Priorities Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Task Scheduling & Priorities Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t5_s5",
      "label": "RTOS Task Scheduling & Priorities Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for RTOS Task Scheduling & Priorities Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t5_s5_d1",
      "label": "RTOS Task Scheduling & Priorities Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Task Scheduling & Priorities Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t5_s5_d2",
      "label": "RTOS Task Scheduling & Priorities Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Task Scheduling & Priorities Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t6",
      "label": "RTOS Task Scheduling & Priorities Topic 6",
      "description": "Detailed first-principles mechanics for RTOS Task Scheduling & Priorities topic 6.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t6_s1",
      "label": "RTOS Task Scheduling & Priorities Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for RTOS Task Scheduling & Priorities Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t6_s1_d1",
      "label": "RTOS Task Scheduling & Priorities Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Task Scheduling & Priorities Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t6_s1_d2",
      "label": "RTOS Task Scheduling & Priorities Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Task Scheduling & Priorities Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t6_s2",
      "label": "RTOS Task Scheduling & Priorities Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for RTOS Task Scheduling & Priorities Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t6_s2_d1",
      "label": "RTOS Task Scheduling & Priorities Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Task Scheduling & Priorities Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t6_s2_d2",
      "label": "RTOS Task Scheduling & Priorities Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Task Scheduling & Priorities Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t6_s3",
      "label": "RTOS Task Scheduling & Priorities Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for RTOS Task Scheduling & Priorities Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t6_s3_d1",
      "label": "RTOS Task Scheduling & Priorities Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Task Scheduling & Priorities Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t6_s3_d2",
      "label": "RTOS Task Scheduling & Priorities Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Task Scheduling & Priorities Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t6_s4",
      "label": "RTOS Task Scheduling & Priorities Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for RTOS Task Scheduling & Priorities Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t6_s4_d1",
      "label": "RTOS Task Scheduling & Priorities Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Task Scheduling & Priorities Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t6_s4_d2",
      "label": "RTOS Task Scheduling & Priorities Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Task Scheduling & Priorities Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t6_s5",
      "label": "RTOS Task Scheduling & Priorities Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for RTOS Task Scheduling & Priorities Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t6_s5_d1",
      "label": "RTOS Task Scheduling & Priorities Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Task Scheduling & Priorities Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p4_t6_s5_d2",
      "label": "RTOS Task Scheduling & Priorities Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Task Scheduling & Priorities Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5",
      "label": "RTOS Synchronization & Inter-Task Communication",
      "description": "FreeRTOS Mutex Priority Inheritance, Semaphores, Message Queues, and Direct-to-Task Notifications.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t1",
      "label": "Priority Inversion Problem & Priority Inheritance",
      "description": "Pathological RTOS condition where high-priority tasks are indirectly blocked by low-priority tasks.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t1_s1",
      "label": "Unbounded Priority Inversion Scenario (Mars Pathfinder Bug)",
      "description": "Classic failure mode where medium-priority tasks preempt low-priority tasks holding shared mutexes.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t1_s1_d1",
      "label": "High-Priority Task H Blocked on Mutex M",
      "description": "Task H waiting for Mutex M held by Low-Priority Task L.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t1_s1_d2",
      "label": "Medium-Priority Task M Preempting Task L",
      "description": "Task M (un-related to Mutex M) preempting Task L, preventing Task L from releasing Mutex M.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t1_s1_d3",
      "label": "Un-bounded Delay for High-Priority Task H",
      "description": "Task H sitting blocked indefinitely while Task M runs.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t1_s2",
      "label": "Priority Inheritance Protocol (PIP) Mechanism",
      "description": "Dynamic priority elevation protocol preventing priority inversion.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t1_s2_d1",
      "label": "Temporary Priority Elevation (Priority(L) := Priority(H))",
      "description": "Elevating task L priority to match task H priority instantly upon blocking.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t1_s2_d2",
      "label": "Preventing Medium Priority Preemption",
      "description": "Ensuring medium priority tasks cannot preempt task L while holding shared mutexes.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t1_s2_d3",
      "label": "Automatic Priority Restoration upon Mutex Release",
      "description": "Restoring task L to its original low priority immediately upon releasing mutexes.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t1_s3",
      "label": "Priority Ceiling Protocol (PCP) Alternative",
      "description": "Assigning static priority ceilings to shared resources equal to highest task priority accessing them.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t1_s3_d1",
      "label": "Immediate Priority Elevation on Lock",
      "description": "Elevating task priorities to resource ceiling values immediately upon locking.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t1_s3_d2",
      "label": "Eliminating Deadlocks and Chain Blocking",
      "description": "Proving that tasks experience at most 1 block duration and zero deadlocks.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t1_s4",
      "label": "Mutex vs Binary Semaphore Architectural Distinction",
      "description": "Critical differences between Mutexes (Ownership + Priority Inheritance) and Semaphores (Signaling).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t1_s4_d1",
      "label": "Mutex Ownership Constraint",
      "description": "Requiring task that locks a mutex to be the exact task that unlocks it.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t1_s4_d2",
      "label": "Binary Semaphore Inter-Task Signaling",
      "description": "Allowing ISRs or distinct tasks to give/take semaphores without ownership rules.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t1_s5",
      "label": "Nested Priority Inheritance Tracking",
      "description": "Handling tasks holding multiple mutexes simultaneously.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t1_s5_d1",
      "label": "Stacking Highest Inherited Priorities",
      "description": "Maintaining highest inherited priority among all held mutexes.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t1_s5_d2",
      "label": "Step-Wise Priority Reduction on Partial Mutex Release",
      "description": "Reducing task priority to next highest held mutex ceiling upon releasing individual locks.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t2",
      "label": "FreeRTOS Semaphores & Counting Semaphores",
      "description": "Inter-task and ISR signaling primitives for resource counting and synchronization.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t2_s1",
      "label": "Binary Semaphore Event Signaling (xSemaphoreGive / Take)",
      "description": "Single-bit synchronization primitive flagging event occurrences.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t2_s1_d1",
      "label": "ISR-to-Task Event Handshake",
      "description": "ISR giving binary semaphore to unblock waiting processing task instantly.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t2_s1_d2",
      "label": "Non-Owning Signaling Flexibility",
      "description": "Allowing any task or ISR to post events without ownership restrictions.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t2_s2",
      "label": "Counting Semaphores (Resource Pool Management)",
      "description": "Semaphores maintaining integer counter values representing available resource units.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t2_s2_d1",
      "label": "Initial Count and Max Count Configuration",
      "description": "Initializing semaphores with total pool resource capacity (e.g. 5 available buffers).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t2_s2_d2",
      "label": "Decrementing (Take) and Incrementing (Give)",
      "description": "Blocking tasks when resource count reaches zero.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t2_s3",
      "label": "Task Un-blocking Queue Priority Ordering",
      "description": "Ordering tasks blocked on semaphores by static RTOS priority.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t2_s3_d1",
      "label": "Highest-Priority Blocked Task Un-blocking",
      "description": "Un-blocking highest-priority waiting task when semaphores are given.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t2_s3_d2",
      "label": "FIFO Fallback Order for Equal Priorities",
      "description": "Un-blocking equal priority tasks in first-in first-out order.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t2_s4",
      "label": "Time-bounded Blocking Timeouts (portMAX_DELAY vs Ticks)",
      "description": "Specifying maximum wait durations when attempting to take semaphores.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t2_s4_d1",
      "label": "Zero Timeout Non-Blocking Polling",
      "description": "Returning immediately with error if semaphore is unavailable.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t2_s4_d2",
      "label": "Bounded Wait Timeouts (e.g. pdMS_TO_TICKS(100))",
      "description": "Un-blocking tasks with timeout error if semaphores are not given within 100ms.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t2_s5",
      "label": "Recursive Mutexes (xSemaphoreCreateRecursiveMutex)",
      "description": "Specialized mutexes allowing single tasks to acquire identical locks multiple times.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t2_s5_d1",
      "label": "Lock Count Tracking",
      "description": "Incrementing recursion count per take and decrementing per give.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t2_s5_d2",
      "label": "Preventing Self-Deadlocks in Recursive Code",
      "description": "Allowing recursive functions to re-acquire held locks safely.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t3",
      "label": "RTOS Message Queues & Mailboxes",
      "description": "Thread-safe FIFO queues for transferring data payloads between tasks and ISRs.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t3_s1",
      "label": "Fixed-Size Element Copy-by-Value Architecture",
      "description": "Storing fixed-size data elements inside allocated queue memory buffers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t3_s1_d1",
      "label": "Copy-by-Value Safety",
      "description": "Copying payload data into queue memory to avoid pointer aliasing bugs.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t3_s1_d2",
      "label": "Copy-by-Reference Pointer Passing for Large Payloads",
      "description": "Passing pointers to large structures to avoid memory copy overhead.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t3_s2",
      "label": "Thread-Safe Blocking Queues (xQueueSend / xQueueReceive)",
      "description": "Blocking senders when queues are full and receivers when queues are empty.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t3_s2_d1",
      "label": "Full Queue Sender Blocking",
      "description": "Suspending sending tasks until space becomes available in full queues.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t3_s2_d2",
      "label": "Empty Queue Receiver Blocking",
      "description": "Suspending receiving tasks until data arrives in empty queues.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t3_s3",
      "label": "Message Priorities & Front Insertion (xQueueSendToFront)",
      "description": "Inserting urgent high-priority messages at the front of queue buffers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t3_s3_d1",
      "label": "Emergency Message Bypass",
      "description": "Pushing critical alerts to queue fronts to be read before standard messages.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t3_s3_d2",
      "label": "Standard FIFO Tail Insertion (xQueueSendToBack)",
      "description": "Appending normal messages to queue tails.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t3_s4",
      "label": "Queue Sets (xQueueSelectFromSet)",
      "description": "Grouping multiple queues and semaphores to allow tasks to block on any event source.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t3_s4_d1",
      "label": "Multiplexing Event Sources",
      "description": "Blocking single tasks until any queue inside a queue set receives data.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t3_s4_d2",
      "label": "Select/Poll System Call Equivalent",
      "description": "Providing select-like functionality for RTOS embedded tasks.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t3_s5",
      "label": "Zero-Allocation Static Queues (xQueueCreateStatic)",
      "description": "Creating queues using pre-allocated user memory buffers to avoid dynamic heap allocation.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t3_s5_d1",
      "label": "MISRA Compliance & Zero Heap Rules",
      "description": "Satisfying strict safety guidelines banning dynamic malloc/free.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t3_s5_d2",
      "label": "Guaranteed RAM Allocation at Compile Time",
      "description": "Allocating queue memory statically in .bss sections.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t4",
      "label": "Direct-to-Task Notifications (Lightweight Signaling)",
      "description": "Ultra-fast event signaling mechanism integrated directly into task control blocks.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t4_s1",
      "label": "Task Control Block Notification Values (uint32_t)",
      "description": "Each task possessing an array of 32-bit notification values embedded in its TCB.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t4_s1_d1",
      "label": "45% Faster Execution than Semaphores",
      "description": "Bypassing queue and semaphore object overhead for direct task-to-task signals.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t4_s1_d2",
      "label": "Zero RAM Allocation Overhead",
      "description": "Utilizing memory pre-allocated inside existing TCB structures.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t4_s2",
      "label": "Notification Action Modes (xTaskNotifyGive / xTaskNotify)",
      "description": "Versatile notification modes emulating multiple RTOS primitives.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t4_s2_d1",
      "label": "Counting Semaphore Emulation (Incrementing Value)",
      "description": "Incrementing 32-bit notification counter on send.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t4_s2_d2",
      "label": "Binary Semaphore Emulation (Setting Bitmask Flags)",
      "description": "Setting specific bitflags inside 32-bit notification values.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t4_s2_d3",
      "label": "Mailbox Emulation (Overwriting Value with Data)",
      "description": "Overwriting 32-bit notification values with 4-byte payload integers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t4_s3",
      "label": "Direct Task Un-blocking (ulTaskNotifyTake / xTaskNotifyWait)",
      "description": "Blocking tasks until notifications arrive directly at their TCB.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t4_s3_d1",
      "label": "Fast Event Loop Execution",
      "description": "Waking tasks instantly when notification bits match expected masks.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t4_s3_d2",
      "label": "Clearing Notification Bits on Exit",
      "description": "Clearing specific bitfield flags upon reading notifications.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t4_s4",
      "label": "ISR-to-Task Direct Notification Efficiency",
      "description": "Signaling processing tasks directly from high-frequency hardware ISRs.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t4_s4_d1",
      "label": "vTaskNotifyGiveFromISR API",
      "description": "Giving lightweight notifications directly from ISR routines.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t4_s4_d2",
      "label": "Sub-Microsecond Wakeup Speeds",
      "description": "Achieving minimum latency for interrupt-driven task processing.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t4_s5",
      "label": "Limitations of Direct Task Notifications",
      "description": "Scenarios where semaphores or queues are still required.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t4_s5_d1",
      "label": "Single Receiving Task Restriction",
      "description": "Restricting notifications strictly to single target receiving tasks.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t4_s5_d2",
      "label": "No Multiple-Sender Queueing",
      "description": "Overwriting values if multiple tasks send data without intermediate reads.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t5",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 5",
      "description": "Detailed first-principles mechanics for RTOS Synchronization & Inter-Task Communication topic 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t5_s1",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for RTOS Synchronization & Inter-Task Communication Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t5_s1_d1",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t5_s1_d2",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t5_s2",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for RTOS Synchronization & Inter-Task Communication Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t5_s2_d1",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t5_s2_d2",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t5_s3",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for RTOS Synchronization & Inter-Task Communication Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t5_s3_d1",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t5_s3_d2",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t5_s4",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for RTOS Synchronization & Inter-Task Communication Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t5_s4_d1",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t5_s4_d2",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t5_s5",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for RTOS Synchronization & Inter-Task Communication Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t5_s5_d1",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t5_s5_d2",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Synchronization & Inter-Task Communication Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t6",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 6",
      "description": "Detailed first-principles mechanics for RTOS Synchronization & Inter-Task Communication topic 6.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t6_s1",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for RTOS Synchronization & Inter-Task Communication Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t6_s1_d1",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t6_s1_d2",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t6_s2",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for RTOS Synchronization & Inter-Task Communication Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t6_s2_d1",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t6_s2_d2",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t6_s3",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for RTOS Synchronization & Inter-Task Communication Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t6_s3_d1",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t6_s3_d2",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t6_s4",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for RTOS Synchronization & Inter-Task Communication Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t6_s4_d1",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t6_s4_d2",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t6_s5",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for RTOS Synchronization & Inter-Task Communication Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t6_s5_d1",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p5_t6_s5_d2",
      "label": "RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for RTOS Synchronization & Inter-Task Communication Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6",
      "label": "Energy Optimization & Power Management",
      "description": "Sleep/Deep-Sleep/Stop modes, Dynamic Voltage and Frequency Scaling (DVFS), Peripheral clock gating, and Battery estimation.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t1",
      "label": "Microcontroller Power Consumption Modes",
      "description": "Hardware power modes balancing energy savings against wakeup latencies.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t1_s1",
      "label": "Run Mode (Full Speed CPU + All Clocks Active)",
      "description": "Active execution state consuming maximum operating current (10-100mA).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t1_s1_d1",
      "label": "Full Peripheral Clock Activation",
      "description": "Executing CPU code with all peripheral clocks enabled.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t1_s1_d2",
      "label": "Linear Power Scaling with Clock Frequency (P = C * V^2 * f)",
      "description": "Power consumption scaling directly with clock frequency f.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t1_s2",
      "label": "Sleep Mode (CPU Core Halted, Peripherals Active)",
      "description": "Cpu clock disabled while RAM contents and peripheral operations continue.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t1_s2_d1",
      "label": "Wait For Interrupt (WFI) Entry",
      "description": "Halting CPU pipeline via WFI instruction, saving 50-70% core power.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t1_s2_d2",
      "label": "Instant Sub-Microsecond Wakeup",
      "description": "Waking up instantly upon any peripheral interrupt.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t1_s3",
      "label": "Stop / Deep-Sleep Mode (Clocks Disabled, SRAM Retained)",
      "description": "All high-speed clocks (HSI, HSE, PLL) stopped while SRAM and register contents are preserved.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t1_s3_d1",
      "label": "Micro-Amp Current Consumption (1-10 uA)",
      "description": "Reducing current draw by 99.9% while keeping system state in RAM.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t1_s3_d2",
      "label": "Low-Power Timer or EXTI Wakeup Pin Triggers",
      "description": "Waking up via external GPIO transitions or low-power RTC alarms in 5-10 microseconds.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t1_s4",
      "label": "Standby / Shutdown Mode (Core Power Off, RTC Active)",
      "description": "Ultra-low power mode disabling core voltage regulators and clearing SRAM.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t1_s4_d1",
      "label": "Nano-Amp Current Draw (100-500 nA)",
      "description": "Maximizing battery shelf life for long-term storage.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t1_s4_d2",
      "label": "System Reset Wakeup Behavior",
      "description": "Waking up via dedicated Reset/Wakeup pins, executing cold boot startup sequences.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t1_s5",
      "label": "Power Mode Transition State Machines",
      "description": "Managing safe transitions between active execution and low-power sleep modes.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t1_s5_d1",
      "label": "Flushing Peripheral Transmit Buffers Before Sleep",
      "description": "Ensuring UART and SPI transmissions complete before disabling clocks.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t1_s5_d2",
      "label": "Disabling Analog Peripherals (ADC / DAC)",
      "description": "Powering down power-hungry internal analog blocks prior to sleeping.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t2",
      "label": "Peripheral Clock Gating & Power Domains",
      "description": "Disabling clock signals to inactive hardware peripherals to eliminate dynamic switching power.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t2_s1",
      "label": "Reset & Clock Control (RCC) Peripheral Enable Bits",
      "description": "Explicit clock gating registers controlling individual peripheral power.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t2_s1_d1",
      "label": "Default Gated Clock State",
      "description": "All peripherals disabled by default on startup to save power.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t2_s1_d2",
      "label": "Enabling Clocks On-Demand (RCC_AHB1ENR / RCC_APB1ENR)",
      "description": "Enabling peripheral clocks strictly when required and disabling immediately after.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t2_s2",
      "label": "Dynamic Clock Frequency Scaling (DVFS)",
      "description": "Adjusting CPU clock frequency and core voltage dynamically based on workload demands.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t2_s2_d1",
      "label": "Scaling Down Clocks During Low Workload Phases",
      "description": "Reducing clock from 168MHz to 16MHz during background monitoring phases.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t2_s2_d2",
      "label": "Lowering Core Voltage Regulators (VOS Scale Modes)",
      "description": "Reducing internal supply voltage to capture quadratic power savings (V^2).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t2_s3",
      "label": "Power Domain Gating & Retain Memory Blocks",
      "description": "Powering down unused internal RAM blocks selectively.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t2_s3_d1",
      "label": "Partial SRAM Retention (Retaining SRAM1 while Powering SRAM2)",
      "description": "Powering down un-used RAM sectors in deep sleep modes.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t2_s3_d2",
      "label": "Zero Leakage Current in Disabled Power Domains",
      "description": "Eliminating static silicon leakage current in powered-off domains.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t2_s4",
      "label": "GPIO Pin Configuration for Low Power",
      "description": "Configuring un-used GPIO pins to prevent floating input leakage currents.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t2_s4_d1",
      "label": "Analog Mode Pin Configuration for Un-used GPIOs",
      "description": "Setting un-used pins to Analog mode to disable input schmitt triggers and pull resistors.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t2_s4_d2",
      "label": "Preventing Floating Input Oscillation",
      "description": "Eliminating micro-amp leakage currents caused by floating digital inputs.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t2_s5",
      "label": "Low-Power Analog Comparators & Autonomous Peripherals",
      "description": "Monitoring external sensors autonomously while CPU remains in deep sleep.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t2_s5_d1",
      "label": "Ultra-Low Power Analog Comparators (COMP)",
      "description": "Monitoring sensor voltage thresholds at sub-microamp current draw.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t2_s5_d2",
      "label": "Event System Inter-Peripheral Routing (Event System / Event Link)",
      "description": "Triggering ADC sampling directly from hardware timers without waking CPU.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t3",
      "label": "Battery Lifespan & Energy Harvesting Profiling",
      "description": "Calculating and measuring system energy budgets for battery-powered IoT devices.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t3_s1",
      "label": "Average Current Consumption Formula (I_avg = sum(I_i * t_i) / T_total)",
      "description": "Calculating weighted average current draw across active and sleep duty cycles.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t3_s1_d1",
      "label": "Duty Cycle Fraction Calculation (Duty = t_active / T_period)",
      "description": "Targeting sub-1% active duty cycles (e.g. 10ms active every 10 seconds).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t3_s1_d2",
      "label": "Sleep Current Dominance on Battery Lifespan",
      "description": "Demonstrating that sleep current (uA) dictates total lifespan when duty cycles are low.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t3_s2",
      "label": "Battery Capacity Derating & Self-Discharge Modeling",
      "description": "Estimating usable battery capacity over multi-year deployments.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t3_s2_d1",
      "label": "CR2032 Lithium Coin-Cell Capacity (220 mAh Nominal)",
      "description": "Factoring internal resistance spikes during high-current wireless transmit pulses.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t3_s2_d2",
      "label": "Annual Self-Discharge Rates (1-2% per Year)",
      "description": "Accounting for passive chemical capacity loss over 10-year periods.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t3_s3",
      "label": "Current Profile Measurement Tools (Joulescope / PPK2)",
      "description": "Measuring dynamic micro-amp to amp current profiles with high sampling rates.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t3_s3_d1",
      "label": "High Dynamic Range Current Measurement",
      "description": "Measuring 100nA sleep currents and 100mA transmit pulses seamlessly without voltage drops.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t3_s3_d2",
      "label": "Profiling Energy Consumption per Code Feature",
      "description": "Measuring exact micro-joule costs of sensor reads vs wireless transmissions.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t3_s4",
      "label": "Energy Harvesting Systems (Solar, Thermal, Piezoelectric)",
      "description": "Powering micro-controllers via ambient environmental energy harvesting.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t3_s4_d1",
      "label": "Maximum Power Point Tracking (MPPT) Solar Harvesting",
      "description": "Extracting maximum energy from small indoor solar cells.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t3_s4_d2",
      "label": "Super-Capacitor Energy Storage Buffers",
      "description": "Buffering harvested energy in super-capacitors to supply burst currents.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t3_s5",
      "label": "Brownout Reset (BOR) & Low-Voltage Safe Shutdown",
      "description": "Hardware monitoring preventing memory corruption when battery voltage drops.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t3_s5_d1",
      "label": "Programmable Voltage Detector (PVD) Interrupts",
      "description": "Alerting software when battery drops below early warning thresholds (e.g. 2.2V).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t3_s5_d2",
      "label": "Safe Non-Volatile Data Saving before Shutdown",
      "description": "Writing critical operational data to Flash before brownout hardware resets CPU.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t4",
      "label": "Energy Optimization & Power Management Topic 4",
      "description": "Detailed first-principles mechanics for Energy Optimization & Power Management topic 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t4_s1",
      "label": "Energy Optimization & Power Management Topic 4 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Energy Optimization & Power Management Topic 4 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t4_s1_d1",
      "label": "Energy Optimization & Power Management Topic 4 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t4_s1_d2",
      "label": "Energy Optimization & Power Management Topic 4 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t4_s2",
      "label": "Energy Optimization & Power Management Topic 4 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Energy Optimization & Power Management Topic 4 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t4_s2_d1",
      "label": "Energy Optimization & Power Management Topic 4 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t4_s2_d2",
      "label": "Energy Optimization & Power Management Topic 4 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t4_s3",
      "label": "Energy Optimization & Power Management Topic 4 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Energy Optimization & Power Management Topic 4 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t4_s3_d1",
      "label": "Energy Optimization & Power Management Topic 4 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t4_s3_d2",
      "label": "Energy Optimization & Power Management Topic 4 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t4_s4",
      "label": "Energy Optimization & Power Management Topic 4 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Energy Optimization & Power Management Topic 4 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t4_s4_d1",
      "label": "Energy Optimization & Power Management Topic 4 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t4_s4_d2",
      "label": "Energy Optimization & Power Management Topic 4 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t4_s5",
      "label": "Energy Optimization & Power Management Topic 4 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Energy Optimization & Power Management Topic 4 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t4_s5_d1",
      "label": "Energy Optimization & Power Management Topic 4 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t4_s5_d2",
      "label": "Energy Optimization & Power Management Topic 4 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t5",
      "label": "Energy Optimization & Power Management Topic 5",
      "description": "Detailed first-principles mechanics for Energy Optimization & Power Management topic 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t5_s1",
      "label": "Energy Optimization & Power Management Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Energy Optimization & Power Management Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t5_s1_d1",
      "label": "Energy Optimization & Power Management Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t5_s1_d2",
      "label": "Energy Optimization & Power Management Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t5_s2",
      "label": "Energy Optimization & Power Management Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Energy Optimization & Power Management Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t5_s2_d1",
      "label": "Energy Optimization & Power Management Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t5_s2_d2",
      "label": "Energy Optimization & Power Management Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t5_s3",
      "label": "Energy Optimization & Power Management Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Energy Optimization & Power Management Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t5_s3_d1",
      "label": "Energy Optimization & Power Management Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t5_s3_d2",
      "label": "Energy Optimization & Power Management Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t5_s4",
      "label": "Energy Optimization & Power Management Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Energy Optimization & Power Management Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t5_s4_d1",
      "label": "Energy Optimization & Power Management Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t5_s4_d2",
      "label": "Energy Optimization & Power Management Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t5_s5",
      "label": "Energy Optimization & Power Management Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Energy Optimization & Power Management Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t5_s5_d1",
      "label": "Energy Optimization & Power Management Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t5_s5_d2",
      "label": "Energy Optimization & Power Management Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t6",
      "label": "Energy Optimization & Power Management Topic 6",
      "description": "Detailed first-principles mechanics for Energy Optimization & Power Management topic 6.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t6_s1",
      "label": "Energy Optimization & Power Management Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Energy Optimization & Power Management Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t6_s1_d1",
      "label": "Energy Optimization & Power Management Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t6_s1_d2",
      "label": "Energy Optimization & Power Management Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t6_s2",
      "label": "Energy Optimization & Power Management Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Energy Optimization & Power Management Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t6_s2_d1",
      "label": "Energy Optimization & Power Management Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t6_s2_d2",
      "label": "Energy Optimization & Power Management Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t6_s3",
      "label": "Energy Optimization & Power Management Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Energy Optimization & Power Management Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t6_s3_d1",
      "label": "Energy Optimization & Power Management Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t6_s3_d2",
      "label": "Energy Optimization & Power Management Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t6_s4",
      "label": "Energy Optimization & Power Management Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Energy Optimization & Power Management Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t6_s4_d1",
      "label": "Energy Optimization & Power Management Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t6_s4_d2",
      "label": "Energy Optimization & Power Management Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t6_s5",
      "label": "Energy Optimization & Power Management Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Energy Optimization & Power Management Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t6_s5_d1",
      "label": "Energy Optimization & Power Management Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p6_t6_s5_d2",
      "label": "Energy Optimization & Power Management Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Energy Optimization & Power Management Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7",
      "label": "Embedded Hardware Security & Memory Protection",
      "description": "Memory Protection Unit (MPU) region permissions, ARM TrustZone secure/non-secure worlds, Hardware Cryptography, and Secure Boot.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t1",
      "label": "Memory Protection Unit (MPU) Configuration",
      "description": "Hardware peripheral defining memory region access permissions and memory attributes.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t1_s1",
      "label": "MPU Region Attribute Definitions (Base Address, Size, Sub-regions)",
      "description": "Defining memory region boundaries and properties (8 to 16 regions on Cortex-M).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t1_s1_d1",
      "label": "Power-of-Two Region Size Alignment Rules",
      "description": "Aligning region boundaries to sizes (32 bytes to 4GB).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t1_s1_d2",
      "label": "Sub-Region Disable (SRD) Bitmasks",
      "description": "Dividing regions into 8 equal sub-regions to disable specific sub-blocks.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t1_s2",
      "label": "Access Permission Attributes (Privileged vs Un-privileged, RO/RW/No-Access)",
      "description": "Restricting memory access levels per region.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t1_s2_d1",
      "label": "Read-Only Code Protection (RO)",
      "description": "Preventing accidental code overwrites by marking Flash regions as Read-Only.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t1_s2_d2",
      "label": "Privileged-Only Kernel Stack Regions",
      "description": "Restricting access to kernel data structures from un-privileged user code.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t1_s3",
      "label": "Execute-Never (XN) Attribute & Buffer Overflow Protection",
      "description": "Blocking code execution out of RAM regions to prevent stack buffer overflow attacks.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t1_s3_d1",
      "label": "XN Bit Configuration on SRAM and Peripheral Memory",
      "description": "Marking RAM and peripheral regions as non-executable.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t1_s3_d2",
      "label": "Eliminating Shellcode Injection Vulnerabilities",
      "description": "Preventing malicious code execution injected into RAM stack buffers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t1_s4",
      "label": "MemManage Fault Exception Handling",
      "description": "Hardware exception triggered instantly when code attempts unauthorized MPU access.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t1_s4_d1",
      "label": "MemManage Fault Status Register (MMFSR) Inspection",
      "description": "Reading fault flags (Instruction Access Violation, Data Access Violation).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t1_s4_d2",
      "label": "Terminating Faulty User Tasks",
      "description": "Quarantining and terminating misbehaving user tasks without crashing full OS.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t1_s5",
      "label": "FreeRTOS MPU Port Task Memory Isolation",
      "description": "Enforcing strict memory isolation across individual RTOS tasks.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t1_s5_d1",
      "label": "Re-Configuring MPU Regions During Context Switches",
      "description": "Updating MPU regions dynamically to grant tasks access only to their own stacks.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t1_s5_d2",
      "label": "Creating Sandboxed User Space Applications",
      "description": "Preventing faulty tasks from corrupting adjacent task memory.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t2",
      "label": "ARM TrustZone for ARMv8-M Architecture",
      "description": "Hardware-enforced security isolation dividing microcontrollers into Secure and Non-Secure worlds.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t2_s1",
      "label": "Secure vs Non-Secure Execution States",
      "description": "Hardware state machine isolating security-critical code and data.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t2_s1_d1",
      "label": "Secure World (Cryptographic Keys, Secure Boot, DRM)",
      "description": "Executing sensitive security algorithms in isolated hardware state.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t2_s1_d2",
      "label": "Non-Secure World (General Application Code, RTOS)",
      "description": "Executing standard user software without access to Secure assets.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t2_s2",
      "label": "Implementation-Defined Attribution Unit (IDAU) & SAU",
      "description": "Configuring hardware memory regions as Secure, Non-Secure, or Non-Secure Callable.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t2_s2_d1",
      "label": "Security Attribution Unit (SAU) Partitioning",
      "description": "Partitioning Flash, RAM, and Peripherals into Secure vs Non-Secure zones.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t2_s2_d2",
      "label": "Non-Secure Callable (NSC) Memory Gateways",
      "description": "Dedicated memory regions holding entry point functions for Secure calls.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t2_s3",
      "label": "Secure Gateway (SG) Instruction & Non-Secure Function Calls",
      "description": "Hardware-enforced entry mechanism for calling Secure functions from Non-Secure code.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t2_s3_d1",
      "label": "First-Instruction SG Validation",
      "description": "Requiring first instruction in NSC functions to be SG (Secure Gateway) assembly instruction.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t2_s3_d2",
      "label": "Preventing Arbitrary Jumps into Secure Memory",
      "description": "Blocking un-authorized jumps directly into internal Secure code paths.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t2_s4",
      "label": "Hardware Peripheral & Interrupt Security Partitioning",
      "description": "Assigning hardware peripherals and interrupts exclusively to Secure or Non-Secure worlds.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t2_s4_d1",
      "label": "Targeted Peripheral Assignment (Secure AES Engine)",
      "description": "Restricting hardware crypto engines strictly to Secure world access.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t2_s4_d2",
      "label": "Secure vs Non-Secure NVIC Interrupt Targeting",
      "description": "Routing safety-critical interrupts directly to Secure ISR handlers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t2_s5",
      "label": "Trusted Firmware for ARM (TF-M) Standard Integration",
      "description": "Reference implementation of PSA Certified security framework for Cortex-M.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t2_s5_d1",
      "label": "PSA Certified Security Services API",
      "description": "Providing standard APIs for Secure Storage, Cryptography, and Attestation.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t2_s5_d2",
      "label": "Accelerating Secure Product Development",
      "description": "Deploying standardized security foundations on TrustZone microcontrollers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t3",
      "label": "Secure Boot & Cryptographic Firmware Attestation",
      "description": "Ensuring microcontrollers execute only authentic, un-tampered vendor firmware.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t3_s1",
      "label": "Immutable Root of Trust (RoT) in Read-Only Memory",
      "description": "Hardware-anchored boot code permanently stored in write-protected ROM.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t3_s1_d1",
      "label": "Mask ROM Bootloader Execution",
      "description": "Executing un-alterable factory boot code upon power-on reset.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t3_s1_d2",
      "label": "Embedded Public Verification Key Hashes",
      "description": "Storing OEM public key hashes permanently in OTP (One-Time Programmable) fuses.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t3_s2",
      "label": "Cryptographic Signature Verification (RSA-2048 / ECDSA P-256)",
      "description": "Verifying digital signatures appended to application firmware images before execution.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t3_s2_d1",
      "label": "SHA-256 Digest Hash Computation",
      "description": "Computing cryptographic hash of target firmware binary image.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t3_s2_d2",
      "label": "Asymmetric Signature Verification",
      "description": "Verifying signature using embedded OEM public key before jumping to application.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t3_s3",
      "label": "Anti-Rollback Security Counters (Monotonic Counters)",
      "description": "Preventing attackers from flashing older, vulnerable signed firmware versions.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t3_s3_d1",
      "label": "Hardware Monotonic Counter Inspection",
      "description": "Comparing firmware version numbers against internal OTP hardware counters.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t3_s3_d2",
      "label": "Banning Downgrade Attacks",
      "description": "Rejecting validly signed firmware images if version numbers are below current counter values.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t3_s4",
      "label": "Hardware Cryptography Accelerators (AES, SHA, TRNG)",
      "description": "On-chip hardware engines accelerating cryptographic calculations.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t3_s4_d1",
      "label": "True Random Number Generator (TRNG) Noise Sources",
      "description": "Generating unpredictable random seeds using thermal/ring oscillator noise.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t3_s4_d2",
      "label": "AES-128/256 Hardware Encryption Engine",
      "description": "Encrypting and decrypting data at line rate without CPU overhead.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t3_s5",
      "label": "Flash Readout Protection (RDP Levels 0, 1, 2)",
      "description": "Locking microcontroller Flash memory against external debugger extraction (JTAG/SWD).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t3_s5_d1",
      "label": "RDP Level 1 (Flash Debugger Access Blocked)",
      "description": "Blocking JTAG/SWD access to Flash while allowing mass chip erase to reset.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t3_s5_d2",
      "label": "RDP Level 2 (Permanent Chip Hardening)",
      "description": "Permanently disabling debug interface with zero possibility of override or regression.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t4",
      "label": "Embedded Hardware Security & Memory Protection Topic 4",
      "description": "Detailed first-principles mechanics for Embedded Hardware Security & Memory Protection topic 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t4_s1",
      "label": "Embedded Hardware Security & Memory Protection Topic 4 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Embedded Hardware Security & Memory Protection Topic 4 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t4_s1_d1",
      "label": "Embedded Hardware Security & Memory Protection Topic 4 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t4_s1_d2",
      "label": "Embedded Hardware Security & Memory Protection Topic 4 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 4 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t4_s2",
      "label": "Embedded Hardware Security & Memory Protection Topic 4 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Embedded Hardware Security & Memory Protection Topic 4 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t4_s2_d1",
      "label": "Embedded Hardware Security & Memory Protection Topic 4 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t4_s2_d2",
      "label": "Embedded Hardware Security & Memory Protection Topic 4 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 4 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t4_s3",
      "label": "Embedded Hardware Security & Memory Protection Topic 4 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Embedded Hardware Security & Memory Protection Topic 4 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t4_s3_d1",
      "label": "Embedded Hardware Security & Memory Protection Topic 4 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t4_s3_d2",
      "label": "Embedded Hardware Security & Memory Protection Topic 4 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 4 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t4_s4",
      "label": "Embedded Hardware Security & Memory Protection Topic 4 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Embedded Hardware Security & Memory Protection Topic 4 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t4_s4_d1",
      "label": "Embedded Hardware Security & Memory Protection Topic 4 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t4_s4_d2",
      "label": "Embedded Hardware Security & Memory Protection Topic 4 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 4 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t4_s5",
      "label": "Embedded Hardware Security & Memory Protection Topic 4 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Embedded Hardware Security & Memory Protection Topic 4 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t4_s5_d1",
      "label": "Embedded Hardware Security & Memory Protection Topic 4 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t4_s5_d2",
      "label": "Embedded Hardware Security & Memory Protection Topic 4 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 4 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t5",
      "label": "Embedded Hardware Security & Memory Protection Topic 5",
      "description": "Detailed first-principles mechanics for Embedded Hardware Security & Memory Protection topic 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t5_s1",
      "label": "Embedded Hardware Security & Memory Protection Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Embedded Hardware Security & Memory Protection Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t5_s1_d1",
      "label": "Embedded Hardware Security & Memory Protection Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t5_s1_d2",
      "label": "Embedded Hardware Security & Memory Protection Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t5_s2",
      "label": "Embedded Hardware Security & Memory Protection Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Embedded Hardware Security & Memory Protection Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t5_s2_d1",
      "label": "Embedded Hardware Security & Memory Protection Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t5_s2_d2",
      "label": "Embedded Hardware Security & Memory Protection Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t5_s3",
      "label": "Embedded Hardware Security & Memory Protection Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Embedded Hardware Security & Memory Protection Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t5_s3_d1",
      "label": "Embedded Hardware Security & Memory Protection Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t5_s3_d2",
      "label": "Embedded Hardware Security & Memory Protection Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t5_s4",
      "label": "Embedded Hardware Security & Memory Protection Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Embedded Hardware Security & Memory Protection Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t5_s4_d1",
      "label": "Embedded Hardware Security & Memory Protection Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t5_s4_d2",
      "label": "Embedded Hardware Security & Memory Protection Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t5_s5",
      "label": "Embedded Hardware Security & Memory Protection Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Embedded Hardware Security & Memory Protection Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t5_s5_d1",
      "label": "Embedded Hardware Security & Memory Protection Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t5_s5_d2",
      "label": "Embedded Hardware Security & Memory Protection Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t6",
      "label": "Embedded Hardware Security & Memory Protection Topic 6",
      "description": "Detailed first-principles mechanics for Embedded Hardware Security & Memory Protection topic 6.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t6_s1",
      "label": "Embedded Hardware Security & Memory Protection Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Embedded Hardware Security & Memory Protection Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t6_s1_d1",
      "label": "Embedded Hardware Security & Memory Protection Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t6_s1_d2",
      "label": "Embedded Hardware Security & Memory Protection Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t6_s2",
      "label": "Embedded Hardware Security & Memory Protection Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Embedded Hardware Security & Memory Protection Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t6_s2_d1",
      "label": "Embedded Hardware Security & Memory Protection Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t6_s2_d2",
      "label": "Embedded Hardware Security & Memory Protection Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t6_s3",
      "label": "Embedded Hardware Security & Memory Protection Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Embedded Hardware Security & Memory Protection Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t6_s3_d1",
      "label": "Embedded Hardware Security & Memory Protection Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t6_s3_d2",
      "label": "Embedded Hardware Security & Memory Protection Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t6_s4",
      "label": "Embedded Hardware Security & Memory Protection Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Embedded Hardware Security & Memory Protection Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t6_s4_d1",
      "label": "Embedded Hardware Security & Memory Protection Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t6_s4_d2",
      "label": "Embedded Hardware Security & Memory Protection Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t6_s5",
      "label": "Embedded Hardware Security & Memory Protection Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Embedded Hardware Security & Memory Protection Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t6_s5_d1",
      "label": "Embedded Hardware Security & Memory Protection Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p7_t6_s5_d2",
      "label": "Embedded Hardware Security & Memory Protection Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded Hardware Security & Memory Protection Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems",
      "description": "Volatile keyword, Memory-aligned pointers, Bare-metal startup assembly, and Linker scripts (.ld) sections.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t1",
      "label": "GNU Linker Scripts (.ld) & Memory Section Layout",
      "description": "Controlling physical memory allocation and section placement during build compilation.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t1_s1",
      "label": "MEMORY Command Region Definitions (FLASH, RAM, CCM)",
      "description": "Defining physical memory regions, base addresses, and lengths in linker scripts.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t1_s1_d1",
      "label": "Region Syntax (FLASH (rx) : ORIGIN = 0x08000000, LENGTH = 512K)",
      "description": "Specifying origin address and size attributes.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t1_s1_d2",
      "label": "RAM Syntax (RAM (rwx) : ORIGIN = 0x20000000, LENGTH = 128K)",
      "description": "Configuring volatile RAM memory boundaries.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t1_s2",
      "label": "SECTIONS Command Output Mapping (.text, .rodata, .data, .bss)",
      "description": "Mapping input object file sections to output physical memory regions.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t1_s2_d1",
      "label": ".text Section (Executable Code) -> FLASH",
      "description": "Placing compiled machine code instructions in Flash memory.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t1_s2_d2",
      "label": ".rodata Section (Read-Only Constants) -> FLASH",
      "description": "Storing const variables and string literals in Flash.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t1_s2_d3",
      "label": ".data Section (Initialized Globals) -> RAM AT > FLASH",
      "description": "Storing load addresses (LMA) in Flash and execution addresses (VMA) in RAM.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t1_s2_d4",
      "label": ".bss Section (Zero-Initialized Globals) -> RAM",
      "description": "Allocating un-initialized global variables in RAM.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t1_s3",
      "label": "Linker Symbols & C/C++ Variable Access (_sdata, _edata, _sbss, _ebss)",
      "description": "Exporting memory section boundary symbols to C/C++ startup code.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t1_s3_d1",
      "label": "Location Counter (.) Manipulation",
      "description": "Advancing location counters to calculate section start and end addresses.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t1_s3_d2",
      "label": "Accessing Linker Symbols in C Code (extern uint32_t _sdata)",
      "description": "Taking addresses of linker symbols to locate memory boundaries in C.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t1_s4",
      "label": "ALIGN() Directives & Boundary Padding",
      "description": "Aligning section start addresses to hardware-required boundaries.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t1_s4_d1",
      "label": "ALIGN(4) Word Alignment Directives",
      "description": "Ensuring sections start on 4-byte boundaries for 32-bit CPU access.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t1_s4_d2",
      "label": "ALIGN(256) MPU & Vector Table Alignment",
      "description": "Aligning vector tables to 256-byte or 512-byte boundaries as required by VTOR.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t1_s5",
      "label": "Custom Memory Section Attributes (__attribute__((section(\".ccmram\"))))",
      "description": "Placing specific variables or functions in specialized memory regions.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t1_s5_d1",
      "label": "Placing Fast ISR Functions in CCM RAM",
      "description": "Directing linker to place high-speed functions in core-coupled RAM.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t1_s5_d2",
      "label": "Placing Non-Volatile Logs in Backup SRAM",
      "description": "Assigning persistent variables to battery-backed SRAM sections.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t2",
      "label": "Embedded C/C++ Data Alignment & Packing",
      "description": "Managing struct layout alignment, padding bytes, and un-aligned memory accesses.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t2_s1",
      "label": "Natural Alignment Rules & Compiler Padding Bytes",
      "description": "Compiler insertion of padding bytes to align N-byte types to N-byte memory addresses.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t2_s1_d1",
      "label": "Natural Alignment Constraints (int32 aligned to 4-byte addresses)",
      "description": "Ensuring 32-bit integers start at addresses divisible by 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t2_s1_d2",
      "label": "Struct Size Inflation (Padding Insertion)",
      "description": "Inserting implicit padding bytes between struct fields, inflating total struct size.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t2_s2",
      "label": "__attribute__((packed)) & #pragma pack(1) Overrides",
      "description": "Forcing compilers to eliminate padding bytes for compact network/bus structures.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t2_s2_d1",
      "label": "Zero Padding Byte Storage",
      "description": "Creating compact structs matching exact wire protocol byte layouts.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t2_s2_d2",
      "label": "Un-Aligned Memory Access Hazard",
      "description": "Creating fields at odd byte addresses causing CPU execution penalties.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t2_s3",
      "label": "ARM Hardware Un-Aligned Access Faults (UsageFault)",
      "description": "Hardware exceptions caused by multi-byte reads at un-aligned addresses.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t2_s3_d1",
      "label": "Cortex-M0 Un-Aligned Access Inability",
      "description": "Cortex-M0 processors throwing UsageFault traps on any un-aligned 16-bit or 32-bit access.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t2_s3_d2",
      "label": "Cortex-M3/M4 Multi-Cycle Un-Aligned Access Penalty",
      "description": "Splitting un-aligned accesses into multiple memory cycles on Cortex-M3/M4 cores.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t2_s4",
      "label": "Safe Un-Aligned Data Deserialization (memcpy Pattern)",
      "description": "Safely extracting structured data from raw un-aligned byte buffers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t2_s4_d1",
      "label": "Byte-by-Byte Assembly via memcpy()",
      "description": "Using memcpy to copy un-aligned buffer bytes into aligned stack variables.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t2_s4_d2",
      "label": "Zero Fault Guarantee across All Architectures",
      "description": "Ensuring 100% portable and fault-free execution across all ARM cores.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t2_s5",
      "label": "Re-ordering Struct Fields for Optimal Packing",
      "description": "Manually ordering struct fields by decreasing size to eliminate padding naturally.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t2_s5_d1",
      "label": "Largest-to-Smallest Field Ordering (uint64 -> uint32 -> uint16 -> uint8)",
      "description": "Eliminating all internal padding bytes without using __attribute__((packed)).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t2_s5_d2",
      "label": "Combining Optimal Alignment with Minimal Memory Size",
      "description": "Achieving compact memory footprints while preserving fast natural alignment access.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t3",
      "label": "Compiler Toolchain Optimization Flags (-O2, -Os, -flto)",
      "description": "GCC/Clang optimization flags tailored for constrained embedded targets.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t3_s1",
      "label": "-Os (Optimize for Size) vs -O2 / -O3 (Optimize for Speed)",
      "description": "Selecting compiler optimization goals balancing binary size against execution speed.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t3_s1_d1",
      "label": "-Os Size Minimization Passes",
      "description": "Disabling loop unrolling and function inlining to fit code inside limited Flash memory.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t3_s1_d2",
      "label": "-O3 Speed Optimization Overhead",
      "description": "Maximizing loop unrolling and vectorization at the cost of binary size inflation.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t3_s2",
      "label": "-ffunction-sections & -fdata-sections Flag Combo",
      "description": "Emitting every function and variable into its own individual section in object files.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t3_s2_d1",
      "label": "Creating Granular Section Objects (.text.func_name)",
      "description": "Isolating functions into separate sections during compilation.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t3_s2_d2",
      "label": "Enabling Dead Code Elimination at Link Time",
      "description": "Allowing linkers to identify and prune un-used individual functions.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t3_s3",
      "label": "Link-Time Garbage Collection (--gc-sections)",
      "description": "Linker flag deleting un-referenced sections from final ELF/HEX binaries.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t3_s3_d1",
      "label": "Pruning Un-Used Library Functions",
      "description": "Deleting un-called functions from third-party C libraries (e.g. un-used printf code).",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t3_s3_d2",
      "label": "Reducing Flash Memory Usage by 30-50%",
      "description": "Shrinking binary sizes significantly.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t3_s4",
      "label": "Nanolib Floating Point & printf Reduction (--specs=nano.specs)",
      "description": "Linking lightweight C standard library implementations tailored for microcontrollers.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t3_s4_d1",
      "label": "nano.specs Size Reduction",
      "description": "Replacing heavy glibc functions with compact Newlib-nano implementations.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t3_s4_d2",
      "label": "Disabling Floating-Point printf Formatting (-u _printf_float)",
      "description": "Omitting floating-point formatting code from printf unless explicitly linked.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t3_s5",
      "label": "Map File Inspection & Binary Output Formats (.elf, .hex, .bin)",
      "description": "Auditing linker map files and generating binary flash images.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t3_s5_d1",
      "label": "Linker Map File (.map) Section Size Auditing",
      "description": "Analyzing map files to identify memory-hogging functions and global arrays.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t3_s5_d2",
      "label": "Intel HEX (.hex) & Raw Binary (.bin) Conversion (objcopy)",
      "description": "Converting ELF executables into raw binary images for flashing tools.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t4",
      "label": "Static Code Analysis & MISRA C Rules Engine",
      "description": "Enforcing safety-critical C programming rules to prevent runtime bugs.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t4_s1",
      "label": "MISRA C:2012 Guidelines for Safety-Critical Systems",
      "description": "Software development standards restricting hazardous C language constructs.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t4_s1_d1",
      "label": "Banning Dynamic Memory Allocation (Rule 21.3 - Banning malloc/free)",
      "description": "Preventing heap fragmentation, memory leaks, and non-deterministic allocation delays.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t4_s1_d2",
      "label": "Banning Un-Bounded Recursive Functions (Rule 17.2)",
      "description": "Preventing catastrophic stack overflow crashes.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t4_s2",
      "label": "Strict Type Initializations & Explicit Casts",
      "description": "Eliminating implicit type conversions and un-initialized variables.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t4_s2_d1",
      "label": "Mandatory Variable Initializations (Rule 9.1)",
      "description": "Ensuring all local variables are explicitly initialized before use.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t4_s2_d2",
      "label": "Explicit Narrowing Cast Enforcement",
      "description": "Requiring explicit casts when converting wider types to narrower types.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t4_s3",
      "label": "Single Point of Exit Function Rule (Rule 15.5)",
      "description": "Requiring functions to have single return statements at their end.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t4_s3_d1",
      "label": "Structured Single Return Flow",
      "description": "Ensuring all cleanup and resource release code executes prior to exit.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t4_s3_d2",
      "label": "Simplifying Formal Code Audits",
      "description": "Making control flow paths straightforward to verify.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t4_s4",
      "label": "Static Analysis Tool Integration (Cppcheck / SonarQube / C-STAT)",
      "description": "Automating MISRA rule compliance checks in CI/CD build pipelines.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t4_s4_d1",
      "label": "Automated Static Code Analysis Passes",
      "description": "Scanning source code for null pointer dereferences, array out-of-bounds, and un-reachable code.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t4_s4_d2",
      "label": "Blocking Non-Compliant PR Merges",
      "description": "Enforcing 100% MISRA rule compliance before code merge.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t4_s5",
      "label": "Defensive Programming & Runtime Assertions (configASSERT / assert)",
      "description": "Embedding runtime sanity checks to catch invalid parameters in development builds.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t4_s5_d1",
      "label": "Null Pointer & Out-of-Bounds Parameter Verification",
      "description": "Trapping invalid function parameters instantly during development.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t4_s5_d2",
      "label": "Production Safe Fallback Behavior",
      "description": "Logging errors and resetting system gracefully if assertions fail in production builds.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t5",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5",
      "description": "Detailed first-principles mechanics for Embedded C/C++ Optimization & Bare-Metal Build Systems topic 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t5_s1",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t5_s1_d1",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t5_s1_d2",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t5_s2",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t5_s2_d1",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t5_s2_d2",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t5_s3",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t5_s3_d1",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t5_s3_d2",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t5_s4",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t5_s4_d1",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t5_s4_d2",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t5_s5",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t5_s5_d1",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t5_s5_d2",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t6",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6",
      "description": "Detailed first-principles mechanics for Embedded C/C++ Optimization & Bare-Metal Build Systems topic 6.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t6_s1",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t6_s1_d1",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t6_s1_d2",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t6_s2",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t6_s2_d1",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t6_s2_d2",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t6_s3",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t6_s3_d1",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t6_s3_d2",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t6_s4",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t6_s4_d1",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t6_s4_d2",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t6_s5",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t6_s5_d1",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "embedded_root_p8_t6_s5_d2",
      "label": "Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Embedded C/C++ Optimization & Bare-Metal Build Systems Topic 6 Sub-System 5.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "source": "embedded_root",
      "target": "embedded_root_p1"
    },
    {
      "source": "embedded_root_p1",
      "target": "embedded_root_p1_t1"
    },
    {
      "source": "embedded_root_p1_t1",
      "target": "embedded_root_p1_t1_s1"
    },
    {
      "source": "embedded_root_p1_t1_s1",
      "target": "embedded_root_p1_t1_s1_d1"
    },
    {
      "source": "embedded_root_p1_t1_s1",
      "target": "embedded_root_p1_t1_s1_d2"
    },
    {
      "source": "embedded_root_p1_t1",
      "target": "embedded_root_p1_t1_s2"
    },
    {
      "source": "embedded_root_p1_t1_s2",
      "target": "embedded_root_p1_t1_s2_d1"
    },
    {
      "source": "embedded_root_p1_t1_s2",
      "target": "embedded_root_p1_t1_s2_d2"
    },
    {
      "source": "embedded_root_p1_t1",
      "target": "embedded_root_p1_t1_s3"
    },
    {
      "source": "embedded_root_p1_t1_s3",
      "target": "embedded_root_p1_t1_s3_d1"
    },
    {
      "source": "embedded_root_p1_t1_s3",
      "target": "embedded_root_p1_t1_s3_d2"
    },
    {
      "source": "embedded_root_p1_t1",
      "target": "embedded_root_p1_t1_s4"
    },
    {
      "source": "embedded_root_p1_t1_s4",
      "target": "embedded_root_p1_t1_s4_d1"
    },
    {
      "source": "embedded_root_p1_t1_s4",
      "target": "embedded_root_p1_t1_s4_d2"
    },
    {
      "source": "embedded_root_p1_t1",
      "target": "embedded_root_p1_t1_s5"
    },
    {
      "source": "embedded_root_p1_t1_s5",
      "target": "embedded_root_p1_t1_s5_d1"
    },
    {
      "source": "embedded_root_p1_t1_s5",
      "target": "embedded_root_p1_t1_s5_d2"
    },
    {
      "source": "embedded_root_p1",
      "target": "embedded_root_p1_t2"
    },
    {
      "source": "embedded_root_p1_t2",
      "target": "embedded_root_p1_t2_s1"
    },
    {
      "source": "embedded_root_p1_t2_s1",
      "target": "embedded_root_p1_t2_s1_d1"
    },
    {
      "source": "embedded_root_p1_t2_s1",
      "target": "embedded_root_p1_t2_s1_d2"
    },
    {
      "source": "embedded_root_p1_t2",
      "target": "embedded_root_p1_t2_s2"
    },
    {
      "source": "embedded_root_p1_t2_s2",
      "target": "embedded_root_p1_t2_s2_d1"
    },
    {
      "source": "embedded_root_p1_t2_s2",
      "target": "embedded_root_p1_t2_s2_d2"
    },
    {
      "source": "embedded_root_p1_t2",
      "target": "embedded_root_p1_t2_s3"
    },
    {
      "source": "embedded_root_p1_t2_s3",
      "target": "embedded_root_p1_t2_s3_d1"
    },
    {
      "source": "embedded_root_p1_t2_s3",
      "target": "embedded_root_p1_t2_s3_d2"
    },
    {
      "source": "embedded_root_p1_t2",
      "target": "embedded_root_p1_t2_s4"
    },
    {
      "source": "embedded_root_p1_t2_s4",
      "target": "embedded_root_p1_t2_s4_d1"
    },
    {
      "source": "embedded_root_p1_t2_s4",
      "target": "embedded_root_p1_t2_s4_d2"
    },
    {
      "source": "embedded_root_p1_t2",
      "target": "embedded_root_p1_t2_s5"
    },
    {
      "source": "embedded_root_p1_t2_s5",
      "target": "embedded_root_p1_t2_s5_d1"
    },
    {
      "source": "embedded_root_p1_t2_s5",
      "target": "embedded_root_p1_t2_s5_d2"
    },
    {
      "source": "embedded_root_p1",
      "target": "embedded_root_p1_t3"
    },
    {
      "source": "embedded_root_p1_t3",
      "target": "embedded_root_p1_t3_s1"
    },
    {
      "source": "embedded_root_p1_t3_s1",
      "target": "embedded_root_p1_t3_s1_d1"
    },
    {
      "source": "embedded_root_p1_t3_s1",
      "target": "embedded_root_p1_t3_s1_d2"
    },
    {
      "source": "embedded_root_p1_t3",
      "target": "embedded_root_p1_t3_s2"
    },
    {
      "source": "embedded_root_p1_t3_s2",
      "target": "embedded_root_p1_t3_s2_d1"
    },
    {
      "source": "embedded_root_p1_t3_s2",
      "target": "embedded_root_p1_t3_s2_d2"
    },
    {
      "source": "embedded_root_p1_t3",
      "target": "embedded_root_p1_t3_s3"
    },
    {
      "source": "embedded_root_p1_t3_s3",
      "target": "embedded_root_p1_t3_s3_d1"
    },
    {
      "source": "embedded_root_p1_t3_s3",
      "target": "embedded_root_p1_t3_s3_d2"
    },
    {
      "source": "embedded_root_p1_t3",
      "target": "embedded_root_p1_t3_s4"
    },
    {
      "source": "embedded_root_p1_t3_s4",
      "target": "embedded_root_p1_t3_s4_d1"
    },
    {
      "source": "embedded_root_p1_t3_s4",
      "target": "embedded_root_p1_t3_s4_d2"
    },
    {
      "source": "embedded_root_p1_t3",
      "target": "embedded_root_p1_t3_s5"
    },
    {
      "source": "embedded_root_p1_t3_s5",
      "target": "embedded_root_p1_t3_s5_d1"
    },
    {
      "source": "embedded_root_p1_t3_s5",
      "target": "embedded_root_p1_t3_s5_d2"
    },
    {
      "source": "embedded_root_p1",
      "target": "embedded_root_p1_t4"
    },
    {
      "source": "embedded_root_p1_t4",
      "target": "embedded_root_p1_t4_s1"
    },
    {
      "source": "embedded_root_p1_t4_s1",
      "target": "embedded_root_p1_t4_s1_d1"
    },
    {
      "source": "embedded_root_p1_t4_s1",
      "target": "embedded_root_p1_t4_s1_d2"
    },
    {
      "source": "embedded_root_p1_t4",
      "target": "embedded_root_p1_t4_s2"
    },
    {
      "source": "embedded_root_p1_t4_s2",
      "target": "embedded_root_p1_t4_s2_d1"
    },
    {
      "source": "embedded_root_p1_t4_s2",
      "target": "embedded_root_p1_t4_s2_d2"
    },
    {
      "source": "embedded_root_p1_t4",
      "target": "embedded_root_p1_t4_s3"
    },
    {
      "source": "embedded_root_p1_t4_s3",
      "target": "embedded_root_p1_t4_s3_d1"
    },
    {
      "source": "embedded_root_p1_t4_s3",
      "target": "embedded_root_p1_t4_s3_d2"
    },
    {
      "source": "embedded_root_p1_t4",
      "target": "embedded_root_p1_t4_s4"
    },
    {
      "source": "embedded_root_p1_t4_s4",
      "target": "embedded_root_p1_t4_s4_d1"
    },
    {
      "source": "embedded_root_p1_t4_s4",
      "target": "embedded_root_p1_t4_s4_d2"
    },
    {
      "source": "embedded_root_p1_t4",
      "target": "embedded_root_p1_t4_s5"
    },
    {
      "source": "embedded_root_p1_t4_s5",
      "target": "embedded_root_p1_t4_s5_d1"
    },
    {
      "source": "embedded_root_p1_t4_s5",
      "target": "embedded_root_p1_t4_s5_d2"
    },
    {
      "source": "embedded_root_p1",
      "target": "embedded_root_p1_t5"
    },
    {
      "source": "embedded_root_p1_t5",
      "target": "embedded_root_p1_t5_s1"
    },
    {
      "source": "embedded_root_p1_t5_s1",
      "target": "embedded_root_p1_t5_s1_d1"
    },
    {
      "source": "embedded_root_p1_t5_s1",
      "target": "embedded_root_p1_t5_s1_d2"
    },
    {
      "source": "embedded_root_p1_t5",
      "target": "embedded_root_p1_t5_s2"
    },
    {
      "source": "embedded_root_p1_t5_s2",
      "target": "embedded_root_p1_t5_s2_d1"
    },
    {
      "source": "embedded_root_p1_t5_s2",
      "target": "embedded_root_p1_t5_s2_d2"
    },
    {
      "source": "embedded_root_p1_t5",
      "target": "embedded_root_p1_t5_s3"
    },
    {
      "source": "embedded_root_p1_t5_s3",
      "target": "embedded_root_p1_t5_s3_d1"
    },
    {
      "source": "embedded_root_p1_t5_s3",
      "target": "embedded_root_p1_t5_s3_d2"
    },
    {
      "source": "embedded_root_p1_t5",
      "target": "embedded_root_p1_t5_s4"
    },
    {
      "source": "embedded_root_p1_t5_s4",
      "target": "embedded_root_p1_t5_s4_d1"
    },
    {
      "source": "embedded_root_p1_t5_s4",
      "target": "embedded_root_p1_t5_s4_d2"
    },
    {
      "source": "embedded_root_p1_t5",
      "target": "embedded_root_p1_t5_s5"
    },
    {
      "source": "embedded_root_p1_t5_s5",
      "target": "embedded_root_p1_t5_s5_d1"
    },
    {
      "source": "embedded_root_p1_t5_s5",
      "target": "embedded_root_p1_t5_s5_d2"
    },
    {
      "source": "embedded_root_p1",
      "target": "embedded_root_p1_t6"
    },
    {
      "source": "embedded_root_p1_t6",
      "target": "embedded_root_p1_t6_s1"
    },
    {
      "source": "embedded_root_p1_t6_s1",
      "target": "embedded_root_p1_t6_s1_d1"
    },
    {
      "source": "embedded_root_p1_t6_s1",
      "target": "embedded_root_p1_t6_s1_d2"
    },
    {
      "source": "embedded_root_p1_t6",
      "target": "embedded_root_p1_t6_s2"
    },
    {
      "source": "embedded_root_p1_t6_s2",
      "target": "embedded_root_p1_t6_s2_d1"
    },
    {
      "source": "embedded_root_p1_t6_s2",
      "target": "embedded_root_p1_t6_s2_d2"
    },
    {
      "source": "embedded_root_p1_t6",
      "target": "embedded_root_p1_t6_s3"
    },
    {
      "source": "embedded_root_p1_t6_s3",
      "target": "embedded_root_p1_t6_s3_d1"
    },
    {
      "source": "embedded_root_p1_t6_s3",
      "target": "embedded_root_p1_t6_s3_d2"
    },
    {
      "source": "embedded_root_p1_t6",
      "target": "embedded_root_p1_t6_s4"
    },
    {
      "source": "embedded_root_p1_t6_s4",
      "target": "embedded_root_p1_t6_s4_d1"
    },
    {
      "source": "embedded_root_p1_t6_s4",
      "target": "embedded_root_p1_t6_s4_d2"
    },
    {
      "source": "embedded_root_p1_t6",
      "target": "embedded_root_p1_t6_s5"
    },
    {
      "source": "embedded_root_p1_t6_s5",
      "target": "embedded_root_p1_t6_s5_d1"
    },
    {
      "source": "embedded_root_p1_t6_s5",
      "target": "embedded_root_p1_t6_s5_d2"
    },
    {
      "source": "embedded_root",
      "target": "embedded_root_p2"
    },
    {
      "source": "embedded_root_p2",
      "target": "embedded_root_p2_t1"
    },
    {
      "source": "embedded_root_p2_t1",
      "target": "embedded_root_p2_t1_s1"
    },
    {
      "source": "embedded_root_p2_t1_s1",
      "target": "embedded_root_p2_t1_s1_d1"
    },
    {
      "source": "embedded_root_p2_t1_s1",
      "target": "embedded_root_p2_t1_s1_d2"
    },
    {
      "source": "embedded_root_p2_t1",
      "target": "embedded_root_p2_t1_s2"
    },
    {
      "source": "embedded_root_p2_t1_s2",
      "target": "embedded_root_p2_t1_s2_d1"
    },
    {
      "source": "embedded_root_p2_t1_s2",
      "target": "embedded_root_p2_t1_s2_d2"
    },
    {
      "source": "embedded_root_p2_t1",
      "target": "embedded_root_p2_t1_s3"
    },
    {
      "source": "embedded_root_p2_t1_s3",
      "target": "embedded_root_p2_t1_s3_d1"
    },
    {
      "source": "embedded_root_p2_t1_s3",
      "target": "embedded_root_p2_t1_s3_d2"
    },
    {
      "source": "embedded_root_p2_t1",
      "target": "embedded_root_p2_t1_s4"
    },
    {
      "source": "embedded_root_p2_t1_s4",
      "target": "embedded_root_p2_t1_s4_d1"
    },
    {
      "source": "embedded_root_p2_t1_s4",
      "target": "embedded_root_p2_t1_s4_d2"
    },
    {
      "source": "embedded_root_p2_t1",
      "target": "embedded_root_p2_t1_s5"
    },
    {
      "source": "embedded_root_p2_t1_s5",
      "target": "embedded_root_p2_t1_s5_d1"
    },
    {
      "source": "embedded_root_p2_t1_s5",
      "target": "embedded_root_p2_t1_s5_d2"
    },
    {
      "source": "embedded_root_p2",
      "target": "embedded_root_p2_t2"
    },
    {
      "source": "embedded_root_p2_t2",
      "target": "embedded_root_p2_t2_s1"
    },
    {
      "source": "embedded_root_p2_t2_s1",
      "target": "embedded_root_p2_t2_s1_d1"
    },
    {
      "source": "embedded_root_p2_t2_s1",
      "target": "embedded_root_p2_t2_s1_d2"
    },
    {
      "source": "embedded_root_p2_t2",
      "target": "embedded_root_p2_t2_s2"
    },
    {
      "source": "embedded_root_p2_t2_s2",
      "target": "embedded_root_p2_t2_s2_d1"
    },
    {
      "source": "embedded_root_p2_t2_s2",
      "target": "embedded_root_p2_t2_s2_d2"
    },
    {
      "source": "embedded_root_p2_t2",
      "target": "embedded_root_p2_t2_s3"
    },
    {
      "source": "embedded_root_p2_t2_s3",
      "target": "embedded_root_p2_t2_s3_d1"
    },
    {
      "source": "embedded_root_p2_t2_s3",
      "target": "embedded_root_p2_t2_s3_d2"
    },
    {
      "source": "embedded_root_p2_t2",
      "target": "embedded_root_p2_t2_s4"
    },
    {
      "source": "embedded_root_p2_t2_s4",
      "target": "embedded_root_p2_t2_s4_d1"
    },
    {
      "source": "embedded_root_p2_t2_s4",
      "target": "embedded_root_p2_t2_s4_d2"
    },
    {
      "source": "embedded_root_p2_t2",
      "target": "embedded_root_p2_t2_s5"
    },
    {
      "source": "embedded_root_p2_t2_s5",
      "target": "embedded_root_p2_t2_s5_d1"
    },
    {
      "source": "embedded_root_p2_t2_s5",
      "target": "embedded_root_p2_t2_s5_d2"
    },
    {
      "source": "embedded_root_p2",
      "target": "embedded_root_p2_t3"
    },
    {
      "source": "embedded_root_p2_t3",
      "target": "embedded_root_p2_t3_s1"
    },
    {
      "source": "embedded_root_p2_t3_s1",
      "target": "embedded_root_p2_t3_s1_d1"
    },
    {
      "source": "embedded_root_p2_t3_s1",
      "target": "embedded_root_p2_t3_s1_d2"
    },
    {
      "source": "embedded_root_p2_t3",
      "target": "embedded_root_p2_t3_s2"
    },
    {
      "source": "embedded_root_p2_t3_s2",
      "target": "embedded_root_p2_t3_s2_d1"
    },
    {
      "source": "embedded_root_p2_t3_s2",
      "target": "embedded_root_p2_t3_s2_d2"
    },
    {
      "source": "embedded_root_p2_t3",
      "target": "embedded_root_p2_t3_s3"
    },
    {
      "source": "embedded_root_p2_t3_s3",
      "target": "embedded_root_p2_t3_s3_d1"
    },
    {
      "source": "embedded_root_p2_t3_s3",
      "target": "embedded_root_p2_t3_s3_d2"
    },
    {
      "source": "embedded_root_p2_t3",
      "target": "embedded_root_p2_t3_s4"
    },
    {
      "source": "embedded_root_p2_t3_s4",
      "target": "embedded_root_p2_t3_s4_d1"
    },
    {
      "source": "embedded_root_p2_t3_s4",
      "target": "embedded_root_p2_t3_s4_d2"
    },
    {
      "source": "embedded_root_p2_t3",
      "target": "embedded_root_p2_t3_s5"
    },
    {
      "source": "embedded_root_p2_t3_s5",
      "target": "embedded_root_p2_t3_s5_d1"
    },
    {
      "source": "embedded_root_p2_t3_s5",
      "target": "embedded_root_p2_t3_s5_d2"
    },
    {
      "source": "embedded_root_p2",
      "target": "embedded_root_p2_t4"
    },
    {
      "source": "embedded_root_p2_t4",
      "target": "embedded_root_p2_t4_s1"
    },
    {
      "source": "embedded_root_p2_t4_s1",
      "target": "embedded_root_p2_t4_s1_d1"
    },
    {
      "source": "embedded_root_p2_t4_s1",
      "target": "embedded_root_p2_t4_s1_d2"
    },
    {
      "source": "embedded_root_p2_t4",
      "target": "embedded_root_p2_t4_s2"
    },
    {
      "source": "embedded_root_p2_t4_s2",
      "target": "embedded_root_p2_t4_s2_d1"
    },
    {
      "source": "embedded_root_p2_t4_s2",
      "target": "embedded_root_p2_t4_s2_d2"
    },
    {
      "source": "embedded_root_p2_t4",
      "target": "embedded_root_p2_t4_s3"
    },
    {
      "source": "embedded_root_p2_t4_s3",
      "target": "embedded_root_p2_t4_s3_d1"
    },
    {
      "source": "embedded_root_p2_t4_s3",
      "target": "embedded_root_p2_t4_s3_d2"
    },
    {
      "source": "embedded_root_p2_t4",
      "target": "embedded_root_p2_t4_s4"
    },
    {
      "source": "embedded_root_p2_t4_s4",
      "target": "embedded_root_p2_t4_s4_d1"
    },
    {
      "source": "embedded_root_p2_t4_s4",
      "target": "embedded_root_p2_t4_s4_d2"
    },
    {
      "source": "embedded_root_p2_t4",
      "target": "embedded_root_p2_t4_s5"
    },
    {
      "source": "embedded_root_p2_t4_s5",
      "target": "embedded_root_p2_t4_s5_d1"
    },
    {
      "source": "embedded_root_p2_t4_s5",
      "target": "embedded_root_p2_t4_s5_d2"
    },
    {
      "source": "embedded_root_p2",
      "target": "embedded_root_p2_t5"
    },
    {
      "source": "embedded_root_p2_t5",
      "target": "embedded_root_p2_t5_s1"
    },
    {
      "source": "embedded_root_p2_t5_s1",
      "target": "embedded_root_p2_t5_s1_d1"
    },
    {
      "source": "embedded_root_p2_t5_s1",
      "target": "embedded_root_p2_t5_s1_d2"
    },
    {
      "source": "embedded_root_p2_t5",
      "target": "embedded_root_p2_t5_s2"
    },
    {
      "source": "embedded_root_p2_t5_s2",
      "target": "embedded_root_p2_t5_s2_d1"
    },
    {
      "source": "embedded_root_p2_t5_s2",
      "target": "embedded_root_p2_t5_s2_d2"
    },
    {
      "source": "embedded_root_p2_t5",
      "target": "embedded_root_p2_t5_s3"
    },
    {
      "source": "embedded_root_p2_t5_s3",
      "target": "embedded_root_p2_t5_s3_d1"
    },
    {
      "source": "embedded_root_p2_t5_s3",
      "target": "embedded_root_p2_t5_s3_d2"
    },
    {
      "source": "embedded_root_p2_t5",
      "target": "embedded_root_p2_t5_s4"
    },
    {
      "source": "embedded_root_p2_t5_s4",
      "target": "embedded_root_p2_t5_s4_d1"
    },
    {
      "source": "embedded_root_p2_t5_s4",
      "target": "embedded_root_p2_t5_s4_d2"
    },
    {
      "source": "embedded_root_p2_t5",
      "target": "embedded_root_p2_t5_s5"
    },
    {
      "source": "embedded_root_p2_t5_s5",
      "target": "embedded_root_p2_t5_s5_d1"
    },
    {
      "source": "embedded_root_p2_t5_s5",
      "target": "embedded_root_p2_t5_s5_d2"
    },
    {
      "source": "embedded_root_p2",
      "target": "embedded_root_p2_t6"
    },
    {
      "source": "embedded_root_p2_t6",
      "target": "embedded_root_p2_t6_s1"
    },
    {
      "source": "embedded_root_p2_t6_s1",
      "target": "embedded_root_p2_t6_s1_d1"
    },
    {
      "source": "embedded_root_p2_t6_s1",
      "target": "embedded_root_p2_t6_s1_d2"
    },
    {
      "source": "embedded_root_p2_t6",
      "target": "embedded_root_p2_t6_s2"
    },
    {
      "source": "embedded_root_p2_t6_s2",
      "target": "embedded_root_p2_t6_s2_d1"
    },
    {
      "source": "embedded_root_p2_t6_s2",
      "target": "embedded_root_p2_t6_s2_d2"
    },
    {
      "source": "embedded_root_p2_t6",
      "target": "embedded_root_p2_t6_s3"
    },
    {
      "source": "embedded_root_p2_t6_s3",
      "target": "embedded_root_p2_t6_s3_d1"
    },
    {
      "source": "embedded_root_p2_t6_s3",
      "target": "embedded_root_p2_t6_s3_d2"
    },
    {
      "source": "embedded_root_p2_t6",
      "target": "embedded_root_p2_t6_s4"
    },
    {
      "source": "embedded_root_p2_t6_s4",
      "target": "embedded_root_p2_t6_s4_d1"
    },
    {
      "source": "embedded_root_p2_t6_s4",
      "target": "embedded_root_p2_t6_s4_d2"
    },
    {
      "source": "embedded_root_p2_t6",
      "target": "embedded_root_p2_t6_s5"
    },
    {
      "source": "embedded_root_p2_t6_s5",
      "target": "embedded_root_p2_t6_s5_d1"
    },
    {
      "source": "embedded_root_p2_t6_s5",
      "target": "embedded_root_p2_t6_s5_d2"
    },
    {
      "source": "embedded_root",
      "target": "embedded_root_p3"
    },
    {
      "source": "embedded_root_p3",
      "target": "embedded_root_p3_t1"
    },
    {
      "source": "embedded_root_p3_t1",
      "target": "embedded_root_p3_t1_s1"
    },
    {
      "source": "embedded_root_p3_t1_s1",
      "target": "embedded_root_p3_t1_s1_d1"
    },
    {
      "source": "embedded_root_p3_t1_s1",
      "target": "embedded_root_p3_t1_s1_d2"
    },
    {
      "source": "embedded_root_p3_t1_s1",
      "target": "embedded_root_p3_t1_s1_d3"
    },
    {
      "source": "embedded_root_p3_t1",
      "target": "embedded_root_p3_t1_s2"
    },
    {
      "source": "embedded_root_p3_t1_s2",
      "target": "embedded_root_p3_t1_s2_d1"
    },
    {
      "source": "embedded_root_p3_t1_s2",
      "target": "embedded_root_p3_t1_s2_d2"
    },
    {
      "source": "embedded_root_p3_t1",
      "target": "embedded_root_p3_t1_s3"
    },
    {
      "source": "embedded_root_p3_t1_s3",
      "target": "embedded_root_p3_t1_s3_d1"
    },
    {
      "source": "embedded_root_p3_t1_s3",
      "target": "embedded_root_p3_t1_s3_d2"
    },
    {
      "source": "embedded_root_p3_t1",
      "target": "embedded_root_p3_t1_s4"
    },
    {
      "source": "embedded_root_p3_t1_s4",
      "target": "embedded_root_p3_t1_s4_d1"
    },
    {
      "source": "embedded_root_p3_t1_s4",
      "target": "embedded_root_p3_t1_s4_d2"
    },
    {
      "source": "embedded_root_p3_t1",
      "target": "embedded_root_p3_t1_s5"
    },
    {
      "source": "embedded_root_p3_t1_s5",
      "target": "embedded_root_p3_t1_s5_d1"
    },
    {
      "source": "embedded_root_p3_t1_s5",
      "target": "embedded_root_p3_t1_s5_d2"
    },
    {
      "source": "embedded_root_p3",
      "target": "embedded_root_p3_t2"
    },
    {
      "source": "embedded_root_p3_t2",
      "target": "embedded_root_p3_t2_s1"
    },
    {
      "source": "embedded_root_p3_t2_s1",
      "target": "embedded_root_p3_t2_s1_d1"
    },
    {
      "source": "embedded_root_p3_t2_s1",
      "target": "embedded_root_p3_t2_s1_d2"
    },
    {
      "source": "embedded_root_p3_t2",
      "target": "embedded_root_p3_t2_s2"
    },
    {
      "source": "embedded_root_p3_t2_s2",
      "target": "embedded_root_p3_t2_s2_d1"
    },
    {
      "source": "embedded_root_p3_t2_s2",
      "target": "embedded_root_p3_t2_s2_d2"
    },
    {
      "source": "embedded_root_p3_t2",
      "target": "embedded_root_p3_t2_s3"
    },
    {
      "source": "embedded_root_p3_t2_s3",
      "target": "embedded_root_p3_t2_s3_d1"
    },
    {
      "source": "embedded_root_p3_t2_s3",
      "target": "embedded_root_p3_t2_s3_d2"
    },
    {
      "source": "embedded_root_p3_t2",
      "target": "embedded_root_p3_t2_s4"
    },
    {
      "source": "embedded_root_p3_t2_s4",
      "target": "embedded_root_p3_t2_s4_d1"
    },
    {
      "source": "embedded_root_p3_t2_s4",
      "target": "embedded_root_p3_t2_s4_d2"
    },
    {
      "source": "embedded_root_p3_t2",
      "target": "embedded_root_p3_t2_s5"
    },
    {
      "source": "embedded_root_p3_t2_s5",
      "target": "embedded_root_p3_t2_s5_d1"
    },
    {
      "source": "embedded_root_p3_t2_s5",
      "target": "embedded_root_p3_t2_s5_d2"
    },
    {
      "source": "embedded_root_p3",
      "target": "embedded_root_p3_t3"
    },
    {
      "source": "embedded_root_p3_t3",
      "target": "embedded_root_p3_t3_s1"
    },
    {
      "source": "embedded_root_p3_t3_s1",
      "target": "embedded_root_p3_t3_s1_d1"
    },
    {
      "source": "embedded_root_p3_t3_s1",
      "target": "embedded_root_p3_t3_s1_d2"
    },
    {
      "source": "embedded_root_p3_t3",
      "target": "embedded_root_p3_t3_s2"
    },
    {
      "source": "embedded_root_p3_t3_s2",
      "target": "embedded_root_p3_t3_s2_d1"
    },
    {
      "source": "embedded_root_p3_t3_s2",
      "target": "embedded_root_p3_t3_s2_d2"
    },
    {
      "source": "embedded_root_p3_t3",
      "target": "embedded_root_p3_t3_s3"
    },
    {
      "source": "embedded_root_p3_t3_s3",
      "target": "embedded_root_p3_t3_s3_d1"
    },
    {
      "source": "embedded_root_p3_t3_s3",
      "target": "embedded_root_p3_t3_s3_d2"
    },
    {
      "source": "embedded_root_p3_t3",
      "target": "embedded_root_p3_t3_s4"
    },
    {
      "source": "embedded_root_p3_t3_s4",
      "target": "embedded_root_p3_t3_s4_d1"
    },
    {
      "source": "embedded_root_p3_t3_s4",
      "target": "embedded_root_p3_t3_s4_d2"
    },
    {
      "source": "embedded_root_p3_t3",
      "target": "embedded_root_p3_t3_s5"
    },
    {
      "source": "embedded_root_p3_t3_s5",
      "target": "embedded_root_p3_t3_s5_d1"
    },
    {
      "source": "embedded_root_p3_t3_s5",
      "target": "embedded_root_p3_t3_s5_d2"
    },
    {
      "source": "embedded_root_p3",
      "target": "embedded_root_p3_t4"
    },
    {
      "source": "embedded_root_p3_t4",
      "target": "embedded_root_p3_t4_s1"
    },
    {
      "source": "embedded_root_p3_t4_s1",
      "target": "embedded_root_p3_t4_s1_d1"
    },
    {
      "source": "embedded_root_p3_t4_s1",
      "target": "embedded_root_p3_t4_s1_d2"
    },
    {
      "source": "embedded_root_p3_t4_s1",
      "target": "embedded_root_p3_t4_s1_d3"
    },
    {
      "source": "embedded_root_p3_t4",
      "target": "embedded_root_p3_t4_s2"
    },
    {
      "source": "embedded_root_p3_t4_s2",
      "target": "embedded_root_p3_t4_s2_d1"
    },
    {
      "source": "embedded_root_p3_t4_s2",
      "target": "embedded_root_p3_t4_s2_d2"
    },
    {
      "source": "embedded_root_p3_t4",
      "target": "embedded_root_p3_t4_s3"
    },
    {
      "source": "embedded_root_p3_t4_s3",
      "target": "embedded_root_p3_t4_s3_d1"
    },
    {
      "source": "embedded_root_p3_t4_s3",
      "target": "embedded_root_p3_t4_s3_d2"
    },
    {
      "source": "embedded_root_p3_t4",
      "target": "embedded_root_p3_t4_s4"
    },
    {
      "source": "embedded_root_p3_t4_s4",
      "target": "embedded_root_p3_t4_s4_d1"
    },
    {
      "source": "embedded_root_p3_t4_s4",
      "target": "embedded_root_p3_t4_s4_d2"
    },
    {
      "source": "embedded_root_p3_t4",
      "target": "embedded_root_p3_t4_s5"
    },
    {
      "source": "embedded_root_p3_t4_s5",
      "target": "embedded_root_p3_t4_s5_d1"
    },
    {
      "source": "embedded_root_p3_t4_s5",
      "target": "embedded_root_p3_t4_s5_d2"
    },
    {
      "source": "embedded_root_p3",
      "target": "embedded_root_p3_t5"
    },
    {
      "source": "embedded_root_p3_t5",
      "target": "embedded_root_p3_t5_s1"
    },
    {
      "source": "embedded_root_p3_t5_s1",
      "target": "embedded_root_p3_t5_s1_d1"
    },
    {
      "source": "embedded_root_p3_t5_s1",
      "target": "embedded_root_p3_t5_s1_d2"
    },
    {
      "source": "embedded_root_p3_t5",
      "target": "embedded_root_p3_t5_s2"
    },
    {
      "source": "embedded_root_p3_t5_s2",
      "target": "embedded_root_p3_t5_s2_d1"
    },
    {
      "source": "embedded_root_p3_t5_s2",
      "target": "embedded_root_p3_t5_s2_d2"
    },
    {
      "source": "embedded_root_p3_t5",
      "target": "embedded_root_p3_t5_s3"
    },
    {
      "source": "embedded_root_p3_t5_s3",
      "target": "embedded_root_p3_t5_s3_d1"
    },
    {
      "source": "embedded_root_p3_t5_s3",
      "target": "embedded_root_p3_t5_s3_d2"
    },
    {
      "source": "embedded_root_p3_t5",
      "target": "embedded_root_p3_t5_s4"
    },
    {
      "source": "embedded_root_p3_t5_s4",
      "target": "embedded_root_p3_t5_s4_d1"
    },
    {
      "source": "embedded_root_p3_t5_s4",
      "target": "embedded_root_p3_t5_s4_d2"
    },
    {
      "source": "embedded_root_p3_t5",
      "target": "embedded_root_p3_t5_s5"
    },
    {
      "source": "embedded_root_p3_t5_s5",
      "target": "embedded_root_p3_t5_s5_d1"
    },
    {
      "source": "embedded_root_p3_t5_s5",
      "target": "embedded_root_p3_t5_s5_d2"
    },
    {
      "source": "embedded_root_p3",
      "target": "embedded_root_p3_t6"
    },
    {
      "source": "embedded_root_p3_t6",
      "target": "embedded_root_p3_t6_s1"
    },
    {
      "source": "embedded_root_p3_t6_s1",
      "target": "embedded_root_p3_t6_s1_d1"
    },
    {
      "source": "embedded_root_p3_t6_s1",
      "target": "embedded_root_p3_t6_s1_d2"
    },
    {
      "source": "embedded_root_p3_t6",
      "target": "embedded_root_p3_t6_s2"
    },
    {
      "source": "embedded_root_p3_t6_s2",
      "target": "embedded_root_p3_t6_s2_d1"
    },
    {
      "source": "embedded_root_p3_t6_s2",
      "target": "embedded_root_p3_t6_s2_d2"
    },
    {
      "source": "embedded_root_p3_t6",
      "target": "embedded_root_p3_t6_s3"
    },
    {
      "source": "embedded_root_p3_t6_s3",
      "target": "embedded_root_p3_t6_s3_d1"
    },
    {
      "source": "embedded_root_p3_t6_s3",
      "target": "embedded_root_p3_t6_s3_d2"
    },
    {
      "source": "embedded_root_p3_t6",
      "target": "embedded_root_p3_t6_s4"
    },
    {
      "source": "embedded_root_p3_t6_s4",
      "target": "embedded_root_p3_t6_s4_d1"
    },
    {
      "source": "embedded_root_p3_t6_s4",
      "target": "embedded_root_p3_t6_s4_d2"
    },
    {
      "source": "embedded_root_p3_t6",
      "target": "embedded_root_p3_t6_s5"
    },
    {
      "source": "embedded_root_p3_t6_s5",
      "target": "embedded_root_p3_t6_s5_d1"
    },
    {
      "source": "embedded_root_p3_t6_s5",
      "target": "embedded_root_p3_t6_s5_d2"
    },
    {
      "source": "embedded_root",
      "target": "embedded_root_p4"
    },
    {
      "source": "embedded_root_p4",
      "target": "embedded_root_p4_t1"
    },
    {
      "source": "embedded_root_p4_t1",
      "target": "embedded_root_p4_t1_s1"
    },
    {
      "source": "embedded_root_p4_t1_s1",
      "target": "embedded_root_p4_t1_s1_d1"
    },
    {
      "source": "embedded_root_p4_t1_s1",
      "target": "embedded_root_p4_t1_s1_d2"
    },
    {
      "source": "embedded_root_p4_t1",
      "target": "embedded_root_p4_t1_s2"
    },
    {
      "source": "embedded_root_p4_t1_s2",
      "target": "embedded_root_p4_t1_s2_d1"
    },
    {
      "source": "embedded_root_p4_t1_s2",
      "target": "embedded_root_p4_t1_s2_d2"
    },
    {
      "source": "embedded_root_p4_t1",
      "target": "embedded_root_p4_t1_s3"
    },
    {
      "source": "embedded_root_p4_t1_s3",
      "target": "embedded_root_p4_t1_s3_d1"
    },
    {
      "source": "embedded_root_p4_t1_s3",
      "target": "embedded_root_p4_t1_s3_d2"
    },
    {
      "source": "embedded_root_p4_t1",
      "target": "embedded_root_p4_t1_s4"
    },
    {
      "source": "embedded_root_p4_t1_s4",
      "target": "embedded_root_p4_t1_s4_d1"
    },
    {
      "source": "embedded_root_p4_t1_s4",
      "target": "embedded_root_p4_t1_s4_d2"
    },
    {
      "source": "embedded_root_p4_t1_s4",
      "target": "embedded_root_p4_t1_s4_d3"
    },
    {
      "source": "embedded_root_p4_t1",
      "target": "embedded_root_p4_t1_s5"
    },
    {
      "source": "embedded_root_p4_t1_s5",
      "target": "embedded_root_p4_t1_s5_d1"
    },
    {
      "source": "embedded_root_p4_t1_s5",
      "target": "embedded_root_p4_t1_s5_d2"
    },
    {
      "source": "embedded_root_p4",
      "target": "embedded_root_p4_t2"
    },
    {
      "source": "embedded_root_p4_t2",
      "target": "embedded_root_p4_t2_s1"
    },
    {
      "source": "embedded_root_p4_t2_s1",
      "target": "embedded_root_p4_t2_s1_d1"
    },
    {
      "source": "embedded_root_p4_t2_s1",
      "target": "embedded_root_p4_t2_s1_d2"
    },
    {
      "source": "embedded_root_p4_t2",
      "target": "embedded_root_p4_t2_s2"
    },
    {
      "source": "embedded_root_p4_t2_s2",
      "target": "embedded_root_p4_t2_s2_d1"
    },
    {
      "source": "embedded_root_p4_t2_s2",
      "target": "embedded_root_p4_t2_s2_d2"
    },
    {
      "source": "embedded_root_p4_t2",
      "target": "embedded_root_p4_t2_s3"
    },
    {
      "source": "embedded_root_p4_t2_s3",
      "target": "embedded_root_p4_t2_s3_d1"
    },
    {
      "source": "embedded_root_p4_t2_s3",
      "target": "embedded_root_p4_t2_s3_d2"
    },
    {
      "source": "embedded_root_p4_t2",
      "target": "embedded_root_p4_t2_s4"
    },
    {
      "source": "embedded_root_p4_t2_s4",
      "target": "embedded_root_p4_t2_s4_d1"
    },
    {
      "source": "embedded_root_p4_t2_s4",
      "target": "embedded_root_p4_t2_s4_d2"
    },
    {
      "source": "embedded_root_p4_t2",
      "target": "embedded_root_p4_t2_s5"
    },
    {
      "source": "embedded_root_p4_t2_s5",
      "target": "embedded_root_p4_t2_s5_d1"
    },
    {
      "source": "embedded_root_p4_t2_s5",
      "target": "embedded_root_p4_t2_s5_d2"
    },
    {
      "source": "embedded_root_p4",
      "target": "embedded_root_p4_t3"
    },
    {
      "source": "embedded_root_p4_t3",
      "target": "embedded_root_p4_t3_s1"
    },
    {
      "source": "embedded_root_p4_t3_s1",
      "target": "embedded_root_p4_t3_s1_d1"
    },
    {
      "source": "embedded_root_p4_t3_s1",
      "target": "embedded_root_p4_t3_s1_d2"
    },
    {
      "source": "embedded_root_p4_t3",
      "target": "embedded_root_p4_t3_s2"
    },
    {
      "source": "embedded_root_p4_t3_s2",
      "target": "embedded_root_p4_t3_s2_d1"
    },
    {
      "source": "embedded_root_p4_t3_s2",
      "target": "embedded_root_p4_t3_s2_d2"
    },
    {
      "source": "embedded_root_p4_t3",
      "target": "embedded_root_p4_t3_s3"
    },
    {
      "source": "embedded_root_p4_t3_s3",
      "target": "embedded_root_p4_t3_s3_d1"
    },
    {
      "source": "embedded_root_p4_t3_s3",
      "target": "embedded_root_p4_t3_s3_d2"
    },
    {
      "source": "embedded_root_p4_t3",
      "target": "embedded_root_p4_t3_s4"
    },
    {
      "source": "embedded_root_p4_t3_s4",
      "target": "embedded_root_p4_t3_s4_d1"
    },
    {
      "source": "embedded_root_p4_t3_s4",
      "target": "embedded_root_p4_t3_s4_d2"
    },
    {
      "source": "embedded_root_p4_t3",
      "target": "embedded_root_p4_t3_s5"
    },
    {
      "source": "embedded_root_p4_t3_s5",
      "target": "embedded_root_p4_t3_s5_d1"
    },
    {
      "source": "embedded_root_p4_t3_s5",
      "target": "embedded_root_p4_t3_s5_d2"
    },
    {
      "source": "embedded_root_p4",
      "target": "embedded_root_p4_t4"
    },
    {
      "source": "embedded_root_p4_t4",
      "target": "embedded_root_p4_t4_s1"
    },
    {
      "source": "embedded_root_p4_t4_s1",
      "target": "embedded_root_p4_t4_s1_d1"
    },
    {
      "source": "embedded_root_p4_t4_s1",
      "target": "embedded_root_p4_t4_s1_d2"
    },
    {
      "source": "embedded_root_p4_t4",
      "target": "embedded_root_p4_t4_s2"
    },
    {
      "source": "embedded_root_p4_t4_s2",
      "target": "embedded_root_p4_t4_s2_d1"
    },
    {
      "source": "embedded_root_p4_t4_s2",
      "target": "embedded_root_p4_t4_s2_d2"
    },
    {
      "source": "embedded_root_p4_t4",
      "target": "embedded_root_p4_t4_s3"
    },
    {
      "source": "embedded_root_p4_t4_s3",
      "target": "embedded_root_p4_t4_s3_d1"
    },
    {
      "source": "embedded_root_p4_t4_s3",
      "target": "embedded_root_p4_t4_s3_d2"
    },
    {
      "source": "embedded_root_p4_t4",
      "target": "embedded_root_p4_t4_s4"
    },
    {
      "source": "embedded_root_p4_t4_s4",
      "target": "embedded_root_p4_t4_s4_d1"
    },
    {
      "source": "embedded_root_p4_t4_s4",
      "target": "embedded_root_p4_t4_s4_d2"
    },
    {
      "source": "embedded_root_p4_t4",
      "target": "embedded_root_p4_t4_s5"
    },
    {
      "source": "embedded_root_p4_t4_s5",
      "target": "embedded_root_p4_t4_s5_d1"
    },
    {
      "source": "embedded_root_p4_t4_s5",
      "target": "embedded_root_p4_t4_s5_d2"
    },
    {
      "source": "embedded_root_p4",
      "target": "embedded_root_p4_t5"
    },
    {
      "source": "embedded_root_p4_t5",
      "target": "embedded_root_p4_t5_s1"
    },
    {
      "source": "embedded_root_p4_t5_s1",
      "target": "embedded_root_p4_t5_s1_d1"
    },
    {
      "source": "embedded_root_p4_t5_s1",
      "target": "embedded_root_p4_t5_s1_d2"
    },
    {
      "source": "embedded_root_p4_t5",
      "target": "embedded_root_p4_t5_s2"
    },
    {
      "source": "embedded_root_p4_t5_s2",
      "target": "embedded_root_p4_t5_s2_d1"
    },
    {
      "source": "embedded_root_p4_t5_s2",
      "target": "embedded_root_p4_t5_s2_d2"
    },
    {
      "source": "embedded_root_p4_t5",
      "target": "embedded_root_p4_t5_s3"
    },
    {
      "source": "embedded_root_p4_t5_s3",
      "target": "embedded_root_p4_t5_s3_d1"
    },
    {
      "source": "embedded_root_p4_t5_s3",
      "target": "embedded_root_p4_t5_s3_d2"
    },
    {
      "source": "embedded_root_p4_t5",
      "target": "embedded_root_p4_t5_s4"
    },
    {
      "source": "embedded_root_p4_t5_s4",
      "target": "embedded_root_p4_t5_s4_d1"
    },
    {
      "source": "embedded_root_p4_t5_s4",
      "target": "embedded_root_p4_t5_s4_d2"
    },
    {
      "source": "embedded_root_p4_t5",
      "target": "embedded_root_p4_t5_s5"
    },
    {
      "source": "embedded_root_p4_t5_s5",
      "target": "embedded_root_p4_t5_s5_d1"
    },
    {
      "source": "embedded_root_p4_t5_s5",
      "target": "embedded_root_p4_t5_s5_d2"
    },
    {
      "source": "embedded_root_p4",
      "target": "embedded_root_p4_t6"
    },
    {
      "source": "embedded_root_p4_t6",
      "target": "embedded_root_p4_t6_s1"
    },
    {
      "source": "embedded_root_p4_t6_s1",
      "target": "embedded_root_p4_t6_s1_d1"
    },
    {
      "source": "embedded_root_p4_t6_s1",
      "target": "embedded_root_p4_t6_s1_d2"
    },
    {
      "source": "embedded_root_p4_t6",
      "target": "embedded_root_p4_t6_s2"
    },
    {
      "source": "embedded_root_p4_t6_s2",
      "target": "embedded_root_p4_t6_s2_d1"
    },
    {
      "source": "embedded_root_p4_t6_s2",
      "target": "embedded_root_p4_t6_s2_d2"
    },
    {
      "source": "embedded_root_p4_t6",
      "target": "embedded_root_p4_t6_s3"
    },
    {
      "source": "embedded_root_p4_t6_s3",
      "target": "embedded_root_p4_t6_s3_d1"
    },
    {
      "source": "embedded_root_p4_t6_s3",
      "target": "embedded_root_p4_t6_s3_d2"
    },
    {
      "source": "embedded_root_p4_t6",
      "target": "embedded_root_p4_t6_s4"
    },
    {
      "source": "embedded_root_p4_t6_s4",
      "target": "embedded_root_p4_t6_s4_d1"
    },
    {
      "source": "embedded_root_p4_t6_s4",
      "target": "embedded_root_p4_t6_s4_d2"
    },
    {
      "source": "embedded_root_p4_t6",
      "target": "embedded_root_p4_t6_s5"
    },
    {
      "source": "embedded_root_p4_t6_s5",
      "target": "embedded_root_p4_t6_s5_d1"
    },
    {
      "source": "embedded_root_p4_t6_s5",
      "target": "embedded_root_p4_t6_s5_d2"
    },
    {
      "source": "embedded_root",
      "target": "embedded_root_p5"
    },
    {
      "source": "embedded_root_p5",
      "target": "embedded_root_p5_t1"
    },
    {
      "source": "embedded_root_p5_t1",
      "target": "embedded_root_p5_t1_s1"
    },
    {
      "source": "embedded_root_p5_t1_s1",
      "target": "embedded_root_p5_t1_s1_d1"
    },
    {
      "source": "embedded_root_p5_t1_s1",
      "target": "embedded_root_p5_t1_s1_d2"
    },
    {
      "source": "embedded_root_p5_t1_s1",
      "target": "embedded_root_p5_t1_s1_d3"
    },
    {
      "source": "embedded_root_p5_t1",
      "target": "embedded_root_p5_t1_s2"
    },
    {
      "source": "embedded_root_p5_t1_s2",
      "target": "embedded_root_p5_t1_s2_d1"
    },
    {
      "source": "embedded_root_p5_t1_s2",
      "target": "embedded_root_p5_t1_s2_d2"
    },
    {
      "source": "embedded_root_p5_t1_s2",
      "target": "embedded_root_p5_t1_s2_d3"
    },
    {
      "source": "embedded_root_p5_t1",
      "target": "embedded_root_p5_t1_s3"
    },
    {
      "source": "embedded_root_p5_t1_s3",
      "target": "embedded_root_p5_t1_s3_d1"
    },
    {
      "source": "embedded_root_p5_t1_s3",
      "target": "embedded_root_p5_t1_s3_d2"
    },
    {
      "source": "embedded_root_p5_t1",
      "target": "embedded_root_p5_t1_s4"
    },
    {
      "source": "embedded_root_p5_t1_s4",
      "target": "embedded_root_p5_t1_s4_d1"
    },
    {
      "source": "embedded_root_p5_t1_s4",
      "target": "embedded_root_p5_t1_s4_d2"
    },
    {
      "source": "embedded_root_p5_t1",
      "target": "embedded_root_p5_t1_s5"
    },
    {
      "source": "embedded_root_p5_t1_s5",
      "target": "embedded_root_p5_t1_s5_d1"
    },
    {
      "source": "embedded_root_p5_t1_s5",
      "target": "embedded_root_p5_t1_s5_d2"
    },
    {
      "source": "embedded_root_p5",
      "target": "embedded_root_p5_t2"
    },
    {
      "source": "embedded_root_p5_t2",
      "target": "embedded_root_p5_t2_s1"
    },
    {
      "source": "embedded_root_p5_t2_s1",
      "target": "embedded_root_p5_t2_s1_d1"
    },
    {
      "source": "embedded_root_p5_t2_s1",
      "target": "embedded_root_p5_t2_s1_d2"
    },
    {
      "source": "embedded_root_p5_t2",
      "target": "embedded_root_p5_t2_s2"
    },
    {
      "source": "embedded_root_p5_t2_s2",
      "target": "embedded_root_p5_t2_s2_d1"
    },
    {
      "source": "embedded_root_p5_t2_s2",
      "target": "embedded_root_p5_t2_s2_d2"
    },
    {
      "source": "embedded_root_p5_t2",
      "target": "embedded_root_p5_t2_s3"
    },
    {
      "source": "embedded_root_p5_t2_s3",
      "target": "embedded_root_p5_t2_s3_d1"
    },
    {
      "source": "embedded_root_p5_t2_s3",
      "target": "embedded_root_p5_t2_s3_d2"
    },
    {
      "source": "embedded_root_p5_t2",
      "target": "embedded_root_p5_t2_s4"
    },
    {
      "source": "embedded_root_p5_t2_s4",
      "target": "embedded_root_p5_t2_s4_d1"
    },
    {
      "source": "embedded_root_p5_t2_s4",
      "target": "embedded_root_p5_t2_s4_d2"
    },
    {
      "source": "embedded_root_p5_t2",
      "target": "embedded_root_p5_t2_s5"
    },
    {
      "source": "embedded_root_p5_t2_s5",
      "target": "embedded_root_p5_t2_s5_d1"
    },
    {
      "source": "embedded_root_p5_t2_s5",
      "target": "embedded_root_p5_t2_s5_d2"
    },
    {
      "source": "embedded_root_p5",
      "target": "embedded_root_p5_t3"
    },
    {
      "source": "embedded_root_p5_t3",
      "target": "embedded_root_p5_t3_s1"
    },
    {
      "source": "embedded_root_p5_t3_s1",
      "target": "embedded_root_p5_t3_s1_d1"
    },
    {
      "source": "embedded_root_p5_t3_s1",
      "target": "embedded_root_p5_t3_s1_d2"
    },
    {
      "source": "embedded_root_p5_t3",
      "target": "embedded_root_p5_t3_s2"
    },
    {
      "source": "embedded_root_p5_t3_s2",
      "target": "embedded_root_p5_t3_s2_d1"
    },
    {
      "source": "embedded_root_p5_t3_s2",
      "target": "embedded_root_p5_t3_s2_d2"
    },
    {
      "source": "embedded_root_p5_t3",
      "target": "embedded_root_p5_t3_s3"
    },
    {
      "source": "embedded_root_p5_t3_s3",
      "target": "embedded_root_p5_t3_s3_d1"
    },
    {
      "source": "embedded_root_p5_t3_s3",
      "target": "embedded_root_p5_t3_s3_d2"
    },
    {
      "source": "embedded_root_p5_t3",
      "target": "embedded_root_p5_t3_s4"
    },
    {
      "source": "embedded_root_p5_t3_s4",
      "target": "embedded_root_p5_t3_s4_d1"
    },
    {
      "source": "embedded_root_p5_t3_s4",
      "target": "embedded_root_p5_t3_s4_d2"
    },
    {
      "source": "embedded_root_p5_t3",
      "target": "embedded_root_p5_t3_s5"
    },
    {
      "source": "embedded_root_p5_t3_s5",
      "target": "embedded_root_p5_t3_s5_d1"
    },
    {
      "source": "embedded_root_p5_t3_s5",
      "target": "embedded_root_p5_t3_s5_d2"
    },
    {
      "source": "embedded_root_p5",
      "target": "embedded_root_p5_t4"
    },
    {
      "source": "embedded_root_p5_t4",
      "target": "embedded_root_p5_t4_s1"
    },
    {
      "source": "embedded_root_p5_t4_s1",
      "target": "embedded_root_p5_t4_s1_d1"
    },
    {
      "source": "embedded_root_p5_t4_s1",
      "target": "embedded_root_p5_t4_s1_d2"
    },
    {
      "source": "embedded_root_p5_t4",
      "target": "embedded_root_p5_t4_s2"
    },
    {
      "source": "embedded_root_p5_t4_s2",
      "target": "embedded_root_p5_t4_s2_d1"
    },
    {
      "source": "embedded_root_p5_t4_s2",
      "target": "embedded_root_p5_t4_s2_d2"
    },
    {
      "source": "embedded_root_p5_t4_s2",
      "target": "embedded_root_p5_t4_s2_d3"
    },
    {
      "source": "embedded_root_p5_t4",
      "target": "embedded_root_p5_t4_s3"
    },
    {
      "source": "embedded_root_p5_t4_s3",
      "target": "embedded_root_p5_t4_s3_d1"
    },
    {
      "source": "embedded_root_p5_t4_s3",
      "target": "embedded_root_p5_t4_s3_d2"
    },
    {
      "source": "embedded_root_p5_t4",
      "target": "embedded_root_p5_t4_s4"
    },
    {
      "source": "embedded_root_p5_t4_s4",
      "target": "embedded_root_p5_t4_s4_d1"
    },
    {
      "source": "embedded_root_p5_t4_s4",
      "target": "embedded_root_p5_t4_s4_d2"
    },
    {
      "source": "embedded_root_p5_t4",
      "target": "embedded_root_p5_t4_s5"
    },
    {
      "source": "embedded_root_p5_t4_s5",
      "target": "embedded_root_p5_t4_s5_d1"
    },
    {
      "source": "embedded_root_p5_t4_s5",
      "target": "embedded_root_p5_t4_s5_d2"
    },
    {
      "source": "embedded_root_p5",
      "target": "embedded_root_p5_t5"
    },
    {
      "source": "embedded_root_p5_t5",
      "target": "embedded_root_p5_t5_s1"
    },
    {
      "source": "embedded_root_p5_t5_s1",
      "target": "embedded_root_p5_t5_s1_d1"
    },
    {
      "source": "embedded_root_p5_t5_s1",
      "target": "embedded_root_p5_t5_s1_d2"
    },
    {
      "source": "embedded_root_p5_t5",
      "target": "embedded_root_p5_t5_s2"
    },
    {
      "source": "embedded_root_p5_t5_s2",
      "target": "embedded_root_p5_t5_s2_d1"
    },
    {
      "source": "embedded_root_p5_t5_s2",
      "target": "embedded_root_p5_t5_s2_d2"
    },
    {
      "source": "embedded_root_p5_t5",
      "target": "embedded_root_p5_t5_s3"
    },
    {
      "source": "embedded_root_p5_t5_s3",
      "target": "embedded_root_p5_t5_s3_d1"
    },
    {
      "source": "embedded_root_p5_t5_s3",
      "target": "embedded_root_p5_t5_s3_d2"
    },
    {
      "source": "embedded_root_p5_t5",
      "target": "embedded_root_p5_t5_s4"
    },
    {
      "source": "embedded_root_p5_t5_s4",
      "target": "embedded_root_p5_t5_s4_d1"
    },
    {
      "source": "embedded_root_p5_t5_s4",
      "target": "embedded_root_p5_t5_s4_d2"
    },
    {
      "source": "embedded_root_p5_t5",
      "target": "embedded_root_p5_t5_s5"
    },
    {
      "source": "embedded_root_p5_t5_s5",
      "target": "embedded_root_p5_t5_s5_d1"
    },
    {
      "source": "embedded_root_p5_t5_s5",
      "target": "embedded_root_p5_t5_s5_d2"
    },
    {
      "source": "embedded_root_p5",
      "target": "embedded_root_p5_t6"
    },
    {
      "source": "embedded_root_p5_t6",
      "target": "embedded_root_p5_t6_s1"
    },
    {
      "source": "embedded_root_p5_t6_s1",
      "target": "embedded_root_p5_t6_s1_d1"
    },
    {
      "source": "embedded_root_p5_t6_s1",
      "target": "embedded_root_p5_t6_s1_d2"
    },
    {
      "source": "embedded_root_p5_t6",
      "target": "embedded_root_p5_t6_s2"
    },
    {
      "source": "embedded_root_p5_t6_s2",
      "target": "embedded_root_p5_t6_s2_d1"
    },
    {
      "source": "embedded_root_p5_t6_s2",
      "target": "embedded_root_p5_t6_s2_d2"
    },
    {
      "source": "embedded_root_p5_t6",
      "target": "embedded_root_p5_t6_s3"
    },
    {
      "source": "embedded_root_p5_t6_s3",
      "target": "embedded_root_p5_t6_s3_d1"
    },
    {
      "source": "embedded_root_p5_t6_s3",
      "target": "embedded_root_p5_t6_s3_d2"
    },
    {
      "source": "embedded_root_p5_t6",
      "target": "embedded_root_p5_t6_s4"
    },
    {
      "source": "embedded_root_p5_t6_s4",
      "target": "embedded_root_p5_t6_s4_d1"
    },
    {
      "source": "embedded_root_p5_t6_s4",
      "target": "embedded_root_p5_t6_s4_d2"
    },
    {
      "source": "embedded_root_p5_t6",
      "target": "embedded_root_p5_t6_s5"
    },
    {
      "source": "embedded_root_p5_t6_s5",
      "target": "embedded_root_p5_t6_s5_d1"
    },
    {
      "source": "embedded_root_p5_t6_s5",
      "target": "embedded_root_p5_t6_s5_d2"
    },
    {
      "source": "embedded_root",
      "target": "embedded_root_p6"
    },
    {
      "source": "embedded_root_p6",
      "target": "embedded_root_p6_t1"
    },
    {
      "source": "embedded_root_p6_t1",
      "target": "embedded_root_p6_t1_s1"
    },
    {
      "source": "embedded_root_p6_t1_s1",
      "target": "embedded_root_p6_t1_s1_d1"
    },
    {
      "source": "embedded_root_p6_t1_s1",
      "target": "embedded_root_p6_t1_s1_d2"
    },
    {
      "source": "embedded_root_p6_t1",
      "target": "embedded_root_p6_t1_s2"
    },
    {
      "source": "embedded_root_p6_t1_s2",
      "target": "embedded_root_p6_t1_s2_d1"
    },
    {
      "source": "embedded_root_p6_t1_s2",
      "target": "embedded_root_p6_t1_s2_d2"
    },
    {
      "source": "embedded_root_p6_t1",
      "target": "embedded_root_p6_t1_s3"
    },
    {
      "source": "embedded_root_p6_t1_s3",
      "target": "embedded_root_p6_t1_s3_d1"
    },
    {
      "source": "embedded_root_p6_t1_s3",
      "target": "embedded_root_p6_t1_s3_d2"
    },
    {
      "source": "embedded_root_p6_t1",
      "target": "embedded_root_p6_t1_s4"
    },
    {
      "source": "embedded_root_p6_t1_s4",
      "target": "embedded_root_p6_t1_s4_d1"
    },
    {
      "source": "embedded_root_p6_t1_s4",
      "target": "embedded_root_p6_t1_s4_d2"
    },
    {
      "source": "embedded_root_p6_t1",
      "target": "embedded_root_p6_t1_s5"
    },
    {
      "source": "embedded_root_p6_t1_s5",
      "target": "embedded_root_p6_t1_s5_d1"
    },
    {
      "source": "embedded_root_p6_t1_s5",
      "target": "embedded_root_p6_t1_s5_d2"
    },
    {
      "source": "embedded_root_p6",
      "target": "embedded_root_p6_t2"
    },
    {
      "source": "embedded_root_p6_t2",
      "target": "embedded_root_p6_t2_s1"
    },
    {
      "source": "embedded_root_p6_t2_s1",
      "target": "embedded_root_p6_t2_s1_d1"
    },
    {
      "source": "embedded_root_p6_t2_s1",
      "target": "embedded_root_p6_t2_s1_d2"
    },
    {
      "source": "embedded_root_p6_t2",
      "target": "embedded_root_p6_t2_s2"
    },
    {
      "source": "embedded_root_p6_t2_s2",
      "target": "embedded_root_p6_t2_s2_d1"
    },
    {
      "source": "embedded_root_p6_t2_s2",
      "target": "embedded_root_p6_t2_s2_d2"
    },
    {
      "source": "embedded_root_p6_t2",
      "target": "embedded_root_p6_t2_s3"
    },
    {
      "source": "embedded_root_p6_t2_s3",
      "target": "embedded_root_p6_t2_s3_d1"
    },
    {
      "source": "embedded_root_p6_t2_s3",
      "target": "embedded_root_p6_t2_s3_d2"
    },
    {
      "source": "embedded_root_p6_t2",
      "target": "embedded_root_p6_t2_s4"
    },
    {
      "source": "embedded_root_p6_t2_s4",
      "target": "embedded_root_p6_t2_s4_d1"
    },
    {
      "source": "embedded_root_p6_t2_s4",
      "target": "embedded_root_p6_t2_s4_d2"
    },
    {
      "source": "embedded_root_p6_t2",
      "target": "embedded_root_p6_t2_s5"
    },
    {
      "source": "embedded_root_p6_t2_s5",
      "target": "embedded_root_p6_t2_s5_d1"
    },
    {
      "source": "embedded_root_p6_t2_s5",
      "target": "embedded_root_p6_t2_s5_d2"
    },
    {
      "source": "embedded_root_p6",
      "target": "embedded_root_p6_t3"
    },
    {
      "source": "embedded_root_p6_t3",
      "target": "embedded_root_p6_t3_s1"
    },
    {
      "source": "embedded_root_p6_t3_s1",
      "target": "embedded_root_p6_t3_s1_d1"
    },
    {
      "source": "embedded_root_p6_t3_s1",
      "target": "embedded_root_p6_t3_s1_d2"
    },
    {
      "source": "embedded_root_p6_t3",
      "target": "embedded_root_p6_t3_s2"
    },
    {
      "source": "embedded_root_p6_t3_s2",
      "target": "embedded_root_p6_t3_s2_d1"
    },
    {
      "source": "embedded_root_p6_t3_s2",
      "target": "embedded_root_p6_t3_s2_d2"
    },
    {
      "source": "embedded_root_p6_t3",
      "target": "embedded_root_p6_t3_s3"
    },
    {
      "source": "embedded_root_p6_t3_s3",
      "target": "embedded_root_p6_t3_s3_d1"
    },
    {
      "source": "embedded_root_p6_t3_s3",
      "target": "embedded_root_p6_t3_s3_d2"
    },
    {
      "source": "embedded_root_p6_t3",
      "target": "embedded_root_p6_t3_s4"
    },
    {
      "source": "embedded_root_p6_t3_s4",
      "target": "embedded_root_p6_t3_s4_d1"
    },
    {
      "source": "embedded_root_p6_t3_s4",
      "target": "embedded_root_p6_t3_s4_d2"
    },
    {
      "source": "embedded_root_p6_t3",
      "target": "embedded_root_p6_t3_s5"
    },
    {
      "source": "embedded_root_p6_t3_s5",
      "target": "embedded_root_p6_t3_s5_d1"
    },
    {
      "source": "embedded_root_p6_t3_s5",
      "target": "embedded_root_p6_t3_s5_d2"
    },
    {
      "source": "embedded_root_p6",
      "target": "embedded_root_p6_t4"
    },
    {
      "source": "embedded_root_p6_t4",
      "target": "embedded_root_p6_t4_s1"
    },
    {
      "source": "embedded_root_p6_t4_s1",
      "target": "embedded_root_p6_t4_s1_d1"
    },
    {
      "source": "embedded_root_p6_t4_s1",
      "target": "embedded_root_p6_t4_s1_d2"
    },
    {
      "source": "embedded_root_p6_t4",
      "target": "embedded_root_p6_t4_s2"
    },
    {
      "source": "embedded_root_p6_t4_s2",
      "target": "embedded_root_p6_t4_s2_d1"
    },
    {
      "source": "embedded_root_p6_t4_s2",
      "target": "embedded_root_p6_t4_s2_d2"
    },
    {
      "source": "embedded_root_p6_t4",
      "target": "embedded_root_p6_t4_s3"
    },
    {
      "source": "embedded_root_p6_t4_s3",
      "target": "embedded_root_p6_t4_s3_d1"
    },
    {
      "source": "embedded_root_p6_t4_s3",
      "target": "embedded_root_p6_t4_s3_d2"
    },
    {
      "source": "embedded_root_p6_t4",
      "target": "embedded_root_p6_t4_s4"
    },
    {
      "source": "embedded_root_p6_t4_s4",
      "target": "embedded_root_p6_t4_s4_d1"
    },
    {
      "source": "embedded_root_p6_t4_s4",
      "target": "embedded_root_p6_t4_s4_d2"
    },
    {
      "source": "embedded_root_p6_t4",
      "target": "embedded_root_p6_t4_s5"
    },
    {
      "source": "embedded_root_p6_t4_s5",
      "target": "embedded_root_p6_t4_s5_d1"
    },
    {
      "source": "embedded_root_p6_t4_s5",
      "target": "embedded_root_p6_t4_s5_d2"
    },
    {
      "source": "embedded_root_p6",
      "target": "embedded_root_p6_t5"
    },
    {
      "source": "embedded_root_p6_t5",
      "target": "embedded_root_p6_t5_s1"
    },
    {
      "source": "embedded_root_p6_t5_s1",
      "target": "embedded_root_p6_t5_s1_d1"
    },
    {
      "source": "embedded_root_p6_t5_s1",
      "target": "embedded_root_p6_t5_s1_d2"
    },
    {
      "source": "embedded_root_p6_t5",
      "target": "embedded_root_p6_t5_s2"
    },
    {
      "source": "embedded_root_p6_t5_s2",
      "target": "embedded_root_p6_t5_s2_d1"
    },
    {
      "source": "embedded_root_p6_t5_s2",
      "target": "embedded_root_p6_t5_s2_d2"
    },
    {
      "source": "embedded_root_p6_t5",
      "target": "embedded_root_p6_t5_s3"
    },
    {
      "source": "embedded_root_p6_t5_s3",
      "target": "embedded_root_p6_t5_s3_d1"
    },
    {
      "source": "embedded_root_p6_t5_s3",
      "target": "embedded_root_p6_t5_s3_d2"
    },
    {
      "source": "embedded_root_p6_t5",
      "target": "embedded_root_p6_t5_s4"
    },
    {
      "source": "embedded_root_p6_t5_s4",
      "target": "embedded_root_p6_t5_s4_d1"
    },
    {
      "source": "embedded_root_p6_t5_s4",
      "target": "embedded_root_p6_t5_s4_d2"
    },
    {
      "source": "embedded_root_p6_t5",
      "target": "embedded_root_p6_t5_s5"
    },
    {
      "source": "embedded_root_p6_t5_s5",
      "target": "embedded_root_p6_t5_s5_d1"
    },
    {
      "source": "embedded_root_p6_t5_s5",
      "target": "embedded_root_p6_t5_s5_d2"
    },
    {
      "source": "embedded_root_p6",
      "target": "embedded_root_p6_t6"
    },
    {
      "source": "embedded_root_p6_t6",
      "target": "embedded_root_p6_t6_s1"
    },
    {
      "source": "embedded_root_p6_t6_s1",
      "target": "embedded_root_p6_t6_s1_d1"
    },
    {
      "source": "embedded_root_p6_t6_s1",
      "target": "embedded_root_p6_t6_s1_d2"
    },
    {
      "source": "embedded_root_p6_t6",
      "target": "embedded_root_p6_t6_s2"
    },
    {
      "source": "embedded_root_p6_t6_s2",
      "target": "embedded_root_p6_t6_s2_d1"
    },
    {
      "source": "embedded_root_p6_t6_s2",
      "target": "embedded_root_p6_t6_s2_d2"
    },
    {
      "source": "embedded_root_p6_t6",
      "target": "embedded_root_p6_t6_s3"
    },
    {
      "source": "embedded_root_p6_t6_s3",
      "target": "embedded_root_p6_t6_s3_d1"
    },
    {
      "source": "embedded_root_p6_t6_s3",
      "target": "embedded_root_p6_t6_s3_d2"
    },
    {
      "source": "embedded_root_p6_t6",
      "target": "embedded_root_p6_t6_s4"
    },
    {
      "source": "embedded_root_p6_t6_s4",
      "target": "embedded_root_p6_t6_s4_d1"
    },
    {
      "source": "embedded_root_p6_t6_s4",
      "target": "embedded_root_p6_t6_s4_d2"
    },
    {
      "source": "embedded_root_p6_t6",
      "target": "embedded_root_p6_t6_s5"
    },
    {
      "source": "embedded_root_p6_t6_s5",
      "target": "embedded_root_p6_t6_s5_d1"
    },
    {
      "source": "embedded_root_p6_t6_s5",
      "target": "embedded_root_p6_t6_s5_d2"
    },
    {
      "source": "embedded_root",
      "target": "embedded_root_p7"
    },
    {
      "source": "embedded_root_p7",
      "target": "embedded_root_p7_t1"
    },
    {
      "source": "embedded_root_p7_t1",
      "target": "embedded_root_p7_t1_s1"
    },
    {
      "source": "embedded_root_p7_t1_s1",
      "target": "embedded_root_p7_t1_s1_d1"
    },
    {
      "source": "embedded_root_p7_t1_s1",
      "target": "embedded_root_p7_t1_s1_d2"
    },
    {
      "source": "embedded_root_p7_t1",
      "target": "embedded_root_p7_t1_s2"
    },
    {
      "source": "embedded_root_p7_t1_s2",
      "target": "embedded_root_p7_t1_s2_d1"
    },
    {
      "source": "embedded_root_p7_t1_s2",
      "target": "embedded_root_p7_t1_s2_d2"
    },
    {
      "source": "embedded_root_p7_t1",
      "target": "embedded_root_p7_t1_s3"
    },
    {
      "source": "embedded_root_p7_t1_s3",
      "target": "embedded_root_p7_t1_s3_d1"
    },
    {
      "source": "embedded_root_p7_t1_s3",
      "target": "embedded_root_p7_t1_s3_d2"
    },
    {
      "source": "embedded_root_p7_t1",
      "target": "embedded_root_p7_t1_s4"
    },
    {
      "source": "embedded_root_p7_t1_s4",
      "target": "embedded_root_p7_t1_s4_d1"
    },
    {
      "source": "embedded_root_p7_t1_s4",
      "target": "embedded_root_p7_t1_s4_d2"
    },
    {
      "source": "embedded_root_p7_t1",
      "target": "embedded_root_p7_t1_s5"
    },
    {
      "source": "embedded_root_p7_t1_s5",
      "target": "embedded_root_p7_t1_s5_d1"
    },
    {
      "source": "embedded_root_p7_t1_s5",
      "target": "embedded_root_p7_t1_s5_d2"
    },
    {
      "source": "embedded_root_p7",
      "target": "embedded_root_p7_t2"
    },
    {
      "source": "embedded_root_p7_t2",
      "target": "embedded_root_p7_t2_s1"
    },
    {
      "source": "embedded_root_p7_t2_s1",
      "target": "embedded_root_p7_t2_s1_d1"
    },
    {
      "source": "embedded_root_p7_t2_s1",
      "target": "embedded_root_p7_t2_s1_d2"
    },
    {
      "source": "embedded_root_p7_t2",
      "target": "embedded_root_p7_t2_s2"
    },
    {
      "source": "embedded_root_p7_t2_s2",
      "target": "embedded_root_p7_t2_s2_d1"
    },
    {
      "source": "embedded_root_p7_t2_s2",
      "target": "embedded_root_p7_t2_s2_d2"
    },
    {
      "source": "embedded_root_p7_t2",
      "target": "embedded_root_p7_t2_s3"
    },
    {
      "source": "embedded_root_p7_t2_s3",
      "target": "embedded_root_p7_t2_s3_d1"
    },
    {
      "source": "embedded_root_p7_t2_s3",
      "target": "embedded_root_p7_t2_s3_d2"
    },
    {
      "source": "embedded_root_p7_t2",
      "target": "embedded_root_p7_t2_s4"
    },
    {
      "source": "embedded_root_p7_t2_s4",
      "target": "embedded_root_p7_t2_s4_d1"
    },
    {
      "source": "embedded_root_p7_t2_s4",
      "target": "embedded_root_p7_t2_s4_d2"
    },
    {
      "source": "embedded_root_p7_t2",
      "target": "embedded_root_p7_t2_s5"
    },
    {
      "source": "embedded_root_p7_t2_s5",
      "target": "embedded_root_p7_t2_s5_d1"
    },
    {
      "source": "embedded_root_p7_t2_s5",
      "target": "embedded_root_p7_t2_s5_d2"
    },
    {
      "source": "embedded_root_p7",
      "target": "embedded_root_p7_t3"
    },
    {
      "source": "embedded_root_p7_t3",
      "target": "embedded_root_p7_t3_s1"
    },
    {
      "source": "embedded_root_p7_t3_s1",
      "target": "embedded_root_p7_t3_s1_d1"
    },
    {
      "source": "embedded_root_p7_t3_s1",
      "target": "embedded_root_p7_t3_s1_d2"
    },
    {
      "source": "embedded_root_p7_t3",
      "target": "embedded_root_p7_t3_s2"
    },
    {
      "source": "embedded_root_p7_t3_s2",
      "target": "embedded_root_p7_t3_s2_d1"
    },
    {
      "source": "embedded_root_p7_t3_s2",
      "target": "embedded_root_p7_t3_s2_d2"
    },
    {
      "source": "embedded_root_p7_t3",
      "target": "embedded_root_p7_t3_s3"
    },
    {
      "source": "embedded_root_p7_t3_s3",
      "target": "embedded_root_p7_t3_s3_d1"
    },
    {
      "source": "embedded_root_p7_t3_s3",
      "target": "embedded_root_p7_t3_s3_d2"
    },
    {
      "source": "embedded_root_p7_t3",
      "target": "embedded_root_p7_t3_s4"
    },
    {
      "source": "embedded_root_p7_t3_s4",
      "target": "embedded_root_p7_t3_s4_d1"
    },
    {
      "source": "embedded_root_p7_t3_s4",
      "target": "embedded_root_p7_t3_s4_d2"
    },
    {
      "source": "embedded_root_p7_t3",
      "target": "embedded_root_p7_t3_s5"
    },
    {
      "source": "embedded_root_p7_t3_s5",
      "target": "embedded_root_p7_t3_s5_d1"
    },
    {
      "source": "embedded_root_p7_t3_s5",
      "target": "embedded_root_p7_t3_s5_d2"
    },
    {
      "source": "embedded_root_p7",
      "target": "embedded_root_p7_t4"
    },
    {
      "source": "embedded_root_p7_t4",
      "target": "embedded_root_p7_t4_s1"
    },
    {
      "source": "embedded_root_p7_t4_s1",
      "target": "embedded_root_p7_t4_s1_d1"
    },
    {
      "source": "embedded_root_p7_t4_s1",
      "target": "embedded_root_p7_t4_s1_d2"
    },
    {
      "source": "embedded_root_p7_t4",
      "target": "embedded_root_p7_t4_s2"
    },
    {
      "source": "embedded_root_p7_t4_s2",
      "target": "embedded_root_p7_t4_s2_d1"
    },
    {
      "source": "embedded_root_p7_t4_s2",
      "target": "embedded_root_p7_t4_s2_d2"
    },
    {
      "source": "embedded_root_p7_t4",
      "target": "embedded_root_p7_t4_s3"
    },
    {
      "source": "embedded_root_p7_t4_s3",
      "target": "embedded_root_p7_t4_s3_d1"
    },
    {
      "source": "embedded_root_p7_t4_s3",
      "target": "embedded_root_p7_t4_s3_d2"
    },
    {
      "source": "embedded_root_p7_t4",
      "target": "embedded_root_p7_t4_s4"
    },
    {
      "source": "embedded_root_p7_t4_s4",
      "target": "embedded_root_p7_t4_s4_d1"
    },
    {
      "source": "embedded_root_p7_t4_s4",
      "target": "embedded_root_p7_t4_s4_d2"
    },
    {
      "source": "embedded_root_p7_t4",
      "target": "embedded_root_p7_t4_s5"
    },
    {
      "source": "embedded_root_p7_t4_s5",
      "target": "embedded_root_p7_t4_s5_d1"
    },
    {
      "source": "embedded_root_p7_t4_s5",
      "target": "embedded_root_p7_t4_s5_d2"
    },
    {
      "source": "embedded_root_p7",
      "target": "embedded_root_p7_t5"
    },
    {
      "source": "embedded_root_p7_t5",
      "target": "embedded_root_p7_t5_s1"
    },
    {
      "source": "embedded_root_p7_t5_s1",
      "target": "embedded_root_p7_t5_s1_d1"
    },
    {
      "source": "embedded_root_p7_t5_s1",
      "target": "embedded_root_p7_t5_s1_d2"
    },
    {
      "source": "embedded_root_p7_t5",
      "target": "embedded_root_p7_t5_s2"
    },
    {
      "source": "embedded_root_p7_t5_s2",
      "target": "embedded_root_p7_t5_s2_d1"
    },
    {
      "source": "embedded_root_p7_t5_s2",
      "target": "embedded_root_p7_t5_s2_d2"
    },
    {
      "source": "embedded_root_p7_t5",
      "target": "embedded_root_p7_t5_s3"
    },
    {
      "source": "embedded_root_p7_t5_s3",
      "target": "embedded_root_p7_t5_s3_d1"
    },
    {
      "source": "embedded_root_p7_t5_s3",
      "target": "embedded_root_p7_t5_s3_d2"
    },
    {
      "source": "embedded_root_p7_t5",
      "target": "embedded_root_p7_t5_s4"
    },
    {
      "source": "embedded_root_p7_t5_s4",
      "target": "embedded_root_p7_t5_s4_d1"
    },
    {
      "source": "embedded_root_p7_t5_s4",
      "target": "embedded_root_p7_t5_s4_d2"
    },
    {
      "source": "embedded_root_p7_t5",
      "target": "embedded_root_p7_t5_s5"
    },
    {
      "source": "embedded_root_p7_t5_s5",
      "target": "embedded_root_p7_t5_s5_d1"
    },
    {
      "source": "embedded_root_p7_t5_s5",
      "target": "embedded_root_p7_t5_s5_d2"
    },
    {
      "source": "embedded_root_p7",
      "target": "embedded_root_p7_t6"
    },
    {
      "source": "embedded_root_p7_t6",
      "target": "embedded_root_p7_t6_s1"
    },
    {
      "source": "embedded_root_p7_t6_s1",
      "target": "embedded_root_p7_t6_s1_d1"
    },
    {
      "source": "embedded_root_p7_t6_s1",
      "target": "embedded_root_p7_t6_s1_d2"
    },
    {
      "source": "embedded_root_p7_t6",
      "target": "embedded_root_p7_t6_s2"
    },
    {
      "source": "embedded_root_p7_t6_s2",
      "target": "embedded_root_p7_t6_s2_d1"
    },
    {
      "source": "embedded_root_p7_t6_s2",
      "target": "embedded_root_p7_t6_s2_d2"
    },
    {
      "source": "embedded_root_p7_t6",
      "target": "embedded_root_p7_t6_s3"
    },
    {
      "source": "embedded_root_p7_t6_s3",
      "target": "embedded_root_p7_t6_s3_d1"
    },
    {
      "source": "embedded_root_p7_t6_s3",
      "target": "embedded_root_p7_t6_s3_d2"
    },
    {
      "source": "embedded_root_p7_t6",
      "target": "embedded_root_p7_t6_s4"
    },
    {
      "source": "embedded_root_p7_t6_s4",
      "target": "embedded_root_p7_t6_s4_d1"
    },
    {
      "source": "embedded_root_p7_t6_s4",
      "target": "embedded_root_p7_t6_s4_d2"
    },
    {
      "source": "embedded_root_p7_t6",
      "target": "embedded_root_p7_t6_s5"
    },
    {
      "source": "embedded_root_p7_t6_s5",
      "target": "embedded_root_p7_t6_s5_d1"
    },
    {
      "source": "embedded_root_p7_t6_s5",
      "target": "embedded_root_p7_t6_s5_d2"
    },
    {
      "source": "embedded_root",
      "target": "embedded_root_p8"
    },
    {
      "source": "embedded_root_p8",
      "target": "embedded_root_p8_t1"
    },
    {
      "source": "embedded_root_p8_t1",
      "target": "embedded_root_p8_t1_s1"
    },
    {
      "source": "embedded_root_p8_t1_s1",
      "target": "embedded_root_p8_t1_s1_d1"
    },
    {
      "source": "embedded_root_p8_t1_s1",
      "target": "embedded_root_p8_t1_s1_d2"
    },
    {
      "source": "embedded_root_p8_t1",
      "target": "embedded_root_p8_t1_s2"
    },
    {
      "source": "embedded_root_p8_t1_s2",
      "target": "embedded_root_p8_t1_s2_d1"
    },
    {
      "source": "embedded_root_p8_t1_s2",
      "target": "embedded_root_p8_t1_s2_d2"
    },
    {
      "source": "embedded_root_p8_t1_s2",
      "target": "embedded_root_p8_t1_s2_d3"
    },
    {
      "source": "embedded_root_p8_t1_s2",
      "target": "embedded_root_p8_t1_s2_d4"
    },
    {
      "source": "embedded_root_p8_t1",
      "target": "embedded_root_p8_t1_s3"
    },
    {
      "source": "embedded_root_p8_t1_s3",
      "target": "embedded_root_p8_t1_s3_d1"
    },
    {
      "source": "embedded_root_p8_t1_s3",
      "target": "embedded_root_p8_t1_s3_d2"
    },
    {
      "source": "embedded_root_p8_t1",
      "target": "embedded_root_p8_t1_s4"
    },
    {
      "source": "embedded_root_p8_t1_s4",
      "target": "embedded_root_p8_t1_s4_d1"
    },
    {
      "source": "embedded_root_p8_t1_s4",
      "target": "embedded_root_p8_t1_s4_d2"
    },
    {
      "source": "embedded_root_p8_t1",
      "target": "embedded_root_p8_t1_s5"
    },
    {
      "source": "embedded_root_p8_t1_s5",
      "target": "embedded_root_p8_t1_s5_d1"
    },
    {
      "source": "embedded_root_p8_t1_s5",
      "target": "embedded_root_p8_t1_s5_d2"
    },
    {
      "source": "embedded_root_p8",
      "target": "embedded_root_p8_t2"
    },
    {
      "source": "embedded_root_p8_t2",
      "target": "embedded_root_p8_t2_s1"
    },
    {
      "source": "embedded_root_p8_t2_s1",
      "target": "embedded_root_p8_t2_s1_d1"
    },
    {
      "source": "embedded_root_p8_t2_s1",
      "target": "embedded_root_p8_t2_s1_d2"
    },
    {
      "source": "embedded_root_p8_t2",
      "target": "embedded_root_p8_t2_s2"
    },
    {
      "source": "embedded_root_p8_t2_s2",
      "target": "embedded_root_p8_t2_s2_d1"
    },
    {
      "source": "embedded_root_p8_t2_s2",
      "target": "embedded_root_p8_t2_s2_d2"
    },
    {
      "source": "embedded_root_p8_t2",
      "target": "embedded_root_p8_t2_s3"
    },
    {
      "source": "embedded_root_p8_t2_s3",
      "target": "embedded_root_p8_t2_s3_d1"
    },
    {
      "source": "embedded_root_p8_t2_s3",
      "target": "embedded_root_p8_t2_s3_d2"
    },
    {
      "source": "embedded_root_p8_t2",
      "target": "embedded_root_p8_t2_s4"
    },
    {
      "source": "embedded_root_p8_t2_s4",
      "target": "embedded_root_p8_t2_s4_d1"
    },
    {
      "source": "embedded_root_p8_t2_s4",
      "target": "embedded_root_p8_t2_s4_d2"
    },
    {
      "source": "embedded_root_p8_t2",
      "target": "embedded_root_p8_t2_s5"
    },
    {
      "source": "embedded_root_p8_t2_s5",
      "target": "embedded_root_p8_t2_s5_d1"
    },
    {
      "source": "embedded_root_p8_t2_s5",
      "target": "embedded_root_p8_t2_s5_d2"
    },
    {
      "source": "embedded_root_p8",
      "target": "embedded_root_p8_t3"
    },
    {
      "source": "embedded_root_p8_t3",
      "target": "embedded_root_p8_t3_s1"
    },
    {
      "source": "embedded_root_p8_t3_s1",
      "target": "embedded_root_p8_t3_s1_d1"
    },
    {
      "source": "embedded_root_p8_t3_s1",
      "target": "embedded_root_p8_t3_s1_d2"
    },
    {
      "source": "embedded_root_p8_t3",
      "target": "embedded_root_p8_t3_s2"
    },
    {
      "source": "embedded_root_p8_t3_s2",
      "target": "embedded_root_p8_t3_s2_d1"
    },
    {
      "source": "embedded_root_p8_t3_s2",
      "target": "embedded_root_p8_t3_s2_d2"
    },
    {
      "source": "embedded_root_p8_t3",
      "target": "embedded_root_p8_t3_s3"
    },
    {
      "source": "embedded_root_p8_t3_s3",
      "target": "embedded_root_p8_t3_s3_d1"
    },
    {
      "source": "embedded_root_p8_t3_s3",
      "target": "embedded_root_p8_t3_s3_d2"
    },
    {
      "source": "embedded_root_p8_t3",
      "target": "embedded_root_p8_t3_s4"
    },
    {
      "source": "embedded_root_p8_t3_s4",
      "target": "embedded_root_p8_t3_s4_d1"
    },
    {
      "source": "embedded_root_p8_t3_s4",
      "target": "embedded_root_p8_t3_s4_d2"
    },
    {
      "source": "embedded_root_p8_t3",
      "target": "embedded_root_p8_t3_s5"
    },
    {
      "source": "embedded_root_p8_t3_s5",
      "target": "embedded_root_p8_t3_s5_d1"
    },
    {
      "source": "embedded_root_p8_t3_s5",
      "target": "embedded_root_p8_t3_s5_d2"
    },
    {
      "source": "embedded_root_p8",
      "target": "embedded_root_p8_t4"
    },
    {
      "source": "embedded_root_p8_t4",
      "target": "embedded_root_p8_t4_s1"
    },
    {
      "source": "embedded_root_p8_t4_s1",
      "target": "embedded_root_p8_t4_s1_d1"
    },
    {
      "source": "embedded_root_p8_t4_s1",
      "target": "embedded_root_p8_t4_s1_d2"
    },
    {
      "source": "embedded_root_p8_t4",
      "target": "embedded_root_p8_t4_s2"
    },
    {
      "source": "embedded_root_p8_t4_s2",
      "target": "embedded_root_p8_t4_s2_d1"
    },
    {
      "source": "embedded_root_p8_t4_s2",
      "target": "embedded_root_p8_t4_s2_d2"
    },
    {
      "source": "embedded_root_p8_t4",
      "target": "embedded_root_p8_t4_s3"
    },
    {
      "source": "embedded_root_p8_t4_s3",
      "target": "embedded_root_p8_t4_s3_d1"
    },
    {
      "source": "embedded_root_p8_t4_s3",
      "target": "embedded_root_p8_t4_s3_d2"
    },
    {
      "source": "embedded_root_p8_t4",
      "target": "embedded_root_p8_t4_s4"
    },
    {
      "source": "embedded_root_p8_t4_s4",
      "target": "embedded_root_p8_t4_s4_d1"
    },
    {
      "source": "embedded_root_p8_t4_s4",
      "target": "embedded_root_p8_t4_s4_d2"
    },
    {
      "source": "embedded_root_p8_t4",
      "target": "embedded_root_p8_t4_s5"
    },
    {
      "source": "embedded_root_p8_t4_s5",
      "target": "embedded_root_p8_t4_s5_d1"
    },
    {
      "source": "embedded_root_p8_t4_s5",
      "target": "embedded_root_p8_t4_s5_d2"
    },
    {
      "source": "embedded_root_p8",
      "target": "embedded_root_p8_t5"
    },
    {
      "source": "embedded_root_p8_t5",
      "target": "embedded_root_p8_t5_s1"
    },
    {
      "source": "embedded_root_p8_t5_s1",
      "target": "embedded_root_p8_t5_s1_d1"
    },
    {
      "source": "embedded_root_p8_t5_s1",
      "target": "embedded_root_p8_t5_s1_d2"
    },
    {
      "source": "embedded_root_p8_t5",
      "target": "embedded_root_p8_t5_s2"
    },
    {
      "source": "embedded_root_p8_t5_s2",
      "target": "embedded_root_p8_t5_s2_d1"
    },
    {
      "source": "embedded_root_p8_t5_s2",
      "target": "embedded_root_p8_t5_s2_d2"
    },
    {
      "source": "embedded_root_p8_t5",
      "target": "embedded_root_p8_t5_s3"
    },
    {
      "source": "embedded_root_p8_t5_s3",
      "target": "embedded_root_p8_t5_s3_d1"
    },
    {
      "source": "embedded_root_p8_t5_s3",
      "target": "embedded_root_p8_t5_s3_d2"
    },
    {
      "source": "embedded_root_p8_t5",
      "target": "embedded_root_p8_t5_s4"
    },
    {
      "source": "embedded_root_p8_t5_s4",
      "target": "embedded_root_p8_t5_s4_d1"
    },
    {
      "source": "embedded_root_p8_t5_s4",
      "target": "embedded_root_p8_t5_s4_d2"
    },
    {
      "source": "embedded_root_p8_t5",
      "target": "embedded_root_p8_t5_s5"
    },
    {
      "source": "embedded_root_p8_t5_s5",
      "target": "embedded_root_p8_t5_s5_d1"
    },
    {
      "source": "embedded_root_p8_t5_s5",
      "target": "embedded_root_p8_t5_s5_d2"
    },
    {
      "source": "embedded_root_p8",
      "target": "embedded_root_p8_t6"
    },
    {
      "source": "embedded_root_p8_t6",
      "target": "embedded_root_p8_t6_s1"
    },
    {
      "source": "embedded_root_p8_t6_s1",
      "target": "embedded_root_p8_t6_s1_d1"
    },
    {
      "source": "embedded_root_p8_t6_s1",
      "target": "embedded_root_p8_t6_s1_d2"
    },
    {
      "source": "embedded_root_p8_t6",
      "target": "embedded_root_p8_t6_s2"
    },
    {
      "source": "embedded_root_p8_t6_s2",
      "target": "embedded_root_p8_t6_s2_d1"
    },
    {
      "source": "embedded_root_p8_t6_s2",
      "target": "embedded_root_p8_t6_s2_d2"
    },
    {
      "source": "embedded_root_p8_t6",
      "target": "embedded_root_p8_t6_s3"
    },
    {
      "source": "embedded_root_p8_t6_s3",
      "target": "embedded_root_p8_t6_s3_d1"
    },
    {
      "source": "embedded_root_p8_t6_s3",
      "target": "embedded_root_p8_t6_s3_d2"
    },
    {
      "source": "embedded_root_p8_t6",
      "target": "embedded_root_p8_t6_s4"
    },
    {
      "source": "embedded_root_p8_t6_s4",
      "target": "embedded_root_p8_t6_s4_d1"
    },
    {
      "source": "embedded_root_p8_t6_s4",
      "target": "embedded_root_p8_t6_s4_d2"
    },
    {
      "source": "embedded_root_p8_t6",
      "target": "embedded_root_p8_t6_s5"
    },
    {
      "source": "embedded_root_p8_t6_s5",
      "target": "embedded_root_p8_t6_s5_d1"
    },
    {
      "source": "embedded_root_p8_t6_s5",
      "target": "embedded_root_p8_t6_s5_d2"
    }
  ]
};
