import type { Metadata } from "next"
import { site } from "@/content/site"

export function pageMeta({
  title,
  description,
  path,
  image = "/og-image.png",
  imageAlt,
}: {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
}): Metadata {
  const url = new URL(path, site.url).toString()
  const alt = imageAlt ?? title
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
      images: [{ url: image, width: 1200, height: 630, alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}
