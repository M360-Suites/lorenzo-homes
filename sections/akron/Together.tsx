"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { IMG } from "./data";

const FLOW = [
  "You + Friends + Capital",
  "Commercial Property",
  "Shared Ownership",
  "Shared Potential Upside",
];

export default function AkronTogether() {
  const imgRef = useReveal<HTMLDivElement>();
  const flowRef = useReveal<HTMLDivElement>();

  return (
    <section className="bg-paper py-28 max-md:py-20" id="together">
      <div className="wrap max-w-7xl">
        <div className="text-center max-w-[760px] mx-auto mb-14">
          <p className="eyebrow justify-center mb-5">
            <span className="eyebrow-line" />
            Invest Together
            <span className="eyebrow-line" />
          </p>
          <h2 className="text-[clamp(1.9rem,4.4vw,3.5rem)] text-ink mb-3">
            You Don&apos;t Have to Invest Alone.
          </h2>
          <p className="font-display ital text-[clamp(1.3rem,2.8vw,2rem)] text-brass m-0">
            Turn friendship into an asset.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-stretch">
          <div ref={imgRef} className="reveal grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[16/8] rounded-xl overflow-hidden">
              <Image
                src={IMG.renderCorner}
                alt="Akron UBA Mall corner elevation"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={IMG.siteCourtyard}
                alt="Akron UBA Mall courtyard on site"
                fill
                sizes="(min-width: 1024px) 27vw, 50vw"
                placeholder="blur"
                className="object-cover object-[center_40%]"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={IMG.renderSide}
                alt="Akron UBA Mall shopfronts render"
                fill
                sizes="(min-width: 1024px) 27vw, 50vw"
                placeholder="blur"
                className="object-cover object-[35%_center]"
              />
            </div>
          </div>

          <div
            ref={flowRef}
            className="reveal bg-ink text-white rounded-2xl p-10 max-md:p-7 flex flex-col justify-center"
          >
            <p className="text-white/60 text-[0.95rem] mb-8">
              Picture it with the people you already trust:
            </p>
            <div className="stagger flex flex-col items-start">
              {FLOW.map((f, i) => (
                <div key={f} style={{ "--i": i } as React.CSSProperties}>
                  {i > 0 && <p className="text-brass-light text-[1.3rem] my-2 ml-1">↓</p>}
                  <p
                    className={`font-display text-[clamp(1.25rem,2.4vw,1.7rem)] m-0 leading-tight ${
                      i === FLOW.length - 1 ? "text-brass-light ital" : "text-white"
                    }`}
                  >
                    {f}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-white/55 text-[0.92rem] mt-10 m-0 border-t border-white/10 pt-6">
              &ldquo;I could do this with my friends.&rdquo; — Yes, you could.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
