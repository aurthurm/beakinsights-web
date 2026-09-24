import type { Metadata } from "next"
import { site } from "@/content/site"

export function pageMeta({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const url = new URL(path, site.url).toString()
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
    },
  }
}
