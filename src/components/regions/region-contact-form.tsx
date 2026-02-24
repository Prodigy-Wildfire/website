"use client"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

interface RegionContactFormProps {
  regionName: string
  regionLabel?: string
  country?: string
}

export function RegionContactForm({ regionName, regionLabel = "Province", country = "Canada" }: RegionContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="bg-muted py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-foreground">
              Thank You!
            </h2>
            <p className="text-lg text-muted-foreground">
              Your inquiry has been received. A member of the Prodigy Wildfire
              Solutions team will be in touch within 24 hours to discuss your
              wildfire protection needs in {regionName}.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-muted py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Get Protected in {regionName}
          </h2>
          <p className="mt-4 text-muted-foreground">
            Speak with our team about wildfire protection for your property.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded border border-border bg-background p-8 shadow-sm md:p-10"
        >
          <div className="grid gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-foreground">
                  First Name <span className="ml-1 text-accent">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="First name"
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-foreground">
                  Last Name <span className="ml-1 text-accent">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Last name"
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email Address <span className="ml-1 text-accent">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                  Phone Number <span className="ml-1 text-accent">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your phone number"
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="region" className="mb-2 block text-sm font-medium text-foreground">
                  {regionLabel}
                </label>
                <input
                  id="region"
                  name="region"
                  type="text"
                  value={regionName}
                  readOnly
                  className="w-full rounded-sm border border-border bg-muted px-4 py-3 text-sm text-muted-foreground cursor-not-allowed"
                />
              </div>
              <div>
                <label htmlFor="country" className="mb-2 block text-sm font-medium text-foreground">
                  Country
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  value={country}
                  readOnly
                  className="w-full rounded-sm border border-border bg-muted px-4 py-3 text-sm text-muted-foreground cursor-not-allowed"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                Tell Us About Your Property
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full resize-none rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Describe your property, location, and any specific wildfire concerns..."
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
            >
              <Send className="h-4 w-4" />
              Get Your Free Assessment
            </button>
          </div>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            By submitting this form, you agree to be contacted by Prodigy
            Wildfire Solutions regarding your inquiry.
          </p>
        </form>
      </div>
    </section>
  )
}
