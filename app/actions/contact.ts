"use server"

import { validateInquiry } from "@/lib/inquiry"

export type ContactState = {
  status: "idle" | "success" | "error"
  message: string
  fieldErrors?: Record<string, string>
}

const received =
  "Thanks. Your message has been received. A member of our team will review the request and route it to the appropriate practice."

export async function submitInquiry(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const parsed = validateInquiry({
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    organization: String(formData.get("organization") || ""),
    need: String(formData.get("need") || ""),
    challenge: String(formData.get("challenge") || ""),
    consent: formData.get("consent") === "yes",
    honeypot: String(formData.get("company_website") || ""),
  })

  if (String(formData.get("company_website") || "").trim()) {
    return { status: "success", message: received }
  }

  if (!parsed.ok) {
    return { status: "error", message: parsed.message, fieldErrors: parsed.fieldErrors }
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL
  if (!webhook) {
    return {
      status: "error",
      message:
        "The enquiry form is not connected to a destination yet. Email info@beakinsights.com and we will reply directly.",
    }
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...parsed.value, source: "website-contact" }),
    })
    if (!response.ok) {
      return {
        status: "error",
        message: "We could not send your message. Try again, or email info@beakinsights.com.",
      }
    }
  } catch {
    return {
      status: "error",
      message: "We could not send your message. Try again, or email info@beakinsights.com.",
    }
  }

  return { status: "success", message: received }
}
