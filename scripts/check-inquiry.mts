import { validateInquiry } from "../lib/inquiry"

const base = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  organization: "Analytical Engines",
  need: "Healthcare",
  challenge: "We need a workflow map before configuring the laboratory system.",
  consent: true,
  honeypot: "",
}

const ok = validateInquiry(base)
const missing = validateInquiry({ ...base, name: "", consent: false, challenge: "short" })
const sensitive = validateInquiry({
  ...base,
  challenge: "Patient ID 44 and medical record details for the ward.",
})
const long = validateInquiry({ ...base, challenge: "x".repeat(1501) })

if (!ok.ok) throw new Error("expected valid")
if (missing.ok || !missing.fieldErrors.name || !missing.fieldErrors.consent) {
  throw new Error("expected field errors")
}
if (sensitive.ok || !sensitive.fieldErrors.challenge) throw new Error("expected sensitive rejection")
if (long.ok) throw new Error("expected length rejection")
console.log("inquiry checks passed")
