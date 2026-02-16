"use client";

import { useState } from "react";
import { BookOpen, CheckCircle, Download } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function LeadMagnetSection() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-primary py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-accent/10">
              <BookOpen className="h-10 w-10 text-accent" />
            </div>
            <div className="flex-1">
              <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
                Free Download
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-primary-foreground md:text-3xl">
                The Homeowner&apos;s Guide to Wildfire Preparedness
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
                Everything you need to know about protecting your property from
                wildfire - from understanding ember attack risks to choosing the
                right exterior sprinkler system. Trusted by homeowners across the
                USA, Canada, and Australia.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setDialogOpen(true)}
              className="shrink-0 flex items-center gap-2 rounded bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <Download className="h-4 w-4" />
              Download Free Guide
            </button>
          </div>
        </div>
      </section>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <CheckCircle className="h-12 w-12 text-accent" />
              <DialogTitle className="font-heading text-xl font-bold">
                Check Your Inbox
              </DialogTitle>
              <p className="text-sm text-muted-foreground">
                We&apos;ve sent The Homeowner&apos;s Guide to Wildfire
                Preparedness to <strong>{email}</strong>. If you don&apos;t see
                it, check your spam folder.
              </p>
              <button
                type="button"
                onClick={() => {
                  setDialogOpen(false);
                  setTimeout(() => {
                    setSubmitted(false);
                    setEmail("");
                  }, 300);
                }}
                className="mt-2 rounded bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-xl font-bold">
                  Download Your Free Guide
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">
                  Enter your email and we&apos;ll send you The Homeowner&apos;s
                  Guide to Wildfire Preparedness - free.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  <Download className="h-4 w-4" />
                  Send Me the Guide
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
