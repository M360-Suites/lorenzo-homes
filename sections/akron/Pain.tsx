"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { IMG, MIN_PRICE, MIN_SQM, PRICE_PER_SQM, naira } from "./data";

const WAITING = [
  "Maybe you save.",
  "Maybe you look for something cheaper.",
  "Maybe you tell yourself you'll invest when you have more money.",
];

const WHAT_IFS = [
  "What if you could own a share instead?",
  "What if three people came together?",
  "What if five people came together?",
];

export default function AkronPain() {
  const splitRef = useReveal<HTMLDivElement>();
  const imgRef = useReveal<HTMLDivElement>();

  return (
    <section className="bg-paper py-28 max-md:py-20" id="the-problem">
      <div className="wrap max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 items-start">
          {/* Left: story */}
          <div>
            <p className="eyebrow mb-5">
              <span className="eyebrow-line" />
              The Problem
            </p>
            <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] text-ink mb-6">
              Commercial Property{" "}
              <span className="ital text-brass">Is Expensive.</span>
            </h2>
            <p className="text-ink-soft text-[1.05rem] leading-relaxed">
              Let&apos;s say you find a commercial property you like. You do the
              maths. The smallest available shop at Akron UBA Mall is:
            </p>

            <div className="border-l-2 border-brass pl-6 py-2 my-8">
              <p className="font-display text-[clamp(1.6rem,3.4vw,2.4rem)] text-ink m-0 leading-tight">
                {MIN_SQM}sqm × {naira(PRICE_PER_SQM)} ={" "}
                <span className="text-brass">{naira(MIN_PRICE)}</span>
              </p>
            </div>

            <p className="text-ink-soft text-[1.05rem] mb-2">
              And suddenly you think:
            </p>
            <p className="font-display ital text-[1.4rem] text-ink mb-8">
              &ldquo;That&apos;s too much for me to put down alone.&rdquo;
            </p>

            <p className="text-ink text-[1.05rem] font-semibold mb-3">
              So you wait.
            </p>
            <ul className="space-y-2 mb-8">
              {WAITING.map((w) => (
                <li key={w} className="flex items-start gap-3 text-ink-soft">
                  <span className="w-[6px] h-[6px] rounded-full bg-brass shrink-0 mt-[10px]" />
                  {w}
                </li>
              ))}
            </ul>

            <p className="text-ink-soft text-[1.05rem] leading-relaxed mb-8">
              But while you&apos;re waiting… the property is still being
              bought. And owning commercial real estate doesn&apos;t have to
              mean one person paying for everything.
            </p>

            <div className="bg-ink text-white rounded-xl p-8 max-md:p-6">
              <div className="space-y-3 mb-6">
                {WHAT_IFS.map((q) => (
                  <p key={q} className="text-[1.1rem] max-md:text-[1rem] text-white/85 m-0">
                    {q}
                  </p>
                ))}
                <p className="text-[1.1rem] max-md:text-[1rem] text-white/85 m-0">
                  What if you and trusted friends decided:{" "}
                  <span className="font-display ital text-brass-light">
                    &ldquo;Let&apos;s own this together.&rdquo;
                  </span>
                </p>
              </div>
              <p className="border-t border-white/10 pt-6 m-0 text-white/65">
                That&apos;s where fractional buying becomes interesting.
              </p>
            </div>
          </div>

          {/* Right: site image + split graphic */}
          <div className="lg:sticky lg:top-36 flex flex-col gap-5">
            <div ref={imgRef} className="reveal relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={IMG.siteCourtyard}
                alt="Akron UBA Mall courtyard on site, Orchid Road"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                placeholder="blur"
                className="object-cover object-[center_35%]"
              />
              <span className="absolute bottom-4 left-4 bg-ink/80 text-white text-[0.7rem] uppercase tracking-widest font-bold px-3 py-1.5 rounded">
                On site · Orchid Road, Lekki
              </span>
            </div>

            <div
              ref={splitRef}
              className="reveal bg-stone border border-stone-line rounded-xl p-7 max-md:p-5 text-center"
            >
              <div className="stagger">
                <p
                  className="font-display text-[clamp(2.4rem,5vw,3.4rem)] font-semibold text-ink leading-none m-0"
                  style={{ "--i": 0 } as React.CSSProperties}
                >
                  {naira(MIN_PRICE)}
                </p>
                <p className="text-brass text-[1.4rem] my-3" style={{ "--i": 1 } as React.CSSProperties}>
                  ↓
                </p>
                <div
                  className="grid grid-cols-4 gap-2"
                  style={{ "--i": 2 } as React.CSSProperties}
                >
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-paper border border-stone-line rounded-lg py-3 px-1"
                    >
                      <p className="font-display text-[1.05rem] max-md:text-[0.9rem] font-semibold text-ink m-0">
                        {naira(MIN_PRICE / 4)}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-brass text-[1.4rem] my-3" style={{ "--i": 3 } as React.CSSProperties}>
                  ↓
                </p>
                <p
                  className="text-[0.85rem] font-extrabold tracking-[0.18em] uppercase text-ink m-0"
                  style={{ "--i": 4 } as React.CSSProperties}
                >
                  4 People. 1 Property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
