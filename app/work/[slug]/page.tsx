import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CaseCta } from "@/components/case-cta"
import { TrackView } from "@/components/track-view"
import { cases, getCase } from "@/content/cases"
import { getService } from "@/content/services"
import { pageMeta } from "@/lib/seo"

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getCase(params.slug)
  if (!item) return {}
  return pageMeta({
    title: item.titleMeta,
    description: item.description,
    path: `/work/${item.slug}`,
  })
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const item = getCase(params.slug)
  if (!item) notFound()

  return (
    <article className="container py-12 md:py-16">
      <TrackView
        event="view_case_study"
        params={{ case: item.slug, sector: item.sector, service: item.services.join(",") }}
      />
      <Breadcrumbs
        items={[
          { name: "Work", href: "/work" },
          { name: item.title, href: `/work/${item.slug}` },
        ]}
      />
      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {item.sector}
      </p>
      <h1 className="mt-3 max-w-4xl font-serif text-4xl md:text-5xl">{item.title}</h1>
      <p className="measure mt-4 text-lg">{item.deck}</p>

      <dl className="mt-10 grid gap-6 md:grid-cols-2">
        <div>
          <dt className="text-sm font-semibold">Client</dt>
          <dd className="mt-1">{item.client}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold">Scope</dt>
          <dd className="mt-1">{item.scope}</dd>
        </div>
      </dl>

      <section className="mt-12">
        <h2 className="font-serif text-3xl">The challenge</h2>
        <p className="measure mt-4">{item.challenge}</p>
        <p className="measure mt-4 text-sm text-muted-foreground">Baseline: {item.baseline}</p>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl">What changed</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {item.approach.map((step) => (
            <section key={step.name}>
              <h3 className="font-serif text-2xl">{step.name}</h3>
              <p className="mt-2">{step.summary}</p>
            </section>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl">Architecture and workflow</h2>
        <p className="measure mt-4">{item.diagramNote}</p>
        {item.technology.length > 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">Technology named in the published description: {item.technology.join(", ")}.</p>
        ) : null}
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl">Outcomes</h2>
        <p className="measure mt-4">{item.outcome}</p>
        <h3 className="mt-6 font-serif text-2xl">Deliverables</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {item.deliverables.map((deliverable) => (
            <li key={deliverable}>{deliverable}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl">What made the difference</h2>
        <p className="measure mt-4">
          The published work is specific: a laboratory record, an instrument connection, or a SQL view. It is not a general claim that operations were transformed.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl">Related services</h2>
        <ul className="mt-4 space-y-2">
          {item.services.map((slug) => {
            const service = getService(slug)
            if (!service) return null
            return (
              <li key={slug}>
                <Link href={service.href} className="underline underline-offset-4">
                  {service.name}
                </Link>
              </li>
            )
          })}
        </ul>
        {item.externalUrl ? (
          <p className="mt-4">
            <a href={item.externalUrl} className="underline underline-offset-4">
              Public source repository
            </a>
          </p>
        ) : null}
      </section>

      <CaseCta slug={item.slug} />
    </article>
  )
}
