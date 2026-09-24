import { Breadcrumbs } from "@/components/breadcrumbs"
import { teamPractice } from "@/content/team"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Our Team | Beak Insights",
  description: "Beak Insights is a versatile team working across IT, AI, informatics, and healthcare from strategy through implementation.",
  path: "/about/team",
})

export default function TeamPage() {
  return (
    <div className="container py-12 md:py-16">
      <Breadcrumbs items={[{ name: "About", href: "/about" }, { name: "Team", href: "/about/team" }]} />
      <h1 className="mt-8 max-w-3xl font-serif text-4xl md:text-6xl">A versatile team, close to the work.</h1>
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
          An engagement draws the people the problem needs: architecture, AI engineering, informatics, a healthcare workflow, or a combination of them. The public site describes that practice. It does not list personal names.
        </p>
      </section>
    </div>
  )
}
