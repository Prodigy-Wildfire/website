"use client"

import React from "react"
import { useEffect, useRef, useState, useCallback } from "react"
import { Clock, TrendingDown, Building2, FileText } from "lucide-react"

interface StatItem {
  target: number
  prefix?: string
  suffix?: string
  label: string
  icon: React.ReactNode
  source: string
  sourceUrl: string
}

const stats: StatItem[] = [
  {
    target: 72,
    suffix: " hrs",
    label: "Average Business Downtime After a Wildfire",
    icon: <Clock className="w-6 h-6" />,
    source: "FEMA Business Continuity",
    sourceUrl: "https://www.fema.gov/press-release/20210318/after-fire",
  },
  {
    target: 40,
    suffix: "%",
    label: "Of Small Businesses Never Reopen After Disaster",
    icon: <TrendingDown className="w-6 h-6" />,
    source: "FEMA",
    sourceUrl: "https://www.fema.gov/press-release/20210318/after-fire",
  },
  {
    target: 1.2,
    prefix: "$",
    suffix: "M",
    label: "Average Commercial Wildfire Damage Claim",
    icon: <Building2 className="w-6 h-6" />,
    source: "Insurance Institute",
    sourceUrl: "https://www.iii.org/fact-statistic/facts-statistics-wildfires",
  },
  {
    target: 90,
    suffix: " days",
    label: "Typical Insurance Claim Processing Time",
    icon: <FileText className="w-6 h-6" />,
    source: "NAIC",
    sourceUrl: "https://content.naic.org/consumer.htm",
  },
]

function AnimatedCounter({ stat }: { stat: StatItem }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  const animate = useCallback(() => {
    const duration = 2000
    const steps = 60
    const stepTime = duration / steps
    let step = 0

    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = stat.target * eased

      if (stat.target >= 10) {
        setCount(Math.round(current))
      } else {
        setCount(Math.round(current * 10) / 10)
      }

      if (step >= steps) {
        clearInterval(timer)
        setCount(stat.target)
      }
    }, stepTime)
  }, [stat.target])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animate()
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated, animate])

  const formatNumber = (num: number) => {
    if (stat.target >= 10) {
      return num.toLocaleString()
    }
    return num.toString()
  }

  return (
    <span ref={ref}>
      {stat.prefix || ""}{formatNumber(count)}{stat.suffix || ""}
    </span>
  )
}

export function StatsSection() {
  return (
    <section id="risk" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Business Risk
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
            The Cost of Being{" "}
            <span className="text-primary">Unprepared</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-base leading-relaxed">
            Wildfires do not just destroy buildings. They shut down operations,
            disrupt supply chains, and create financial losses that can take
            years to recover from. Proactive wildfire defence is a business
            decision, not just a safety one.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-lg p-6 text-center flex flex-col items-center gap-3"
            >
              <div className="text-primary">{stat.icon}</div>
              <p className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                <AnimatedCounter stat={stat} />
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <a
                href={stat.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent hover:text-accent/80 transition-colors"
              >
                {stat.source} &rarr;
              </a>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="/contact/commercial"
            className="inline-block rounded bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request a Commercial Assessment
          </a>
        </div>
      </div>
    </section>
  )
}
