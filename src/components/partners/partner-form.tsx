"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

const inputClass =
  "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

export function PartnerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    partnerType: "",
    region: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="partner-form" className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <CheckCircle className="mx-auto h-14 w-14 text-accent" />
          <h2 className="mt-6 font-heading text-2xl font-bold text-foreground md:text-3xl">
            Application Received
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Thank you for your interest in partnering with Prodigy Wildfire. A
            member of our team will review your application and be in touch
            within 2 business days.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="partner-form" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            Get Started
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Apply to Become a Partner
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Tell us about your business and how you would like to partner with
            Prodigy Wildfire Solutions.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded border border-border bg-card p-8 md:p-10"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Company Name
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
                Contact Name
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
                Email
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
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Partner Type
              </label>
              <select
                name="partnerType"
                required
                value={form.partnerType}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select a type</option>
                <option value="builder">Builder / Contractor</option>
                <option value="insurance">Insurance Company</option>
                <option value="hoa">HOA / Community Association</option>
                <option value="installer">Installer / Technician</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Region / Territory
              </label>
              <input
                type="text"
                name="region"
                placeholder="e.g. California, British Columbia, NSW"
                value={form.region}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your business and partnership interest..."
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 md:w-auto"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}
