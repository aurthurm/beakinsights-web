"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { submitInquiry, type ContactState } from "@/app/actions/contact"
import { needs } from "@/content/site"
import { track } from "@/lib/analytics"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      className="btn-primary disabled:opacity-60"
      disabled={pending}
    >
      {pending ? "Sending" : "Start a conversation"}
    </button>
  )
}

export function ContactForm() {
  const [state, action] = useFormState(submitInquiry, {
    status: "idle",
    message: "",
  } satisfies ContactState)
  const [need, setNeed] = useState("IT")
  const started = useRef(false)

  useEffect(() => {
    if (state.status === "error") track("contact_error", { page: "contact", field: "form" })
    if (state.status === "success") track("contact_submit", { source_page: "contact", selected_need: need })
  }, [state, need])

  function onStart() {
    if (started.current) return
    started.current = true
    track("contact_start", { source_page: "contact", service: need })
  }

  if (state.status === "success") {
    return (
      <div role="status" className="border border-border bg-card p-6">
        <h2 className="font-serif text-3xl">Message received</h2>
        <p className="mt-4">{state.message}</p>
        <p className="mt-4 text-sm text-muted-foreground">
          If you want more context while you wait, read how a laboratory information path was published in{" "}
          <Link href="/work/felicity-lims" className="underline underline-offset-4">
            Felicity LIMS
          </Link>
          .
        </p>
      </div>
    )
  }

  return (
    <form action={action} className="space-y-5" noValidate onFocus={onStart}>
      {state.status === "error" ? (
        <p role="alert" className="border border-destructive px-4 py-3 text-sm text-destructive">
          {state.message}
        </p>
      ) : null}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      <Field label="Name" name="name" error={state.fieldErrors?.name}>
        <input id="name" name="name" required autoComplete="name" className="field" />
      </Field>
      <Field label="Work email" name="email" error={state.fieldErrors?.email}>
        <input id="email" name="email" type="email" required autoComplete="email" className="field" />
      </Field>
      <Field label="Organization" name="organization" error={state.fieldErrors?.organization}>
        <input id="organization" name="organization" required autoComplete="organization" className="field" />
      </Field>
      <Field label="What can we help with?" name="need" error={state.fieldErrors?.need}>
        <select id="need" name="need" className="field" value={need} onChange={(event) => setNeed(event.target.value)}>
          {needs.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </Field>
      <Field
        label="Briefly describe the challenge"
        name="challenge"
        error={state.fieldErrors?.challenge}
        hint="1,500 characters at most."
      >
        <textarea id="challenge" name="challenge" required maxLength={1500} rows={6} className="field" />
      </Field>
      {need === "Healthcare" ? (
        <p className="border border-gold/50 bg-sand px-4 py-3 text-sm text-ink">
          Please do not include patient, clinical or other sensitive personal information in this form.
        </p>
      ) : null}
      <div>
        <label className="flex items-start gap-3 text-sm">
          <input type="checkbox" name="consent" value="yes" className="mt-1 h-5 w-5" />
          <span>
            I agree that Beak Insights may use these details to reply, as described in the{" "}
            <Link href="/legal/privacy" className="underline underline-offset-4">
              privacy notice
            </Link>
            .
          </span>
        </label>
        {state.fieldErrors?.consent ? (
          <p className="mt-2 text-sm text-destructive">{state.fieldErrors.consent}</p>
        ) : null}
      </div>
      <SubmitButton />
    </form>
  )
}

function Field({
  label,
  name,
  error,
  hint,
  children,
}: {
  label: string
  name: string
  error?: string
  hint?: string
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>
      {hint ? <p id={`${name}-hint`} className="mt-1 text-sm text-muted-foreground">{hint}</p> : null}
      <div className="mt-2">{children}</div>
      {error ? <p className="mt-2 text-sm text-destructive">{error}</p> : null}
    </div>
  )
}
