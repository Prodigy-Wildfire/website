"use client";

import { useState } from "react";
import { MessageCircle, X, CheckCircle, Send } from "lucide-react";

const inputClass =
  "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (submitted) {
      setTimeout(() => {
        setSubmitted(false);
        setForm({ firstName: "", lastName: "", email: "", message: "" });
      }, 300);
    }
  };

  return (
    <>
      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-24 right-4 z-50 w-[340px] max-w-[calc(100vw-2rem)] overflow-hidden rounded border border-border bg-background shadow-xl sm:right-6">
          {/* Header */}
          <div className="flex items-center justify-between bg-primary px-5 py-4">
            <div>
              <p className="text-sm font-semibold text-primary-foreground">
                Leave Us a Message
              </p>
              <p className="text-xs text-primary-foreground/60">
                We&apos;ll get back to you within 24 hours
              </p>
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="text-primary-foreground/50 transition-colors hover:text-primary-foreground"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5">
            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <CheckCircle className="h-10 w-10 text-accent" />
                <p className="font-heading text-lg font-semibold text-foreground">
                  Message Sent
                </p>
                <p className="text-sm text-muted-foreground">
                  A Wildfire Protection Specialist will get back to you within
                  24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="First name"
                    required
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    }
                    className={inputClass}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    required
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    }
                    className={inputClass}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className={inputClass}
                />
                <textarea
                  placeholder="How can we help?"
                  required
                  rows={3}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
                >
                  Send Message
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform hover:scale-105 sm:right-6"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </>
  );
}
