import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ServiceDiagram } from "@/components/diagrams"
import { TrackView } from "@/components/track-view"
import { casesForService } from "@/content/cases"
import { insightsForService } from "@/content/insights"
import { getService, services } from "@/content/services"
import { getPerson, team } from "@/content/team"
import { pageMeta } from "@/lib/seo"

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug)
  if (!service) return {}
  return pageMeta({
    title: service.title,
    description: service.description,
    path: service.href,
  })
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug)
  if (!service) notFound()
  const relatedCases = casesForService(service.slug)
  const relatedInsights = insightsForService(service.slug)
  const person = getPerson(team[0].slug)

  return (
    <article className="container py-12 md:py-16">
      <TrackView event="view_service" params={{ service: service.slug, source: "service-page" }} />
      <Breadcrumbs items={[{ name: "What we do", href: "/what-we-do" }, { name: service.name, href: service.href }]} />
      <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
        <div>
          <h1 className="font-serif text-4xl md:text-6xl">{service.h1}</h1>
          <p className="mt-6 text-lg">{service.lede}</p>
          <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center bg-primary px-6 text-sm font-medium text-primary-foreground">
            Talk to an advisor
          </Link>
        </div>
        <ServiceDiagram kind={service.diagram} caption={service.diagramCaption} />
      </div>

      <section className="mt-16">
        <h2 className="font-serif text-3xl">The problems we solve</h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-3">
          {service.problems.map((problem) => (
            <li key={problem} className="border border-border p-4">{problem}</li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-3xl">Where we help</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {service.capabilities.map((capability) => (
            <section key={capability.name}>
              <h3 className="font-serif text-2xl">{capability.name}</h3>
              <p className="mt-2">{capability.summary}</p>
            </section>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-3xl">How an engagement works</h2>
        <ol className="mt-4 flex flex-col gap-3 md:flex-row md:flex-wrap">
          {service.method.map((step) => (
            <li key={step} className="border border-border px-4 py-3 text-sm">{step}</li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-3xl">Relevant work</h2>
        <ul className="mt-4 space-y-4">
          {relatedCases.map((item) => (
            <li key={item.slug} className="border border-border p-5">
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="mt-2">{item.outcome}</p>
              <Link href={`/work/${item.slug}`} className="mt-3 inline-flex min-h-11 items-center text-sm font-medium">
                Read the case study
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {person ? (
        <section className="mt-16">
          <h2 className="font-serif text-3xl">Expertise</h2>
          <p className="mt-4 max-w-2xl">{person.summary}</p>
          <Link href="/about/team" className="mt-3 inline-flex min-h-11 items-center text-sm font-medium">
            Meet the team
          </Link>
        </section>
      ) : null}

      <section className="mt-16">
        <h2 className="font-serif text-3xl">Related insights</h2>
        <ul className="mt-4 space-y-3">
          {relatedInsights.map((item) => (
            <li key={item.slug}>
              <Link href={`/insights/${item.slug}`} className="underline underline-offset-4">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 flex flex-col gap-4 border border-border p-6 md:flex-row md:items-center md:justify-between">
        <h2 className="font-serif text-3xl">Have a similar challenge?</h2>
        <Link href="/contact" className="inline-flex min-h-12 items-center bg-primary px-6 text-sm font-medium text-primary-foreground">
          Start a conversation
        </Link>
      </section>
    </article>
  )
}
