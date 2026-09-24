import type { ReactNode } from "react"

function Frame({
  title,
  caption,
  children,
}: {
  title: string
  caption: string
  children: ReactNode
}) {
  return (
    <figure className="border border-border bg-card p-4 sm:p-6">
      <svg
        role="img"
        aria-label={title}
        viewBox="0 0 640 280"
        className="h-auto w-full text-primary"
      >
        <title>{title}</title>
        {children}
      </svg>
      <figcaption className="mt-4 text-sm text-muted-foreground">{caption}</figcaption>
    </figure>
  )
}

function Node({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width="150" height="56" fill="hsl(174 32% 92%)" stroke="currentColor" />
      <text x={x + 75} y={y + 34} textAnchor="middle" fill="currentColor" fontSize="14">
        {label}
      </text>
    </g>
  )
}

export function ArchitectureDiagram({ caption }: { caption: string }) {
  return (
    <Frame title="Current state to target state" caption={caption}>
      <Node x={36} y={112} label="Current estate" />
      <Node x={245} y={112} label="Decisions" />
      <Node x={454} y={112} label="Target state" />
      <path d="M186 140 H245 M395 140 H454" stroke="hsl(28 48% 34%)" strokeWidth="2" />
    </Frame>
  )
}

export function InformationDiagram({ caption }: { caption: string }) {
  return (
    <Frame title="From data flow to decision flow" caption={caption}>
      <Node x={24} y={40} label="Source" />
      <Node x={245} y={40} label="Definition" />
      <Node x={454} y={40} label="Exchange" />
      <Node x={245} y={176} label="Decision" />
      <path d="M174 68 H245 M395 68 H454 M529 96 V148 H395" stroke="hsl(28 48% 34%)" strokeWidth="2" fill="none" />
    </Frame>
  )
}

export function WorkflowDiagram({ caption }: { caption: string }) {
  return (
    <Frame title="Workflow before configuration" caption={caption}>
      <Node x={24} y={112} label="Prepare" />
      <Node x={245} y={112} label="Encounter" />
      <Node x={454} y={112} label="Downstream" />
      <path d="M174 140 H245 M395 140 H454" stroke="hsl(28 48% 34%)" strokeWidth="2" />
    </Frame>
  )
}

export function HeroDiagram() {
  return (
    <ArchitectureDiagram caption="Technology, informatics, and healthcare work meet in one target state: systems that can be operated and measured." />
  )
}

export function ServiceDiagram({
  kind,
  caption,
}: {
  kind: "architecture" | "information" | "workflow"
  caption: string
}) {
  if (kind === "information") return <InformationDiagram caption={caption} />
  if (kind === "workflow") return <WorkflowDiagram caption={caption} />
  return <ArchitectureDiagram caption={caption} />
}
