"use client";
import ConsultationButton from "@/components/ConsultationButton";
import { useReveal } from "@/hooks/useReveal";

const CHECKLIST = [
  "Verified Documentation",
  "Professional Development",
  "Dedicated Investment Advisors",
  "Flexible Payment Plans",
  "Secure Purchase Process",
  "Ongoing Support",
];

const ACHIEVEMENTS = [
  { value: "500+", label: "Investors" },
  { value: "20+", label: "Projects" },
  { value: "100%", label: "Documentation" },
];

export default function AkronLorenzo() {
  const leftRef = useReveal<HTMLDivElement>();
  const rightRef = useReveal<HTMLDivElement>();

  return (
    <section className="bg-stone py-28 max-md:py-20" id="why-lorenzo">
      <div className="wrap max-w-7xl">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
          {/* Left */}
          <div ref={leftRef} className="reveal">
            <p className="eyebrow mb-5">
              <span className="eyebrow-line" />
              Why Lorenzo Homes?
            </p>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.8rem)] text-ink mb-4">
              You&apos;re Not Just Buying Property.
            </h2>
            <p className="text-ink-soft text-[1.05rem] mb-8 max-w-[500px]">
              You&apos;re partnering with a developer committed to quality,
              transparency, and long-term value.
            </p>

            <p className="text-[0.8rem] font-bold uppercase tracking-widest text-ink-soft mb-5">
              We provide:
            </p>
            <ul className="space-y-3 mb-10">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <svg
                    viewBox="0 0 20 20"
                    className="w-5 h-5 text-brass shrink-0"
                    aria-hidden="true"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      fill="currentColor"
                      opacity="0.12"
                    />
                    <path
                      d="M6 10l3 3 5-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="font-semibold text-[0.97rem] text-ink">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <ConsultationButton>
              Book a Free Investment Consultation
            </ConsultationButton>
          </div>

          {/* Right: achievements */}
          <div ref={rightRef} className="reveal">
            {/* Stats */}
            <div className="bg-ink text-white rounded-xl overflow-hidden mb-5">
              {ACHIEVEMENTS.map((a, i) => (
                <div
                  key={a.label}
                  className={`px-8 py-7 flex items-center justify-between ${
                    i < ACHIEVEMENTS.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <span className="text-white/60 text-[0.9rem] font-medium">
                    {a.label}
                  </span>
                  <span className="font-display text-[2.4rem] font-semibold text-brass-light leading-none">
                    {a.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Add achievements note */}
            {/*<div className="bg-paper border border-stone-line rounded-lg px-5 py-4">
              <p className="text-[0.82rem] text-ink-soft m-0">
                <span className="font-bold text-ink">Note:</span> Add company
                achievements, certifications and awards here to strengthen
                investor confidence.
              </p>
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
}
