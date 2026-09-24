"use client"

import { m, useReducedMotion } from "motion/react"
import Link from "next/link"
import type { ReactNode } from "react"
import { ease, hoverDuration } from "./tokens"

export function QuietLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: ReactNode
}) {
  const reduced = useReducedMotion()
  if (reduced !== false) {
    return (
      <Link href={href} className={className}>
        {children}
        <span className="ml-2" aria-hidden="true">
          →
        </span>
      </Link>
    )
  }

  return (
    <m.div className="inline-flex" initial="rest" animate="rest" whileHover="hover">
      <Link href={href} className={className}>
        {children}
        <m.span
          aria-hidden="true"
          className="ml-2 inline-block"
          variants={{ rest: { x: 0 }, hover: { x: 4 } }}
          transition={{ duration: hoverDuration, ease }}
        >
          →
        </m.span>
      </Link>
    </m.div>
  )
}
