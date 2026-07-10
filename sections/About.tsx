"use client";
import { useReveal } from "../hooks/useReveal";
import Image from "next/image";
import House from "@/public/assets/progress1.jpg";

export default function About() {
  const textRef = useReveal<HTMLDivElement>();
  const mediaRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      className="py-[110px_0_90px] bg-paper"
      style={{ padding: "110px 0 90px" }}
    >
      <div className="wrap grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
        {/* Text */}
        <div ref={textRef} className="reveal">
          <p className="eyebrow">Who We Are</p>
          <h2 className="text-[clamp(1.9rem,3vw,2.5rem)] mb-[0.5em]">
            A track record built over <span className="ital">25 years.</span>
          </h2>
          <p className="text-ink-soft max-w-[520px]">
            Lorenzo Homes is a dynamic real estate company invested in
            commercial, industrial and residential projects across Nigeria. Our
            model is simple: we invest in viable projects, add value to them for
            optimum appreciation, and dispose of them when ripe — delivering the
            best possible returns to our stakeholders.
          </p>
          <p className="text-ink-soft max-w-[520px]">
            We give our clients, tenants and investors the experience of a
            well-managed company that delivers efficiently, in record time. Our
            knowledge of the operating environment, and our relationships with
            stakeholders, regulators, real estate professionals and engineering
            consultants, are the foundation of that delivery.
          </p>

          {/* Mission card */}
          <div className="mt-7 p-[28px_30px] bg-stone border-l-[3px] border-brass">
            <p className="font-extrabold text-[0.78rem] tracking-[0.1em] uppercase text-sand-deep mb-2">
              Our Mission
            </p>
            <p className="font-display italic text-[1.15rem] text-ink mb-4">
              To add value through exceptional service, expert knowledge and
              personalised attention — helping every stakeholder achieve their
              real estate goals.
            </p>
            <div className="flex gap-[18px] flex-wrap text-[0.82rem] font-bold tracking-[0.04em]">
              {["Integrity", "Excellence", "Client Satisfaction"].map((v) => (
                <span key={v} className="pb-[6px] border-b border-stone-line">
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Media */}
        <div ref={mediaRef} className="reveal">
          <figure className="m-0">
            {/* Replace div with <Image> once you have assets */}
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#2a2118] to-[#1C1814] rounded-[2px] shadow-[0_30px_60px_-20px_rgba(28,24,20,0.35)] flex flex-col items-center justify-center gap-4 text-white/40 text-[0.85rem] tracking-[0.06em] uppercase">
              <Image
                src={House}
                alt="Orchid Road, Lekki"
                height={600}
                width={600}
                className="w-full h-full object-cover object-center rounded-[2px]"
              />
            </div>
            <figcaption className="mt-3 text-[0.82rem] text-ink-soft tracking-[0.02em]">
              Orchid Road, Lekki — site progress, 2026
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Our Model */}
      {/* <div className="wrap mt-[90px] pt-[60px] border-t border-stone-line">
        <p className="eyebrow justify-center">Our Model</p>
        <div className="flex flex-wrap items-start gap-0 mt-8">
          {[
            {
              n: "01",
              title: "Invest",
              body: "We acquire viable opportunities across commercial, industrial and residential real estate.",
            },
            {
              n: "02",
              title: "Add Value",
              body: "We develop, finance and manage each asset for optimum value appreciation.",
            },
            {
              n: "03",
              title: "Deliver Returns",
              body: "We dispose at the right time, returning the best value to our stakeholders.",
            },
          ].map((step, i, arr) => (
            <>
              <div key={step.n} className="flex-1">
                <span className="inline-block font-display text-[0.95rem] font-semibold text-white bg-brass w-[34px] h-[34px] leading-[34px] text-center rounded-full mb-4">
                  {step.n}
                </span>
                <h3 className="text-[1.25rem] mb-[0.4em]">{step.title}</h3>
                <p className="text-ink-soft text-[0.92rem] max-w-[280px]">
                  {step.body}
                </p>
              </div>
              {i < arr.length - 1 && (
                <div
                  key={`conn-${i}`}
                  className="hidden md:block flex-[0_0_60px] h-px mt-[18px] mx-[6px]"
                  style={{
                    background:
                      "repeating-linear-gradient(90deg,#C9A26C 0 8px,transparent 8px 14px)",
                  }}
                  aria-hidden="true"
                />
              )}
            </>
          ))}
        </div>
      </div> */}
      <div className="wrap mt-[90px] pt-[60px]  border-t border-stone-line">
        <p className="eyebrow text-3xl tracking-tight justify-center">
          Our Model
        </p>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 mt-8">
          {[
            {
              n: "01",
              title: "Invest",
              body: "We acquire viable opportunities across commercial, industrial and residential real estate.",
            },
            {
              n: "02",
              title: "Add Value",
              body: "We develop, finance and manage each asset for optimum value appreciation.",
            },
            {
              n: "03",
              title: "Deliver Returns",
              body: "We dispose at the right time, returning the best value to our stakeholders.",
            },
          ].map((step, i, arr) => (
            <div
              className="border py-8 px-4 border-dashed border-[#b8842f] rounded-lg flex items-start max-md:flex-col"
              key={step.n}
            >
              <div key={step.n} className="flex-1">
                <span className="inline-block font-display text-[0.95rem] font-semibold text-white bg-brass w-[34px] h-[34px] leading-[34px] text-center rounded-full mb-4">
                  {step.n}
                </span>
                <h3 className="text-[1.25rem] mb-[0.4em]">{step.title}</h3>
                <p className="text-ink-soft text-[0.92rem] max-w-[280px]">
                  {step.body}
                </p>
              </div>
              {/* {i < arr.length - 1 && (
                <div
                  key={`conn-${i}`}
                  className="hidden md:block flex-[0_0_60px] h-px mt-[18px] mx-[6px]"
                  style={{
                    background:
                      "repeating-linear-gradient(90deg,#C9A26C 0 8px,transparent 8px 14px)",
                  }}
                  aria-hidden="true"
                />
              )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
