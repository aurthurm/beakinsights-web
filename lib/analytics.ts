export type AnalyticsEvent =
  | "view_service"
  | "view_case_study"
  | "case_cta_click"
  | "view_insight"
  | "contact_start"
  | "contact_submit"
  | "contact_error"
  | "email_click"
  | "filter_resource"
  | "internal_search"

const CONSENT_KEY = "beak-consent"

export function readConsent(): "essential" | "analytics" | null {
  if (typeof window === "undefined") return null
  const value = window.localStorage.getItem(CONSENT_KEY)
  if (value === "analytics" || value === "essential") return value
  return null
}

export function writeConsent(value: "essential" | "analytics") {
  window.localStorage.setItem(CONSENT_KEY, value)
  window.dispatchEvent(new Event("beak-consent"))
}

export function track(event: AnalyticsEvent, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return
  if (readConsent() !== "analytics") return
  const safe: Record<string, string> = {}
  for (const [key, value] of Object.entries(params)) {
    if (key === "challenge" || key === "message" || key === "email") continue
    safe[key] = value.slice(0, 120)
  }
  window.dispatchEvent(new CustomEvent("beak-analytics", { detail: { event, params: safe } }))
}
