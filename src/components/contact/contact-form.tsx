"use client"

import React from "react"

import { useState } from "react"
import { getInstallCount, getSprinklerCount, COUNTRIES } from "@/lib/stats"
import { Send, CheckCircle, MapPin, Mail, ChevronDown } from "lucide-react"

const serviceOptions = [
  "Residential Protection",
  "Commercial Protection",
  "Community / HOA",
  "Insurance Inquiry",
  "Other",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    propertyType: "",
    message: "",
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
              wildfire protection needs.
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
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Let{"'"}s Start a Conversation
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Whether you{"'"}re looking for a quote or have questions about our
              systems, we{"'"}re here to help.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <ContactInfoItem
                icon={<MapPin className="h-5 w-5" />}
                title="United States"
              />
              <ContactInfoItem
                icon={<MapPin className="h-5 w-5" />}
                title="Canada"
              />
              <ContactInfoItem
                icon={<MapPin className="h-5 w-5" />}
                title="Australia"
              />
              {/* TODO: Update install count manually as projects are completed */}
              <ContactInfoItem
                icon={<Send className="h-5 w-5" />}
                title={`${getInstallCount()}+ Installations Completed`}
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
              <div className="grid gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="First name"
                  />
                  <FormField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Last name"
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
                    placeholder="you@example.com"
                  />
                  <FormField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="mb-2 block text-sm font-medium text-foreground">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  >
                    <option value="">Select a country</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Optional details toggle */}
              <button
                type="button"
                onClick={() => setShowMore(!showMore)}
                className="mt-6 flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
              >
                <ChevronDown className={`h-4 w-4 transition-transform ${showMore ? "rotate-180" : ""}`} />
                {showMore ? "Hide additional details" : "Add more details (optional)"}
              </button>

              {showMore && (
                <div className="mt-6 grid gap-6">
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      What are you interested in?
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="propertyType"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Property Type
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {["Single Family Home", "Multi-Unit", "Commercial", "Estate / Ranch"].map(
                        (type) => (
                          <label
                            key={type}
                            className={`cursor-pointer rounded-sm border px-4 py-2.5 text-sm transition-colors ${
                              formData.propertyType === type
                                ? "border-accent bg-accent text-white"
                                : "border-border text-muted-foreground hover:border-accent/50"
                            }`}
                          >
                            <input
                              type="radio"
                              name="propertyType"
                              value={type}
                              checked={formData.propertyType === type}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            {type}
                          </label>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
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
              )}

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
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
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
    <div className="flex items-center gap-4 justify-center lg:justify-start">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
        {icon}
      </div>
      <p className="text-sm font-semibold text-foreground">{title}</p>
    </div>
  )
}
