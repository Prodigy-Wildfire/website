"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const dropdowns = [
  {
    label: "Protection",
    items: [
      { label: "Our Services", href: "/services" },
      { label: "Homeowners", href: "/homeowners" },
      { label: "Businesses", href: "/businesses" },
      { label: "Regions", href: "/regions" },
    ],
  },
  {
    label: "Prodigy",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Partners", href: "/partners" },
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Insights", href: "/insights" },
    ],
  },
];

function DesktopDropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        type="button"
        className="flex items-center gap-1 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent"
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-2">
          <div className="min-w-[180px] rounded border border-primary-foreground/10 bg-primary/95 backdrop-blur-sm py-2 shadow-lg">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileDropdown({ label, items, onNavigate }: { label: string; items: { label: string; href: string }[]; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center justify-between rounded px-3 py-2.5 text-sm font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-accent"
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="ml-3 flex flex-col gap-1 border-l border-primary-foreground/10 pl-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded px-3 py-2 text-sm text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-accent"
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/PWS Logo_White writing copy.png"
            alt="Prodigy Wildfire Solutions"
            width={280}
            height={80}
            className="h-16 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <Link
            href="/wildfires"
            className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent"
          >
            Wildfires
          </Link>
          {dropdowns.map((dropdown) => (
            <DesktopDropdown key={dropdown.label} label={dropdown.label} items={dropdown.items} />
          ))}
          <Link
            href="/contact"
            className="rounded bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Get Assessment
          </Link>
        </nav>

        <button
          type="button"
          className="text-primary-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-primary-foreground/10 bg-primary lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            <Link
              href="/wildfires"
              className="rounded px-3 py-2.5 text-sm font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-accent"
              onClick={() => setMobileOpen(false)}
            >
              Wildfires
            </Link>
            {dropdowns.map((dropdown) => (
              <MobileDropdown
                key={dropdown.label}
                label={dropdown.label}
                items={dropdown.items}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded bg-accent px-5 py-2.5 text-center text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              onClick={() => setMobileOpen(false)}
            >
              Get Assessment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
