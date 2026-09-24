import type { ServiceSlug } from "./services"

export type InsightType = "Brief" | "Guide" | "Research"

export type Insight = {
  slug: string
  title: string
  description: string
  topic: ServiceSlug
  topicLabel: string
  type: InsightType
  date: string
  updated: string
  caseSlug?: string
  paragraphs: string[]
}

export const insights: Insight[] = [
  {
    slug: "modernization-roadmap-that-can-be-delivered",
    title: "An IT modernization roadmap is a delivery plan, not a slide sequence",
    description:
      "A modernization roadmap is useful only when it names the current estate, the target capability, the sequence, and who can still operate the systems while the change is underway.",
    topic: "it-consulting",
    topicLabel: "IT & Architecture",
    type: "Brief",
    date: "2026-09-24",
    updated: "2026-09-24",
    caseSlug: "beakdash",
    paragraphs: [
      "Most modernization roadmaps fail in a predictable place. They describe a destination—cloud, a new platform, a cleaner architecture—and then treat the path as a list of projects. The list looks decisive. It does not say which system has to keep running on Monday, which interface is load-bearing, or which decision is allowed to wait.",
      "A roadmap that can be delivered starts with the estate as it is. That means the systems, the integrations, the teams who change them, and the business capabilities those systems actually support. A target architecture that is not anchored to those facts becomes documentation. It can be approved and still be impossible to sequence.",
      "The second requirement is a target stated as capability, not as a product name. “Replace the platform” is not a target. “A laboratory can trace a sample from receipt to result without a side spreadsheet” is a target. The technology choices then have something to be judged against.",
      "Sequence is the third requirement, and it is where strategy usually separates from delivery. Some changes unlock others. Some changes are attractive and optional. A usable roadmap marks dependencies, the period in which two states must coexist, and the point at which the old path is allowed to stop. Without that, every team optimizes its own release and the integration work arrives last.",
      "Ownership belongs on the same page. A roadmap that names vendors and not decision rights will be re-decided at every steering committee. Someone has to be able to say what is in scope, what is deferred, and what evidence would reopen the decision.",
      "Measurement should be equally plain. If the roadmap claims a capability, the team should know what observable condition would show that the capability exists. Where a number has not been measured, the honest statement is the condition itself—not a projected percentage.",
      "Beak Insights treats this as IT consulting rather than as a documentation exercise: understand the estate, choose a target state teams can implement, sequence the change, and stay close enough to delivery to know whether the decision still holds.",
    ],
  },
  {
    slug: "information-flows-before-dashboards",
    title: "Design the information flow before you design the dashboard",
    description:
      "A dashboard cannot repair a fact that has no owner, no stable definition, and no reliable path from the system that created it.",
    topic: "informatics-and-data",
    topicLabel: "Informatics & Data",
    type: "Brief",
    date: "2026-09-24",
    updated: "2026-09-24",
    caseSlug: "beakdash",
    paragraphs: [
      "When an analytics request arrives, the visible object is usually a dashboard. The difficult object is the path the fact took before it reached the chart. If that path is unclear, the dashboard becomes a faster way to disagree.",
      "Start with the decision. Who needs to act, what would they do differently, and which fact would have to be true for that action to be responsible? A chart that does not answer a named question is decoration, even when the query behind it is technically correct.",
      "Then find the source. The useful question is not “which warehouse table is convenient?” It is “which system records this fact as part of the work?” A downstream extract can be a reasonable place to read the fact. It is a poor place to invent the fact’s meaning.",
      "Definitions are an operating problem. Two teams can query the same column and mean different events: ordered, collected, resulted, released, billed. Until those words are stable, a shared dashboard increases confidence without increasing agreement. Governance, in this sense, is the record of who may change a definition and how everyone else will know.",
      "Interoperability sits in the same sequence. If the decision depends on a fact moving between systems, the interface is part of the information design. A dashboard that hides a broken exchange will look complete and still be late.",
      "Only then is a visualization the right tool. BeakDash, for example, is published as a way to present SQL data interactively. That is useful when the query is the question. It does not replace ownership of the underlying data, and this site does not claim that it does.",
      "The same discipline applies when someone asks for artificial intelligence on top of the data. The prior questions remain: which workflow changes, what information is used, where a person stays accountable, what will be measured, and how misuse is governed. A model is not a substitute for a flow that nobody trusts.",
    ],
  },
  {
    slug: "rag-to-agentic-systems",
    title: "From RAG to agentic systems: govern the action, not only the answer",
    description:
      "Useful AI agents need trusted knowledge, bounded tools, evaluation, identity and a clear point where a person remains accountable.",
    topic: "ai-and-intelligent-systems",
    topicLabel: "AI & Intelligent Systems",
    type: "Brief",
    date: "2026-09-24",
    updated: "2026-09-24",
    paragraphs: [
      "Generative AI changes character when it moves from answering a question to taking an action. A retrieval-augmented assistant can return a grounded answer. An agentic system can decide which information to retrieve, choose a tool, call an application, update a record, trigger another agent, or ask a person to approve the next step. That changes the design problem from model selection to system accountability.",
      "Start with the outcome and the workflow. The useful question is not how many agents to deploy. It is which decision or task should change, what the system is allowed to do, what remains with a person, and which observable result would show that the change is worthwhile. Automating a poorly understood workflow usually makes the uncertainty faster.",
      "RAG is part of the operating foundation. The system needs to know which sources are authoritative, who may retrieve which information, how context is assembled, and how an answer can be traced back to evidence. Retrieval quality, access control, citations, and evaluation matter as much as the model generating the final text.",
      "Tool access is where agentic risk becomes operational. An agent that can search a knowledge base is different from one that can send a message, approve a transaction, alter a patient-facing record, or invoke a production API. Identity, least privilege, action-level authorization, safe retries, and explicit boundaries should be designed before autonomy is increased.",
      "Human oversight should follow consequence rather than fashion. Some low-risk actions can be automated. Others should be proposed by the system and approved by a person. High-consequence decisions may require the AI to remain advisory. The architecture should make those boundaries visible rather than relying on a prompt to remember them.",
      "Evaluation also changes once a system can act. Teams need to measure more than whether an answer sounds good. Useful measures can include retrieval quality, groundedness, task completion, tool selection, refusal behavior, security policy adherence, latency, cost, escalation rate, and whether the downstream outcome actually improved.",
      "Production AI therefore needs an operating model: versioning, observability, audit trails, incident response, cost controls, feedback, model and prompt changes, and ownership when the system behaves unexpectedly. Agentic systems are not a shortcut around architecture and governance; they make both more important.",
      "Beak Insights approaches AI in that order: frame the outcome, assess data and AI readiness, design the architecture and guardrails, build and evaluate, then integrate the system into real work with enough monitoring and human accountability to operate it responsibly.",
    ],
  },
  {
    slug: "workflow-before-configuration",
    title: "In healthcare, configure the system after the workflow is explicit",
    description:
      "Clinical and laboratory systems fail quietly when configuration starts before anyone has described the handoffs, exceptions, and information the work depends on.",
    topic: "healthcare-transformation",
    topicLabel: "Healthcare",
    type: "Brief",
    date: "2026-09-24",
    updated: "2026-09-24",
    caseSlug: "felicity-lims",
    paragraphs: [
      "Healthcare technology programs often begin with a system selection. The more useful beginning is the work: who receives the patient or the sample, what they must know, what they record, who they hand it to, and what happens when the usual path does not apply.",
      "That description is not a workshop mural. It is a constraint on configuration. If the laboratory must trace a sample from receipt to a result, the system has to represent that lifecycle. Felicity LIMS was published around that path—sample tracking, workflow, and the result—not around a generic claim of digital transformation.",
      "Information is part of the workflow, not a later analytics topic. The instrument result that never reaches the laboratory information system is an operational failure. Felicity LabLink was published as middleware for that specific gap, using the connections instruments already expose. The point of naming it here is the sequence: identify the handoff, then build the exchange.",
      "Interoperability follows the same rule. Standards matter because a receiving system has to understand what it was sent. They do not remove the need to decide which events are in scope, who owns a correction, and what the downstream team is allowed to assume.",
      "Adoption is the test configuration cannot grade itself. A system can be technically live and still be bypassed with a spreadsheet because the exception path was never designed. Implementation work includes the people who run the exception, the training that matches their actual steps, and a way to see whether the new path is the one in use.",
      "Claims about healthcare improvement should stay inside the evidence. This site can describe systems Beak Insights has published for laboratory workflows and instrument connectivity. It cannot assign those systems a clinical outcome they have not reported. Where a metric is not available, the accurate statement is the capability, not a rounded success rate.",
      "The practical order is stable across strategy, informatics, and implementation: map the workflow, name the information, design the change, implement it with the people who do the work, and measure whether the path holds.",
    ],
  },
]

export function getInsight(slug: string) {
  return insights.find((item) => item.slug === slug)
}

export function insightsForService(slug: ServiceSlug) {
  return insights.filter((item) => item.topic === slug)
}
