import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { JsonLd } from "@/components/json-ld"
import { TrackView } from "@/components/track-view"
import { getCase } from "@/content/cases"
import { getService } from "@/content/services"
import { site } from "@/content/site"
import { InsightBody } from "@/components/insight-body"
import { getInsight, getInsights } from "@/lib/insights"
import { pageMeta } from "@/lib/seo"

export function generateStaticParams() {
  return getInsights().map((item) => ({ slug: item.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const entry = getInsight(params.slug)
  if (!entry) return {}
  const { insight: item } = entry
  return pageMeta({
    title: `${item.title} | Beak Insights`,
    description: item.description,
    path: `/insights/${item.slug}`,
  })
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const entry = getInsight(params.slug)
  if (!entry) notFound()
  const { insight: item, body } = entry
  const service = getService(item.topic)
  const relatedCase = item.caseSlug ? getCase(item.caseSlug) : undefined
  const url = new URL(`/insights/${item.slug}`, site.url).toString()

  return (
    <article className="container py-12 md:py-16">
      <TrackView event="view_insight" params={{ topic: item.topic, author: item.author, type: item.type }} />
      <Breadcrumbs
        items={[
          { name: "Insights", href: "/insights" },
          { name: item.title, href: `/insights/${item.slug}` },
        ]}
      />
      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {item.type} · {item.topicLabel}
      </p>
      <h1 className="mt-3 max-w-4xl font-serif text-4xl md:text-5xl">{item.title}</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        <time dateTime={item.date}>Published {item.date}</time>
        {item.updated !== item.date ? <span> · Updated {item.updated}</span> : null}
        <span> · {item.author}</span>
      </p>
      <div className="insight-body measure mt-8">
        <InsightBody source={body} />
      </div>
      <aside className="mt-12 max-w-2xl border border-border p-6">
        <h2 className="font-serif text-2xl">Continue</h2>
        <ul className="mt-4 space-y-3">
          {service ? (
            <li>
              <Link href={service.href} className="underline underline-offset-4">
                {service.name}
              </Link>
            </li>
          ) : null}
          {relatedCase ? (
            <li>
              <Link href={`/work/${relatedCase.slug}`} className="underline underline-offset-4">
                {relatedCase.title}
              </Link>
            </li>
          ) : null}
          <li>
            <Link href="/about/team" className="underline underline-offset-4">
              The team
            </Link>
          </li>
          <li>
            <Link href="/contact" className="underline underline-offset-4">
              Talk to an advisor
            </Link>
          </li>
        </ul>
      </aside>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: item.title,
          description: item.description,
          datePublished: item.date,
          dateModified: item.updated,
          author: { "@type": "Organization", name: item.author, url: site.url },
          mainEntityOfPage: url,
          publisher: { "@type": "Organization", name: site.name, url: site.url },
        }}
      />
    </article>
  )
}
