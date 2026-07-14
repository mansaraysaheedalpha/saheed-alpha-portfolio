import type { Metadata } from "next";

import {
  AlternativeEngagementModels,
  PackagePricing,
  PaymentTerms,
  PricingCta,
  PricingFaq,
  PricingFactors,
  PricingHero,
} from "@/components/pricing/pricing-sections";
import { pricingOptions } from "@/data/pricing";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for focused web builds, MVP development, AI-powered products, development sprints, and ongoing technical support.",
};

export default function PricingPage() {
  return (
    <main>
      <PricingHero />
      <PackagePricing services={services} />
      <AlternativeEngagementModels options={pricingOptions} />
      <PricingFactors />
      <PaymentTerms />
      <PricingFaq />
      <PricingCta />
    </main>
  );
}
