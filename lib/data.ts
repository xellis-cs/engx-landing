/**
 * Domain content for the EngX site. This file is deliberately the only place
 * where service lines, squad roles, value propositions, and leadership bios
 * live — components render from here. See docs/DOMAIN.md for the business
 * context behind this content.
 */

export type ValueProp = { title: string; blurb: string };

export const valueProps: ValueProp[] = [
  {
    title: "End-to-end capability & integration",
    blurb: "From inception to institutionalisation — one accountable team across the full journey.",
  },
  {
    title: "Intelligence-led",
    blurb: "Advanced analytics and applied AI inform every recommendation we make.",
  },
  {
    title: "Multidisciplinary excellence",
    blurb: "Integrated experts across the entire business value chain, not siloed specialists.",
  },
  {
    title: "Integrity & assurance",
    blurb: "Uncompromised quality, ethics, and professional standards on every engagement.",
  },
  {
    title: "Rapid deployment, sustainable execution",
    blurb: "Squads mobilised in days, engineered to leave lasting capability behind.",
  },
  {
    title: "Measurable impact",
    blurb: "Outcome-based delivery — we are accountable for results, not hours billed.",
  },
];

export type ServiceLine = {
  id: string;
  num: string;
  title: string;
  summary: string;
  capabilities: { name: string; blurb: string }[];
};

export const serviceLines: ServiceLine[] = [
  {
    id: "strategy",
    num: "01",
    title: "Strategy & Growth Planning",
    summary:
      "Shaping the next horizon of value — and building the optionality to reach it.",
    capabilities: [
      { name: "Art of Opportunity", blurb: "Identifying and shaping the next horizon of value before competitors see it." },
      { name: "AI-driven scenario modelling", blurb: "Stress-testing strategic options against modelled futures, at speed." },
      { name: "ESG-integrated growth strategy", blurb: "Embedding environmental and social factors directly into the growth thesis." },
      { name: "Ecosystem & platform strategy", blurb: "Designing where to compete, partner, and orchestrate across value networks." },
      { name: "Resilience-based strategic pivoting", blurb: "Building optionality so the business can turn without breaking." },
    ],
  },
  {
    id: "process",
    num: "02",
    title: "Process Optimisation & Improvement",
    summary:
      "Finding where margin and time leak out — and engineering it back.",
    capabilities: [
      { name: "Digital twin process simulation", blurb: "Modelling operations digitally to test changes before committing to them." },
      { name: "AI-assisted root cause analysis", blurb: "Surfacing the real source of issues instead of treating symptoms." },
      { name: "Low-code automation enablement", blurb: "Putting automation tooling in the hands of the people closest to the work." },
      { name: "Process mining for value leakage", blurb: "Reading the data trail to find where margin and time leak out." },
      { name: "Operations design & engineering", blurb: "Reshaping operating models from the process layer up." },
    ],
  },
  {
    id: "data-ai",
    num: "03",
    title: "Data & Advanced Analytics",
    summary:
      "Turning data into decisions — from unstructured signal to prescriptive action.",
    capabilities: [
      { name: "Generative AI for unstructured data", blurb: "Turning documents, calls, and free-text into structured signal." },
      { name: "Synthetic data generation", blurb: "Creating safe, scalable training data where the real thing is restricted." },
      { name: "Prescriptive asset management", blurb: "Telling the business not only what's happening, but what to do about it." },
      { name: "Decision intelligence platforms", blurb: "A unified layer where data, models, and business rules meet." },
      { name: "Edge analytics", blurb: "Bringing the model to where the data is created, not the other way around." },
    ],
  },
  {
    id: "transformation",
    num: "04",
    title: "Transformation & Change",
    summary:
      "Protecting the business case from concept to outcome — at pace.",
    capabilities: [
      { name: "Value realisation office", blurb: "A standing function that protects the business case from concept to outcome." },
      { name: "People change enablement", blurb: "Equipping the workforce so adoption matches deployment." },
      { name: "Rapid change agility", blurb: "Compressing change cycles without compromising the result." },
      { name: "Agile operating model design", blurb: "Re-architecting how work flows, decisions are made, and value is delivered." },
      { name: "Cloud-native transformation", blurb: "Re-platforming for elasticity, speed, and modern economics." },
    ],
  },
  {
    id: "people",
    num: "05",
    title: "People Agility & Ways of Work",
    summary:
      "Designing the organisation around the people who do the work.",
    capabilities: [
      { name: "Skills-based talent marketplace", blurb: "Matching skills to needs across the organisation, not just job descriptions." },
      { name: "Employee experience optimisation", blurb: "Designing the moments that matter for the people doing the work." },
      { name: "Customer-centric leadership models", blurb: "Leadership operating models built around customer outcomes." },
      { name: "Behavioural nudge management", blurb: "Small design changes that shift behaviour at scale." },
    ],
  },
  {
    id: "advisory",
    num: "06",
    title: "Advisory, Training & Capability",
    summary:
      "Building institutional capability that outlasts the engagement.",
    capabilities: [
      { name: "Leadership for the AI age", blurb: "Equipping leaders to govern with confidence in an AI-augmented business." },
      { name: "Immersive VR/AR training", blurb: "High-fidelity simulation training for high-stakes work." },
      { name: "Micro-learning ecosystems", blurb: "Capability built in small doses, embedded in the flow of work." },
      { name: "Capability benchmarking", blurb: "Knowing where you stand against peers, and where the gap is closing." },
      { name: "Custom corporate academies", blurb: "Branded learning institutions designed to your strategic agenda." },
    ],
  },
  {
    id: "forensics",
    num: "07",
    title: "Forensics & Crime Intelligence",
    summary:
      "Independent investigation and financial-crime intelligence, handled with discretion.",
    capabilities: [
      { name: "Forensic & investigation services", blurb: "Independent investigation, evidence handling, and reporting." },
      { name: "Financial crime & regulatory intelligence", blurb: "Detecting and disrupting financial crime patterns." },
      { name: "Law enforcement & prosecutorial support", blurb: "Specialist analytical and advisory support to enforcement teams." },
    ],
  },
];

