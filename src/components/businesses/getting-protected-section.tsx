import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function GettingProtectedSection() {
  return (
    <section id="getting-protected" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Getting Protected
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance mb-6">
              Getting<br />
              <span className="text-primary">Protected</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Protecting your business from wildfire risk requires precision, expertise,
              and reliable service. Prodigy delivers custom commercial wildfire protection
              systems engineered to safeguard your property, assets, and operations.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Every system is designed based on a detailed site assessment, ensuring
              tailored wildfire defense that meets your unique needs. From expert
              installation to ongoing maintenance and support, we provide the
              highest-quality commercial wildfire suppression solutions so you can have
              peace of mind knowing your business is prepared for wildfire threats, now and
              in the future.
            </p>

            <Accordion type="single" collapsible className="mt-8">
              <AccordionItem value="cost" className="border-border">
                <AccordionTrigger className="text-foreground font-semibold text-base hover:no-underline hover:text-primary">
                  How Is Commercial Pricing Determined?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p className="mb-3">
                    Commercial pricing is based on site complexity, the number of structures
                    requiring protection, total zone coverage requirements, municipal and
                    insurance code compliance needs, and water supply infrastructure. Multi-site
                    operators may qualify for portfolio pricing across locations in the United
                    States, Canada, and Australia.
                  </p>
                  <p className="mb-3">
                    We provide a detailed commercial proposal after a comprehensive site
                    assessment, including system design, installation timeline, and multi-year
                    maintenance contract options. Every quote is tailored to your operational
                    requirements and budget.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="longevity" className="border-border">
                <AccordionTrigger className="text-foreground font-semibold text-base hover:no-underline hover:text-primary">
                  What Does Commercial Maintenance Include?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p className="mb-3">
                    Prodigy commercial systems are engineered for decades of reliable
                    operation. Every component is fully serviceable and replaceable,
                    meaning wear over time requires targeted part replacement rather than
                    full system overhaul. Our commercial-grade hardware is built to
                    withstand harsh environments across the United States, Canada, and
                    Australia.
                  </p>
                  <p className="mb-3">
                    Commercial maintenance contracts include seasonal commissioning and
                    decommissioning, annual pressure testing, nozzle and valve inspections,
                    control system diagnostics, and water supply verification. Multi-site
                    operators benefit from fleet management services, with coordinated
                    maintenance schedules across all locations and centralised reporting on
                    system readiness.
                  </p>
                  <p>
                    Every commercial client receives a dedicated account manager and
                    priority emergency support, ensuring your wildfire defence
                    infrastructure is always ready when it matters most.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/system-demo.jpg"
                alt="Wildfire protection system demonstration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-background/20" />
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact/commercial"
                className="inline-block rounded bg-primary px-8 py-3.5 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Request a Commercial Assessment
              </a>
              <a
                href="/services"
                className="inline-block rounded border border-border px-8 py-3.5 text-center text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Learn About Our Systems
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
