import type { Metadata } from "next";
import SalesShell from "./SalesShell";
import AkronHero from "@/sections/akron/Hero";
import AkronTransfer from "@/sections/akron/Transfer";
import AkronOrchidRoad from "@/sections/akron/OrchidRoad";
import AkronWhyBuyEarly from "@/sections/akron/WhyBuyEarly";
import AkronFeatures from "@/sections/akron/Features";
import AkronImagine from "@/sections/akron/Imagine";
import AkronUrgency from "@/sections/akron/Urgency";
import AkronLorenzo from "@/sections/akron/Lorenzo";
import AkronTestimonials from "@/sections/akron/Testimonials";
import AkronFAQ from "@/sections/akron/FAQ";
import AkronClose from "@/sections/akron/Close";

export const metadata: Metadata = {
  title: "Invest on Orchid Road, Lekki — Lorenzo Homes",
  description:
    "Own a commercial unit in Lorenzo Homes' landmark mixed-use mall on Orchid Road, Lekki. Up to 80% projected ROI. Retail, office, showrooms & restaurants. Book a free investment consultation today.",
};

export default function SalesPage() {
  return (
    <SalesShell>
      <div className="grain" aria-hidden="true" />
      <main>
        <AkronHero />
        <AkronTransfer />
        <AkronOrchidRoad />
        <AkronWhyBuyEarly />
        <AkronFeatures />
        <AkronImagine />
        <AkronUrgency />
        <AkronLorenzo />
        <AkronTestimonials />
        <AkronFAQ />
        <AkronClose />
      </main>
    </SalesShell>
  );
}
