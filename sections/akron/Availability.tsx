"use client";
import Image from "next/image";
import ConsultationButton from "@/components/ConsultationButton";
import { useReveal } from "@/hooks/useReveal";
import { COMPLETION, FLOORS, IMG, SHOPS_LEFT } from "./data";

export default function AkronAvailability() {
  const leftRef = useReveal<HTMLDivElement>();
  const stackRef = useReveal<HTMLDivElement>();

  return (
    <section className="bg-ink text-white py-28 max-md:py-20" id="availability">
      <div className="wrap max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-center">
          <div ref={leftRef} className="reveal">
            <p className="eyebrow eyebrow-light mb-5">
              <span
                className="eyebrow-line"
                style={{ background: "var(--color-brass-light)" }}
              />
              Limited Availability
            </p>
            <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] text-white mb-6">
              And Akron UBA Mall Is Already{" "}
              <span className="ital text-brass-light">{COMPLETION}% Complete.</span>
            </h2>
            <p className="text-white/70 text-[1.05rem] leading-relaxed mb-4">
              This isn&apos;t a development sitting at the starting line.
            </p>
            <p className="text-white text-[1.1rem] mb-10">
              And the ground floor is{" "}
              <span className="font-bold tracking-wide text-brass-light">SOLD OUT.</span>
            </p>

            <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4">
              <Image
                src={IMG.siteUpdate}
                alt="Akron UBA Mall site update"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                placeholder="blur"
                className="object-cover object-[center_75%]"
              />
            </div>
          </div>

          {/* Floor stack */}
          <div ref={stackRef} className="reveal">
            <p className="text-[0.75rem] font-bold uppercase tracking-[0.16em] text-white/50 m-0 mb-4">
              What&apos;s left?
            </p>
            <div className="stagger flex flex-col gap-2 mb-6">
              {FLOORS.map((f, i) => {
                const sold = f.available === 0;
                return (
                  <div
                    key={f.name}
                    style={{ "--i": i } as React.CSSProperties}
                    className={`flex items-center justify-between rounded-lg px-6 py-5 max-md:px-4 border ${
                      sold
                        ? "border-white/10 text-white/45"
                        : "border-brass/40 bg-brass/10"
                    }`}
                  >
                    <span className="font-semibold text-[1rem]">{f.name}</span>
                    {sold ? (
                      <span className="text-[0.78rem] font-extrabold uppercase tracking-[0.16em] line-through decoration-white/40">
                        Sold Out
                      </span>
                    ) : (
                      <span className="flex items-baseline gap-2">
                        <span className="font-display text-[1.8rem] font-semibold text-white leading-none">
                          {f.available}
                        </span>
                        <span className="text-[0.75rem] uppercase tracking-widest text-white/60">
                          shops
                        </span>
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="bg-paper text-ink rounded-xl px-6 py-6 flex items-center justify-between gap-4 mb-8">
              <span className="text-[0.85rem] font-extrabold uppercase tracking-[0.16em]">
                Only {SHOPS_LEFT} shops remain
              </span>
              <span className="font-display text-[2.6rem] font-semibold text-brass leading-none">
                {SHOPS_LEFT}
              </span>
            </div>

            <ConsultationButton>Show Me the Available Shops</ConsultationButton>
          </div>
        </div>
      </div>
    </section>
  );
}
