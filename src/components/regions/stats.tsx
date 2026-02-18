"use client"

import { useEffect, useRef, useState } from "react"

interface RegionStat {
  value: number
  prefix?: string
  suffix?: string
  label: string
}

interface Region {
  name: string
  stats: RegionStat[]
  source: string
  sourceUrl: string
}

const regions: Region[] = [
  {
    name: "United States",
    stats: [
      {
        value: 64897,
        label: "Wildfires in 2024",
      },
      {
        value: 8.9,
        suffix: "M",
        label: "Acres Burned in 2024",
      },
    ],
    source: "NIFC Annual Report 2024",
    sourceUrl: "https://www.nifc.gov/fire-information/statistics",
  },
  {
    name: "Canada",
    stats: [
      {
        value: 6500,
        prefix: ">",
        label: "Wildfires in 2023",
      },
      {
        value: 15,
        suffix: "M+",
        label: "Hectares Burned in 2023",
      },
    ],
    source: "CIFFC",
    sourceUrl: "https://ciffc.net/statistics",
  },
  {
    name: "Australia",
    stats: [
      {
        value: 3094,
        label: "Homes Destroyed (Black Summer 2019-20)",
      },
      {
        value: 17,
        suffix: "M+",
        label: "Hectares Burned (Black Summer 2019-20)",
      },
    ],
    source: "Australian Government",
    sourceUrl: "https://www.apsc.gov.au/state-service/state-service-report-2019-20/chapter-1-commitmenrvice/black-summer",
  },
]

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2200
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        if (target >= 100) {
          setCount(Math.floor(start))
        } else {
          setCount(Math.round(start * 10) / 10)
        }
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, inView])

  return count
}

function StatDisplay({ stat, inView }: { stat: RegionStat; inView: boolean }) {
  const count = useCountUp(stat.value, inView)
  const formatted = stat.value >= 100 ? count.toLocaleString() : count.toString()

  return (
    <div className="text-center">
      <p className="font-heading text-3xl font-bold text-accent md:text-4xl">
        {stat.prefix || ""}
        {formatted}
        {stat.suffix || ""}
      </p>
      <p className="mt-1 text-sm text-primary-foreground/60">{stat.label}</p>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats" className="bg-primary py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            Global Crisis
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Wildfire by the <span className="text-accent">Numbers</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-primary-foreground/70">
            Wildfires are escalating across three continents. These figures show
            the scale of the crisis facing communities in the United States,
            Canada, and Australia.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {regions.map((region) => (
            <div key={region.name} className="text-center">
              <h3 className="mb-6 font-heading text-lg font-semibold text-primary-foreground">
                {region.name}
              </h3>
              <div className="flex flex-col gap-6">
                {region.stats.map((stat) => (
                  <StatDisplay key={stat.label} stat={stat} inView={inView} />
                ))}
              </div>
              <span className="mt-4 inline-block text-xs text-primary-foreground/40">
                {region.source}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
