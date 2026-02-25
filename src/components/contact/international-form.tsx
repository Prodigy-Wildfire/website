"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Send, CheckCircle, MapPin, Mail } from "lucide-react"
import { captureTrackingData, fireLeadEvents, type TrackingData } from "@/lib/tracking"

const inputClass =
  "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"

export function InternationalForm() {
  const [submitted, setSubmitted] = useState(false)
  const [trackingData, setTrackingData] = useState<TrackingData>({
    ref: "", utm_source: "", utm_medium: "", utm_campaign: "", utm_content: "",
  })
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    newsletter: false,
  })

  useEffect(() => {
    setTrackingData(captureTrackingData())
  }, [])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const target = e.target
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setForm({ ...form, [target.name]: target.checked })
    } else {
      setForm({ ...form, [target.name]: target.value })
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    fireLeadEvents("international_inquiry_form", trackingData)
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
              Thank You for Your Interest
            </h2>
            <p className="text-lg text-muted-foreground">
              We{"'"}ve recorded your interest in wildfire protection in{" "}
              <strong>{form.country}</strong>. As we expand into new regions,
              we{"'"}ll be in touch to explore how Prodigy can protect your
              property.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Sidebar */}
          <div className="lg:col-span-2 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Expanding Worldwide
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our teams currently operate in the USA, Canada, and
              Australia, but we{"'"}re actively expanding. Register your interest
              and we{"'"}ll reach out as we grow into your region.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <ContactInfoItem
                icon={<MapPin className="h-5 w-5" />}
                title="Canada · USA · Australia"
              />
              <ContactInfoItem
                icon={<Mail className="h-5 w-5" />}
                title="sales@prodigywildfire.com"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded border border-border bg-background p-8 shadow-sm md:p-10"
            >
              <input type="hidden" name="source" value="International Inquiry" />
              <input type="hidden" name="ref" value={trackingData.ref} />
              <input type="hidden" name="utm_source" value={trackingData.utm_source} />
              <input type="hidden" name="utm_medium" value={trackingData.utm_medium} />
              <input type="hidden" name="utm_campaign" value={trackingData.utm_campaign} />
              <input type="hidden" name="utm_content" value={trackingData.utm_content} />

              <div className="grid gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                      Name <span className="ml-1 text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                      Email <span className="ml-1 text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="mb-2 block text-sm font-medium text-foreground">
                      Country <span className="ml-1 text-accent">*</span>
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      required
                      placeholder="e.g. Spain, Greece, Portugal, South Africa"
                      value={form.country}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your property and wildfire protection needs..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <div className="flex items-start gap-3">
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

              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
                >
                  <Send className="h-4 w-4" />
                  Register Your Interest
                </button>
              </div>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                By submitting this form, you agree to be contacted by Prodigy
                Wildfire Solutions regarding your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactInfoItem({
  icon,
  title,
}: {
  icon: React.ReactNode
  title: string
}) {
  return (
    <div className="flex items-center gap-4 justify-center">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
        {icon}
      </div>
      <p className="text-sm font-semibold text-foreground">{title}</p>
    </div>
  )
}
