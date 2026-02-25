"use client"

import React from "react"
import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Send, CheckCircle, ChevronDown } from "lucide-react"

const inputClass =
  "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"

const propertyTypes = ["Single Family Home", "Multi-Unit", "Commercial", "Estate / Ranch"]

const budgetRanges = [
  "Under $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
  "Not sure yet",
]

const timelines = [
  "As soon as possible",
  "Within 1 month",
  "Within 3 months",
  "Within 6 months",
  "Just exploring options",
]

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    stateProvince: "",
    country: "",
    referralSource: "",
    referralName: "",
    propertyType: "",
    budget: "",
    timeline: "",
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

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 md:min-h-[85vh]">
          <Image
            src="/images/engineering.png"
            alt="Wildfire protection engineering"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/60" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Get Your Free Wildfire Protection Quote
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
              Tell us about your property and our team will design a custom
              wildfire protection solution tailored to your needs.
            </p>
          </div>
        </section>

        {/* Form */}
        {submitted ? (
          <section className="bg-muted py-20 md:py-28">
            <div className="mx-auto max-w-2xl px-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <CheckCircle className="h-8 w-8 text-accent" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  Quote Request Received
                </h2>
                <p className="text-lg text-muted-foreground">
                  Thank you for your interest in Prodigy Wildfire Solutions. A
                  member of our team will be in touch within 24 hours to discuss
                  your wildfire protection needs and provide a custom quote.
                </p>
              </div>
            </div>
          </section>
        ) : (
          <section className="bg-muted py-20 md:py-28">
            <div className="mx-auto max-w-3xl px-6">
              <form
                onSubmit={handleSubmit}
                className="rounded border border-border bg-card p-8 md:p-10"
              >
                {/* Contact Details */}
                <h2 className="font-heading text-lg font-bold text-foreground">
                  Contact Details
                </h2>
                <div className="mt-4 grid gap-5 sm:grid-cols-2">
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
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Phone Number <span className="text-accent">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Country <span className="text-accent">*</span>
                    </label>
                    <select
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a country</option>
                      <option value="au">Australia</option>
                      <option value="ca">Canada</option>
                      <option value="us">United States</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="referralSource"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Where Did You Hear About Us?
                    </label>
                    <select
                      id="referralSource"
                      name="referralSource"
                      value={formData.referralSource}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select an option</option>
                      <option value="referral">Referral</option>
                      <option value="advertisement">Advertisement</option>
                      <option value="chat">Chat</option>
                      <option value="cold-call">Cold Call</option>
                      <option value="demo-day">Demo Day</option>
                      <option value="door-knocking">Door Knocking</option>
                      <option value="email-marketing">Email Marketing</option>
                      <option value="facebook">Facebook</option>
                      <option value="google">Google</option>
                      <option value="instagram">Instagram</option>
                      <option value="sign">Sign</option>
                      <option value="tiktok">TikTok</option>
                      <option value="trade-show">Trade Show</option>
                      <option value="website">Website</option>
                      <option value="youtube">YouTube</option>
                    </select>
                  </div>
                  {formData.referralSource === "referral" && (
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="referralName"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Referral Name
                      </label>
                      <input
                        id="referralName"
                        name="referralName"
                        type="text"
                        value={formData.referralName}
                        onChange={handleChange}
                        placeholder="Who referred you?"
                        className={inputClass}
                      />
                    </div>
                  )}
                </div>

                {/* Expand toggle */}
                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
                  >
                    <span>{showDetails ? "Hide" : "Add"} additional details</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        showDetails ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Collapsible additional details */}
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    showDetails
                      ? "mt-8 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    {/* Property Location */}
                    <h2 className="font-heading text-lg font-bold text-foreground">
                      Property Location
                    </h2>
                    <div className="mt-4 grid gap-5 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="address"
                          className="mb-2 block text-sm font-medium text-foreground"
                        >
                          Address
                        </label>
                        <input
                          id="address"
                          name="address"
                          type="text"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Street address"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="city"
                          className="mb-2 block text-sm font-medium text-foreground"
                        >
                          City
                        </label>
                        <input
                          id="city"
                          name="city"
                          type="text"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="City"
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
                    </div>

                    {/* Property & Project Details */}
                    <h2 className="mt-10 font-heading text-lg font-bold text-foreground">
                      Property & Project Details
                    </h2>
                    <div className="mt-4 grid gap-5">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-foreground">
                          Property Type
                        </label>
                        <div className="flex flex-wrap gap-3">
                          {propertyTypes.map((type) => (
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
                          ))}
                        </div>
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="budget"
                            className="mb-2 block text-sm font-medium text-foreground"
                          >
                            Budget Range
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className={inputClass}
                          >
                            <option value="">Select a range</option>
                            {budgetRanges.map((range) => (
                              <option key={range} value={range}>
                                {range}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="timeline"
                            className="mb-2 block text-sm font-medium text-foreground"
                          >
                            Timeline
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className={inputClass}
                          >
                            <option value="">Select a timeline</option>
                            {timelines.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
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
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe your property, location, and any specific wildfire concerns..."
                          className={`${inputClass} resize-none`}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
                  >
                    <Send className="h-4 w-4" />
                    Get Your Free Quote
                  </button>
                </div>

                <p className="mt-4 text-center text-xs text-muted-foreground">
                  By submitting this form, you agree to be contacted by Prodigy
                  Wildfire Solutions regarding your inquiry.
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
