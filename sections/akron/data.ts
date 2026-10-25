import type { StaticImageData } from "next/image";
import House01 from "@/public/assets/house01.jpg";
import House02 from "@/public/assets/house02.jpg";
import House03 from "@/public/assets/house03.jpg";
import Progress1 from "@/public/assets/progress1.jpg";
import Progress2 from "@/public/assets/progress2.jpg";
import SalesUpdate from "@/public/img_sales01.jpg";
import SalesProgress from "@/public/img_sales02.jpg";

// ── Pricing (in ₦ millions) ──
export const PRICE_PER_SQM = 2.2;
export const FRONT_PRICE_PER_SQM = 2.3;
export const MIN_SQM = 26;
export const MAX_SQM = 86;
export const MIN_PRICE = MIN_SQM * PRICE_PER_SQM; // 57.2

export const COMPLETION = 98;
export const INITIAL_PCT = 0.7;
export const BALANCE_PCT = 0.3;
export const BALANCE_MONTHS = 3;
export const EXPECTED_GROWTH = 0.7; // projected 2-year value increase

export const FLOORS = [
  { name: "Third Floor", available: 10 },
  { name: "Second Floor", available: 10 },
  { name: "First Floor", available: 7 },
  { name: "Ground Floor", available: 0 },
];
export const SHOPS_LEFT = FLOORS.reduce((s, f) => s + f.available, 0); // 27

// ── Lead form qualifiers ──
export const PAYMENT_FORMATS = ["Installment", "Full payment"];
export const PURCHASE_TIMELINES = [
  "0 to 7 days",
  "7 to 30 days",
  "30 to 60 days",
  "60 to 90 days",
  "90 days and above",
];

/** Format a value in ₦ millions: 57.2 → "₦57.2M", 19.0667 → "₦19.07M" */
export function naira(m: number) {
  return `₦${Number(m.toFixed(2)).toLocaleString("en-NG")}M`;
}

// ── Images ──
// Renders are labelled as renders; site photos as on-site.
export const IMG = {
  renderFront: House03, // full front elevation render
  renderCorner: House01, // corner render
  renderSide: House02, // side / shopfront render
  siteCourtyard: Progress1, // actual site — courtyard
  siteWide: Progress2, // actual site — wide courtyard
  siteUpdate: SalesUpdate, // branded render "site update"
  siteProgress: SalesProgress, // branded site photo "work in progress"
} satisfies Record<string, StaticImageData>;

// ── Video slots ──
// Drop real Akron UBA Mall footage into /public/videos and set the paths here.
// Until then each slot falls back to its poster image.
export const VIDEO: Record<
  "hero" | "walkthrough" | "urgency" | "final",
  string | undefined
> = {
  hero: undefined,
  walkthrough: undefined,
  urgency: undefined,
  final: undefined,
};
