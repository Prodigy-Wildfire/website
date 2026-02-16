"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Regions", href: "#regions" },
  { label: "About", href: "#why-prodigy" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-sm bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm font-display">P</span>
          </div>
          <span className="text-foreground font-display text-lg tracking-wider uppercase">
            Prodigy Wildfire
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Get Protected
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase border-b border-border"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 block text-center bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold uppercase tracking-wider"
            onClick={() => setOpen(false)}
          >
            Get Protected
          </a>
        </div>
      )}
    </nav>
  )
}
