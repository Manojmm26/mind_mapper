import { MindMapData } from "../../services/llmService";

export const AUTONOMOUS_ROBOTICS_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "robotics_root",
      "label": "Autonomous Driving & Robotics Systems from First Principles",
      "description": "Rigorous first-principles blueprint of Denavit-Hartenberg kinematics, SE(3)/SO(3) Lie algebra, Extended Kalman Filter sensor fusion, Graph SLAM, BEV perception networks, MPC motion planning, ROS 2 middleware, and ISO 26262 ASIL-D safety.",
      "type": "topic"
    },
    {
      "id": "robotics_root_p1",
      "label": "Kinematics & Rigid Body Dynamics",
      "description": "Kinematic chains, Denavit-Hartenberg parameters, SE(3)/SO(3) Lie groups, Quaternions, and Newton-Euler dynamics.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t1",
      "label": "Forward & Inverse Kinematics (DH Parameters)",
      "description": "Mathematical modeling of robotic manipulator joint configurations and end-effector poses.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t1_s1",
      "label": "Denavit-Hartenberg (DH) Convention (a_i, alpha_i, d_i, theta_i)",
      "description": "Standardized 4-parameter representation for homogeneous coordinate transformations between adjacent links.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t1_s1_d1",
      "label": "Homogeneous Transformation Matrix T_i^{i-1}",
      "description": "Constructing 4x4 rigid body transformation matrices combining 3D rotation and translation.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t1_s1_d2",
      "label": "Modified vs Standard DH Parameters",
      "description": "Attaching reference frames to link joints to simplify kinematic chain equations.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t1_s2",
      "label": "Forward Kinematics Chain Product (T_0^n = prod(T_{i-1}^i))",
      "description": "Computing end-effector Cartesian pose given joint angle vector theta.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t1_s2_d1",
      "label": "Matrix Multiplication Chain Execution",
      "description": "Multiplying sequential link transformation matrices along kinematic trees.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t1_s2_d2",
      "label": "Serial vs Parallel Manipulator Topologies",
      "description": "Evaluating forward kinematic equations for serial arms vs Stewart platform parallel robots.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t1_s3",
      "label": "Inverse Kinematics (IK) Analytical Solvers",
      "description": "Calculating joint angles required to position end-effectors at target Cartesian poses.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t1_s3_d1",
      "label": "Pieper's Theorem Closed-Form Solvers",
      "description": "Solving analytical IK for 6-DOF manipulators with 3 intersecting consecutive joint axes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t1_s3_d2",
      "label": "Multiple Branch Solution Disambiguation",
      "description": "Selecting elbow-up vs elbow-down joint configurations based on motion energy constraints.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t1_s4",
      "label": "Numerical Inverse Kinematics (Jacobian Pseudo-Inverse)",
      "description": "Iterative numerical IK solvers for redundant or non-analytical kinematic chains.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t1_s4_d1",
      "label": "Damped Least Squares (Levenberg-Marquardt IK)",
      "description": "Preventing joint velocity spikes near kinematic singularity boundaries.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t1_s4_d2",
      "label": "Null-Space Task Prioritization",
      "description": "Utilizing redundant joint degrees of freedom to execute secondary tasks (obstacle avoidance).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t1_s5",
      "label": "Kinematic Singularity Detection (det(J) = 0)",
      "description": "Identifying robot configurations where end-effector degrees of freedom are lost.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t1_s5_d1",
      "label": "Singular Value Decomposition (SVD) of Jacobian J",
      "description": "Computing manipulability ellipsoids and identifying singular joint directions.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t1_s5_d2",
      "label": "Singularity Avoidance Trajectory Constraints",
      "description": "Bounding joint velocities as manipulators approach boundary singularities.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t2",
      "label": "3D Rotation Representations & SO(3) / SE(3) Lie Groups",
      "description": "Rigid body spatial orientations and transformations represented via Lie algebra.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t2_s1",
      "label": "Unit Quaternions (q = w + xi + yj + zk)",
      "description": "4-dimensional hypercomplex unit numbers representing 3D spatial rotations without Gimbal Lock.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t2_s1_d1",
      "label": "Quaternion Multiplication Formula (Hamilton Product)",
      "description": "Composing sequential 3D rotations via non-commutative quaternion multiplication.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t2_s1_d2",
      "label": "Spherical Linear Interpolation (Slerp)",
      "description": "Interpolating smoothly between rotational orientations along shortest geodesic arc paths.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t2_s2",
      "label": "SO(3) Special Orthogonal Group (3D Rotation Matrices)",
      "description": "Lie group of 3x3 real orthogonal matrices with determinant +1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t2_s2_d1",
      "label": "Orthogonality Invariant Condition (R^T * R = I)",
      "description": "Preserving vector lengths and angles under rotational transformations.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t2_s2_d2",
      "label": "Euler Angle Singularities (Gimbal Lock at Pitch = +/- 90deg)",
      "description": "Loss of one degree of rotational freedom in Roll-Pitch-Yaw Euler conventions.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t2_s3",
      "label": "so(3) Lie Algebra & Exponential Map (exp(phi^hat))",
      "description": "Skewsymmetric 3x3 matrices mapping axis-angle rotation vectors to SO(3).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t2_s3_d1",
      "label": "Rodrigues' Rotation Formula",
      "description": "Computing matrix exponentials directly using axis unit vector u and angle theta.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t2_s3_d2",
      "label": "Logarithmic Map (log(R) -> phi)",
      "description": "Extracting 3D rotation vector representations from 3x3 rotation matrices.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t2_s4",
      "label": "SE(3) Special Euclidean Group (Rigid Transformations)",
      "description": "Lie group combining 3D rotation SO(3) and 3D translation R^3 into 4x4 matrices.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t2_s4_d1",
      "label": "SE(3) Matrix Structure [[R, t], [0^T, 1]]",
      "description": "Encapsulated representation of 6-DOF spatial pose transforms.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t2_s4_d2",
      "label": "se(3) Twist Vector Representation xi = [v, omega]^T",
      "description": "6-dimensional spatial velocity vectors combining linear velocity v and angular velocity omega.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t2_s5",
      "label": "Adjoint Transformation Matrix (Ad_T)",
      "description": "Transforming twist vectors and spatial wrenches between different reference frames.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t2_s5_d1",
      "label": "6x6 Adjoint Matrix Formula",
      "description": "Mapping 6-DOF velocity vectors across coordinate frame transformations.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t2_s5_d2",
      "label": "Spatial Velocity Frame Conversions",
      "description": "Converting body-fixed velocities to spatial inertial reference frame velocities.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t3",
      "label": "Recursive Newton-Euler Rigid Body Dynamics",
      "description": "Computing joint torques required to generate target joint accelerations.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t3_s1",
      "label": "Forward Kinematic Propagation (Outward Pass)",
      "description": "Propagating link velocities and accelerations from base link to end-effector.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t3_s1_d1",
      "label": "Link Angular Velocity Acceleration Vectors",
      "description": "Computing spatial accelerations incorporating centrifugal and Coriolis acceleration terms.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t3_s1_d2",
      "label": "Center-of-Mass (CoM) Linear Acceleration",
      "description": "Calculating linear acceleration vectors at link centers of mass.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t3_s2",
      "label": "Backward Force Propagation (Inward Pass)",
      "description": "Computing net forces and torques acting on links from end-effector back to base.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t3_s2_d1",
      "label": "Newton-Euler Dynamic Equations (F = m*a, N = I*alpha + omega x (I*omega))",
      "description": "Balancing linear force F and rotational torque N on individual links.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t3_s2_d2",
      "label": "Joint Actuator Torque Extraction",
      "description": "Projecting joint wrench vectors onto active joint movement axes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t3_s3",
      "label": "Spatial Inertia Matrix (6x6 Rigid Body Inertia)",
      "description": "Combining rigid body mass, center of mass offset, and 3x3 rotational inertia tensor.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t3_s3_d1",
      "label": "Parallel Axis Theorem (Steiner's Theorem)",
      "description": "Shifting rotational inertia tensors from center of mass to joint reference frames.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t3_s3_d2",
      "label": "Positive-Definite Inertia Tensor Requirements",
      "description": "Ensuring physical validity of dynamic inertia matrices in simulations.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t3_s4",
      "label": "Lagrangian Dynamics Formulation (M(q)*q'' + C(q,q')*q' + g(q) = tau)",
      "description": "Closed-form joint space equations of motion derived from kinetic and potential energy.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t3_s4_d1",
      "label": "Symmetric Positive-Definite Mass Matrix M(q)",
      "description": "Mapping joint accelerations to required joint torques.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t3_s4_d2",
      "label": "Coriolis & Centrifugal Matrix C(q, q')",
      "description": "Modeling non-linear velocity-dependent dynamic forces.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t3_s5",
      "label": "Forward Dynamics Simulation (Featherstone ABA Algorithm)",
      "description": "Computing joint accelerations q'' given applied joint torques tau for physics simulation.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t3_s5_d1",
      "label": "Articulated Body Algorithm (ABA) O(N) Complexity",
      "description": "Solving forward dynamics in linear time O(N) relative to joint count.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t3_s5_d2",
      "label": "Real-Time Physics Engine Integration (MuJoCo / Bullet)",
      "description": "Executing sub-millisecond dynamic physics simulations for robotic control.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t4",
      "label": "Non-Holonomic Mobile Robot Kinematics",
      "description": "Kinematic constraints restricting instantaneous velocity directions of wheeled mobile robots.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t4_s1",
      "label": "Differential Drive Kinematic Model",
      "description": "Two independently driven wheels sharing a common axis.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t4_s1_d1",
      "label": "Forward Kinematic Equations (v = (v_r + v_l)/2, omega = (v_r - v_l)/W)",
      "description": "Mapping right and left wheel speeds to linear and angular robot velocities.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t4_s1_d2",
      "label": "Instantaneous Center of Rotation (ICR)",
      "description": "Calculating the zero-velocity rotation point around which the robot pivots.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t4_s2",
      "label": "Ackermann Steering Kinematic Model (Car-Like Vehicles)",
      "description": "Steering mechanism angling inner and outer front wheels to prevent tire scrubbing during turns.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t4_s2_d1",
      "label": "Ackermann Steering Angle Condition (tan(delta_i) - tan(delta_o) = W / L)",
      "description": "Ensuring all four wheel axes intersect at a single ICR point.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t4_s2_d2",
      "label": "Minimum Turning Radius Boundary (R_min = L / tan(delta_max))",
      "description": "Bounding maximum steering angles in car-like vehicle motion planners.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t4_s3",
      "label": "Mecanum & Omnidirectional Wheel Kinematics",
      "description": "Wheels with angled perimeter rollers enabling 3D planar movement without re-orientation.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t4_s3_d1",
      "label": "45-Degree Roller Vector Math",
      "description": "Combining individual wheel rotational velocities to generate sideways strafing motion.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t4_s3_d2",
      "label": "Holonomic 3-DOF Motion Advantage",
      "description": "Controlling [x_dot, y_dot, theta_dot] independently in tight workspace environments.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t4_s4",
      "label": "Non-Holonomic Velocity Constraint Equations (A(q)*q_dot = 0)",
      "description": "Pfaffian velocity constraints that cannot be integrated into spatial position constraints.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t4_s4_d1",
      "label": "No-Lateral-Slip Tire Constraint",
      "description": "Enforcing zero velocity perpendicular to wheel rolling direction.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t4_s4_d2",
      "label": "Controllability Lie Bracket Verification (Chow-Rashevskii Theorem)",
      "description": "Proving that non-holonomic robots can reach any 3D pose via maneuvering sequences.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t4_s5",
      "label": "Tire Dynamics & Slip Angle Models (Pacejka Magic Formula)",
      "description": "Modeling non-linear tire friction forces during high-speed vehicle maneuvers.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t4_s5_d1",
      "label": "Slip Angle (alpha = arctan(v_y / v_x)) Definition",
      "description": "Angle between tire heading direction and actual tire movement vector.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t4_s5_d2",
      "label": "Pacejka Non-Linear Lateral Force Curve F_y(alpha)",
      "description": "Fitting empirical lateral tire forces across linear, peak, and saturation slip zones.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t5",
      "label": "Kinematics & Rigid Body Dynamics Topic 5",
      "description": "Detailed first-principles mechanics for Kinematics & Rigid Body Dynamics topic 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t5_s1",
      "label": "Kinematics & Rigid Body Dynamics Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Kinematics & Rigid Body Dynamics Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t5_s1_d1",
      "label": "Kinematics & Rigid Body Dynamics Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Kinematics & Rigid Body Dynamics Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t5_s1_d2",
      "label": "Kinematics & Rigid Body Dynamics Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Kinematics & Rigid Body Dynamics Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t5_s2",
      "label": "Kinematics & Rigid Body Dynamics Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Kinematics & Rigid Body Dynamics Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t5_s2_d1",
      "label": "Kinematics & Rigid Body Dynamics Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Kinematics & Rigid Body Dynamics Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t5_s2_d2",
      "label": "Kinematics & Rigid Body Dynamics Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Kinematics & Rigid Body Dynamics Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t5_s3",
      "label": "Kinematics & Rigid Body Dynamics Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Kinematics & Rigid Body Dynamics Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t5_s3_d1",
      "label": "Kinematics & Rigid Body Dynamics Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Kinematics & Rigid Body Dynamics Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t5_s3_d2",
      "label": "Kinematics & Rigid Body Dynamics Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Kinematics & Rigid Body Dynamics Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t5_s4",
      "label": "Kinematics & Rigid Body Dynamics Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Kinematics & Rigid Body Dynamics Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t5_s4_d1",
      "label": "Kinematics & Rigid Body Dynamics Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Kinematics & Rigid Body Dynamics Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t5_s4_d2",
      "label": "Kinematics & Rigid Body Dynamics Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Kinematics & Rigid Body Dynamics Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t5_s5",
      "label": "Kinematics & Rigid Body Dynamics Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Kinematics & Rigid Body Dynamics Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t5_s5_d1",
      "label": "Kinematics & Rigid Body Dynamics Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Kinematics & Rigid Body Dynamics Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t5_s5_d2",
      "label": "Kinematics & Rigid Body Dynamics Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Kinematics & Rigid Body Dynamics Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t6",
      "label": "Kinematics & Rigid Body Dynamics Topic 6",
      "description": "Detailed first-principles mechanics for Kinematics & Rigid Body Dynamics topic 6.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t6_s1",
      "label": "Kinematics & Rigid Body Dynamics Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Kinematics & Rigid Body Dynamics Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t6_s1_d1",
      "label": "Kinematics & Rigid Body Dynamics Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Kinematics & Rigid Body Dynamics Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t6_s1_d2",
      "label": "Kinematics & Rigid Body Dynamics Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Kinematics & Rigid Body Dynamics Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t6_s2",
      "label": "Kinematics & Rigid Body Dynamics Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Kinematics & Rigid Body Dynamics Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t6_s2_d1",
      "label": "Kinematics & Rigid Body Dynamics Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Kinematics & Rigid Body Dynamics Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t6_s2_d2",
      "label": "Kinematics & Rigid Body Dynamics Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Kinematics & Rigid Body Dynamics Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t6_s3",
      "label": "Kinematics & Rigid Body Dynamics Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Kinematics & Rigid Body Dynamics Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t6_s3_d1",
      "label": "Kinematics & Rigid Body Dynamics Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Kinematics & Rigid Body Dynamics Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t6_s3_d2",
      "label": "Kinematics & Rigid Body Dynamics Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Kinematics & Rigid Body Dynamics Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t6_s4",
      "label": "Kinematics & Rigid Body Dynamics Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Kinematics & Rigid Body Dynamics Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t6_s4_d1",
      "label": "Kinematics & Rigid Body Dynamics Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Kinematics & Rigid Body Dynamics Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t6_s4_d2",
      "label": "Kinematics & Rigid Body Dynamics Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Kinematics & Rigid Body Dynamics Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t6_s5",
      "label": "Kinematics & Rigid Body Dynamics Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Kinematics & Rigid Body Dynamics Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t6_s5_d1",
      "label": "Kinematics & Rigid Body Dynamics Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Kinematics & Rigid Body Dynamics Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p1_t6_s5_d2",
      "label": "Kinematics & Rigid Body Dynamics Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Kinematics & Rigid Body Dynamics Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2",
      "label": "Sensor Fusion & State Estimation",
      "description": "Extended/Unscented Kalman Filters (EKF/UKF), LiDAR point cloud processing, RADAR Doppler, and IMU pre-integration.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t1",
      "label": "Extended Kalman Filter (EKF) State Estimation",
      "description": "Non-linear state estimation linearization using first-order Taylor expansion Jacobians.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t1_s1",
      "label": "EKF Prediction Step (x_k|k-1 = f(x_{k-1}, u_k))",
      "description": "Propagating robot state estimate forward in time using motion models.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t1_s1_d1",
      "label": "State Transition Jacobian F_k Calculation",
      "description": "Linearizing non-linear motion model f around current state estimate x.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t1_s1_d2",
      "label": "Covariance Prediction (P_k|k-1 = F_k * P_{k-1} * F_k^T + Q_k)",
      "description": "Injecting process noise covariance Q_k into state uncertainty estimates.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t1_s2",
      "label": "EKF Update Step (Kalman Gain K_k Computation)",
      "description": "Correcting state estimates using incoming sensor measurements z_k.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t1_s2_d1",
      "label": "Measurement Jacobian H_k Calculation",
      "description": "Linearizing non-linear measurement model h around predicted state.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t1_s2_d2",
      "label": "Kalman Gain Formula K_k = P * H^T * (H * P * H^T + R)^{-1}",
      "description": "Balancing motion model uncertainty P against sensor noise covariance R.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t1_s3",
      "label": "Innovations & Mahalanobis Distance Gating",
      "description": "Filtering out corrupted sensor measurement outliers.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t1_s3_d1",
      "label": "Measurement Residual Innovation (y_k = z_k - h(x_k))",
      "description": "Difference between actual sensor measurement and expected measurement.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t1_s3_d2",
      "label": "Chi-Square Outlier Rejection Threshold",
      "description": "Discarding sensor readings whose Mahalanobis distance exceeds 95% confidence bounds.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t1_s4",
      "label": "Linearization Divergence Risk & First-Order Errors",
      "description": "Failures of EKF caused by severe non-linearities or poor initial state estimates.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t1_s4_d1",
      "label": "Un-Bounded Covariance Under-Estimation",
      "description": "Linearization errors causing EKF to become overly confident in incorrect state estimates.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t1_s4_d2",
      "label": "Iterated EKF (IEKF) Re-Linearization Remedy",
      "description": "Re-evaluating Jacobians iteratively around updated state estimates.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t1_s5",
      "label": "Error-State Kalman Filter (ESKF) for Rotations",
      "description": "Estimating small 3D error states delta_x alongside nominal non-linear state trajectories.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t1_s5_d1",
      "label": "Minimal 3D Vector Error State (delta_theta in R^3)",
      "description": "Avoiding quaternion normalization issues by tracking error rotations in R^3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t1_s5_d2",
      "label": "Inject-and-Reset Error State Operations",
      "description": "Injecting estimated error states into nominal states and resetting error states to zero.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t2",
      "label": "Unscented Kalman Filter (UKF) & Particle Filters",
      "description": "Derivative-free non-linear state estimation using deterministic Sigma Point sampling or Monte Carlo particles.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t2_s1",
      "label": "Unscented Transform & Sigma Point Generation",
      "description": "Selecting 2L+1 deterministic sigma points matching state mean and covariance.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t2_s1_d1",
      "label": "Sigma Point Spreading Parameter (lambda = alpha^2 * (L + kappa) - L)",
      "description": "Controlling sigma point distance from mean state x.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t2_s1_d2",
      "label": "Exact Mean and Covariance Propagation",
      "description": "Capturing 2nd-order Taylor series terms accurately without computing Jacobians.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t2_s2",
      "label": "Non-Linear Propagation of Sigma Points",
      "description": "Passing individual sigma points through non-linear motion and measurement functions.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t2_s2_d1",
      "label": "Propagated Sigma Point Re-Combination",
      "description": "Re-calculating predicted mean and covariance from transformed sigma points.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t2_s2_d2",
      "label": "Superior Accuracy for Severe Non-Linearities",
      "description": "Outperforming EKF tracking accuracy when handling highly non-linear dynamics.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t2_s3",
      "label": "Monte Carlo Particle Filter (Sequential Importance Resampling)",
      "description": "Representing arbitrary non-Gaussian posterior probability distributions using discrete particles.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t2_s3_d1",
      "label": "Importance Weight Updating (w_i = w_i * P(z|x_i))",
      "description": "Weighting particles proportional to measurement likelihood.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t2_s3_d2",
      "label": "Low-Weight Particle Resampling (Systematic Resampling)",
      "description": "Duplicating high-weight particles while eliminating low-weight particles.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t2_s4",
      "label": "Particle Deprivation & Sample Impoverishment",
      "description": "Failure mode where all particles collapse into a single point in state space.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t2_s4_d1",
      "label": "Effective Particle Count Monitoring (N_eff = 1 / sum(w_i^2))",
      "description": "Triggering resampling only when effective particle count falls below threshold.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t2_s4_d2",
      "label": "Rouge Particle Jitter Injection",
      "description": "Injecting random Gaussian noise into resampled particles to preserve diversity.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t2_s5",
      "label": "AMCL (Adaptive Monte Carlo Localization) for Mobile Robots",
      "description": "Standard ROS localization package updating particle counts adaptively.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t2_s5_d1",
      "label": "KLD-Sampling (Kullback-Leibler Divergence Bound)",
      "description": "Bounding required particle counts dynamically based on localization confidence.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t2_s5_d2",
      "label": "Global Kidnapped Robot Relocalization",
      "description": "Injecting random particles when sensor likelihood drops to recover from lost tracking.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t3",
      "label": "LiDAR Point Cloud Processing (ICP & NDT)",
      "description": "3D point cloud registration algorithms aligning sequential LiDAR scans.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t3_s1",
      "label": "Iterative Closest Point (ICP) Registration",
      "description": "Aligning two 3D point clouds by iteratively minimizing point-to-point distance squared.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t3_s1_d1",
      "label": "Nearest Neighbor Point Association (kd-Tree Search)",
      "description": "Finding closest corresponding points using 3D spatial kd-trees in O(N log N) time.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t3_s1_d2",
      "label": "SVD Rigid Transform Estimation",
      "description": "Computing optimal rotation R and translation t using Singular Value Decomposition of cross-covariance matrices.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t3_s2",
      "label": "Point-to-Plane & Generalized ICP Variants",
      "description": "Minimizing distance between source points and target surface normal planes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t3_s2_d1",
      "label": "Surface Normal Vector Weighting",
      "description": "Accelerating convergence speed over flat surfaces (walls, roads).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t3_s2_d2",
      "label": "Faster Convergence Rates (< 10 Iterations)",
      "description": "Converging significantly faster than standard point-to-point ICP.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t3_s3",
      "label": "Normal Distributions Transform (NDT) Registration",
      "description": "Converting target point clouds into smooth probability density fields represented as 3D grid cells.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t3_s3_d1",
      "label": "Cell-Based Mean Vector & Covariance Matrix Storage",
      "description": "Storing local 3D Gaussian distributions within 1m^2 grid voxels.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t3_s3_d2",
      "label": "Hessian-Based Newton Optimization",
      "description": "Optimizing alignment via score function gradient optimization without explicit point association matching.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t3_s4",
      "label": "LiDAR Ground Plane Removal & Motion Un-Distortion",
      "description": "Preprocessing raw 3D point cloud scans prior to registration.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t3_s4_d1",
      "label": "RANSAC Plane Fitting Ground Removal",
      "description": "Identifying and removing road surface points to focus registration on obstacles.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t3_s4_d2",
      "label": "High-Speed Motion Un-Distortion via IMU Interp",
      "description": "Correcting point cloud spatial skew caused by sensor movement during 100ms scan sweeps.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t3_s5",
      "label": "Voxel Grid & Feature Downsampling (FPFH Descriptors)",
      "description": "Reducing point cloud density while preserving spatial geometric features.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t3_s5_d1",
      "label": "Voxel Grid Filter Centroid Reduction",
      "description": "Replacing all points inside a 3D voxel box with their single average centroid point.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t3_s5_d2",
      "label": "Fast Point Feature Histograms (FPFH)",
      "description": "Extracting 33-dimensional rotation-invariant geometric descriptors for coarse alignment.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t4",
      "label": "IMU Pre-Integration & Visual-Inertial Odometry (VIO)",
      "description": "Tightly-coupled sensor fusion combining high-rate IMU measurements with visual camera features.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t4_s1",
      "label": "IMU Sensor Error Model (Biases & White Noise)",
      "description": "Modeling accelerometer and gyroscope measurements incorporating time-varying biases.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t4_s1_d1",
      "label": "Accelerometer & Gyroscope Bias Random Walk",
      "description": "Tracking time-varying zero-offset biases b_a and b_g.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t4_s1_d2",
      "label": "High-Rate Integration (100Hz-1000Hz Data Signals)",
      "description": "Integrating high-speed IMU raw measurements between visual camera frames.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t4_s2",
      "label": "Forster IMU Pre-Integration Theory (SO(3) Manifolds)",
      "description": "Pre-integrating IMU measurements relative to local reference frames independently of initial state estimates.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t4_s2_d1",
      "label": "Pre-Integrated Delta Measurement Factors (Delta R, Delta v, Delta p)",
      "description": "Combining hundreds of IMU samples into single relative factor graph edges.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t4_s2_d2",
      "label": "First-Order Bias Correction Jacobians",
      "description": "Updating pre-integrated IMU factors when bias estimates change without re-integrating raw samples.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t4_s3",
      "label": "Visual Feature Tracking (KLT Optical Flow vs Descriptor Matching)",
      "description": "Tracking 2D image keypoints across sequential camera frames.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t4_s3_d1",
      "label": "Kanade-Lucas-Tomasi (KLT) Feature Tracking",
      "description": "Tracking sparse Shi-Tomasi corners via local brightness constancy optical flow.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t4_s3_d2",
      "label": "ORB / FAST Feature Extraction & Descriptor Matching",
      "description": "Matching binary descriptors across wide baseline camera views.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t4_s4",
      "label": "Tightly-Coupled Factor Graph VIO Optimization (OKVIS / VINS-Mono)",
      "description": "Joint non-linear optimization of camera poses, 3D landmark positions, and IMU biases in a unified window.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t4_s4_d1",
      "label": "Sliding Window Keyframe Marginalization",
      "description": "Marginalizing old keyframes while preserving prior information via Schur Complement operations.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t4_s4_d2",
      "label": "Visual-Inertial Gravity Vector Realignment",
      "description": "Estimating absolute roll, pitch, and scale parameters using gravity vector references.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t4_s5",
      "label": "RADAR Velocity Measurement & Doppler Processing",
      "description": "Utilizing mmWave FMCW RADAR Doppler signals for direct velocity estimation.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t4_s5_d1",
      "label": "Instantaneous Target Doppler Velocity Measurement",
      "description": "Measuring target relative radial velocity directly in single scan chirps.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t4_s5_d2",
      "label": "All-Weather Sensing Reliability (Fog, Heavy Rain, Snow)",
      "description": "Maintaining reliable object velocity tracking under adverse weather conditions.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t5",
      "label": "Sensor Fusion & State Estimation Topic 5",
      "description": "Detailed first-principles mechanics for Sensor Fusion & State Estimation topic 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t5_s1",
      "label": "Sensor Fusion & State Estimation Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Sensor Fusion & State Estimation Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t5_s1_d1",
      "label": "Sensor Fusion & State Estimation Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sensor Fusion & State Estimation Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t5_s1_d2",
      "label": "Sensor Fusion & State Estimation Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sensor Fusion & State Estimation Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t5_s2",
      "label": "Sensor Fusion & State Estimation Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Sensor Fusion & State Estimation Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t5_s2_d1",
      "label": "Sensor Fusion & State Estimation Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sensor Fusion & State Estimation Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t5_s2_d2",
      "label": "Sensor Fusion & State Estimation Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sensor Fusion & State Estimation Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t5_s3",
      "label": "Sensor Fusion & State Estimation Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Sensor Fusion & State Estimation Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t5_s3_d1",
      "label": "Sensor Fusion & State Estimation Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sensor Fusion & State Estimation Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t5_s3_d2",
      "label": "Sensor Fusion & State Estimation Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sensor Fusion & State Estimation Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t5_s4",
      "label": "Sensor Fusion & State Estimation Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Sensor Fusion & State Estimation Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t5_s4_d1",
      "label": "Sensor Fusion & State Estimation Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sensor Fusion & State Estimation Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t5_s4_d2",
      "label": "Sensor Fusion & State Estimation Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sensor Fusion & State Estimation Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t5_s5",
      "label": "Sensor Fusion & State Estimation Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Sensor Fusion & State Estimation Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t5_s5_d1",
      "label": "Sensor Fusion & State Estimation Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sensor Fusion & State Estimation Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t5_s5_d2",
      "label": "Sensor Fusion & State Estimation Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sensor Fusion & State Estimation Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t6",
      "label": "Sensor Fusion & State Estimation Topic 6",
      "description": "Detailed first-principles mechanics for Sensor Fusion & State Estimation topic 6.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t6_s1",
      "label": "Sensor Fusion & State Estimation Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Sensor Fusion & State Estimation Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t6_s1_d1",
      "label": "Sensor Fusion & State Estimation Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sensor Fusion & State Estimation Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t6_s1_d2",
      "label": "Sensor Fusion & State Estimation Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sensor Fusion & State Estimation Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t6_s2",
      "label": "Sensor Fusion & State Estimation Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Sensor Fusion & State Estimation Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t6_s2_d1",
      "label": "Sensor Fusion & State Estimation Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sensor Fusion & State Estimation Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t6_s2_d2",
      "label": "Sensor Fusion & State Estimation Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sensor Fusion & State Estimation Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t6_s3",
      "label": "Sensor Fusion & State Estimation Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Sensor Fusion & State Estimation Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t6_s3_d1",
      "label": "Sensor Fusion & State Estimation Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sensor Fusion & State Estimation Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t6_s3_d2",
      "label": "Sensor Fusion & State Estimation Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sensor Fusion & State Estimation Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t6_s4",
      "label": "Sensor Fusion & State Estimation Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Sensor Fusion & State Estimation Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t6_s4_d1",
      "label": "Sensor Fusion & State Estimation Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sensor Fusion & State Estimation Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t6_s4_d2",
      "label": "Sensor Fusion & State Estimation Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sensor Fusion & State Estimation Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t6_s5",
      "label": "Sensor Fusion & State Estimation Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Sensor Fusion & State Estimation Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t6_s5_d1",
      "label": "Sensor Fusion & State Estimation Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sensor Fusion & State Estimation Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p2_t6_s5_d2",
      "label": "Sensor Fusion & State Estimation Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sensor Fusion & State Estimation Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3",
      "label": "SLAM (Simultaneous Localization & Mapping)",
      "description": "Graph-based SLAM, GTSAM, ORB-SLAM3, Bundle Adjustment (BA), and loop closure detection.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t1",
      "label": "Graph-Based SLAM & Factor Graph Optimization",
      "description": "Formulating SLAM as non-linear least squares optimization over factor graphs.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t1_s1",
      "label": "Factor Graph Node & Edge Topology",
      "description": "Bipartite graph containing pose/landmark variable nodes connected by measurement factor edges.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t1_s1_d1",
      "label": "Variable Nodes (Robot Poses x_i, Map Landmarks l_j)",
      "description": "Representing unknown state variables to be optimized.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t1_s1_d2",
      "label": "Factor Edges (Odometry, Vision, Loop Closures)",
      "description": "Encapsulating non-linear probabilistic measurement constraints with covariance R_k.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t1_s2",
      "label": "Non-Linear Least Squares Objective Function",
      "description": "Minimizing sum of weighted squared residual errors across all graph factors.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t1_s2_d1",
      "label": "Mahalanobis Distance Error Formula e(x)^T * Omega * e(x)",
      "description": "Weighting measurement errors by information matrices Omega = R^{-1}.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t1_s2_d2",
      "label": "Global Non-Linear Optimization Formulation",
      "description": "Finding optimal state vector X* maximizing joint posterior probability.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t1_s3",
      "label": "Gauss-Newton & Levenberg-Marquardt Solvers",
      "description": "Iterative optimization algorithms solving linearized normal equations (H * delta_x = -b).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t1_s3_d1",
      "label": "Hessian Matrix Construction H = J^T * Omega * J",
      "description": "Building sparse symmetric positive-definite Hessian matrices.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t1_s3_d2",
      "label": "Levenberg-Marquardt Damping Parameter (H + lambda*I)",
      "description": "Interpolating between gradient descent and Gauss-Newton steps to ensure convergence.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t1_s4",
      "label": "Sparse Linear System Solvers (GTSAM / g2o)",
      "description": "Exploiting factor graph sparsity using Cholesky or QR factorization.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t1_s4_d1",
      "label": "Sparse Cholesky Factorization (H = L * L^T)",
      "description": "Factoring sparse Hessian matrices in sub-quadratic time.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t1_s4_d2",
      "label": "Variable Re-ordering (AMD / COLAMD)",
      "description": "Re-ordering variable elimination indices to minimize fill-in entries during matrix factorization.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t1_s5",
      "label": "iSAM2 (Incremental Smoothing and Mapping)",
      "description": "Updating factor graph solutions incrementally using Bayes Trees.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t1_s5_d1",
      "label": "Bayes Tree Data Structure",
      "description": "Converting factor graphs into directed tree structures of clique conditionals.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t1_s5_d2",
      "label": "Fluid Relay Incremental Re-linearization",
      "description": "Re-linearizing only affected variable subtrees when new factors arrive.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t2",
      "label": "Bundle Adjustment (BA) & Photometric Visual SLAM",
      "description": "Joint optimization of camera poses and 3D point locations from image observations.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t2_s1",
      "label": "Reprojection Error Minimization Formula",
      "description": "Minimizing distance between observed 2D feature coordinates and projected 3D landmark points.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t2_s1_d1",
      "label": "Camera Projection Model (pi(K * (R*P + t)))",
      "description": "Projecting 3D point P onto 2D image plane using intrinsic matrix K and pose [R|t].",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t2_s1_d2",
      "label": "Pixel Reprojection Error Residual (e = p_observed - pi(P))",
      "description": "Calculating 2D pixel displacement vectors.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t2_s2",
      "label": "Schur Complement Trick (Structure-from-Motion / BA)",
      "description": "Marginalizing 3D landmark points to reduce linear system sizes during BA updates.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t2_s2_d1",
      "label": "Block Structure Hessian Matrix [[H_cc, H_cl], [H_lc, H_ll]]",
      "description": "Partitioning Hessian matrices into camera-camera (cc) and landmark-landmark (ll) blocks.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t2_s2_d2",
      "label": "Reduced Camera Matrix System (H_sc = H_cc - H_cl * H_ll^{-1} * H_lc)",
      "description": "Solving for camera pose updates independently of landmark count.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t2_s3",
      "label": "ORB-SLAM3 System Architecture",
      "description": "State-of-the-art visual-inertial SLAM system supporting pinhole and fisheye cameras.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t2_s3_d1",
      "label": "Multi-Map Atlas System",
      "description": "Creating new independent maps when tracking is lost and merging them upon loop closure.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t2_s3_d2",
      "label": "3-Thread Parallel Processing (Tracking, Local Mapping, Loop/Map Merging)",
      "description": "Dividing workload across tracking, local bundle adjustment, and global loop closure threads.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t2_s4",
      "label": "Direct Photometric SLAM (DSO / Direct Sparse Odometry)",
      "description": "Minimizing pixel intensity differences directly without extracting feature descriptors.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t2_s4_d1",
      "label": "Photometric Error Formula e = I_2(p_2) - I_1(p_1)",
      "description": "Evaluating brightness constancy across image patches.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t2_s4_d2",
      "label": "Sub-Pixel Precision & High Gradient Traversal",
      "description": "Utilizing all high-gradient image regions without corner detection constraints.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t2_s5",
      "label": "Robust Loss Functions (Huber / Cauchy / Tukey Loss)",
      "description": "Down-weighting residual errors of false feature associations (outliers).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t2_s5_d1",
      "label": "Huber Loss Piecewise Function",
      "description": "Quadratic penalty for small errors, linear penalty for large outlier errors.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t2_s5_d2",
      "label": "Iteratively Reweighted Least Squares (IRLS)",
      "description": "Updating factor weights dynamically based on residual magnitudes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t3",
      "label": "Loop Closure Detection & Place Recognition",
      "description": "Identifying previously visited locations to eliminate accumulated drift errors in SLAM maps.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t3_s1",
      "label": "Bag-of-Visual-Words (BoW / DBoW2) Architecture",
      "description": "Converting image feature descriptors into sparse numerical word frequency vectors.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t3_s1_d1",
      "label": "Hierarchical K-Means Vocabulary Tree",
      "description": "Clustering millions of binary ORB descriptors into tree vocabulary nodes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t3_s1_d2",
      "label": "Term Frequency - Inverse Document Frequency (TF-IDF) Weighting",
      "description": "Assigning high weights to rare distinctive visual words.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t3_s2",
      "label": "Candidate Place Selection & Similarity Scoring",
      "description": "Searching historical keyframe databases for visual matches.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t3_s2_d1",
      "label": "Vector Cosine Distance Scoring",
      "description": "Comparing TF-IDF vector similarity between current and historical keyframes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t3_s2_d2",
      "label": "Island Grouping Temporal Consistency",
      "description": "Grouping temporally adjacent candidate keyframes to prevent spurious matches.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t3_s3",
      "label": "Geometric Verification & RANSAC 3D-3D Alignment",
      "description": "Verifying candidate loop closures by computing valid 3D geometric transformations.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t3_s3_d1",
      "label": "RANSAC 3D Point Match Verification",
      "description": "Finding inlier 3D point matches that satisfy rigid SE(3) transformation bounds.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t3_s3_d2",
      "label": "Sim(3) 7-DOF Similarity Transform Estimation",
      "description": "Estimating 7-DOF scale-aware spatial transformations to correct monocular visual drift.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t3_s4",
      "label": "Global Pose Graph Optimization (PGO)",
      "description": "Distributing loop closure correction errors across full historical pose graphs.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t3_s4_d1",
      "label": "SE(3) Manifold Graph Relaxation",
      "description": "Adjusting historical camera poses to satisfy new loop closure constraints.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t3_s4_d2",
      "label": "Map Drift Elimination",
      "description": "Snapping drifted map ends back together to restore global map topological consistency.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t3_s5",
      "label": "Deep Learning Place Recognition (NetVLAD / CosPlace)",
      "description": "Using deep neural networks to extract illumination- and season-invariant global image descriptors.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t3_s5_d1",
      "label": "NetVLAD Vector Aggregation Layer",
      "description": "Aggregating feature map activations into compact global image descriptors.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t3_s5_d2",
      "label": "Extreme Environment Invariance",
      "description": "Matching locations across day/night and summer/winter visual changes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t4",
      "label": "Dense & Semantic Mapping (NeRF / 3D Gaussian Splatting SLAM)",
      "description": "Next-generation SLAM architectures building photorealistic 3D scene representations.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t4_s1",
      "label": "TSDF (Truncated Signed Distance Function) Volume Grids",
      "description": "Representing 3D scene surfaces using voxel grids storing distance to nearest surface.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t4_s1_d1",
      "label": "Voxel Grid Distance Truncation Interval",
      "description": "Storing distance values strictly near surface boundaries to save memory.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t4_s1_d2",
      "label": "Marching Cubes Mesh Extraction",
      "description": "Extracting 3D triangular mesh surfaces from TSDF voxel grids.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t4_s2",
      "label": "Neural Implicit Representations (NeRF-SLAM / iMAP)",
      "description": "Representing 3D geometry and color as continuous neural networks (MLPs).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t4_s2_d1",
      "label": "Positional Encoding Fourier Features",
      "description": "Mapping 3D coordinates to high-frequency feature space to capture fine geometric details.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t4_s2_d2",
      "label": "Differentiable Volume Rendering",
      "description": "Backpropagating pixel loss directly to update neural scene parameters.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t4_s3",
      "label": "3D Gaussian Splatting SLAM (Splat-SLAM)",
      "description": "Representing scenes using millions of explicit 3D Gaussian primitives for real-time rendering.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t4_s3_d1",
      "label": "3D Gaussian Primitive Parameters (Mu, Sigma, Color, Opacity)",
      "description": "Modeling scene geometry via anisotropic 3D ellipsoids.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t4_s3_d2",
      "label": "Sub-Millisecond Rasterization Speeds",
      "description": "Rendering scenes at 100+ fps using GPU tile-based rasterization.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t4_s4",
      "label": "Semantic SLAM & Object Instance Segment Maps",
      "description": "Annotating 3D maps with semantic category labels (road, building, car, person).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t4_s4_d1",
      "label": "2D Semantic Segmentation Fusion into 3D Voxels",
      "description": "Projecting 2D neural network segmentation masks onto 3D map points.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t4_s4_d2",
      "label": "Object-Centric Dynamic Element Masking",
      "description": "Filtering out moving object points (vehicles, pedestrians) to maintain static map purity.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t4_s5",
      "label": "Map Storage & Memory Compression (Octrees / VDB)",
      "description": "Compressing large 3D maps using hierarchical spatial tree structures.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t4_s5_d1",
      "label": "Octree Spatial Subdivision (OctoMap)",
      "description": "Sub-dividing 3D space into 8 child voxels only where geometry exists.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t4_s5_d2",
      "label": "OpenVDB Sparse Data Structures",
      "description": "Storing petabyte-scale sparse volumetric grids efficiently in memory.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t5",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 5",
      "description": "Detailed first-principles mechanics for SLAM (Simultaneous Localization & Mapping) topic 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t5_s1",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for SLAM (Simultaneous Localization & Mapping) Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t5_s1_d1",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t5_s1_d2",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t5_s2",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for SLAM (Simultaneous Localization & Mapping) Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t5_s2_d1",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t5_s2_d2",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t5_s3",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for SLAM (Simultaneous Localization & Mapping) Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t5_s3_d1",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t5_s3_d2",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t5_s4",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for SLAM (Simultaneous Localization & Mapping) Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t5_s4_d1",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t5_s4_d2",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t5_s5",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for SLAM (Simultaneous Localization & Mapping) Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t5_s5_d1",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t5_s5_d2",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SLAM (Simultaneous Localization & Mapping) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t6",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 6",
      "description": "Detailed first-principles mechanics for SLAM (Simultaneous Localization & Mapping) topic 6.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t6_s1",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for SLAM (Simultaneous Localization & Mapping) Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t6_s1_d1",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t6_s1_d2",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t6_s2",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for SLAM (Simultaneous Localization & Mapping) Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t6_s2_d1",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t6_s2_d2",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t6_s3",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for SLAM (Simultaneous Localization & Mapping) Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t6_s3_d1",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t6_s3_d2",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t6_s4",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for SLAM (Simultaneous Localization & Mapping) Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t6_s4_d1",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t6_s4_d2",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t6_s5",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for SLAM (Simultaneous Localization & Mapping) Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t6_s5_d1",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p3_t6_s5_d2",
      "label": "SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SLAM (Simultaneous Localization & Mapping) Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4",
      "label": "Perception & 3D Object Detection",
      "description": "Bird's-Eye-View (BEV) networks, PointPillars, Occupancy Networks, camera pinhole models, and sensor calibration.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t1",
      "label": "Camera Pinhole Model & Lens Distortion",
      "description": "Geometric projection of 3D world points onto 2D image sensor planes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t1_s1",
      "label": "Intrinsic Matrix K Representation",
      "description": "3x3 matrix mapping camera-frame 3D coordinates to 2D pixel coordinates.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t1_s1_d1",
      "label": "Intrinsic Parameters (f_x, f_y, c_x, c_y, s)",
      "description": "Encoding focal length, principal point offsets, and axis skew.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t1_s1_d2",
      "label": "Projective Coordinate Mapping [u, v, 1]^T = K * [X/Z, Y/Z, 1]^T",
      "description": "Perspective division converting 3D coordinates to 2D pixels.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t1_s2",
      "label": "Radial & Tangential Lens Distortion Models",
      "description": "Correcting optical distortion caused by physical camera lenses.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t1_s2_d1",
      "label": "Brown-Conrady Distortion Model (k_1, k_2, k_3, p_1, p_2)",
      "description": "Modeling barrel/pincushion radial distortion and lens tilt tangential distortion.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t1_s2_d2",
      "label": "Image Rectification Lookup Tables (LUTs)",
      "description": "Pre-computing pixel re-mapping tables to un-distort camera images in real time.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t1_s3",
      "label": "Extrinsic Transformation Matrix [R | t]",
      "description": "4x4 matrix transforming points from world coordinate system to camera coordinate system.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t1_s3_d1",
      "label": "Rigid Body World-to-Camera Transform",
      "description": "Rotating and translating world 3D points into local camera reference frames.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t1_s3_d2",
      "label": "Multi-Camera Rig Extrinsic Calibration",
      "description": "Computing relative 3D pose transformations between multiple vehicle cameras.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t1_s4",
      "label": "Fisheye & Kannala-Brandt Wide-Angle Models",
      "description": "Mathematical projection models for ultra-wide-angle fisheye cameras (> 180deg FOV).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t1_s4_d1",
      "label": "Equidistant & Equisolid Angle Projections",
      "description": "Projecting high-angle rays without extreme peripheral pixel stretching.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t1_s4_d2",
      "label": "Polynomial Angle Distortion Formula theta_d(theta)",
      "description": "Modeling non-linear ray bending in fisheye lenses.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t1_s5",
      "label": "Epipolar Geometry & Fundamental / Essential Matrix",
      "description": "Geometric constraints between two stereo camera views of a common 3D scene.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t1_s5_d1",
      "label": "Essential Matrix E = [t]_x * R (5 Degrees of Freedom)",
      "description": "Encoding relative translation and rotation between calibrated stereo cameras.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t1_s5_d2",
      "label": "Epipolar Line Constraint (x_2^T * E * x_1 = 0)",
      "description": "Restricting feature matching searches to 1D epipolar lines across stereo images.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t2",
      "label": "3D LiDAR Object Detection (PointPillars / SECOND)",
      "description": "Deep learning architectures detecting 3D bounding boxes directly from raw point cloud data.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t2_s1",
      "label": "PointPillars Grid Feature Extraction",
      "description": "Organizing 3D point clouds into vertical 2D pillar columns to leverage fast 2D convolutions.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t2_s1_d1",
      "label": "Pillar Voxelization & Point Encoding (x, y, z, r, x_c, y_c, z_c, x_p, y_p)",
      "description": "Decorating each point with offsets from pillar center and arithmetic mean.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t2_s1_d2",
      "label": "Simplified PointNet Backbone Execution",
      "description": "Applying 1x1 2D convolutions and Max-Pooling to generate pseudo-2D image feature maps.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t2_s2",
      "label": "Sparse 3D Submanifold Convolutions (SECOND)",
      "description": "Executing 3D convolutions strictly on non-empty voxel regions to eliminate zero-padding computation.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t2_s2_d1",
      "label": "Sparse Hash Table Voxel Indexing",
      "description": "Indexing active voxels using hash tables to bypass empty 3D space computation.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t2_s2_d2",
      "label": "Submanifold Sparse Convolution Invariant",
      "description": "Ensuring output activations are computed strictly where input active voxels exist.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t2_s3",
      "label": "3D Bounding Box Regression Target Encoding",
      "description": "Encoding 7-DOF 3D bounding boxes [x, y, z, dx, dy, dz, heading_theta].",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t2_s3_d1",
      "label": "Residual Box Parameterization",
      "description": "Regressing log-scale dimension ratios and normalized center offsets relative to anchor boxes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t2_s3_d2",
      "label": "Sine-Cosine Heading Loss Formulation",
      "description": "Preventing orientation loss jumps at 180-degree heading boundaries.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t2_s4",
      "label": "CenterPoint Anchor-Free 3D Detection",
      "description": "Detecting objects as 3D point centers and regressing bounding box attributes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t2_s4_d1",
      "label": "Heatmap Peak Center Keypoint Detection",
      "description": "Predicting object center positions on 2D BEV feature maps.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t2_s4_d2",
      "label": "Velocity Vector Regression Heads",
      "description": "Regressing 2D velocity vectors [v_x, v_y] directly from sequential point cloud features.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t2_s5",
      "label": "Multi-Modal LiDAR-Camera Fusion (DeepContinuousFusion / TransFusion)",
      "description": "Fusing 3D LiDAR point cloud features with 2D camera image features.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t2_s5_d1",
      "label": "Continuous 3D-to-2D Feature Projection",
      "description": "Projecting 3D point cloud features into 2D camera feature maps to extract semantic color/texture.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t2_s5_d2",
      "label": "Cross-Attention Transformer Fusion Layers",
      "description": "Utilizing attention mechanisms to dynamically weight camera vs LiDAR feature contributions.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t3",
      "label": "Camera-Based BEV (Bird's-Eye-View) Perception Networks",
      "description": "Transforming multi-camera 2D perspective image features into a unified 3D/BEV coordinate space.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t3_s1",
      "label": "LSS (Lift-Splat-Shoot) Depth Distribution Transformation",
      "description": "Predicting categorical depth distributions per pixel to lift 2D image features into 3D frustums.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t3_s1_d1",
      "label": "Feature Outer Product Lifting (F_3D = D (x) F_2D)",
      "description": "Multiplying 2D feature vectors by predicted depth probability distributions D.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t3_s1_d2",
      "label": "Pillar Splatting & Sum-Pooling",
      "description": "Splatting 3D frustum points into BEV grid pillars and sum-pooling overlapping features.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t3_s2",
      "label": "BEVFormer Spatial & Temporal Cross-Attention",
      "description": "Utilizing Transformer queries to sample features across multi-camera images and historical BEV frames.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t3_s2_d1",
      "label": "Spatial Cross-Attention Grid Sampling",
      "description": "Projecting 3D BEV query points onto 2D camera images to extract multi-view features.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t3_s2_d2",
      "label": "Temporal Self-Attention Alignment",
      "description": "Warping historical BEV feature maps using vehicle odometry to aggregate temporal information.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t3_s3",
      "label": "3D Map Construction & HD Vector Map Generation (MapTR)",
      "description": "Predicting vectorized map elements (lane lines, boundaries, crosswalks) directly from BEV features.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t3_s3_d1",
      "label": "Permutation-Equivalent Polyline Queries",
      "description": "Representing road boundaries as ordered 3D point sequences.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t3_s3_d2",
      "label": "Hierarchical Point-Line Distance Losses",
      "description": "Optimizing polyline geometry and topology accuracy using chamfer distance variants.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t3_s4",
      "label": "BEV Depth Estimation Supervision (Self-Supervised & LiDAR Guided)",
      "description": "Training mono/multi-camera depth prediction heads without manual 3D annotations.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t3_s4_d1",
      "label": "Sparse LiDAR Point Depth Supervision",
      "description": "Projecting sparse 3D LiDAR points onto camera frames to serve as ground-truth depth targets.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t3_s4_d2",
      "label": "Photometric Warping Loss (SfM-Learner)",
      "description": "Minimizing image reconstruction loss across sequential temporal frames.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t3_s5",
      "label": "Camera-Only 3D Object Detection Performance",
      "description": "Evaluating performance tradeoffs between camera-only BEV systems and LiDAR setups.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t3_s5_d1",
      "label": "Long-Range Depth Degradation Quadratic Error",
      "description": "Managing depth estimation error growth (sigma_Z proportional to Z^2 / baseline).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t3_s5_d2",
      "label": "Low-Cost Hardware Scalability Advantage",
      "description": "Enabling full 3D autonomous perception using low-cost camera suites.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t4",
      "label": "3D Occupancy Grids & World Models",
      "description": "Representing 3D space as a voxelized grid storing occupancy probabilities and semantic labels.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t4_s1",
      "label": "3D Voxel Occupancy Grid Representation (OccNet)",
      "description": "Sub-dividing 3D space around vehicles into fine-grained 3D voxel cells (e.g. 0.2m x 0.2m x 0.2m).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t4_s1_d1",
      "label": "Occupancy Probability Output p(V_xyz in {Free, Occupied})",
      "description": "Predicting binary or continuous occupancy status per 3D voxel.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t4_s1_d2",
      "label": "Generic Arbitrary Obstacle Handling",
      "description": "Detecting un-classified obstacles (debris, fallen trees, loose cargo) without predefined 3D bounding boxes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t4_s2",
      "label": "Semantic Occupancy Classification (16+ Classes)",
      "description": "Assigning semantic labels (driveable surface, sidewalk, vehicle, vegetation) to occupied voxels.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t4_s2_d1",
      "label": "3D Semantic Segmentation Loss Functions",
      "description": "Training voxel heads using focal loss and Class-Balanced Cross-Entropy.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t4_s2_d2",
      "label": "Fusing Geometric and Visual Semantic Features",
      "description": "Predicting fine-grained semantic properties for every 3D spatial voxel.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t4_s3",
      "label": "Occupancy Flow Vector Fields (3D Motion Prediction)",
      "description": "Predicting 3D velocity vectors [v_x, v_y, v_z] for every occupied voxel.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t4_s3_d1",
      "label": "Predicting Non-Rigid Dynamic Object Motion",
      "description": "Tracking motion of deformable or complex objects (pedestrians, articulated trucks).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t4_s3_d2",
      "label": "Short-Term Future Occupancy Forecasting (1-3 Seconds)",
      "description": "Forecasting future 3D scene occupancy states for collision avoidance.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t4_s4",
      "label": "Generative World Models for Autonomous Driving (GAIA-1 / DriveDreamer)",
      "description": "Using multimodal generative video models to simulate future driving scenes conditioned on actions.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t4_s4_d1",
      "label": "Action-Conditioned Video Generation",
      "description": "Synthesizing realistic future multi-camera video streams based on planned steering and acceleration inputs.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t4_s4_d2",
      "label": "Un-Supervised World Physics Learning",
      "description": "Learning complex traffic dynamics and agent interactions from massive video datasets.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t4_s5",
      "label": "Real-Time Voxel Memory Optimization (NeRF-Like Tri-Perspective Views)",
      "description": "Compressing 3D voxel grids using 2D Tri-Perspective View (TPV) feature planes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t4_s5_d1",
      "label": "TPV Plane Feature Factorization (XY, XZ, YZ Planes)",
      "description": "Representing 3D voxel space using three intersecting 2D feature planes to reduce memory footprint by 90%.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t4_s5_d2",
      "label": "Real-Time Sub-50ms Inference Latencies",
      "description": "Serving high-resolution 3D occupancy networks on embedded vehicle GPUs.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t5",
      "label": "Perception & 3D Object Detection Topic 5",
      "description": "Detailed first-principles mechanics for Perception & 3D Object Detection topic 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t5_s1",
      "label": "Perception & 3D Object Detection Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Perception & 3D Object Detection Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t5_s1_d1",
      "label": "Perception & 3D Object Detection Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Perception & 3D Object Detection Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t5_s1_d2",
      "label": "Perception & 3D Object Detection Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Perception & 3D Object Detection Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t5_s2",
      "label": "Perception & 3D Object Detection Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Perception & 3D Object Detection Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t5_s2_d1",
      "label": "Perception & 3D Object Detection Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Perception & 3D Object Detection Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t5_s2_d2",
      "label": "Perception & 3D Object Detection Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Perception & 3D Object Detection Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t5_s3",
      "label": "Perception & 3D Object Detection Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Perception & 3D Object Detection Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t5_s3_d1",
      "label": "Perception & 3D Object Detection Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Perception & 3D Object Detection Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t5_s3_d2",
      "label": "Perception & 3D Object Detection Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Perception & 3D Object Detection Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t5_s4",
      "label": "Perception & 3D Object Detection Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Perception & 3D Object Detection Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t5_s4_d1",
      "label": "Perception & 3D Object Detection Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Perception & 3D Object Detection Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t5_s4_d2",
      "label": "Perception & 3D Object Detection Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Perception & 3D Object Detection Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t5_s5",
      "label": "Perception & 3D Object Detection Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Perception & 3D Object Detection Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t5_s5_d1",
      "label": "Perception & 3D Object Detection Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Perception & 3D Object Detection Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t5_s5_d2",
      "label": "Perception & 3D Object Detection Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Perception & 3D Object Detection Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t6",
      "label": "Perception & 3D Object Detection Topic 6",
      "description": "Detailed first-principles mechanics for Perception & 3D Object Detection topic 6.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t6_s1",
      "label": "Perception & 3D Object Detection Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Perception & 3D Object Detection Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t6_s1_d1",
      "label": "Perception & 3D Object Detection Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Perception & 3D Object Detection Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t6_s1_d2",
      "label": "Perception & 3D Object Detection Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Perception & 3D Object Detection Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t6_s2",
      "label": "Perception & 3D Object Detection Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Perception & 3D Object Detection Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t6_s2_d1",
      "label": "Perception & 3D Object Detection Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Perception & 3D Object Detection Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t6_s2_d2",
      "label": "Perception & 3D Object Detection Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Perception & 3D Object Detection Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t6_s3",
      "label": "Perception & 3D Object Detection Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Perception & 3D Object Detection Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t6_s3_d1",
      "label": "Perception & 3D Object Detection Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Perception & 3D Object Detection Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t6_s3_d2",
      "label": "Perception & 3D Object Detection Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Perception & 3D Object Detection Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t6_s4",
      "label": "Perception & 3D Object Detection Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Perception & 3D Object Detection Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t6_s4_d1",
      "label": "Perception & 3D Object Detection Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Perception & 3D Object Detection Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t6_s4_d2",
      "label": "Perception & 3D Object Detection Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Perception & 3D Object Detection Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t6_s5",
      "label": "Perception & 3D Object Detection Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Perception & 3D Object Detection Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t6_s5_d1",
      "label": "Perception & 3D Object Detection Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Perception & 3D Object Detection Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p4_t6_s5_d2",
      "label": "Perception & 3D Object Detection Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Perception & 3D Object Detection Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5",
      "label": "Motion Planning & Trajectory Generation",
      "description": "Graph search (A*/Hybrid A*), sampling-based planners (RRT*), Model Predictive Control (MPC), and Frenet coordinates.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t1",
      "label": "Frenet Frame Coordinate System",
      "description": "Curvilinear coordinate system mapping vehicle pose relative to a reference path centerline.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t1_s1",
      "label": "Longitudinal (s) & Lateral (d) Coordinate Decomposition",
      "description": "Decomposing 2D Cartesian poses (x, y) into arc-length along path (s) and perpendicular offset (d).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t1_s1_d1",
      "label": "Arc-Length Parameter s Progress Metric",
      "description": "Tracking forward distance traveled along reference road lanes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t1_s1_d2",
      "label": "Perpendicular Offset d Deviation Metric",
      "description": "Measuring lateral deviation from lane centerlines.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t1_s2",
      "label": "Cartesian-to-Frenet Transformation Equations",
      "description": "Converting global Cartesian coordinates (x, y, theta, kappa) to Frenet coordinates (s, d, d', d'').",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t1_s2_d1",
      "label": "Reference Line Projection (Nearest Point Search)",
      "description": "Finding closest reference line point r(s) to project vehicle position.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t1_s2_d2",
      "label": "Curvature-Aware Coordinate Transformation",
      "description": "Accounting for road curvature kappa(s) when transforming heading angles and velocities.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t1_s3",
      "label": "Quartic & Quintic Polynomial Trajectory Generation",
      "description": "Generating smooth 1D motion profiles in Frenet space using polynomial functions.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t1_s3_d1",
      "label": "Quintic Polynomials for Lateral Motion d(t)",
      "description": "Solving 5th-degree polynomials matching initial and target position, velocity, and acceleration boundary conditions.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t1_s3_d2",
      "label": "Quartic Polynomials for Longitudinal Velocity Profiles s(t)",
      "description": "Solving 4th-degree polynomials for cruise control velocity tracking.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t1_s4",
      "label": "Jerk Minimization Cost Function J = integral(ddx/dt^2 dt)",
      "description": "Minimizing time rate of change of acceleration (jerk) to maximize passenger comfort.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t1_s4_d1",
      "label": "Analytical Jerk Integral Computation",
      "description": "Evaluating integrated squared jerk costs directly from polynomial coefficients.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t1_s4_d2",
      "label": "Multi-Candidate Trajectory Scoring Matrix",
      "description": "Scoring candidate trajectories based on jerk, safety distance, speed, and lane alignment.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t1_s5",
      "label": "Frenet Frame Singularities at Extreme Curvatures",
      "description": "Handling mathematical breakdown of Frenet coordinates at sharp corners or loop-backs.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t1_s5_d1",
      "label": "1 - d * kappa(s) = 0 Singularity Threshold",
      "description": "Detecting coordinate breakdown when lateral offset equals radius of curvature.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t1_s5_d2",
      "label": "Fallback to Cartesian Local Frame Planners",
      "description": "Switching to local Cartesian coordinate frames for parking and tight U-turns.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t2",
      "label": "Search-Based Motion Planning (A* & Hybrid A*)",
      "description": "Graph search algorithms finding optimal collision-free paths over discrete state spaces.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t2_s1",
      "label": "A* Search Cost Function (f(n) = g(n) + h(n))",
      "description": "Heuristic graph search algorithm finding shortest paths from start to goal nodes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t2_s1_d1",
      "label": "Cost-So-Far g(n) Path Accumulation",
      "description": "Accumulating exact movement costs incurred from start node to current node n.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t2_s1_d2",
      "label": "Admissible Heuristic h(n) (Euclidean / Reeds-Shepp Distance)",
      "description": "Estimating remaining cost to goal without overestimating to guarantee optimal path discovery.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t2_s2",
      "label": "Hybrid A* Kinematically Feasible Search",
      "description": "Extending A* search to 3D continuous vehicle state space (x, y, heading_theta).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t2_s2_d1",
      "label": "Continuous State Motion Primitives",
      "description": "Expanding graph nodes using kinematically valid steering angle steps.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t2_s2_d2",
      "label": "Reed-Shepp & Dubins Curves Heuristic (h_nonholonomic)",
      "description": "Using exact car-like non-holonomic distance metrics as heuristic guidance.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t2_s3",
      "label": "Analytic Expansion Node Connections",
      "description": "Attempting direct analytic Reeds-Shepp path connections to the goal from expanding search nodes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t2_s3_d1",
      "label": "Accelerating Search Convergence Near Goal",
      "description": "Bypassing discrete graph expansion when obstacle-free analytic curves exist.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t2_s3_d2",
      "label": "Sub-Centimeter Parking Maneuver Accuracy",
      "description": "Finding precise multi-point turn paths into tight parking spaces.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t2_s4",
      "label": "Dynamic Obstacle Distance Map (EDT / Voronoi)",
      "description": "Pre-computing 2D Distance Transforms to penalize paths close to obstacles.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t2_s4_d1",
      "label": "Euclidean Distance Transform (EDT) Grids",
      "description": "Storing distance to nearest obstacle for every grid cell.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t2_s4_d2",
      "label": "Voronoi Potential Field Guidance",
      "description": "Guiding search paths along midpoints between obstacles to maximize clearance.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t2_s5",
      "label": "Path Smoothing & Conjugate Gradient Optimization",
      "description": "Post-processing piecewise Hybrid A* path nodes into smooth continuous trajectories.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t2_s5_d1",
      "label": "Multi-Objective Optimization (Smoothness + Clearance + Curvature)",
      "description": "Adjusting path node coordinates to minimize curvature and maximize clearance.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t2_s5_d2",
      "label": "Bounded Maximum Curvature (kappa <= kappa_max)",
      "description": "Guaranteeing output path curvature does not exceed vehicle steering limits.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t3",
      "label": "Sampling-Based Motion Planning (RRT* & Informed RRT*)",
      "description": "Randomized sampling algorithms exploring high-dimensional continuous configuration spaces.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t3_s1",
      "label": "Rapidly-Exploring Random Tree (RRT) Algorithm",
      "description": "Building space-filling trees by randomly sampling points in configuration space.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t3_s1_d1",
      "label": "Nearest Neighbor Tree Node Search",
      "description": "Finding closest existing tree node to newly sampled random point q_rand.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t3_s1_d2",
      "label": "Steer Step Function Extend Operation",
      "description": "Extending tree toward q_rand by maximum step size delta_q while checking collisions.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t3_s2",
      "label": "RRT* Asymptotic Optimality (ChooseParent & Rewire)",
      "description": "Modifying RRT to guarantee convergence to optimal path as sample count approaches infinity.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t3_s2_d1",
      "label": "ChooseParent Best Path Neighbor Selection",
      "description": "Connecting new nodes to neighboring nodes that yield minimum total cost g(n).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t3_s2_d2",
      "label": "Tree Rewiring Local Optimization",
      "description": "Re-routing surrounding neighbor nodes through new node if total cost is reduced.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t3_s3",
      "label": "Informed RRT* Hyper-Ellipsoid Sampling",
      "description": "Restricting random sampling strictly to hyper-ellipsoidal sub-spaces after finding initial solutions.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t3_s3_d1",
      "label": "Prolate Hyperspheroid Sampling Bounds",
      "description": "Bounding sampling space using current best solution cost c_best and focal distance c_min.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t3_s3_d2",
      "label": "Massive Search Convergence Acceleration",
      "description": "Accelerating path refinement speed by eliminating useless space sampling.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t3_s4",
      "label": "Kinodynamic RRT* (State-Space Forward Simulation)",
      "description": "Sampling control inputs u rather than configurations q to respect vehicle dynamics and momentum.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t3_s4_d1",
      "label": "Integrating Differential Equations of Motion",
      "description": "Forward-simulating vehicle dynamics over short time intervals dt.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t3_s4_d2",
      "label": "High-Speed Dynamic Obstacle Avoidance",
      "description": "Planning safe trajectories for high-speed dynamic environments.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t3_s5",
      "label": "Collision Checking Acceleration (BVH & Spatial Hashing)",
      "description": "Optimizing collision check speed for candidate trajectory segments against environmental maps.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t3_s5_d1",
      "label": "Bounding Volume Hierarchies (BVH)",
      "description": "Checking candidate line segments against coarse bounding boxes before detailed geometry checking.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t3_s5_d2",
      "label": "Sub-Microsecond Trajectory Collision Checks",
      "description": "Executing millions of trajectory checks per second on multi-core CPUs.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t4",
      "label": "Model Predictive Control (MPC) Trajectory Optimization",
      "description": "Formulating trajectory generation as online real-time constrained optimal control problems.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t4_s1",
      "label": "Receding Horizon Optimization Principle",
      "description": "Solving optimal control problems over time horizon N, executing first step u_0, and repeating at next time step.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t4_s1_d1",
      "label": "Prediction Horizon N (e.g. N = 20 Steps, dt = 0.1s)",
      "description": "Simulating vehicle behavior 2.0 seconds into the future.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t4_s1_d2",
      "label": "Feedback Robustness to Model Disturbances",
      "description": "Correcting for execution errors and external disturbances by re-optimizing at 20-50Hz rates.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t4_s2",
      "label": "Non-Linear Programming (NLP) Formulations (CasADi / OSQP)",
      "description": "Expressing trajectory optimization as non-linear cost minimization subject to equality and inequality constraints.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t4_s2_d1",
      "label": "Cost Function Design (Tracking Error + Control Effort + Jerk)",
      "description": "Penalizing deviation from reference paths, excessive steering, and acceleration rates.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t4_s2_d2",
      "label": "Hard State & Control Bounds (steering <= 35deg, acc <= 3m/s^2)",
      "description": "Enforcing physical actuator and comfort limits directly inside optimization formulations.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t4_s3",
      "label": "Obstacle Avoidance Constraints (Convex Feasible Sets)",
      "description": "Encoding collision avoidance as inequality constraints in optimization solvers.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t4_s3_d1",
      "label": "Dual Representation Linear Hyperplane Separation",
      "description": "Enforcing separating hyperplanes between vehicle bounding boxes and static obstacles.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t4_s3_d2",
      "label": "Sequential Quadratic Programming (SQP) Solvers",
      "description": "Linearizing non-linear constraints iteratively to solve quadratic sub-problems rapidly.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t4_s4",
      "label": "Dynamic Obstacle Trajectory Prediction Integration",
      "description": "Incorporating predicted future trajectories of surrounding vehicles into MPC constraint matrices.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t4_s4_d1",
      "label": "Time-Varying Avoidance Constraint Boxes",
      "description": "Shifting obstacle avoidance boundary boxes over time steps k = 1..N.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t4_s4_d2",
      "label": "Interactive Multi-Agent Game-Theoretic MPC",
      "description": "Modeling mutual yield behaviors between autonomous vehicles and human drivers.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t4_s5",
      "label": "Real-Time Hardware Solver Latency Limits (< 20ms)",
      "description": "Optimizing NLP solver execution times to guarantee deterministic control loop rates.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t4_s5_d1",
      "label": "Real-Time Iteration (RTI) Scheme (ACADO / ACADOS)",
      "description": "Executing single Gauss-Newton iteration passes per control step to guarantee sub-10ms solver times.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t4_s5_d2",
      "label": "Code Generation for Embedded C Solvers",
      "description": "Compiling optimized C code solvers tailored to specific MPC problem structures.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t5",
      "label": "Motion Planning & Trajectory Generation Topic 5",
      "description": "Detailed first-principles mechanics for Motion Planning & Trajectory Generation topic 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t5_s1",
      "label": "Motion Planning & Trajectory Generation Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Motion Planning & Trajectory Generation Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t5_s1_d1",
      "label": "Motion Planning & Trajectory Generation Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motion Planning & Trajectory Generation Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t5_s1_d2",
      "label": "Motion Planning & Trajectory Generation Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motion Planning & Trajectory Generation Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t5_s2",
      "label": "Motion Planning & Trajectory Generation Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Motion Planning & Trajectory Generation Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t5_s2_d1",
      "label": "Motion Planning & Trajectory Generation Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motion Planning & Trajectory Generation Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t5_s2_d2",
      "label": "Motion Planning & Trajectory Generation Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motion Planning & Trajectory Generation Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t5_s3",
      "label": "Motion Planning & Trajectory Generation Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Motion Planning & Trajectory Generation Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t5_s3_d1",
      "label": "Motion Planning & Trajectory Generation Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motion Planning & Trajectory Generation Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t5_s3_d2",
      "label": "Motion Planning & Trajectory Generation Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motion Planning & Trajectory Generation Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t5_s4",
      "label": "Motion Planning & Trajectory Generation Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Motion Planning & Trajectory Generation Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t5_s4_d1",
      "label": "Motion Planning & Trajectory Generation Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motion Planning & Trajectory Generation Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t5_s4_d2",
      "label": "Motion Planning & Trajectory Generation Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motion Planning & Trajectory Generation Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t5_s5",
      "label": "Motion Planning & Trajectory Generation Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Motion Planning & Trajectory Generation Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t5_s5_d1",
      "label": "Motion Planning & Trajectory Generation Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motion Planning & Trajectory Generation Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t5_s5_d2",
      "label": "Motion Planning & Trajectory Generation Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motion Planning & Trajectory Generation Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t6",
      "label": "Motion Planning & Trajectory Generation Topic 6",
      "description": "Detailed first-principles mechanics for Motion Planning & Trajectory Generation topic 6.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t6_s1",
      "label": "Motion Planning & Trajectory Generation Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Motion Planning & Trajectory Generation Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t6_s1_d1",
      "label": "Motion Planning & Trajectory Generation Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motion Planning & Trajectory Generation Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t6_s1_d2",
      "label": "Motion Planning & Trajectory Generation Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motion Planning & Trajectory Generation Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t6_s2",
      "label": "Motion Planning & Trajectory Generation Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Motion Planning & Trajectory Generation Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t6_s2_d1",
      "label": "Motion Planning & Trajectory Generation Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motion Planning & Trajectory Generation Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t6_s2_d2",
      "label": "Motion Planning & Trajectory Generation Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motion Planning & Trajectory Generation Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t6_s3",
      "label": "Motion Planning & Trajectory Generation Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Motion Planning & Trajectory Generation Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t6_s3_d1",
      "label": "Motion Planning & Trajectory Generation Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motion Planning & Trajectory Generation Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t6_s3_d2",
      "label": "Motion Planning & Trajectory Generation Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motion Planning & Trajectory Generation Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t6_s4",
      "label": "Motion Planning & Trajectory Generation Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Motion Planning & Trajectory Generation Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t6_s4_d1",
      "label": "Motion Planning & Trajectory Generation Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motion Planning & Trajectory Generation Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t6_s4_d2",
      "label": "Motion Planning & Trajectory Generation Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motion Planning & Trajectory Generation Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t6_s5",
      "label": "Motion Planning & Trajectory Generation Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Motion Planning & Trajectory Generation Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t6_s5_d1",
      "label": "Motion Planning & Trajectory Generation Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motion Planning & Trajectory Generation Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p5_t6_s5_d2",
      "label": "Motion Planning & Trajectory Generation Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Motion Planning & Trajectory Generation Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6",
      "label": "Control Systems & Vehicle Dynamics",
      "description": "Model Predictive Control (MPC), LQR optimal control, PID steering control, and 2-DOF Bicycle vehicle dynamics.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t1",
      "label": "2-DOF Kinematic & Dynamic Bicycle Vehicle Models",
      "description": "Mathematical simplification of 4-wheel vehicles into 2-wheel single-track models.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t1_s1",
      "label": "Kinematic Bicycle Model State Equations",
      "description": "State vector x = [x, y, phi, v] driven by acceleration a and steering angle delta.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t1_s1_d1",
      "label": "State Equations (x_dot = v*cos(phi), y_dot = v*sin(phi), phi_dot = v/L * tan(delta))",
      "description": "Low-speed non-linear kinematic motion model assuming zero tire slip.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t1_s1_d2",
      "label": "Center-of-Gravity (CoG) Slip Angle beta Correction",
      "description": "Adjusting velocity vector heading angle by CoG slip angle beta.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t1_s2",
      "label": "Dynamic Bicycle Model (Tire Lateral Force Integration)",
      "description": "Incorporating tire slip angles and cornering stiffness into state space models at high speeds.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t1_s2_d1",
      "label": "State Vector [y_err, e_phi, v_y, r]",
      "description": "Tracking lateral path error, heading error, lateral velocity, and yaw rate r.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t1_s2_d2",
      "label": "Linear Cornering Stiffness Coefficients (C_alpha_f, C_alpha_r)",
      "description": "Relating tire slip angles to lateral forces F_y = C_alpha * alpha.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t1_s3",
      "label": "State-Space Matrix Representation (x_dot = A*x + B*u)",
      "description": "Linearizing dynamic bicycle equations into continuous-time state-space system matrices.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t1_s3_d1",
      "label": "System Matrix A(v_x) Speed Dependence",
      "description": "Demonstrating how vehicle stability and response matrices shift with forward velocity v_x.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t1_s3_d2",
      "label": "Understeer Gradient (K_us) & Critical Speed",
      "description": "Evaluating understeer vs oversteer tendencies based on front/rear cornering stiffness ratios.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t1_s4",
      "label": "Discrete-Time State Space Discretization (Zero-Order Hold)",
      "description": "Converting continuous system matrices (A, B) into discrete-time matrices (A_d, B_d) for digital microcontrollers.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t1_s4_d1",
      "label": "Matrix Exponential Discretization A_d = exp(A * dt)",
      "description": "Exact zero-order hold state-space discretization for sample time dt.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t1_s4_d2",
      "label": "First-Order Taylor Approximation A_d approx I + A * dt",
      "description": "Approximating discrete matrices for fast embedded control updates.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t1_s5",
      "label": "High-Speed Vehicle Stability Limits (Rollover & Skidding)",
      "description": "Evaluating extreme dynamic handling boundaries.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t1_s5_d1",
      "label": "Electronic Stability Control (ESC) Interventions",
      "description": "Braking individual wheels selectively to correct pathological yaw rate deviations.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t1_s5_d2",
      "label": "Maximum Lateral Acceleration Limits (a_y <= mu * g)",
      "description": "Bounding lateral acceleration by road surface friction coefficient mu.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t2",
      "label": "LQR (Linear Quadratic Regulator) Optimal Control",
      "description": "Feedback control algorithm minimizing quadratic state errors and actuator control effort.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t2_s1",
      "label": "Infinite-Horizon LQR Cost Function J = integral(x^T*Q*x + u^T*R*u dt)",
      "description": "Optimizing performance metrics balancing state tracking error (Q) against control effort (R).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t2_s1_d1",
      "label": "State Penalty Matrix Q (Symmetric Positive Semi-Definite)",
      "description": "Weighting lateral error y_err and heading error e_phi penalties.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t2_s1_d2",
      "label": "Control Effort Matrix R (Symmetric Positive Definite)",
      "description": "Penalizing aggressive steering wheel adjustments to maintain stability.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t2_s2",
      "label": "Continuous-Time Algebraic Riccati Equation (CARE)",
      "description": "Solving A^T * P + P * A - P * B * R^{-1} * B^T * P + Q = 0 for unique matrix P.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t2_s2_d1",
      "label": "Optimal Cost-to-Go Matrix P Computation",
      "description": "Solving CARE offline to determine optimal state feedback gains.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t2_s2_d2",
      "label": "Optimal State Feedback Gain Vector K = R^{-1} * B^T * P",
      "description": "Computing linear state feedback control law u = -K * x.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t2_s3",
      "label": "Feedforward Steering Control Compensation (delta_ff)",
      "description": "Adding feedforward steering angles to compensate for road curvature kappa.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t2_s3_d1",
      "label": "Curvature Feedforward Formula delta_ff = L * kappa + K_us * v_x^2 * kappa",
      "description": "Pre-steering into curves based on vehicle understeer gradient K_us and speed v_x.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t2_s3_d2",
      "label": "Zero Steady-State Tracking Error Guarantee",
      "description": "Eliminating steady-state lateral tracking errors when traversing curved roads.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t2_s4",
      "label": "Discrete-Time LQR (DARE) Online Gain Lookup",
      "description": "Solving Discrete Algebraic Riccati Equations (DARE) across discrete speed tables.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t2_s4_d1",
      "label": "Speed-Indexed Gain Matrix Tables K(v_x)",
      "description": "Pre-computing optimal feedback gain vectors K across vehicle speed intervals (0 to 150 km/h).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t2_s4_d2",
      "label": "Sub-Microsecond Gain Interpolation",
      "description": "Interpolating feedback gains online in microsecond control loops.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t2_s5",
      "label": "LQR Robustness & Gain Margins (6dB Gain / 60deg Phase Margin)",
      "description": "Guaranteed stability margins of optimal LQR controllers.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t2_s5_d1",
      "label": "Kalman Gain Margin Guarantee",
      "description": "Proving that LQR control loops tolerate at least 6dB gain increases and 60-degree phase shifts.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t2_s5_d2",
      "label": "Robustness to Parameter Variations",
      "description": "Maintaining stability under mild tire stiffness or vehicle mass changes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t3",
      "label": "PID & Pure Pursuit Steering Controllers",
      "description": "Geometric and classical feedback controllers for path tracking.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t3_s1",
      "label": "Pure Pursuit Geometric Steering Model",
      "description": "Calculating steering angle to intersect a look-ahead target point on the reference path.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t3_s1_d1",
      "label": "Look-Ahead Distance L_d Sizing",
      "description": "Scaling look-ahead distance proportionally with vehicle speed (L_d = k * v).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t3_s1_d2",
      "label": "Curvature Steering Formula delta = arctan(2 * L * sin(alpha) / L_d)",
      "description": "Computing steering angle delta based on angle alpha to look-ahead target.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t3_s2",
      "label": "Stanley Steering Controller (Front Axle Feedback)",
      "description": "DARPA Grand Challenge winning controller using front-axle cross-track error.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t3_s2_d1",
      "label": "Cross-Track Error Term delta_e = arctan(k * e / v_x)",
      "description": "Adjusting steering proportional to lateral error e and inversely proportional to speed.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t3_s2_d2",
      "label": "Heading Error Term delta_heading = e_phi",
      "description": "Aligning front wheels directly with path orientation.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t3_s3",
      "label": "Classical PID Control Architecture (u(t) = K_p*e + K_i*int(e) + K_d*de/dt)",
      "description": "Proportional, Integral, and Derivative term tuning for steering and speed control.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t3_s3_d1",
      "label": "Proportional Term K_p Immediate Response",
      "description": "Driving corrective force proportional to current tracking error.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t3_s3_d2",
      "label": "Integral Term K_i Steady-State Error Elimination",
      "description": "Accumulating historical error to eliminate steady-state biases (e.g. road slope).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t3_s3_d3",
      "label": "Derivative Term K_d Damping",
      "description": "Predicting future error trend to damp oscillations and overshoot.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t3_s4",
      "label": "Integral Windup Prevention & Anti-Windup Reset",
      "description": "Preventing integral term saturation during actuator saturation conditions.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t3_s4_d1",
      "label": "Clamping Integral Accumulator Bounds",
      "description": "Restricting integral sum bounds when actuators hit physical limits.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t3_s4_d2",
      "label": "Back-Calculation Anti-Windup Schemes",
      "description": "Disabling integration while steering actuators remain at physical stops.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t3_s5",
      "label": "Controller Performance Comparison (Pure Pursuit vs Stanley vs LQR vs MPC)",
      "description": "Evaluating trade-offs between geometric, classical, and optimal model-based controllers.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t3_s5_d1",
      "label": "Pure Pursuit / Stanley (Low Compute, Poor High-Speed Dynamic Tracking)",
      "description": "Selecting geometric controllers for low-speed urban shuttle applications.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t3_s5_d2",
      "label": "MPC (High Compute, Optimal Multi-Constraint Dynamic Tracking)",
      "description": "Selecting MPC for high-speed highway autonomous driving.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t4",
      "label": "Actuator Dynamics & Low-Level Drive-by-Wire Control",
      "description": "Interfacing control algorithms with physical steering, braking, and throttle actuators.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t4_s1",
      "label": "Drive-by-Wire (DbW) CAN Bus Interface",
      "description": "Sending electronic control commands to vehicle Electronic Control Units (ECUs).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t4_s1_d1",
      "label": "Steering Torque vs Angle Control Modes",
      "description": "Commanding target steering wheel angles vs applying auxiliary steering torques.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t4_s1_d2",
      "label": "Electronic Brake Booster (iBooster) Deceleration Control",
      "description": "Commanding target deceleration values (m/s^2) over CAN bus interfaces.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t4_s2",
      "label": "Actuator Time Delays & First-Order Lag Models (tau_act)",
      "description": "Modeling physical response delays of mechanical actuators.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t4_s2_d1",
      "label": "First-Order Transfer Function H(s) = 1 / (tau_act * s + 1)",
      "description": "Modeling hydraulic and electric motor response lags (typically 50-100ms).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t4_s2_d2",
      "label": "Predictive Control Delay Compensation",
      "description": "Predicting actuator state forward in time to offset physical execution lags.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t4_s3",
      "label": "Steering Slew Rate Limiting (d(delta)/dt <= Slew_Max)",
      "description": "Bounding rate of change of steering angles to protect electric power steering motors.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t4_s3_d1",
      "label": "Motor Thermal & Current Protection Limits",
      "description": "Preventing excessive current draw by capping steering angular velocity.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t4_s3_d2",
      "label": "Passenger Comfort Slew Rate Constraints",
      "description": "Smoothing sharp steering adjustments to deliver comfortable rides.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t4_s4",
      "label": "Regenerative vs Friction Brake Blending",
      "description": "Blending electric motor regenerative braking with hydraulic friction brakes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t4_s4_d1",
      "label": "Coordinated Deceleration Distribution",
      "description": "Maximizing energy recovery via electric motors before applying friction pads.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t4_s4_d2",
      "label": "Seamless Pedal Feel & Deceleration Continuity",
      "description": "Maintaining smooth linear deceleration during transition between brake modes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t4_s5",
      "label": "Safety Heartbeat & Watchdog Timeout Disconnects",
      "description": "Hardware safety mechanisms disengaging autonomous control during computer faults.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t4_s5_d1",
      "label": "100Hz Hardware Watchdog Ping Requirements",
      "description": "Disengaging DbW control if autonomy computer fails to send pings within 20ms.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t4_s5_d2",
      "label": "Driver Override Intervention Detection",
      "description": "Handing control back to human drivers instantly when steering wheel torque or brake pressure is detected.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t5",
      "label": "Control Systems & Vehicle Dynamics Topic 5",
      "description": "Detailed first-principles mechanics for Control Systems & Vehicle Dynamics topic 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t5_s1",
      "label": "Control Systems & Vehicle Dynamics Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Control Systems & Vehicle Dynamics Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t5_s1_d1",
      "label": "Control Systems & Vehicle Dynamics Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Control Systems & Vehicle Dynamics Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t5_s1_d2",
      "label": "Control Systems & Vehicle Dynamics Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Control Systems & Vehicle Dynamics Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t5_s2",
      "label": "Control Systems & Vehicle Dynamics Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Control Systems & Vehicle Dynamics Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t5_s2_d1",
      "label": "Control Systems & Vehicle Dynamics Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Control Systems & Vehicle Dynamics Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t5_s2_d2",
      "label": "Control Systems & Vehicle Dynamics Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Control Systems & Vehicle Dynamics Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t5_s3",
      "label": "Control Systems & Vehicle Dynamics Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Control Systems & Vehicle Dynamics Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t5_s3_d1",
      "label": "Control Systems & Vehicle Dynamics Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Control Systems & Vehicle Dynamics Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t5_s3_d2",
      "label": "Control Systems & Vehicle Dynamics Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Control Systems & Vehicle Dynamics Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t5_s4",
      "label": "Control Systems & Vehicle Dynamics Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Control Systems & Vehicle Dynamics Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t5_s4_d1",
      "label": "Control Systems & Vehicle Dynamics Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Control Systems & Vehicle Dynamics Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t5_s4_d2",
      "label": "Control Systems & Vehicle Dynamics Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Control Systems & Vehicle Dynamics Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t5_s5",
      "label": "Control Systems & Vehicle Dynamics Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Control Systems & Vehicle Dynamics Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t5_s5_d1",
      "label": "Control Systems & Vehicle Dynamics Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Control Systems & Vehicle Dynamics Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t5_s5_d2",
      "label": "Control Systems & Vehicle Dynamics Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Control Systems & Vehicle Dynamics Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t6",
      "label": "Control Systems & Vehicle Dynamics Topic 6",
      "description": "Detailed first-principles mechanics for Control Systems & Vehicle Dynamics topic 6.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t6_s1",
      "label": "Control Systems & Vehicle Dynamics Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Control Systems & Vehicle Dynamics Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t6_s1_d1",
      "label": "Control Systems & Vehicle Dynamics Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Control Systems & Vehicle Dynamics Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t6_s1_d2",
      "label": "Control Systems & Vehicle Dynamics Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Control Systems & Vehicle Dynamics Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t6_s2",
      "label": "Control Systems & Vehicle Dynamics Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Control Systems & Vehicle Dynamics Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t6_s2_d1",
      "label": "Control Systems & Vehicle Dynamics Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Control Systems & Vehicle Dynamics Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t6_s2_d2",
      "label": "Control Systems & Vehicle Dynamics Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Control Systems & Vehicle Dynamics Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t6_s3",
      "label": "Control Systems & Vehicle Dynamics Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Control Systems & Vehicle Dynamics Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t6_s3_d1",
      "label": "Control Systems & Vehicle Dynamics Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Control Systems & Vehicle Dynamics Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t6_s3_d2",
      "label": "Control Systems & Vehicle Dynamics Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Control Systems & Vehicle Dynamics Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t6_s4",
      "label": "Control Systems & Vehicle Dynamics Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Control Systems & Vehicle Dynamics Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t6_s4_d1",
      "label": "Control Systems & Vehicle Dynamics Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Control Systems & Vehicle Dynamics Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t6_s4_d2",
      "label": "Control Systems & Vehicle Dynamics Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Control Systems & Vehicle Dynamics Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t6_s5",
      "label": "Control Systems & Vehicle Dynamics Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Control Systems & Vehicle Dynamics Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t6_s5_d1",
      "label": "Control Systems & Vehicle Dynamics Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Control Systems & Vehicle Dynamics Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p6_t6_s5_d2",
      "label": "Control Systems & Vehicle Dynamics Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Control Systems & Vehicle Dynamics Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7",
      "label": "Autonomous Vehicle Software Architecture (ROS 2)",
      "description": "ROS 2 rclcpp node execution, DDS middleware Quality of Service (QoS), Zero-copy IPC, and AUTOSAR Adaptive.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t1",
      "label": "ROS 2 Architecture & Node Execution Model",
      "description": "Next-generation robotics middleware supporting real-time deterministic execution.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t1_s1",
      "label": "Client Library Layer (rclcpp / rclpy)",
      "description": "Language-specific C++ and Python APIs built on top of shared C-based rcl core library.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t1_s1_d1",
      "label": "C-Core rcl Uniformity Guarantee",
      "description": "Ensuring identical underlying behavior across C++ and Python ROS 2 nodes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t1_s1_d2",
      "label": "Modern C++17 Memory Management",
      "description": "Utilizing std::shared_ptr and std::unique_ptr for node message lifecycle management.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t1_s2",
      "label": "Executor Architecture (SingleThreaded vs MultiThreaded)",
      "description": "Managing execution of node callbacks (timers, subscriptions, service calls).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t1_s2_d1",
      "label": "MultiThreadedExecutor Thread Pool Allocation",
      "description": "Executing non-blocking node callbacks in parallel across CPU thread pools.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t1_s2_d2",
      "label": "Static Single-Threaded Deterministic Executors",
      "description": "Guaranteeing deterministic execution order for real-time safety critical nodes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t1_s3",
      "label": "Callback Groups & Thread Isolation (MutuallyExclusive vs Reentrant)",
      "description": "Controlling concurrent execution of specific callbacks within single nodes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t1_s3_d1",
      "label": "MutuallyExclusiveCallbackGroup Isolation",
      "description": "Preventing concurrent execution of callbacks within identical groups to avoid race conditions.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t1_s3_d2",
      "label": "ReentrantCallbackGroup Parallel Execution",
      "description": "Allowing parallel execution of callbacks across multiple threads.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t1_s4",
      "label": "ROS 2 Parameter Server & Dynamic Reconfigure",
      "description": "Managing runtime configuration parameters across distributed node networks.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t1_s4_d1",
      "label": "Type-Safe Parameter Registration API",
      "description": "Declaring node parameters with strong types and range validation constraints.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t1_s4_d2",
      "label": "Asynchronous Parameter Event Callbacks",
      "description": "Updating internal node variables dynamically upon parameter change notifications without restarting nodes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t1_s5",
      "label": "Lifecycle Nodes (Managed Node State Machine)",
      "description": "Deterministic node lifecycle state transitions (Unconfigured, Inactive, Active, Finalized).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t1_s5_d1",
      "label": "Managed State Machine Transitions",
      "description": "Controlling node initialization, activation, and deactivation explicitly.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t1_s5_d2",
      "label": "Controlled Startup Sequences",
      "description": "Ensuring all perception and localization nodes are active before starting motion control nodes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t2",
      "label": "DDS Middleware & Quality of Service (QoS)",
      "description": "Data Distribution Service (DDS) communication standard underpinning ROS 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t2_s1",
      "label": "DDS Provider Vendor Implementations (CycloneDDS / FastDDS)",
      "description": "Pluggable DDS implementations managing network discovery and serialization.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t2_s1_d1",
      "label": "rmw (ROS Middleware Interface) Abstraction Layer",
      "description": "Swapping DDS vendors without modifying application node C++ code.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t2_s1_d2",
      "label": "UDP Multicast Dynamic Node Discovery",
      "description": "Discovering active nodes automatically on local networks without central master servers.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t2_s2",
      "label": "QoS Reliability Policies (Reliable vs Best Effort)",
      "description": "Configuring network delivery guarantees per topic connection.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t2_s2_d1",
      "label": "Best Effort QoS (UDP Un-reliable Delivery)",
      "description": "Publishing high-rate sensor streams (LiDAR, Camera) where occasional dropped frames are acceptable.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t2_s2_d2",
      "label": "Reliable QoS (TCP-like Retransmission)",
      "description": "Guaranteeing delivery of critical control commands and state transitions.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t2_s3",
      "label": "QoS Durability Policies (Transient Local vs Volatile)",
      "description": "Configuring historical message persistence for late-joining subscriber nodes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t2_s3_d1",
      "label": "Transient Local Durability (Late-Joiner Cache)",
      "description": "Persisting last-published messages to deliver immediately to new subscribers (e.g. Map data).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t2_s3_d2",
      "label": "Volatile Durability",
      "description": "Discarding historical messages, delivering only newly published samples.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t2_s4",
      "label": "QoS History & Depth Policies (Keep Last vs Keep All)",
      "description": "Managing topic message queue buffer sizes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t2_s4_d1",
      "label": "Keep Last Depth N Queue Buffering",
      "description": "Retaining at most N recent messages in queue buffers (e.g. Depth = 1 for real-time images).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t2_s4_d2",
      "label": "Queue Overflow Memory Protection",
      "description": "Preventing memory exhaustion during subscriber processing delays.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t2_s5",
      "label": "QoS Incompatibility Mismatch Handling",
      "description": "Silent communication failures occurring when publisher and subscriber QoS profiles conflict.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t2_s5_d1",
      "label": "Compatibility Rule Matrix (Publisher Reliability >= Subscriber)",
      "description": "Failing connection if subscriber demands Reliable while publisher is Best Effort.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t2_s5_d2",
      "label": "Incompatible QoS Event Callbacks",
      "description": "Alerting node developers when QoS mismatches prevent topic connections.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t3",
      "label": "Zero-Copy Inter-Process Communication (iceoryx / Shared Memory)",
      "description": "Bypassing network serialization for high-bandwidth data transfers on single hosts.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t3_s1",
      "label": "Shared Memory Transport Mechanism (iceoryx Integration)",
      "description": "Passing pointer references to shared POSIX memory segments between local process nodes.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t3_s1_d1",
      "label": "Zero Network Copy Execution",
      "description": "Eliminating CPU memory copy operations for multi-megabyte 4K camera and point cloud buffers.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t3_s1_d2",
      "label": "Sub-Microsecond IPC Message Latencies",
      "description": "Transferring data between processes in under 1 microsecond regardless of payload size.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t3_s2",
      "label": "Loaned Message API (borrow_loaned_message())",
      "description": "Allocating publisher messages directly inside shared memory segments.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t3_s2_d1",
      "label": "Direct Shared Memory Buffer Writing",
      "description": "Writing sensor data directly into shared memory without intermediate application buffers.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t3_s2_d2",
      "label": "Publishing Shared Memory Pointers",
      "description": "Releasing message ownership to shared memory management daemons upon publication.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t3_s3",
      "label": "Shared Memory Subscriber Access (Read-Only Locks)",
      "description": "Granting subscribers direct read-only access to shared memory segments.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t3_s3_d1",
      "label": "Zero-Copy Subscriber Pointer Dereferencing",
      "description": "Accessing sensor data directly in shared memory without memory allocation.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t3_s3_d2",
      "label": "Reference-Counted Memory Segment Release",
      "description": "Reclaiming shared memory blocks automatically once all subscribers finish processing.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t3_s4",
      "label": "Memory Constrained Embedded Node Execution",
      "description": "Reducing CPU utilization and memory bus traffic in embedded ECU architectures.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t3_s4_d1",
      "label": "70% Reduction in System CPU Utilization",
      "description": "Frees up CPU cores for deep learning perception workloads.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t3_s4_d2",
      "label": "Lower Thermal Dissipation in Sealed ECUs",
      "description": "Reducing power consumption and heat generation in vehicle compute hardware.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t3_s5",
      "label": "Safety Compliance of Shared Memory IPC",
      "description": "Ensuring shared memory implementations comply with automotive safety standards.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t3_s5_d1",
      "label": "ISO 26262 ASIL-B Certified iceoryx Middleware",
      "description": "Utilizing safety-certified shared memory IPC libraries in production vehicle software.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t3_s5_d2",
      "label": "Isolated Memory Protection Regions",
      "description": "Preventing corrupted processes from overwriting adjacent shared memory segments.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t4",
      "label": "AUTOSAR Adaptive Platform & Automotive ECUs",
      "description": "Standardized automotive software architecture for high-performance domain controllers.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t4_s1",
      "label": "Classic AUTOSAR vs Adaptive AUTOSAR Architecture",
      "description": "Comparing static micro-controller AUTOSAR against dynamic POSIX-based Adaptive AUTOSAR.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t4_s1_d1",
      "label": "Classic AUTOSAR (Static Real-Time ECUs)",
      "description": "Managing low-level micro-controllers with hard real-time execution bounds.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t4_s1_d2",
      "label": "Adaptive AUTOSAR (Dynamic High-Performance Domain Controllers)",
      "description": "Running C++14 applications on Linux/QNX POSIX operating systems.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t4_s2",
      "label": "Service-Oriented Architecture (SOME/IP Protocol)",
      "description": "Scalable service-Oriented Middleware over IP for automotive Ethernet backbones.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t4_s2_d1",
      "label": "SOME/IP RPC and Event Service Publishing",
      "description": "Serializing service requests and events over UDP/TCP automotive Ethernet.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t4_s2_d2",
      "label": "Service Discovery (SOME/IP-SD) Protocol",
      "description": "Dynamic discovery of automotive services across vehicle network ECUs.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t4_s3",
      "label": "Execution Management & Manifest Configuration",
      "description": "Managing application lifecycle, startup dependencies, and resource allocations in Adaptive AUTOSAR.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t4_s3_d1",
      "label": "Execution Manifest Machine Configurations",
      "description": "Defining process startup orders, CPU core affinities, and scheduling priorities.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t4_s3_d2",
      "label": "Deterministic Application State Transitions",
      "description": "Managing transitions between vehicle operational modes (Off, Driving, Charging).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t4_s4",
      "label": "Persistency Functional Cluster (Plausibility & Key-Value Storage)",
      "description": "Standardized persistent storage APIs for automotive applications.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t4_s4_d1",
      "label": "Key-Value & File Storage Interfaces",
      "description": "Persisting calibration data and diagnostic logs across vehicle ignition cycles.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t4_s4_d2",
      "label": "Cryptographic Storage Integrity Checks",
      "description": "Detecting data corruption using embedded cryptographic checksums.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t4_s5",
      "label": "Bridge Architecture: ROS 2 to AUTOSAR Integration",
      "description": "Bridging ROS 2 development nodes to production AUTOSAR Adaptive ECUs.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t4_s5_d1",
      "label": "DDS to SOME/IP Protocol Gateway Translators",
      "description": "Translating ROS 2 DDS messages into SOME/IP format for production ECUs.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t4_s5_d2",
      "label": "Accelerating Autonomous Prototyping to Production Pipelines",
      "description": "Deploying ROS 2 algorithms to AUTOSAR-compliant vehicle domain controllers.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t5",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 5",
      "description": "Detailed first-principles mechanics for Autonomous Vehicle Software Architecture (ROS 2) topic 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t5_s1",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Autonomous Vehicle Software Architecture (ROS 2) Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t5_s1_d1",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t5_s1_d2",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t5_s2",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Autonomous Vehicle Software Architecture (ROS 2) Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t5_s2_d1",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t5_s2_d2",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t5_s3",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Autonomous Vehicle Software Architecture (ROS 2) Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t5_s3_d1",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t5_s3_d2",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t5_s4",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Autonomous Vehicle Software Architecture (ROS 2) Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t5_s4_d1",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t5_s4_d2",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t5_s5",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Autonomous Vehicle Software Architecture (ROS 2) Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t5_s5_d1",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t5_s5_d2",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Autonomous Vehicle Software Architecture (ROS 2) Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t6",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 6",
      "description": "Detailed first-principles mechanics for Autonomous Vehicle Software Architecture (ROS 2) topic 6.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t6_s1",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Autonomous Vehicle Software Architecture (ROS 2) Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t6_s1_d1",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t6_s1_d2",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t6_s2",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Autonomous Vehicle Software Architecture (ROS 2) Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t6_s2_d1",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t6_s2_d2",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t6_s3",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Autonomous Vehicle Software Architecture (ROS 2) Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t6_s3_d1",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t6_s3_d2",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t6_s4",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Autonomous Vehicle Software Architecture (ROS 2) Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t6_s4_d1",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t6_s4_d2",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t6_s5",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Autonomous Vehicle Software Architecture (ROS 2) Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t6_s5_d1",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p7_t6_s5_d2",
      "label": "Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Autonomous Vehicle Software Architecture (ROS 2) Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8",
      "label": "Safety, Validation & Simulation",
      "description": "ISO 26262 ASIL-D functional safety, SOTIF ISO 21448, CARLA/Gazebo simulation, and Hardware-in-the-Loop (HIL) testing.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t1",
      "label": "ISO 26262 Automotive Functional Safety Standard",
      "description": "International safety standard for electrical and electronic systems in production automobiles.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t1_s1",
      "label": "Hazard Analysis and Risk Assessment (HARA)",
      "description": "Systematic identification of potential hazardous operational events.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t1_s1_d1",
      "label": "Severity (S0-S3), Exposure (E0-E4), Controllability (C0-C3) Ratings",
      "description": "Evaluating hazardous events across impact, frequency, and driver controllability.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t1_s1_d2",
      "label": "ASIL Determination Matrix (QM, ASIL-A, B, C, D)",
      "description": "Assigning Automotive Safety Integrity Levels based on combined risk scores.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t1_s2",
      "label": "ASIL-D Highest Integrity Level Requirements",
      "description": "Strictest development processes applied to safety-critical systems (steering, braking).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t1_s2_d1",
      "label": "Single-Point Fault Metric (SPFM > 99%)",
      "description": "Requiring 99%+ detection and coverage of single hardware failures.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t1_s2_d2",
      "label": "Latent Fault Metric (LFM > 90%)",
      "description": "Detecting hidden multi-point hardware faults during system startup sweeps.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t1_s3",
      "label": "Hardware & Software Fault Mitigation Mechanisms",
      "description": "Architectural patterns for detecting and handling hardware and software failures.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t1_s3_d1",
      "label": "Lockstep CPU Core Execution",
      "description": "Running identical code instructions on dual CPU cores in parallel, comparing outputs every clock cycle.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t1_s3_d2",
      "label": "Memory ECC (Error-Correcting Code) Protection",
      "description": "Detecting and correcting single-bit RAM corruptions automatically.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t1_s4",
      "label": "V-Model Development & Verification Traceability",
      "description": "Enforcing bidirectional traceability from requirements to test verification.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t1_s4_d1",
      "label": "Bidirectional Requirements Traceability Matrix",
      "description": "Mapping every safety requirement directly to design specs and test cases.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t1_s4_d2",
      "label": "Static Code Analysis & MISRA C/C++ Compliance",
      "description": "Enforcing strict MISRA rules to prevent undefined behavior in C/C++ codebases.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t1_s5",
      "label": "Safety Element out of Context (SEooC)",
      "description": "Developing reusable safety components (OS, middleware) independently of specific vehicle integration contexts.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t1_s5_d1",
      "label": "Assumed Safety Requirements Specifications",
      "description": "Documenting assumed operational environments and interfaces for third-party libraries.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t1_s5_d2",
      "label": "Safety Manual Integration Instructions",
      "description": "Providing integration guidelines for incorporating SEooC modules into vehicle ECUs.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t2",
      "label": "SOTIF (Safety of the Intended Functionality - ISO 21448)",
      "description": "Safety standard addressing hazards caused by performance limitations or unexpected environmental conditions without system faults.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t2_s1",
      "label": "SOTIF vs ISO 26262 Fundamental Difference",
      "description": "Distinguishing functional safety (hardware/software faults) from SOTIF (perception/algorithm limitations).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t2_s1_d1",
      "label": "ISO 26262 Focus (System Component Failures)",
      "description": "Handling system failures such as broken wires, memory corruption, or software bugs.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t2_s1_d2",
      "label": "ISO 21448 SOTIF Focus (Functional Limitations)",
      "description": "Handling scenarios where fully functional sensors fail (e.g. camera blinded by sun glare, radar multipath reflections).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t2_s2",
      "label": "4 Scenario Quadrants (Known/Unknown x Safe/Unsafe)",
      "description": "Classifying operational driving scenarios to systematically discover hidden risks.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t2_s2_d1",
      "label": "Area 1 (Known Safe) & Area 2 (Known Unsafe)",
      "description": "Validating known scenarios and engineering explicit safety mitigations for known risks.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t2_s2_d2",
      "label": "Area 3 (Unknown Unsafe Target Reduction)",
      "description": "Systematically discovering and shrinking unknown unsafe driving scenarios.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t2_s3",
      "label": "Triggering Event Identification & Edge Cases",
      "description": "Cataloging environmental conditions that degrade perception or decision-making algorithms.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t2_s3_d1",
      "label": "Adverse Weather Triggering Events (Heavy Fog, Water Spray)",
      "description": "Identifying weather conditions that degrade LiDAR and camera ranges.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t2_s3_d2",
      "label": "Un-Usual Road Objects & Edge Case Pedestrians",
      "description": "Testing perception systems against novel objects (costumes, horizontal ladders).",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t2_s4",
      "label": "SOTIF Risk Reduction & System Adaptation",
      "description": "Engineering architectural safeguards to reduce SOTIF risks.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t2_s4_d1",
      "label": "Multi-Sensor Cross-Validation Degradation Warnings",
      "description": "Degrading system functionality if camera and RADAR perception outputs disagree.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t2_s4_d2",
      "label": "Operational Design Domain (ODD) Restriction",
      "description": "Restricting autonomous engagement when environmental parameters exceed validated bounds.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t2_s5",
      "label": "Scenario-Based Testing & Validation Quantification",
      "description": "Proving statistical safety over millions of simulated and real-world miles.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t2_s5_d1",
      "label": "Miles-to-Disruption Statistical Bounds",
      "description": "Demonstrating autonomous vehicles outperform human drivers with statistical confidence.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t2_s5_d2",
      "label": "Corner-Case Scenario Catalog Mining",
      "description": "Extracting challenging driving events from fleet telemetry to build test suites.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t3",
      "label": "Photorealistic Simulation & Synthetic Sensor Data (CARLA)",
      "description": "Simulating autonomous vehicle sensor inputs and physics environments for scalable testing.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t3_s1",
      "label": "Unreal Engine / Unity Physics & Graphics Backends",
      "description": "Utilizing modern game engines for real-time photorealistic sensor simulation.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t3_s1_d1",
      "label": "PhysX / Chaos Rigid Body Dynamics",
      "description": "Simulating vehicle tire friction, suspension, and obstacle collision dynamics.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t3_s1_d2",
      "label": "Ray-Tracing Optical Sensor Simulation",
      "description": "Rendering realistic camera reflection, lens flare, and multi-bounce LiDAR light rays.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t3_s2",
      "label": "Physics-Based Sensor Models (Camera, LiDAR, RADAR)",
      "description": "Generating synthetic raw sensor data streams matching physical hardware outputs.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t3_s2_d1",
      "label": "LiDAR Ray-Casting & Material Reflectivity",
      "description": "Simulating point clouds incorporating surface incidence angles and material absorption.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t3_s2_d2",
      "label": "Camera Motion Blur & High Dynamic Range (HDR)",
      "description": "Synthesizing raw image sensor exposures matching physical automotive camera sensors.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t3_s3",
      "label": "OpenDRIVE & OpenSCENARIO Standard Integration",
      "description": "Standardized formats for importing road networks and dynamic traffic scenarios.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t3_s3_d1",
      "label": "ASAM OpenDRIVE Road Topology (.xodr)",
      "description": "Encoding lane geometries, junctions, signals, and road elevation profiles.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t3_s3_d2",
      "label": "ASAM OpenSCENARIO Traffic Behaviors (.xosc)",
      "description": "Scripting dynamic multi-vehicle traffic interactions and emergency maneuvers.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t3_s4",
      "label": "Domain Randomization & Generative Data Augmentation",
      "description": "Varying visual lighting, weather, and texture parameters in simulation to prevent neural network overfitting.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t3_s4_d1",
      "label": "Randomized Lighting, Textures, and Weather Variations",
      "description": "Exposing perception models to diverse synthetic conditions during training.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t3_s4_d2",
      "label": "Closing the Sim-to-Real Domain Gap",
      "description": "Ensuring models trained on synthetic data perform accurately on real-world roads.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t3_s5",
      "label": "Massive Cloud Scale Parallel Simulation Runs",
      "description": "Executing millions of virtual test miles daily across cloud Kubernetes clusters.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t3_s5_d1",
      "label": "Headless Parallel Container Simulation Sweeps",
      "description": "Running thousands of scenario permutations in parallel on cloud GPUs.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t3_s5_d2",
      "label": "Automated Regression Testing on PR Submissions",
      "description": "Evaluating software PRs against standard simulation benchmarks before merging.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t4",
      "label": "Hardware-in-the-Loop (HIL) & Vehicle Testing",
      "description": "Testing real automotive hardware ECUs by injecting simulated sensor signals in real time.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t4_s1",
      "label": "HIL Bench Simulator Architecture",
      "description": "Connecting production ECU hardware directly to real-time simulation hardware.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t4_s1_d1",
      "label": "Real-Time Simulator I/O Cards (dSPACE / National Instruments)",
      "description": "Generating hardware electrical signals at strict sub-millisecond execution rates.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t4_s1_d2",
      "label": "Physical Actuator Load Simulators",
      "description": "Applying physical loads to steering and brake actuators to simulate road resistance.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t4_s2",
      "label": "Raw Sensor Signal Injection (FPD-Link / GMSL Video Injection)",
      "description": "Injecting synthetic camera video streams directly into production ECU image processing inputs.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t4_s2_d1",
      "label": "GMSL2 / FPD-Link III Serializer Frame Injection",
      "description": "Bypassing physical camera sensors to feed raw digital video frames to autonomy chips.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t4_s2_d2",
      "label": "Deterministic Bit-Exact Reproducibility",
      "description": "Replaying recorded or simulated sensor data to reproduce software bugs deterministically.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t4_s3",
      "label": "Fault Injection Testing (Electrical & Bus Failures)",
      "description": "Intentionally inducing hardware faults to test ECU safety recovery mechanisms.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t4_s3_d1",
      "label": "Short-to-Ground & Short-to-Battery Fault Injection",
      "description": "Simulating wiring harness damage on sensor and actuator lines.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t4_s3_d2",
      "label": "CAN/Ethernet Bus Packet Corruption & Dropping",
      "description": "Verifying ECU resilience against network noise and corrupted messages.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t4_s4",
      "label": "Vehicle-in-the-Loop (VIL) & Proving Ground Testing",
      "description": "Testing physical production vehicles on private proving grounds with virtual obstacles.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t4_s4_d1",
      "label": "Proving Ground Test Tracks (Soft Target Dummies)",
      "description": "Testing emergency braking against inflatable car and pedestrian targets.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t4_s4_d2",
      "label": "Mixed-Reality Virtual Obstacle Injection",
      "description": "Injecting virtual dynamic traffic into real vehicle perception stacks on open test tracks.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t4_s5",
      "label": "Shadow Mode & Fleet Data Disconnection Auditing",
      "description": "Running candidate software versions in shadow mode across customer vehicle fleets.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t4_s5_d1",
      "label": "On-Vehicle Prediction Discrepancy Triggers",
      "description": "Logging data automatically when shadow model predictions diverge from active driver actions.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t4_s5_d2",
      "label": "Targeted Fleet Data Collection Loops",
      "description": "Uploading real-world edge cases to cloud servers to continuously train perception networks.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t5",
      "label": "Safety, Validation & Simulation Topic 5",
      "description": "Detailed first-principles mechanics for Safety, Validation & Simulation topic 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t5_s1",
      "label": "Safety, Validation & Simulation Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Safety, Validation & Simulation Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t5_s1_d1",
      "label": "Safety, Validation & Simulation Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Safety, Validation & Simulation Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t5_s1_d2",
      "label": "Safety, Validation & Simulation Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Safety, Validation & Simulation Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t5_s2",
      "label": "Safety, Validation & Simulation Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Safety, Validation & Simulation Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t5_s2_d1",
      "label": "Safety, Validation & Simulation Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Safety, Validation & Simulation Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t5_s2_d2",
      "label": "Safety, Validation & Simulation Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Safety, Validation & Simulation Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t5_s3",
      "label": "Safety, Validation & Simulation Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Safety, Validation & Simulation Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t5_s3_d1",
      "label": "Safety, Validation & Simulation Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Safety, Validation & Simulation Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t5_s3_d2",
      "label": "Safety, Validation & Simulation Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Safety, Validation & Simulation Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t5_s4",
      "label": "Safety, Validation & Simulation Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Safety, Validation & Simulation Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t5_s4_d1",
      "label": "Safety, Validation & Simulation Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Safety, Validation & Simulation Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t5_s4_d2",
      "label": "Safety, Validation & Simulation Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Safety, Validation & Simulation Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t5_s5",
      "label": "Safety, Validation & Simulation Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Safety, Validation & Simulation Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t5_s5_d1",
      "label": "Safety, Validation & Simulation Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Safety, Validation & Simulation Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t5_s5_d2",
      "label": "Safety, Validation & Simulation Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Safety, Validation & Simulation Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t6",
      "label": "Safety, Validation & Simulation Topic 6",
      "description": "Detailed first-principles mechanics for Safety, Validation & Simulation topic 6.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t6_s1",
      "label": "Safety, Validation & Simulation Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Safety, Validation & Simulation Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t6_s1_d1",
      "label": "Safety, Validation & Simulation Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Safety, Validation & Simulation Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t6_s1_d2",
      "label": "Safety, Validation & Simulation Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Safety, Validation & Simulation Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t6_s2",
      "label": "Safety, Validation & Simulation Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Safety, Validation & Simulation Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t6_s2_d1",
      "label": "Safety, Validation & Simulation Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Safety, Validation & Simulation Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t6_s2_d2",
      "label": "Safety, Validation & Simulation Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Safety, Validation & Simulation Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t6_s3",
      "label": "Safety, Validation & Simulation Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Safety, Validation & Simulation Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t6_s3_d1",
      "label": "Safety, Validation & Simulation Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Safety, Validation & Simulation Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t6_s3_d2",
      "label": "Safety, Validation & Simulation Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Safety, Validation & Simulation Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t6_s4",
      "label": "Safety, Validation & Simulation Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Safety, Validation & Simulation Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t6_s4_d1",
      "label": "Safety, Validation & Simulation Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Safety, Validation & Simulation Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t6_s4_d2",
      "label": "Safety, Validation & Simulation Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Safety, Validation & Simulation Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t6_s5",
      "label": "Safety, Validation & Simulation Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Safety, Validation & Simulation Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t6_s5_d1",
      "label": "Safety, Validation & Simulation Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Safety, Validation & Simulation Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "robotics_root_p8_t6_s5_d2",
      "label": "Safety, Validation & Simulation Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Safety, Validation & Simulation Topic 6 Sub-System 5.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "source": "robotics_root",
      "target": "robotics_root_p1"
    },
    {
      "source": "robotics_root_p1",
      "target": "robotics_root_p1_t1"
    },
    {
      "source": "robotics_root_p1_t1",
      "target": "robotics_root_p1_t1_s1"
    },
    {
      "source": "robotics_root_p1_t1_s1",
      "target": "robotics_root_p1_t1_s1_d1"
    },
    {
      "source": "robotics_root_p1_t1_s1",
      "target": "robotics_root_p1_t1_s1_d2"
    },
    {
      "source": "robotics_root_p1_t1",
      "target": "robotics_root_p1_t1_s2"
    },
    {
      "source": "robotics_root_p1_t1_s2",
      "target": "robotics_root_p1_t1_s2_d1"
    },
    {
      "source": "robotics_root_p1_t1_s2",
      "target": "robotics_root_p1_t1_s2_d2"
    },
    {
      "source": "robotics_root_p1_t1",
      "target": "robotics_root_p1_t1_s3"
    },
    {
      "source": "robotics_root_p1_t1_s3",
      "target": "robotics_root_p1_t1_s3_d1"
    },
    {
      "source": "robotics_root_p1_t1_s3",
      "target": "robotics_root_p1_t1_s3_d2"
    },
    {
      "source": "robotics_root_p1_t1",
      "target": "robotics_root_p1_t1_s4"
    },
    {
      "source": "robotics_root_p1_t1_s4",
      "target": "robotics_root_p1_t1_s4_d1"
    },
    {
      "source": "robotics_root_p1_t1_s4",
      "target": "robotics_root_p1_t1_s4_d2"
    },
    {
      "source": "robotics_root_p1_t1",
      "target": "robotics_root_p1_t1_s5"
    },
    {
      "source": "robotics_root_p1_t1_s5",
      "target": "robotics_root_p1_t1_s5_d1"
    },
    {
      "source": "robotics_root_p1_t1_s5",
      "target": "robotics_root_p1_t1_s5_d2"
    },
    {
      "source": "robotics_root_p1",
      "target": "robotics_root_p1_t2"
    },
    {
      "source": "robotics_root_p1_t2",
      "target": "robotics_root_p1_t2_s1"
    },
    {
      "source": "robotics_root_p1_t2_s1",
      "target": "robotics_root_p1_t2_s1_d1"
    },
    {
      "source": "robotics_root_p1_t2_s1",
      "target": "robotics_root_p1_t2_s1_d2"
    },
    {
      "source": "robotics_root_p1_t2",
      "target": "robotics_root_p1_t2_s2"
    },
    {
      "source": "robotics_root_p1_t2_s2",
      "target": "robotics_root_p1_t2_s2_d1"
    },
    {
      "source": "robotics_root_p1_t2_s2",
      "target": "robotics_root_p1_t2_s2_d2"
    },
    {
      "source": "robotics_root_p1_t2",
      "target": "robotics_root_p1_t2_s3"
    },
    {
      "source": "robotics_root_p1_t2_s3",
      "target": "robotics_root_p1_t2_s3_d1"
    },
    {
      "source": "robotics_root_p1_t2_s3",
      "target": "robotics_root_p1_t2_s3_d2"
    },
    {
      "source": "robotics_root_p1_t2",
      "target": "robotics_root_p1_t2_s4"
    },
    {
      "source": "robotics_root_p1_t2_s4",
      "target": "robotics_root_p1_t2_s4_d1"
    },
    {
      "source": "robotics_root_p1_t2_s4",
      "target": "robotics_root_p1_t2_s4_d2"
    },
    {
      "source": "robotics_root_p1_t2",
      "target": "robotics_root_p1_t2_s5"
    },
    {
      "source": "robotics_root_p1_t2_s5",
      "target": "robotics_root_p1_t2_s5_d1"
    },
    {
      "source": "robotics_root_p1_t2_s5",
      "target": "robotics_root_p1_t2_s5_d2"
    },
    {
      "source": "robotics_root_p1",
      "target": "robotics_root_p1_t3"
    },
    {
      "source": "robotics_root_p1_t3",
      "target": "robotics_root_p1_t3_s1"
    },
    {
      "source": "robotics_root_p1_t3_s1",
      "target": "robotics_root_p1_t3_s1_d1"
    },
    {
      "source": "robotics_root_p1_t3_s1",
      "target": "robotics_root_p1_t3_s1_d2"
    },
    {
      "source": "robotics_root_p1_t3",
      "target": "robotics_root_p1_t3_s2"
    },
    {
      "source": "robotics_root_p1_t3_s2",
      "target": "robotics_root_p1_t3_s2_d1"
    },
    {
      "source": "robotics_root_p1_t3_s2",
      "target": "robotics_root_p1_t3_s2_d2"
    },
    {
      "source": "robotics_root_p1_t3",
      "target": "robotics_root_p1_t3_s3"
    },
    {
      "source": "robotics_root_p1_t3_s3",
      "target": "robotics_root_p1_t3_s3_d1"
    },
    {
      "source": "robotics_root_p1_t3_s3",
      "target": "robotics_root_p1_t3_s3_d2"
    },
    {
      "source": "robotics_root_p1_t3",
      "target": "robotics_root_p1_t3_s4"
    },
    {
      "source": "robotics_root_p1_t3_s4",
      "target": "robotics_root_p1_t3_s4_d1"
    },
    {
      "source": "robotics_root_p1_t3_s4",
      "target": "robotics_root_p1_t3_s4_d2"
    },
    {
      "source": "robotics_root_p1_t3",
      "target": "robotics_root_p1_t3_s5"
    },
    {
      "source": "robotics_root_p1_t3_s5",
      "target": "robotics_root_p1_t3_s5_d1"
    },
    {
      "source": "robotics_root_p1_t3_s5",
      "target": "robotics_root_p1_t3_s5_d2"
    },
    {
      "source": "robotics_root_p1",
      "target": "robotics_root_p1_t4"
    },
    {
      "source": "robotics_root_p1_t4",
      "target": "robotics_root_p1_t4_s1"
    },
    {
      "source": "robotics_root_p1_t4_s1",
      "target": "robotics_root_p1_t4_s1_d1"
    },
    {
      "source": "robotics_root_p1_t4_s1",
      "target": "robotics_root_p1_t4_s1_d2"
    },
    {
      "source": "robotics_root_p1_t4",
      "target": "robotics_root_p1_t4_s2"
    },
    {
      "source": "robotics_root_p1_t4_s2",
      "target": "robotics_root_p1_t4_s2_d1"
    },
    {
      "source": "robotics_root_p1_t4_s2",
      "target": "robotics_root_p1_t4_s2_d2"
    },
    {
      "source": "robotics_root_p1_t4",
      "target": "robotics_root_p1_t4_s3"
    },
    {
      "source": "robotics_root_p1_t4_s3",
      "target": "robotics_root_p1_t4_s3_d1"
    },
    {
      "source": "robotics_root_p1_t4_s3",
      "target": "robotics_root_p1_t4_s3_d2"
    },
    {
      "source": "robotics_root_p1_t4",
      "target": "robotics_root_p1_t4_s4"
    },
    {
      "source": "robotics_root_p1_t4_s4",
      "target": "robotics_root_p1_t4_s4_d1"
    },
    {
      "source": "robotics_root_p1_t4_s4",
      "target": "robotics_root_p1_t4_s4_d2"
    },
    {
      "source": "robotics_root_p1_t4",
      "target": "robotics_root_p1_t4_s5"
    },
    {
      "source": "robotics_root_p1_t4_s5",
      "target": "robotics_root_p1_t4_s5_d1"
    },
    {
      "source": "robotics_root_p1_t4_s5",
      "target": "robotics_root_p1_t4_s5_d2"
    },
    {
      "source": "robotics_root_p1",
      "target": "robotics_root_p1_t5"
    },
    {
      "source": "robotics_root_p1_t5",
      "target": "robotics_root_p1_t5_s1"
    },
    {
      "source": "robotics_root_p1_t5_s1",
      "target": "robotics_root_p1_t5_s1_d1"
    },
    {
      "source": "robotics_root_p1_t5_s1",
      "target": "robotics_root_p1_t5_s1_d2"
    },
    {
      "source": "robotics_root_p1_t5",
      "target": "robotics_root_p1_t5_s2"
    },
    {
      "source": "robotics_root_p1_t5_s2",
      "target": "robotics_root_p1_t5_s2_d1"
    },
    {
      "source": "robotics_root_p1_t5_s2",
      "target": "robotics_root_p1_t5_s2_d2"
    },
    {
      "source": "robotics_root_p1_t5",
      "target": "robotics_root_p1_t5_s3"
    },
    {
      "source": "robotics_root_p1_t5_s3",
      "target": "robotics_root_p1_t5_s3_d1"
    },
    {
      "source": "robotics_root_p1_t5_s3",
      "target": "robotics_root_p1_t5_s3_d2"
    },
    {
      "source": "robotics_root_p1_t5",
      "target": "robotics_root_p1_t5_s4"
    },
    {
      "source": "robotics_root_p1_t5_s4",
      "target": "robotics_root_p1_t5_s4_d1"
    },
    {
      "source": "robotics_root_p1_t5_s4",
      "target": "robotics_root_p1_t5_s4_d2"
    },
    {
      "source": "robotics_root_p1_t5",
      "target": "robotics_root_p1_t5_s5"
    },
    {
      "source": "robotics_root_p1_t5_s5",
      "target": "robotics_root_p1_t5_s5_d1"
    },
    {
      "source": "robotics_root_p1_t5_s5",
      "target": "robotics_root_p1_t5_s5_d2"
    },
    {
      "source": "robotics_root_p1",
      "target": "robotics_root_p1_t6"
    },
    {
      "source": "robotics_root_p1_t6",
      "target": "robotics_root_p1_t6_s1"
    },
    {
      "source": "robotics_root_p1_t6_s1",
      "target": "robotics_root_p1_t6_s1_d1"
    },
    {
      "source": "robotics_root_p1_t6_s1",
      "target": "robotics_root_p1_t6_s1_d2"
    },
    {
      "source": "robotics_root_p1_t6",
      "target": "robotics_root_p1_t6_s2"
    },
    {
      "source": "robotics_root_p1_t6_s2",
      "target": "robotics_root_p1_t6_s2_d1"
    },
    {
      "source": "robotics_root_p1_t6_s2",
      "target": "robotics_root_p1_t6_s2_d2"
    },
    {
      "source": "robotics_root_p1_t6",
      "target": "robotics_root_p1_t6_s3"
    },
    {
      "source": "robotics_root_p1_t6_s3",
      "target": "robotics_root_p1_t6_s3_d1"
    },
    {
      "source": "robotics_root_p1_t6_s3",
      "target": "robotics_root_p1_t6_s3_d2"
    },
    {
      "source": "robotics_root_p1_t6",
      "target": "robotics_root_p1_t6_s4"
    },
    {
      "source": "robotics_root_p1_t6_s4",
      "target": "robotics_root_p1_t6_s4_d1"
    },
    {
      "source": "robotics_root_p1_t6_s4",
      "target": "robotics_root_p1_t6_s4_d2"
    },
    {
      "source": "robotics_root_p1_t6",
      "target": "robotics_root_p1_t6_s5"
    },
    {
      "source": "robotics_root_p1_t6_s5",
      "target": "robotics_root_p1_t6_s5_d1"
    },
    {
      "source": "robotics_root_p1_t6_s5",
      "target": "robotics_root_p1_t6_s5_d2"
    },
    {
      "source": "robotics_root",
      "target": "robotics_root_p2"
    },
    {
      "source": "robotics_root_p2",
      "target": "robotics_root_p2_t1"
    },
    {
      "source": "robotics_root_p2_t1",
      "target": "robotics_root_p2_t1_s1"
    },
    {
      "source": "robotics_root_p2_t1_s1",
      "target": "robotics_root_p2_t1_s1_d1"
    },
    {
      "source": "robotics_root_p2_t1_s1",
      "target": "robotics_root_p2_t1_s1_d2"
    },
    {
      "source": "robotics_root_p2_t1",
      "target": "robotics_root_p2_t1_s2"
    },
    {
      "source": "robotics_root_p2_t1_s2",
      "target": "robotics_root_p2_t1_s2_d1"
    },
    {
      "source": "robotics_root_p2_t1_s2",
      "target": "robotics_root_p2_t1_s2_d2"
    },
    {
      "source": "robotics_root_p2_t1",
      "target": "robotics_root_p2_t1_s3"
    },
    {
      "source": "robotics_root_p2_t1_s3",
      "target": "robotics_root_p2_t1_s3_d1"
    },
    {
      "source": "robotics_root_p2_t1_s3",
      "target": "robotics_root_p2_t1_s3_d2"
    },
    {
      "source": "robotics_root_p2_t1",
      "target": "robotics_root_p2_t1_s4"
    },
    {
      "source": "robotics_root_p2_t1_s4",
      "target": "robotics_root_p2_t1_s4_d1"
    },
    {
      "source": "robotics_root_p2_t1_s4",
      "target": "robotics_root_p2_t1_s4_d2"
    },
    {
      "source": "robotics_root_p2_t1",
      "target": "robotics_root_p2_t1_s5"
    },
    {
      "source": "robotics_root_p2_t1_s5",
      "target": "robotics_root_p2_t1_s5_d1"
    },
    {
      "source": "robotics_root_p2_t1_s5",
      "target": "robotics_root_p2_t1_s5_d2"
    },
    {
      "source": "robotics_root_p2",
      "target": "robotics_root_p2_t2"
    },
    {
      "source": "robotics_root_p2_t2",
      "target": "robotics_root_p2_t2_s1"
    },
    {
      "source": "robotics_root_p2_t2_s1",
      "target": "robotics_root_p2_t2_s1_d1"
    },
    {
      "source": "robotics_root_p2_t2_s1",
      "target": "robotics_root_p2_t2_s1_d2"
    },
    {
      "source": "robotics_root_p2_t2",
      "target": "robotics_root_p2_t2_s2"
    },
    {
      "source": "robotics_root_p2_t2_s2",
      "target": "robotics_root_p2_t2_s2_d1"
    },
    {
      "source": "robotics_root_p2_t2_s2",
      "target": "robotics_root_p2_t2_s2_d2"
    },
    {
      "source": "robotics_root_p2_t2",
      "target": "robotics_root_p2_t2_s3"
    },
    {
      "source": "robotics_root_p2_t2_s3",
      "target": "robotics_root_p2_t2_s3_d1"
    },
    {
      "source": "robotics_root_p2_t2_s3",
      "target": "robotics_root_p2_t2_s3_d2"
    },
    {
      "source": "robotics_root_p2_t2",
      "target": "robotics_root_p2_t2_s4"
    },
    {
      "source": "robotics_root_p2_t2_s4",
      "target": "robotics_root_p2_t2_s4_d1"
    },
    {
      "source": "robotics_root_p2_t2_s4",
      "target": "robotics_root_p2_t2_s4_d2"
    },
    {
      "source": "robotics_root_p2_t2",
      "target": "robotics_root_p2_t2_s5"
    },
    {
      "source": "robotics_root_p2_t2_s5",
      "target": "robotics_root_p2_t2_s5_d1"
    },
    {
      "source": "robotics_root_p2_t2_s5",
      "target": "robotics_root_p2_t2_s5_d2"
    },
    {
      "source": "robotics_root_p2",
      "target": "robotics_root_p2_t3"
    },
    {
      "source": "robotics_root_p2_t3",
      "target": "robotics_root_p2_t3_s1"
    },
    {
      "source": "robotics_root_p2_t3_s1",
      "target": "robotics_root_p2_t3_s1_d1"
    },
    {
      "source": "robotics_root_p2_t3_s1",
      "target": "robotics_root_p2_t3_s1_d2"
    },
    {
      "source": "robotics_root_p2_t3",
      "target": "robotics_root_p2_t3_s2"
    },
    {
      "source": "robotics_root_p2_t3_s2",
      "target": "robotics_root_p2_t3_s2_d1"
    },
    {
      "source": "robotics_root_p2_t3_s2",
      "target": "robotics_root_p2_t3_s2_d2"
    },
    {
      "source": "robotics_root_p2_t3",
      "target": "robotics_root_p2_t3_s3"
    },
    {
      "source": "robotics_root_p2_t3_s3",
      "target": "robotics_root_p2_t3_s3_d1"
    },
    {
      "source": "robotics_root_p2_t3_s3",
      "target": "robotics_root_p2_t3_s3_d2"
    },
    {
      "source": "robotics_root_p2_t3",
      "target": "robotics_root_p2_t3_s4"
    },
    {
      "source": "robotics_root_p2_t3_s4",
      "target": "robotics_root_p2_t3_s4_d1"
    },
    {
      "source": "robotics_root_p2_t3_s4",
      "target": "robotics_root_p2_t3_s4_d2"
    },
    {
      "source": "robotics_root_p2_t3",
      "target": "robotics_root_p2_t3_s5"
    },
    {
      "source": "robotics_root_p2_t3_s5",
      "target": "robotics_root_p2_t3_s5_d1"
    },
    {
      "source": "robotics_root_p2_t3_s5",
      "target": "robotics_root_p2_t3_s5_d2"
    },
    {
      "source": "robotics_root_p2",
      "target": "robotics_root_p2_t4"
    },
    {
      "source": "robotics_root_p2_t4",
      "target": "robotics_root_p2_t4_s1"
    },
    {
      "source": "robotics_root_p2_t4_s1",
      "target": "robotics_root_p2_t4_s1_d1"
    },
    {
      "source": "robotics_root_p2_t4_s1",
      "target": "robotics_root_p2_t4_s1_d2"
    },
    {
      "source": "robotics_root_p2_t4",
      "target": "robotics_root_p2_t4_s2"
    },
    {
      "source": "robotics_root_p2_t4_s2",
      "target": "robotics_root_p2_t4_s2_d1"
    },
    {
      "source": "robotics_root_p2_t4_s2",
      "target": "robotics_root_p2_t4_s2_d2"
    },
    {
      "source": "robotics_root_p2_t4",
      "target": "robotics_root_p2_t4_s3"
    },
    {
      "source": "robotics_root_p2_t4_s3",
      "target": "robotics_root_p2_t4_s3_d1"
    },
    {
      "source": "robotics_root_p2_t4_s3",
      "target": "robotics_root_p2_t4_s3_d2"
    },
    {
      "source": "robotics_root_p2_t4",
      "target": "robotics_root_p2_t4_s4"
    },
    {
      "source": "robotics_root_p2_t4_s4",
      "target": "robotics_root_p2_t4_s4_d1"
    },
    {
      "source": "robotics_root_p2_t4_s4",
      "target": "robotics_root_p2_t4_s4_d2"
    },
    {
      "source": "robotics_root_p2_t4",
      "target": "robotics_root_p2_t4_s5"
    },
    {
      "source": "robotics_root_p2_t4_s5",
      "target": "robotics_root_p2_t4_s5_d1"
    },
    {
      "source": "robotics_root_p2_t4_s5",
      "target": "robotics_root_p2_t4_s5_d2"
    },
    {
      "source": "robotics_root_p2",
      "target": "robotics_root_p2_t5"
    },
    {
      "source": "robotics_root_p2_t5",
      "target": "robotics_root_p2_t5_s1"
    },
    {
      "source": "robotics_root_p2_t5_s1",
      "target": "robotics_root_p2_t5_s1_d1"
    },
    {
      "source": "robotics_root_p2_t5_s1",
      "target": "robotics_root_p2_t5_s1_d2"
    },
    {
      "source": "robotics_root_p2_t5",
      "target": "robotics_root_p2_t5_s2"
    },
    {
      "source": "robotics_root_p2_t5_s2",
      "target": "robotics_root_p2_t5_s2_d1"
    },
    {
      "source": "robotics_root_p2_t5_s2",
      "target": "robotics_root_p2_t5_s2_d2"
    },
    {
      "source": "robotics_root_p2_t5",
      "target": "robotics_root_p2_t5_s3"
    },
    {
      "source": "robotics_root_p2_t5_s3",
      "target": "robotics_root_p2_t5_s3_d1"
    },
    {
      "source": "robotics_root_p2_t5_s3",
      "target": "robotics_root_p2_t5_s3_d2"
    },
    {
      "source": "robotics_root_p2_t5",
      "target": "robotics_root_p2_t5_s4"
    },
    {
      "source": "robotics_root_p2_t5_s4",
      "target": "robotics_root_p2_t5_s4_d1"
    },
    {
      "source": "robotics_root_p2_t5_s4",
      "target": "robotics_root_p2_t5_s4_d2"
    },
    {
      "source": "robotics_root_p2_t5",
      "target": "robotics_root_p2_t5_s5"
    },
    {
      "source": "robotics_root_p2_t5_s5",
      "target": "robotics_root_p2_t5_s5_d1"
    },
    {
      "source": "robotics_root_p2_t5_s5",
      "target": "robotics_root_p2_t5_s5_d2"
    },
    {
      "source": "robotics_root_p2",
      "target": "robotics_root_p2_t6"
    },
    {
      "source": "robotics_root_p2_t6",
      "target": "robotics_root_p2_t6_s1"
    },
    {
      "source": "robotics_root_p2_t6_s1",
      "target": "robotics_root_p2_t6_s1_d1"
    },
    {
      "source": "robotics_root_p2_t6_s1",
      "target": "robotics_root_p2_t6_s1_d2"
    },
    {
      "source": "robotics_root_p2_t6",
      "target": "robotics_root_p2_t6_s2"
    },
    {
      "source": "robotics_root_p2_t6_s2",
      "target": "robotics_root_p2_t6_s2_d1"
    },
    {
      "source": "robotics_root_p2_t6_s2",
      "target": "robotics_root_p2_t6_s2_d2"
    },
    {
      "source": "robotics_root_p2_t6",
      "target": "robotics_root_p2_t6_s3"
    },
    {
      "source": "robotics_root_p2_t6_s3",
      "target": "robotics_root_p2_t6_s3_d1"
    },
    {
      "source": "robotics_root_p2_t6_s3",
      "target": "robotics_root_p2_t6_s3_d2"
    },
    {
      "source": "robotics_root_p2_t6",
      "target": "robotics_root_p2_t6_s4"
    },
    {
      "source": "robotics_root_p2_t6_s4",
      "target": "robotics_root_p2_t6_s4_d1"
    },
    {
      "source": "robotics_root_p2_t6_s4",
      "target": "robotics_root_p2_t6_s4_d2"
    },
    {
      "source": "robotics_root_p2_t6",
      "target": "robotics_root_p2_t6_s5"
    },
    {
      "source": "robotics_root_p2_t6_s5",
      "target": "robotics_root_p2_t6_s5_d1"
    },
    {
      "source": "robotics_root_p2_t6_s5",
      "target": "robotics_root_p2_t6_s5_d2"
    },
    {
      "source": "robotics_root",
      "target": "robotics_root_p3"
    },
    {
      "source": "robotics_root_p3",
      "target": "robotics_root_p3_t1"
    },
    {
      "source": "robotics_root_p3_t1",
      "target": "robotics_root_p3_t1_s1"
    },
    {
      "source": "robotics_root_p3_t1_s1",
      "target": "robotics_root_p3_t1_s1_d1"
    },
    {
      "source": "robotics_root_p3_t1_s1",
      "target": "robotics_root_p3_t1_s1_d2"
    },
    {
      "source": "robotics_root_p3_t1",
      "target": "robotics_root_p3_t1_s2"
    },
    {
      "source": "robotics_root_p3_t1_s2",
      "target": "robotics_root_p3_t1_s2_d1"
    },
    {
      "source": "robotics_root_p3_t1_s2",
      "target": "robotics_root_p3_t1_s2_d2"
    },
    {
      "source": "robotics_root_p3_t1",
      "target": "robotics_root_p3_t1_s3"
    },
    {
      "source": "robotics_root_p3_t1_s3",
      "target": "robotics_root_p3_t1_s3_d1"
    },
    {
      "source": "robotics_root_p3_t1_s3",
      "target": "robotics_root_p3_t1_s3_d2"
    },
    {
      "source": "robotics_root_p3_t1",
      "target": "robotics_root_p3_t1_s4"
    },
    {
      "source": "robotics_root_p3_t1_s4",
      "target": "robotics_root_p3_t1_s4_d1"
    },
    {
      "source": "robotics_root_p3_t1_s4",
      "target": "robotics_root_p3_t1_s4_d2"
    },
    {
      "source": "robotics_root_p3_t1",
      "target": "robotics_root_p3_t1_s5"
    },
    {
      "source": "robotics_root_p3_t1_s5",
      "target": "robotics_root_p3_t1_s5_d1"
    },
    {
      "source": "robotics_root_p3_t1_s5",
      "target": "robotics_root_p3_t1_s5_d2"
    },
    {
      "source": "robotics_root_p3",
      "target": "robotics_root_p3_t2"
    },
    {
      "source": "robotics_root_p3_t2",
      "target": "robotics_root_p3_t2_s1"
    },
    {
      "source": "robotics_root_p3_t2_s1",
      "target": "robotics_root_p3_t2_s1_d1"
    },
    {
      "source": "robotics_root_p3_t2_s1",
      "target": "robotics_root_p3_t2_s1_d2"
    },
    {
      "source": "robotics_root_p3_t2",
      "target": "robotics_root_p3_t2_s2"
    },
    {
      "source": "robotics_root_p3_t2_s2",
      "target": "robotics_root_p3_t2_s2_d1"
    },
    {
      "source": "robotics_root_p3_t2_s2",
      "target": "robotics_root_p3_t2_s2_d2"
    },
    {
      "source": "robotics_root_p3_t2",
      "target": "robotics_root_p3_t2_s3"
    },
    {
      "source": "robotics_root_p3_t2_s3",
      "target": "robotics_root_p3_t2_s3_d1"
    },
    {
      "source": "robotics_root_p3_t2_s3",
      "target": "robotics_root_p3_t2_s3_d2"
    },
    {
      "source": "robotics_root_p3_t2",
      "target": "robotics_root_p3_t2_s4"
    },
    {
      "source": "robotics_root_p3_t2_s4",
      "target": "robotics_root_p3_t2_s4_d1"
    },
    {
      "source": "robotics_root_p3_t2_s4",
      "target": "robotics_root_p3_t2_s4_d2"
    },
    {
      "source": "robotics_root_p3_t2",
      "target": "robotics_root_p3_t2_s5"
    },
    {
      "source": "robotics_root_p3_t2_s5",
      "target": "robotics_root_p3_t2_s5_d1"
    },
    {
      "source": "robotics_root_p3_t2_s5",
      "target": "robotics_root_p3_t2_s5_d2"
    },
    {
      "source": "robotics_root_p3",
      "target": "robotics_root_p3_t3"
    },
    {
      "source": "robotics_root_p3_t3",
      "target": "robotics_root_p3_t3_s1"
    },
    {
      "source": "robotics_root_p3_t3_s1",
      "target": "robotics_root_p3_t3_s1_d1"
    },
    {
      "source": "robotics_root_p3_t3_s1",
      "target": "robotics_root_p3_t3_s1_d2"
    },
    {
      "source": "robotics_root_p3_t3",
      "target": "robotics_root_p3_t3_s2"
    },
    {
      "source": "robotics_root_p3_t3_s2",
      "target": "robotics_root_p3_t3_s2_d1"
    },
    {
      "source": "robotics_root_p3_t3_s2",
      "target": "robotics_root_p3_t3_s2_d2"
    },
    {
      "source": "robotics_root_p3_t3",
      "target": "robotics_root_p3_t3_s3"
    },
    {
      "source": "robotics_root_p3_t3_s3",
      "target": "robotics_root_p3_t3_s3_d1"
    },
    {
      "source": "robotics_root_p3_t3_s3",
      "target": "robotics_root_p3_t3_s3_d2"
    },
    {
      "source": "robotics_root_p3_t3",
      "target": "robotics_root_p3_t3_s4"
    },
    {
      "source": "robotics_root_p3_t3_s4",
      "target": "robotics_root_p3_t3_s4_d1"
    },
    {
      "source": "robotics_root_p3_t3_s4",
      "target": "robotics_root_p3_t3_s4_d2"
    },
    {
      "source": "robotics_root_p3_t3",
      "target": "robotics_root_p3_t3_s5"
    },
    {
      "source": "robotics_root_p3_t3_s5",
      "target": "robotics_root_p3_t3_s5_d1"
    },
    {
      "source": "robotics_root_p3_t3_s5",
      "target": "robotics_root_p3_t3_s5_d2"
    },
    {
      "source": "robotics_root_p3",
      "target": "robotics_root_p3_t4"
    },
    {
      "source": "robotics_root_p3_t4",
      "target": "robotics_root_p3_t4_s1"
    },
    {
      "source": "robotics_root_p3_t4_s1",
      "target": "robotics_root_p3_t4_s1_d1"
    },
    {
      "source": "robotics_root_p3_t4_s1",
      "target": "robotics_root_p3_t4_s1_d2"
    },
    {
      "source": "robotics_root_p3_t4",
      "target": "robotics_root_p3_t4_s2"
    },
    {
      "source": "robotics_root_p3_t4_s2",
      "target": "robotics_root_p3_t4_s2_d1"
    },
    {
      "source": "robotics_root_p3_t4_s2",
      "target": "robotics_root_p3_t4_s2_d2"
    },
    {
      "source": "robotics_root_p3_t4",
      "target": "robotics_root_p3_t4_s3"
    },
    {
      "source": "robotics_root_p3_t4_s3",
      "target": "robotics_root_p3_t4_s3_d1"
    },
    {
      "source": "robotics_root_p3_t4_s3",
      "target": "robotics_root_p3_t4_s3_d2"
    },
    {
      "source": "robotics_root_p3_t4",
      "target": "robotics_root_p3_t4_s4"
    },
    {
      "source": "robotics_root_p3_t4_s4",
      "target": "robotics_root_p3_t4_s4_d1"
    },
    {
      "source": "robotics_root_p3_t4_s4",
      "target": "robotics_root_p3_t4_s4_d2"
    },
    {
      "source": "robotics_root_p3_t4",
      "target": "robotics_root_p3_t4_s5"
    },
    {
      "source": "robotics_root_p3_t4_s5",
      "target": "robotics_root_p3_t4_s5_d1"
    },
    {
      "source": "robotics_root_p3_t4_s5",
      "target": "robotics_root_p3_t4_s5_d2"
    },
    {
      "source": "robotics_root_p3",
      "target": "robotics_root_p3_t5"
    },
    {
      "source": "robotics_root_p3_t5",
      "target": "robotics_root_p3_t5_s1"
    },
    {
      "source": "robotics_root_p3_t5_s1",
      "target": "robotics_root_p3_t5_s1_d1"
    },
    {
      "source": "robotics_root_p3_t5_s1",
      "target": "robotics_root_p3_t5_s1_d2"
    },
    {
      "source": "robotics_root_p3_t5",
      "target": "robotics_root_p3_t5_s2"
    },
    {
      "source": "robotics_root_p3_t5_s2",
      "target": "robotics_root_p3_t5_s2_d1"
    },
    {
      "source": "robotics_root_p3_t5_s2",
      "target": "robotics_root_p3_t5_s2_d2"
    },
    {
      "source": "robotics_root_p3_t5",
      "target": "robotics_root_p3_t5_s3"
    },
    {
      "source": "robotics_root_p3_t5_s3",
      "target": "robotics_root_p3_t5_s3_d1"
    },
    {
      "source": "robotics_root_p3_t5_s3",
      "target": "robotics_root_p3_t5_s3_d2"
    },
    {
      "source": "robotics_root_p3_t5",
      "target": "robotics_root_p3_t5_s4"
    },
    {
      "source": "robotics_root_p3_t5_s4",
      "target": "robotics_root_p3_t5_s4_d1"
    },
    {
      "source": "robotics_root_p3_t5_s4",
      "target": "robotics_root_p3_t5_s4_d2"
    },
    {
      "source": "robotics_root_p3_t5",
      "target": "robotics_root_p3_t5_s5"
    },
    {
      "source": "robotics_root_p3_t5_s5",
      "target": "robotics_root_p3_t5_s5_d1"
    },
    {
      "source": "robotics_root_p3_t5_s5",
      "target": "robotics_root_p3_t5_s5_d2"
    },
    {
      "source": "robotics_root_p3",
      "target": "robotics_root_p3_t6"
    },
    {
      "source": "robotics_root_p3_t6",
      "target": "robotics_root_p3_t6_s1"
    },
    {
      "source": "robotics_root_p3_t6_s1",
      "target": "robotics_root_p3_t6_s1_d1"
    },
    {
      "source": "robotics_root_p3_t6_s1",
      "target": "robotics_root_p3_t6_s1_d2"
    },
    {
      "source": "robotics_root_p3_t6",
      "target": "robotics_root_p3_t6_s2"
    },
    {
      "source": "robotics_root_p3_t6_s2",
      "target": "robotics_root_p3_t6_s2_d1"
    },
    {
      "source": "robotics_root_p3_t6_s2",
      "target": "robotics_root_p3_t6_s2_d2"
    },
    {
      "source": "robotics_root_p3_t6",
      "target": "robotics_root_p3_t6_s3"
    },
    {
      "source": "robotics_root_p3_t6_s3",
      "target": "robotics_root_p3_t6_s3_d1"
    },
    {
      "source": "robotics_root_p3_t6_s3",
      "target": "robotics_root_p3_t6_s3_d2"
    },
    {
      "source": "robotics_root_p3_t6",
      "target": "robotics_root_p3_t6_s4"
    },
    {
      "source": "robotics_root_p3_t6_s4",
      "target": "robotics_root_p3_t6_s4_d1"
    },
    {
      "source": "robotics_root_p3_t6_s4",
      "target": "robotics_root_p3_t6_s4_d2"
    },
    {
      "source": "robotics_root_p3_t6",
      "target": "robotics_root_p3_t6_s5"
    },
    {
      "source": "robotics_root_p3_t6_s5",
      "target": "robotics_root_p3_t6_s5_d1"
    },
    {
      "source": "robotics_root_p3_t6_s5",
      "target": "robotics_root_p3_t6_s5_d2"
    },
    {
      "source": "robotics_root",
      "target": "robotics_root_p4"
    },
    {
      "source": "robotics_root_p4",
      "target": "robotics_root_p4_t1"
    },
    {
      "source": "robotics_root_p4_t1",
      "target": "robotics_root_p4_t1_s1"
    },
    {
      "source": "robotics_root_p4_t1_s1",
      "target": "robotics_root_p4_t1_s1_d1"
    },
    {
      "source": "robotics_root_p4_t1_s1",
      "target": "robotics_root_p4_t1_s1_d2"
    },
    {
      "source": "robotics_root_p4_t1",
      "target": "robotics_root_p4_t1_s2"
    },
    {
      "source": "robotics_root_p4_t1_s2",
      "target": "robotics_root_p4_t1_s2_d1"
    },
    {
      "source": "robotics_root_p4_t1_s2",
      "target": "robotics_root_p4_t1_s2_d2"
    },
    {
      "source": "robotics_root_p4_t1",
      "target": "robotics_root_p4_t1_s3"
    },
    {
      "source": "robotics_root_p4_t1_s3",
      "target": "robotics_root_p4_t1_s3_d1"
    },
    {
      "source": "robotics_root_p4_t1_s3",
      "target": "robotics_root_p4_t1_s3_d2"
    },
    {
      "source": "robotics_root_p4_t1",
      "target": "robotics_root_p4_t1_s4"
    },
    {
      "source": "robotics_root_p4_t1_s4",
      "target": "robotics_root_p4_t1_s4_d1"
    },
    {
      "source": "robotics_root_p4_t1_s4",
      "target": "robotics_root_p4_t1_s4_d2"
    },
    {
      "source": "robotics_root_p4_t1",
      "target": "robotics_root_p4_t1_s5"
    },
    {
      "source": "robotics_root_p4_t1_s5",
      "target": "robotics_root_p4_t1_s5_d1"
    },
    {
      "source": "robotics_root_p4_t1_s5",
      "target": "robotics_root_p4_t1_s5_d2"
    },
    {
      "source": "robotics_root_p4",
      "target": "robotics_root_p4_t2"
    },
    {
      "source": "robotics_root_p4_t2",
      "target": "robotics_root_p4_t2_s1"
    },
    {
      "source": "robotics_root_p4_t2_s1",
      "target": "robotics_root_p4_t2_s1_d1"
    },
    {
      "source": "robotics_root_p4_t2_s1",
      "target": "robotics_root_p4_t2_s1_d2"
    },
    {
      "source": "robotics_root_p4_t2",
      "target": "robotics_root_p4_t2_s2"
    },
    {
      "source": "robotics_root_p4_t2_s2",
      "target": "robotics_root_p4_t2_s2_d1"
    },
    {
      "source": "robotics_root_p4_t2_s2",
      "target": "robotics_root_p4_t2_s2_d2"
    },
    {
      "source": "robotics_root_p4_t2",
      "target": "robotics_root_p4_t2_s3"
    },
    {
      "source": "robotics_root_p4_t2_s3",
      "target": "robotics_root_p4_t2_s3_d1"
    },
    {
      "source": "robotics_root_p4_t2_s3",
      "target": "robotics_root_p4_t2_s3_d2"
    },
    {
      "source": "robotics_root_p4_t2",
      "target": "robotics_root_p4_t2_s4"
    },
    {
      "source": "robotics_root_p4_t2_s4",
      "target": "robotics_root_p4_t2_s4_d1"
    },
    {
      "source": "robotics_root_p4_t2_s4",
      "target": "robotics_root_p4_t2_s4_d2"
    },
    {
      "source": "robotics_root_p4_t2",
      "target": "robotics_root_p4_t2_s5"
    },
    {
      "source": "robotics_root_p4_t2_s5",
      "target": "robotics_root_p4_t2_s5_d1"
    },
    {
      "source": "robotics_root_p4_t2_s5",
      "target": "robotics_root_p4_t2_s5_d2"
    },
    {
      "source": "robotics_root_p4",
      "target": "robotics_root_p4_t3"
    },
    {
      "source": "robotics_root_p4_t3",
      "target": "robotics_root_p4_t3_s1"
    },
    {
      "source": "robotics_root_p4_t3_s1",
      "target": "robotics_root_p4_t3_s1_d1"
    },
    {
      "source": "robotics_root_p4_t3_s1",
      "target": "robotics_root_p4_t3_s1_d2"
    },
    {
      "source": "robotics_root_p4_t3",
      "target": "robotics_root_p4_t3_s2"
    },
    {
      "source": "robotics_root_p4_t3_s2",
      "target": "robotics_root_p4_t3_s2_d1"
    },
    {
      "source": "robotics_root_p4_t3_s2",
      "target": "robotics_root_p4_t3_s2_d2"
    },
    {
      "source": "robotics_root_p4_t3",
      "target": "robotics_root_p4_t3_s3"
    },
    {
      "source": "robotics_root_p4_t3_s3",
      "target": "robotics_root_p4_t3_s3_d1"
    },
    {
      "source": "robotics_root_p4_t3_s3",
      "target": "robotics_root_p4_t3_s3_d2"
    },
    {
      "source": "robotics_root_p4_t3",
      "target": "robotics_root_p4_t3_s4"
    },
    {
      "source": "robotics_root_p4_t3_s4",
      "target": "robotics_root_p4_t3_s4_d1"
    },
    {
      "source": "robotics_root_p4_t3_s4",
      "target": "robotics_root_p4_t3_s4_d2"
    },
    {
      "source": "robotics_root_p4_t3",
      "target": "robotics_root_p4_t3_s5"
    },
    {
      "source": "robotics_root_p4_t3_s5",
      "target": "robotics_root_p4_t3_s5_d1"
    },
    {
      "source": "robotics_root_p4_t3_s5",
      "target": "robotics_root_p4_t3_s5_d2"
    },
    {
      "source": "robotics_root_p4",
      "target": "robotics_root_p4_t4"
    },
    {
      "source": "robotics_root_p4_t4",
      "target": "robotics_root_p4_t4_s1"
    },
    {
      "source": "robotics_root_p4_t4_s1",
      "target": "robotics_root_p4_t4_s1_d1"
    },
    {
      "source": "robotics_root_p4_t4_s1",
      "target": "robotics_root_p4_t4_s1_d2"
    },
    {
      "source": "robotics_root_p4_t4",
      "target": "robotics_root_p4_t4_s2"
    },
    {
      "source": "robotics_root_p4_t4_s2",
      "target": "robotics_root_p4_t4_s2_d1"
    },
    {
      "source": "robotics_root_p4_t4_s2",
      "target": "robotics_root_p4_t4_s2_d2"
    },
    {
      "source": "robotics_root_p4_t4",
      "target": "robotics_root_p4_t4_s3"
    },
    {
      "source": "robotics_root_p4_t4_s3",
      "target": "robotics_root_p4_t4_s3_d1"
    },
    {
      "source": "robotics_root_p4_t4_s3",
      "target": "robotics_root_p4_t4_s3_d2"
    },
    {
      "source": "robotics_root_p4_t4",
      "target": "robotics_root_p4_t4_s4"
    },
    {
      "source": "robotics_root_p4_t4_s4",
      "target": "robotics_root_p4_t4_s4_d1"
    },
    {
      "source": "robotics_root_p4_t4_s4",
      "target": "robotics_root_p4_t4_s4_d2"
    },
    {
      "source": "robotics_root_p4_t4",
      "target": "robotics_root_p4_t4_s5"
    },
    {
      "source": "robotics_root_p4_t4_s5",
      "target": "robotics_root_p4_t4_s5_d1"
    },
    {
      "source": "robotics_root_p4_t4_s5",
      "target": "robotics_root_p4_t4_s5_d2"
    },
    {
      "source": "robotics_root_p4",
      "target": "robotics_root_p4_t5"
    },
    {
      "source": "robotics_root_p4_t5",
      "target": "robotics_root_p4_t5_s1"
    },
    {
      "source": "robotics_root_p4_t5_s1",
      "target": "robotics_root_p4_t5_s1_d1"
    },
    {
      "source": "robotics_root_p4_t5_s1",
      "target": "robotics_root_p4_t5_s1_d2"
    },
    {
      "source": "robotics_root_p4_t5",
      "target": "robotics_root_p4_t5_s2"
    },
    {
      "source": "robotics_root_p4_t5_s2",
      "target": "robotics_root_p4_t5_s2_d1"
    },
    {
      "source": "robotics_root_p4_t5_s2",
      "target": "robotics_root_p4_t5_s2_d2"
    },
    {
      "source": "robotics_root_p4_t5",
      "target": "robotics_root_p4_t5_s3"
    },
    {
      "source": "robotics_root_p4_t5_s3",
      "target": "robotics_root_p4_t5_s3_d1"
    },
    {
      "source": "robotics_root_p4_t5_s3",
      "target": "robotics_root_p4_t5_s3_d2"
    },
    {
      "source": "robotics_root_p4_t5",
      "target": "robotics_root_p4_t5_s4"
    },
    {
      "source": "robotics_root_p4_t5_s4",
      "target": "robotics_root_p4_t5_s4_d1"
    },
    {
      "source": "robotics_root_p4_t5_s4",
      "target": "robotics_root_p4_t5_s4_d2"
    },
    {
      "source": "robotics_root_p4_t5",
      "target": "robotics_root_p4_t5_s5"
    },
    {
      "source": "robotics_root_p4_t5_s5",
      "target": "robotics_root_p4_t5_s5_d1"
    },
    {
      "source": "robotics_root_p4_t5_s5",
      "target": "robotics_root_p4_t5_s5_d2"
    },
    {
      "source": "robotics_root_p4",
      "target": "robotics_root_p4_t6"
    },
    {
      "source": "robotics_root_p4_t6",
      "target": "robotics_root_p4_t6_s1"
    },
    {
      "source": "robotics_root_p4_t6_s1",
      "target": "robotics_root_p4_t6_s1_d1"
    },
    {
      "source": "robotics_root_p4_t6_s1",
      "target": "robotics_root_p4_t6_s1_d2"
    },
    {
      "source": "robotics_root_p4_t6",
      "target": "robotics_root_p4_t6_s2"
    },
    {
      "source": "robotics_root_p4_t6_s2",
      "target": "robotics_root_p4_t6_s2_d1"
    },
    {
      "source": "robotics_root_p4_t6_s2",
      "target": "robotics_root_p4_t6_s2_d2"
    },
    {
      "source": "robotics_root_p4_t6",
      "target": "robotics_root_p4_t6_s3"
    },
    {
      "source": "robotics_root_p4_t6_s3",
      "target": "robotics_root_p4_t6_s3_d1"
    },
    {
      "source": "robotics_root_p4_t6_s3",
      "target": "robotics_root_p4_t6_s3_d2"
    },
    {
      "source": "robotics_root_p4_t6",
      "target": "robotics_root_p4_t6_s4"
    },
    {
      "source": "robotics_root_p4_t6_s4",
      "target": "robotics_root_p4_t6_s4_d1"
    },
    {
      "source": "robotics_root_p4_t6_s4",
      "target": "robotics_root_p4_t6_s4_d2"
    },
    {
      "source": "robotics_root_p4_t6",
      "target": "robotics_root_p4_t6_s5"
    },
    {
      "source": "robotics_root_p4_t6_s5",
      "target": "robotics_root_p4_t6_s5_d1"
    },
    {
      "source": "robotics_root_p4_t6_s5",
      "target": "robotics_root_p4_t6_s5_d2"
    },
    {
      "source": "robotics_root",
      "target": "robotics_root_p5"
    },
    {
      "source": "robotics_root_p5",
      "target": "robotics_root_p5_t1"
    },
    {
      "source": "robotics_root_p5_t1",
      "target": "robotics_root_p5_t1_s1"
    },
    {
      "source": "robotics_root_p5_t1_s1",
      "target": "robotics_root_p5_t1_s1_d1"
    },
    {
      "source": "robotics_root_p5_t1_s1",
      "target": "robotics_root_p5_t1_s1_d2"
    },
    {
      "source": "robotics_root_p5_t1",
      "target": "robotics_root_p5_t1_s2"
    },
    {
      "source": "robotics_root_p5_t1_s2",
      "target": "robotics_root_p5_t1_s2_d1"
    },
    {
      "source": "robotics_root_p5_t1_s2",
      "target": "robotics_root_p5_t1_s2_d2"
    },
    {
      "source": "robotics_root_p5_t1",
      "target": "robotics_root_p5_t1_s3"
    },
    {
      "source": "robotics_root_p5_t1_s3",
      "target": "robotics_root_p5_t1_s3_d1"
    },
    {
      "source": "robotics_root_p5_t1_s3",
      "target": "robotics_root_p5_t1_s3_d2"
    },
    {
      "source": "robotics_root_p5_t1",
      "target": "robotics_root_p5_t1_s4"
    },
    {
      "source": "robotics_root_p5_t1_s4",
      "target": "robotics_root_p5_t1_s4_d1"
    },
    {
      "source": "robotics_root_p5_t1_s4",
      "target": "robotics_root_p5_t1_s4_d2"
    },
    {
      "source": "robotics_root_p5_t1",
      "target": "robotics_root_p5_t1_s5"
    },
    {
      "source": "robotics_root_p5_t1_s5",
      "target": "robotics_root_p5_t1_s5_d1"
    },
    {
      "source": "robotics_root_p5_t1_s5",
      "target": "robotics_root_p5_t1_s5_d2"
    },
    {
      "source": "robotics_root_p5",
      "target": "robotics_root_p5_t2"
    },
    {
      "source": "robotics_root_p5_t2",
      "target": "robotics_root_p5_t2_s1"
    },
    {
      "source": "robotics_root_p5_t2_s1",
      "target": "robotics_root_p5_t2_s1_d1"
    },
    {
      "source": "robotics_root_p5_t2_s1",
      "target": "robotics_root_p5_t2_s1_d2"
    },
    {
      "source": "robotics_root_p5_t2",
      "target": "robotics_root_p5_t2_s2"
    },
    {
      "source": "robotics_root_p5_t2_s2",
      "target": "robotics_root_p5_t2_s2_d1"
    },
    {
      "source": "robotics_root_p5_t2_s2",
      "target": "robotics_root_p5_t2_s2_d2"
    },
    {
      "source": "robotics_root_p5_t2",
      "target": "robotics_root_p5_t2_s3"
    },
    {
      "source": "robotics_root_p5_t2_s3",
      "target": "robotics_root_p5_t2_s3_d1"
    },
    {
      "source": "robotics_root_p5_t2_s3",
      "target": "robotics_root_p5_t2_s3_d2"
    },
    {
      "source": "robotics_root_p5_t2",
      "target": "robotics_root_p5_t2_s4"
    },
    {
      "source": "robotics_root_p5_t2_s4",
      "target": "robotics_root_p5_t2_s4_d1"
    },
    {
      "source": "robotics_root_p5_t2_s4",
      "target": "robotics_root_p5_t2_s4_d2"
    },
    {
      "source": "robotics_root_p5_t2",
      "target": "robotics_root_p5_t2_s5"
    },
    {
      "source": "robotics_root_p5_t2_s5",
      "target": "robotics_root_p5_t2_s5_d1"
    },
    {
      "source": "robotics_root_p5_t2_s5",
      "target": "robotics_root_p5_t2_s5_d2"
    },
    {
      "source": "robotics_root_p5",
      "target": "robotics_root_p5_t3"
    },
    {
      "source": "robotics_root_p5_t3",
      "target": "robotics_root_p5_t3_s1"
    },
    {
      "source": "robotics_root_p5_t3_s1",
      "target": "robotics_root_p5_t3_s1_d1"
    },
    {
      "source": "robotics_root_p5_t3_s1",
      "target": "robotics_root_p5_t3_s1_d2"
    },
    {
      "source": "robotics_root_p5_t3",
      "target": "robotics_root_p5_t3_s2"
    },
    {
      "source": "robotics_root_p5_t3_s2",
      "target": "robotics_root_p5_t3_s2_d1"
    },
    {
      "source": "robotics_root_p5_t3_s2",
      "target": "robotics_root_p5_t3_s2_d2"
    },
    {
      "source": "robotics_root_p5_t3",
      "target": "robotics_root_p5_t3_s3"
    },
    {
      "source": "robotics_root_p5_t3_s3",
      "target": "robotics_root_p5_t3_s3_d1"
    },
    {
      "source": "robotics_root_p5_t3_s3",
      "target": "robotics_root_p5_t3_s3_d2"
    },
    {
      "source": "robotics_root_p5_t3",
      "target": "robotics_root_p5_t3_s4"
    },
    {
      "source": "robotics_root_p5_t3_s4",
      "target": "robotics_root_p5_t3_s4_d1"
    },
    {
      "source": "robotics_root_p5_t3_s4",
      "target": "robotics_root_p5_t3_s4_d2"
    },
    {
      "source": "robotics_root_p5_t3",
      "target": "robotics_root_p5_t3_s5"
    },
    {
      "source": "robotics_root_p5_t3_s5",
      "target": "robotics_root_p5_t3_s5_d1"
    },
    {
      "source": "robotics_root_p5_t3_s5",
      "target": "robotics_root_p5_t3_s5_d2"
    },
    {
      "source": "robotics_root_p5",
      "target": "robotics_root_p5_t4"
    },
    {
      "source": "robotics_root_p5_t4",
      "target": "robotics_root_p5_t4_s1"
    },
    {
      "source": "robotics_root_p5_t4_s1",
      "target": "robotics_root_p5_t4_s1_d1"
    },
    {
      "source": "robotics_root_p5_t4_s1",
      "target": "robotics_root_p5_t4_s1_d2"
    },
    {
      "source": "robotics_root_p5_t4",
      "target": "robotics_root_p5_t4_s2"
    },
    {
      "source": "robotics_root_p5_t4_s2",
      "target": "robotics_root_p5_t4_s2_d1"
    },
    {
      "source": "robotics_root_p5_t4_s2",
      "target": "robotics_root_p5_t4_s2_d2"
    },
    {
      "source": "robotics_root_p5_t4",
      "target": "robotics_root_p5_t4_s3"
    },
    {
      "source": "robotics_root_p5_t4_s3",
      "target": "robotics_root_p5_t4_s3_d1"
    },
    {
      "source": "robotics_root_p5_t4_s3",
      "target": "robotics_root_p5_t4_s3_d2"
    },
    {
      "source": "robotics_root_p5_t4",
      "target": "robotics_root_p5_t4_s4"
    },
    {
      "source": "robotics_root_p5_t4_s4",
      "target": "robotics_root_p5_t4_s4_d1"
    },
    {
      "source": "robotics_root_p5_t4_s4",
      "target": "robotics_root_p5_t4_s4_d2"
    },
    {
      "source": "robotics_root_p5_t4",
      "target": "robotics_root_p5_t4_s5"
    },
    {
      "source": "robotics_root_p5_t4_s5",
      "target": "robotics_root_p5_t4_s5_d1"
    },
    {
      "source": "robotics_root_p5_t4_s5",
      "target": "robotics_root_p5_t4_s5_d2"
    },
    {
      "source": "robotics_root_p5",
      "target": "robotics_root_p5_t5"
    },
    {
      "source": "robotics_root_p5_t5",
      "target": "robotics_root_p5_t5_s1"
    },
    {
      "source": "robotics_root_p5_t5_s1",
      "target": "robotics_root_p5_t5_s1_d1"
    },
    {
      "source": "robotics_root_p5_t5_s1",
      "target": "robotics_root_p5_t5_s1_d2"
    },
    {
      "source": "robotics_root_p5_t5",
      "target": "robotics_root_p5_t5_s2"
    },
    {
      "source": "robotics_root_p5_t5_s2",
      "target": "robotics_root_p5_t5_s2_d1"
    },
    {
      "source": "robotics_root_p5_t5_s2",
      "target": "robotics_root_p5_t5_s2_d2"
    },
    {
      "source": "robotics_root_p5_t5",
      "target": "robotics_root_p5_t5_s3"
    },
    {
      "source": "robotics_root_p5_t5_s3",
      "target": "robotics_root_p5_t5_s3_d1"
    },
    {
      "source": "robotics_root_p5_t5_s3",
      "target": "robotics_root_p5_t5_s3_d2"
    },
    {
      "source": "robotics_root_p5_t5",
      "target": "robotics_root_p5_t5_s4"
    },
    {
      "source": "robotics_root_p5_t5_s4",
      "target": "robotics_root_p5_t5_s4_d1"
    },
    {
      "source": "robotics_root_p5_t5_s4",
      "target": "robotics_root_p5_t5_s4_d2"
    },
    {
      "source": "robotics_root_p5_t5",
      "target": "robotics_root_p5_t5_s5"
    },
    {
      "source": "robotics_root_p5_t5_s5",
      "target": "robotics_root_p5_t5_s5_d1"
    },
    {
      "source": "robotics_root_p5_t5_s5",
      "target": "robotics_root_p5_t5_s5_d2"
    },
    {
      "source": "robotics_root_p5",
      "target": "robotics_root_p5_t6"
    },
    {
      "source": "robotics_root_p5_t6",
      "target": "robotics_root_p5_t6_s1"
    },
    {
      "source": "robotics_root_p5_t6_s1",
      "target": "robotics_root_p5_t6_s1_d1"
    },
    {
      "source": "robotics_root_p5_t6_s1",
      "target": "robotics_root_p5_t6_s1_d2"
    },
    {
      "source": "robotics_root_p5_t6",
      "target": "robotics_root_p5_t6_s2"
    },
    {
      "source": "robotics_root_p5_t6_s2",
      "target": "robotics_root_p5_t6_s2_d1"
    },
    {
      "source": "robotics_root_p5_t6_s2",
      "target": "robotics_root_p5_t6_s2_d2"
    },
    {
      "source": "robotics_root_p5_t6",
      "target": "robotics_root_p5_t6_s3"
    },
    {
      "source": "robotics_root_p5_t6_s3",
      "target": "robotics_root_p5_t6_s3_d1"
    },
    {
      "source": "robotics_root_p5_t6_s3",
      "target": "robotics_root_p5_t6_s3_d2"
    },
    {
      "source": "robotics_root_p5_t6",
      "target": "robotics_root_p5_t6_s4"
    },
    {
      "source": "robotics_root_p5_t6_s4",
      "target": "robotics_root_p5_t6_s4_d1"
    },
    {
      "source": "robotics_root_p5_t6_s4",
      "target": "robotics_root_p5_t6_s4_d2"
    },
    {
      "source": "robotics_root_p5_t6",
      "target": "robotics_root_p5_t6_s5"
    },
    {
      "source": "robotics_root_p5_t6_s5",
      "target": "robotics_root_p5_t6_s5_d1"
    },
    {
      "source": "robotics_root_p5_t6_s5",
      "target": "robotics_root_p5_t6_s5_d2"
    },
    {
      "source": "robotics_root",
      "target": "robotics_root_p6"
    },
    {
      "source": "robotics_root_p6",
      "target": "robotics_root_p6_t1"
    },
    {
      "source": "robotics_root_p6_t1",
      "target": "robotics_root_p6_t1_s1"
    },
    {
      "source": "robotics_root_p6_t1_s1",
      "target": "robotics_root_p6_t1_s1_d1"
    },
    {
      "source": "robotics_root_p6_t1_s1",
      "target": "robotics_root_p6_t1_s1_d2"
    },
    {
      "source": "robotics_root_p6_t1",
      "target": "robotics_root_p6_t1_s2"
    },
    {
      "source": "robotics_root_p6_t1_s2",
      "target": "robotics_root_p6_t1_s2_d1"
    },
    {
      "source": "robotics_root_p6_t1_s2",
      "target": "robotics_root_p6_t1_s2_d2"
    },
    {
      "source": "robotics_root_p6_t1",
      "target": "robotics_root_p6_t1_s3"
    },
    {
      "source": "robotics_root_p6_t1_s3",
      "target": "robotics_root_p6_t1_s3_d1"
    },
    {
      "source": "robotics_root_p6_t1_s3",
      "target": "robotics_root_p6_t1_s3_d2"
    },
    {
      "source": "robotics_root_p6_t1",
      "target": "robotics_root_p6_t1_s4"
    },
    {
      "source": "robotics_root_p6_t1_s4",
      "target": "robotics_root_p6_t1_s4_d1"
    },
    {
      "source": "robotics_root_p6_t1_s4",
      "target": "robotics_root_p6_t1_s4_d2"
    },
    {
      "source": "robotics_root_p6_t1",
      "target": "robotics_root_p6_t1_s5"
    },
    {
      "source": "robotics_root_p6_t1_s5",
      "target": "robotics_root_p6_t1_s5_d1"
    },
    {
      "source": "robotics_root_p6_t1_s5",
      "target": "robotics_root_p6_t1_s5_d2"
    },
    {
      "source": "robotics_root_p6",
      "target": "robotics_root_p6_t2"
    },
    {
      "source": "robotics_root_p6_t2",
      "target": "robotics_root_p6_t2_s1"
    },
    {
      "source": "robotics_root_p6_t2_s1",
      "target": "robotics_root_p6_t2_s1_d1"
    },
    {
      "source": "robotics_root_p6_t2_s1",
      "target": "robotics_root_p6_t2_s1_d2"
    },
    {
      "source": "robotics_root_p6_t2",
      "target": "robotics_root_p6_t2_s2"
    },
    {
      "source": "robotics_root_p6_t2_s2",
      "target": "robotics_root_p6_t2_s2_d1"
    },
    {
      "source": "robotics_root_p6_t2_s2",
      "target": "robotics_root_p6_t2_s2_d2"
    },
    {
      "source": "robotics_root_p6_t2",
      "target": "robotics_root_p6_t2_s3"
    },
    {
      "source": "robotics_root_p6_t2_s3",
      "target": "robotics_root_p6_t2_s3_d1"
    },
    {
      "source": "robotics_root_p6_t2_s3",
      "target": "robotics_root_p6_t2_s3_d2"
    },
    {
      "source": "robotics_root_p6_t2",
      "target": "robotics_root_p6_t2_s4"
    },
    {
      "source": "robotics_root_p6_t2_s4",
      "target": "robotics_root_p6_t2_s4_d1"
    },
    {
      "source": "robotics_root_p6_t2_s4",
      "target": "robotics_root_p6_t2_s4_d2"
    },
    {
      "source": "robotics_root_p6_t2",
      "target": "robotics_root_p6_t2_s5"
    },
    {
      "source": "robotics_root_p6_t2_s5",
      "target": "robotics_root_p6_t2_s5_d1"
    },
    {
      "source": "robotics_root_p6_t2_s5",
      "target": "robotics_root_p6_t2_s5_d2"
    },
    {
      "source": "robotics_root_p6",
      "target": "robotics_root_p6_t3"
    },
    {
      "source": "robotics_root_p6_t3",
      "target": "robotics_root_p6_t3_s1"
    },
    {
      "source": "robotics_root_p6_t3_s1",
      "target": "robotics_root_p6_t3_s1_d1"
    },
    {
      "source": "robotics_root_p6_t3_s1",
      "target": "robotics_root_p6_t3_s1_d2"
    },
    {
      "source": "robotics_root_p6_t3",
      "target": "robotics_root_p6_t3_s2"
    },
    {
      "source": "robotics_root_p6_t3_s2",
      "target": "robotics_root_p6_t3_s2_d1"
    },
    {
      "source": "robotics_root_p6_t3_s2",
      "target": "robotics_root_p6_t3_s2_d2"
    },
    {
      "source": "robotics_root_p6_t3",
      "target": "robotics_root_p6_t3_s3"
    },
    {
      "source": "robotics_root_p6_t3_s3",
      "target": "robotics_root_p6_t3_s3_d1"
    },
    {
      "source": "robotics_root_p6_t3_s3",
      "target": "robotics_root_p6_t3_s3_d2"
    },
    {
      "source": "robotics_root_p6_t3_s3",
      "target": "robotics_root_p6_t3_s3_d3"
    },
    {
      "source": "robotics_root_p6_t3",
      "target": "robotics_root_p6_t3_s4"
    },
    {
      "source": "robotics_root_p6_t3_s4",
      "target": "robotics_root_p6_t3_s4_d1"
    },
    {
      "source": "robotics_root_p6_t3_s4",
      "target": "robotics_root_p6_t3_s4_d2"
    },
    {
      "source": "robotics_root_p6_t3",
      "target": "robotics_root_p6_t3_s5"
    },
    {
      "source": "robotics_root_p6_t3_s5",
      "target": "robotics_root_p6_t3_s5_d1"
    },
    {
      "source": "robotics_root_p6_t3_s5",
      "target": "robotics_root_p6_t3_s5_d2"
    },
    {
      "source": "robotics_root_p6",
      "target": "robotics_root_p6_t4"
    },
    {
      "source": "robotics_root_p6_t4",
      "target": "robotics_root_p6_t4_s1"
    },
    {
      "source": "robotics_root_p6_t4_s1",
      "target": "robotics_root_p6_t4_s1_d1"
    },
    {
      "source": "robotics_root_p6_t4_s1",
      "target": "robotics_root_p6_t4_s1_d2"
    },
    {
      "source": "robotics_root_p6_t4",
      "target": "robotics_root_p6_t4_s2"
    },
    {
      "source": "robotics_root_p6_t4_s2",
      "target": "robotics_root_p6_t4_s2_d1"
    },
    {
      "source": "robotics_root_p6_t4_s2",
      "target": "robotics_root_p6_t4_s2_d2"
    },
    {
      "source": "robotics_root_p6_t4",
      "target": "robotics_root_p6_t4_s3"
    },
    {
      "source": "robotics_root_p6_t4_s3",
      "target": "robotics_root_p6_t4_s3_d1"
    },
    {
      "source": "robotics_root_p6_t4_s3",
      "target": "robotics_root_p6_t4_s3_d2"
    },
    {
      "source": "robotics_root_p6_t4",
      "target": "robotics_root_p6_t4_s4"
    },
    {
      "source": "robotics_root_p6_t4_s4",
      "target": "robotics_root_p6_t4_s4_d1"
    },
    {
      "source": "robotics_root_p6_t4_s4",
      "target": "robotics_root_p6_t4_s4_d2"
    },
    {
      "source": "robotics_root_p6_t4",
      "target": "robotics_root_p6_t4_s5"
    },
    {
      "source": "robotics_root_p6_t4_s5",
      "target": "robotics_root_p6_t4_s5_d1"
    },
    {
      "source": "robotics_root_p6_t4_s5",
      "target": "robotics_root_p6_t4_s5_d2"
    },
    {
      "source": "robotics_root_p6",
      "target": "robotics_root_p6_t5"
    },
    {
      "source": "robotics_root_p6_t5",
      "target": "robotics_root_p6_t5_s1"
    },
    {
      "source": "robotics_root_p6_t5_s1",
      "target": "robotics_root_p6_t5_s1_d1"
    },
    {
      "source": "robotics_root_p6_t5_s1",
      "target": "robotics_root_p6_t5_s1_d2"
    },
    {
      "source": "robotics_root_p6_t5",
      "target": "robotics_root_p6_t5_s2"
    },
    {
      "source": "robotics_root_p6_t5_s2",
      "target": "robotics_root_p6_t5_s2_d1"
    },
    {
      "source": "robotics_root_p6_t5_s2",
      "target": "robotics_root_p6_t5_s2_d2"
    },
    {
      "source": "robotics_root_p6_t5",
      "target": "robotics_root_p6_t5_s3"
    },
    {
      "source": "robotics_root_p6_t5_s3",
      "target": "robotics_root_p6_t5_s3_d1"
    },
    {
      "source": "robotics_root_p6_t5_s3",
      "target": "robotics_root_p6_t5_s3_d2"
    },
    {
      "source": "robotics_root_p6_t5",
      "target": "robotics_root_p6_t5_s4"
    },
    {
      "source": "robotics_root_p6_t5_s4",
      "target": "robotics_root_p6_t5_s4_d1"
    },
    {
      "source": "robotics_root_p6_t5_s4",
      "target": "robotics_root_p6_t5_s4_d2"
    },
    {
      "source": "robotics_root_p6_t5",
      "target": "robotics_root_p6_t5_s5"
    },
    {
      "source": "robotics_root_p6_t5_s5",
      "target": "robotics_root_p6_t5_s5_d1"
    },
    {
      "source": "robotics_root_p6_t5_s5",
      "target": "robotics_root_p6_t5_s5_d2"
    },
    {
      "source": "robotics_root_p6",
      "target": "robotics_root_p6_t6"
    },
    {
      "source": "robotics_root_p6_t6",
      "target": "robotics_root_p6_t6_s1"
    },
    {
      "source": "robotics_root_p6_t6_s1",
      "target": "robotics_root_p6_t6_s1_d1"
    },
    {
      "source": "robotics_root_p6_t6_s1",
      "target": "robotics_root_p6_t6_s1_d2"
    },
    {
      "source": "robotics_root_p6_t6",
      "target": "robotics_root_p6_t6_s2"
    },
    {
      "source": "robotics_root_p6_t6_s2",
      "target": "robotics_root_p6_t6_s2_d1"
    },
    {
      "source": "robotics_root_p6_t6_s2",
      "target": "robotics_root_p6_t6_s2_d2"
    },
    {
      "source": "robotics_root_p6_t6",
      "target": "robotics_root_p6_t6_s3"
    },
    {
      "source": "robotics_root_p6_t6_s3",
      "target": "robotics_root_p6_t6_s3_d1"
    },
    {
      "source": "robotics_root_p6_t6_s3",
      "target": "robotics_root_p6_t6_s3_d2"
    },
    {
      "source": "robotics_root_p6_t6",
      "target": "robotics_root_p6_t6_s4"
    },
    {
      "source": "robotics_root_p6_t6_s4",
      "target": "robotics_root_p6_t6_s4_d1"
    },
    {
      "source": "robotics_root_p6_t6_s4",
      "target": "robotics_root_p6_t6_s4_d2"
    },
    {
      "source": "robotics_root_p6_t6",
      "target": "robotics_root_p6_t6_s5"
    },
    {
      "source": "robotics_root_p6_t6_s5",
      "target": "robotics_root_p6_t6_s5_d1"
    },
    {
      "source": "robotics_root_p6_t6_s5",
      "target": "robotics_root_p6_t6_s5_d2"
    },
    {
      "source": "robotics_root",
      "target": "robotics_root_p7"
    },
    {
      "source": "robotics_root_p7",
      "target": "robotics_root_p7_t1"
    },
    {
      "source": "robotics_root_p7_t1",
      "target": "robotics_root_p7_t1_s1"
    },
    {
      "source": "robotics_root_p7_t1_s1",
      "target": "robotics_root_p7_t1_s1_d1"
    },
    {
      "source": "robotics_root_p7_t1_s1",
      "target": "robotics_root_p7_t1_s1_d2"
    },
    {
      "source": "robotics_root_p7_t1",
      "target": "robotics_root_p7_t1_s2"
    },
    {
      "source": "robotics_root_p7_t1_s2",
      "target": "robotics_root_p7_t1_s2_d1"
    },
    {
      "source": "robotics_root_p7_t1_s2",
      "target": "robotics_root_p7_t1_s2_d2"
    },
    {
      "source": "robotics_root_p7_t1",
      "target": "robotics_root_p7_t1_s3"
    },
    {
      "source": "robotics_root_p7_t1_s3",
      "target": "robotics_root_p7_t1_s3_d1"
    },
    {
      "source": "robotics_root_p7_t1_s3",
      "target": "robotics_root_p7_t1_s3_d2"
    },
    {
      "source": "robotics_root_p7_t1",
      "target": "robotics_root_p7_t1_s4"
    },
    {
      "source": "robotics_root_p7_t1_s4",
      "target": "robotics_root_p7_t1_s4_d1"
    },
    {
      "source": "robotics_root_p7_t1_s4",
      "target": "robotics_root_p7_t1_s4_d2"
    },
    {
      "source": "robotics_root_p7_t1",
      "target": "robotics_root_p7_t1_s5"
    },
    {
      "source": "robotics_root_p7_t1_s5",
      "target": "robotics_root_p7_t1_s5_d1"
    },
    {
      "source": "robotics_root_p7_t1_s5",
      "target": "robotics_root_p7_t1_s5_d2"
    },
    {
      "source": "robotics_root_p7",
      "target": "robotics_root_p7_t2"
    },
    {
      "source": "robotics_root_p7_t2",
      "target": "robotics_root_p7_t2_s1"
    },
    {
      "source": "robotics_root_p7_t2_s1",
      "target": "robotics_root_p7_t2_s1_d1"
    },
    {
      "source": "robotics_root_p7_t2_s1",
      "target": "robotics_root_p7_t2_s1_d2"
    },
    {
      "source": "robotics_root_p7_t2",
      "target": "robotics_root_p7_t2_s2"
    },
    {
      "source": "robotics_root_p7_t2_s2",
      "target": "robotics_root_p7_t2_s2_d1"
    },
    {
      "source": "robotics_root_p7_t2_s2",
      "target": "robotics_root_p7_t2_s2_d2"
    },
    {
      "source": "robotics_root_p7_t2",
      "target": "robotics_root_p7_t2_s3"
    },
    {
      "source": "robotics_root_p7_t2_s3",
      "target": "robotics_root_p7_t2_s3_d1"
    },
    {
      "source": "robotics_root_p7_t2_s3",
      "target": "robotics_root_p7_t2_s3_d2"
    },
    {
      "source": "robotics_root_p7_t2",
      "target": "robotics_root_p7_t2_s4"
    },
    {
      "source": "robotics_root_p7_t2_s4",
      "target": "robotics_root_p7_t2_s4_d1"
    },
    {
      "source": "robotics_root_p7_t2_s4",
      "target": "robotics_root_p7_t2_s4_d2"
    },
    {
      "source": "robotics_root_p7_t2",
      "target": "robotics_root_p7_t2_s5"
    },
    {
      "source": "robotics_root_p7_t2_s5",
      "target": "robotics_root_p7_t2_s5_d1"
    },
    {
      "source": "robotics_root_p7_t2_s5",
      "target": "robotics_root_p7_t2_s5_d2"
    },
    {
      "source": "robotics_root_p7",
      "target": "robotics_root_p7_t3"
    },
    {
      "source": "robotics_root_p7_t3",
      "target": "robotics_root_p7_t3_s1"
    },
    {
      "source": "robotics_root_p7_t3_s1",
      "target": "robotics_root_p7_t3_s1_d1"
    },
    {
      "source": "robotics_root_p7_t3_s1",
      "target": "robotics_root_p7_t3_s1_d2"
    },
    {
      "source": "robotics_root_p7_t3",
      "target": "robotics_root_p7_t3_s2"
    },
    {
      "source": "robotics_root_p7_t3_s2",
      "target": "robotics_root_p7_t3_s2_d1"
    },
    {
      "source": "robotics_root_p7_t3_s2",
      "target": "robotics_root_p7_t3_s2_d2"
    },
    {
      "source": "robotics_root_p7_t3",
      "target": "robotics_root_p7_t3_s3"
    },
    {
      "source": "robotics_root_p7_t3_s3",
      "target": "robotics_root_p7_t3_s3_d1"
    },
    {
      "source": "robotics_root_p7_t3_s3",
      "target": "robotics_root_p7_t3_s3_d2"
    },
    {
      "source": "robotics_root_p7_t3",
      "target": "robotics_root_p7_t3_s4"
    },
    {
      "source": "robotics_root_p7_t3_s4",
      "target": "robotics_root_p7_t3_s4_d1"
    },
    {
      "source": "robotics_root_p7_t3_s4",
      "target": "robotics_root_p7_t3_s4_d2"
    },
    {
      "source": "robotics_root_p7_t3",
      "target": "robotics_root_p7_t3_s5"
    },
    {
      "source": "robotics_root_p7_t3_s5",
      "target": "robotics_root_p7_t3_s5_d1"
    },
    {
      "source": "robotics_root_p7_t3_s5",
      "target": "robotics_root_p7_t3_s5_d2"
    },
    {
      "source": "robotics_root_p7",
      "target": "robotics_root_p7_t4"
    },
    {
      "source": "robotics_root_p7_t4",
      "target": "robotics_root_p7_t4_s1"
    },
    {
      "source": "robotics_root_p7_t4_s1",
      "target": "robotics_root_p7_t4_s1_d1"
    },
    {
      "source": "robotics_root_p7_t4_s1",
      "target": "robotics_root_p7_t4_s1_d2"
    },
    {
      "source": "robotics_root_p7_t4",
      "target": "robotics_root_p7_t4_s2"
    },
    {
      "source": "robotics_root_p7_t4_s2",
      "target": "robotics_root_p7_t4_s2_d1"
    },
    {
      "source": "robotics_root_p7_t4_s2",
      "target": "robotics_root_p7_t4_s2_d2"
    },
    {
      "source": "robotics_root_p7_t4",
      "target": "robotics_root_p7_t4_s3"
    },
    {
      "source": "robotics_root_p7_t4_s3",
      "target": "robotics_root_p7_t4_s3_d1"
    },
    {
      "source": "robotics_root_p7_t4_s3",
      "target": "robotics_root_p7_t4_s3_d2"
    },
    {
      "source": "robotics_root_p7_t4",
      "target": "robotics_root_p7_t4_s4"
    },
    {
      "source": "robotics_root_p7_t4_s4",
      "target": "robotics_root_p7_t4_s4_d1"
    },
    {
      "source": "robotics_root_p7_t4_s4",
      "target": "robotics_root_p7_t4_s4_d2"
    },
    {
      "source": "robotics_root_p7_t4",
      "target": "robotics_root_p7_t4_s5"
    },
    {
      "source": "robotics_root_p7_t4_s5",
      "target": "robotics_root_p7_t4_s5_d1"
    },
    {
      "source": "robotics_root_p7_t4_s5",
      "target": "robotics_root_p7_t4_s5_d2"
    },
    {
      "source": "robotics_root_p7",
      "target": "robotics_root_p7_t5"
    },
    {
      "source": "robotics_root_p7_t5",
      "target": "robotics_root_p7_t5_s1"
    },
    {
      "source": "robotics_root_p7_t5_s1",
      "target": "robotics_root_p7_t5_s1_d1"
    },
    {
      "source": "robotics_root_p7_t5_s1",
      "target": "robotics_root_p7_t5_s1_d2"
    },
    {
      "source": "robotics_root_p7_t5",
      "target": "robotics_root_p7_t5_s2"
    },
    {
      "source": "robotics_root_p7_t5_s2",
      "target": "robotics_root_p7_t5_s2_d1"
    },
    {
      "source": "robotics_root_p7_t5_s2",
      "target": "robotics_root_p7_t5_s2_d2"
    },
    {
      "source": "robotics_root_p7_t5",
      "target": "robotics_root_p7_t5_s3"
    },
    {
      "source": "robotics_root_p7_t5_s3",
      "target": "robotics_root_p7_t5_s3_d1"
    },
    {
      "source": "robotics_root_p7_t5_s3",
      "target": "robotics_root_p7_t5_s3_d2"
    },
    {
      "source": "robotics_root_p7_t5",
      "target": "robotics_root_p7_t5_s4"
    },
    {
      "source": "robotics_root_p7_t5_s4",
      "target": "robotics_root_p7_t5_s4_d1"
    },
    {
      "source": "robotics_root_p7_t5_s4",
      "target": "robotics_root_p7_t5_s4_d2"
    },
    {
      "source": "robotics_root_p7_t5",
      "target": "robotics_root_p7_t5_s5"
    },
    {
      "source": "robotics_root_p7_t5_s5",
      "target": "robotics_root_p7_t5_s5_d1"
    },
    {
      "source": "robotics_root_p7_t5_s5",
      "target": "robotics_root_p7_t5_s5_d2"
    },
    {
      "source": "robotics_root_p7",
      "target": "robotics_root_p7_t6"
    },
    {
      "source": "robotics_root_p7_t6",
      "target": "robotics_root_p7_t6_s1"
    },
    {
      "source": "robotics_root_p7_t6_s1",
      "target": "robotics_root_p7_t6_s1_d1"
    },
    {
      "source": "robotics_root_p7_t6_s1",
      "target": "robotics_root_p7_t6_s1_d2"
    },
    {
      "source": "robotics_root_p7_t6",
      "target": "robotics_root_p7_t6_s2"
    },
    {
      "source": "robotics_root_p7_t6_s2",
      "target": "robotics_root_p7_t6_s2_d1"
    },
    {
      "source": "robotics_root_p7_t6_s2",
      "target": "robotics_root_p7_t6_s2_d2"
    },
    {
      "source": "robotics_root_p7_t6",
      "target": "robotics_root_p7_t6_s3"
    },
    {
      "source": "robotics_root_p7_t6_s3",
      "target": "robotics_root_p7_t6_s3_d1"
    },
    {
      "source": "robotics_root_p7_t6_s3",
      "target": "robotics_root_p7_t6_s3_d2"
    },
    {
      "source": "robotics_root_p7_t6",
      "target": "robotics_root_p7_t6_s4"
    },
    {
      "source": "robotics_root_p7_t6_s4",
      "target": "robotics_root_p7_t6_s4_d1"
    },
    {
      "source": "robotics_root_p7_t6_s4",
      "target": "robotics_root_p7_t6_s4_d2"
    },
    {
      "source": "robotics_root_p7_t6",
      "target": "robotics_root_p7_t6_s5"
    },
    {
      "source": "robotics_root_p7_t6_s5",
      "target": "robotics_root_p7_t6_s5_d1"
    },
    {
      "source": "robotics_root_p7_t6_s5",
      "target": "robotics_root_p7_t6_s5_d2"
    },
    {
      "source": "robotics_root",
      "target": "robotics_root_p8"
    },
    {
      "source": "robotics_root_p8",
      "target": "robotics_root_p8_t1"
    },
    {
      "source": "robotics_root_p8_t1",
      "target": "robotics_root_p8_t1_s1"
    },
    {
      "source": "robotics_root_p8_t1_s1",
      "target": "robotics_root_p8_t1_s1_d1"
    },
    {
      "source": "robotics_root_p8_t1_s1",
      "target": "robotics_root_p8_t1_s1_d2"
    },
    {
      "source": "robotics_root_p8_t1",
      "target": "robotics_root_p8_t1_s2"
    },
    {
      "source": "robotics_root_p8_t1_s2",
      "target": "robotics_root_p8_t1_s2_d1"
    },
    {
      "source": "robotics_root_p8_t1_s2",
      "target": "robotics_root_p8_t1_s2_d2"
    },
    {
      "source": "robotics_root_p8_t1",
      "target": "robotics_root_p8_t1_s3"
    },
    {
      "source": "robotics_root_p8_t1_s3",
      "target": "robotics_root_p8_t1_s3_d1"
    },
    {
      "source": "robotics_root_p8_t1_s3",
      "target": "robotics_root_p8_t1_s3_d2"
    },
    {
      "source": "robotics_root_p8_t1",
      "target": "robotics_root_p8_t1_s4"
    },
    {
      "source": "robotics_root_p8_t1_s4",
      "target": "robotics_root_p8_t1_s4_d1"
    },
    {
      "source": "robotics_root_p8_t1_s4",
      "target": "robotics_root_p8_t1_s4_d2"
    },
    {
      "source": "robotics_root_p8_t1",
      "target": "robotics_root_p8_t1_s5"
    },
    {
      "source": "robotics_root_p8_t1_s5",
      "target": "robotics_root_p8_t1_s5_d1"
    },
    {
      "source": "robotics_root_p8_t1_s5",
      "target": "robotics_root_p8_t1_s5_d2"
    },
    {
      "source": "robotics_root_p8",
      "target": "robotics_root_p8_t2"
    },
    {
      "source": "robotics_root_p8_t2",
      "target": "robotics_root_p8_t2_s1"
    },
    {
      "source": "robotics_root_p8_t2_s1",
      "target": "robotics_root_p8_t2_s1_d1"
    },
    {
      "source": "robotics_root_p8_t2_s1",
      "target": "robotics_root_p8_t2_s1_d2"
    },
    {
      "source": "robotics_root_p8_t2",
      "target": "robotics_root_p8_t2_s2"
    },
    {
      "source": "robotics_root_p8_t2_s2",
      "target": "robotics_root_p8_t2_s2_d1"
    },
    {
      "source": "robotics_root_p8_t2_s2",
      "target": "robotics_root_p8_t2_s2_d2"
    },
    {
      "source": "robotics_root_p8_t2",
      "target": "robotics_root_p8_t2_s3"
    },
    {
      "source": "robotics_root_p8_t2_s3",
      "target": "robotics_root_p8_t2_s3_d1"
    },
    {
      "source": "robotics_root_p8_t2_s3",
      "target": "robotics_root_p8_t2_s3_d2"
    },
    {
      "source": "robotics_root_p8_t2",
      "target": "robotics_root_p8_t2_s4"
    },
    {
      "source": "robotics_root_p8_t2_s4",
      "target": "robotics_root_p8_t2_s4_d1"
    },
    {
      "source": "robotics_root_p8_t2_s4",
      "target": "robotics_root_p8_t2_s4_d2"
    },
    {
      "source": "robotics_root_p8_t2",
      "target": "robotics_root_p8_t2_s5"
    },
    {
      "source": "robotics_root_p8_t2_s5",
      "target": "robotics_root_p8_t2_s5_d1"
    },
    {
      "source": "robotics_root_p8_t2_s5",
      "target": "robotics_root_p8_t2_s5_d2"
    },
    {
      "source": "robotics_root_p8",
      "target": "robotics_root_p8_t3"
    },
    {
      "source": "robotics_root_p8_t3",
      "target": "robotics_root_p8_t3_s1"
    },
    {
      "source": "robotics_root_p8_t3_s1",
      "target": "robotics_root_p8_t3_s1_d1"
    },
    {
      "source": "robotics_root_p8_t3_s1",
      "target": "robotics_root_p8_t3_s1_d2"
    },
    {
      "source": "robotics_root_p8_t3",
      "target": "robotics_root_p8_t3_s2"
    },
    {
      "source": "robotics_root_p8_t3_s2",
      "target": "robotics_root_p8_t3_s2_d1"
    },
    {
      "source": "robotics_root_p8_t3_s2",
      "target": "robotics_root_p8_t3_s2_d2"
    },
    {
      "source": "robotics_root_p8_t3",
      "target": "robotics_root_p8_t3_s3"
    },
    {
      "source": "robotics_root_p8_t3_s3",
      "target": "robotics_root_p8_t3_s3_d1"
    },
    {
      "source": "robotics_root_p8_t3_s3",
      "target": "robotics_root_p8_t3_s3_d2"
    },
    {
      "source": "robotics_root_p8_t3",
      "target": "robotics_root_p8_t3_s4"
    },
    {
      "source": "robotics_root_p8_t3_s4",
      "target": "robotics_root_p8_t3_s4_d1"
    },
    {
      "source": "robotics_root_p8_t3_s4",
      "target": "robotics_root_p8_t3_s4_d2"
    },
    {
      "source": "robotics_root_p8_t3",
      "target": "robotics_root_p8_t3_s5"
    },
    {
      "source": "robotics_root_p8_t3_s5",
      "target": "robotics_root_p8_t3_s5_d1"
    },
    {
      "source": "robotics_root_p8_t3_s5",
      "target": "robotics_root_p8_t3_s5_d2"
    },
    {
      "source": "robotics_root_p8",
      "target": "robotics_root_p8_t4"
    },
    {
      "source": "robotics_root_p8_t4",
      "target": "robotics_root_p8_t4_s1"
    },
    {
      "source": "robotics_root_p8_t4_s1",
      "target": "robotics_root_p8_t4_s1_d1"
    },
    {
      "source": "robotics_root_p8_t4_s1",
      "target": "robotics_root_p8_t4_s1_d2"
    },
    {
      "source": "robotics_root_p8_t4",
      "target": "robotics_root_p8_t4_s2"
    },
    {
      "source": "robotics_root_p8_t4_s2",
      "target": "robotics_root_p8_t4_s2_d1"
    },
    {
      "source": "robotics_root_p8_t4_s2",
      "target": "robotics_root_p8_t4_s2_d2"
    },
    {
      "source": "robotics_root_p8_t4",
      "target": "robotics_root_p8_t4_s3"
    },
    {
      "source": "robotics_root_p8_t4_s3",
      "target": "robotics_root_p8_t4_s3_d1"
    },
    {
      "source": "robotics_root_p8_t4_s3",
      "target": "robotics_root_p8_t4_s3_d2"
    },
    {
      "source": "robotics_root_p8_t4",
      "target": "robotics_root_p8_t4_s4"
    },
    {
      "source": "robotics_root_p8_t4_s4",
      "target": "robotics_root_p8_t4_s4_d1"
    },
    {
      "source": "robotics_root_p8_t4_s4",
      "target": "robotics_root_p8_t4_s4_d2"
    },
    {
      "source": "robotics_root_p8_t4",
      "target": "robotics_root_p8_t4_s5"
    },
    {
      "source": "robotics_root_p8_t4_s5",
      "target": "robotics_root_p8_t4_s5_d1"
    },
    {
      "source": "robotics_root_p8_t4_s5",
      "target": "robotics_root_p8_t4_s5_d2"
    },
    {
      "source": "robotics_root_p8",
      "target": "robotics_root_p8_t5"
    },
    {
      "source": "robotics_root_p8_t5",
      "target": "robotics_root_p8_t5_s1"
    },
    {
      "source": "robotics_root_p8_t5_s1",
      "target": "robotics_root_p8_t5_s1_d1"
    },
    {
      "source": "robotics_root_p8_t5_s1",
      "target": "robotics_root_p8_t5_s1_d2"
    },
    {
      "source": "robotics_root_p8_t5",
      "target": "robotics_root_p8_t5_s2"
    },
    {
      "source": "robotics_root_p8_t5_s2",
      "target": "robotics_root_p8_t5_s2_d1"
    },
    {
      "source": "robotics_root_p8_t5_s2",
      "target": "robotics_root_p8_t5_s2_d2"
    },
    {
      "source": "robotics_root_p8_t5",
      "target": "robotics_root_p8_t5_s3"
    },
    {
      "source": "robotics_root_p8_t5_s3",
      "target": "robotics_root_p8_t5_s3_d1"
    },
    {
      "source": "robotics_root_p8_t5_s3",
      "target": "robotics_root_p8_t5_s3_d2"
    },
    {
      "source": "robotics_root_p8_t5",
      "target": "robotics_root_p8_t5_s4"
    },
    {
      "source": "robotics_root_p8_t5_s4",
      "target": "robotics_root_p8_t5_s4_d1"
    },
    {
      "source": "robotics_root_p8_t5_s4",
      "target": "robotics_root_p8_t5_s4_d2"
    },
    {
      "source": "robotics_root_p8_t5",
      "target": "robotics_root_p8_t5_s5"
    },
    {
      "source": "robotics_root_p8_t5_s5",
      "target": "robotics_root_p8_t5_s5_d1"
    },
    {
      "source": "robotics_root_p8_t5_s5",
      "target": "robotics_root_p8_t5_s5_d2"
    },
    {
      "source": "robotics_root_p8",
      "target": "robotics_root_p8_t6"
    },
    {
      "source": "robotics_root_p8_t6",
      "target": "robotics_root_p8_t6_s1"
    },
    {
      "source": "robotics_root_p8_t6_s1",
      "target": "robotics_root_p8_t6_s1_d1"
    },
    {
      "source": "robotics_root_p8_t6_s1",
      "target": "robotics_root_p8_t6_s1_d2"
    },
    {
      "source": "robotics_root_p8_t6",
      "target": "robotics_root_p8_t6_s2"
    },
    {
      "source": "robotics_root_p8_t6_s2",
      "target": "robotics_root_p8_t6_s2_d1"
    },
    {
      "source": "robotics_root_p8_t6_s2",
      "target": "robotics_root_p8_t6_s2_d2"
    },
    {
      "source": "robotics_root_p8_t6",
      "target": "robotics_root_p8_t6_s3"
    },
    {
      "source": "robotics_root_p8_t6_s3",
      "target": "robotics_root_p8_t6_s3_d1"
    },
    {
      "source": "robotics_root_p8_t6_s3",
      "target": "robotics_root_p8_t6_s3_d2"
    },
    {
      "source": "robotics_root_p8_t6",
      "target": "robotics_root_p8_t6_s4"
    },
    {
      "source": "robotics_root_p8_t6_s4",
      "target": "robotics_root_p8_t6_s4_d1"
    },
    {
      "source": "robotics_root_p8_t6_s4",
      "target": "robotics_root_p8_t6_s4_d2"
    },
    {
      "source": "robotics_root_p8_t6",
      "target": "robotics_root_p8_t6_s5"
    },
    {
      "source": "robotics_root_p8_t6_s5",
      "target": "robotics_root_p8_t6_s5_d1"
    },
    {
      "source": "robotics_root_p8_t6_s5",
      "target": "robotics_root_p8_t6_s5_d2"
    }
  ]
};
