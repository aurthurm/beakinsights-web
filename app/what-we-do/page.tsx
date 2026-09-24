import Link from "next/link"
import { cases } from "@/content/cases"
import { engagements } from "@/content/site"
import { services } from "@/content/services"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Consulting Services | Beak Insights",
  description:
    "Explore Beak Insights services across IT consulting, informatics, data and healthcare transformation.",
  path: "/what-we-do",
})

export default function WhatWeDoPage() {
  return (
    <div className="container py-12 md:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">What we do</p>
      <h1 className="mt-4 max-w-3xl font-serif text-4xl md:text-6xl">
        Consulting that connects strategy, systems and delivery.
      </h1>
      <p className="measure mt-6 text-lg">
        Some problems are technical. Others are operational, informational or clinical. The difficult ones are usually all four. We work across those boundaries.
      </p>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.slug} className="border border-border p-6">
            <h2 className="font-serif text-3xl">{service.name}</h2>
            <p className="mt-4">{service.lede}</p>
            <Link href={service.href} className="mt-6 inline-flex min-h-11 items-center text-sm font-medium">
              Explore {service.name}
            </Link>
          </article>
        ))}
      </div>
      <section className="mt-16">
        <h2 className="font-serif text-3xl">How our disciplines connect</h2>
        <p className="measure mt-4">
          IT consulting sets a target state that can be delivered. Informatics makes the information in that state trustworthy and exchangeable. Healthcare transformation applies both to workflows where the cost of a disconnected system is operational and clinical.
        </p>
      </section>
      <section className="mt-16">
        <h2 className="font-serif text-3xl">Engagement models</h2>
        <p className="measure mt-4">
          Engagements are scoped to the problem. Beak Insights does not publish a rate card.
        </p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {engagements.map((item) => (
            <li key={item.name} className="border border-border p-5">
              <h3 className="font-serif text-2xl">{item.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.suitable}</p>
              <p className="mt-3">{item.summary}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-16">
        <h2 className="font-serif text-3xl">Related work</h2>
        <ul className="mt-4 space-y-3">
          {cases.map((item) => (
            <li key={item.slug}>
              <Link href={`/work/${item.slug}`} className="underline underline-offset-4">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center bg-primary px-6 text-sm font-medium text-primary-foreground">
          Discuss your challenge
        </Link>
      </section>
    </div>
  )
}
