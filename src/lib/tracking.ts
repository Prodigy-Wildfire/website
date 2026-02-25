declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    fbq?: (...args: unknown[]) => void
    lintrk?: (action: string, data: Record<string, unknown>) => void
  }
}

export interface TrackingData {
  ref: string
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_content: string
}

function getUrlParam(key: string): string {
  if (typeof window === "undefined") return ""
  return new URLSearchParams(window.location.search).get(key) || ""
}

export function captureTrackingData(): TrackingData {
  const ref = getUrlParam("ref")
  const utm_source = getUrlParam("utm_source")
  const utm_medium = getUrlParam("utm_medium")
  const utm_campaign = getUrlParam("utm_campaign")
  const utm_content = getUrlParam("utm_content")

  if (ref) {
    document.cookie = `pws_ref=${encodeURIComponent(ref)};path=/;max-age=${60 * 60 * 24 * 30};SameSite=Lax`
  }

  const cookieRef =
    ref ||
    (document.cookie.match(/pws_ref=([^;]+)/)?.[1]
      ? decodeURIComponent(document.cookie.match(/pws_ref=([^;]+)/)![1])
      : "")

  return { ref: cookieRef, utm_source, utm_medium, utm_campaign, utm_content }
}

export function fireLeadEvents(formName: string, tracking: TrackingData) {
  window.dataLayer?.push({
    event: "generate_lead",
    lead_source: formName,
    utm_source: tracking.utm_source,
    utm_medium: tracking.utm_medium,
    utm_campaign: tracking.utm_campaign,
    utm_content: tracking.utm_content,
    ref: tracking.ref,
  })

  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead", { content_name: formName })
  }

  if (typeof window.lintrk === "function") {
    window.lintrk("track", { conversion_id: formName })
  }
}
