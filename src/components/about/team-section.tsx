import Image from "next/image"

const founders = [
  {
    name: "George Harris",
    role: "CEO",
    image: "/images/george-harris.jpg",
    bio: "George Harris is a UK-born engineer with a background in high-end construction and large-scale development, he founded Prodigy in Whistler, BC after witnessing the impact of Canada's wildfires. His mission is to create reliable, architecturally integrated systems that deliver lasting protection and peace of mind.",
  },
  {
    name: "Liam Sheppard",
    role: "COO",
    image: "/images/liam-sheppard-coo.jpg",
    bio: "With a background in home building and insurance work, Liam co-founded Prodigy Wildfire with George to bring practical wildfire protection to communities. He's since expanded operations from Canada to Australia and now the U.S., focusing on durable systems, skilled installer training, and scalable wildfire protection across North America.",
  },
  {
    name: "Steve Johnson-Stott",
    role: "CFO",
    image: "/images/steve-johnson-stott.jpg",
    bio: "With 30 years of experience in financial and operational management, Steve leads Prodigy's financial strategy, budgeting, and growth planning. He brings deep expertise in optimising operations, driving efficiency, and supporting scalable expansion, ensuring the company's financial health while enabling strategic investments in innovation and long-term growth.",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Who We Are
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Meet the
            <span className="text-primary block">Founders</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg max-w-2xl">
            {"At Prodigy, we have a global team driven by a single mission: to deliver lasting protection and peace of mind in the face of a changing climate. Our leadership is united by expertise & purpose."}
          </p>
        </div>

        {/* CTA */}
        <div className="mb-16">
          <a
            href="#contact"
            className="inline-flex items-center rounded-md border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            REACH OUT
          </a>
        </div>

        {/* Team grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {founders.map((person) => (
            <div
              key={person.name}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40"
            >
              {/* Headshot */}
              <div className="relative mx-auto mb-6 h-48 w-48 overflow-hidden rounded-full">
                <Image
                  src={person.image || "/placeholder.svg"}
                  alt={`Headshot of ${person.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="text-center">
                <p className="text-muted-foreground text-sm">{person.name}</p>
                <h3 className="mt-1 font-display text-xl font-bold text-foreground">
                  {person.role}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
