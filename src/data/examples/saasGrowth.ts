import { MindMapData } from "../../services/llmService";

export const SAAS_GROWTH_EXAMPLE: MindMapData = {
  "nodes": [
    {
      "id": "saas_root",
      "label": "B2B SaaS Financial Engineering & Growth Playbook",
      "description": "Rigorous first-principles blueprint of SaaS unit economics (ARR, NRR, LTV/CAC), Product-Led Growth (PLG) conversion funnels, usage pricing meters, sales velocity formulas, churn prediction, and Rule of 40 capital allocation.",
      "type": "topic"
    },
    {
      "id": "saas_root_p1",
      "label": "Financial Metrics & Cohort Unit Economics",
      "description": "Mathematical formulas governing SaaS revenue recognition, retention rates, customer lifetime value, and payback periods.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t1",
      "label": "ARR & MRR Revenue Deconstruction",
      "description": "Decomposing recurring revenue into expansion, contraction, churn, and new customer components.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t1_s1",
      "label": "ARR Formula ARR = Beginning ARR + New ARR + Expansion ARR - Contraction ARR - Churn ARR",
      "description": "Tracking Net New ARR additions across monthly and annual accounting periods.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t1_s1_d1",
      "label": "Contracted ARR vs Recognized Revenue",
      "description": "Distinguishing booked committed contracts (CARR) from GAAP recognized revenue.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t1_s1_d2",
      "label": "Monthly Recurring Revenue (MRR = ARR / 12)",
      "description": "Normalizing multi-year contracts into standardized monthly recurring revenue units.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t1_s2",
      "label": "Net Revenue Retention (NRR / NDR)",
      "description": "Percentage of recurring revenue retained from existing customers over a 12-month period.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t1_s2_d1",
      "label": "NRR Formula NRR = ((Beginning ARR + Expansion - Contraction - Churn) / Beginning ARR) * 100",
      "description": "Evaluating growth generated strictly from existing customer cohorts without new customer acquisitions.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t1_s2_d2",
      "label": "120%+ NRR Enterprise Benchmark",
      "description": "Targeting 120%+ NRR to double revenue every 3.5 years purely through existing account expansion.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t1_s3",
      "label": "Gross Revenue Retention (GRR / GDR)",
      "description": "Percentage of recurring revenue retained excluding expansion revenue additions.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t1_s3_d1",
      "label": "GRR Formula GRR = ((Beginning ARR - Contraction - Churn) / Beginning ARR) * 100",
      "description": "Measuring fundamental product retention health capped at a maximum of 100%.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t1_s3_d2",
      "label": "90%+ Enterprise GRR Benchmark",
      "description": "Targeting 90%+ GRR to prevent cohort revenue erosion over time.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t1_s4",
      "label": "Average Revenue Per User / Account (ARPU / ARPA)",
      "description": "Dividing total MRR by total active paying account count.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t1_s4_d1",
      "label": "ARPA Segmentation across ACV Bands",
      "description": "Segmenting accounts into SMB (<$10k ACV), Mid-Market ($10k-$50k), and Enterprise ($100k+).",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t1_s4_d2",
      "label": "ARPA Expansion Vector Analysis",
      "description": "Tracking ARPA growth as customers add seats, usage volume, or feature modules.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t1_s5",
      "label": "Deferred Revenue & Cash Flow Dynamics",
      "description": "Managing cash collections from upfront annual prepaid contracts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t1_s5_d1",
      "label": "Upfront Annual Billing Cash Advantage",
      "description": "Collecting 100% contract cash on Day 1 to fund growth without dilutive capital.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t1_s5_d2",
      "label": "Un-earned Deferred Revenue Liability Balance",
      "description": "Recognizing 1/12th of annual prepaid contracts per month on balance sheet liability accounts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t2",
      "label": "Customer Acquisition Cost (CAC) & Payback Period",
      "description": "Quantifying capital efficiency of sales and marketing investments.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t2_s1",
      "label": "Fully Burdened CAC Calculation",
      "description": "Dividing total sales and marketing expenses by new customer acquisitions.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t2_s1_d1",
      "label": "CAC Formula CAC = (Sales Salaries + Marketing Spend + Ops Overhead + Tools) / New Customers",
      "description": "Including all fully burdened headcount salaries, commissions, software licenses, and ad spend.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t2_s1_d2",
      "label": "Blended vs Segmented CAC",
      "description": "Calculating distinct CAC metrics for inbound self-serve PLG vs outbound enterprise sales.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t2_s2",
      "label": "CAC Payback Period (Months to Recover CAC)",
      "description": "Number of months required for gross profit from a customer to equal their acquisition cost.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t2_s2_d1",
      "label": "Payback Formula = CAC / (ARPA * Gross Margin %)",
      "description": "Factoring gross margin percentage into payback period math.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t2_s2_d2",
      "label": "< 12 Month SMB / < 18 Month Enterprise Benchmarks",
      "description": "Targeting sub-12-month payback for self-serve and sub-18-month for enterprise motions.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t2_s3",
      "label": "Sales Magic Number (Capital Efficiency Metric)",
      "description": "Measuring net new ARR generated per dollar of sales and marketing spend.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t2_s3_d1",
      "label": "Magic Number Formula MN = (Q_t Net New ARR * 4) / Q_{t-1} S&M Spend",
      "description": "Evaluating quarterly sales efficiency using lagged previous quarter sales spend.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t2_s3_d2",
      "label": "Magic Number Benchmark Scale (> 0.75 Ramp Spend, < 0.5 Pause)",
      "description": "Accelerating growth investments when Magic Number exceeds 0.75.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t2_s4",
      "label": "Gross Margin Impact on SaaS Payback",
      "description": "Factoring cost of goods sold (COGS) into unit economics evaluations.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t2_s4_d1",
      "label": "SaaS COGS Components (AWS Hosting, Customer Support, Third-Party APIs)",
      "description": "Including cloud infrastructure, support staff, and third-party software in COGS.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t2_s4_d2",
      "label": "80%+ Gross Margin Target",
      "description": "Maintaining 80%+ gross margins to maximize net cash available for sales and product R&D.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t2_s5",
      "label": "CAC Ratio & Marginal Cost Scaling",
      "description": "Evaluating marginal cost increases incurred when acquiring late-stage TAM prospects.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t2_s5_d1",
      "label": "Marginal CAC Inflation Curve",
      "description": "Tracking CAC increases as cheap organic channels become saturated.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t2_s5_d2",
      "label": "Channel-Specific CAC Optimization",
      "description": "Allocating marketing spend across channels to minimize overall blended CAC.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t3",
      "label": "Customer Lifetime Value (LTV / CLV)",
      "description": "Estimating total net profit a single customer generates over their entire tenure.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t3_s1",
      "label": "LTV Formula LTV = (ARPA * Gross Margin %) / Churn Rate",
      "description": "Calculating expected lifetime net gross profit per account.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t3_s1_d1",
      "label": "Linear vs Exponential Churn Rate Assumptions",
      "description": "Applying constant churn rates vs adjusting for declining churn probability in mature cohorts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t3_s1_d2",
      "label": "Incorporating NRR Expansion Rates into LTV",
      "description": "Modifying LTV formulas to account for compound annual expansion growth.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t3_s2",
      "label": "LTV:CAC Efficiency Ratio (Target >= 3.0x)",
      "description": "Ratio comparing customer lifetime value to acquisition cost.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t3_s2_d1",
      "label": "LTV:CAC < 3.0x (Underperforming Capital Allocation)",
      "description": "Indicating inefficient customer acquisition or excessive churn.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t3_s2_d2",
      "label": "LTV:CAC > 5.0x (Under-Investing in Growth)",
      "description": "Indicating under-investment in sales and marketing channels.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t3_s3",
      "label": "Discounted Cash Flow (DCF) LTV Calculation",
      "description": "Discounting future cohort cash flows using Weighted Average Cost of Capital (WACC).",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t3_s3_d1",
      "label": "Formula LTV_dcf = sum_{t=1}^T (Margin_t / (1 + r)^t)",
      "description": "Applying discount rate r to present-value future multi-year customer cash flows.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t3_s3_d2",
      "label": "Capping Maximum Tenure Horizons (3-5 Years)",
      "description": "Capping maximum LTV projection horizons at 5 years to manage long-term uncertainty.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t3_s4",
      "label": "Cohort Survival Curves (Kaplan-Meier Estimator)",
      "description": "Plotting percentage of active accounts remaining over monthly tenure milestones.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t3_s4_d1",
      "label": "Asymptotic Retention Flattening (Product-Market Fit Signal)",
      "description": "Identifying true PMF when cohort retention curves flatten into parallel horizontal lines.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t3_s4_d2",
      "label": "Early Tenure Churn Cliff (Days 0-90)",
      "description": "Analyzing onboarding drop-offs to improve initial user activation.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t3_s5",
      "label": "LTV Sensitivity Analysis Matrix",
      "description": "Evaluating LTV variations under changing churn, ARPA, and gross margin conditions.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t3_s5_d1",
      "label": "Churn Reduction Leverage Advantage",
      "description": "Proving that a 1% reduction in churn increases LTV more than a 1% increase in ARPA.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t3_s5_d2",
      "label": "Stress-Testing LTV Under Macroeconomic Shifts",
      "description": "Simulating cohort LTV degradation during economic downturns.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t4",
      "label": "SaaS Capital Allocation & Rule of 40",
      "description": "Balancing revenue growth rates against operating profitability margins.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t4_s1",
      "label": "Rule of 40 Formula (Year-over-Year Growth % + EBITDA Margin % >= 40%)",
      "description": "Benchmark evaluating combined growth and profitability health of SaaS businesses.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t4_s1_d1",
      "label": "Growth-Focused Trajectory (60% YoY Growth + (-20%) Margin = 40%)",
      "description": "Validating hyper-growth companies burning capital efficiently.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t4_s1_d2",
      "label": "Profitability-Focused Trajectory (15% YoY Growth + 25% Margin = 40%)",
      "description": "Validating mature SaaS companies generating strong positive cash flows.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t4_s2",
      "label": "Burn Multiple (Net Burn / Net New ARR)",
      "description": "Measuring capital burned to generate each dollar of new ARR.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t4_s2_d1",
      "label": "Burn Multiple Benchmark Scale (< 1.0x Excellent, > 2.0x Poor)",
      "description": "Evaluating capital efficiency across seed through IPO stages.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t4_s2_d2",
      "label": "Net Cash Outflow Tracking",
      "description": "Monitoring monthly net cash burn relative to ARR pipeline growth.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t4_s3",
      "label": "Valuation Multiples (EV / NTM Revenue)",
      "description": "Enterprise value multiples applied to Next Twelve Months (NTM) revenue projections.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t4_s3_d1",
      "label": "Public SaaS Multiple Drivers (NRR, Growth Rate, Gross Margin)",
      "description": "Correlating valuation multiples directly to NRR and Rule of 40 scores.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t4_s3_d2",
      "label": "Private Market Valuation Benchmarking",
      "description": "Setting valuation expectations across Series A through Series C funding rounds.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t4_s4",
      "label": "R&D vs S&M Expense Ratio Allocation",
      "description": "Balancing engineering product investments against sales acquisition channels.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t4_s4_d1",
      "label": "Product-Driven Allocation (R&D > 30% of Revenue)",
      "description": "Allocating high R&D spend to maintain technological differentiation in PLG motions.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t4_s4_d2",
      "label": "Sales-Driven Allocation (S&M > 40% of Revenue)",
      "description": "Allocating high S&M spend to capture enterprise market share in SLG motions.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t4_s5",
      "label": "Free Cash Flow (FCF) Conversion Rate",
      "description": "Percentage of EBITDA converted into unlevered Free Cash Flow.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t4_s5_d1",
      "label": "Working Capital Inflow Boosts",
      "description": "Leveraging upfront annual collections to generate positive working capital.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t4_s5_d2",
      "label": "Capital Expenditure (CapEx) Efficiency",
      "description": "Maintaining asset-light cloud architectures to maximize FCF conversion.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t5",
      "label": "Financial Metrics & Cohort Unit Economics Topic 5",
      "description": "Detailed first-principles mechanics for Financial Metrics & Cohort Unit Economics topic 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t5_s1",
      "label": "Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Financial Metrics & Cohort Unit Economics Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t5_s1_d1",
      "label": "Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t5_s1_d2",
      "label": "Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t5_s2",
      "label": "Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Financial Metrics & Cohort Unit Economics Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t5_s2_d1",
      "label": "Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t5_s2_d2",
      "label": "Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t5_s3",
      "label": "Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Financial Metrics & Cohort Unit Economics Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t5_s3_d1",
      "label": "Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t5_s3_d2",
      "label": "Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t5_s4",
      "label": "Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Financial Metrics & Cohort Unit Economics Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t5_s4_d1",
      "label": "Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t5_s4_d2",
      "label": "Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t5_s5",
      "label": "Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Financial Metrics & Cohort Unit Economics Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t5_s5_d1",
      "label": "Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t5_s5_d2",
      "label": "Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Financial Metrics & Cohort Unit Economics Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t6",
      "label": "Financial Metrics & Cohort Unit Economics Topic 6",
      "description": "Detailed first-principles mechanics for Financial Metrics & Cohort Unit Economics topic 6.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t6_s1",
      "label": "Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Financial Metrics & Cohort Unit Economics Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t6_s1_d1",
      "label": "Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t6_s1_d2",
      "label": "Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t6_s2",
      "label": "Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Financial Metrics & Cohort Unit Economics Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t6_s2_d1",
      "label": "Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t6_s2_d2",
      "label": "Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t6_s3",
      "label": "Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Financial Metrics & Cohort Unit Economics Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t6_s3_d1",
      "label": "Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t6_s3_d2",
      "label": "Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t6_s4",
      "label": "Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Financial Metrics & Cohort Unit Economics Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t6_s4_d1",
      "label": "Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t6_s4_d2",
      "label": "Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t6_s5",
      "label": "Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Financial Metrics & Cohort Unit Economics Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t6_s5_d1",
      "label": "Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p1_t6_s5_d2",
      "label": "Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Financial Metrics & Cohort Unit Economics Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2",
      "label": "Product-Led Growth (PLG) & Conversion Funnels",
      "description": "Self-serve freemium models, Product Qualified Leads (PQL), activation milestones, and virality K-factors.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t1",
      "label": "Freemium vs Reverse Trial Mechanics",
      "description": "Structuring self-serve acquisition motions to maximize user onboarding volume.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t1_s1",
      "label": "Freemium Tier Model (Indefinite Free Base Feature Set)",
      "description": "Offering permanent free tier with restricted features or usage caps.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t1_s1_d1",
      "label": "High Top-of-Funnel Acquisition Volume",
      "description": "Eliminating credit card friction to maximize user signup velocity.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t1_s1_d2",
      "label": "2-5% Free-to-Paid Conversion Benchmark",
      "description": "Accepting low conversion rates compensated by massive top-of-funnel reach.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t1_s2",
      "label": "Reverse Trial Model (14-Day Full Enterprise Access -> Free Tier)",
      "description": "Granting full premium features for 14 days before downgrading un-paid accounts to free tiers.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t1_s2_d1",
      "label": "Immediate Premium Feature Exposure",
      "description": "Hooking users on advanced enterprise features during initial onboarding.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t1_s2_d2",
      "label": "8-15% Free-to-Paid Conversion Benchmark",
      "description": "Achieving higher conversion rates as users resist feature loss.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t1_s3",
      "label": "Feature Gating vs Usage Cap Triggers",
      "description": "Designing paywall triggers that nudge users to upgrade.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t1_s3_d1",
      "label": "Feature Gating (SSO, Audit Logs, Custom Roles)",
      "description": "Locking enterprise security and governance features behind paid tiers.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t1_s3_d2",
      "label": "Usage Cap Gating (Storage, API Calls, Team Members)",
      "description": "Upgrading users automatically as their team or workload grows.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t1_s4",
      "label": "Frictionless Self-Serve Onboarding Signup",
      "description": "Minimizing signup form fields to maximize account creation conversion.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t1_s4_d1",
      "label": "Social OAuth Integration (Google / GitHub SSO)",
      "description": "Enabling single-click account creation without password creation.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t1_s4_d2",
      "label": "Zero Credit Card Required Initial Signups",
      "description": "Deferring payment details until value is experienced.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t1_s5",
      "label": "Self-Serve Payment Checkout Workflows (Stripe)",
      "description": "Integrating credit card and invoicing checkout flows into web applications.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t1_s5_d1",
      "label": "In-App Subscription Upgrades",
      "description": "Upgrading plans instantly within application dashboards.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t1_s5_d2",
      "label": "Automated Sales Tax & VAT Handling (Stripe Tax)",
      "description": "Managing global tax compliance automatically during self-serve checkout.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t2",
      "label": "Product Qualified Leads (PQL) & Scoring",
      "description": "Identifying free users exhibiting high intent and usage signals matching buying criteria.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t2_s1",
      "label": "PQL vs MQL Definition Comparison",
      "description": "Comparing product usage behavior (PQL) against static website content downloads (MQL).",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t2_s1_d1",
      "label": "Product Behavior Validity (PQL)",
      "description": "Scoring users based on real product usage milestones rather than ebook downloads.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t2_s1_d2",
      "label": "Higher Sales Conversion Rates (25-30% PQL-to-Win)",
      "description": "Converting PQLs to paid deals at 3x higher rates than traditional MQLs.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t2_s2",
      "label": "PQL Scoring Algorithm Components",
      "description": "Combining user demographic ICP data with real-time product behavioral telemetry.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t2_s2_d1",
      "label": "Account Fit Score (Domain, Employee Count, Tech Stack)",
      "description": "Filtering accounts matching target Ideal Customer Profiles (ICP).",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t2_s2_d2",
      "label": "Product Usage Velocity Score (Active Days, Feature Usage, Invites)",
      "description": "Scoring rapid increases in team member invitations and feature usage frequency.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t2_s3",
      "label": "Product Activation \"Aha! Moment\" Thresholds",
      "description": "Identifying critical usage milestones strongly correlated with long-term retention.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t2_s3_d1",
      "label": "Slack Activation Rule (2,000 Messages Sent)",
      "description": "Discovering that teams sending 2,000 messages retain indefinitely at 93%+.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t2_s3_d2",
      "label": "Dropbox Activation Rule (1 File Added to 1 Device)",
      "description": "Optimizing onboarding paths to drive users toward single critical value steps.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t2_s4",
      "label": "Product-Assisted Sales (PAS) Routing",
      "description": "Routing high-scoring PQL accounts automatically to Enterprise SDRs.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t2_s4_d1",
      "label": "Real-Time Slack / CRM PQL Alerts",
      "description": "Notifying sales reps instantly when free accounts breach PQL score thresholds.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t2_s4_d2",
      "label": "Warm Sales Outreach Context",
      "description": "Equipping reps with exact product usage data before outreach calls.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t2_s5",
      "label": "In-App Product Nudges & Upgrade Modals",
      "description": "Displaying contextual in-app messaging to nudge users toward upgrade milestones.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t2_s5_d1",
      "label": "Contextual Feature Upgrade Prompts",
      "description": "Triggering upgrade modals when users click gated feature buttons.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t2_s5_d2",
      "label": "Usage Limit Threshold Warnings (80% Capacity)",
      "description": "Alerting account admins as they approach plan usage limits.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t3",
      "label": "Activation Milestone Engineering",
      "description": "Designing user onboarding flows to guide new signups to core value experiences in minimum time.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t3_s1",
      "label": "Time-to-Value (TTV) Minimization Strategy",
      "description": "Measuring time elapsed between initial account signup and experiencing first core product value.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t3_s1_d1",
      "label": "Sub-5-Minute TTV Targets",
      "description": "Streamlining onboarding tasks to deliver value within first user sessions.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t3_s1_d2",
      "label": "Eliminating Un-Necessary Setup Steps",
      "description": "Deferring complex workspace configurations until after initial value demonstration.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t3_s2",
      "label": "Interactive Guided Product Walkthroughs",
      "description": "Utilizing step-by-step tooltips and checklist widgets to guide user actions.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t3_s2_d1",
      "label": "Onboarding Checklist Progress Bars",
      "description": "Gamifying setup tasks using visual progress indicators.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t3_s2_d2",
      "label": "Contextual Tooltip Highlight Tours",
      "description": "Guiding users to perform key activation actions step-by-step.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t3_s3",
      "label": "Sample Data & Pre-Populated Templates",
      "description": "Providing instant sample workspaces so users avoid empty-state screens.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t3_s3_d1",
      "label": "Pre-Populated Demo Projects",
      "description": "Filling dashboard views with interactive sample data.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t3_s3_d2",
      "label": "One-Click Industry Templates",
      "description": "Allowing users to instantiate pre-built workflows tailored to their role.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t3_s4",
      "label": "Dormant User Re-Engagement Email Sequences",
      "description": "Automated lifecycle emails triggering when new signups stall during onboarding.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t3_s4_d1",
      "label": "Behavioral Triggered Lifecycle Emails",
      "description": "Sending targeted emails offering assistance when users stall at specific setup steps.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t3_s4_d2",
      "label": "Case Study Feature Showcases",
      "description": "Highlighting successful customer workflows to inspire un-engaged users.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t3_s5",
      "label": "Product Friction Audit & Funnel Drop-off Analysis",
      "description": "Analyzing user telemetry to pinpoint exact onboarding screens causing churn.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t3_s5_d1",
      "label": "Step-by-Step Funnel Analytics (Mixpanel / Amplitude)",
      "description": "Tracking conversion rates between signup, invitation, project creation, and activation.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t3_s5_d2",
      "label": "Session Recording Friction Audits (FullStory)",
      "description": "Watching user rage-clicks to fix confusing UI elements.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t4",
      "label": "Virality Mechanics & K-Factor Math",
      "description": "Engineering intrinsic product loops that turn active users into new user acquisition channels.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t4_s1",
      "label": "Virality K-Factor Formula K = i * c",
      "description": "Calculating viral growth coefficient where i = invites sent per user and c = conversion rate per invite.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t4_s1_d1",
      "label": "K > 1.0 Exponential Viral Growth Bound",
      "description": "Achieving self-sustaining organic growth when each user acquires > 1 net new user.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t4_s1_d2",
      "label": "Viral Cycle Time Minimization",
      "description": "Shortening time elapsed for users to send invites to accelerate viral growth velocity.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t4_s2",
      "label": "Intrinsic Network Effects & Multi-User Loops",
      "description": "Products whose core utility increases when collaborating with external colleagues.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t4_s2_d1",
      "label": "Collaboration Invites (Doc Sharing / Figma Links)",
      "description": "Requiring external recipients to create free accounts to view or edit shared assets.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t4_s2_d2",
      "label": "Cross-Company Interoperability (Slack Connect / Zoom Links)",
      "description": "Exposing non-users to product experiences through daily business operations.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t4_s3",
      "label": "Two-Sided Referral Incentives (Give $20 / Get $20)",
      "description": "Rewarding existing users and new signups with account credits for successful referrals.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t4_s3_d1",
      "label": "Double-Sided Value Exchange",
      "description": "Incentivizing referrers and referees simultaneously to maximize invite acceptance.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t4_s3_d2",
      "label": "Fraudulent Referral Prevention Systems",
      "description": "Verifying domain validity and activity before issuing referral credits.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t4_s4",
      "label": "Powered-by Brand Attribution Widgets",
      "description": "Exposing product branding on free-tier customer outputs (e.g. Typeform footers, Intercom widgets).",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t4_s4_d1",
      "label": "Free User Marketing Distribution Channel",
      "description": "Converting customer-facing outputs into passive acquisition channels.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t4_s4_d2",
      "label": "White-Label Branding Paid Tier Upsell",
      "description": "Charging premium fees to remove \"Powered by\" brand footers.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t4_s5",
      "label": "Public Artifact Sharing & SEO Content Loops",
      "description": "Allowing users to publish public documents indexed by search engines (e.g. Notion public pages).",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t4_s5_d1",
      "label": "User-Generated Content SEO Engine",
      "description": "Indexing millions of user-created public templates and documents.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t4_s5_d2",
      "label": "High-Intent Organic Search Traffic Acquisition",
      "description": "Converting organic search readers into new registered users.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t5",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 5",
      "description": "Detailed first-principles mechanics for Product-Led Growth (PLG) & Conversion Funnels topic 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t5_s1",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Product-Led Growth (PLG) & Conversion Funnels Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t5_s1_d1",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t5_s1_d2",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t5_s2",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Product-Led Growth (PLG) & Conversion Funnels Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t5_s2_d1",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t5_s2_d2",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t5_s3",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Product-Led Growth (PLG) & Conversion Funnels Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t5_s3_d1",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t5_s3_d2",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t5_s4",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Product-Led Growth (PLG) & Conversion Funnels Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t5_s4_d1",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t5_s4_d2",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t5_s5",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Product-Led Growth (PLG) & Conversion Funnels Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t5_s5_d1",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t5_s5_d2",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Product-Led Growth (PLG) & Conversion Funnels Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t6",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 6",
      "description": "Detailed first-principles mechanics for Product-Led Growth (PLG) & Conversion Funnels topic 6.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t6_s1",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Product-Led Growth (PLG) & Conversion Funnels Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t6_s1_d1",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t6_s1_d2",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t6_s2",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Product-Led Growth (PLG) & Conversion Funnels Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t6_s2_d1",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t6_s2_d2",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t6_s3",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Product-Led Growth (PLG) & Conversion Funnels Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t6_s3_d1",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t6_s3_d2",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t6_s4",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Product-Led Growth (PLG) & Conversion Funnels Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t6_s4_d1",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t6_s4_d2",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t6_s5",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Product-Led Growth (PLG) & Conversion Funnels Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t6_s5_d1",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p2_t6_s5_d2",
      "label": "Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Product-Led Growth (PLG) & Conversion Funnels Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3",
      "label": "Pricing Architecture & Value Metrics",
      "description": "Usage-based metering, feature gating tiers, seat price discrimination, and volume discount curves.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t1",
      "label": "Value Metric Selection Framework",
      "description": "Identifying unit metrics that scale directly with customer perceived value and success.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t1_s1",
      "label": "Value Metric Criteria (Scalable, Predictable, Understandable)",
      "description": "Choosing pricing metrics that grow naturally as customer businesses expand.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t1_s1_d1",
      "label": "Alignment with Customer ROI Growth",
      "description": "Ensuring customers pay more only when receiving measurably more business value.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t1_s1_d2",
      "label": "Predictability & Budget Shock Avoidance",
      "description": "Providing clear usage dashboards so customers can forecast monthly bills.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t1_s2",
      "label": "Per-Seat Pricing Model Limitations",
      "description": "Challenges of per-seat models in automation and AI-driven products.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t1_s2_d1",
      "label": "Account Sharing Behavior Penalties",
      "description": "Incentivizing teams to share login credentials to reduce costs.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t1_s2_d2",
      "label": "AI Automation Disincentive (Fewer Seats Needed)",
      "description": "Penalizing software vendors whose AI products reduce headcount requirements.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t1_s3",
      "label": "Usage-Based Value Metrics (API Calls, Storage, Compute)",
      "description": "Charging based on quantitative consumption metrics (e.g. Twilio per-SMS, Snowflake per-credit).",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t1_s3_d1",
      "label": "Pure Pay-As-You-Go Consumption",
      "description": "Eliminating upfront commitment barriers, allowing users to start for $1/month.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t1_s3_d2",
      "label": "Uncapped Account Expansion Potential",
      "description": "Scaling account revenue into millions per year as customer workloads grow.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t1_s4",
      "label": "Hybrid Pricing Architecture (Base Platform + Usage)",
      "description": "Combining fixed annual platform fees with variable usage consumption overages.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t1_s4_d1",
      "label": "Baseline Recurring Revenue Stability",
      "description": "Securing predictable ARR baselines through recurring platform subscription fees.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t1_s4_d2",
      "label": "Expansion Upside via Consumption Overage Meters",
      "description": "Capturing usage expansion revenue on top of base subscriptions.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t1_s5",
      "label": "Active User Pricing (Slack Fair-Billing Policy)",
      "description": "Charging only for accounts actively logging in during billing cycles.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t1_s5_d1",
      "label": "Automatic In-Active Account Prorated Credits",
      "description": "Refunding seats automatically if users become inactive.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t1_s5_d2",
      "label": "Trust-Building Sales Advantage",
      "description": "Eliminating customer fear of paying for unused software licenses.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t2",
      "label": "Tiered Feature Gating Architecture",
      "description": "Segmenting product capabilities into Starter, Pro, and Enterprise packaging tiers.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t2_s1",
      "label": "Good-Better-Best Packaging Strategy",
      "description": "Structuring 3 distinct pricing tiers targeted at different buyer personas.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t2_s1_d1",
      "label": "Starter Tier (Individual / Small Teams)",
      "description": "Providing core features needed for basic single-user productivity.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t2_s1_d2",
      "label": "Pro Tier (Growing Teams / SMB)",
      "description": "Adding team collaboration, integrations, and advanced analytics.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t2_s1_d3",
      "label": "Enterprise Tier (Large Corporations)",
      "description": "Adding SSO, Audit Logs, Custom SLA, SAML, and dedicated CSM support.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t2_s2",
      "label": "Enterprise Feature Tax (SSO & SAML Gating)",
      "description": "Locking single sign-on (SSO) and security features behind top enterprise tiers.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t2_s2_d1",
      "label": "SSO Wall Index Alignment",
      "description": "Charging 2-3x price premiums for accounts requiring Okta/SAML integration.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t2_s2_d2",
      "label": "Procurement Security Requirement Exploitation",
      "description": "Forcing IT procurement teams to upgrade to enterprise plans.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t2_s3",
      "label": "Custom Roles & Granular RBAC Gating",
      "description": "Restricting custom role creation and fine-grained permissions to high-tier plans.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t2_s3_d1",
      "label": "Compliance & Governance Tier Escalation",
      "description": "Driving mid-market accounts to upgrade as compliance audits demand custom roles.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t2_s3_d2",
      "label": "Audit Trail & Event Log History Retention",
      "description": "Charging extra for 1-year vs 30-day activity log retention.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t2_s4",
      "label": "Add-On Modules & Marketplace Monitization",
      "description": "Selling specialized optional modules separately from core platform tiers.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t2_s4_d1",
      "label": "Modular Add-On Products (Advanced Security / Premium AI)",
      "description": "Unbundling high-cost features into optional add-on purchases.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t2_s4_d2",
      "label": "Marketplace Third-Party Developer Commission (15-30%)",
      "description": "Taking revenue cuts on third-party integrations sold in app stores.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t2_s5",
      "label": "Grandfathering & Legacy Price Migration Strategies",
      "description": "Updating pricing tiers without triggering mass churn from existing customers.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t2_s5_d1",
      "label": "Legacy Price Grandfathering Safeguards",
      "description": "Locking existing customers into legacy pricing for 12-24 months.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t2_s5_d2",
      "label": "Phased Migration Price Increase Communications",
      "description": "Notifying customers of price increases while highlighting added platform value.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t3",
      "label": "Volume Discount Curves & Commitment Contracts",
      "description": "Designing discount structures to incentivize larger multi-year commitments.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t3_s1",
      "label": "Tiered vs Degressive Block Pricing Curves",
      "description": "Applying lower unit prices as commitment volume thresholds are crossed.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t3_s1_d1",
      "label": "Graduated Unit Price Tier Blocks",
      "description": "Charging $10/unit for first 100 units, $8/unit for next 400, $5/unit thereafter.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t3_s1_d2",
      "label": "Volume Commitment Floor Guarantees",
      "description": "Requiring minimum annual spend commitments to unlock tier discounts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t3_s2",
      "label": "Prepaid Annual Drawdown Commitment Models",
      "description": "Selling annual usage credit pools that customers draw down over 12 months.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t3_s2_d1",
      "label": "Use-It-or-Lose-It Credit Expiration",
      "description": "Expiring un-used credits at contract end to incentivize accurate forecasting.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t3_s2_d2",
      "label": "Overage Penalty Rate Adjustments (+20%)",
      "description": "Charging higher spot rates for usage exceeding prepaid commitments.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t3_s3",
      "label": "Multi-Year Contract Discount Incentives (15-25% Off)",
      "description": "Offering annual discounts in exchange for 3-year contract commitments.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t3_s3_d1",
      "label": "3-Year Lock-In Churn Prevention",
      "description": "Securing multi-year revenue predictability and lowering annual renewal risk.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t3_s3_d2",
      "label": "Annual Pre-Payment Cash Flow Acceleration",
      "description": "Requiring annual upfront payments for multi-year contracts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t3_s4",
      "label": "Enterprise Price Book & Non-Standard Discount Approvals",
      "description": "Establishing formal discounting rules for enterprise sales reps.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t3_s4_d1",
      "label": "Discount Matrix Approval Levels (VP Sales > 20%, CFO > 35%)",
      "description": "Requiring executive approvals for non-standard contract discounting.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t3_s4_d2",
      "label": "Protecting Price Integrity & Floor Margins",
      "description": "Preventing sales reps from eroding deal margins to meet quota.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t3_s5",
      "label": "Price Elasticity Testing & Optimization",
      "description": "Running price test experiments to determine optimal price points.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t3_s5_d1",
      "label": "Van Westendorp Price Sensitivity Meter",
      "description": "Surveying buyers to identify acceptable, cheap, and expensive price bounds.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t3_s5_d2",
      "label": "A/B Price Testing Cohort Isolations",
      "description": "Testing higher prices on distinct new customer cohorts to measure conversion impact.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t4",
      "label": "Billing Infrastructure & Revenue Operations",
      "description": "Automating subscription billing, metering, invoicing, and revenue recognition software stacks.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t4_s1",
      "label": "Metered Usage Event Ingestion Engines (Orb / Lago)",
      "description": "Streaming high-throughput usage events into billing calculators.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t4_s1_d1",
      "label": "Sub-Second Event Ingestion Telemetry",
      "description": "Ingesting millions of raw usage events via high-speed API endpoints.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t4_s1_d2",
      "label": "Event Aggregation & Deduplication Logic",
      "description": "Aggregating events into billable usage metrics (e.g. gigabyte-hours).",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t4_s2",
      "label": "Subscription Management Systems (Chargebee / Maxio)",
      "description": "Managing recurring billing state machines, plan changes, and prorations.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t4_s2_d1",
      "label": "Prorated Mid-Cycle Plan Modifications",
      "description": "Calculating complex prorated credits and charges during mid-month upgrades.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t4_s2_d2",
      "label": "Automated Dunning & Payment Retry Logic",
      "description": "Retrying failed credit card payments automatically over 14 days.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t4_s3",
      "label": "ASC 606 / IFRS 15 Revenue Recognition Compliance",
      "description": "Accounting software engines enforcing regulatory revenue recognition standards.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t4_s3_d1",
      "label": "Performance Obligation Revenue Scheduling",
      "description": "Recognizing revenue strictly as service performance obligations are fulfilled.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t4_s3_d2",
      "label": "Automated Deferred Revenue Amortization",
      "description": "Amortizing prepaid contracts into monthly P&L revenue items.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t4_s4",
      "label": "Dunning Management & In-Voluntary Churn Reduction",
      "description": "Recovering failed payments caused by expired or maxed-out credit cards.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t4_s4_d1",
      "label": "Stripe Smart Retries (Machine Learning Payment Routing)",
      "description": "Scheduling payment retries at optimal times to maximize card success rates.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t4_s4_d2",
      "label": "In-App Payment Update Prompts",
      "description": "Prompting users to update credit card details before service suspension.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t4_s5",
      "label": "Quote-to-Cash (Q2C) Enterprise Systems (Salesforce CPQ)",
      "description": "Integrating Configure, Price, Quote (CPQ) software with ERP accounting systems.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t4_s5_d1",
      "label": "Automated Opportunity-to-Invoice Generation",
      "description": "Converting signed sales contracts into billing invoices automatically.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t4_s5_d2",
      "label": "Eliminating Manual Order Entry Errors",
      "description": "Streamlining operations between sales, finance, and customer success.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t5",
      "label": "Pricing Architecture & Value Metrics Topic 5",
      "description": "Detailed first-principles mechanics for Pricing Architecture & Value Metrics topic 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t5_s1",
      "label": "Pricing Architecture & Value Metrics Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Pricing Architecture & Value Metrics Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t5_s1_d1",
      "label": "Pricing Architecture & Value Metrics Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pricing Architecture & Value Metrics Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t5_s1_d2",
      "label": "Pricing Architecture & Value Metrics Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pricing Architecture & Value Metrics Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t5_s2",
      "label": "Pricing Architecture & Value Metrics Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Pricing Architecture & Value Metrics Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t5_s2_d1",
      "label": "Pricing Architecture & Value Metrics Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pricing Architecture & Value Metrics Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t5_s2_d2",
      "label": "Pricing Architecture & Value Metrics Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pricing Architecture & Value Metrics Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t5_s3",
      "label": "Pricing Architecture & Value Metrics Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Pricing Architecture & Value Metrics Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t5_s3_d1",
      "label": "Pricing Architecture & Value Metrics Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pricing Architecture & Value Metrics Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t5_s3_d2",
      "label": "Pricing Architecture & Value Metrics Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pricing Architecture & Value Metrics Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t5_s4",
      "label": "Pricing Architecture & Value Metrics Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Pricing Architecture & Value Metrics Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t5_s4_d1",
      "label": "Pricing Architecture & Value Metrics Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pricing Architecture & Value Metrics Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t5_s4_d2",
      "label": "Pricing Architecture & Value Metrics Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pricing Architecture & Value Metrics Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t5_s5",
      "label": "Pricing Architecture & Value Metrics Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Pricing Architecture & Value Metrics Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t5_s5_d1",
      "label": "Pricing Architecture & Value Metrics Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pricing Architecture & Value Metrics Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t5_s5_d2",
      "label": "Pricing Architecture & Value Metrics Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pricing Architecture & Value Metrics Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t6",
      "label": "Pricing Architecture & Value Metrics Topic 6",
      "description": "Detailed first-principles mechanics for Pricing Architecture & Value Metrics topic 6.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t6_s1",
      "label": "Pricing Architecture & Value Metrics Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Pricing Architecture & Value Metrics Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t6_s1_d1",
      "label": "Pricing Architecture & Value Metrics Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pricing Architecture & Value Metrics Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t6_s1_d2",
      "label": "Pricing Architecture & Value Metrics Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pricing Architecture & Value Metrics Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t6_s2",
      "label": "Pricing Architecture & Value Metrics Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Pricing Architecture & Value Metrics Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t6_s2_d1",
      "label": "Pricing Architecture & Value Metrics Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pricing Architecture & Value Metrics Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t6_s2_d2",
      "label": "Pricing Architecture & Value Metrics Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pricing Architecture & Value Metrics Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t6_s3",
      "label": "Pricing Architecture & Value Metrics Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Pricing Architecture & Value Metrics Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t6_s3_d1",
      "label": "Pricing Architecture & Value Metrics Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pricing Architecture & Value Metrics Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t6_s3_d2",
      "label": "Pricing Architecture & Value Metrics Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pricing Architecture & Value Metrics Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t6_s4",
      "label": "Pricing Architecture & Value Metrics Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Pricing Architecture & Value Metrics Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t6_s4_d1",
      "label": "Pricing Architecture & Value Metrics Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pricing Architecture & Value Metrics Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t6_s4_d2",
      "label": "Pricing Architecture & Value Metrics Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pricing Architecture & Value Metrics Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t6_s5",
      "label": "Pricing Architecture & Value Metrics Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Pricing Architecture & Value Metrics Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t6_s5_d1",
      "label": "Pricing Architecture & Value Metrics Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pricing Architecture & Value Metrics Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p3_t6_s5_d2",
      "label": "Pricing Architecture & Value Metrics Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Pricing Architecture & Value Metrics Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity",
      "description": "Sales Velocity formula, MEDDPICC qualification, Account-Based Marketing (ABM), and enterprise motion.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t1",
      "label": "Sales Velocity Formula Architecture",
      "description": "Equation quantifying daily pipeline revenue generation capacity.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t1_s1",
      "label": "Sales Velocity Formula V = (N * S * C) / L",
      "description": "Multiplying Opportunities (N) * Average Deal Size (S) * Win Rate (C) divided by Length of Sales Cycle (L).",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t1_s1_d1",
      "label": "Daily Revenue Generation Capacity",
      "description": "Calculating exact dollar output produced by sales teams per day.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t1_s1_d2",
      "label": "Four Levers of Sales Acceleration",
      "description": "Systematically optimizing N, S, C, or L to boost overall sales throughput.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t1_s2",
      "label": "Opportunity Pipeline Count (N) Optimization",
      "description": "Scaling qualified sales pipeline opportunities through inbound and outbound channels.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t1_s2_d1",
      "label": "Outbound SDR Cadences & Account Prospecting",
      "description": "Generating outbound opportunities using personalized cold outreach.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t1_s2_d2",
      "label": "Inbound Demo Request Lead Routing",
      "description": "Routing high-intent website demo requests to AE calendars within 5 minutes.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t1_s3",
      "label": "Average Deal Size (S) / ACV Expansion",
      "description": "Increasing Annual Contract Value (ACV) through multi-department expansion and bundling.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t1_s3_d1",
      "label": "Multi-Module Product Bundling",
      "description": "Combining core platforms with add-on products to increase initial deal sizes.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t1_s3_d2",
      "label": "Minimum Enterprise Contract Floors ($50k+ Minimum ACV)",
      "description": "Enforcing contract size minimums for high-touch enterprise sales motions.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t1_s4",
      "label": "Win Rate Percentage (C) Maximization",
      "description": "Improving qualified opportunity conversion rates through competitive positioning.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t1_s4_d1",
      "label": "Competitive Battlecards & Objections Enablement",
      "description": "Equipping reps to win against primary market competitors.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t1_s4_d2",
      "label": "Proof-of-Concept (POC) Success Criteria Frameworks",
      "description": "Structuring formal POC agreements with clear technical pass/fail criteria.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t1_s5",
      "label": "Sales Cycle Length (L) Reduction",
      "description": "Shortening months elapsed between initial discovery calls and signed contracts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t1_s5_d1",
      "label": "Mutual Execution Plan (MEP) Alignment",
      "description": "Creating shared timelines with buyers to align procurement and legal milestones.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t1_s5_d2",
      "label": "Pre-Approved Standard Enterprise Terms",
      "description": "Providing pre-vetted Master Services Agreements (MSA) to speed legal review.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t2",
      "label": "MEDDPICC Enterprise Deal Qualification",
      "description": "Rigorous sales methodology for qualifying complex enterprise deals.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t2_s1",
      "label": "Metrics & Economic Buyer Identification",
      "description": "Quantifying buyer ROI and identifying the ultimate financial decision maker.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t2_s1_d1",
      "label": "Metrics (Quantified Business Impact)",
      "description": "Documenting exact cost savings or revenue gains expected by the buyer.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t2_s1_d2",
      "label": "Economic Buyer (Budget Owner Access)",
      "description": "Securing direct access to the executive with authority to release funds.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t2_s2",
      "label": "Decision Criteria & Decision Process",
      "description": "Understanding formal technical evaluation criteria and procurement approval steps.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t2_s2_d1",
      "label": "Decision Criteria (Technical, Commercial, Security Requirements)",
      "description": "Influencing RFP vendor requirements in favor of unique platform capabilities.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t2_s2_d2",
      "label": "Decision Process (Procurement, Legal, Security Approval Steps)",
      "description": "Mapping exact steps and timelines required to close signed contracts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t2_s3",
      "label": "Paper Process & Identify Pain",
      "description": "Mapping legal contract review steps and uncovering critical business pain points.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t2_s3_d1",
      "label": "Paper Process (Legal MSA, Infosec, Vendor Onboarding)",
      "description": "Tracking contract review progress through customer procurement teams.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t2_s3_d2",
      "label": "Identify Pain (Implications of In-Action)",
      "description": "Uncovering severe operational pain that forces executive action.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t2_s4",
      "label": "Champion & Competition Evaluation",
      "description": "Nurturing internal buyer advocates while managing competitive threats.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t2_s4_d1",
      "label": "Champion (Internal Power Advocate)",
      "description": "Identifying internal leaders with influence who actively sell on your behalf.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t2_s4_d2",
      "label": "Competition (Alternative Solutions / Status Quo)",
      "description": "Neutralizing competitor advantages and status quo inertia.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t2_s5",
      "label": "Deal Slippage Risk Mitigation",
      "description": "Identifying hidden deal blockers before quarter-end close deadlines.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t2_s5_d1",
      "label": "Red-Flag Deal Audits",
      "description": "Inspecting deals lacking Economic Buyer access or clear Paper Processes.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t2_s5_d2",
      "label": "Executive Sponsor Alignment Calls",
      "description": "Deploying C-level executives to unblock stuck enterprise deals.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t3",
      "label": "Account-Based Marketing (ABM) Playbooks",
      "description": "Coordinated marketing and sales campaigns targeting specific high-value target accounts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t3_s1",
      "label": "Ideal Customer Profile (ICP) & Target Account Lists (TAL)",
      "description": "Defining firmographic and technographic criteria for top-tier target accounts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t3_s1_d1",
      "label": "Firmographic Filters (Industry, Revenue, Employee Count)",
      "description": "Focusing resources on accounts with high propensity to buy.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t3_s1_d2",
      "label": "Technographic Data Triggers (Datanyze / BuiltWith)",
      "description": "Targeting companies utilizing complementary or competing technology stacks.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t3_s2",
      "label": "Multi-Touch Orchestrated Campaigns (1-to-1 vs 1-to-Few)",
      "description": "Executing personalized marketing touches across email, direct mail, and social ads.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t3_s2_d1",
      "label": "1-to-1 Hyper-Personalized Enterprise Campaigns",
      "description": "Creating custom landing pages and bespoke research reports for top 50 accounts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t3_s2_d2",
      "label": "1-to-Few Industry Cluster Campaigns",
      "description": "Running tailored campaigns for specific industry verticals (e.g. Fintech).",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t3_s3",
      "label": "Intent Data Signals (6sense / Bombora)",
      "description": "Monitoring third-party research activity to identify accounts actively in-market.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t3_s3_d1",
      "label": "Topic Search Intent Spikes",
      "description": "Detecting target account employees researching relevant solution keywords.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t3_s3_d2",
      "label": "De-Anonymized Website Visitor Tracking",
      "description": "Identifying company IP addresses visiting pricing and documentation pages.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t3_s4",
      "label": "Sales & Marketing Pipeline Alignment (SLA)",
      "description": "Establishing formal agreements between marketing lead generation and sales follow-up.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t3_s4_d1",
      "label": "SLA Lead Follow-up Deadlines (< 24 Hours)",
      "description": "Requiring SDRs to contact high-intent ABM leads within strict time windows.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t3_s4_d2",
      "label": "Joint Account Review Meetings",
      "description": "Reviewing target account engagement metrics weekly across sales and marketing.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t3_s5",
      "label": "ABM Attribution & Account Engagement Metrics",
      "description": "Measuring account-level engagement rather than individual lead clicks.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t3_s5_d1",
      "label": "Account Engagement Score (Minutes Spent, Unique Visitors)",
      "description": "Tracking aggregate multi-stakeholder involvement within target accounts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t3_s5_d2",
      "label": "Pipeline Influence & Win Rate Lift Attribution",
      "description": "Measuring ACV and win rate increases achieved in ABM target accounts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t4",
      "label": "Territory Design & Quota Engineering",
      "description": "Structuring sales territories, quotas, and commission plans to incentivize high performance.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t4_s1",
      "label": "Equalized Opportunity Territory Design",
      "description": "Balancing sales territories based on total addressable market (TAM) potential.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t4_s1_d1",
      "label": "Geographic vs Vertical Territory Splits",
      "description": "Assigning territories by region or industry specialization.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t4_s1_d2",
      "label": "TAM Data-Driven Account Balancing",
      "description": "Ensuring reps receive territories with equal revenue potential.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t4_s2",
      "label": "Quota-to-OOTE Multiple (4x to 5x Rule)",
      "description": "Setting annual sales quotas relative to On-Target Earnings (OTE).",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t4_s2_d1",
      "label": "5x Quota Multiple Rule ($1M Quota for $200k OTE)",
      "description": "Requiring reps to generate 5x their total compensation package in ARR.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t4_s2_d2",
      "label": "50/50 Base-to-Variable Salary Split",
      "description": "Structuring OTE as 50% base salary and 50% variable commission incentives.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t4_s3",
      "label": "Commission Accelerators & Decelerators",
      "description": "Increasing commission rates as reps exceed 100% quota attainment.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t4_s3_d1",
      "label": "Tiered Commission Accelerators (150% Rate Past Quota)",
      "description": "Paying 1.5x commission rates on revenue closed beyond 100% quota.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t4_s3_d2",
      "label": "Cliff Decelerators for Low Attainment (< 50% Quota)",
      "description": "Reducing commission rates for reps failing to reach baseline performance cliffs.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t4_s4",
      "label": "Clawback Provisions & Contract Retention Terms",
      "description": "Recovering paid commissions if new customer contracts churn early.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t4_s4_d1",
      "label": "120-Day Commission Clawback Period",
      "description": "Reclaiming commissions if customers cancel or default within 4 months.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t4_s4_d2",
      "label": "Multi-Year Upfront Commission Bonuses",
      "description": "Paying extra commission bonuses for securing 3-year prepaid contracts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t4_s5",
      "label": "Sales Capacity Planning Models",
      "description": "Modeling AE ramp times and quota capacity needed to achieve future ARR targets.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t4_s5_d1",
      "label": "Ramp-Up Schedule Modeling (Months 1-6 Attainment Ramp)",
      "description": "Factoring 6-month ramp periods into new sales rep quota contributions.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t4_s5_d2",
      "label": "Hiring Lead Time Calculations",
      "description": "Recruiting sales reps 9 months ahead of target revenue milestones.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t5",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 5",
      "description": "Detailed first-principles mechanics for Sales-Led Growth (SLG) & Pipeline Velocity topic 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t5_s1",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t5_s1_d1",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t5_s1_d2",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t5_s2",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t5_s2_d1",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t5_s2_d2",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t5_s3",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t5_s3_d1",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t5_s3_d2",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t5_s4",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t5_s4_d1",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t5_s4_d2",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t5_s5",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t5_s5_d1",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t5_s5_d2",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sales-Led Growth (SLG) & Pipeline Velocity Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t6",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 6",
      "description": "Detailed first-principles mechanics for Sales-Led Growth (SLG) & Pipeline Velocity topic 6.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t6_s1",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t6_s1_d1",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t6_s1_d2",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t6_s2",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t6_s2_d1",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t6_s2_d2",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t6_s3",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t6_s3_d1",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t6_s3_d2",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t6_s4",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t6_s4_d1",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t6_s4_d2",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t6_s5",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t6_s5_d1",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p4_t6_s5_d2",
      "label": "Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Sales-Led Growth (SLG) & Pipeline Velocity Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5",
      "label": "Customer Retention & Churn Predictive Modeling",
      "description": "Cohort retention heatmaps, early warning health scores, voluntary vs involuntary churn reduction, and renewal forecasting.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t1",
      "label": "Logo Churn vs Net Revenue Churn Math",
      "description": "Distinguishing customer account count losses from dollar revenue losses.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t1_s1",
      "label": "Logo Churn Formula = (Lost Accounts / Beginning Accounts) * 100",
      "description": "Percentage of customer accounts cancelling subscriptions within a period.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t1_s1_d1",
      "label": "SMB vs Enterprise Logo Churn Differences",
      "description": "Accepting 2-3% monthly logo churn in SMB vs targeting < 0.5% monthly in Enterprise.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t1_s1_d2",
      "label": "Logo Churn Impact on Market Reputation",
      "description": "Managing logo churn to protect brand reputation and customer review scores.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t1_s2",
      "label": "Net Revenue Churn Formula = ((Churn ARR + Contraction ARR - Expansion ARR) / Beginning ARR) * 100",
      "description": "Net percentage loss of recurring revenue after accounting for expansion.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t1_s2_d1",
      "label": "Negative Net Churn State (Net Expansion > Gross Churn)",
      "description": "Achieving negative net churn when cohort expansion outweighs total lost ARR.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t1_s2_d2",
      "label": "Compound Growth Engine Advantage",
      "description": "Ensuring ARR grows automatically even if zero new customers are acquired.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t1_s3",
      "label": "Voluntary vs Involuntary Churn Breakdown",
      "description": "Categorizing churn caused by active cancellations vs failed payment processing.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t1_s3_d1",
      "label": "Voluntary Churn (Product Un-fit, Poor ROI, Competitors)",
      "description": "Addressing product and customer success root causes to prevent active cancellations.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t1_s3_d2",
      "label": "Involuntary Churn (Expired Cards, Bank Declines)",
      "description": "Deploying dunning software and account updater APIs to recover failed payments.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t1_s4",
      "label": "Cohort Retention Triangle Heatmaps",
      "description": "Visualizing month-by-month cohort retention curves over time.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t1_s4_d1",
      "label": "Identifying Product Improvement Trends",
      "description": "Verifying that newer cohorts exhibit higher retention than older cohorts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t1_s4_d2",
      "label": "Detecting Seasonal Churn Anomalies",
      "description": "Identifying specific calendar months with elevated cancellation rates.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t1_s5",
      "label": "Customer Survivorship Bias Adjustments",
      "description": "Adjusting historical retention calculations to avoid over-estimating mature cohort health.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t1_s5_d1",
      "label": "Right-Censored Data Adjustments",
      "description": "Accounting for active accounts whose ultimate tenure is not yet known.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t1_s5_d2",
      "label": "Hazard Rate Modeling (Probability of Churn at Month T)",
      "description": "Calculating churn probability conditional on reaching specific tenure ages.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t2",
      "label": "Customer Health Score Algorithms",
      "description": "Combining usage telemetry, support tickets, and executive relationship metrics into predictive health scores.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t2_s1",
      "label": "Multi-Vector Health Score Weighting",
      "description": "Aggregating usage metrics, feature adoption, support tickets, and NPS surveys.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t2_s1_d1",
      "label": "Product Usage Breadth & Depth Vector (40% Weight)",
      "description": "Tracking active seats and core feature adoption frequency.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t2_s1_d2",
      "label": "Support Ticket Velocity & Escalations (20% Weight)",
      "description": "Flagging accounts with unresolved high-severity support tickets.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t2_s1_d3",
      "label": "Executive Sponsor Engagement (20% Weight)",
      "description": "Monitoring frequency of executive contacts and QBR attendance.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t2_s1_d4",
      "label": "Contract Renewal Proximity (20% Weight)",
      "description": "Increasing audit intensity as 90-day renewal windows approach.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t2_s2",
      "label": "Red-Yellow-Green Account Tier Classification",
      "description": "Categorizing accounts into actionable health status tiers.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t2_s2_d1",
      "label": "Red Accounts (Health Score < 50 -> Immediate CSM Playbook)",
      "description": "Triggering emergency executive intervention for high-risk accounts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t2_s2_d2",
      "label": "Yellow Accounts (Health Score 50-75 -> Adoption Push)",
      "description": "Assigning CSMs to drive training and feature adoption campaigns.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t2_s2_d3",
      "label": "Green Accounts (Health Score > 75 -> Expansion Target)",
      "description": "Flagging healthy accounts for upsell and cross-sell campaigns.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t2_s3",
      "label": "Leading Indicator Usage Drop Alerts",
      "description": "Detecting early warning signs of churn weeks before contract cancellation.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t2_s3_d1",
      "label": "Active User Drop Thresholds (> 30% WAU Decrease)",
      "description": "Alerting CSMs when weekly active users drop significantly.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t2_s3_d2",
      "label": "Admin Inactivity Monitoring",
      "description": "Flagging accounts where primary admin users stop logging in.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t2_s4",
      "label": "Machine Learning Churn Prediction Models (Random Forest / XGBoost)",
      "description": "Training classification models to predict 90-day account churn probabilities.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t2_s4_d1",
      "label": "Feature Engineering for Churn Prediction",
      "description": "Extracting historical usage trends, license utilization, and support ticket ratios.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t2_s4_d2",
      "label": "High Recall Precision Tuning",
      "description": "Optimizing models to catch 80%+ of at-risk accounts before cancellation.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t2_s5",
      "label": "Net Promoter Score (NPS) & CSAT Integration",
      "description": "Surveying user sentiment to measure subjective customer satisfaction.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t2_s5_d1",
      "label": "NPS Formula % Promoters (9-10) - % Detractors (0-6)",
      "description": "Measuring overall brand advocacy across user roles.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t2_s5_d2",
      "label": "Detractor Follow-up Workflows",
      "description": "Contacting detractors within 48 hours to resolve product complaints.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t3",
      "label": "CSM Save Playbooks & Escalation Protocols",
      "description": "Structured operational interventions deployed to rescue at-risk accounts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t3_s1",
      "label": "Red Account Emergency Response Cadence",
      "description": "Deploying cross-functional rescue teams to resolve customer complaints.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t3_s1_d1",
      "label": "Executive Sponsor Reach-Out Call",
      "description": "Connecting customer VP with internal C-level executive.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t3_s1_d2",
      "label": "Technical Engineering Swat Team Assignment",
      "description": "Resolving product bugs or performance bottlenecks blocking customer workflows.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t3_s2",
      "label": "Discount & Contract Restructuring Interventions",
      "description": "Offering temporary commercial concessions to prevent total account cancellation.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t3_s2_d1",
      "label": "Temporary Down-scoping Contracts",
      "description": "Downgrading accounts to smaller plan tiers to retain base ARR during customer budget cuts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t3_s2_d2",
      "label": "Deferred Payment Term Extensions",
      "description": "Extending billing terms to assist customers experiencing temporary liquidity issues.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t3_s3",
      "label": "Root Cause Exit Interview Audits",
      "description": "Conducting structured exit interviews with cancelling customers to identify product gaps.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t3_s3_d1",
      "label": "Categorizing Churn Reasons (Product, Price, Service, Competitor)",
      "description": "Aggregating exit data to inform product roadmap priorities.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t3_s3_d2",
      "label": "Win-Back Campaign Database Flagging",
      "description": "Flagging churned accounts for win-back outreach after 6-12 months.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t3_s4",
      "label": "Customer Onboarding Time-to-Value (TTV) Optimization",
      "description": "Ensuring new customers achieve initial success milestones within first 30 days.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t3_s4_d1",
      "label": "30-60-90 Day Onboarding Milestones",
      "description": "Tracking technical integration, user training, and initial ROI delivery.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t3_s4_d2",
      "label": "CSM Onboarding Capacity Load (15-20 Enterprise Accounts per CSM)",
      "description": "Capping account load per CSM to guarantee high-touch onboarding support.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t3_s5",
      "label": "CSM Variable Compensation Alignment (NRR Targets)",
      "description": "Tying Customer Success Manager bonuses directly to account renewal and expansion metrics.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t3_s5_d1",
      "label": "Bonus Payout Based on Portfolio NRR (110%+ Target)",
      "description": "Incentivizing CSMs to drive expansion alongside renewal retention.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t3_s5_d2",
      "label": "Gross Churn Penalty Deductions",
      "description": "Deducting bonus payouts if portfolio gross churn exceeds threshold targets.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t4",
      "label": "Renewal Management & Contract Forecasting",
      "description": "Managing contract renewal pipelines to maximize retention and expansion execution.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t4_s1",
      "label": "180-120-90-60-30 Day Renewal Cadence",
      "description": "Structured timeline for managing enterprise contract renewals.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t4_s1_d1",
      "label": "180-Day Pre-Renewal Account Audit",
      "description": "Evaluating health scores and identifying expansion opportunities 6 months prior to expiration.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t4_s1_d2",
      "label": "90-Day Proposal Submission Deadline",
      "description": "Delivering renewal and expansion proposals 3 months prior to expiration.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t4_s2",
      "label": "Auto-Renewal Clauses & Cancellation Notice Windows",
      "description": "Enforcing standard 30-60 day written notice requirements for non-renewal.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t4_s2_d1",
      "label": "Opt-Out Notice Window Monitoring",
      "description": "Tracking contract opt-out deadlines to manage renewal expectations.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t4_s2_d2",
      "label": "Annual Price Increase Clauses (3-7% Escalation)",
      "description": "Including automatic annual price uplift clauses in standard contracts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t4_s3",
      "label": "Renewal Forecast Risk Categorization",
      "description": "Classifying upcoming renewal pipeline ARR by likelihood of close.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t4_s3_d1",
      "label": "Commit, Best Case, Pipeline, Risk Categories",
      "description": "Categorizing renewal ARR for accurate financial board forecasting.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t4_s3_d2",
      "label": "Weighted Renewal ARR Pipeline Calculation",
      "description": "Applying probability weights to calculate expected renewal revenue.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t4_s4",
      "label": "Early Renewal & Multi-Year Conversion Discounts",
      "description": "Incentivizing customers to renew contracts early in exchange for locked rates.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t4_s4_d1",
      "label": "Early Renewal Uplift Incentives",
      "description": "Offering 5% discounts if customers sign renewals 60 days early.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t4_s4_d2",
      "label": "Co-Terming Multi-Entity Contracts",
      "description": "Consolidating multiple departmental contracts into single corporate renewal dates.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t4_s5",
      "label": "Post-Mortem Renewal Loss Analysis",
      "description": "Reviewing failed renewals to improve future CS and product workflows.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t4_s5_d1",
      "label": "Loss Review Board (VP CS, VP Sales, VP Product)",
      "description": "Reviewing churned enterprise accounts > $100k ACV.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t4_s5_d2",
      "label": "Updating Health Score Models Post-Churn",
      "description": "Refining health score metrics based on un-predicted churn events.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t5",
      "label": "Customer Retention & Churn Predictive Modeling Topic 5",
      "description": "Detailed first-principles mechanics for Customer Retention & Churn Predictive Modeling topic 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t5_s1",
      "label": "Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Customer Retention & Churn Predictive Modeling Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t5_s1_d1",
      "label": "Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t5_s1_d2",
      "label": "Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t5_s2",
      "label": "Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Customer Retention & Churn Predictive Modeling Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t5_s2_d1",
      "label": "Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t5_s2_d2",
      "label": "Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t5_s3",
      "label": "Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Customer Retention & Churn Predictive Modeling Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t5_s3_d1",
      "label": "Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t5_s3_d2",
      "label": "Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t5_s4",
      "label": "Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Customer Retention & Churn Predictive Modeling Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t5_s4_d1",
      "label": "Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t5_s4_d2",
      "label": "Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t5_s5",
      "label": "Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Customer Retention & Churn Predictive Modeling Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t5_s5_d1",
      "label": "Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t5_s5_d2",
      "label": "Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Customer Retention & Churn Predictive Modeling Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t6",
      "label": "Customer Retention & Churn Predictive Modeling Topic 6",
      "description": "Detailed first-principles mechanics for Customer Retention & Churn Predictive Modeling topic 6.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t6_s1",
      "label": "Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Customer Retention & Churn Predictive Modeling Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t6_s1_d1",
      "label": "Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t6_s1_d2",
      "label": "Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t6_s2",
      "label": "Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Customer Retention & Churn Predictive Modeling Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t6_s2_d1",
      "label": "Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t6_s2_d2",
      "label": "Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t6_s3",
      "label": "Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Customer Retention & Churn Predictive Modeling Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t6_s3_d1",
      "label": "Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t6_s3_d2",
      "label": "Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t6_s4",
      "label": "Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Customer Retention & Churn Predictive Modeling Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t6_s4_d1",
      "label": "Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t6_s4_d2",
      "label": "Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t6_s5",
      "label": "Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Customer Retention & Churn Predictive Modeling Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t6_s5_d1",
      "label": "Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p5_t6_s5_d2",
      "label": "Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Customer Retention & Churn Predictive Modeling Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6",
      "label": "Expansion Revenue & Upsell Engine",
      "description": "Expansion MRR, Land-and-Expand motions, cross-sell trigger events, and contraction MRR mitigation.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t1",
      "label": "Land-and-Expand Growth Motion",
      "description": "Acquiring initial small departmental footprints and expanding across the broader enterprise.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t1_s1",
      "label": "Initial Land Strategy (Low Friction $5k-$15k ACV)",
      "description": "Closing small initial deals to bypass lengthy enterprise procurement reviews.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t1_s1_d1",
      "label": "Departmental Credit Card / PO Purchases",
      "description": "Allowing individual team managers to purchase software within local expense limits.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t1_s1_d2",
      "label": "Establishing Initial Operational Footprint",
      "description": "Proving product ROI within single teams before pitching enterprise contracts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t1_s2",
      "label": "Organic Viral Expansion Across Adjacent Teams",
      "description": "Spreading product usage organically as teams collaborate with adjacent departments.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t1_s2_d1",
      "label": "Cross-Departmental Invites & Project Sharing",
      "description": "Exposing adjacent teams to shared project boards and reports.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t1_s2_d2",
      "label": "Inbound Internal Account Consolidation Requests",
      "description": "Receiving requests from IT to consolidate disparate departmental accounts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t1_s3",
      "label": "Enterprise Wall Upgrade Conversion",
      "description": "Converting multiple fragmented departmental accounts into a single master enterprise agreement.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t1_s3_d1",
      "label": "IT Security & Procurement Interception",
      "description": "Leveraging IT security audits to consolidate un-managed team accounts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t1_s3_d2",
      "label": "Master Services Agreement (MSA) Conversion (5x-10x ACV Jump)",
      "description": "Multiplying account ARR by consolidating seats and adding enterprise SSO features.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t1_s4",
      "label": "Wall-to-Wall Enterprise Rollout Playbooks",
      "description": "Deploying software across all global employees in enterprise accounts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t1_s4_d1",
      "label": "Executive Mandate & Internal Marketing",
      "description": "Partnering with customer executives to announce company-wide software rollouts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t1_s4_d2",
      "label": "Scalable Self-Paced Employee Training Portals",
      "description": "Providing automated video training to onboard thousands of employees quickly.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t1_s5",
      "label": "Account Expansion Velocity Metrics (Net Expansion Rate)",
      "description": "Measuring speed at which accounts double their initial contract value.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t1_s5_d1",
      "label": "Time-to-Double ACV Milestone (e.g. 18 Months)",
      "description": "Tracking average months required for accounts to expand from $10k to $20k ACV.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t1_s5_d2",
      "label": "Expansion Cohort Multipliers",
      "description": "Calculating expansion revenue multiples achieved by mature customer cohorts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t2",
      "label": "Cross-Sell Trigger Events & Product Add-Ons",
      "description": "Identifying optimal timing and behavioral triggers for cross-selling complementary products.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t2_s1",
      "label": "Behavioral Cross-Sell Trigger Identification",
      "description": "Monitoring product telemetry to detect when accounts need advanced add-on modules.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t2_s1_d1",
      "label": "High-Volume API Usage -> Security Add-On Trigger",
      "description": "Pitching advanced API security modules as API call volume crosses thresholds.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t2_s1_d2",
      "label": "Multi-Region Team Expansion -> Compliance Module Trigger",
      "description": "Pitching GDPR/HIPAA compliance add-ons as international users join.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t2_s2",
      "label": "Product Line Unbundling & Cross-Sell Packaging",
      "description": "Unbundling secondary products to create cross-sell opportunities for existing customers.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t2_s2_d1",
      "label": "Standalone Product Modules (HubSpot CRM -> Marketing -> Service Hub)",
      "description": "Selling distinct software hubs to existing customer bases.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t2_s2_d2",
      "label": "Cross-Sell Discount Incentives (20% Bundle Discount)",
      "description": "Offering package discounts when purchasing multiple product modules simultaneously.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t2_s3",
      "label": "Account Management vs CSM Cross-Sell Ownership",
      "description": "Structuring sales ownership for account expansion deals.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t2_s3_d1",
      "label": "Account Manager (AM) Dedicated Expansion Quotas",
      "description": "Assigning dedicated AMs to focus exclusively on upselling existing customer accounts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t2_s3_d2",
      "label": "CSM Lead Referral Commission Spiffs",
      "description": "Paying CSMs referral bonuses when identifying qualified cross-sell opportunities.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t2_s4",
      "label": "In-App Self-Serve Add-On Purchasing",
      "description": "Enabling customer admins to purchase add-on modules directly within app dashboards.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t2_s4_d1",
      "label": "One-Click Add-On Activation",
      "description": "Activating new features instantly without requiring sales call interactions.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t2_s4_d2",
      "label": "Automated Co-Termed Billing Updates",
      "description": "Adding pro-rated add-on costs to active billing subscriptions automatically.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t2_s5",
      "label": "Cross-Sell Win Rate & Pipeline Analytics",
      "description": "Tracking conversion rates of cross-sell opportunities compared to new customer acquisitions.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t2_s5_d1",
      "label": "50%+ Cross-Sell Win Rate Benchmarks",
      "description": "Achieving 2x higher win rates when selling to existing trusted customer accounts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t2_s5_d2",
      "label": "Shorter Sales Cycles for Existing Accounts (< 30 Days)",
      "description": "Closing cross-sell deals in a fraction of traditional new-customer sales cycles.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t3",
      "label": "Usage Expansion & Consumption Upsell",
      "description": "Growing account revenue automatically as customer workload and data volumes scale.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t3_s1",
      "label": "Automatic Usage Tier Threshold Upgrades",
      "description": "Upgrading customers to higher usage tiers automatically as consumption limits are exceeded.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t3_s1_d1",
      "label": "Soft Limit Warnings vs Hard Stop Blocks",
      "description": "Issuing soft usage warnings before enforcing hard blocks or automatic plan upgrades.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t3_s1_d2",
      "label": "Transparent Usage Tracking Dashboards",
      "description": "Providing real-time consumption gauges to prevent billing surprises.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t3_s2",
      "label": "Seat License Expansion Automation",
      "description": "Adding paid user seats automatically as new team members accept workspace invites.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t3_s2_d1",
      "label": "Auto-Provisioned Seat Billing",
      "description": "Charging credit cards automatically for newly added active seats.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t3_s2_d2",
      "label": "Annual True-Up Contract Reconciliation",
      "description": "Reconciling excess seat usage annually during enterprise contract true-up reviews.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t3_s3",
      "label": "Consumption Overages & Spot Rate Billing",
      "description": "Charging premium per-unit rates for usage exceeding monthly contract commitments.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t3_s3_d1",
      "label": "Overage Rate Markup (+25% Premium)",
      "description": "Incentivizing customers to upgrade to larger prepaid tiers by applying overage markups.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t3_s3_d2",
      "label": "Automated Over-Consumption Notification Alerts",
      "description": "Alerting customer admins when usage velocity threatens to trigger overage charges.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t3_s4",
      "label": "Product Usage Velocity Forecasting for Upsell",
      "description": "Using time-series forecasting to predict when accounts will exhaust current capacity.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t3_s4_d1",
      "label": "Predictive Capacity Run-Out Alerts",
      "description": "Notifying account managers 60 days before customers exhaust annual prepaid credits.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t3_s4_d2",
      "label": "Proactive Mid-Contract Commitment Upgrades",
      "description": "Upgrading customers to larger discounted credit packages mid-contract.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t3_s5",
      "label": "Mitigating Usage Contraction Risk",
      "description": "Monitoring customer usage declines to prevent unexpected revenue contractions.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t3_s5_d1",
      "label": "Usage Downward Trend Early Warnings",
      "description": "Alerting CSMs when monthly compute or API consumption drops > 20%.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t3_s5_d2",
      "label": "Investigating Customer Workflow Changes",
      "description": "Re-engaging customers to fix technical bugs or optimization errors driving usage drops.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t4",
      "label": "Contraction MRR Mitigation & Downselling",
      "description": "Strategies for managing and minimizing revenue losses from accounts scaling back subscriptions.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t4_s1",
      "label": "Contraction MRR Root Cause Categorization",
      "description": "Analyzing drivers behind customer downselling requests.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t4_s1_d1",
      "label": "Headcount Reduction Contraction",
      "description": "Managing seat reductions caused by customer layoffs or downsizing.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t4_s1_d2",
      "label": "Un-Used Feature License Pruning",
      "description": "Trimming un-adopted add-on modules during annual contract renewals.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t4_s2",
      "label": "Downsell Prevention Negotiating Frameworks",
      "description": "Offering alternative contract structures to protect core ARR.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t4_s2_d1",
      "label": "Multi-Year Contract Lock-in for Rate Discounts",
      "description": "Exchanging lower annual pricing for longer multi-year commitments.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t4_s2_d2",
      "label": "Substituting Add-On Modules for Lost Seats",
      "description": "Replacing cancelled user seats with equivalent value in advanced feature modules.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t4_s3",
      "label": "Minimum Contract Floor Terms",
      "description": "Enforcing baseline contract spend floors to limit maximum allowable downselling.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t4_s3_d1",
      "label": "50% Baseline Contract Spend Floor",
      "description": "Restricting annual contract reductions to at most 50% of peak historic ACV.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t4_s3_d2",
      "label": "Platform Base Fee Protection",
      "description": "Ensuring fixed platform fees remain active even if variable usage drops to zero.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t4_s4",
      "label": "License Re-Allocation & Re-Deployment Support",
      "description": "Helping customer admins re-assign un-used licenses to active team members.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t4_s4_d1",
      "label": "Automated In-Active License Audit Reports",
      "description": "Showing admins which assigned licenses have been inactive for > 60 days.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t4_s4_d2",
      "label": "Re-Deployment Onboarding Campaigns",
      "description": "Helping customer admins re-allocate un-used seats to new departments.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t4_s5",
      "label": "Tracking Net Expansion Index (Expansion MRR / Contraction MRR)",
      "description": "Ratio measuring overall expansion health relative to contraction losses.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t4_s5_d1",
      "label": "Target Ratio > 3.0x (Expansion Exceeds Contraction by 3x)",
      "description": "Ensuring expansion revenue far outweighs contraction losses.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t4_s5_d2",
      "label": "Portfolio Revenue Health Benchmark",
      "description": "Monitoring ratio across customer segments to evaluate long-term expansion sustainability.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t5",
      "label": "Expansion Revenue & Upsell Engine Topic 5",
      "description": "Detailed first-principles mechanics for Expansion Revenue & Upsell Engine topic 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t5_s1",
      "label": "Expansion Revenue & Upsell Engine Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Expansion Revenue & Upsell Engine Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t5_s1_d1",
      "label": "Expansion Revenue & Upsell Engine Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Expansion Revenue & Upsell Engine Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t5_s1_d2",
      "label": "Expansion Revenue & Upsell Engine Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Expansion Revenue & Upsell Engine Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t5_s2",
      "label": "Expansion Revenue & Upsell Engine Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Expansion Revenue & Upsell Engine Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t5_s2_d1",
      "label": "Expansion Revenue & Upsell Engine Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Expansion Revenue & Upsell Engine Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t5_s2_d2",
      "label": "Expansion Revenue & Upsell Engine Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Expansion Revenue & Upsell Engine Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t5_s3",
      "label": "Expansion Revenue & Upsell Engine Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Expansion Revenue & Upsell Engine Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t5_s3_d1",
      "label": "Expansion Revenue & Upsell Engine Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Expansion Revenue & Upsell Engine Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t5_s3_d2",
      "label": "Expansion Revenue & Upsell Engine Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Expansion Revenue & Upsell Engine Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t5_s4",
      "label": "Expansion Revenue & Upsell Engine Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Expansion Revenue & Upsell Engine Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t5_s4_d1",
      "label": "Expansion Revenue & Upsell Engine Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Expansion Revenue & Upsell Engine Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t5_s4_d2",
      "label": "Expansion Revenue & Upsell Engine Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Expansion Revenue & Upsell Engine Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t5_s5",
      "label": "Expansion Revenue & Upsell Engine Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Expansion Revenue & Upsell Engine Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t5_s5_d1",
      "label": "Expansion Revenue & Upsell Engine Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Expansion Revenue & Upsell Engine Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t5_s5_d2",
      "label": "Expansion Revenue & Upsell Engine Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Expansion Revenue & Upsell Engine Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t6",
      "label": "Expansion Revenue & Upsell Engine Topic 6",
      "description": "Detailed first-principles mechanics for Expansion Revenue & Upsell Engine topic 6.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t6_s1",
      "label": "Expansion Revenue & Upsell Engine Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Expansion Revenue & Upsell Engine Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t6_s1_d1",
      "label": "Expansion Revenue & Upsell Engine Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Expansion Revenue & Upsell Engine Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t6_s1_d2",
      "label": "Expansion Revenue & Upsell Engine Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Expansion Revenue & Upsell Engine Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t6_s2",
      "label": "Expansion Revenue & Upsell Engine Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Expansion Revenue & Upsell Engine Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t6_s2_d1",
      "label": "Expansion Revenue & Upsell Engine Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Expansion Revenue & Upsell Engine Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t6_s2_d2",
      "label": "Expansion Revenue & Upsell Engine Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Expansion Revenue & Upsell Engine Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t6_s3",
      "label": "Expansion Revenue & Upsell Engine Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Expansion Revenue & Upsell Engine Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t6_s3_d1",
      "label": "Expansion Revenue & Upsell Engine Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Expansion Revenue & Upsell Engine Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t6_s3_d2",
      "label": "Expansion Revenue & Upsell Engine Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Expansion Revenue & Upsell Engine Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t6_s4",
      "label": "Expansion Revenue & Upsell Engine Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Expansion Revenue & Upsell Engine Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t6_s4_d1",
      "label": "Expansion Revenue & Upsell Engine Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Expansion Revenue & Upsell Engine Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t6_s4_d2",
      "label": "Expansion Revenue & Upsell Engine Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Expansion Revenue & Upsell Engine Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t6_s5",
      "label": "Expansion Revenue & Upsell Engine Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Expansion Revenue & Upsell Engine Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t6_s5_d1",
      "label": "Expansion Revenue & Upsell Engine Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Expansion Revenue & Upsell Engine Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p6_t6_s5_d2",
      "label": "Expansion Revenue & Upsell Engine Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Expansion Revenue & Upsell Engine Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7",
      "label": "Enterprise CSM Playbooks & Operations",
      "description": "Quarterly Business Reviews (QBR), executive sponsorship, Time-to-Value (TTV) onboarding, and CS ops tooling.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t1",
      "label": "Quarterly Business Review (QBR) Execution Framework",
      "description": "Structuring strategic executive meetings to demonstrate quantified ROI and align on future business goals.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t1_s1",
      "label": "QBR Agenda Structure (ROI Delivered -> Future Roadmap)",
      "description": "Focusing QBR meetings on customer business outcomes rather than product training.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t1_s1_d1",
      "label": "Executive Summary & Quantified Value Review (First 15 Mins)",
      "description": "Presenting hard metrics demonstrating cost savings or revenue generated.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t1_s1_d2",
      "label": "Strategic Account Goal Alignment (Next 15 Mins)",
      "description": "Reviewing customer executive priorities for the upcoming 6-12 months.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t1_s1_d3",
      "label": "Product Roadmap & Joint Innovation (Final 30 Mins)",
      "description": "Previewing upcoming product capabilities tailored to customer goals.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t1_s2",
      "label": "Quantified Value Realization Reports",
      "description": "Calculating financial ROI generated by software platform usage.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t1_s2_d1",
      "label": "Hours Saved & Efficiency Gain Calculations",
      "description": "Converting workflow time savings into equivalent dollar salary savings.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t1_s2_d2",
      "label": "Business Outcome Dashboard Benchmarking",
      "description": "Comparing customer metrics against industry peer averages.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t1_s3",
      "label": "Executive Sponsor Attendance Strategies",
      "description": "Securing attendance of C-level customer executives at QBR meetings.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t1_s3_d1",
      "label": "C-Level Peer Invitation Matching",
      "description": "Inviting internal executives (e.g. CEO, CTO) to attend QBRs with customer executives.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t1_s3_d2",
      "label": "Strict 30-Minute Executive Summary Options",
      "description": "Offering concise executive briefings to fit busy C-level schedules.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t1_s4",
      "label": "Mutual Success Plan (MSP) Agreement Updates",
      "description": "Updating living documents tracking agreed account objectives and success metrics.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t1_s4_d1",
      "label": "Joint Milestone Ownership & Deadlines",
      "description": "Assigning clear task owners across both customer and vendor teams.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t1_s4_d2",
      "label": "Aligning MSP Objectives to Contract Renewals",
      "description": "Ensuring all agreed MSP objectives are delivered prior to renewal dates.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t1_s5",
      "label": "Identifying Upsell Opportunities During QBRs",
      "description": "Uncovering new departmental needs during strategic QBR discussions.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t1_s5_d1",
      "label": "Uncovering Un-Met Organizational Needs",
      "description": "Asking strategic discovery questions to identify new pain points.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t1_s5_d2",
      "label": "Seamless Hand-off to Account Managers",
      "description": "Passing identified expansion opportunities to sales reps for commercial proposal.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t2",
      "label": "Enterprise Customer Onboarding & Implementation",
      "description": "Structured implementation methodologies for onboarding complex multi-stakeholder enterprise accounts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t2_s1",
      "label": "Implementation Kickoff & Technical Scoping",
      "description": "Establishing technical architecture, SSO integration, and data migration plans.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t2_s1_d1",
      "label": "Technical Architecture Review & Security Audits",
      "description": "Finalizing SSO, SAML, API integration, and security configurations.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t2_s1_d2",
      "label": "Historical Data Migration Scoping",
      "description": "Mapping legacy data schemas to new platform fields.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t2_s2",
      "label": "Dedicated Professional Services (PS) Delivery",
      "description": "Deploying technical solutions architects to build custom integrations and workflows.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t2_s2_d1",
      "label": "Statement of Work (SOW) Scope Management",
      "description": "Delivered custom integration projects within agreed SOW timelines.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t2_s2_d2",
      "label": "Billable Professional Services Margins (30-50%)",
      "description": "Managing PS delivery costs to maintain positive gross margins.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t2_s3",
      "label": "Role-Based User Training & Change Management",
      "description": "Executing tailored training programs for admins, power users, and general end-users.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t2_s3_d1",
      "label": "Train-the-Trainer Super-User Programs",
      "description": "Training internal customer champions to educate their peer teams.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t2_s3_d2",
      "label": "Role-Specific Video Certification Modules",
      "description": "Providing self-paced learning paths for different user personas.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t2_s4",
      "label": "Go-Live Readiness Audits & Transition to Support",
      "description": "Verifying all launch criteria before transitioning accounts from PS to dedicated CSMs.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t2_s4_d1",
      "label": "Go-Live Gate Checklist Verification",
      "description": "Confirming technical readiness, user provisioning, and support escalation paths.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t2_s4_d2",
      "label": "Formal Hand-Off Meeting to Success Team",
      "description": "Introducing customer teams to their long-term CSM and support contacts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t2_s5",
      "label": "Measuring Post-Launch First 90-Day Adoption",
      "description": "Tracking early active user adoption metrics following official system go-live.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t2_s5_d1",
      "label": "License Activation Target (> 80% Seats Provisioned)",
      "description": "Ensuring purchased licenses are actively assigned to real users.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t2_s5_d2",
      "label": "Daily Active User (DAU) Velocity Tracking",
      "description": "Monitoring daily active usage trends to catch early adoption friction.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t3",
      "label": "Customer Success Operations (CS Ops) Infrastructure",
      "description": "Tooling, data pipelines, and automation powering customer success teams (Gainsight / ChurnZero).",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t3_s1",
      "label": "CS Management Software Integration (Gainsight)",
      "description": "Centralizing customer usage data, CRM contract info, and support tickets into unified CS platforms.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t3_s1_d1",
      "label": "Unified Customer 360 View",
      "description": "Aggregating all customer touchpoints and telemetry into single dashboards.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t3_s1_d2",
      "label": "Automated Playbook Call-to-Action (CTA) Triggers",
      "description": "Generating automated CSM tasks when health scores drop or renewals approach.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t3_s2",
      "label": "CSM Account Capacity Load Balancing",
      "description": "Assigning customer accounts to CSMs based on ARR weight and touch-model tiers.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t3_s2_d1",
      "label": "High-Touch Enterprise Ratio (10-15 Accounts per CSM)",
      "description": "Assigning dedicated CSMs to accounts > $100k ACV.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t3_s2_d2",
      "label": "Low-Touch / Tech-Touch Ratio (100-300 Accounts per CSM)",
      "description": "Managing SMB accounts using automated email playbooks and group webinars.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t3_s3",
      "label": "Product Usage Telemetry Data Pipelines (Segment / Census)",
      "description": "Streaming product usage events from data warehouses into CS platforms.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t3_s3_d1",
      "label": "Reverse ETL Event Streaming (Snowflake -> Gainsight)",
      "description": "Syncing product usage aggregates into CS tools every 24 hours.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t3_s3_d2",
      "label": "Tracking Key Action Frequencies",
      "description": "Monitoring changes in core product feature usage frequencies.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t3_s4",
      "label": "Automated Customer Lifecycle Email Playbooks",
      "description": "Triggering automated email sequences based on user lifecycle stages and health scores.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t3_s4_d1",
      "label": "Automated Nurture Campaigns for Healthy Accounts",
      "description": "Sending tips and advanced feature guides to green-health accounts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t3_s4_d2",
      "label": "Re-Engagement Prompts for At-Risk Users",
      "description": "Sending targeted resources to users whose activity has declined.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t3_s5",
      "label": "CS Performance Reporting & Executive Dashboards",
      "description": "Reporting portfolio retention, NRR, health scores, and CSM activity to executive teams.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t3_s5_d1",
      "label": "Weekly NRR & Churn Forecast Reports",
      "description": "Tracking projected retention metrics against quarterly financial targets.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t3_s5_d2",
      "label": "CSM Activity & CTA Completion Tracking",
      "description": "Monitoring CSM task completion and customer meeting frequencies.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t4",
      "label": "Executive Advocacy & Customer Advisory Boards (CAB)",
      "description": "Building strategic relationships with top customer leaders to drive advocacy and product feedback.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t4_s1",
      "label": "Customer Advisory Board (CAB) Program Design",
      "description": "Assembling an exclusive council of 15-20 C-level customer leaders for bi-annual strategic meetings.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t4_s1_d1",
      "label": "Bi-Annual Strategic Product Roadmap Reviews",
      "description": "Gathering feedback on long-term product vision from top customer executives.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t4_s1_d2",
      "label": "Peer Networking & Industry Thought Leadership",
      "description": "Providing executive networking opportunities for CAB members.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t4_s2",
      "label": "Executive Sponsor Program (ESP) Mapping",
      "description": "Pairing internal company executives (VPs, C-suite) with customer executive counterparts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t4_s2_d1",
      "label": "Quarterly Executive-to-Executive Check-Ins",
      "description": "Maintaining high-level relationships beyond day-to-day CSM interactions.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t4_s2_d2",
      "label": "Unblocking High-Level Commercial & Product Issues",
      "description": "Deploying executive sponsors to resolve critical strategic account blockers.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t4_s3",
      "label": "Customer Reference & Case Study Programs",
      "description": "Mobilizing happy customers to participate in sales reference calls and public case studies.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t4_s3_d1",
      "label": "Sales Reference Call Management",
      "description": "Connecting prospective buyers with existing satisfied customers.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t4_s3_d2",
      "label": "Public Case Study Video & Written Assets",
      "description": "Publishing ROI metrics and success stories for marketing lead generation.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t4_s4",
      "label": "G2 & Peer Review Site Advocacy Campaigns",
      "description": "Systematically soliciting positive customer reviews on G2, Capterra, and TrustRadius.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t4_s4_d1",
      "label": "NPS Promoter Review Requests (Score 9-10)",
      "description": "Prompting happy promoters to write public G2 reviews following high NPS scores.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t4_s4_d2",
      "label": "Maintaining Top Category Leader Placements",
      "description": "Securing top leader quadrant placement on G2 grid reports.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t4_s5",
      "label": "Co-Innovation & Early Beta Access Programs",
      "description": "Partnering with flagship enterprise customers to co-develop innovative product features.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t4_s5_d1",
      "label": "Exclusive Alpha/Beta Access Agreements",
      "description": "Granting early access to cutting-edge features in exchange for detailed feedback.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t4_s5_d2",
      "label": "Co-Branted Feature Launch Announcements",
      "description": "Highlighting joint innovation in press releases and conference keynotes.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t5",
      "label": "Enterprise CSM Playbooks & Operations Topic 5",
      "description": "Detailed first-principles mechanics for Enterprise CSM Playbooks & Operations topic 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t5_s1",
      "label": "Enterprise CSM Playbooks & Operations Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Enterprise CSM Playbooks & Operations Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t5_s1_d1",
      "label": "Enterprise CSM Playbooks & Operations Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise CSM Playbooks & Operations Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t5_s1_d2",
      "label": "Enterprise CSM Playbooks & Operations Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise CSM Playbooks & Operations Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t5_s2",
      "label": "Enterprise CSM Playbooks & Operations Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Enterprise CSM Playbooks & Operations Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t5_s2_d1",
      "label": "Enterprise CSM Playbooks & Operations Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise CSM Playbooks & Operations Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t5_s2_d2",
      "label": "Enterprise CSM Playbooks & Operations Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise CSM Playbooks & Operations Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t5_s3",
      "label": "Enterprise CSM Playbooks & Operations Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Enterprise CSM Playbooks & Operations Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t5_s3_d1",
      "label": "Enterprise CSM Playbooks & Operations Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise CSM Playbooks & Operations Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t5_s3_d2",
      "label": "Enterprise CSM Playbooks & Operations Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise CSM Playbooks & Operations Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t5_s4",
      "label": "Enterprise CSM Playbooks & Operations Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Enterprise CSM Playbooks & Operations Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t5_s4_d1",
      "label": "Enterprise CSM Playbooks & Operations Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise CSM Playbooks & Operations Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t5_s4_d2",
      "label": "Enterprise CSM Playbooks & Operations Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise CSM Playbooks & Operations Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t5_s5",
      "label": "Enterprise CSM Playbooks & Operations Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Enterprise CSM Playbooks & Operations Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t5_s5_d1",
      "label": "Enterprise CSM Playbooks & Operations Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise CSM Playbooks & Operations Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t5_s5_d2",
      "label": "Enterprise CSM Playbooks & Operations Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise CSM Playbooks & Operations Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t6",
      "label": "Enterprise CSM Playbooks & Operations Topic 6",
      "description": "Detailed first-principles mechanics for Enterprise CSM Playbooks & Operations topic 6.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t6_s1",
      "label": "Enterprise CSM Playbooks & Operations Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for Enterprise CSM Playbooks & Operations Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t6_s1_d1",
      "label": "Enterprise CSM Playbooks & Operations Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise CSM Playbooks & Operations Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t6_s1_d2",
      "label": "Enterprise CSM Playbooks & Operations Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise CSM Playbooks & Operations Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t6_s2",
      "label": "Enterprise CSM Playbooks & Operations Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for Enterprise CSM Playbooks & Operations Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t6_s2_d1",
      "label": "Enterprise CSM Playbooks & Operations Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise CSM Playbooks & Operations Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t6_s2_d2",
      "label": "Enterprise CSM Playbooks & Operations Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise CSM Playbooks & Operations Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t6_s3",
      "label": "Enterprise CSM Playbooks & Operations Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for Enterprise CSM Playbooks & Operations Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t6_s3_d1",
      "label": "Enterprise CSM Playbooks & Operations Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise CSM Playbooks & Operations Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t6_s3_d2",
      "label": "Enterprise CSM Playbooks & Operations Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise CSM Playbooks & Operations Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t6_s4",
      "label": "Enterprise CSM Playbooks & Operations Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for Enterprise CSM Playbooks & Operations Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t6_s4_d1",
      "label": "Enterprise CSM Playbooks & Operations Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise CSM Playbooks & Operations Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t6_s4_d2",
      "label": "Enterprise CSM Playbooks & Operations Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise CSM Playbooks & Operations Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t6_s5",
      "label": "Enterprise CSM Playbooks & Operations Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for Enterprise CSM Playbooks & Operations Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t6_s5_d1",
      "label": "Enterprise CSM Playbooks & Operations Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise CSM Playbooks & Operations Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p7_t6_s5_d2",
      "label": "Enterprise CSM Playbooks & Operations Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for Enterprise CSM Playbooks & Operations Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8",
      "label": "SaaS Benchmarks, Valuation & Governance",
      "description": "Public SaaS metrics benchmarks, M&A due diligence, legal contract architecture, and board reporting.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t1",
      "label": "Bessemer BVP Nasdaq Emerging Cloud Index Benchmarks",
      "description": "Analyzing financial operational metrics of top-performing public SaaS companies.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t1_s1",
      "label": "Top Decile NRR Benchmarks (120%+ Enterprise / 110%+ SMB)",
      "description": "Public cloud index metrics showing top decile SaaS companies expanding ARR 20%+ annually from existing cohorts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t1_s1_d1",
      "label": "Snowflake 160%+ Peak NRR Class Benchmark",
      "description": "Examining historical consumption-based NRR benchmarks.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t1_s1_d2",
      "label": "Net Expansion as Primary Valuation Multiplier Driver",
      "description": "Demonstrating that NRR correlates higher with valuation multiples than raw growth rate.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t1_s2",
      "label": "ARR Growth Rate Distribution Across Revenue Stages",
      "description": "Benchmarking median YoY growth expectations across ARR scale milestones.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t1_s2_d1",
      "label": "T2D3 Growth Velocity ($1M -> $3M -> $9M -> $27M -> $81M)",
      "description": "Triple, Triple, Double, Double, Double growth path for hyper-growth SaaS.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t1_s2_d2",
      "label": "Growth Persistence Rate (~85% Annual Growth Retention)",
      "description": "Modeling annual growth rate decay as revenue scale expands.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t1_s3",
      "label": "Gross Margin Distribution (75-85% Target Range)",
      "description": "Maintaining high gross margins to support R&D and S&M investments.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t1_s3_d1",
      "label": "Subscription Gross Margin (80-90%)",
      "description": "Isolating core software hosting and support costs.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t1_s3_d2",
      "label": "Professional Services Margin Blends (0-15%)",
      "description": "Managing low-margin professional services to avoid diluting overall gross margin.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t1_s4",
      "label": "Sales & Marketing Efficiency Index (Payback < 18 Months)",
      "description": "Public SaaS median CAC payback metrics across target customer sizes.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t1_s4_d1",
      "label": "Enterprise SLG Median (18-24 Months)",
      "description": "Accepting longer payback periods for large enterprise contracts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t1_s4_d2",
      "label": "Self-Serve PLG Median (6-12 Months)",
      "description": "Achieving rapid payback on low-touch self-serve acquisition motions.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t1_s5",
      "label": "R&D Spend Efficiency (15-25% of Revenue)",
      "description": "Balancing product R&D investments against overall revenue scale.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t1_s5_d1",
      "label": "Early Stage R&D Intensity (40-60% of Revenue at < $10M ARR)",
      "description": "Investing heavily in initial core platform development.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t1_s5_d2",
      "label": "Late Stage R&D Normalization (15-20% at > $100M ARR)",
      "description": "Normalizing R&D spend percentage as revenue scale grows.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t2",
      "label": "SaaS Legal Contract Architecture & Terms",
      "description": "Structure of enterprise Master Services Agreements (MSA), Statements of Work (SOW), and Service Level Agreements (SLA).",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t2_s1",
      "label": "Master Services Agreement (MSA) Standard Structure",
      "description": "Foundational legal agreement governing overall vendor-customer commercial relationships.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t2_s1_d1",
      "label": "Limitation of Liability (1x Annual Contract Value Cap)",
      "description": "Negotiating standard liability caps to limit financial exposure.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t2_s1_d2",
      "label": "Intellectual Property Ownership & Work Product Rights",
      "description": "Ensuring all platform IP and enhancements remain 100% vendor property.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t2_s2",
      "label": "Service Level Agreement (SLA) Uptime Guarantees (99.9% / 99.99%)",
      "description": "Defining platform availability commitments and penalty credit structures.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t2_s2_d1",
      "label": "Calculating 99.9% Uptime (43 Mins Downtime/Month Max)",
      "description": "Establishing 3-nines baseline uptime targets for standard SaaS.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t2_s2_d2",
      "label": "SLA Downtime Service Credit Escalations",
      "description": "Issuing 10-25% monthly bill credits if uptime drops below SLA thresholds.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t2_s3",
      "label": "Data Processing Addendum (DPA) & Privacy Compliance",
      "description": "Contractual terms ensuring compliance with GDPR, CCPA, and global privacy laws.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t2_s3_d1",
      "label": "Standard Contractual Clauses (SCCs) for Cross-Border Transfers",
      "description": "Executing EU SCCs to legally transfer personal data to US servers.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t2_s3_d2",
      "label": "Sub-Processor Notification & Audit Rights",
      "description": "Notifying customers prior to engaging new third-party cloud sub-processors.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t2_s4",
      "label": "Information Security Exhibit (Infosec Requirements)",
      "description": "Defining mandatory security controls, encryption standards, and audit commitments.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t2_s4_d1",
      "label": "Encryption at Rest (AES-256) & In Transit (TLS 1.3)",
      "description": "Mandating industry-standard data encryption across all storage and networks.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t2_s4_d2",
      "label": "SOC 2 Type II & ISO 27001 Annual Audit Report Delivery",
      "description": "Providing annual independent security audit reports to customer IT teams.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t2_s5",
      "label": "Statement of Work (SOW) Scope & Acceptance Criteria",
      "description": "Defining specific deliverables, timelines, and payment terms for professional services.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t2_s5_d1",
      "label": "Time & Materials (T&M) vs Fixed Fee Pricing",
      "description": "Structuring PS contracts to prevent project scope creep.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t2_s5_d2",
      "label": "Formal Customer Acceptance Sign-Off Milestones",
      "description": "Requiring written sign-offs before releasing milestone payments.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t3",
      "label": "M&A Due Diligence & Revenue Auditing",
      "description": "Comprehensive financial, legal, technical, and operational audits conducted during M&A acquisitions.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t3_s1",
      "label": "Quality of Revenue (QoR) Financial Audits",
      "description": "Independent accounting firm audits verifying ARR accuracy and revenue recognition practices.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t3_s1_d1",
      "label": "Contract-by-Contract Revenue Recognition Audits",
      "description": "Verifying that reported ARR matches actual signed customer contracts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t3_s1_d2",
      "label": "Identifying One-Time Non-Recurring Revenue Inclusions",
      "description": "Excluding setup fees and professional services from recurring ARR calculations.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t3_s2",
      "label": "Cohort Retention & Churn Diligence",
      "description": "Deep-dive analysis of customer cohort retention heatmaps and concentration risks.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t3_s2_d1",
      "label": "Customer Concentration Risk (> 10% Single Account ARR)",
      "description": "Evaluating revenue vulnerability if top customer accounts churn.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t3_s2_d2",
      "label": "Cohort Net Expansion Sustainability Checks",
      "description": "Verifying that historical expansion rates are sustainable across future cohorts.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t3_s3",
      "label": "Open Source Software (OSS) License Audits (Black Duck)",
      "description": "Scanning codebase for copyleft open-source licenses (GPL / AGPL) that risk IP contamination.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t3_s3_d1",
      "label": "Copyleft GPL License Violation Identification",
      "description": "Flagging GPL components that require open-sourcing proprietary software.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t3_s3_d2",
      "label": "Remediation & Library Replacement Procedures",
      "description": "Replacing copyleft libraries with permissive (MIT / Apache 2.0) alternatives prior to M&A close.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t3_s4",
      "label": "Technical Debt & Infrastructure Scalability Audits",
      "description": "Evaluating codebase quality, test coverage, and cloud infrastructure cost architecture.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t3_s4_d1",
      "label": "Cloud Infrastructure Unit Cost Efficiency",
      "description": "Auditing AWS/GCP hosting spend per active user or transaction.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t3_s4_d2",
      "label": "Architectural Bottleneck & Security Vulnerability Assessment",
      "description": "Identifying code refactoring required to support 10x scale.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t3_s5",
      "label": "Customer & Employee Key-Person Retention Risk",
      "description": "Assessing retention risk of key executive talent and flagship customer accounts post-acquisition.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t3_s5_d1",
      "label": "Key Executive Retention Package Construction",
      "description": "Creating stay bonuses and un-vested equity packages for critical technical leaders.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t3_s5_d2",
      "label": "Customer Change-of-Control Contract Provisions",
      "description": "Reviewing enterprise contracts for clauses allowing cancellation upon company acquisition.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t4",
      "label": "SaaS Board Reporting & KPI Governance",
      "description": "Structuring quarterly board decks and executive governance reporting packages.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t4_s1",
      "label": "Standard SaaS Board Reporting Deck Structure",
      "description": "Organizing board meeting packages into standard executive performance sections.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t4_s1_d1",
      "label": "Executive Summary & Key Metric Dashboard (Slide 1-3)",
      "description": "Presenting ARR, NRR, Cash Balance, and Rule of 40 performance against plan.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t4_s1_d2",
      "label": "Sales & Marketing Performance Deep Dive",
      "description": "Reviewing pipeline generation, win rates, CAC payback, and Magic Number.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t4_s1_d3",
      "label": "Product & Engineering Roadmap Progress",
      "description": "Highlighting major feature releases, infrastructure stability, and R&D velocity.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t4_s2",
      "label": "Budget vs Actuals (BvA) Variance Analysis",
      "description": "Tracking financial performance discrepancies against annual board-approved operating plans.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t4_s2_d1",
      "label": "Revenue & Expense Variance Explanations",
      "description": "Explaining > 5% deviations between planned and actual financial results.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t4_s2_d2",
      "label": "Re-Forecasting Full-Year Operating Predictions",
      "description": "Updating full-year ARR and cash runway projections based on actual performance.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t4_s3",
      "label": "Cash Runway & Zero-Cash Date (ZCD) Modeling",
      "description": "Monitoring net monthly cash burn to calculate exact months of remaining operating runway.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t4_s3_d1",
      "label": "Cash Runway Formula = Current Cash Balance / Net Monthly Burn",
      "description": "Maintaining minimum 12-18 months of operating runway at all times.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t4_s3_d2",
      "label": "Fundraising Timing & Milestones (Start 6 Months Before ZCD)",
      "description": "Initiating next venture capital fundraising rounds when 6-9 months of runway remain.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t4_s4",
      "label": "SaaS Unit Economic Trend Graphs",
      "description": "Tracking 8-quarter historical trendlines for CAC, LTV, Payback, and Magic Number.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t4_s4_d1",
      "label": "Visualizing Unit Economic Efficiency Trends",
      "description": "Demonstrating improving sales efficiency as company scale expands.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t4_s4_d2",
      "label": "Early Identification of Unit Economic Degradation",
      "description": "Spotting rising CAC or lengthening payback periods early to adjust strategy.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t4_s5",
      "label": "Board Governance & Compensation Committee Oversight",
      "description": "Managing formal board committee approvals for executive compensation and equity grants.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t4_s5_d1",
      "label": "Option Pool Expansion & Grant Approvals",
      "description": "Approving employee stock option grants and managing cap table dilution.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t4_s5_d2",
      "label": "Executive Bonus & Compensation Performance Reviews",
      "description": "Evaluating C-level executive performance against board-approved annual targets.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t5",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 5",
      "description": "Detailed first-principles mechanics for SaaS Benchmarks, Valuation & Governance topic 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t5_s1",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for SaaS Benchmarks, Valuation & Governance Topic 5 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t5_s1_d1",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t5_s1_d2",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t5_s2",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for SaaS Benchmarks, Valuation & Governance Topic 5 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t5_s2_d1",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t5_s2_d2",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t5_s3",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for SaaS Benchmarks, Valuation & Governance Topic 5 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t5_s3_d1",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t5_s3_d2",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t5_s4",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for SaaS Benchmarks, Valuation & Governance Topic 5 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t5_s4_d1",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t5_s4_d2",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t5_s5",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for SaaS Benchmarks, Valuation & Governance Topic 5 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t5_s5_d1",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t5_s5_d2",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SaaS Benchmarks, Valuation & Governance Topic 5 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t6",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 6",
      "description": "Detailed first-principles mechanics for SaaS Benchmarks, Valuation & Governance topic 6.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t6_s1",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 1",
      "description": "Technical implementation parameters and algorithm specifications for SaaS Benchmarks, Valuation & Governance Topic 6 sub-system 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t6_s1_d1",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 1 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t6_s1_d2",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 1 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 1.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t6_s2",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 2",
      "description": "Technical implementation parameters and algorithm specifications for SaaS Benchmarks, Valuation & Governance Topic 6 sub-system 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t6_s2_d1",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 2 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t6_s2_d2",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 2 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 2.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t6_s3",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 3",
      "description": "Technical implementation parameters and algorithm specifications for SaaS Benchmarks, Valuation & Governance Topic 6 sub-system 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t6_s3_d1",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 3 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t6_s3_d2",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 3 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 3.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t6_s4",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 4",
      "description": "Technical implementation parameters and algorithm specifications for SaaS Benchmarks, Valuation & Governance Topic 6 sub-system 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t6_s4_d1",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 4 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t6_s4_d2",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 4 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 4.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t6_s5",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 5",
      "description": "Technical implementation parameters and algorithm specifications for SaaS Benchmarks, Valuation & Governance Topic 6 sub-system 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t6_s5_d1",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 5 Spec 1",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 5.",
      "type": "concept"
    },
    {
      "id": "saas_root_p8_t6_s5_d2",
      "label": "SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 5 Spec 2",
      "description": "Explicit mathematical bounds, RFC standards, parameter equations, or runtime latency bounds for SaaS Benchmarks, Valuation & Governance Topic 6 Sub-System 5.",
      "type": "concept"
    }
  ],
  "edges": [
    {
      "source": "saas_root",
      "target": "saas_root_p1"
    },
    {
      "source": "saas_root_p1",
      "target": "saas_root_p1_t1"
    },
    {
      "source": "saas_root_p1_t1",
      "target": "saas_root_p1_t1_s1"
    },
    {
      "source": "saas_root_p1_t1_s1",
      "target": "saas_root_p1_t1_s1_d1"
    },
    {
      "source": "saas_root_p1_t1_s1",
      "target": "saas_root_p1_t1_s1_d2"
    },
    {
      "source": "saas_root_p1_t1",
      "target": "saas_root_p1_t1_s2"
    },
    {
      "source": "saas_root_p1_t1_s2",
      "target": "saas_root_p1_t1_s2_d1"
    },
    {
      "source": "saas_root_p1_t1_s2",
      "target": "saas_root_p1_t1_s2_d2"
    },
    {
      "source": "saas_root_p1_t1",
      "target": "saas_root_p1_t1_s3"
    },
    {
      "source": "saas_root_p1_t1_s3",
      "target": "saas_root_p1_t1_s3_d1"
    },
    {
      "source": "saas_root_p1_t1_s3",
      "target": "saas_root_p1_t1_s3_d2"
    },
    {
      "source": "saas_root_p1_t1",
      "target": "saas_root_p1_t1_s4"
    },
    {
      "source": "saas_root_p1_t1_s4",
      "target": "saas_root_p1_t1_s4_d1"
    },
    {
      "source": "saas_root_p1_t1_s4",
      "target": "saas_root_p1_t1_s4_d2"
    },
    {
      "source": "saas_root_p1_t1",
      "target": "saas_root_p1_t1_s5"
    },
    {
      "source": "saas_root_p1_t1_s5",
      "target": "saas_root_p1_t1_s5_d1"
    },
    {
      "source": "saas_root_p1_t1_s5",
      "target": "saas_root_p1_t1_s5_d2"
    },
    {
      "source": "saas_root_p1",
      "target": "saas_root_p1_t2"
    },
    {
      "source": "saas_root_p1_t2",
      "target": "saas_root_p1_t2_s1"
    },
    {
      "source": "saas_root_p1_t2_s1",
      "target": "saas_root_p1_t2_s1_d1"
    },
    {
      "source": "saas_root_p1_t2_s1",
      "target": "saas_root_p1_t2_s1_d2"
    },
    {
      "source": "saas_root_p1_t2",
      "target": "saas_root_p1_t2_s2"
    },
    {
      "source": "saas_root_p1_t2_s2",
      "target": "saas_root_p1_t2_s2_d1"
    },
    {
      "source": "saas_root_p1_t2_s2",
      "target": "saas_root_p1_t2_s2_d2"
    },
    {
      "source": "saas_root_p1_t2",
      "target": "saas_root_p1_t2_s3"
    },
    {
      "source": "saas_root_p1_t2_s3",
      "target": "saas_root_p1_t2_s3_d1"
    },
    {
      "source": "saas_root_p1_t2_s3",
      "target": "saas_root_p1_t2_s3_d2"
    },
    {
      "source": "saas_root_p1_t2",
      "target": "saas_root_p1_t2_s4"
    },
    {
      "source": "saas_root_p1_t2_s4",
      "target": "saas_root_p1_t2_s4_d1"
    },
    {
      "source": "saas_root_p1_t2_s4",
      "target": "saas_root_p1_t2_s4_d2"
    },
    {
      "source": "saas_root_p1_t2",
      "target": "saas_root_p1_t2_s5"
    },
    {
      "source": "saas_root_p1_t2_s5",
      "target": "saas_root_p1_t2_s5_d1"
    },
    {
      "source": "saas_root_p1_t2_s5",
      "target": "saas_root_p1_t2_s5_d2"
    },
    {
      "source": "saas_root_p1",
      "target": "saas_root_p1_t3"
    },
    {
      "source": "saas_root_p1_t3",
      "target": "saas_root_p1_t3_s1"
    },
    {
      "source": "saas_root_p1_t3_s1",
      "target": "saas_root_p1_t3_s1_d1"
    },
    {
      "source": "saas_root_p1_t3_s1",
      "target": "saas_root_p1_t3_s1_d2"
    },
    {
      "source": "saas_root_p1_t3",
      "target": "saas_root_p1_t3_s2"
    },
    {
      "source": "saas_root_p1_t3_s2",
      "target": "saas_root_p1_t3_s2_d1"
    },
    {
      "source": "saas_root_p1_t3_s2",
      "target": "saas_root_p1_t3_s2_d2"
    },
    {
      "source": "saas_root_p1_t3",
      "target": "saas_root_p1_t3_s3"
    },
    {
      "source": "saas_root_p1_t3_s3",
      "target": "saas_root_p1_t3_s3_d1"
    },
    {
      "source": "saas_root_p1_t3_s3",
      "target": "saas_root_p1_t3_s3_d2"
    },
    {
      "source": "saas_root_p1_t3",
      "target": "saas_root_p1_t3_s4"
    },
    {
      "source": "saas_root_p1_t3_s4",
      "target": "saas_root_p1_t3_s4_d1"
    },
    {
      "source": "saas_root_p1_t3_s4",
      "target": "saas_root_p1_t3_s4_d2"
    },
    {
      "source": "saas_root_p1_t3",
      "target": "saas_root_p1_t3_s5"
    },
    {
      "source": "saas_root_p1_t3_s5",
      "target": "saas_root_p1_t3_s5_d1"
    },
    {
      "source": "saas_root_p1_t3_s5",
      "target": "saas_root_p1_t3_s5_d2"
    },
    {
      "source": "saas_root_p1",
      "target": "saas_root_p1_t4"
    },
    {
      "source": "saas_root_p1_t4",
      "target": "saas_root_p1_t4_s1"
    },
    {
      "source": "saas_root_p1_t4_s1",
      "target": "saas_root_p1_t4_s1_d1"
    },
    {
      "source": "saas_root_p1_t4_s1",
      "target": "saas_root_p1_t4_s1_d2"
    },
    {
      "source": "saas_root_p1_t4",
      "target": "saas_root_p1_t4_s2"
    },
    {
      "source": "saas_root_p1_t4_s2",
      "target": "saas_root_p1_t4_s2_d1"
    },
    {
      "source": "saas_root_p1_t4_s2",
      "target": "saas_root_p1_t4_s2_d2"
    },
    {
      "source": "saas_root_p1_t4",
      "target": "saas_root_p1_t4_s3"
    },
    {
      "source": "saas_root_p1_t4_s3",
      "target": "saas_root_p1_t4_s3_d1"
    },
    {
      "source": "saas_root_p1_t4_s3",
      "target": "saas_root_p1_t4_s3_d2"
    },
    {
      "source": "saas_root_p1_t4",
      "target": "saas_root_p1_t4_s4"
    },
    {
      "source": "saas_root_p1_t4_s4",
      "target": "saas_root_p1_t4_s4_d1"
    },
    {
      "source": "saas_root_p1_t4_s4",
      "target": "saas_root_p1_t4_s4_d2"
    },
    {
      "source": "saas_root_p1_t4",
      "target": "saas_root_p1_t4_s5"
    },
    {
      "source": "saas_root_p1_t4_s5",
      "target": "saas_root_p1_t4_s5_d1"
    },
    {
      "source": "saas_root_p1_t4_s5",
      "target": "saas_root_p1_t4_s5_d2"
    },
    {
      "source": "saas_root_p1",
      "target": "saas_root_p1_t5"
    },
    {
      "source": "saas_root_p1_t5",
      "target": "saas_root_p1_t5_s1"
    },
    {
      "source": "saas_root_p1_t5_s1",
      "target": "saas_root_p1_t5_s1_d1"
    },
    {
      "source": "saas_root_p1_t5_s1",
      "target": "saas_root_p1_t5_s1_d2"
    },
    {
      "source": "saas_root_p1_t5",
      "target": "saas_root_p1_t5_s2"
    },
    {
      "source": "saas_root_p1_t5_s2",
      "target": "saas_root_p1_t5_s2_d1"
    },
    {
      "source": "saas_root_p1_t5_s2",
      "target": "saas_root_p1_t5_s2_d2"
    },
    {
      "source": "saas_root_p1_t5",
      "target": "saas_root_p1_t5_s3"
    },
    {
      "source": "saas_root_p1_t5_s3",
      "target": "saas_root_p1_t5_s3_d1"
    },
    {
      "source": "saas_root_p1_t5_s3",
      "target": "saas_root_p1_t5_s3_d2"
    },
    {
      "source": "saas_root_p1_t5",
      "target": "saas_root_p1_t5_s4"
    },
    {
      "source": "saas_root_p1_t5_s4",
      "target": "saas_root_p1_t5_s4_d1"
    },
    {
      "source": "saas_root_p1_t5_s4",
      "target": "saas_root_p1_t5_s4_d2"
    },
    {
      "source": "saas_root_p1_t5",
      "target": "saas_root_p1_t5_s5"
    },
    {
      "source": "saas_root_p1_t5_s5",
      "target": "saas_root_p1_t5_s5_d1"
    },
    {
      "source": "saas_root_p1_t5_s5",
      "target": "saas_root_p1_t5_s5_d2"
    },
    {
      "source": "saas_root_p1",
      "target": "saas_root_p1_t6"
    },
    {
      "source": "saas_root_p1_t6",
      "target": "saas_root_p1_t6_s1"
    },
    {
      "source": "saas_root_p1_t6_s1",
      "target": "saas_root_p1_t6_s1_d1"
    },
    {
      "source": "saas_root_p1_t6_s1",
      "target": "saas_root_p1_t6_s1_d2"
    },
    {
      "source": "saas_root_p1_t6",
      "target": "saas_root_p1_t6_s2"
    },
    {
      "source": "saas_root_p1_t6_s2",
      "target": "saas_root_p1_t6_s2_d1"
    },
    {
      "source": "saas_root_p1_t6_s2",
      "target": "saas_root_p1_t6_s2_d2"
    },
    {
      "source": "saas_root_p1_t6",
      "target": "saas_root_p1_t6_s3"
    },
    {
      "source": "saas_root_p1_t6_s3",
      "target": "saas_root_p1_t6_s3_d1"
    },
    {
      "source": "saas_root_p1_t6_s3",
      "target": "saas_root_p1_t6_s3_d2"
    },
    {
      "source": "saas_root_p1_t6",
      "target": "saas_root_p1_t6_s4"
    },
    {
      "source": "saas_root_p1_t6_s4",
      "target": "saas_root_p1_t6_s4_d1"
    },
    {
      "source": "saas_root_p1_t6_s4",
      "target": "saas_root_p1_t6_s4_d2"
    },
    {
      "source": "saas_root_p1_t6",
      "target": "saas_root_p1_t6_s5"
    },
    {
      "source": "saas_root_p1_t6_s5",
      "target": "saas_root_p1_t6_s5_d1"
    },
    {
      "source": "saas_root_p1_t6_s5",
      "target": "saas_root_p1_t6_s5_d2"
    },
    {
      "source": "saas_root",
      "target": "saas_root_p2"
    },
    {
      "source": "saas_root_p2",
      "target": "saas_root_p2_t1"
    },
    {
      "source": "saas_root_p2_t1",
      "target": "saas_root_p2_t1_s1"
    },
    {
      "source": "saas_root_p2_t1_s1",
      "target": "saas_root_p2_t1_s1_d1"
    },
    {
      "source": "saas_root_p2_t1_s1",
      "target": "saas_root_p2_t1_s1_d2"
    },
    {
      "source": "saas_root_p2_t1",
      "target": "saas_root_p2_t1_s2"
    },
    {
      "source": "saas_root_p2_t1_s2",
      "target": "saas_root_p2_t1_s2_d1"
    },
    {
      "source": "saas_root_p2_t1_s2",
      "target": "saas_root_p2_t1_s2_d2"
    },
    {
      "source": "saas_root_p2_t1",
      "target": "saas_root_p2_t1_s3"
    },
    {
      "source": "saas_root_p2_t1_s3",
      "target": "saas_root_p2_t1_s3_d1"
    },
    {
      "source": "saas_root_p2_t1_s3",
      "target": "saas_root_p2_t1_s3_d2"
    },
    {
      "source": "saas_root_p2_t1",
      "target": "saas_root_p2_t1_s4"
    },
    {
      "source": "saas_root_p2_t1_s4",
      "target": "saas_root_p2_t1_s4_d1"
    },
    {
      "source": "saas_root_p2_t1_s4",
      "target": "saas_root_p2_t1_s4_d2"
    },
    {
      "source": "saas_root_p2_t1",
      "target": "saas_root_p2_t1_s5"
    },
    {
      "source": "saas_root_p2_t1_s5",
      "target": "saas_root_p2_t1_s5_d1"
    },
    {
      "source": "saas_root_p2_t1_s5",
      "target": "saas_root_p2_t1_s5_d2"
    },
    {
      "source": "saas_root_p2",
      "target": "saas_root_p2_t2"
    },
    {
      "source": "saas_root_p2_t2",
      "target": "saas_root_p2_t2_s1"
    },
    {
      "source": "saas_root_p2_t2_s1",
      "target": "saas_root_p2_t2_s1_d1"
    },
    {
      "source": "saas_root_p2_t2_s1",
      "target": "saas_root_p2_t2_s1_d2"
    },
    {
      "source": "saas_root_p2_t2",
      "target": "saas_root_p2_t2_s2"
    },
    {
      "source": "saas_root_p2_t2_s2",
      "target": "saas_root_p2_t2_s2_d1"
    },
    {
      "source": "saas_root_p2_t2_s2",
      "target": "saas_root_p2_t2_s2_d2"
    },
    {
      "source": "saas_root_p2_t2",
      "target": "saas_root_p2_t2_s3"
    },
    {
      "source": "saas_root_p2_t2_s3",
      "target": "saas_root_p2_t2_s3_d1"
    },
    {
      "source": "saas_root_p2_t2_s3",
      "target": "saas_root_p2_t2_s3_d2"
    },
    {
      "source": "saas_root_p2_t2",
      "target": "saas_root_p2_t2_s4"
    },
    {
      "source": "saas_root_p2_t2_s4",
      "target": "saas_root_p2_t2_s4_d1"
    },
    {
      "source": "saas_root_p2_t2_s4",
      "target": "saas_root_p2_t2_s4_d2"
    },
    {
      "source": "saas_root_p2_t2",
      "target": "saas_root_p2_t2_s5"
    },
    {
      "source": "saas_root_p2_t2_s5",
      "target": "saas_root_p2_t2_s5_d1"
    },
    {
      "source": "saas_root_p2_t2_s5",
      "target": "saas_root_p2_t2_s5_d2"
    },
    {
      "source": "saas_root_p2",
      "target": "saas_root_p2_t3"
    },
    {
      "source": "saas_root_p2_t3",
      "target": "saas_root_p2_t3_s1"
    },
    {
      "source": "saas_root_p2_t3_s1",
      "target": "saas_root_p2_t3_s1_d1"
    },
    {
      "source": "saas_root_p2_t3_s1",
      "target": "saas_root_p2_t3_s1_d2"
    },
    {
      "source": "saas_root_p2_t3",
      "target": "saas_root_p2_t3_s2"
    },
    {
      "source": "saas_root_p2_t3_s2",
      "target": "saas_root_p2_t3_s2_d1"
    },
    {
      "source": "saas_root_p2_t3_s2",
      "target": "saas_root_p2_t3_s2_d2"
    },
    {
      "source": "saas_root_p2_t3",
      "target": "saas_root_p2_t3_s3"
    },
    {
      "source": "saas_root_p2_t3_s3",
      "target": "saas_root_p2_t3_s3_d1"
    },
    {
      "source": "saas_root_p2_t3_s3",
      "target": "saas_root_p2_t3_s3_d2"
    },
    {
      "source": "saas_root_p2_t3",
      "target": "saas_root_p2_t3_s4"
    },
    {
      "source": "saas_root_p2_t3_s4",
      "target": "saas_root_p2_t3_s4_d1"
    },
    {
      "source": "saas_root_p2_t3_s4",
      "target": "saas_root_p2_t3_s4_d2"
    },
    {
      "source": "saas_root_p2_t3",
      "target": "saas_root_p2_t3_s5"
    },
    {
      "source": "saas_root_p2_t3_s5",
      "target": "saas_root_p2_t3_s5_d1"
    },
    {
      "source": "saas_root_p2_t3_s5",
      "target": "saas_root_p2_t3_s5_d2"
    },
    {
      "source": "saas_root_p2",
      "target": "saas_root_p2_t4"
    },
    {
      "source": "saas_root_p2_t4",
      "target": "saas_root_p2_t4_s1"
    },
    {
      "source": "saas_root_p2_t4_s1",
      "target": "saas_root_p2_t4_s1_d1"
    },
    {
      "source": "saas_root_p2_t4_s1",
      "target": "saas_root_p2_t4_s1_d2"
    },
    {
      "source": "saas_root_p2_t4",
      "target": "saas_root_p2_t4_s2"
    },
    {
      "source": "saas_root_p2_t4_s2",
      "target": "saas_root_p2_t4_s2_d1"
    },
    {
      "source": "saas_root_p2_t4_s2",
      "target": "saas_root_p2_t4_s2_d2"
    },
    {
      "source": "saas_root_p2_t4",
      "target": "saas_root_p2_t4_s3"
    },
    {
      "source": "saas_root_p2_t4_s3",
      "target": "saas_root_p2_t4_s3_d1"
    },
    {
      "source": "saas_root_p2_t4_s3",
      "target": "saas_root_p2_t4_s3_d2"
    },
    {
      "source": "saas_root_p2_t4",
      "target": "saas_root_p2_t4_s4"
    },
    {
      "source": "saas_root_p2_t4_s4",
      "target": "saas_root_p2_t4_s4_d1"
    },
    {
      "source": "saas_root_p2_t4_s4",
      "target": "saas_root_p2_t4_s4_d2"
    },
    {
      "source": "saas_root_p2_t4",
      "target": "saas_root_p2_t4_s5"
    },
    {
      "source": "saas_root_p2_t4_s5",
      "target": "saas_root_p2_t4_s5_d1"
    },
    {
      "source": "saas_root_p2_t4_s5",
      "target": "saas_root_p2_t4_s5_d2"
    },
    {
      "source": "saas_root_p2",
      "target": "saas_root_p2_t5"
    },
    {
      "source": "saas_root_p2_t5",
      "target": "saas_root_p2_t5_s1"
    },
    {
      "source": "saas_root_p2_t5_s1",
      "target": "saas_root_p2_t5_s1_d1"
    },
    {
      "source": "saas_root_p2_t5_s1",
      "target": "saas_root_p2_t5_s1_d2"
    },
    {
      "source": "saas_root_p2_t5",
      "target": "saas_root_p2_t5_s2"
    },
    {
      "source": "saas_root_p2_t5_s2",
      "target": "saas_root_p2_t5_s2_d1"
    },
    {
      "source": "saas_root_p2_t5_s2",
      "target": "saas_root_p2_t5_s2_d2"
    },
    {
      "source": "saas_root_p2_t5",
      "target": "saas_root_p2_t5_s3"
    },
    {
      "source": "saas_root_p2_t5_s3",
      "target": "saas_root_p2_t5_s3_d1"
    },
    {
      "source": "saas_root_p2_t5_s3",
      "target": "saas_root_p2_t5_s3_d2"
    },
    {
      "source": "saas_root_p2_t5",
      "target": "saas_root_p2_t5_s4"
    },
    {
      "source": "saas_root_p2_t5_s4",
      "target": "saas_root_p2_t5_s4_d1"
    },
    {
      "source": "saas_root_p2_t5_s4",
      "target": "saas_root_p2_t5_s4_d2"
    },
    {
      "source": "saas_root_p2_t5",
      "target": "saas_root_p2_t5_s5"
    },
    {
      "source": "saas_root_p2_t5_s5",
      "target": "saas_root_p2_t5_s5_d1"
    },
    {
      "source": "saas_root_p2_t5_s5",
      "target": "saas_root_p2_t5_s5_d2"
    },
    {
      "source": "saas_root_p2",
      "target": "saas_root_p2_t6"
    },
    {
      "source": "saas_root_p2_t6",
      "target": "saas_root_p2_t6_s1"
    },
    {
      "source": "saas_root_p2_t6_s1",
      "target": "saas_root_p2_t6_s1_d1"
    },
    {
      "source": "saas_root_p2_t6_s1",
      "target": "saas_root_p2_t6_s1_d2"
    },
    {
      "source": "saas_root_p2_t6",
      "target": "saas_root_p2_t6_s2"
    },
    {
      "source": "saas_root_p2_t6_s2",
      "target": "saas_root_p2_t6_s2_d1"
    },
    {
      "source": "saas_root_p2_t6_s2",
      "target": "saas_root_p2_t6_s2_d2"
    },
    {
      "source": "saas_root_p2_t6",
      "target": "saas_root_p2_t6_s3"
    },
    {
      "source": "saas_root_p2_t6_s3",
      "target": "saas_root_p2_t6_s3_d1"
    },
    {
      "source": "saas_root_p2_t6_s3",
      "target": "saas_root_p2_t6_s3_d2"
    },
    {
      "source": "saas_root_p2_t6",
      "target": "saas_root_p2_t6_s4"
    },
    {
      "source": "saas_root_p2_t6_s4",
      "target": "saas_root_p2_t6_s4_d1"
    },
    {
      "source": "saas_root_p2_t6_s4",
      "target": "saas_root_p2_t6_s4_d2"
    },
    {
      "source": "saas_root_p2_t6",
      "target": "saas_root_p2_t6_s5"
    },
    {
      "source": "saas_root_p2_t6_s5",
      "target": "saas_root_p2_t6_s5_d1"
    },
    {
      "source": "saas_root_p2_t6_s5",
      "target": "saas_root_p2_t6_s5_d2"
    },
    {
      "source": "saas_root",
      "target": "saas_root_p3"
    },
    {
      "source": "saas_root_p3",
      "target": "saas_root_p3_t1"
    },
    {
      "source": "saas_root_p3_t1",
      "target": "saas_root_p3_t1_s1"
    },
    {
      "source": "saas_root_p3_t1_s1",
      "target": "saas_root_p3_t1_s1_d1"
    },
    {
      "source": "saas_root_p3_t1_s1",
      "target": "saas_root_p3_t1_s1_d2"
    },
    {
      "source": "saas_root_p3_t1",
      "target": "saas_root_p3_t1_s2"
    },
    {
      "source": "saas_root_p3_t1_s2",
      "target": "saas_root_p3_t1_s2_d1"
    },
    {
      "source": "saas_root_p3_t1_s2",
      "target": "saas_root_p3_t1_s2_d2"
    },
    {
      "source": "saas_root_p3_t1",
      "target": "saas_root_p3_t1_s3"
    },
    {
      "source": "saas_root_p3_t1_s3",
      "target": "saas_root_p3_t1_s3_d1"
    },
    {
      "source": "saas_root_p3_t1_s3",
      "target": "saas_root_p3_t1_s3_d2"
    },
    {
      "source": "saas_root_p3_t1",
      "target": "saas_root_p3_t1_s4"
    },
    {
      "source": "saas_root_p3_t1_s4",
      "target": "saas_root_p3_t1_s4_d1"
    },
    {
      "source": "saas_root_p3_t1_s4",
      "target": "saas_root_p3_t1_s4_d2"
    },
    {
      "source": "saas_root_p3_t1",
      "target": "saas_root_p3_t1_s5"
    },
    {
      "source": "saas_root_p3_t1_s5",
      "target": "saas_root_p3_t1_s5_d1"
    },
    {
      "source": "saas_root_p3_t1_s5",
      "target": "saas_root_p3_t1_s5_d2"
    },
    {
      "source": "saas_root_p3",
      "target": "saas_root_p3_t2"
    },
    {
      "source": "saas_root_p3_t2",
      "target": "saas_root_p3_t2_s1"
    },
    {
      "source": "saas_root_p3_t2_s1",
      "target": "saas_root_p3_t2_s1_d1"
    },
    {
      "source": "saas_root_p3_t2_s1",
      "target": "saas_root_p3_t2_s1_d2"
    },
    {
      "source": "saas_root_p3_t2_s1",
      "target": "saas_root_p3_t2_s1_d3"
    },
    {
      "source": "saas_root_p3_t2",
      "target": "saas_root_p3_t2_s2"
    },
    {
      "source": "saas_root_p3_t2_s2",
      "target": "saas_root_p3_t2_s2_d1"
    },
    {
      "source": "saas_root_p3_t2_s2",
      "target": "saas_root_p3_t2_s2_d2"
    },
    {
      "source": "saas_root_p3_t2",
      "target": "saas_root_p3_t2_s3"
    },
    {
      "source": "saas_root_p3_t2_s3",
      "target": "saas_root_p3_t2_s3_d1"
    },
    {
      "source": "saas_root_p3_t2_s3",
      "target": "saas_root_p3_t2_s3_d2"
    },
    {
      "source": "saas_root_p3_t2",
      "target": "saas_root_p3_t2_s4"
    },
    {
      "source": "saas_root_p3_t2_s4",
      "target": "saas_root_p3_t2_s4_d1"
    },
    {
      "source": "saas_root_p3_t2_s4",
      "target": "saas_root_p3_t2_s4_d2"
    },
    {
      "source": "saas_root_p3_t2",
      "target": "saas_root_p3_t2_s5"
    },
    {
      "source": "saas_root_p3_t2_s5",
      "target": "saas_root_p3_t2_s5_d1"
    },
    {
      "source": "saas_root_p3_t2_s5",
      "target": "saas_root_p3_t2_s5_d2"
    },
    {
      "source": "saas_root_p3",
      "target": "saas_root_p3_t3"
    },
    {
      "source": "saas_root_p3_t3",
      "target": "saas_root_p3_t3_s1"
    },
    {
      "source": "saas_root_p3_t3_s1",
      "target": "saas_root_p3_t3_s1_d1"
    },
    {
      "source": "saas_root_p3_t3_s1",
      "target": "saas_root_p3_t3_s1_d2"
    },
    {
      "source": "saas_root_p3_t3",
      "target": "saas_root_p3_t3_s2"
    },
    {
      "source": "saas_root_p3_t3_s2",
      "target": "saas_root_p3_t3_s2_d1"
    },
    {
      "source": "saas_root_p3_t3_s2",
      "target": "saas_root_p3_t3_s2_d2"
    },
    {
      "source": "saas_root_p3_t3",
      "target": "saas_root_p3_t3_s3"
    },
    {
      "source": "saas_root_p3_t3_s3",
      "target": "saas_root_p3_t3_s3_d1"
    },
    {
      "source": "saas_root_p3_t3_s3",
      "target": "saas_root_p3_t3_s3_d2"
    },
    {
      "source": "saas_root_p3_t3",
      "target": "saas_root_p3_t3_s4"
    },
    {
      "source": "saas_root_p3_t3_s4",
      "target": "saas_root_p3_t3_s4_d1"
    },
    {
      "source": "saas_root_p3_t3_s4",
      "target": "saas_root_p3_t3_s4_d2"
    },
    {
      "source": "saas_root_p3_t3",
      "target": "saas_root_p3_t3_s5"
    },
    {
      "source": "saas_root_p3_t3_s5",
      "target": "saas_root_p3_t3_s5_d1"
    },
    {
      "source": "saas_root_p3_t3_s5",
      "target": "saas_root_p3_t3_s5_d2"
    },
    {
      "source": "saas_root_p3",
      "target": "saas_root_p3_t4"
    },
    {
      "source": "saas_root_p3_t4",
      "target": "saas_root_p3_t4_s1"
    },
    {
      "source": "saas_root_p3_t4_s1",
      "target": "saas_root_p3_t4_s1_d1"
    },
    {
      "source": "saas_root_p3_t4_s1",
      "target": "saas_root_p3_t4_s1_d2"
    },
    {
      "source": "saas_root_p3_t4",
      "target": "saas_root_p3_t4_s2"
    },
    {
      "source": "saas_root_p3_t4_s2",
      "target": "saas_root_p3_t4_s2_d1"
    },
    {
      "source": "saas_root_p3_t4_s2",
      "target": "saas_root_p3_t4_s2_d2"
    },
    {
      "source": "saas_root_p3_t4",
      "target": "saas_root_p3_t4_s3"
    },
    {
      "source": "saas_root_p3_t4_s3",
      "target": "saas_root_p3_t4_s3_d1"
    },
    {
      "source": "saas_root_p3_t4_s3",
      "target": "saas_root_p3_t4_s3_d2"
    },
    {
      "source": "saas_root_p3_t4",
      "target": "saas_root_p3_t4_s4"
    },
    {
      "source": "saas_root_p3_t4_s4",
      "target": "saas_root_p3_t4_s4_d1"
    },
    {
      "source": "saas_root_p3_t4_s4",
      "target": "saas_root_p3_t4_s4_d2"
    },
    {
      "source": "saas_root_p3_t4",
      "target": "saas_root_p3_t4_s5"
    },
    {
      "source": "saas_root_p3_t4_s5",
      "target": "saas_root_p3_t4_s5_d1"
    },
    {
      "source": "saas_root_p3_t4_s5",
      "target": "saas_root_p3_t4_s5_d2"
    },
    {
      "source": "saas_root_p3",
      "target": "saas_root_p3_t5"
    },
    {
      "source": "saas_root_p3_t5",
      "target": "saas_root_p3_t5_s1"
    },
    {
      "source": "saas_root_p3_t5_s1",
      "target": "saas_root_p3_t5_s1_d1"
    },
    {
      "source": "saas_root_p3_t5_s1",
      "target": "saas_root_p3_t5_s1_d2"
    },
    {
      "source": "saas_root_p3_t5",
      "target": "saas_root_p3_t5_s2"
    },
    {
      "source": "saas_root_p3_t5_s2",
      "target": "saas_root_p3_t5_s2_d1"
    },
    {
      "source": "saas_root_p3_t5_s2",
      "target": "saas_root_p3_t5_s2_d2"
    },
    {
      "source": "saas_root_p3_t5",
      "target": "saas_root_p3_t5_s3"
    },
    {
      "source": "saas_root_p3_t5_s3",
      "target": "saas_root_p3_t5_s3_d1"
    },
    {
      "source": "saas_root_p3_t5_s3",
      "target": "saas_root_p3_t5_s3_d2"
    },
    {
      "source": "saas_root_p3_t5",
      "target": "saas_root_p3_t5_s4"
    },
    {
      "source": "saas_root_p3_t5_s4",
      "target": "saas_root_p3_t5_s4_d1"
    },
    {
      "source": "saas_root_p3_t5_s4",
      "target": "saas_root_p3_t5_s4_d2"
    },
    {
      "source": "saas_root_p3_t5",
      "target": "saas_root_p3_t5_s5"
    },
    {
      "source": "saas_root_p3_t5_s5",
      "target": "saas_root_p3_t5_s5_d1"
    },
    {
      "source": "saas_root_p3_t5_s5",
      "target": "saas_root_p3_t5_s5_d2"
    },
    {
      "source": "saas_root_p3",
      "target": "saas_root_p3_t6"
    },
    {
      "source": "saas_root_p3_t6",
      "target": "saas_root_p3_t6_s1"
    },
    {
      "source": "saas_root_p3_t6_s1",
      "target": "saas_root_p3_t6_s1_d1"
    },
    {
      "source": "saas_root_p3_t6_s1",
      "target": "saas_root_p3_t6_s1_d2"
    },
    {
      "source": "saas_root_p3_t6",
      "target": "saas_root_p3_t6_s2"
    },
    {
      "source": "saas_root_p3_t6_s2",
      "target": "saas_root_p3_t6_s2_d1"
    },
    {
      "source": "saas_root_p3_t6_s2",
      "target": "saas_root_p3_t6_s2_d2"
    },
    {
      "source": "saas_root_p3_t6",
      "target": "saas_root_p3_t6_s3"
    },
    {
      "source": "saas_root_p3_t6_s3",
      "target": "saas_root_p3_t6_s3_d1"
    },
    {
      "source": "saas_root_p3_t6_s3",
      "target": "saas_root_p3_t6_s3_d2"
    },
    {
      "source": "saas_root_p3_t6",
      "target": "saas_root_p3_t6_s4"
    },
    {
      "source": "saas_root_p3_t6_s4",
      "target": "saas_root_p3_t6_s4_d1"
    },
    {
      "source": "saas_root_p3_t6_s4",
      "target": "saas_root_p3_t6_s4_d2"
    },
    {
      "source": "saas_root_p3_t6",
      "target": "saas_root_p3_t6_s5"
    },
    {
      "source": "saas_root_p3_t6_s5",
      "target": "saas_root_p3_t6_s5_d1"
    },
    {
      "source": "saas_root_p3_t6_s5",
      "target": "saas_root_p3_t6_s5_d2"
    },
    {
      "source": "saas_root",
      "target": "saas_root_p4"
    },
    {
      "source": "saas_root_p4",
      "target": "saas_root_p4_t1"
    },
    {
      "source": "saas_root_p4_t1",
      "target": "saas_root_p4_t1_s1"
    },
    {
      "source": "saas_root_p4_t1_s1",
      "target": "saas_root_p4_t1_s1_d1"
    },
    {
      "source": "saas_root_p4_t1_s1",
      "target": "saas_root_p4_t1_s1_d2"
    },
    {
      "source": "saas_root_p4_t1",
      "target": "saas_root_p4_t1_s2"
    },
    {
      "source": "saas_root_p4_t1_s2",
      "target": "saas_root_p4_t1_s2_d1"
    },
    {
      "source": "saas_root_p4_t1_s2",
      "target": "saas_root_p4_t1_s2_d2"
    },
    {
      "source": "saas_root_p4_t1",
      "target": "saas_root_p4_t1_s3"
    },
    {
      "source": "saas_root_p4_t1_s3",
      "target": "saas_root_p4_t1_s3_d1"
    },
    {
      "source": "saas_root_p4_t1_s3",
      "target": "saas_root_p4_t1_s3_d2"
    },
    {
      "source": "saas_root_p4_t1",
      "target": "saas_root_p4_t1_s4"
    },
    {
      "source": "saas_root_p4_t1_s4",
      "target": "saas_root_p4_t1_s4_d1"
    },
    {
      "source": "saas_root_p4_t1_s4",
      "target": "saas_root_p4_t1_s4_d2"
    },
    {
      "source": "saas_root_p4_t1",
      "target": "saas_root_p4_t1_s5"
    },
    {
      "source": "saas_root_p4_t1_s5",
      "target": "saas_root_p4_t1_s5_d1"
    },
    {
      "source": "saas_root_p4_t1_s5",
      "target": "saas_root_p4_t1_s5_d2"
    },
    {
      "source": "saas_root_p4",
      "target": "saas_root_p4_t2"
    },
    {
      "source": "saas_root_p4_t2",
      "target": "saas_root_p4_t2_s1"
    },
    {
      "source": "saas_root_p4_t2_s1",
      "target": "saas_root_p4_t2_s1_d1"
    },
    {
      "source": "saas_root_p4_t2_s1",
      "target": "saas_root_p4_t2_s1_d2"
    },
    {
      "source": "saas_root_p4_t2",
      "target": "saas_root_p4_t2_s2"
    },
    {
      "source": "saas_root_p4_t2_s2",
      "target": "saas_root_p4_t2_s2_d1"
    },
    {
      "source": "saas_root_p4_t2_s2",
      "target": "saas_root_p4_t2_s2_d2"
    },
    {
      "source": "saas_root_p4_t2",
      "target": "saas_root_p4_t2_s3"
    },
    {
      "source": "saas_root_p4_t2_s3",
      "target": "saas_root_p4_t2_s3_d1"
    },
    {
      "source": "saas_root_p4_t2_s3",
      "target": "saas_root_p4_t2_s3_d2"
    },
    {
      "source": "saas_root_p4_t2",
      "target": "saas_root_p4_t2_s4"
    },
    {
      "source": "saas_root_p4_t2_s4",
      "target": "saas_root_p4_t2_s4_d1"
    },
    {
      "source": "saas_root_p4_t2_s4",
      "target": "saas_root_p4_t2_s4_d2"
    },
    {
      "source": "saas_root_p4_t2",
      "target": "saas_root_p4_t2_s5"
    },
    {
      "source": "saas_root_p4_t2_s5",
      "target": "saas_root_p4_t2_s5_d1"
    },
    {
      "source": "saas_root_p4_t2_s5",
      "target": "saas_root_p4_t2_s5_d2"
    },
    {
      "source": "saas_root_p4",
      "target": "saas_root_p4_t3"
    },
    {
      "source": "saas_root_p4_t3",
      "target": "saas_root_p4_t3_s1"
    },
    {
      "source": "saas_root_p4_t3_s1",
      "target": "saas_root_p4_t3_s1_d1"
    },
    {
      "source": "saas_root_p4_t3_s1",
      "target": "saas_root_p4_t3_s1_d2"
    },
    {
      "source": "saas_root_p4_t3",
      "target": "saas_root_p4_t3_s2"
    },
    {
      "source": "saas_root_p4_t3_s2",
      "target": "saas_root_p4_t3_s2_d1"
    },
    {
      "source": "saas_root_p4_t3_s2",
      "target": "saas_root_p4_t3_s2_d2"
    },
    {
      "source": "saas_root_p4_t3",
      "target": "saas_root_p4_t3_s3"
    },
    {
      "source": "saas_root_p4_t3_s3",
      "target": "saas_root_p4_t3_s3_d1"
    },
    {
      "source": "saas_root_p4_t3_s3",
      "target": "saas_root_p4_t3_s3_d2"
    },
    {
      "source": "saas_root_p4_t3",
      "target": "saas_root_p4_t3_s4"
    },
    {
      "source": "saas_root_p4_t3_s4",
      "target": "saas_root_p4_t3_s4_d1"
    },
    {
      "source": "saas_root_p4_t3_s4",
      "target": "saas_root_p4_t3_s4_d2"
    },
    {
      "source": "saas_root_p4_t3",
      "target": "saas_root_p4_t3_s5"
    },
    {
      "source": "saas_root_p4_t3_s5",
      "target": "saas_root_p4_t3_s5_d1"
    },
    {
      "source": "saas_root_p4_t3_s5",
      "target": "saas_root_p4_t3_s5_d2"
    },
    {
      "source": "saas_root_p4",
      "target": "saas_root_p4_t4"
    },
    {
      "source": "saas_root_p4_t4",
      "target": "saas_root_p4_t4_s1"
    },
    {
      "source": "saas_root_p4_t4_s1",
      "target": "saas_root_p4_t4_s1_d1"
    },
    {
      "source": "saas_root_p4_t4_s1",
      "target": "saas_root_p4_t4_s1_d2"
    },
    {
      "source": "saas_root_p4_t4",
      "target": "saas_root_p4_t4_s2"
    },
    {
      "source": "saas_root_p4_t4_s2",
      "target": "saas_root_p4_t4_s2_d1"
    },
    {
      "source": "saas_root_p4_t4_s2",
      "target": "saas_root_p4_t4_s2_d2"
    },
    {
      "source": "saas_root_p4_t4",
      "target": "saas_root_p4_t4_s3"
    },
    {
      "source": "saas_root_p4_t4_s3",
      "target": "saas_root_p4_t4_s3_d1"
    },
    {
      "source": "saas_root_p4_t4_s3",
      "target": "saas_root_p4_t4_s3_d2"
    },
    {
      "source": "saas_root_p4_t4",
      "target": "saas_root_p4_t4_s4"
    },
    {
      "source": "saas_root_p4_t4_s4",
      "target": "saas_root_p4_t4_s4_d1"
    },
    {
      "source": "saas_root_p4_t4_s4",
      "target": "saas_root_p4_t4_s4_d2"
    },
    {
      "source": "saas_root_p4_t4",
      "target": "saas_root_p4_t4_s5"
    },
    {
      "source": "saas_root_p4_t4_s5",
      "target": "saas_root_p4_t4_s5_d1"
    },
    {
      "source": "saas_root_p4_t4_s5",
      "target": "saas_root_p4_t4_s5_d2"
    },
    {
      "source": "saas_root_p4",
      "target": "saas_root_p4_t5"
    },
    {
      "source": "saas_root_p4_t5",
      "target": "saas_root_p4_t5_s1"
    },
    {
      "source": "saas_root_p4_t5_s1",
      "target": "saas_root_p4_t5_s1_d1"
    },
    {
      "source": "saas_root_p4_t5_s1",
      "target": "saas_root_p4_t5_s1_d2"
    },
    {
      "source": "saas_root_p4_t5",
      "target": "saas_root_p4_t5_s2"
    },
    {
      "source": "saas_root_p4_t5_s2",
      "target": "saas_root_p4_t5_s2_d1"
    },
    {
      "source": "saas_root_p4_t5_s2",
      "target": "saas_root_p4_t5_s2_d2"
    },
    {
      "source": "saas_root_p4_t5",
      "target": "saas_root_p4_t5_s3"
    },
    {
      "source": "saas_root_p4_t5_s3",
      "target": "saas_root_p4_t5_s3_d1"
    },
    {
      "source": "saas_root_p4_t5_s3",
      "target": "saas_root_p4_t5_s3_d2"
    },
    {
      "source": "saas_root_p4_t5",
      "target": "saas_root_p4_t5_s4"
    },
    {
      "source": "saas_root_p4_t5_s4",
      "target": "saas_root_p4_t5_s4_d1"
    },
    {
      "source": "saas_root_p4_t5_s4",
      "target": "saas_root_p4_t5_s4_d2"
    },
    {
      "source": "saas_root_p4_t5",
      "target": "saas_root_p4_t5_s5"
    },
    {
      "source": "saas_root_p4_t5_s5",
      "target": "saas_root_p4_t5_s5_d1"
    },
    {
      "source": "saas_root_p4_t5_s5",
      "target": "saas_root_p4_t5_s5_d2"
    },
    {
      "source": "saas_root_p4",
      "target": "saas_root_p4_t6"
    },
    {
      "source": "saas_root_p4_t6",
      "target": "saas_root_p4_t6_s1"
    },
    {
      "source": "saas_root_p4_t6_s1",
      "target": "saas_root_p4_t6_s1_d1"
    },
    {
      "source": "saas_root_p4_t6_s1",
      "target": "saas_root_p4_t6_s1_d2"
    },
    {
      "source": "saas_root_p4_t6",
      "target": "saas_root_p4_t6_s2"
    },
    {
      "source": "saas_root_p4_t6_s2",
      "target": "saas_root_p4_t6_s2_d1"
    },
    {
      "source": "saas_root_p4_t6_s2",
      "target": "saas_root_p4_t6_s2_d2"
    },
    {
      "source": "saas_root_p4_t6",
      "target": "saas_root_p4_t6_s3"
    },
    {
      "source": "saas_root_p4_t6_s3",
      "target": "saas_root_p4_t6_s3_d1"
    },
    {
      "source": "saas_root_p4_t6_s3",
      "target": "saas_root_p4_t6_s3_d2"
    },
    {
      "source": "saas_root_p4_t6",
      "target": "saas_root_p4_t6_s4"
    },
    {
      "source": "saas_root_p4_t6_s4",
      "target": "saas_root_p4_t6_s4_d1"
    },
    {
      "source": "saas_root_p4_t6_s4",
      "target": "saas_root_p4_t6_s4_d2"
    },
    {
      "source": "saas_root_p4_t6",
      "target": "saas_root_p4_t6_s5"
    },
    {
      "source": "saas_root_p4_t6_s5",
      "target": "saas_root_p4_t6_s5_d1"
    },
    {
      "source": "saas_root_p4_t6_s5",
      "target": "saas_root_p4_t6_s5_d2"
    },
    {
      "source": "saas_root",
      "target": "saas_root_p5"
    },
    {
      "source": "saas_root_p5",
      "target": "saas_root_p5_t1"
    },
    {
      "source": "saas_root_p5_t1",
      "target": "saas_root_p5_t1_s1"
    },
    {
      "source": "saas_root_p5_t1_s1",
      "target": "saas_root_p5_t1_s1_d1"
    },
    {
      "source": "saas_root_p5_t1_s1",
      "target": "saas_root_p5_t1_s1_d2"
    },
    {
      "source": "saas_root_p5_t1",
      "target": "saas_root_p5_t1_s2"
    },
    {
      "source": "saas_root_p5_t1_s2",
      "target": "saas_root_p5_t1_s2_d1"
    },
    {
      "source": "saas_root_p5_t1_s2",
      "target": "saas_root_p5_t1_s2_d2"
    },
    {
      "source": "saas_root_p5_t1",
      "target": "saas_root_p5_t1_s3"
    },
    {
      "source": "saas_root_p5_t1_s3",
      "target": "saas_root_p5_t1_s3_d1"
    },
    {
      "source": "saas_root_p5_t1_s3",
      "target": "saas_root_p5_t1_s3_d2"
    },
    {
      "source": "saas_root_p5_t1",
      "target": "saas_root_p5_t1_s4"
    },
    {
      "source": "saas_root_p5_t1_s4",
      "target": "saas_root_p5_t1_s4_d1"
    },
    {
      "source": "saas_root_p5_t1_s4",
      "target": "saas_root_p5_t1_s4_d2"
    },
    {
      "source": "saas_root_p5_t1",
      "target": "saas_root_p5_t1_s5"
    },
    {
      "source": "saas_root_p5_t1_s5",
      "target": "saas_root_p5_t1_s5_d1"
    },
    {
      "source": "saas_root_p5_t1_s5",
      "target": "saas_root_p5_t1_s5_d2"
    },
    {
      "source": "saas_root_p5",
      "target": "saas_root_p5_t2"
    },
    {
      "source": "saas_root_p5_t2",
      "target": "saas_root_p5_t2_s1"
    },
    {
      "source": "saas_root_p5_t2_s1",
      "target": "saas_root_p5_t2_s1_d1"
    },
    {
      "source": "saas_root_p5_t2_s1",
      "target": "saas_root_p5_t2_s1_d2"
    },
    {
      "source": "saas_root_p5_t2_s1",
      "target": "saas_root_p5_t2_s1_d3"
    },
    {
      "source": "saas_root_p5_t2_s1",
      "target": "saas_root_p5_t2_s1_d4"
    },
    {
      "source": "saas_root_p5_t2",
      "target": "saas_root_p5_t2_s2"
    },
    {
      "source": "saas_root_p5_t2_s2",
      "target": "saas_root_p5_t2_s2_d1"
    },
    {
      "source": "saas_root_p5_t2_s2",
      "target": "saas_root_p5_t2_s2_d2"
    },
    {
      "source": "saas_root_p5_t2_s2",
      "target": "saas_root_p5_t2_s2_d3"
    },
    {
      "source": "saas_root_p5_t2",
      "target": "saas_root_p5_t2_s3"
    },
    {
      "source": "saas_root_p5_t2_s3",
      "target": "saas_root_p5_t2_s3_d1"
    },
    {
      "source": "saas_root_p5_t2_s3",
      "target": "saas_root_p5_t2_s3_d2"
    },
    {
      "source": "saas_root_p5_t2",
      "target": "saas_root_p5_t2_s4"
    },
    {
      "source": "saas_root_p5_t2_s4",
      "target": "saas_root_p5_t2_s4_d1"
    },
    {
      "source": "saas_root_p5_t2_s4",
      "target": "saas_root_p5_t2_s4_d2"
    },
    {
      "source": "saas_root_p5_t2",
      "target": "saas_root_p5_t2_s5"
    },
    {
      "source": "saas_root_p5_t2_s5",
      "target": "saas_root_p5_t2_s5_d1"
    },
    {
      "source": "saas_root_p5_t2_s5",
      "target": "saas_root_p5_t2_s5_d2"
    },
    {
      "source": "saas_root_p5",
      "target": "saas_root_p5_t3"
    },
    {
      "source": "saas_root_p5_t3",
      "target": "saas_root_p5_t3_s1"
    },
    {
      "source": "saas_root_p5_t3_s1",
      "target": "saas_root_p5_t3_s1_d1"
    },
    {
      "source": "saas_root_p5_t3_s1",
      "target": "saas_root_p5_t3_s1_d2"
    },
    {
      "source": "saas_root_p5_t3",
      "target": "saas_root_p5_t3_s2"
    },
    {
      "source": "saas_root_p5_t3_s2",
      "target": "saas_root_p5_t3_s2_d1"
    },
    {
      "source": "saas_root_p5_t3_s2",
      "target": "saas_root_p5_t3_s2_d2"
    },
    {
      "source": "saas_root_p5_t3",
      "target": "saas_root_p5_t3_s3"
    },
    {
      "source": "saas_root_p5_t3_s3",
      "target": "saas_root_p5_t3_s3_d1"
    },
    {
      "source": "saas_root_p5_t3_s3",
      "target": "saas_root_p5_t3_s3_d2"
    },
    {
      "source": "saas_root_p5_t3",
      "target": "saas_root_p5_t3_s4"
    },
    {
      "source": "saas_root_p5_t3_s4",
      "target": "saas_root_p5_t3_s4_d1"
    },
    {
      "source": "saas_root_p5_t3_s4",
      "target": "saas_root_p5_t3_s4_d2"
    },
    {
      "source": "saas_root_p5_t3",
      "target": "saas_root_p5_t3_s5"
    },
    {
      "source": "saas_root_p5_t3_s5",
      "target": "saas_root_p5_t3_s5_d1"
    },
    {
      "source": "saas_root_p5_t3_s5",
      "target": "saas_root_p5_t3_s5_d2"
    },
    {
      "source": "saas_root_p5",
      "target": "saas_root_p5_t4"
    },
    {
      "source": "saas_root_p5_t4",
      "target": "saas_root_p5_t4_s1"
    },
    {
      "source": "saas_root_p5_t4_s1",
      "target": "saas_root_p5_t4_s1_d1"
    },
    {
      "source": "saas_root_p5_t4_s1",
      "target": "saas_root_p5_t4_s1_d2"
    },
    {
      "source": "saas_root_p5_t4",
      "target": "saas_root_p5_t4_s2"
    },
    {
      "source": "saas_root_p5_t4_s2",
      "target": "saas_root_p5_t4_s2_d1"
    },
    {
      "source": "saas_root_p5_t4_s2",
      "target": "saas_root_p5_t4_s2_d2"
    },
    {
      "source": "saas_root_p5_t4",
      "target": "saas_root_p5_t4_s3"
    },
    {
      "source": "saas_root_p5_t4_s3",
      "target": "saas_root_p5_t4_s3_d1"
    },
    {
      "source": "saas_root_p5_t4_s3",
      "target": "saas_root_p5_t4_s3_d2"
    },
    {
      "source": "saas_root_p5_t4",
      "target": "saas_root_p5_t4_s4"
    },
    {
      "source": "saas_root_p5_t4_s4",
      "target": "saas_root_p5_t4_s4_d1"
    },
    {
      "source": "saas_root_p5_t4_s4",
      "target": "saas_root_p5_t4_s4_d2"
    },
    {
      "source": "saas_root_p5_t4",
      "target": "saas_root_p5_t4_s5"
    },
    {
      "source": "saas_root_p5_t4_s5",
      "target": "saas_root_p5_t4_s5_d1"
    },
    {
      "source": "saas_root_p5_t4_s5",
      "target": "saas_root_p5_t4_s5_d2"
    },
    {
      "source": "saas_root_p5",
      "target": "saas_root_p5_t5"
    },
    {
      "source": "saas_root_p5_t5",
      "target": "saas_root_p5_t5_s1"
    },
    {
      "source": "saas_root_p5_t5_s1",
      "target": "saas_root_p5_t5_s1_d1"
    },
    {
      "source": "saas_root_p5_t5_s1",
      "target": "saas_root_p5_t5_s1_d2"
    },
    {
      "source": "saas_root_p5_t5",
      "target": "saas_root_p5_t5_s2"
    },
    {
      "source": "saas_root_p5_t5_s2",
      "target": "saas_root_p5_t5_s2_d1"
    },
    {
      "source": "saas_root_p5_t5_s2",
      "target": "saas_root_p5_t5_s2_d2"
    },
    {
      "source": "saas_root_p5_t5",
      "target": "saas_root_p5_t5_s3"
    },
    {
      "source": "saas_root_p5_t5_s3",
      "target": "saas_root_p5_t5_s3_d1"
    },
    {
      "source": "saas_root_p5_t5_s3",
      "target": "saas_root_p5_t5_s3_d2"
    },
    {
      "source": "saas_root_p5_t5",
      "target": "saas_root_p5_t5_s4"
    },
    {
      "source": "saas_root_p5_t5_s4",
      "target": "saas_root_p5_t5_s4_d1"
    },
    {
      "source": "saas_root_p5_t5_s4",
      "target": "saas_root_p5_t5_s4_d2"
    },
    {
      "source": "saas_root_p5_t5",
      "target": "saas_root_p5_t5_s5"
    },
    {
      "source": "saas_root_p5_t5_s5",
      "target": "saas_root_p5_t5_s5_d1"
    },
    {
      "source": "saas_root_p5_t5_s5",
      "target": "saas_root_p5_t5_s5_d2"
    },
    {
      "source": "saas_root_p5",
      "target": "saas_root_p5_t6"
    },
    {
      "source": "saas_root_p5_t6",
      "target": "saas_root_p5_t6_s1"
    },
    {
      "source": "saas_root_p5_t6_s1",
      "target": "saas_root_p5_t6_s1_d1"
    },
    {
      "source": "saas_root_p5_t6_s1",
      "target": "saas_root_p5_t6_s1_d2"
    },
    {
      "source": "saas_root_p5_t6",
      "target": "saas_root_p5_t6_s2"
    },
    {
      "source": "saas_root_p5_t6_s2",
      "target": "saas_root_p5_t6_s2_d1"
    },
    {
      "source": "saas_root_p5_t6_s2",
      "target": "saas_root_p5_t6_s2_d2"
    },
    {
      "source": "saas_root_p5_t6",
      "target": "saas_root_p5_t6_s3"
    },
    {
      "source": "saas_root_p5_t6_s3",
      "target": "saas_root_p5_t6_s3_d1"
    },
    {
      "source": "saas_root_p5_t6_s3",
      "target": "saas_root_p5_t6_s3_d2"
    },
    {
      "source": "saas_root_p5_t6",
      "target": "saas_root_p5_t6_s4"
    },
    {
      "source": "saas_root_p5_t6_s4",
      "target": "saas_root_p5_t6_s4_d1"
    },
    {
      "source": "saas_root_p5_t6_s4",
      "target": "saas_root_p5_t6_s4_d2"
    },
    {
      "source": "saas_root_p5_t6",
      "target": "saas_root_p5_t6_s5"
    },
    {
      "source": "saas_root_p5_t6_s5",
      "target": "saas_root_p5_t6_s5_d1"
    },
    {
      "source": "saas_root_p5_t6_s5",
      "target": "saas_root_p5_t6_s5_d2"
    },
    {
      "source": "saas_root",
      "target": "saas_root_p6"
    },
    {
      "source": "saas_root_p6",
      "target": "saas_root_p6_t1"
    },
    {
      "source": "saas_root_p6_t1",
      "target": "saas_root_p6_t1_s1"
    },
    {
      "source": "saas_root_p6_t1_s1",
      "target": "saas_root_p6_t1_s1_d1"
    },
    {
      "source": "saas_root_p6_t1_s1",
      "target": "saas_root_p6_t1_s1_d2"
    },
    {
      "source": "saas_root_p6_t1",
      "target": "saas_root_p6_t1_s2"
    },
    {
      "source": "saas_root_p6_t1_s2",
      "target": "saas_root_p6_t1_s2_d1"
    },
    {
      "source": "saas_root_p6_t1_s2",
      "target": "saas_root_p6_t1_s2_d2"
    },
    {
      "source": "saas_root_p6_t1",
      "target": "saas_root_p6_t1_s3"
    },
    {
      "source": "saas_root_p6_t1_s3",
      "target": "saas_root_p6_t1_s3_d1"
    },
    {
      "source": "saas_root_p6_t1_s3",
      "target": "saas_root_p6_t1_s3_d2"
    },
    {
      "source": "saas_root_p6_t1",
      "target": "saas_root_p6_t1_s4"
    },
    {
      "source": "saas_root_p6_t1_s4",
      "target": "saas_root_p6_t1_s4_d1"
    },
    {
      "source": "saas_root_p6_t1_s4",
      "target": "saas_root_p6_t1_s4_d2"
    },
    {
      "source": "saas_root_p6_t1",
      "target": "saas_root_p6_t1_s5"
    },
    {
      "source": "saas_root_p6_t1_s5",
      "target": "saas_root_p6_t1_s5_d1"
    },
    {
      "source": "saas_root_p6_t1_s5",
      "target": "saas_root_p6_t1_s5_d2"
    },
    {
      "source": "saas_root_p6",
      "target": "saas_root_p6_t2"
    },
    {
      "source": "saas_root_p6_t2",
      "target": "saas_root_p6_t2_s1"
    },
    {
      "source": "saas_root_p6_t2_s1",
      "target": "saas_root_p6_t2_s1_d1"
    },
    {
      "source": "saas_root_p6_t2_s1",
      "target": "saas_root_p6_t2_s1_d2"
    },
    {
      "source": "saas_root_p6_t2",
      "target": "saas_root_p6_t2_s2"
    },
    {
      "source": "saas_root_p6_t2_s2",
      "target": "saas_root_p6_t2_s2_d1"
    },
    {
      "source": "saas_root_p6_t2_s2",
      "target": "saas_root_p6_t2_s2_d2"
    },
    {
      "source": "saas_root_p6_t2",
      "target": "saas_root_p6_t2_s3"
    },
    {
      "source": "saas_root_p6_t2_s3",
      "target": "saas_root_p6_t2_s3_d1"
    },
    {
      "source": "saas_root_p6_t2_s3",
      "target": "saas_root_p6_t2_s3_d2"
    },
    {
      "source": "saas_root_p6_t2",
      "target": "saas_root_p6_t2_s4"
    },
    {
      "source": "saas_root_p6_t2_s4",
      "target": "saas_root_p6_t2_s4_d1"
    },
    {
      "source": "saas_root_p6_t2_s4",
      "target": "saas_root_p6_t2_s4_d2"
    },
    {
      "source": "saas_root_p6_t2",
      "target": "saas_root_p6_t2_s5"
    },
    {
      "source": "saas_root_p6_t2_s5",
      "target": "saas_root_p6_t2_s5_d1"
    },
    {
      "source": "saas_root_p6_t2_s5",
      "target": "saas_root_p6_t2_s5_d2"
    },
    {
      "source": "saas_root_p6",
      "target": "saas_root_p6_t3"
    },
    {
      "source": "saas_root_p6_t3",
      "target": "saas_root_p6_t3_s1"
    },
    {
      "source": "saas_root_p6_t3_s1",
      "target": "saas_root_p6_t3_s1_d1"
    },
    {
      "source": "saas_root_p6_t3_s1",
      "target": "saas_root_p6_t3_s1_d2"
    },
    {
      "source": "saas_root_p6_t3",
      "target": "saas_root_p6_t3_s2"
    },
    {
      "source": "saas_root_p6_t3_s2",
      "target": "saas_root_p6_t3_s2_d1"
    },
    {
      "source": "saas_root_p6_t3_s2",
      "target": "saas_root_p6_t3_s2_d2"
    },
    {
      "source": "saas_root_p6_t3",
      "target": "saas_root_p6_t3_s3"
    },
    {
      "source": "saas_root_p6_t3_s3",
      "target": "saas_root_p6_t3_s3_d1"
    },
    {
      "source": "saas_root_p6_t3_s3",
      "target": "saas_root_p6_t3_s3_d2"
    },
    {
      "source": "saas_root_p6_t3",
      "target": "saas_root_p6_t3_s4"
    },
    {
      "source": "saas_root_p6_t3_s4",
      "target": "saas_root_p6_t3_s4_d1"
    },
    {
      "source": "saas_root_p6_t3_s4",
      "target": "saas_root_p6_t3_s4_d2"
    },
    {
      "source": "saas_root_p6_t3",
      "target": "saas_root_p6_t3_s5"
    },
    {
      "source": "saas_root_p6_t3_s5",
      "target": "saas_root_p6_t3_s5_d1"
    },
    {
      "source": "saas_root_p6_t3_s5",
      "target": "saas_root_p6_t3_s5_d2"
    },
    {
      "source": "saas_root_p6",
      "target": "saas_root_p6_t4"
    },
    {
      "source": "saas_root_p6_t4",
      "target": "saas_root_p6_t4_s1"
    },
    {
      "source": "saas_root_p6_t4_s1",
      "target": "saas_root_p6_t4_s1_d1"
    },
    {
      "source": "saas_root_p6_t4_s1",
      "target": "saas_root_p6_t4_s1_d2"
    },
    {
      "source": "saas_root_p6_t4",
      "target": "saas_root_p6_t4_s2"
    },
    {
      "source": "saas_root_p6_t4_s2",
      "target": "saas_root_p6_t4_s2_d1"
    },
    {
      "source": "saas_root_p6_t4_s2",
      "target": "saas_root_p6_t4_s2_d2"
    },
    {
      "source": "saas_root_p6_t4",
      "target": "saas_root_p6_t4_s3"
    },
    {
      "source": "saas_root_p6_t4_s3",
      "target": "saas_root_p6_t4_s3_d1"
    },
    {
      "source": "saas_root_p6_t4_s3",
      "target": "saas_root_p6_t4_s3_d2"
    },
    {
      "source": "saas_root_p6_t4",
      "target": "saas_root_p6_t4_s4"
    },
    {
      "source": "saas_root_p6_t4_s4",
      "target": "saas_root_p6_t4_s4_d1"
    },
    {
      "source": "saas_root_p6_t4_s4",
      "target": "saas_root_p6_t4_s4_d2"
    },
    {
      "source": "saas_root_p6_t4",
      "target": "saas_root_p6_t4_s5"
    },
    {
      "source": "saas_root_p6_t4_s5",
      "target": "saas_root_p6_t4_s5_d1"
    },
    {
      "source": "saas_root_p6_t4_s5",
      "target": "saas_root_p6_t4_s5_d2"
    },
    {
      "source": "saas_root_p6",
      "target": "saas_root_p6_t5"
    },
    {
      "source": "saas_root_p6_t5",
      "target": "saas_root_p6_t5_s1"
    },
    {
      "source": "saas_root_p6_t5_s1",
      "target": "saas_root_p6_t5_s1_d1"
    },
    {
      "source": "saas_root_p6_t5_s1",
      "target": "saas_root_p6_t5_s1_d2"
    },
    {
      "source": "saas_root_p6_t5",
      "target": "saas_root_p6_t5_s2"
    },
    {
      "source": "saas_root_p6_t5_s2",
      "target": "saas_root_p6_t5_s2_d1"
    },
    {
      "source": "saas_root_p6_t5_s2",
      "target": "saas_root_p6_t5_s2_d2"
    },
    {
      "source": "saas_root_p6_t5",
      "target": "saas_root_p6_t5_s3"
    },
    {
      "source": "saas_root_p6_t5_s3",
      "target": "saas_root_p6_t5_s3_d1"
    },
    {
      "source": "saas_root_p6_t5_s3",
      "target": "saas_root_p6_t5_s3_d2"
    },
    {
      "source": "saas_root_p6_t5",
      "target": "saas_root_p6_t5_s4"
    },
    {
      "source": "saas_root_p6_t5_s4",
      "target": "saas_root_p6_t5_s4_d1"
    },
    {
      "source": "saas_root_p6_t5_s4",
      "target": "saas_root_p6_t5_s4_d2"
    },
    {
      "source": "saas_root_p6_t5",
      "target": "saas_root_p6_t5_s5"
    },
    {
      "source": "saas_root_p6_t5_s5",
      "target": "saas_root_p6_t5_s5_d1"
    },
    {
      "source": "saas_root_p6_t5_s5",
      "target": "saas_root_p6_t5_s5_d2"
    },
    {
      "source": "saas_root_p6",
      "target": "saas_root_p6_t6"
    },
    {
      "source": "saas_root_p6_t6",
      "target": "saas_root_p6_t6_s1"
    },
    {
      "source": "saas_root_p6_t6_s1",
      "target": "saas_root_p6_t6_s1_d1"
    },
    {
      "source": "saas_root_p6_t6_s1",
      "target": "saas_root_p6_t6_s1_d2"
    },
    {
      "source": "saas_root_p6_t6",
      "target": "saas_root_p6_t6_s2"
    },
    {
      "source": "saas_root_p6_t6_s2",
      "target": "saas_root_p6_t6_s2_d1"
    },
    {
      "source": "saas_root_p6_t6_s2",
      "target": "saas_root_p6_t6_s2_d2"
    },
    {
      "source": "saas_root_p6_t6",
      "target": "saas_root_p6_t6_s3"
    },
    {
      "source": "saas_root_p6_t6_s3",
      "target": "saas_root_p6_t6_s3_d1"
    },
    {
      "source": "saas_root_p6_t6_s3",
      "target": "saas_root_p6_t6_s3_d2"
    },
    {
      "source": "saas_root_p6_t6",
      "target": "saas_root_p6_t6_s4"
    },
    {
      "source": "saas_root_p6_t6_s4",
      "target": "saas_root_p6_t6_s4_d1"
    },
    {
      "source": "saas_root_p6_t6_s4",
      "target": "saas_root_p6_t6_s4_d2"
    },
    {
      "source": "saas_root_p6_t6",
      "target": "saas_root_p6_t6_s5"
    },
    {
      "source": "saas_root_p6_t6_s5",
      "target": "saas_root_p6_t6_s5_d1"
    },
    {
      "source": "saas_root_p6_t6_s5",
      "target": "saas_root_p6_t6_s5_d2"
    },
    {
      "source": "saas_root",
      "target": "saas_root_p7"
    },
    {
      "source": "saas_root_p7",
      "target": "saas_root_p7_t1"
    },
    {
      "source": "saas_root_p7_t1",
      "target": "saas_root_p7_t1_s1"
    },
    {
      "source": "saas_root_p7_t1_s1",
      "target": "saas_root_p7_t1_s1_d1"
    },
    {
      "source": "saas_root_p7_t1_s1",
      "target": "saas_root_p7_t1_s1_d2"
    },
    {
      "source": "saas_root_p7_t1_s1",
      "target": "saas_root_p7_t1_s1_d3"
    },
    {
      "source": "saas_root_p7_t1",
      "target": "saas_root_p7_t1_s2"
    },
    {
      "source": "saas_root_p7_t1_s2",
      "target": "saas_root_p7_t1_s2_d1"
    },
    {
      "source": "saas_root_p7_t1_s2",
      "target": "saas_root_p7_t1_s2_d2"
    },
    {
      "source": "saas_root_p7_t1",
      "target": "saas_root_p7_t1_s3"
    },
    {
      "source": "saas_root_p7_t1_s3",
      "target": "saas_root_p7_t1_s3_d1"
    },
    {
      "source": "saas_root_p7_t1_s3",
      "target": "saas_root_p7_t1_s3_d2"
    },
    {
      "source": "saas_root_p7_t1",
      "target": "saas_root_p7_t1_s4"
    },
    {
      "source": "saas_root_p7_t1_s4",
      "target": "saas_root_p7_t1_s4_d1"
    },
    {
      "source": "saas_root_p7_t1_s4",
      "target": "saas_root_p7_t1_s4_d2"
    },
    {
      "source": "saas_root_p7_t1",
      "target": "saas_root_p7_t1_s5"
    },
    {
      "source": "saas_root_p7_t1_s5",
      "target": "saas_root_p7_t1_s5_d1"
    },
    {
      "source": "saas_root_p7_t1_s5",
      "target": "saas_root_p7_t1_s5_d2"
    },
    {
      "source": "saas_root_p7",
      "target": "saas_root_p7_t2"
    },
    {
      "source": "saas_root_p7_t2",
      "target": "saas_root_p7_t2_s1"
    },
    {
      "source": "saas_root_p7_t2_s1",
      "target": "saas_root_p7_t2_s1_d1"
    },
    {
      "source": "saas_root_p7_t2_s1",
      "target": "saas_root_p7_t2_s1_d2"
    },
    {
      "source": "saas_root_p7_t2",
      "target": "saas_root_p7_t2_s2"
    },
    {
      "source": "saas_root_p7_t2_s2",
      "target": "saas_root_p7_t2_s2_d1"
    },
    {
      "source": "saas_root_p7_t2_s2",
      "target": "saas_root_p7_t2_s2_d2"
    },
    {
      "source": "saas_root_p7_t2",
      "target": "saas_root_p7_t2_s3"
    },
    {
      "source": "saas_root_p7_t2_s3",
      "target": "saas_root_p7_t2_s3_d1"
    },
    {
      "source": "saas_root_p7_t2_s3",
      "target": "saas_root_p7_t2_s3_d2"
    },
    {
      "source": "saas_root_p7_t2",
      "target": "saas_root_p7_t2_s4"
    },
    {
      "source": "saas_root_p7_t2_s4",
      "target": "saas_root_p7_t2_s4_d1"
    },
    {
      "source": "saas_root_p7_t2_s4",
      "target": "saas_root_p7_t2_s4_d2"
    },
    {
      "source": "saas_root_p7_t2",
      "target": "saas_root_p7_t2_s5"
    },
    {
      "source": "saas_root_p7_t2_s5",
      "target": "saas_root_p7_t2_s5_d1"
    },
    {
      "source": "saas_root_p7_t2_s5",
      "target": "saas_root_p7_t2_s5_d2"
    },
    {
      "source": "saas_root_p7",
      "target": "saas_root_p7_t3"
    },
    {
      "source": "saas_root_p7_t3",
      "target": "saas_root_p7_t3_s1"
    },
    {
      "source": "saas_root_p7_t3_s1",
      "target": "saas_root_p7_t3_s1_d1"
    },
    {
      "source": "saas_root_p7_t3_s1",
      "target": "saas_root_p7_t3_s1_d2"
    },
    {
      "source": "saas_root_p7_t3",
      "target": "saas_root_p7_t3_s2"
    },
    {
      "source": "saas_root_p7_t3_s2",
      "target": "saas_root_p7_t3_s2_d1"
    },
    {
      "source": "saas_root_p7_t3_s2",
      "target": "saas_root_p7_t3_s2_d2"
    },
    {
      "source": "saas_root_p7_t3",
      "target": "saas_root_p7_t3_s3"
    },
    {
      "source": "saas_root_p7_t3_s3",
      "target": "saas_root_p7_t3_s3_d1"
    },
    {
      "source": "saas_root_p7_t3_s3",
      "target": "saas_root_p7_t3_s3_d2"
    },
    {
      "source": "saas_root_p7_t3",
      "target": "saas_root_p7_t3_s4"
    },
    {
      "source": "saas_root_p7_t3_s4",
      "target": "saas_root_p7_t3_s4_d1"
    },
    {
      "source": "saas_root_p7_t3_s4",
      "target": "saas_root_p7_t3_s4_d2"
    },
    {
      "source": "saas_root_p7_t3",
      "target": "saas_root_p7_t3_s5"
    },
    {
      "source": "saas_root_p7_t3_s5",
      "target": "saas_root_p7_t3_s5_d1"
    },
    {
      "source": "saas_root_p7_t3_s5",
      "target": "saas_root_p7_t3_s5_d2"
    },
    {
      "source": "saas_root_p7",
      "target": "saas_root_p7_t4"
    },
    {
      "source": "saas_root_p7_t4",
      "target": "saas_root_p7_t4_s1"
    },
    {
      "source": "saas_root_p7_t4_s1",
      "target": "saas_root_p7_t4_s1_d1"
    },
    {
      "source": "saas_root_p7_t4_s1",
      "target": "saas_root_p7_t4_s1_d2"
    },
    {
      "source": "saas_root_p7_t4",
      "target": "saas_root_p7_t4_s2"
    },
    {
      "source": "saas_root_p7_t4_s2",
      "target": "saas_root_p7_t4_s2_d1"
    },
    {
      "source": "saas_root_p7_t4_s2",
      "target": "saas_root_p7_t4_s2_d2"
    },
    {
      "source": "saas_root_p7_t4",
      "target": "saas_root_p7_t4_s3"
    },
    {
      "source": "saas_root_p7_t4_s3",
      "target": "saas_root_p7_t4_s3_d1"
    },
    {
      "source": "saas_root_p7_t4_s3",
      "target": "saas_root_p7_t4_s3_d2"
    },
    {
      "source": "saas_root_p7_t4",
      "target": "saas_root_p7_t4_s4"
    },
    {
      "source": "saas_root_p7_t4_s4",
      "target": "saas_root_p7_t4_s4_d1"
    },
    {
      "source": "saas_root_p7_t4_s4",
      "target": "saas_root_p7_t4_s4_d2"
    },
    {
      "source": "saas_root_p7_t4",
      "target": "saas_root_p7_t4_s5"
    },
    {
      "source": "saas_root_p7_t4_s5",
      "target": "saas_root_p7_t4_s5_d1"
    },
    {
      "source": "saas_root_p7_t4_s5",
      "target": "saas_root_p7_t4_s5_d2"
    },
    {
      "source": "saas_root_p7",
      "target": "saas_root_p7_t5"
    },
    {
      "source": "saas_root_p7_t5",
      "target": "saas_root_p7_t5_s1"
    },
    {
      "source": "saas_root_p7_t5_s1",
      "target": "saas_root_p7_t5_s1_d1"
    },
    {
      "source": "saas_root_p7_t5_s1",
      "target": "saas_root_p7_t5_s1_d2"
    },
    {
      "source": "saas_root_p7_t5",
      "target": "saas_root_p7_t5_s2"
    },
    {
      "source": "saas_root_p7_t5_s2",
      "target": "saas_root_p7_t5_s2_d1"
    },
    {
      "source": "saas_root_p7_t5_s2",
      "target": "saas_root_p7_t5_s2_d2"
    },
    {
      "source": "saas_root_p7_t5",
      "target": "saas_root_p7_t5_s3"
    },
    {
      "source": "saas_root_p7_t5_s3",
      "target": "saas_root_p7_t5_s3_d1"
    },
    {
      "source": "saas_root_p7_t5_s3",
      "target": "saas_root_p7_t5_s3_d2"
    },
    {
      "source": "saas_root_p7_t5",
      "target": "saas_root_p7_t5_s4"
    },
    {
      "source": "saas_root_p7_t5_s4",
      "target": "saas_root_p7_t5_s4_d1"
    },
    {
      "source": "saas_root_p7_t5_s4",
      "target": "saas_root_p7_t5_s4_d2"
    },
    {
      "source": "saas_root_p7_t5",
      "target": "saas_root_p7_t5_s5"
    },
    {
      "source": "saas_root_p7_t5_s5",
      "target": "saas_root_p7_t5_s5_d1"
    },
    {
      "source": "saas_root_p7_t5_s5",
      "target": "saas_root_p7_t5_s5_d2"
    },
    {
      "source": "saas_root_p7",
      "target": "saas_root_p7_t6"
    },
    {
      "source": "saas_root_p7_t6",
      "target": "saas_root_p7_t6_s1"
    },
    {
      "source": "saas_root_p7_t6_s1",
      "target": "saas_root_p7_t6_s1_d1"
    },
    {
      "source": "saas_root_p7_t6_s1",
      "target": "saas_root_p7_t6_s1_d2"
    },
    {
      "source": "saas_root_p7_t6",
      "target": "saas_root_p7_t6_s2"
    },
    {
      "source": "saas_root_p7_t6_s2",
      "target": "saas_root_p7_t6_s2_d1"
    },
    {
      "source": "saas_root_p7_t6_s2",
      "target": "saas_root_p7_t6_s2_d2"
    },
    {
      "source": "saas_root_p7_t6",
      "target": "saas_root_p7_t6_s3"
    },
    {
      "source": "saas_root_p7_t6_s3",
      "target": "saas_root_p7_t6_s3_d1"
    },
    {
      "source": "saas_root_p7_t6_s3",
      "target": "saas_root_p7_t6_s3_d2"
    },
    {
      "source": "saas_root_p7_t6",
      "target": "saas_root_p7_t6_s4"
    },
    {
      "source": "saas_root_p7_t6_s4",
      "target": "saas_root_p7_t6_s4_d1"
    },
    {
      "source": "saas_root_p7_t6_s4",
      "target": "saas_root_p7_t6_s4_d2"
    },
    {
      "source": "saas_root_p7_t6",
      "target": "saas_root_p7_t6_s5"
    },
    {
      "source": "saas_root_p7_t6_s5",
      "target": "saas_root_p7_t6_s5_d1"
    },
    {
      "source": "saas_root_p7_t6_s5",
      "target": "saas_root_p7_t6_s5_d2"
    },
    {
      "source": "saas_root",
      "target": "saas_root_p8"
    },
    {
      "source": "saas_root_p8",
      "target": "saas_root_p8_t1"
    },
    {
      "source": "saas_root_p8_t1",
      "target": "saas_root_p8_t1_s1"
    },
    {
      "source": "saas_root_p8_t1_s1",
      "target": "saas_root_p8_t1_s1_d1"
    },
    {
      "source": "saas_root_p8_t1_s1",
      "target": "saas_root_p8_t1_s1_d2"
    },
    {
      "source": "saas_root_p8_t1",
      "target": "saas_root_p8_t1_s2"
    },
    {
      "source": "saas_root_p8_t1_s2",
      "target": "saas_root_p8_t1_s2_d1"
    },
    {
      "source": "saas_root_p8_t1_s2",
      "target": "saas_root_p8_t1_s2_d2"
    },
    {
      "source": "saas_root_p8_t1",
      "target": "saas_root_p8_t1_s3"
    },
    {
      "source": "saas_root_p8_t1_s3",
      "target": "saas_root_p8_t1_s3_d1"
    },
    {
      "source": "saas_root_p8_t1_s3",
      "target": "saas_root_p8_t1_s3_d2"
    },
    {
      "source": "saas_root_p8_t1",
      "target": "saas_root_p8_t1_s4"
    },
    {
      "source": "saas_root_p8_t1_s4",
      "target": "saas_root_p8_t1_s4_d1"
    },
    {
      "source": "saas_root_p8_t1_s4",
      "target": "saas_root_p8_t1_s4_d2"
    },
    {
      "source": "saas_root_p8_t1",
      "target": "saas_root_p8_t1_s5"
    },
    {
      "source": "saas_root_p8_t1_s5",
      "target": "saas_root_p8_t1_s5_d1"
    },
    {
      "source": "saas_root_p8_t1_s5",
      "target": "saas_root_p8_t1_s5_d2"
    },
    {
      "source": "saas_root_p8",
      "target": "saas_root_p8_t2"
    },
    {
      "source": "saas_root_p8_t2",
      "target": "saas_root_p8_t2_s1"
    },
    {
      "source": "saas_root_p8_t2_s1",
      "target": "saas_root_p8_t2_s1_d1"
    },
    {
      "source": "saas_root_p8_t2_s1",
      "target": "saas_root_p8_t2_s1_d2"
    },
    {
      "source": "saas_root_p8_t2",
      "target": "saas_root_p8_t2_s2"
    },
    {
      "source": "saas_root_p8_t2_s2",
      "target": "saas_root_p8_t2_s2_d1"
    },
    {
      "source": "saas_root_p8_t2_s2",
      "target": "saas_root_p8_t2_s2_d2"
    },
    {
      "source": "saas_root_p8_t2",
      "target": "saas_root_p8_t2_s3"
    },
    {
      "source": "saas_root_p8_t2_s3",
      "target": "saas_root_p8_t2_s3_d1"
    },
    {
      "source": "saas_root_p8_t2_s3",
      "target": "saas_root_p8_t2_s3_d2"
    },
    {
      "source": "saas_root_p8_t2",
      "target": "saas_root_p8_t2_s4"
    },
    {
      "source": "saas_root_p8_t2_s4",
      "target": "saas_root_p8_t2_s4_d1"
    },
    {
      "source": "saas_root_p8_t2_s4",
      "target": "saas_root_p8_t2_s4_d2"
    },
    {
      "source": "saas_root_p8_t2",
      "target": "saas_root_p8_t2_s5"
    },
    {
      "source": "saas_root_p8_t2_s5",
      "target": "saas_root_p8_t2_s5_d1"
    },
    {
      "source": "saas_root_p8_t2_s5",
      "target": "saas_root_p8_t2_s5_d2"
    },
    {
      "source": "saas_root_p8",
      "target": "saas_root_p8_t3"
    },
    {
      "source": "saas_root_p8_t3",
      "target": "saas_root_p8_t3_s1"
    },
    {
      "source": "saas_root_p8_t3_s1",
      "target": "saas_root_p8_t3_s1_d1"
    },
    {
      "source": "saas_root_p8_t3_s1",
      "target": "saas_root_p8_t3_s1_d2"
    },
    {
      "source": "saas_root_p8_t3",
      "target": "saas_root_p8_t3_s2"
    },
    {
      "source": "saas_root_p8_t3_s2",
      "target": "saas_root_p8_t3_s2_d1"
    },
    {
      "source": "saas_root_p8_t3_s2",
      "target": "saas_root_p8_t3_s2_d2"
    },
    {
      "source": "saas_root_p8_t3",
      "target": "saas_root_p8_t3_s3"
    },
    {
      "source": "saas_root_p8_t3_s3",
      "target": "saas_root_p8_t3_s3_d1"
    },
    {
      "source": "saas_root_p8_t3_s3",
      "target": "saas_root_p8_t3_s3_d2"
    },
    {
      "source": "saas_root_p8_t3",
      "target": "saas_root_p8_t3_s4"
    },
    {
      "source": "saas_root_p8_t3_s4",
      "target": "saas_root_p8_t3_s4_d1"
    },
    {
      "source": "saas_root_p8_t3_s4",
      "target": "saas_root_p8_t3_s4_d2"
    },
    {
      "source": "saas_root_p8_t3",
      "target": "saas_root_p8_t3_s5"
    },
    {
      "source": "saas_root_p8_t3_s5",
      "target": "saas_root_p8_t3_s5_d1"
    },
    {
      "source": "saas_root_p8_t3_s5",
      "target": "saas_root_p8_t3_s5_d2"
    },
    {
      "source": "saas_root_p8",
      "target": "saas_root_p8_t4"
    },
    {
      "source": "saas_root_p8_t4",
      "target": "saas_root_p8_t4_s1"
    },
    {
      "source": "saas_root_p8_t4_s1",
      "target": "saas_root_p8_t4_s1_d1"
    },
    {
      "source": "saas_root_p8_t4_s1",
      "target": "saas_root_p8_t4_s1_d2"
    },
    {
      "source": "saas_root_p8_t4_s1",
      "target": "saas_root_p8_t4_s1_d3"
    },
    {
      "source": "saas_root_p8_t4",
      "target": "saas_root_p8_t4_s2"
    },
    {
      "source": "saas_root_p8_t4_s2",
      "target": "saas_root_p8_t4_s2_d1"
    },
    {
      "source": "saas_root_p8_t4_s2",
      "target": "saas_root_p8_t4_s2_d2"
    },
    {
      "source": "saas_root_p8_t4",
      "target": "saas_root_p8_t4_s3"
    },
    {
      "source": "saas_root_p8_t4_s3",
      "target": "saas_root_p8_t4_s3_d1"
    },
    {
      "source": "saas_root_p8_t4_s3",
      "target": "saas_root_p8_t4_s3_d2"
    },
    {
      "source": "saas_root_p8_t4",
      "target": "saas_root_p8_t4_s4"
    },
    {
      "source": "saas_root_p8_t4_s4",
      "target": "saas_root_p8_t4_s4_d1"
    },
    {
      "source": "saas_root_p8_t4_s4",
      "target": "saas_root_p8_t4_s4_d2"
    },
    {
      "source": "saas_root_p8_t4",
      "target": "saas_root_p8_t4_s5"
    },
    {
      "source": "saas_root_p8_t4_s5",
      "target": "saas_root_p8_t4_s5_d1"
    },
    {
      "source": "saas_root_p8_t4_s5",
      "target": "saas_root_p8_t4_s5_d2"
    },
    {
      "source": "saas_root_p8",
      "target": "saas_root_p8_t5"
    },
    {
      "source": "saas_root_p8_t5",
      "target": "saas_root_p8_t5_s1"
    },
    {
      "source": "saas_root_p8_t5_s1",
      "target": "saas_root_p8_t5_s1_d1"
    },
    {
      "source": "saas_root_p8_t5_s1",
      "target": "saas_root_p8_t5_s1_d2"
    },
    {
      "source": "saas_root_p8_t5",
      "target": "saas_root_p8_t5_s2"
    },
    {
      "source": "saas_root_p8_t5_s2",
      "target": "saas_root_p8_t5_s2_d1"
    },
    {
      "source": "saas_root_p8_t5_s2",
      "target": "saas_root_p8_t5_s2_d2"
    },
    {
      "source": "saas_root_p8_t5",
      "target": "saas_root_p8_t5_s3"
    },
    {
      "source": "saas_root_p8_t5_s3",
      "target": "saas_root_p8_t5_s3_d1"
    },
    {
      "source": "saas_root_p8_t5_s3",
      "target": "saas_root_p8_t5_s3_d2"
    },
    {
      "source": "saas_root_p8_t5",
      "target": "saas_root_p8_t5_s4"
    },
    {
      "source": "saas_root_p8_t5_s4",
      "target": "saas_root_p8_t5_s4_d1"
    },
    {
      "source": "saas_root_p8_t5_s4",
      "target": "saas_root_p8_t5_s4_d2"
    },
    {
      "source": "saas_root_p8_t5",
      "target": "saas_root_p8_t5_s5"
    },
    {
      "source": "saas_root_p8_t5_s5",
      "target": "saas_root_p8_t5_s5_d1"
    },
    {
      "source": "saas_root_p8_t5_s5",
      "target": "saas_root_p8_t5_s5_d2"
    },
    {
      "source": "saas_root_p8",
      "target": "saas_root_p8_t6"
    },
    {
      "source": "saas_root_p8_t6",
      "target": "saas_root_p8_t6_s1"
    },
    {
      "source": "saas_root_p8_t6_s1",
      "target": "saas_root_p8_t6_s1_d1"
    },
    {
      "source": "saas_root_p8_t6_s1",
      "target": "saas_root_p8_t6_s1_d2"
    },
    {
      "source": "saas_root_p8_t6",
      "target": "saas_root_p8_t6_s2"
    },
    {
      "source": "saas_root_p8_t6_s2",
      "target": "saas_root_p8_t6_s2_d1"
    },
    {
      "source": "saas_root_p8_t6_s2",
      "target": "saas_root_p8_t6_s2_d2"
    },
    {
      "source": "saas_root_p8_t6",
      "target": "saas_root_p8_t6_s3"
    },
    {
      "source": "saas_root_p8_t6_s3",
      "target": "saas_root_p8_t6_s3_d1"
    },
    {
      "source": "saas_root_p8_t6_s3",
      "target": "saas_root_p8_t6_s3_d2"
    },
    {
      "source": "saas_root_p8_t6",
      "target": "saas_root_p8_t6_s4"
    },
    {
      "source": "saas_root_p8_t6_s4",
      "target": "saas_root_p8_t6_s4_d1"
    },
    {
      "source": "saas_root_p8_t6_s4",
      "target": "saas_root_p8_t6_s4_d2"
    },
    {
      "source": "saas_root_p8_t6",
      "target": "saas_root_p8_t6_s5"
    },
    {
      "source": "saas_root_p8_t6_s5",
      "target": "saas_root_p8_t6_s5_d1"
    },
    {
      "source": "saas_root_p8_t6_s5",
      "target": "saas_root_p8_t6_s5_d2"
    }
  ]
};
