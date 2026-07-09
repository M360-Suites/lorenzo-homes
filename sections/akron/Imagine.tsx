const OUTCOMES = [
  "You receive rental income — every month.",
  "Your property value has appreciated significantly.",
  "Businesses occupy your commercial unit.",
  "Your investment has become an income-producing asset.",
];

export default function AkronImagine() {
  return (
    <section className="bg-ink text-white py-28 max-md:py-20" id="imagine">
      <div className="wrap max-w-7xl">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
          {/* Left */}
          <div>
            <p className="eyebrow eyebrow-light mb-5">
              <span
                className="eyebrow-line"
                style={{ background: "var(--color-brass-light)" }}
              />
              Your Future
            </p>
            <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] text-white mb-8">
              Imagine Two Years{" "}
              <span className="ital text-brass-light">From Today...</span>
            </h2>

            <p className="text-white/60 text-[0.85rem] uppercase tracking-widest font-bold mb-6">
              While others complain about inflation...
            </p>

            <ul className="space-y-5 mb-10">
              {OUTCOMES.map((o) => (
                <li key={o} className="flex items-start gap-4">
                  <svg
                    viewBox="0 0 20 20"
                    className="w-5 h-5 text-brass-light shrink-0 mt-[3px]"
                    aria-hidden="true"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M6 10l3 3 5-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-[1.05rem] text-white/85">{o}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="border-l border-white/10 pl-16 max-lg:pl-0 max-lg:border-l-0 max-lg:border-t max-lg:border-white/10 max-lg:pt-10">
            <p className="font-display text-[clamp(1.4rem,3vw,2.2rem)] text-white/90 leading-[1.35] mb-8 ital">
              &ldquo;This is what commercial real estate does.&rdquo;
            </p>
            <p className="text-[1rem] text-white/60 leading-relaxed mb-8">
              It doesn&apos;t ask you to stay up watching charts. It
              doesn&apos;t fluctuate with social media trends. It quietly
              appreciates — paying you while it grows.
            </p>
            <div className="bg-brass/15 border border-brass/30 rounded-xl p-6">
              <p className="text-brass-light font-display text-[2.8rem] font-semibold m-0 leading-none">
                80%
              </p>
              <p className="text-white/70 text-[0.85rem] mt-1 m-0">
                Projected ROI · Lorenzo Homes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
