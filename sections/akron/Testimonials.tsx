"use client";
import { useReveal } from "@/hooks/useReveal";

const TESTIMONIALS = [
  {
    quote:
      "The team at Lorenzo Homes walked me through every step of the process. I invested remotely from the UK and had full confidence in the documentation and support throughout.",
    name: "Adaeze Okonkwo-Briggs",
    role: "Diaspora Investor · United Kingdom",
    initials: "AO",
  },
  {
    quote:
      "I visited the site on Orchid Road and was immediately convinced. The location speaks for itself — this is exactly where commercial businesses want to be.",
    name: "Emeka Uchechukwu",
    role: "Commercial Tenant & Investor · Lagos",
    initials: "EU",
  },
  {
    quote:
      "Flexible payment plans made it possible for me to own a unit without disrupting my cash flow. The ROI projections are realistic and the team is transparent.",
    name: "Chidubem Nwachukwu",
    role: "Real Estate Investor · Abuja",
    initials: "CN",
  },
];

function TestimonialCard({
  quote,
  name,
  role,
  initials,
}: (typeof TESTIMONIALS)[0]) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal bg-stone border border-stone-line rounded-xl p-8 max-md:p-6 flex flex-col"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 16 16"
            className="w-4 h-4 text-brass"
            aria-hidden="true"
          >
            <path
              d="M8 1l1.8 3.6 4 .6-2.9 2.8.7 4L8 10l-3.6 1.9.7-4L2.2 5.2l4-.6z"
              fill="currentColor"
            />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-ink-soft text-[0.97rem] leading-relaxed flex-1 mb-6">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Attribution */}
      <div className="flex items-center gap-3 border-t border-stone-line pt-5">
        <div className="w-10 h-10 rounded-full bg-brass/15 border border-brass/30 flex items-center justify-center shrink-0">
          <span className="text-brass text-[0.75rem] font-bold">
            {initials}
          </span>
        </div>
        <div>
          <p className="font-bold text-[0.92rem] text-ink m-0">{name}</p>
          <p className="text-[0.78rem] text-ink-soft m-0">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function AkronTestimonials() {
  const headRef = useReveal<HTMLDivElement>();

  return (
    <section className="bg-paper py-28 max-md:py-20" id="testimonials">
      <div className="wrap max-w-7xl">
        <div ref={headRef} className="reveal section-head mb-14">
          <p className="eyebrow mb-4">
            <span className="eyebrow-line" />
            Investor Stories
          </p>
          <h2 className="text-[clamp(1.7rem,3.6vw,2.8rem)] text-ink mb-3">
            What Our Investors Say
          </h2>
          <p className="text-ink-soft text-[0.88rem]">
            Placeholder testimonials — replace with real investor stories and
            photos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.role} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
