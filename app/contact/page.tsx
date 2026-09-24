import { ContactForm } from "@/components/contact-form"
import { site } from "@/content/site"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Contact Beak Insights",
  description: "Talk to Beak Insights about an IT, informatics, data or healthcare consulting challenge.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <div className="container grid gap-12 py-12 md:py-16 lg:grid-cols-[minmax(0,36rem)_1fr]">
      <div>
        <h1 className="font-serif text-4xl md:text-6xl">What are you trying to change?</h1>
        <p className="mt-6">
          Tell us enough to understand the problem. We’ll route your enquiry to someone with the right domain experience.
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
      <aside className="space-y-10">
        <section>
          <h2 className="font-serif text-3xl">What happens next</h2>
          <p className="mt-4">
            A member of the team reviews the request and replies. Submitting the form does not start an engagement.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-3xl">Other ways to reach us</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a className="btn-primary" href={site.whatsappHref}>
                WhatsApp {site.whatsapp}
              </a>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  )
}
