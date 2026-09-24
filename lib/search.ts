import { cases } from "@/content/cases"
import { insights } from "@/content/insights"
import { services } from "@/content/services"
import { aboutLinks } from "@/content/site"

export type SearchHit = {
  title: string
  href: string
  summary: string
  kind: string
}

const pages: SearchHit[] = [
  {
    title: "What we do",
    href: "/what-we-do",
    summary: "IT consulting, informatics and data, and healthcare transformation.",
    kind: "Service",
  },
  ...aboutLinks.map((link) => ({
    title: link.label,
    href: link.href,
    summary: "About Beak Insights.",
    kind: "About",
  })),
  {
    title: "Contact",
    href: "/contact",
    summary: "Talk to Beak Insights about an IT, informatics, data, or healthcare challenge.",
    kind: "Contact",
  },
  {
    title: "Careers",
    href: "/careers",
    summary: "Consulting roles across technology, informatics, and healthcare.",
    kind: "Careers",
  },
]

export function searchContent(query: string): SearchHit[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  const hits: SearchHit[] = [
    ...services.map((service) => ({
      title: service.name,
      href: service.href,
      summary: service.lede,
      kind: "Service",
    })),
    ...cases.map((item) => ({
      title: item.title,
      href: `/work/${item.slug}`,
      summary: item.deck,
      kind: "Case study",
    })),
    ...insights.map((item) => ({
      title: item.title,
      href: `/insights/${item.slug}`,
      summary: item.description,
      kind: item.type,
    })),
    ...pages,
  ]
  return hits.filter((hit) =>
    `${hit.title} ${hit.summary} ${hit.kind}`.toLowerCase().includes(q)
  )
}
