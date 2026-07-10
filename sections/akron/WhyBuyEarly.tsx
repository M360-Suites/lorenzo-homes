"use client";
import { useReveal } from "@/hooks/useReveal";

const METHODS = [
  {
    num: "01",
    title: "Capital Appreciation",
    body: "Buy early. Watch the property's value increase as construction progresses. Early-stage investors capture the maximum upside as the development matures.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-brass mb-5" aria-hidden="true">
        <path d="M6 40h36" stroke="currentColor" strokeWidth="2" />
        <rect x="8" y="28" width="7" height="12" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="20" y="18" width="7" height="22" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="32" y="8" width="7" height="32" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M11.5 24 20 16l10 6 10-14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="35.5" cy="9.5" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Rental Income",
    body: "Generate recurring monthly income from businesses leasing your unit. A prime Orchid Road address commands premium rents from day one of occupancy.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-brass mb-5" aria-hidden="true">
        <circle cx="24" cy="24" r="17" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="24" y1="12" x2="24" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 17h-8a4 4 0 000 8h4a4 4 0 010 8h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Asset Growth",
    body: "Own a physical investment that continues appreciating while your money works for you. Commercial real estate compounds wealth year over year.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-brass mb-5" aria-hidden="true">
        <path d="M6 40h36M10 40V18l14-9 14 9v22M19 40V26h10v14" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M24 9v9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.5" />
      </svg>
    ),
  },
];

function MethodCard({
  num,
  title,
  body,
  icon,
}: (typeof METHODS)[0]) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal bg-stone border border-stone-line rounded-xl p-8 max-md:p-6 relative overflow-hidden"
    >
      {/* Big background number */}
      <span
        className="absolute top-4 right-5 font-display text-[4.5rem] font-semibold leading-none text-stone-line select-none"
        aria-hidden="true"
      >
        {num}
      </span>
      {icon}
      <h3 className="font-body font-extrabold text-[1.35rem] text-ink mb-3">{title}</h3>
      <p className="text-ink-soft text-[0.96rem] leading-relaxed m-0">{body}</p>
    </div>
  );
}

export default function AkronWhyBuyEarly() {
  const headRef = useReveal<HTMLDivElement>();

  return (
    <section className="bg-paper py-28 max-md:py-20" id="why-invest">
      <div className="wrap max-w-7xl">
        <div ref={headRef} className="reveal section-head mb-14">
          <p className="eyebrow mb-4">
            <span className="eyebrow-line" />
            Investment Strategy
          </p>
          <h2 className="text-[clamp(1.7rem,3.8vw,2.9rem)] text-ink mb-4">
            Why Smart Investors Are Buying{" "}
            <span className="ital text-brass">Before Completion</span>
          </h2>
          <p className="text-ink-soft text-[1rem] max-w-[520px]">
            Commercial property creates wealth in three compounding ways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {METHODS.map((m) => (
            <MethodCard key={m.num} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}
