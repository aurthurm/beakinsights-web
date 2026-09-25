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
    name: "Technology Advisory & Engineering",
    shortLabel: "Technology & Engineering",
    navSummary: "Strategy, architecture, software engineering, modernization and managed delivery.",
    cardLine: "Connect technology decisions to working systems.",
    topics: "Advisory · Architecture · Engineering · Delivery",
    href: "/what-we-do/it-consulting",
    title: "Technology Advisory & Engineering Consulting | Beak Insights",
    description:
      "Technology strategy, architecture, custom software engineering, modernization, integration and managed delivery consulting for complex organizations.",
    h1: "Technology advisory that can survive engineering and delivery.",
    lede:
      "We help organizations make difficult technology decisions and carry them through architecture, engineering, integration and implementation—so strategy becomes dependable capability rather than another handoff.",
    problems: [
      "Strategy that never reaches an implementable target architecture",
      "Modernization programmes organized around vendors rather than business capability",
      "Critical software or integrations that need accountable delivery, not only extra hands",
    ],
    capabilities: [
      {
        name: "Technology strategy and architecture",
        summary:
          "Decisions about what to keep, replace, integrate, build, or stop—tied to the capabilities the organization actually needs.",
      },
      {
        name: "Custom software and product engineering",
        summary:
          "Design and engineering of applications, platforms and services where the requirement is a working system rather than a recommendation alone.",
      },
      {
        name: "Modernization and integration",
        summary:
          "A path from the current estate to a target state, including the interfaces that have to keep working while the change happens.",
      },
      {
        name: "Managed delivery and assurance",
        summary:
          "Accountable delivery of defined outcomes, or independent review of scope, architecture, dependencies, risk and readiness.",
      },
      {
        name: "Technology operating models",
        summary:
          "Ownership, decision rights, delivery routines and capability so the target state survives the project that created it.",
      },
    ],
    method: ["Discover the estate", "Choose the target state", "Design the path", "Build and integrate", "Operate and improve"],
    diagram: "architecture",
    tone: "navy",
    diagramTitle: "Current state to working target state",
    diagramCaption:
      "Technology work starts by naming the systems and decisions in place today, then connects the target architecture to the engineering and delivery path required to make it real.",
  },
  {
    slug: "informatics-and-data",
    name: "Data & Informatics",
    shortLabel: "Data & Informatics",
    navSummary: "Data strategy, governance, interoperability, analytics and decision systems.",
    cardLine: "Turn fragmented information into trusted decision systems.",
    topics: "Govern · Connect · Engineer · Decide",
    href: "/what-we-do/informatics-and-data",
    title: "Data & Informatics Consulting | Beak Insights",
    description:
      "Data strategy, informatics, governance, interoperability, data engineering, analytics and decision-support consulting for complex organizations.",
    h1: "Make information trusted, connected and useful.",
    lede:
      "Better decisions rarely begin with another dashboard. They begin with trustworthy definitions, governed flows, dependable data engineering and systems that can exchange what matters.",
    problems: [
      "Fragmented systems that each hold a partial version of the same fact",
      "Low-trust data, unclear ownership, and definitions that change by team",
      "Analytics and AI programmes built before the underlying information flow is reliable",
    ],
    capabilities: [
      {
        name: "Data and information strategy",
        summary:
          "Which information has to be reliable, who decides its meaning, where it comes from and where it must arrive to change a decision.",
      },
      {
        name: "Governance and quality",
        summary:
          "Definitions, ownership, lineage and quality checks that operators can run—not governance that exists only in a policy document.",
      },
      {
        name: "Interoperability and integration",
        summary:
          "The flows, standards, APIs and operating routines that let systems exchange what the work actually requires.",
      },
      {
        name: "Data engineering and analytics",
        summary:
          "Reliable pipelines, models and analytical products designed around a decision, with a known source, grain, quality and limit.",
      },
      {
        name: "AI readiness and data foundations",
        summary:
          "Assess whether information, permissions, quality, lineage and operating controls are strong enough to support AI safely.",
      },
    ],
    method: ["Discover the flow", "Model the meaning", "Engineer the path", "Connect the systems", "Measure the decision"],
    diagram: "information",
    tone: "teal",
    diagramTitle: "From data flow to decision flow",
    diagramCaption:
      "Data and informatics work traces a fact from its source, through definition, engineering and exchange, to the decision that depends on it.",
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
    name: "Health & Laboratory Informatics",
    shortLabel: "Health & Laboratory Informatics",
    navSummary: "Digital health, laboratory systems, interoperability, workflows, analytics and implementation.",
    cardLine: "Deep domain expertise where health, laboratories, data and software meet.",
    topics: "Digital health · LIMS · Interoperability · Intelligence",
    href: "/what-we-do/healthcare-transformation",
    title: "Health & Laboratory Informatics Consulting | Beak Insights",
    description:
      "Health and laboratory informatics consulting across digital health, LIMS/LIS, instrument integration, interoperability, workflows, analytics and implementation.",
    h1: "Health and laboratory systems grounded in real workflows.",
    lede:
      "This is where Beak goes deepest: connecting software engineering, informatics, interoperability, data and operational workflow across health and laboratory environments.",
    problems: [
      "Technology choices made before the clinical, laboratory or operational workflow is understood",
      "Orders, results and other critical information that do not move reliably between people, instruments and systems",
      "Implementations that go live without adoption, governance, operational visibility or a way to see whether the service improved",
    ],
    capabilities: [
      {
        name: "Digital health and laboratory strategy",
        summary:
          "Target architectures and transformation roadmaps that connect workflows, information, systems, governance and implementation constraints.",
      },
      {
        name: "LIMS/LIS and laboratory digitalisation",
        summary:
          "Laboratory information systems, sample workflows, result lifecycle, quality controls and the operational design needed around them.",
      },
      {
        name: "Instrument and system interoperability",
        summary:
          "Interfaces across analysers, laboratory systems and health platforms using fit-for-purpose standards and integration patterns such as HL7, FHIR, ASTM and APIs.",
      },
      {
        name: "Health data and intelligence",
        summary:
          "Data engineering, indicators, dashboards, GIS and decision-support products built from traceable definitions and operationally meaningful flows.",
      },
      {
        name: "Implementation, adoption and enablement",
        summary:
          "Configuration, integration, training, transition and operating routines so a system change survives contact with daily work.",
      },
    ],
    method: ["Map the workflow", "Name the information", "Design the architecture", "Build and integrate", "Enable and measure"],
    diagram: "workflow",
    tone: "healthcare",
    diagramTitle: "Workflow before configuration",
    diagramCaption:
      "Health and laboratory work follows the path from the real operational workflow, through systems and information exchange, to the downstream action that depends on the result.",
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
