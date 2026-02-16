"use client"

import { useState } from "react"
import { Globe, CheckCircle, Send } from "lucide-react"

const inputClass =
  "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"

export function InternationalForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    newsletter: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setForm({ ...form, [target.name]: target.checked })
    } else {
      setForm({ ...form, [target.name]: target.value })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <CheckCircle className="mx-auto h-14 w-14 text-accent" />
          <h2 className="mt-6 font-heading text-2xl font-bold text-foreground md:text-3xl">
            Thank You for Your Interest
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We{"'"}ve recorded your interest in wildfire protection in{" "}
            <strong>{form.country}</strong>. As we expand into new regions,
            we{"'"}ll be in touch to explore how Prodigy can protect your
            property.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
            <Globe className="h-7 w-7 text-accent" />
          </div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Expanding Worldwide
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Our teams currently operate in the United States, Canada, and
            Australia, but we{"'"}re actively expanding. Register your interest
            and we{"'"}ll reach out as we grow into your region.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded border border-border bg-card p-8 md:p-10"
        >
          <input type="hidden" name="source" value="International Inquiry" />

          <div className="grid gap-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Email <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Country <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="country"
                required
                placeholder="e.g. Spain, Greece, Portugal, South Africa"
                value={form.country}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={form.newsletter}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent"
              />
              <label
                htmlFor="newsletter"
                className="text-sm leading-relaxed text-muted-foreground"
              >
                Yes, I{"'"}d like to receive updates from Prodigy Wildfire
                including wildfire preparedness tips, product news, and expansion
                announcements. Unsubscribe anytime.
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            <Send className="h-4 w-4" />
            Register Your Interest
          </button>
        </form>
      </div>
    </section>
  )
}
