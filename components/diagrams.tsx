import { AnimatedAI } from "@/components/diagrams/animated-ai"
import { AnimatedArchitecture } from "@/components/diagrams/animated-architecture"
import { AnimatedInformation } from "@/components/diagrams/animated-information"
import { AnimatedWorkflow } from "@/components/diagrams/animated-workflow"

const heroCaption =
  "Technology, AI, informatics, and healthcare work meet in one target state: systems that can be operated, governed, and measured."

export function HeroDiagram({ tone = "light" }: { tone?: "light" | "dark" }) {
  return <AnimatedArchitecture tone={tone} caption={heroCaption} />
}

export function ServiceDiagram({
  kind,
  caption,
}: {
  kind: "architecture" | "information" | "ai" | "workflow"
  caption: string
}) {
  if (kind === "information") return <AnimatedInformation caption={caption} />
  if (kind === "ai") return <AnimatedAI caption={caption} />
  if (kind === "workflow") return <AnimatedWorkflow caption={caption} />
  return <AnimatedArchitecture caption={caption} />
}
