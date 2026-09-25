import Link from "next/link"
import { Suspense } from "react"
import { ResourceFilters } from "@/components/resource-filters"
import { services, type ServiceSlug } from "@/content/services"
import { getInsights, type InsightType } from "@/lib/insights"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Insights & Research | Beak Insights",
  description:
    "Practical analysis on IT strategy, AI and agentic systems, informatics, data, interoperability, healthcare technology and implementation.",
  path: "/insights",
})

const types: InsightType[] = ["Brief", "Guide", "Research"]

export default function InsightsPage({
  searchParams,
}: {
  searchParams: { topic?: string; type?: string }
}) {
  const topic = searchParams.topic || ""
  const type = searchParams.type || ""
  const visible = getInsights().filter((item) => {
    const topicMatch = topic ? item.topic === (topic as ServiceSlug) : true
    const typeMatch = type ? item.type === type : true
    return topicMatch && typeMatch
  })

  return (
    <div className="container py-12 md:py-16">
      <h1 className="max-w-4xl font-serif text-4xl md:text-6xl">
        Insights for complex technology, AI and healthcare decisions.
      </h1>
      <p className="measure mt-6 text-lg">
        Research and practical guidance from people working on the problems—not commentary written at a distance.
      </p>
      <div className="mt-8">
        <Suspense>
          <ResourceFilters
            basePath="/insights"
            topics={services.map((service) => ({ value: service.slug, label: service.name }))}
            types={types.map((item) => ({ value: item, label: item }))}
          />
        </Suspense>
      </div>
      <p className="mt-4 text-sm" aria-live="polite">
        {visible.length} {visible.length === 1 ? "result" : "results"}
      </p>
      <ul className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {visible.map((item) => (
          <li key={item.slug} className="border-t-2 border-gold bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {item.type} · {item.topicLabel}
            </p>
            <h2 className="mt-3 font-serif text-2xl">{item.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
            <Link href={`/insights/${item.slug}`} className="mt-4 inline-flex min-h-11 items-center text-sm font-medium">
              Read insight
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
