"use client";
import ConsultationButton from "@/components/ConsultationButton";
import { useReveal } from "@/hooks/useReveal";

const SIGNALS = [
  { icon: "👥", label: "Thousands of residents" },
  { icon: "🏘️", label: "Premium estates nearby" },
  { icon: "🚗", label: "Constant high traffic" },
  { icon: "🏗️", label: "Rapid infrastructure development" },
  { icon: "🏪", label: "New businesses opening every month" },
  { icon: "📈", label: "Growing purchasing power" },
];

const NEEDS = [
  "Businesses need visibility.",
  "Businesses need customers.",
  "Businesses need commercial spaces.",
];

function SignalCard({ icon, label }: { icon: string; label: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal bg-paper border border-stone-line rounded-lg p-5 flex items-start gap-4"
    >
      <span className="text-[1.6rem] shrink-0">{icon}</span>
      <span className="text-[0.95rem] font-semibold text-ink leading-snug">
        {label}
      </span>
    </div>
  );
}

export default function AkronOrchidRoad() {
  const headRef = useReveal<HTMLDivElement>();
  const needsRef = useReveal<HTMLDivElement>();

  return (
    <section className="bg-stone py-28 max-md:py-20" id="orchid-road">
      <div className="wrap max-w-7xl">
        {/* Header */}
        <div ref={headRef} className="reveal section-head max-w-[700px] mb-12">
          <p className="eyebrow mb-4">
            <span className="eyebrow-line" />
            Why Orchid Road?
          </p>
          <h2 className="text-[clamp(1.7rem,3.8vw,3rem)] text-ink mb-4">
            Because Businesses Follow People.{" "}
            <span className="ital text-brass">
              And People Are Already Here.
            </span>
          </h2>
          <p className="text-ink-soft text-[1rem]">
            Orchid Road has become one of the fastest-growing commercial
            districts in Lekki.
          </p>
        </div>

        {/* Signal grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {SIGNALS.map((s) => (
            <SignalCard key={s.label} {...s} />
          ))}
        </div>

        {/* "This means..." */}
        <div
          ref={needsRef}
          className="reveal bg-ink text-white rounded-xl p-10 max-md:p-7 mb-10"
        >
          <p className="text-white/55 text-[0.85rem] uppercase tracking-widest font-bold mb-6">
            This means...
          </p>
          <div className="space-y-4 mb-8">
            {NEEDS.map((n) => (
              <p
                key={n}
                className="text-[1.2rem] max-md:text-[1rem] text-white/90 m-0 flex items-center gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brass-light shrink-0" />
                {n}
              </p>
            ))}
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-[1.1rem] text-white/80 m-0">
              That&apos;s exactly what{" "}
              <span className="text-brass-light font-semibold">
                this development
              </span>{" "}
              provides.
            </p>
          </div>
        </div>

        {/* Drone image note */}
        <div className="bg-paper border border-stone-line rounded-lg px-6 py-4 mb-10 flex items-start gap-3">
          {/* Placeholder for drone imagery */}
          {/*
            Replace with actual drone images of Orchid Road:
            <Image src="/assets/orchid-drone.jpg" alt="Orchid Road aerial view" ... />
          */}
          <span className="text-brass text-[1.3rem]">📍</span>
          <p className="text-[0.9rem] text-ink-soft m-0">
            <span className="font-bold text-ink">
              Drone imagery of Orchid Road
            </span>{" "}
            — high-res aerial photos available on request. Site inspections can
            be arranged at short notice.
          </p>
        </div>

        <ConsultationButton>
          Book a Free Investment Consultation
        </ConsultationButton>
      </div>
    </section>
  );
}
