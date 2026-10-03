import Link from "next/link"
import { BrandFigure, BrandIcon } from "@/components/brand-media"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { engagements, method } from "@/content/site"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "How We Work | Beak Insights",
  description:
    "Beak Insights diagnoses complex problems, designs workable target states, builds or assures delivery, enables client teams and measures the result.",
  path: "/about/how-we-work",
  image: "/og/og-how-we-work.png",
  imageAlt: "How we work",
})

export default function HowWeWorkPage() {
  return (
    <div className="container py-12 md:py-16">
      <Breadcrumbs items={[{ name: "About", href: "/about" }, { name: "How we work", href: "/about/how-we-work" }]} />
      <h1 className="mt-8 max-w-3xl font-serif text-4xl md:text-6xl">From diagnosis to a result you can inspect.</h1>
      <p className="measure mt-6 text-lg">
        A roadmap is useful only if teams can execute it. Our method connects advisory to engineering and implementation: make the problem specific, design a state that can be built and governed, stay through delivery, transfer capability and measure whether the change held.
      </p>
      <div className="mt-10 max-w-4xl">
        <BrandFigure
          src="/brand/illustrations/about-engagement-model.svg"
          alt="Diagram: the five-step engagement model, Diagnose, Design, Build and deliver, Enable, Measure, with measurement feeding back into diagnosis."
          caption="Measurement feeds the next diagnosis. The method is a loop, not a slide sequence."
          width={1200}
          height={800}
          framed
        />
      </div>
      <ol className="mt-12 space-y-8">
        {method.map((step, index) => (
          <li key={step.name} className="flex gap-4">
            <BrandIcon name={step.icon} className="mt-1 h-10 w-10 shrink-0" />
            <div>
            <h2 className="font-serif text-3xl">
              {index + 1}. {step.name}
            </h2>
            <p className="measure mt-3">{step.summary}</p>
            </div>
          </li>
        ))}
      </ol>
      <section className="mt-16">
        <h2 className="font-serif text-3xl">Ways to engage</h2>
        <p className="measure mt-4">
          The entry point depends on the problem. Beak can provide a focused diagnostic, own a defined delivery outcome, embed specialist expertise, independently assure a programme, or stay involved through continuous improvement.
        </p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {engagements.map((item) => (
            <li key={item.name} className="border border-border p-5">
              <h3 className="font-serif text-2xl">{item.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.suitable}</p>
              <p className="mt-3">{item.summary}</p>
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
