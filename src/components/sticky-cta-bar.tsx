"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export function StickyCtaBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("cta-dismissed") === "true") {
      setDismissed(true);
      return;
    }

    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("cta-dismissed", "true");
  };

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-primary/95 backdrop-blur-sm border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <p className="text-sm font-medium text-primary-foreground/80 hidden sm:block">
            Protect your property from wildfire - Get a free assessment today.
          </p>
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <Link
              href="/quote"
              className="rounded bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
            >
              Get a Free Assessment
            </Link>
            <button
              type="button"
              onClick={handleDismiss}
              className="text-primary-foreground/50 transition-colors hover:text-primary-foreground"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
