"use client"

import { m, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"
import { ease, revealDuration, revealViewport, staggerDelay } from "./tokens"

type Tag = "div" | "ol" | "ul" | "li"

const motionTags = {
  div: m.div,
  ol: m.ol,
  ul: m.ul,
  li: m.li,
}

export function Stagger({
  as = "div",
  className,
  children,
}: {
  as?: Tag
  className?: string
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
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </MotionTag>
  )
}

export function StaggerItem({
  as = "div",
  className,
  children,
}: {
  as?: Tag
  className?: string
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
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: revealDuration, ease } },
      }}
    >
      {children}
    </MotionTag>
  )
}
