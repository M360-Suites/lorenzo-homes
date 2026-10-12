"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import Media from "./Media";
import {
  COMPLETION,
  FRONT_PRICE_PER_SQM,
  IMG,
  MAX_SQM,
  MIN_PRICE,
  MIN_SQM,
  PRICE_PER_SQM,
  VIDEO,
  naira,
} from "./data";

const FACTS = [
  { v: `${COMPLETION}%`, l: "Completed" },
  { v: `${MIN_SQM}–${MAX_SQM}sqm`, l: "Shop sizes" },
  { v: `${naira(PRICE_PER_SQM)}`, l: "Per sqm" },
  { v: `${naira(FRONT_PRICE_PER_SQM)}`, l: "Per sqm · front shops" },
];

const GALLERY = [
  { img: IMG.renderSide, alt: "Akron UBA Mall shopfronts", tag: "Architectural render", pos: "object-center" },
  { img: IMG.siteWide, alt: "Akron UBA Mall on site, upper floors and walkways", tag: "On site", pos: "object-[center_40%]" },
  { img: IMG.siteProgress, alt: "Akron UBA Mall construction progress", tag: "Site update", pos: "object-[center_88%]" },
];

export default function AkronMeet() {
  const headRef = useReveal<HTMLDivElement>();
  const mainRef = useReveal<HTMLDivElement>();
  const galleryRef = useReveal<HTMLDivElement>();

  return (
    <section className="bg-ink text-white py-28 max-md:py-20" id="meet">
      <div className="wrap max-w-7xl">
        <div ref={headRef} className="reveal grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-end mb-14">
          <div>
            <p className="eyebrow eyebrow-light mb-5">
              <span
                className="eyebrow-line"
                style={{ background: "var(--color-brass-light)" }}
              />
              Commercial Property · Orchid Road · Lekki
            </p>
            <h2 className="text-[clamp(1.9rem,4.4vw,3.6rem)] text-white mb-0">
              Meet <span className="ital text-brass-light">Akron UBA Mall.</span>
            </h2>
          </div>
          <div className="text-white/70 text-[1.02rem] leading-relaxed">
            <p>
              Akron UBA Mall is currently {COMPLETION}% completed. Located on
              Orchid Road, Lekki, it offers commercial shops from {MIN_SQM}sqm
              to {MAX_SQM}sqm — and the minimum {MIN_SQM}sqm space works out to{" "}
              <span className="text-white font-semibold">{naira(MIN_PRICE)}</span>.
            </p>
            <p className="text-white/90">
              But here&apos;s the difference: you don&apos;t have to buy it
              alone. You can explore a fractional ownership structure with
              people you trust.
            </p>
          </div>
        </div>

        {/* Facts strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden mb-6">
          {FACTS.map((f) => (
            <div key={f.l} className="bg-ink px-6 py-6 max-md:px-4">
              <p className="font-display text-[clamp(1.5rem,3vw,2.3rem)] font-semibold text-white m-0 leading-none">
                {f.v}
              </p>
              <p className="text-[0.72rem] uppercase tracking-widest text-white/50 m-0 mt-2">
                {f.l}
              </p>
            </div>
          ))}
        </div>

        {/* Walkthrough video / main image */}
        <div ref={mainRef} className="reveal">
          <div className="relative aspect-[16/9] max-md:aspect-[4/3] rounded-xl overflow-hidden">
            <Media
              image={IMG.renderCorner}
              video={VIDEO.walkthrough}
              alt="Akron UBA Mall walkthrough"
              sizes="(min-width: 1280px) 1180px, 100vw"
            />
            <span className="absolute top-4 left-4 bg-ink/80 text-white text-[0.7rem] uppercase tracking-widest font-bold px-3 py-1.5 rounded">
              {VIDEO.walkthrough ? "Walkthrough" : "Architectural render"}
            </span>
          </div>
          <p className="text-white/50 text-[0.85rem] mt-3 mb-6">
            Akron UBA Mall — Orchid Road, Lekki
          </p>
        </div>

        {/* Gallery */}
        <div ref={galleryRef} className="reveal grid grid-cols-1 sm:grid-cols-3 gap-4">
          {GALLERY.map((g) => (
            <div key={g.alt} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
              <Image
                src={g.img}
                alt={g.alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                placeholder="blur"
                className={`object-cover ${g.pos} transition-transform duration-700 group-hover:scale-105`}
              />
              <span className="absolute bottom-3 left-3 bg-ink/80 text-white text-[0.68rem] uppercase tracking-widest font-bold px-2.5 py-1 rounded">
                {g.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
