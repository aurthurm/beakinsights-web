import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { culturePrinciples } from "@/content/site"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Culture at Beak Insights",
  description:
    "The principles behind how Beak Insights learns, collaborates, delivers technology consulting work and builds capability with clients.",
  path: "/about/culture",
})

const growthPractices = [
  {
    name: "Master the craft",
    summary:
      "Growth starts with becoming better at the work: engineering, architecture, data, AI, informatics, communication, facilitation or domain practice. Titles matter less than increasing judgment and responsibility.",
  },
  {
    name: "Learn across disciplines",
    summary:
      "Complex systems do not respect org charts. We want technologists who can understand the workflow, domain specialists who can reason about systems, and everyone to know when to bring in deeper expertise.",
  },
  {
    name: "Give useful feedback",
    summary:
      "Feedback should be frequent, specific and actionable. We challenge the work without diminishing the person, and we expect people at every level to teach and learn from one another.",
  },
  {
    name: "Grow responsibility with ability",
    summary:
      "Progress means being trusted with harder decisions, broader context, stronger client relationships and greater delivery responsibility—not simply collecting a new title.",
  },
] as const

export default function CulturePage() {
  return (
    <div className="container py-12 md:py-16">
      <Breadcrumbs items={[{ name: "About", href: "/about" }, { name: "Culture", href: "/about/culture" }]} />
      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">The Beak culture</p>
      <h1 className="mt-4 max-w-4xl font-serif text-4xl md:text-6xl">
        Culture is how we make decisions when the playbook runs out.
      </h1>
      <p className="measure mt-6 text-lg">
        We want Beak to be a place where curious, capable people become better at their craft while doing work that has to survive the real world. Our culture is not a list of perks. It is the behaviour we expect when a project is ambiguous, a deadline is close, a client disagrees, or the evidence changes the answer.
      </p>

      <section className="mt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">Our principles</p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl">How we show up</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {culturePrinciples.map((principle, index) => (
            <article key={principle.name} className="border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-2xl">{principle.name}</h3>
              <p className="mt-3 text-muted-foreground">{principle.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 bg-ink p-8 text-white md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">The standard</p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl text-white md:text-4xl">
          Local context. Global engineering discipline.
        </h2>
        <p className="measure mt-4 text-on-ink">
          We are building from Africa, and we take context seriously: infrastructure, operating realities, procurement, skills, regulation and the people who will actually run a system. Context is not an excuse for lower standards. It is part of designing the right system and operating it well.
        </p>
      </section>

      <section className="mt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Growth at Beak</p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl">Become more useful, not just more senior.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {growthPractices.map((practice) => (
            <article key={practice.name} className="border-t-2 border-gold pt-5">
              <h3 className="font-serif text-2xl">{practice.name}</h3>
              <p className="mt-3 text-muted-foreground">{practice.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-3xl md:text-4xl">One team with the client</h2>
        <p className="measure mt-4">
          Consulting works best when there is no artificial wall between “our people” and “their people.” We bring a point of view, challenge assumptions and take responsibility for our work, but we build with the people who own the context and will live with the result.
        </p>
        <p className="measure mt-4">
          The goal is not to be indispensable forever. The goal is to solve the problem well, transfer enough knowledge and capability for ownership to become stronger, and earn the right to help with the next difficult problem.
        </p>
      </section>

      <section className="mt-16 border-t border-border pt-10">
        <h2 className="font-serif text-3xl">Does this sound like how you want to work?</h2>
        <p className="measure mt-4">
          We look for people who care about craft, can work across boundaries, communicate clearly and want responsibility for outcomes rather than a narrow task list.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/careers" className="btn-primary">
            Explore careers
          </Link>
          <Link href="/about/how-we-work" className="btn-secondary">
            See how we work
          </Link>
        </div>
      </section>
    </div>
  )
}
