import { readFileSync, readdirSync } from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { getCase } from "@/content/cases"
import { getService, type ServiceSlug } from "@/content/services"

export type InsightType = "Brief" | "Guide" | "Research"

export type Insight = {
  slug: string
  title: string
  description: string
  topic: ServiceSlug
  topicLabel: string
  type: InsightType
  date: string
  updated: string
  author: string
  caseSlug?: string
  order?: number
}

const directory = path.join(process.cwd(), "content", "insights")
const types: InsightType[] = ["Brief", "Guide", "Research"]
const datePattern = /^\d{4}-\d{2}-\d{2}$/

function requiredString(data: Record<string, unknown>, key: string, slug: string): string {
  const value = data[key]
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Insight ${slug}: ${key} must be a nonempty string`)
  }
  return value
}

function parseInsight(slug: string): { insight: Insight; body: string } {
  const { data, content } = matter(readFileSync(path.join(directory, `${slug}.mdx`), "utf8"))
  const title = requiredString(data, "title", slug)
  const description = requiredString(data, "description", slug)
  const topic = requiredString(data, "topic", slug) as ServiceSlug
  const topicLabel = requiredString(data, "topicLabel", slug)
  const type = requiredString(data, "type", slug) as InsightType
  const date = requiredString(data, "date", slug)
  const updated = requiredString(data, "updated", slug)
  const author = requiredString(data, "author", slug)

  if (!getService(topic)) throw new Error(`Insight ${slug}: unknown topic ${topic}`)
  if (!types.includes(type)) throw new Error(`Insight ${slug}: unknown type ${type}`)
  for (const [key, value] of [["date", date], ["updated", updated]]) {
    if (!datePattern.test(value) || Number.isNaN(Date.parse(value)) || new Date(value).toISOString().slice(0, 10) !== value) {
      throw new Error(`Insight ${slug}: ${key} must be a valid YYYY-MM-DD date`)
    }
  }
  if (updated < date) throw new Error(`Insight ${slug}: updated is before date`)
  if (!content.trim()) throw new Error(`Insight ${slug}: article body is empty`)

  const caseSlug = data.caseSlug
  if (caseSlug !== undefined && (typeof caseSlug !== "string" || !getCase(caseSlug))) {
    throw new Error(`Insight ${slug}: unknown caseSlug ${String(caseSlug)}`)
  }
  const order = data.order
  if (order !== undefined && (typeof order !== "number" || !Number.isInteger(order) || order < 0)) {
    throw new Error(`Insight ${slug}: order must be a nonnegative integer`)
  }

  return {
    insight: { slug, title, description, topic, topicLabel, type, date, updated, author, caseSlug, order },
    body: content,
  }
}

export function getInsights(): Insight[] {
  return readdirSync(directory)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => parseInsight(name.slice(0, -4)).insight)
    .sort((a, b) => b.date.localeCompare(a.date) || (a.order ?? 999) - (b.order ?? 999) || a.slug.localeCompare(b.slug))
}

export function getInsight(slug: string): { insight: Insight; body: string } | undefined {
  // Only read known filenames; route parameters must never become filesystem paths.
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return undefined
  if (!readdirSync(directory).includes(`${slug}.mdx`)) return undefined
  return parseInsight(slug)
}

export function insightsForService(slug: ServiceSlug): Insight[] {
  return getInsights().filter((item) => item.topic === slug)
}
