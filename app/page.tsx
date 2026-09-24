import { HeroDiagram } from "@/components/diagrams"
import { MotionCard } from "@/components/motion/motion-card"
import { QuietLink } from "@/components/motion/quiet-link"
import { Reveal } from "@/components/motion/reveal"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { cases } from "@/content/cases"
import { insights } from "@/content/insights"
import { services } from "@/content/services"
import { method } from "@/content/site"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Beak Insights | IT, Informatics & Healthcare Consulting",
  description:
    "Beak Insights helps organizations design, modernize, integrate and improve technology, informatics and healthcare systems from strategy through implementation.",
  path: "/",
})

export default function HomePage() {
  return (
    <div>
      <section className="bg-ink text-white">
        <div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              <span className="mark" aria-hidden="true" />
              Technology · Informatics · Healthcare
            </p>
            <h1 className="mt-4 max-w-xl font-serif text-4xl text-white md:text-6xl">
              Turn complex systems into measurable outcomes.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-on-ink">
              Strategy, design and delivery for organizations working through difficult technology, data and healthcare change.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <QuietLink href="/contact" className="btn-primary">
                Talk to an advisor
              </QuietLink>
              <QuietLink href="/work" className="btn-secondary-dark">
                See our work
              </QuietLink>
            </div>
          </div>
          <HeroDiagram tone="dark" />
        </div>
      </section>

      <section className="bg-navy text-white" aria-label="Trust marks">
        <div className="container py-8">
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
            Clients and certifications
          </Reveal>
          <Stagger as="ul" className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {["Client", "Client", "Client", "Certification", "Certification", "Partner"].map((label, index) => (
              <StaggerItem as="li" key={`${label}-${index}`}>
                <div
                  aria-disabled="true"
                  className="flex h-16 items-center justify-center border border-dashed border-white/30 bg-white/5 px-3 text-center text-xs uppercase tracking-[0.12em] text-white/50"
                >
                  {label} reserved
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal as="p" delay={0.1} className="mt-3 text-sm text-on-ink">
            These spaces stay blank until a name or certification is cleared for publication.
          </Reveal>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <Reveal as="h2" className="font-serif text-3xl md:text-5xl">
          What we do
        </Reveal>
        <Stagger className="mt-8 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <MotionCard
                tone={service.tone}
                eyebrow={service.shortLabel}
                title={service.cardLine}
                body={service.topics}
                href={service.href}
                action={`Explore ${service.name}`}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-white">
        <div className="container py-16 md:py-20">
          <Reveal as="h2" className="font-serif text-3xl md:text-4xl">
            Selected work
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-3 max-w-2xl text-muted-foreground">
            These entries describe systems Beak Insights has published. They are not anonymized client results, and they do not include metrics that were never reported.
          </Reveal>
          <Stagger className="mt-8 grid gap-6 md:grid-cols-2">
            {cases.slice(0, 2).map((item) => (
              <StaggerItem key={item.slug}>
                <article className="h-full border border-border bg-card p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {item.sector}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl">{item.title}</h3>
                  <p className="mt-3">{item.deck}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{item.outcome}</p>
                  <QuietLink href={`/work/${item.slug}`} className="mt-4 inline-flex min-h-11 items-center text-sm font-medium">
                    Read the case study
                  </QuietLink>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <Reveal as="h2" className="font-serif text-3xl md:text-4xl">
          From strategy through delivery
        </Reveal>
        <Stagger as="ol" className="mt-8 grid gap-6 md:grid-cols-5">
          {method.map((step) => (
            <StaggerItem as="li" key={step.name}>
              <span className="mark mb-3" aria-hidden="true" />
              <h3 className="font-serif text-xl">{step.name}</h3>
              <p className="mt-2 text-sm text-slate">{step.summary}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <Reveal as="h2" className="font-serif text-3xl md:text-4xl">
            Insights from our practitioners
          </Reveal>
          <Stagger className="mt-8 grid gap-6 lg:grid-cols-3">
            {insights.map((item) => (
              <StaggerItem key={item.slug}>
                <article className="h-full border-t-2 border-gold bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate">
                    {item.type} · {item.topicLabel}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                  <QuietLink href={`/insights/${item.slug}`} className="mt-4 inline-flex min-h-11 items-center text-sm font-medium">
                    Read insight
                  </QuietLink>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container flex flex-col gap-6 py-16 md:flex-row md:items-center md:justify-between">
          <Reveal as="h2" className="font-serif text-3xl text-white md:text-4xl">
            What are you trying to change?
          </Reveal>
          <QuietLink href="/contact" className="btn-primary">
            Talk to an advisor
          </QuietLink>
        </div>
      </section>
    </div>
  )
}
