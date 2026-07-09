import ConsultationButton from "@/components/ConsultationButton";

const COUNTDOWN = [
  "Construction moves forward.",
  "Prices move upward.",
  "Available units become fewer.",
  "Businesses continue searching for premium commercial spaces.",
];

export default function AkronClose() {
  return (
    <section className="bg-ink text-white py-28 max-md:py-20" id="close">
      <div className="wrap max-w-7xl">
        <div className="max-w-[820px] mx-auto">
          {/* Urgency header */}
          <p className="eyebrow eyebrow-light justify-center mb-6">
            <span
              className="eyebrow-line"
              style={{ background: "var(--color-brass-light)" }}
            />
            Don&apos;t Wait
            <span
              className="eyebrow-line"
              style={{ background: "var(--color-brass-light)" }}
            />
          </p>

          <h2 className="text-[clamp(1.8rem,4.2vw,3.4rem)] text-white text-center mb-10">
            Every Month You Wait...
          </h2>

          <ul className="space-y-4 mb-14">
            {COUNTDOWN.map((c) => (
              <li
                key={c}
                className="flex items-start gap-4 bg-white/5 border border-white/8 rounded-lg px-6 py-4"
              >
                <svg
                  viewBox="0 0 16 16"
                  className="w-4 h-4 text-brass-light shrink-0 mt-[3px]"
                  aria-hidden="true"
                >
                  <path
                    d="M8 1l.9 1.9L11 3.3l-1.5 1.5.4 2.2L8 6l-1.9 1 .4-2.2L5 3.3l2.1-.4z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-[1rem] text-white/80">{c}</span>
              </li>
            ))}
          </ul>

          {/* The question */}
          <div className="text-center border-t border-white/10 pt-14">
            <p className="text-white/60 text-[1rem] mb-3">
              The only question is...
            </p>
            <p className="font-display text-[clamp(1.4rem,3.2vw,2.4rem)] text-white/90 ital mb-14">
              Will one of those spaces belong to you?
            </p>

            {/* Final CTA block */}
            <div className="bg-white/5 border border-white/12 rounded-2xl p-10 max-md:p-7">
              <p className="eyebrow eyebrow-light justify-center mb-5">
                <span
                  className="eyebrow-line"
                  style={{ background: "var(--color-brass-light)" }}
                />
                Lorenzo Homes · Orchid Road, Lekki
              </p>
              <h2 className="text-[clamp(1.6rem,3.5vw,2.8rem)] text-white mb-5 max-w-[580px] mx-auto">
                Own a Commercial Unit on Orchid Road, Lekki Today
              </h2>
              <p className="text-white/65 text-[0.97rem] max-w-[520px] mx-auto mb-10 leading-relaxed">
                Position yourself for rental income, capital appreciation, and a
                projected 80% return on investment in one of Lekki&apos;s most
                promising commercial locations.
              </p>
              <div className="flex gap-4 flex-wrap justify-center">
                <ConsultationButton>Reserve Your Unit Today</ConsultationButton>
                <ConsultationButton variant="outline">
                  Book a Free Investment Consultation
                </ConsultationButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
