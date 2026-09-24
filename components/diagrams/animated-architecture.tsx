"use client"

import { m } from "motion/react"
import { useState } from "react"
import { drawDuration, ease, nodeDuration } from "@/components/motion/tokens"
import { ArchitectureDiagram, gold, ink, mist, navy, teal } from "./static"
import { useDiagramPlay } from "./use-diagram-play"

const pathOne = "M186 140 H245"
const pathTwo = "M395 140 H454"

export function AnimatedArchitecture({
  caption,
  tone = "light",
}: {
  caption: string
  tone?: "light" | "dark"
}) {
  const { ref, play } = useDiagramPlay()
  const dark = tone === "dark"

  return (
    <div ref={ref}>
      {play ? (
        <Sequence caption={caption} dark={dark} />
      ) : (
        <ArchitectureDiagram caption={caption} tone={tone} />
      )}
    </div>
  )
}

function Sequence({ caption, dark }: { caption: string; dark: boolean }) {
  const [loop, setLoop] = useState(false)
  const figureClass = dark
    ? "border border-white/20 bg-navy p-4 sm:p-6"
    : "border border-border bg-white p-4 sm:p-6"

  return (
    <figure className={figureClass}>
      <svg role="img" aria-label="Current state to target state" viewBox="0 0 640 280" className="h-auto w-full">
        <title>Current state to target state</title>
        <FlowNode x={36} y={112} label="Current estate" dark={dark} delay={0} />
        <DrawPath d={pathOne} delay={nodeDuration} />
        <Signal from={186} to={245} y={140} delay={nodeDuration + drawDuration} />
        <FlowNode x={245} y={112} label="Decisions" dark={dark} delay={nodeDuration + drawDuration * 2} />
        <DrawPath d={pathTwo} delay={nodeDuration * 2 + drawDuration * 2} />
        <Signal from={395} to={454} y={140} delay={nodeDuration * 2 + drawDuration * 3} />
        <FlowNode
          x={454}
          y={112}
          label="Target state"
          dark={dark}
          delay={nodeDuration * 2 + drawDuration * 4}
          pulse
          onDone={() => setLoop(true)}
        />
        {loop ? <LoopSignal /> : null}
      </svg>
      <figcaption className={dark ? "mt-4 text-sm text-on-ink" : "mt-4 text-sm text-slate"}>{caption}</figcaption>
    </figure>
  )
}

function FlowNode({
  x,
  y,
  label,
  dark,
  delay,
  pulse = false,
  onDone,
}: {
  x: number
  y: number
  label: string
  dark: boolean
  delay: number
  pulse?: boolean
  onDone?: () => void
}) {
  return (
    <m.g
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: nodeDuration, ease }}
      onAnimationComplete={onDone}
    >
      <rect x={x} y={y} width="150" height="56" fill={dark ? navy : mist} stroke={dark ? gold : teal} />
      {pulse ? (
        <m.rect
          x={x}
          y={y}
          width="150"
          height="56"
          fill="none"
          stroke={teal}
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.25, 0.85, 0.25] }}
          transition={{ delay: delay + nodeDuration, duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : null}
      <text x={x + 75} y={y + 34} textAnchor="middle" fill={dark ? "#FFFFFF" : ink} fontSize="14">
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

function Signal({ from, to, y, delay }: { from: number; to: number; y: number; delay: number }) {
  return (
    <m.circle
      cy={y}
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
      initial={{ cx: 186, opacity: 0 }}
      animate={{
        cx: [186, 245, 245, 395, 395, 454],
        opacity: [0, 1, 0, 0, 1, 0],
      }}
      transition={{ duration: 4.8, repeat: Infinity, ease: "linear" }}
    />
  )
}
