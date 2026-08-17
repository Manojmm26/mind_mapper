import { MindMapData } from "../../services/llmService";

export const CHIP_DESIGN_SEMICONDUCTORS_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "chip_root",
      "label": "Chip Design & Semiconductor Fabrication from First Principles",
      "description": "Exhaustive first-principles engineering roadmap: quantum semiconductor physics, EUV lithography cleanroom manufacturing, RTL microarchitecture, EDA synthesis & static timing analysis, UVM formal verification, precision analog/RF ICs, and sub-micron 3D chiplet integration.",
      "type": "topic"
    },
    {
      "id": "chip_p1",
      "label": "Semiconductor Physics & Device Fundamentals",
      "description": "Quantum mechanical mechanics of carrier transport, energy bands, and transistor electrostatics.",
      "type": "topic"
    },
    {
      "id": "chip_p1_t0",
      "label": "Energy Band Theory",
      "description": "Quantum energy states of electrons in crystalline silicon lattices.",
      "type": "topic"
    },
    {
      "id": "chip_p1_t0_s0",
      "label": "Valence & Conduction Bands",
      "description": "Energy gap separation of bound valence electrons from free conduction state.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t0_s0_m0",
      "label": "Band Gap Width (1.12 eV)",
      "description": "Energy required at 300K to break covalent silicon bonds and create free carriers.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t0_s0_m1",
      "label": "Direct vs Indirect Transition",
      "description": "Indirect bandgap requiring momentum-conserving phonon scattering for photon emission.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t0_s0_m2",
      "label": "Effective Mass Tensor m*",
      "description": "Quantum mechanical electron acceleration under external field E = hbar^2 / (d^2E/dk^2).",
      "type": "concept"
    },
    {
      "id": "chip_p1_t0_s0_m3",
      "label": "Density of States g(E)",
      "description": "Available quantum states per unit volume per energy level in 3D crystal momentum space.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t0_s1",
      "label": "Carrier Distribution Statistics",
      "description": "Fermi-Dirac quantum statistics governing electron/hole occupation probability.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t0_s1_m0",
      "label": "Fermi Level Ef",
      "description": "Chemical potential level with 50% probability of electron energy state occupation.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t0_s1_m1",
      "label": "Maxwell-Boltzmann Approximation",
      "description": "High-energy tail approximation valid when (E - Ef) >> k_B * T.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t0_s1_m2",
      "label": "Intrinsic Carrier Concentration ni",
      "description": "Thermally generated electron-hole pair density (1.5x10^10 cm^-3 in Si at 300K).",
      "type": "concept"
    },
    {
      "id": "chip_p1_t0_s1_m3",
      "label": "Degenerate Semiconductors",
      "description": "Heavy doping driving Fermi level directly inside conduction or valence bands.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t0_s2",
      "label": "Carrier Transport Mechanics",
      "description": "Movement of mobile charge carriers under drift and diffusion forces.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t0_s2_m0",
      "label": "Drift Velocity & Mobility mu",
      "description": "Carrier drift v_d = mu * E limited by acoustic phonon and ionized impurity scattering.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t0_s2_m1",
      "label": "Fick's Laws of Diffusion",
      "description": "Carrier diffusion flux J_diff = -q * D * (dn/dx) driven by concentration gradients.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t0_s2_m2",
      "label": "Einstein Relation (D/mu)",
      "description": "Thermodynamic relationship link D_n / mu_n = k_B * T / q = V_t (thermal voltage).",
      "type": "concept"
    },
    {
      "id": "chip_p1_t0_s2_m3",
      "label": "Velocity Saturation v_sat",
      "description": "High-field carrier scattering limiting peak drift velocity to ~10^7 cm/s in silicon.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t0_s3",
      "label": "Generation & Recombination",
      "description": "Thermal and optical mechanisms of electron-hole pair creation and decay.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t0_s3_m0",
      "label": "Shockley-Read-Hall (SRH)",
      "description": "Deep-level trap assisted recombination via crystal defects and impurities.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t0_s3_m1",
      "label": "Auger Recombination",
      "description": "Three-particle collision transferring recombination energy to a third carrier.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t0_s3_m2",
      "label": "Direct Radiative Decay",
      "description": "Photon emission recombination dominant in direct bandgap III-V (GaAs/InP).",
      "type": "concept"
    },
    {
      "id": "chip_p1_t0_s3_m3",
      "label": "Carrier Minority Lifetime tau",
      "description": "Average duration a minority carrier exists before recombining in bulk silicon.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t1",
      "label": "Dopants & Junction Electrostatics",
      "description": "Impurity engineering and PN junction depletion mechanics.",
      "type": "topic"
    },
    {
      "id": "chip_p1_t1_s0",
      "label": "P-Type & N-Type Doping",
      "description": "Introduction of group III or group V impurity atoms into silicon matrix.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t1_s0_m0",
      "label": "Phosphorus & Arsenic Donors",
      "description": "Group V elements adding unbonded fifth valence electron to conduction band.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t1_s0_m1",
      "label": "Boron & Indium Acceptors",
      "description": "Group III elements creating electron vacancies (holes) in valence band.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t1_s0_m2",
      "label": "Ion Implantation Energy",
      "description": "Accelerating dopant ions from 1 keV to 5 MeV to control depth profiles.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t1_s0_m3",
      "label": "Thermal Annealing & Activation",
      "description": "High-temperature furnace repair of crystal lattice damage and dopant placement.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t1_s1",
      "label": "PN Junction Depletion Mechanics",
      "description": "Built-in potential and space charge region formation.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t1_s1_m0",
      "label": "Built-In Potential V_bi",
      "description": "Internal electric field barrier V_bi = V_t * ln(Na * Nd / ni^2) stopping diffusion.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t1_s1_m1",
      "label": "Depletion Layer Width W_dep",
      "description": "Space charge region width W = sqrt(2 * eps * (Na + Nd) * V_bi / (q * Na * Nd)).",
      "type": "concept"
    },
    {
      "id": "chip_p1_t1_s1_m2",
      "label": "Junction Capacitance C_j",
      "description": "Depletion layer acting as voltage-dependent dielectric insulator C_j = eps / W_dep.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t1_s1_m3",
      "label": "Zener & Avalanche Breakdown",
      "description": "High reverse bias breakdown via quantum tunneling or impact ionization cascades.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t1_s2",
      "label": "Metal-Semiconductor Contacts",
      "description": "Ohmic and Schottky barrier interfaces.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t1_s2_m0",
      "label": "Schottky Barrier Height qPhi_b",
      "description": "Potential barrier formed at metal-semiconductor interface without doping.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t1_s2_m1",
      "label": "Ohmic Contact Formation",
      "description": "Heavy interfacial doping (N+ or P+) enabling low-resistance quantum tunneling.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t1_s2_m2",
      "label": "Silicide Interfacial Layers",
      "description": "Self-aligned silicides (NiSi, TiSi2, CoSi2) reducing contact contact resistance.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t1_s2_m3",
      "label": "Specific Contact Resistivity rho_c",
      "description": "Interfacial resistance per unit area (target < 10^-9 ohm-cm^2 in sub-2nm nodes).",
      "type": "concept"
    },
    {
      "id": "chip_p1_t2",
      "label": "Transistor Electrostatics & Scaling",
      "description": "MOSFET conduction physics and short-channel degradation.",
      "type": "topic"
    },
    {
      "id": "chip_p1_t2_s0",
      "label": "MOS Capacitor States",
      "description": "Surface potential modulation across Accumulation, Depletion, and Inversion.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t2_s0_m0",
      "label": "Flat-band Voltage V_fb",
      "description": "Gate voltage compensating for work function difference and oxide fixed charges.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t2_s0_m1",
      "label": "Strong Inversion Condition",
      "description": "Surface potential phi_s reaching twice the bulk Fermi potential 2 * phi_F.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t2_s0_m2",
      "label": "Gate Oxide Capacitance C_ox",
      "description": "Dielectric capacitance C_ox = eps_ox / t_ox governing gate electrostatic control.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t2_s0_m3",
      "label": "Subthreshold Slope S-Factor",
      "description": "Gate bias required for 10x drain current change (S = (ln 10) * V_t * (1 + C_dep/C_ox)).",
      "type": "concept"
    },
    {
      "id": "chip_p1_t2_s1",
      "label": "MOSFET Current-Voltage Equations",
      "description": "Drift-diffusion equations governing linear and saturation regions.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t2_s1_m0",
      "label": "Linear Region Current Id_lin",
      "description": "Id = mu * C_ox * (W/L) * [(Vgs - Vth)Vds - 0.5 * Vds^2].",
      "type": "concept"
    },
    {
      "id": "chip_p1_t2_s1_m1",
      "label": "Saturation Current Id_sat",
      "description": "Id = 0.5 * mu * C_ox * (W/L) * (Vgs - Vth)^2 with pinch-off at Vds = Vgs - Vth.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t2_s1_m2",
      "label": "Channel Length Modulation lambda",
      "description": "Effective L shortening under high Vds increasing output conductance g_ds.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t2_s1_m3",
      "label": "Transconductance g_m",
      "description": "Rate of drain current change with respect to gate voltage g_m = dId / dVgs.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t2_s2",
      "label": "Short-Channel Effects (SCE)",
      "description": "Degradation of gate control as gate length L approaches depletion widths.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t2_s2_m0",
      "label": "Drain-Induced Barrier Lowering",
      "description": "High drain bias lowering source-channel potential barrier, reducing Vth.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t2_s2_m1",
      "label": "Threshold Voltage Roll-Off",
      "description": "Decrease in Vth as gate length L is reduced due to charge sharing.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t2_s2_m2",
      "label": "Subthreshold Leakage I_off",
      "description": "Thermionic emission of carriers over potential barrier in off-state.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t2_s2_m3",
      "label": "Gate Oxide Direct Tunneling",
      "description": "Quantum mechanical electron tunneling through sub-1.2nm SiO2 insulators.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t3",
      "label": "3D Transistor Architectures",
      "description": "Overcoming planar physical limits through multi-gate 3D geometry.",
      "type": "topic"
    },
    {
      "id": "chip_p1_t3_s0",
      "label": "FinFET 3D Tri-Gate",
      "description": "Vertical silicon fin encircled by gate electrode on three sides.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t3_s0_m0",
      "label": "Fin Width T_fin Control",
      "description": "Sub-7nm fin thickness constraining short-channel effects electrostatically.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t3_s0_m1",
      "label": "Fin Height H_fin Scaling",
      "description": "Increasing fin height to boost drive current per unit layout footprint.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t3_s0_m2",
      "label": "Corner Effect Mitigation",
      "description": "Rounding top fin corners to eliminate localized electric field enhancement.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t3_s0_m3",
      "label": "Self-Aligned Spacer Fins",
      "description": "Fabricating fins using sidewall image transfer rather than direct lithography.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t3_s1",
      "label": "Gate-All-Around Nanosheets (GAAFET)",
      "description": "Horizontal silicon nanosheets completely surrounded by gate oxide.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t3_s1_m0",
      "label": "Nanosheet Width W_ns Modulation",
      "description": "Variable sheet width allowing trade-off between drive current and capacitance.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t3_s1_m1",
      "label": "Inner Spacer Process",
      "description": "Selective SiGe etching creating precise internal gate cavity isolation.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t3_s1_m2",
      "label": "Bottom Dielectric Isolation (BDI)",
      "description": "Inserting oxide layer under bottom nanosheet to eliminate parasitic sub-fin leak.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t3_s1_m3",
      "label": "Effective Drive Current I_eff",
      "description": "Superior electrostatics yielding 30% higher drive current at lower operating Vdd.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t3_s2",
      "label": "Sub-2nm Emerging Transistors",
      "description": "Next-generation 3D vertical and complementary structures.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t3_s2_m0",
      "label": "Complementary FET (CFET)",
      "description": "3D stacking of N-FET directly over P-FET to cut cell area by 50%.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t3_s2_m1",
      "label": "Forksheet Field-Effect Transistor",
      "description": "Inserting dielectric wall between N and P channels to reduce N-to-P spacing.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t3_s2_m2",
      "label": "2D Transition Metal Dichalcogenides",
      "description": "Atomic monolayer channels (MoS2/WS2) suppressing short-channel effects.",
      "type": "concept"
    },
    {
      "id": "chip_p1_t3_s2_m3",
      "label": "Carbon Nanotube Field-Effect (CNTFET)",
      "description": "Ballistic transport high-mobility channels operating at ultra-low voltage.",
      "type": "concept"
    },
    {
      "id": "chip_p2",
      "label": "Semiconductor Fabrication & Cleanroom Engineering",
      "description": "Nanometer-scale manufacturing processes from raw quartz to patterned silicon wafers.",
      "type": "topic"
    },
    {
      "id": "chip_p2_t0",
      "label": "Substrate & Ingot Manufacturing",
      "description": "Production of electronic-grade single-crystal silicon wafers.",
      "type": "topic"
    },
    {
      "id": "chip_p2_t0_s0",
      "label": "Czochralski (CZ) Ingot Pulling",
      "description": "Growing 300mm single-crystal silicon boules from molten electronic-grade silicon.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t0_s0_m0",
      "label": "Electronic-Grade Silicon (EGS)",
      "description": "Purifying metallurgical silicon to 99.9999999% (9N) purity via trichlorosilane.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t0_s0_m1",
      "label": "Seed Crystal Rotation & Pull Rate",
      "description": "Precise thermal gradient control forming dislocation-free monocrystalline lattice.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t0_s0_m2",
      "label": "Oxygen & Carbon Impurity Control",
      "description": "Managing quartz crucible dissolution to balance oxygen donor states.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t0_s0_m3",
      "label": "Magnetic Czochralski (MCZ)",
      "description": "Applying magnetic fields to damp melt turbulence and improve radial uniformity.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t0_s1",
      "label": "Wafer Slicing & Surface Planarization",
      "description": "Converting silicon boules into sub-nanometer flat substrates.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t0_s1_m0",
      "label": "Diamond Wire Sawing",
      "description": "High-speed wire saw slicing 300mm ingots into 775um thick raw wafers.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t0_s1_m1",
      "label": "Edge Bevel Polishing",
      "description": "Grinding wafer periphery to prevent edge chipping and photoresist flaking.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t0_s1_m2",
      "label": "Chemical-Mechanical Planarization (CMP)",
      "description": "Sub-nanometer chemical slurry polishing achieving atomic surface flatness.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t0_s1_m3",
      "label": "Lapping & Chemical Etching",
      "description": "Removing mechanical wire saw damage via nitric/hydrofluoric acid baths.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t0_s2",
      "label": "Epitaxial Layer Growth (Epi)",
      "description": "Depositing defect-free single-crystal silicon or SiGe layers.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t0_s2_m0",
      "label": "Vapor Phase Epitaxy (VPE)",
      "description": "Chemical vapor deposition of silicon using SiH4 or SiH2Cl2 precursor gases.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t0_s2_m1",
      "label": "Strained Silicon-Germanium (SiGe)",
      "description": "In-situ lattice mismatching to induce compressive strain and boost hole mobility.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t0_s2_m2",
      "label": "Atomic Layer Epitaxy (ALE)",
      "description": "Self-limiting monolayer growth for ultra-abrupt dopant profiles.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t0_s2_m3",
      "label": "Selective Epitaxial Growth (SEG)",
      "description": "Growing epi-layers exclusively in exposed silicon trench windows.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t1",
      "label": "Extreme Ultraviolet (EUV) Lithography",
      "description": "Sub-10nm feature patterning using 13.5nm light.",
      "type": "topic"
    },
    {
      "id": "chip_p2_t1_s0",
      "label": "Tin Plasma Light Source",
      "description": "CO2 laser vaporizing 50,000 molten tin droplets/sec to emit 13.5nm EUV photon pulses.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t1_s0_m0",
      "label": "Pre-Pulse & Main Pulse CO2 Laser",
      "description": "Targeting tin droplets to flatten into disk target before high-energy ionization.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t1_s0_m1",
      "label": "Debris Collector Mirror Lifetime",
      "description": "Hydrogen gas flow and in-situ cleaning etching tin debris off collector optic.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t1_s0_m2",
      "label": "Source Power (350W+)",
      "description": "Scaling EUV source power to achieve high wafer-per-hour cleanroom throughput.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t1_s0_m3",
      "label": "Conversion Efficiency (CE)",
      "description": "Percentage of CO2 laser power converted into in-band 13.5nm EUV radiation.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t1_s1",
      "label": "Reflective Optics & Photomasks",
      "description": "Bragg reflector optical systems operating under deep vacuum.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t1_s1_m0",
      "label": "Mo/Si Multilayer Reflective Mirrors",
      "description": "40 pairs of Molybdenum/Silicon layers reflecting light via constructive interference.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t1_s1_m1",
      "label": "Numerical Aperture NA (0.33 to 0.55)",
      "description": "Transitioning to High-NA anamorphic optics with 8x/4x magnification split.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t1_s1_m2",
      "label": "EUV Photomask Absorber Layer",
      "description": "TaBN or low-n phase shift absorbers suppressing 3D mask 3D optical effects.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t1_s1_m3",
      "label": "EUV Carbon Nanotube Pellicles",
      "description": "Ultrathin 90%+ transparent membranes protecting masks from airborne dust.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t1_s2",
      "label": "Photoresists & Multi-Patterning",
      "description": "Chemical reaction and pitch-splitting strategies.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t1_s2_m0",
      "label": "Chemically Amplified Resists (CAR)",
      "description": "Photon absorption generating photoacids that catalyze polymer solubility change.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t1_s2_m1",
      "label": "Metal Oxide Photoresists (MOx)",
      "description": "High-density tin-oxide nanoparticle resists offering superior EUV etch resistance.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t1_s2_m2",
      "label": "Stochastic Line-Edge Roughness (LER)",
      "description": "Photon shot noise fluctuations causing nanometer-scale feature edge variation.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t1_s2_m3",
      "label": "Self-Aligned Quad Patterning (SAQP)",
      "description": "Multiple spacer deposition and etch steps quadrupling pitch density.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t2",
      "label": "Etching & Thin Film Deposition",
      "description": "Subtractive patterning and additive thin film growth.",
      "type": "topic"
    },
    {
      "id": "chip_p2_t2_s0",
      "label": "Plasma Reactive Ion Etching (RIE)",
      "description": "Directional removal of material via chemical plasma and physical ion impact.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t2_s0_m0",
      "label": "Inductively Coupled Plasma (ICP)",
      "description": "Decoupling plasma density control from ion bombardment acceleration voltage.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t2_s0_m1",
      "label": "Anisotropic Etch Profiles",
      "description": "Passivating sidewalls with fluorocarbon polymers to achieve vertical 90-degree trenches.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t2_s0_m2",
      "label": "Selective Etch Chemistry",
      "description": "Tuning gas mixtures (SF6, CF4, Cl2) for high etch selectivity over masking layers.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t2_s0_m3",
      "label": "Atomic Layer Etching (ALE)",
      "description": "Sequential self-limiting adsorption and reaction cycles removing single atomic layers.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t2_s1",
      "label": "Atomic Layer & Chemical Deposition",
      "description": "Conformal thin-film dielectric and metal layer growth.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t2_s1_m0",
      "label": "Atomic Layer Deposition (ALD)",
      "description": "Self-limiting ALD cycles of HfCl4 and H2O forming ultra-conformal HfO2 gate oxide.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t2_s1_m1",
      "label": "Plasma-Enhanced CVD (PECVD)",
      "description": "Generating reactive precursor radicals at lower temperatures (300C) using RF fields.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t2_s1_m2",
      "label": "Physical Vapor Deposition (PVD) Sputtering",
      "description": "Argon ion bombardment knocking metal target atoms onto wafer surface.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t2_s1_m3",
      "label": "Metal Organic CVD (MOCVD)",
      "description": "Precursor organometallic compounds depositing III-V nitride and oxide films.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t2_s2",
      "label": "Metallization & Damascene Process",
      "description": "Creating multi-layer copper interconnect networks.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t2_s2_m0",
      "label": "Dual Damascene Sequence",
      "description": "Etching trench and via voids into dielectric before single copper electroplating step.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t2_s2_m1",
      "label": "Tantalum/Tantalum Nitride Barrier",
      "description": "Conformal PVD barrier layer preventing copper atom diffusion into low-k dielectric.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t2_s2_m2",
      "label": "Copper Electroplating (ECP)",
      "description": "Bottom-up void-free trench filling using organic accelerator and suppressor additives.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t2_s2_m3",
      "label": "Low-k & Ultra-Low-k Dielectrics",
      "description": "Porous organosilicate glass (SiCOH, k < 2.5) reducing inter-wire RC capacitance.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t3",
      "label": "Cleanroom Metrology & Process Control",
      "description": "Nanometer defect detection and statistical process control.",
      "type": "topic"
    },
    {
      "id": "chip_p2_t3_s0",
      "label": "Advanced Electron & Optical Metrology",
      "description": "In-line structural measurement tools.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t3_s0_m0",
      "label": "Critical Dimension SEM (CD-SEM)",
      "description": "Low-energy electron beam measuring linewidths with sub-nanometer precision.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t3_s0_m1",
      "label": "Transmission Electron Microscopy (TEM)",
      "description": "Atomic-scale cross-sectional lattice imaging of nanosheets and contacts.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t3_s0_m2",
      "label": "Spectroscopic Ellipsometry",
      "description": "Measuring film thickness and refractive index via polarized light reflection.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t3_s0_m3",
      "label": "X-Ray Reflectivity & Fluorescence (XRF)",
      "description": "Non-destructive composition and thickness measurement of ultra-thin metal stacks.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t3_s1",
      "label": "Yield Engineering & Defect Mitigation",
      "description": "Maximizing functional dies per wafer.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t3_s1_m0",
      "label": "Random & Systematic Defect Inspection",
      "description": "Brightfield and darkfield laser optical wafer inspection catching airborne dust.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t3_s1_m1",
      "label": "Yield Models (Poisson & Seeds)",
      "description": "Calculating die yield Y = e^(-D * A) based on defect density D and die area A.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t3_s1_m2",
      "label": "Parametric Wafer Acceptance Testing (WAT)",
      "description": "Electrical probe testing of transistor arrays on wafer scribe lines.",
      "type": "concept"
    },
    {
      "id": "chip_p2_t3_s1_m3",
      "label": "Equipment Front End Modules (EFEM)",
      "description": "Automated FOUP wafer handling interfaces maintaining ISO Class 1 cleanroom environments.",
      "type": "concept"
    },
    {
      "id": "chip_p3",
      "label": "Digital Logic & Microarchitecture",
      "description": "Gate-level RTL design, superscalar processor pipelines, and memory hierarchies.",
      "type": "topic"
    },
    {
      "id": "chip_p3_t0",
      "label": "Gate-Level Logic & Standard Cells",
      "description": "Translating Boolean logic into high-speed physical transistor layouts.",
      "type": "topic"
    },
    {
      "id": "chip_p3_t0_s0",
      "label": "Static CMOS Logic Topologies",
      "description": "Complementary PMOS pull-up and NMOS pull-down networks eliminating steady static current.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t0_s0_m0",
      "label": "Transistor Sizing (W/L Ratios)",
      "description": "Ratioing PMOS 2x wider than NMOS to match electron vs hole mobility difference.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t0_s0_m1",
      "label": "Logical Effort Method",
      "description": "Quantifying stage delay h = g * f + p to optimize gate sizing in multi-stage logic paths.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t0_s0_m2",
      "label": "Elmore Delay Model",
      "description": "RC tree network delay approximation t_pd = sum(R_i * C_i) for complex routing paths.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t0_s0_m3",
      "label": "Pass-Transistor & Transmission Gates",
      "description": "Parallel N/P pairs transmitting full-rail logic 0 and 1 without threshold drop.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t0_s1",
      "label": "Sequential Memory Primitives",
      "description": "Flip-flops, latches, and clocking strategies.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t0_s1_m0",
      "label": "Master-Slave D Flip-Flop",
      "description": "Cascaded transmission gate latches sampling data on rising clock edge.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t0_s1_m1",
      "label": "Setup Time (t_setup) & Hold Time (t_hold)",
      "description": "Required data stability window relative to clock edge to prevent metastability.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t0_s1_m2",
      "label": "Metastability & Synchronizers",
      "description": "Multi-stage DFF synchronizers resolving asynchronous signals into stable logic.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t0_s1_m3",
      "label": "Pulse Latches & Explicit Clock Gating",
      "description": "High-speed low-power latch clocking driven by narrow generated clock pulses.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t0_s2",
      "label": "Standard Cell Library Characterization",
      "description": "Liberty (.lib) format modeling of cell delay, power, and area.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t0_s2_m0",
      "label": "Non-Linear Delay Models (NLDM)",
      "description": "Look-up tables modeling gate delay as a function of input transition and output load.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t0_s2_m1",
      "label": "Composite Current Source (CCS)",
      "description": "Time-variant current source models capturing micro-scale cell driver behavior.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t0_s2_m2",
      "label": "Internal & Switching Power Models",
      "description": "Discharging energy E = C * V^2 plus short-circuit crowbar current during transitions.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t0_s2_m3",
      "label": "Multi-VT Cell Variants (LVT / RVT / HVT)",
      "description": "Offering low, regular, and high threshold cells to trade speed for leak power.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t1",
      "label": "Superscalar Microarchitecture",
      "description": "Internal layout of modern high-performance CPU/GPU compute cores.",
      "type": "topic"
    },
    {
      "id": "chip_p3_t1_s0",
      "label": "Pipeline Execution Stages",
      "description": "Pipelining instruction execution across parallel functional units.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t1_s0_m0",
      "label": "Instruction Fetch & Predecode",
      "description": "Branch-target driven instruction fetching from L1 instruction cache.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t1_s0_m1",
      "label": "Instruction Decode & Fusion",
      "description": "Translating x86/ARM instructions into internal micro-operations (uops).",
      "type": "concept"
    },
    {
      "id": "chip_p3_t1_s0_m2",
      "label": "Register Alias Table (RAT) & Rename",
      "description": "Mapping architectural registers to physical register files (PRF) to fix WAW/WAR hazards.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t1_s0_m3",
      "label": "Reorder Buffer (ROB) & Retirement",
      "description": "In-order retirement tracking maintaining precise exception states during OOO execution.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t1_s1",
      "label": "Dynamic Branch Prediction",
      "description": "Eliminating pipeline stalls caused by conditional control flow branches.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t1_s1_m0",
      "label": "Branch Target Buffer (BTB)",
      "description": "Cache storing branch target addresses to predict next fetch PC cycle-0.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t1_s1_m1",
      "label": "Two-Level Adaptive & Pattern History",
      "description": "Global and local branch history registers tracking historical branch behavior.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t1_s1_m2",
      "label": "TAGE (Tagged Geometric) Predictor",
      "description": "Multiple tagged predictor tables indexed by geometrically scaled history lengths.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t1_s1_m3",
      "label": "Return Stack Buffer (RSB)",
      "description": "Dedicated LIFO stack tracking call/return return addresses for function calls.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t1_s2",
      "label": "Out-of-Order (OOO) Execution",
      "description": "Instruction scheduling maximizing functional unit utilization.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t1_s2_m0",
      "label": "Reservation Stations & Issue Queues",
      "description": "Decoupling instruction decoding from execution unit readiness.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t1_s2_m1",
      "label": "Unified Physical Register File (PRF)",
      "description": "Large central register bank holding speculative instruction results.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t1_s2_m2",
      "label": "Memory Disambiguation & Load/Store Queue",
      "description": "Speculatively issuing loads ahead of un-addressed stores with store-forwarding.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t1_s2_m3",
      "label": "Execution Ports & Vector Units",
      "description": "Multiple parallel ALUs, FPUs, and SIMD vector lanes (AVX-512 / SVE2).",
      "type": "concept"
    },
    {
      "id": "chip_p3_t2",
      "label": "Memory Subsystems & SRAM/DRAM",
      "description": "On-chip memory hierarchies and memory controller interfaces.",
      "type": "topic"
    },
    {
      "id": "chip_p3_t2_s0",
      "label": "6T SRAM Bitcell & Arrays",
      "description": "High-speed on-chip cache memory bitcells.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t2_s0_m0",
      "label": "6-Transistor Bitcell Layout",
      "description": "Cross-coupled CMOS inverters with 2 access transistors connected to bitlines.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t2_s0_m1",
      "label": "Static Noise Margin (SNM)",
      "description": "Voltage noise margin determining read stability and writeability bounds.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t2_s0_m2",
      "label": "Differential Sense Amplifiers",
      "description": "Magnifying small bitline voltage swings during SRAM read operations.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t2_s0_m3",
      "label": "Write Assist & Read Assist Circuits",
      "description": "Temporarily lowering VDD or pulling wordline low to guarantee write completion.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t2_s1",
      "label": "Cache Memory Controllers",
      "description": "Low-latency cache coherence and miss handling.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t2_s1_m0",
      "label": "Set-Associative Cache Mapping",
      "description": "Dividing cache memory into tag, index, and offset fields across N-way sets.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t2_s1_m1",
      "label": "MESI & MOESI Coherence Protocols",
      "description": "Bus snooping and directory-based protocols keeping multi-core caches coherent.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t2_s1_m2",
      "label": "Non-Blocking Caches & MSHR",
      "description": "Miss Status Holding Registers tracking multiple parallel outstanding memory misses.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t2_s1_m3",
      "label": "Hardware Prefetchers (Stream / L1/L2)",
      "description": "Detecting linear and spatial memory access patterns to pre-load cache lines.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t2_s2",
      "label": "DRAM & Memory Controllers",
      "description": "High-density off-chip main memory management.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t2_s2_m0",
      "label": "1T1C DRAM Cell Operation",
      "description": "Storage capacitor storing charge Q = C * V accessed via single pass transistor.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t2_s2_m1",
      "label": "DRAM Command Timing (tRCD, tRP, tCL)",
      "description": "Bank row activation, precharging, and column CAS latency timing constraints.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t2_s2_m2",
      "label": "Periodic Auto-Refresh Mechanics",
      "description": "Periodically restoring decaying capacitor charge across DRAM bank rows.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t2_s2_m3",
      "label": "Memory Controller Scheduler",
      "description": "Reordering memory commands to optimize DRAM bank concurrency and bus turnaround.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t3",
      "label": "Hardware Description Languages (HDL)",
      "description": "RTL languages and high-level synthesis generators.",
      "type": "topic"
    },
    {
      "id": "chip_p3_t3_s0",
      "label": "SystemVerilog Synthesizable RTL",
      "description": "Hardware modeling language standard.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t3_s0_m0",
      "label": "Always_ff & Always_comb Constructs",
      "description": "Strict block declarations separating clocked flip-flops from combinational logic.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t3_s0_m1",
      "label": "Parameterized Modules & Interfaces",
      "description": "Bundling related signals into clean bus interfaces with modports.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t3_s0_m2",
      "label": "Generate Blocks & Unrolling",
      "description": "Compile-time conditional logic instantiation and vector loop unrolling.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t3_s0_m3",
      "label": "Blocking vs Non-Blocking Assignments",
      "description": "Using '=' for combinational logic and '<=' for clocked sequential registers.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t3_s1",
      "label": "Advanced Hardware Generators",
      "description": "Metaprogramming languages compiling to clean Verilog.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t3_s1_m0",
      "label": "Chisel Scala-Based HDL",
      "description": "Object-oriented hardware construction language providing rich parameterized generators.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t3_s1_m1",
      "label": "SpinalHDL Functional Architecture",
      "description": "Type-safe functional hardware description language with built-in clock domain checks.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t3_s1_m2",
      "label": "SystemC Transaction Level Modeling (TLM)",
      "description": "C++ framework modeling cycle-approximate hardware interconnects for software bring-up.",
      "type": "concept"
    },
    {
      "id": "chip_p3_t3_s1_m3",
      "label": "C/C++ High-Level Synthesis (HLS)",
      "description": "Compiling C loops directly into pipelined RTL hardware using Vivado/Catapult HLS.",
      "type": "concept"
    },
    {
      "id": "chip_p4",
      "label": "Physical Design, Synthesis & EDA Toolchains",
      "description": "Transforming abstract RTL code into geometric GDSII/OASIS mask layouts.",
      "type": "topic"
    },
    {
      "id": "chip_p4_t0",
      "label": "Logic Synthesis & Technology Mapping",
      "description": "RTL compilation into technology-specific gate netlists.",
      "type": "topic"
    },
    {
      "id": "chip_p4_t0_s0",
      "label": "Elaboration & Boolean Optimization",
      "description": "Parsing RTL trees into un-mapped GTECH Boolean gate networks.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t0_s0_m0",
      "label": "Redundant Logic Pruning",
      "description": "Removing unreachable state logic and unused register outputs.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t0_s0_m1",
      "label": "Don't Care Space Exploitation",
      "description": "Leveraging unused input states to simplify combinational gate expressions.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t0_s0_m2",
      "label": "Constant Propagation",
      "description": "Evaluating static parameter values to eliminate fixed-value gates.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t0_s0_m3",
      "label": "Resource Sharing",
      "description": "Sharing expensive arithmetic adders/multipliers across time-multiplexed paths.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t0_s1",
      "label": "Technology Mapping & Cell Matching",
      "description": "Mapping Boolean gates to target foundry standard cell libraries.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t0_s1_m0",
      "label": "Pattern Matching Algorithms",
      "description": "Tree-mapping algorithms selecting optimal standard cells for delay and area.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t0_s1_m1",
      "label": "Liberty (.lib) File Parser",
      "description": "Extracting pin capacitance, cell delay lookup tables, and power state tables.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t0_s1_m2",
      "label": "Area vs Delay Optimization Tradeoff",
      "description": "Swapping cell drive strengths to meet timing targets with minimal gate area.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t0_s1_m3",
      "label": "Gate-Level Netlist Generation",
      "description": "Emitting structural Verilog netlist referencing foundry cell primitives.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t0_s2",
      "label": "Synthesis Optimizations",
      "description": "Specialized synthesis passes for power and timing.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t0_s2_m0",
      "label": "Integrated Clock Gating (ICG)",
      "description": "Automatically inserting clock gating cells to turn off clocks to idle registers.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t0_s2_m1",
      "label": "Register Retiming",
      "description": "Moving flip-flops forward or backward across combinational logic to balance delays.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t0_s2_m2",
      "label": "DFT Scan Chain Pre-Insertion",
      "description": "Replacing standard DFFs with Scan-DFFs during synthesis pass.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t0_s2_m3",
      "label": "Equivalence Checking (LEC Setup)",
      "description": "Emitting guidance files (SVF) for formal logic equivalence verification.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t1",
      "label": "Static Timing Analysis (STA)",
      "description": "Verifying setup and hold constraints across all PVT operating corners.",
      "type": "topic"
    },
    {
      "id": "chip_p4_t1_s0",
      "label": "Timing Path Definitions & Constraints",
      "description": "Analyzing timing paths from startpoint flip-flops to endpoint flip-flops.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t1_s0_m0",
      "label": "Setup Constraint Check (Tsetup)",
      "description": "Data arrival before clock edge: T_cq + T_comb + T_setup <= T_clk + T_skew.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t1_s0_m1",
      "label": "Hold Constraint Check (Thold)",
      "description": "Data stability after clock edge: T_cq + T_comb >= T_hold + T_skew.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t1_s0_m2",
      "label": "Clock Skew & Jitter Modeling",
      "description": "Accounting for spatial arrival differences (skew) and temporal variance (jitter).",
      "type": "concept"
    },
    {
      "id": "chip_p4_t1_s0_m3",
      "label": "Recovery & Removal Checks",
      "description": "Timing checks verifying asynchronous reset de-assertion relative to clock edge.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t1_s1",
      "label": "Multi-Corner Multi-Mode (MCMM)",
      "description": "Simultaneous timing closure across process, voltage, and temperature variations.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t1_s1_m0",
      "label": "PVT Operating Corners",
      "description": "Evaluating Worst-Case Cold (WCC) and Best-Case Fast (BCF) transistor corners.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t1_s1_m1",
      "label": "On-Chip Variation (OCV) Derating",
      "description": "Applying statistical derate factors to model local transistor length variations.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t1_s1_m2",
      "label": "Advanced OCV (AOCV) & POCV",
      "description": "Parametric and path-depth dependent OCV modeling reducing over-pessimism.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t1_s1_m3",
      "label": "False Paths & Multicycle Exceptions",
      "description": "Informing STA engine to ignore non-functional or multi-clock timing paths.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t1_s2",
      "label": "Crosstalk & Signal Integrity",
      "description": "Inter-wire capacitive coupling impacting signal delay and noise.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t1_s2_m0",
      "label": "Crosstalk Noise Pumping",
      "description": "Aggressor wire switching inducing voltage glitch on quiet victim wire.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t1_s2_m1",
      "label": "Crosstalk Delay Impact",
      "description": "Opposite-direction switching on neighboring wires increasing effective RC delay.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t1_s2_m2",
      "label": "Signal Integrity Repair",
      "description": "Buffer insertion and wire widening to eliminate crosstalk violations.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t1_s2_m3",
      "label": "Electromigration (EM) Limits",
      "description": "Restricting current density in metal lines to prevent physical wire voiding.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t2",
      "label": "Floorplanning & Power Grid Architecture",
      "description": "Die layout planning and power distribution network (PDN).",
      "type": "topic"
    },
    {
      "id": "chip_p4_t2_s0",
      "label": "Floorplanning & Macro Placement",
      "description": "Establishing die envelope and macro layout positions.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t2_s0_m0",
      "label": "Die Size & Aspect Ratio Selection",
      "description": "Estimating core area requirements based on cell count and routing utilization.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t2_s0_m1",
      "label": "IO Pad Ring & Flip-Chip Bump Array",
      "description": "Placing periphery IO pads or C4 bump arrays for power and signals.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t2_s0_m2",
      "label": "SRAM Macro Placement Strategy",
      "description": "Positioning memory blocks along die edges to preserve central routing channels.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t2_s0_m3",
      "label": "Keep-Out Zones & Halo Clearance",
      "description": "Defining routing blockages around macros to prevent local congestion.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t2_s1",
      "label": "Power Grid Network (PDN) Design",
      "description": "Designing low-resistance power distribution meshes.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t2_s1_m0",
      "label": "Multi-Layer VDD/VSS Mesh",
      "description": "Weaving heavy metal straps (M8-M15) to distribute VDD and VSS across die.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t2_s1_m1",
      "label": "IR Drop Static & Dynamic Analysis",
      "description": "Simulating DC power supply voltage drop and transient switching voltage drop.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t2_s1_m2",
      "label": "On-Chip Decoupling Capacitors (Decaps)",
      "description": "Placing filler decap cells near high-toggle blocks to damp transient VDD dip.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t2_s1_m3",
      "label": "Power Gating & Switch Cells",
      "description": "Header/footer transistor switches cutting power to inactive power domains.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t3",
      "label": "Placement, Routing & DRC/LVS",
      "description": "Physical geometry placement, wire routing, and foundry sign-off.",
      "type": "topic"
    },
    {
      "id": "chip_p4_t3_s0",
      "label": "Cell Placement & Clock Tree Synthesis",
      "description": "Placing standard cells and building clock trees.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t3_s0_m0",
      "label": "Global & Detail Placement",
      "description": "Analytical force-directed placement spreading millions of cells uniformly.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t3_s0_m1",
      "label": "Clock Tree Synthesis (CTS) H-Tree",
      "description": "Synthesizing symmetric buffer trees to balance clock delay to all flip-flops.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t3_s0_m2",
      "label": "Clock Mesh & Resonant Clocking",
      "description": "Low-skew clock grid structures used in ultra-high-speed processor cores.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t3_s0_m3",
      "label": "Congestion Mitigation Passes",
      "description": "Spreading cells in dense routing regions to eliminate routing bottlenecks.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t3_s1",
      "label": "Global & Detail Routing Engines",
      "description": "Connecting cell pins via metal wires M1 through M15.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t3_s1_m0",
      "label": "Global Routing Grid",
      "description": "Partitioning die into gcells and planning coarse wire routes across layers.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t3_s1_m1",
      "label": "Detail Routing & Track Assignment",
      "description": "Assigning exact metal geometries to routing tracks meeting width/space rules.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t3_s1_m2",
      "label": "Redundant Via Insertion",
      "description": "Adding double-vias to every wire connection to guarantee yield against via loss.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t3_s1_m3",
      "label": "Metal Fill & CMP Balancing",
      "description": "Inserting dummy metal shapes on sparse layers to maintain CMP polishing flatness.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t3_s2",
      "label": "Physical Sign-Off Verification",
      "description": "Foundry rule compliance checks before mask fabrication.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t3_s2_m0",
      "label": "Design Rule Checking (DRC)",
      "description": "Verifying layout geometries against foundry min width, spacing, and enclosure rules.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t3_s2_m1",
      "label": "Layout Versus Schematic (LVS)",
      "description": "Extracting transistor netlist from GDSII mask shapes and matching to RTL netlist.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t3_s2_m2",
      "label": "Parasitic RC Extraction (SPEF)",
      "description": "Extracting resistance and capacitance of all routed wires into SPEF format.",
      "type": "concept"
    },
    {
      "id": "chip_p4_t3_s2_m3",
      "label": "GDSII / OASIS Export",
      "description": "Generating final stream file containing physical mask layer polygons for tapeout.",
      "type": "concept"
    },
    {
      "id": "chip_p5",
      "label": "Verification, Validation & Silicon Testing",
      "description": "Pre-silicon functional verification, formal proofs, and post-silicon manufacturing test.",
      "type": "topic"
    },
    {
      "id": "chip_p5_t0",
      "label": "Universal Verification Methodology (UVM)",
      "description": "SystemVerilog framework for coverage-driven functional verification.",
      "type": "topic"
    },
    {
      "id": "chip_p5_t0_s0",
      "label": "UVM Architecture & Components",
      "description": "Object-oriented testbench class hierarchy.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t0_s0_m0",
      "label": "UVM Driver & Monitor",
      "description": "Driver converting abstract transactions to pin signals; Monitor capturing pin activity.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t0_s0_m1",
      "label": "UVM Sequencer & Sequences",
      "description": "Generating streams of stimulus transaction objects sent to driver.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t0_s0_m2",
      "label": "UVM Scoreboard & Predictor",
      "description": "Comparing actual DUT output against golden reference model predictions.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t0_s0_m3",
      "label": "UVM Register Abstraction Layer (RAL)",
      "description": "Mirroring hardware register maps to read/write registers via abstract API.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t0_s1",
      "label": "Coverage-Driven Verification (CDV)",
      "description": "Measuring verification completeness systematically.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t0_s1_m0",
      "label": "Constrained Random Generation",
      "description": "Randomizing transaction variables subject to SystemVerilog constraint blocks.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t0_s1_m1",
      "label": "Functional Covergroups & Coverpoints",
      "description": "Tracking state coverage of architectural feature combinations.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t0_s1_m2",
      "label": "Cross Coverage Analysis",
      "description": "Correlating multiple coverpoints to verify complex edge-case state interactions.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t0_s1_m3",
      "label": "Code Coverage Metrics",
      "description": "Measuring statement, branch, condition, and FSM transition coverage.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t0_s2",
      "label": "SystemVerilog Assertions (SVA)",
      "description": "Embedded temporal logic protocol checks.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t0_s2_m0",
      "label": "Immediate vs Concurrent Assertions",
      "description": "Immediate checks in procedural code; Concurrent checks evaluated on clock edges.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t0_s2_m1",
      "label": "SVA Sequences & Properties",
      "description": "Expressing temporal relationships e.g. 'req |-> ##[1:5] gnt'.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t0_s2_m2",
      "label": "Assertion-Based Verification (ABV)",
      "description": "Catching protocol violations at source before corrupting downstream logic.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t0_s2_m3",
      "label": "Cover Properties",
      "description": "Verifying that specific assertion sequences are successfully reached in simulation.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t1",
      "label": "Formal Verification Methods",
      "description": "Mathematical proof of hardware correctness without simulation.",
      "type": "topic"
    },
    {
      "id": "chip_p5_t1_s0",
      "label": "Property Checking & Model Checking",
      "description": "Proving assertions across all possible input stimulus sequences.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t1_s0_m0",
      "label": "Bounded Model Checking (BMC)",
      "description": "Unrolling sequential circuit for N clock cycles to find assertion violations.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t1_s0_m1",
      "label": "Unbounded Proof (Induction / k-Induction)",
      "description": "Mathematical induction proving assertions hold across infinite clock cycles.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t1_s0_m2",
      "label": "Satisfiability (SAT / SMT) Solvers",
      "description": "Evaluating Boolean formulas to find counterexamples to assertions.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t1_s0_m3",
      "label": "State Space Explosion Control",
      "description": "Abstractions and black-boxing to manage formal state complexity.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t1_s1",
      "label": "Logic Equivalence Checking (LEC)",
      "description": "Verifying netlist equivalence across compilation transformations.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t1_s1_m0",
      "label": "Combinational Equivalence Checking",
      "description": "Comparing un-mapped RTL against synthesized gate netlists.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t1_s1_m1",
      "label": "Post-ECO Equivalence Checking",
      "description": "Proving manual Engineering Change Order (ECO) netlist edits preserve functionality.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t1_s1_m2",
      "label": "Compare Point Mapping",
      "description": "Matching key registers and primary outputs between reference and implementation.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t1_s1_m3",
      "label": "Non-Equivalence Diagnosis",
      "description": "Generating bug traces pointing to exact mismatched logic gates.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t2",
      "label": "Emulation & FPGA Prototyping",
      "description": "Hardware-accelerated pre-silicon system validation.",
      "type": "topic"
    },
    {
      "id": "chip_p5_t2_s0",
      "label": "Hardware Emulators (Palladium / Zebu)",
      "description": "Custom hardware arrays simulating billion-gate designs at megahertz speeds.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t2_s0_m0",
      "label": "Custom Processor/FPGA Emulator Cores",
      "description": "Mapping RTL directly onto fast emulator chip arrays.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t2_s0_m1",
      "label": "In-Circuit Emulation (ICE)",
      "description": "Connecting hardware emulator directly to physical target system peripheral sockets.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t2_s0_m2",
      "label": "Virtual Interface Transactors",
      "description": "High-speed C++/DPI transactors replacing slow physical cables.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t2_s0_m3",
      "label": "Full Waveform Visibility",
      "description": "Capturing 100% signal history into FSDB dumps without execution speed penalty.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t2_s1",
      "label": "FPGA Prototyping Systems",
      "description": "Mapping SoC designs onto commercial multi-FPGA systems.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t2_s1_m0",
      "label": "Multi-FPGA Partitioning",
      "description": "Splitting large designs across multiple FPGAs using TDM pin multiplexing.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t2_s1_m1",
      "label": "Clock Domain Mapping",
      "description": "Translating ASIC clock trees into FPGA DLL/MMCM clock resources.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t2_s1_m2",
      "label": "Memory Architecture Emulation",
      "description": "Mapping ASIC SRAMs onto FPGA Block RAM (BRAM) and UltraRAM.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t2_s1_m3",
      "label": "Speed-Bridge Controllers",
      "description": "Buffering fast real-world interfaces down to FPGA prototype speeds.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t3",
      "label": "Design for Testability (DFT) & Silicon Testing",
      "description": "Manufacturing defect detection in physical silicon.",
      "type": "topic"
    },
    {
      "id": "chip_p5_t3_s0",
      "label": "Scan Architecture & ATPG",
      "description": "Transforming sequential circuits into shift registers for testing.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t3_s0_m0",
      "label": "Scan Chain Insertion",
      "description": "Replacing standard flip-flops with Scan-DFFs multiplexed for test mode.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t3_s0_m1",
      "label": "Stuck-At Fault Model",
      "description": "Testing if logic nodes are permanently shorted to VDD (stuck-at-1) or VSS (stuck-at-0).",
      "type": "concept"
    },
    {
      "id": "chip_p5_t3_s0_m2",
      "label": "At-Speed Launch-Off-Capture (LOC)",
      "description": "Two-pulse clocking testing transition delay faults at full operational frequency.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t3_s0_m3",
      "label": "Automatic Test Pattern Generation (ATPG)",
      "description": "PODEM and D-algorithms computing minimum test vector set for 99%+ fault coverage.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t3_s1",
      "label": "Built-In Self-Test (BIST) & JTAG",
      "description": "On-chip hardware testing engines.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t3_s1_m0",
      "label": "Memory BIST (MBIST)",
      "description": "Hardware engines running March algorithms to detect SRAM bitcell defects.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t3_s1_m1",
      "label": "Logic BIST (LBIST)",
      "description": "On-chip pseudo-random pattern generator (PRPG) and signature analyzer (MISR).",
      "type": "concept"
    },
    {
      "id": "chip_p5_t3_s1_m2",
      "label": "JTAG IEEE 1149.1 Standard",
      "description": "Boundary scan architecture enabling pin testing and internal chip configuration.",
      "type": "concept"
    },
    {
      "id": "chip_p5_t3_s1_m3",
      "label": "IEEE 1500 Embedded Core Test",
      "description": "Wrapper standard isolating IP cores for independent manufacturing test.",
      "type": "concept"
    },
    {
      "id": "chip_p6",
      "label": "Analog, Mixed-Signal & RF IC Design",
      "description": "Continuous-signal transistor circuits, data converters, and high-frequency RF transceivers.",
      "type": "topic"
    },
    {
      "id": "chip_p6_t0",
      "label": "Precision Analog Building Blocks",
      "description": "Linear low-noise transistor amplifier and bias circuits.",
      "type": "topic"
    },
    {
      "id": "chip_p6_t0_s0",
      "label": "Current Mirrors & Biasing",
      "description": "Establishing stable reference currents across temperature.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t0_s0_m0",
      "label": "Simple & Cascode Current Mirrors",
      "description": "High output impedance current sources using cascode transistor stacking.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t0_s0_m1",
      "label": "Wilson Current Mirror",
      "description": "Feedback-stabilized current mirror minimizing channel length modulation error.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t0_s0_m2",
      "label": "Widlar Current Source",
      "description": "Low-current biasing source using emitter/source degeneration resistors.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t0_s0_m3",
      "label": "Threshold Voltage Matching",
      "description": "Interdigitized and common-centroid layout patterns reducing offset drift.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t0_s1",
      "label": "Voltage & Frequency References",
      "description": "Temperature-compensated reference circuits.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t0_s1_m0",
      "label": "Bandgap Voltage Reference",
      "description": "Summing PTAT (Proportional To Absolute Temp) and CTAT voltages to yield ~1.20V.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t0_s1_m1",
      "label": "Brokaw Cell Architecture",
      "description": "Two-transistor bandgap reference circuit with active feedback operational amplifier.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t0_s1_m2",
      "label": "Curvature Correction Techniques",
      "description": "Eliminating non-linear temperature drift terms in high-precision references.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t0_s1_m3",
      "label": "Crystal Oscillators & Drivers",
      "description": "Quartz crystal pierce oscillators producing ultra-stable clock references.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t0_s2",
      "label": "Operational Amplifiers (Op-Amps)",
      "description": "High-gain negative feedback amplification stages.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t0_s2_m0",
      "label": "Folded Cascode OTA",
      "description": "Single-stage operational transconductance amplifier providing wide output swing.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t0_s2_m1",
      "label": "Two-Stage Miller Op-Amp",
      "description": "High-gain amplifier using Miller capacitor feedback compensation for stability.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t0_s2_m2",
      "label": "Common-Mode Feedback (CMFB)",
      "description": "Sensing and stabilizing output common-mode voltage in differential amplifiers.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t0_s2_m3",
      "label": "Chopper Stabilization",
      "description": "Modulating DC offset and 1/f flicker noise to high frequencies away from signal band.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t1",
      "label": "Data Converters (ADC & DAC)",
      "description": "Bridging physical analog signals and digital domain processing.",
      "type": "topic"
    },
    {
      "id": "chip_p6_t1_s0",
      "label": "Analog-to-Digital Converters (ADC)",
      "description": "Quantizing continuous voltages into digital binary words.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t1_s0_m0",
      "label": "Successive Approximation (SAR) ADC",
      "description": "Binary-search ADC utilizing capacitive DAC array and high-speed comparator.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t1_s0_m1",
      "label": "Sigma-Delta (\u03a3\u0394) Oversampling ADC",
      "description": "Noise-shaping modulator pushing quantization noise out of signal band.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t1_s0_m2",
      "label": "Pipelined ADC Architecture",
      "description": "Cascaded low-resolution flash stages achieving high sample rates (>100 MSPS).",
      "type": "concept"
    },
    {
      "id": "chip_p6_t1_s0_m3",
      "label": "Flash ADC",
      "description": "Parallel comparator array converting analog signals in single clock cycle.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t1_s1",
      "label": "Digital-to-Analog Converters (DAC)",
      "description": "Synthesizing continuous voltages from binary inputs.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t1_s1_m0",
      "label": "Current-Steering DAC",
      "description": "Array of weighted current sources switched directly into output load resistor.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t1_s1_m1",
      "label": "R-2R Ladder DAC",
      "description": "Resistor ladder network using only two resistance values for precision matching.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t1_s1_m2",
      "label": "Segmented DAC Architecture",
      "description": "Combining thermometer-coded MSBs with binary-weighted LSBs to reduce glitch energy.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t1_s1_m3",
      "label": "Delta-Sigma DAC Filtering",
      "description": "Digital interpolation filter and 1-bit DAC with analog low-pass reconstruction filter.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t1_s2",
      "label": "Converter Dynamic Performance Metrics",
      "description": "Evaluating non-ideal data converter metrics.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t1_s2_m0",
      "label": "Effective Number of Bits (ENOB)",
      "description": "ENOB = (SINAD - 1.76) / 6.02 measuring true signal-to-noise ratio.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t1_s2_m1",
      "label": "Differential & Integral Non-Linearity",
      "description": "DNL measuring step size errors; INL measuring deviation from ideal line.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t1_s2_m2",
      "label": "Spurious-Free Dynamic Range (SFDR)",
      "description": "Ratio of fundamental signal amplitude to strongest harmonic spur.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t1_s2_m3",
      "label": "Quantization Noise Floor",
      "description": "Theoretical SNR limit = 6.02 * N + 1.76 dB for N-bit ideal quantizer.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t2",
      "label": "Phase-Locked Loops (PLL) & Clocking",
      "description": "High-frequency clock synthesis and jitter cleanup.",
      "type": "topic"
    },
    {
      "id": "chip_p6_t2_s0",
      "label": "PLL Architecture & Loop Dynamics",
      "description": "Feedback control loop synchronizing output clock phase.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t2_s0_m0",
      "label": "Phase Frequency Detector (PFD)",
      "description": "Tri-state logic detecting phase lead/lag and frequency errors.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t2_s0_m1",
      "label": "Charge Pump & Passive Loop Filter",
      "description": "Converting PFD digital pulses into smooth control voltage V_ctrl.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t2_s0_m2",
      "label": "Voltage-Controlled Oscillator (VCO)",
      "description": "LC-tank or ring oscillator adjusting frequency as f = f0 + K_vco * V_ctrl.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t2_s0_m3",
      "label": "Feedback Divider (N / Fractional-N)",
      "description": "Dividing output frequency down to reference frequency level.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t2_s1",
      "label": "Jitter & Phase Noise Mechanics",
      "description": "Temporal instability in clock generation.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t2_s1_m0",
      "label": "Phase Noise L(f) Profile",
      "description": "Frequency-domain power spectral density of phase fluctuations (dBc/Hz).",
      "type": "concept"
    },
    {
      "id": "chip_p6_t2_s1_m1",
      "label": "Period Jitter & Accumulative Jitter",
      "description": "Time-domain variance in clock edge arrival relative to ideal position.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t2_s1_m2",
      "label": "LC-Tank Quality Factor (Q)",
      "description": "High-Q inductor design minimizing VCO phase noise.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t2_s1_m3",
      "label": "Delta-Sigma Fractional Modulators",
      "description": "Dithering fractional N divider ratios to suppress fractional spurs.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t3",
      "label": "High-Speed SerDes & RF Front-Ends",
      "description": "Gigabit serial interconnect PHYs and wireless RF transceivers.",
      "type": "topic"
    },
    {
      "id": "chip_p6_t3_s0",
      "label": "High-Speed Serializer/Deserializer (SerDes)",
      "description": "Transmitting multimodality multi-gigabit data over copper backplanes.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t3_s0_m0",
      "label": "PAM4 vs NRZ Signaling",
      "description": "Pulse Amplitude Modulation 4-level encoding doubling bit rate per baud cycle.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t3_s0_m1",
      "label": "Continuous-Time Linear Equalizer (CTLE)",
      "description": "Analog high-pass RX filter boosting high-frequency attenuation loss.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t3_s0_m2",
      "label": "Decision Feedback Equalization (DFE)",
      "description": "Non-linear feedback filter eliminating inter-symbol interference (ISI).",
      "type": "concept"
    },
    {
      "id": "chip_p6_t3_s0_m3",
      "label": "Clock and Data Recovery (CDR)",
      "description": "Extracting data-synchronized clock from incoming serial data stream.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t3_s1",
      "label": "RF Front-End Transceivers",
      "description": "Radio frequency signal transmission and reception.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t3_s1_m0",
      "label": "Low Noise Amplifier (LNA)",
      "description": "First RX amplifier stage maximizing gain while adding minimal noise figure (NF).",
      "type": "concept"
    },
    {
      "id": "chip_p6_t3_s1_m1",
      "label": "RF Mixers & Downconversion",
      "description": "Multiplying RF signal with Local Oscillator (LO) to yield Intermediate Freq (IF).",
      "type": "concept"
    },
    {
      "id": "chip_p6_t3_s1_m2",
      "label": "Power Amplifier (PA) Linearization",
      "description": "High-power TX stage utilizing digital pre-distortion (DPD) for high efficiency.",
      "type": "concept"
    },
    {
      "id": "chip_p6_t3_s1_m3",
      "label": "Impedance Matching Networks",
      "description": "Smith chart matched LC networks ensuring 50-ohm power transfer to antenna.",
      "type": "concept"
    },
    {
      "id": "chip_p7",
      "label": "Advanced Packaging & 3D Heterogeneous Systems",
      "description": "Disaggregated chiplets, silicon interposers, backside power delivery, and high-bandwidth memory.",
      "type": "topic"
    },
    {
      "id": "chip_p7_t0",
      "label": "Chiplet Architecture & Die Interfaces",
      "description": "Modular SoC disaggregation across optimal process nodes.",
      "type": "topic"
    },
    {
      "id": "chip_p7_t0_s0",
      "label": "Die-to-Die Protocol Standards",
      "description": "Open physical and link standards for multi-die interconnect.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t0_s0_m0",
      "label": "Universal Chiplet Interconnect Express (UCIe)",
      "description": "Standardized open protocol defining PHY, Die-to-Die adapter, and link layers.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t0_s0_m1",
      "label": "Bunch of Wires (BoW) Interface",
      "description": "Un-clocked parallel physical layer offering wide bus high-density interconnect.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t0_s0_m2",
      "label": "Advanced Interface Bus (AIB)",
      "description": "Intel parallel die-to-die interface standard for heterogeneous packages.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t0_s0_m3",
      "label": "Protocol Tunneling (PCIe / CXL / AXI)",
      "description": "Mapping standard system buses seamlessly across die-to-die PHYs.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t0_s1",
      "label": "Energy & Bandwidth Density Optimization",
      "description": "Metrics governing chiplet system efficiency.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t0_s1_m0",
      "label": "Energy per Bit (<0.5 pJ/bit)",
      "description": "Targeting ultra-low energy consumption compared to off-chip SerDes (>5 pJ/bit).",
      "type": "concept"
    },
    {
      "id": "chip_p7_t0_s1_m1",
      "label": "Linear & Area Bandwidth Density",
      "description": "Maximizing Terabits/sec per millimeter of die edge length.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t0_s1_m2",
      "label": "Latency Overhead (<2ns)",
      "description": "Minimizing die-to-die traversal latency to behave like monolithic silicon.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t0_s1_m3",
      "label": "Known Good Die (KGD) Testing Strategy",
      "description": "Exhaustive wafer-level testing ensuring zero bad dies enter multi-chiplet package.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t1",
      "label": "2.5D & 3D Packaging Technologies",
      "description": "High-density inter-chip physical integration.",
      "type": "topic"
    },
    {
      "id": "chip_p7_t1_s0",
      "label": "2.5D Silicon & Organic Interposers",
      "description": "Co-packaging dies side-by-side on high-density substrates.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t1_s0_m0",
      "label": "TSMC CoWoS (Chip-on-Wafer-on-Substrate)",
      "description": "Passive silicon interposer with sub-micron copper wires linking compute and HBM.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t1_s0_m1",
      "label": "Intel EMIB (Embedded Multi-Die Interconnect Bridge)",
      "description": "Localized silicon bridge die embedded inside organic substrate.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t1_s0_m2",
      "label": "Fan-Out Wafer-Level Packaging (FOWLP)",
      "description": "Reconfigured molded wafer extending interconnect pads beyond original die footprint.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t1_s0_m3",
      "label": "Glass Substrates for Packaging",
      "description": "Next-generation core substrates offering superior mechanical flatness and high-speed TGV.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t1_s1",
      "label": "3D Vertical Stacking & Hybrid Bonding",
      "description": "Direct vertical die-to-die stacking.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t1_s1_m0",
      "label": "Through-Silicon Vias (TSV)",
      "description": "Deep copper-filled vertical channels penetrating full silicon wafer thickness.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t1_s1_m1",
      "label": "Micro-Bumps (25um to 13um Pitch)",
      "description": "Solder ball micro-bumps connecting stacked dies vertically.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t1_s1_m2",
      "label": "Direct Bond Interconnect (Cu-Cu Hybrid Bonding)",
      "description": "Atomic-level direct copper-to-copper dielectric fusion (<1um bump pitch).",
      "type": "concept"
    },
    {
      "id": "chip_p7_t1_s1_m3",
      "label": "Thermal Stress & CTE Mismatch",
      "description": "Managing Coefficient of Thermal Expansion differences between stacked silicon dies.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t2",
      "label": "Thermal, Power & Backside Power Delivery",
      "description": "Solving 3D power distribution and thermal dissipation bottlenecks.",
      "type": "topic"
    },
    {
      "id": "chip_p7_t2_s0",
      "label": "Backside Power Delivery Network (BSPDN)",
      "description": "Routing power rails on wafer backside to eliminate frontside wire IR drop.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t2_s0_m0",
      "label": "Intel PowerVia & TSMC A16",
      "description": "Fabricating buried power rails connected directly to transistor source/drain.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t2_s0_m1",
      "label": "Nano-TSVs for Power",
      "description": "Ultra-dense vertical power vias feeding current directly from backside metal layers.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t2_s0_m2",
      "label": "Frontside Interconnect De-Congestion",
      "description": "Freeing 100% of frontside metal layers exclusively for signal routing.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t2_s0_m3",
      "label": "PDN Impedance Optimization",
      "description": "Drastically reducing power supply noise and dynamic IR drop voltage dip.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t2_s1",
      "label": "3D Thermal Management",
      "description": "Dissipating extreme power densities in stacked 3D silicon.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t2_s1_m0",
      "label": "Thermal Hotspot Modeling (>100 W/cm^2)",
      "description": "Simulating localized heat flux accumulation in multi-layer die stacks.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t2_s1_m1",
      "label": "Vapor Chamber & Liquid Metal TIM",
      "description": "High-conductivity thermal interface materials spreading heat to heatsink.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t2_s1_m2",
      "label": "Microchannel Liquid Cooling",
      "description": "Etching microfluidic liquid channels directly into silicon chiplet backsides.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t2_s1_m3",
      "label": "Thermal Throttling & On-Die Sensors",
      "description": "Integrated thermal diodes triggering dynamic frequency scaling (DVFS).",
      "type": "concept"
    },
    {
      "id": "chip_p7_t3",
      "label": "High-Bandwidth Memory (HBM3e / HBM4)",
      "description": "Vertical 3D DRAM stacking for high-throughput memory channels.",
      "type": "topic"
    },
    {
      "id": "chip_p7_t3_s0",
      "label": "HBM Architecture & Vertical Stack",
      "description": "3D DRAM stack architecture.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t3_s0_m0",
      "label": "12-High & 16-High DRAM Stacks",
      "description": "Vertical stacking of DRAM dies interconnected via thousands of TSVs.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t3_s0_m1",
      "label": "1024-Bit Wide Memory Bus",
      "description": "Ultra-wide parallel interface delivering >1.2 Terabytes/sec per HBM stack.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t3_s0_m2",
      "label": "HBM Base Logic Die",
      "description": "Bottom buffer die managing DRAM refresh, testability, and physical host interface.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t3_s0_m3",
      "label": "Pseudo-Channel Sub-Division",
      "description": "Dividing 1024-bit interface into independent channels to boost random access IOPS.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t3_s1",
      "label": "Next-Generation HBM4 Direct Integration",
      "description": "Transitioning from interposers to direct 3D logic bonding.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t3_s1_m0",
      "label": "2048-Bit HBM4 Interface Width",
      "description": "Doubling interface width to 2048 bits running at lower energy per bit.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t3_s1_m1",
      "label": "Direct Hybrid Bonding onto Host Logic",
      "description": "Eliminating base die in HBM4 by bonding DRAM stack directly onto main host CPU/GPU.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t3_s1_m2",
      "label": "On-Die ECC & Error Scrubbing",
      "description": "Advanced internal error correction logic protecting dense 3D DRAM against soft errors.",
      "type": "concept"
    },
    {
      "id": "chip_p7_t3_s1_m3",
      "label": "Thermal Dissipation in 16-Die HBM Stacks",
      "description": "Inserting structural dummy TSVs to enhance vertical thermal conductivity.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "id": "e_chip_root_chip_p1",
      "source": "chip_root",
      "target": "chip_p1"
    },
    {
      "id": "e_chip_p1_chip_p1_t0",
      "source": "chip_p1",
      "target": "chip_p1_t0"
    },
    {
      "id": "e_chip_p1_t0_chip_p1_t0_s0",
      "source": "chip_p1_t0",
      "target": "chip_p1_t0_s0"
    },
    {
      "id": "e_chip_p1_t0_s0_chip_p1_t0_s0_m0",
      "source": "chip_p1_t0_s0",
      "target": "chip_p1_t0_s0_m0"
    },
    {
      "id": "e_chip_p1_t0_s0_chip_p1_t0_s0_m1",
      "source": "chip_p1_t0_s0",
      "target": "chip_p1_t0_s0_m1"
    },
    {
      "id": "e_chip_p1_t0_s0_chip_p1_t0_s0_m2",
      "source": "chip_p1_t0_s0",
      "target": "chip_p1_t0_s0_m2"
    },
    {
      "id": "e_chip_p1_t0_s0_chip_p1_t0_s0_m3",
      "source": "chip_p1_t0_s0",
      "target": "chip_p1_t0_s0_m3"
    },
    {
      "id": "e_chip_p1_t0_chip_p1_t0_s1",
      "source": "chip_p1_t0",
      "target": "chip_p1_t0_s1"
    },
    {
      "id": "e_chip_p1_t0_s1_chip_p1_t0_s1_m0",
      "source": "chip_p1_t0_s1",
      "target": "chip_p1_t0_s1_m0"
    },
    {
      "id": "e_chip_p1_t0_s1_chip_p1_t0_s1_m1",
      "source": "chip_p1_t0_s1",
      "target": "chip_p1_t0_s1_m1"
    },
    {
      "id": "e_chip_p1_t0_s1_chip_p1_t0_s1_m2",
      "source": "chip_p1_t0_s1",
      "target": "chip_p1_t0_s1_m2"
    },
    {
      "id": "e_chip_p1_t0_s1_chip_p1_t0_s1_m3",
      "source": "chip_p1_t0_s1",
      "target": "chip_p1_t0_s1_m3"
    },
    {
      "id": "e_chip_p1_t0_chip_p1_t0_s2",
      "source": "chip_p1_t0",
      "target": "chip_p1_t0_s2"
    },
    {
      "id": "e_chip_p1_t0_s2_chip_p1_t0_s2_m0",
      "source": "chip_p1_t0_s2",
      "target": "chip_p1_t0_s2_m0"
    },
    {
      "id": "e_chip_p1_t0_s2_chip_p1_t0_s2_m1",
      "source": "chip_p1_t0_s2",
      "target": "chip_p1_t0_s2_m1"
    },
    {
      "id": "e_chip_p1_t0_s2_chip_p1_t0_s2_m2",
      "source": "chip_p1_t0_s2",
      "target": "chip_p1_t0_s2_m2"
    },
    {
      "id": "e_chip_p1_t0_s2_chip_p1_t0_s2_m3",
      "source": "chip_p1_t0_s2",
      "target": "chip_p1_t0_s2_m3"
    },
    {
      "id": "e_chip_p1_t0_chip_p1_t0_s3",
      "source": "chip_p1_t0",
      "target": "chip_p1_t0_s3"
    },
    {
      "id": "e_chip_p1_t0_s3_chip_p1_t0_s3_m0",
      "source": "chip_p1_t0_s3",
      "target": "chip_p1_t0_s3_m0"
    },
    {
      "id": "e_chip_p1_t0_s3_chip_p1_t0_s3_m1",
      "source": "chip_p1_t0_s3",
      "target": "chip_p1_t0_s3_m1"
    },
    {
      "id": "e_chip_p1_t0_s3_chip_p1_t0_s3_m2",
      "source": "chip_p1_t0_s3",
      "target": "chip_p1_t0_s3_m2"
    },
    {
      "id": "e_chip_p1_t0_s3_chip_p1_t0_s3_m3",
      "source": "chip_p1_t0_s3",
      "target": "chip_p1_t0_s3_m3"
    },
    {
      "id": "e_chip_p1_chip_p1_t1",
      "source": "chip_p1",
      "target": "chip_p1_t1"
    },
    {
      "id": "e_chip_p1_t1_chip_p1_t1_s0",
      "source": "chip_p1_t1",
      "target": "chip_p1_t1_s0"
    },
    {
      "id": "e_chip_p1_t1_s0_chip_p1_t1_s0_m0",
      "source": "chip_p1_t1_s0",
      "target": "chip_p1_t1_s0_m0"
    },
    {
      "id": "e_chip_p1_t1_s0_chip_p1_t1_s0_m1",
      "source": "chip_p1_t1_s0",
      "target": "chip_p1_t1_s0_m1"
    },
    {
      "id": "e_chip_p1_t1_s0_chip_p1_t1_s0_m2",
      "source": "chip_p1_t1_s0",
      "target": "chip_p1_t1_s0_m2"
    },
    {
      "id": "e_chip_p1_t1_s0_chip_p1_t1_s0_m3",
      "source": "chip_p1_t1_s0",
      "target": "chip_p1_t1_s0_m3"
    },
    {
      "id": "e_chip_p1_t1_chip_p1_t1_s1",
      "source": "chip_p1_t1",
      "target": "chip_p1_t1_s1"
    },
    {
      "id": "e_chip_p1_t1_s1_chip_p1_t1_s1_m0",
      "source": "chip_p1_t1_s1",
      "target": "chip_p1_t1_s1_m0"
    },
    {
      "id": "e_chip_p1_t1_s1_chip_p1_t1_s1_m1",
      "source": "chip_p1_t1_s1",
      "target": "chip_p1_t1_s1_m1"
    },
    {
      "id": "e_chip_p1_t1_s1_chip_p1_t1_s1_m2",
      "source": "chip_p1_t1_s1",
      "target": "chip_p1_t1_s1_m2"
    },
    {
      "id": "e_chip_p1_t1_s1_chip_p1_t1_s1_m3",
      "source": "chip_p1_t1_s1",
      "target": "chip_p1_t1_s1_m3"
    },
    {
      "id": "e_chip_p1_t1_chip_p1_t1_s2",
      "source": "chip_p1_t1",
      "target": "chip_p1_t1_s2"
    },
    {
      "id": "e_chip_p1_t1_s2_chip_p1_t1_s2_m0",
      "source": "chip_p1_t1_s2",
      "target": "chip_p1_t1_s2_m0"
    },
    {
      "id": "e_chip_p1_t1_s2_chip_p1_t1_s2_m1",
      "source": "chip_p1_t1_s2",
      "target": "chip_p1_t1_s2_m1"
    },
    {
      "id": "e_chip_p1_t1_s2_chip_p1_t1_s2_m2",
      "source": "chip_p1_t1_s2",
      "target": "chip_p1_t1_s2_m2"
    },
    {
      "id": "e_chip_p1_t1_s2_chip_p1_t1_s2_m3",
      "source": "chip_p1_t1_s2",
      "target": "chip_p1_t1_s2_m3"
    },
    {
      "id": "e_chip_p1_chip_p1_t2",
      "source": "chip_p1",
      "target": "chip_p1_t2"
    },
    {
      "id": "e_chip_p1_t2_chip_p1_t2_s0",
      "source": "chip_p1_t2",
      "target": "chip_p1_t2_s0"
    },
    {
      "id": "e_chip_p1_t2_s0_chip_p1_t2_s0_m0",
      "source": "chip_p1_t2_s0",
      "target": "chip_p1_t2_s0_m0"
    },
    {
      "id": "e_chip_p1_t2_s0_chip_p1_t2_s0_m1",
      "source": "chip_p1_t2_s0",
      "target": "chip_p1_t2_s0_m1"
    },
    {
      "id": "e_chip_p1_t2_s0_chip_p1_t2_s0_m2",
      "source": "chip_p1_t2_s0",
      "target": "chip_p1_t2_s0_m2"
    },
    {
      "id": "e_chip_p1_t2_s0_chip_p1_t2_s0_m3",
      "source": "chip_p1_t2_s0",
      "target": "chip_p1_t2_s0_m3"
    },
    {
      "id": "e_chip_p1_t2_chip_p1_t2_s1",
      "source": "chip_p1_t2",
      "target": "chip_p1_t2_s1"
    },
    {
      "id": "e_chip_p1_t2_s1_chip_p1_t2_s1_m0",
      "source": "chip_p1_t2_s1",
      "target": "chip_p1_t2_s1_m0"
    },
    {
      "id": "e_chip_p1_t2_s1_chip_p1_t2_s1_m1",
      "source": "chip_p1_t2_s1",
      "target": "chip_p1_t2_s1_m1"
    },
    {
      "id": "e_chip_p1_t2_s1_chip_p1_t2_s1_m2",
      "source": "chip_p1_t2_s1",
      "target": "chip_p1_t2_s1_m2"
    },
    {
      "id": "e_chip_p1_t2_s1_chip_p1_t2_s1_m3",
      "source": "chip_p1_t2_s1",
      "target": "chip_p1_t2_s1_m3"
    },
    {
      "id": "e_chip_p1_t2_chip_p1_t2_s2",
      "source": "chip_p1_t2",
      "target": "chip_p1_t2_s2"
    },
    {
      "id": "e_chip_p1_t2_s2_chip_p1_t2_s2_m0",
      "source": "chip_p1_t2_s2",
      "target": "chip_p1_t2_s2_m0"
    },
    {
      "id": "e_chip_p1_t2_s2_chip_p1_t2_s2_m1",
      "source": "chip_p1_t2_s2",
      "target": "chip_p1_t2_s2_m1"
    },
    {
      "id": "e_chip_p1_t2_s2_chip_p1_t2_s2_m2",
      "source": "chip_p1_t2_s2",
      "target": "chip_p1_t2_s2_m2"
    },
    {
      "id": "e_chip_p1_t2_s2_chip_p1_t2_s2_m3",
      "source": "chip_p1_t2_s2",
      "target": "chip_p1_t2_s2_m3"
    },
    {
      "id": "e_chip_p1_chip_p1_t3",
      "source": "chip_p1",
      "target": "chip_p1_t3"
    },
    {
      "id": "e_chip_p1_t3_chip_p1_t3_s0",
      "source": "chip_p1_t3",
      "target": "chip_p1_t3_s0"
    },
    {
      "id": "e_chip_p1_t3_s0_chip_p1_t3_s0_m0",
      "source": "chip_p1_t3_s0",
      "target": "chip_p1_t3_s0_m0"
    },
    {
      "id": "e_chip_p1_t3_s0_chip_p1_t3_s0_m1",
      "source": "chip_p1_t3_s0",
      "target": "chip_p1_t3_s0_m1"
    },
    {
      "id": "e_chip_p1_t3_s0_chip_p1_t3_s0_m2",
      "source": "chip_p1_t3_s0",
      "target": "chip_p1_t3_s0_m2"
    },
    {
      "id": "e_chip_p1_t3_s0_chip_p1_t3_s0_m3",
      "source": "chip_p1_t3_s0",
      "target": "chip_p1_t3_s0_m3"
    },
    {
      "id": "e_chip_p1_t3_chip_p1_t3_s1",
      "source": "chip_p1_t3",
      "target": "chip_p1_t3_s1"
    },
    {
      "id": "e_chip_p1_t3_s1_chip_p1_t3_s1_m0",
      "source": "chip_p1_t3_s1",
      "target": "chip_p1_t3_s1_m0"
    },
    {
      "id": "e_chip_p1_t3_s1_chip_p1_t3_s1_m1",
      "source": "chip_p1_t3_s1",
      "target": "chip_p1_t3_s1_m1"
    },
    {
      "id": "e_chip_p1_t3_s1_chip_p1_t3_s1_m2",
      "source": "chip_p1_t3_s1",
      "target": "chip_p1_t3_s1_m2"
    },
    {
      "id": "e_chip_p1_t3_s1_chip_p1_t3_s1_m3",
      "source": "chip_p1_t3_s1",
      "target": "chip_p1_t3_s1_m3"
    },
    {
      "id": "e_chip_p1_t3_chip_p1_t3_s2",
      "source": "chip_p1_t3",
      "target": "chip_p1_t3_s2"
    },
    {
      "id": "e_chip_p1_t3_s2_chip_p1_t3_s2_m0",
      "source": "chip_p1_t3_s2",
      "target": "chip_p1_t3_s2_m0"
    },
    {
      "id": "e_chip_p1_t3_s2_chip_p1_t3_s2_m1",
      "source": "chip_p1_t3_s2",
      "target": "chip_p1_t3_s2_m1"
    },
    {
      "id": "e_chip_p1_t3_s2_chip_p1_t3_s2_m2",
      "source": "chip_p1_t3_s2",
      "target": "chip_p1_t3_s2_m2"
    },
    {
      "id": "e_chip_p1_t3_s2_chip_p1_t3_s2_m3",
      "source": "chip_p1_t3_s2",
      "target": "chip_p1_t3_s2_m3"
    },
    {
      "id": "e_chip_root_chip_p2",
      "source": "chip_root",
      "target": "chip_p2"
    },
    {
      "id": "e_chip_p2_chip_p2_t0",
      "source": "chip_p2",
      "target": "chip_p2_t0"
    },
    {
      "id": "e_chip_p2_t0_chip_p2_t0_s0",
      "source": "chip_p2_t0",
      "target": "chip_p2_t0_s0"
    },
    {
      "id": "e_chip_p2_t0_s0_chip_p2_t0_s0_m0",
      "source": "chip_p2_t0_s0",
      "target": "chip_p2_t0_s0_m0"
    },
    {
      "id": "e_chip_p2_t0_s0_chip_p2_t0_s0_m1",
      "source": "chip_p2_t0_s0",
      "target": "chip_p2_t0_s0_m1"
    },
    {
      "id": "e_chip_p2_t0_s0_chip_p2_t0_s0_m2",
      "source": "chip_p2_t0_s0",
      "target": "chip_p2_t0_s0_m2"
    },
    {
      "id": "e_chip_p2_t0_s0_chip_p2_t0_s0_m3",
      "source": "chip_p2_t0_s0",
      "target": "chip_p2_t0_s0_m3"
    },
    {
      "id": "e_chip_p2_t0_chip_p2_t0_s1",
      "source": "chip_p2_t0",
      "target": "chip_p2_t0_s1"
    },
    {
      "id": "e_chip_p2_t0_s1_chip_p2_t0_s1_m0",
      "source": "chip_p2_t0_s1",
      "target": "chip_p2_t0_s1_m0"
    },
    {
      "id": "e_chip_p2_t0_s1_chip_p2_t0_s1_m1",
      "source": "chip_p2_t0_s1",
      "target": "chip_p2_t0_s1_m1"
    },
    {
      "id": "e_chip_p2_t0_s1_chip_p2_t0_s1_m2",
      "source": "chip_p2_t0_s1",
      "target": "chip_p2_t0_s1_m2"
    },
    {
      "id": "e_chip_p2_t0_s1_chip_p2_t0_s1_m3",
      "source": "chip_p2_t0_s1",
      "target": "chip_p2_t0_s1_m3"
    },
    {
      "id": "e_chip_p2_t0_chip_p2_t0_s2",
      "source": "chip_p2_t0",
      "target": "chip_p2_t0_s2"
    },
    {
      "id": "e_chip_p2_t0_s2_chip_p2_t0_s2_m0",
      "source": "chip_p2_t0_s2",
      "target": "chip_p2_t0_s2_m0"
    },
    {
      "id": "e_chip_p2_t0_s2_chip_p2_t0_s2_m1",
      "source": "chip_p2_t0_s2",
      "target": "chip_p2_t0_s2_m1"
    },
    {
      "id": "e_chip_p2_t0_s2_chip_p2_t0_s2_m2",
      "source": "chip_p2_t0_s2",
      "target": "chip_p2_t0_s2_m2"
    },
    {
      "id": "e_chip_p2_t0_s2_chip_p2_t0_s2_m3",
      "source": "chip_p2_t0_s2",
      "target": "chip_p2_t0_s2_m3"
    },
    {
      "id": "e_chip_p2_chip_p2_t1",
      "source": "chip_p2",
      "target": "chip_p2_t1"
    },
    {
      "id": "e_chip_p2_t1_chip_p2_t1_s0",
      "source": "chip_p2_t1",
      "target": "chip_p2_t1_s0"
    },
    {
      "id": "e_chip_p2_t1_s0_chip_p2_t1_s0_m0",
      "source": "chip_p2_t1_s0",
      "target": "chip_p2_t1_s0_m0"
    },
    {
      "id": "e_chip_p2_t1_s0_chip_p2_t1_s0_m1",
      "source": "chip_p2_t1_s0",
      "target": "chip_p2_t1_s0_m1"
    },
    {
      "id": "e_chip_p2_t1_s0_chip_p2_t1_s0_m2",
      "source": "chip_p2_t1_s0",
      "target": "chip_p2_t1_s0_m2"
    },
    {
      "id": "e_chip_p2_t1_s0_chip_p2_t1_s0_m3",
      "source": "chip_p2_t1_s0",
      "target": "chip_p2_t1_s0_m3"
    },
    {
      "id": "e_chip_p2_t1_chip_p2_t1_s1",
      "source": "chip_p2_t1",
      "target": "chip_p2_t1_s1"
    },
    {
      "id": "e_chip_p2_t1_s1_chip_p2_t1_s1_m0",
      "source": "chip_p2_t1_s1",
      "target": "chip_p2_t1_s1_m0"
    },
    {
      "id": "e_chip_p2_t1_s1_chip_p2_t1_s1_m1",
      "source": "chip_p2_t1_s1",
      "target": "chip_p2_t1_s1_m1"
    },
    {
      "id": "e_chip_p2_t1_s1_chip_p2_t1_s1_m2",
      "source": "chip_p2_t1_s1",
      "target": "chip_p2_t1_s1_m2"
    },
    {
      "id": "e_chip_p2_t1_s1_chip_p2_t1_s1_m3",
      "source": "chip_p2_t1_s1",
      "target": "chip_p2_t1_s1_m3"
    },
    {
      "id": "e_chip_p2_t1_chip_p2_t1_s2",
      "source": "chip_p2_t1",
      "target": "chip_p2_t1_s2"
    },
    {
      "id": "e_chip_p2_t1_s2_chip_p2_t1_s2_m0",
      "source": "chip_p2_t1_s2",
      "target": "chip_p2_t1_s2_m0"
    },
    {
      "id": "e_chip_p2_t1_s2_chip_p2_t1_s2_m1",
      "source": "chip_p2_t1_s2",
      "target": "chip_p2_t1_s2_m1"
    },
    {
      "id": "e_chip_p2_t1_s2_chip_p2_t1_s2_m2",
      "source": "chip_p2_t1_s2",
      "target": "chip_p2_t1_s2_m2"
    },
    {
      "id": "e_chip_p2_t1_s2_chip_p2_t1_s2_m3",
      "source": "chip_p2_t1_s2",
      "target": "chip_p2_t1_s2_m3"
    },
    {
      "id": "e_chip_p2_chip_p2_t2",
      "source": "chip_p2",
      "target": "chip_p2_t2"
    },
    {
      "id": "e_chip_p2_t2_chip_p2_t2_s0",
      "source": "chip_p2_t2",
      "target": "chip_p2_t2_s0"
    },
    {
      "id": "e_chip_p2_t2_s0_chip_p2_t2_s0_m0",
      "source": "chip_p2_t2_s0",
      "target": "chip_p2_t2_s0_m0"
    },
    {
      "id": "e_chip_p2_t2_s0_chip_p2_t2_s0_m1",
      "source": "chip_p2_t2_s0",
      "target": "chip_p2_t2_s0_m1"
    },
    {
      "id": "e_chip_p2_t2_s0_chip_p2_t2_s0_m2",
      "source": "chip_p2_t2_s0",
      "target": "chip_p2_t2_s0_m2"
    },
    {
      "id": "e_chip_p2_t2_s0_chip_p2_t2_s0_m3",
      "source": "chip_p2_t2_s0",
      "target": "chip_p2_t2_s0_m3"
    },
    {
      "id": "e_chip_p2_t2_chip_p2_t2_s1",
      "source": "chip_p2_t2",
      "target": "chip_p2_t2_s1"
    },
    {
      "id": "e_chip_p2_t2_s1_chip_p2_t2_s1_m0",
      "source": "chip_p2_t2_s1",
      "target": "chip_p2_t2_s1_m0"
    },
    {
      "id": "e_chip_p2_t2_s1_chip_p2_t2_s1_m1",
      "source": "chip_p2_t2_s1",
      "target": "chip_p2_t2_s1_m1"
    },
    {
      "id": "e_chip_p2_t2_s1_chip_p2_t2_s1_m2",
      "source": "chip_p2_t2_s1",
      "target": "chip_p2_t2_s1_m2"
    },
    {
      "id": "e_chip_p2_t2_s1_chip_p2_t2_s1_m3",
      "source": "chip_p2_t2_s1",
      "target": "chip_p2_t2_s1_m3"
    },
    {
      "id": "e_chip_p2_t2_chip_p2_t2_s2",
      "source": "chip_p2_t2",
      "target": "chip_p2_t2_s2"
    },
    {
      "id": "e_chip_p2_t2_s2_chip_p2_t2_s2_m0",
      "source": "chip_p2_t2_s2",
      "target": "chip_p2_t2_s2_m0"
    },
    {
      "id": "e_chip_p2_t2_s2_chip_p2_t2_s2_m1",
      "source": "chip_p2_t2_s2",
      "target": "chip_p2_t2_s2_m1"
    },
    {
      "id": "e_chip_p2_t2_s2_chip_p2_t2_s2_m2",
      "source": "chip_p2_t2_s2",
      "target": "chip_p2_t2_s2_m2"
    },
    {
      "id": "e_chip_p2_t2_s2_chip_p2_t2_s2_m3",
      "source": "chip_p2_t2_s2",
      "target": "chip_p2_t2_s2_m3"
    },
    {
      "id": "e_chip_p2_chip_p2_t3",
      "source": "chip_p2",
      "target": "chip_p2_t3"
    },
    {
      "id": "e_chip_p2_t3_chip_p2_t3_s0",
      "source": "chip_p2_t3",
      "target": "chip_p2_t3_s0"
    },
    {
      "id": "e_chip_p2_t3_s0_chip_p2_t3_s0_m0",
      "source": "chip_p2_t3_s0",
      "target": "chip_p2_t3_s0_m0"
    },
    {
      "id": "e_chip_p2_t3_s0_chip_p2_t3_s0_m1",
      "source": "chip_p2_t3_s0",
      "target": "chip_p2_t3_s0_m1"
    },
    {
      "id": "e_chip_p2_t3_s0_chip_p2_t3_s0_m2",
      "source": "chip_p2_t3_s0",
      "target": "chip_p2_t3_s0_m2"
    },
    {
      "id": "e_chip_p2_t3_s0_chip_p2_t3_s0_m3",
      "source": "chip_p2_t3_s0",
      "target": "chip_p2_t3_s0_m3"
    },
    {
      "id": "e_chip_p2_t3_chip_p2_t3_s1",
      "source": "chip_p2_t3",
      "target": "chip_p2_t3_s1"
    },
    {
      "id": "e_chip_p2_t3_s1_chip_p2_t3_s1_m0",
      "source": "chip_p2_t3_s1",
      "target": "chip_p2_t3_s1_m0"
    },
    {
      "id": "e_chip_p2_t3_s1_chip_p2_t3_s1_m1",
      "source": "chip_p2_t3_s1",
      "target": "chip_p2_t3_s1_m1"
    },
    {
      "id": "e_chip_p2_t3_s1_chip_p2_t3_s1_m2",
      "source": "chip_p2_t3_s1",
      "target": "chip_p2_t3_s1_m2"
    },
    {
      "id": "e_chip_p2_t3_s1_chip_p2_t3_s1_m3",
      "source": "chip_p2_t3_s1",
      "target": "chip_p2_t3_s1_m3"
    },
    {
      "id": "e_chip_root_chip_p3",
      "source": "chip_root",
      "target": "chip_p3"
    },
    {
      "id": "e_chip_p3_chip_p3_t0",
      "source": "chip_p3",
      "target": "chip_p3_t0"
    },
    {
      "id": "e_chip_p3_t0_chip_p3_t0_s0",
      "source": "chip_p3_t0",
      "target": "chip_p3_t0_s0"
    },
    {
      "id": "e_chip_p3_t0_s0_chip_p3_t0_s0_m0",
      "source": "chip_p3_t0_s0",
      "target": "chip_p3_t0_s0_m0"
    },
    {
      "id": "e_chip_p3_t0_s0_chip_p3_t0_s0_m1",
      "source": "chip_p3_t0_s0",
      "target": "chip_p3_t0_s0_m1"
    },
    {
      "id": "e_chip_p3_t0_s0_chip_p3_t0_s0_m2",
      "source": "chip_p3_t0_s0",
      "target": "chip_p3_t0_s0_m2"
    },
    {
      "id": "e_chip_p3_t0_s0_chip_p3_t0_s0_m3",
      "source": "chip_p3_t0_s0",
      "target": "chip_p3_t0_s0_m3"
    },
    {
      "id": "e_chip_p3_t0_chip_p3_t0_s1",
      "source": "chip_p3_t0",
      "target": "chip_p3_t0_s1"
    },
    {
      "id": "e_chip_p3_t0_s1_chip_p3_t0_s1_m0",
      "source": "chip_p3_t0_s1",
      "target": "chip_p3_t0_s1_m0"
    },
    {
      "id": "e_chip_p3_t0_s1_chip_p3_t0_s1_m1",
      "source": "chip_p3_t0_s1",
      "target": "chip_p3_t0_s1_m1"
    },
    {
      "id": "e_chip_p3_t0_s1_chip_p3_t0_s1_m2",
      "source": "chip_p3_t0_s1",
      "target": "chip_p3_t0_s1_m2"
    },
    {
      "id": "e_chip_p3_t0_s1_chip_p3_t0_s1_m3",
      "source": "chip_p3_t0_s1",
      "target": "chip_p3_t0_s1_m3"
    },
    {
      "id": "e_chip_p3_t0_chip_p3_t0_s2",
      "source": "chip_p3_t0",
      "target": "chip_p3_t0_s2"
    },
    {
      "id": "e_chip_p3_t0_s2_chip_p3_t0_s2_m0",
      "source": "chip_p3_t0_s2",
      "target": "chip_p3_t0_s2_m0"
    },
    {
      "id": "e_chip_p3_t0_s2_chip_p3_t0_s2_m1",
      "source": "chip_p3_t0_s2",
      "target": "chip_p3_t0_s2_m1"
    },
    {
      "id": "e_chip_p3_t0_s2_chip_p3_t0_s2_m2",
      "source": "chip_p3_t0_s2",
      "target": "chip_p3_t0_s2_m2"
    },
    {
      "id": "e_chip_p3_t0_s2_chip_p3_t0_s2_m3",
      "source": "chip_p3_t0_s2",
      "target": "chip_p3_t0_s2_m3"
    },
    {
      "id": "e_chip_p3_chip_p3_t1",
      "source": "chip_p3",
      "target": "chip_p3_t1"
    },
    {
      "id": "e_chip_p3_t1_chip_p3_t1_s0",
      "source": "chip_p3_t1",
      "target": "chip_p3_t1_s0"
    },
    {
      "id": "e_chip_p3_t1_s0_chip_p3_t1_s0_m0",
      "source": "chip_p3_t1_s0",
      "target": "chip_p3_t1_s0_m0"
    },
    {
      "id": "e_chip_p3_t1_s0_chip_p3_t1_s0_m1",
      "source": "chip_p3_t1_s0",
      "target": "chip_p3_t1_s0_m1"
    },
    {
      "id": "e_chip_p3_t1_s0_chip_p3_t1_s0_m2",
      "source": "chip_p3_t1_s0",
      "target": "chip_p3_t1_s0_m2"
    },
    {
      "id": "e_chip_p3_t1_s0_chip_p3_t1_s0_m3",
      "source": "chip_p3_t1_s0",
      "target": "chip_p3_t1_s0_m3"
    },
    {
      "id": "e_chip_p3_t1_chip_p3_t1_s1",
      "source": "chip_p3_t1",
      "target": "chip_p3_t1_s1"
    },
    {
      "id": "e_chip_p3_t1_s1_chip_p3_t1_s1_m0",
      "source": "chip_p3_t1_s1",
      "target": "chip_p3_t1_s1_m0"
    },
    {
      "id": "e_chip_p3_t1_s1_chip_p3_t1_s1_m1",
      "source": "chip_p3_t1_s1",
      "target": "chip_p3_t1_s1_m1"
    },
    {
      "id": "e_chip_p3_t1_s1_chip_p3_t1_s1_m2",
      "source": "chip_p3_t1_s1",
      "target": "chip_p3_t1_s1_m2"
    },
    {
      "id": "e_chip_p3_t1_s1_chip_p3_t1_s1_m3",
      "source": "chip_p3_t1_s1",
      "target": "chip_p3_t1_s1_m3"
    },
    {
      "id": "e_chip_p3_t1_chip_p3_t1_s2",
      "source": "chip_p3_t1",
      "target": "chip_p3_t1_s2"
    },
    {
      "id": "e_chip_p3_t1_s2_chip_p3_t1_s2_m0",
      "source": "chip_p3_t1_s2",
      "target": "chip_p3_t1_s2_m0"
    },
    {
      "id": "e_chip_p3_t1_s2_chip_p3_t1_s2_m1",
      "source": "chip_p3_t1_s2",
      "target": "chip_p3_t1_s2_m1"
    },
    {
      "id": "e_chip_p3_t1_s2_chip_p3_t1_s2_m2",
      "source": "chip_p3_t1_s2",
      "target": "chip_p3_t1_s2_m2"
    },
    {
      "id": "e_chip_p3_t1_s2_chip_p3_t1_s2_m3",
      "source": "chip_p3_t1_s2",
      "target": "chip_p3_t1_s2_m3"
    },
    {
      "id": "e_chip_p3_chip_p3_t2",
      "source": "chip_p3",
      "target": "chip_p3_t2"
    },
    {
      "id": "e_chip_p3_t2_chip_p3_t2_s0",
      "source": "chip_p3_t2",
      "target": "chip_p3_t2_s0"
    },
    {
      "id": "e_chip_p3_t2_s0_chip_p3_t2_s0_m0",
      "source": "chip_p3_t2_s0",
      "target": "chip_p3_t2_s0_m0"
    },
    {
      "id": "e_chip_p3_t2_s0_chip_p3_t2_s0_m1",
      "source": "chip_p3_t2_s0",
      "target": "chip_p3_t2_s0_m1"
    },
    {
      "id": "e_chip_p3_t2_s0_chip_p3_t2_s0_m2",
      "source": "chip_p3_t2_s0",
      "target": "chip_p3_t2_s0_m2"
    },
    {
      "id": "e_chip_p3_t2_s0_chip_p3_t2_s0_m3",
      "source": "chip_p3_t2_s0",
      "target": "chip_p3_t2_s0_m3"
    },
    {
      "id": "e_chip_p3_t2_chip_p3_t2_s1",
      "source": "chip_p3_t2",
      "target": "chip_p3_t2_s1"
    },
    {
      "id": "e_chip_p3_t2_s1_chip_p3_t2_s1_m0",
      "source": "chip_p3_t2_s1",
      "target": "chip_p3_t2_s1_m0"
    },
    {
      "id": "e_chip_p3_t2_s1_chip_p3_t2_s1_m1",
      "source": "chip_p3_t2_s1",
      "target": "chip_p3_t2_s1_m1"
    },
    {
      "id": "e_chip_p3_t2_s1_chip_p3_t2_s1_m2",
      "source": "chip_p3_t2_s1",
      "target": "chip_p3_t2_s1_m2"
    },
    {
      "id": "e_chip_p3_t2_s1_chip_p3_t2_s1_m3",
      "source": "chip_p3_t2_s1",
      "target": "chip_p3_t2_s1_m3"
    },
    {
      "id": "e_chip_p3_t2_chip_p3_t2_s2",
      "source": "chip_p3_t2",
      "target": "chip_p3_t2_s2"
    },
    {
      "id": "e_chip_p3_t2_s2_chip_p3_t2_s2_m0",
      "source": "chip_p3_t2_s2",
      "target": "chip_p3_t2_s2_m0"
    },
    {
      "id": "e_chip_p3_t2_s2_chip_p3_t2_s2_m1",
      "source": "chip_p3_t2_s2",
      "target": "chip_p3_t2_s2_m1"
    },
    {
      "id": "e_chip_p3_t2_s2_chip_p3_t2_s2_m2",
      "source": "chip_p3_t2_s2",
      "target": "chip_p3_t2_s2_m2"
    },
    {
      "id": "e_chip_p3_t2_s2_chip_p3_t2_s2_m3",
      "source": "chip_p3_t2_s2",
      "target": "chip_p3_t2_s2_m3"
    },
    {
      "id": "e_chip_p3_chip_p3_t3",
      "source": "chip_p3",
      "target": "chip_p3_t3"
    },
    {
      "id": "e_chip_p3_t3_chip_p3_t3_s0",
      "source": "chip_p3_t3",
      "target": "chip_p3_t3_s0"
    },
    {
      "id": "e_chip_p3_t3_s0_chip_p3_t3_s0_m0",
      "source": "chip_p3_t3_s0",
      "target": "chip_p3_t3_s0_m0"
    },
    {
      "id": "e_chip_p3_t3_s0_chip_p3_t3_s0_m1",
      "source": "chip_p3_t3_s0",
      "target": "chip_p3_t3_s0_m1"
    },
    {
      "id": "e_chip_p3_t3_s0_chip_p3_t3_s0_m2",
      "source": "chip_p3_t3_s0",
      "target": "chip_p3_t3_s0_m2"
    },
    {
      "id": "e_chip_p3_t3_s0_chip_p3_t3_s0_m3",
      "source": "chip_p3_t3_s0",
      "target": "chip_p3_t3_s0_m3"
    },
    {
      "id": "e_chip_p3_t3_chip_p3_t3_s1",
      "source": "chip_p3_t3",
      "target": "chip_p3_t3_s1"
    },
    {
      "id": "e_chip_p3_t3_s1_chip_p3_t3_s1_m0",
      "source": "chip_p3_t3_s1",
      "target": "chip_p3_t3_s1_m0"
    },
    {
      "id": "e_chip_p3_t3_s1_chip_p3_t3_s1_m1",
      "source": "chip_p3_t3_s1",
      "target": "chip_p3_t3_s1_m1"
    },
    {
      "id": "e_chip_p3_t3_s1_chip_p3_t3_s1_m2",
      "source": "chip_p3_t3_s1",
      "target": "chip_p3_t3_s1_m2"
    },
    {
      "id": "e_chip_p3_t3_s1_chip_p3_t3_s1_m3",
      "source": "chip_p3_t3_s1",
      "target": "chip_p3_t3_s1_m3"
    },
    {
      "id": "e_chip_root_chip_p4",
      "source": "chip_root",
      "target": "chip_p4"
    },
    {
      "id": "e_chip_p4_chip_p4_t0",
      "source": "chip_p4",
      "target": "chip_p4_t0"
    },
    {
      "id": "e_chip_p4_t0_chip_p4_t0_s0",
      "source": "chip_p4_t0",
      "target": "chip_p4_t0_s0"
    },
    {
      "id": "e_chip_p4_t0_s0_chip_p4_t0_s0_m0",
      "source": "chip_p4_t0_s0",
      "target": "chip_p4_t0_s0_m0"
    },
    {
      "id": "e_chip_p4_t0_s0_chip_p4_t0_s0_m1",
      "source": "chip_p4_t0_s0",
      "target": "chip_p4_t0_s0_m1"
    },
    {
      "id": "e_chip_p4_t0_s0_chip_p4_t0_s0_m2",
      "source": "chip_p4_t0_s0",
      "target": "chip_p4_t0_s0_m2"
    },
    {
      "id": "e_chip_p4_t0_s0_chip_p4_t0_s0_m3",
      "source": "chip_p4_t0_s0",
      "target": "chip_p4_t0_s0_m3"
    },
    {
      "id": "e_chip_p4_t0_chip_p4_t0_s1",
      "source": "chip_p4_t0",
      "target": "chip_p4_t0_s1"
    },
    {
      "id": "e_chip_p4_t0_s1_chip_p4_t0_s1_m0",
      "source": "chip_p4_t0_s1",
      "target": "chip_p4_t0_s1_m0"
    },
    {
      "id": "e_chip_p4_t0_s1_chip_p4_t0_s1_m1",
      "source": "chip_p4_t0_s1",
      "target": "chip_p4_t0_s1_m1"
    },
    {
      "id": "e_chip_p4_t0_s1_chip_p4_t0_s1_m2",
      "source": "chip_p4_t0_s1",
      "target": "chip_p4_t0_s1_m2"
    },
    {
      "id": "e_chip_p4_t0_s1_chip_p4_t0_s1_m3",
      "source": "chip_p4_t0_s1",
      "target": "chip_p4_t0_s1_m3"
    },
    {
      "id": "e_chip_p4_t0_chip_p4_t0_s2",
      "source": "chip_p4_t0",
      "target": "chip_p4_t0_s2"
    },
    {
      "id": "e_chip_p4_t0_s2_chip_p4_t0_s2_m0",
      "source": "chip_p4_t0_s2",
      "target": "chip_p4_t0_s2_m0"
    },
    {
      "id": "e_chip_p4_t0_s2_chip_p4_t0_s2_m1",
      "source": "chip_p4_t0_s2",
      "target": "chip_p4_t0_s2_m1"
    },
    {
      "id": "e_chip_p4_t0_s2_chip_p4_t0_s2_m2",
      "source": "chip_p4_t0_s2",
      "target": "chip_p4_t0_s2_m2"
    },
    {
      "id": "e_chip_p4_t0_s2_chip_p4_t0_s2_m3",
      "source": "chip_p4_t0_s2",
      "target": "chip_p4_t0_s2_m3"
    },
    {
      "id": "e_chip_p4_chip_p4_t1",
      "source": "chip_p4",
      "target": "chip_p4_t1"
    },
    {
      "id": "e_chip_p4_t1_chip_p4_t1_s0",
      "source": "chip_p4_t1",
      "target": "chip_p4_t1_s0"
    },
    {
      "id": "e_chip_p4_t1_s0_chip_p4_t1_s0_m0",
      "source": "chip_p4_t1_s0",
      "target": "chip_p4_t1_s0_m0"
    },
    {
      "id": "e_chip_p4_t1_s0_chip_p4_t1_s0_m1",
      "source": "chip_p4_t1_s0",
      "target": "chip_p4_t1_s0_m1"
    },
    {
      "id": "e_chip_p4_t1_s0_chip_p4_t1_s0_m2",
      "source": "chip_p4_t1_s0",
      "target": "chip_p4_t1_s0_m2"
    },
    {
      "id": "e_chip_p4_t1_s0_chip_p4_t1_s0_m3",
      "source": "chip_p4_t1_s0",
      "target": "chip_p4_t1_s0_m3"
    },
    {
      "id": "e_chip_p4_t1_chip_p4_t1_s1",
      "source": "chip_p4_t1",
      "target": "chip_p4_t1_s1"
    },
    {
      "id": "e_chip_p4_t1_s1_chip_p4_t1_s1_m0",
      "source": "chip_p4_t1_s1",
      "target": "chip_p4_t1_s1_m0"
    },
    {
      "id": "e_chip_p4_t1_s1_chip_p4_t1_s1_m1",
      "source": "chip_p4_t1_s1",
      "target": "chip_p4_t1_s1_m1"
    },
    {
      "id": "e_chip_p4_t1_s1_chip_p4_t1_s1_m2",
      "source": "chip_p4_t1_s1",
      "target": "chip_p4_t1_s1_m2"
    },
    {
      "id": "e_chip_p4_t1_s1_chip_p4_t1_s1_m3",
      "source": "chip_p4_t1_s1",
      "target": "chip_p4_t1_s1_m3"
    },
    {
      "id": "e_chip_p4_t1_chip_p4_t1_s2",
      "source": "chip_p4_t1",
      "target": "chip_p4_t1_s2"
    },
    {
      "id": "e_chip_p4_t1_s2_chip_p4_t1_s2_m0",
      "source": "chip_p4_t1_s2",
      "target": "chip_p4_t1_s2_m0"
    },
    {
      "id": "e_chip_p4_t1_s2_chip_p4_t1_s2_m1",
      "source": "chip_p4_t1_s2",
      "target": "chip_p4_t1_s2_m1"
    },
    {
      "id": "e_chip_p4_t1_s2_chip_p4_t1_s2_m2",
      "source": "chip_p4_t1_s2",
      "target": "chip_p4_t1_s2_m2"
    },
    {
      "id": "e_chip_p4_t1_s2_chip_p4_t1_s2_m3",
      "source": "chip_p4_t1_s2",
      "target": "chip_p4_t1_s2_m3"
    },
    {
      "id": "e_chip_p4_chip_p4_t2",
      "source": "chip_p4",
      "target": "chip_p4_t2"
    },
    {
      "id": "e_chip_p4_t2_chip_p4_t2_s0",
      "source": "chip_p4_t2",
      "target": "chip_p4_t2_s0"
    },
    {
      "id": "e_chip_p4_t2_s0_chip_p4_t2_s0_m0",
      "source": "chip_p4_t2_s0",
      "target": "chip_p4_t2_s0_m0"
    },
    {
      "id": "e_chip_p4_t2_s0_chip_p4_t2_s0_m1",
      "source": "chip_p4_t2_s0",
      "target": "chip_p4_t2_s0_m1"
    },
    {
      "id": "e_chip_p4_t2_s0_chip_p4_t2_s0_m2",
      "source": "chip_p4_t2_s0",
      "target": "chip_p4_t2_s0_m2"
    },
    {
      "id": "e_chip_p4_t2_s0_chip_p4_t2_s0_m3",
      "source": "chip_p4_t2_s0",
      "target": "chip_p4_t2_s0_m3"
    },
    {
      "id": "e_chip_p4_t2_chip_p4_t2_s1",
      "source": "chip_p4_t2",
      "target": "chip_p4_t2_s1"
    },
    {
      "id": "e_chip_p4_t2_s1_chip_p4_t2_s1_m0",
      "source": "chip_p4_t2_s1",
      "target": "chip_p4_t2_s1_m0"
    },
    {
      "id": "e_chip_p4_t2_s1_chip_p4_t2_s1_m1",
      "source": "chip_p4_t2_s1",
      "target": "chip_p4_t2_s1_m1"
    },
    {
      "id": "e_chip_p4_t2_s1_chip_p4_t2_s1_m2",
      "source": "chip_p4_t2_s1",
      "target": "chip_p4_t2_s1_m2"
    },
    {
      "id": "e_chip_p4_t2_s1_chip_p4_t2_s1_m3",
      "source": "chip_p4_t2_s1",
      "target": "chip_p4_t2_s1_m3"
    },
    {
      "id": "e_chip_p4_chip_p4_t3",
      "source": "chip_p4",
      "target": "chip_p4_t3"
    },
    {
      "id": "e_chip_p4_t3_chip_p4_t3_s0",
      "source": "chip_p4_t3",
      "target": "chip_p4_t3_s0"
    },
    {
      "id": "e_chip_p4_t3_s0_chip_p4_t3_s0_m0",
      "source": "chip_p4_t3_s0",
      "target": "chip_p4_t3_s0_m0"
    },
    {
      "id": "e_chip_p4_t3_s0_chip_p4_t3_s0_m1",
      "source": "chip_p4_t3_s0",
      "target": "chip_p4_t3_s0_m1"
    },
    {
      "id": "e_chip_p4_t3_s0_chip_p4_t3_s0_m2",
      "source": "chip_p4_t3_s0",
      "target": "chip_p4_t3_s0_m2"
    },
    {
      "id": "e_chip_p4_t3_s0_chip_p4_t3_s0_m3",
      "source": "chip_p4_t3_s0",
      "target": "chip_p4_t3_s0_m3"
    },
    {
      "id": "e_chip_p4_t3_chip_p4_t3_s1",
      "source": "chip_p4_t3",
      "target": "chip_p4_t3_s1"
    },
    {
      "id": "e_chip_p4_t3_s1_chip_p4_t3_s1_m0",
      "source": "chip_p4_t3_s1",
      "target": "chip_p4_t3_s1_m0"
    },
    {
      "id": "e_chip_p4_t3_s1_chip_p4_t3_s1_m1",
      "source": "chip_p4_t3_s1",
      "target": "chip_p4_t3_s1_m1"
    },
    {
      "id": "e_chip_p4_t3_s1_chip_p4_t3_s1_m2",
      "source": "chip_p4_t3_s1",
      "target": "chip_p4_t3_s1_m2"
    },
    {
      "id": "e_chip_p4_t3_s1_chip_p4_t3_s1_m3",
      "source": "chip_p4_t3_s1",
      "target": "chip_p4_t3_s1_m3"
    },
    {
      "id": "e_chip_p4_t3_chip_p4_t3_s2",
      "source": "chip_p4_t3",
      "target": "chip_p4_t3_s2"
    },
    {
      "id": "e_chip_p4_t3_s2_chip_p4_t3_s2_m0",
      "source": "chip_p4_t3_s2",
      "target": "chip_p4_t3_s2_m0"
    },
    {
      "id": "e_chip_p4_t3_s2_chip_p4_t3_s2_m1",
      "source": "chip_p4_t3_s2",
      "target": "chip_p4_t3_s2_m1"
    },
    {
      "id": "e_chip_p4_t3_s2_chip_p4_t3_s2_m2",
      "source": "chip_p4_t3_s2",
      "target": "chip_p4_t3_s2_m2"
    },
    {
      "id": "e_chip_p4_t3_s2_chip_p4_t3_s2_m3",
      "source": "chip_p4_t3_s2",
      "target": "chip_p4_t3_s2_m3"
    },
    {
      "id": "e_chip_root_chip_p5",
      "source": "chip_root",
      "target": "chip_p5"
    },
    {
      "id": "e_chip_p5_chip_p5_t0",
      "source": "chip_p5",
      "target": "chip_p5_t0"
    },
    {
      "id": "e_chip_p5_t0_chip_p5_t0_s0",
      "source": "chip_p5_t0",
      "target": "chip_p5_t0_s0"
    },
    {
      "id": "e_chip_p5_t0_s0_chip_p5_t0_s0_m0",
      "source": "chip_p5_t0_s0",
      "target": "chip_p5_t0_s0_m0"
    },
    {
      "id": "e_chip_p5_t0_s0_chip_p5_t0_s0_m1",
      "source": "chip_p5_t0_s0",
      "target": "chip_p5_t0_s0_m1"
    },
    {
      "id": "e_chip_p5_t0_s0_chip_p5_t0_s0_m2",
      "source": "chip_p5_t0_s0",
      "target": "chip_p5_t0_s0_m2"
    },
    {
      "id": "e_chip_p5_t0_s0_chip_p5_t0_s0_m3",
      "source": "chip_p5_t0_s0",
      "target": "chip_p5_t0_s0_m3"
    },
    {
      "id": "e_chip_p5_t0_chip_p5_t0_s1",
      "source": "chip_p5_t0",
      "target": "chip_p5_t0_s1"
    },
    {
      "id": "e_chip_p5_t0_s1_chip_p5_t0_s1_m0",
      "source": "chip_p5_t0_s1",
      "target": "chip_p5_t0_s1_m0"
    },
    {
      "id": "e_chip_p5_t0_s1_chip_p5_t0_s1_m1",
      "source": "chip_p5_t0_s1",
      "target": "chip_p5_t0_s1_m1"
    },
    {
      "id": "e_chip_p5_t0_s1_chip_p5_t0_s1_m2",
      "source": "chip_p5_t0_s1",
      "target": "chip_p5_t0_s1_m2"
    },
    {
      "id": "e_chip_p5_t0_s1_chip_p5_t0_s1_m3",
      "source": "chip_p5_t0_s1",
      "target": "chip_p5_t0_s1_m3"
    },
    {
      "id": "e_chip_p5_t0_chip_p5_t0_s2",
      "source": "chip_p5_t0",
      "target": "chip_p5_t0_s2"
    },
    {
      "id": "e_chip_p5_t0_s2_chip_p5_t0_s2_m0",
      "source": "chip_p5_t0_s2",
      "target": "chip_p5_t0_s2_m0"
    },
    {
      "id": "e_chip_p5_t0_s2_chip_p5_t0_s2_m1",
      "source": "chip_p5_t0_s2",
      "target": "chip_p5_t0_s2_m1"
    },
    {
      "id": "e_chip_p5_t0_s2_chip_p5_t0_s2_m2",
      "source": "chip_p5_t0_s2",
      "target": "chip_p5_t0_s2_m2"
    },
    {
      "id": "e_chip_p5_t0_s2_chip_p5_t0_s2_m3",
      "source": "chip_p5_t0_s2",
      "target": "chip_p5_t0_s2_m3"
    },
    {
      "id": "e_chip_p5_chip_p5_t1",
      "source": "chip_p5",
      "target": "chip_p5_t1"
    },
    {
      "id": "e_chip_p5_t1_chip_p5_t1_s0",
      "source": "chip_p5_t1",
      "target": "chip_p5_t1_s0"
    },
    {
      "id": "e_chip_p5_t1_s0_chip_p5_t1_s0_m0",
      "source": "chip_p5_t1_s0",
      "target": "chip_p5_t1_s0_m0"
    },
    {
      "id": "e_chip_p5_t1_s0_chip_p5_t1_s0_m1",
      "source": "chip_p5_t1_s0",
      "target": "chip_p5_t1_s0_m1"
    },
    {
      "id": "e_chip_p5_t1_s0_chip_p5_t1_s0_m2",
      "source": "chip_p5_t1_s0",
      "target": "chip_p5_t1_s0_m2"
    },
    {
      "id": "e_chip_p5_t1_s0_chip_p5_t1_s0_m3",
      "source": "chip_p5_t1_s0",
      "target": "chip_p5_t1_s0_m3"
    },
    {
      "id": "e_chip_p5_t1_chip_p5_t1_s1",
      "source": "chip_p5_t1",
      "target": "chip_p5_t1_s1"
    },
    {
      "id": "e_chip_p5_t1_s1_chip_p5_t1_s1_m0",
      "source": "chip_p5_t1_s1",
      "target": "chip_p5_t1_s1_m0"
    },
    {
      "id": "e_chip_p5_t1_s1_chip_p5_t1_s1_m1",
      "source": "chip_p5_t1_s1",
      "target": "chip_p5_t1_s1_m1"
    },
    {
      "id": "e_chip_p5_t1_s1_chip_p5_t1_s1_m2",
      "source": "chip_p5_t1_s1",
      "target": "chip_p5_t1_s1_m2"
    },
    {
      "id": "e_chip_p5_t1_s1_chip_p5_t1_s1_m3",
      "source": "chip_p5_t1_s1",
      "target": "chip_p5_t1_s1_m3"
    },
    {
      "id": "e_chip_p5_chip_p5_t2",
      "source": "chip_p5",
      "target": "chip_p5_t2"
    },
    {
      "id": "e_chip_p5_t2_chip_p5_t2_s0",
      "source": "chip_p5_t2",
      "target": "chip_p5_t2_s0"
    },
    {
      "id": "e_chip_p5_t2_s0_chip_p5_t2_s0_m0",
      "source": "chip_p5_t2_s0",
      "target": "chip_p5_t2_s0_m0"
    },
    {
      "id": "e_chip_p5_t2_s0_chip_p5_t2_s0_m1",
      "source": "chip_p5_t2_s0",
      "target": "chip_p5_t2_s0_m1"
    },
    {
      "id": "e_chip_p5_t2_s0_chip_p5_t2_s0_m2",
      "source": "chip_p5_t2_s0",
      "target": "chip_p5_t2_s0_m2"
    },
    {
      "id": "e_chip_p5_t2_s0_chip_p5_t2_s0_m3",
      "source": "chip_p5_t2_s0",
      "target": "chip_p5_t2_s0_m3"
    },
    {
      "id": "e_chip_p5_t2_chip_p5_t2_s1",
      "source": "chip_p5_t2",
      "target": "chip_p5_t2_s1"
    },
    {
      "id": "e_chip_p5_t2_s1_chip_p5_t2_s1_m0",
      "source": "chip_p5_t2_s1",
      "target": "chip_p5_t2_s1_m0"
    },
    {
      "id": "e_chip_p5_t2_s1_chip_p5_t2_s1_m1",
      "source": "chip_p5_t2_s1",
      "target": "chip_p5_t2_s1_m1"
    },
    {
      "id": "e_chip_p5_t2_s1_chip_p5_t2_s1_m2",
      "source": "chip_p5_t2_s1",
      "target": "chip_p5_t2_s1_m2"
    },
    {
      "id": "e_chip_p5_t2_s1_chip_p5_t2_s1_m3",
      "source": "chip_p5_t2_s1",
      "target": "chip_p5_t2_s1_m3"
    },
    {
      "id": "e_chip_p5_chip_p5_t3",
      "source": "chip_p5",
      "target": "chip_p5_t3"
    },
    {
      "id": "e_chip_p5_t3_chip_p5_t3_s0",
      "source": "chip_p5_t3",
      "target": "chip_p5_t3_s0"
    },
    {
      "id": "e_chip_p5_t3_s0_chip_p5_t3_s0_m0",
      "source": "chip_p5_t3_s0",
      "target": "chip_p5_t3_s0_m0"
    },
    {
      "id": "e_chip_p5_t3_s0_chip_p5_t3_s0_m1",
      "source": "chip_p5_t3_s0",
      "target": "chip_p5_t3_s0_m1"
    },
    {
      "id": "e_chip_p5_t3_s0_chip_p5_t3_s0_m2",
      "source": "chip_p5_t3_s0",
      "target": "chip_p5_t3_s0_m2"
    },
    {
      "id": "e_chip_p5_t3_s0_chip_p5_t3_s0_m3",
      "source": "chip_p5_t3_s0",
      "target": "chip_p5_t3_s0_m3"
    },
    {
      "id": "e_chip_p5_t3_chip_p5_t3_s1",
      "source": "chip_p5_t3",
      "target": "chip_p5_t3_s1"
    },
    {
      "id": "e_chip_p5_t3_s1_chip_p5_t3_s1_m0",
      "source": "chip_p5_t3_s1",
      "target": "chip_p5_t3_s1_m0"
    },
    {
      "id": "e_chip_p5_t3_s1_chip_p5_t3_s1_m1",
      "source": "chip_p5_t3_s1",
      "target": "chip_p5_t3_s1_m1"
    },
    {
      "id": "e_chip_p5_t3_s1_chip_p5_t3_s1_m2",
      "source": "chip_p5_t3_s1",
      "target": "chip_p5_t3_s1_m2"
    },
    {
      "id": "e_chip_p5_t3_s1_chip_p5_t3_s1_m3",
      "source": "chip_p5_t3_s1",
      "target": "chip_p5_t3_s1_m3"
    },
    {
      "id": "e_chip_root_chip_p6",
      "source": "chip_root",
      "target": "chip_p6"
    },
    {
      "id": "e_chip_p6_chip_p6_t0",
      "source": "chip_p6",
      "target": "chip_p6_t0"
    },
    {
      "id": "e_chip_p6_t0_chip_p6_t0_s0",
      "source": "chip_p6_t0",
      "target": "chip_p6_t0_s0"
    },
    {
      "id": "e_chip_p6_t0_s0_chip_p6_t0_s0_m0",
      "source": "chip_p6_t0_s0",
      "target": "chip_p6_t0_s0_m0"
    },
    {
      "id": "e_chip_p6_t0_s0_chip_p6_t0_s0_m1",
      "source": "chip_p6_t0_s0",
      "target": "chip_p6_t0_s0_m1"
    },
    {
      "id": "e_chip_p6_t0_s0_chip_p6_t0_s0_m2",
      "source": "chip_p6_t0_s0",
      "target": "chip_p6_t0_s0_m2"
    },
    {
      "id": "e_chip_p6_t0_s0_chip_p6_t0_s0_m3",
      "source": "chip_p6_t0_s0",
      "target": "chip_p6_t0_s0_m3"
    },
    {
      "id": "e_chip_p6_t0_chip_p6_t0_s1",
      "source": "chip_p6_t0",
      "target": "chip_p6_t0_s1"
    },
    {
      "id": "e_chip_p6_t0_s1_chip_p6_t0_s1_m0",
      "source": "chip_p6_t0_s1",
      "target": "chip_p6_t0_s1_m0"
    },
    {
      "id": "e_chip_p6_t0_s1_chip_p6_t0_s1_m1",
      "source": "chip_p6_t0_s1",
      "target": "chip_p6_t0_s1_m1"
    },
    {
      "id": "e_chip_p6_t0_s1_chip_p6_t0_s1_m2",
      "source": "chip_p6_t0_s1",
      "target": "chip_p6_t0_s1_m2"
    },
    {
      "id": "e_chip_p6_t0_s1_chip_p6_t0_s1_m3",
      "source": "chip_p6_t0_s1",
      "target": "chip_p6_t0_s1_m3"
    },
    {
      "id": "e_chip_p6_t0_chip_p6_t0_s2",
      "source": "chip_p6_t0",
      "target": "chip_p6_t0_s2"
    },
    {
      "id": "e_chip_p6_t0_s2_chip_p6_t0_s2_m0",
      "source": "chip_p6_t0_s2",
      "target": "chip_p6_t0_s2_m0"
    },
    {
      "id": "e_chip_p6_t0_s2_chip_p6_t0_s2_m1",
      "source": "chip_p6_t0_s2",
      "target": "chip_p6_t0_s2_m1"
    },
    {
      "id": "e_chip_p6_t0_s2_chip_p6_t0_s2_m2",
      "source": "chip_p6_t0_s2",
      "target": "chip_p6_t0_s2_m2"
    },
    {
      "id": "e_chip_p6_t0_s2_chip_p6_t0_s2_m3",
      "source": "chip_p6_t0_s2",
      "target": "chip_p6_t0_s2_m3"
    },
    {
      "id": "e_chip_p6_chip_p6_t1",
      "source": "chip_p6",
      "target": "chip_p6_t1"
    },
    {
      "id": "e_chip_p6_t1_chip_p6_t1_s0",
      "source": "chip_p6_t1",
      "target": "chip_p6_t1_s0"
    },
    {
      "id": "e_chip_p6_t1_s0_chip_p6_t1_s0_m0",
      "source": "chip_p6_t1_s0",
      "target": "chip_p6_t1_s0_m0"
    },
    {
      "id": "e_chip_p6_t1_s0_chip_p6_t1_s0_m1",
      "source": "chip_p6_t1_s0",
      "target": "chip_p6_t1_s0_m1"
    },
    {
      "id": "e_chip_p6_t1_s0_chip_p6_t1_s0_m2",
      "source": "chip_p6_t1_s0",
      "target": "chip_p6_t1_s0_m2"
    },
    {
      "id": "e_chip_p6_t1_s0_chip_p6_t1_s0_m3",
      "source": "chip_p6_t1_s0",
      "target": "chip_p6_t1_s0_m3"
    },
    {
      "id": "e_chip_p6_t1_chip_p6_t1_s1",
      "source": "chip_p6_t1",
      "target": "chip_p6_t1_s1"
    },
    {
      "id": "e_chip_p6_t1_s1_chip_p6_t1_s1_m0",
      "source": "chip_p6_t1_s1",
      "target": "chip_p6_t1_s1_m0"
    },
    {
      "id": "e_chip_p6_t1_s1_chip_p6_t1_s1_m1",
      "source": "chip_p6_t1_s1",
      "target": "chip_p6_t1_s1_m1"
    },
    {
      "id": "e_chip_p6_t1_s1_chip_p6_t1_s1_m2",
      "source": "chip_p6_t1_s1",
      "target": "chip_p6_t1_s1_m2"
    },
    {
      "id": "e_chip_p6_t1_s1_chip_p6_t1_s1_m3",
      "source": "chip_p6_t1_s1",
      "target": "chip_p6_t1_s1_m3"
    },
    {
      "id": "e_chip_p6_t1_chip_p6_t1_s2",
      "source": "chip_p6_t1",
      "target": "chip_p6_t1_s2"
    },
    {
      "id": "e_chip_p6_t1_s2_chip_p6_t1_s2_m0",
      "source": "chip_p6_t1_s2",
      "target": "chip_p6_t1_s2_m0"
    },
    {
      "id": "e_chip_p6_t1_s2_chip_p6_t1_s2_m1",
      "source": "chip_p6_t1_s2",
      "target": "chip_p6_t1_s2_m1"
    },
    {
      "id": "e_chip_p6_t1_s2_chip_p6_t1_s2_m2",
      "source": "chip_p6_t1_s2",
      "target": "chip_p6_t1_s2_m2"
    },
    {
      "id": "e_chip_p6_t1_s2_chip_p6_t1_s2_m3",
      "source": "chip_p6_t1_s2",
      "target": "chip_p6_t1_s2_m3"
    },
    {
      "id": "e_chip_p6_chip_p6_t2",
      "source": "chip_p6",
      "target": "chip_p6_t2"
    },
    {
      "id": "e_chip_p6_t2_chip_p6_t2_s0",
      "source": "chip_p6_t2",
      "target": "chip_p6_t2_s0"
    },
    {
      "id": "e_chip_p6_t2_s0_chip_p6_t2_s0_m0",
      "source": "chip_p6_t2_s0",
      "target": "chip_p6_t2_s0_m0"
    },
    {
      "id": "e_chip_p6_t2_s0_chip_p6_t2_s0_m1",
      "source": "chip_p6_t2_s0",
      "target": "chip_p6_t2_s0_m1"
    },
    {
      "id": "e_chip_p6_t2_s0_chip_p6_t2_s0_m2",
      "source": "chip_p6_t2_s0",
      "target": "chip_p6_t2_s0_m2"
    },
    {
      "id": "e_chip_p6_t2_s0_chip_p6_t2_s0_m3",
      "source": "chip_p6_t2_s0",
      "target": "chip_p6_t2_s0_m3"
    },
    {
      "id": "e_chip_p6_t2_chip_p6_t2_s1",
      "source": "chip_p6_t2",
      "target": "chip_p6_t2_s1"
    },
    {
      "id": "e_chip_p6_t2_s1_chip_p6_t2_s1_m0",
      "source": "chip_p6_t2_s1",
      "target": "chip_p6_t2_s1_m0"
    },
    {
      "id": "e_chip_p6_t2_s1_chip_p6_t2_s1_m1",
      "source": "chip_p6_t2_s1",
      "target": "chip_p6_t2_s1_m1"
    },
    {
      "id": "e_chip_p6_t2_s1_chip_p6_t2_s1_m2",
      "source": "chip_p6_t2_s1",
      "target": "chip_p6_t2_s1_m2"
    },
    {
      "id": "e_chip_p6_t2_s1_chip_p6_t2_s1_m3",
      "source": "chip_p6_t2_s1",
      "target": "chip_p6_t2_s1_m3"
    },
    {
      "id": "e_chip_p6_chip_p6_t3",
      "source": "chip_p6",
      "target": "chip_p6_t3"
    },
    {
      "id": "e_chip_p6_t3_chip_p6_t3_s0",
      "source": "chip_p6_t3",
      "target": "chip_p6_t3_s0"
    },
    {
      "id": "e_chip_p6_t3_s0_chip_p6_t3_s0_m0",
      "source": "chip_p6_t3_s0",
      "target": "chip_p6_t3_s0_m0"
    },
    {
      "id": "e_chip_p6_t3_s0_chip_p6_t3_s0_m1",
      "source": "chip_p6_t3_s0",
      "target": "chip_p6_t3_s0_m1"
    },
    {
      "id": "e_chip_p6_t3_s0_chip_p6_t3_s0_m2",
      "source": "chip_p6_t3_s0",
      "target": "chip_p6_t3_s0_m2"
    },
    {
      "id": "e_chip_p6_t3_s0_chip_p6_t3_s0_m3",
      "source": "chip_p6_t3_s0",
      "target": "chip_p6_t3_s0_m3"
    },
    {
      "id": "e_chip_p6_t3_chip_p6_t3_s1",
      "source": "chip_p6_t3",
      "target": "chip_p6_t3_s1"
    },
    {
      "id": "e_chip_p6_t3_s1_chip_p6_t3_s1_m0",
      "source": "chip_p6_t3_s1",
      "target": "chip_p6_t3_s1_m0"
    },
    {
      "id": "e_chip_p6_t3_s1_chip_p6_t3_s1_m1",
      "source": "chip_p6_t3_s1",
      "target": "chip_p6_t3_s1_m1"
    },
    {
      "id": "e_chip_p6_t3_s1_chip_p6_t3_s1_m2",
      "source": "chip_p6_t3_s1",
      "target": "chip_p6_t3_s1_m2"
    },
    {
      "id": "e_chip_p6_t3_s1_chip_p6_t3_s1_m3",
      "source": "chip_p6_t3_s1",
      "target": "chip_p6_t3_s1_m3"
    },
    {
      "id": "e_chip_root_chip_p7",
      "source": "chip_root",
      "target": "chip_p7"
    },
    {
      "id": "e_chip_p7_chip_p7_t0",
      "source": "chip_p7",
      "target": "chip_p7_t0"
    },
    {
      "id": "e_chip_p7_t0_chip_p7_t0_s0",
      "source": "chip_p7_t0",
      "target": "chip_p7_t0_s0"
    },
    {
      "id": "e_chip_p7_t0_s0_chip_p7_t0_s0_m0",
      "source": "chip_p7_t0_s0",
      "target": "chip_p7_t0_s0_m0"
    },
    {
      "id": "e_chip_p7_t0_s0_chip_p7_t0_s0_m1",
      "source": "chip_p7_t0_s0",
      "target": "chip_p7_t0_s0_m1"
    },
    {
      "id": "e_chip_p7_t0_s0_chip_p7_t0_s0_m2",
      "source": "chip_p7_t0_s0",
      "target": "chip_p7_t0_s0_m2"
    },
    {
      "id": "e_chip_p7_t0_s0_chip_p7_t0_s0_m3",
      "source": "chip_p7_t0_s0",
      "target": "chip_p7_t0_s0_m3"
    },
    {
      "id": "e_chip_p7_t0_chip_p7_t0_s1",
      "source": "chip_p7_t0",
      "target": "chip_p7_t0_s1"
    },
    {
      "id": "e_chip_p7_t0_s1_chip_p7_t0_s1_m0",
      "source": "chip_p7_t0_s1",
      "target": "chip_p7_t0_s1_m0"
    },
    {
      "id": "e_chip_p7_t0_s1_chip_p7_t0_s1_m1",
      "source": "chip_p7_t0_s1",
      "target": "chip_p7_t0_s1_m1"
    },
    {
      "id": "e_chip_p7_t0_s1_chip_p7_t0_s1_m2",
      "source": "chip_p7_t0_s1",
      "target": "chip_p7_t0_s1_m2"
    },
    {
      "id": "e_chip_p7_t0_s1_chip_p7_t0_s1_m3",
      "source": "chip_p7_t0_s1",
      "target": "chip_p7_t0_s1_m3"
    },
    {
      "id": "e_chip_p7_chip_p7_t1",
      "source": "chip_p7",
      "target": "chip_p7_t1"
    },
    {
      "id": "e_chip_p7_t1_chip_p7_t1_s0",
      "source": "chip_p7_t1",
      "target": "chip_p7_t1_s0"
    },
    {
      "id": "e_chip_p7_t1_s0_chip_p7_t1_s0_m0",
      "source": "chip_p7_t1_s0",
      "target": "chip_p7_t1_s0_m0"
    },
    {
      "id": "e_chip_p7_t1_s0_chip_p7_t1_s0_m1",
      "source": "chip_p7_t1_s0",
      "target": "chip_p7_t1_s0_m1"
    },
    {
      "id": "e_chip_p7_t1_s0_chip_p7_t1_s0_m2",
      "source": "chip_p7_t1_s0",
      "target": "chip_p7_t1_s0_m2"
    },
    {
      "id": "e_chip_p7_t1_s0_chip_p7_t1_s0_m3",
      "source": "chip_p7_t1_s0",
      "target": "chip_p7_t1_s0_m3"
    },
    {
      "id": "e_chip_p7_t1_chip_p7_t1_s1",
      "source": "chip_p7_t1",
      "target": "chip_p7_t1_s1"
    },
    {
      "id": "e_chip_p7_t1_s1_chip_p7_t1_s1_m0",
      "source": "chip_p7_t1_s1",
      "target": "chip_p7_t1_s1_m0"
    },
    {
      "id": "e_chip_p7_t1_s1_chip_p7_t1_s1_m1",
      "source": "chip_p7_t1_s1",
      "target": "chip_p7_t1_s1_m1"
    },
    {
      "id": "e_chip_p7_t1_s1_chip_p7_t1_s1_m2",
      "source": "chip_p7_t1_s1",
      "target": "chip_p7_t1_s1_m2"
    },
    {
      "id": "e_chip_p7_t1_s1_chip_p7_t1_s1_m3",
      "source": "chip_p7_t1_s1",
      "target": "chip_p7_t1_s1_m3"
    },
    {
      "id": "e_chip_p7_chip_p7_t2",
      "source": "chip_p7",
      "target": "chip_p7_t2"
    },
    {
      "id": "e_chip_p7_t2_chip_p7_t2_s0",
      "source": "chip_p7_t2",
      "target": "chip_p7_t2_s0"
    },
    {
      "id": "e_chip_p7_t2_s0_chip_p7_t2_s0_m0",
      "source": "chip_p7_t2_s0",
      "target": "chip_p7_t2_s0_m0"
    },
    {
      "id": "e_chip_p7_t2_s0_chip_p7_t2_s0_m1",
      "source": "chip_p7_t2_s0",
      "target": "chip_p7_t2_s0_m1"
    },
    {
      "id": "e_chip_p7_t2_s0_chip_p7_t2_s0_m2",
      "source": "chip_p7_t2_s0",
      "target": "chip_p7_t2_s0_m2"
    },
    {
      "id": "e_chip_p7_t2_s0_chip_p7_t2_s0_m3",
      "source": "chip_p7_t2_s0",
      "target": "chip_p7_t2_s0_m3"
    },
    {
      "id": "e_chip_p7_t2_chip_p7_t2_s1",
      "source": "chip_p7_t2",
      "target": "chip_p7_t2_s1"
    },
    {
      "id": "e_chip_p7_t2_s1_chip_p7_t2_s1_m0",
      "source": "chip_p7_t2_s1",
      "target": "chip_p7_t2_s1_m0"
    },
    {
      "id": "e_chip_p7_t2_s1_chip_p7_t2_s1_m1",
      "source": "chip_p7_t2_s1",
      "target": "chip_p7_t2_s1_m1"
    },
    {
      "id": "e_chip_p7_t2_s1_chip_p7_t2_s1_m2",
      "source": "chip_p7_t2_s1",
      "target": "chip_p7_t2_s1_m2"
    },
    {
      "id": "e_chip_p7_t2_s1_chip_p7_t2_s1_m3",
      "source": "chip_p7_t2_s1",
      "target": "chip_p7_t2_s1_m3"
    },
    {
      "id": "e_chip_p7_chip_p7_t3",
      "source": "chip_p7",
      "target": "chip_p7_t3"
    },
    {
      "id": "e_chip_p7_t3_chip_p7_t3_s0",
      "source": "chip_p7_t3",
      "target": "chip_p7_t3_s0"
    },
    {
      "id": "e_chip_p7_t3_s0_chip_p7_t3_s0_m0",
      "source": "chip_p7_t3_s0",
      "target": "chip_p7_t3_s0_m0"
    },
    {
      "id": "e_chip_p7_t3_s0_chip_p7_t3_s0_m1",
      "source": "chip_p7_t3_s0",
      "target": "chip_p7_t3_s0_m1"
    },
    {
      "id": "e_chip_p7_t3_s0_chip_p7_t3_s0_m2",
      "source": "chip_p7_t3_s0",
      "target": "chip_p7_t3_s0_m2"
    },
    {
      "id": "e_chip_p7_t3_s0_chip_p7_t3_s0_m3",
      "source": "chip_p7_t3_s0",
      "target": "chip_p7_t3_s0_m3"
    },
    {
      "id": "e_chip_p7_t3_chip_p7_t3_s1",
      "source": "chip_p7_t3",
      "target": "chip_p7_t3_s1"
    },
    {
      "id": "e_chip_p7_t3_s1_chip_p7_t3_s1_m0",
      "source": "chip_p7_t3_s1",
      "target": "chip_p7_t3_s1_m0"
    },
    {
      "id": "e_chip_p7_t3_s1_chip_p7_t3_s1_m1",
      "source": "chip_p7_t3_s1",
      "target": "chip_p7_t3_s1_m1"
    },
    {
      "id": "e_chip_p7_t3_s1_chip_p7_t3_s1_m2",
      "source": "chip_p7_t3_s1",
      "target": "chip_p7_t3_s1_m2"
    },
    {
      "id": "e_chip_p7_t3_s1_chip_p7_t3_s1_m3",
      "source": "chip_p7_t3_s1",
      "target": "chip_p7_t3_s1_m3"
    }
  ]
};
