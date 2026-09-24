import Link from "next/link"
import { Suspense } from "react"
import { ResourceFilters } from "@/components/resource-filters"
import { cases } from "@/content/cases"
import { services, type ServiceSlug } from "@/content/services"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Work | Beak Insights",
  description:
    "Published systems from Beak Insights across laboratory information management, instrument connectivity, and SQL visualization.",
  path: "/work",
})

export default function WorkPage({
  searchParams,
}: {
  searchParams: { topic?: string }
}) {
  const topic = searchParams.topic || ""
  const visible = topic
    ? cases.filter((item) => item.services.includes(topic as ServiceSlug))
    : cases

  return (
    <div className="container py-12 md:py-16">
      <h1 className="font-serif text-4xl md:text-6xl">Selected work</h1>
      <p className="measure mt-6 text-lg">
        Each record describes a system Beak Insights has published. Client names, quotes, and outcome metrics appear only when they have been published with permission. None of those are available for the current entries.
      </p>
      <div className="mt-8">
        <Suspense>
          <ResourceFilters
            basePath="/work"
            topics={services.map((service) => ({ value: service.slug, label: service.name }))}
          />
        </Suspense>
      </div>
      <p className="mt-4 text-sm" aria-live="polite">
        {visible.length} {visible.length === 1 ? "result" : "results"}
      </p>
      <ul className="mt-6 grid gap-6 md:grid-cols-2">
        {visible.map((item) => (
          <li key={item.slug} className="border border-border p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {item.sector}
            </p>
            <h2 className="mt-3 font-serif text-2xl">{item.title}</h2>
            <p className="mt-3">{item.deck}</p>
            <Link href={`/work/${item.slug}`} className="mt-4 inline-flex min-h-11 items-center text-sm font-medium">
              Read the case study
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
