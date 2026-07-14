import type { Metadata } from "next";

import {
  EngagementInclusions,
  ExistingProductSupport,
  ExclusionsSection,
  ServicePackages,
  ServicesCta,
  ServicesHero,
  UiUxFlexibility,
} from "@/components/services/services-sections";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: {
    absolute: "Services | Saheed Alpha Mansaray",
  },
  description:
    "Full-stack product development for founders and small businesses, including focused feature builds, complete MVPs, dashboards, business systems, and AI-powered web applications.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <EngagementInclusions />
      <ServicePackages services={services} />
      <ExistingProductSupport />
      <UiUxFlexibility />
      <ExclusionsSection />
      <ServicesCta />
    </main>
  );
}
