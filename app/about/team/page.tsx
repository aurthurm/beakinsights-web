import { JsonLd } from "@/components/json-ld"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { site } from "@/content/site"
import { team } from "@/content/team"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Our Team | Beak Insights",
  description: "Meet the consultants and specialists behind Beak Insights’ IT, informatics and healthcare work.",
  path: "/about/team",
})

export default function TeamPage() {
  return (
    <div className="container py-12 md:py-16">
      <Breadcrumbs items={[{ name: "About", href: "/about" }, { name: "Team", href: "/about/team" }]} />
      <h1 className="mt-8 max-w-3xl font-serif text-4xl md:text-6xl">Practitioners who stay close to the work.</h1>
      <p className="measure mt-6">
        Clients should know who is doing the work. Our teams combine advisory depth with hands-on delivery experience. This page lists only people already named publicly. It does not add titles, qualifications, or engagements that have not been published.
      </p>
      <section className="mt-12">
        <h2 className="font-serif text-3xl">Leadership</h2>
        <ul className="mt-6 grid gap-6">
          {team.map((person) => (
            <li key={person.slug} className="border border-border p-6">
              <h3 className="font-serif text-2xl">{person.name}</h3>
              <p className="measure mt-3">{person.summary}</p>
              <p className="mt-3 text-sm">
                <a href={person.url} className="underline underline-offset-4">
                  Public profile
                </a>
              </p>
              <JsonLd
                data={{
                  "@context": "https://schema.org",
                  "@type": "Person",
                  name: person.name,
                  url: person.url,
                  affiliation: { "@type": "Organization", name: site.name, url: site.url },
                }}
              />
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="font-serif text-3xl">How we assemble teams</h2>
        <p className="measure mt-4">
          A team is assembled around the problem: architecture, informatics, healthcare workflow, or a combination. Additional consultants are listed here only after a factual profile is ready to publish.
        </p>
      </section>
    </div>
  )
}
