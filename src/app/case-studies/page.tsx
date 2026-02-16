import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero";
import { CaseStudyGrid } from "@/components/case-studies/case-study-grid";

export const metadata: Metadata = {
  title: "Wildfire Protection Case Studies | Real Installations Across USA, Canada & Australia",
  description:
    "See how Prodigy Wildfire Solutions protects homes, resorts, and critical infrastructure with custom exterior sprinkler systems. Real case studies from installations across the United States, Canada, and Australia.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main>
        <CaseStudiesHero />
        <CaseStudyGrid />
      </main>
      <Footer />
    </>
  );
}
