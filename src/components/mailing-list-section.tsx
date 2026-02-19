"use client"

import React from "react"
import { useState } from "react"
import { Mail, CheckCircle } from "lucide-react"

const inputClass =
  "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"

export function MailingListSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-xl px-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
              <CheckCircle className="h-7 w-7 text-accent" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground">
              You&apos;re Subscribed!
            </h3>
            <p className="text-sm text-muted-foreground">
              Thank you for joining the Prodigy Wildfire Solutions mailing list.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-xl px-6 text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
            <Mail className="h-7 w-7 text-accent" />
          </div>
        </div>
        <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
          Stay Informed
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Join Our <span className="text-accent">Mailing List</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Get wildfire protection insights, seasonal preparedness tips, and
          product updates delivered to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 max-w-md text-left"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="ml-firstName"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                First Name <span className="text-accent">*</span>
              </label>
              <input
                id="ml-firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="ml-lastName"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Last Name <span className="text-accent">*</span>
              </label>
              <input
                id="ml-lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className={inputClass}
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="ml-email"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Email <span className="text-accent">*</span>
            </label>
            <input
              id="ml-email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>

          <div className="mt-6 text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
            >
              <Mail className="h-4 w-4" />
              Subscribe
            </button>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            No spam, ever. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </section>
  )
}
