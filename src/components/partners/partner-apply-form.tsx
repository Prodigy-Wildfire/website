"use client"

import { useState } from "react"
import { CheckCircle, Send } from "lucide-react"

const inputClass =
  "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"

interface PartnerConfig {
  slug: string
  title: string
  subtitle: string
  extraFields: {
    label: string
    name: string
    type: "text" | "select" | "textarea"
    placeholder?: string
    required?: boolean
    options?: string[]
  }[]
}

const partnerConfigs: Record<string, PartnerConfig> = {
  builder: {
    slug: "builder",
    title: "Builders & Contractors",
    subtitle:
      "Integrate Prodigy wildfire protection systems into your new builds and renovation projects.",
    extraFields: [
      {
        label: "License / Registration Number",
        name: "licenseNumber",
        type: "text",
        placeholder: "e.g. CSLB #123456",
      },
      {
        label: "Project Types",
        name: "projectTypes",
        type: "select",
        required: true,
        options: ["Residential", "Commercial", "Both Residential & Commercial"],
      },
      {
        label: "Annual Build Volume",
        name: "annualVolume",
        type: "select",
        options: [
          "1-5 projects per year",
          "6-20 projects per year",
          "21-50 projects per year",
          "50+ projects per year",
        ],
      },
      {
        label: "Current Fire Protection Methods",
        name: "currentMethods",
        type: "textarea",
        placeholder:
          "Do you currently offer any wildfire or fire protection services? If so, describe them...",
      },
    ],
  },
  insurance: {
    slug: "insurance",
    title: "Insurance Companies",
    subtitle:
      "Reduce wildfire risk exposure and offer policyholders access to proven exterior sprinkler systems.",
    extraFields: [
      {
        label: "Company Type",
        name: "companyType",
        type: "select",
        required: true,
        options: [
          "Property & Casualty Insurer",
          "Managing General Agent (MGA)",
          "Insurance Broker",
          "Reinsurer",
          "Other",
        ],
      },
      {
        label: "Policyholders in Fire-Prone Zones (Approx.)",
        name: "policyholderCount",
        type: "select",
        options: [
          "Under 500",
          "500 - 2,000",
          "2,000 - 10,000",
          "10,000 - 50,000",
          "50,000+",
        ],
      },
      {
        label: "States / Provinces / Regions Covered",
        name: "coverageRegions",
        type: "text",
        required: true,
        placeholder: "e.g. California, Colorado, British Columbia, NSW",
      },
      {
        label: "Current Wildfire Risk Mitigation Programs",
        name: "currentPrograms",
        type: "textarea",
        placeholder:
          "Describe any existing wildfire mitigation programs, incentives, or policyholder requirements...",
      },
    ],
  },
  hoa: {
    slug: "hoa",
    title: "HOAs & Communities",
    subtitle:
      "Protect entire neighbourhoods with coordinated wildfire defence programs designed for scale.",
    extraFields: [
      {
        label: "Community / HOA Name",
        name: "communityName",
        type: "text",
        required: true,
        placeholder: "e.g. Eagle Ridge Estates HOA",
      },
      {
        label: "Number of Properties",
        name: "propertyCount",
        type: "select",
        required: true,
        options: [
          "Under 25",
          "25 - 100",
          "100 - 500",
          "500 - 1,000",
          "1,000+",
        ],
      },
      {
        label: "Community Location",
        name: "communityLocation",
        type: "text",
        required: true,
        placeholder: "e.g. Lake Tahoe, CA or Canmore, AB",
      },
      {
        label: "Current Fire Protection Measures",
        name: "currentMeasures",
        type: "textarea",
        placeholder:
          "Describe any existing community fire protection, FireSmart/Firewise programs, or defensible space requirements...",
      },
    ],
  },
  installer: {
    slug: "installer",
    title: "Certified Installers",
    subtitle:
      "Join our growing installer network with full training, certification, and ongoing support.",
    extraFields: [
      {
        label: "Trade Certifications / Licenses",
        name: "certifications",
        type: "text",
        required: true,
        placeholder: "e.g. Licensed Plumber, Sprinkler Fitter, HVAC Tech",
      },
      {
        label: "Years of Experience",
        name: "experience",
        type: "select",
        required: true,
        options: [
          "Under 2 years",
          "2 - 5 years",
          "5 - 10 years",
          "10 - 20 years",
          "20+ years",
        ],
      },
      {
        label: "Installation Specialties",
        name: "specialties",
        type: "select",
        options: [
          "Plumbing & Water Systems",
          "Fire Sprinkler Systems",
          "HVAC & Mechanical",
          "General Contracting",
          "Roofing",
          "Other",
        ],
      },
      {
        label: "Service Area",
        name: "serviceArea",
        type: "text",
        placeholder: "e.g. Greater Denver metro, 100km radius",
      },
    ],
  },
}

export function PartnerApplyForm({ partnerType }: { partnerType: string }) {
  const config = partnerConfigs[partnerType]
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<Record<string, string>>({
    partnerType: config?.slug || "",
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    region: "",
    message: "",
  })

  if (!config) return null

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
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
            Application Received
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Thank you for your interest in the{" "}
            <strong>{config.title}</strong> program. A member of our
            partnerships team will review your application and be in touch
            within 2 business days.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            {config.title}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Apply to Partner With Prodigy
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {config.subtitle}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded border border-border bg-card p-8 md:p-10"
        >
          {/* Hidden partner type field */}
          <input type="hidden" name="partnerType" value={config.slug} />

          {/* Common fields */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Contact Information
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Company Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                required
                value={form.companyName}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Contact Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="contactName"
                required
                value={form.contactName}
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
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div className="md:col-span-2">
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Region / Territory <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="region"
                required
                placeholder="e.g. California, British Columbia, NSW"
                value={form.region}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          {/* Partner-specific fields */}
          <div className="mt-8 border-t border-border pt-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {config.title} Details
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {config.extraFields.map((field) => {
                const isFullWidth = field.type === "textarea"
                return (
                  <div
                    key={field.name}
                    className={isFullWidth ? "md:col-span-2" : ""}
                  >
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      {field.label}
                      {field.required && (
                        <span className="text-primary"> *</span>
                      )}
                    </label>
                    {field.type === "select" ? (
                      <select
                        name={field.name}
                        required={field.required}
                        value={form[field.name] || ""}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select an option</option>
                        {field.options?.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        rows={3}
                        placeholder={field.placeholder}
                        value={form[field.name] || ""}
                        onChange={handleChange}
                        className={`${inputClass} resize-none`}
                      />
                    ) : (
                      <input
                        type="text"
                        name={field.name}
                        required={field.required}
                        placeholder={field.placeholder}
                        value={form[field.name] || ""}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Message */}
          <div className="mt-5">
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Additional Information
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Anything else you'd like us to know about your business or partnership interest..."
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90 md:w-auto"
          >
            <Send className="h-4 w-4" />
            Submit Application
          </button>

          <p className="mt-4 text-xs text-muted-foreground">
            By submitting this form, you agree to be contacted by Prodigy
            Wildfire Solutions regarding your partnership application.
          </p>
        </form>
      </div>
    </section>
  )
}
