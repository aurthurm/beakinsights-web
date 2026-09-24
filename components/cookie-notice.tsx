"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { readConsent, writeConsent } from "@/lib/analytics"

export function CookieNotice() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(readConsent() === null)
  }, [])

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card p-4 shadow-sm"
    >
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-3xl text-sm">
          This site stores your cookie choice in the browser. Analytics events stay off until you allow them, and enquiry text is never included.{" "}
          <Link href="/legal/cookies" className="underline underline-offset-4">
            Cookie notice
          </Link>
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="btn-secondary"
            onClick={() => {
              writeConsent("essential")
              setVisible(false)
            }}
          >
            Essential only
          </button>
          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              writeConsent("analytics")
              setVisible(false)
            }}
          >
            Allow analytics
          </button>
        </div>
      </div>
    </div>
  )
}
