import type { ReactNode } from "react"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import { getCase } from "@/content/cases"

function InsightCallout({ children }: { children: ReactNode }) {
  return (
    <aside className="my-8 border-l-4 border-gold bg-sand px-5 py-4">
      {children}
    </aside>
  )
}

function CaseStudyLink({ slug }: { slug: string }) {
  const relatedCase = getCase(slug)
  if (!relatedCase) throw new Error(`Unknown case study: ${slug}`)
  return (
    <Link href={`/work/${relatedCase.slug}`} className="font-medium underline">
      {relatedCase.title}
    </Link>
  )
}

// Only MDX files committed to this repository are compiled. MDX executes code at build/render time.
export function InsightBody({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={{ InsightCallout, CaseStudyLink }}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
    />
  )
}
