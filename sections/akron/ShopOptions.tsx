"use client";
import Image from "next/image";
import ConsultationButton from "@/components/ConsultationButton";
import { useReveal } from "@/hooks/useReveal";
import { FRONT_PRICE_PER_SQM, IMG, MAX_SQM, MIN_SQM, PRICE_PER_SQM, naira } from "./data";

const SIZES = [26, 40, 50, 60, 86];

export default function AkronShopOptions() {
  const headRef = useReveal<HTMLDivElement>();
  const tableRef = useReveal<HTMLDivElement>();

  return (
    <section className="bg-paper py-28 max-md:py-20" id="shops">
      <div className="wrap max-w-7xl">
        <div ref={headRef} className="reveal grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-end mb-14">
          <div>
            <p className="eyebrow mb-5">
              <span className="eyebrow-line" />
              Shop Options
            </p>
            <h2 className="text-[clamp(1.7rem,3.8vw,2.9rem)] text-ink mb-3">
              Choose <span className="ital text-brass">Your Space.</span>
            </h2>
            <p className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-semibold text-ink leading-none m-0">
              {MIN_SQM}sqm – {MAX_SQM}sqm
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-stone border border-stone-line rounded-xl p-6 max-md:p-5">
              <p className="text-[0.72rem] font-bold uppercase tracking-widest text-ink-soft m-0 mb-2">
                Other shops
              </p>
              <p className="font-display text-[1.7rem] max-md:text-[1.3rem] font-semibold text-ink m-0 leading-none">
                ₦2,200,000
              </p>
              <p className="text-ink-soft text-[0.85rem] m-0 mt-1">per sqm</p>
            </div>
            <div className="bg-ink text-white rounded-xl p-6 max-md:p-5">
              <p className="text-[0.72rem] font-bold uppercase tracking-widest text-white/55 m-0 mb-2">
                Front shops
              </p>
              <p className="font-display text-[1.7rem] max-md:text-[1.3rem] font-semibold text-brass-light m-0 leading-none">
                ₦2,300,000
              </p>
              <p className="text-white/55 text-[0.85rem] m-0 mt-1">per sqm</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 items-stretch">
          {/* Price examples */}
          <div ref={tableRef} className="reveal bg-stone border border-stone-line rounded-2xl p-8 max-md:p-5">
            <p className="text-[0.75rem] font-bold uppercase tracking-[0.16em] text-ink-soft m-0 mb-5">
              Price examples
            </p>
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left text-[0.72rem] uppercase tracking-widest text-ink-soft">
                  <th className="font-bold pb-3">Size</th>
                  <th className="font-bold pb-3 text-right">Other shops</th>
                  <th className="font-bold pb-3 text-right">Front shops</th>
                </tr>
              </thead>
              <tbody>
                {SIZES.map((s) => (
                  <tr key={s} className="border-t border-stone-line">
                    <td className="py-4 font-display text-[1.35rem] max-md:text-[1.1rem] font-semibold text-ink">
                      {s}sqm
                    </td>
                    <td className="py-4 text-right font-display text-[1.35rem] max-md:text-[1.1rem] text-ink">
                      {naira(s * PRICE_PER_SQM)}
                    </td>
                    <td className="py-4 text-right font-display text-[1.35rem] max-md:text-[1.1rem] text-brass">
                      {naira(s * FRONT_PRICE_PER_SQM)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-ink-soft text-[0.82rem] mt-4 m-0">
              Front-shop pricing applies where applicable.
            </p>
          </div>

          {/* Floor plans */}
          <div className="bg-ink text-white rounded-2xl overflow-hidden flex flex-col">
            <div className="relative aspect-[16/10]">
              <Image
                src={IMG.renderFront}
                alt="Akron UBA Mall front elevation"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
            <div className="p-8 max-md:p-6 flex flex-col gap-5 flex-1">
              <div>
                <p className="font-display text-[1.4rem] m-0 mb-2">
                  First, second &amp; third floor plans
                </p>
                <p className="text-white/60 text-[0.92rem] m-0">
                  Tell us the size and budget you have in mind and we&apos;ll
                  walk you through the floor plans, with every available shop
                  marked.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-[0.7rem] font-bold uppercase tracking-widest">
                <span className="px-3 py-1.5 rounded bg-brass/20 text-brass-light border border-brass/40">
                  Available
                </span>
                <span className="px-3 py-1.5 rounded bg-white text-ink">Selected</span>
                <span className="px-3 py-1.5 rounded border border-white/15 text-white/40 line-through">
                  Sold out
                </span>
              </div>
              <div className="mt-auto">
                <ConsultationButton>Help Me Find the Right Size</ConsultationButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
