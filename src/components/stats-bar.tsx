"use client";

import { useEffect, useRef, useState } from "react";

import { getInstallCount, getSprinklerCount, TEAM_MEMBERS, COUNTRIES } from "@/lib/stats";

const stats = [
  { value: getInstallCount(), suffix: "+", label: "Installs" },
  { value: TEAM_MEMBERS, suffix: "+", label: "Team Members" },
  { value: COUNTRIES, suffix: "", label: "Countries" },
  { value: getSprinklerCount(), suffix: "+", label: "Sprinklers" },
];

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, inView]);

  return count;
}

function StatItem({ value, suffix, label, inView }: { value: number; suffix: string; label: string; inView: boolean }) {
  const count = useCountUp(value, inView);
  return (
    <div className="flex flex-col items-center gap-2 py-6">
      <p className="font-heading text-5xl font-bold text-accent md:text-6xl lg:text-7xl">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-base font-medium text-muted-foreground">{label}</p>
    </div>
  );
}

export function StatsBar() {
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
    <section className="bg-background py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Built to Scale, Proven to <span className="text-accent">Perform</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} inView={inView} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="/consultation"
            className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