export type RoleCategory =
  | "leadership"
  | "architecture"
  | "engineering"
  | "change"
  | "data-ai";

export const roleCategories: { id: RoleCategory | "all"; label: string }[] = [
  { id: "all", label: "All roles" },
  { id: "leadership", label: "Leadership" },
  { id: "architecture", label: "Architecture" },
  { id: "engineering", label: "Engineering" },
  { id: "change", label: "Change" },
  { id: "data-ai", label: "Data & AI" },
];

export type SquadRole = {
  key: string;
  name: string;
  cat: RoleCategory;
  desc: string;
};

export const squadRoles: SquadRole[] = [
  { key: "project-director", name: "Project Director", cat: "leadership", desc: "Senior accountability and programme oversight at executive level." },
  { key: "program-manager", name: "Programme Manager", cat: "leadership", desc: "Coordinates interlinked projects toward a common strategic outcome." },
  { key: "project-manager", name: "Project Manager", cat: "leadership", desc: "Single-project delivery: scope, timeline, budget, and team." },
  { key: "transformation-specialist", name: "Transformation Specialist", cat: "leadership", desc: "Leads large-scale, multi-stream change programmes." },
  { key: "enterprise-architect", name: "Enterprise Architect", cat: "architecture", desc: "Organisation-wide architecture standards, principles, and roadmaps." },
  { key: "solution-architect", name: "Solution Architect", cat: "architecture", desc: "End-to-end technical solution design across systems." },
  { key: "business-solution-architect", name: "Business Solution Architect", cat: "architecture", desc: "Translates business needs into structured solution blueprints." },
  { key: "it-solution-architect", name: "IT Solution Architect", cat: "architecture", desc: "Designs the technology stack and integration patterns." },
  { key: "design-engineer", name: "Design Engineer", cat: "engineering", desc: "Hands-on design and build of operational solutions." },
  { key: "devops", name: "DevOps Engineer", cat: "engineering", desc: "Build, release, monitoring, and operations engineering." },
  { key: "change-manager", name: "Change Manager", cat: "change", desc: "The people side of change — adoption, communication, training." },
  { key: "scrum-master", name: "Scrum Master", cat: "change", desc: "Agile facilitation and removing impediments for delivery teams." },
  { key: "ai-engineer", name: "AI Engineer", cat: "data-ai", desc: "Designs, trains, and deploys production AI systems." },
  { key: "data-scientist", name: "Data Scientist", cat: "data-ai", desc: "Extracts insight and builds models from data." },
];

