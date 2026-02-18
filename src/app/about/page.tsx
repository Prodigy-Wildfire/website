import { Header } from "@/components/header"
import { HeroSection } from "@/components/about/hero-section"
import { MissionSection } from "@/components/about/mission-section"
import { EngineeringSection } from "@/components/about/engineering-section"
import { TeamSection } from "@/components/about/team-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About Prodigy Wildfire | The Future of Wildfire Protection",
  description:
    "Meet the team redefining wildfire defence across North America and Australia. Engineering excellence meets innovation in every installation.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Organization",
    name: "Prodigy Wildfire Solutions",
    url: "https://www.prodigywildfire.com",
    description:
      "Meet the team redefining wildfire defence across North America and Australia. Engineering excellence meets innovation in every installation.",
    founder: [
      {
        "@type": "Person",
        name: "George Harris",
        jobTitle: "CEO",
        image: "https://www.prodigywildfire.com/images/george-harris.jpg",
        description:
          "UK-born engineer with a background in high-end construction and large-scale development. Founded Prodigy in Whistler, BC after witnessing the impact of Canada's wildfires.",
        worksFor: {
          "@type": "Organization",
          name: "Prodigy Wildfire Solutions",
        },
      },
      {
        "@type": "Person",
        name: "Liam Sheppard",
        jobTitle: "COO",
        image: "https://www.prodigywildfire.com/images/liam-sheppard.jpg",
        description:
          "Co-founded Prodigy Wildfire with a background in home building and insurance work. Expanded operations from Canada to Australia and the U.S.",
        worksFor: {
          "@type": "Organization",
          name: "Prodigy Wildfire Solutions",
        },
      },
      {
        "@type": "Person",
        name: "Steve Johnson-Stott",
        jobTitle: "CFO",
        image:
          "https://www.prodigywildfire.com/images/steve-johnson-stott.jpg",
        description:
          "30 years of experience in financial and operational management. Leads Prodigy's financial strategy, budgeting, and growth planning.",
        worksFor: {
          "@type": "Organization",
          name: "Prodigy Wildfire Solutions",
        },
      },
    ],
  },
};

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <HeroSection />
      <MissionSection />
      <EngineeringSection />
      <TeamSection />
      <Footer />
    </main>
  )
}
