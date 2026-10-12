import type { Metadata } from "next";
import SalesShell from "./SalesShell";
import AkronStickyBar from "@/sections/akron/StickyBar";
import AkronHero from "@/sections/akron/Hero";
import AkronPain from "@/sections/akron/Pain";
import AkronMeet from "@/sections/akron/Meet";
import AkronFractional from "@/sections/akron/Fractional";
import AkronPayment from "@/sections/akron/Payment";
import AkronLocation from "@/sections/akron/Location";
import AkronDemand from "@/sections/akron/Demand";
import AkronAppreciation from "@/sections/akron/Appreciation";
import AkronContribution from "@/sections/akron/Contribution";
import AkronTogether from "@/sections/akron/Together";
import AkronAvailability from "@/sections/akron/Availability";
import AkronShopOptions from "@/sections/akron/ShopOptions";
import AkronCalculator from "@/sections/akron/Calculator";
import AkronUrgency from "@/sections/akron/Urgency";
import AkronHowItWorks from "@/sections/akron/HowItWorks";
import AkronClose from "@/sections/akron/Close";

export const metadata: Metadata = {
  title: "Akron UBA Mall, Orchid Road Lekki — Own a Shop Together | Lorenzo Homes",
  description:
    "Akron UBA Mall is 98% complete with 27 shops left. Shops from 26sqm at ₦2.2M/sqm, 70% upfront and 30% within 3 months. Buy one with friends, family or partners through fractional ownership.",
};

export default function SalesPage() {
  return (
    <SalesShell>
      <div className="grain" aria-hidden="true" />
      <AkronStickyBar />
      <main>
        <AkronHero />
        <AkronPain />
        <AkronMeet />
        <AkronFractional />
        <AkronPayment />
        <AkronLocation />
        <AkronDemand />
        <AkronAppreciation />
        <AkronContribution />
        <AkronTogether />
        <AkronAvailability />
        <AkronShopOptions />
        <AkronCalculator />
        <AkronUrgency />
        <AkronHowItWorks />
        <AkronClose />
      </main>
    </SalesShell>
  );
}
