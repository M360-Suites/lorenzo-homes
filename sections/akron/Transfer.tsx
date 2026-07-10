export default function AkronTransfer() {
  const losses = [
    "Your cash loses value.",
    "Inflation keeps rising.",
    "Construction costs increase.",
    "Commercial property prices climb.",
  ];

  return (
    <section className="bg-ink text-white py-28 max-md:py-20" id="wealth-transfer">
      <div className="wrap max-w-7xl">
        <div className="max-w-[800px] mx-auto">
          {/* Eyebrow */}
          <p className="eyebrow eyebrow-light mb-6">
            <span className="eyebrow-line" style={{ background: "var(--color-brass-light)" }} />
            The Opportunity
          </p>

          {/* Main headline */}
          <h2 className="text-[clamp(1.9rem,4.2vw,3.4rem)] text-white mb-2 leading-[1.1]">
            The Biggest Wealth Transfer Isn&apos;t Happening In Crypto...
          </h2>
          <h2 className="text-[clamp(1.9rem,4.2vw,3.4rem)] text-brass-light mb-12 leading-[1.1]">
            It&apos;s Happening In Commercial Real Estate.
          </h2>

          {/* Annual losses */}
          <p className="text-white/60 text-[1rem] uppercase tracking-widest font-bold mb-6">
            Every year...
          </p>
          <ul className="space-y-4 mb-12 pl-0 list-none">
            {losses.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="w-[6px] h-[6px] rounded-full bg-brass-light shrink-0 mt-[10px]" />
                <span className="text-[1.15rem] max-md:text-[1rem] text-white/85 font-body">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="w-16 h-[1px] bg-brass/40 mb-10" />

          {/* Manifesto */}
          <p className="text-[1.25rem] max-md:text-[1.05rem] text-white/90 leading-relaxed mb-5">
            The people building wealth aren&apos;t leaving money in the bank.
          </p>
          <p className="text-[1.25rem] max-md:text-[1.05rem] text-white/90 leading-relaxed mb-10">
            They&apos;re buying{" "}
            <span className="font-display ital text-brass-light">
              assets that pay them.
            </span>
          </p>

          <div className="border-l-2 border-brass pl-6 py-2">
            <p className="text-[1.1rem] text-white/75 m-0">
              And one of those assets is now available on Orchid Road.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
