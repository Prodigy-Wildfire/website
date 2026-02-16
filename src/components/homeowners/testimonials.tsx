import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Surrounded by forest in Whistler, we installed a Prodigy Wildfire Suppression System to protect our home from ember-driven wildfire risk. It's a smart preventative investment that gives us peace of mind.",
    name: "Steve S.",
    location: "Whistler, BC",
  },
  {
    quote:
      "We can finally leave for the summer without worrying. The remote start feature gives us complete peace of mind.",
    name: "The Peterson Family",
    location: "",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <Image
        src="/images/whistler-home.jpg"
        alt="Mountain home with wildfire protection"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
          What Our Clients Say
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-sm"
            >
              <Quote className="mb-4 h-8 w-8 text-accent" />
              <p className="text-base leading-relaxed text-primary-foreground/90">
                {t.quote}
              </p>
              <div className="mt-6 border-t border-primary-foreground/10 pt-4">
                <p className="font-heading text-sm font-semibold text-primary-foreground">
                  {t.name}
                </p>
                {t.location && (
                  <p className="text-xs text-primary-foreground/60">
                    {t.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
