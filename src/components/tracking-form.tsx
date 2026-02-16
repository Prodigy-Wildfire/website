"use client"

import { useState } from "react"
import { Send, CheckCircle, Shield } from "lucide-react"
import type { TrackingPage } from "@/lib/tracking-pages"

const inputClass =
  "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"

export function TrackingForm({ page }: { page: TrackingPage }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    propertyAddress: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, send form data + hidden fields to your backend/CRM
    // The key tracking fields are: page.source, page.type, page.slug
    setSubmitted(true)
  }

  const headline = page.headline || "Get Your Free Assessment"
  const subtitle =
    page.subtitle ||
    (page.contactName
      ? `You've been connected with ${page.contactName}. Tell us about your property and we'll provide a personalised wildfire protection assessment.`
      : "Tell us about your property and our team will provide a personalised wildfire protection assessment within 24 hours.")

  if (submitted) {
    return (
      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <CheckCircle className="mx-auto h-14 w-14 text-accent" />
          <h2 className="mt-6 font-heading text-2xl font-bold text-foreground md:text-3xl">
            Thank You!
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Your inquiry has been received.{" "}
            {page.contactName
              ? `${page.contactName} will`
              : "A member of our team will"}{" "}
            be in touch within 24 hours to discuss your wildfire protection
            needs.
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
            <Shield className="h-7 w-7 text-accent" />
          </div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {headline}
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded border border-border bg-card p-8 md:p-10"
        >
          {/* Hidden tracking fields */}
          <input type="hidden" name="source" value={page.source} />
          <input type="hidden" name="sourceType" value={page.type} />
          <input type="hidden" name="sourceSlug" value={page.slug} />

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
            <div className="grid gap-5 sm:grid-cols-2">
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
                  Phone <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Property Address <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="propertyAddress"
                required
                placeholder="123 Main St, City, State/Province"
                value={form.propertyAddress}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Tell Us About Your Property
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="Property type, size, specific wildfire concerns..."
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            <Send className="h-4 w-4" />
            Get Your Free Assessment
          </button>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            By submitting this form, you agree to be contacted by Prodigy
            Wildfire Solutions regarding your inquiry.
          </p>
        </form>

        {/* Trust indicators */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          <span>Serving USA, Canada & Australia</span>
          <span className="hidden sm:inline">|</span>
          <span>Free Assessment</span>
          <span className="hidden sm:inline">|</span>
          <span>Response Within 24 Hours</span>
        </div>
      </div>
    </section>
  )
}
