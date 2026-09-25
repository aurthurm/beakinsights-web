import Link from "next/link"
import { culturePrinciples, method, site } from "@/content/site"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "About Beak Insights",
  description:
    "Beak Insights is an African technology consultancy combining advisory, engineering, data, AI and deep health and laboratory informatics expertise.",
  path: "/about",
})

const depthAreas = [
  "Technology strategy, architecture and software engineering",
  "Data engineering, interoperability, analytics and AI",
  "Health and laboratory informatics, digital health and public-sector systems",
] as const

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="max-w-4xl font-serif text-4xl md:text-6xl">
        Strategy, engineering and domain expertise in one team.
      </h1>
      <p className="measure mt-6 text-lg">{site.proposition}</p>

      <section className="mt-12">
        <h2 className="font-serif text-3xl">What we are building</h2>
        <p className="measure mt-4">
          Beak Insights is being built as a technology consultancy that can move with a problem from diagnosis to implementation. We do not want advisory separated from engineering, data separated from operations, or domain expertise added after the important decisions have already been made.
        </p>
        <p className="measure mt-4">
          The model is deliberately broad enough to solve complex technology problems and deliberately deep where we have distinctive experience: health, laboratories, data-intensive systems and interoperability.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl">Where we go deepest</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {depthAreas.map((item) => (
            <li key={item} className="border-t-2 border-gold pt-4 text-lg">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
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

      <section className="mt-12 bg-ink p-8 text-white md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">Our culture</p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl text-white">Culture is part of the delivery system.</h2>
        <p className="measure mt-4 text-on-ink">
          The behaviours we reward determine the quality of the work: learn deeply, own the outcome, understand the real workflow, work across disciplines, use evidence and leave capability behind.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {culturePrinciples.slice(0, 3).map((principle) => (
            <div key={principle.name} className="border-t border-white/25 pt-4">
              <h3 className="font-serif text-xl text-white">{principle.name}</h3>
            </div>
          ))}
        </div>
        <Link href="/about/culture" className="btn-secondary-dark mt-8">
          Read the Beak culture
        </Link>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl">Who does the work</h2>
        <p className="measure mt-4">
          Engagements are assembled around the outcome and can cross architecture, software engineering, AI, data, informatics, health workflows and delivery. The public site describes the practice rather than publishing individual names.
        </p>
        <Link href="/about/team" className="mt-4 inline-flex min-h-11 items-center text-sm font-medium">
          Meet the team
        </Link>
      </section>
    </div>
  )
}
