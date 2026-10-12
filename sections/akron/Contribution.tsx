"use client";
import Image from "next/image";
import ConsultationButton from "@/components/ConsultationButton";
import { useReveal } from "@/hooks/useReveal";
import { IMG, MIN_PRICE, naira } from "./data";

const INVESTORS = [
  { name: "Investor A", amount: 20 },
  { name: "Investor B", amount: 15 },
  { name: "Investor C", amount: 10 },
  { name: "Investor D", amount: 12.2 },
];
const MAX = Math.max(...INVESTORS.map((i) => i.amount));

export default function AkronContribution() {
  const leftRef = useReveal<HTMLDivElement>();
  const chartRef = useReveal<HTMLDivElement>();

  return (
    <section className="bg-stone py-28 max-md:py-20" id="your-share">
      <div className="wrap max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          <div ref={leftRef} className="reveal">
            <p className="eyebrow mb-5">
              <span className="eyebrow-line" />
              Your Money. Your Share.
            </p>
            <h2 className="text-[clamp(1.7rem,3.8vw,2.9rem)] text-ink mb-6">
              The More You Contribute,{" "}
              <span className="ital text-brass">the Larger Your Share.</span>
            </h2>
            <p className="text-ink-soft text-[1.02rem] leading-relaxed mb-4">
              Fractional ownership doesn&apos;t mean everyone has to put in the
              same amount. Each investor&apos;s ownership percentage can be
              calculated based on their agreed contribution.
            </p>
            <p className="text-ink text-[1.05rem] font-semibold leading-relaxed mb-8">
              Your contribution determines your share. Your share determines your
              proportion of any eventual proceeds from a sale or other agreed
              realisation of the investment.
            </p>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
              <Image
                src={IMG.siteWide}
                alt="Akron UBA Mall on site — upper floor shop spaces"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                placeholder="blur"
                className="object-cover object-[center_30%]"
              />
            </div>

            <ConsultationButton>I Want to Invest With Friends</ConsultationButton>
          </div>

          {/* Contribution bars */}
          <div ref={chartRef} className="reveal bg-paper border border-stone-line rounded-2xl p-8 max-md:p-5">
            <div className="flex items-end gap-5 max-md:gap-3 h-80 max-md:h-64 mb-6 border-b border-stone-line">
              {INVESTORS.map((inv, i) => (
                <div key={inv.name} className="flex-1 flex flex-col justify-end h-full">
                  <p className="font-display text-[1.35rem] max-md:text-[1rem] font-semibold text-ink m-0 mb-1 leading-none">
                    {naira(inv.amount)}
                  </p>
                  <p className="text-[0.8rem] font-bold text-brass m-0 mb-2">
                    {((inv.amount / MIN_PRICE) * 100).toFixed(1)}%
                  </p>
                  <div
                    className="grow-bar rounded-t-md"
                    style={
                      {
                        "--h": `${(inv.amount / MAX) * 70}%`,
                        "--i": i,
                        background: `rgba(184,132,47,${0.45 + (inv.amount / MAX) * 0.55})`,
                      } as React.CSSProperties
                    }
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-5 max-md:gap-3 mb-8">
              {INVESTORS.map((inv) => (
                <p
                  key={inv.name}
                  className="flex-1 text-[0.72rem] max-md:text-[0.62rem] uppercase tracking-widest text-ink-soft m-0"
                >
                  {inv.name}
                </p>
              ))}
            </div>
            <div className="bg-ink text-white rounded-lg px-6 py-4 flex items-center justify-between">
              <span className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-white/60">
                Total
              </span>
              <span className="font-display text-[1.8rem] font-semibold">
                {naira(MIN_PRICE)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
