import { needs, type Need } from "../content/site"

export type InquiryResult =
  | { ok: true; value: { name: string; email: string; organization: string; need: Need; challenge: string } }
  | { ok: false; message: string; fieldErrors: Record<string, string> }

const sensitive =
  /\b\d{3}-\d{2}-\d{4}\b|\b(?:mrn|nhs\s*number|patient\s+id|medical\s+record)\b|\b(?:4\d{3}[\s-]?){3}\d{4}\b/i

export function validateInquiry(input: {
  name: string
  email: string
  organization: string
  need: string
  challenge: string
  consent: boolean
  honeypot: string
}): InquiryResult {
  if (input.honeypot.trim()) {
    return {
      ok: true,
      value: {
        name: input.name,
        email: input.email,
        organization: input.organization,
        need: "Other",
        challenge: "",
      },
    }
  }

  const name = input.name.trim()
  const email = input.email.trim()
  const organization = input.organization.trim()
  const need = input.need.trim()
  const challenge = input.challenge.trim()
  const fieldErrors: Record<string, string> = {}

  if (name.length < 2) fieldErrors.name = "Enter your name."
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fieldErrors.email = "Enter a work email address."
  if (organization.length < 2) fieldErrors.organization = "Enter your organization."
  if (!needs.includes(need as Need)) fieldErrors.need = "Select what we can help with."
  if (challenge.length < 20) fieldErrors.challenge = "Describe the challenge in at least a few sentences."
  if (challenge.length > 1500) fieldErrors.challenge = "Keep the description within 1,500 characters."
  if (sensitive.test(challenge) || sensitive.test(name)) {
    fieldErrors.challenge =
      "Remove patient, clinical, or other sensitive personal information and submit again."
  }
  if (!input.consent) fieldErrors.consent = "Confirm you agree to the privacy notice."

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, message: "Check the highlighted fields and try again.", fieldErrors }
  }

  return {
    ok: true,
    value: { name, email, organization, need: need as Need, challenge },
  }
}
