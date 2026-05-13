import type { AccordionItemData } from "@/components/ui/accordion";

export const contactHero = {
  badge: "Get in touch",
  title: (
    <>
      Let&apos;s build something <span className="text-accent-primary">great</span> together.
    </>
  ),
  description:
    "Tell us about your project. We reply within four business hours with honest advice — not a sales pitch.",
  highlights: [
    { value: "< 4hrs", label: "Avg. response" },
    { value: "Free", label: "First strategy call" },
    { value: "NDA", label: "On request" },
  ],
};

export const contactFormCopy = {
  title: "Start your project",
  subtitle: "Fields marked logically required for a useful first reply.",
};

export const contactServiceOptions = [
  { value: "custom", label: "Custom software" },
  { value: "mobile", label: "Mobile app" },
  { value: "design", label: "UI/UX design" },
  { value: "marketing", label: "SEO & marketing" },
  { value: "cloud", label: "Cloud & DevOps" },
  { value: "unsure", label: "Not sure yet" },
];

export const contactBudgetOptions = [
  { value: "lt25", label: "< $25k" },
  { value: "25_50", label: "$25k – $50k" },
  { value: "50_100", label: "$50k – $100k" },
  { value: "gt100", label: "$100k+" },
];

export const contactReferralOptions = [
  { value: "google", label: "Search / Google" },
  { value: "referral", label: "Referral" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "other", label: "Other" },
];

export const contactSidebar = {
  email: "hello@veltrix.software",
  phone: "+92 333 711 1111",
  response: "Within 4 business hours",
  calendlyTitle: "Prefer a call?",
  calendlyCta: "Book on Calendly",
  calendlyHref: "https://calendly.com",
  office: {
    city: "Karachi, Pakistan",
    tz: "PKT (UTC+5)",
  },
  social: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Twitter / X", href: "https://x.com" },
  ],
};

export const contactFaqEyebrow = "Quick answers";
export const contactFaqTitle = "Questions we get asked a lot";

export const contactFaqItems: AccordionItemData[] = [
  {
    id: "1",
    title: "Do you work hourly or fixed price?",
    content: "Both. Discovery-heavy or research phases often start time-and-materials; well-bounded modules can be fixed milestones.",
  },
  {
    id: "2",
    title: "How fast can we start?",
    content: "Typically 1–3 weeks after a signed SOW, depending on team availability and security onboarding.",
  },
  {
    id: "3",
    title: "Do you outsource everything?",
    content: "Core engineering is in-house. We sometimes bring vetted specialists for narrow niches — disclosed up front.",
  },
  {
    id: "4",
    title: "What timezone do you work in?",
    content: "Primarily PKT with overlap hours for EU and US teams. Async documentation keeps collaboration smooth.",
  },
];

export const contactProcessSteps = [
  { title: "We read it", description: "A senior engineer reviews your message and clarifies scope if needed." },
  { title: "Within 4 hours", description: "You get a written reply with fit, rough timeline, and optional call link." },
  { title: "Strategy call", description: "30–45 minutes to align on goals, risks, and engagement model." },
  { title: "Proposal", description: "Statement of work with milestones, pricing, and success criteria." },
];

export const contactBottomCta = {
  title: "Still not sure? Let's just talk.",
  description: "No commitment — just engineering expertise and honest guidance.",
  primary: { label: "Book a free call", href: "#contact-form" },
};
