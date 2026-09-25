import Link from "next/link"
import { cases } from "@/content/cases"
import { engagements } from "@/content/site"
import { services } from "@/content/services"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Technology Consulting Services | Beak Insights",
  description:
    "Explore Beak Insights services across technology advisory and engineering, data and informatics, AI, and health and laboratory informatics.",
  path: "/what-we-do",
})

export default function WhatWeDoPage() {
  return (
    <div className="container py-12 md:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">What we do</p>
      <h1 className="mt-4 max-w-4xl font-serif text-4xl md:text-6xl">
        Advisory and engineering for systems that have to work.
      </h1>
      <p className="measure mt-6 text-lg">
        Beak combines strategy, architecture, engineering, data, AI and domain expertise in one delivery model. We can enter at diagnosis, design, implementation, assurance or continuous improvement—and connect those stages when the problem needs end-to-end ownership.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.slug}
            className={
              service.tone === "navy"
                ? "border border-navy bg-white p-6"
                : service.tone === "teal"
                  ? "border border-teal bg-mist p-6"
                  : "border border-gold/40 bg-sand p-6"
            }
          >
            <h2 className="font-serif text-3xl">{service.name}</h2>
            <p className="mt-4">{service.lede}</p>
            <Link href={service.href} className="mt-6 inline-flex min-h-11 items-center text-sm font-medium">
              Explore {service.name}
            </Link>
          </article>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="font-serif text-3xl">One model, four connected practices</h2>
        <p className="measure mt-4">
          Technology Advisory & Engineering defines and builds the target state. Data & Informatics makes information trustworthy, connected and usable. AI & Intelligent Systems turns trusted data, knowledge and workflows into governed intelligent applications. Health & Laboratory Informatics brings those capabilities together in a domain where workflow, interoperability and operational reliability matter deeply.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-3xl">Ways to engage</h2>
        <p className="measure mt-4">
          Some clients need a short diagnostic. Others need a team accountable for delivery. Engagements are shaped around the outcome rather than forcing every problem into the same consulting package.
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
        <Link href="/contact" className="btn-primary mt-8">
          Discuss your challenge
        </Link>
      </section>
    </div>
  )
}