export type Principle = { title: string; blurb: string };

export const approachPrinciples: Principle[] = [
  { title: "Client-centric strategy", blurb: "Every engagement starts with your actual problem, not a pre-packaged playbook. Strategy stays adaptive and client-led." },
  { title: "Insight-enabled adaptability", blurb: "Decisions on evidence, not opinion. We instrument the work so the business reads what's happening in near real-time." },
  { title: "Operational agility", blurb: "Teams, roles, and processes designed to be reshaped as conditions change — without re-architecting everything." },
  { title: "Collaborative delivery", blurb: "Cross-functional squads in short, lean-agile cycles with your people embedded throughout — built with you, not handed to you." },
  { title: "Transform the business", blurb: "Where waste lives, we cut it. Where work is repeatable, we automate it — freeing capacity for higher-value work." },
  { title: "Portfolio discipline", blurb: "Resources flow continuously to where they create the most value; initiatives that stop earning their place are retired." },
];

export const squadTypes = [
  {
    title: "Design Engineering Squads",
    kicker: "Clear the path",
    blurb:
      "Surgical unblocking and high-intensity execution. Tactical units deployed to break through bottlenecks and deliver immediate, market-ready ROI.",
  },
  {
    title: "Transformation Squads",
    kicker: "Build what lasts",
    blurb:
      "Institutional muscle memory. Strategic units focused on sustained growth, capability transfer, and structural evolution.",
  },
] as const;

export const bauServices = [
  { title: "Recurring revenue issues", blurb: "Stabilising leaks in renewals, billing, and account health." },
  { title: "Operational inefficiencies", blurb: "Quick wins where the operating model creates friction." },
  { title: "Technology disruption risks", blurb: "Hardening the basics so small failures don't escalate." },
  { title: "Capacity & sourcing", blurb: "Adding skilled hands when the team is good but stretched." },
  { title: "On-call advisory", blurb: "Senior counsel on retainer for whatever lands on your desk." },
] as const;

export const leadership = {
  name: "George Ellis",
  role: "Founding Partner",
  headline:
    "Two decades leading strategy, innovation, operations, and technology change inside Africa's most complex institutions.",
  bio: [
    "George is a strategy, innovation, operations, and technology consultant with more than 20 years of experience driving strategic change at executive level within large, complex corporate environments.",
    "Before founding EngX he was a Director at Forvis Mazars, where he led the Financial Services Engineering advisory practice, having joined to help establish the firm's financial services advisory business in Africa. His earlier career includes Deloitte South Africa's Analytics division.",
    "He holds a BCom (Hons) in Marketing and Economics and an MBA, both from the University of Pretoria.",
  ],
  experienceLine:
    "Partner-led engagement experience spans major banks, insurers, regulators, and public institutions, including:",
  clients: [
    "Standard Bank",
    "Absa",
    "Barclays",
    "SARS",
    "Auditor-General SA",
    "Telkom",
    "Sun International",
    "Land Bank",
  ],
} as const;

