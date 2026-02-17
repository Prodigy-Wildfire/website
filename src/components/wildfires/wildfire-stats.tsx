"use client";

import { useEffect, useRef, useState } from "react";

interface RegionStat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  source: string;
  sourceUrl: string;
}

interface Region {
  name: string;
  stats: RegionStat[];
}

const regions: Region[] = [
  {
    name: "United States",
    stats: [
      {
        value: 64897,
        label: "Wildfires in 2024",
        source: "NIFC 2024 Annual Report",
        sourceUrl: "https://www.nifc.gov/sites/default/files/NICC/2-Predictive%20Services/Intelligence/Annual%20Reports/2024/annual_report_2024.pdf",
      },
      {
        value: 8.9,
        suffix: "M",
        label: "Acres Burned in 2024",
        source: "NIFC",
        sourceUrl: "https://www.nifc.gov/fire-information/statistics/wildfires",
      },
    ],
  },
  {
    name: "Canada",
    stats: [
      {
        value: 6551,
        label: "Wildfires in 2024",
        source: "CIFFC 2024 Report",
        sourceUrl: "https://ciffc.net/statistics",
      },
      {
        value: 17.3,
        suffix: "M",
        label: "Hectares Burned in 2023 (Record)",
        source: "CIFFC",
        sourceUrl: "https://ciffc.ca/sites/default/files/2024-03/03.07.24_CIFFC_2023CanadaReport%20(1).pdf",
      },
    ],
  },
  {
    name: "Australia",
    stats: [
      {
        value: 3094,
        label: "Homes Destroyed (Black Summer)",
        source: "CSIRO",
        sourceUrl: "https://www.csiro.au/en/research/natural-disasters/bushfires",
      },
      {
        value: 46,
        suffix: "M",
        label: "Acres Burned (Black Summer 2019-20)",
        source: "Australian Government",
        sourceUrl: "https://www.agriculture.gov.au/abares/forestsaustralia/forest-data-maps-and-tools/spatial-data/forest-fire",
      },
    ],
  },
];

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2200;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        if (target >= 100) {
          setCount(Math.floor(start));
        } else {
          setCount(Math.round(start * 10) / 10);
        }
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, inView]);

  return count;
}

function StatDisplay({ stat, inView }: { stat: RegionStat; inView: boolean }) {
  const count = useCountUp(stat.value, inView);
  const formatted = stat.value >= 100 ? count.toLocaleString() : count.toString();

  return (
    <div className="text-center">
      <p className="font-heading text-3xl font-bold text-accent md:text-4xl">
        {stat.prefix || ""}
        {formatted}
        {stat.suffix || ""}
      </p>
      <p className="mt-1 text-sm text-primary-foreground/60">{stat.label}</p>
      <a
        href={stat.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 inline-block text-xs text-primary-foreground/40 underline transition-colors hover:text-accent"
      >
        {stat.source}
      </a>
    </div>
  );
}

export function WildfireStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-primary py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            Global Crisis
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
            Wildfire by the Numbers
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
