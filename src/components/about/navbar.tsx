"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">P</span>
              </div>
              <span className="text-foreground font-display font-bold text-xl tracking-tight">
                Prodigy
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#mission" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Our Mission
            </Link>
            <Link href="#engineering" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Engineering
            </Link>
            <Link href="#team" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Team
            </Link>
            <Link
              href="#contact"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Wildfire Readiness Quiz
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="flex flex-col gap-4 px-6 py-6">
            <Link
              href="#mission"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              onClick={() => setIsOpen(false)}
            >
              Our Mission
            </Link>
            <Link
              href="#engineering"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              onClick={() => setIsOpen(false)}
            >
              Engineering
            </Link>
            <Link
              href="#team"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link
              href="#contact"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Wildfire Readiness Quiz
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
