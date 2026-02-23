"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "#",
    children: [
      { label: "Why Prodigy?", href: "#" },
      { label: "Our Team", href: "#" },
    ],
  },
  {
    label: "Solutions",
    href: "#",
    children: [
      { label: "Residential", href: "#" },
      { label: "Commercial", href: "#" },
    ],
  },
  {
    label: "Regions",
    href: "#",
    children: [
      { label: "USA", href: "#" },
      { label: "Canada", href: "#" },
      { label: "Australia", href: "#" },
    ],
  },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary">
              <span className="font-heading text-lg font-bold text-primary-foreground">P</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-sm font-bold uppercase tracking-widest text-primary-foreground">
                Prodigy
              </span>
              <span className="text-[10px] font-light uppercase tracking-[0.2em] text-primary-foreground/70">
                Wildfire Solutions
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
                {link.children && <ChevronDown className="h-3 w-3" />}
              </Link>
              {link.children && openDropdown === link.label && (
                <div className="absolute top-full left-0 mt-2 min-w-[180px] rounded-sm border border-border/10 bg-secondary p-2 shadow-xl">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block rounded-sm px-4 py-2 text-sm text-primary-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="#contact"
            className="rounded-sm bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get Protected
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-primary-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-border/10 bg-secondary px-6 py-4 lg:hidden">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block py-3 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary"
                onClick={() => !link.children && setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="mb-2 ml-4">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block py-2 text-sm text-primary-foreground/60 hover:text-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="#contact"
            className="mt-4 block rounded-sm bg-primary px-6 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Get Protected
          </Link>
        </div>
      )}
    </header>
  )
}
