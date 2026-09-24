import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { engagements, method } from "@/content/site"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "How We Work | Beak Insights",
  description:
    "Beak Insights diagnoses a problem, designs a target state, delivers or assures the change, enables the team, and measures the result.",
  path: "/about/how-we-work",
})

export default function HowWeWorkPage() {
  return (
    <div className="container py-12 md:py-16">
      <Breadcrumbs items={[{ name: "About", href: "/about" }, { name: "How we work", href: "/about/how-we-work" }]} />
      <h1 className="mt-8 max-w-3xl font-serif text-4xl md:text-6xl">From diagnosis to a result you can inspect.</h1>
      <p className="measure mt-6 text-lg">
        A roadmap is useful only if teams can execute it. The method is the same across IT, informatics, and healthcare: make the problem specific, design a state that can be implemented, and stay through delivery long enough to know whether it held.
      </p>
      <ol className="mt-12 space-y-8">
        {method.map((step, index) => (
          <li key={step.name}>
            <h2 className="font-serif text-3xl">
              {index + 1}. {step.name}
            </h2>
            <p className="measure mt-3">{step.summary}</p>
          </li>
        ))}
      </ol>
      <section className="mt-16">
        <h2 className="font-serif text-3xl">Ways to engage</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {engagements.map((item) => (
            <li key={item.name} className="border border-border p-5">
              <h3 className="font-serif text-2xl">{item.name}</h3>
              <p className="mt-2">{item.summary}</p>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn-primary mt-8">
          Talk to an advisor
        </Link>
      </section>
    </div>
  )
}
