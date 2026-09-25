import Link from "next/link"
import { culturePrinciples } from "@/content/site"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Careers at Beak Insights",
  description:
    "Join Beak Insights and work across technology advisory, engineering, data, AI, health and laboratory informatics from strategy through delivery.",
  path: "/careers",
})

export default function CareersPage() {
  return (
    <div className="container py-12 md:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Careers at Beak</p>
      <h1 className="mt-4 max-w-4xl font-serif text-4xl md:text-6xl">Do work that survives the slide deck.</h1>
      <p className="measure mt-6 text-lg">
        We value people who can structure an ambiguous problem, learn the real workflow, explain difficult ideas clearly and stay involved long enough to see whether the solution works.
      </p>

      <section className="mt-12">
        <h2 className="font-serif text-3xl">What consulting at Beak is like</h2>
        <p className="measure mt-4">
          The work often sits between a decision and an implementation. You may move from requirements to architecture, from a data problem to a workflow problem, or from advisory into delivery. We expect people to know their craft, collaborate across disciplines and ask for deeper expertise when the problem needs it.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl">How we show up</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {culturePrinciples.map((principle) => (
            <article key={principle.name} className="border-t-2 border-gold pt-5">
              <h3 className="font-serif text-2xl">{principle.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{principle.summary}</p>
            </article>
          ))}
        </div>
        <Link href="/about/culture" className="mt-6 inline-flex min-h-11 items-center text-sm font-medium">
          Read more about the Beak culture
        </Link>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl">Areas of practice</h2>
        <p className="measure mt-4">
          Technology advisory and engineering, data and informatics, AI and intelligent systems, and health and laboratory informatics. The most useful consultants can go deep in a craft while still understanding how their work connects to the wider system.
        </p>
      </section>

      <section className="mt-12 bg-mist p-6 md:p-8">
        <h2 className="font-serif text-3xl">Growth at Beak</h2>
        <p className="measure mt-4">
          We want growth to mean better judgment, stronger craft, broader context and greater responsibility—not title inflation. Teaching others, seeking feedback, understanding adjacent disciplines and taking ownership of harder outcomes are part of becoming more senior here.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl">Open roles</h2>
        <p className="mt-4 border border-border p-6" role="status">
          There are no open roles listed. When a role is real, it will be published here with the practice, location, responsibilities and hiring steps.
        </p>
        <p className="mt-4">
          If you want to be considered later, <Link href="/contact" className="underline underline-offset-4">start a conversation</Link> and say so. Do not send patient or clinical information.
        </p>
      </section>
    </div>
  )
}
