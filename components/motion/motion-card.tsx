"use client"

import { m, useReducedMotion } from "motion/react"
import Link from "next/link"
import { ease, hoverDuration } from "./tokens"

const tones = {
  navy: {
    className: "border-navy bg-white",
    rest: "#ffffff",
    hover: "#f3f6f8",
    border: "#12355b",
    borderHover: "#0b132b",
  },
  teal: {
    className: "border-teal bg-mist",
    rest: "#e6f6f4",
    hover: "#d9f1ee",
    border: "#0f766e",
    borderHover: "#0b5c56",
  },
  healthcare: {
    className: "border-gold/40 bg-sand",
    rest: "#fff7e6",
    hover: "#fff1d0",
    border: "rgba(212, 167, 44, 0.4)",
    borderHover: "rgba(212, 167, 44, 0.72)",
  },
} as const

export function MotionCard({
  tone,
  eyebrow,
  title,
  body,
  href,
  action,
}: {
  tone: keyof typeof tones
  eyebrow: string
  title: string
  body: string
  href: string
  action: string
}) {
  const reduced = useReducedMotion()
  const palette = tones[tone]

  if (reduced !== false) {
    return (
      <article className={`flex h-full flex-col border p-6 ${palette.className}`}>
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate">
          <span className="mark" aria-hidden="true" />
          {eyebrow}
        </p>
        <h3 className="mt-3 font-serif text-2xl">{title}</h3>
        <p className="mt-3 text-sm text-slate">{body}</p>
        <Link href={href} className="mt-6 inline-flex min-h-11 items-center text-sm font-medium">
          {action}
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </Link>
      </article>
    )
  }

  return (
    <m.article
      className="flex h-full flex-col border p-6"
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={{
        rest: {
          y: 0,
          backgroundColor: palette.rest,
          borderColor: palette.border,
          boxShadow: "0 0 0 rgba(11, 19, 43, 0)",
        },
        hover: {
          y: -4,
          backgroundColor: palette.hover,
          borderColor: palette.borderHover,
          boxShadow: "0 10px 24px rgba(11, 19, 43, 0.08)",
        },
      }}
      transition={{ duration: hoverDuration, ease }}
    >
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate">
        <m.span
          aria-hidden="true"
          className="inline-block bg-gold"
          variants={{
            rest: { width: 8, height: 8 },
            hover: { width: 20, height: 2 },
          }}
        />
        {eyebrow}
      </p>
      <h3 className="mt-3 font-serif text-2xl">{title}</h3>
      <p className="mt-3 text-sm text-slate">{body}</p>
      <Link href={href} className="mt-6 inline-flex min-h-11 items-center text-sm font-medium">
        {action}
        <m.span
          aria-hidden="true"
          className="ml-2 inline-block"
          variants={{ rest: { x: 0 }, hover: { x: 4 } }}
        >
          →
        </m.span>
      </Link>
    </m.article>
  )
}
