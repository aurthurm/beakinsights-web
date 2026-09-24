import Link from "next/link"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Careers at Beak Insights",
  description:
    "Join Beak Insights and work across technology, informatics and healthcare consulting from strategy through implementation.",
  path: "/careers",
})

export default function CareersPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="max-w-3xl font-serif text-4xl md:text-6xl">Do work that survives the slide deck.</h1>
      <p className="measure mt-6 text-lg">
        We value people who can structure an ambiguous problem, explain it clearly and stay involved long enough to see the solution work.
      </p>
      <section className="mt-12">
        <h2 className="font-serif text-3xl">What consulting at Beak is like</h2>
        <p className="measure mt-4">
          The work sits between a decision and an implementation. You will be expected to make the problem precise, write it so a client team can use it, and stay close to delivery.
        </p>
      </section>
      <section className="mt-10">
        <h2 className="font-serif text-3xl">Areas of practice</h2>
        <p className="measure mt-4">IT consulting, informatics and data, and healthcare transformation. Most useful people can work in more than one of those without treating them as separate industries.</p>
      </section>
      <section className="mt-10">
        <h2 className="font-serif text-3xl">Open roles</h2>
        <p className="mt-4 border border-border p-6" role="status">
          There are no open roles listed. When a role is real, it will be published here with the practice, location, and hiring steps.
        </p>
        <p className="mt-4">
          If you want to be considered later, <Link href="/contact" className="underline underline-offset-4">start a conversation</Link> and say so. Do not send patient or clinical information.
        </p>
      </section>
    </div>
  )
}
