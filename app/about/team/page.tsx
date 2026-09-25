import { Breadcrumbs } from "@/components/breadcrumbs"
import { teamPractice } from "@/content/team"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Our Team | Beak Insights",
  description:
    "Beak Insights is a multidisciplinary consulting practice spanning technology advisory, engineering, data, AI and health and laboratory informatics.",
  path: "/about/team",
})

export default function TeamPage() {
  return (
    <div className="container py-12 md:py-16">
      <Breadcrumbs items={[{ name: "About", href: "/about" }, { name: "Team", href: "/about/team" }]} />
      <h1 className="mt-8 max-w-3xl font-serif text-4xl md:text-6xl">A multidisciplinary team, close to the work.</h1>
      <p className="measure mt-6 text-lg">{teamPractice.summary}</p>
      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {teamPractice.strengths.map((item) => (
          <li key={item.name} className="border border-border bg-white p-6">
            <h2 className="font-serif text-2xl">{item.name}</h2>
            <p className="mt-3">{item.summary}</p>
          </li>
        ))}
      </ul>
      <section className="mt-12 max-w-3xl">
        <h2 className="font-serif text-3xl">How the team is assembled</h2>
        <p className="mt-4">
          An engagement draws the people the outcome needs: advisory, architecture, engineering, data, AI, informatics, a health or laboratory workflow, or a combination of them. Roles stay clear, but the client should not have to manage a chain of disconnected specialist handoffs. The public site describes that practice rather than listing personal names.
        </p>
      </section>
    </div>
  )
}
