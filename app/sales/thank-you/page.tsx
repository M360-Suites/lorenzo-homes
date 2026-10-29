import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | Lorenzo Homes",
  description: "Your enquiry about Akron UBA Mall has been received.",
  robots: { index: false, follow: false },
};

const NEXT_STEPS = [
  "We confirm current shop availability and pricing for you",
  "We walk you through the 70% / 30% payment plan or fractional options",
  "We arrange a site visit to Akron UBA Mall if you'd like one",
];

export default function SalesThankYouPage() {
  return (
    <main className="bg-ink text-white pt-44 pb-28 max-md:pt-36 max-md:pb-20">
      <div className="wrap max-w-3xl text-center">
        <div className="mx-auto mb-8 w-16 h-16 rounded-full bg-green-500/15 border border-green-400/40 flex items-center justify-center text-green-400 text-[1.8rem]">
          ✓
        </div>
        <p className="eyebrow eyebrow-light justify-center mb-4">
          <span className="eyebrow-line" style={{ background: "var(--color-brass-light)" }} />
          Enquiry received
        </p>
        <h1 className="text-[clamp(2rem,4.6vw,3.4rem)] text-white mb-5">
          Thank you. Your place in the conversation is secured.
        </h1>
        <p className="text-[1.05rem] text-white/75 max-w-xl mx-auto mb-12">
          A member of the Lorenzo Homes team will call or email you shortly to confirm
          availability at Akron UBA Mall, Orchid Road, Lekki.
        </p>

        <ul className="grid gap-3 text-left max-w-xl mx-auto mb-12">
          {NEXT_STEPS.map((s, i) => (
            <li
              key={s}
              className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-[0.95rem] text-white/85"
            >
              <span className="font-display text-brass-light shrink-0">0{i + 1}</span>
              {s}
            </li>
          ))}
        </ul>

        <Link href="/sales" className="btn btn-solid rounded-lg inline-flex items-center gap-2">
          <ArrowLeft size={18} aria-hidden="true" />
          Go Back
        </Link>
      </div>
    </main>
  );
}
