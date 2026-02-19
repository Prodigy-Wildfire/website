"use client"

import { useRef, useCallback } from "react"

interface CombinedFaq {
  id: string
  question: string
  answer: string | null
  videoSrc: string
}

const combinedFaqs: CombinedFaq[] = [
  {
    id: "metal-roof",
    question:
      "Do I still need a wildfire sprinkler system if my roof is metal?",
    answer:
      "Yes. Metal roofs resist sparks but don\u2019t stop homes from igniting via airborne embers, radiant heat, or vulnerable openings like vents and eaves. Prodigy\u2019s exterior wildfire sprinkler system protects the entire structure by creating a high-humidity zone that cools surfaces and prevents embers from starting fires \u2014 addressing all pathways of wildfire ignition that metal roofs alone cannot stop.",
    videoSrc: "/images/faq-wildfire-system-with-metal-roof.mp4",
  },
  {
    id: "best-time-activate",
    question:
      "When is the best time to activate my system during a wildfire event?",
    answer:
      "Upon receiving your evacuation notice we recommend monitoring your local wildfire app so you can track the live movements of the fire. That\u2019s the point when conditions are most dangerous and water use needs to be focused where it matters most \u2014 protecting your property while everyone evacuates safely.\n\nWe also offer fully autonomous systems equipped with thermal imaging and AI monitoring. These can detect heat signatures up to 15 kilometres away and automatically activate protection before flames or embers even reach your property.",
    videoSrc: "/images/faq-best-time-to-activate-system.mp4",
  },
  {
    id: "why-invest",
    question:
      "Why invest in a system if I already have fire-resistant materials and defensible space?",
    answer:
      "Because wildfire protection works best in layers. Even with a metal roof or cleared vegetation, embers and radiant heat can still ignite your property.\n\nThe Prodigy system provides the final active defence when passive measures aren\u2019t enough.",
    videoSrc: "/images/faq-why-invest-in-wildfire-protection.mp4",
  },
  {
    id: "cycles",
    question: "Does the system run continuously or in cycles?",
    answer:
      "On installation we carry out a runtime test, and off the back of that we give you your programmable cycle times. This approach conserves water while still keeping humidity levels high enough to block embers and radiant heat. We\u2019ll also show you the ideal humidity range to maintain so your system stays both effective and efficient.",
    videoSrc: "/images/faq-system-continuous-or-cycle-operation.mp4",
  },
  {
    id: "water-supply",
    question: "How much water does an exterior wildfire sprinkler system use?",
    answer:
      "Prodigy\u2019s wildfire sprinkler systems are engineered for maximum water efficiency. Using programmable cycle times and precision nozzle placement, we ensure water is delivered exactly where it\u2019s needed \u2014 maintaining effective humidity levels while conserving your water supply. Our systems use significantly less water than a single fire truck, yet provide comprehensive property coverage.",
    videoSrc: "/images/faq-water-supply-options-intro.mp4",
  },
  {
    id: "remote-monitoring",
    question: "How do I monitor my wildfire protection system remotely?",
    answer:
      "Every Prodigy wildfire protection system comes with our app-based remote monitoring and activation technology. From anywhere in the world, you can check system status, receive real-time EmberWatch alerts, run activation cycles, and control your exterior sprinkler system with one tap. Whether you\u2019re at home or travelling abroad, you\u2019ll always have full visibility and control over your property\u2019s wildfire defence.",
    videoSrc: "/images/faq-remote-system-monitoring.mp4",
  },
  {
    id: "property-value",
    question: "Does a wildfire sprinkler system increase my property value?",
    answer:
      "Yes. A Prodigy exterior wildfire sprinkler system is widely regarded as a premium property feature that enhances resale value \u2014 particularly in fire-prone areas across the USA, Canada, and Australia. The system easily transfers to the new homeowner, and many buyers specifically seek out properties with permanent wildfire protection already installed. It can also help with insurance eligibility and premiums in high-risk wildfire zones.",
    videoSrc: "/images/faq-selling-home-with-wildfire-system.mp4",
  },
  {
    id: "draw-from-lake",
    question: "Can I draw water from a nearby lake?",
    answer:
      "Yes. Prodigy\u2019s app-controlled, gas-powered fire pump lets you draw unlimited water from lakes for wildfire protection. Important to note: Our team will guide you through any required permissions or permits, especially for park or protected areas, to ensure everything is done properly and responsibly.",
    videoSrc: "/images/faq-drawing-water-from-nearby-lake.mp4",
  },
  {
    id: "homeowner-responsibility",
    question: "What falls under homeowner responsibility?",
    answer: null,
    videoSrc: "/images/faq-homeowner-responsibility-wildfire.mp4",
  },
]

function VideoFaqCard({
  faq,
  onPlay,
  registerVideo,
}: {
  faq: CombinedFaq
  onPlay: (id: string) => void
  registerVideo: (id: string, el: HTMLVideoElement | null) => void
}) {
  return (
    <div className="overflow-hidden rounded border border-border bg-card">
      <div className="aspect-video bg-primary/10">
        <video
          ref={(el) => registerVideo(faq.id, el)}
          controls
          preload="metadata"
          playsInline
          crossOrigin="anonymous"
          className="h-full w-full object-cover"
          onPlay={() => onPlay(faq.id)}
        >
          <source src={faq.videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-base font-semibold text-card-foreground">
          {faq.question}
        </h3>
        {faq.answer && (
          <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {faq.answer.split("\n\n").map((paragraph, i) => (
              <p key={i} className={i > 0 ? "mt-3" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export function VideoFaqSection() {
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map())

  const handlePlay = useCallback((playingId: string) => {
    videoRefs.current.forEach((video, id) => {
      if (id !== playingId && !video.paused) {
        video.pause()
      }
    })
  }, [])

  const registerVideo = useCallback(
    (id: string, el: HTMLVideoElement | null) => {
      if (el) {
        videoRefs.current.set(id, el)
      } else {
        videoRefs.current.delete(id)
      }
    },
    []
  )

  return (
    <section id="faq" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            Common Questions
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Watch George <span className="text-accent">Explain</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Get clear, detailed answers to the most common wildfire protection
            questions directly from our team. Watch the video or read the answer
            below.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {combinedFaqs.map((faq) => (
            <VideoFaqCard
              key={faq.id}
              faq={faq}
              onPlay={handlePlay}
              registerVideo={registerVideo}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