export const publications = {
  featured: {
    tag: "Featured publication",
    title: "The Art of Opportunity",
    subtitle: "A Practitioner's Guide to Intelligent Transformation",
    author: "By the EngX Team",
    blurb:
      "A working manual for leaders navigating the gap between strategy and execution. Drawing on more than 250 years of combined consulting experience, the book lays out the EngX methodology — from data, process, and people scaling to building an adaptive, intelligent organisation.",
    meta: ["312 pages", "PDF + EPUB", "First edition, 2026"],
    price: "R450",
  },
  pipeline: [
    { type: "White paper", title: "Adaptive Intelligent Organisations", blurb: "Embedding the AI engine into the organisational fabric — principles, governance patterns, and field-tested examples." },
    { type: "Playbook", title: "Building Super Squads", blurb: "Assembling, deploying, and scaling cross-functional teams that ship outcomes, not just artefacts." },
    { type: "Case studies", title: "The Forensics Playbook", blurb: "Real engagements in forensic and crime intelligence work — what we found and what we learned." },
    { type: "Research brief", title: "ESG-Integrated Growth Strategy", blurb: "Embedding environmental and social factors directly into the growth thesis — quantified and defensible." },
  ],
} as const;

export const stats = [
  { value: "250+", label: "Years of combined senior experience" },
  { value: "7", label: "Integrated service lines" },
  { value: "14", label: "Specialist disciplines on demand" },
  { value: "Global", label: "Network of partners and clients" },
] as const;

/**
 * Global-reach map markers. Coordinates are percentages of the
 * public/world-map.png canvas (x from left, y from top), anchored at the pin
 * tip — positions carried over from the original designer artwork. Labels are
 * regions, not office claims (see docs/DOMAIN.md positioning rules).
 */
export type MapMarker = { x: number; y: number; label: string; hq?: boolean };

export const globalReach = {
  statement:
    "Founded in South Africa. Delivering globally — one network, assembled wherever the work is.",
  markers: [
    { x: 54.0, y: 83.4, label: "South Africa — home base", hq: true },
    { x: 52.5, y: 70.1, label: "Central Africa" },
    { x: 56.9, y: 75.7, label: "Southern Africa" },
    { x: 49.6, y: 36.4, label: "United Kingdom & Europe" },
    { x: 25.2, y: 43.4, label: "North America — east" },
    { x: 18.6, y: 47.9, label: "North America — west" },
    { x: 88.9, y: 83.4, label: "Australia" },
  ] satisfies MapMarker[],
} as const;

/**
 * Copy for the Frameworks scroll narrative — the firm's method IP rendered
 * as three visual scenes. Vocabulary per docs/DOMAIN.md: AIO, the continuous
 * learning loop (whose six principles are `approachPrinciples`), and squads.
 */
export const frameworks = {
  eyebrow: "The EngX Method",
  title: "Frameworks engineered to",
  titleEm: "compound",
  intro:
    "Method is what makes speed repeatable. Three frameworks run through every engagement — each one designed so today's delivery becomes tomorrow's capability.",
  aio: {
    kicker: "The destination",
    title: "Adaptive Intelligent Organisations",
    blurb:
      "The end-state we build toward: an organisation that scales its data, its processes, and its people in concert — under governed autonomy, so speed never outruns control.",
    canopy: "Governed autonomy",
    planes: [
      {
        title: "People scaling",
        blurb: "Teams and leaders equipped to work with intelligence, not around it.",
      },
      {
        title: "Process scaling",
        blurb: "Operations that adapt as fast as the market moves — mined, engineered, automated.",
      },
      {
        title: "Data scaling",
        blurb: "Signal the whole organisation can trust — governed, integrated, decision-ready.",
      },
    ],
  },
  loop: {
    kicker: "The operating rhythm",
    title: "The continuous learning loop",
    blurb:
      "Six principles, one rhythm. Every engagement runs the loop: read the client's reality, adapt on evidence, deliver collaboratively, and feed what was learned back into the portfolio.",
  },
  squad: {
    kicker: "The delivery unit",
    title: "Squads, assembled per engagement",
    blurb:
      "No bench, no pyramid. Senior specialists converge around your outcome, deliver, and transfer the capability before they leave.",
    center: "Your outcome",
    cta: "Build your squad",
  },
} as const;

export const contactInterests = [
  "Strategy & Growth Planning",
  "Process Optimisation & Improvement",
  "Data & Advanced Analytics",
  "Transformation & Change",
  "People Agility & Ways of Work",
  "Advisory, Training & Capability",
  "Forensics & Crime Intelligence",
  "Business-as-Usual Services",
  "Something else",
] as const;
