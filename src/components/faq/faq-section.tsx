"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Do I still need a wildfire sprinkler system if my roof is metal?",
    answer:
      "Yes. Metal roofs resist sparks but don't stop homes from igniting via airborne embers, radiant heat, or vulnerable openings like vents and eaves. Prodigy's exterior wildfire sprinkler system protects the entire structure by creating a high-humidity zone that cools surfaces and prevents embers from starting fires  - addressing all pathways of wildfire ignition that metal roofs alone cannot stop.",
  },
  {
    question:
      "When is the best time to activate my system during a wildfire event?",
    answer:
      "Upon receiving your evacuation notice we recommend monitoring your local wildfire app so you can track the live movements of the fire. That's the point when conditions are most dangerous and water use needs to be focused where it matters most  - protecting your property while everyone evacuates safely.\n\nWe also offer fully autonomous systems equipped wi thermal imaging and AI monitoring. These can detect heat signatures up to 15 kilometers away and automatically activate protection before flames or embers even reach your property.",
  },
  {
    question:
      "Why should I invest in this system?",
    answer:
      "Because wildfire protection works best in layers. Even with a metal roof or cleared vegetation, embers and radiant heat can still ignite your property.\n\nThe Prodigy system provides the final active defence when passive measures aren't enough.",
  },
  {
    question: "Does the system run continuously or in cycles?",
    answer:
      "On installation we carry out a runtime test, and off the back of that we give you your programmable cycle times. This approach conserves water while still keeping humidity levels high enough to block embers and radiant heat. We'll also show you the ideal humidity range to maintain so your system stays both effective and efficient.",
  },
  {
    question: "How much water does an exterior wildfire sprinkler system use?",
    answer:
      "Prodigy's wildfire sprinkler systems are engineered for maximum water efficiency. Using programmable cycle times and precision nozzle placement, we ensure water is delivered exactly where it's needed  - maintaining effective humidity levels while conserving your water supply. Our systems use significantly less water than a single fire truck, yet provide comprehensive property coverage.",
  },
  {
    question: "How do I monitor my wildfire protection system remotely?",
    answer:
      "Every Prodigy wildfire protection system comes with our app-based remote monitoring and activation technology. From anywhere in the world, you can check system status, receive real-time Ember Watch alerts, run activation cycles, and control your exterior sprinkler system with one tap. Whether you're at home or travelling abroad, you'll always have full visibility and control over your property's wildfire defence.",
  },
  {
    question: "Does a wildfire sprinkler system increase my property value?",
    answer:
      "Yes. A Prodigy exterior wildfire sprinkler system is widely regarded as a premium property feature that enhances resale value  - particularly in fire-prone areas across the USA, Canada, and Australia. The system easily transfers to the new homeowner, and many buyers specifically seek out properties with permanent wildfire protection already installed. It can also help with insurance eligibility and premiums in high-risk wildfire zones.",
  },
  {
    question: "Can I draw water from a nearby lake?",
    answer:
      "Yes. Prodigy's app-controlled, gas-powered fire pump lets you draw unlimited water from lakes for wildfire protection. Important to note: Our team will guide you through any required permissions or permits, especially for park or protected areas, to ensure everything is done properly and responsibly.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"We've got "}<span className="text-accent">Answers.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {"We're listening to our customers and want to help make things as clear as we can. Here's a compilation of our most commonly asked questions."}
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border py-1"
            >
              <AccordionTrigger className="py-5 text-center text-base font-semibold text-foreground hover:no-underline hover:text-primary sm:text-lg [&[data-state=open]]:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                {item.answer.split("\n\n").map((paragraph, pIndex) => (
                  <p key={pIndex} className={pIndex > 0 ? "mt-4" : ""}>
                    {paragraph}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
