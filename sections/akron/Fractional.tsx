"use client";
import { useState } from "react";
import ConsultationButton from "@/components/ConsultationButton";
import { useReveal } from "@/hooks/useReveal";
import { MIN_PRICE, MIN_SQM, naira } from "./data";

const LETTERS = "ABCDE";

export default function AkronFractional() {
  const [count, setCount] = useState<4 | 5>(4);
  const headRef = useReveal<HTMLDivElement>();
  const graphicRef = useReveal<HTMLDivElement>();
  const share = MIN_PRICE / count;
  const pct = 100 / count;

  return (
    <section className="bg-stone py-28 max-md:py-20" id="fractional">
      <div className="wrap max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-center">
          {/* Left: copy */}
          <div ref={headRef} className="reveal">
            <p className="eyebrow mb-5">
              <span className="eyebrow-line" />
              How Fractional Buying Works
            </p>
            <h2 className="text-[clamp(1.7rem,3.8vw,2.9rem)] text-ink mb-6">
              {naira(MIN_PRICE)} Sounds Big.{" "}
              <span className="ital text-brass">
                Until You Stop Thinking About It as a One-Person Purchase.
              </span>
            </h2>
            <p className="text-ink-soft text-[1.02rem] leading-relaxed mb-8">
              Imagine a {MIN_SQM}sqm shop valued at {naira(MIN_PRICE)}. Instead
              of one person contributing the entire amount:
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[4, 5].map((n) => (
                <div key={n} className="bg-paper border border-stone-line rounded-xl p-6 max-md:p-5">
                  <p className="text-[0.75rem] font-bold uppercase tracking-widest text-ink-soft m-0 mb-2">
                    {n} people
                  </p>
                  <p className="font-display text-[1.9rem] max-md:text-[1.5rem] font-semibold text-ink m-0 leading-none">
                    {naira(MIN_PRICE / n)}
                  </p>
                  <p className="text-ink-soft text-[0.85rem] m-0 mt-2">
                    each · collectively {naira(MIN_PRICE)}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-ink-soft text-[1.02rem] leading-relaxed mb-6">
              Or create another contribution structure based on what each
              investor can comfortably put down. The important part? Each
              person&apos;s economic interest can be linked to their
              contribution.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 font-semibold text-ink">
                <span className="text-brass">↑</span> Put in more → own a larger share.
              </li>
              <li className="flex items-center gap-3 font-semibold text-ink">
                <span className="text-brass">↓</span> Put in less → own a smaller share.
              </li>
            </ul>
            <p className="text-ink-soft text-[0.95rem] leading-relaxed mb-10">
              Where returns or appreciation are realised, proceeds can be
              distributed according to each person&apos;s agreed ownership
              percentage.
            </p>

            <ConsultationButton>I Want to Explore Fractional Ownership</ConsultationButton>
          </div>

          {/* Right: ownership graphic */}
          <div ref={graphicRef} className="reveal">
            <div className="bg-ink text-white rounded-2xl p-8 max-md:p-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.16em] text-white/50 m-0 mb-1">
                    Akron UBA Mall — {MIN_SQM}sqm
                  </p>
                  <p className="font-display text-[2.4rem] font-semibold m-0 leading-none">
                    {naira(MIN_PRICE)}
                  </p>
                </div>
                <div className="flex rounded-md border border-white/20 overflow-hidden shrink-0" role="group" aria-label="Number of investors">
                  {([4, 5] as const).map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setCount(n)}
                      aria-pressed={count === n}
                      className={`px-3.5 py-2 text-[0.8rem] font-bold cursor-pointer transition-colors ${
                        count === n ? "bg-brass text-white" : "bg-transparent text-white/60 hover:text-white"
                      }`}
                    >
                      {n} investors
                    </button>
                  ))}
                </div>
              </div>

              {/* Property block split into portions */}
              <div className="flex h-44 max-md:h-36 rounded-lg overflow-hidden border border-white/15 mb-6">
                {Array.from({ length: count }).map((_, i) => (
                  <div
                    key={`${count}-${i}`}
                    className="flex-1 flex flex-col justify-end p-3 max-md:p-2 border-r border-ink last:border-r-0 animate-fade-up"
                    style={{
                      background: `rgba(215,168,90,${0.18 + i * 0.1})`,
                    }}
                  >
                    <p className="text-[0.7rem] uppercase tracking-widest text-white/70 m-0">
                      {LETTERS[i]}
                    </p>
                    <p className="font-display text-[1.25rem] max-md:text-[1rem] font-semibold m-0 leading-none">
                      {pct}%
                    </p>
                  </div>
                ))}
              </div>

              <ul className="divide-y divide-white/10 mb-6">
                {Array.from({ length: count }).map((_, i) => (
                  <li key={i} className="flex items-center justify-between py-2.5 text-[0.95rem]">
                    <span className="text-white/70">
                      Investor {LETTERS[i]} — {pct}%
                    </span>
                    <span className="font-semibold">{naira(share)}</span>
                  </li>
                ))}
              </ul>

              <p className="text-center text-[0.72rem] max-md:text-[0.62rem] font-extrabold tracking-[0.16em] uppercase text-brass-light m-0 border-t border-white/10 pt-5">
                1 Property → Multiple Investors → Shared Ownership
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
