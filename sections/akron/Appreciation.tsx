"use client";
import { useReveal } from "@/hooks/useReveal";
import { EXPECTED_GROWTH, MIN_PRICE, MIN_SQM, naira } from "./data";

const FUTURE = MIN_PRICE * (1 + EXPECTED_GROWTH); // 97.24
const GAIN = FUTURE - MIN_PRICE; // 40.04
const INVESTORS = 4;

export default function AkronAppreciation() {
  const headRef = useReveal<HTMLDivElement>();
  const chartRef = useReveal<HTMLDivElement>();
  const splitRef = useReveal<HTMLDivElement>();

  return (
    <section className="bg-ink text-white py-28 max-md:py-20" id="appreciation">
      <div className="wrap max-w-7xl">
        <div ref={headRef} className="reveal max-w-[760px] mb-14">
          <p className="eyebrow eyebrow-light mb-5">
            <span
              className="eyebrow-line"
              style={{ background: "var(--color-brass-light)" }}
            />
            The Appreciation Story
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] text-white mb-6">
            What Could Your Share Be Worth{" "}
            <span className="ital text-brass-light">in Two Years?</span>
          </h2>
          <p className="text-white/70 text-[1.02rem] leading-relaxed m-0">
            The project is expected to see a 70% increase in value over two
            years, based on the project&apos;s stated valuation expectation.
            Let&apos;s use the minimum {MIN_SQM}sqm shop as an illustration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 mb-8">
          {/* Before / after bars */}
          <div ref={chartRef} className="reveal bg-white/[0.04] border border-white/10 rounded-2xl p-8 max-md:p-6">
            <div className="flex items-end gap-6 max-md:gap-4 h-72 max-md:h-60 mb-6">
              {[
                { label: "Today", value: MIN_PRICE, cls: "bg-white/25" },
                { label: "Expected 2-year value", value: FUTURE, cls: "bg-brass" },
              ].map((b, i) => (
                <div key={b.label} className="flex-1 flex flex-col justify-end h-full">
                  <p className="font-display text-[clamp(1.4rem,3vw,2.2rem)] font-semibold m-0 mb-2 leading-none">
                    {naira(b.value)}
                  </p>
                  <div
                    className={`grow-bar rounded-t-md ${b.cls}`}
                    style={
                      {
                        "--h": `${(b.value / FUTURE) * 80}%`,
                        "--i": i,
                      } as React.CSSProperties
                    }
                  />
                  <p className="text-[0.72rem] uppercase tracking-widest text-white/55 m-0 mt-3">
                    {b.label}
                  </p>
                </div>
              ))}
              <div className="flex-1 flex flex-col justify-end h-full max-sm:hidden">
                <p className="font-display text-[clamp(1.4rem,3vw,2.2rem)] font-semibold text-brass-light m-0 mb-2 leading-none">
                  +{naira(GAIN)}
                </p>
                <div
                  className="grow-bar rounded-t-md border-2 border-dashed border-brass-light/60"
                  style={{ "--h": `${(GAIN / FUTURE) * 80}%`, "--i": 2 } as React.CSSProperties}
                />
                <p className="text-[0.72rem] uppercase tracking-widest text-white/55 m-0 mt-3">
                  Illustrative increase
                </p>
              </div>
            </div>
            <p className="text-center text-[0.8rem] font-extrabold tracking-[0.18em] uppercase text-brass-light m-0 border-t border-white/10 pt-5">
              70% Expected Value Increase
            </p>
          </div>

          {/* Fractional view */}
          <div ref={splitRef} className="reveal bg-paper text-ink rounded-2xl p-8 max-md:p-6">
            <p className="eyebrow mb-4">
              <span className="eyebrow-line" />
              Now Think Fractionally
            </p>
            <p className="text-ink-soft text-[0.95rem] mb-6">
              If {INVESTORS} investors collectively own the {naira(MIN_PRICE)}{" "}
              shop equally:
            </p>
            <dl className="divide-y divide-stone-line m-0">
              {[
                { k: "Each invests", v: naira(MIN_PRICE / INVESTORS) },
                { k: `Each 25% share at ${naira(FUTURE)}`, v: `≈ ${naira(FUTURE / INVESTORS)}` },
                { k: "Illustrative increase", v: `${naira(GAIN / INVESTORS)} per person`, accent: true },
              ].map((r) => (
                <div key={r.k} className="flex items-baseline justify-between gap-4 py-4">
                  <dt className="text-[0.8rem] font-bold uppercase tracking-widest text-ink-soft">
                    {r.k}
                  </dt>
                  <dd
                    className={`m-0 font-display font-semibold text-right ${
                      r.accent ? "text-brass text-[1.5rem]" : "text-ink text-[1.5rem]"
                    }`}
                  >
                    {r.v}
                  </dd>
                </div>
              ))}
            </dl>
            <a href="#calculator" className="btn btn-solid btn-consultation mt-6">
              I Want to Calculate My Share
            </a>
          </div>
        </div>

        <p className="text-white/45 text-[0.8rem] leading-relaxed max-w-[820px] m-0">
          Figures are illustrative and before applicable costs, taxes, fees or
          other transaction considerations. Property values are not guaranteed;
          the 70% figure is a projected/expected increase, not a guaranteed
          return.
        </p>
      </div>
    </section>
  );
}
