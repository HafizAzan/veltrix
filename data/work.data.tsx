export const workHero = {
  eyebrow: "Our work",
  title: (
    <>
      120+ projects — <span className="text-accent-primary">shipping</span> in production.
    </>
  ),
  description: "Product engineering across fintech, health, commerce, and internal platforms. Filter by focus area (UI mock — all projects shown).",
};

export const workFilters = ["All", "Web apps", "Mobile", "AI", "SaaS", "E-commerce", "Internal tools"];

export const workFeatured = [
  {
    title: "ShopMatrix commerce",
    description: "Headless storefront, promotions engine, and ops dashboards for a multi-region retailer.",
    tags: ["E-commerce", "Web", "SaaS"],
    stats: [
      { label: "GMV uplift", value: "22%" },
      { label: "Checkout latency", value: "−41%" },
    ],
    badge: "$1.2M raised",
  },
  {
    title: "FinEdge analytics",
    description: "Streaming risk metrics and compliance exports for a cross-border payments product.",
    tags: ["Fintech", "Web"],
    stats: [
      { label: "Report SLA", value: "< 2m" },
      { label: "Uptime", value: "99.99%" },
    ],
    badge: "Series A",
  },
];

export const workIndustries = ["Real estate", "Healthcare", "Fintech", "Logistics", "Education", "SaaS"];

export const workGrid = [
  { title: "Claims automation", description: "Rules engine + integrations for insurer workflows.", tags: ["Node", "Postgres"], metric: "40% faster cycle", badge: "Insurance" },
  { title: "Fleet tracker", description: "GPS ingestion, alerts, and driver apps.", tags: ["Mobile", "Maps"], metric: "10k+ vehicles", badge: "Logistics" },
  { title: "Learning portal", description: "Courses, cohorts, and payments for an edtech brand.", tags: ["Next.js", "Stripe"], metric: "50k learners", badge: "Edtech" },
  { title: "Vendor portal", description: "Supplier onboarding and document checks.", tags: ["React", "AWS"], metric: "NDA", badge: "Enterprise" },
  { title: "Experiment hub", description: "Feature flags and metrics for growth teams.", tags: ["Go", "Kafka"], metric: "Real-time", badge: "SaaS" },
  { title: "Care triage", description: "Clinician-first scheduling and audit logs.", tags: ["Web", "Auth"], metric: "HIPAA-ready", badge: "Health" },
];

export const workProcess = [
  { step: "01", title: "Deep discovery", description: "Stakeholder interviews, domain modeling, and risk register." },
  { step: "02", title: "Architecture", description: "Data flows, SLAs, and incremental delivery milestones." },
  { step: "03", title: "Build & harden", description: "Automated tests, observability, and staged rollouts." },
  { step: "04", title: "Launch", description: "Runbooks, training, and hypercare window." },
];

export const workTestimonials = [
  { quote: "They owned the full stack and still document everything so our team can operate it.", author: "L. Hussain", role: "Product lead" },
  { quote: "Clear estimates, weekly demos, and no bait-and-switch on seniority.", author: "N. Omar", role: "COO" },
];

export const workFinalCta = {
  title: "Your project could be next",
  description: "Send a short brief — we respond within one business day with fit and next steps.",
  primary: { label: "Start a conversation", href: "/contact" },
  secondary: { label: "Capabilities", href: "/services" },
};
