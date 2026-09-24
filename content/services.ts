export type ServiceSlug =
  | "it-consulting"
  | "informatics-and-data"
  | "healthcare-transformation"

export type Service = {
  slug: ServiceSlug
  name: string
  shortLabel: string
  navSummary: string
  cardLine: string
  topics: string
  href: string
  title: string
  description: string
  h1: string
  lede: string
  problems: string[]
  capabilities: { name: string; summary: string }[]
  method: string[]
  diagram: "architecture" | "information" | "workflow"
  diagramTitle: string
  diagramCaption: string
}

export const services: Service[] = [
  {
    slug: "it-consulting",
    name: "IT Consulting",
    shortLabel: "IT Consulting",
    navSummary: "Strategy, architecture, modernization and delivery.",
    cardLine: "Make technology decisions that hold up in delivery.",
    topics: "Strategy · Architecture · Modernization",
    href: "/what-we-do/it-consulting",
    title: "IT Consulting Services | Beak Insights",
    description:
      "IT strategy, architecture, modernization, integration and delivery consulting designed to turn technology complexity into reliable business capability.",
    h1: "IT consulting built around business outcomes.",
    lede: "We help teams make difficult technology decisions, define a workable target state and carry the decision through implementation—not leave it in a strategy deck.",
    problems: [
      "Strategy that never reaches an implementable target architecture",
      "Modernization programs organized around vendors rather than business capability",
      "Delivery risk that is discovered after the design is already frozen",
    ],
    capabilities: [
      {
        name: "Strategy and architecture",
        summary:
          "Decisions about what to keep, replace, integrate, or stop—tied to the capabilities the organization actually needs.",
      },
      {
        name: "Modernization and integration",
        summary:
          "A path from the current estate to a target state, including the interfaces that have to keep working while the change happens.",
      },
      {
        name: "Delivery assurance",
        summary:
          "Independent review of scope, architecture, dependencies, and whether the plan can still be delivered.",
      },
      {
        name: "Technology operating models",
        summary:
          "Ownership, funding, and decision rights so the target state survives the project that created it.",
      },
    ],
    method: ["Discover the estate", "Choose the target state", "Sequence the change", "Assure delivery", "Measure capability"],
    diagram: "architecture",
    diagramTitle: "Current state to target state",
    diagramCaption:
      "IT work starts by naming the systems and decisions in place today, then the target architecture those decisions have to become.",
  },
  {
    slug: "informatics-and-data",
    name: "Informatics & Data",
    shortLabel: "Informatics & Data",
    navSummary: "Governance, interoperability, analytics and decision systems.",
    cardLine: "Make information usable, governed and connected.",
    topics: "Govern · Connect · Decide",
    href: "/what-we-do/informatics-and-data",
    title: "Informatics & Data Consulting | Beak Insights",
    description:
      "Informatics, data governance, interoperability, analytics and information strategy consulting for complex organizations.",
    h1: "Make information usable, governed and connected.",
    lede: "Better decisions rarely begin with another dashboard. They begin with trustworthy information, clear definitions, governed flows and systems that can exchange what matters.",
    problems: [
      "Fragmented systems that each hold a partial version of the same fact",
      "Low-trust data, unclear ownership, and definitions that change by team",
      "Poor interoperability treated as a one-off interface project",
    ],
    capabilities: [
      {
        name: "Information and data strategy",
        summary:
          "Which information has to be reliable, who decides its meaning, and where it must arrive to change a decision.",
      },
      {
        name: "Governance and quality",
        summary:
          "Definitions, ownership, and quality checks that operators can run—not a committee that only publishes principles.",
      },
      {
        name: "Interoperability and integration",
        summary:
          "The flows, standards, and operating routines that let systems exchange what the work actually requires.",
      },
      {
        name: "Analytics and decision support",
        summary:
          "Analysis designed around a decision, with a known source, grain, and limit.",
      },
      {
        name: "AI readiness and governance",
        summary:
          "What information would be used, where a person remains accountable, what is measured, and how risk is governed.",
      },
    ],
    method: ["Discover the flow", "Model the meaning", "Design the exchange", "Implement the path", "Measure the decision"],
    diagram: "information",
    diagramTitle: "From data flow to decision flow",
    diagramCaption:
      "Informatics work traces a fact from its source, through definition and exchange, to the decision that depends on it.",
  },
  {
    slug: "healthcare-transformation",
    name: "Healthcare Transformation",
    shortLabel: "Healthcare",
    navSummary: "Digital health, health informatics, workflows and implementation.",
    cardLine: "Healthcare transformation grounded in real workflows.",
    topics: "Workflow · Informatics · Implementation",
    href: "/what-we-do/healthcare-transformation",
    title: "Healthcare Technology & Informatics Consulting | Beak Insights",
    description:
      "Healthcare consulting across digital health, informatics, interoperability, systems, workflows and implementation.",
    h1: "Healthcare transformation grounded in real workflows.",
    lede: "Healthcare transformation succeeds when technology fits the realities of care, operations and information—not when teams optimize one of those in isolation.",
    problems: [
      "Technology choices made before the clinical or operational workflow is understood",
      "Information that does not move between the teams, processes, and systems that share a patient pathway",
      "Implementations that go live without adoption, governance, or a way to see whether care or operations improved",
    ],
    capabilities: [
      {
        name: "Digital health strategy",
        summary:
          "A target for digital change that names the workflow, the information, and the operating constraints together.",
      },
      {
        name: "Health informatics",
        summary:
          "Definitions, flows, and decision points inside care and laboratory settings, not a generic data strategy with a healthcare label.",
      },
      {
        name: "Clinical and operational workflow",
        summary:
          "The work as it is done—handoffs, exceptions, and the points where a system helps or gets in the way.",
      },
      {
        name: "Interoperability",
        summary:
          "How information moves between clinical, laboratory, and operational systems, including the standards and ownership required to keep it moving.",
      },
      {
        name: "Implementation and adoption",
        summary:
          "Configuration, integration, training, and measurement so a system change survives contact with daily work.",
      },
    ],
    method: ["Map the workflow", "Name the information", "Design the change", "Implement with operators", "Measure adoption"],
    diagram: "workflow",
    diagramTitle: "Workflow before configuration",
    diagramCaption:
      "Healthcare work follows the path from preparation, through the encounter or laboratory step, to the downstream action that depends on the result.",
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
