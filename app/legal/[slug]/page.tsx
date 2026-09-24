import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { getLegal, legalPages } from "@/content/legal"
import { pageMeta } from "@/lib/seo"

export function generateStaticParams() {
  return legalPages.map((page) => ({ slug: page.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = getLegal(params.slug)
  if (!page) return {}
  return pageMeta({ title: page.title, description: page.description, path: `/legal/${page.slug}` })
}

export default function LegalPage({ params }: { params: { slug: string } }) {
  const page = getLegal(params.slug)
  if (!page) notFound()
  return (
    <article className="container py-12 md:py-16">
      <Breadcrumbs items={[{ name: page.h1, href: `/legal/${page.slug}` }]} />
      <h1 className="mt-8 font-serif text-4xl md:text-5xl">{page.h1}</h1>
      <div className="measure mt-8 space-y-8">
        {page.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-serif text-2xl">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </article>
  )
}
