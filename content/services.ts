export type ServiceSlug =
  | "it-consulting"
  | "informatics-and-data"
  | "ai-and-intelligent-systems"
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
  diagram: "architecture" | "information" | "ai" | "workflow"
  diagramTitle: string
  diagramCaption: string
  tone: "navy" | "teal" | "healthcare"
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
    tone: "navy",
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
        name: "AI readiness and data foundations",
        summary:
          "Assess whether the information, permissions, quality, lineage, and operating controls are strong enough to support AI safely.",
      },
    ],
    method: ["Discover the flow", "Model the meaning", "Design the exchange", "Implement the path", "Measure the decision"],
    diagram: "information",
    tone: "teal",
    diagramTitle: "From data flow to decision flow",
    diagramCaption:
      "Informatics work traces a fact from its source, through definition and exchange, to the decision that depends on it.",
  },
  {
    slug: "ai-and-intelligent-systems",
    name: "AI & Intelligent Systems",
    shortLabel: "AI & Intelligent Systems",
    navSummary: "AI strategy, RAG, agentic systems, governance and production delivery.",
    cardLine: "Move AI from experiments into governed, useful systems.",
    topics: "Strategy · RAG · Agents · Governance",
    href: "/what-we-do/ai-and-intelligent-systems",
    title: "AI Strategy, RAG & Agentic Systems Consulting | Beak Insights",
    description:
      "AI strategy and implementation consulting across generative AI, retrieval-augmented generation, agentic systems, AI governance, evaluation and enterprise integration.",
    h1: "AI systems designed for real work.",
    lede:
      "We help organizations choose where AI creates value, build the data and knowledge foundations behind it, and design production systems that can be evaluated, governed and operated.",
    problems: [
      "AI pilots that demonstrate a model but do not change a decision, workflow, or measurable outcome",
      "RAG and generative AI systems that retrieve the wrong context, expose sensitive information, or cannot be evaluated consistently",
      "Agents given tools and autonomy without clear permissions, human oversight, observability, or a safe operating model",
    ],
    capabilities: [
      {
        name: "AI strategy and use-case portfolio",
        summary:
          "Prioritize the decisions and workflows where AI is worth using, define the expected value, and choose what should be assisted, augmented, or automated.",
      },
      {
        name: "Generative AI and RAG",
        summary:
          "Knowledge-grounded assistants and applications using retrieval, enterprise search, context design, citations, access controls, and evaluation rather than unsupported model output.",
      },
      {
        name: "Agentic systems and orchestration",
        summary:
          "Agents that can plan, retrieve, call tools, collaborate, and act within explicit boundaries—with human approval where the consequence requires it.",
      },
      {
        name: "AI engineering and enterprise integration",
        summary:
          "Production architecture for models, APIs, tools, identity, data, workflows, and existing applications, including model gateways and standards such as MCP where they are useful.",
      },
      {
        name: "Evaluation, LLMOps and observability",
        summary:
          "Test sets, quality measures, tracing, cost and latency monitoring, prompt and model versioning, and feedback loops that make AI behavior visible enough to operate.",
      },
      {
        name: "Responsible AI, governance and safety",
        summary:
          "Risk classification, privacy and security controls, human accountability, auditability, model and agent guardrails, and governance appropriate to the consequence of the use case.",
      },
    ],
    method: [
      "Frame the outcome",
      "Assess data and AI readiness",
      "Design architecture and guardrails",
      "Build and evaluate",
      "Integrate, operate and scale",
    ],
    diagram: "ai",
    tone: "teal",
    diagramTitle: "From trusted knowledge to governed action",
    diagramCaption:
      "AI systems connect trusted enterprise knowledge to retrieval, models, agents and tools, while evaluation, permissions and human oversight constrain what can become an action.",
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
    tone: "healthcare",
    diagramTitle: "Workflow before configuration",
    diagramCaption:
      "Healthcare work follows the path from preparation, through the encounter or laboratory step, to the downstream action that depends on the result.",
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
