export type Enquiry = {
  name: string
  email: string
  organization: string
  need: string
  challenge: string
}

export async function sendEnquiry(enquiry: Enquiry): Promise<{ ok: true } | { ok: false; reason: string }> {
  const to = process.env.CONTACT_TO_EMAIL || "info@beakinsights.com"
  const webhook = process.env.CONTACT_WEBHOOK_URL
  const payload = {
    to,
    from: enquiry.email,
    subject: `Website enquiry: ${enquiry.need}`,
    name: enquiry.name,
    email: enquiry.email,
    organization: enquiry.organization,
    need: enquiry.need,
    challenge: enquiry.challenge,
    source: "website-contact",
  }

  if (webhook) {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    })
    if (!response.ok) return { ok: false, reason: "webhook" }
    return { ok: true }
  }

  const response = await fetch("https://formsubmit.co/ajax/" + encodeURIComponent(to), {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: enquiry.name,
      email: enquiry.email,
      organization: enquiry.organization,
      need: enquiry.need,
      message: enquiry.challenge,
      _subject: payload.subject,
      _template: "table",
      _captcha: "false",
    }),
  })
  if (!response.ok) return { ok: false, reason: "email" }
  return { ok: true }
}
