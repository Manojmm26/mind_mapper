import { MindMapData } from "../../services/llmService";

export const AEROSPACE_ROCKETRY_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "aero_root",
      "label": "Aerospace Engineering & Rocket Propulsion from First Principles",
      "description": "Exhaustive first-principles engineering roadmap: compressible fluid dynamics, De Laval nozzle thermodynamics, full-flow staged combustion, Keplerian/Lambert astrodynamics, GNC EKF, TPS heat shields, and VTVL reusable boosters.",
      "type": "topic"
    },
    {
      "id": "aero_p1",
      "label": "Compressible Fluid Dynamics & Aerodynamics",
      "description": "Behavior of high-speed fluid flows across subsonic, transonic, supersonic, and hypersonic flow regimes.",
      "type": "topic"
    },
    {
      "id": "aero_p1_t0",
      "label": "Navier-Stokes Equations & Conservation Laws",
      "description": "Fundamental partial differential equations governing fluid mass, momentum, and energy transport.",
      "type": "topic"
    },
    {
      "id": "aero_p1_t0_s0",
      "label": "Continuity Equation (Mass Conservation)",
      "description": "d(rho)/dt + div(rho * V) = 0 describing fluid density continuity in fluid fields.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t0_s0_m0",
      "label": "Compressibility Criterion (Mach > 0.3)",
      "description": "Flow regime transition where fluid density variations exceed 5% and cannot be treated as incompressible.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t0_s0_m1",
      "label": "Control Volume Eulerian Formulation",
      "description": "Evaluating mass flux across fixed spatial control volume boundaries using Gauss divergence theorem.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t0_s0_m2",
      "label": "Integral vs Differential Conservation",
      "description": "Converting global integral mass balances to local partial differential equations for CFD solvers.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t0_s0_m3",
      "label": "Steady-State Streamline Continuity",
      "description": "Mass flow rate m_dot = rho * A * V remaining constant along non-branching steady fluid streamlines.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t0_s1",
      "label": "Momentum Conservation & Stress Tensor",
      "description": "Cauchy momentum equation balancing pressure gradients, viscous shear, and external body forces.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t0_s1_m0",
      "label": "Viscous Stress Tensor tau_ij",
      "description": "Newtonian fluid shear stress tau_ij = mu * (du_i/dx_j + du_j/dx_i) governed by dynamic viscosity mu.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t0_s1_m1",
      "label": "Pressure Gradient Acceleration -grad(P)",
      "description": "Static pressure differentials driving fluid particle acceleration across nozzles and wing sections.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t0_s1_m2",
      "label": "Reynolds Number (Re = rho*V*L/mu)",
      "description": "Dimensionless ratio of inertial forces to viscous forces governing laminar-to-turbulent transition.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t0_s1_m3",
      "label": "Viscous Boundary Layer Thickness delta",
      "description": "Velocity boundary layer region near solid walls where viscous shear stress creates skin friction drag.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t0_s2",
      "label": "Energy Conservation Equation",
      "description": "First law of thermodynamics applied to fluid total enthalpy, heat conduction, and viscous dissipation.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t0_s2_m0",
      "label": "Stagnation Enthalpy h_0 Conservation",
      "description": "Total enthalpy h_0 = h + 0.5 * V^2 remaining strictly conserved along adiabatic streamlines.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t0_s2_m1",
      "label": "Total Temperature T_0 State",
      "description": "Stagnation temperature T_0 = T * (1 + 0.5 * (gamma - 1) * M^2) reached when flow is brought to rest adiabatically.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t0_s2_m2",
      "label": "Prandtl Number (Pr = c_p * mu / k)",
      "description": "Ratio of momentum diffusivity to thermal diffusivity governing relative boundary layer thicknesses.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t0_s2_m3",
      "label": "Viscous Dissipation Heat Function",
      "description": "Kinetic energy degradation into thermal heat via intense viscous fluid shearing near solid boundaries.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t0_s3",
      "label": "Turbulence Modeling & CFD",
      "description": "Numerical approximations for resolving multi-scale turbulent eddies and boundary layer separation.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t0_s3_m0",
      "label": "RANS k-omega SST Model",
      "description": "Reynolds-Averaged Navier-Stokes model blending k-omega near walls with k-epsilon in free stream.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t0_s3_m1",
      "label": "Large Eddy Simulation (LES)",
      "description": "Spatially filtering Navier-Stokes equations to resolve large turbulent structures while modeling sub-grid scales.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t0_s3_m2",
      "label": "Direct Numerical Simulation (DNS)",
      "description": "Resolving all turbulent spatial and temporal scales down to Kolmogorov micro-scales without modeling.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t0_s3_m3",
      "label": "Grid Mesh Y+ Wall Distance",
      "description": "First cell height refinement ensuring y+ < 1 for accurate viscous sublayer shear stress resolution.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t1",
      "label": "Shock Waves & Expansion Fans",
      "description": "Discontinuous compression shock waves and smooth expansion waves in supersonic flow fields.",
      "type": "topic"
    },
    {
      "id": "aero_p1_t1_s0",
      "label": "Normal Shock Wave Jump Relations",
      "description": "Discontinuous transition from supersonic to subsonic flow across a zero-thickness normal shock wave.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t1_s0_m0",
      "label": "Rankine-Hugoniot Equations",
      "description": "Exact conservation jump conditions relating pressure, density, and temperature ratios across normal shocks.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t1_s0_m1",
      "label": "Mach Number Deceleration M_2 < 1",
      "description": "Supersonic incoming flow M_1 > 1 abruptly decelerating to subsonic speed M_2 < 1 behind normal shock.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t1_s0_m2",
      "label": "Stagnation Pressure Loss P_02 < P_01",
      "description": "Irreversible entropy generation across non-isentropic shock wave reducing total stagnation pressure.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t1_s0_m3",
      "label": "Shock-Induced Boundary Layer Separation",
      "description": "Adverse pressure gradient across shock wave causing viscous boundary layer to detach from surface.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t1_s1",
      "label": "Oblique Shock Waves & Detached Shocks",
      "description": "Angled shock waves generated when supersonic flow turns inward toward itself.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t1_s1_m0",
      "label": "Theta-Beta-Mach Relationship",
      "description": "Implicit equation relating wedge deflection angle theta, shock angle beta, and upstream Mach M_1.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t1_s1_m1",
      "label": "Weak vs Strong Shock Solutions",
      "description": "Two mathematically valid shock angles for given wedge angle; weak shock occurs naturally in unconstrained flow.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t1_s1_m2",
      "label": "Detached Bow Shock Waves",
      "description": "Curved shock wave detaching in front of blunt nose cone when deflection angle exceeds theta_max.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t1_s1_m3",
      "label": "Shock Wave Reflection Patterns",
      "description": "Regular and Mach stem reflection patterns interacting with fuselage boundaries and intake ducts.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t1_s2",
      "label": "Prandtl-Meyer Expansion Fans",
      "description": "Smooth, continuous, isentropic expansion of supersonic flow around convex corners.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t1_s2_m0",
      "label": "Prandtl-Meyer Function nu(M)",
      "description": "Integral function calculating Mach number increase resulting from convex turning angle.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t1_s2_m1",
      "label": "Isentropic Flow Acceleration",
      "description": "Supersonic expansion accelerating flow and lowering static pressure without stagnation pressure loss.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t1_s2_m2",
      "label": "Mach Line Fan Array",
      "description": "Continuous fan of weak Mach waves turning flow smoothly around convex surface contours.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t1_s2_m3",
      "label": "Nozzle Exhaust Plume Expansion",
      "description": "Prandtl-Meyer expansion fan expanding under-expanded rocket exhaust at nozzle exit lip.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t1_s3",
      "label": "Hypersonic Aerodynamics (Mach > 5)",
      "description": "Flow physics dominated by high-temperature gas dynamics, shock layers, and ionization.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t1_s3_m0",
      "label": "Newtonian Impact Theory (Cp = 2 sin^2 theta)",
      "description": "High-Mach pressure coefficient model assuming fluid particles lose normal momentum on impact.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t1_s3_m1",
      "label": "Real Gas Molecular Dissociation",
      "description": "Temperatures >2000K breaking O2 and N2 molecular bonds into reactive atomic species.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t1_s3_m2",
      "label": "Plasma Sheath Radio Blackout",
      "description": "Thermal ionization creating free electron plasma sheath around re-entry vehicle blocking RF signals.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t1_s3_m3",
      "label": "Hypersonic Boundary Layer Transition",
      "description": "Second-mode acoustic instability triggering early turbulent transition and extreme convective heating.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t2",
      "label": "Subsonic & Transonic Aerodynamics",
      "description": "Flow physics near Mach 1.0.",
      "type": "topic"
    },
    {
      "id": "aero_p1_t2_s0",
      "label": "Critical Mach Number M_crit",
      "description": "Freestream Mach number at which local flow first reaches Mach 1 on airfoil surface.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t2_s0_m0",
      "label": "Transonic Drag Divergence Mach",
      "description": "Mach number beyond M_crit where total vehicle drag coefficient increases exponentially.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t2_s0_m1",
      "label": "Subsonic Velocity Potential",
      "description": "Laplace equation grad^2 Phi = 0 modeling irrotational inviscid subsonic velocity fields.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t2_s0_m2",
      "label": "Prandtl-Glauert Compressibility Correction",
      "description": "Scaling subsonic pressure coefficients by 1 / sqrt(1 - M^2) to account for density changes.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t2_s0_m3",
      "label": "Circulation & Kutta-Joukowski Lift",
      "description": "Lift per unit span L' = rho * V * Gamma generated by bound circulation around airfoil.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t2_s1",
      "label": "Whitcomb Area Rule Distribution",
      "description": "Longitudinal cross-sectional area distribution eliminating transonic wave drag.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t2_s1_m0",
      "label": "Coke-Bottle Fuselage Contouring",
      "description": "Indenting fuselage waist near wings to keep total vehicle cross-sectional area smooth.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t2_s1_m1",
      "label": "Transonic Wave Drag Peak",
      "description": "Extreme pressure drag caused by shock wave formation on non-area-ruled fuselages.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t2_s1_m2",
      "label": "Wing Sweep Angle Compensation",
      "description": "Sweeping wing leading edge by angle Lambda to reduce effective normal Mach number M*cos(Lambda).",
      "type": "concept"
    },
    {
      "id": "aero_p1_t2_s1_m3",
      "label": "Supercritical Airfoil Flat Design",
      "description": "Flattened upper surface profile delaying shock formation and mitigating wave drag.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t2_s2",
      "label": "Transonic Buffet & Aeroelastic Instability",
      "description": "Shock wave oscillations coupling with wing structural modes.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t2_s2_m0",
      "label": "Shock-Induced Flow Separation Oscillations",
      "description": "Periodic forward-and-aft movement of transonic shock wave on upper wing surface.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t2_s2_m1",
      "label": "Torsional Flutter & Divergence Speed",
      "description": "Aerodynamic twisting moment overcoming structural stiffness causing destructive wing failure.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t2_s2_m2",
      "label": "Control Surface Buzz",
      "description": "Transonic shock wave oscillation driving high-frequency aileron vibration.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t2_s2_m3",
      "label": "Transonic Wind Tunnel Testing Barriers",
      "description": "Wall interference and shock reflection mitigation using slotted or perforated test section walls.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t2_s3",
      "label": "Low-Speed High-Lift Devices",
      "description": "Mechanical devices increasing maximum lift coefficient C_L_max during takeoff and landing.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t2_s3_m0",
      "label": "Trailing-Edge Fowler Flaps",
      "description": "Extending backward and downward to increase wing area and camber simultaneously.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t2_s3_m1",
      "label": "Leading-Edge Slats & Slots",
      "description": "Delaying boundary layer separation by ducting high-energy air to upper surface.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t2_s3_m2",
      "label": "Boundary Layer Suction & Blowing",
      "description": "Active flow control injecting momentum into boundary layer to prevent stall.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t2_s3_m3",
      "label": "Maximum Lift Coefficient C_L_max Peak",
      "description": "Boosting C_L_max from 1.5 to 3.2 for short takeoff and landing (STOL) operations.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t3",
      "label": "Airfoil Theory & Lifting Surfaces",
      "description": "Generation of aerodynamic lift, pitching moment, and boundary layer stability.",
      "type": "topic"
    },
    {
      "id": "aero_p1_t3_s0",
      "label": "Thin Airfoil Theory (C_l = 2 pi alpha)",
      "description": "Lifting line approximation predicting linear lift slope of 2*pi per radian angle of attack.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t3_s0_m0",
      "label": "Zero-Lift Angle of Attack alpha_0",
      "description": "Negative angle of attack where cambered airfoil produces zero net aerodynamic lift.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t3_s0_m1",
      "label": "Aerodynamic Center (0.25 Chord)",
      "description": "Quarter-chord position where aerodynamic pitching moment remains constant with alpha.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t3_s0_m2",
      "label": "Center of Pressure x_cp",
      "description": "Location of net resultant aerodynamic force vector along airfoil chord line.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t3_s0_m3",
      "label": "Boundary Layer Separation & Stall",
      "description": "Adverse pressure gradient causing flow reversal and catastrophic lift loss at critical AoA.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t3_s1",
      "label": "Vortex Dynamics & Induced Drag",
      "description": "Three-dimensional wing vortex systems.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t3_s1_m0",
      "label": "Wingtip Trailing Vortices",
      "description": "High-pressure lower air spilling over wingtip to low-pressure upper surface forming vortex core.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t3_s1_m1",
      "label": "Downwash Velocity Field w",
      "description": "Downward velocity component induced over wing by trailing vortex system.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t3_s1_m2",
      "label": "Induced Drag Coefficient C_Di",
      "description": "C_Di = C_L^2 / (pi * AR * e) inversely proportional to wing aspect ratio AR.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t3_s1_m3",
      "label": "Winglets & Endplates",
      "description": "Physical vertical barriers inhibiting wingtip vortex formation and reducing induced drag.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t3_s2",
      "label": "Boundary Layer Transition Mechanics",
      "description": "Laminar-to-turbulent transition processes on lifting surfaces.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t3_s2_m0",
      "label": "Tollmien-Schlichting (TS) Waves",
      "description": "Streamwise acoustic-velocity oscillations growing in laminar boundary layer.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t3_s2_m1",
      "label": "Crossflow Instability in Swept Wings",
      "description": "Pressure-driven secondary flow in swept wing boundary layers creating co-rotating vortices.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t3_s2_m2",
      "label": "G\u00f6rtler Vortices on Concave Surfaces",
      "description": "Centrifugal instability generating streamwise counter-rotating vortex pairs.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t3_s2_m3",
      "label": "Laminar Flow Control (LFC)",
      "description": "Suction through micro-perforations maintaining laminar flow over 60% of chord.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t3_s3",
      "label": "Delta Wing & Vortex Lift Dynamics",
      "description": "High-sweep delta wings at high angles of attack.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t3_s3_m0",
      "label": "Leading-Edge Vortex (LEV) Breakdown",
      "description": "Stable primary vortex generated by sharp leading edge providing non-linear extra lift.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t3_s3_m1",
      "label": "Vortex Bursting & Asymmetric Yawing",
      "description": "Abrupt vortex core breakdown causing pitch-up and directional instability.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t3_s3_m2",
      "label": "Canard-Wing Vortex Coupling",
      "description": "Close-coupled canard energizing main wing leading-edge vortex to delay bursting.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t3_s3_m3",
      "label": "Strake & Leading-Edge Extension (LEX)",
      "description": "Forward fuselage extensions generating high-energy vortices over main wing root.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t4",
      "label": "Supersonic Inlets & Engine Air Intakes",
      "description": "Decelerating supersonic freestream air down to subsonic speeds for air-breathing engines.",
      "type": "topic"
    },
    {
      "id": "aero_p1_t4_s0",
      "label": "External Compression Inlets",
      "description": "Using series of oblique shocks external to cowl to decelerate air before subsonic diffuser.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t4_s0_m0",
      "label": "Isentropic Spike Inlets",
      "description": "Conical centerbody generating continuous compression shock wave fan.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t4_s0_m1",
      "label": "Ramp Angle Optimization",
      "description": "Adjusting variable geometry ramp angles to keep shock system on lip across Mach range.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t4_s0_m2",
      "label": "Cowl Lip Shock-on-Lip Condition",
      "description": "Positioning oblique shock directly on cowl lip for maximum pressure recovery.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t4_s0_m3",
      "label": "Subsonic Diffuser Expansion",
      "description": "Divergent duct decelerating M=0.7 throat flow to M=0.4 engine face with minimal total pressure loss.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t4_s1",
      "label": "Internal Compression & Inlet Unstart",
      "description": "Mixed-compression inlets with internal shock systems.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t4_s1_m0",
      "label": "Internal Shock Trap System",
      "description": "Trapping weak oblique shocks inside inlet duct behind throat.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t4_s1_m1",
      "label": "Inlet Unstart Catastrophe",
      "description": "Expulsion of internal shock wave out front of inlet causing severe drag and engine flameout.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t4_s1_m2",
      "label": "Bleed Systems & Scoops",
      "description": "Diverting low-momentum boundary layer air out of inlet duct prior to throat.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t4_s1_m3",
      "label": "Bypass Door Pressure Regulation",
      "description": "Venting excess air to match engine mass flow demand and maintain shock position.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t4_s2",
      "label": "Supersonic Wave Drag Reduction",
      "description": "Reducing pressure drag generated by supersonic shock waves.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t4_s2_m0",
      "label": "Sears-Haack Body of Revolution",
      "description": "Theoretical minimum wave drag body shape for fixed volume and length.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t4_s2_m1",
      "label": "Aerodynamic Spike Nose Extensions",
      "description": "Extending forward spike to push bow shock away from blunt payload fairings.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t4_s2_m2",
      "label": "Slender Wing Sweep Angle Selection",
      "description": "Ensuring wing leading edge is swept inside Mach cone angle sin(mu) = 1/M.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t4_s2_m3",
      "label": "Mach Cone Angle mu",
      "description": "Mach cone boundary separating quiet zone from supersonic pressure influence zone.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t4_s3",
      "label": "Hypersonic Air-Breathing Propulsion (Scramjet)",
      "description": "Supersonic Combustion Ramjet engines operating at Mach 5-15.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t4_s3_m0",
      "label": "Supersonic Combustion Chamber",
      "description": "Injecting fuel into M > 1 supersonic air stream requiring ignition within milliseconds.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t4_s3_m1",
      "label": "Strut & Wall Fuel Injection",
      "description": "Hydrogen or hydrocarbon fuel injection struts promoting rapid supersonic mixing.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t4_s3_m2",
      "label": "Thermal Choking Limit",
      "description": "Heat release in supersonic duct causing choking M=1 and upstream shock propagation.",
      "type": "concept"
    },
    {
      "id": "aero_p1_t4_s3_m3",
      "label": "Integrated Airframe Nozzle Design",
      "description": "Forebody acting as engine inlet compressor; aft fuselage acting as half-nozzle expansion ramp.",
      "type": "concept"
    },
    {
      "id": "aero_p2",
      "label": "Rocket Engine Thermodynamics & Nozzle Physics",
      "description": "De Laval nozzle expansion thermodynamics, thrust equation, and combustion chamber heat transfer.",
      "type": "topic"
    },
    {
      "id": "aero_p2_t0",
      "label": "Ideal Rocket Motor Thermodynamics",
      "description": "Enthalpy conversion from high-pressure chemical combustion into directed kinetic exhaust energy.",
      "type": "topic"
    },
    {
      "id": "aero_p2_t0_s0",
      "label": "Thrust Equation Mechanics",
      "description": "Total engine thrust F = m_dot * V_e + (P_e - P_a) * A_e combining momentum and pressure components.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t0_s0_m0",
      "label": "Choked Mass Flow Rate m_dot",
      "description": "Mass flow rate m_dot = P_0 * A_t * C* / (R * T_0) choked at sonic velocity at nozzle throat.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t0_s0_m1",
      "label": "Effective Exhaust Velocity C",
      "description": "Equivalent uniform exhaust speed C = V_e + (P_e - P_a) * A_e / m_dot accounting for pressure mismatch.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t0_s0_m2",
      "label": "Specific Impulse I_sp (seconds)",
      "description": "Thrust generated per unit weight propellant flow rate I_sp = F / (m_dot * g_0) = C / g_0.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t0_s0_m3",
      "label": "Characteristic Velocity C*",
      "description": "Combustion quality metric C* = P_0 * A_t / m_dot evaluating chamber temperature and propellant chemistry.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t0_s1",
      "label": "De Laval Convergent-Divergent Nozzle",
      "description": "Geometric channel accelerating subsonic combustion gas up to supersonic exit velocity.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t0_s1_m0",
      "label": "Sonic Choking at Throat (Mach 1)",
      "description": "Sonic condition M = 1 achieved at minimum throat cross-sectional area A_t where dA/dx = 0.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t0_s1_m1",
      "label": "Area-Mach Number Relation A/A_t",
      "description": "Isentropic area ratio formula governing Mach number progression throughout nozzle bell expansion.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t0_s1_m2",
      "label": "Divergent Supersonic Acceleration",
      "description": "Expanding area dA > 0 causing velocity increase dV > 0 when flow is supersonic M > 1.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t0_s1_m3",
      "label": "Nozzle Expansion Ratio epsilon = A_e / A_t",
      "description": "Ratio of exit area to throat area determining degree of gas expansion and pressure drop.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t0_s2",
      "label": "Nozzle Flow Regimes & Ambient Matching",
      "description": "Interactions between nozzle exit pressure P_e and external atmospheric pressure P_a.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t0_s2_m0",
      "label": "Optimum Expansion (P_e = P_a)",
      "description": "Ideal expansion state maximizing thrust with straight, parallel exhaust gas streamlines.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t0_s2_m1",
      "label": "Over-Expanded Nozzle (P_e < P_a)",
      "description": "High ambient sea-level pressure compressing exhaust plume, generating internal oblique shock waves.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t0_s2_m2",
      "label": "Summerfield Flow Separation Criterion",
      "description": "Shock-induced boundary layer separation occurring inside nozzle bell when P_e / P_a < 0.4.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t0_s2_m3",
      "label": "Under-Expanded Vacuum Plume",
      "description": "Low ambient pressure causing exhaust gas to expand outward in wide Prandtl-Meyer fan at lip.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t0_s3",
      "label": "Advanced Altitude-Compensating Nozzles",
      "description": "Unconventional nozzle designs maintaining high performance across sea-level and vacuum conditions.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t0_s3_m0",
      "label": "Aerospike Plug Nozzle Architecture",
      "description": "Inverted nozzle using external atmospheric boundary as outer expansion wall for continuous altitude tuning.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t0_s3_m1",
      "label": "Dual-Bell Contour Nozzles",
      "description": "Contoured bell with inflection step expanding exhaust at two distinct altitude expansion steps.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t0_s3_m2",
      "label": "Extendable Carbon-Composite Skirts",
      "description": "Deployable nozzle extension skirts deployed in vacuum to boost expansion ratio epsilon.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t0_s3_m3",
      "label": "Linear Aerospike Engine Grid",
      "description": "Segmented linear combustion cells vectoring thrust along flat central wedge plug.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t1",
      "label": "Heat Transfer & Chamber Cooling",
      "description": "Cooling strategies sustaining 3500K combustion gas temperatures.",
      "type": "topic"
    },
    {
      "id": "aero_p2_t1_s0",
      "label": "Regenerative Cooling Jackets",
      "description": "Routing cryogenic propellant through microchannels surrounding chamber before injection.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t1_s0_m0",
      "label": "NARloy-Z Copper Milled Channels",
      "description": "High thermal conductivity copper alloy inner liner enclosed by electroformed nickel jacket.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t1_s0_m1",
      "label": "Supercritical Fluid Heat Transfer",
      "description": "Coolant liquid transitioning into supercritical fluid without phase-change boiling burnout.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t1_s0_m2",
      "label": "Thermal Stress & Low-Cycle Fatigue",
      "description": "Extreme temperature gradient across liner wall causing plastic deformation cycles.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t1_s0_m3",
      "label": "Coolant Channel Pressure Drop Delta_P",
      "description": "Managing coolant channel pressure drop supplied by turbopump discharge.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t1_s1",
      "label": "Film Cooling & Ablative Liners",
      "description": "Alternative thermal protection methods.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t1_s1_m0",
      "label": "Boundary Layer Film Injection",
      "description": "Injecting cool fuel film along chamber wall inner circumference to lower local gas temp.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t1_s1_m1",
      "label": "Radiative Cooling Niobium Skirts",
      "description": "Niobium or carbon-carbon nozzle extensions radiating heat into space at 1500K.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t1_s1_m2",
      "label": "Ablative Carbon-Phenolic Matrix",
      "description": "Sacrificial resin pyrolyzing under heat to absorb thermal flux via char layer.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t1_s1_m3",
      "label": "Transpiration Porous Cooling",
      "description": "Porous metal walls bleeding liquid coolant continuously into boundary layer.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t1_s2",
      "label": "Combustion Instability & Dynamics",
      "description": "Acoustic resonance and pressure oscillations in combustion chambers.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t1_s2_m0",
      "label": "High-Frequency Acoustic Instability",
      "description": "Transverse and radial acoustic pressure waves coupling with heat release.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t1_s2_m1",
      "label": "Rayleigh Criterion for Combustion",
      "description": "Pressure and heat release oscillations in phase amplifying acoustic energy.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t1_s2_m2",
      "label": "Low-Frequency Chugging",
      "description": "Feed system pressure oscillation coupling with combustion delay time.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t1_s2_m3",
      "label": "Baffle Plates & Resonators",
      "description": "Injecting mechanical baffles to disrupt acoustic wave propagation.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t1_s3",
      "label": "Injector Design & Atomization",
      "description": "Mixing liquid propellants into homogeneous combustible mist.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t1_s3_m0",
      "label": "Coaxial Swirl Injectors",
      "description": "Liquid methane/LOX swirling liquid sheets atomizing into fine droplet spray.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t1_s3_m1",
      "label": "Impinging Jet Injectors",
      "description": "Fuel and oxidizer streams colliding to promote rapid droplet breakup.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t1_s3_m2",
      "label": "Pintle Injector Architecture",
      "description": "Center moveable pintle sleeve regulating thrust over 10:1 throttle range.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t1_s3_m3",
      "label": "Sauter Mean Diameter (SMD)",
      "description": "Droplet size distribution optimizing evaporation rate and chamber length.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t2",
      "label": "Nozzle Contour Optimization & Performance",
      "description": "Designing bell profiles to minimize weight and shock losses.",
      "type": "topic"
    },
    {
      "id": "aero_p2_t2_s0",
      "label": "Rao Parabolic Bell Approximation",
      "description": "Optimizing bell length (80% bell) using parabolic approximation to minimize length and friction.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t2_s1",
      "label": "Method of Characteristics (MOC)",
      "description": "Solving hyperbolic supersonic flow equations to design minimum-length nozzle (MLN) contours.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t2_s2",
      "label": "Divergence Loss Factor lambda",
      "description": "Correction factor lambda = 0.5 * (1 + cos(theta_e)) accounting for non-axial exhaust momentum.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t2_s3",
      "label": "Boundary Layer Friction Loss in Nozzles",
      "description": "Viscous shear stress along nozzle wall reducing effective exhaust momentum by 1-2%.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t3",
      "label": "Combustion Thermodynamics & Equilibrium",
      "description": "Chemical reaction equilibrium inside rocket thrust chambers.",
      "type": "topic"
    },
    {
      "id": "aero_p2_t3_s0",
      "label": "Equilibrium Composition Calculation (CEA)",
      "description": "NASA Chemical Equilibrium with Applications software computing flame temp and exhaust species.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t3_s1",
      "label": "Frozen vs Shifting Equilibrium",
      "description": "Frozen flow assuming constant composition during expansion; Shifting flow assuming continuous reaction.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t3_s2",
      "label": "Adiabatic Flame Temperature T_flame",
      "description": "Peak combustion temperature reached under zero heat loss conditions (>3600K for H2/O2).",
      "type": "concept"
    },
    {
      "id": "aero_p2_t3_s3",
      "label": "Specific Heat Ratio gamma (c_p / c_v)",
      "description": "Ratio of specific heats governing gas expansion work (gamma ~ 1.2 for rocket exhaust).",
      "type": "concept"
    },
    {
      "id": "aero_p2_t4",
      "label": "Ignition Systems & Transient Start-Up",
      "description": "Initiating stable combustion without hard starts.",
      "type": "topic"
    },
    {
      "id": "aero_p2_t4_s0",
      "label": "Pyrophoric TEA-TEB Cartridges",
      "description": "Chemical slug igniting spontaneously on contact with liquid oxygen.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t4_s1",
      "label": "Spark-Torch Igniters",
      "description": "High-frequency electrical spark igniting small gaseous methane/oxygen pilot flame.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t4_s2",
      "label": "Resonant Cavity Igniters",
      "description": "High-pressure gas pulse acoustic heating triggering spontaneous thermal ignition.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t4_s3",
      "label": "Engine Start-Up Transient & Chilldown",
      "description": "Pre-chilling turbopumps with liquid propellant to prevent gas cavitation during spin-up.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t5",
      "label": "Thrust Vector Control (TVC) Mechanics",
      "description": "Vectoring engine thrust for pitch, yaw, and roll vehicle control.",
      "type": "topic"
    },
    {
      "id": "aero_p2_t5_s0",
      "label": "Gimbaled Engine Mount Bearings",
      "description": "Spherical gimbal bearing supporting full thrust load while allowing 8-degree angular deflection.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t5_s1",
      "label": "Hydraulic Servo-Actuators",
      "description": "High-pressure hydraulic actuators providing fast response bandwidth (>10 Hz) for engine gimbaling.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t5_s2",
      "label": "Electromechanical Ball-Screw Actuators",
      "description": "Brushless DC motor-driven ball screws replacing heavy hydraulic systems.",
      "type": "concept"
    },
    {
      "id": "aero_p2_t5_s3",
      "label": "Exhaust Vanes & Secondary Injection",
      "description": "Carbon vanes in exhaust plume or hot gas injection into nozzle bell for thrust vectoring.",
      "type": "concept"
    },
    {
      "id": "aero_p3",
      "label": "Combustion Chemistry, Fuels & Turbopump Cycles",
      "description": "Propellant chemical kinetics, injector dynamics, and turbomachinery power cycles.",
      "type": "topic"
    },
    {
      "id": "aero_p3_t0",
      "label": "Propellant Thermochemistry & Chemistry",
      "description": "Enthalpy release, combustion kinetics, and exhaust molecular weight of liquid rocket propellants.",
      "type": "topic"
    },
    {
      "id": "aero_p3_t0_s0",
      "label": "Liquid Hydrogen & Liquid Oxygen (Hydrolox)",
      "description": "Highest specific impulse (~450s vacuum) chemical propellant pairing, characterized by low density.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t0_s0_m0",
      "label": "Fuel-Rich O/F Ratio Optimization",
      "description": "Operating fuel-rich (O/F ~6.0 vs 8.0) to lower exhaust molecular weight M and maximize I_sp = sqrt(T_0/M).",
      "type": "concept"
    },
    {
      "id": "aero_p3_t0_s0_m1",
      "label": "Ortho-to-Para Hydrogen Conversion",
      "description": "Exothermic spin isomer transformation releasing heat during long-term cryogenic storage.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t0_s0_m2",
      "label": "Cryogenic Tank Insulation (MLI)",
      "description": "Multi-layer insulation blankets and zero-boil-off cryocoolers preventing liquid hydrogen boil-off.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t0_s0_m3",
      "label": "Low Density Volume Penalty",
      "description": "Liquid hydrogen density (71 kg/m^3) requiring massive tank structures that increase dry mass.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t0_s1",
      "label": "Liquid Methane & Liquid Oxygen (Methalox)",
      "description": "Clean-burning commercial propellant pairing ideal for rapidly reusable rocket engines.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t0_s1_m0",
      "label": "Soot-Free Coking Prevention",
      "description": "Absence of heavy unburned carbon soot enabling direct engine reuse without internal cleaning.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t0_s1_m1",
      "label": "Density Impulse Advantages",
      "description": "Higher density than hydrolox allowing compact stage tanks and reduced aerodynamic drag.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t0_s1_m2",
      "label": "ISRU Mars Sabatier Synthesis",
      "description": "Synthesizing methane on Mars via CO2 + 4H2 -> CH4 + 2H2O using indigenous atmospheric carbon.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t0_s1_m3",
      "label": "Cryogenic Temperature Alignment",
      "description": "LOX (90K) and LCH4 (111K) operating at similar temperatures simplifying common bulkhead design.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t0_s2",
      "label": "RP-1 Kerosene & Liquid Oxygen (Kerolox)",
      "description": "Highly refined hydrocarbon kerosene delivering dense, high-thrust booster performance.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t0_s2_m0",
      "label": "High Density Impulse Booster Thrust",
      "description": "Dense RP-1 yielding compact booster tanks and high thrust-to-weight ratio for sea-level lift-off.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t0_s2_m1",
      "label": "Thermal Cracking & Coking Limits",
      "description": "Hydrocarbon pyrolyzing above 550K depositing insulating soot layers inside cooling channels.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t0_s2_m2",
      "label": "Hypersonic Tripropellant Engines",
      "description": "Burning RP-1 during initial lift-off before switching to LH2 in upper atmosphere.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t0_s2_m3",
      "label": "Pyrophoric TEA-TEB Ignition",
      "description": "Triethylaluminum-Triethylborane mixture igniting spontaneously on contact with LOX.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t0_s3",
      "label": "Hypergolic Propellants (MMH / NTO)",
      "description": "Monomethylhydrazine and Nitrogen Tetroxide igniting spontaneously on contact.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t0_s3_m0",
      "label": "Zero-Igniter Instant Contact Ignition",
      "description": "Spontaneous hypergolic reaction eliminating complex spark or plasma ignition hardware.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t0_s3_m1",
      "label": "Long-Term Storable Liquid Liquids",
      "description": "Non-cryogenic liquids remaining stable in spacecraft tanks for multi-year missions.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t0_s3_m2",
      "label": "Toxicity & Handling Protocols",
      "description": "Extreme carcinogenic toxicity requiring specialized SCAPE suits and scrubbing systems.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t0_s3_m3",
      "label": "Pulse-Mode Reaction Control Thrusters",
      "description": "Enabling fast millisecond pulsing for spacecraft attitude control RCS thrusters.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t1",
      "label": "Turbopump Power Cycles",
      "description": "High-pressure propellant feed cycles driven by hot gas turbines.",
      "type": "topic"
    },
    {
      "id": "aero_p3_t1_s0",
      "label": "Gas Generator Open Cycle",
      "description": "Burning small propellant fraction in preburner to drive turbine, dumping exhaust overboard.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t1_s0_m0",
      "label": "Overboard Dump I_sp Loss",
      "description": "Low-pressure turbine exhaust dump slightly reducing overall engine specific impulse.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t1_s0_m1",
      "label": "Simplified Preburner Controls",
      "description": "Operating fuel-rich preburner at moderate temperatures (~900K) to protect turbine blades.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t1_s0_m2",
      "label": "Merlin 1D Open Cycle Architecture",
      "description": "Single-shaft turbopump feeding kerolox combustion chamber with gas generator dump.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t1_s0_m3",
      "label": "Centrifugal Pump Impeller RPM",
      "description": "Operating propellant impellers at 20,000 to 40,000 RPM to generate high discharge pressure.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t1_s1",
      "label": "Closed Staged Combustion Cycle",
      "description": "Routing all preburner exhaust through main combustion chamber for maximum theoretical I_sp.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t1_s1_m0",
      "label": "Oxidizer-Rich Staged Combustion (ORSC)",
      "description": "Hot LOX-rich turbine gas (RD-180) requiring specialized oxidation-resistant superalloys.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t1_s1_m1",
      "label": "Fuel-Rich Staged Combustion (FRSC)",
      "description": "Hot hydrogen-rich turbine gas (RS-25 SSME) operating at ultra-high chamber pressures (>200 bar).",
      "type": "concept"
    },
    {
      "id": "aero_p3_t1_s1_m2",
      "label": "Full-Flow Staged Combustion (FFSC)",
      "description": "Dual preburners (fuel-rich & ox-rich) driving separate turbopumps (SpaceX Raptor).",
      "type": "concept"
    },
    {
      "id": "aero_p3_t1_s1_m3",
      "label": "Zero Gas Dump Efficiency",
      "description": "Complete propellant combustion inside main chamber maximizing thermodynamic efficiency.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t1_s2",
      "label": "Expander Engine Cycle Physics",
      "description": "Using heat absorbed by cooling jacket to drive turbine before injection.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t1_s2_m0",
      "label": "Closed Expander Thrust Limit",
      "description": "Cooling jacket heat transfer area limiting maximum thrust (~300 kN) due to square-cube scaling law.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t1_s2_m1",
      "label": "Open Expander Bleed Cycle",
      "description": "Dumping part of turbine gas to achieve higher thrust at minor I_sp penalty (RL10).",
      "type": "concept"
    },
    {
      "id": "aero_p3_t1_s2_m2",
      "label": "Inducer Cavitation Mitigation",
      "description": "Low-NPSH inducer blades preventing destructive vapor bubble collapse in main pump.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t1_s2_m3",
      "label": "Hydrodynamic Bearings & Seals",
      "description": "Cryogenic fluid bearings and helium-purged carbon face seals preventing propellant mixing.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t1_s3",
      "label": "Solid Rocket Motor Dynamics",
      "description": "Chemical propulsion using solid propellant grains.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t1_s3_m0",
      "label": "Ammonium Perchlorate Composite (APCP)",
      "description": "Ammonium perchlorate oxidizer in HTPB rubber binder with aluminum fuel.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t1_s3_m1",
      "label": "Burn Rate Law r = a * P_c^n",
      "description": "Combustion burn rate dependence on chamber pressure P_c and exponent n.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t1_s3_m2",
      "label": "Grain Cross-Section Geometries",
      "description": "Star, finocyl, and anchor grain shapes tailoring thrust vs time profile.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t1_s3_m3",
      "label": "Internal Ballistics & Casing Stress",
      "description": "Pressure vessel hoop stress constraints on filament-wound motor casings.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t2",
      "label": "Turbomachinery Fluid Dynamics & Design",
      "description": "High-power density turbopump design principles.",
      "type": "topic"
    },
    {
      "id": "aero_p3_t2_s0",
      "label": "Centrifugal Pump Impeller Hydrodynamics",
      "description": "Designing curved impeller vanes to accelerate liquid propellants to 300+ bar.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t2_s1",
      "label": "Axial Flow Turbines & Stators",
      "description": "Extracting mechanical work from hot preburner gas using impulse or reaction turbine stages.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t2_s2",
      "label": "NPSH & Cavitation Inception",
      "description": "Net Positive Suction Head required to prevent destructive vapor cavitation at pump entry.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t2_s3",
      "label": "Labyrinth Seals & Helium Purges",
      "description": "Multi-stage inter-stage seals preventing hot turbine gas from contacting cryogenic liquid.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t3",
      "label": "Electric Pump-Fed Cycles",
      "description": "Battery-powered electric motor turbopumps.",
      "type": "topic"
    },
    {
      "id": "aero_p3_t3_s0",
      "label": "High-Power Brushless DC Motors",
      "description": "Electric motors delivering 500+ kW at 50,000 RPM to drive propellant impellers.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t3_s1",
      "label": "Lithium-Polymer Battery Discharge",
      "description": "Custom high-rate battery packs supplying megawatt electrical power during ascent.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t3_s2",
      "label": "Battery Hot-Swapping Strategy",
      "description": "Jettisoning depleted battery packs mid-flight to optimize stage dry mass (Electron).",
      "type": "concept"
    },
    {
      "id": "aero_p3_t3_s3",
      "label": "Instantaneous Motor Speed Control",
      "description": "Tuning motor RPM in real-time for precise propellant mixture ratio control.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t4",
      "label": "Monopropellant & Hybrid Systems",
      "description": "Low-complexity chemical propulsion systems.",
      "type": "topic"
    },
    {
      "id": "aero_p3_t4_s0",
      "label": "Hydrazine Catalytic Decomposition",
      "description": "Passing N2H4 over iridium catalyst bed producing hot N2, H2, and NH3 gas (I_sp ~230s).",
      "type": "concept"
    },
    {
      "id": "aero_p3_t4_s1",
      "label": "Hybrid Rocket Motors (HTPB / Nitrous)",
      "description": "Solid rubber fuel core combined with liquid or nitrous oxide oxidizer stream.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t4_s2",
      "label": "Green Monopropellants (ADN / HAN)",
      "description": "Low-toxicity energetic liquid salts replacing hazardous hydrazine on satellites.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t4_s3",
      "label": "Hydrogen Peroxide High-Test (HTP)",
      "description": "90%+ pure H2O2 decomposing over silver catalyst screens to generate high-temp steam.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t5",
      "label": "Feed System Pressurization & Pogo",
      "description": "Managing propellant tank pressure and structural coupling.",
      "type": "topic"
    },
    {
      "id": "aero_p3_t5_s0",
      "label": "Autogenous Gaseous Pressurization",
      "description": "Tapping off warm gaseous propellant from engine jacket to maintain tank pressure.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t5_s1",
      "label": "Helium Soluble Gas Pressurization",
      "description": "High-pressure composite overwrapped helium bottles pressurizing propellant tanks.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t5_s2",
      "label": "Pogo Oscillation Accumulators",
      "description": "Compliant gas-filled accumulators installed in fuel lines to damp Pogo resonance.",
      "type": "concept"
    },
    {
      "id": "aero_p3_t5_s3",
      "label": "Slosh Baffles & Anti-Vortex Plates",
      "description": "Internal tank baffles suppressing liquid propellant sloshing during high-g maneuvers.",
      "type": "concept"
    },
    {
      "id": "aero_p4",
      "label": "Orbital Mechanics & Astrodynamics",
      "description": "Keplerian orbits, N-body perturbation theory, and interplanetary trajectory design.",
      "type": "topic"
    },
    {
      "id": "aero_p4_t0",
      "label": "Keplerian Two-Body Problem",
      "description": "Orbital motion under point-mass central gravitational fields.",
      "type": "topic"
    },
    {
      "id": "aero_p4_t0_s0",
      "label": "Kepler's Laws of Planetary Motion",
      "description": "Fundamental geometric laws governing orbital motion around central bodies.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t0_s0_m0",
      "label": "First Law (Elliptical Conic Sections)",
      "description": "Orbits forming conic sections r = a*(1-e^2) / (1 + e*cos(theta)) with central body at one focus.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t0_s0_m1",
      "label": "Second Law (Equal Areas in Equal Times)",
      "description": "Constant specific angular momentum h = r x v conserving areal sweep rate.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t0_s0_m2",
      "label": "Third Law (Orbital Period T)",
      "description": "Period square T^2 = (4*pi^2 / mu) * a^3 proportional to semi-major axis cube.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t0_s0_m3",
      "label": "True Anomaly theta Angle",
      "description": "Polar angle measuring spacecraft position relative to periapsis point.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t0_s1",
      "label": "Orbital State Elements (a, e, i, Omega, omega, theta)",
      "description": "Six classical Keplerian elements uniquely specifying 3D position and velocity.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t0_s1_m0",
      "label": "Semi-Major Axis a & Eccentricity e",
      "description": "Parameters defining orbit physical size a and shape eccentricity e (0=circle, 0<e<1=ellipse).",
      "type": "concept"
    },
    {
      "id": "aero_p4_t0_s1_m1",
      "label": "Inclination Angle i",
      "description": "Tilt angle of orbital plane relative to reference equatorial plane.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t0_s1_m2",
      "label": "Right Ascension of Ascending Node (RAAN)",
      "description": "Longitude angle where orbit crosses equatorial plane moving northbound.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t0_s1_m3",
      "label": "Argument of Periapsis omega",
      "description": "Angular orientation of periapsis point within the orbital plane.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t0_s2",
      "label": "Vis-Viva Equation & Velocity Vectors",
      "description": "Energy conservation law V^2 = mu * (2/r - 1/a) relating speed, distance, and orbit size.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t0_s2_m0",
      "label": "Circular Velocity V_circ",
      "description": "Speed V_circ = sqrt(mu / r) required for stable circular orbit at radius r.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t0_s2_m1",
      "label": "Escape Velocity V_esc",
      "description": "Speed V_esc = sqrt(2 * mu / r) required to break free on parabolic trajectory.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t0_s2_m2",
      "label": "Hyperbolic Excess Speed V_inf",
      "description": "Residual speed V_inf = sqrt(V^2 - V_esc^2) remaining after leaving sphere of influence.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t0_s2_m3",
      "label": "Flight Path Angle gamma",
      "description": "Angle between velocity vector and local horizontal plane.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t0_s3",
      "label": "Orbital Plane Geometry & Coordinate Frames",
      "description": "Reference systems for space navigation.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t0_s3_m0",
      "label": "Earth-Centered Inertial (ECI) Frame",
      "description": "Non-rotating Cartesian frame (J2000) centered at Earth barycenter.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t0_s3_m1",
      "label": "Perifocal Reference Frame (PQW)",
      "description": "Orbital plane frame with P along eccentricity vector and Q in orbit plane.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t0_s3_m2",
      "label": "Hill's Local-Vertical Local-Horizontal (LVLH)",
      "description": "Spacecraft-centered rotating frame used for rendezvous relative motion.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t0_s3_m3",
      "label": "Astronomical Unit & Gravitational Parameter mu",
      "description": "Central body gravitational constant mu = G * M (398600 km^3/s^2 for Earth).",
      "type": "concept"
    },
    {
      "id": "aero_p4_t1",
      "label": "Orbital Maneuvers & Delta-V Budgets",
      "description": "Impulsive and continuous trajectory modifications.",
      "type": "topic"
    },
    {
      "id": "aero_p4_t1_s0",
      "label": "Hohmann Transfer Orbit",
      "description": "Two-impulse elliptical transfer tangent to initial and final circular orbits.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t1_s0_m0",
      "label": "First Burn Delta-V_1",
      "description": "Delta-V_1 = sqrt(mu/r_1) * [ sqrt(2*r_2 / (r_1 + r_2)) - 1 ].",
      "type": "concept"
    },
    {
      "id": "aero_p4_t1_s0_m1",
      "label": "Second Burn Delta-V_2",
      "description": "Delta-V_2 = sqrt(mu/r_2) * [ 1 - sqrt(2*r_1 / (r_1 + r_2)) ].",
      "type": "concept"
    },
    {
      "id": "aero_p4_t1_s0_m2",
      "label": "Transfer Time t_transfer",
      "description": "t_transfer = pi * sqrt( (r_1 + r_2)^3 / (8 * mu) ).",
      "type": "concept"
    },
    {
      "id": "aero_p4_t1_s0_m3",
      "label": "Synodic Period & Phase Angle",
      "description": "Waiting time between optimal planetary departure windows.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t1_s1",
      "label": "Bi-Elliptic Transfer & Inclination Change",
      "description": "Alternative orbital transfer techniques.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t1_s1_m0",
      "label": "Three-Impulse Bi-Elliptic Transfer",
      "description": "Using high apoapsis transfer to reduce total delta-V when r_2 / r_1 > 11.94.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t1_s1_m1",
      "label": "Plane Change Delta-V",
      "description": "Delta-V = 2 * V * sin(Delta_i / 2) performing inclination change at orbital nodes.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t1_s1_m2",
      "label": "Combined Node-Plane Change",
      "description": "Combining vector delta-V burns to simultaneously alter orbit size and inclination.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t1_s1_m3",
      "label": "Aerobraking & Aerocapture",
      "description": "Using atmospheric drag to lower apoapsis without expending propellant.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t1_s2",
      "label": "Lambert's Problem & Interplanetary Trajectories",
      "description": "Determining orbit connecting two spatial vectors in fixed time.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t1_s2_m0",
      "label": "Lambert's Theorem",
      "description": "Transfer time depending solely on semi-major axis, chord length, and sum of radii.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t1_s2_m1",
      "label": "Sphere of Influence (SOI)",
      "description": "R_SOI = d * (m / M)^(2/5) defining gravitational boundary between bodies.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t1_s2_m2",
      "label": "Gravity Assist (Slingshot Effect)",
      "description": "Exchanging momentum with moving planet to gain heliocentric velocity.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t1_s2_m3",
      "label": "Porkchop Plots",
      "description": "Contour maps of departure/arrival V_inf displaying launch energy C3 vs date.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t1_s3",
      "label": "N-Body Perturbations & Geopotential",
      "description": "Non-Keplerian real-world gravitational perturbations.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t1_s3_m0",
      "label": "J2 Oblateness Precession",
      "description": "Earth's equatorial bulge causing RAAN nodal regression and argument of perigee drift.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t1_s3_m1",
      "label": "Sun-Synchronous Orbits (SSO)",
      "description": "Tuning J2 RAAN precession rate to 0.9856 deg/day to match Earth's solar orbit.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t1_s3_m2",
      "label": "Molniya & Tundra Orbits",
      "description": "Critical inclination i = 63.4 deg eliminating argument of perigee precession.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t1_s3_m3",
      "label": "Atmospheric Drag Orbit Decay",
      "description": "Drag acceleration a_d = 0.5 * (C_d * A / m) * rho * V^2 lowering satellite altitude.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t2",
      "label": "Lagrange Points & Three-Body Mechanics",
      "description": "Equilibrium solutions in circular restricted three-body problem (CR3BP).",
      "type": "topic"
    },
    {
      "id": "aero_p4_t2_s0",
      "label": "Collinear Lagrange Points L1, L2, L3",
      "description": "Unstable equilibrium points along inter-body axis requiring active station-keeping.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t2_s1",
      "label": "Triangular Lagrange Points L4, L5",
      "description": "Gravitationally stable equilibrium points holding Trojan asteroids 60 degrees ahead/behind.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t2_s2",
      "label": "Halo & Lissajous Orbits",
      "description": "Periodic 3D libration point orbits around L1/L2 (e.g. JWST at Sun-Earth L2).",
      "type": "concept"
    },
    {
      "id": "aero_p4_t2_s3",
      "label": "Invariant Manifolds & Interplanetary Superhighway",
      "description": "Low-energy transport tubes enabling transfer between planetary SOI boundaries.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t3",
      "label": "Low-Thrust & Electric Trajectories",
      "description": "Continuous electric propulsion trajectory optimization.",
      "type": "topic"
    },
    {
      "id": "aero_p4_t3_s0",
      "label": "Gridded Ion Engine Accelerators",
      "description": "Electrostatic acceleration of xenon/argon ions achieving I_sp > 3000 seconds.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t3_s1",
      "label": "Hall Effect Thrusters (HET)",
      "description": "Cross-field magnetic electron trap accelerating ions with high thrust density.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t3_s2",
      "label": "Continuous Spiral-Out Trajectories",
      "description": "Tangential continuous low-thrust burn spiraling outward from LEO to GEO.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t3_s3",
      "label": "Edelbaum Low-Thrust Velocity Equation",
      "description": "Delta-V required for continuous low-thrust orbital inclination and altitude changes.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t4",
      "label": "Orbital Rendezvous & Proximity Operations",
      "description": "Navigating spacecraft into close contact.",
      "type": "topic"
    },
    {
      "id": "aero_p4_t4_s0",
      "label": "Clohessy-Wiltshire (CW) Relative Motion Equations",
      "description": "Linearized differential equations governing relative motion in Hill's rotating frame.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t4_s1",
      "label": "V-Bar & R-Bar Approach Paths",
      "description": "Approaching target along velocity vector (V-bar) or radial vector (R-bar).",
      "type": "concept"
    },
    {
      "id": "aero_p4_t4_s2",
      "label": "Relative Navigation Sensors (LiDAR / Optical)",
      "description": "Measuring 6-DOF relative position and attitude during terminal docking phase.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t4_s3",
      "label": "Collision Avoidance Maneuvers (CAM)",
      "description": "Pre-programmed evasive impulse burns triggered if relative navigation strays.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t5",
      "label": "Orbit Determination & Tracking Networks",
      "description": "Tracking and updating orbital state vectors from ground observations.",
      "type": "topic"
    },
    {
      "id": "aero_p4_t5_s0",
      "label": "Batchelor Batch Least-Squares Estimation",
      "description": "Fitting orbital state vectors to historical optical and radar range/range-rate data.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t5_s1",
      "label": "Deep Space Network (DSN) Tracking",
      "description": "70-meter parabolic antenna array measuring radiometric Doppler and range.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t5_s2",
      "label": "Two-Line Element (TLE) Format",
      "description": "SGP4 orbital propagation model format tracking space objects.",
      "type": "concept"
    },
    {
      "id": "aero_p4_t5_s3",
      "label": "Conjunction Assessment & Space Debris Avoidance",
      "description": "Predicting probability of collision (PoC) between active satellites and space debris.",
      "type": "concept"
    },
    {
      "id": "aero_p5",
      "label": "Guidance, Navigation, Control (GNC) & Avionics",
      "description": "State estimation, attitude determination, trajectory optimization, and flight software.",
      "type": "topic"
    },
    {
      "id": "aero_p5_t0",
      "label": "Sensors & State Estimation",
      "description": "Measuring spacecraft position, velocity, and orientation using sensor fusion.",
      "type": "topic"
    },
    {
      "id": "aero_p5_t0_s0",
      "label": "Inertial Measurement Units (IMU)",
      "description": "Tri-axial gyroscopes and accelerometers measuring angular rate and specific force.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t0_s0_m0",
      "label": "Ring Laser Gyroscopes (RLG)",
      "description": "Sagnac effect interference measuring rotation without moving parts.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t0_s0_m1",
      "label": "Fiber Optic Gyroscopes (FOG)",
      "description": "Phase shift in counter-propagating laser beams inside optical fiber coil.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t0_s0_m2",
      "label": "Accelerometer Drift Integration",
      "description": "Double integration of acceleration bias errors causing quadratic position drift.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t0_s0_m3",
      "label": "Coning & Sculling Error Algorithmic Compensation",
      "description": "High-rate algorithmic compensation for rotational coning motion.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t0_s1",
      "label": "Extended & Unscented Kalman Filtering",
      "description": "Recursive state estimation algorithms filtering noisy sensor measurements.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t0_s1_m0",
      "label": "Extended Kalman Filter (EKF)",
      "description": "Linearizing non-linear orbital dynamics matrices around current state estimate.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t0_s1_m1",
      "label": "Unscented Kalman Filter (UKF)",
      "description": "Using sigma points to propagate non-linear probability distributions accurately.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t0_s1_m2",
      "label": "Process Noise Covariance Q",
      "description": "Modeling un-commanded atmospheric drag spikes and gravity anomalies.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t0_s1_m3",
      "label": "Measurement Residual Innovation",
      "description": "Difference between actual sensor reading and predicted state measurement.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t0_s2",
      "label": "Attitude Determination Sensors",
      "description": "Celestial and optical orientation sensors.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t0_s2_m0",
      "label": "Star Trackers",
      "description": "CCD cameras matching star patterns against catalog to resolve sub-arcsecond attitude.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t0_s2_m1",
      "label": "Sun Sensors & Horizon Sensors",
      "description": "Determining orientation vector relative to solar disk or Earth horizon.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t0_s2_m2",
      "label": "Magnetometers",
      "description": "Measuring Earth's magnetic field vector to estimate low-Earth orbit attitude.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t0_s2_m3",
      "label": "Sensor Fusion Quaternions",
      "description": "Combining IMU, star tracker, and magnetometer inputs into single quaternion state.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t0_s3",
      "label": "Flight Software & Avionics Architecture",
      "description": "Redundant real-time computing systems.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t0_s3_m0",
      "label": "Fault-Tolerant Triple Modular Redundancy",
      "description": "Three parallel processors voting on output commands to survive hardware failures.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t0_s3_m1",
      "label": "Real-Time Operating Systems (RTOS)",
      "description": "Deterministic interrupt-driven microkernel OS (VxWorks / ARINC 653).",
      "type": "concept"
    },
    {
      "id": "aero_p5_t0_s3_m2",
      "label": "MIL-STD-1553 & SpaceWire Buses",
      "description": "Fault-tolerant deterministic serial data buses connecting avionics modules.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t0_s3_m3",
      "label": "Radiation Hardening (Rad-Hard)",
      "description": "Silicon-on-Insulator (SOI) and triple DFF latches mitigating Single Event Upsets (SEU).",
      "type": "concept"
    },
    {
      "id": "aero_p5_t1",
      "label": "Control Actuators & Trajectory Optimization",
      "description": "Executing guidance commands via thrusters and momentum wheels.",
      "type": "topic"
    },
    {
      "id": "aero_p5_t1_s0",
      "label": "Reaction Control Systems (RCS)",
      "description": "Cold-gas or hypergolic thruster pairs applying torques around roll/pitch/yaw axes.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t1_s0_m0",
      "label": "Cold-Gas Nitrogen Thrusters",
      "description": "Low-I_sp (~70s) simple thrusters for non-contaminating payload positioning.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t1_s0_m1",
      "label": "Pulse-Width Modulation (PWM)",
      "description": "Modulating thruster valve open duration to generate precise micro-impulses.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t1_s0_m2",
      "label": "Thruster Triangulation Logic",
      "description": "Mixing matrix distributing torque commands across fixed thruster nozzles.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t1_s0_m3",
      "label": "Minimum Duty Cycle Limits",
      "description": "Valve opening response time constraining minimum achievable impulse bit.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t1_s1",
      "label": "Control Moment Gyroscopes (CMG)",
      "description": "Gimbaled high-speed momentum wheels exchanging angular momentum for rapid slewing.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t1_s1_m0",
      "label": "Momentum Dumping Strategy",
      "description": "Using magnetorquers to desaturate spinning momentum wheels.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t1_s1_m1",
      "label": "CMG Singularity Avoidance",
      "description": "Algorithmic pathing avoiding internal gimbal lock configurations.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t1_s1_m2",
      "label": "Reaction Wheel Jitter",
      "description": "High-frequency micro-vibrations isolated via passive rubber mounts.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t1_s1_m3",
      "label": "Variable-Speed CMGs (VSCMG)",
      "description": "Combining momentum exchange with flywheel energy storage.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t1_s2",
      "label": "Convex Optimization Powered Descent",
      "description": "Real-time trajectory optimization for pinpoint planetary landings.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t1_s2_m0",
      "label": "Lossless Convexification",
      "description": "Converting non-convex thrust vector magnitude bounds into convex cone constraints.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t1_s2_m1",
      "label": "Minimum-Fuel Trajectory Generation",
      "description": "Solving real-time second-order cone program (SOCP) for landing guidance.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t1_s2_m2",
      "label": "Pinpoint Landing Divergence Bounds",
      "description": "Ensuring vehicle trajectory converges to landing pad within 5-meter accuracy.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t1_s2_m3",
      "label": "Terrain Relative Navigation (TRN)",
      "description": "Optical matching of surface crater features to estimate position relative to terrain.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t1_s3",
      "label": "Thrust Vector Control (TVC) Actuators",
      "description": "Engine nozzle vectoring systems.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t1_s3_m0",
      "label": "Hydraulic vs Electromechanical TVC",
      "description": "Brushless DC motor ball screws replacing heavy hydraulic actuators.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t1_s3_m1",
      "label": "Actuator Frequency Bandwidth (>10 Hz)",
      "description": "High-rate response bandwidth controlling rapid vehicle aerodynamic instability.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t1_s3_m2",
      "label": "Flex-Seal Elastomeric Bearings",
      "description": "Rubber-metal laminated bearings allowing 8-degree nozzle gimbaling under thrust.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t1_s3_m3",
      "label": "Nozzle Gimbal Rate Limits",
      "description": "Restricting max angular gimbal speed to avoid structural resonance coupling.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t2",
      "label": "Atmospheric Entry Guidance & Flight Control",
      "description": "Steering entry vehicles through re-entry heat corridors.",
      "type": "topic"
    },
    {
      "id": "aero_p5_t2_s0",
      "label": "Entry Heating vs G-Load Corridor",
      "description": "Navigating narrow corridor between skip-out limit and structural g-load limit.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t2_s1",
      "label": "Bank Angle Control Roll Slews",
      "description": "Modulating lift vector orientation via roll maneuvers to control downrange distance.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t2_s2",
      "label": "Drag-Energy Phase Tracking",
      "description": "Following pre-programmed drag vs energy profile during hypersonic entry glide.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t2_s3",
      "label": "Terminal Area Energy Management (TAEM)",
      "description": "Executing S-turn banking maneuvers to dissipate excess energy before touchdown.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t3",
      "label": "Launch Vehicle Ascent Guidance",
      "description": "Steering launch vehicle through atmosphere to orbital insertion.",
      "type": "topic"
    },
    {
      "id": "aero_p5_t3_s0",
      "label": "Gravity Turn Flight Path",
      "description": "Zero-lift pitch maneuver allowing gravity to turn velocity vector smoothly.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t3_s1",
      "label": "Closed-Loop Explicit Guidance (PEG)",
      "description": "Powered Explicit Guidance calculating required velocity vector every 100 ms.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t3_s2",
      "label": "Angle of Attack Alpha Restriction",
      "description": "Enforcing zero angle of attack during Max Q to prevent structural breakup.",
      "type": "concept"
    },
    {
      "id": "aero_p5_t3_s3",
      "label": "Orbital Insertion Cutoff Logic",
      "description": "Terminating engine thrust when instant osculating semi-major axis meets target.",
      "type": "concept"
    },
    {
      "id": "aero_p6",
      "label": "Structural Mechanics, Materials & Thermal Protection",
      "description": "Launch vehicle structural loads, cryogenic tanks, composite materials, and re-entry heat shields.",
      "type": "topic"
    },
    {
      "id": "aero_p6_t0",
      "label": "Launch Vehicle Structures & Tanks",
      "description": "Designing lightweight pressure vessels sustaining high g-forces and cryogenic loads.",
      "type": "topic"
    },
    {
      "id": "aero_p6_t0_s0",
      "label": "Grid-Stiffened Isogrid & Orthogrid Tanks",
      "description": "Machining triangular or rectangular rib patterns inside aluminum-lithium (Al-Li 2195) skin panels.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t0_s0_m0",
      "label": "Aluminum-Lithium Alloy 2195",
      "description": "Addition of lithium lowering density while increasing modulus and cryogenic toughness.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t0_s0_m1",
      "label": "Friction Stir Welding (FSW)",
      "description": "Solid-state joining of aluminum tank domes without melting base metal.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t0_s0_m2",
      "label": "Common Bulkhead Architecture",
      "description": "Single shared dome separating LOX and fuel tanks to minimize vehicle length.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t0_s0_m3",
      "label": "Autogenous Tank Pressurization",
      "description": "Routing heated gaseous propellants from engine back to pressurize main tanks.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t0_s1",
      "label": "Thermal Protection Systems (TPS)",
      "description": "Shielding spacecraft from hypersonic re-entry thermal flux.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t0_s1_m0",
      "label": "PICA-X & Phenolic Impregnated Carbon",
      "description": "Lightweight ablative heat shield pyrolyzing under 3000C peak atmospheric entry.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t0_s1_m1",
      "label": "Reusable Silica Ceramic Tiles",
      "description": "High-purity sintered silica tiles radiating 90% of heat into atmosphere (Space Shuttle).",
      "type": "concept"
    },
    {
      "id": "aero_p6_t0_s1_m2",
      "label": "Stainless Steel Active Cooling",
      "description": "SpaceX Starship 304L/316L alloy skin utilizing high thermal capacity at 1100K.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t0_s1_m3",
      "label": "Carbon-Carbon Reinforced Composites",
      "description": "High-temperature wing leading edges sustaining 1650C re-entry plasma.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t1",
      "label": "Advanced Aerospace Materials",
      "description": "High-strength lightweight structural alloys and composites.",
      "type": "topic"
    },
    {
      "id": "aero_p6_t1_s0",
      "label": "Carbon Fiber Reinforced Polymer (CFRP)",
      "description": "High-modulus carbon fibers embedded in epoxy matrix for payload fairings.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t1_s0_m0",
      "label": "Autoclave Curing Process",
      "description": "High-pressure and temperature curing of composite laminates to eliminate voids.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t1_s0_m1",
      "label": "Filament Wound Pressure Vessels (COPV)",
      "description": "Carbon fiber overwrapped thin metal liners for high-pressure gas storage.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t1_s0_m2",
      "label": "Delamination & Interlaminar Shear",
      "description": "Failure modes in composite laminates under out-of-plane shear loads.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t1_s0_m3",
      "label": "Cryogenic Resin Matrices",
      "description": "Specialized toughened resin matrices resisting micro-cracking at 77K.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t1_s1",
      "label": "High-Temperature Superalloys",
      "description": "Metals maintaining strength in hot engine environments.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t1_s1_m0",
      "label": "Inconel 718 Nickel Superalloy",
      "description": "Precipitation-hardened nickel-chromium alloy used in turbopumps and combustion chambers.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t1_s1_m1",
      "label": "Single-Crystal Turbine Blades",
      "description": "Eliminating grain boundaries to prevent creep failure at 1100C turbine inlet temps.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t1_s1_m2",
      "label": "NARloy-Z Copper Alloy",
      "description": "Copper-silver-zirconium alloy providing extreme thermal conductivity for cooling liners.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t1_s1_m3",
      "label": "Columbium C-103 Niobium Alloy",
      "description": "Refractory metal alloy used for un-cooled radiative rocket nozzle extensions.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t2",
      "label": "Structural Dynamics & Environmental Testing",
      "description": "Verifying vehicle structural integrity under launch environments.",
      "type": "topic"
    },
    {
      "id": "aero_p6_t2_s0",
      "label": "Modal Analysis & Natural Frequencies",
      "description": "Extracting structural mode shapes to prevent coupling with POGO oscillations.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t2_s1",
      "label": "Random Vibration Testing (PSD)",
      "description": "Exposing components to Power Spectral Density vibration profiles on shaker tables.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t2_s2",
      "label": "Acoustic Chamber Testing",
      "description": "Simulating 160 dB engine noise in reverberation chambers prior to flight.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t2_s3",
      "label": "Pyrotechnic Shock Isolation",
      "description": "Damping high-frequency shock waves caused by stage separation explosive bolts.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t3",
      "label": "Cryogenic Insulation Systems",
      "description": "Insulation preventing cryogenic liquid boil-off.",
      "type": "topic"
    },
    {
      "id": "aero_p6_t3_s0",
      "label": "Multi-Layer Insulation (MLI) Blankets",
      "description": "Alternating aluminized Mylar sheets separated by Dacron mesh in vacuum.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t3_s1",
      "label": "Spray-On Foam Insulation (SOFI)",
      "description": "Closed-cell polyurethane foam sprayed on tank exterior to prevent ice buildup.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t3_s2",
      "label": "Vacuum Jacketed Transfer Lines",
      "description": "Double-walled vacuum insulated piping delivering cryogenic liquids to engines.",
      "type": "concept"
    },
    {
      "id": "aero_p6_t3_s3",
      "label": "Boil-Off Gas Reliquefaction",
      "description": "Onboard cryocoolers reliquefying boiled-off gaseous hydrogen and methane.",
      "type": "concept"
    },
    {
      "id": "aero_p7",
      "label": "Reusability & Launch System Operations",
      "description": "VTVL booster recovery, autonomous spaceport droneships, and rapid fleet turnaround.",
      "type": "topic"
    },
    {
      "id": "aero_p7_t0",
      "label": "VTVL Booster Recovery Dynamics",
      "description": "Vertical Takeoff Vertical Landing booster entry and landing execution.",
      "type": "topic"
    },
    {
      "id": "aero_p7_t0_s0",
      "label": "Boostback Burn Execution",
      "description": "Vectoring thrust to reverse downrange velocity vector back toward landing site.",
      "type": "concept"
    },
    {
      "id": "aero_p7_t0_s0_m0",
      "label": "Hypersonic Titanium Grid Fins",
      "description": "Grid fins vectoring pitch, yaw, and roll during supersonic atmospheric descent.",
      "type": "concept"
    },
    {
      "id": "aero_p7_t0_s0_m1",
      "label": "Supersonic Retropropulsion Entry Burn",
      "description": "Igniting center engines to create protective gas cushion against re-entry heating.",
      "type": "concept"
    },
    {
      "id": "aero_p7_t0_s0_m2",
      "label": "Suicide Burn / Hoverslam Landing",
      "description": "Single-burn deceleration slowing booster to 0 m/s exactly at touchdown point.",
      "type": "concept"
    },
    {
      "id": "aero_p7_t0_s0_m3",
      "label": "Autonomous Flight Termination System (AFTS)",
      "description": "Onboard GPS/IMU algorithm destroying rogue rocket if boundary is breached.",
      "type": "concept"
    },
    {
      "id": "aero_p7_t0_s1",
      "label": "Autonomous Launch Operations",
      "description": "Automated countdowns, propellant loading, and range safety.",
      "type": "concept"
    },
    {
      "id": "aero_p7_t0_s1_m0",
      "label": "Sub-Cooled Cryogenic Propellant Loading",
      "description": "Chilling LOX to 66K and LCH4 to 90K to increase density by 8% and boost tank mass.",
      "type": "concept"
    },
    {
      "id": "aero_p7_t0_s1_m1",
      "label": "Quick-Disconnect Umbilicals",
      "description": "Pneumatic quick-release ground interface plates retracting at ignition T-0.",
      "type": "concept"
    },
    {
      "id": "aero_p7_t0_s1_m2",
      "label": "Autonomous Spaceport Droneship (ASDS)",
      "description": "Station-keeping ocean platform utilizing dynamic positioning azimuth thrusters.",
      "type": "concept"
    },
    {
      "id": "aero_p7_t0_s1_m3",
      "label": "Mechazilla Tower Catch Arms",
      "description": "Tower-mounted chopstick arms catching returning booster directly out of air.",
      "type": "concept"
    },
    {
      "id": "aero_p7_t1",
      "label": "Spaceport Infrastructure & Launch Recovery",
      "description": "Ground facilities supporting high-frequency launches.",
      "type": "topic"
    },
    {
      "id": "aero_p7_t1_s0",
      "label": "Flame Trench & Water Deluge System",
      "description": "Diverting hot exhaust gas and injecting 300,000 GPM water to damp acoustic shock.",
      "type": "concept"
    },
    {
      "id": "aero_p7_t1_s1",
      "label": "Octagrabber Recovery Robot",
      "description": "Heavy remote robot securing landed booster to droneship deck in rough seas.",
      "type": "concept"
    },
    {
      "id": "aero_p7_t1_s2",
      "label": "Payload Integration Cleanrooms",
      "description": "ISO Class 8 cleanrooms protecting satellite payloads during fairing encapsulation.",
      "type": "concept"
    },
    {
      "id": "aero_p7_t1_s3",
      "label": "Cryogenic Storage & Boil-Off Management",
      "description": "Massive insulated tanks holding million-gallon reserves of liquid methane and LOX.",
      "type": "concept"
    },
    {
      "id": "aero_p7_t2",
      "label": "Fleet Refurbishment & Reliability Engineering",
      "description": "Achieving rapid airline-like rocket turnaround.",
      "type": "topic"
    },
    {
      "id": "aero_p7_t2_s0",
      "label": "Non-Destructive Inspection (NDI)",
      "description": "Ultrasonic and X-ray inspection checking booster airframe for internal micro-cracks.",
      "type": "concept"
    },
    {
      "id": "aero_p7_t2_s1",
      "label": "Engine Automated Static Fire Testing",
      "description": "Brief multi-engine static fire test verifying turbopump health prior to flight.",
      "type": "concept"
    },
    {
      "id": "aero_p7_t2_s2",
      "label": "FAA Re-Flight Licensing",
      "description": "Streamlining regulatory safety approvals for flight-proven reusable boosters.",
      "type": "concept"
    },
    {
      "id": "aero_p7_t2_s3",
      "label": "Fleet Statistical Reliability Metrics",
      "description": "Achieving sub-0.01% failure rate across hundreds of consecutive booster landings.",
      "type": "concept"
    },
    {
      "id": "aero_p7_t3",
      "label": "Payload Fairing Recovery & Reuse",
      "description": "Catching and refurbishing 5-meter composite fairings.",
      "type": "topic"
    },
    {
      "id": "aero_p7_t3_s0",
      "label": "Fairing Halves Cold-Gas RCS Thrusters",
      "description": "Cold-gas nitrogen thrusters stabilizing fairing halves during re-entry.",
      "type": "concept"
    },
    {
      "id": "aero_p7_t3_s1",
      "label": "Steerable Parafoil Recovery",
      "description": "GPS-guided parafoil steering fairing half to soft ocean landing or vessel net.",
      "type": "concept"
    },
    {
      "id": "aero_p7_t3_s2",
      "label": "Saltwater Intrusion Mitigation",
      "description": "Washing fairing composite structures immediately post-recovery to prevent corrosion.",
      "type": "concept"
    },
    {
      "id": "aero_p7_t3_s3",
      "label": "Acoustic Blanket Replacement",
      "description": "Replacing internal noise-dampening acoustic blankets between fairing reuses.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "id": "e_aero_root_aero_p1",
      "source": "aero_root",
      "target": "aero_p1"
    },
    {
      "id": "e_aero_p1_aero_p1_t0",
      "source": "aero_p1",
      "target": "aero_p1_t0"
    },
    {
      "id": "e_aero_p1_t0_aero_p1_t0_s0",
      "source": "aero_p1_t0",
      "target": "aero_p1_t0_s0"
    },
    {
      "id": "e_aero_p1_t0_s0_aero_p1_t0_s0_m0",
      "source": "aero_p1_t0_s0",
      "target": "aero_p1_t0_s0_m0"
    },
    {
      "id": "e_aero_p1_t0_s0_aero_p1_t0_s0_m1",
      "source": "aero_p1_t0_s0",
      "target": "aero_p1_t0_s0_m1"
    },
    {
      "id": "e_aero_p1_t0_s0_aero_p1_t0_s0_m2",
      "source": "aero_p1_t0_s0",
      "target": "aero_p1_t0_s0_m2"
    },
    {
      "id": "e_aero_p1_t0_s0_aero_p1_t0_s0_m3",
      "source": "aero_p1_t0_s0",
      "target": "aero_p1_t0_s0_m3"
    },
    {
      "id": "e_aero_p1_t0_aero_p1_t0_s1",
      "source": "aero_p1_t0",
      "target": "aero_p1_t0_s1"
    },
    {
      "id": "e_aero_p1_t0_s1_aero_p1_t0_s1_m0",
      "source": "aero_p1_t0_s1",
      "target": "aero_p1_t0_s1_m0"
    },
    {
      "id": "e_aero_p1_t0_s1_aero_p1_t0_s1_m1",
      "source": "aero_p1_t0_s1",
      "target": "aero_p1_t0_s1_m1"
    },
    {
      "id": "e_aero_p1_t0_s1_aero_p1_t0_s1_m2",
      "source": "aero_p1_t0_s1",
      "target": "aero_p1_t0_s1_m2"
    },
    {
      "id": "e_aero_p1_t0_s1_aero_p1_t0_s1_m3",
      "source": "aero_p1_t0_s1",
      "target": "aero_p1_t0_s1_m3"
    },
    {
      "id": "e_aero_p1_t0_aero_p1_t0_s2",
      "source": "aero_p1_t0",
      "target": "aero_p1_t0_s2"
    },
    {
      "id": "e_aero_p1_t0_s2_aero_p1_t0_s2_m0",
      "source": "aero_p1_t0_s2",
      "target": "aero_p1_t0_s2_m0"
    },
    {
      "id": "e_aero_p1_t0_s2_aero_p1_t0_s2_m1",
      "source": "aero_p1_t0_s2",
      "target": "aero_p1_t0_s2_m1"
    },
    {
      "id": "e_aero_p1_t0_s2_aero_p1_t0_s2_m2",
      "source": "aero_p1_t0_s2",
      "target": "aero_p1_t0_s2_m2"
    },
    {
      "id": "e_aero_p1_t0_s2_aero_p1_t0_s2_m3",
      "source": "aero_p1_t0_s2",
      "target": "aero_p1_t0_s2_m3"
    },
    {
      "id": "e_aero_p1_t0_aero_p1_t0_s3",
      "source": "aero_p1_t0",
      "target": "aero_p1_t0_s3"
    },
    {
      "id": "e_aero_p1_t0_s3_aero_p1_t0_s3_m0",
      "source": "aero_p1_t0_s3",
      "target": "aero_p1_t0_s3_m0"
    },
    {
      "id": "e_aero_p1_t0_s3_aero_p1_t0_s3_m1",
      "source": "aero_p1_t0_s3",
      "target": "aero_p1_t0_s3_m1"
    },
    {
      "id": "e_aero_p1_t0_s3_aero_p1_t0_s3_m2",
      "source": "aero_p1_t0_s3",
      "target": "aero_p1_t0_s3_m2"
    },
    {
      "id": "e_aero_p1_t0_s3_aero_p1_t0_s3_m3",
      "source": "aero_p1_t0_s3",
      "target": "aero_p1_t0_s3_m3"
    },
    {
      "id": "e_aero_p1_aero_p1_t1",
      "source": "aero_p1",
      "target": "aero_p1_t1"
    },
    {
      "id": "e_aero_p1_t1_aero_p1_t1_s0",
      "source": "aero_p1_t1",
      "target": "aero_p1_t1_s0"
    },
    {
      "id": "e_aero_p1_t1_s0_aero_p1_t1_s0_m0",
      "source": "aero_p1_t1_s0",
      "target": "aero_p1_t1_s0_m0"
    },
    {
      "id": "e_aero_p1_t1_s0_aero_p1_t1_s0_m1",
      "source": "aero_p1_t1_s0",
      "target": "aero_p1_t1_s0_m1"
    },
    {
      "id": "e_aero_p1_t1_s0_aero_p1_t1_s0_m2",
      "source": "aero_p1_t1_s0",
      "target": "aero_p1_t1_s0_m2"
    },
    {
      "id": "e_aero_p1_t1_s0_aero_p1_t1_s0_m3",
      "source": "aero_p1_t1_s0",
      "target": "aero_p1_t1_s0_m3"
    },
    {
      "id": "e_aero_p1_t1_aero_p1_t1_s1",
      "source": "aero_p1_t1",
      "target": "aero_p1_t1_s1"
    },
    {
      "id": "e_aero_p1_t1_s1_aero_p1_t1_s1_m0",
      "source": "aero_p1_t1_s1",
      "target": "aero_p1_t1_s1_m0"
    },
    {
      "id": "e_aero_p1_t1_s1_aero_p1_t1_s1_m1",
      "source": "aero_p1_t1_s1",
      "target": "aero_p1_t1_s1_m1"
    },
    {
      "id": "e_aero_p1_t1_s1_aero_p1_t1_s1_m2",
      "source": "aero_p1_t1_s1",
      "target": "aero_p1_t1_s1_m2"
    },
    {
      "id": "e_aero_p1_t1_s1_aero_p1_t1_s1_m3",
      "source": "aero_p1_t1_s1",
      "target": "aero_p1_t1_s1_m3"
    },
    {
      "id": "e_aero_p1_t1_aero_p1_t1_s2",
      "source": "aero_p1_t1",
      "target": "aero_p1_t1_s2"
    },
    {
      "id": "e_aero_p1_t1_s2_aero_p1_t1_s2_m0",
      "source": "aero_p1_t1_s2",
      "target": "aero_p1_t1_s2_m0"
    },
    {
      "id": "e_aero_p1_t1_s2_aero_p1_t1_s2_m1",
      "source": "aero_p1_t1_s2",
      "target": "aero_p1_t1_s2_m1"
    },
    {
      "id": "e_aero_p1_t1_s2_aero_p1_t1_s2_m2",
      "source": "aero_p1_t1_s2",
      "target": "aero_p1_t1_s2_m2"
    },
    {
      "id": "e_aero_p1_t1_s2_aero_p1_t1_s2_m3",
      "source": "aero_p1_t1_s2",
      "target": "aero_p1_t1_s2_m3"
    },
    {
      "id": "e_aero_p1_t1_aero_p1_t1_s3",
      "source": "aero_p1_t1",
      "target": "aero_p1_t1_s3"
    },
    {
      "id": "e_aero_p1_t1_s3_aero_p1_t1_s3_m0",
      "source": "aero_p1_t1_s3",
      "target": "aero_p1_t1_s3_m0"
    },
    {
      "id": "e_aero_p1_t1_s3_aero_p1_t1_s3_m1",
      "source": "aero_p1_t1_s3",
      "target": "aero_p1_t1_s3_m1"
    },
    {
      "id": "e_aero_p1_t1_s3_aero_p1_t1_s3_m2",
      "source": "aero_p1_t1_s3",
      "target": "aero_p1_t1_s3_m2"
    },
    {
      "id": "e_aero_p1_t1_s3_aero_p1_t1_s3_m3",
      "source": "aero_p1_t1_s3",
      "target": "aero_p1_t1_s3_m3"
    },
    {
      "id": "e_aero_p1_aero_p1_t2",
      "source": "aero_p1",
      "target": "aero_p1_t2"
    },
    {
      "id": "e_aero_p1_t2_aero_p1_t2_s0",
      "source": "aero_p1_t2",
      "target": "aero_p1_t2_s0"
    },
    {
      "id": "e_aero_p1_t2_s0_aero_p1_t2_s0_m0",
      "source": "aero_p1_t2_s0",
      "target": "aero_p1_t2_s0_m0"
    },
    {
      "id": "e_aero_p1_t2_s0_aero_p1_t2_s0_m1",
      "source": "aero_p1_t2_s0",
      "target": "aero_p1_t2_s0_m1"
    },
    {
      "id": "e_aero_p1_t2_s0_aero_p1_t2_s0_m2",
      "source": "aero_p1_t2_s0",
      "target": "aero_p1_t2_s0_m2"
    },
    {
      "id": "e_aero_p1_t2_s0_aero_p1_t2_s0_m3",
      "source": "aero_p1_t2_s0",
      "target": "aero_p1_t2_s0_m3"
    },
    {
      "id": "e_aero_p1_t2_aero_p1_t2_s1",
      "source": "aero_p1_t2",
      "target": "aero_p1_t2_s1"
    },
    {
      "id": "e_aero_p1_t2_s1_aero_p1_t2_s1_m0",
      "source": "aero_p1_t2_s1",
      "target": "aero_p1_t2_s1_m0"
    },
    {
      "id": "e_aero_p1_t2_s1_aero_p1_t2_s1_m1",
      "source": "aero_p1_t2_s1",
      "target": "aero_p1_t2_s1_m1"
    },
    {
      "id": "e_aero_p1_t2_s1_aero_p1_t2_s1_m2",
      "source": "aero_p1_t2_s1",
      "target": "aero_p1_t2_s1_m2"
    },
    {
      "id": "e_aero_p1_t2_s1_aero_p1_t2_s1_m3",
      "source": "aero_p1_t2_s1",
      "target": "aero_p1_t2_s1_m3"
    },
    {
      "id": "e_aero_p1_t2_aero_p1_t2_s2",
      "source": "aero_p1_t2",
      "target": "aero_p1_t2_s2"
    },
    {
      "id": "e_aero_p1_t2_s2_aero_p1_t2_s2_m0",
      "source": "aero_p1_t2_s2",
      "target": "aero_p1_t2_s2_m0"
    },
    {
      "id": "e_aero_p1_t2_s2_aero_p1_t2_s2_m1",
      "source": "aero_p1_t2_s2",
      "target": "aero_p1_t2_s2_m1"
    },
    {
      "id": "e_aero_p1_t2_s2_aero_p1_t2_s2_m2",
      "source": "aero_p1_t2_s2",
      "target": "aero_p1_t2_s2_m2"
    },
    {
      "id": "e_aero_p1_t2_s2_aero_p1_t2_s2_m3",
      "source": "aero_p1_t2_s2",
      "target": "aero_p1_t2_s2_m3"
    },
    {
      "id": "e_aero_p1_t2_aero_p1_t2_s3",
      "source": "aero_p1_t2",
      "target": "aero_p1_t2_s3"
    },
    {
      "id": "e_aero_p1_t2_s3_aero_p1_t2_s3_m0",
      "source": "aero_p1_t2_s3",
      "target": "aero_p1_t2_s3_m0"
    },
    {
      "id": "e_aero_p1_t2_s3_aero_p1_t2_s3_m1",
      "source": "aero_p1_t2_s3",
      "target": "aero_p1_t2_s3_m1"
    },
    {
      "id": "e_aero_p1_t2_s3_aero_p1_t2_s3_m2",
      "source": "aero_p1_t2_s3",
      "target": "aero_p1_t2_s3_m2"
    },
    {
      "id": "e_aero_p1_t2_s3_aero_p1_t2_s3_m3",
      "source": "aero_p1_t2_s3",
      "target": "aero_p1_t2_s3_m3"
    },
    {
      "id": "e_aero_p1_aero_p1_t3",
      "source": "aero_p1",
      "target": "aero_p1_t3"
    },
    {
      "id": "e_aero_p1_t3_aero_p1_t3_s0",
      "source": "aero_p1_t3",
      "target": "aero_p1_t3_s0"
    },
    {
      "id": "e_aero_p1_t3_s0_aero_p1_t3_s0_m0",
      "source": "aero_p1_t3_s0",
      "target": "aero_p1_t3_s0_m0"
    },
    {
      "id": "e_aero_p1_t3_s0_aero_p1_t3_s0_m1",
      "source": "aero_p1_t3_s0",
      "target": "aero_p1_t3_s0_m1"
    },
    {
      "id": "e_aero_p1_t3_s0_aero_p1_t3_s0_m2",
      "source": "aero_p1_t3_s0",
      "target": "aero_p1_t3_s0_m2"
    },
    {
      "id": "e_aero_p1_t3_s0_aero_p1_t3_s0_m3",
      "source": "aero_p1_t3_s0",
      "target": "aero_p1_t3_s0_m3"
    },
    {
      "id": "e_aero_p1_t3_aero_p1_t3_s1",
      "source": "aero_p1_t3",
      "target": "aero_p1_t3_s1"
    },
    {
      "id": "e_aero_p1_t3_s1_aero_p1_t3_s1_m0",
      "source": "aero_p1_t3_s1",
      "target": "aero_p1_t3_s1_m0"
    },
    {
      "id": "e_aero_p1_t3_s1_aero_p1_t3_s1_m1",
      "source": "aero_p1_t3_s1",
      "target": "aero_p1_t3_s1_m1"
    },
    {
      "id": "e_aero_p1_t3_s1_aero_p1_t3_s1_m2",
      "source": "aero_p1_t3_s1",
      "target": "aero_p1_t3_s1_m2"
    },
    {
      "id": "e_aero_p1_t3_s1_aero_p1_t3_s1_m3",
      "source": "aero_p1_t3_s1",
      "target": "aero_p1_t3_s1_m3"
    },
    {
      "id": "e_aero_p1_t3_aero_p1_t3_s2",
      "source": "aero_p1_t3",
      "target": "aero_p1_t3_s2"
    },
    {
      "id": "e_aero_p1_t3_s2_aero_p1_t3_s2_m0",
      "source": "aero_p1_t3_s2",
      "target": "aero_p1_t3_s2_m0"
    },
    {
      "id": "e_aero_p1_t3_s2_aero_p1_t3_s2_m1",
      "source": "aero_p1_t3_s2",
      "target": "aero_p1_t3_s2_m1"
    },
    {
      "id": "e_aero_p1_t3_s2_aero_p1_t3_s2_m2",
      "source": "aero_p1_t3_s2",
      "target": "aero_p1_t3_s2_m2"
    },
    {
      "id": "e_aero_p1_t3_s2_aero_p1_t3_s2_m3",
      "source": "aero_p1_t3_s2",
      "target": "aero_p1_t3_s2_m3"
    },
    {
      "id": "e_aero_p1_t3_aero_p1_t3_s3",
      "source": "aero_p1_t3",
      "target": "aero_p1_t3_s3"
    },
    {
      "id": "e_aero_p1_t3_s3_aero_p1_t3_s3_m0",
      "source": "aero_p1_t3_s3",
      "target": "aero_p1_t3_s3_m0"
    },
    {
      "id": "e_aero_p1_t3_s3_aero_p1_t3_s3_m1",
      "source": "aero_p1_t3_s3",
      "target": "aero_p1_t3_s3_m1"
    },
    {
      "id": "e_aero_p1_t3_s3_aero_p1_t3_s3_m2",
      "source": "aero_p1_t3_s3",
      "target": "aero_p1_t3_s3_m2"
    },
    {
      "id": "e_aero_p1_t3_s3_aero_p1_t3_s3_m3",
      "source": "aero_p1_t3_s3",
      "target": "aero_p1_t3_s3_m3"
    },
    {
      "id": "e_aero_p1_aero_p1_t4",
      "source": "aero_p1",
      "target": "aero_p1_t4"
    },
    {
      "id": "e_aero_p1_t4_aero_p1_t4_s0",
      "source": "aero_p1_t4",
      "target": "aero_p1_t4_s0"
    },
    {
      "id": "e_aero_p1_t4_s0_aero_p1_t4_s0_m0",
      "source": "aero_p1_t4_s0",
      "target": "aero_p1_t4_s0_m0"
    },
    {
      "id": "e_aero_p1_t4_s0_aero_p1_t4_s0_m1",
      "source": "aero_p1_t4_s0",
      "target": "aero_p1_t4_s0_m1"
    },
    {
      "id": "e_aero_p1_t4_s0_aero_p1_t4_s0_m2",
      "source": "aero_p1_t4_s0",
      "target": "aero_p1_t4_s0_m2"
    },
    {
      "id": "e_aero_p1_t4_s0_aero_p1_t4_s0_m3",
      "source": "aero_p1_t4_s0",
      "target": "aero_p1_t4_s0_m3"
    },
    {
      "id": "e_aero_p1_t4_aero_p1_t4_s1",
      "source": "aero_p1_t4",
      "target": "aero_p1_t4_s1"
    },
    {
      "id": "e_aero_p1_t4_s1_aero_p1_t4_s1_m0",
      "source": "aero_p1_t4_s1",
      "target": "aero_p1_t4_s1_m0"
    },
    {
      "id": "e_aero_p1_t4_s1_aero_p1_t4_s1_m1",
      "source": "aero_p1_t4_s1",
      "target": "aero_p1_t4_s1_m1"
    },
    {
      "id": "e_aero_p1_t4_s1_aero_p1_t4_s1_m2",
      "source": "aero_p1_t4_s1",
      "target": "aero_p1_t4_s1_m2"
    },
    {
      "id": "e_aero_p1_t4_s1_aero_p1_t4_s1_m3",
      "source": "aero_p1_t4_s1",
      "target": "aero_p1_t4_s1_m3"
    },
    {
      "id": "e_aero_p1_t4_aero_p1_t4_s2",
      "source": "aero_p1_t4",
      "target": "aero_p1_t4_s2"
    },
    {
      "id": "e_aero_p1_t4_s2_aero_p1_t4_s2_m0",
      "source": "aero_p1_t4_s2",
      "target": "aero_p1_t4_s2_m0"
    },
    {
      "id": "e_aero_p1_t4_s2_aero_p1_t4_s2_m1",
      "source": "aero_p1_t4_s2",
      "target": "aero_p1_t4_s2_m1"
    },
    {
      "id": "e_aero_p1_t4_s2_aero_p1_t4_s2_m2",
      "source": "aero_p1_t4_s2",
      "target": "aero_p1_t4_s2_m2"
    },
    {
      "id": "e_aero_p1_t4_s2_aero_p1_t4_s2_m3",
      "source": "aero_p1_t4_s2",
      "target": "aero_p1_t4_s2_m3"
    },
    {
      "id": "e_aero_p1_t4_aero_p1_t4_s3",
      "source": "aero_p1_t4",
      "target": "aero_p1_t4_s3"
    },
    {
      "id": "e_aero_p1_t4_s3_aero_p1_t4_s3_m0",
      "source": "aero_p1_t4_s3",
      "target": "aero_p1_t4_s3_m0"
    },
    {
      "id": "e_aero_p1_t4_s3_aero_p1_t4_s3_m1",
      "source": "aero_p1_t4_s3",
      "target": "aero_p1_t4_s3_m1"
    },
    {
      "id": "e_aero_p1_t4_s3_aero_p1_t4_s3_m2",
      "source": "aero_p1_t4_s3",
      "target": "aero_p1_t4_s3_m2"
    },
    {
      "id": "e_aero_p1_t4_s3_aero_p1_t4_s3_m3",
      "source": "aero_p1_t4_s3",
      "target": "aero_p1_t4_s3_m3"
    },
    {
      "id": "e_aero_root_aero_p2",
      "source": "aero_root",
      "target": "aero_p2"
    },
    {
      "id": "e_aero_p2_aero_p2_t0",
      "source": "aero_p2",
      "target": "aero_p2_t0"
    },
    {
      "id": "e_aero_p2_t0_aero_p2_t0_s0",
      "source": "aero_p2_t0",
      "target": "aero_p2_t0_s0"
    },
    {
      "id": "e_aero_p2_t0_s0_aero_p2_t0_s0_m0",
      "source": "aero_p2_t0_s0",
      "target": "aero_p2_t0_s0_m0"
    },
    {
      "id": "e_aero_p2_t0_s0_aero_p2_t0_s0_m1",
      "source": "aero_p2_t0_s0",
      "target": "aero_p2_t0_s0_m1"
    },
    {
      "id": "e_aero_p2_t0_s0_aero_p2_t0_s0_m2",
      "source": "aero_p2_t0_s0",
      "target": "aero_p2_t0_s0_m2"
    },
    {
      "id": "e_aero_p2_t0_s0_aero_p2_t0_s0_m3",
      "source": "aero_p2_t0_s0",
      "target": "aero_p2_t0_s0_m3"
    },
    {
      "id": "e_aero_p2_t0_aero_p2_t0_s1",
      "source": "aero_p2_t0",
      "target": "aero_p2_t0_s1"
    },
    {
      "id": "e_aero_p2_t0_s1_aero_p2_t0_s1_m0",
      "source": "aero_p2_t0_s1",
      "target": "aero_p2_t0_s1_m0"
    },
    {
      "id": "e_aero_p2_t0_s1_aero_p2_t0_s1_m1",
      "source": "aero_p2_t0_s1",
      "target": "aero_p2_t0_s1_m1"
    },
    {
      "id": "e_aero_p2_t0_s1_aero_p2_t0_s1_m2",
      "source": "aero_p2_t0_s1",
      "target": "aero_p2_t0_s1_m2"
    },
    {
      "id": "e_aero_p2_t0_s1_aero_p2_t0_s1_m3",
      "source": "aero_p2_t0_s1",
      "target": "aero_p2_t0_s1_m3"
    },
    {
      "id": "e_aero_p2_t0_aero_p2_t0_s2",
      "source": "aero_p2_t0",
      "target": "aero_p2_t0_s2"
    },
    {
      "id": "e_aero_p2_t0_s2_aero_p2_t0_s2_m0",
      "source": "aero_p2_t0_s2",
      "target": "aero_p2_t0_s2_m0"
    },
    {
      "id": "e_aero_p2_t0_s2_aero_p2_t0_s2_m1",
      "source": "aero_p2_t0_s2",
      "target": "aero_p2_t0_s2_m1"
    },
    {
      "id": "e_aero_p2_t0_s2_aero_p2_t0_s2_m2",
      "source": "aero_p2_t0_s2",
      "target": "aero_p2_t0_s2_m2"
    },
    {
      "id": "e_aero_p2_t0_s2_aero_p2_t0_s2_m3",
      "source": "aero_p2_t0_s2",
      "target": "aero_p2_t0_s2_m3"
    },
    {
      "id": "e_aero_p2_t0_aero_p2_t0_s3",
      "source": "aero_p2_t0",
      "target": "aero_p2_t0_s3"
    },
    {
      "id": "e_aero_p2_t0_s3_aero_p2_t0_s3_m0",
      "source": "aero_p2_t0_s3",
      "target": "aero_p2_t0_s3_m0"
    },
    {
      "id": "e_aero_p2_t0_s3_aero_p2_t0_s3_m1",
      "source": "aero_p2_t0_s3",
      "target": "aero_p2_t0_s3_m1"
    },
    {
      "id": "e_aero_p2_t0_s3_aero_p2_t0_s3_m2",
      "source": "aero_p2_t0_s3",
      "target": "aero_p2_t0_s3_m2"
    },
    {
      "id": "e_aero_p2_t0_s3_aero_p2_t0_s3_m3",
      "source": "aero_p2_t0_s3",
      "target": "aero_p2_t0_s3_m3"
    },
    {
      "id": "e_aero_p2_aero_p2_t1",
      "source": "aero_p2",
      "target": "aero_p2_t1"
    },
    {
      "id": "e_aero_p2_t1_aero_p2_t1_s0",
      "source": "aero_p2_t1",
      "target": "aero_p2_t1_s0"
    },
    {
      "id": "e_aero_p2_t1_s0_aero_p2_t1_s0_m0",
      "source": "aero_p2_t1_s0",
      "target": "aero_p2_t1_s0_m0"
    },
    {
      "id": "e_aero_p2_t1_s0_aero_p2_t1_s0_m1",
      "source": "aero_p2_t1_s0",
      "target": "aero_p2_t1_s0_m1"
    },
    {
      "id": "e_aero_p2_t1_s0_aero_p2_t1_s0_m2",
      "source": "aero_p2_t1_s0",
      "target": "aero_p2_t1_s0_m2"
    },
    {
      "id": "e_aero_p2_t1_s0_aero_p2_t1_s0_m3",
      "source": "aero_p2_t1_s0",
      "target": "aero_p2_t1_s0_m3"
    },
    {
      "id": "e_aero_p2_t1_aero_p2_t1_s1",
      "source": "aero_p2_t1",
      "target": "aero_p2_t1_s1"
    },
    {
      "id": "e_aero_p2_t1_s1_aero_p2_t1_s1_m0",
      "source": "aero_p2_t1_s1",
      "target": "aero_p2_t1_s1_m0"
    },
    {
      "id": "e_aero_p2_t1_s1_aero_p2_t1_s1_m1",
      "source": "aero_p2_t1_s1",
      "target": "aero_p2_t1_s1_m1"
    },
    {
      "id": "e_aero_p2_t1_s1_aero_p2_t1_s1_m2",
      "source": "aero_p2_t1_s1",
      "target": "aero_p2_t1_s1_m2"
    },
    {
      "id": "e_aero_p2_t1_s1_aero_p2_t1_s1_m3",
      "source": "aero_p2_t1_s1",
      "target": "aero_p2_t1_s1_m3"
    },
    {
      "id": "e_aero_p2_t1_aero_p2_t1_s2",
      "source": "aero_p2_t1",
      "target": "aero_p2_t1_s2"
    },
    {
      "id": "e_aero_p2_t1_s2_aero_p2_t1_s2_m0",
      "source": "aero_p2_t1_s2",
      "target": "aero_p2_t1_s2_m0"
    },
    {
      "id": "e_aero_p2_t1_s2_aero_p2_t1_s2_m1",
      "source": "aero_p2_t1_s2",
      "target": "aero_p2_t1_s2_m1"
    },
    {
      "id": "e_aero_p2_t1_s2_aero_p2_t1_s2_m2",
      "source": "aero_p2_t1_s2",
      "target": "aero_p2_t1_s2_m2"
    },
    {
      "id": "e_aero_p2_t1_s2_aero_p2_t1_s2_m3",
      "source": "aero_p2_t1_s2",
      "target": "aero_p2_t1_s2_m3"
    },
    {
      "id": "e_aero_p2_t1_aero_p2_t1_s3",
      "source": "aero_p2_t1",
      "target": "aero_p2_t1_s3"
    },
    {
      "id": "e_aero_p2_t1_s3_aero_p2_t1_s3_m0",
      "source": "aero_p2_t1_s3",
      "target": "aero_p2_t1_s3_m0"
    },
    {
      "id": "e_aero_p2_t1_s3_aero_p2_t1_s3_m1",
      "source": "aero_p2_t1_s3",
      "target": "aero_p2_t1_s3_m1"
    },
    {
      "id": "e_aero_p2_t1_s3_aero_p2_t1_s3_m2",
      "source": "aero_p2_t1_s3",
      "target": "aero_p2_t1_s3_m2"
    },
    {
      "id": "e_aero_p2_t1_s3_aero_p2_t1_s3_m3",
      "source": "aero_p2_t1_s3",
      "target": "aero_p2_t1_s3_m3"
    },
    {
      "id": "e_aero_p2_aero_p2_t2",
      "source": "aero_p2",
      "target": "aero_p2_t2"
    },
    {
      "id": "e_aero_p2_t2_aero_p2_t2_s0",
      "source": "aero_p2_t2",
      "target": "aero_p2_t2_s0"
    },
    {
      "id": "e_aero_p2_t2_aero_p2_t2_s1",
      "source": "aero_p2_t2",
      "target": "aero_p2_t2_s1"
    },
    {
      "id": "e_aero_p2_t2_aero_p2_t2_s2",
      "source": "aero_p2_t2",
      "target": "aero_p2_t2_s2"
    },
    {
      "id": "e_aero_p2_t2_aero_p2_t2_s3",
      "source": "aero_p2_t2",
      "target": "aero_p2_t2_s3"
    },
    {
      "id": "e_aero_p2_aero_p2_t3",
      "source": "aero_p2",
      "target": "aero_p2_t3"
    },
    {
      "id": "e_aero_p2_t3_aero_p2_t3_s0",
      "source": "aero_p2_t3",
      "target": "aero_p2_t3_s0"
    },
    {
      "id": "e_aero_p2_t3_aero_p2_t3_s1",
      "source": "aero_p2_t3",
      "target": "aero_p2_t3_s1"
    },
    {
      "id": "e_aero_p2_t3_aero_p2_t3_s2",
      "source": "aero_p2_t3",
      "target": "aero_p2_t3_s2"
    },
    {
      "id": "e_aero_p2_t3_aero_p2_t3_s3",
      "source": "aero_p2_t3",
      "target": "aero_p2_t3_s3"
    },
    {
      "id": "e_aero_p2_aero_p2_t4",
      "source": "aero_p2",
      "target": "aero_p2_t4"
    },
    {
      "id": "e_aero_p2_t4_aero_p2_t4_s0",
      "source": "aero_p2_t4",
      "target": "aero_p2_t4_s0"
    },
    {
      "id": "e_aero_p2_t4_aero_p2_t4_s1",
      "source": "aero_p2_t4",
      "target": "aero_p2_t4_s1"
    },
    {
      "id": "e_aero_p2_t4_aero_p2_t4_s2",
      "source": "aero_p2_t4",
      "target": "aero_p2_t4_s2"
    },
    {
      "id": "e_aero_p2_t4_aero_p2_t4_s3",
      "source": "aero_p2_t4",
      "target": "aero_p2_t4_s3"
    },
    {
      "id": "e_aero_p2_aero_p2_t5",
      "source": "aero_p2",
      "target": "aero_p2_t5"
    },
    {
      "id": "e_aero_p2_t5_aero_p2_t5_s0",
      "source": "aero_p2_t5",
      "target": "aero_p2_t5_s0"
    },
    {
      "id": "e_aero_p2_t5_aero_p2_t5_s1",
      "source": "aero_p2_t5",
      "target": "aero_p2_t5_s1"
    },
    {
      "id": "e_aero_p2_t5_aero_p2_t5_s2",
      "source": "aero_p2_t5",
      "target": "aero_p2_t5_s2"
    },
    {
      "id": "e_aero_p2_t5_aero_p2_t5_s3",
      "source": "aero_p2_t5",
      "target": "aero_p2_t5_s3"
    },
    {
      "id": "e_aero_root_aero_p3",
      "source": "aero_root",
      "target": "aero_p3"
    },
    {
      "id": "e_aero_p3_aero_p3_t0",
      "source": "aero_p3",
      "target": "aero_p3_t0"
    },
    {
      "id": "e_aero_p3_t0_aero_p3_t0_s0",
      "source": "aero_p3_t0",
      "target": "aero_p3_t0_s0"
    },
    {
      "id": "e_aero_p3_t0_s0_aero_p3_t0_s0_m0",
      "source": "aero_p3_t0_s0",
      "target": "aero_p3_t0_s0_m0"
    },
    {
      "id": "e_aero_p3_t0_s0_aero_p3_t0_s0_m1",
      "source": "aero_p3_t0_s0",
      "target": "aero_p3_t0_s0_m1"
    },
    {
      "id": "e_aero_p3_t0_s0_aero_p3_t0_s0_m2",
      "source": "aero_p3_t0_s0",
      "target": "aero_p3_t0_s0_m2"
    },
    {
      "id": "e_aero_p3_t0_s0_aero_p3_t0_s0_m3",
      "source": "aero_p3_t0_s0",
      "target": "aero_p3_t0_s0_m3"
    },
    {
      "id": "e_aero_p3_t0_aero_p3_t0_s1",
      "source": "aero_p3_t0",
      "target": "aero_p3_t0_s1"
    },
    {
      "id": "e_aero_p3_t0_s1_aero_p3_t0_s1_m0",
      "source": "aero_p3_t0_s1",
      "target": "aero_p3_t0_s1_m0"
    },
    {
      "id": "e_aero_p3_t0_s1_aero_p3_t0_s1_m1",
      "source": "aero_p3_t0_s1",
      "target": "aero_p3_t0_s1_m1"
    },
    {
      "id": "e_aero_p3_t0_s1_aero_p3_t0_s1_m2",
      "source": "aero_p3_t0_s1",
      "target": "aero_p3_t0_s1_m2"
    },
    {
      "id": "e_aero_p3_t0_s1_aero_p3_t0_s1_m3",
      "source": "aero_p3_t0_s1",
      "target": "aero_p3_t0_s1_m3"
    },
    {
      "id": "e_aero_p3_t0_aero_p3_t0_s2",
      "source": "aero_p3_t0",
      "target": "aero_p3_t0_s2"
    },
    {
      "id": "e_aero_p3_t0_s2_aero_p3_t0_s2_m0",
      "source": "aero_p3_t0_s2",
      "target": "aero_p3_t0_s2_m0"
    },
    {
      "id": "e_aero_p3_t0_s2_aero_p3_t0_s2_m1",
      "source": "aero_p3_t0_s2",
      "target": "aero_p3_t0_s2_m1"
    },
    {
      "id": "e_aero_p3_t0_s2_aero_p3_t0_s2_m2",
      "source": "aero_p3_t0_s2",
      "target": "aero_p3_t0_s2_m2"
    },
    {
      "id": "e_aero_p3_t0_s2_aero_p3_t0_s2_m3",
      "source": "aero_p3_t0_s2",
      "target": "aero_p3_t0_s2_m3"
    },
    {
      "id": "e_aero_p3_t0_aero_p3_t0_s3",
      "source": "aero_p3_t0",
      "target": "aero_p3_t0_s3"
    },
    {
      "id": "e_aero_p3_t0_s3_aero_p3_t0_s3_m0",
      "source": "aero_p3_t0_s3",
      "target": "aero_p3_t0_s3_m0"
    },
    {
      "id": "e_aero_p3_t0_s3_aero_p3_t0_s3_m1",
      "source": "aero_p3_t0_s3",
      "target": "aero_p3_t0_s3_m1"
    },
    {
      "id": "e_aero_p3_t0_s3_aero_p3_t0_s3_m2",
      "source": "aero_p3_t0_s3",
      "target": "aero_p3_t0_s3_m2"
    },
    {
      "id": "e_aero_p3_t0_s3_aero_p3_t0_s3_m3",
      "source": "aero_p3_t0_s3",
      "target": "aero_p3_t0_s3_m3"
    },
    {
      "id": "e_aero_p3_aero_p3_t1",
      "source": "aero_p3",
      "target": "aero_p3_t1"
    },
    {
      "id": "e_aero_p3_t1_aero_p3_t1_s0",
      "source": "aero_p3_t1",
      "target": "aero_p3_t1_s0"
    },
    {
      "id": "e_aero_p3_t1_s0_aero_p3_t1_s0_m0",
      "source": "aero_p3_t1_s0",
      "target": "aero_p3_t1_s0_m0"
    },
    {
      "id": "e_aero_p3_t1_s0_aero_p3_t1_s0_m1",
      "source": "aero_p3_t1_s0",
      "target": "aero_p3_t1_s0_m1"
    },
    {
      "id": "e_aero_p3_t1_s0_aero_p3_t1_s0_m2",
      "source": "aero_p3_t1_s0",
      "target": "aero_p3_t1_s0_m2"
    },
    {
      "id": "e_aero_p3_t1_s0_aero_p3_t1_s0_m3",
      "source": "aero_p3_t1_s0",
      "target": "aero_p3_t1_s0_m3"
    },
    {
      "id": "e_aero_p3_t1_aero_p3_t1_s1",
      "source": "aero_p3_t1",
      "target": "aero_p3_t1_s1"
    },
    {
      "id": "e_aero_p3_t1_s1_aero_p3_t1_s1_m0",
      "source": "aero_p3_t1_s1",
      "target": "aero_p3_t1_s1_m0"
    },
    {
      "id": "e_aero_p3_t1_s1_aero_p3_t1_s1_m1",
      "source": "aero_p3_t1_s1",
      "target": "aero_p3_t1_s1_m1"
    },
    {
      "id": "e_aero_p3_t1_s1_aero_p3_t1_s1_m2",
      "source": "aero_p3_t1_s1",
      "target": "aero_p3_t1_s1_m2"
    },
    {
      "id": "e_aero_p3_t1_s1_aero_p3_t1_s1_m3",
      "source": "aero_p3_t1_s1",
      "target": "aero_p3_t1_s1_m3"
    },
    {
      "id": "e_aero_p3_t1_aero_p3_t1_s2",
      "source": "aero_p3_t1",
      "target": "aero_p3_t1_s2"
    },
    {
      "id": "e_aero_p3_t1_s2_aero_p3_t1_s2_m0",
      "source": "aero_p3_t1_s2",
      "target": "aero_p3_t1_s2_m0"
    },
    {
      "id": "e_aero_p3_t1_s2_aero_p3_t1_s2_m1",
      "source": "aero_p3_t1_s2",
      "target": "aero_p3_t1_s2_m1"
    },
    {
      "id": "e_aero_p3_t1_s2_aero_p3_t1_s2_m2",
      "source": "aero_p3_t1_s2",
      "target": "aero_p3_t1_s2_m2"
    },
    {
      "id": "e_aero_p3_t1_s2_aero_p3_t1_s2_m3",
      "source": "aero_p3_t1_s2",
      "target": "aero_p3_t1_s2_m3"
    },
    {
      "id": "e_aero_p3_t1_aero_p3_t1_s3",
      "source": "aero_p3_t1",
      "target": "aero_p3_t1_s3"
    },
    {
      "id": "e_aero_p3_t1_s3_aero_p3_t1_s3_m0",
      "source": "aero_p3_t1_s3",
      "target": "aero_p3_t1_s3_m0"
    },
    {
      "id": "e_aero_p3_t1_s3_aero_p3_t1_s3_m1",
      "source": "aero_p3_t1_s3",
      "target": "aero_p3_t1_s3_m1"
    },
    {
      "id": "e_aero_p3_t1_s3_aero_p3_t1_s3_m2",
      "source": "aero_p3_t1_s3",
      "target": "aero_p3_t1_s3_m2"
    },
    {
      "id": "e_aero_p3_t1_s3_aero_p3_t1_s3_m3",
      "source": "aero_p3_t1_s3",
      "target": "aero_p3_t1_s3_m3"
    },
    {
      "id": "e_aero_p3_aero_p3_t2",
      "source": "aero_p3",
      "target": "aero_p3_t2"
    },
    {
      "id": "e_aero_p3_t2_aero_p3_t2_s0",
      "source": "aero_p3_t2",
      "target": "aero_p3_t2_s0"
    },
    {
      "id": "e_aero_p3_t2_aero_p3_t2_s1",
      "source": "aero_p3_t2",
      "target": "aero_p3_t2_s1"
    },
    {
      "id": "e_aero_p3_t2_aero_p3_t2_s2",
      "source": "aero_p3_t2",
      "target": "aero_p3_t2_s2"
    },
    {
      "id": "e_aero_p3_t2_aero_p3_t2_s3",
      "source": "aero_p3_t2",
      "target": "aero_p3_t2_s3"
    },
    {
      "id": "e_aero_p3_aero_p3_t3",
      "source": "aero_p3",
      "target": "aero_p3_t3"
    },
    {
      "id": "e_aero_p3_t3_aero_p3_t3_s0",
      "source": "aero_p3_t3",
      "target": "aero_p3_t3_s0"
    },
    {
      "id": "e_aero_p3_t3_aero_p3_t3_s1",
      "source": "aero_p3_t3",
      "target": "aero_p3_t3_s1"
    },
    {
      "id": "e_aero_p3_t3_aero_p3_t3_s2",
      "source": "aero_p3_t3",
      "target": "aero_p3_t3_s2"
    },
    {
      "id": "e_aero_p3_t3_aero_p3_t3_s3",
      "source": "aero_p3_t3",
      "target": "aero_p3_t3_s3"
    },
    {
      "id": "e_aero_p3_aero_p3_t4",
      "source": "aero_p3",
      "target": "aero_p3_t4"
    },
    {
      "id": "e_aero_p3_t4_aero_p3_t4_s0",
      "source": "aero_p3_t4",
      "target": "aero_p3_t4_s0"
    },
    {
      "id": "e_aero_p3_t4_aero_p3_t4_s1",
      "source": "aero_p3_t4",
      "target": "aero_p3_t4_s1"
    },
    {
      "id": "e_aero_p3_t4_aero_p3_t4_s2",
      "source": "aero_p3_t4",
      "target": "aero_p3_t4_s2"
    },
    {
      "id": "e_aero_p3_t4_aero_p3_t4_s3",
      "source": "aero_p3_t4",
      "target": "aero_p3_t4_s3"
    },
    {
      "id": "e_aero_p3_aero_p3_t5",
      "source": "aero_p3",
      "target": "aero_p3_t5"
    },
    {
      "id": "e_aero_p3_t5_aero_p3_t5_s0",
      "source": "aero_p3_t5",
      "target": "aero_p3_t5_s0"
    },
    {
      "id": "e_aero_p3_t5_aero_p3_t5_s1",
      "source": "aero_p3_t5",
      "target": "aero_p3_t5_s1"
    },
    {
      "id": "e_aero_p3_t5_aero_p3_t5_s2",
      "source": "aero_p3_t5",
      "target": "aero_p3_t5_s2"
    },
    {
      "id": "e_aero_p3_t5_aero_p3_t5_s3",
      "source": "aero_p3_t5",
      "target": "aero_p3_t5_s3"
    },
    {
      "id": "e_aero_root_aero_p4",
      "source": "aero_root",
      "target": "aero_p4"
    },
    {
      "id": "e_aero_p4_aero_p4_t0",
      "source": "aero_p4",
      "target": "aero_p4_t0"
    },
    {
      "id": "e_aero_p4_t0_aero_p4_t0_s0",
      "source": "aero_p4_t0",
      "target": "aero_p4_t0_s0"
    },
    {
      "id": "e_aero_p4_t0_s0_aero_p4_t0_s0_m0",
      "source": "aero_p4_t0_s0",
      "target": "aero_p4_t0_s0_m0"
    },
    {
      "id": "e_aero_p4_t0_s0_aero_p4_t0_s0_m1",
      "source": "aero_p4_t0_s0",
      "target": "aero_p4_t0_s0_m1"
    },
    {
      "id": "e_aero_p4_t0_s0_aero_p4_t0_s0_m2",
      "source": "aero_p4_t0_s0",
      "target": "aero_p4_t0_s0_m2"
    },
    {
      "id": "e_aero_p4_t0_s0_aero_p4_t0_s0_m3",
      "source": "aero_p4_t0_s0",
      "target": "aero_p4_t0_s0_m3"
    },
    {
      "id": "e_aero_p4_t0_aero_p4_t0_s1",
      "source": "aero_p4_t0",
      "target": "aero_p4_t0_s1"
    },
    {
      "id": "e_aero_p4_t0_s1_aero_p4_t0_s1_m0",
      "source": "aero_p4_t0_s1",
      "target": "aero_p4_t0_s1_m0"
    },
    {
      "id": "e_aero_p4_t0_s1_aero_p4_t0_s1_m1",
      "source": "aero_p4_t0_s1",
      "target": "aero_p4_t0_s1_m1"
    },
    {
      "id": "e_aero_p4_t0_s1_aero_p4_t0_s1_m2",
      "source": "aero_p4_t0_s1",
      "target": "aero_p4_t0_s1_m2"
    },
    {
      "id": "e_aero_p4_t0_s1_aero_p4_t0_s1_m3",
      "source": "aero_p4_t0_s1",
      "target": "aero_p4_t0_s1_m3"
    },
    {
      "id": "e_aero_p4_t0_aero_p4_t0_s2",
      "source": "aero_p4_t0",
      "target": "aero_p4_t0_s2"
    },
    {
      "id": "e_aero_p4_t0_s2_aero_p4_t0_s2_m0",
      "source": "aero_p4_t0_s2",
      "target": "aero_p4_t0_s2_m0"
    },
    {
      "id": "e_aero_p4_t0_s2_aero_p4_t0_s2_m1",
      "source": "aero_p4_t0_s2",
      "target": "aero_p4_t0_s2_m1"
    },
    {
      "id": "e_aero_p4_t0_s2_aero_p4_t0_s2_m2",
      "source": "aero_p4_t0_s2",
      "target": "aero_p4_t0_s2_m2"
    },
    {
      "id": "e_aero_p4_t0_s2_aero_p4_t0_s2_m3",
      "source": "aero_p4_t0_s2",
      "target": "aero_p4_t0_s2_m3"
    },
    {
      "id": "e_aero_p4_t0_aero_p4_t0_s3",
      "source": "aero_p4_t0",
      "target": "aero_p4_t0_s3"
    },
    {
      "id": "e_aero_p4_t0_s3_aero_p4_t0_s3_m0",
      "source": "aero_p4_t0_s3",
      "target": "aero_p4_t0_s3_m0"
    },
    {
      "id": "e_aero_p4_t0_s3_aero_p4_t0_s3_m1",
      "source": "aero_p4_t0_s3",
      "target": "aero_p4_t0_s3_m1"
    },
    {
      "id": "e_aero_p4_t0_s3_aero_p4_t0_s3_m2",
      "source": "aero_p4_t0_s3",
      "target": "aero_p4_t0_s3_m2"
    },
    {
      "id": "e_aero_p4_t0_s3_aero_p4_t0_s3_m3",
      "source": "aero_p4_t0_s3",
      "target": "aero_p4_t0_s3_m3"
    },
    {
      "id": "e_aero_p4_aero_p4_t1",
      "source": "aero_p4",
      "target": "aero_p4_t1"
    },
    {
      "id": "e_aero_p4_t1_aero_p4_t1_s0",
      "source": "aero_p4_t1",
      "target": "aero_p4_t1_s0"
    },
    {
      "id": "e_aero_p4_t1_s0_aero_p4_t1_s0_m0",
      "source": "aero_p4_t1_s0",
      "target": "aero_p4_t1_s0_m0"
    },
    {
      "id": "e_aero_p4_t1_s0_aero_p4_t1_s0_m1",
      "source": "aero_p4_t1_s0",
      "target": "aero_p4_t1_s0_m1"
    },
    {
      "id": "e_aero_p4_t1_s0_aero_p4_t1_s0_m2",
      "source": "aero_p4_t1_s0",
      "target": "aero_p4_t1_s0_m2"
    },
    {
      "id": "e_aero_p4_t1_s0_aero_p4_t1_s0_m3",
      "source": "aero_p4_t1_s0",
      "target": "aero_p4_t1_s0_m3"
    },
    {
      "id": "e_aero_p4_t1_aero_p4_t1_s1",
      "source": "aero_p4_t1",
      "target": "aero_p4_t1_s1"
    },
    {
      "id": "e_aero_p4_t1_s1_aero_p4_t1_s1_m0",
      "source": "aero_p4_t1_s1",
      "target": "aero_p4_t1_s1_m0"
    },
    {
      "id": "e_aero_p4_t1_s1_aero_p4_t1_s1_m1",
      "source": "aero_p4_t1_s1",
      "target": "aero_p4_t1_s1_m1"
    },
    {
      "id": "e_aero_p4_t1_s1_aero_p4_t1_s1_m2",
      "source": "aero_p4_t1_s1",
      "target": "aero_p4_t1_s1_m2"
    },
    {
      "id": "e_aero_p4_t1_s1_aero_p4_t1_s1_m3",
      "source": "aero_p4_t1_s1",
      "target": "aero_p4_t1_s1_m3"
    },
    {
      "id": "e_aero_p4_t1_aero_p4_t1_s2",
      "source": "aero_p4_t1",
      "target": "aero_p4_t1_s2"
    },
    {
      "id": "e_aero_p4_t1_s2_aero_p4_t1_s2_m0",
      "source": "aero_p4_t1_s2",
      "target": "aero_p4_t1_s2_m0"
    },
    {
      "id": "e_aero_p4_t1_s2_aero_p4_t1_s2_m1",
      "source": "aero_p4_t1_s2",
      "target": "aero_p4_t1_s2_m1"
    },
    {
      "id": "e_aero_p4_t1_s2_aero_p4_t1_s2_m2",
      "source": "aero_p4_t1_s2",
      "target": "aero_p4_t1_s2_m2"
    },
    {
      "id": "e_aero_p4_t1_s2_aero_p4_t1_s2_m3",
      "source": "aero_p4_t1_s2",
      "target": "aero_p4_t1_s2_m3"
    },
    {
      "id": "e_aero_p4_t1_aero_p4_t1_s3",
      "source": "aero_p4_t1",
      "target": "aero_p4_t1_s3"
    },
    {
      "id": "e_aero_p4_t1_s3_aero_p4_t1_s3_m0",
      "source": "aero_p4_t1_s3",
      "target": "aero_p4_t1_s3_m0"
    },
    {
      "id": "e_aero_p4_t1_s3_aero_p4_t1_s3_m1",
      "source": "aero_p4_t1_s3",
      "target": "aero_p4_t1_s3_m1"
    },
    {
      "id": "e_aero_p4_t1_s3_aero_p4_t1_s3_m2",
      "source": "aero_p4_t1_s3",
      "target": "aero_p4_t1_s3_m2"
    },
    {
      "id": "e_aero_p4_t1_s3_aero_p4_t1_s3_m3",
      "source": "aero_p4_t1_s3",
      "target": "aero_p4_t1_s3_m3"
    },
    {
      "id": "e_aero_p4_aero_p4_t2",
      "source": "aero_p4",
      "target": "aero_p4_t2"
    },
    {
      "id": "e_aero_p4_t2_aero_p4_t2_s0",
      "source": "aero_p4_t2",
      "target": "aero_p4_t2_s0"
    },
    {
      "id": "e_aero_p4_t2_aero_p4_t2_s1",
      "source": "aero_p4_t2",
      "target": "aero_p4_t2_s1"
    },
    {
      "id": "e_aero_p4_t2_aero_p4_t2_s2",
      "source": "aero_p4_t2",
      "target": "aero_p4_t2_s2"
    },
    {
      "id": "e_aero_p4_t2_aero_p4_t2_s3",
      "source": "aero_p4_t2",
      "target": "aero_p4_t2_s3"
    },
    {
      "id": "e_aero_p4_aero_p4_t3",
      "source": "aero_p4",
      "target": "aero_p4_t3"
    },
    {
      "id": "e_aero_p4_t3_aero_p4_t3_s0",
      "source": "aero_p4_t3",
      "target": "aero_p4_t3_s0"
    },
    {
      "id": "e_aero_p4_t3_aero_p4_t3_s1",
      "source": "aero_p4_t3",
      "target": "aero_p4_t3_s1"
    },
    {
      "id": "e_aero_p4_t3_aero_p4_t3_s2",
      "source": "aero_p4_t3",
      "target": "aero_p4_t3_s2"
    },
    {
      "id": "e_aero_p4_t3_aero_p4_t3_s3",
      "source": "aero_p4_t3",
      "target": "aero_p4_t3_s3"
    },
    {
      "id": "e_aero_p4_aero_p4_t4",
      "source": "aero_p4",
      "target": "aero_p4_t4"
    },
    {
      "id": "e_aero_p4_t4_aero_p4_t4_s0",
      "source": "aero_p4_t4",
      "target": "aero_p4_t4_s0"
    },
    {
      "id": "e_aero_p4_t4_aero_p4_t4_s1",
      "source": "aero_p4_t4",
      "target": "aero_p4_t4_s1"
    },
    {
      "id": "e_aero_p4_t4_aero_p4_t4_s2",
      "source": "aero_p4_t4",
      "target": "aero_p4_t4_s2"
    },
    {
      "id": "e_aero_p4_t4_aero_p4_t4_s3",
      "source": "aero_p4_t4",
      "target": "aero_p4_t4_s3"
    },
    {
      "id": "e_aero_p4_aero_p4_t5",
      "source": "aero_p4",
      "target": "aero_p4_t5"
    },
    {
      "id": "e_aero_p4_t5_aero_p4_t5_s0",
      "source": "aero_p4_t5",
      "target": "aero_p4_t5_s0"
    },
    {
      "id": "e_aero_p4_t5_aero_p4_t5_s1",
      "source": "aero_p4_t5",
      "target": "aero_p4_t5_s1"
    },
    {
      "id": "e_aero_p4_t5_aero_p4_t5_s2",
      "source": "aero_p4_t5",
      "target": "aero_p4_t5_s2"
    },
    {
      "id": "e_aero_p4_t5_aero_p4_t5_s3",
      "source": "aero_p4_t5",
      "target": "aero_p4_t5_s3"
    },
    {
      "id": "e_aero_root_aero_p5",
      "source": "aero_root",
      "target": "aero_p5"
    },
    {
      "id": "e_aero_p5_aero_p5_t0",
      "source": "aero_p5",
      "target": "aero_p5_t0"
    },
    {
      "id": "e_aero_p5_t0_aero_p5_t0_s0",
      "source": "aero_p5_t0",
      "target": "aero_p5_t0_s0"
    },
    {
      "id": "e_aero_p5_t0_s0_aero_p5_t0_s0_m0",
      "source": "aero_p5_t0_s0",
      "target": "aero_p5_t0_s0_m0"
    },
    {
      "id": "e_aero_p5_t0_s0_aero_p5_t0_s0_m1",
      "source": "aero_p5_t0_s0",
      "target": "aero_p5_t0_s0_m1"
    },
    {
      "id": "e_aero_p5_t0_s0_aero_p5_t0_s0_m2",
      "source": "aero_p5_t0_s0",
      "target": "aero_p5_t0_s0_m2"
    },
    {
      "id": "e_aero_p5_t0_s0_aero_p5_t0_s0_m3",
      "source": "aero_p5_t0_s0",
      "target": "aero_p5_t0_s0_m3"
    },
    {
      "id": "e_aero_p5_t0_aero_p5_t0_s1",
      "source": "aero_p5_t0",
      "target": "aero_p5_t0_s1"
    },
    {
      "id": "e_aero_p5_t0_s1_aero_p5_t0_s1_m0",
      "source": "aero_p5_t0_s1",
      "target": "aero_p5_t0_s1_m0"
    },
    {
      "id": "e_aero_p5_t0_s1_aero_p5_t0_s1_m1",
      "source": "aero_p5_t0_s1",
      "target": "aero_p5_t0_s1_m1"
    },
    {
      "id": "e_aero_p5_t0_s1_aero_p5_t0_s1_m2",
      "source": "aero_p5_t0_s1",
      "target": "aero_p5_t0_s1_m2"
    },
    {
      "id": "e_aero_p5_t0_s1_aero_p5_t0_s1_m3",
      "source": "aero_p5_t0_s1",
      "target": "aero_p5_t0_s1_m3"
    },
    {
      "id": "e_aero_p5_t0_aero_p5_t0_s2",
      "source": "aero_p5_t0",
      "target": "aero_p5_t0_s2"
    },
    {
      "id": "e_aero_p5_t0_s2_aero_p5_t0_s2_m0",
      "source": "aero_p5_t0_s2",
      "target": "aero_p5_t0_s2_m0"
    },
    {
      "id": "e_aero_p5_t0_s2_aero_p5_t0_s2_m1",
      "source": "aero_p5_t0_s2",
      "target": "aero_p5_t0_s2_m1"
    },
    {
      "id": "e_aero_p5_t0_s2_aero_p5_t0_s2_m2",
      "source": "aero_p5_t0_s2",
      "target": "aero_p5_t0_s2_m2"
    },
    {
      "id": "e_aero_p5_t0_s2_aero_p5_t0_s2_m3",
      "source": "aero_p5_t0_s2",
      "target": "aero_p5_t0_s2_m3"
    },
    {
      "id": "e_aero_p5_t0_aero_p5_t0_s3",
      "source": "aero_p5_t0",
      "target": "aero_p5_t0_s3"
    },
    {
      "id": "e_aero_p5_t0_s3_aero_p5_t0_s3_m0",
      "source": "aero_p5_t0_s3",
      "target": "aero_p5_t0_s3_m0"
    },
    {
      "id": "e_aero_p5_t0_s3_aero_p5_t0_s3_m1",
      "source": "aero_p5_t0_s3",
      "target": "aero_p5_t0_s3_m1"
    },
    {
      "id": "e_aero_p5_t0_s3_aero_p5_t0_s3_m2",
      "source": "aero_p5_t0_s3",
      "target": "aero_p5_t0_s3_m2"
    },
    {
      "id": "e_aero_p5_t0_s3_aero_p5_t0_s3_m3",
      "source": "aero_p5_t0_s3",
      "target": "aero_p5_t0_s3_m3"
    },
    {
      "id": "e_aero_p5_aero_p5_t1",
      "source": "aero_p5",
      "target": "aero_p5_t1"
    },
    {
      "id": "e_aero_p5_t1_aero_p5_t1_s0",
      "source": "aero_p5_t1",
      "target": "aero_p5_t1_s0"
    },
    {
      "id": "e_aero_p5_t1_s0_aero_p5_t1_s0_m0",
      "source": "aero_p5_t1_s0",
      "target": "aero_p5_t1_s0_m0"
    },
    {
      "id": "e_aero_p5_t1_s0_aero_p5_t1_s0_m1",
      "source": "aero_p5_t1_s0",
      "target": "aero_p5_t1_s0_m1"
    },
    {
      "id": "e_aero_p5_t1_s0_aero_p5_t1_s0_m2",
      "source": "aero_p5_t1_s0",
      "target": "aero_p5_t1_s0_m2"
    },
    {
      "id": "e_aero_p5_t1_s0_aero_p5_t1_s0_m3",
      "source": "aero_p5_t1_s0",
      "target": "aero_p5_t1_s0_m3"
    },
    {
      "id": "e_aero_p5_t1_aero_p5_t1_s1",
      "source": "aero_p5_t1",
      "target": "aero_p5_t1_s1"
    },
    {
      "id": "e_aero_p5_t1_s1_aero_p5_t1_s1_m0",
      "source": "aero_p5_t1_s1",
      "target": "aero_p5_t1_s1_m0"
    },
    {
      "id": "e_aero_p5_t1_s1_aero_p5_t1_s1_m1",
      "source": "aero_p5_t1_s1",
      "target": "aero_p5_t1_s1_m1"
    },
    {
      "id": "e_aero_p5_t1_s1_aero_p5_t1_s1_m2",
      "source": "aero_p5_t1_s1",
      "target": "aero_p5_t1_s1_m2"
    },
    {
      "id": "e_aero_p5_t1_s1_aero_p5_t1_s1_m3",
      "source": "aero_p5_t1_s1",
      "target": "aero_p5_t1_s1_m3"
    },
    {
      "id": "e_aero_p5_t1_aero_p5_t1_s2",
      "source": "aero_p5_t1",
      "target": "aero_p5_t1_s2"
    },
    {
      "id": "e_aero_p5_t1_s2_aero_p5_t1_s2_m0",
      "source": "aero_p5_t1_s2",
      "target": "aero_p5_t1_s2_m0"
    },
    {
      "id": "e_aero_p5_t1_s2_aero_p5_t1_s2_m1",
      "source": "aero_p5_t1_s2",
      "target": "aero_p5_t1_s2_m1"
    },
    {
      "id": "e_aero_p5_t1_s2_aero_p5_t1_s2_m2",
      "source": "aero_p5_t1_s2",
      "target": "aero_p5_t1_s2_m2"
    },
    {
      "id": "e_aero_p5_t1_s2_aero_p5_t1_s2_m3",
      "source": "aero_p5_t1_s2",
      "target": "aero_p5_t1_s2_m3"
    },
    {
      "id": "e_aero_p5_t1_aero_p5_t1_s3",
      "source": "aero_p5_t1",
      "target": "aero_p5_t1_s3"
    },
    {
      "id": "e_aero_p5_t1_s3_aero_p5_t1_s3_m0",
      "source": "aero_p5_t1_s3",
      "target": "aero_p5_t1_s3_m0"
    },
    {
      "id": "e_aero_p5_t1_s3_aero_p5_t1_s3_m1",
      "source": "aero_p5_t1_s3",
      "target": "aero_p5_t1_s3_m1"
    },
    {
      "id": "e_aero_p5_t1_s3_aero_p5_t1_s3_m2",
      "source": "aero_p5_t1_s3",
      "target": "aero_p5_t1_s3_m2"
    },
    {
      "id": "e_aero_p5_t1_s3_aero_p5_t1_s3_m3",
      "source": "aero_p5_t1_s3",
      "target": "aero_p5_t1_s3_m3"
    },
    {
      "id": "e_aero_p5_aero_p5_t2",
      "source": "aero_p5",
      "target": "aero_p5_t2"
    },
    {
      "id": "e_aero_p5_t2_aero_p5_t2_s0",
      "source": "aero_p5_t2",
      "target": "aero_p5_t2_s0"
    },
    {
      "id": "e_aero_p5_t2_aero_p5_t2_s1",
      "source": "aero_p5_t2",
      "target": "aero_p5_t2_s1"
    },
    {
      "id": "e_aero_p5_t2_aero_p5_t2_s2",
      "source": "aero_p5_t2",
      "target": "aero_p5_t2_s2"
    },
    {
      "id": "e_aero_p5_t2_aero_p5_t2_s3",
      "source": "aero_p5_t2",
      "target": "aero_p5_t2_s3"
    },
    {
      "id": "e_aero_p5_aero_p5_t3",
      "source": "aero_p5",
      "target": "aero_p5_t3"
    },
    {
      "id": "e_aero_p5_t3_aero_p5_t3_s0",
      "source": "aero_p5_t3",
      "target": "aero_p5_t3_s0"
    },
    {
      "id": "e_aero_p5_t3_aero_p5_t3_s1",
      "source": "aero_p5_t3",
      "target": "aero_p5_t3_s1"
    },
    {
      "id": "e_aero_p5_t3_aero_p5_t3_s2",
      "source": "aero_p5_t3",
      "target": "aero_p5_t3_s2"
    },
    {
      "id": "e_aero_p5_t3_aero_p5_t3_s3",
      "source": "aero_p5_t3",
      "target": "aero_p5_t3_s3"
    },
    {
      "id": "e_aero_root_aero_p6",
      "source": "aero_root",
      "target": "aero_p6"
    },
    {
      "id": "e_aero_p6_aero_p6_t0",
      "source": "aero_p6",
      "target": "aero_p6_t0"
    },
    {
      "id": "e_aero_p6_t0_aero_p6_t0_s0",
      "source": "aero_p6_t0",
      "target": "aero_p6_t0_s0"
    },
    {
      "id": "e_aero_p6_t0_s0_aero_p6_t0_s0_m0",
      "source": "aero_p6_t0_s0",
      "target": "aero_p6_t0_s0_m0"
    },
    {
      "id": "e_aero_p6_t0_s0_aero_p6_t0_s0_m1",
      "source": "aero_p6_t0_s0",
      "target": "aero_p6_t0_s0_m1"
    },
    {
      "id": "e_aero_p6_t0_s0_aero_p6_t0_s0_m2",
      "source": "aero_p6_t0_s0",
      "target": "aero_p6_t0_s0_m2"
    },
    {
      "id": "e_aero_p6_t0_s0_aero_p6_t0_s0_m3",
      "source": "aero_p6_t0_s0",
      "target": "aero_p6_t0_s0_m3"
    },
    {
      "id": "e_aero_p6_t0_aero_p6_t0_s1",
      "source": "aero_p6_t0",
      "target": "aero_p6_t0_s1"
    },
    {
      "id": "e_aero_p6_t0_s1_aero_p6_t0_s1_m0",
      "source": "aero_p6_t0_s1",
      "target": "aero_p6_t0_s1_m0"
    },
    {
      "id": "e_aero_p6_t0_s1_aero_p6_t0_s1_m1",
      "source": "aero_p6_t0_s1",
      "target": "aero_p6_t0_s1_m1"
    },
    {
      "id": "e_aero_p6_t0_s1_aero_p6_t0_s1_m2",
      "source": "aero_p6_t0_s1",
      "target": "aero_p6_t0_s1_m2"
    },
    {
      "id": "e_aero_p6_t0_s1_aero_p6_t0_s1_m3",
      "source": "aero_p6_t0_s1",
      "target": "aero_p6_t0_s1_m3"
    },
    {
      "id": "e_aero_p6_aero_p6_t1",
      "source": "aero_p6",
      "target": "aero_p6_t1"
    },
    {
      "id": "e_aero_p6_t1_aero_p6_t1_s0",
      "source": "aero_p6_t1",
      "target": "aero_p6_t1_s0"
    },
    {
      "id": "e_aero_p6_t1_s0_aero_p6_t1_s0_m0",
      "source": "aero_p6_t1_s0",
      "target": "aero_p6_t1_s0_m0"
    },
    {
      "id": "e_aero_p6_t1_s0_aero_p6_t1_s0_m1",
      "source": "aero_p6_t1_s0",
      "target": "aero_p6_t1_s0_m1"
    },
    {
      "id": "e_aero_p6_t1_s0_aero_p6_t1_s0_m2",
      "source": "aero_p6_t1_s0",
      "target": "aero_p6_t1_s0_m2"
    },
    {
      "id": "e_aero_p6_t1_s0_aero_p6_t1_s0_m3",
      "source": "aero_p6_t1_s0",
      "target": "aero_p6_t1_s0_m3"
    },
    {
      "id": "e_aero_p6_t1_aero_p6_t1_s1",
      "source": "aero_p6_t1",
      "target": "aero_p6_t1_s1"
    },
    {
      "id": "e_aero_p6_t1_s1_aero_p6_t1_s1_m0",
      "source": "aero_p6_t1_s1",
      "target": "aero_p6_t1_s1_m0"
    },
    {
      "id": "e_aero_p6_t1_s1_aero_p6_t1_s1_m1",
      "source": "aero_p6_t1_s1",
      "target": "aero_p6_t1_s1_m1"
    },
    {
      "id": "e_aero_p6_t1_s1_aero_p6_t1_s1_m2",
      "source": "aero_p6_t1_s1",
      "target": "aero_p6_t1_s1_m2"
    },
    {
      "id": "e_aero_p6_t1_s1_aero_p6_t1_s1_m3",
      "source": "aero_p6_t1_s1",
      "target": "aero_p6_t1_s1_m3"
    },
    {
      "id": "e_aero_p6_aero_p6_t2",
      "source": "aero_p6",
      "target": "aero_p6_t2"
    },
    {
      "id": "e_aero_p6_t2_aero_p6_t2_s0",
      "source": "aero_p6_t2",
      "target": "aero_p6_t2_s0"
    },
    {
      "id": "e_aero_p6_t2_aero_p6_t2_s1",
      "source": "aero_p6_t2",
      "target": "aero_p6_t2_s1"
    },
    {
      "id": "e_aero_p6_t2_aero_p6_t2_s2",
      "source": "aero_p6_t2",
      "target": "aero_p6_t2_s2"
    },
    {
      "id": "e_aero_p6_t2_aero_p6_t2_s3",
      "source": "aero_p6_t2",
      "target": "aero_p6_t2_s3"
    },
    {
      "id": "e_aero_p6_aero_p6_t3",
      "source": "aero_p6",
      "target": "aero_p6_t3"
    },
    {
      "id": "e_aero_p6_t3_aero_p6_t3_s0",
      "source": "aero_p6_t3",
      "target": "aero_p6_t3_s0"
    },
    {
      "id": "e_aero_p6_t3_aero_p6_t3_s1",
      "source": "aero_p6_t3",
      "target": "aero_p6_t3_s1"
    },
    {
      "id": "e_aero_p6_t3_aero_p6_t3_s2",
      "source": "aero_p6_t3",
      "target": "aero_p6_t3_s2"
    },
    {
      "id": "e_aero_p6_t3_aero_p6_t3_s3",
      "source": "aero_p6_t3",
      "target": "aero_p6_t3_s3"
    },
    {
      "id": "e_aero_root_aero_p7",
      "source": "aero_root",
      "target": "aero_p7"
    },
    {
      "id": "e_aero_p7_aero_p7_t0",
      "source": "aero_p7",
      "target": "aero_p7_t0"
    },
    {
      "id": "e_aero_p7_t0_aero_p7_t0_s0",
      "source": "aero_p7_t0",
      "target": "aero_p7_t0_s0"
    },
    {
      "id": "e_aero_p7_t0_s0_aero_p7_t0_s0_m0",
      "source": "aero_p7_t0_s0",
      "target": "aero_p7_t0_s0_m0"
    },
    {
      "id": "e_aero_p7_t0_s0_aero_p7_t0_s0_m1",
      "source": "aero_p7_t0_s0",
      "target": "aero_p7_t0_s0_m1"
    },
    {
      "id": "e_aero_p7_t0_s0_aero_p7_t0_s0_m2",
      "source": "aero_p7_t0_s0",
      "target": "aero_p7_t0_s0_m2"
    },
    {
      "id": "e_aero_p7_t0_s0_aero_p7_t0_s0_m3",
      "source": "aero_p7_t0_s0",
      "target": "aero_p7_t0_s0_m3"
    },
    {
      "id": "e_aero_p7_t0_aero_p7_t0_s1",
      "source": "aero_p7_t0",
      "target": "aero_p7_t0_s1"
    },
    {
      "id": "e_aero_p7_t0_s1_aero_p7_t0_s1_m0",
      "source": "aero_p7_t0_s1",
      "target": "aero_p7_t0_s1_m0"
    },
    {
      "id": "e_aero_p7_t0_s1_aero_p7_t0_s1_m1",
      "source": "aero_p7_t0_s1",
      "target": "aero_p7_t0_s1_m1"
    },
    {
      "id": "e_aero_p7_t0_s1_aero_p7_t0_s1_m2",
      "source": "aero_p7_t0_s1",
      "target": "aero_p7_t0_s1_m2"
    },
    {
      "id": "e_aero_p7_t0_s1_aero_p7_t0_s1_m3",
      "source": "aero_p7_t0_s1",
      "target": "aero_p7_t0_s1_m3"
    },
    {
      "id": "e_aero_p7_aero_p7_t1",
      "source": "aero_p7",
      "target": "aero_p7_t1"
    },
    {
      "id": "e_aero_p7_t1_aero_p7_t1_s0",
      "source": "aero_p7_t1",
      "target": "aero_p7_t1_s0"
    },
    {
      "id": "e_aero_p7_t1_aero_p7_t1_s1",
      "source": "aero_p7_t1",
      "target": "aero_p7_t1_s1"
    },
    {
      "id": "e_aero_p7_t1_aero_p7_t1_s2",
      "source": "aero_p7_t1",
      "target": "aero_p7_t1_s2"
    },
    {
      "id": "e_aero_p7_t1_aero_p7_t1_s3",
      "source": "aero_p7_t1",
      "target": "aero_p7_t1_s3"
    },
    {
      "id": "e_aero_p7_aero_p7_t2",
      "source": "aero_p7",
      "target": "aero_p7_t2"
    },
    {
      "id": "e_aero_p7_t2_aero_p7_t2_s0",
      "source": "aero_p7_t2",
      "target": "aero_p7_t2_s0"
    },
    {
      "id": "e_aero_p7_t2_aero_p7_t2_s1",
      "source": "aero_p7_t2",
      "target": "aero_p7_t2_s1"
    },
    {
      "id": "e_aero_p7_t2_aero_p7_t2_s2",
      "source": "aero_p7_t2",
      "target": "aero_p7_t2_s2"
    },
    {
      "id": "e_aero_p7_t2_aero_p7_t2_s3",
      "source": "aero_p7_t2",
      "target": "aero_p7_t2_s3"
    },
    {
      "id": "e_aero_p7_aero_p7_t3",
      "source": "aero_p7",
      "target": "aero_p7_t3"
    },
    {
      "id": "e_aero_p7_t3_aero_p7_t3_s0",
      "source": "aero_p7_t3",
      "target": "aero_p7_t3_s0"
    },
    {
      "id": "e_aero_p7_t3_aero_p7_t3_s1",
      "source": "aero_p7_t3",
      "target": "aero_p7_t3_s1"
    },
    {
      "id": "e_aero_p7_t3_aero_p7_t3_s2",
      "source": "aero_p7_t3",
      "target": "aero_p7_t3_s2"
    },
    {
      "id": "e_aero_p7_t3_aero_p7_t3_s3",
      "source": "aero_p7_t3",
      "target": "aero_p7_t3_s3"
    }
  ]
};
