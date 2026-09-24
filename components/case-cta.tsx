"use client"

import Link from "next/link"
import { track } from "@/lib/analytics"

export function CaseCta({ slug }: { slug: string }) {
  return (
    <section className="mt-12 border border-border p-6">
      <h2 className="font-serif text-3xl">Solve a similar challenge</h2>
      <Link
        href="/contact"
        className="mt-4 inline-flex min-h-12 items-center bg-primary px-6 text-sm font-medium text-primary-foreground"
        onClick={() => track("case_cta_click", { case: slug, destination: "/contact" })}
      >
        Discuss a similar challenge
      </Link>
    </section>
  )
}
