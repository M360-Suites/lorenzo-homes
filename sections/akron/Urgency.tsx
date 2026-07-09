import ConsultationButton from "@/components/ConsultationButton";

const CONSEQUENCES = [
  {
    label: "Prices rise.",
    sub: "Every phase of construction increases the asking price.",
  },
  {
    label: "Rental demand rises.",
    sub: "More businesses compete for fewer available units.",
  },
  {
    label: "Available units reduce.",
    sub: "Scarcity is not a marketing trick — it's arithmetic.",
  },
];

export default function AkronUrgency() {
  return (
    <section className="bg-paper py-28 max-md:py-20" id="urgency">
      <div className="wrap max-w-7xl">
        <div className="max-w-[760px] mx-auto text-center">
          <p className="eyebrow justify-center mb-5">
            <span className="eyebrow-line" />
            Timing Matters
            <span className="eyebrow-line" />
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,3.1rem)] text-ink mb-4">
            Why Buy{" "}
            <span className="ital text-brass">Before Everyone Else?</span>
          </h2>
          <p className="text-ink-soft text-[1rem] mb-14">
            Because once construction advances...
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-stone-line mb-16">
            {CONSEQUENCES.map((c) => (
              <div key={c.label} className="bg-paper px-8 py-10 max-md:py-7">
                <p className="font-display text-[1.4rem] text-ink mb-3">
                  {c.label}
                </p>
                <p className="text-ink-soft text-[0.9rem] m-0">{c.sub}</p>
              </div>
            ))}
          </div>

          <div className="bg-stone border border-stone-line rounded-xl p-8 max-md:p-6 mb-10">
            <p className="text-[1.25rem] max-md:text-[1.05rem] text-ink font-display ital mb-3">
              &ldquo;Waiting doesn&apos;t reduce the price.
            </p>
            <p className="text-[1.25rem] max-md:text-[1.05rem] text-brass font-display ital">
              It usually increases it.&rdquo;
            </p>
          </div>

          <ConsultationButton>Reserve My Unit Now</ConsultationButton>
        </div>
      </div>
    </section>
  );
}
