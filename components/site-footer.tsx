"use client"

import Link from "next/link"
import { cases } from "@/content/cases"
import { legalLinks, site } from "@/content/site"
import { services } from "@/content/services"
import { track } from "@/lib/analytics"

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div>
          <p className="inline-flex items-center gap-2 font-serif text-xl text-white">
            <span className="mark" aria-hidden="true" />
            Beak Insights
          </p>
          <p className="mt-3 text-sm text-on-ink">
            Technology, informatics, and healthcare consulting from strategy through implementation.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-gold">Services</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={service.href} className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-gold">Work</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {cases.map((item) => (
              <li key={item.slug}>
                <Link href={`/work/${item.slug}`} className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-gold">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-11 items-center underline-offset-4 hover:underline"
                onClick={() => track("email_click", { page: "footer" })}
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex min-h-11 items-center underline-offset-4 hover:underline"
                onClick={() => track("phone_click", { page: "footer" })}
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.whatsappHref}
                className="inline-flex min-h-11 items-center underline-offset-4 hover:underline"
              >
                WhatsApp {site.whatsapp}
              </a>
            </li>
            <li>
              <Link href="/contact" className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">
                Talk to an advisor
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container flex flex-col gap-3 py-6 text-sm text-on-ink sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Beak Insights.</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/search" className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
