import type { ReactNode } from "react"

export const ink = "#0B132B"
export const navy = "#12355B"
export const teal = "#0F766E"
export const gold = "#D4A72C"
export const mist = "#E6F6F4"

export function Frame({
  title,
  caption,
  dark,
  children,
}: {
  title: string
  caption: string
  dark?: boolean
  children: ReactNode
}) {
  return (
    <figure className={dark ? "border border-white/20 bg-navy p-4 sm:p-6" : "border border-border bg-white p-4 sm:p-6"}>
      <svg role="img" aria-label={title} viewBox="0 0 640 280" className="h-auto w-full">
        <title>{title}</title>
        {children}
      </svg>
      <figcaption className={dark ? "mt-4 text-sm text-on-ink" : "mt-4 text-sm text-slate"}>{caption}</figcaption>
    </figure>
  )
}

export function Node({ x, y, label, dark }: { x: number; y: number; label: string; dark?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width="150" height="56" fill={dark ? navy : mist} stroke={dark ? gold : teal} />
      <text x={x + 75} y={y + 34} textAnchor="middle" fill={dark ? "#FFFFFF" : ink} fontSize="14">
        {label}
      </text>
    </g>
  )
}

export function Dots({ points }: { points: [number, number][] }) {
  return (
    <g>
      {points.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill={gold} />
      ))}
    </g>
  )
}

export function ArchitectureDiagram({ caption, tone = "light" }: { caption: string; tone?: "light" | "dark" }) {
  const dark = tone === "dark"
  return (
    <Frame title="Current state to target state" caption={caption} dark={dark}>
      <Node x={36} y={112} label="Current estate" dark={dark} />
      <Node x={245} y={112} label="Decisions" dark={dark} />
      <Node x={454} y={112} label="Target state" dark={dark} />
      <path d="M186 140 H245 M395 140 H454" stroke={teal} strokeWidth="2" />
      <Dots points={[[186, 140], [245, 140], [395, 140], [454, 140]]} />
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
      <path d="M174 68 H245 M395 68 H454 M529 96 V148 H395" stroke={teal} strokeWidth="2" fill="none" />
      <Dots points={[[174, 68], [395, 68], [529, 96], [395, 176]]} />
    </Frame>
  )
}

export function WorkflowDiagram({ caption }: { caption: string }) {
  return (
    <Frame title="Workflow before configuration" caption={caption}>
      <Node x={24} y={112} label="Prepare" />
      <Node x={245} y={112} label="Encounter" />
      <Node x={454} y={112} label="Downstream" />
      <path d="M174 140 H245 M395 140 H454" stroke={teal} strokeWidth="2" />
      <Dots points={[[174, 140], [245, 140], [395, 140], [454, 140]]} />
    </Frame>
  )
}
