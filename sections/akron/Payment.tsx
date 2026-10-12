"use client";
import Image from "next/image";
import ConsultationButton from "@/components/ConsultationButton";
import { useReveal } from "@/hooks/useReveal";
import { BALANCE_MONTHS, BALANCE_PCT, IMG, INITIAL_PCT, MIN_PRICE, naira } from "./data";

export default function AkronPayment() {
  const headRef = useReveal<HTMLDivElement>();
  const timelineRef = useReveal<HTMLDivElement>();

  return (
    <section className="bg-paper py-28 max-md:py-20" id="payment">
      <div className="wrap max-w-7xl">
        <div ref={headRef} className="reveal grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center mb-16">
          <div>
            <p className="eyebrow mb-5">
              <span className="eyebrow-line" />
              The 70% Payment Structure
            </p>
            <h2 className="text-[clamp(1.7rem,3.8vw,2.9rem)] text-ink mb-6">
              And You Don&apos;t Have to{" "}
              <span className="ital text-brass">Pay 100% Upfront.</span>
            </h2>
            <p className="text-ink-soft text-[1.02rem] leading-relaxed mb-4">
              Akron UBA Mall operates on a 70% initial payment, then the 30%
              balance within {BALANCE_MONTHS} months.
            </p>
            <p className="text-ink-soft text-[1.02rem] leading-relaxed mb-4">
              Now imagine the same purchase being collectively funded. The group
              can structure its contributions around the payment schedule.
            </p>
            <p className="text-ink text-[1.1rem] font-semibold">
              The opportunity isn&apos;t simply about finding {naira(MIN_PRICE)}.
              It&apos;s about finding the right people to own it with.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src={IMG.renderFront}
              alt="Akron UBA Mall front elevation"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="reveal bg-stone border border-stone-line rounded-2xl p-10 max-md:p-6 mb-10">
          <p className="text-[0.75rem] font-bold uppercase tracking-[0.16em] text-ink-soft m-0 mb-8">
            {naira(MIN_PRICE)} shop · payment timeline
          </p>

          <div className="grid grid-cols-[70fr_30fr] max-md:grid-cols-1 gap-0 max-md:gap-6">
            {/* 70% */}
            <div className="pr-6 max-md:pr-0">
              <div className="h-3 bg-brass rounded-l-full max-md:rounded-full mb-5" />
              <p className="font-display text-[clamp(2.6rem,6vw,4.2rem)] font-semibold text-ink leading-none m-0">
                70%
              </p>
              <p className="text-[0.78rem] font-bold uppercase tracking-widest text-ink-soft m-0 mt-2 mb-3">
                Initial payment · Today
              </p>
              <p className="font-display text-[1.6rem] text-brass m-0">
                {naira(MIN_PRICE * INITIAL_PCT)}
              </p>
            </div>
            {/* 30% */}
            <div className="relative pl-6 max-md:pl-0 border-l border-dashed border-ink/25 max-md:border-l-0">
              <div className="h-3 bg-ink rounded-r-full max-md:rounded-full mb-5" />
              <p className="font-display text-[clamp(2.6rem,6vw,4.2rem)] font-semibold text-ink leading-none m-0">
                30%
              </p>
              <p className="text-[0.78rem] font-bold uppercase tracking-widest text-ink-soft m-0 mt-2 mb-3">
                Balance · Within {BALANCE_MONTHS} months
              </p>
              <p className="font-display text-[1.6rem] text-ink m-0">
                {naira(MIN_PRICE * BALANCE_PCT)}
              </p>
            </div>
          </div>
        </div>

        <ConsultationButton>I Want to Discuss My Options</ConsultationButton>
      </div>
    </section>
  );
}
