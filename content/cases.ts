import type { ServiceSlug } from "./services"

export type CaseStudy = {
  slug: string
  title: string
  deck: string
  client: string
  sector: string
  services: ServiceSlug[]
  challenge: string
  baseline: string
  scope: string
  approach: { name: string; summary: string }[]
  deliverables: string[]
  outcome: string
  quote: null
  technology: string[]
  duration: null
  diagramNote: string
  titleMeta: string
  description: string
  externalUrl?: string
}

export const cases: CaseStudy[] = [
  {
    slug: "felicity-lims",
    title: "Laboratory information management for clinical testing workflows",
    deck: "An open-source laboratory information management system for tracking samples, tests, and results.",
    client:
      "Published as Felicity LIMS, an open-source product. This page does not describe a named client engagement.",
    sector: "Healthcare",
    services: ["healthcare-transformation", "informatics-and-data"],
    challenge:
      "Clinical and medical laboratories need a consistent way to follow a sample from receipt through testing to a result. Without that path, work is split across informal tracking and systems that do not share one workflow.",
    baseline:
      "No before-state metric has been published for Felicity LIMS. This page does not estimate one.",
    scope:
      "Beak Insights published Felicity LIMS as an open-source laboratory information management system. The published scope is sample lifecycle tracking, workflow automation, and laboratory analytics. It is not a claim about a specific laboratory’s operating results.",
    approach: [
      {
        name: "Discovery",
        summary:
          "Describe the sample path the system has to support: receipt, testing, and a result that can be traced back to the sample.",
      },
      {
        name: "Design",
        summary:
          "Structure the record around the sample lifecycle and the rules that move work forward, including customizable workflows.",
      },
      {
        name: "Delivery",
        summary:
          "Publish the system as open-source software laboratories can deploy, rather than as a one-client implementation story.",
      },
    ],
    deliverables: [
      "Open-source laboratory information management system",
      "Sample lifecycle tracking from receipt to final results",
      "Customizable workflows",
      "Laboratory analytics on the information the system holds",
    ],
    outcome:
      "The published result is the system itself: Felicity LIMS tracks the sample lifecycle from receipt to final results and supports customizable laboratory workflows. No client outcome metric, time saving, or quality percentage has been published, so none is stated here.",
    quote: null,
    technology: ["Open-source laboratory information management system"],
    duration: null,
    diagramNote:
      "The relevant flow is the sample path: receive the sample, perform the configured work, and record a traceable result.",
    titleMeta: "Laboratory information management | Beak Insights",
    description:
      "How Beak Insights published Felicity LIMS, an open-source system for tracking laboratory samples, tests, and results.",
  },
  {
    slug: "felicity-lablink",
    title: "Connecting laboratory instruments to information systems",
    deck: "Open-source middleware that connects laboratory instruments to laboratory information systems.",
    client:
      "Published as Felicity LabLink, an open-source product. This page does not describe a named client engagement.",
    sector: "Healthcare",
    services: ["healthcare-transformation", "informatics-and-data", "it-consulting"],
    challenge:
      "A laboratory information system cannot use an instrument result until something reliable sits between the instrument and the system. That gap is an integration problem, not a reporting problem.",
    baseline:
      "No before-state metric has been published for Felicity LabLink. This page does not estimate one.",
    scope:
      "Beak Insights published Felicity LabLink as open-source middleware for connectivity between laboratory instruments and information systems. The published protocols are RS-232 and MLLP. Results at a named laboratory are not part of the published record.",
    approach: [
      {
        name: "Discovery",
        summary:
          "Identify the instrument connection and the information system that has to receive the result.",
      },
      {
        name: "Design",
        summary:
          "Use the connection patterns the instruments already speak, including RS-232 and MLLP, instead of inventing a parallel workflow.",
      },
      {
        name: "Delivery",
        summary:
          "Publish the middleware as open-source software, with the source available for review.",
      },
    ],
    deliverables: [
      "Open-source laboratory integration middleware",
      "Instrument connectivity over RS-232 and MLLP",
      "A path for instrument results to reach a laboratory information system",
    ],
    outcome:
      "The published result is connectivity: Felicity LabLink is middleware between laboratory instruments and information systems using RS-232 and MLLP. No deployment count or turnaround metric has been published.",
    quote: null,
    technology: ["RS-232", "MLLP"],
    duration: null,
    diagramNote:
      "The relevant flow is instrument, middleware, then laboratory information system. The middleware is the integration point, not a second system of record.",
    titleMeta: "Laboratory instrument connectivity | Beak Insights",
    description:
      "How Beak Insights published Felicity LabLink, open-source middleware connecting laboratory instruments to information systems.",
    externalUrl: "https://github.com/beak-insights/felicity-lablink",
  },
  {
    slug: "beakdash",
    title: "SQL data presented as interactive visualizations",
    deck: "A business intelligence dashboard that visualizes SQL data with Apache ECharts.",
    client:
      "Published as BeakDash, a Beak Insights product. This page does not describe a named client engagement.",
    sector: "Analytics",
    services: ["informatics-and-data", "it-consulting"],
    challenge:
      "Teams often hold the data they need in SQL and still cannot inspect it without a separate reporting effort. The missing piece is a usable view of that data, not another copy of it.",
    baseline:
      "No before-state metric has been published for BeakDash. This page does not estimate one.",
    scope:
      "Beak Insights published BeakDash as a business intelligence dashboard for visualizing SQL data with Apache ECharts. It is a product description, not a measured analytics program at a named organization.",
    approach: [
      {
        name: "Discovery",
        summary: "Start from the SQL data the organization already has, rather than a new data store.",
      },
      {
        name: "Design",
        summary:
          "Map that data to interactive views so a person can inspect the question the query was written to answer.",
      },
      {
        name: "Delivery",
        summary:
          "Use Apache ECharts for the visualization layer on top of the SQL source.",
      },
    ],
    deliverables: [
      "Dashboard for SQL-backed data",
      "Interactive visualizations using Apache ECharts",
    ],
    outcome:
      "The published result is the product capability: BeakDash turns SQL data into interactive visualizations. No decision-quality metric or client result has been published.",
    quote: null,
    technology: ["SQL", "Apache ECharts"],
    duration: null,
    diagramNote:
      "The relevant flow is SQL source, then a view that answers one question. A chart without a stated question is not the point of the system.",
    titleMeta: "SQL visualization dashboard | Beak Insights",
    description:
      "How Beak Insights published BeakDash, a dashboard for visualizing SQL data with Apache ECharts.",
  },
]

export function getCase(slug: string) {
  return cases.find((item) => item.slug === slug)
}

export function casesForService(slug: ServiceSlug) {
  return cases.filter((item) => item.services.includes(slug))
}
