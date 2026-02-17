import { Lightbulb, CloudSun, Handshake } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Forward Thinking",
    description:
      "Every advancement we make, whether in system layout, activation technology, or water efficiency, is guided by one goal: protecting properties more effectively and responsibly. Purpose gives our progress direction, and that is what keeps Prodigy ahead of the curve.",
  },
  {
    icon: CloudSun,
    title: "All-Conditions",
    description:
      "Our systems are engineered to perform in the harshest environments — extreme heat, high winds, drought, and heavy ember loads. Every component is tested and selected for durability so your protection works when it matters most, no matter the conditions.",
  },
  {
    icon: Handshake,
    title: "Responsibly Reliable",
    description:
      "Integrity sits at the core of our business. We believe clear communication builds trust, and trust builds lasting partnerships. From consultation to completion, we're transparent about our process and our performance. We take ownership of every project and pride in standing behind our work.",
  },
];

export function InnovationSection() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Innovation With <span className="text-accent">Purpose.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center rounded border border-primary-foreground/10 bg-primary-foreground/5 p-8 text-center transition-all hover:border-accent/40"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <item.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-bold text-primary-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
