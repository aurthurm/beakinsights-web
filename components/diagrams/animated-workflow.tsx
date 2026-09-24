"use client"

import { m } from "motion/react"
import { useState } from "react"
import { drawDuration, ease, nodeDuration } from "@/components/motion/tokens"
import { gold, ink, mist, teal, WorkflowDiagram } from "./static"
import { useDiagramPlay } from "./use-diagram-play"

export function AnimatedWorkflow({ caption }: { caption: string }) {
  const { ref, play } = useDiagramPlay()
  return (
    <div ref={ref}>
      {play ? <Sequence caption={caption} /> : <WorkflowDiagram caption={caption} />}
    </div>
  )
}

function Sequence({ caption }: { caption: string }) {
  const [loop, setLoop] = useState(false)

  return (
    <figure className="border border-border bg-white p-4 sm:p-6">
      <svg role="img" aria-label="Workflow before configuration" viewBox="0 0 640 280" className="h-auto w-full">
        <title>Workflow before configuration</title>
        <FlowNode x={24} y={112} label="Prepare" delay={0} />
        <DrawPath d="M174 140 H245" delay={nodeDuration} />
        <Signal from={174} to={245} delay={nodeDuration + drawDuration} />
        <FlowNode x={245} y={112} label="Encounter" delay={nodeDuration + drawDuration * 2} />
        <DrawPath d="M395 140 H454" delay={nodeDuration * 2 + drawDuration * 2} />
        <Signal from={395} to={454} delay={nodeDuration * 2 + drawDuration * 3} />
        <FlowNode
          x={454}
          y={112}
          label="Downstream"
          delay={nodeDuration * 2 + drawDuration * 4}
          onDone={() => setLoop(true)}
        />
        {loop ? <LoopSignal /> : null}
      </svg>
      <figcaption className="mt-4 text-sm text-slate">{caption}</figcaption>
    </figure>
  )
}

function FlowNode({
  x,
  y,
  label,
  delay,
  onDone,
}: {
  x: number
  y: number
  label: string
  delay: number
  onDone?: () => void
}) {
  return (
    <m.g
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: nodeDuration, ease }}
      onAnimationComplete={onDone}
    >
      <rect x={x} y={y} width="150" height="56" fill={mist} stroke={teal} />
      <text x={x + 75} y={y + 34} textAnchor="middle" fill={ink} fontSize="14">
        {label}
      </text>
    </m.g>
  )
}

function DrawPath({ d, delay }: { d: string; delay: number }) {
  return (
    <m.path
      d={d}
      stroke={teal}
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay, duration: drawDuration, ease }}
    />
  )
}

function Signal({ from, to, delay }: { from: number; to: number; delay: number }) {
  return (
    <m.circle
      cy={140}
      r="4"
      fill={gold}
      initial={{ cx: from, opacity: 0 }}
      animate={{ cx: to, opacity: [0, 1, 1, 0] }}
      transition={{ delay, duration: drawDuration, ease, times: [0, 0.12, 0.82, 1] }}
    />
  )
}

function LoopSignal() {
  return (
    <m.circle
      cy={140}
      r="4"
      fill={gold}
      initial={{ cx: 174, opacity: 0 }}
      animate={{
        cx: [174, 245, 245, 395, 395, 454],
        opacity: [0, 1, 0, 0, 1, 0],
      }}
      transition={{ duration: 4.8, repeat: Infinity, ease: "linear" }}
    />
  )
}
