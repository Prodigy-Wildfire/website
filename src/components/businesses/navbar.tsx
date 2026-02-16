"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">P</span>
          </div>
          <span className="font-serif text-lg font-bold text-foreground tracking-tight">
            Prodigy
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#risk" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Risk
          </Link>
          <Link href="#why-prodigy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Why Prodigy
          </Link>
          <Link href="#getting-protected" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Getting Protected
          </Link>
          <Link href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Process
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-secondary bg-transparent">
            Wildfire Readiness Quiz
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get Protected
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4">
          <Link href="#risk" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
            Risk
          </Link>
          <Link href="#why-prodigy" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
            Why Prodigy
          </Link>
          <Link href="#getting-protected" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
            Getting Protected
          </Link>
          <Link href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
            Process
          </Link>
          <div className="flex flex-col gap-2 pt-2 border-t border-border">
            <Button variant="outline" size="sm" className="w-full border-border text-foreground hover:bg-secondary bg-transparent">
              Wildfire Readiness Quiz
            </Button>
            <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Get Protected
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
