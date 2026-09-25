export const site = {
  name: "Beak Insights",
  url: "https://www.beakinsights.com",
  email: "info@beakinsights.com",
  whatsapp: "+263 71 306 9794",
  whatsappHref: "https://wa.me/263713069794",
  description:
    "Beak Insights is an African technology consultancy combining advisory, engineering, data, AI and domain expertise to design, build and improve mission-critical systems.",
  proposition:
    "An African technology and data consultancy that brings strategy, engineering and domain expertise together to design, build and improve mission-critical systems—with deep capability in health, laboratories and digital public infrastructure.",
} as const

export const nav = [
  { label: "What we do", href: "/what-we-do" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
] as const

export const aboutLinks = [
  { label: "About Beak Insights", href: "/about" },
  { label: "Culture", href: "/about/culture" },
  { label: "Team", href: "/about/team" },
  { label: "How we work", href: "/about/how-we-work" },
] as const

export const legalLinks = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Cookie notice", href: "/legal/cookies" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Accessibility", href: "/legal/accessibility" },
] as const

export const method = [
  {
    name: "Diagnose",
    summary: "Establish what is happening, what matters, and where the system actually breaks.",
  },
  {
    name: "Design",
    summary: "Define a target state that teams can implement, operate and govern—not a slide that expires at the workshop.",
  },
  {
    name: "Build & deliver",
    summary: "Carry the decision through engineering, integration, implementation or independent assurance.",
  },
  {
    name: "Enable",
    summary: "Leave ownership, skills, documentation and operating routines with the people who will run the work.",
  },
  {
    name: "Measure",
    summary: "Agree what improved, what did not, and what evidence should change the next decision.",
  },
] as const

export const engagements = [
  {
    name: "Diagnostic / advisory sprint",
    suitable: "Problem definition, assessment, target state, due diligence",
    summary:
      "A focused engagement to establish what is happening, what matters and what should happen next.",
  },
  {
    name: "Managed delivery",
    suitable: "End-to-end implementation with a defined outcome",
    summary:
      "A multidisciplinary Beak team takes responsibility for turning an agreed target state into a working, integrated solution.",
  },
  {
    name: "Defined transformation project",
    suitable: "Strategy-to-implementation change across systems, data and operations",
    summary: "A structured programme with clear outcomes, workstreams, governance and measurable handover criteria.",
  },
  {
    name: "Embedded expertise",
    suitable: "Specialist capability inside an existing programme or product team",
    summary:
      "Experienced practitioners integrated with your team for a defined period or workstream.",
  },
  {
    name: "Independent assurance",
    suitable: "Objective oversight of a major implementation, vendor, architecture or programme",
    summary: "Independent review of architecture, delivery, risk, readiness and the evidence behind key decisions.",
  },
  {
    name: "Ongoing advisory & improvement",
    suitable: "Recurring specialist guidance, optimisation and capability building",
    summary:
      "Continuity of expertise after go-live, focused on operating health, improvement, knowledge transfer and the next set of decisions.",
  },
] as const

export const culturePrinciples = [
  {
    name: "Learn deeply. Teach freely.",
    summary:
      "Craft matters. We expect people to keep learning, share what they know and make the people around them more capable—not protect knowledge as status.",
  },
  {
    name: "Own the outcome.",
    summary:
      "A recommendation is not finished because the deck is finished. We take responsibility for whether the decision can survive design, delivery and real operations.",
  },
  {
    name: "Start with the real work.",
    summary:
      "We learn the workflow, constraints, users and exceptions before prescribing technology. The system has to work where the work actually happens.",
  },
  {
    name: "Cross boundaries, not responsibilities.",
    summary:
      "The hardest problems cross engineering, data, operations and domain expertise. We work across disciplines as one team while keeping accountability clear.",
  },
  {
    name: "Use evidence. Speak clearly.",
    summary:
      "We make assumptions visible, measure what matters, challenge ideas respectfully and say when the evidence is not strong enough yet.",
  },
  {
    name: "Leave capability behind.",
    summary:
      "Good consulting should reduce dependency. We document, coach, transfer context and build operating routines so client teams can own what comes next.",
  },
] as const

export type Need =
  | "Technology Advisory & Engineering"
  | "Data & Informatics"
  | "AI & Intelligent Systems"
  | "Health & Laboratory Informatics"
  | "Other"

export const needs: Need[] = [
  "Technology Advisory & Engineering",
  "Data & Informatics",
  "AI & Intelligent Systems",
  "Health & Laboratory Informatics",
  "Other",
]
