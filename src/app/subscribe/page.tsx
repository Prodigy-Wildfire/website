"use client"

import React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, CheckCircle } from "lucide-react"

const inputClass =
  "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"

export default function SubscribePage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    stateProvince: "",
    country: "",
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary pt-32 pb-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
              Stay Informed
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
              Join Our Mailing List
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
              Get wildfire protection insights, seasonal preparedness tips, and
              product updates delivered straight to your inbox.
            </p>
          </div>
        </section>

        {/* Form */}
        {submitted ? (
          <section className="bg-muted py-20 md:py-28">
            <div className="mx-auto max-w-lg px-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <CheckCircle className="h-8 w-8 text-accent" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  You&apos;re Subscribed!
                </h2>
                <p className="text-lg text-muted-foreground">
                  Thank you for joining the Prodigy Wildfire Solutions mailing
                  list. We&apos;ll be in touch with the latest wildfire
                  protection insights.
                </p>
              </div>
            </div>
          </section>
        ) : (
          <section className="bg-muted py-20 md:py-28">
            <div className="mx-auto max-w-lg px-6">
              <form
                onSubmit={handleSubmit}
                className="rounded border border-border bg-card p-8 md:p-10"
              >
                <div className="mb-6 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                    <Mail className="h-7 w-7 text-accent" />
                  </div>
                </div>

                <div className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
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
                        required
                        value={formData.firstName}
                        onChange={handleChange}
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
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                        className={inputClass}
                      />
                    </div>
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
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="stateProvince"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      State / Province
                    </label>
                    <input
                      id="stateProvince"
                      name="stateProvince"
                      type="text"
                      value={formData.stateProvince}
                      onChange={handleChange}
                      placeholder="State or province"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a country</option>
                      <option value="us">United States</option>
                      <option value="ca">Canada</option>
                      <option value="au">Australia</option>
                      <option value="other">Other</option>
                    </select>
                    <p className="mt-1.5 text-xs text-muted-foreground">
                      Add your country for personalised content for your region.
                    </p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
                  >
                    <Mail className="h-4 w-4" />
                    Subscribe
                  </button>
                </div>

                <p className="mt-4 text-center text-xs text-muted-foreground">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
