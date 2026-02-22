"use client"

import React from "react"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

const inputClass =
  "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  })

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-foreground">
              Thank You!
            </h2>
            <p className="text-lg text-muted-foreground">
              Your message has been received. Our team will get back to you as
              soon as possible.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Didn't Find What You're "}
            <span className="text-accent">Looking</span>
            {" For?"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Reach out to us and we will get back to you as soon as possible.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded border border-border bg-card p-8 md:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                First Name <span className="text-accent">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="First name"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Last Name <span className="text-accent">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Last name"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Email <span className="text-accent">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className={inputClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="country"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Country <span className="text-accent">*</span>
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Message <span className="text-accent">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className={`${inputClass} resize-none`}
              placeholder="Tell us how we can help..."
            />
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
