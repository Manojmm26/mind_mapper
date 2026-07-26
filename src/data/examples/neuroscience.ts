import { MindMapData } from "../../services/llmService";

export const NEUROSCIENCE_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "neuro_root",
      "label": "Neuroscience of Learning, Memory & Brain Architectures",
      "description": "Rigorous first-principles blueprint of Hodgkin-Huxley membrane biophysics, LTP receptor kinetics, hippocampal memory encoding, prefrontal dopamine prediction error, sleep consolidation, visual cortex columns, and spiking neural networks.",
      "type": "topic"
    },
    {
      "id": "neuro_root_p1",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials",
      "description": "Mathematical and physical laws governing neuronal membrane potentials, voltage-gated ion channels, and action potential propagation.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t1",
      "label": "Nernst & Goldman-Hodgkin-Katz Voltage Equations",
      "description": "Calculating equilibrium membrane potentials across selective ion permeable membranes.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t1_s1",
      "label": "Nernst Equilibrium Potential Formula",
      "description": "E_ion = (RT / zF) * ln([Ion]_out / [Ion]_in) calculating thermodynamic equilibrium for single ions.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t1_s1_d1",
      "label": "Potassium Equilibrium E_K (-90mV)",
      "description": "Calculating -90mV equilibrium potential for K+ ions given high intracellular concentration.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t1_s1_d2",
      "label": "Sodium Equilibrium E_Na (+60mV)",
      "description": "Calculating +60mV equilibrium potential for Na+ ions given high extracellular concentration.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t1_s2",
      "label": "Goldman-Hodgkin-Katz (GHK) Voltage Equation",
      "description": "Calculating resting membrane potential V_m based on relative membrane permeabilities to Na+, K+, and Cl-.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t1_s2_d1",
      "label": "Resting Membrane Potential (-70mV)",
      "description": "Evaluating resting potential driven primarily by high resting K+ permeability.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t1_s2_d2",
      "label": "Permetability Ratio Shifts During Excitation",
      "description": "Tracking V_m shifts toward E_Na as sodium permeability increases 500-fold.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t1_s3",
      "label": "Sodium-Potassium Pump (Na+/K+-ATPase)",
      "description": "Active transport enzyme maintaining concentration gradients by pumping 3 Na+ out and 2 K+ in per ATP hydrolyzed.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t1_s3_d1",
      "label": "Electrogenic Ion Transport Ratio (3 Na+ out / 2 K+ in)",
      "description": "Generating net outward positive current contributing to negative resting potential.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t1_s3_d2",
      "label": "ATP Energy Consumption Bound",
      "description": "Consuming over 30% of total brain metabolic ATP to maintain neuronal ion gradients.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t1_s4",
      "label": "Membrane Capacitance & Time Constant (tau = R_m * C_m)",
      "description": "RC circuit model of lipid bilayer capacitance and membrane resistance.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t1_s4_d1",
      "label": "Lipid Bilayer Capacitance (1 uF/cm^2)",
      "description": "Storing electrical charge across 4-nanometer hydrophobic lipid core layers.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t1_s4_d2",
      "label": "Time Constant tau Exponential Charging",
      "description": "Determining the temporal summation window for synaptic inputs.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t1_s5",
      "label": "Axonal Length Constant (lambda = sqrt(r_m / r_i))",
      "description": "Spatial attenuation constant measuring passive voltage decay along dendrites and axons.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t1_s5_d1",
      "label": "Membrane vs Internal Resistance Ratio (r_m / r_i)",
      "description": "Increasing length constant lambda by increasing axon diameter or membrane resistance.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t1_s5_d2",
      "label": "Myelination Length Constant Boost",
      "description": "Increasing r_m via myelin sheaths to extend passive signal propagation distances.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t2",
      "label": "Hodgkin-Huxley Gating Variables (m, h, n)",
      "description": "Non-linear differential equations modeling voltage-dependent sodium and potassium channel conductances.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t2_s1",
      "label": "Potassium Activation Variable n^4",
      "description": "Modeling delayed-rectifier K+ channel activation using 4 independent probability gates.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t2_s1_d1",
      "label": "Differential Equation dn/dt = alpha_n(V)(1-n) - beta_n(V)n",
      "description": "Calculating voltage-dependent transition rates between open and closed gate states.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t2_s1_d2",
      "label": "Fourth-Power Conductance Scaling g_K = gbar_K * n^4",
      "description": "Fitting sigmoidal delayed activation curves of potassium outward currents.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t2_s2",
      "label": "Sodium Activation m^3 & Inactivation h Variables",
      "description": "Modeling fast Na+ channel activation (m) and delayed ball-and-chain inactivation (h).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t2_s2_d1",
      "label": "Sodium Conductance g_Na = gbar_Na * m^3 * h",
      "description": "Combining 3 fast activation gates with 1 slow inactivation gate.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t2_s2_d2",
      "label": "Transient Inward Sodium Current Peak",
      "description": "Generating rapid depolarization spikes followed by automatic channel inactivation.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t2_s3",
      "label": "Absolute & Relative Refractory Periods",
      "description": "Time intervals following action potentials during which secondary spikes are impossible or require higher threshold.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t2_s3_d1",
      "label": "Absolute Refractory Period (Na+ Channel Inactivation)",
      "description": "Complete inability to fire due to h-gate sodium channel inactivation.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t2_s3_d2",
      "label": "Relative Refractory Period (K+ Hyperpolarization)",
      "description": "Elevated firing threshold caused by lingering high potassium conductance (undershoot).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t2_s4",
      "label": "Saltatory Conduction & Nodes of Ranvier",
      "description": "Action potential propagation jumping between unmyelinated nodes along myelinated axons.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t2_s4_d1",
      "label": "High Density Voltage-Gated Na+ Channels at Nodes",
      "description": "Concentrating sodium channels at Nodes of Ranvier to boost decaying passive currents.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t2_s4_d2",
      "label": "Conduction Velocity Acceleration (100 m/s)",
      "description": "Increasing signal speed by 50x compared to unmyelinated fibers of equal diameter.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t2_s5",
      "label": "All-or-None Threshold Dynamics (-55mV)",
      "description": "Critical membrane potential where inward Na+ current exceeds outward K+ leak current.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t2_s5_d1",
      "label": "Positive Feedback Depolarization Loop",
      "description": "Triggering explosive Na+ entry when membrane potential crosses -55mV threshold.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t2_s5_d2",
      "label": "Stereotyped Action Potential Amplitude",
      "description": "Generating identical spike amplitudes and durations regardless of stimulus strength.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t3",
      "label": "Dendritic Integration & Cable Theory",
      "description": "Mathematical modeling of postsynaptic potential propagation through complex dendritic trees.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t3_s1",
      "label": "Wilfrid Rall Cable Equation (partial^2 V / partial x^2)",
      "description": "Second-order partial differential equation modeling voltage spatio-temporal dynamics in passive dendrites.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t3_s1_d1",
      "label": "Normalized Space & Time Variables (X = x/lambda, T = t/tau)",
      "description": "Simplifying cable equations into dimensionless canonical forms.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t3_s1_d2",
      "label": "Dendritic Voltage Attenuation Decay",
      "description": "Quantifying exponential amplitude loss as EPSPs travel from distal dendrites to the soma.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t3_s2",
      "label": "Linear Spatial & Temporal EPSP Summation",
      "description": "Combining sub-threshold excitatory postsynaptic potentials (EPSPs) at the axon initial segment.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t3_s2_d1",
      "label": "Spatial Summation of Synchronous Inputs",
      "description": "Summing EPSPs originating simultaneously from distinct dendritic branches.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t3_s2_d2",
      "label": "Temporal Summation of High-Frequency Inputs",
      "description": "Accumulating sequential EPSPs arriving within single membrane time constant windows.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t3_s3",
      "label": "Non-Linear Dendritic Spikes (NMDA & Na+ Spikes)",
      "description": "Active regenerative voltage spikes generated within local dendritic compartments.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t3_s3_d1",
      "label": "Dendritic NMDA Spikes (Sub-Linear to Super-Linear Transition)",
      "description": "Generating localized long-duration (50-100ms) plateau potentials in distal dendrites.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t3_s3_d2",
      "label": "Local Coincidence Detection Computations",
      "description": "Transforming single dendritic branches into non-linear computational units.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t3_s4",
      "label": "Shunting Inhibition & Synaptic Placement Geometry",
      "description": "Inhibitory IPSPs strategically located on proximal dendrites blocking distal excitatory signals.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t3_s4_d1",
      "label": "GABA_A Chloride Conductance Increases (E_Cl = -70mV)",
      "description": "Increasing membrane conductance without changing voltage, clamping local potential.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t3_s4_d2",
      "label": "Division-Like Multiplicative Signal Attenuation",
      "description": "Executing division operations on incoming dendritic excitatory currents.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t3_s5",
      "label": "Axon Initial Segment (AIS) Spike Generator Zone",
      "description": "Specialized proximal axon region with highest sodium channel density where action potentials originate.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t3_s5_d1",
      "label": "Nav1.6 High-Density Channel Clustering",
      "description": "Lowering action potential threshold at AIS to ensure reliable spike initiation.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t3_s5_d2",
      "label": "Back-Propagating Action Potentials (bAPs)",
      "description": "Retrograde spike propagation from AIS into dendrites to signal spike occurrence for plasticity.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t4",
      "label": "Neurotransmitter Release & Vesicle Exocytosis",
      "description": "Presynaptic machinery converting action potentials into chemical signal release.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t4_s1",
      "label": "Voltage-Gated Calcium Channel (VGCC) Influx",
      "description": "Action potential arrival opening P/Q and N-type Ca2+ channels at presynaptic active zones.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t4_s1_d1",
      "label": "Local Microdomain Ca2+ Concentration Spikes (10-100 uM)",
      "description": "Creating localized high Ca2+ concentration microdomains near active zones.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t4_s1_d2",
      "label": "Fourth-Power Calcium Cooperativity",
      "description": "Requiring 4 Ca2+ ions to bind synaptotagmin to trigger vesicle fusion.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t4_s2",
      "label": "SNARE Complex Assembly (Syntaxin, SNAP-25, Synaptobrevin)",
      "description": "Molecular zippering of v-SNARE and t-SNARE proteins driving membrane fusion.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t4_s2_d1",
      "label": "Four-Alpha-Helix Bundle Zippering",
      "description": "Pulling vesicle and presynaptic plasma membranes together to overcome electrostatic repulsion.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t4_s2_d2",
      "label": "Synaptotagmin-1 Ca2+ Sensor Switch",
      "description": "Triggering ultrafast (< 200 microseconds) pore opening upon Ca2+ binding.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t4_s3",
      "label": "Quantal Release Theory & Binomial Model",
      "description": "Statistical model of neurotransmitter release where Mean Release M = n * p.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t4_s3_d1",
      "label": "Parameters n (Release Sites), p (Release Prob), q (Quanta Size)",
      "description": "Quantifying presynaptic strength using binomial probability distributions.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t4_s3_d2",
      "label": "Single Vesicle Quantal Amplitude (Miniature EPSC / mEPSC)",
      "description": "Measuring miniature postsynaptic currents generated by single vesicle releases.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t4_s4",
      "label": "Vesicle Pool Dynamics (RRP, Recycling, Reserve)",
      "description": "Managing functional synaptic vesicle pools during high-frequency presynaptic firing.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t4_s4_d1",
      "label": "Readily Releasable Pool (RRP 5-10 Vesicles)",
      "description": "Depleting docked vesicles rapidly during high-frequency stimulus bursts.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t4_s4_d2",
      "label": "Clathrin-Mediated Endocytosis Recycling",
      "description": "Reclaiming fused vesicle membranes within 10-20 seconds to replenish pools.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t4_s5",
      "label": "Short-Term Synaptic Plasticity (Depression vs Facilitation)",
      "description": "Transient changes in synaptic strength driven by presynaptic Ca2+ accumulation and RRP depletion.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t4_s5_d1",
      "label": "Short-Term Facilitation (Residual Ca2+ Accumulation)",
      "description": "Increasing release probability p during closely spaced successive action potentials.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t4_s5_d2",
      "label": "Short-Term Depression (RRP Depletion)",
      "description": "Decreasing available release sites n during prolonged high-frequency stimulation.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t5",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 5",
      "description": "Detailed first-principles mechanics for Hodgkin-Huxley Biophysics & Action Potentials topic 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t5_s1",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Hodgkin-Huxley Biophysics & Action Potentials Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t5_s1_d1",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t5_s1_d2",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t5_s2",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Hodgkin-Huxley Biophysics & Action Potentials Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t5_s2_d1",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t5_s2_d2",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t5_s3",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Hodgkin-Huxley Biophysics & Action Potentials Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t5_s3_d1",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t5_s3_d2",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t5_s4",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Hodgkin-Huxley Biophysics & Action Potentials Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t5_s4_d1",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t5_s4_d2",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t5_s5",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Hodgkin-Huxley Biophysics & Action Potentials Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t5_s5_d1",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t5_s5_d2",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hodgkin-Huxley Biophysics & Action Potentials Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t6",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 6",
      "description": "Detailed first-principles mechanics for Hodgkin-Huxley Biophysics & Action Potentials topic 6.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t6_s1",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Hodgkin-Huxley Biophysics & Action Potentials Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t6_s1_d1",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t6_s1_d2",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t6_s2",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Hodgkin-Huxley Biophysics & Action Potentials Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t6_s2_d1",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t6_s2_d2",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t6_s3",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Hodgkin-Huxley Biophysics & Action Potentials Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t6_s3_d1",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t6_s3_d2",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t6_s4",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Hodgkin-Huxley Biophysics & Action Potentials Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t6_s4_d1",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t6_s4_d2",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t6_s5",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Hodgkin-Huxley Biophysics & Action Potentials Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t6_s5_d1",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p1_t6_s5_d2",
      "label": "Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hodgkin-Huxley Biophysics & Action Potentials Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2",
      "label": "Synaptic Plasticity & LTP Kinetics",
      "description": "Hebbian learning, NMDA/AMPA receptor trafficking, CaMKII autophosphorylation, and Spike-Timing-Dependent Plasticity (STDP).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t1",
      "label": "NMDA & AMPA Ionotropic Glutamate Receptors",
      "description": "Postsynaptic glutamate-gated ion channels mediating fast excitation and synaptic plasticity.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t1_s1",
      "label": "AMPA Receptor Fast Na+/K+ Conductance",
      "description": "GluA1-GluA4 tetrameric channels mediating fast EPSCs with sub-millisecond kinetics.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t1_s1_d1",
      "label": "Linear I-V Relationship & Zero Magnesium Block",
      "description": "Conducting Na+ inward current at resting potentials without voltage dependence.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t1_s1_d2",
      "label": "Desensitization Kinetics (2-5ms)",
      "description": "Closing channel pores rapidly during continuous glutamate exposure.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t1_s2",
      "label": "NMDA Receptor Voltage-Dependent Mg2+ Plug",
      "description": "GluN1/GluN2 heterotetramers blocked by extracellular Mg2+ at resting membrane potentials.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t1_s2_d1",
      "label": "Magnesium Un-blocking Depolarization Threshold (-30mV)",
      "description": "Expelling Mg2+ ions from channel pores via postsynaptic membrane depolarization.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t1_s2_d2",
      "label": "Coincidence Detector Property",
      "description": "Requiring simultaneous presynaptic glutamate binding AND postsynaptic depolarization.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t1_s3",
      "label": "NMDA High Calcium Permeability (Ca2+ Influx)",
      "description": "Conducting Ca2+ ions into postsynaptic spines to initiate intracellular signaling cascades.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t1_s3_d1",
      "label": "Slow Decay Kinetics (100-500ms)",
      "description": "Prolonging Ca2+ entry window to trigger downstream protein kinases.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t1_s3_d2",
      "label": "GluN2A vs GluN2B Subunit Switching",
      "description": "Modulating decay duration and plasticity induction thresholds during development.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t1_s4",
      "label": "Metabotropic Glutamate Receptors (mGluR1/5)",
      "description": "G-protein coupled receptors activating Phospholipase C (PLC) and IP3 pathways.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t1_s4_d1",
      "label": "Intracellular Calcium Store Release (IP3 Receptors)",
      "description": "Releasing Ca2+ from endoplasmic reticulum stores into dendritic cytoplasm.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t1_s4_d2",
      "label": "mGluR-LTD Endocytosis Signaling",
      "description": "Triggering protein synthesis-dependent AMPA receptor internalization.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t1_s5",
      "label": "Postsynaptic Density (PSD-95) Scaffolding Matrix",
      "description": "Dense protein matrix anchoring glutamate receptors directly opposite presynaptic active zones.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t1_s5_d1",
      "label": "PSD-95 PDZ Domain Binding",
      "description": "Clustering AMPA and NMDA receptors via Stargazin and SAP97 adapter proteins.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t1_s5_d2",
      "label": "Spine Head Structural Expansion Anchor",
      "description": "Providing structural lattice framework for enlarged dendritic spine heads.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t2",
      "label": "Long-Term Potentiation (LTP) Signaling Cascade",
      "description": "Intracellular enzymatic cascades converting Ca2+ influx into persistent synaptic strengthening.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t2_s1",
      "label": "CaMKII Autophosphorylation (Thr286 Molecular Memory)",
      "description": "Calcium/Calmodulin-dependent protein kinase II switching to autonomous active states.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t2_s1_d1",
      "label": "Hexametric Ring Complex Structure",
      "description": "Clustering 12 kinase subunits in dual hexameric rings.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t2_s1_d2",
      "label": "Thr286 Autophosphorylation Persistence",
      "description": "Maintaining active kinase state long after intracellular Ca2+ concentrations return to baseline.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t2_s2",
      "label": "AMPA Receptor Phosphorylation (Ser831 & Ser845)",
      "description": "Phosphorylating GluA1 subunits to increase single-channel conductance and membrane insertion.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t2_s2_d1",
      "label": "Ser831 Phosphorylation by CaMKII",
      "description": "Increasing single-channel conductance of existing membrane AMPA channels.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t2_s2_d2",
      "label": "Ser845 Phosphorylation by PKA",
      "description": "Targeting AMPA receptors to extrasynaptic pools for lateral diffusion.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t2_s3",
      "label": "AMPA Receptor Exocytosis & Lateral Diffusion",
      "description": "Inserting new AMPA receptors into spine membranes and trapping them at the PSD.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t2_s3_d1",
      "label": "Perisynaptic Exocytosis of GluA1 Pools",
      "description": "Fusing intracellular storage vesicles with perisynaptic membranes.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t2_s3_d2",
      "label": "PSD-95 Trapping & Lateral Surface Diffusion",
      "description": "Diffusing AMPA receptors laterally into the PSD and binding scaffolding anchors.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t2_s4",
      "label": "Retrograde Messengers (Nitric Oxide & Endocannabinoids)",
      "description": "Postsynaptic signals diffusing backward across synaptic clefts to alter presynaptic release.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t2_s4_d1",
      "label": "Nitric Oxide Synthase (nNOS) Activation",
      "description": "Diffusing gaseous NO to presynaptic terminals to boost neurotransmitter release probability p.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t2_s4_d2",
      "label": "Endocannabinoid (2-AG) Retrograde Inhibition",
      "description": "Binding presynaptic CB1 receptors to suppress presynaptic calcium influx (LTD).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t2_s5",
      "label": "Late-LTP (L-LTP) & Gene Transcription (CREB)",
      "description": "Persistent LTP phase requiring protein synthesis and structural spine remodeling.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t2_s5_d1",
      "label": "MAPK/ERK to CREB Nuclear Signaling",
      "description": "Phosphorylating CREB transcription factors to trigger expression of Plasticity Related Proteins (PRPs).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t2_s5_d2",
      "label": "Synaptic Tagging & Capture (STC) Hypothesis",
      "description": "Tagging activated spines locally to capture systemically distributed PRPs.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t3",
      "label": "Spike-Timing-Dependent Plasticity (STDP)",
      "description": "Asymmetric learning rule where synaptic weight changes depend on millisecond timing order of presynaptic and postsynaptic spikes.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t3_s1",
      "label": "Pre-Before-Post Timing Window (LTP Window +20ms)",
      "description": "Presynaptic spike preceding postsynaptic spike (Delta t = t_post - t_pre > 0) induces LTP.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t3_s1_d1",
      "label": "Maximal Potentiation at Delta t = +5ms",
      "description": "Achieving maximum LTP when presynaptic glutamate release coincides with bAP peak.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t3_s1_d2",
      "label": "Supralinear Calcium Influx Coincidence",
      "description": "Unblocking NMDA receptors while glutamate is bound, driving massive Ca2+ influx.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t3_s2",
      "label": "Post-Before-Pre Timing Window (LTD Window -20ms)",
      "description": "Postsynaptic spike preceding presynaptic spike (Delta t < 0) induces Long-Term Depression.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t3_s2_d1",
      "label": "Maximal Depression at Delta t = -10ms",
      "description": "Achieving maximum LTD when bAP precedes glutamate release.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t3_s2_d2",
      "label": "Sub-Threshold Moderate Calcium Influx",
      "description": "Activating calcineurin/PP1 phosphatases via moderate Ca2+ entry, triggering AMPA receptor endocytosis.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t3_s3",
      "label": "Exponential STDP Kernel Function Delta w = A * exp(-|Delta t| / tau)",
      "description": "Mathematical formula describing weight change magnitude as a function of spike timing interval.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t3_s3_d1",
      "label": "Time Constant Specs (tau_pos approx 20ms, tau_neg approx 20ms)",
      "description": "Setting asymmetric temporal decay windows for potentiation and depression.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t3_s3_d2",
      "label": "Weight-Dependent Scaling Limits (Soft vs Hard Bounds)",
      "description": "Scaling weight updates relative to current weight w to prevent runaway saturation.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t3_s4",
      "label": "Triplet & Frequency-Dependent STDP Modifications",
      "description": "Multi-spike interaction rules modifying classic pairwise STDP at high firing frequencies.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t3_s4_d1",
      "label": "High-Frequency Burst Potentiation Dominance",
      "description": "Overriding LTD windows when presynaptic spikes arrive at frequencies > 50Hz.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t3_s4_d2",
      "label": "Triplet Integration Rules (Pre-Post-Pre / Post-Pre-Post)",
      "description": "Incorporating third-spike timing to accurately predict weight changes during complex bursts.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t3_s5",
      "label": "Causal Structure Discovery in Recurrent Networks",
      "description": "Network-level consequence of STDP: reinforcing causal pathways while pruning non-causal inputs.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t3_s5_d1",
      "label": "Directional Sequence Encoding",
      "description": "Strengthening forward-projecting connections in neural chains.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t3_s5_d2",
      "label": "Competitive Input Selection",
      "description": "Depressing uncorrelated background inputs to refine receptive fields.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t4",
      "label": "Homeostatic Plasticity & Synaptic Scaling",
      "description": "Compensatory mechanisms adjusting global synaptic strengths to maintain stable average firing rates.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t4_s1",
      "label": "Global Synaptic Scaling Formula (w_new = a * w_old)",
      "description": "Multiplicative scaling of all synaptic weights up or down to preserve relative weight ratios.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t4_s1_d1",
      "label": "Preservation of Relative Memory Traces",
      "description": "Scaling all weights proportionally to retain stored information while adjusting excitability.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t4_s1_d2",
      "label": "Chronic Activity Alteration Triggers (TTX / Bicuculline)",
      "description": "Triggering up-scaling following 24h activity block (TTX) or down-scaling after chronic hyperactivity.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t4_s2",
      "label": "Intracellular Calcium Target Point Setpoint",
      "description": "Sensors tracking long-term integrated somatic Ca2+ concentrations to detect average firing drift.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t4_s2_d1",
      "label": "Calmodulin-Dependent Kinase Cascades",
      "description": "Translating nuclear Ca2+ levels into gene expression updates.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t4_s2_d2",
      "label": "Slow Time Constant Execution (12-48 Hours)",
      "description": "Executing homeostatic adjustments over hours to days rather than minutes.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t4_s3",
      "label": "Metaplasticity & BCM Rule (Bienenstock-Cooper-Munro)",
      "description": "Sliding modification threshold theta_M for LTP/LTD induction based on historical average activity.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t4_s3_d1",
      "label": "Sliding Threshold Formula theta_M = E[(y/y_0)^2]",
      "description": "Shifting threshold rightward when historical activity is high, making LTP harder and LTD easier.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t4_s3_d2",
      "label": "Runaway Neural Excitation Prevention",
      "description": "Preventing recurrent networks from saturating in hyper-excited or silent states.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t4_s4",
      "label": "Intrinsic Membrane Excitability Plasticity",
      "description": "Modulating density and properties of voltage-gated ion channels at the soma/AIS.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t4_s4_d1",
      "label": "Nav & Kdr Channel Density Adjustments",
      "description": "Upregulating potassium conductances to lower intrinsic firing rates.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t4_s4_d2",
      "label": "AIS Length & Position Migration",
      "description": "Shifting axon initial segment position distal to soma to decrease excitability.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t4_s5",
      "label": "Inhibitory Synapse Co-Tuning",
      "description": "Adjusting GABAergic inhibitory input strengths to match excitatory input changes.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t4_s5_d1",
      "label": "Excitation-Inhibition (E/I) Balance Maintenance",
      "description": "Maintaining constant local E/I ratios across cortical microcircuits.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t4_s5_d2",
      "label": "Prevention of Epileptiform Seizure States",
      "description": "Preventing runaway positive feedback loops in recurrent cortical networks.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t5",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 5",
      "description": "Detailed first-principles mechanics for Synaptic Plasticity & LTP Kinetics topic 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t5_s1",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Synaptic Plasticity & LTP Kinetics Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t5_s1_d1",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t5_s1_d2",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t5_s2",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Synaptic Plasticity & LTP Kinetics Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t5_s2_d1",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t5_s2_d2",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t5_s3",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Synaptic Plasticity & LTP Kinetics Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t5_s3_d1",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t5_s3_d2",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t5_s4",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Synaptic Plasticity & LTP Kinetics Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t5_s4_d1",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t5_s4_d2",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t5_s5",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Synaptic Plasticity & LTP Kinetics Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t5_s5_d1",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t5_s5_d2",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synaptic Plasticity & LTP Kinetics Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t6",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 6",
      "description": "Detailed first-principles mechanics for Synaptic Plasticity & LTP Kinetics topic 6.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t6_s1",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Synaptic Plasticity & LTP Kinetics Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t6_s1_d1",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t6_s1_d2",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t6_s2",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Synaptic Plasticity & LTP Kinetics Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t6_s2_d1",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t6_s2_d2",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t6_s3",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Synaptic Plasticity & LTP Kinetics Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t6_s3_d1",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t6_s3_d2",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t6_s4",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Synaptic Plasticity & LTP Kinetics Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t6_s4_d1",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t6_s4_d2",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t6_s5",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Synaptic Plasticity & LTP Kinetics Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t6_s5_d1",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p2_t6_s5_d2",
      "label": "Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Synaptic Plasticity & LTP Kinetics Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3",
      "label": "Hippocampal Memory & Spatial Navigation",
      "description": "Trisynaptic circuit anatomy, CA3 recurrent pattern completion, CA1 pattern separation, and grid/place cell navigation.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t1",
      "label": "Hippocampal Trisynaptic Circuit Anatomy",
      "description": "Unidirectional feedforward architecture processing episodic memory representations.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t1_s1",
      "label": "Entorhinal Cortex (EC) to Dentate Gyrus (DG) Perforant Path",
      "description": "Major input pathway projecting cortical information from entorhinal layer II to dentate granule cells.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t1_s1_d1",
      "label": "Massive Fan-Out Ratio (1 EC to 100 DG Granule Cells)",
      "description": "Diverging inputs across 1.2 million granule cells in rodents to sparsify representations.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t1_s1_d2",
      "label": "Granule Cell Strong Feedforward Inhibition",
      "description": "Enforcing sparse coding (< 1-2% active cells) via local parvalbumin interneurons.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t1_s2",
      "label": "Dentate Gyrus to CA3 Mossy Fiber Path",
      "description": "Un-myelinated axon projections forming large explosive un-dentate synapses on CA3 pyramidal dendrites.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t1_s2_d1",
      "label": "Detour Detonation Synapses",
      "description": "Generating massive single-synapse EPSPs capable of driving CA3 firing.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t1_s2_d2",
      "label": "Pattern Separation Engine Execution",
      "description": "Converting overlapping input patterns into orthogonal non-overlapping neural representations.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t1_s3",
      "label": "CA3 to CA1 Schaffer Collateral Path",
      "description": "Axon projections from CA3 pyramidal cells terminating on CA1 apical and basal dendrites.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t1_s3_d1",
      "label": "Classic LTP Model Synapse",
      "description": "Primary experimental substrate for studying NMDA-dependent synaptic plasticity.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t1_s3_d2",
      "label": "Relaying Completed Patterns to Output Layers",
      "description": "Forwarding reconstructed memory patterns to CA1 for output projection.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t1_s4",
      "label": "CA1 to Subiculum & Deep Entorhinal Output Path",
      "description": "Primary output pathway projecting back to neocortical association areas.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t1_s4_d1",
      "label": "Subiculum Memory Distribution Hub",
      "description": "Routing processed episodic data to mammillary bodies and prefrontal cortex.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t1_s4_d2",
      "label": "Feedback Loop Closure to Entorhinal Layer V/VI",
      "description": "Closing memory processing loops back to entorhinal cortex output layers.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t1_s5",
      "label": "Adult Neurogenesis in Dentate Gyrus Subgranular Zone",
      "description": "Continuous generation of new granule neurons throughout adulthood.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t1_s5_d1",
      "label": "Enhanced Plasticity Window of Immature Neurons",
      "description": "Integrating young granule cells with lower LTP induction thresholds for new memory encoding.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t1_s5_d2",
      "label": "Pattern Separation for Temporal Clustering",
      "description": "Distinguishing events experienced at distinct points in time.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t2",
      "label": "CA3 Recurrent Network & Pattern Completion",
      "description": "Auto-associative neural network architecture backed by dense recurrent axon collaterals.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t2_s1",
      "label": "Dense Recurrent Axon Collaterals (Auto-Associative Matrix)",
      "description": "CA3 pyramidal cells forming extensive excitatory feedback connections onto neighboring CA3 cells.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t2_s1_d1",
      "label": "Recurrent Connectivity Matrix (p approx 0.05)",
      "description": "Forming dense recurrent connection loops supporting attractor dynamics.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t2_s1_d2",
      "label": "Hopfield Network Mathematical Analog",
      "description": "Storing memory patterns as energy minima in recurrent state space.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t2_s2",
      "label": "Pattern Completion Mechanics",
      "description": "Reconstructing full stored memory representations from partial or noisy retrieval cues.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t2_s2_d1",
      "label": "Attractor Basin Trajectory Convergence",
      "description": "Driving noisy input vectors toward the nearest stored memory attractor state.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t2_s2_d2",
      "label": "Recurrent Associative Retrieval Cycles",
      "description": "Iterating recurrent excitation cycles until stable pattern firing is achieved.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t2_s3",
      "label": "CA3 Storage Capacity Bounds (0.14 * N_neurons)",
      "description": "Theoretical memory capacity limits of auto-associative recurrent networks.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t2_s3_d1",
      "label": "Hopfield Capacity Formula C = N / (2 * ln(N))",
      "description": "Calculating maximum number of orthogonal memories retrievable without catastrophic interference.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t2_s3_d2",
      "label": "Sparse Coding Capacity Boost",
      "description": "Increasing pattern capacity dramatically by maintaining low active cell ratios (p < 0.02).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t2_s4",
      "label": "Mossy Fiber vs Recurrent Collateral Input Competition",
      "description": "Balancing new encoding (Mossy Fibers) against memory retrieval (Recurrent Collaterals).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t2_s4_d1",
      "label": "Acetylcholine Modulation of Recurrent Transmission",
      "description": "High ACh during exploration suppressing recurrent collaterals to favor encoding.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t2_s4_d2",
      "label": "Low ACh Transition Favoring Retrieval",
      "description": "Low ACh during quiet rest enabling recurrent collateral dynamics for retrieval.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t2_s5",
      "label": "Episodic Sequence Chaining via Asymmetric Hebbian Plasticity",
      "description": "Chaining temporal event sequences using time-asymmetric STDP on recurrent collaterals.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t2_s5_d1",
      "label": "Forward State Transition Matrix",
      "description": "Encoding sequential transitions A -> B -> C in directional recurrent weights.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t2_s5_d2",
      "label": "Phase Precession Sequence Replay",
      "description": "Replaying sequential events within single theta oscillation cycles.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t3",
      "label": "Place Cells & Entorhinal Grid Cells",
      "description": "Neural spatial representation system encoding physical location and cognitive maps.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t3_s1",
      "label": "CA1/CA3 Place Cell Place Fields",
      "description": "Pyramidal neurons firing selectively when an animal enters specific physical locations in an environment.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t3_s1_d1",
      "label": "Environment-Specific Re-mapping",
      "description": "Forming distinct orthogonal place field maps when entering novel environments.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t3_s1_d2",
      "label": "Multimodal Sensory & Path Integration Binding",
      "description": "Combining visual landmarks, self-motion cues, and boundary information.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t3_s2",
      "label": "Medial Entorhinal Cortex (MEC) Grid Cells",
      "description": "Neurons firing at multiple regularly spaced locations forming a periodic triangular/hexagonal tessellation.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t3_s2_d1",
      "label": "Hexagonal Grid Scale Modules",
      "description": "Organizing grid cells in discrete anatomical modules with increasing spatial grid wavelengths (30cm to 3m).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t3_s2_d2",
      "label": "Grid Orientation and Phase Parameters",
      "description": "Representing spatial position via continuous 2D coordinate system offsets.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t3_s3",
      "label": "Continuous Attractor Neural Network (CANN) Models",
      "description": "Neural network architecture maintaining smooth spatial representation manifolds.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t3_s3_d1",
      "label": "Local Excitatory / Surround Inhibitory Weight Matrix",
      "description": "Forming stable localized activity bumps in neural state space.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t3_s3_d2",
      "label": "Path Integration Velocity Updates",
      "description": "Shifting activity bumps across the network in response to head direction and speed signals.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t3_s4",
      "label": "Head Direction Cells & Border Cells",
      "description": "Complementary spatial neurons encoding directional heading and environmental boundaries.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t3_s4_d1",
      "label": "Postsubiculum Head Direction Tuning",
      "description": "Firing selectively when animal head orientation matches specific compass angles.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t3_s4_d2",
      "label": "MEC Border Cell Edge Detection",
      "description": "Firing when an animal is adjacent to physical boundaries or walls.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t3_s5",
      "label": "Cognitive Map Extension to Abstract Feature Spaces",
      "description": "Utilizing grid and place cell coding structures to map non-spatial conceptual knowledge.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t3_s5_d1",
      "label": "Abstract Concept & Semantic Traversal",
      "description": "Encoding multi-dimensional non-spatial feature spaces (e.g. bird neck length vs leg length).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t3_s5_d2",
      "label": "General Vector Inference & Relational Reasoning",
      "description": "Performing spatial-like vector arithmetic for abstract decision making.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t4",
      "label": "Theta Rhythms & Phase Precession",
      "description": "4-8Hz hippocampal LFP oscillations orchestrating temporal coding and memory consolidation.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t4_s1",
      "label": "Hippocampal Theta Oscillation Generation (4-8Hz)",
      "description": "Rhythmic local field potential generated by medial septal GABAergic pacemaker projections.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t4_s1_d1",
      "label": "Medial Septum Pacemaker Projections",
      "description": "Driving rhythmic inhibition onto hippocampal interneurons.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t4_s1_d2",
      "label": "Exploratory Behavior & REM Sleep Association",
      "description": "Prominent theta rhythm occurrence during active spatial navigation and REM sleep.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t4_s2",
      "label": "Theta Phase Precession Phenomenon",
      "description": "Place cells firing spikes at progressively earlier phases of the LFP theta cycle as an animal traverses a place field.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t4_s2_d1",
      "label": "Phase-Position Correlation",
      "description": "Encoding precise spatial location within theta phase timings beyond simple firing rates.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t4_s2_d2",
      "label": "Dual Rate-Phase Coding Scheme",
      "description": "Combining firing rate (distance to center) with firing phase (position within field).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t4_s3",
      "label": "Theta-Gamma Phase-Amplitude Coupling (PAC)",
      "description": "Cross-frequency coupling where fast gamma (30-90Hz) amplitude is modulated by slow theta phase.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t4_s3_d1",
      "label": "Gamma Slot Memory Capacity (7 ± 2 Items)",
      "description": "Fitting 5-9 individual gamma wave cycles inside a single theta wave period.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t4_s3_d2",
      "label": "Sequential Item Order Encoding",
      "description": "Encoding ordered multi-item sequences within single theta cycles.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t4_s4",
      "label": "Sharp-Wave Ripples (SWR) & Memory Replay",
      "description": "High-frequency (150-250Hz) transient LFP events during quiet rest and slow-wave sleep.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t4_s4_d1",
      "label": "CA3 Transient Population Bursts",
      "description": "Triggering massive depolarizing events originating in CA3 recurrent networks.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t4_s4_d2",
      "label": "Time-Compressed Forward & Reverse Replay (20x Speed)",
      "description": "Replaying daytime trajectory place cell sequences at 20x real-time speed.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t4_s5",
      "label": "System Memory Consolidation (Hippocampus to Neocortex)",
      "description": "Transferring temporary hippocampal memories to permanent neocortical storage networks.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t4_s5_d1",
      "label": "Triple Phase Locking (Cortical Slow Oscillation - Sleep Spindle - SWR)",
      "description": "Synchronizing neocortical slow waves, thalamic spindles, and hippocampal SWRs.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t4_s5_d2",
      "label": "Progressive Hippocampal Independence",
      "description": "Strengthening direct cortico-cortical connections until memories become independent of the hippocampus.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t5",
      "label": "Hippocampal Memory & Spatial Navigation Topic 5",
      "description": "Detailed first-principles mechanics for Hippocampal Memory & Spatial Navigation topic 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t5_s1",
      "label": "Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Hippocampal Memory & Spatial Navigation Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t5_s1_d1",
      "label": "Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t5_s1_d2",
      "label": "Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t5_s2",
      "label": "Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Hippocampal Memory & Spatial Navigation Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t5_s2_d1",
      "label": "Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t5_s2_d2",
      "label": "Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t5_s3",
      "label": "Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Hippocampal Memory & Spatial Navigation Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t5_s3_d1",
      "label": "Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t5_s3_d2",
      "label": "Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t5_s4",
      "label": "Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Hippocampal Memory & Spatial Navigation Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t5_s4_d1",
      "label": "Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t5_s4_d2",
      "label": "Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t5_s5",
      "label": "Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Hippocampal Memory & Spatial Navigation Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t5_s5_d1",
      "label": "Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t5_s5_d2",
      "label": "Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hippocampal Memory & Spatial Navigation Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t6",
      "label": "Hippocampal Memory & Spatial Navigation Topic 6",
      "description": "Detailed first-principles mechanics for Hippocampal Memory & Spatial Navigation topic 6.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t6_s1",
      "label": "Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Hippocampal Memory & Spatial Navigation Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t6_s1_d1",
      "label": "Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t6_s1_d2",
      "label": "Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t6_s2",
      "label": "Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Hippocampal Memory & Spatial Navigation Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t6_s2_d1",
      "label": "Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t6_s2_d2",
      "label": "Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t6_s3",
      "label": "Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Hippocampal Memory & Spatial Navigation Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t6_s3_d1",
      "label": "Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t6_s3_d2",
      "label": "Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t6_s4",
      "label": "Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Hippocampal Memory & Spatial Navigation Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t6_s4_d1",
      "label": "Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t6_s4_d2",
      "label": "Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t6_s5",
      "label": "Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Hippocampal Memory & Spatial Navigation Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t6_s5_d1",
      "label": "Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p3_t6_s5_d2",
      "label": "Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Hippocampal Memory & Spatial Navigation Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4",
      "label": "Prefrontal Cortex & Dopaminergic Reward",
      "description": "Working memory gating, dopamine Reward Prediction Error (RPE), reinforcement learning models, and executive control.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t1",
      "label": "Working Memory & Prefrontal Persistent Activity",
      "description": "Maintaining transient representations in active memory in the absence of external sensory input.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t1_s1",
      "label": "Dorsolateral PFC (dlPFC) Recurrent Microcircuits",
      "description": "Pyramidal cell networks maintaining persistent firing during delay periods in working memory tasks.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t1_s1_d1",
      "label": "Recurrent Excitatory NMDA-NR2B Connections",
      "description": "Sustaining elevated firing rates across seconds via slow NMDA receptor kinetics.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t1_s1_d2",
      "label": "Delay-Period Persistent Activity",
      "description": "Maintaining active neural representations of target locations during spatial delay tasks.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t1_s2",
      "label": "Miller's Law Capacity Limits (7 ± 2 / 4 Chunks)",
      "description": "Severe capacity constraints on simultaneous active items in working memory.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t1_s2_d1",
      "label": "Interneuron Lateral Mutual Inhibition Caps",
      "description": "Restricting total simultaneous active attractor pools via feedback interneuron pools.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t1_s2_d2",
      "label": "Chunking Compression Mechanics",
      "description": "Grouping individual items into higher-order conceptual chunks to maximize capacity.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t1_s3",
      "label": "PFC Gating & Basal Ganglia Control (PBWM Model)",
      "description": "Prefrontal-Basal Ganglia Working Memory model regulating active memory updates.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t1_s3_d1",
      "label": "Dynamic Input Gating (Selective Maintenance)",
      "description": "Opening input gates to update PFC working memory contents with relevant information.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t1_s3_d2",
      "label": "Output Gating (Selective Execution)",
      "description": "Opening output gates to read PFC working memory contents to drive downstream action selection.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t1_s4",
      "label": "D1 vs D2 Dopamine Receptor Modulation in PFC",
      "description": "Inverted-U relationship between PFC dopamine levels and working memory performance.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t1_s4_d1",
      "label": "D1 Receptor Robustness (Stabilizing Current Attractors)",
      "description": "Enhancing NMDA currents and recurrent excitation to protect working memory against distractors.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t1_s4_d2",
      "label": "D2 Receptor Flexibility (Enabling Rapid Updating)",
      "description": "Lowering energy barriers to allow rapid updating of working memory representations.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t1_s5",
      "label": "Executive Task Set Switching & Rule Encoding",
      "description": "Encoding abstract task rules and switching strategies dynamically based on context.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t1_s5_d1",
      "label": "Hierarchical Rule Abstraction (Rostro-Caudal PFC Axis)",
      "description": "Encoding low-level motor rules in caudal PFC and high-level abstract goals in rostral PFC.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t1_s5_d2",
      "label": "Switching Cost Delay (Cognitive Refractory Period)",
      "description": "Measuring reaction time penalties incurred when switching between active task sets.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t2",
      "label": "Dopamine Reward Prediction Error (RPE)",
      "description": "Midbrain dopamine neuron activity encoding discrepancies between expected and received rewards.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t2_s1",
      "label": "Schultz Midbrain Dopamine Experiments (VTA / SNc)",
      "description": "Electrophysiological recordings of ventral tegmental area dopamine neurons during conditioning.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t2_s1_d1",
      "label": "Unpredicted Reward Burst (R > 0 -> Firing Spike)",
      "description": "Dopamine neurons firing phasic bursts to unpredicted reward deliveries.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t2_s1_d2",
      "label": "Conditioned Stimulus Transfer (CS -> Firing Shift)",
      "description": "Shifting phasic dopamine response backward in time from reward delivery to predicting CS.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t2_s1_d3",
      "label": "Omitted Reward Dip (R = 0 Expected -> Pause in Firing)",
      "description": "Dopamine firing dropping below baseline when expected rewards are withheld.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t2_s2",
      "label": "RPE Mathematical Formula delta_t = R_t + gamma * V(S_{t+1}) - V(S_t)",
      "description": "Temporal Difference (TD) error equation driven by reward R_t and value updates V(S).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t2_s2_d1",
      "label": "Positive Prediction Error (delta > 0 -> Phasic Burst)",
      "description": "Signaling outcomes better than expected, driving LTP at active striatal synapses.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t2_s2_d2",
      "label": "Negative Prediction Error (delta < 0 -> Phasic Pause)",
      "description": "Signaling outcomes worse than expected, driving LTD at active striatal synapses.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t2_s3",
      "label": "Striatal Synaptic Plasticity Tripartite Rule",
      "description": "Dopamine-modulated plasticity at corticostriatal MSN synapses.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t2_s3_d1",
      "label": "D1-MSN Direct Pathway LTP (Reward Reinforcement)",
      "description": "Phasic dopamine bursts activating D1 receptors to induce LTP at active corticostriatal synapses.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t2_s3_d2",
      "label": "D2-MSN Indirect Pathway LTD (Punishment / Avoidance)",
      "description": "Dopamine pauses disinhibiting D2 receptors to modulate indirect pathway avoidance learning.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t2_s4",
      "label": "Phasic vs Tonic Dopamine Firing Modes",
      "description": "Distinguishing fast high-amplitude bursts from slow background extracellular concentrations.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t2_s4_d1",
      "label": "Phasic Bursts (Sub-Second High Amplitude > 1 uM)",
      "description": "Carrying rapid RPE teaching signals to update reinforcement learning weights.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t2_s4_d2",
      "label": "Tonic Baseline (10-20 Hz / 10-50 nM Concentration)",
      "description": "Regulating general motivation, vigor, and effort expenditure thresholds.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t2_s5",
      "label": "Actor-Critic Model Mapping in Basal Ganglia",
      "description": "Reinforcement learning architecture mapped to dorsal and ventral striatum anatomy.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t2_s5_d1",
      "label": "Ventral Striatum / Nucleus Accumbens (Critic)",
      "description": "Computing state value estimates V(S) and generating RPE signals delta.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t2_s5_d2",
      "label": "Dorsal Striatum / Caudate Putamen (Actor)",
      "description": "Storing action selection policy preferences pi(a|s) updated by RPE signals.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t3",
      "label": "Reinforcement Learning: Model-Based vs Model-Free",
      "description": "Dual computational decision-making systems operating in parallel within mammalian brains.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t3_s1",
      "label": "Model-Free Reinforcement Learning (Habitual Control)",
      "description": "Caching state-action values Q(s,a) directly without internal environmental transition models.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t3_s1_d1",
      "label": "Dorsolateral Striatum (DLS) Habit Circuitry",
      "description": "Driving fast, low-cost automatic habit execution resilient to outcome devaluation.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t3_s1_d2",
      "label": "TD-Learning & Q-Learning Algorithms",
      "description": "Updating cached values iteratively using experienced reward prediction errors.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t3_s2",
      "label": "Model-Based Reinforcement Learning (Goal-Directed Control)",
      "description": "Building explicit internal transition probability models P(s'|s,a) for forward planning.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t3_s2_d1",
      "label": "Dorsomedial Striatum (DMS) & PFC Circuitry",
      "description": "Evaluating action outcomes dynamically via internal tree search simulation.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t3_s2_d2",
      "label": "Sensitivity to Outcome Devaluation",
      "description": "Halting actions instantly when goal reward values are devalued (e.g. satiety).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t3_s3",
      "label": "Arbitrator Mechanism & Uncertainty-Based Tradeoffs",
      "description": "Balancing control between model-based and model-free systems based on relative uncertainty.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t3_s3_d1",
      "label": "Bayesian Uncertainty Estimation",
      "description": "Delegating control to model-based planning when environments are novel or shifting.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t3_s3_d2",
      "label": "Transition to Model-Free Habits Upon Over-Learning",
      "description": "Shifting control to fast model-free habits as task environments stabilize.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t3_s4",
      "label": "Successor Representation (SR) Hybrid Model",
      "description": "Predicting future state visitation counts M(s, s') = sum(gamma^t * P(s_t = s' | s_0 = s)).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t3_s4_d1",
      "label": "State Transition Feature Maps",
      "description": "Encoding predictive spatial and state maps without full tree search computation.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t3_s4_d2",
      "label": "Hippocampal Place Cell SR Mapping",
      "description": "Explaining place cell re-mapping and predictive firing via Successor Representation models.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t3_s5",
      "label": "Discount Factor gamma & Temporal Discounting",
      "description": "Devaluing future rewards as a function of temporal delay.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t3_s5_d1",
      "label": "Hyperbolic Discounting Equation V = R / (1 + k * Delay)",
      "description": "Modeling empirical human and animal preferences favoring immediate over delayed rewards.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t3_s5_d2",
      "label": "Ventral Striatum & Orbitofrontal Cortex (OFC) Delay Encoding",
      "description": "Encoding subjective discounted reward values in OFC and striatal activity.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t4",
      "label": "Orbitofrontal Cortex & Value-Based Decision Making",
      "description": "Encoding economic value, subjective preferences, and multi-attribute choices.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t4_s1",
      "label": "Economic Value Common Currency Hypothesis",
      "description": "OFC neurons encoding subjective choice values on a unified numerical scale to compare distinct goods.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t4_s1_d1",
      "label": "Comparing Incommensurable Goods (Juice vs Money)",
      "description": "Mapping different reward types onto single neural firing rate value scales.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t4_s1_d2",
      "label": "Menu-Independent Value Firing",
      "description": "Encoding option value independently of available alternative choices.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t4_s2",
      "label": "Cognitive Map of Task State Space",
      "description": "Representing un-observable task states and hidden environmental contexts.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t4_s2_d1",
      "label": "Unobservable State Disambiguation",
      "description": "Tracking progress through multi-step tasks lacking explicit sensory markers.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t4_s2_d2",
      "label": "State-Space Transition Topology",
      "description": "Encoding task graphs to guide credit assignment during reinforcement learning.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t4_s3",
      "label": "Ventromedial PFC (vmPFC) Integration & Choice Selection",
      "description": "Integrating cost, benefit, and probability metrics to select final choices.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t4_s3_d1",
      "label": "Drift-Diffusion Model (DDM) Neural Basis",
      "description": "Accumulating evidence ratios in vmPFC until decision boundaries are crossed.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t4_s3_d2",
      "label": "Willingness-to-Pay (WTP) Value Output",
      "description": "Predicting consumer bidding choices and financial trade-offs.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t4_s4",
      "label": "Regret & Counterfactual Comparison Signaling",
      "description": "Computing what-might-have-been outcomes by comparing chosen vs un-chosen option rewards.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t4_s4_d1",
      "label": "Counterfactual Prediction Errors",
      "description": "Updating choice preferences based on rewards received by un-selected options.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t4_s4_d2",
      "label": "Lateral OFC Regret Signal Generation",
      "description": "Firing signals proportional to difference between received reward and missed optimal reward.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t4_s5",
      "label": "Risk & Ambiguity Encoding (Basolateral Amygdala Coupling)",
      "description": "Distinguishing known statistical variance (risk) from unknown probability distributions (ambiguity).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t4_s5_d1",
      "label": "OFC-BLA Recurrent Circuit Value Encoding",
      "description": "Modulating value representations based on risk aversion and uncertainty.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t4_s5_d2",
      "label": "Ellsberg Paradox Neural Substrates",
      "description": "Activating anterior insula and OFC during ambiguous decision contexts.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t5",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 5",
      "description": "Detailed first-principles mechanics for Prefrontal Cortex & Dopaminergic Reward topic 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t5_s1",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Prefrontal Cortex & Dopaminergic Reward Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t5_s1_d1",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t5_s1_d2",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t5_s2",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Prefrontal Cortex & Dopaminergic Reward Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t5_s2_d1",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t5_s2_d2",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t5_s3",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Prefrontal Cortex & Dopaminergic Reward Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t5_s3_d1",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t5_s3_d2",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t5_s4",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Prefrontal Cortex & Dopaminergic Reward Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t5_s4_d1",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t5_s4_d2",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t5_s5",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Prefrontal Cortex & Dopaminergic Reward Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t5_s5_d1",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t5_s5_d2",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prefrontal Cortex & Dopaminergic Reward Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t6",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 6",
      "description": "Detailed first-principles mechanics for Prefrontal Cortex & Dopaminergic Reward topic 6.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t6_s1",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Prefrontal Cortex & Dopaminergic Reward Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t6_s1_d1",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t6_s1_d2",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t6_s2",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Prefrontal Cortex & Dopaminergic Reward Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t6_s2_d1",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t6_s2_d2",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t6_s3",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Prefrontal Cortex & Dopaminergic Reward Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t6_s3_d1",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t6_s3_d2",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t6_s4",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Prefrontal Cortex & Dopaminergic Reward Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t6_s4_d1",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t6_s4_d2",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t6_s5",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Prefrontal Cortex & Dopaminergic Reward Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t6_s5_d1",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p4_t6_s5_d2",
      "label": "Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Prefrontal Cortex & Dopaminergic Reward Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5",
      "label": "Neuromodulation, Sleep & Memory Consolidation",
      "description": "Biogenic amine systems, Slow-Wave Sleep (SWS) memory replay, thalamocortical spindles, and neuroplasticity.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t1",
      "label": "Neuromodulatory Systems (ACh, NE, 5-HT, DA)",
      "description": "Ascending subcortical projections releasing monoamines and acetylcholine to tune global brain state.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t1_s1",
      "label": "Acetylcholine (ACh) Basal Forebrain System",
      "description": "Regulating signal-to-noise ratio, attention, and sensory encoding vs internal retrieval states.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t1_s1_d1",
      "label": "Nucleus Basalis of Meynert Projections",
      "description": "Broadly innervating neocortex and hippocampus with cholinergic projections.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t1_s1_d2",
      "label": "High ACh Encoding Mode (Suppressing Recurrent Collaterals)",
      "description": "Suppressing intrinsic feedback to focus cortical networks on external sensory inputs.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t1_s2",
      "label": "Norepinephrine (NE) Locus Coeruleus System",
      "description": "Modulating wakefulness, arousal, environmental unexpected uncertainty, and gain.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t1_s2_d1",
      "label": "Locus Coeruleus (LC) Phasic vs Tonic Firing",
      "description": "Phasic NE bursts signaling unexpected environmental changes to reset task representations.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t1_s2_d2",
      "label": "Gain Modulation of Cortical Pyramidal Cells",
      "description": "Increasing neural input-output gain curve steepness to sharpen selectivity.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t1_s3",
      "label": "Serotonin (5-HT) Raphe Nuclei System",
      "description": "Regulating mood, impulse control, patience for delayed rewards, and harm aversion.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t1_s3_d1",
      "label": "Dorsal Raphe Nucleus Projections",
      "description": "Innervating forebrain targets to modulate behavioral inhibition.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t1_s3_d2",
      "label": "Promoting Patience for Delayed Rewards (5-HT1A/2A)",
      "description": "Increasing willingness to wait for delayed rewards during temporal discounting.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t1_s4",
      "label": "Volume Transmission & Paracrine Diffusion",
      "description": "Non-synaptic extrasynaptic diffusion of neuromodulators across micro-volume brain spaces.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t1_s4_d1",
      "label": "Extrasynaptic Varicosity Release Sites",
      "description": "Releasing neurotransmitters from axonal varicosities lacking classical postsynaptic partners.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t1_s4_d2",
      "label": "Slow Diffusive Time Constants (Seconds to Minutes)",
      "description": "Modulating large neural populations continuously over extended temporal windows.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t1_s5",
      "label": "Neuromodulatory State Switching (Wake, NREM, REM)",
      "description": "Dramatic shifts in monoamine and ACh balances defining sleep-wake stages.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t1_s5_d1",
      "label": "Wake State (High ACh, High NE, High 5-HT)",
      "description": "Supporting active sensory processing, attention, and episodic encoding.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t1_s5_d2",
      "label": "NREM Sleep State (Low ACh, Low NE, Low 5-HT)",
      "description": "Enabling hippocampal-to-neocortical memory consolidation.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t1_s5_d3",
      "label": "REM Sleep State (High ACh, Zero NE, Zero 5-HT)",
      "description": "Promoting emotional memory processing and creative associative synthesis.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t2",
      "label": "Slow-Wave Sleep (SWS) & System Consolidation",
      "description": "Replaying daytime memories during deep non-REM sleep to transfer representations to the neocortex.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t2_s1",
      "label": "Neocortical Slow Oscillations (< 1Hz)",
      "description": "Synchronized alternation of global cortical activity between active Up-states and silent Down-states.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t2_s1_d1",
      "label": "Cortical Up-States (Widespread Pyramidal Depolarization)",
      "description": "Window of high excitability driving downstream subcortical structures.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t2_s1_d2",
      "label": "Cortical Down-States (Hyperpolarized Silence)",
      "description": "Global neuronal silence allowing metabolic recovery and clearance.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t2_s2",
      "label": "Thalamic Sleep Spindles (11-16Hz)",
      "description": "Transient waxing-and-waning LFP bursts generated by reticular thalamic nucleus oscillations.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t2_s2_d1",
      "label": "Reticular Thalamic Nucleus Pacemaker Bursting",
      "description": "Rhythmic GABAergic bursting shaping thalamocortical relay activity.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t2_s2_d2",
      "label": "Phase-Locking to Slow Oscillation Up-State Peaks",
      "description": "Nesting spindles precisely within the depolarizing phase of cortical slow waves.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t2_s3",
      "label": "Triple Phase Synchronization Architecture",
      "description": "Precise temporal alignment of cortical slow waves, thalamic spindles, and hippocampal ripples.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t2_s3_d1",
      "label": "Hippocampal Ripple Nesting Inside Spindle Troughs",
      "description": "Aligning memory replay ripples to arrive during peak cortical plasticity windows.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t2_s3_d2",
      "label": "Coordinated Information Transfer Window",
      "description": "Facilitating synaptically targeted memory transfer from CA1 to neocortical ensembles.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t2_s4",
      "label": "Synaptic Homeostasis Hypothesis (SHY / Tononi & Cirelli)",
      "description": "Net downsizing of total synaptic strength during sleep to restore baseline energy and space.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t2_s4_d1",
      "label": "Waking Synaptic Net Potentiation Build-Up",
      "description": "Accumulating overall synaptic weight increases across waking learning sessions.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t2_s4_d2",
      "label": "Sleep-Dependent Global Synaptic Renormalization",
      "description": "Selectively pruning weak synapses while preserving strongly potentiated memory traces.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t2_s5",
      "label": "Glymphatic System Waste Clearance During SWS",
      "description": "Perivascular fluid clearance system flushing metabolic waste products from brain parenchyma.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t2_s5_d1",
      "label": "Astrocyte Aquaporin-4 (AQP4) Water Channels",
      "description": "Driving cerebrospinal fluid (CSF) flow through interstitial brain spaces.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t2_s5_d2",
      "label": "60% Increase in Interstitial Space Volume During SWS",
      "description": "Clearing beta-amyloid and tau proteins efficiently during deep slow-wave sleep.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t3",
      "label": "REM Sleep & Emotional Memory Processing",
      "description": "High-ACh paradoxical sleep stage processing emotional experiences and creative associations.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t3_s1",
      "label": "Desynchronized High-Frequency EEG (Paradoxical Sleep)",
      "description": "Wake-like low-amplitude fast EEG activity occurring alongside total muscle atonia.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t3_s1_d1",
      "label": "Pontine-Geniculate-Occipital (PGO) Waves",
      "description": "Transient phasic spikes propagating from pons through lateral geniculate to occipital cortex.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t3_s1_d2",
      "label": "Sublaterodorsal Nucleus (SLD) Muscle Atonia Engine",
      "description": "Hyperpolarizing spinal motor neurons to prevent physical acting out of dreams.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t3_s2",
      "label": "Amygdala-Limbic Activation & Monoamine Suppression",
      "description": "High activation in limbic emotional centers occurring in complete absence of noradrenergic tone.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t3_s2_d1",
      "label": "Uncoupling Emotion from Memory Traces (SF-EM Model)",
      "description": "Replaying emotional experiences to strip away distressing affective tone while preserving factual data.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t3_s2_d2",
      "label": "PTSD Failure of REM Emotional Processing",
      "description": "Disrupted REM sleep leading to persistent un-softened emotional trauma memories.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t3_s3",
      "label": "Associative Synthesis & Creative Problem Solving",
      "description": "Re-combining distant memory representations to discover non-obvious relational structures.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t3_s3_d1",
      "label": "Unconstrained Neocortical Associative Spreading",
      "description": "High ACh enabling broad un-guided spreading activation across cortical networks.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t3_s3_d2",
      "label": "Enhanced Performance on Remote Associates Tests",
      "description": "Achieving creative insights following periods containing REM sleep.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t3_s4",
      "label": "Dreaming & Generative Neural World Models",
      "description": "Simulating synthetic perceptual environments to train and regularize internal brain models.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t3_s4_d1",
      "label": "Internal Generative Model Un-Supervised Training",
      "description": "Generating synthetic experiences to prevent overfitting to recent waking events.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t3_s4_d2",
      "label": "Predictive Processing Model Calibration",
      "description": "Testing internal prior expectations against self-generated sensory simulations.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t3_s5",
      "label": "Targeted Memory Reactivation (TMR) Interventions",
      "description": "Experimentally triggering specific memory replay by presenting auditory/olfactory cues during sleep.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t3_s5_d1",
      "label": "Auditory Cue Presentation in NREM Sleep",
      "description": "Playing sound cues associated with daytime learning to boost post-sleep recall performance.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t3_s5_d2",
      "label": "Selective Memory Trace Strengthening",
      "description": "Enhancing specific memory consolidation without affecting un-cued associations.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t4",
      "label": "Neuroplasticity & Adult Neurogenesis Dynamics",
      "description": "Structural and functional adaptation of brain circuits across lifespan development.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t4_s1",
      "label": "Ocular Dominance Column Plasticity & Critical Periods",
      "description": "Classic Hubel & Wiesel paradigm demonstrating experience-dependent cortical rewiring during developmental windows.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t4_s1_d1",
      "label": "Monocular Deprivation Shifts",
      "description": "Shifting visual cortex responsiveness entirely toward the open non-deprived eye.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t4_s1_d2",
      "label": "Perineuronal Net (PNN) Critical Period Closure",
      "description": "Wrapping parvalbumin interneurons in PNN extracellular matrix structures to lock mature circuit architecture.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t4_s2",
      "label": "Dendritic Spine Turnover & Structural Dynamics",
      "description": "Continuous formation, maturation, and elimination of dendritic spines in response to experience.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t4_s2_d1",
      "label": "Thin Spines (Learning) vs Mushroom Spines (Memory)",
      "description": "Converting small transient thin spines into stable large mushroom spines containing dense PSDs.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t4_s2_d2",
      "label": "Actin Cytoskeleton Remodeling (Cofilin / Rac1)",
      "description": "Re-organizing filamentous actin to expand or shrink spine head volumes.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t4_s3",
      "label": "Subventricular Zone (SVZ) & Subgranular Zone (SGZ) Neurogenesis",
      "description": "Primary germinal niches producing new functional neurons in adult mammalian brains.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t4_s3_d1",
      "label": "Rostral Migratory Stream (RMS) to Olfactory Bulb",
      "description": "Migrating neural progenitor cells from SVZ along the RMS into olfactory circuits.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t4_s3_d2",
      "label": "Dentate Gyrus Integration & Functional Maturation",
      "description": "Integrating new granule cells into hippocampal trisynaptic circuits over 4-8 weeks.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t4_s4",
      "label": "Brain-Derived Neurotrophic Factor (BDNF) & TrkB Signaling",
      "description": "Key growth factor promoting neuronal survival, synaptic growth, and long-term memory formation.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t4_s4_d1",
      "label": "TrkB Receptor Tyrosine Kinase Dimerization",
      "description": "Activating Ras/MAPK and PI3K/Akt survival and growth pathways.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t4_s4_d2",
      "label": "Exercise-Induced BDNF Expression Boosts",
      "description": "Increasing hippocampal BDNF transcription via physical exercise to enhance cognitive plasticity.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t4_s5",
      "label": "Environmental Enrichment & Cognitive Reserve",
      "description": "Structural brain changes induced by complex sensory, physical, and social environments.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t4_s5_d1",
      "label": "Increased Dendritic Branching & Synaptic Density",
      "description": "Expanding cortical thickness and spine counts through multi-modal stimulation.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t4_s5_d2",
      "label": "Cognitive Reserve Resilience Against Neurodegeneration",
      "description": "Delaying clinical onset of Alzheimer's symptoms via dense compensatory neural networks.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t5",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 5",
      "description": "Detailed first-principles mechanics for Neuromodulation, Sleep & Memory Consolidation topic 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t5_s1",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Neuromodulation, Sleep & Memory Consolidation Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t5_s1_d1",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t5_s1_d2",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t5_s2",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Neuromodulation, Sleep & Memory Consolidation Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t5_s2_d1",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t5_s2_d2",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t5_s3",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Neuromodulation, Sleep & Memory Consolidation Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t5_s3_d1",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t5_s3_d2",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t5_s4",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Neuromodulation, Sleep & Memory Consolidation Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t5_s4_d1",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t5_s4_d2",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t5_s5",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Neuromodulation, Sleep & Memory Consolidation Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t5_s5_d1",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t5_s5_d2",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Neuromodulation, Sleep & Memory Consolidation Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t6",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 6",
      "description": "Detailed first-principles mechanics for Neuromodulation, Sleep & Memory Consolidation topic 6.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t6_s1",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Neuromodulation, Sleep & Memory Consolidation Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t6_s1_d1",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t6_s1_d2",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t6_s2",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Neuromodulation, Sleep & Memory Consolidation Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t6_s2_d1",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t6_s2_d2",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t6_s3",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Neuromodulation, Sleep & Memory Consolidation Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t6_s3_d1",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t6_s3_d2",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t6_s4",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Neuromodulation, Sleep & Memory Consolidation Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t6_s4_d1",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t6_s4_d2",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t6_s5",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Neuromodulation, Sleep & Memory Consolidation Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t6_s5_d1",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p5_t6_s5_d2",
      "label": "Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Neuromodulation, Sleep & Memory Consolidation Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6",
      "label": "Visual Cortex & Receptive Field Hierarchies",
      "description": "V1 orientation columns, Hubel-Wiesel simple/complex cells, ventral/dorsal streams, and predictive coding.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t1",
      "label": "Primary Visual Cortex (V1) Functional Architecture",
      "description": "Retinotopic organization, orientation columns, ocular dominance, and cytochrome oxidase blobs.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t1_s1",
      "label": "Hubel & Wiesel Simple Cell Receptive Fields",
      "description": "V1 simple cells responding to oriented light-dark bars in specific spatial locations.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t1_s1_d1",
      "label": "On/Off Sub-Region Spatial Arrangement",
      "description": "Arranging excitatory and inhibitory sub-regions in parallel bar configurations.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t1_s1_d2",
      "label": "LGN Center-Surround Input Summation",
      "description": "Summing aligned feedforward inputs from multiple lateral geniculate nucleus (LGN) cells.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t1_s2",
      "label": "V1 Complex Cells & Translation Invariance",
      "description": "Complex cells responding to oriented bars anywhere within receptive fields regardless of exact position.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t1_s2_d1",
      "label": "Non-Linear Pooling of Simple Cell Inputs",
      "description": "Pooling outputs of multiple simple cells with identical orientation preference.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t1_s2_d2",
      "label": "Phase-Invariant Orientation Selectivity",
      "description": "Achieving position-independent edge detection.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t1_s3",
      "label": "Orientation Hypercolumns & Pinwheel Centers",
      "description": "Organizing 360-degree orientation preferences in radial pinwheel structures across cortical columns.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t1_s3_d1",
      "label": "1mm^2 Cortical Hypercolumn Units",
      "description": "Packing a full set of orientation preferences and both eye ocular dominance columns into 1mm^2 patches.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t1_s3_d2",
      "label": "Singularity Pinwheel Centers",
      "description": "Converging point singularities where all orientation preference columns meet.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t1_s4",
      "label": "Ocular Dominance Columns & Cytochrome Oxidase Blobs",
      "description": "Alternating stripes receiving inputs from left vs right eye, interleaved with color processing blobs.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t1_s4_d1",
      "label": "Layer 4C Monocular Input Stripes",
      "description": "Segregating left and right eye inputs in layer 4C before binocular integration.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t1_s4_d2",
      "label": "Cytochrome Oxidase Blobs (Wavelength Sensitivity)",
      "description": "Enzyme-rich cylindrical columns processing color wavelength information.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t1_s5",
      "label": "Spatial Frequency Tuning & Gabor Filter Models",
      "description": "Modeling V1 receptive fields as localized 2D Gabor wavelet filters.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t1_s5_d1",
      "label": "Gabor Filter Equation G(x,y; lambda, theta, psi, sigma, gamma)",
      "description": "Multiplying Gaussian envelope by sinusoidal planar wave to model V1 receptive fields.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t1_s5_d2",
      "label": "Sparse Coding Efficiency Optimization",
      "description": "Demonstrating that Gabor-like filters emerge naturally when optimizing sparse coding for natural images.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t2",
      "label": "Dual Stream Visual Processing Architecture",
      "description": "Divergence of visual processing into ventral (\"What\") and dorsal (\"Where/How\") cortical streams.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t2_s1",
      "label": "Ventral Stream (V1 -> V2 -> V4 -> IT) \"What\" Pathway",
      "description": "Processing object identity, form, color, and complex visual scene features.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t2_s1_d1",
      "label": "Inferotemporal (IT) Cortex Object Representation",
      "description": "Encoding complex 3D shapes and category objects in high-level distributed neural codes.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t2_s1_d2",
      "label": "Hierarchical Feature Abstraction",
      "description": "Increasing receptive field sizes and feature complexity along the ventral hierarchy.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t2_s2",
      "label": "Dorsal Stream (V1 -> V2 -> MT/V5 -> 7a) \"Where / How\" Pathway",
      "description": "Processing visual motion, spatial location, and guiding motor interactions with objects.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t2_s2_d1",
      "label": "Area MT / V5 Direction-Selective Motion Processing",
      "description": "Encoding directional visual motion vectors and optic flow patterns.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t2_s2_d2",
      "label": "Visuomotor Coordinate Transformations for Action",
      "description": "Transforming retinotopic visual coordinates into body-centered coordinates for reaching.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t2_s3",
      "label": "Fusiform Face Area (FFA) & Specialized Modules",
      "description": "Specialized ventral temporal cortex region dedicated to holistic face perception.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t2_s3_d1",
      "label": "Holistic Face Processing (Prosopagnosia Deficits)",
      "description": "Processing facial feature configurations as unified holistic wholes.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t2_s3_d2",
      "label": "Expertise Hypothesis Controversies",
      "description": "Debating whether FFA is face-specific or an expert visual fine-grained discrimination module.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t2_s4",
      "label": "V4 Color Constancy & Form Processing",
      "description": "Computing true object surface reflectance colors regardless of ambient lighting conditions.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t2_s4_d1",
      "label": "Retinex Algorithm Color Constancy Implementation",
      "description": "Comparing local target spectrum against surrounding global scene illuminants.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t2_s4_d2",
      "label": "Intermediate Shape Boundary Curvature Tuning",
      "description": "Encoding complex curved boundaries and surface orientations.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t2_s5",
      "label": "Cross-Stream Interaction & Visual Attention Modulation",
      "description": "Top-down modulation connecting dorsal spatial attention with ventral object processing.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t2_s5_d1",
      "label": "Parietal Spatial Attention Bias (Frontoparietal Network)",
      "description": "Directing ventral stream processing toward spatially attended locations.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t2_s5_d2",
      "label": "Feature-Based Attention Amplification",
      "description": "Enhancing gain of cortical neurons tuned to target features across the visual field.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t3",
      "label": "Predictive Coding & Hierarchical Processing",
      "description": "Bayesian brain framework where higher cortical areas send predictions down, and lower areas send error signals up.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t3_s1",
      "label": "Top-Down Predictions vs Bottom-Up Prediction Errors",
      "description": "Replacing pure feedforward feature extraction with active predictive processing.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t3_s1_d1",
      "label": "Top-Down Generative Predictions (P_top -> P_low)",
      "description": "Projecting expected sensory states from higher to lower cortical layers.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t3_s1_d2",
      "label": "Bottom-Up Prediction Error Propagation (PE = Real - Pred)",
      "description": "Transmitting only unexplained residual discrepancy signals up the hierarchy.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t3_s2",
      "label": "Deep Layer vs Superficial Layer Cortical Mapping",
      "description": "Mapping predictive coding components to distinct anatomical cortical layers.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t3_s2_d1",
      "label": "Deep Layers (V/VI) Generative Prediction Projection",
      "description": "Originating top-down prediction signals in deep layer pyramidal cells.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t3_s2_d2",
      "label": "Superficial Layers (II/III) Prediction Error Forwarding",
      "description": "Originating bottom-up prediction error signals in superficial layer cells.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t3_s3",
      "label": "Precision Weighting & Modulatory Attention",
      "description": "Scaling prediction error gain based on estimated environmental signal reliability (precision).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t3_s3_d1",
      "label": "Precision Parameter gamma = 1 / Variance",
      "description": "Amplifying high-precision prediction errors while ignoring noisy low-precision signals.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t3_s3_d2",
      "label": "Cholinergic & Dopaminergic Precision Gain Control",
      "description": "Modulating superficial layer pyramidal cell gain via acetylcholine and dopamine.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t3_s4",
      "label": "Free Energy Principle (Friston Architecture)",
      "description": "Mathematical formulation asserting that brains minimize variational free energy to maintain homeostasis.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t3_s4_d1",
      "label": "Variational Free Energy Upper Bound on Surprise",
      "description": "Minimizing free energy F = Accuracy + Complexity to avoid surprising states.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t3_s4_d2",
      "label": "Active Inference (Action Changing Sensory Inputs)",
      "description": "Executing motor actions to alter sensory inputs so they match internal predictions.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t3_s5",
      "label": "Visual Illusions as Optimal Bayesian Inference",
      "description": "Explaining visual illusions as rational inferences driven by strong prior expectations.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t3_s5_d1",
      "label": "Kanizsa Triangle & Illusory Contours",
      "description": "Generating top-down edge predictions in V1/V2 despite missing physical light contrast.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t3_s5_d2",
      "label": "Bayesian Prior Overriding Weak Sensory Evidence",
      "description": "Perceiving ambiguous stimuli according to most probable prior world models.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t4",
      "label": "Object Recognition & Invariant Representations",
      "description": "Computing position, scale, and rotation invariant object representations across visual cortex layers.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t4_s1",
      "label": "HMAX Computational Model of Cortex (Riesenhuber & Poggio)",
      "description": "Hierarchical model alternating S (Simple / Convolution) and C (Complex / Max-Pooling) layers.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t4_s1_d1",
      "label": "S1 -> C1 -> S2 -> C2 Layer Stacking",
      "description": "Building complex invariant tuning via alternating template matching and max-pooling.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t4_s1_d2",
      "label": "Max-Pooling Operation (C-Layers)",
      "description": "Selecting maximum input line to achieve position and scale invariance.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t4_s2",
      "label": "Untangling Non-Linear Manifolds (DiCarlo Hypothesis)",
      "description": "Transforming complex non-linear image manifolds into linearly separable representations in IT cortex.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t4_s2_d1",
      "label": "High-Dimensional Population Vector Untangling",
      "description": "Flattening non-linear image variation manifolds across IT population response vectors.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t4_s2_d2",
      "label": "Linear Readout Availability for Decision Layers",
      "description": "Enabling downstream prefrontal classifiers to separate object categories using linear hyperplanes.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t4_s3",
      "label": "Distributed Population Coding in IT Cortex",
      "description": "Encoding individual objects via coarse responses across millions of broadly tuned IT neurons.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t4_s3_d1",
      "label": "Vector State Space Object Identity",
      "description": "Representing specific faces or objects as unique direction vectors in high-dimensional space.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t4_s3_d2",
      "label": "High Capacity & Fault-Tolerant Degraded Memory",
      "description": "Retaining accurate category identification despite loss of individual neurons.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t4_s4",
      "label": "Foveal vs Peripheral Receptive Field Scaling",
      "description": "Disproportionate cortical allocation to high-acuity foveal visual inputs.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t4_s4_d1",
      "label": "Cortical Magnification Factor M(r) = M_0 / (1 + r/r_0)",
      "description": "Allocating vastly larger cortical areas per degree of visual angle to the center of gaze.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t4_s4_d2",
      "label": "Saccadic Eye Movement Target Selection",
      "description": "Guiding high-speed saccades to bring informative scene regions onto the high-resolution fovea.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t4_s5",
      "label": "Deep Convolutional Neural Network (DCNN) Alignment",
      "description": "Comparing internal representations of artificial DCNNs (ResNet, AlexNet) to primate visual cortex.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t4_s5_d1",
      "label": "Layer-by-Layer Representation Matching",
      "description": "Demonstrating that early DCNN layers match V1, while deep layers match IT cortex representations.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t4_s5_d2",
      "label": "Brain-Score Benchmark Evaluation",
      "description": "Evaluating artificial neural network fidelity in predicting biological neural firing responses.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t5",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 5",
      "description": "Detailed first-principles mechanics for Visual Cortex & Receptive Field Hierarchies topic 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t5_s1",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Visual Cortex & Receptive Field Hierarchies Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t5_s1_d1",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t5_s1_d2",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t5_s2",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Visual Cortex & Receptive Field Hierarchies Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t5_s2_d1",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t5_s2_d2",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t5_s3",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Visual Cortex & Receptive Field Hierarchies Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t5_s3_d1",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t5_s3_d2",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t5_s4",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Visual Cortex & Receptive Field Hierarchies Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t5_s4_d1",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t5_s4_d2",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t5_s5",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Visual Cortex & Receptive Field Hierarchies Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t5_s5_d1",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t5_s5_d2",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Visual Cortex & Receptive Field Hierarchies Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t6",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 6",
      "description": "Detailed first-principles mechanics for Visual Cortex & Receptive Field Hierarchies topic 6.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t6_s1",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Visual Cortex & Receptive Field Hierarchies Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t6_s1_d1",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t6_s1_d2",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t6_s2",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Visual Cortex & Receptive Field Hierarchies Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t6_s2_d1",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t6_s2_d2",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t6_s3",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Visual Cortex & Receptive Field Hierarchies Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t6_s3_d1",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t6_s3_d2",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t6_s4",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Visual Cortex & Receptive Field Hierarchies Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t6_s4_d1",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t6_s4_d2",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t6_s5",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Visual Cortex & Receptive Field Hierarchies Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t6_s5_d1",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p6_t6_s5_d2",
      "label": "Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Visual Cortex & Receptive Field Hierarchies Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7",
      "label": "Motor Control & Basal Ganglia Loops",
      "description": "Direct vs Indirect striatal pathways, cerebellar forward models, motor cortex tuning, and movement execution.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t1",
      "label": "Basal Ganglia Direct & Indirect Pathways",
      "description": "Dual striatal pathways selecting authorized actions while suppressing competing motor programs.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t1_s1",
      "label": "Direct Pathway (Go Signal / Action Facilitation)",
      "description": "Cortex -> Striatum (D1) -> GPi/SNr (Dis-inhibition) -> Thalamus -> Cortex movement initiation loop.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t1_s1_d1",
      "label": "D1-MSN Medium Spiny Neuron Activation",
      "description": "Exciting D1-receptors to inhibit the internal segment of Globus Pallidus (GPi).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t1_s1_d2",
      "label": "Thalamic Dis-inhibition & Motor Burst",
      "description": "Releasing thalamic motor nuclei from tonic GPi inhibition, enabling cortical motor execution.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t1_s2",
      "label": "Indirect Pathway (No-Go Signal / Action Suppression)",
      "description": "Cortex -> Striatum (D2) -> GPe -> STN -> GPi (Excitation) -> Thalamus (Inhibition) loop.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t1_s2_d1",
      "label": "Subthalamic Nucleus (STN) Glutamatergic Drive",
      "description": "Exciting GPi to increase tonic inhibition onto thalamic motor targets.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t1_s2_d2",
      "label": "Surround Suppression of Competing Actions",
      "description": "Inhibiting unwanted alternative motor programs during target movement execution.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t1_s3",
      "label": "Hyperdirect Pathway (Emergency Stop Signal)",
      "description": "Direct Cortex -> STN projection bypassing striatum for fast global movement cancellation.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t1_s3_d1",
      "label": "Ultra-Fast Subthalamic Nucleus Excitation",
      "description": "Exciting STN within 10-15ms to rapidly clamp all thalamic motor outputs.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t1_s3_d2",
      "label": "Stop-Signal Task Action Cancellation",
      "description": "Canceling initiated motor responses when sudden stop cues appear.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t1_s4",
      "label": "Parkinson's Disease Pathology (SNc Dopamine Loss)",
      "description": "Degeneration of substantia nigra pars compacta dopamine neurons disrupting pathway balance.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t1_s4_d1",
      "label": "Pathological Indirect Pathway Dominance",
      "description": "Losing D1 excitation and D2 inhibition, causing excessive GPi output and thalamic inhibition.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t1_s4_d2",
      "label": "Akinesia, Bradykinesia, and Tremor Symptoms",
      "description": "Inability to initiate voluntary movements due to persistent motor thalamus clamping.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t1_s5",
      "label": "Deep Brain Stimulation (DBS) Mechanics",
      "description": "High-frequency (130Hz) electrical stimulation of STN or GPi overriding pathological beta oscillations.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t1_s5_d1",
      "label": "Pathological Beta Band (13-30Hz) Suppression",
      "description": "Disrupting synchronized low-frequency oscillations causing motor freezing.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t1_s5_d2",
      "label": "Restoration of Thalamocortical Information Flow",
      "description": "Re-establishing functional motor initiation capability in Parkinson's patients.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t2",
      "label": "Cerebellar Architecture & Motor Error Correction",
      "description": "Cerebellar cortex circuitry computing internal forward models and fine motor coordination.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t2_s1",
      "label": "Purkinje Cell & Parallel Fiber Circuitry",
      "description": "Massive dendritic Purkinje cells receiving 200,000 parallel fiber inputs from granule cells.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t2_s1_d1",
      "label": "Inhibitory Purkinje Cell Output to Deep Nuclei",
      "description": "Providing sole inhibitory output from cerebellar cortex to deep cerebellar nuclei.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t2_s1_d2",
      "label": "Parallel Fiber High-Capacity Matrix",
      "description": "Distributing mossy fiber context inputs across vast parallel fiber arrays.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t2_s2",
      "label": "Climbing Fiber Error Signals (Inferior Olive)",
      "description": "Single climbing fibers wrapping Purkinje cells, driving massive complex spike depolarization events.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t2_s2_d1",
      "label": "Complex Spike All-or-None Bursting (1Hz)",
      "description": "Injecting large Ca2+ influxes that signal physical motor execution errors.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t2_s2_d2",
      "label": "Parallel Fiber LTD Induction (Motor Learning)",
      "description": "Depressing parallel fiber-Purkinje synapses active during climbing fiber error spikes.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t2_s3",
      "label": "Forward Internal Models & State Prediction",
      "description": "Simulating mechanical consequences of motor commands prior to sensory feedback arrival.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t2_s3_d1",
      "label": "Efference Copy Input Reception",
      "description": "Receiving copy of motor command to predict expected sensory outcome.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t2_s3_d2",
      "label": "Sensory Prediction Error Computation (Real - Predicted)",
      "description": "Comparing predicted sensory feedback against actual incoming sensory signals.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t2_s4",
      "label": "Feedforward Motor Control & Delay Compensation",
      "description": "Overcoming slow peripheral nerve conduction delays (~50-100ms) using predictive control.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t2_s4_d1",
      "label": "Predictive Ballistic Movement Trajectories",
      "description": "Generating precise smooth motor trajectories without waiting for mid-flight sensory feedback.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t2_s4_d2",
      "label": "Ataxia & Intention Tremor Deficits",
      "description": "Loss of smooth coordination following cerebellar damage, resulting in jerky dysmetria.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t2_s5",
      "label": "Marr-Albus-Ito Theory of Cerebellar Learning",
      "description": "Classical computational model framing the cerebellum as a supervised pattern recognition engine.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t2_s5_d1",
      "label": "Supervised Learning Matrix Mapping",
      "description": "Using climbing fibers as teacher signals to update parallel fiber synaptic weights.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t2_s5_d2",
      "label": "Adaptation of Vestibulo-Ocular Reflex (VOR)",
      "description": "Adjusting eye movement gain automatically to maintain stable gaze during head motion.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t3",
      "label": "Primary Motor Cortex (M1) Population Coding",
      "description": "Representation of movement parameters across distributed populations of M1 neurons.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t3_s1",
      "label": "Preferred Direction Tuning Curves",
      "description": "Single M1 pyramidal neurons firing maximally for reaching movements in specific spatial directions.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t3_s1_d1",
      "label": "Cosine Tuning Curve Formula f(theta) = b + k * cos(theta - theta_pref)",
      "description": "Modeling firing rate changes as a cosine function of movement angle offset.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t3_s1_d2",
      "label": "Broad Directional Tuning Widths",
      "description": "Demonstrating that single neurons participate in movements across wide angular ranges.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t3_s2",
      "label": "Georgopoulos Population Vector Algorithm",
      "description": "Extracting exact reaching movement directions by summing weighted directional vectors across a population.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t3_s2_d1",
      "label": "Population Vector Sum P = sum(w_i * u_i)",
      "description": "Multiplying each neuron's unit preferred vector u_i by its current firing rate w_i.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t3_s2_d2",
      "label": "High-Precision Directional Prediction",
      "description": "Predicting actual physical arm movement trajectories with near-perfect accuracy.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t3_s3",
      "label": "Dynamic Muscle Force vs Kinematic Spatial Coding",
      "description": "Debate resolving whether M1 encodes low-level muscle forces or high-level spatial movement goals.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t3_s3_d1",
      "label": "Mixed Kinematic-Dynamic Population Codes",
      "description": "Encoding joint angles and velocity alongside muscle activation forces.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t3_s3_d2",
      "label": "Reference Frame Transformations",
      "description": "Converting extrinsic Cartesian target space coordinates into intrinsic joint-torque commands.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t3_s4",
      "label": "Corticospinal (Pyramidal) Tract Direct Projections",
      "description": "Direct monosynaptic projections from layer V M1 Betz cells to spinal alpha motor neurons.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t3_s4_d1",
      "label": "Betz Giant Pyramidal Cells",
      "description": "Conducting high-speed motor signals down spinal cord white matter tracts.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t3_s4_d2",
      "label": "Fine Fractionated Finger Control",
      "description": "Enabling independent individual finger movement control in primates.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t3_s5",
      "label": "Brain-Computer Interfaces (BCI) Motor Decoding",
      "description": "Decoding intention vectors from implanted multi-electrode arrays (Utah Array) to drive robotic limbs.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t3_s5_d1",
      "label": "Kalman Filter & Ridge Regression Decoders",
      "description": "Decoding real-time population vectors to drive prosthetic arms or computer cursors.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t3_s5_d2",
      "label": "Closed-Loop Somatosensory Feedback Restoration",
      "description": "Injecting intracortical microstimulation (ICMS) into S1 to restore touch sensations.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t4",
      "label": "Premotor & Supplementary Motor Areas (SMA)",
      "description": "Higher-level motor areas planning complex movement sequences and internal motor preparation.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t4_s1",
      "label": "Premotor Cortex (PMC) Externally-Cued Action Planning",
      "description": "Planning movements guided by external visual or auditory cues.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t4_s1_d1",
      "label": "Set-Related Preparatory Activity",
      "description": "Firing elevated preparatory activity during instruction delays before movement execution signals arrive.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t4_s1_d2",
      "label": "Visuomotor Arbitrary Mapping Rules",
      "description": "Mapping abstract visual symbols (e.g. red light) to specific motor responses (e.g. press left button).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t4_s2",
      "label": "Supplementary Motor Area (SMA) Internally-Generated Sequences",
      "description": "Planning and executing self-initiated, complex learned movement sequences.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t4_s2_d1",
      "label": "Sequential Element Firing Nodes",
      "description": "Firing selectively during specific transitions within complex multi-step sequences (e.g. step 3 of 5).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t4_s2_d2",
      "label": "Mental Rehearsal Firing (Motor Imagery)",
      "description": "Activating SMA during internal mental rehearsal of complex movements without physical execution.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t4_s3",
      "label": "Mirror Neuron System (Ventral Premotor / F5)",
      "description": "Neurons firing both when performing a goal-directed action and when observing another performing the same action.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t4_s3_d1",
      "label": "Action Understanding & Goal Inference",
      "description": "Encoding motor intentions and goal outcomes of observed actions.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t4_s3_d2",
      "label": "Strict vs Broad Congruence Mirroring",
      "description": "Matching observed actions to precise internal motor execution programs.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t4_s4",
      "label": "Readiness Potential (Bereitschaftspotential)",
      "description": "Slow negative EEG potential buildup over SMA preceding voluntary self-initiated movement by 1-2 seconds.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t4_s4_d1",
      "label": "Unconscious Motor Preparation Buildup",
      "description": "Demonstrating motor preparation onset prior to conscious awareness of decision to move (Libet experiments).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t4_s4_d2",
      "label": "Veto Control (\"Free Won't\") Interception Window",
      "description": "Window of conscious control allowing inhibition of pre-prepared actions right before execution.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t4_s5",
      "label": "Corticocortical Inter-Area Motor Coordination",
      "description": "Dense reciprocal connections linking parietal, premotor, and primary motor regions.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t4_s5_d1",
      "label": "Frontoparietal Reaching & Grasping Networks",
      "description": "Transforming visual object shape into appropriate hand grip postures (parietal AIP to premotor F5).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t4_s5_d2",
      "label": "Dynamic Inter-Area Coherence",
      "description": "Synchronizing local field potential gamma oscillations between communicating motor areas.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t5",
      "label": "Motor Control & Basal Ganglia Loops Topic 5",
      "description": "Detailed first-principles mechanics for Motor Control & Basal Ganglia Loops topic 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t5_s1",
      "label": "Motor Control & Basal Ganglia Loops Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Motor Control & Basal Ganglia Loops Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t5_s1_d1",
      "label": "Motor Control & Basal Ganglia Loops Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motor Control & Basal Ganglia Loops Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t5_s1_d2",
      "label": "Motor Control & Basal Ganglia Loops Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motor Control & Basal Ganglia Loops Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t5_s2",
      "label": "Motor Control & Basal Ganglia Loops Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Motor Control & Basal Ganglia Loops Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t5_s2_d1",
      "label": "Motor Control & Basal Ganglia Loops Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motor Control & Basal Ganglia Loops Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t5_s2_d2",
      "label": "Motor Control & Basal Ganglia Loops Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motor Control & Basal Ganglia Loops Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t5_s3",
      "label": "Motor Control & Basal Ganglia Loops Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Motor Control & Basal Ganglia Loops Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t5_s3_d1",
      "label": "Motor Control & Basal Ganglia Loops Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motor Control & Basal Ganglia Loops Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t5_s3_d2",
      "label": "Motor Control & Basal Ganglia Loops Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motor Control & Basal Ganglia Loops Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t5_s4",
      "label": "Motor Control & Basal Ganglia Loops Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Motor Control & Basal Ganglia Loops Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t5_s4_d1",
      "label": "Motor Control & Basal Ganglia Loops Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motor Control & Basal Ganglia Loops Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t5_s4_d2",
      "label": "Motor Control & Basal Ganglia Loops Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motor Control & Basal Ganglia Loops Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t5_s5",
      "label": "Motor Control & Basal Ganglia Loops Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Motor Control & Basal Ganglia Loops Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t5_s5_d1",
      "label": "Motor Control & Basal Ganglia Loops Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motor Control & Basal Ganglia Loops Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t5_s5_d2",
      "label": "Motor Control & Basal Ganglia Loops Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motor Control & Basal Ganglia Loops Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t6",
      "label": "Motor Control & Basal Ganglia Loops Topic 6",
      "description": "Detailed first-principles mechanics for Motor Control & Basal Ganglia Loops topic 6.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t6_s1",
      "label": "Motor Control & Basal Ganglia Loops Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Motor Control & Basal Ganglia Loops Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t6_s1_d1",
      "label": "Motor Control & Basal Ganglia Loops Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motor Control & Basal Ganglia Loops Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t6_s1_d2",
      "label": "Motor Control & Basal Ganglia Loops Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motor Control & Basal Ganglia Loops Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t6_s2",
      "label": "Motor Control & Basal Ganglia Loops Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Motor Control & Basal Ganglia Loops Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t6_s2_d1",
      "label": "Motor Control & Basal Ganglia Loops Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motor Control & Basal Ganglia Loops Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t6_s2_d2",
      "label": "Motor Control & Basal Ganglia Loops Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motor Control & Basal Ganglia Loops Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t6_s3",
      "label": "Motor Control & Basal Ganglia Loops Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Motor Control & Basal Ganglia Loops Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t6_s3_d1",
      "label": "Motor Control & Basal Ganglia Loops Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motor Control & Basal Ganglia Loops Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t6_s3_d2",
      "label": "Motor Control & Basal Ganglia Loops Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motor Control & Basal Ganglia Loops Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t6_s4",
      "label": "Motor Control & Basal Ganglia Loops Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Motor Control & Basal Ganglia Loops Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t6_s4_d1",
      "label": "Motor Control & Basal Ganglia Loops Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motor Control & Basal Ganglia Loops Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t6_s4_d2",
      "label": "Motor Control & Basal Ganglia Loops Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motor Control & Basal Ganglia Loops Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t6_s5",
      "label": "Motor Control & Basal Ganglia Loops Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Motor Control & Basal Ganglia Loops Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t6_s5_d1",
      "label": "Motor Control & Basal Ganglia Loops Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motor Control & Basal Ganglia Loops Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p7_t6_s5_d2",
      "label": "Motor Control & Basal Ganglia Loops Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motor Control & Basal Ganglia Loops Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8",
      "label": "Computational Spiking Neural Networks (SNN)",
      "description": "Leaky Integrate-and-Fire (LIF) equations, surrogate gradient backpropagation, and neuromorphic computing.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t1",
      "label": "Leaky Integrate-and-Fire (LIF) Neuron Model",
      "description": "Simplified mathematical model of spiking neurons balancing biological realism and computational efficiency.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t1_s1",
      "label": "LIF Membrane Differential Equation (tau_m * dV/dt = -(V - V_rest) + R * I(t))",
      "description": "Modeling membrane potential leaky integration of input currents I(t).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t1_s1_d1",
      "label": "Exponential Passive Leak Attenuation",
      "description": "Decaying membrane potential toward V_rest with time constant tau_m in absence of input.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t1_s1_d2",
      "label": "Euler Discretization Update Rule V[t+1] = V[t] + dt/tau_m * (-(V[t] - V_rest) + R*I[t])",
      "description": "Executing discrete time-step membrane potential updates.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t1_s2",
      "label": "Threshold & Hard Reset Mechanics",
      "description": "Generating discrete spike events S[t] in {0, 1} when membrane potential crosses threshold V_th.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t1_s2_d1",
      "label": "Heaviside Step Function Spike Trigger S[t] = Theta(V[t] - V_th)",
      "description": "Emitting binary 1 spike events when V >= V_th.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t1_s2_d2",
      "label": "Reset Voltage Mechanics (V[t] -> V_reset)",
      "description": "Resetting membrane potential to V_reset immediately following spike emission.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t1_s3",
      "label": "Refractory Period Implementation",
      "description": "Clamping membrane potential to V_reset for a fixed number of time steps post-spike.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t1_s3_d1",
      "label": "Refractory Counter Down-Counting",
      "description": "Suppressing integration during refractory windows (e.g. 2-5ms).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t1_s3_d2",
      "label": "Maximum Firing Rate Saturation Bounds (1 / t_ref)",
      "description": "Capping maximum theoretical firing frequency.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t1_s4",
      "label": "Current-Based (CUBA) vs Conductance-Based (COBA) Synapses",
      "description": "Modeling postsynaptic input currents as direct current injections or dynamic conductance changes.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t1_s4_d1",
      "label": "CUBA Direct Current Injection Model",
      "description": "Adding static current step pulses to membrane differential equations.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t1_s4_d2",
      "label": "COBA Reversal Potential Model I_syn = g(t)*(V - E_syn)",
      "description": "Modeling realistic voltage-dependent driving forces using synaptic reversal potentials.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t1_s5",
      "label": "Adaptive Threshold LIF (ALIF) Neurons",
      "description": "Increasing threshold V_th dynamically after each spike to implement spike-frequency adaptation.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t1_s5_d1",
      "label": "Threshold Adaptation Differential Equation dV_th/dt",
      "description": "Decaying elevated threshold back to baseline V_th_0 over time.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t1_s5_d2",
      "label": "Accommodating Burst & Adaptation Behaviors",
      "description": "Emulating cortical pyramidal cell firing adaptation under sustained current injection.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t2",
      "label": "Surrogate Gradient Backpropagation (SuperSpike)",
      "description": "Overcoming the non-differentiable step function barrier to train SNNs using backpropagation.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t2_s1",
      "label": "Non-Differentiable Spike Barrier Problem",
      "description": "Derivative of Heaviside step function dTheta/dV being zero everywhere except at threshold (infinite Dirac delta).",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t2_s1_d1",
      "label": "Vanishing & Exploding Gradient Breakdown",
      "description": "Standard backprop failing because derivative is 0 almost everywhere.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t2_s1_d2",
      "label": "Inability to Apply Standard Autograd Engines",
      "description": "Requiring smooth surrogate approximations for backpropagation.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t2_s2",
      "label": "Surrogate Gradient Approximations (Sigmoid / Fast Sigmoid / ArcTan)",
      "description": "Replacing zero derivative with a continuous smooth surrogate function during backward passes.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t2_s2_d1",
      "label": "Fast Sigmoid Derivative sigma'(V) = 1 / (1 + k*|V - V_th|)^2",
      "description": "Computing smooth bell-shaped pseudo-derivatives during backward passes.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t2_s2_d2",
      "label": "Forward Exact Binary Spike Execution",
      "description": "Retaining true discrete binary spikes S in {0,1} during forward pass execution.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t2_s3",
      "label": "BPTT (Backpropagation Through Time) for SNNs",
      "description": "Unrolling SNN execution over T discrete time steps to compute temporal gradients.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t2_s3_d1",
      "label": "Spatial & Temporal Gradient Flow Trajectories",
      "description": "Backpropagating error gradients across layer connections AND backward through time steps.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t2_s3_d2",
      "label": "Memory Footprint Scaling O(L * T)",
      "description": "Storing intermediate membrane states across all time steps during training.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t2_s4",
      "label": "SLAYER & SuperSpike Algorithm Specs",
      "description": "State-of-the-art surrogate gradient backprop algorithms for deep spiking networks.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t2_s4_d1",
      "label": "Spike Time Credit Assignment Formulas",
      "description": "Distributing credit to input spikes based on temporal proximity to output errors.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t2_s4_d2",
      "label": "Target Spike Train Matching Loss Functions",
      "description": "Training SNNs to produce exact target spike timing patterns.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t2_s5",
      "label": "ANN-to-SNN Conversion Workflows",
      "description": "Converting pre-trained Artificial Neural Networks (ANNs) into high-efficiency SNNs.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t2_s5_d1",
      "label": "Weight Scaling & Threshold Normalization",
      "description": "Scaling ANN weights to match SNN firing threshold dynamics.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t2_s5_d2",
      "label": "Rate-Coding Representation Mapping",
      "description": "Mapping ANN continuous ReLU activations to SNN average firing rates.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t3",
      "label": "Spike-Based Information Coding Schemes",
      "description": "Different paradigms for encoding information into discrete spike trains.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t3_s1",
      "label": "Rate Coding (Frequency / Mean Firing Rate)",
      "description": "Encoding information in the average number of spikes emitted within a time window.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t3_s1_d1",
      "label": "High Sample Averaging Latency",
      "description": "Requiring long integration windows (100-500ms) to estimate firing rates accurately.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t3_s1_d2",
      "label": "High Energy Consumption Overhead",
      "description": "Emitting many spikes per unit of information, decreasing energy efficiency.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t3_s2",
      "label": "Time-to-First-Spike (TTFS) Latency Coding",
      "description": "Encoding stimulus strength in the precise arrival latency of the first emitted spike.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t3_s2_d1",
      "label": "Ultra-Fast Single-Spike Inference",
      "description": "Executing classification decisions on the arrival of the very first spike per layer.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t3_s2_d2",
      "label": "Sub-Millisecond Processing Speed",
      "description": "Achieving extreme processing speeds matching fast biological visual perception.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t3_s3",
      "label": "Phase Coding & Oscillatory Relative Timing",
      "description": "Encoding information in the precise phase angle of spikes relative to background LFP rhythms.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t3_s3_d1",
      "label": "Theta Phase Coding Alignment",
      "description": "Encoding spatial and identity information within sub-cycles of background theta waves.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t3_s3_d2",
      "label": "High Information Density Per Spike",
      "description": "Transmitting rich multi-bit information per spike via phase timing.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t3_s4",
      "label": "Synchrony & Population Vector Coding",
      "description": "Encoding information in precise millisecond coincidence firing across neuron groups.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t3_s4_d1",
      "label": "Coincidence Detection Downstream Processing",
      "description": "Driving downstream LIF neurons efficiently via synchronized arrival of multiple input spikes.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t3_s4_d2",
      "label": "Noise-Robust Distributed Coding",
      "description": "Distributing information across populations to tolerate individual neuron failures.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t3_s5",
      "label": "Information Theory & Entropy Bounds (Bits Per Spike)",
      "description": "Quantifying information transmission capacity of spiking neurons using Shannon entropy.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t3_s5_d1",
      "label": "Single Spike Information Limit (~2-3 Bits/Spike)",
      "description": "Measuring maximum information conveyed by precise single spike timings.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t3_s5_d2",
      "label": "Energy-Information Pareto Tradeoff",
      "description": "Optimizing bit-per-joule energy efficiency in biological and artificial neural architectures.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t4",
      "label": "Neuromorphic Computing Hardware (Loihi & SpiNNaker)",
      "description": "Event-driven silicon hardware architectures executing spiking neural networks natively with extreme energy efficiency.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t4_s1",
      "label": "Intel Loihi 2 Neuromorphic Chip Architecture",
      "description": "Asynchronous event-driven silicon chip containing 128 digital neuromorphic cores.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t4_s1_d1",
      "label": "1 Million Micro-Neuron Capacity Per Chip",
      "description": "Packing 1 million programmable spiking neurons on single silicon dies.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t4_s1_d2",
      "label": "Asynchronous Mesh Network-on-Chip (NoC)",
      "description": "Routing spike packet messages across cores without global clock signals.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t4_s2",
      "label": "Event-Driven Computation & Zero Idle Power",
      "description": "Silicon circuits executing logic strictly when spikes arrive, consuming zero power during quiet intervals.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t4_s2_d1",
      "label": "100x-1000x Energy Efficiency vs GPUs",
      "description": "Consuming milliwatts of power compared to hundreds of watts for standard GPU clusters.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t4_s2_d2",
      "label": "Sparse Temporal Computation Advantage",
      "description": "Leveraging event sparsity to minimize transistor switching operations.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t4_s3",
      "label": "On-Chip Programmable STDP Learning Engines",
      "description": "Executing local synaptic weight updates directly in hardware SRAM memory.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t4_s3_d1",
      "label": "Microcode-Programmable Learning Rules",
      "description": "Configuring custom STDP and reward-modulated plasticity rules in silicon.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t4_s3_d2",
      "label": "Real-Time On-Chip Adaptability",
      "description": "Updating model weights continuously during low-power edge operation.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t4_s4",
      "label": "SpiNNaker (Spiking Neural Network Architecture) Supercomputer",
      "description": "Massively parallel supercomputer built with 1 million ARM cores designed for brain simulation.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t4_s4_d1",
      "label": "Custom Multicast Packet Routing Engine",
      "description": "Routing billions of small spike packets to millions of destination cores.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t4_s4_d2",
      "label": "Real-Time Biological Brain Scale Simulation",
      "description": "Simulating large-scale cortical column networks in 1-to-1 real time.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t4_s5",
      "label": "Event-Based Vision (DVS Dynamic Vision Sensors)",
      "description": "Neuromorphic camera sensors emitting asynchronous pixel brightness change events instead of full video frames.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t4_s5_d1",
      "label": "Microsecond Temporal Resolution Events",
      "description": "Outputting (x, y, timestamp, polarity) event streams at 1,000,000 frames/sec equivalent.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t4_s5_d2",
      "label": "Direct SNN Event-Stream Ingestion",
      "description": "Streaming DVS events directly into neuromorphic processor inputs without frame parsing.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t5",
      "label": "Computational Spiking Neural Networks (SNN) Topic 5",
      "description": "Detailed first-principles mechanics for Computational Spiking Neural Networks (SNN) topic 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t5_s1",
      "label": "Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Computational Spiking Neural Networks (SNN) Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t5_s1_d1",
      "label": "Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t5_s1_d2",
      "label": "Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t5_s2",
      "label": "Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Computational Spiking Neural Networks (SNN) Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t5_s2_d1",
      "label": "Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t5_s2_d2",
      "label": "Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t5_s3",
      "label": "Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Computational Spiking Neural Networks (SNN) Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t5_s3_d1",
      "label": "Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t5_s3_d2",
      "label": "Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t5_s4",
      "label": "Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Computational Spiking Neural Networks (SNN) Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t5_s4_d1",
      "label": "Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t5_s4_d2",
      "label": "Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t5_s5",
      "label": "Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Computational Spiking Neural Networks (SNN) Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t5_s5_d1",
      "label": "Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t5_s5_d2",
      "label": "Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Spiking Neural Networks (SNN) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t6",
      "label": "Computational Spiking Neural Networks (SNN) Topic 6",
      "description": "Detailed first-principles mechanics for Computational Spiking Neural Networks (SNN) topic 6.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t6_s1",
      "label": "Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Computational Spiking Neural Networks (SNN) Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t6_s1_d1",
      "label": "Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t6_s1_d2",
      "label": "Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t6_s2",
      "label": "Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Computational Spiking Neural Networks (SNN) Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t6_s2_d1",
      "label": "Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t6_s2_d2",
      "label": "Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t6_s3",
      "label": "Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Computational Spiking Neural Networks (SNN) Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t6_s3_d1",
      "label": "Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t6_s3_d2",
      "label": "Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t6_s4",
      "label": "Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Computational Spiking Neural Networks (SNN) Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t6_s4_d1",
      "label": "Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t6_s4_d2",
      "label": "Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t6_s5",
      "label": "Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Computational Spiking Neural Networks (SNN) Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t6_s5_d1",
      "label": "Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "neuro_root_p8_t6_s5_d2",
      "label": "Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Computational Spiking Neural Networks (SNN) Topic 6 Sub-System 5.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "source": "neuro_root",
      "target": "neuro_root_p1"
    },
    {
      "source": "neuro_root_p1",
      "target": "neuro_root_p1_t1"
    },
    {
      "source": "neuro_root_p1_t1",
      "target": "neuro_root_p1_t1_s1"
    },
    {
      "source": "neuro_root_p1_t1_s1",
      "target": "neuro_root_p1_t1_s1_d1"
    },
    {
      "source": "neuro_root_p1_t1_s1",
      "target": "neuro_root_p1_t1_s1_d2"
    },
    {
      "source": "neuro_root_p1_t1",
      "target": "neuro_root_p1_t1_s2"
    },
    {
      "source": "neuro_root_p1_t1_s2",
      "target": "neuro_root_p1_t1_s2_d1"
    },
    {
      "source": "neuro_root_p1_t1_s2",
      "target": "neuro_root_p1_t1_s2_d2"
    },
    {
      "source": "neuro_root_p1_t1",
      "target": "neuro_root_p1_t1_s3"
    },
    {
      "source": "neuro_root_p1_t1_s3",
      "target": "neuro_root_p1_t1_s3_d1"
    },
    {
      "source": "neuro_root_p1_t1_s3",
      "target": "neuro_root_p1_t1_s3_d2"
    },
    {
      "source": "neuro_root_p1_t1",
      "target": "neuro_root_p1_t1_s4"
    },
    {
      "source": "neuro_root_p1_t1_s4",
      "target": "neuro_root_p1_t1_s4_d1"
    },
    {
      "source": "neuro_root_p1_t1_s4",
      "target": "neuro_root_p1_t1_s4_d2"
    },
    {
      "source": "neuro_root_p1_t1",
      "target": "neuro_root_p1_t1_s5"
    },
    {
      "source": "neuro_root_p1_t1_s5",
      "target": "neuro_root_p1_t1_s5_d1"
    },
    {
      "source": "neuro_root_p1_t1_s5",
      "target": "neuro_root_p1_t1_s5_d2"
    },
    {
      "source": "neuro_root_p1",
      "target": "neuro_root_p1_t2"
    },
    {
      "source": "neuro_root_p1_t2",
      "target": "neuro_root_p1_t2_s1"
    },
    {
      "source": "neuro_root_p1_t2_s1",
      "target": "neuro_root_p1_t2_s1_d1"
    },
    {
      "source": "neuro_root_p1_t2_s1",
      "target": "neuro_root_p1_t2_s1_d2"
    },
    {
      "source": "neuro_root_p1_t2",
      "target": "neuro_root_p1_t2_s2"
    },
    {
      "source": "neuro_root_p1_t2_s2",
      "target": "neuro_root_p1_t2_s2_d1"
    },
    {
      "source": "neuro_root_p1_t2_s2",
      "target": "neuro_root_p1_t2_s2_d2"
    },
    {
      "source": "neuro_root_p1_t2",
      "target": "neuro_root_p1_t2_s3"
    },
    {
      "source": "neuro_root_p1_t2_s3",
      "target": "neuro_root_p1_t2_s3_d1"
    },
    {
      "source": "neuro_root_p1_t2_s3",
      "target": "neuro_root_p1_t2_s3_d2"
    },
    {
      "source": "neuro_root_p1_t2",
      "target": "neuro_root_p1_t2_s4"
    },
    {
      "source": "neuro_root_p1_t2_s4",
      "target": "neuro_root_p1_t2_s4_d1"
    },
    {
      "source": "neuro_root_p1_t2_s4",
      "target": "neuro_root_p1_t2_s4_d2"
    },
    {
      "source": "neuro_root_p1_t2",
      "target": "neuro_root_p1_t2_s5"
    },
    {
      "source": "neuro_root_p1_t2_s5",
      "target": "neuro_root_p1_t2_s5_d1"
    },
    {
      "source": "neuro_root_p1_t2_s5",
      "target": "neuro_root_p1_t2_s5_d2"
    },
    {
      "source": "neuro_root_p1",
      "target": "neuro_root_p1_t3"
    },
    {
      "source": "neuro_root_p1_t3",
      "target": "neuro_root_p1_t3_s1"
    },
    {
      "source": "neuro_root_p1_t3_s1",
      "target": "neuro_root_p1_t3_s1_d1"
    },
    {
      "source": "neuro_root_p1_t3_s1",
      "target": "neuro_root_p1_t3_s1_d2"
    },
    {
      "source": "neuro_root_p1_t3",
      "target": "neuro_root_p1_t3_s2"
    },
    {
      "source": "neuro_root_p1_t3_s2",
      "target": "neuro_root_p1_t3_s2_d1"
    },
    {
      "source": "neuro_root_p1_t3_s2",
      "target": "neuro_root_p1_t3_s2_d2"
    },
    {
      "source": "neuro_root_p1_t3",
      "target": "neuro_root_p1_t3_s3"
    },
    {
      "source": "neuro_root_p1_t3_s3",
      "target": "neuro_root_p1_t3_s3_d1"
    },
    {
      "source": "neuro_root_p1_t3_s3",
      "target": "neuro_root_p1_t3_s3_d2"
    },
    {
      "source": "neuro_root_p1_t3",
      "target": "neuro_root_p1_t3_s4"
    },
    {
      "source": "neuro_root_p1_t3_s4",
      "target": "neuro_root_p1_t3_s4_d1"
    },
    {
      "source": "neuro_root_p1_t3_s4",
      "target": "neuro_root_p1_t3_s4_d2"
    },
    {
      "source": "neuro_root_p1_t3",
      "target": "neuro_root_p1_t3_s5"
    },
    {
      "source": "neuro_root_p1_t3_s5",
      "target": "neuro_root_p1_t3_s5_d1"
    },
    {
      "source": "neuro_root_p1_t3_s5",
      "target": "neuro_root_p1_t3_s5_d2"
    },
    {
      "source": "neuro_root_p1",
      "target": "neuro_root_p1_t4"
    },
    {
      "source": "neuro_root_p1_t4",
      "target": "neuro_root_p1_t4_s1"
    },
    {
      "source": "neuro_root_p1_t4_s1",
      "target": "neuro_root_p1_t4_s1_d1"
    },
    {
      "source": "neuro_root_p1_t4_s1",
      "target": "neuro_root_p1_t4_s1_d2"
    },
    {
      "source": "neuro_root_p1_t4",
      "target": "neuro_root_p1_t4_s2"
    },
    {
      "source": "neuro_root_p1_t4_s2",
      "target": "neuro_root_p1_t4_s2_d1"
    },
    {
      "source": "neuro_root_p1_t4_s2",
      "target": "neuro_root_p1_t4_s2_d2"
    },
    {
      "source": "neuro_root_p1_t4",
      "target": "neuro_root_p1_t4_s3"
    },
    {
      "source": "neuro_root_p1_t4_s3",
      "target": "neuro_root_p1_t4_s3_d1"
    },
    {
      "source": "neuro_root_p1_t4_s3",
      "target": "neuro_root_p1_t4_s3_d2"
    },
    {
      "source": "neuro_root_p1_t4",
      "target": "neuro_root_p1_t4_s4"
    },
    {
      "source": "neuro_root_p1_t4_s4",
      "target": "neuro_root_p1_t4_s4_d1"
    },
    {
      "source": "neuro_root_p1_t4_s4",
      "target": "neuro_root_p1_t4_s4_d2"
    },
    {
      "source": "neuro_root_p1_t4",
      "target": "neuro_root_p1_t4_s5"
    },
    {
      "source": "neuro_root_p1_t4_s5",
      "target": "neuro_root_p1_t4_s5_d1"
    },
    {
      "source": "neuro_root_p1_t4_s5",
      "target": "neuro_root_p1_t4_s5_d2"
    },
    {
      "source": "neuro_root_p1",
      "target": "neuro_root_p1_t5"
    },
    {
      "source": "neuro_root_p1_t5",
      "target": "neuro_root_p1_t5_s1"
    },
    {
      "source": "neuro_root_p1_t5_s1",
      "target": "neuro_root_p1_t5_s1_d1"
    },
    {
      "source": "neuro_root_p1_t5_s1",
      "target": "neuro_root_p1_t5_s1_d2"
    },
    {
      "source": "neuro_root_p1_t5",
      "target": "neuro_root_p1_t5_s2"
    },
    {
      "source": "neuro_root_p1_t5_s2",
      "target": "neuro_root_p1_t5_s2_d1"
    },
    {
      "source": "neuro_root_p1_t5_s2",
      "target": "neuro_root_p1_t5_s2_d2"
    },
    {
      "source": "neuro_root_p1_t5",
      "target": "neuro_root_p1_t5_s3"
    },
    {
      "source": "neuro_root_p1_t5_s3",
      "target": "neuro_root_p1_t5_s3_d1"
    },
    {
      "source": "neuro_root_p1_t5_s3",
      "target": "neuro_root_p1_t5_s3_d2"
    },
    {
      "source": "neuro_root_p1_t5",
      "target": "neuro_root_p1_t5_s4"
    },
    {
      "source": "neuro_root_p1_t5_s4",
      "target": "neuro_root_p1_t5_s4_d1"
    },
    {
      "source": "neuro_root_p1_t5_s4",
      "target": "neuro_root_p1_t5_s4_d2"
    },
    {
      "source": "neuro_root_p1_t5",
      "target": "neuro_root_p1_t5_s5"
    },
    {
      "source": "neuro_root_p1_t5_s5",
      "target": "neuro_root_p1_t5_s5_d1"
    },
    {
      "source": "neuro_root_p1_t5_s5",
      "target": "neuro_root_p1_t5_s5_d2"
    },
    {
      "source": "neuro_root_p1",
      "target": "neuro_root_p1_t6"
    },
    {
      "source": "neuro_root_p1_t6",
      "target": "neuro_root_p1_t6_s1"
    },
    {
      "source": "neuro_root_p1_t6_s1",
      "target": "neuro_root_p1_t6_s1_d1"
    },
    {
      "source": "neuro_root_p1_t6_s1",
      "target": "neuro_root_p1_t6_s1_d2"
    },
    {
      "source": "neuro_root_p1_t6",
      "target": "neuro_root_p1_t6_s2"
    },
    {
      "source": "neuro_root_p1_t6_s2",
      "target": "neuro_root_p1_t6_s2_d1"
    },
    {
      "source": "neuro_root_p1_t6_s2",
      "target": "neuro_root_p1_t6_s2_d2"
    },
    {
      "source": "neuro_root_p1_t6",
      "target": "neuro_root_p1_t6_s3"
    },
    {
      "source": "neuro_root_p1_t6_s3",
      "target": "neuro_root_p1_t6_s3_d1"
    },
    {
      "source": "neuro_root_p1_t6_s3",
      "target": "neuro_root_p1_t6_s3_d2"
    },
    {
      "source": "neuro_root_p1_t6",
      "target": "neuro_root_p1_t6_s4"
    },
    {
      "source": "neuro_root_p1_t6_s4",
      "target": "neuro_root_p1_t6_s4_d1"
    },
    {
      "source": "neuro_root_p1_t6_s4",
      "target": "neuro_root_p1_t6_s4_d2"
    },
    {
      "source": "neuro_root_p1_t6",
      "target": "neuro_root_p1_t6_s5"
    },
    {
      "source": "neuro_root_p1_t6_s5",
      "target": "neuro_root_p1_t6_s5_d1"
    },
    {
      "source": "neuro_root_p1_t6_s5",
      "target": "neuro_root_p1_t6_s5_d2"
    },
    {
      "source": "neuro_root",
      "target": "neuro_root_p2"
    },
    {
      "source": "neuro_root_p2",
      "target": "neuro_root_p2_t1"
    },
    {
      "source": "neuro_root_p2_t1",
      "target": "neuro_root_p2_t1_s1"
    },
    {
      "source": "neuro_root_p2_t1_s1",
      "target": "neuro_root_p2_t1_s1_d1"
    },
    {
      "source": "neuro_root_p2_t1_s1",
      "target": "neuro_root_p2_t1_s1_d2"
    },
    {
      "source": "neuro_root_p2_t1",
      "target": "neuro_root_p2_t1_s2"
    },
    {
      "source": "neuro_root_p2_t1_s2",
      "target": "neuro_root_p2_t1_s2_d1"
    },
    {
      "source": "neuro_root_p2_t1_s2",
      "target": "neuro_root_p2_t1_s2_d2"
    },
    {
      "source": "neuro_root_p2_t1",
      "target": "neuro_root_p2_t1_s3"
    },
    {
      "source": "neuro_root_p2_t1_s3",
      "target": "neuro_root_p2_t1_s3_d1"
    },
    {
      "source": "neuro_root_p2_t1_s3",
      "target": "neuro_root_p2_t1_s3_d2"
    },
    {
      "source": "neuro_root_p2_t1",
      "target": "neuro_root_p2_t1_s4"
    },
    {
      "source": "neuro_root_p2_t1_s4",
      "target": "neuro_root_p2_t1_s4_d1"
    },
    {
      "source": "neuro_root_p2_t1_s4",
      "target": "neuro_root_p2_t1_s4_d2"
    },
    {
      "source": "neuro_root_p2_t1",
      "target": "neuro_root_p2_t1_s5"
    },
    {
      "source": "neuro_root_p2_t1_s5",
      "target": "neuro_root_p2_t1_s5_d1"
    },
    {
      "source": "neuro_root_p2_t1_s5",
      "target": "neuro_root_p2_t1_s5_d2"
    },
    {
      "source": "neuro_root_p2",
      "target": "neuro_root_p2_t2"
    },
    {
      "source": "neuro_root_p2_t2",
      "target": "neuro_root_p2_t2_s1"
    },
    {
      "source": "neuro_root_p2_t2_s1",
      "target": "neuro_root_p2_t2_s1_d1"
    },
    {
      "source": "neuro_root_p2_t2_s1",
      "target": "neuro_root_p2_t2_s1_d2"
    },
    {
      "source": "neuro_root_p2_t2",
      "target": "neuro_root_p2_t2_s2"
    },
    {
      "source": "neuro_root_p2_t2_s2",
      "target": "neuro_root_p2_t2_s2_d1"
    },
    {
      "source": "neuro_root_p2_t2_s2",
      "target": "neuro_root_p2_t2_s2_d2"
    },
    {
      "source": "neuro_root_p2_t2",
      "target": "neuro_root_p2_t2_s3"
    },
    {
      "source": "neuro_root_p2_t2_s3",
      "target": "neuro_root_p2_t2_s3_d1"
    },
    {
      "source": "neuro_root_p2_t2_s3",
      "target": "neuro_root_p2_t2_s3_d2"
    },
    {
      "source": "neuro_root_p2_t2",
      "target": "neuro_root_p2_t2_s4"
    },
    {
      "source": "neuro_root_p2_t2_s4",
      "target": "neuro_root_p2_t2_s4_d1"
    },
    {
      "source": "neuro_root_p2_t2_s4",
      "target": "neuro_root_p2_t2_s4_d2"
    },
    {
      "source": "neuro_root_p2_t2",
      "target": "neuro_root_p2_t2_s5"
    },
    {
      "source": "neuro_root_p2_t2_s5",
      "target": "neuro_root_p2_t2_s5_d1"
    },
    {
      "source": "neuro_root_p2_t2_s5",
      "target": "neuro_root_p2_t2_s5_d2"
    },
    {
      "source": "neuro_root_p2",
      "target": "neuro_root_p2_t3"
    },
    {
      "source": "neuro_root_p2_t3",
      "target": "neuro_root_p2_t3_s1"
    },
    {
      "source": "neuro_root_p2_t3_s1",
      "target": "neuro_root_p2_t3_s1_d1"
    },
    {
      "source": "neuro_root_p2_t3_s1",
      "target": "neuro_root_p2_t3_s1_d2"
    },
    {
      "source": "neuro_root_p2_t3",
      "target": "neuro_root_p2_t3_s2"
    },
    {
      "source": "neuro_root_p2_t3_s2",
      "target": "neuro_root_p2_t3_s2_d1"
    },
    {
      "source": "neuro_root_p2_t3_s2",
      "target": "neuro_root_p2_t3_s2_d2"
    },
    {
      "source": "neuro_root_p2_t3",
      "target": "neuro_root_p2_t3_s3"
    },
    {
      "source": "neuro_root_p2_t3_s3",
      "target": "neuro_root_p2_t3_s3_d1"
    },
    {
      "source": "neuro_root_p2_t3_s3",
      "target": "neuro_root_p2_t3_s3_d2"
    },
    {
      "source": "neuro_root_p2_t3",
      "target": "neuro_root_p2_t3_s4"
    },
    {
      "source": "neuro_root_p2_t3_s4",
      "target": "neuro_root_p2_t3_s4_d1"
    },
    {
      "source": "neuro_root_p2_t3_s4",
      "target": "neuro_root_p2_t3_s4_d2"
    },
    {
      "source": "neuro_root_p2_t3",
      "target": "neuro_root_p2_t3_s5"
    },
    {
      "source": "neuro_root_p2_t3_s5",
      "target": "neuro_root_p2_t3_s5_d1"
    },
    {
      "source": "neuro_root_p2_t3_s5",
      "target": "neuro_root_p2_t3_s5_d2"
    },
    {
      "source": "neuro_root_p2",
      "target": "neuro_root_p2_t4"
    },
    {
      "source": "neuro_root_p2_t4",
      "target": "neuro_root_p2_t4_s1"
    },
    {
      "source": "neuro_root_p2_t4_s1",
      "target": "neuro_root_p2_t4_s1_d1"
    },
    {
      "source": "neuro_root_p2_t4_s1",
      "target": "neuro_root_p2_t4_s1_d2"
    },
    {
      "source": "neuro_root_p2_t4",
      "target": "neuro_root_p2_t4_s2"
    },
    {
      "source": "neuro_root_p2_t4_s2",
      "target": "neuro_root_p2_t4_s2_d1"
    },
    {
      "source": "neuro_root_p2_t4_s2",
      "target": "neuro_root_p2_t4_s2_d2"
    },
    {
      "source": "neuro_root_p2_t4",
      "target": "neuro_root_p2_t4_s3"
    },
    {
      "source": "neuro_root_p2_t4_s3",
      "target": "neuro_root_p2_t4_s3_d1"
    },
    {
      "source": "neuro_root_p2_t4_s3",
      "target": "neuro_root_p2_t4_s3_d2"
    },
    {
      "source": "neuro_root_p2_t4",
      "target": "neuro_root_p2_t4_s4"
    },
    {
      "source": "neuro_root_p2_t4_s4",
      "target": "neuro_root_p2_t4_s4_d1"
    },
    {
      "source": "neuro_root_p2_t4_s4",
      "target": "neuro_root_p2_t4_s4_d2"
    },
    {
      "source": "neuro_root_p2_t4",
      "target": "neuro_root_p2_t4_s5"
    },
    {
      "source": "neuro_root_p2_t4_s5",
      "target": "neuro_root_p2_t4_s5_d1"
    },
    {
      "source": "neuro_root_p2_t4_s5",
      "target": "neuro_root_p2_t4_s5_d2"
    },
    {
      "source": "neuro_root_p2",
      "target": "neuro_root_p2_t5"
    },
    {
      "source": "neuro_root_p2_t5",
      "target": "neuro_root_p2_t5_s1"
    },
    {
      "source": "neuro_root_p2_t5_s1",
      "target": "neuro_root_p2_t5_s1_d1"
    },
    {
      "source": "neuro_root_p2_t5_s1",
      "target": "neuro_root_p2_t5_s1_d2"
    },
    {
      "source": "neuro_root_p2_t5",
      "target": "neuro_root_p2_t5_s2"
    },
    {
      "source": "neuro_root_p2_t5_s2",
      "target": "neuro_root_p2_t5_s2_d1"
    },
    {
      "source": "neuro_root_p2_t5_s2",
      "target": "neuro_root_p2_t5_s2_d2"
    },
    {
      "source": "neuro_root_p2_t5",
      "target": "neuro_root_p2_t5_s3"
    },
    {
      "source": "neuro_root_p2_t5_s3",
      "target": "neuro_root_p2_t5_s3_d1"
    },
    {
      "source": "neuro_root_p2_t5_s3",
      "target": "neuro_root_p2_t5_s3_d2"
    },
    {
      "source": "neuro_root_p2_t5",
      "target": "neuro_root_p2_t5_s4"
    },
    {
      "source": "neuro_root_p2_t5_s4",
      "target": "neuro_root_p2_t5_s4_d1"
    },
    {
      "source": "neuro_root_p2_t5_s4",
      "target": "neuro_root_p2_t5_s4_d2"
    },
    {
      "source": "neuro_root_p2_t5",
      "target": "neuro_root_p2_t5_s5"
    },
    {
      "source": "neuro_root_p2_t5_s5",
      "target": "neuro_root_p2_t5_s5_d1"
    },
    {
      "source": "neuro_root_p2_t5_s5",
      "target": "neuro_root_p2_t5_s5_d2"
    },
    {
      "source": "neuro_root_p2",
      "target": "neuro_root_p2_t6"
    },
    {
      "source": "neuro_root_p2_t6",
      "target": "neuro_root_p2_t6_s1"
    },
    {
      "source": "neuro_root_p2_t6_s1",
      "target": "neuro_root_p2_t6_s1_d1"
    },
    {
      "source": "neuro_root_p2_t6_s1",
      "target": "neuro_root_p2_t6_s1_d2"
    },
    {
      "source": "neuro_root_p2_t6",
      "target": "neuro_root_p2_t6_s2"
    },
    {
      "source": "neuro_root_p2_t6_s2",
      "target": "neuro_root_p2_t6_s2_d1"
    },
    {
      "source": "neuro_root_p2_t6_s2",
      "target": "neuro_root_p2_t6_s2_d2"
    },
    {
      "source": "neuro_root_p2_t6",
      "target": "neuro_root_p2_t6_s3"
    },
    {
      "source": "neuro_root_p2_t6_s3",
      "target": "neuro_root_p2_t6_s3_d1"
    },
    {
      "source": "neuro_root_p2_t6_s3",
      "target": "neuro_root_p2_t6_s3_d2"
    },
    {
      "source": "neuro_root_p2_t6",
      "target": "neuro_root_p2_t6_s4"
    },
    {
      "source": "neuro_root_p2_t6_s4",
      "target": "neuro_root_p2_t6_s4_d1"
    },
    {
      "source": "neuro_root_p2_t6_s4",
      "target": "neuro_root_p2_t6_s4_d2"
    },
    {
      "source": "neuro_root_p2_t6",
      "target": "neuro_root_p2_t6_s5"
    },
    {
      "source": "neuro_root_p2_t6_s5",
      "target": "neuro_root_p2_t6_s5_d1"
    },
    {
      "source": "neuro_root_p2_t6_s5",
      "target": "neuro_root_p2_t6_s5_d2"
    },
    {
      "source": "neuro_root",
      "target": "neuro_root_p3"
    },
    {
      "source": "neuro_root_p3",
      "target": "neuro_root_p3_t1"
    },
    {
      "source": "neuro_root_p3_t1",
      "target": "neuro_root_p3_t1_s1"
    },
    {
      "source": "neuro_root_p3_t1_s1",
      "target": "neuro_root_p3_t1_s1_d1"
    },
    {
      "source": "neuro_root_p3_t1_s1",
      "target": "neuro_root_p3_t1_s1_d2"
    },
    {
      "source": "neuro_root_p3_t1",
      "target": "neuro_root_p3_t1_s2"
    },
    {
      "source": "neuro_root_p3_t1_s2",
      "target": "neuro_root_p3_t1_s2_d1"
    },
    {
      "source": "neuro_root_p3_t1_s2",
      "target": "neuro_root_p3_t1_s2_d2"
    },
    {
      "source": "neuro_root_p3_t1",
      "target": "neuro_root_p3_t1_s3"
    },
    {
      "source": "neuro_root_p3_t1_s3",
      "target": "neuro_root_p3_t1_s3_d1"
    },
    {
      "source": "neuro_root_p3_t1_s3",
      "target": "neuro_root_p3_t1_s3_d2"
    },
    {
      "source": "neuro_root_p3_t1",
      "target": "neuro_root_p3_t1_s4"
    },
    {
      "source": "neuro_root_p3_t1_s4",
      "target": "neuro_root_p3_t1_s4_d1"
    },
    {
      "source": "neuro_root_p3_t1_s4",
      "target": "neuro_root_p3_t1_s4_d2"
    },
    {
      "source": "neuro_root_p3_t1",
      "target": "neuro_root_p3_t1_s5"
    },
    {
      "source": "neuro_root_p3_t1_s5",
      "target": "neuro_root_p3_t1_s5_d1"
    },
    {
      "source": "neuro_root_p3_t1_s5",
      "target": "neuro_root_p3_t1_s5_d2"
    },
    {
      "source": "neuro_root_p3",
      "target": "neuro_root_p3_t2"
    },
    {
      "source": "neuro_root_p3_t2",
      "target": "neuro_root_p3_t2_s1"
    },
    {
      "source": "neuro_root_p3_t2_s1",
      "target": "neuro_root_p3_t2_s1_d1"
    },
    {
      "source": "neuro_root_p3_t2_s1",
      "target": "neuro_root_p3_t2_s1_d2"
    },
    {
      "source": "neuro_root_p3_t2",
      "target": "neuro_root_p3_t2_s2"
    },
    {
      "source": "neuro_root_p3_t2_s2",
      "target": "neuro_root_p3_t2_s2_d1"
    },
    {
      "source": "neuro_root_p3_t2_s2",
      "target": "neuro_root_p3_t2_s2_d2"
    },
    {
      "source": "neuro_root_p3_t2",
      "target": "neuro_root_p3_t2_s3"
    },
    {
      "source": "neuro_root_p3_t2_s3",
      "target": "neuro_root_p3_t2_s3_d1"
    },
    {
      "source": "neuro_root_p3_t2_s3",
      "target": "neuro_root_p3_t2_s3_d2"
    },
    {
      "source": "neuro_root_p3_t2",
      "target": "neuro_root_p3_t2_s4"
    },
    {
      "source": "neuro_root_p3_t2_s4",
      "target": "neuro_root_p3_t2_s4_d1"
    },
    {
      "source": "neuro_root_p3_t2_s4",
      "target": "neuro_root_p3_t2_s4_d2"
    },
    {
      "source": "neuro_root_p3_t2",
      "target": "neuro_root_p3_t2_s5"
    },
    {
      "source": "neuro_root_p3_t2_s5",
      "target": "neuro_root_p3_t2_s5_d1"
    },
    {
      "source": "neuro_root_p3_t2_s5",
      "target": "neuro_root_p3_t2_s5_d2"
    },
    {
      "source": "neuro_root_p3",
      "target": "neuro_root_p3_t3"
    },
    {
      "source": "neuro_root_p3_t3",
      "target": "neuro_root_p3_t3_s1"
    },
    {
      "source": "neuro_root_p3_t3_s1",
      "target": "neuro_root_p3_t3_s1_d1"
    },
    {
      "source": "neuro_root_p3_t3_s1",
      "target": "neuro_root_p3_t3_s1_d2"
    },
    {
      "source": "neuro_root_p3_t3",
      "target": "neuro_root_p3_t3_s2"
    },
    {
      "source": "neuro_root_p3_t3_s2",
      "target": "neuro_root_p3_t3_s2_d1"
    },
    {
      "source": "neuro_root_p3_t3_s2",
      "target": "neuro_root_p3_t3_s2_d2"
    },
    {
      "source": "neuro_root_p3_t3",
      "target": "neuro_root_p3_t3_s3"
    },
    {
      "source": "neuro_root_p3_t3_s3",
      "target": "neuro_root_p3_t3_s3_d1"
    },
    {
      "source": "neuro_root_p3_t3_s3",
      "target": "neuro_root_p3_t3_s3_d2"
    },
    {
      "source": "neuro_root_p3_t3",
      "target": "neuro_root_p3_t3_s4"
    },
    {
      "source": "neuro_root_p3_t3_s4",
      "target": "neuro_root_p3_t3_s4_d1"
    },
    {
      "source": "neuro_root_p3_t3_s4",
      "target": "neuro_root_p3_t3_s4_d2"
    },
    {
      "source": "neuro_root_p3_t3",
      "target": "neuro_root_p3_t3_s5"
    },
    {
      "source": "neuro_root_p3_t3_s5",
      "target": "neuro_root_p3_t3_s5_d1"
    },
    {
      "source": "neuro_root_p3_t3_s5",
      "target": "neuro_root_p3_t3_s5_d2"
    },
    {
      "source": "neuro_root_p3",
      "target": "neuro_root_p3_t4"
    },
    {
      "source": "neuro_root_p3_t4",
      "target": "neuro_root_p3_t4_s1"
    },
    {
      "source": "neuro_root_p3_t4_s1",
      "target": "neuro_root_p3_t4_s1_d1"
    },
    {
      "source": "neuro_root_p3_t4_s1",
      "target": "neuro_root_p3_t4_s1_d2"
    },
    {
      "source": "neuro_root_p3_t4",
      "target": "neuro_root_p3_t4_s2"
    },
    {
      "source": "neuro_root_p3_t4_s2",
      "target": "neuro_root_p3_t4_s2_d1"
    },
    {
      "source": "neuro_root_p3_t4_s2",
      "target": "neuro_root_p3_t4_s2_d2"
    },
    {
      "source": "neuro_root_p3_t4",
      "target": "neuro_root_p3_t4_s3"
    },
    {
      "source": "neuro_root_p3_t4_s3",
      "target": "neuro_root_p3_t4_s3_d1"
    },
    {
      "source": "neuro_root_p3_t4_s3",
      "target": "neuro_root_p3_t4_s3_d2"
    },
    {
      "source": "neuro_root_p3_t4",
      "target": "neuro_root_p3_t4_s4"
    },
    {
      "source": "neuro_root_p3_t4_s4",
      "target": "neuro_root_p3_t4_s4_d1"
    },
    {
      "source": "neuro_root_p3_t4_s4",
      "target": "neuro_root_p3_t4_s4_d2"
    },
    {
      "source": "neuro_root_p3_t4",
      "target": "neuro_root_p3_t4_s5"
    },
    {
      "source": "neuro_root_p3_t4_s5",
      "target": "neuro_root_p3_t4_s5_d1"
    },
    {
      "source": "neuro_root_p3_t4_s5",
      "target": "neuro_root_p3_t4_s5_d2"
    },
    {
      "source": "neuro_root_p3",
      "target": "neuro_root_p3_t5"
    },
    {
      "source": "neuro_root_p3_t5",
      "target": "neuro_root_p3_t5_s1"
    },
    {
      "source": "neuro_root_p3_t5_s1",
      "target": "neuro_root_p3_t5_s1_d1"
    },
    {
      "source": "neuro_root_p3_t5_s1",
      "target": "neuro_root_p3_t5_s1_d2"
    },
    {
      "source": "neuro_root_p3_t5",
      "target": "neuro_root_p3_t5_s2"
    },
    {
      "source": "neuro_root_p3_t5_s2",
      "target": "neuro_root_p3_t5_s2_d1"
    },
    {
      "source": "neuro_root_p3_t5_s2",
      "target": "neuro_root_p3_t5_s2_d2"
    },
    {
      "source": "neuro_root_p3_t5",
      "target": "neuro_root_p3_t5_s3"
    },
    {
      "source": "neuro_root_p3_t5_s3",
      "target": "neuro_root_p3_t5_s3_d1"
    },
    {
      "source": "neuro_root_p3_t5_s3",
      "target": "neuro_root_p3_t5_s3_d2"
    },
    {
      "source": "neuro_root_p3_t5",
      "target": "neuro_root_p3_t5_s4"
    },
    {
      "source": "neuro_root_p3_t5_s4",
      "target": "neuro_root_p3_t5_s4_d1"
    },
    {
      "source": "neuro_root_p3_t5_s4",
      "target": "neuro_root_p3_t5_s4_d2"
    },
    {
      "source": "neuro_root_p3_t5",
      "target": "neuro_root_p3_t5_s5"
    },
    {
      "source": "neuro_root_p3_t5_s5",
      "target": "neuro_root_p3_t5_s5_d1"
    },
    {
      "source": "neuro_root_p3_t5_s5",
      "target": "neuro_root_p3_t5_s5_d2"
    },
    {
      "source": "neuro_root_p3",
      "target": "neuro_root_p3_t6"
    },
    {
      "source": "neuro_root_p3_t6",
      "target": "neuro_root_p3_t6_s1"
    },
    {
      "source": "neuro_root_p3_t6_s1",
      "target": "neuro_root_p3_t6_s1_d1"
    },
    {
      "source": "neuro_root_p3_t6_s1",
      "target": "neuro_root_p3_t6_s1_d2"
    },
    {
      "source": "neuro_root_p3_t6",
      "target": "neuro_root_p3_t6_s2"
    },
    {
      "source": "neuro_root_p3_t6_s2",
      "target": "neuro_root_p3_t6_s2_d1"
    },
    {
      "source": "neuro_root_p3_t6_s2",
      "target": "neuro_root_p3_t6_s2_d2"
    },
    {
      "source": "neuro_root_p3_t6",
      "target": "neuro_root_p3_t6_s3"
    },
    {
      "source": "neuro_root_p3_t6_s3",
      "target": "neuro_root_p3_t6_s3_d1"
    },
    {
      "source": "neuro_root_p3_t6_s3",
      "target": "neuro_root_p3_t6_s3_d2"
    },
    {
      "source": "neuro_root_p3_t6",
      "target": "neuro_root_p3_t6_s4"
    },
    {
      "source": "neuro_root_p3_t6_s4",
      "target": "neuro_root_p3_t6_s4_d1"
    },
    {
      "source": "neuro_root_p3_t6_s4",
      "target": "neuro_root_p3_t6_s4_d2"
    },
    {
      "source": "neuro_root_p3_t6",
      "target": "neuro_root_p3_t6_s5"
    },
    {
      "source": "neuro_root_p3_t6_s5",
      "target": "neuro_root_p3_t6_s5_d1"
    },
    {
      "source": "neuro_root_p3_t6_s5",
      "target": "neuro_root_p3_t6_s5_d2"
    },
    {
      "source": "neuro_root",
      "target": "neuro_root_p4"
    },
    {
      "source": "neuro_root_p4",
      "target": "neuro_root_p4_t1"
    },
    {
      "source": "neuro_root_p4_t1",
      "target": "neuro_root_p4_t1_s1"
    },
    {
      "source": "neuro_root_p4_t1_s1",
      "target": "neuro_root_p4_t1_s1_d1"
    },
    {
      "source": "neuro_root_p4_t1_s1",
      "target": "neuro_root_p4_t1_s1_d2"
    },
    {
      "source": "neuro_root_p4_t1",
      "target": "neuro_root_p4_t1_s2"
    },
    {
      "source": "neuro_root_p4_t1_s2",
      "target": "neuro_root_p4_t1_s2_d1"
    },
    {
      "source": "neuro_root_p4_t1_s2",
      "target": "neuro_root_p4_t1_s2_d2"
    },
    {
      "source": "neuro_root_p4_t1",
      "target": "neuro_root_p4_t1_s3"
    },
    {
      "source": "neuro_root_p4_t1_s3",
      "target": "neuro_root_p4_t1_s3_d1"
    },
    {
      "source": "neuro_root_p4_t1_s3",
      "target": "neuro_root_p4_t1_s3_d2"
    },
    {
      "source": "neuro_root_p4_t1",
      "target": "neuro_root_p4_t1_s4"
    },
    {
      "source": "neuro_root_p4_t1_s4",
      "target": "neuro_root_p4_t1_s4_d1"
    },
    {
      "source": "neuro_root_p4_t1_s4",
      "target": "neuro_root_p4_t1_s4_d2"
    },
    {
      "source": "neuro_root_p4_t1",
      "target": "neuro_root_p4_t1_s5"
    },
    {
      "source": "neuro_root_p4_t1_s5",
      "target": "neuro_root_p4_t1_s5_d1"
    },
    {
      "source": "neuro_root_p4_t1_s5",
      "target": "neuro_root_p4_t1_s5_d2"
    },
    {
      "source": "neuro_root_p4",
      "target": "neuro_root_p4_t2"
    },
    {
      "source": "neuro_root_p4_t2",
      "target": "neuro_root_p4_t2_s1"
    },
    {
      "source": "neuro_root_p4_t2_s1",
      "target": "neuro_root_p4_t2_s1_d1"
    },
    {
      "source": "neuro_root_p4_t2_s1",
      "target": "neuro_root_p4_t2_s1_d2"
    },
    {
      "source": "neuro_root_p4_t2_s1",
      "target": "neuro_root_p4_t2_s1_d3"
    },
    {
      "source": "neuro_root_p4_t2",
      "target": "neuro_root_p4_t2_s2"
    },
    {
      "source": "neuro_root_p4_t2_s2",
      "target": "neuro_root_p4_t2_s2_d1"
    },
    {
      "source": "neuro_root_p4_t2_s2",
      "target": "neuro_root_p4_t2_s2_d2"
    },
    {
      "source": "neuro_root_p4_t2",
      "target": "neuro_root_p4_t2_s3"
    },
    {
      "source": "neuro_root_p4_t2_s3",
      "target": "neuro_root_p4_t2_s3_d1"
    },
    {
      "source": "neuro_root_p4_t2_s3",
      "target": "neuro_root_p4_t2_s3_d2"
    },
    {
      "source": "neuro_root_p4_t2",
      "target": "neuro_root_p4_t2_s4"
    },
    {
      "source": "neuro_root_p4_t2_s4",
      "target": "neuro_root_p4_t2_s4_d1"
    },
    {
      "source": "neuro_root_p4_t2_s4",
      "target": "neuro_root_p4_t2_s4_d2"
    },
    {
      "source": "neuro_root_p4_t2",
      "target": "neuro_root_p4_t2_s5"
    },
    {
      "source": "neuro_root_p4_t2_s5",
      "target": "neuro_root_p4_t2_s5_d1"
    },
    {
      "source": "neuro_root_p4_t2_s5",
      "target": "neuro_root_p4_t2_s5_d2"
    },
    {
      "source": "neuro_root_p4",
      "target": "neuro_root_p4_t3"
    },
    {
      "source": "neuro_root_p4_t3",
      "target": "neuro_root_p4_t3_s1"
    },
    {
      "source": "neuro_root_p4_t3_s1",
      "target": "neuro_root_p4_t3_s1_d1"
    },
    {
      "source": "neuro_root_p4_t3_s1",
      "target": "neuro_root_p4_t3_s1_d2"
    },
    {
      "source": "neuro_root_p4_t3",
      "target": "neuro_root_p4_t3_s2"
    },
    {
      "source": "neuro_root_p4_t3_s2",
      "target": "neuro_root_p4_t3_s2_d1"
    },
    {
      "source": "neuro_root_p4_t3_s2",
      "target": "neuro_root_p4_t3_s2_d2"
    },
    {
      "source": "neuro_root_p4_t3",
      "target": "neuro_root_p4_t3_s3"
    },
    {
      "source": "neuro_root_p4_t3_s3",
      "target": "neuro_root_p4_t3_s3_d1"
    },
    {
      "source": "neuro_root_p4_t3_s3",
      "target": "neuro_root_p4_t3_s3_d2"
    },
    {
      "source": "neuro_root_p4_t3",
      "target": "neuro_root_p4_t3_s4"
    },
    {
      "source": "neuro_root_p4_t3_s4",
      "target": "neuro_root_p4_t3_s4_d1"
    },
    {
      "source": "neuro_root_p4_t3_s4",
      "target": "neuro_root_p4_t3_s4_d2"
    },
    {
      "source": "neuro_root_p4_t3",
      "target": "neuro_root_p4_t3_s5"
    },
    {
      "source": "neuro_root_p4_t3_s5",
      "target": "neuro_root_p4_t3_s5_d1"
    },
    {
      "source": "neuro_root_p4_t3_s5",
      "target": "neuro_root_p4_t3_s5_d2"
    },
    {
      "source": "neuro_root_p4",
      "target": "neuro_root_p4_t4"
    },
    {
      "source": "neuro_root_p4_t4",
      "target": "neuro_root_p4_t4_s1"
    },
    {
      "source": "neuro_root_p4_t4_s1",
      "target": "neuro_root_p4_t4_s1_d1"
    },
    {
      "source": "neuro_root_p4_t4_s1",
      "target": "neuro_root_p4_t4_s1_d2"
    },
    {
      "source": "neuro_root_p4_t4",
      "target": "neuro_root_p4_t4_s2"
    },
    {
      "source": "neuro_root_p4_t4_s2",
      "target": "neuro_root_p4_t4_s2_d1"
    },
    {
      "source": "neuro_root_p4_t4_s2",
      "target": "neuro_root_p4_t4_s2_d2"
    },
    {
      "source": "neuro_root_p4_t4",
      "target": "neuro_root_p4_t4_s3"
    },
    {
      "source": "neuro_root_p4_t4_s3",
      "target": "neuro_root_p4_t4_s3_d1"
    },
    {
      "source": "neuro_root_p4_t4_s3",
      "target": "neuro_root_p4_t4_s3_d2"
    },
    {
      "source": "neuro_root_p4_t4",
      "target": "neuro_root_p4_t4_s4"
    },
    {
      "source": "neuro_root_p4_t4_s4",
      "target": "neuro_root_p4_t4_s4_d1"
    },
    {
      "source": "neuro_root_p4_t4_s4",
      "target": "neuro_root_p4_t4_s4_d2"
    },
    {
      "source": "neuro_root_p4_t4",
      "target": "neuro_root_p4_t4_s5"
    },
    {
      "source": "neuro_root_p4_t4_s5",
      "target": "neuro_root_p4_t4_s5_d1"
    },
    {
      "source": "neuro_root_p4_t4_s5",
      "target": "neuro_root_p4_t4_s5_d2"
    },
    {
      "source": "neuro_root_p4",
      "target": "neuro_root_p4_t5"
    },
    {
      "source": "neuro_root_p4_t5",
      "target": "neuro_root_p4_t5_s1"
    },
    {
      "source": "neuro_root_p4_t5_s1",
      "target": "neuro_root_p4_t5_s1_d1"
    },
    {
      "source": "neuro_root_p4_t5_s1",
      "target": "neuro_root_p4_t5_s1_d2"
    },
    {
      "source": "neuro_root_p4_t5",
      "target": "neuro_root_p4_t5_s2"
    },
    {
      "source": "neuro_root_p4_t5_s2",
      "target": "neuro_root_p4_t5_s2_d1"
    },
    {
      "source": "neuro_root_p4_t5_s2",
      "target": "neuro_root_p4_t5_s2_d2"
    },
    {
      "source": "neuro_root_p4_t5",
      "target": "neuro_root_p4_t5_s3"
    },
    {
      "source": "neuro_root_p4_t5_s3",
      "target": "neuro_root_p4_t5_s3_d1"
    },
    {
      "source": "neuro_root_p4_t5_s3",
      "target": "neuro_root_p4_t5_s3_d2"
    },
    {
      "source": "neuro_root_p4_t5",
      "target": "neuro_root_p4_t5_s4"
    },
    {
      "source": "neuro_root_p4_t5_s4",
      "target": "neuro_root_p4_t5_s4_d1"
    },
    {
      "source": "neuro_root_p4_t5_s4",
      "target": "neuro_root_p4_t5_s4_d2"
    },
    {
      "source": "neuro_root_p4_t5",
      "target": "neuro_root_p4_t5_s5"
    },
    {
      "source": "neuro_root_p4_t5_s5",
      "target": "neuro_root_p4_t5_s5_d1"
    },
    {
      "source": "neuro_root_p4_t5_s5",
      "target": "neuro_root_p4_t5_s5_d2"
    },
    {
      "source": "neuro_root_p4",
      "target": "neuro_root_p4_t6"
    },
    {
      "source": "neuro_root_p4_t6",
      "target": "neuro_root_p4_t6_s1"
    },
    {
      "source": "neuro_root_p4_t6_s1",
      "target": "neuro_root_p4_t6_s1_d1"
    },
    {
      "source": "neuro_root_p4_t6_s1",
      "target": "neuro_root_p4_t6_s1_d2"
    },
    {
      "source": "neuro_root_p4_t6",
      "target": "neuro_root_p4_t6_s2"
    },
    {
      "source": "neuro_root_p4_t6_s2",
      "target": "neuro_root_p4_t6_s2_d1"
    },
    {
      "source": "neuro_root_p4_t6_s2",
      "target": "neuro_root_p4_t6_s2_d2"
    },
    {
      "source": "neuro_root_p4_t6",
      "target": "neuro_root_p4_t6_s3"
    },
    {
      "source": "neuro_root_p4_t6_s3",
      "target": "neuro_root_p4_t6_s3_d1"
    },
    {
      "source": "neuro_root_p4_t6_s3",
      "target": "neuro_root_p4_t6_s3_d2"
    },
    {
      "source": "neuro_root_p4_t6",
      "target": "neuro_root_p4_t6_s4"
    },
    {
      "source": "neuro_root_p4_t6_s4",
      "target": "neuro_root_p4_t6_s4_d1"
    },
    {
      "source": "neuro_root_p4_t6_s4",
      "target": "neuro_root_p4_t6_s4_d2"
    },
    {
      "source": "neuro_root_p4_t6",
      "target": "neuro_root_p4_t6_s5"
    },
    {
      "source": "neuro_root_p4_t6_s5",
      "target": "neuro_root_p4_t6_s5_d1"
    },
    {
      "source": "neuro_root_p4_t6_s5",
      "target": "neuro_root_p4_t6_s5_d2"
    },
    {
      "source": "neuro_root",
      "target": "neuro_root_p5"
    },
    {
      "source": "neuro_root_p5",
      "target": "neuro_root_p5_t1"
    },
    {
      "source": "neuro_root_p5_t1",
      "target": "neuro_root_p5_t1_s1"
    },
    {
      "source": "neuro_root_p5_t1_s1",
      "target": "neuro_root_p5_t1_s1_d1"
    },
    {
      "source": "neuro_root_p5_t1_s1",
      "target": "neuro_root_p5_t1_s1_d2"
    },
    {
      "source": "neuro_root_p5_t1",
      "target": "neuro_root_p5_t1_s2"
    },
    {
      "source": "neuro_root_p5_t1_s2",
      "target": "neuro_root_p5_t1_s2_d1"
    },
    {
      "source": "neuro_root_p5_t1_s2",
      "target": "neuro_root_p5_t1_s2_d2"
    },
    {
      "source": "neuro_root_p5_t1",
      "target": "neuro_root_p5_t1_s3"
    },
    {
      "source": "neuro_root_p5_t1_s3",
      "target": "neuro_root_p5_t1_s3_d1"
    },
    {
      "source": "neuro_root_p5_t1_s3",
      "target": "neuro_root_p5_t1_s3_d2"
    },
    {
      "source": "neuro_root_p5_t1",
      "target": "neuro_root_p5_t1_s4"
    },
    {
      "source": "neuro_root_p5_t1_s4",
      "target": "neuro_root_p5_t1_s4_d1"
    },
    {
      "source": "neuro_root_p5_t1_s4",
      "target": "neuro_root_p5_t1_s4_d2"
    },
    {
      "source": "neuro_root_p5_t1",
      "target": "neuro_root_p5_t1_s5"
    },
    {
      "source": "neuro_root_p5_t1_s5",
      "target": "neuro_root_p5_t1_s5_d1"
    },
    {
      "source": "neuro_root_p5_t1_s5",
      "target": "neuro_root_p5_t1_s5_d2"
    },
    {
      "source": "neuro_root_p5_t1_s5",
      "target": "neuro_root_p5_t1_s5_d3"
    },
    {
      "source": "neuro_root_p5",
      "target": "neuro_root_p5_t2"
    },
    {
      "source": "neuro_root_p5_t2",
      "target": "neuro_root_p5_t2_s1"
    },
    {
      "source": "neuro_root_p5_t2_s1",
      "target": "neuro_root_p5_t2_s1_d1"
    },
    {
      "source": "neuro_root_p5_t2_s1",
      "target": "neuro_root_p5_t2_s1_d2"
    },
    {
      "source": "neuro_root_p5_t2",
      "target": "neuro_root_p5_t2_s2"
    },
    {
      "source": "neuro_root_p5_t2_s2",
      "target": "neuro_root_p5_t2_s2_d1"
    },
    {
      "source": "neuro_root_p5_t2_s2",
      "target": "neuro_root_p5_t2_s2_d2"
    },
    {
      "source": "neuro_root_p5_t2",
      "target": "neuro_root_p5_t2_s3"
    },
    {
      "source": "neuro_root_p5_t2_s3",
      "target": "neuro_root_p5_t2_s3_d1"
    },
    {
      "source": "neuro_root_p5_t2_s3",
      "target": "neuro_root_p5_t2_s3_d2"
    },
    {
      "source": "neuro_root_p5_t2",
      "target": "neuro_root_p5_t2_s4"
    },
    {
      "source": "neuro_root_p5_t2_s4",
      "target": "neuro_root_p5_t2_s4_d1"
    },
    {
      "source": "neuro_root_p5_t2_s4",
      "target": "neuro_root_p5_t2_s4_d2"
    },
    {
      "source": "neuro_root_p5_t2",
      "target": "neuro_root_p5_t2_s5"
    },
    {
      "source": "neuro_root_p5_t2_s5",
      "target": "neuro_root_p5_t2_s5_d1"
    },
    {
      "source": "neuro_root_p5_t2_s5",
      "target": "neuro_root_p5_t2_s5_d2"
    },
    {
      "source": "neuro_root_p5",
      "target": "neuro_root_p5_t3"
    },
    {
      "source": "neuro_root_p5_t3",
      "target": "neuro_root_p5_t3_s1"
    },
    {
      "source": "neuro_root_p5_t3_s1",
      "target": "neuro_root_p5_t3_s1_d1"
    },
    {
      "source": "neuro_root_p5_t3_s1",
      "target": "neuro_root_p5_t3_s1_d2"
    },
    {
      "source": "neuro_root_p5_t3",
      "target": "neuro_root_p5_t3_s2"
    },
    {
      "source": "neuro_root_p5_t3_s2",
      "target": "neuro_root_p5_t3_s2_d1"
    },
    {
      "source": "neuro_root_p5_t3_s2",
      "target": "neuro_root_p5_t3_s2_d2"
    },
    {
      "source": "neuro_root_p5_t3",
      "target": "neuro_root_p5_t3_s3"
    },
    {
      "source": "neuro_root_p5_t3_s3",
      "target": "neuro_root_p5_t3_s3_d1"
    },
    {
      "source": "neuro_root_p5_t3_s3",
      "target": "neuro_root_p5_t3_s3_d2"
    },
    {
      "source": "neuro_root_p5_t3",
      "target": "neuro_root_p5_t3_s4"
    },
    {
      "source": "neuro_root_p5_t3_s4",
      "target": "neuro_root_p5_t3_s4_d1"
    },
    {
      "source": "neuro_root_p5_t3_s4",
      "target": "neuro_root_p5_t3_s4_d2"
    },
    {
      "source": "neuro_root_p5_t3",
      "target": "neuro_root_p5_t3_s5"
    },
    {
      "source": "neuro_root_p5_t3_s5",
      "target": "neuro_root_p5_t3_s5_d1"
    },
    {
      "source": "neuro_root_p5_t3_s5",
      "target": "neuro_root_p5_t3_s5_d2"
    },
    {
      "source": "neuro_root_p5",
      "target": "neuro_root_p5_t4"
    },
    {
      "source": "neuro_root_p5_t4",
      "target": "neuro_root_p5_t4_s1"
    },
    {
      "source": "neuro_root_p5_t4_s1",
      "target": "neuro_root_p5_t4_s1_d1"
    },
    {
      "source": "neuro_root_p5_t4_s1",
      "target": "neuro_root_p5_t4_s1_d2"
    },
    {
      "source": "neuro_root_p5_t4",
      "target": "neuro_root_p5_t4_s2"
    },
    {
      "source": "neuro_root_p5_t4_s2",
      "target": "neuro_root_p5_t4_s2_d1"
    },
    {
      "source": "neuro_root_p5_t4_s2",
      "target": "neuro_root_p5_t4_s2_d2"
    },
    {
      "source": "neuro_root_p5_t4",
      "target": "neuro_root_p5_t4_s3"
    },
    {
      "source": "neuro_root_p5_t4_s3",
      "target": "neuro_root_p5_t4_s3_d1"
    },
    {
      "source": "neuro_root_p5_t4_s3",
      "target": "neuro_root_p5_t4_s3_d2"
    },
    {
      "source": "neuro_root_p5_t4",
      "target": "neuro_root_p5_t4_s4"
    },
    {
      "source": "neuro_root_p5_t4_s4",
      "target": "neuro_root_p5_t4_s4_d1"
    },
    {
      "source": "neuro_root_p5_t4_s4",
      "target": "neuro_root_p5_t4_s4_d2"
    },
    {
      "source": "neuro_root_p5_t4",
      "target": "neuro_root_p5_t4_s5"
    },
    {
      "source": "neuro_root_p5_t4_s5",
      "target": "neuro_root_p5_t4_s5_d1"
    },
    {
      "source": "neuro_root_p5_t4_s5",
      "target": "neuro_root_p5_t4_s5_d2"
    },
    {
      "source": "neuro_root_p5",
      "target": "neuro_root_p5_t5"
    },
    {
      "source": "neuro_root_p5_t5",
      "target": "neuro_root_p5_t5_s1"
    },
    {
      "source": "neuro_root_p5_t5_s1",
      "target": "neuro_root_p5_t5_s1_d1"
    },
    {
      "source": "neuro_root_p5_t5_s1",
      "target": "neuro_root_p5_t5_s1_d2"
    },
    {
      "source": "neuro_root_p5_t5",
      "target": "neuro_root_p5_t5_s2"
    },
    {
      "source": "neuro_root_p5_t5_s2",
      "target": "neuro_root_p5_t5_s2_d1"
    },
    {
      "source": "neuro_root_p5_t5_s2",
      "target": "neuro_root_p5_t5_s2_d2"
    },
    {
      "source": "neuro_root_p5_t5",
      "target": "neuro_root_p5_t5_s3"
    },
    {
      "source": "neuro_root_p5_t5_s3",
      "target": "neuro_root_p5_t5_s3_d1"
    },
    {
      "source": "neuro_root_p5_t5_s3",
      "target": "neuro_root_p5_t5_s3_d2"
    },
    {
      "source": "neuro_root_p5_t5",
      "target": "neuro_root_p5_t5_s4"
    },
    {
      "source": "neuro_root_p5_t5_s4",
      "target": "neuro_root_p5_t5_s4_d1"
    },
    {
      "source": "neuro_root_p5_t5_s4",
      "target": "neuro_root_p5_t5_s4_d2"
    },
    {
      "source": "neuro_root_p5_t5",
      "target": "neuro_root_p5_t5_s5"
    },
    {
      "source": "neuro_root_p5_t5_s5",
      "target": "neuro_root_p5_t5_s5_d1"
    },
    {
      "source": "neuro_root_p5_t5_s5",
      "target": "neuro_root_p5_t5_s5_d2"
    },
    {
      "source": "neuro_root_p5",
      "target": "neuro_root_p5_t6"
    },
    {
      "source": "neuro_root_p5_t6",
      "target": "neuro_root_p5_t6_s1"
    },
    {
      "source": "neuro_root_p5_t6_s1",
      "target": "neuro_root_p5_t6_s1_d1"
    },
    {
      "source": "neuro_root_p5_t6_s1",
      "target": "neuro_root_p5_t6_s1_d2"
    },
    {
      "source": "neuro_root_p5_t6",
      "target": "neuro_root_p5_t6_s2"
    },
    {
      "source": "neuro_root_p5_t6_s2",
      "target": "neuro_root_p5_t6_s2_d1"
    },
    {
      "source": "neuro_root_p5_t6_s2",
      "target": "neuro_root_p5_t6_s2_d2"
    },
    {
      "source": "neuro_root_p5_t6",
      "target": "neuro_root_p5_t6_s3"
    },
    {
      "source": "neuro_root_p5_t6_s3",
      "target": "neuro_root_p5_t6_s3_d1"
    },
    {
      "source": "neuro_root_p5_t6_s3",
      "target": "neuro_root_p5_t6_s3_d2"
    },
    {
      "source": "neuro_root_p5_t6",
      "target": "neuro_root_p5_t6_s4"
    },
    {
      "source": "neuro_root_p5_t6_s4",
      "target": "neuro_root_p5_t6_s4_d1"
    },
    {
      "source": "neuro_root_p5_t6_s4",
      "target": "neuro_root_p5_t6_s4_d2"
    },
    {
      "source": "neuro_root_p5_t6",
      "target": "neuro_root_p5_t6_s5"
    },
    {
      "source": "neuro_root_p5_t6_s5",
      "target": "neuro_root_p5_t6_s5_d1"
    },
    {
      "source": "neuro_root_p5_t6_s5",
      "target": "neuro_root_p5_t6_s5_d2"
    },
    {
      "source": "neuro_root",
      "target": "neuro_root_p6"
    },
    {
      "source": "neuro_root_p6",
      "target": "neuro_root_p6_t1"
    },
    {
      "source": "neuro_root_p6_t1",
      "target": "neuro_root_p6_t1_s1"
    },
    {
      "source": "neuro_root_p6_t1_s1",
      "target": "neuro_root_p6_t1_s1_d1"
    },
    {
      "source": "neuro_root_p6_t1_s1",
      "target": "neuro_root_p6_t1_s1_d2"
    },
    {
      "source": "neuro_root_p6_t1",
      "target": "neuro_root_p6_t1_s2"
    },
    {
      "source": "neuro_root_p6_t1_s2",
      "target": "neuro_root_p6_t1_s2_d1"
    },
    {
      "source": "neuro_root_p6_t1_s2",
      "target": "neuro_root_p6_t1_s2_d2"
    },
    {
      "source": "neuro_root_p6_t1",
      "target": "neuro_root_p6_t1_s3"
    },
    {
      "source": "neuro_root_p6_t1_s3",
      "target": "neuro_root_p6_t1_s3_d1"
    },
    {
      "source": "neuro_root_p6_t1_s3",
      "target": "neuro_root_p6_t1_s3_d2"
    },
    {
      "source": "neuro_root_p6_t1",
      "target": "neuro_root_p6_t1_s4"
    },
    {
      "source": "neuro_root_p6_t1_s4",
      "target": "neuro_root_p6_t1_s4_d1"
    },
    {
      "source": "neuro_root_p6_t1_s4",
      "target": "neuro_root_p6_t1_s4_d2"
    },
    {
      "source": "neuro_root_p6_t1",
      "target": "neuro_root_p6_t1_s5"
    },
    {
      "source": "neuro_root_p6_t1_s5",
      "target": "neuro_root_p6_t1_s5_d1"
    },
    {
      "source": "neuro_root_p6_t1_s5",
      "target": "neuro_root_p6_t1_s5_d2"
    },
    {
      "source": "neuro_root_p6",
      "target": "neuro_root_p6_t2"
    },
    {
      "source": "neuro_root_p6_t2",
      "target": "neuro_root_p6_t2_s1"
    },
    {
      "source": "neuro_root_p6_t2_s1",
      "target": "neuro_root_p6_t2_s1_d1"
    },
    {
      "source": "neuro_root_p6_t2_s1",
      "target": "neuro_root_p6_t2_s1_d2"
    },
    {
      "source": "neuro_root_p6_t2",
      "target": "neuro_root_p6_t2_s2"
    },
    {
      "source": "neuro_root_p6_t2_s2",
      "target": "neuro_root_p6_t2_s2_d1"
    },
    {
      "source": "neuro_root_p6_t2_s2",
      "target": "neuro_root_p6_t2_s2_d2"
    },
    {
      "source": "neuro_root_p6_t2",
      "target": "neuro_root_p6_t2_s3"
    },
    {
      "source": "neuro_root_p6_t2_s3",
      "target": "neuro_root_p6_t2_s3_d1"
    },
    {
      "source": "neuro_root_p6_t2_s3",
      "target": "neuro_root_p6_t2_s3_d2"
    },
    {
      "source": "neuro_root_p6_t2",
      "target": "neuro_root_p6_t2_s4"
    },
    {
      "source": "neuro_root_p6_t2_s4",
      "target": "neuro_root_p6_t2_s4_d1"
    },
    {
      "source": "neuro_root_p6_t2_s4",
      "target": "neuro_root_p6_t2_s4_d2"
    },
    {
      "source": "neuro_root_p6_t2",
      "target": "neuro_root_p6_t2_s5"
    },
    {
      "source": "neuro_root_p6_t2_s5",
      "target": "neuro_root_p6_t2_s5_d1"
    },
    {
      "source": "neuro_root_p6_t2_s5",
      "target": "neuro_root_p6_t2_s5_d2"
    },
    {
      "source": "neuro_root_p6",
      "target": "neuro_root_p6_t3"
    },
    {
      "source": "neuro_root_p6_t3",
      "target": "neuro_root_p6_t3_s1"
    },
    {
      "source": "neuro_root_p6_t3_s1",
      "target": "neuro_root_p6_t3_s1_d1"
    },
    {
      "source": "neuro_root_p6_t3_s1",
      "target": "neuro_root_p6_t3_s1_d2"
    },
    {
      "source": "neuro_root_p6_t3",
      "target": "neuro_root_p6_t3_s2"
    },
    {
      "source": "neuro_root_p6_t3_s2",
      "target": "neuro_root_p6_t3_s2_d1"
    },
    {
      "source": "neuro_root_p6_t3_s2",
      "target": "neuro_root_p6_t3_s2_d2"
    },
    {
      "source": "neuro_root_p6_t3",
      "target": "neuro_root_p6_t3_s3"
    },
    {
      "source": "neuro_root_p6_t3_s3",
      "target": "neuro_root_p6_t3_s3_d1"
    },
    {
      "source": "neuro_root_p6_t3_s3",
      "target": "neuro_root_p6_t3_s3_d2"
    },
    {
      "source": "neuro_root_p6_t3",
      "target": "neuro_root_p6_t3_s4"
    },
    {
      "source": "neuro_root_p6_t3_s4",
      "target": "neuro_root_p6_t3_s4_d1"
    },
    {
      "source": "neuro_root_p6_t3_s4",
      "target": "neuro_root_p6_t3_s4_d2"
    },
    {
      "source": "neuro_root_p6_t3",
      "target": "neuro_root_p6_t3_s5"
    },
    {
      "source": "neuro_root_p6_t3_s5",
      "target": "neuro_root_p6_t3_s5_d1"
    },
    {
      "source": "neuro_root_p6_t3_s5",
      "target": "neuro_root_p6_t3_s5_d2"
    },
    {
      "source": "neuro_root_p6",
      "target": "neuro_root_p6_t4"
    },
    {
      "source": "neuro_root_p6_t4",
      "target": "neuro_root_p6_t4_s1"
    },
    {
      "source": "neuro_root_p6_t4_s1",
      "target": "neuro_root_p6_t4_s1_d1"
    },
    {
      "source": "neuro_root_p6_t4_s1",
      "target": "neuro_root_p6_t4_s1_d2"
    },
    {
      "source": "neuro_root_p6_t4",
      "target": "neuro_root_p6_t4_s2"
    },
    {
      "source": "neuro_root_p6_t4_s2",
      "target": "neuro_root_p6_t4_s2_d1"
    },
    {
      "source": "neuro_root_p6_t4_s2",
      "target": "neuro_root_p6_t4_s2_d2"
    },
    {
      "source": "neuro_root_p6_t4",
      "target": "neuro_root_p6_t4_s3"
    },
    {
      "source": "neuro_root_p6_t4_s3",
      "target": "neuro_root_p6_t4_s3_d1"
    },
    {
      "source": "neuro_root_p6_t4_s3",
      "target": "neuro_root_p6_t4_s3_d2"
    },
    {
      "source": "neuro_root_p6_t4",
      "target": "neuro_root_p6_t4_s4"
    },
    {
      "source": "neuro_root_p6_t4_s4",
      "target": "neuro_root_p6_t4_s4_d1"
    },
    {
      "source": "neuro_root_p6_t4_s4",
      "target": "neuro_root_p6_t4_s4_d2"
    },
    {
      "source": "neuro_root_p6_t4",
      "target": "neuro_root_p6_t4_s5"
    },
    {
      "source": "neuro_root_p6_t4_s5",
      "target": "neuro_root_p6_t4_s5_d1"
    },
    {
      "source": "neuro_root_p6_t4_s5",
      "target": "neuro_root_p6_t4_s5_d2"
    },
    {
      "source": "neuro_root_p6",
      "target": "neuro_root_p6_t5"
    },
    {
      "source": "neuro_root_p6_t5",
      "target": "neuro_root_p6_t5_s1"
    },
    {
      "source": "neuro_root_p6_t5_s1",
      "target": "neuro_root_p6_t5_s1_d1"
    },
    {
      "source": "neuro_root_p6_t5_s1",
      "target": "neuro_root_p6_t5_s1_d2"
    },
    {
      "source": "neuro_root_p6_t5",
      "target": "neuro_root_p6_t5_s2"
    },
    {
      "source": "neuro_root_p6_t5_s2",
      "target": "neuro_root_p6_t5_s2_d1"
    },
    {
      "source": "neuro_root_p6_t5_s2",
      "target": "neuro_root_p6_t5_s2_d2"
    },
    {
      "source": "neuro_root_p6_t5",
      "target": "neuro_root_p6_t5_s3"
    },
    {
      "source": "neuro_root_p6_t5_s3",
      "target": "neuro_root_p6_t5_s3_d1"
    },
    {
      "source": "neuro_root_p6_t5_s3",
      "target": "neuro_root_p6_t5_s3_d2"
    },
    {
      "source": "neuro_root_p6_t5",
      "target": "neuro_root_p6_t5_s4"
    },
    {
      "source": "neuro_root_p6_t5_s4",
      "target": "neuro_root_p6_t5_s4_d1"
    },
    {
      "source": "neuro_root_p6_t5_s4",
      "target": "neuro_root_p6_t5_s4_d2"
    },
    {
      "source": "neuro_root_p6_t5",
      "target": "neuro_root_p6_t5_s5"
    },
    {
      "source": "neuro_root_p6_t5_s5",
      "target": "neuro_root_p6_t5_s5_d1"
    },
    {
      "source": "neuro_root_p6_t5_s5",
      "target": "neuro_root_p6_t5_s5_d2"
    },
    {
      "source": "neuro_root_p6",
      "target": "neuro_root_p6_t6"
    },
    {
      "source": "neuro_root_p6_t6",
      "target": "neuro_root_p6_t6_s1"
    },
    {
      "source": "neuro_root_p6_t6_s1",
      "target": "neuro_root_p6_t6_s1_d1"
    },
    {
      "source": "neuro_root_p6_t6_s1",
      "target": "neuro_root_p6_t6_s1_d2"
    },
    {
      "source": "neuro_root_p6_t6",
      "target": "neuro_root_p6_t6_s2"
    },
    {
      "source": "neuro_root_p6_t6_s2",
      "target": "neuro_root_p6_t6_s2_d1"
    },
    {
      "source": "neuro_root_p6_t6_s2",
      "target": "neuro_root_p6_t6_s2_d2"
    },
    {
      "source": "neuro_root_p6_t6",
      "target": "neuro_root_p6_t6_s3"
    },
    {
      "source": "neuro_root_p6_t6_s3",
      "target": "neuro_root_p6_t6_s3_d1"
    },
    {
      "source": "neuro_root_p6_t6_s3",
      "target": "neuro_root_p6_t6_s3_d2"
    },
    {
      "source": "neuro_root_p6_t6",
      "target": "neuro_root_p6_t6_s4"
    },
    {
      "source": "neuro_root_p6_t6_s4",
      "target": "neuro_root_p6_t6_s4_d1"
    },
    {
      "source": "neuro_root_p6_t6_s4",
      "target": "neuro_root_p6_t6_s4_d2"
    },
    {
      "source": "neuro_root_p6_t6",
      "target": "neuro_root_p6_t6_s5"
    },
    {
      "source": "neuro_root_p6_t6_s5",
      "target": "neuro_root_p6_t6_s5_d1"
    },
    {
      "source": "neuro_root_p6_t6_s5",
      "target": "neuro_root_p6_t6_s5_d2"
    },
    {
      "source": "neuro_root",
      "target": "neuro_root_p7"
    },
    {
      "source": "neuro_root_p7",
      "target": "neuro_root_p7_t1"
    },
    {
      "source": "neuro_root_p7_t1",
      "target": "neuro_root_p7_t1_s1"
    },
    {
      "source": "neuro_root_p7_t1_s1",
      "target": "neuro_root_p7_t1_s1_d1"
    },
    {
      "source": "neuro_root_p7_t1_s1",
      "target": "neuro_root_p7_t1_s1_d2"
    },
    {
      "source": "neuro_root_p7_t1",
      "target": "neuro_root_p7_t1_s2"
    },
    {
      "source": "neuro_root_p7_t1_s2",
      "target": "neuro_root_p7_t1_s2_d1"
    },
    {
      "source": "neuro_root_p7_t1_s2",
      "target": "neuro_root_p7_t1_s2_d2"
    },
    {
      "source": "neuro_root_p7_t1",
      "target": "neuro_root_p7_t1_s3"
    },
    {
      "source": "neuro_root_p7_t1_s3",
      "target": "neuro_root_p7_t1_s3_d1"
    },
    {
      "source": "neuro_root_p7_t1_s3",
      "target": "neuro_root_p7_t1_s3_d2"
    },
    {
      "source": "neuro_root_p7_t1",
      "target": "neuro_root_p7_t1_s4"
    },
    {
      "source": "neuro_root_p7_t1_s4",
      "target": "neuro_root_p7_t1_s4_d1"
    },
    {
      "source": "neuro_root_p7_t1_s4",
      "target": "neuro_root_p7_t1_s4_d2"
    },
    {
      "source": "neuro_root_p7_t1",
      "target": "neuro_root_p7_t1_s5"
    },
    {
      "source": "neuro_root_p7_t1_s5",
      "target": "neuro_root_p7_t1_s5_d1"
    },
    {
      "source": "neuro_root_p7_t1_s5",
      "target": "neuro_root_p7_t1_s5_d2"
    },
    {
      "source": "neuro_root_p7",
      "target": "neuro_root_p7_t2"
    },
    {
      "source": "neuro_root_p7_t2",
      "target": "neuro_root_p7_t2_s1"
    },
    {
      "source": "neuro_root_p7_t2_s1",
      "target": "neuro_root_p7_t2_s1_d1"
    },
    {
      "source": "neuro_root_p7_t2_s1",
      "target": "neuro_root_p7_t2_s1_d2"
    },
    {
      "source": "neuro_root_p7_t2",
      "target": "neuro_root_p7_t2_s2"
    },
    {
      "source": "neuro_root_p7_t2_s2",
      "target": "neuro_root_p7_t2_s2_d1"
    },
    {
      "source": "neuro_root_p7_t2_s2",
      "target": "neuro_root_p7_t2_s2_d2"
    },
    {
      "source": "neuro_root_p7_t2",
      "target": "neuro_root_p7_t2_s3"
    },
    {
      "source": "neuro_root_p7_t2_s3",
      "target": "neuro_root_p7_t2_s3_d1"
    },
    {
      "source": "neuro_root_p7_t2_s3",
      "target": "neuro_root_p7_t2_s3_d2"
    },
    {
      "source": "neuro_root_p7_t2",
      "target": "neuro_root_p7_t2_s4"
    },
    {
      "source": "neuro_root_p7_t2_s4",
      "target": "neuro_root_p7_t2_s4_d1"
    },
    {
      "source": "neuro_root_p7_t2_s4",
      "target": "neuro_root_p7_t2_s4_d2"
    },
    {
      "source": "neuro_root_p7_t2",
      "target": "neuro_root_p7_t2_s5"
    },
    {
      "source": "neuro_root_p7_t2_s5",
      "target": "neuro_root_p7_t2_s5_d1"
    },
    {
      "source": "neuro_root_p7_t2_s5",
      "target": "neuro_root_p7_t2_s5_d2"
    },
    {
      "source": "neuro_root_p7",
      "target": "neuro_root_p7_t3"
    },
    {
      "source": "neuro_root_p7_t3",
      "target": "neuro_root_p7_t3_s1"
    },
    {
      "source": "neuro_root_p7_t3_s1",
      "target": "neuro_root_p7_t3_s1_d1"
    },
    {
      "source": "neuro_root_p7_t3_s1",
      "target": "neuro_root_p7_t3_s1_d2"
    },
    {
      "source": "neuro_root_p7_t3",
      "target": "neuro_root_p7_t3_s2"
    },
    {
      "source": "neuro_root_p7_t3_s2",
      "target": "neuro_root_p7_t3_s2_d1"
    },
    {
      "source": "neuro_root_p7_t3_s2",
      "target": "neuro_root_p7_t3_s2_d2"
    },
    {
      "source": "neuro_root_p7_t3",
      "target": "neuro_root_p7_t3_s3"
    },
    {
      "source": "neuro_root_p7_t3_s3",
      "target": "neuro_root_p7_t3_s3_d1"
    },
    {
      "source": "neuro_root_p7_t3_s3",
      "target": "neuro_root_p7_t3_s3_d2"
    },
    {
      "source": "neuro_root_p7_t3",
      "target": "neuro_root_p7_t3_s4"
    },
    {
      "source": "neuro_root_p7_t3_s4",
      "target": "neuro_root_p7_t3_s4_d1"
    },
    {
      "source": "neuro_root_p7_t3_s4",
      "target": "neuro_root_p7_t3_s4_d2"
    },
    {
      "source": "neuro_root_p7_t3",
      "target": "neuro_root_p7_t3_s5"
    },
    {
      "source": "neuro_root_p7_t3_s5",
      "target": "neuro_root_p7_t3_s5_d1"
    },
    {
      "source": "neuro_root_p7_t3_s5",
      "target": "neuro_root_p7_t3_s5_d2"
    },
    {
      "source": "neuro_root_p7",
      "target": "neuro_root_p7_t4"
    },
    {
      "source": "neuro_root_p7_t4",
      "target": "neuro_root_p7_t4_s1"
    },
    {
      "source": "neuro_root_p7_t4_s1",
      "target": "neuro_root_p7_t4_s1_d1"
    },
    {
      "source": "neuro_root_p7_t4_s1",
      "target": "neuro_root_p7_t4_s1_d2"
    },
    {
      "source": "neuro_root_p7_t4",
      "target": "neuro_root_p7_t4_s2"
    },
    {
      "source": "neuro_root_p7_t4_s2",
      "target": "neuro_root_p7_t4_s2_d1"
    },
    {
      "source": "neuro_root_p7_t4_s2",
      "target": "neuro_root_p7_t4_s2_d2"
    },
    {
      "source": "neuro_root_p7_t4",
      "target": "neuro_root_p7_t4_s3"
    },
    {
      "source": "neuro_root_p7_t4_s3",
      "target": "neuro_root_p7_t4_s3_d1"
    },
    {
      "source": "neuro_root_p7_t4_s3",
      "target": "neuro_root_p7_t4_s3_d2"
    },
    {
      "source": "neuro_root_p7_t4",
      "target": "neuro_root_p7_t4_s4"
    },
    {
      "source": "neuro_root_p7_t4_s4",
      "target": "neuro_root_p7_t4_s4_d1"
    },
    {
      "source": "neuro_root_p7_t4_s4",
      "target": "neuro_root_p7_t4_s4_d2"
    },
    {
      "source": "neuro_root_p7_t4",
      "target": "neuro_root_p7_t4_s5"
    },
    {
      "source": "neuro_root_p7_t4_s5",
      "target": "neuro_root_p7_t4_s5_d1"
    },
    {
      "source": "neuro_root_p7_t4_s5",
      "target": "neuro_root_p7_t4_s5_d2"
    },
    {
      "source": "neuro_root_p7",
      "target": "neuro_root_p7_t5"
    },
    {
      "source": "neuro_root_p7_t5",
      "target": "neuro_root_p7_t5_s1"
    },
    {
      "source": "neuro_root_p7_t5_s1",
      "target": "neuro_root_p7_t5_s1_d1"
    },
    {
      "source": "neuro_root_p7_t5_s1",
      "target": "neuro_root_p7_t5_s1_d2"
    },
    {
      "source": "neuro_root_p7_t5",
      "target": "neuro_root_p7_t5_s2"
    },
    {
      "source": "neuro_root_p7_t5_s2",
      "target": "neuro_root_p7_t5_s2_d1"
    },
    {
      "source": "neuro_root_p7_t5_s2",
      "target": "neuro_root_p7_t5_s2_d2"
    },
    {
      "source": "neuro_root_p7_t5",
      "target": "neuro_root_p7_t5_s3"
    },
    {
      "source": "neuro_root_p7_t5_s3",
      "target": "neuro_root_p7_t5_s3_d1"
    },
    {
      "source": "neuro_root_p7_t5_s3",
      "target": "neuro_root_p7_t5_s3_d2"
    },
    {
      "source": "neuro_root_p7_t5",
      "target": "neuro_root_p7_t5_s4"
    },
    {
      "source": "neuro_root_p7_t5_s4",
      "target": "neuro_root_p7_t5_s4_d1"
    },
    {
      "source": "neuro_root_p7_t5_s4",
      "target": "neuro_root_p7_t5_s4_d2"
    },
    {
      "source": "neuro_root_p7_t5",
      "target": "neuro_root_p7_t5_s5"
    },
    {
      "source": "neuro_root_p7_t5_s5",
      "target": "neuro_root_p7_t5_s5_d1"
    },
    {
      "source": "neuro_root_p7_t5_s5",
      "target": "neuro_root_p7_t5_s5_d2"
    },
    {
      "source": "neuro_root_p7",
      "target": "neuro_root_p7_t6"
    },
    {
      "source": "neuro_root_p7_t6",
      "target": "neuro_root_p7_t6_s1"
    },
    {
      "source": "neuro_root_p7_t6_s1",
      "target": "neuro_root_p7_t6_s1_d1"
    },
    {
      "source": "neuro_root_p7_t6_s1",
      "target": "neuro_root_p7_t6_s1_d2"
    },
    {
      "source": "neuro_root_p7_t6",
      "target": "neuro_root_p7_t6_s2"
    },
    {
      "source": "neuro_root_p7_t6_s2",
      "target": "neuro_root_p7_t6_s2_d1"
    },
    {
      "source": "neuro_root_p7_t6_s2",
      "target": "neuro_root_p7_t6_s2_d2"
    },
    {
      "source": "neuro_root_p7_t6",
      "target": "neuro_root_p7_t6_s3"
    },
    {
      "source": "neuro_root_p7_t6_s3",
      "target": "neuro_root_p7_t6_s3_d1"
    },
    {
      "source": "neuro_root_p7_t6_s3",
      "target": "neuro_root_p7_t6_s3_d2"
    },
    {
      "source": "neuro_root_p7_t6",
      "target": "neuro_root_p7_t6_s4"
    },
    {
      "source": "neuro_root_p7_t6_s4",
      "target": "neuro_root_p7_t6_s4_d1"
    },
    {
      "source": "neuro_root_p7_t6_s4",
      "target": "neuro_root_p7_t6_s4_d2"
    },
    {
      "source": "neuro_root_p7_t6",
      "target": "neuro_root_p7_t6_s5"
    },
    {
      "source": "neuro_root_p7_t6_s5",
      "target": "neuro_root_p7_t6_s5_d1"
    },
    {
      "source": "neuro_root_p7_t6_s5",
      "target": "neuro_root_p7_t6_s5_d2"
    },
    {
      "source": "neuro_root",
      "target": "neuro_root_p8"
    },
    {
      "source": "neuro_root_p8",
      "target": "neuro_root_p8_t1"
    },
    {
      "source": "neuro_root_p8_t1",
      "target": "neuro_root_p8_t1_s1"
    },
    {
      "source": "neuro_root_p8_t1_s1",
      "target": "neuro_root_p8_t1_s1_d1"
    },
    {
      "source": "neuro_root_p8_t1_s1",
      "target": "neuro_root_p8_t1_s1_d2"
    },
    {
      "source": "neuro_root_p8_t1",
      "target": "neuro_root_p8_t1_s2"
    },
    {
      "source": "neuro_root_p8_t1_s2",
      "target": "neuro_root_p8_t1_s2_d1"
    },
    {
      "source": "neuro_root_p8_t1_s2",
      "target": "neuro_root_p8_t1_s2_d2"
    },
    {
      "source": "neuro_root_p8_t1",
      "target": "neuro_root_p8_t1_s3"
    },
    {
      "source": "neuro_root_p8_t1_s3",
      "target": "neuro_root_p8_t1_s3_d1"
    },
    {
      "source": "neuro_root_p8_t1_s3",
      "target": "neuro_root_p8_t1_s3_d2"
    },
    {
      "source": "neuro_root_p8_t1",
      "target": "neuro_root_p8_t1_s4"
    },
    {
      "source": "neuro_root_p8_t1_s4",
      "target": "neuro_root_p8_t1_s4_d1"
    },
    {
      "source": "neuro_root_p8_t1_s4",
      "target": "neuro_root_p8_t1_s4_d2"
    },
    {
      "source": "neuro_root_p8_t1",
      "target": "neuro_root_p8_t1_s5"
    },
    {
      "source": "neuro_root_p8_t1_s5",
      "target": "neuro_root_p8_t1_s5_d1"
    },
    {
      "source": "neuro_root_p8_t1_s5",
      "target": "neuro_root_p8_t1_s5_d2"
    },
    {
      "source": "neuro_root_p8",
      "target": "neuro_root_p8_t2"
    },
    {
      "source": "neuro_root_p8_t2",
      "target": "neuro_root_p8_t2_s1"
    },
    {
      "source": "neuro_root_p8_t2_s1",
      "target": "neuro_root_p8_t2_s1_d1"
    },
    {
      "source": "neuro_root_p8_t2_s1",
      "target": "neuro_root_p8_t2_s1_d2"
    },
    {
      "source": "neuro_root_p8_t2",
      "target": "neuro_root_p8_t2_s2"
    },
    {
      "source": "neuro_root_p8_t2_s2",
      "target": "neuro_root_p8_t2_s2_d1"
    },
    {
      "source": "neuro_root_p8_t2_s2",
      "target": "neuro_root_p8_t2_s2_d2"
    },
    {
      "source": "neuro_root_p8_t2",
      "target": "neuro_root_p8_t2_s3"
    },
    {
      "source": "neuro_root_p8_t2_s3",
      "target": "neuro_root_p8_t2_s3_d1"
    },
    {
      "source": "neuro_root_p8_t2_s3",
      "target": "neuro_root_p8_t2_s3_d2"
    },
    {
      "source": "neuro_root_p8_t2",
      "target": "neuro_root_p8_t2_s4"
    },
    {
      "source": "neuro_root_p8_t2_s4",
      "target": "neuro_root_p8_t2_s4_d1"
    },
    {
      "source": "neuro_root_p8_t2_s4",
      "target": "neuro_root_p8_t2_s4_d2"
    },
    {
      "source": "neuro_root_p8_t2",
      "target": "neuro_root_p8_t2_s5"
    },
    {
      "source": "neuro_root_p8_t2_s5",
      "target": "neuro_root_p8_t2_s5_d1"
    },
    {
      "source": "neuro_root_p8_t2_s5",
      "target": "neuro_root_p8_t2_s5_d2"
    },
    {
      "source": "neuro_root_p8",
      "target": "neuro_root_p8_t3"
    },
    {
      "source": "neuro_root_p8_t3",
      "target": "neuro_root_p8_t3_s1"
    },
    {
      "source": "neuro_root_p8_t3_s1",
      "target": "neuro_root_p8_t3_s1_d1"
    },
    {
      "source": "neuro_root_p8_t3_s1",
      "target": "neuro_root_p8_t3_s1_d2"
    },
    {
      "source": "neuro_root_p8_t3",
      "target": "neuro_root_p8_t3_s2"
    },
    {
      "source": "neuro_root_p8_t3_s2",
      "target": "neuro_root_p8_t3_s2_d1"
    },
    {
      "source": "neuro_root_p8_t3_s2",
      "target": "neuro_root_p8_t3_s2_d2"
    },
    {
      "source": "neuro_root_p8_t3",
      "target": "neuro_root_p8_t3_s3"
    },
    {
      "source": "neuro_root_p8_t3_s3",
      "target": "neuro_root_p8_t3_s3_d1"
    },
    {
      "source": "neuro_root_p8_t3_s3",
      "target": "neuro_root_p8_t3_s3_d2"
    },
    {
      "source": "neuro_root_p8_t3",
      "target": "neuro_root_p8_t3_s4"
    },
    {
      "source": "neuro_root_p8_t3_s4",
      "target": "neuro_root_p8_t3_s4_d1"
    },
    {
      "source": "neuro_root_p8_t3_s4",
      "target": "neuro_root_p8_t3_s4_d2"
    },
    {
      "source": "neuro_root_p8_t3",
      "target": "neuro_root_p8_t3_s5"
    },
    {
      "source": "neuro_root_p8_t3_s5",
      "target": "neuro_root_p8_t3_s5_d1"
    },
    {
      "source": "neuro_root_p8_t3_s5",
      "target": "neuro_root_p8_t3_s5_d2"
    },
    {
      "source": "neuro_root_p8",
      "target": "neuro_root_p8_t4"
    },
    {
      "source": "neuro_root_p8_t4",
      "target": "neuro_root_p8_t4_s1"
    },
    {
      "source": "neuro_root_p8_t4_s1",
      "target": "neuro_root_p8_t4_s1_d1"
    },
    {
      "source": "neuro_root_p8_t4_s1",
      "target": "neuro_root_p8_t4_s1_d2"
    },
    {
      "source": "neuro_root_p8_t4",
      "target": "neuro_root_p8_t4_s2"
    },
    {
      "source": "neuro_root_p8_t4_s2",
      "target": "neuro_root_p8_t4_s2_d1"
    },
    {
      "source": "neuro_root_p8_t4_s2",
      "target": "neuro_root_p8_t4_s2_d2"
    },
    {
      "source": "neuro_root_p8_t4",
      "target": "neuro_root_p8_t4_s3"
    },
    {
      "source": "neuro_root_p8_t4_s3",
      "target": "neuro_root_p8_t4_s3_d1"
    },
    {
      "source": "neuro_root_p8_t4_s3",
      "target": "neuro_root_p8_t4_s3_d2"
    },
    {
      "source": "neuro_root_p8_t4",
      "target": "neuro_root_p8_t4_s4"
    },
    {
      "source": "neuro_root_p8_t4_s4",
      "target": "neuro_root_p8_t4_s4_d1"
    },
    {
      "source": "neuro_root_p8_t4_s4",
      "target": "neuro_root_p8_t4_s4_d2"
    },
    {
      "source": "neuro_root_p8_t4",
      "target": "neuro_root_p8_t4_s5"
    },
    {
      "source": "neuro_root_p8_t4_s5",
      "target": "neuro_root_p8_t4_s5_d1"
    },
    {
      "source": "neuro_root_p8_t4_s5",
      "target": "neuro_root_p8_t4_s5_d2"
    },
    {
      "source": "neuro_root_p8",
      "target": "neuro_root_p8_t5"
    },
    {
      "source": "neuro_root_p8_t5",
      "target": "neuro_root_p8_t5_s1"
    },
    {
      "source": "neuro_root_p8_t5_s1",
      "target": "neuro_root_p8_t5_s1_d1"
    },
    {
      "source": "neuro_root_p8_t5_s1",
      "target": "neuro_root_p8_t5_s1_d2"
    },
    {
      "source": "neuro_root_p8_t5",
      "target": "neuro_root_p8_t5_s2"
    },
    {
      "source": "neuro_root_p8_t5_s2",
      "target": "neuro_root_p8_t5_s2_d1"
    },
    {
      "source": "neuro_root_p8_t5_s2",
      "target": "neuro_root_p8_t5_s2_d2"
    },
    {
      "source": "neuro_root_p8_t5",
      "target": "neuro_root_p8_t5_s3"
    },
    {
      "source": "neuro_root_p8_t5_s3",
      "target": "neuro_root_p8_t5_s3_d1"
    },
    {
      "source": "neuro_root_p8_t5_s3",
      "target": "neuro_root_p8_t5_s3_d2"
    },
    {
      "source": "neuro_root_p8_t5",
      "target": "neuro_root_p8_t5_s4"
    },
    {
      "source": "neuro_root_p8_t5_s4",
      "target": "neuro_root_p8_t5_s4_d1"
    },
    {
      "source": "neuro_root_p8_t5_s4",
      "target": "neuro_root_p8_t5_s4_d2"
    },
    {
      "source": "neuro_root_p8_t5",
      "target": "neuro_root_p8_t5_s5"
    },
    {
      "source": "neuro_root_p8_t5_s5",
      "target": "neuro_root_p8_t5_s5_d1"
    },
    {
      "source": "neuro_root_p8_t5_s5",
      "target": "neuro_root_p8_t5_s5_d2"
    },
    {
      "source": "neuro_root_p8",
      "target": "neuro_root_p8_t6"
    },
    {
      "source": "neuro_root_p8_t6",
      "target": "neuro_root_p8_t6_s1"
    },
    {
      "source": "neuro_root_p8_t6_s1",
      "target": "neuro_root_p8_t6_s1_d1"
    },
    {
      "source": "neuro_root_p8_t6_s1",
      "target": "neuro_root_p8_t6_s1_d2"
    },
    {
      "source": "neuro_root_p8_t6",
      "target": "neuro_root_p8_t6_s2"
    },
    {
      "source": "neuro_root_p8_t6_s2",
      "target": "neuro_root_p8_t6_s2_d1"
    },
    {
      "source": "neuro_root_p8_t6_s2",
      "target": "neuro_root_p8_t6_s2_d2"
    },
    {
      "source": "neuro_root_p8_t6",
      "target": "neuro_root_p8_t6_s3"
    },
    {
      "source": "neuro_root_p8_t6_s3",
      "target": "neuro_root_p8_t6_s3_d1"
    },
    {
      "source": "neuro_root_p8_t6_s3",
      "target": "neuro_root_p8_t6_s3_d2"
    },
    {
      "source": "neuro_root_p8_t6",
      "target": "neuro_root_p8_t6_s4"
    },
    {
      "source": "neuro_root_p8_t6_s4",
      "target": "neuro_root_p8_t6_s4_d1"
    },
    {
      "source": "neuro_root_p8_t6_s4",
      "target": "neuro_root_p8_t6_s4_d2"
    },
    {
      "source": "neuro_root_p8_t6",
      "target": "neuro_root_p8_t6_s5"
    },
    {
      "source": "neuro_root_p8_t6_s5",
      "target": "neuro_root_p8_t6_s5_d1"
    },
    {
      "source": "neuro_root_p8_t6_s5",
      "target": "neuro_root_p8_t6_s5_d2"
    }
  ]
};
