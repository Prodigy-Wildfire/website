"use client";

import { useEffect, useRef, useState } from "react";

import { getInstallCount, getSprinklerCount, TEAM_MEMBERS, COUNTRIES } from "@/lib/stats";

const stats = [
  { value: getInstallCount(), label: "Installs", suffix: "" },
  { value: TEAM_MEMBERS, label: "Team Members", suffix: "" },
  { value: COUNTRIES, label: "Countries", suffix: "" },
  { value: getSprinklerCount(), label: "Sprinklers", suffix: "" },
];

function AnimatedNumber({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
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
  }, [inView, target]);

  return (
    <span className="text-5xl font-bold text-primary md:text-6xl">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Prodigy in Numbers
          </p>
        </div>

        <div ref={ref} className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedNumber
                target={stat.value}
                suffix={stat.suffix}
                inView={inView}
              />
              <p className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
