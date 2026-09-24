"use client"

import { m } from "motion/react"
import { useState } from "react"
import { drawDuration, ease, nodeDuration } from "@/components/motion/tokens"
import { Frame, gold, ink, mist, teal } from "./static"
import { useDiagramPlay } from "./use-diagram-play"

const nodes = [
  { x: 16, label: "Knowledge" },
  { x: 170, label: "RAG / Context" },
  { x: 324, label: "Agent / Model" },
  { x: 478, label: "Action" },
] as const

export function AnimatedAI({ caption }: { caption: string }) {
  const { ref, play } = useDiagramPlay()
  return (
    <div ref={ref}>
      {play ? <Sequence caption={caption} /> : <StaticAI caption={caption} />}
    </div>
  )
}

function StaticAI({ caption }: { caption: string }) {
  return (
    <Frame title="From trusted knowledge to governed action" caption={caption}>
      {nodes.map((node) => (
        <g key={node.label}>
          <rect x={node.x} y="78" width="120" height="56" fill={mist} stroke={teal} />
          <text x={node.x + 60} y="112" textAnchor="middle" fill={ink} fontSize="13">
            {node.label}
          </text>
        </g>
      ))}
      <path d="M136 106 H170 M290 106 H324 M444 106 H478" stroke={teal} strokeWidth="2" fill="none" />
      <circle cx="136" cy="106" r="4" fill={gold} />
      <circle cx="290" cy="106" r="4" fill={gold} />
      <circle cx="444" cy="106" r="4" fill={gold} />
      <rect x="92" y="190" width="456" height="52" fill="#FFFFFF" stroke={gold} />
      <text x="320" y="221" textAnchor="middle" fill={ink} fontSize="13">
        Evaluation · Permissions · Human oversight
      </text>
      <path d="M384 134 V190 M538 134 V190" stroke={gold} strokeWidth="1.5" strokeDasharray="5 5" />
    </Frame>
  )
}

function Sequence({ caption }: { caption: string }) {
  const [loop, setLoop] = useState(false)
  const gap = nodeDuration + drawDuration * 1.3

  return (
    <figure className="border border-border bg-white p-4 sm:p-6">
      <svg role="img" aria-label="From trusted knowledge to governed action" viewBox="0 0 640 280" className="h-auto w-full">
        <title>From trusted knowledge to governed action</title>
        {nodes.map((node, index) => (
          <AIFlowNode key={node.label} x={node.x} label={node.label} delay={index * gap} />
        ))}
        <DrawPath d="M136 106 H170" delay={nodeDuration} />
        <DrawPath d="M290 106 H324" delay={gap + nodeDuration} />
        <DrawPath d="M444 106 H478" delay={gap * 2 + nodeDuration} />
        <Signal delay={nodeDuration + drawDuration} />
        <m.g
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: gap * 3 + nodeDuration, duration: nodeDuration, ease }}
          onAnimationComplete={() => setLoop(true)}
        >
          <rect x="92" y="190" width="456" height="52" fill="#FFFFFF" stroke={gold} />
          <text x="320" y="221" textAnchor="middle" fill={ink} fontSize="13">
            Evaluation · Permissions · Human oversight
          </text>
          <path d="M384 134 V190 M538 134 V190" stroke={gold} strokeWidth="1.5" strokeDasharray="5 5" />
        </m.g>
        {loop ? <LoopSignal /> : null}
      </svg>
      <figcaption className="mt-4 text-sm text-slate">{caption}</figcaption>
    </figure>
  )
}

function AIFlowNode({ x, label, delay }: { x: number; label: string; delay: number }) {
  return (
    <m.g
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: nodeDuration, ease }}
    >
      <rect x={x} y="78" width="120" height="56" fill={mist} stroke={teal} />
      <text x={x + 60} y="112" textAnchor="middle" fill={ink} fontSize="13">
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

function Signal({ delay }: { delay: number }) {
  return (
    <m.circle
      r="4"
      fill={gold}
      initial={{ cx: 136, cy: 106, opacity: 0 }}
      animate={{ cx: [136, 170, 290, 324, 444, 478], cy: 106, opacity: [0, 1, 1, 1, 1, 0] }}
      transition={{ delay, duration: drawDuration * 3.2, ease }}
    />
  )
}

function LoopSignal() {
  return (
    <m.circle
      r="4"
      fill={gold}
      animate={{
        cx: [136, 170, 290, 324, 444, 478],
        cy: [106, 106, 106, 106, 106, 106],
        opacity: [0, 1, 1, 1, 1, 0],
      }}
      transition={{ duration: 5.2, repeat: Infinity, ease: "linear" }}
    />
  )
}
