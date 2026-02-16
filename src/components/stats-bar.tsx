"use client";

import { useEffect, useRef, useState } from "react";

import { getInstallCount, getSprinklerCount, TEAM_MEMBERS, COUNTRIES } from "@/lib/stats";

const stats = [
  { value: getInstallCount(), suffix: "", label: "Installs" },
  { value: TEAM_MEMBERS, suffix: "", label: "Team Members" },
  { value: COUNTRIES, suffix: "", label: "Countries" },
  { value: getSprinklerCount(), suffix: "", label: "Sprinklers" },
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
    <div className="flex flex-col items-center gap-1 py-4">
      <p className="font-heading text-4xl font-bold text-accent md:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
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
    <section className="bg-background py-16 md:py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-2 text-center font-heading text-sm font-semibold uppercase tracking-widest text-accent">
          Prodigy in Numbers
        </p>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} inView={inView} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Get Your Free Assessment
          </a>
        </div>
      </div>
    </section>
  );
}
