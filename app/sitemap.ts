import type { MetadataRoute } from "next"
import { cases } from "@/content/cases"
import { getInsights } from "@/lib/insights"
import { legalPages } from "@/content/legal"
import { services } from "@/content/services"
import { site } from "@/content/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/what-we-do",
    "/work",
    "/insights",
    "/about",
    "/about/team",
    "/about/how-we-work",
    "/careers",
    "/contact",
    "/search",
  ]
  const paths = [
    ...staticPaths,
    ...services.map((service) => service.href),
    ...cases.map((item) => `/work/${item.slug}`),
    ...legalPages.map((page) => `/legal/${page.slug}`),
  ]
  return [
    ...paths.map((path) => ({
      url: new URL(path, site.url).toString(),
      lastModified: new Date("2026-09-24"),
    })),
    ...getInsights().map((item) => ({
      url: new URL(`/insights/${item.slug}`, site.url).toString(),
      lastModified: new Date(item.updated),
    })),
  ]
}
