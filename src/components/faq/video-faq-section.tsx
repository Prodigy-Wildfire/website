"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export interface VideoFaq {
  id: string;
  title: string;
  videoSrc: string;
}

const videoFaqs: VideoFaq[] = [
  {
    id: "water-supply-options",
    title: "Introduction - Water Supply Options",
    videoSrc: "/images/1st introduction FAQ Water supply options.mov",
  },
  {
    id: "why-invest",
    title: "Why Should I Invest in the System?",
    videoSrc: "/images/Why Should I invest in the system .mov",
  },
  {
    id: "cycles",
    title: "Does the System Run Continuously or in Cycles?",
    videoSrc: "/images/Does the system run continuously or in cycles.mov",
  },
  {
    id: "homeowner-responsibility",
    title: "What Falls Under Homeowner Responsibility?",
    videoSrc: "/images/What falls under home owner resposibility.mov",
  },
  {
    id: "draw-from-lake",
    title: "Can I Draw Water From a Nearby Lake?",
    videoSrc: "/images/Can I draw from a nearby lake.mov",
  },
  {
    id: "metal-roof",
    title: "Do I Still Need a System if I Have a Metal Roof?",
    videoSrc: "/images/Do I still need a system if I have a metal roof.mov",
  },
  {
    id: "remote-monitoring",
    title: "How Do I Know if the System is Running When I'm Not There?",
    videoSrc: "/images/How do I know if the system is running if I am not there.mov",
  },
  {
    id: "sell-home",
    title: "What Happens if I Sell My Home?",
    videoSrc: "/images/What happens if I sell my home.mov",
  },
  {
    id: "best-time-activate",
    title: "When is the Best Time to Activate the System?",
    videoSrc: "/images/When is the best time to activate the system.mov",
  },
];

function VideoFaqCard({ faq }: { faq: VideoFaq }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="overflow-hidden rounded border border-border bg-card transition-all hover:shadow-lg">
      <div className="relative aspect-video bg-primary/10">
        <video
          ref={videoRef}
          preload="metadata"
          playsInline
          className="h-full w-full object-cover"
          onEnded={() => setPlaying(false)}
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
        >
          <source src={faq.videoSrc} type="video/quicktime" />
          <source src={faq.videoSrc.replace(".mov", ".mp4")} type="video/mp4" />
        </video>
        {!playing && (
          <button
            type="button"
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-primary/20 transition-colors hover:bg-primary/30"
            aria-label={`Play: ${faq.title}`}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/90 text-accent-foreground transition-transform hover:scale-110">
              <Play className="ml-1 h-7 w-7" />
            </div>
          </button>
        )}
        {playing && (
          <button
            type="button"
            onClick={togglePlay}
            className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/70 text-primary-foreground opacity-0 transition-opacity hover:opacity-100"
            aria-label="Pause"
          >
            <Pause className="h-4 w-4" />
          </button>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-heading text-base font-semibold text-card-foreground">
          {faq.title}
        </h3>
      </div>
    </div>
  );
}

export function VideoFaqSection() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            Video Answers
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Watch George Explain
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Get clear, detailed answers to the most common wildfire protection
            questions directly from our team.
          </p>
        </div>

        <div className={`grid gap-8 ${videoFaqs.length === 1 ? "max-w-2xl mx-auto" : videoFaqs.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
          {videoFaqs.map((faq) => (
            <VideoFaqCard key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
