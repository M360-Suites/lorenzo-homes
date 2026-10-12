"use client";
import { useState } from "react";
import ConsultationButton from "@/components/ConsultationButton";
import { useReveal } from "@/hooks/useReveal";
import {
  EXPECTED_GROWTH,
  FRONT_PRICE_PER_SQM,
  MAX_SQM,
  MIN_SQM,
  PRICE_PER_SQM,
  naira,
} from "./data";

const TABLE_COUNTS = [2, 3, 4, 5, 6, 8, 10];
const MAX_INVESTORS = 20;

const clamp = (n: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, Number.isFinite(n) ? n : lo));

export default function AkronCalculator() {
  const [sqm, setSqm] = useState(MIN_SQM);
  const [front, setFront] = useState(false);
  const [investors, setInvestors] = useState(4);
  const headRef = useReveal<HTMLDivElement>();
  const toolRef = useReveal<HTMLDivElement>();

  const rate = front ? FRONT_PRICE_PER_SQM : PRICE_PER_SQM;
  const total = sqm * rate;
  const each = total / investors;
  const pct = 100 / investors;
  const eachFuture = each * (1 + EXPECTED_GROWTH);

  const results = [
    { k: "Total property value", v: naira(total) },
    { k: "Contribution per investor", v: naira(each), accent: true },
    { k: "Illustrative ownership", v: `${Number(pct.toFixed(2))}%` },
    { k: "Illustrative value at +70%", v: naira(eachFuture) },
  ];

  return (
    <section className="bg-stone py-28 max-md:py-20" id="calculator">
      <div className="wrap max-w-7xl">
        <div ref={headRef} className="reveal section-head">
          <p className="eyebrow mb-5">
            <span className="eyebrow-line" />
            Fractional Investment Calculator
          </p>
          <h2 className="text-[clamp(1.7rem,3.8vw,2.9rem)] text-ink mb-4">
            How Much Would You{" "}
            <span className="ital text-brass">Like to Own?</span>
          </h2>
          <p className="text-ink-soft text-[1rem] m-0">
            You don&apos;t need to find the full amount alone. Build a group
            around the opportunity and see what it looks like for you.
          </p>
        </div>

        <div ref={toolRef} className="reveal grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 items-start">
          {/* Interactive tool */}
          <div className="bg-paper border border-stone-line rounded-2xl overflow-hidden">
            <div className="p-8 max-md:p-5 grid gap-8">
              {/* Shop size */}
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <label htmlFor="calc-sqm" className="text-[0.8rem] font-bold uppercase tracking-widest text-ink-soft">
                    Shop size
                  </label>
                  <span className="font-display text-[1.6rem] font-semibold text-ink leading-none">
                    {sqm}sqm
                  </span>
                </div>
                <input
                  id="calc-sqm"
                  type="range"
                  min={MIN_SQM}
                  max={MAX_SQM}
                  value={sqm}
                  onChange={(e) => setSqm(Number(e.target.value))}
                  className="w-full accent-[var(--color-brass)] cursor-pointer"
                />
                <div className="flex justify-between text-[0.75rem] text-ink-soft mt-1">
                  <span>{MIN_SQM}sqm</span>
                  <span>{MAX_SQM}sqm</span>
                </div>
              </div>

              {/* Price per sqm */}
              <div>
                <p className="text-[0.8rem] font-bold uppercase tracking-widest text-ink-soft m-0 mb-3">
                  Price per sqm
                </p>
                <div className="grid grid-cols-2 gap-3" role="group" aria-label="Price per sqm">
                  {[
                    { f: false, l: "Other shops", v: PRICE_PER_SQM },
                    { f: true, l: "Front shops", v: FRONT_PRICE_PER_SQM },
                  ].map((o) => (
                    <button
                      key={o.l}
                      type="button"
                      onClick={() => setFront(o.f)}
                      aria-pressed={front === o.f}
                      className={`text-left rounded-lg border px-4 py-3 cursor-pointer transition-colors ${
                        front === o.f
                          ? "border-brass bg-brass/10"
                          : "border-stone-line bg-paper hover:border-brass/50"
                      }`}
                    >
                      <span className="block font-display text-[1.25rem] font-semibold text-ink">
                        {naira(o.v)}
                      </span>
                      <span className="block text-[0.78rem] text-ink-soft">{o.l}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Investors */}
              <div>
                <label htmlFor="calc-investors" className="text-[0.8rem] font-bold uppercase tracking-widest text-ink-soft block mb-3">
                  Number of investors
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setInvestors((n) => clamp(n - 1, 1, MAX_INVESTORS))}
                    className="w-12 h-12 rounded-lg border border-stone-line bg-paper text-ink text-[1.3rem] font-bold cursor-pointer hover:border-brass"
                    aria-label="Fewer investors"
                  >
                    −
                  </button>
                  <input
                    id="calc-investors"
                    type="number"
                    min={1}
                    max={MAX_INVESTORS}
                    value={investors}
                    onChange={(e) => setInvestors(clamp(Math.round(Number(e.target.value)), 1, MAX_INVESTORS))}
                    className="w-20 h-12 text-center font-display text-[1.5rem] font-semibold text-ink border border-stone-line rounded-lg bg-paper outline-none focus:border-brass"
                  />
                  <button
                    type="button"
                    onClick={() => setInvestors((n) => clamp(n + 1, 1, MAX_INVESTORS))}
                    className="w-12 h-12 rounded-lg border border-stone-line bg-paper text-ink text-[1.3rem] font-bold cursor-pointer hover:border-brass"
                    aria-label="More investors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-ink text-white p-8 max-md:p-5" aria-live="polite">
              <div className="grid grid-cols-2 gap-px bg-white/10 rounded-lg overflow-hidden mb-6">
                {results.map((r) => (
                  <div key={r.k} className="bg-ink p-5 max-md:p-4">
                    <p className="text-[0.7rem] uppercase tracking-widest text-white/50 m-0 mb-2">
                      {r.k}
                    </p>
                    <p
                      className={`font-display text-[clamp(1.4rem,3vw,2rem)] font-semibold m-0 leading-none ${
                        r.accent ? "text-brass-light" : "text-white"
                      }`}
                    >
                      {r.v}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-white/45 text-[0.78rem] m-0 mb-6">
                Illustrative only. The +70% figure is a projected 2-year value
                increase, not a guaranteed return, and is before costs, taxes
                and fees.
              </p>
              <ConsultationButton>I Want to Build a Group</ConsultationButton>
            </div>
          </div>

          {/* Equal-split table */}
          <div className="bg-paper border border-stone-line rounded-2xl p-8 max-md:p-5">
            <p className="text-[0.75rem] font-bold uppercase tracking-[0.16em] text-ink-soft m-0 mb-1">
              Equal contribution each
            </p>
            <p className="font-display text-[1.3rem] text-ink m-0 mb-5">
              {sqm}sqm shop — {naira(total)}
            </p>
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left text-[0.72rem] uppercase tracking-widest text-ink-soft">
                  <th className="font-bold pb-3">Investors</th>
                  <th className="font-bold pb-3 text-right">Each</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_COUNTS.map((n) => (
                  <tr
                    key={n}
                    onClick={() => setInvestors(n)}
                    className={`border-t border-stone-line cursor-pointer transition-colors ${
                      n === investors ? "bg-brass/10" : "hover:bg-stone"
                    }`}
                  >
                    <td className="py-3 px-2 font-semibold text-ink">{n}</td>
                    <td className="py-3 px-2 text-right font-display text-[1.2rem] text-ink">
                      {naira(total / n)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
