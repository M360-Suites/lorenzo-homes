"use client";
import ConsultationButton from "@/components/ConsultationButton";
import { useReveal } from "@/hooks/useReveal";
import { MIN_SQM } from "./data";

const MAP_SRC =
  "https://maps.google.com/maps?q=Orchid%20Road%2C%20Lekki%2C%20Lagos&z=14&output=embed";

export default function AkronLocation() {
  const leftRef = useReveal<HTMLDivElement>();
  const mapRef = useReveal<HTMLDivElement>();

  return (
    <section className="bg-stone py-28 max-md:py-20" id="location">
      <div className="wrap max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
          <div ref={leftRef} className="reveal">
            <p className="eyebrow mb-5">
              <span className="eyebrow-line" />
              📍 Orchid Road, Lekki
            </p>
            <h2 className="text-[clamp(1.7rem,3.8vw,2.9rem)] text-ink mb-6">
              Why <span className="ital text-brass">Orchid Road, Lekki?</span>
            </h2>
            <p className="text-ink text-[1.1rem] font-semibold mb-2">
              Commercial property isn&apos;t only about the building.
            </p>
            <p className="text-ink-soft text-[1.02rem] leading-relaxed mb-4">
              It&apos;s about demand. A shop is valuable when people and
              businesses want to occupy it.
            </p>
            <p className="text-ink-soft text-[1.02rem] leading-relaxed mb-10">
              As commercial activity continues to develop around Orchid Road and
              the wider Lekki axis, demand for well-positioned commercial spaces
              becomes an important part of the investment conversation.
            </p>

            <div className="grid grid-cols-[auto_1fr] items-stretch gap-0 bg-paper border border-stone-line rounded-xl overflow-hidden mb-10">
              <div className="px-6 py-5 border-r border-stone-line">
                <p className="text-[0.7rem] uppercase tracking-widest text-ink-soft m-0 mb-1">
                  Not simply
                </p>
                <p className="font-display text-[1.8rem] text-ink-soft line-through decoration-brass/60 m-0 leading-none">
                  {MIN_SQM}sqm
                </p>
              </div>
              <div className="px-6 py-5 bg-ink text-white">
                <p className="text-[0.7rem] uppercase tracking-widest text-white/50 m-0 mb-1">
                  You&apos;re looking at
                </p>
                <p className="font-display text-[1.15rem] m-0 leading-snug">
                  A commercial space in a{" "}
                  <span className="ital text-brass-light">growing Lekki corridor.</span>
                </p>
              </div>
            </div>

            <ConsultationButton>I Want to See the Available Shops</ConsultationButton>
          </div>

          <div ref={mapRef} className="reveal">
            <div className="relative aspect-square max-md:aspect-[4/5] rounded-xl overflow-hidden border border-stone-line bg-paper">
              <iframe
                src={MAP_SRC}
                title="Map of Orchid Road, Lekki, Lagos"
                className="absolute inset-0 w-full h-full border-0 grayscale-[0.4]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-ink-soft text-[0.85rem] mt-3 m-0">
              Akron UBA Mall — Orchid Road, Lekki, Lagos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
