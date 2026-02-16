"use client"

import React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-xl border border-border bg-background p-12">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Send className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Message Sent
            </h3>
            <p className="mt-3 text-muted-foreground">
              Thank you for reaching out. Our team will get back to you as soon
              as possible.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Didn't find what you're looking for?"}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Reach out to us and we will get back to you as soon as possible.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-border bg-background p-6 shadow-sm sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" placeholder="Jane" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" placeholder="Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="jane@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Street address</Label>
              <Input id="address" placeholder="123 Main St" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="Vancouver" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="province">Province / State</Label>
              <Input id="province" placeholder="British Columbia" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input id="country" placeholder="Canada" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="postal">Postal / ZIP code</Label>
              <Input id="postal" placeholder="V6B 1A1" />
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us how we can help..."
              rows={4}
              required
            />
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <Checkbox id="assessment" className="mt-0.5" />
              <Label
                htmlFor="assessment"
                className="text-sm font-normal leading-relaxed text-muted-foreground"
              >
                Yes, I would like to book my free property assessment
              </Label>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox id="marketing" className="mt-0.5" />
              <Label
                htmlFor="marketing"
                className="text-sm font-normal leading-relaxed text-muted-foreground"
              >
                Yes, I would like to receive marketing communications, special
                promotions, and updates from Prodigy Wildfire.
              </Label>
            </div>
          </div>

          <Button type="submit" size="lg" className="mt-8 w-full">
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}
