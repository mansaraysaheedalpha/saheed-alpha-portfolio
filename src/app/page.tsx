import { AboutPreview } from "@/components/home/about-preview";
import { FinalCta } from "@/components/home/final-cta";
import { Hero } from "@/components/home/hero";
import { PricingPreview } from "@/components/home/pricing-preview";
import { ProcessPreview } from "@/components/home/process-preview";
import { SelectedWork } from "@/components/home/selected-work";
import { ServicesPreview } from "@/components/home/services-preview";
import { WhyWorkWithMe } from "@/components/home/why-work-with-me";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <ServicesPreview />
      <WhyWorkWithMe />
      <ProcessPreview />
      <PricingPreview />
      <AboutPreview />
      <FinalCta />
    </main>
  );
}
