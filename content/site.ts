export const site = {
  name: "Beak Insights",
  url: "https://www.beakinsights.com",
  email: "info@beakinsights.com",
  whatsapp: "+263 71 306 9794",
  whatsappHref: "https://wa.me/263713069794",
  description:
    "Beak Insights helps organizations design, modernize, integrate and improve technology, AI, informatics and healthcare systems from strategy through implementation.",
  proposition:
    "A rigorous, execution-minded consultancy that connects technology, AI, informatics, and healthcare—from strategy through implementation and measurable improvement.",
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
    summary: "Define a target state that teams can implement, not a slide that expires at the workshop.",
  },
  {
    name: "Deliver",
    summary: "Carry the decision through implementation, integration, or independent assurance.",
  },
  {
    name: "Enable",
    summary: "Leave ownership, skills, and operating routines with the people who will run the work.",
  },
  {
    name: "Measure",
    summary: "Agree what improved, what did not, and what evidence would change the next decision.",
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
    name: "Defined transformation project",
    suitable: "Strategy-to-implementation work with agreed outcomes",
    summary: "A multidisciplinary team accountable for a defined change outcome.",
  },
  {
    name: "Embedded expertise",
    suitable: "Specialist capability inside an existing program",
    summary:
      "Experienced practitioners integrated with your team for a defined period or workstream.",
  },
  {
    name: "Independent assurance",
    suitable: "Objective oversight of a major implementation, vendor, or program",
    summary: "Independent review of architecture, delivery, risk and readiness.",
  },
  {
    name: "Ongoing advisory",
    suitable: "Recurring specialist guidance for leadership",
    summary:
      "Continuity of senior expertise without creating a permanent role for every discipline.",
  },
] as const

export type Need = "IT" | "Informatics & Data" | "AI & Intelligent Systems" | "Healthcare" | "Other"

export const needs: Need[] = ["IT", "Informatics & Data", "AI & Intelligent Systems", "Healthcare", "Other"]
