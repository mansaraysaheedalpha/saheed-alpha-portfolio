import type { Metadata } from "next";

import { ContactHero } from "@/components/contact/contact-hero";
import { ContactProcess } from "@/components/contact/contact-process";
import { ProjectEnquiryForm } from "@/components/contact/project-enquiry-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discuss a website, MVP, dashboard, AI-powered application, feature build, or existing product with independent full-stack developer Saheed Alpha Mansaray.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#07111f] text-white">
      <ContactHero />

      <section className="relative isolate bg-[#07111f] pb-20 text-white sm:pb-24 lg:pb-28">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#07111f_0%,#09182a_46%,#07111f_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.12),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(14,165,233,0.07),transparent_30%)]" />
        </div>

        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:px-8">
          <ProjectEnquiryForm />
          <ContactProcess />
        </div>
      </section>
    </main>
  );
}
