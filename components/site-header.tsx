"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useId, useRef, useState } from "react"
import { services } from "@/content/services"
import { nav } from "@/content/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const panelId = useId()
  const drawerId = useId()

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false)
        menuButtonRef.current?.focus()
      }
      if (event.key !== "Tab" || !drawerRef.current) return
      const items = drawerRef.current.querySelectorAll<HTMLElement>("a, button")
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener("keydown", onKey)
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!servicesOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false)
    }
    const onClick = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) setServicesOpen(false)
    }
    document.addEventListener("keydown", onKey)
    document.addEventListener("mousedown", onClick)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("mousedown", onClick)
    }
  }, [servicesOpen])

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <nav aria-label="Primary" className="container flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" className="inline-flex items-center gap-2 font-serif text-xl tracking-tight text-ink no-underline md:text-2xl">
          <span className="mark" aria-hidden="true" />
          Beak Insights
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <div className="relative" ref={servicesRef}>
            <div className="flex items-center gap-1">
              <Link
                href="/what-we-do"
                className={cn(
                  "text-sm font-medium",
                  pathname.startsWith("/what-we-do") ? "text-foreground" : "text-muted-foreground"
                )}
                aria-current={pathname.startsWith("/what-we-do") ? "page" : undefined}
              >
                What we do
              </Link>
              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center text-sm"
                aria-expanded={servicesOpen}
                aria-controls={panelId}
                onClick={() => setServicesOpen((open) => !open)}
              >
                <span className="sr-only">Show services</span>
                <span aria-hidden="true">{servicesOpen ? "–" : "+"}</span>
              </button>
            </div>
            {servicesOpen ? (
              <div
                id={panelId}
                className="absolute left-0 top-full z-50 mt-3 w-[36rem] border border-border bg-card p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  What we do
                </p>
                <ul className="mt-4 space-y-4">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link href={service.href} className="block min-h-11" onClick={() => setServicesOpen(false)}>
                        <span className="font-medium">{service.name}</span>
                        <span className="mt-1 block text-sm text-muted-foreground">{service.navSummary}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/what-we-do" className="mt-4 inline-flex min-h-11 items-center text-sm font-medium">
                  View all services
                </Link>
              </div>
            ) : null}
          </div>
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "inline-flex min-h-11 items-center text-sm font-medium",
                pathname.startsWith(item.href) ? "text-foreground" : "text-muted-foreground"
              )}
              aria-current={pathname.startsWith(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary"
          >
            Talk to an advisor
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls={drawerId}
          onClick={() => setMobileOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <span aria-hidden="true">Menu</span>
        </button>
      </nav>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-foreground/40"
            aria-label="Close menu"
            onClick={() => {
              setMobileOpen(false)
              menuButtonRef.current?.focus()
            }}
          />
          <div
            ref={drawerRef}
            id={drawerId}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="relative flex h-full w-full max-w-sm flex-col overflow-y-auto bg-background p-5"
          >
            <div className="flex items-center justify-between">
              <p className="font-serif text-xl">Beak Insights</p>
              <button
                ref={closeButtonRef}
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center"
                onClick={() => {
                  setMobileOpen(false)
                  menuButtonRef.current?.focus()
                }}
              >
                Close
              </button>
            </div>
            <div className="mt-8 flex flex-col">
              <div className="border-b border-border py-2">
                <div className="flex items-center justify-between gap-2">
                  <Link href="/what-we-do" className="inline-flex min-h-11 items-center font-medium">
                    What we do
                  </Link>
                  <button
                    type="button"
                    className="inline-flex min-h-11 min-w-11 items-center justify-center"
                    aria-expanded={mobileServicesOpen}
                    onClick={() => setMobileServicesOpen((open) => !open)}
                  >
                    <span className="sr-only">Show services</span>
                    {mobileServicesOpen ? "–" : "+"}
                  </button>
                </div>
                {mobileServicesOpen ? (
                  <ul className="mb-3 space-y-2 pl-3">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link href={service.href} className="block py-2 text-sm">
                          <span className="font-medium">{service.name}</span>
                          <span className="mt-1 block text-muted-foreground">{service.navSummary}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              {nav.slice(1).map((item) => (
                <Link key={item.href} href={item.href} className="inline-flex min-h-12 items-center border-b border-border font-medium">
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-primary"
              >
                Talk to an advisor
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
