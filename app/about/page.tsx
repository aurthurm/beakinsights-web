import Link from "next/link"
import { method, site } from "@/content/site"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "About Beak Insights",
  description:
    "Beak Insights is a consultancy for technology, AI, informatics, and healthcare problems that cross the boundary between strategy and implementation.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="max-w-3xl font-serif text-4xl md:text-6xl">A consultancy for problems that cross boundaries.</h1>
      <p className="measure mt-6 text-lg">{site.proposition}</p>
      <section className="mt-12">
        <h2 className="font-serif text-3xl">The problem</h2>
        <p className="measure mt-4">
          Important technology, AI and healthcare initiatives break down when strategy, systems, information, governance and operations are treated separately.
        </p>
      </section>
      <section className="mt-10">
        <h2 className="font-serif text-3xl">How Beak works</h2>
        <ol className="mt-4 grid gap-4 md:grid-cols-5">
          {method.map((step) => (
            <li key={step.name}>
              <h3 className="font-serif text-xl">{step.name}</h3>
              <p className="mt-2 text-sm">{step.summary}</p>
            </li>
          ))}
        </ol>
        <Link href="/about/how-we-work" className="mt-6 inline-flex min-h-11 items-center text-sm font-medium">
          Read how we work
        </Link>
      </section>
      <section className="mt-12">
        <h2 className="font-serif text-3xl">Who does the work</h2>
        <p className="measure mt-4">
          The practice is a versatile team that can cross technology, AI, informatics, and healthcare. This site describes how that team works. It does not publish individual names.
        </p>
        <Link href="/about/team" className="mt-4 inline-flex min-h-11 items-center text-sm font-medium">
          Meet the team
        </Link>
      </section>
    </div>
  )
}
