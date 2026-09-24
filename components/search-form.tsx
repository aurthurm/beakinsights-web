"use client"

import { useRouter } from "next/navigation"
import { track } from "@/lib/analytics"

export function SearchForm({ query }: { query: string }) {
  const router = useRouter()
  return (
    <form
      action="/search"
      className="flex flex-col gap-3 sm:flex-row"
      onSubmit={(event) => {
        const data = new FormData(event.currentTarget)
        const q = String(data.get("q") || "")
        track("internal_search", { query: q })
        event.preventDefault()
        router.push(`/search?q=${encodeURIComponent(q)}`)
      }}
    >
      <label className="sr-only" htmlFor="q">
        Search
      </label>
      <input id="q" name="q" defaultValue={query} className="field" />
      <button type="submit" className="inline-flex min-h-12 items-center bg-primary px-6 text-sm font-medium text-primary-foreground">
        Search
      </button>
    </form>
  )
}
