"use client";
import Image from "next/image";
import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { BALANCE_MONTHS, IMG } from "./data";

const visualCls =
  "relative aspect-[16/9] rounded-lg overflow-hidden mb-6 flex items-center justify-center";

const STEPS: { title: string; body: string; visual: ReactNode }[] = [
  {
    title: "Choose Your Space",
    body: "Tell us the size and floor you're interested in.",
    visual: (
      <div className={visualCls}>
        <Image src={IMG.renderFront} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" placeholder="blur" className="object-cover" />
      </div>
    ),
  },
  {
    title: "Decide How You Want to Own",
    body: "Purchase individually or explore a fractional arrangement with trusted partners.",
    visual: (
      <div className={`${visualCls} bg-ink`}>
        <div className="flex -space-x-3">
          {["A", "B", "C", "D"].map((l, i) => (
            <span
              key={l}
              className="w-12 h-12 rounded-full border-2 border-ink flex items-center justify-center font-bold text-white"
              style={{ background: `rgba(215,168,90,${0.35 + i * 0.18})` }}
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Confirm Your Contribution",
    body: "Determine how much you're contributing and your corresponding ownership percentage.",
    visual: (
      <div className={`${visualCls} bg-ink`}>
        <div
          className="w-24 h-24 rounded-full"
          style={{
            background:
              "conic-gradient(var(--color-brass-light) 0 35%, var(--color-brass) 35% 61%, #8a6324 61% 79%, rgba(255,255,255,0.25) 79% 100%)",
          }}
          aria-hidden="true"
        />
      </div>
    ),
  },
  {
    title: "Make the Initial Payment",
    body: "Pay the required 70% initial payment.",
    visual: (
      <div className={`${visualCls} bg-brass`}>
        <span className="font-display text-[3.6rem] font-semibold text-white">70%</span>
      </div>
    ),
  },
  {
    title: `Complete Within ${BALANCE_MONTHS} Months`,
    body: `Pay the remaining 30% balance within the agreed ${BALANCE_MONTHS}-month period.`,
    visual: (
      <div className={`${visualCls} bg-ink`}>
        <span className="font-display text-[3.6rem] font-semibold text-white">30%</span>
      </div>
    ),
  },
  {
    title: "Own Your Share",
    body: "Your ownership documentation and investment structure clearly reflect your agreed share.",
    visual: (
      <div className={visualCls}>
        <Image src={IMG.renderCorner} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" placeholder="blur" className="object-cover" />
        <div className="absolute inset-0 bg-ink/45" />
        <svg viewBox="0 0 48 48" className="relative w-14 h-14 text-white" aria-hidden="true">
          <path d="M12 4h18l8 8v32H12z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M30 4v8h8M18 22h14M18 28h14M18 34h8" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    ),
  },
];

function Step({ i, title, body, visual }: (typeof STEPS)[0] & { i: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal bg-stone border border-stone-line rounded-xl p-6 relative">
      {visual}
      <p className="font-display text-[0.95rem] text-brass m-0 mb-2">
        {String(i + 1).padStart(2, "0")} —
      </p>
      <h3 className="font-body font-extrabold text-[1.15rem] text-ink mb-2">{title}</h3>
      <p className="text-ink-soft text-[0.93rem] leading-relaxed m-0">{body}</p>
    </div>
  );
}

export default function AkronHowItWorks() {
  const headRef = useReveal<HTMLDivElement>();
  return (
    <section className="bg-paper py-28 max-md:py-20" id="how-it-works">
      <div className="wrap max-w-7xl">
        <div ref={headRef} className="reveal section-head">
          <p className="eyebrow mb-4">
            <span className="eyebrow-line" />
            How It Works
          </p>
          <h2 className="text-[clamp(1.7rem,3.8vw,2.9rem)] text-ink m-0">
            How to Invest in{" "}
            <span className="ital text-brass">Akron UBA Mall</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STEPS.map((s, i) => (
            <Step key={s.title} i={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
