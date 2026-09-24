import Link from "next/link"
import { SearchForm } from "@/components/search-form"
import { searchContent } from "@/lib/search"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Search | Beak Insights",
  description: "Search Beak Insights services, work, and insights.",
  path: "/search",
})

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q?.trim() || ""
  const results = query ? searchContent(query) : []

  return (
    <div className="container py-12 md:py-16">
      <h1 className="font-serif text-4xl md:text-5xl">Search</h1>
      <div className="mt-6 max-w-xl">
        <SearchForm query={query} />
      </div>
      {query ? (
        <>
          <p className="mt-6 text-sm" aria-live="polite">
            {results.length} {results.length === 1 ? "result" : "results"} for “{query}”
          </p>
          <ul className="mt-4 space-y-4">
            {results.map((hit) => (
              <li key={hit.href} className="border border-border p-5">
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{hit.kind}</p>
                <h2 className="mt-2 font-serif text-2xl">
                  <Link href={hit.href} className="underline-offset-4 hover:underline">
                    {hit.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{hit.summary}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="mt-6 text-muted-foreground">Search services, case studies, and insights.</p>
      )}
    </div>
  )
}
