"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play, Quote } from "lucide-react";

const testimonials = [
  {
    id: "steve-whistler",
    name: "Steve S.",
    location: "Whistler, British Columbia",
    quote:
      "We barely notice the system is there, but knowing we can activate it from anywhere gives us incredible peace of mind.",
    posterSrc: "/images/protect-home.jpg",
    videoSrc: "",
  },
  {
    id: "peterson-family",
    name: "The Peterson Family",
    location: "Kelowna, British Columbia",
    quote:
      "After the fires in our area, we knew we needed real protection. Prodigy delivered exactly what we needed.",
    posterSrc: "/images/custom-approach.jpg",
    videoSrc: "",
  },
];

function VideoCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current && testimonial.videoSrc) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="rounded border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm">
      {/* Video / Poster */}
      <div className="relative aspect-video overflow-hidden rounded">
        {testimonial.videoSrc ? (
          <video
            ref={videoRef}
            controls={playing}
            preload="none"
            poster={testimonial.posterSrc}
            className="h-full w-full object-cover"
            onEnded={() => setPlaying(false)}
          >
            <source src={testimonial.videoSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={testimonial.posterSrc}
            alt={`${testimonial.name} video testimonial`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        )}
        {!playing && (
          <button
            type="button"
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-primary/30 transition-colors hover:bg-primary/40"
            aria-label="Play video"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/90 text-accent-foreground transition-transform hover:scale-110">
              <Play className="ml-1 h-7 w-7" />
            </div>
            {!testimonial.videoSrc && (
              <span className="absolute bottom-4 left-4 rounded bg-primary/80 px-3 py-1 text-xs font-medium text-primary-foreground">
                Coming Soon
              </span>
            )}
          </button>
        )}
      </div>

      {/* Quote & Info */}
      <div className="mt-5">
        <Quote className="h-5 w-5 text-accent" />
        <p className="mt-2 text-sm italic leading-relaxed text-primary-foreground/80">
          {testimonial.quote}
        </p>
        <div className="mt-4">
          <p className="text-sm font-semibold text-primary-foreground">
            {testimonial.name}
          </p>
          <p className="text-xs text-primary-foreground/50">
            {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
}

export function VideoTestimonials() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <Image
        src="/images/protect-home.jpg"
        alt="Wildfire protection for homes"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            Customer Stories
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Hear From Homeowners We Protect
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
            Real stories from property owners across the USA, Canada, and
            Australia who trust Prodigy to defend their homes from wildfire.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <VideoCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
