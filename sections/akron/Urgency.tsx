"use client";
import ConsultationButton from "@/components/ConsultationButton";
import { useReveal } from "@/hooks/useReveal";
import Media from "./Media";
import { COMPLETION, FLOORS, IMG, SHOPS_LEFT, VIDEO } from "./data";

export default function AkronUrgency() {
  const ref = useReveal<HTMLDivElement>();
  const open = FLOORS.filter((f) => f.available > 0).reverse();

  return (
    <section className="relative overflow-hidden bg-ink text-white py-32 max-md:py-20" id="urgency">
      <div className="absolute inset-0 z-0">
        <Media
          image={IMG.siteWide}
          video={VIDEO.urgency}
          alt="Akron UBA Mall on site"
          className="object-cover object-[center_40%]"
          drift
        />
        <div className="absolute inset-0 bg-ink/80" />
      </div>

      <div ref={ref} className="reveal wrap max-w-7xl relative z-10">
        <div className="max-w-[860px] mx-auto text-center">
          <p className="eyebrow eyebrow-light justify-center mb-5">
            <span className="eyebrow-line" style={{ background: "var(--color-brass-light)" }} />
            Timing Matters
            <span className="eyebrow-line" style={{ background: "var(--color-brass-light)" }} />
          </p>
          <h2 className="text-[clamp(1.9rem,4.6vw,3.6rem)] text-white mb-12">
            The Ground Floor Is{" "}
            <span className="ital text-brass-light">Already Gone.</span>
          </h2>

          <div className="stagger grid grid-cols-3 max-md:grid-cols-1 gap-px bg-white/15 border border-white/15 rounded-xl overflow-hidden mb-10">
            {[
              { v: `${COMPLETION}%`, l: "Complete" },
              { v: "Sold Out", l: "Ground floor" },
              { v: `${SHOPS_LEFT}`, l: "Shops remain" },
            ].map((s, i) => (
              <div
                key={s.l}
                style={{ "--i": i } as React.CSSProperties}
                className="bg-ink/70 backdrop-blur-sm px-6 py-8 max-md:py-6"
              >
                <p className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-semibold m-0 leading-none">
                  {s.v}
                </p>
                <p className="text-[0.75rem] uppercase tracking-[0.16em] text-white/55 m-0 mt-3">
                  {s.l}
                </p>
              </div>
            ))}
          </div>

          <p className="text-white/60 text-[0.95rem] mb-3">
            The remaining spaces are on:
          </p>
          <p className="text-white text-[1.1rem] font-semibold mb-10">
            {open.map((f, i) => (
              <span key={f.name}>
                {i > 0 && <span className="text-brass-light mx-3">·</span>}
                {f.name} — {f.available}
              </span>
            ))}
          </p>

          <p className="font-display ital text-[clamp(1.2rem,2.6vw,1.7rem)] text-white/85 mb-10">
            Don&apos;t wait until the shop you want becomes unavailable.
          </p>

          <ConsultationButton>Check Current Availability</ConsultationButton>
        </div>
      </div>
    </section>
  );
}
