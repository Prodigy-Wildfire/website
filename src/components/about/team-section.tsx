import Image from "next/image"
import Link from "next/link"

const founders = [
  {
    name: "George Harris",
    role: "CEO",
    image: "/images/George Harris CEO.png",
    bio: "George is a UK-born engineer with a background in high-end construction and large-scale development. He co-founded Prodigy Wildfire Solutions in Whistler, BC after witnessing the impact of Canada's wildfires. His mission is to create reliable, architecturally integrated systems that deliver lasting protection and peace of mind.",
  },
  {
    name: "Liam Sheppard",
    role: "COO",
    image: "/images/liam-sheppard-coo.jpg",
    bio: "With a background in home building and insurance work, Liam co-founded Prodigy Wildfire Solutions with George to bring practical wildfire protection to communities. He expanded operations from Canada, to Australia and the US, focusing on durable systems, skilled installer training, and scalable wildfire protection across the world.",
  },
  {
    name: "Steve Johnson-Stott",
    role: "CFO",
    image: "/images/steve-johnson-stott.jpg",
    bio: "With 30 years of experience in financial and operational management, Steve leads the financial strategy, budgeting, and growth planning at Prodigy Wildfire Solutions. He brings deep expertise in optimising operations, driving efficiency, and supporting scalable expansion, ensuring the company's financial health.",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            Who We Are
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Meet the{" "}
            <span className="text-accent">Founders</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-sm leading-relaxed">
            At Prodigy Wildfire Solutions, we have a global team driven by a single mission: to deliver lasting protection and peace of mind in the face of a changing climate. Our leadership is united by expertise and purpose.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {founders.map((person) => (
            <div
              key={person.name}
              className="rounded border border-border bg-card p-6 text-center transition-all hover:shadow-lg"
            >
              <div className="relative mx-auto mb-6 h-48 w-48 overflow-hidden rounded-full">
                <Image
                  src={person.image}
                  alt={`Headshot of ${person.name}`}
                  fill
                  sizes="192px"
                  className="object-cover"
                />
              </div>

              <h3 className="font-heading text-lg font-bold text-foreground">
                {person.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {person.role}
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {person.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Reach Out
          </Link>
        </div>
      </div>
    </section>
  )
}
