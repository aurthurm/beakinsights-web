"use client"

import { m } from "motion/react"
import { useState } from "react"
import { drawDuration, ease, nodeDuration } from "@/components/motion/tokens"
import { gold, ink, mist, teal, InformationDiagram } from "./static"
import { useDiagramPlay } from "./use-diagram-play"

export function AnimatedInformation({ caption }: { caption: string }) {
  const { ref, play } = useDiagramPlay()
  return (
    <div ref={ref}>
      {play ? <Sequence caption={caption} /> : <InformationDiagram caption={caption} />}
    </div>
  )
}

function Sequence({ caption }: { caption: string }) {
  const [loop, setLoop] = useState(false)
  const step = nodeDuration + drawDuration * 2

  return (
    <figure className="border border-border bg-white p-4 sm:p-6">
      <svg role="img" aria-label="From data flow to decision flow" viewBox="0 0 640 280" className="h-auto w-full">
        <title>From data flow to decision flow</title>
        <FlowNode x={24} y={40} label="Source" delay={0} />
        <DrawPath d="M174 68 H245" delay={nodeDuration} />
        <Signal cx={[174, 245]} cy={[68, 68]} delay={nodeDuration + drawDuration} />
        <FlowNode x={245} y={40} label="Definition" delay={step} />
        <DrawPath d="M395 68 H454" delay={step + nodeDuration} />
        <Signal cx={[395, 454]} cy={[68, 68]} delay={step + nodeDuration + drawDuration} />
        <FlowNode x={454} y={40} label="Exchange" delay={step * 2} />
        <DrawPath d="M529 96 V148 H395" delay={step * 2 + nodeDuration} />
        <Signal cx={[529, 529, 395]} cy={[96, 148, 148]} delay={step * 2 + nodeDuration + drawDuration} />
        <FlowNode x={245} y={176} label="Decision" delay={step * 3} onDone={() => setLoop(true)} />
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

function Signal({ cx, cy, delay }: { cx: number[]; cy: number[]; delay: number }) {
  const opacity = cx.map((_, index) => (index === 0 || (cx.length > 2 && index === cx.length - 1) ? 0 : 1))
  return (
    <m.circle
      r="4"
      fill={gold}
      initial={{ cx: cx[0], cy: cy[0], opacity: 0 }}
      animate={{ cx, cy, opacity }}
      transition={{ delay, duration: drawDuration, ease }}
    />
  )
}

function LoopSignal() {
  return (
    <m.circle
      r="4"
      fill={gold}
      animate={{
        cx: [174, 245, 395, 454, 529, 529, 395],
        cy: [68, 68, 68, 68, 96, 148, 148],
        opacity: [0, 1, 0, 1, 1, 1, 0],
      }}
      transition={{ duration: 6.4, repeat: Infinity, ease: "linear" }}
    />
  )
}
