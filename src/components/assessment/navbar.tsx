"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-sm bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <span className="text-foreground font-semibold text-lg tracking-tight">
              PRODIGY
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/#how-it-works"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            How It Works
          </Link>
          <Link
            href="/#protection"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Protection
          </Link>
          <Link
            href="/#why-prodigy"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Why Prodigy
          </Link>
          <Link
            href="https://website-ten-lilac-49.vercel.app/assessment"
            className="rounded-sm bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Take the Quiz
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/#how-it-works"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/#protection"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Protection
            </Link>
            <Link
              href="/#why-prodigy"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Why Prodigy
            </Link>
            <Link
              href="https://website-ten-lilac-49.vercel.app/assessment"
              className="rounded-sm bg-primary px-5 py-2 text-center text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              onClick={() => setMobileOpen(false)}
            >
              Take the Quiz
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
