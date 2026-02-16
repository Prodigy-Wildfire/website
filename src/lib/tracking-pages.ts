/**
 * Tracking Pages Configuration
 *
 * Add a new entry here to create a unique contact page at /go/[slug]
 * Each page captures the source in the form submission so you know
 * exactly where the lead came from.
 *
 * Usage:
 *   - Sales reps: give each rep their own URL (e.g. /go/john-smith)
 *   - Affiliates: give each affiliate a unique URL (e.g. /go/partner-remax)
 *   - Meta ads: create one per campaign (e.g. /go/meta-summer-homeowners)
 *   - Any channel: events, QR codes, emails, flyers, etc.
 *
 * The page will NOT appear in site navigation or sitemaps.
 */

export interface TrackingPage {
  /** URL slug — the page lives at /go/[slug] */
  slug: string
  /** Internal source label — captured in form data for tracking */
  source: string
  /** Category for filtering in your CRM */
  type: "sales-rep" | "affiliate" | "meta-ad" | "google-ad" | "email" | "event" | "qr-code" | "referral" | "other"
  /** Optional rep/affiliate name shown on the page */
  contactName?: string
  /** Optional custom headline (defaults to "Get Your Free Assessment") */
  headline?: string
  /** Optional custom subtitle */
  subtitle?: string
}

export const trackingPages: TrackingPage[] = [
  // ──────────────────────────────────────────────
  // SALES REPS
  // ──────────────────────────────────────────────
  {
    slug: "john-smith",
    source: "Sales Rep - John Smith",
    type: "sales-rep",
    contactName: "John Smith",
  },
  {
    slug: "jane-doe",
    source: "Sales Rep - Jane Doe",
    type: "sales-rep",
    contactName: "Jane Doe",
  },

  // ──────────────────────────────────────────────
  // AFFILIATES
  // ──────────────────────────────────────────────
  {
    slug: "partner-remax",
    source: "Affiliate - RE/MAX",
    type: "affiliate",
    contactName: "RE/MAX",
    subtitle: "Referred by RE/MAX — protect your new property from wildfire.",
  },
  {
    slug: "partner-insurance-co",
    source: "Affiliate - Insurance Co",
    type: "affiliate",
    contactName: "Insurance Co",
  },

  // ──────────────────────────────────────────────
  // META ADS
  // ──────────────────────────────────────────────
  {
    slug: "meta-summer-homeowners",
    source: "Meta Ad - Summer 2026 Homeowners",
    type: "meta-ad",
  },
  {
    slug: "meta-summer-commercial",
    source: "Meta Ad - Summer 2026 Commercial",
    type: "meta-ad",
  },
  {
    slug: "meta-fire-season-2026",
    source: "Meta Ad - Fire Season 2026",
    type: "meta-ad",
  },

  // ──────────────────────────────────────────────
  // GOOGLE ADS
  // ──────────────────────────────────────────────
  {
    slug: "google-wildfire-sprinkler",
    source: "Google Ad - Wildfire Sprinkler",
    type: "google-ad",
  },
  {
    slug: "google-home-fire-protection",
    source: "Google Ad - Home Fire Protection",
    type: "google-ad",
  },

  // ──────────────────────────────────────────────
  // OTHER CHANNELS
  // ──────────────────────────────────────────────
  {
    slug: "tradeshow-iwce-2026",
    source: "Event - IWCE 2026 Tradeshow",
    type: "event",
    headline: "Great Meeting You at IWCE 2026",
    subtitle: "Let's continue the conversation about protecting your property.",
  },
  {
    slug: "qr-brochure",
    source: "QR Code - Print Brochure",
    type: "qr-code",
  },
  {
    slug: "email-newsletter-feb",
    source: "Email - February 2026 Newsletter",
    type: "email",
  },
]
