"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { track } from "@/lib/analytics"

export function ResourceFilters({
  basePath,
  topics,
  types,
}: {
  basePath: string
  topics: { value: string; label: string }[]
  types?: { value: string; label: string }[]
}) {
  const router = useRouter()
  const params = useSearchParams()
  const topic = params.get("topic") || ""
  const type = params.get("type") || ""

  function update(nextTopic: string, nextType: string) {
    const query = new URLSearchParams()
    if (nextTopic) query.set("topic", nextTopic)
    if (nextType) query.set("type", nextType)
    track("filter_resource", { filters: query.toString() || "reset", page: basePath })
    const suffix = query.toString()
    router.push(suffix ? `${basePath}?${suffix}` : basePath)
  }

  return (
    <form className="flex flex-col gap-4 border border-border p-4 sm:flex-row sm:flex-wrap sm:items-end" aria-label="Filters">
      <label className="block text-sm">
        Topic
        <select
          className="field mt-2"
          value={topic}
          onChange={(event) => update(event.target.value, type)}
        >
          <option value="">All topics</option>
          {topics.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      {types ? (
        <label className="block text-sm">
          Type
          <select className="field mt-2" value={type} onChange={(event) => update(topic, event.target.value)}>
            <option value="">All types</option>
            {types.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      ) : null}
      <button type="button" className="inline-flex min-h-12 items-center px-2 text-sm underline" onClick={() => update("", "")}>
        Reset filters
      </button>
    </form>
  )
}
