"use client"

import { useInView, useReducedMotion } from "motion/react"
import { useRef } from "react"

export function useDiagramPlay() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const inView = useInView(ref, { once: true, amount: 0.45 })
  return { ref, play: reduced === false && inView }
}
