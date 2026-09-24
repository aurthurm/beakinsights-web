"use client"

import { m, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"
import { ease, revealDuration, revealViewport } from "./tokens"

type Tag = "div" | "h2" | "p"

const motionTags = {
  div: m.div,
  h2: m.h2,
  p: m.p,
}

export function Reveal({
  as = "div",
  className,
  delay = 0,
  children,
}: {
  as?: Tag
  className?: string
  delay?: number
  children: ReactNode
}) {
  const reduced = useReducedMotion()
  if (reduced !== false) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  const MotionTag = motionTags[as]
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{ duration: revealDuration, delay, ease }}
    >
      {children}
    </MotionTag>
  )
}
