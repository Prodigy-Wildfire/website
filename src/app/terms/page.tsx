import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms and Conditions | Prodigy Wildfire Solutions",
  description:
    "Terms and conditions for Prodigy Wildfire Solutions. Read our terms of service before using our website or services.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-3xl px-6 pb-20 pt-32">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground">
          Terms and Conditions
        </h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: February 2026
        </p>

        <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p className="mt-3">
              By accessing and using the Prodigy Wildfire Solutions website and services, you
              accept and agree to be bound by these Terms and Conditions. If you do not agree
              to these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">2. Services</h2>
            <p className="mt-3">
              Prodigy Wildfire Solutions provides exterior wildfire sprinkler systems, ember
              detection technology, remote monitoring solutions, and related wildfire protection
              services. All services are subject to site assessment, local regulations, and
              availability in your region.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">3. Use of Website</h2>
            <p className="mt-3">
              You agree to use this website only for lawful purposes and in a manner that does
              not infringe upon or restrict the use and enjoyment of this website by any third
              party. Prohibited behaviour includes harassing or causing distress or inconvenience
              to any person, transmitting obscene or offensive content, or disrupting the normal
              flow of dialogue within our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">4. Intellectual Property</h2>
            <p className="mt-3">
              All content on this website, including but not limited to text, graphics, logos,
              images, videos, and software, is the property of Prodigy Wildfire Solutions or its
              content suppliers and is protected by international copyright and trademark laws.
              You may not reproduce, distribute, or create derivative works from any content
              without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">5. Quotes and Pricing</h2>
            <p className="mt-3">
              All quotes provided through our website or by our team are estimates based on the
              information provided and are subject to change following a formal site assessment.
              Final pricing will be confirmed in a written agreement prior to commencement of
              any installation work.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">6. Limitation of Liability</h2>
            <p className="mt-3">
              Prodigy Wildfire Solutions shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising out of or related to your use
              of our website or services. Our wildfire protection systems are designed to reduce
              the risk of property damage from wildfire but do not guarantee complete protection
              in all circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">7. Warranties and Disclaimers</h2>
            <p className="mt-3">
              While our systems are engineered to the highest standards, Prodigy Wildfire
              Solutions makes no warranties, express or implied, regarding the absolute
              effectiveness of wildfire protection in every scenario. Wildfire behaviour is
              unpredictable and influenced by many factors beyond our control, including
              weather conditions, terrain, and fuel loads.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">8. Governing Law</h2>
            <p className="mt-3">
              These terms shall be governed by and construed in accordance with the laws of the
              Province of British Columbia, Canada, without regard to its conflict of law
              provisions. Any disputes arising from these terms shall be resolved in the courts
              of British Columbia.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">9. Changes to Terms</h2>
            <p className="mt-3">
              Prodigy Wildfire Solutions reserves the right to modify these Terms and Conditions
              at any time. Changes will be effective immediately upon posting to this page. Your
              continued use of the website following any changes constitutes acceptance of those
              changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">10. Contact Us</h2>
            <p className="mt-3">
              If you have any questions about these Terms and Conditions, please contact us at{" "}
              <a
                href="/contact"
                className="text-accent underline underline-offset-4 hover:text-accent/80"
              >
                our contact page
              </a>.
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
