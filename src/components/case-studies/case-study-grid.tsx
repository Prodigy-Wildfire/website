"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ChevronDown, ChevronUp, Quote } from "lucide-react";

const caseStudies = [
  {
    id: "banff-gondola",
    title: "Banff Gondola by Pursuit",
    location: "Banff, Alberta, Canada",
    country: "Canada",
    type: "Commercial",
    image: "/images/banff-gondola-upper-terminal-case-study.avif",
    summary:
      "A world-renowned mountain resort required a wildfire protection system that could defend its upper terminal and surrounding infrastructure at over 7,000 ft elevation.",
    challenge:
      "The Banff Gondola upper terminal sits atop Sulphur Mountain in a remote, high-altitude location surrounded by dense forest. Traditional fire response is limited by access, terrain, and response times. The system needed to perform autonomously in extreme mountain conditions including high winds, freezing temperatures, and lightning storms.",
    solution:
      "Prodigy designed and installed a custom exterior wildfire sprinkler system with full roofline coverage, remote activation via the Prodigy app, and integration with on-site fire safety protocols. The system delivers complete property saturation in under 3 minutes and operates on programmable cycles to conserve water supply.",
    clientQuote:
      "Prodigy delivered a system that gives us confidence in our wildfire preparedness, even in one of the most challenging environments in the Canadian Rockies.",
    clientName: "Pursuit Collection",
    specs: [
      { label: "Elevation", value: "7,486 ft" },
      { label: "Coverage", value: "Full Roofline" },
      { label: "Activation", value: "Remote + On-Site" },
    ],
  },
  {
    id: "golden-skybridge",
    title: "Golden Skybridge",
    location: "Golden, British Columbia, Canada",
    country: "Canada",
    type: "Commercial",
    image: "/images/region-canada.jpg",
    summary:
      "One of Canada's premier tourism attractions needed comprehensive wildfire protection for its bridge structures and visitor facilities nestled in the Columbia Valley.",
    challenge:
      "The Golden Skybridge complex spans a deep canyon surrounded by British Columbia's wildfire-prone interior forests. With thousands of daily visitors during peak season, the system needed to protect both infrastructure and provide rapid response capability without disrupting operations.",
    solution:
      "Prodigy engineered a multi-zone exterior sprinkler system covering all critical structures, with remote monitoring and activation through the Prodigy app. The system was designed to complement the site's architecture while providing full ember and radiant heat defense.",
    clientQuote:
      "Working with Prodigy gave us a wildfire defense system that protects our guests, our team, and our investment without compromising the visitor experience.",
    clientName: "Golden Skybridge",
    specs: [
      { label: "Zones", value: "Multi-Zone" },
      { label: "Monitoring", value: "24/7 Remote" },
      { label: "Integration", value: "App-Controlled" },
    ],
  },
  {
    id: "ubc-campus",
    title: "University of British Columbia",
    location: "Vancouver, British Columbia, Canada",
    country: "Canada",
    type: "Infrastructure",
    image: "/images/region-canada.jpg",
    summary:
      "UBC required wildfire protection for critical campus buildings surrounded by the Pacific Spirit Regional Park forest.",
    challenge:
      "UBC's campus borders thousands of hectares of temperate rainforest that, during drought conditions, presents a significant wildfire risk to campus infrastructure, research facilities, and student residences. The system needed to integrate with existing campus fire safety infrastructure.",
    solution:
      "Prodigy delivered a custom-engineered exterior sprinkler system for key campus buildings, with centralized remote activation and monitoring. The installation was completed with minimal disruption to campus operations and designed for long-term, low-maintenance performance.",
    clientQuote:
      "Prodigy provided a wildfire protection solution that meets the unique demands of a university campus environment while delivering the performance and reliability we required.",
    clientName: "UBC Facilities",
    specs: [
      { label: "Type", value: "Institutional" },
      { label: "Control", value: "Centralized" },
      { label: "Maintenance", value: "Low-Profile" },
    ],
  },
  {
    id: "whistler-residence",
    title: "Private Residence - Whistler",
    location: "Whistler, British Columbia, Canada",
    country: "Canada",
    type: "Residential",
    image: "/images/protect-home.jpg",
    summary:
      "A luxury mountain home in Whistler's wildfire interface zone needed discreet, permanent wildfire protection that preserved the property's aesthetic.",
    challenge:
      "Located in a high-value wildfire interface zone surrounded by mature forest, this residence required a system that could defend against ember attack and radiant heat while blending seamlessly with the home's premium architectural design.",
    solution:
      "Prodigy installed a full exterior wildfire sprinkler system using type L copper (316 Stainless steel in Australia) piping routed discreetly along rooflines and ridges. The homeowner can activate the system remotely via the Prodigy app from anywhere in the world, with real-time Ember Watch alerts for early warning.",
    clientQuote:
      "We barely notice the system is there, but knowing we can activate it from anywhere gives us incredible peace of mind, especially during fire season.",
    clientName: "Steve S., Whistler BC",
    specs: [
      { label: "Range", value: "50 ft" },
      { label: "Activation", value: "3 min" },
      { label: "Design", value: "Low-Profile Copper" },
    ],
  },
];

function CaseStudyCard({
  study,
}: {
  study: (typeof caseStudies)[number];
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="overflow-hidden rounded border border-border bg-card transition-all hover:shadow-lg">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={study.image}
          alt={`${study.title} wildfire protection installation by Prodigy`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="rounded bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            {study.type}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {study.location}
        </div>
        <h2 className="mt-2 font-heading text-xl font-bold text-card-foreground">
          {study.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {study.summary}
        </p>

        {/* Specs */}
        <div className="mt-4 flex gap-4">
          {study.specs.map((spec) => (
            <div key={spec.label}>
              <p className="font-heading text-lg font-bold text-accent">
                {spec.value}
              </p>
              <p className="text-xs text-muted-foreground">{spec.label}</p>
            </div>
          ))}
        </div>

        {/* Expandable Details */}
        {expanded && (
          <div className="mt-6 space-y-4 border-t border-border pt-6">
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                The Challenge
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {study.challenge}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Our Solution
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {study.solution}
              </p>
            </div>
            <div className="rounded border-l-4 border-accent bg-accent/5 px-5 py-4">
              <Quote className="mb-2 h-5 w-5 text-accent" />
              <p className="text-sm italic leading-relaxed text-foreground/80">
                {study.clientQuote}
              </p>
              <p className="mt-2 text-xs font-semibold text-accent">
                {study.clientName}
              </p>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
        >
          {expanded ? "Show Less" : "View Full Case Study"}
          {expanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
      </div>
    </article>
  );
}

export function CaseStudyGrid() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Ready to protect your property?
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Get a Free Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
