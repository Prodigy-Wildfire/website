"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Send, CheckCircle, MapPin, Mail, ChevronDown } from "lucide-react"
import { captureTrackingData, fireLeadEvents, type TrackingData } from "@/lib/tracking"

const industryOptions = [
  "Resorts & Tourism",
  "Critical Infrastructure",
  "Hotels & Hospitality",
  "Educational Institution",
  "Government & Public Facilities",
  "Commercial Real Estate",
  "Other",
]

const timelineOptions = [
  "Urgent - active fire season",
  "Within 3 months",
  "Within 6 months",
  "Within 12 months",
  "Planning phase - no rush",
]

export function CommercialForm() {
  const [submitted, setSubmitted] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [trackingData, setTrackingData] = useState<TrackingData>({
    ref: "", utm_source: "", utm_medium: "", utm_campaign: "", utm_content: "",
  })
  const [formData, setFormData] = useState({
    contactName: "",
    companyName: "",
    email: "",
    phone: "",
    jobTitle: "",
    industry: "",
    numberOfSites: "",
    numberOfStructures: "",
    locations: "",
    timeline: "",
    insuranceRequirements: "",
    message: "",
  })

  useEffect(() => {
    setTrackingData(captureTrackingData())
  }, [])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    fireLeadEvents("commercial_consultation_form", trackingData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="bg-muted py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-foreground">
              Thank You!
            </h2>
            <p className="text-lg text-muted-foreground">
              Your commercial inquiry has been received. A member of our
              commercial team will be in touch within 24 hours with a tailored
              proposal for your organisation.
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
              Request a Commercial Consultation
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Tell us about your property portfolio and our commercial team will
              schedule a consultation to discuss system design, installation
              timeline, and multi-year maintenance options.
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
              className="rounded-sm border border-border bg-background p-8 shadow-sm md:p-10"
            >
              {/* Hidden tracking fields */}
              <input type="hidden" name="ref" value={trackingData.ref} />
              <input type="hidden" name="utm_source" value={trackingData.utm_source} />
              <input type="hidden" name="utm_medium" value={trackingData.utm_medium} />
              <input type="hidden" name="utm_campaign" value={trackingData.utm_campaign} />
              <input type="hidden" name="utm_content" value={trackingData.utm_content} />

              <div className="grid gap-6">
                {/* Contact details */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    label="Contact Name"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                  <FormField
                    label="Company / Organisation"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    placeholder="Company name"
                  />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                  />
                  <FormField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your phone number"
                  />
                </div>
                <FormField
                  label="Job Title"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="e.g. Facilities Manager, Operations Director"
                />

                {/* Property details */}
                <div className="border-t border-border pt-6">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                    Property Details
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="industry"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Industry <span className="ml-1 text-primary">*</span>
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select your industry</option>
                    {industryOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    label="Number of Sites"
                    name="numberOfSites"
                    value={formData.numberOfSites}
                    onChange={handleChange}
                    placeholder="e.g. 1, 3, 10+"
                  />
                  <FormField
                    label="Number of Structures"
                    name="numberOfStructures"
                    value={formData.numberOfStructures}
                    onChange={handleChange}
                    placeholder="e.g. 5 buildings"
                  />
                </div>
                <FormField
                  label="Location(s)"
                  name="locations"
                  value={formData.locations}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Banff AB, Lake Tahoe CA, Blue Mountains NSW"
                />

                {/* Additional details toggle */}
                <button
                  type="button"
                  onClick={() => setShowMore(!showMore)}
                  className="flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  <ChevronDown className={`h-4 w-4 transition-transform ${showMore ? "rotate-180" : ""}`} />
                  {showMore ? "Hide additional details" : "Add timeline, insurance & project details (optional)"}
                </button>

                {showMore && (
                  <>
                    <div>
                      <label
                        htmlFor="timeline"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">Select a timeline</option>
                        {timelineOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="insuranceRequirements"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Insurance or Compliance Requirements
                      </label>
                      <textarea
                        id="insuranceRequirements"
                        name="insuranceRequirements"
                        value={formData.insuranceRequirements}
                        onChange={handleChange}
                        rows={3}
                        className="w-full resize-none rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Any specific insurance requirements, municipal codes, or compliance standards your property must meet..."
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Project Description
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full resize-none rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Tell us about your property, specific concerns, existing fire protection measures, water supply infrastructure..."
                      />
                    </div>
                  </>
                )}
              </div>

              <button
                type="submit"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded bg-accent px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
              >
                <Send className="h-4 w-4" />
                Request a Commercial Consultation
              </button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                By submitting this form, you agree to be contacted by Prodigy
                Wildfire Solutions regarding your commercial inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-foreground">
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </div>
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
