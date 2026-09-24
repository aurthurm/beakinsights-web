"use server"

import { validateInquiry } from "@/lib/inquiry"
import { sendEnquiry } from "@/lib/send-enquiry"

export type ContactState = {
  status: "idle" | "success" | "error"
  message: string
  fieldErrors?: Record<string, string>
}

const received =
  "Thanks. Your message has been sent to info@beakinsights.com. A member of our team will review the request and route it to the appropriate practice."

export async function submitInquiry(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const honeypot = String(formData.get("company_website") || "")
  const parsed = validateInquiry({
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    organization: String(formData.get("organization") || ""),
    need: String(formData.get("need") || ""),
    challenge: String(formData.get("challenge") || ""),
    consent: formData.get("consent") === "yes",
    honeypot,
  })

  if (honeypot.trim()) return { status: "success", message: received }
  if (!parsed.ok) {
    return { status: "error", message: parsed.message, fieldErrors: parsed.fieldErrors }
  }

  try {
    const sent = await sendEnquiry(parsed.value)
    if (!sent.ok) {
      return {
        status: "error",
        message: "We could not send your message by email. Try again, email info@beakinsights.com, or use WhatsApp.",
      }
    }
  } catch {
    return {
      status: "error",
      message: "We could not send your message by email. Try again, email info@beakinsights.com, or use WhatsApp.",
    }
  }

  return { status: "success", message: received }
}
