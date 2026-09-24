import Link from "next/link"
import { HeroDiagram } from "@/components/diagrams"
import { cases } from "@/content/cases"
import { insights } from "@/content/insights"
import { services } from "@/content/services"
import { method } from "@/content/site"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Beak Insights | IT, Informatics & Healthcare Consulting",
  description:
    "Beak Insights helps organizations design, modernize, integrate and improve technology, informatics and healthcare systems from strategy through implementation.",
  path: "/",
})

export default function HomePage() {
  return (
    <div>
      <section className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Technology · Informatics · Healthcare
          </p>
          <h1 className="mt-4 max-w-xl font-serif text-4xl md:text-6xl">
            Turn complex systems into measurable outcomes.
          </h1>
          <p className="mt-6 max-w-xl text-lg">
            Strategy, design and delivery for organizations working through difficult technology, data and healthcare change.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center bg-primary px-6 text-sm font-medium text-primary-foreground">
              Talk to an advisor
            </Link>
            <Link href="/work" className="inline-flex min-h-12 items-center justify-center border border-border px-6 text-sm font-medium">
              See our work
            </Link>
          </div>
        </div>
        <HeroDiagram />
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="container grid gap-6 py-8 md:grid-cols-3">
          <p className="text-sm">Open-source laboratory information management, published as Felicity LIMS.</p>
          <p className="text-sm">Instrument-to-system connectivity, published as Felicity LabLink.</p>
          <p className="text-sm">SQL visualization, published as BeakDash. No client metrics are claimed beyond the published systems.</p>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <h2 className="font-serif text-3xl md:text-5xl">What we do</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="flex flex-col border border-border p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{service.shortLabel}</p>
              <h3 className="mt-3 font-serif text-2xl">{service.cardLine}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{service.topics}</p>
              <Link href={service.href} className="mt-6 inline-flex min-h-11 items-center text-sm font-medium">
                Explore {service.name}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="container py-16 md:py-20">
          <h2 className="font-serif text-3xl md:text-4xl">Selected work</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            These entries describe systems Beak Insights has published. They are not anonymized client results, and they do not include metrics that were never reported.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {cases.slice(0, 2).map((item) => (
              <article key={item.slug} className="border border-border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {item.sector}
                </p>
                <h3 className="mt-3 font-serif text-2xl">{item.title}</h3>
                <p className="mt-3">{item.deck}</p>
                <p className="mt-3 text-sm text-muted-foreground">{item.outcome}</p>
                <Link href={`/work/${item.slug}`} className="mt-4 inline-flex min-h-11 items-center text-sm font-medium">
                  Read the case study
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <h2 className="font-serif text-3xl md:text-4xl">From strategy through delivery</h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-5">
          {method.map((step) => (
            <li key={step.name}>
              <h3 className="font-serif text-xl">{step.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.summary}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <h2 className="font-serif text-3xl md:text-4xl">Insights from our practitioners</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {insights.map((item) => (
              <article key={item.slug} className="border border-border p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {item.type} · {item.topicLabel}
                </p>
                <h3 className="mt-3 font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                <Link href={`/insights/${item.slug}`} className="mt-4 inline-flex min-h-11 items-center text-sm font-medium">
                  Read insight
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container flex flex-col gap-6 py-16 md:flex-row md:items-center md:justify-between">
          <h2 className="font-serif text-3xl md:text-4xl">What are you trying to change?</h2>
          <Link href="/contact" className="inline-flex min-h-12 items-center justify-center bg-background px-6 text-sm font-medium text-foreground">
            Talk to an advisor
          </Link>
        </div>
      </section>
    </div>
  )
}
