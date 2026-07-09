"use client";
import ConsultationButton from "@/components/ConsultationButton";
import { useReveal } from "@/hooks/useReveal";

const FEATURES = [
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-9 h-9 text-brass mb-4"
        aria-hidden="true"
      >
        <path d="M6 40h36" stroke="currentColor" strokeWidth="2" />
        <rect
          x="8"
          y="20"
          width="8"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="20"
          y="12"
          width="8"
          height="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="32"
          y="6"
          width="8"
          height="34"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M28 4h14v8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M36 6 22 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Up to 80% ROI Potential",
    body: "Position yourself before prices fully mature. Early investors capture the highest return.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-9 h-9 text-brass mb-4"
        aria-hidden="true"
      >
        <path
          d="M12 44s-2-20 12-28 12-20 12-20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="24"
          cy="20"
          r="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M6 36h36"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.4"
        />
      </svg>
    ),
    title: "Prime Orchid Road Address",
    body: "One of Lekki's fastest-growing commercial corridors — guaranteed footfall and visibility.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-9 h-9 text-brass mb-4"
        aria-hidden="true"
      >
        <rect
          x="6"
          y="10"
          width="36"
          height="28"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="22"
          y1="10"
          x2="22"
          y2="38"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="6"
          y1="24"
          x2="42"
          y2="24"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: "Mixed-Use Design",
    body: "Retail. Office. Lifestyle. Showrooms. Restaurants. Multiple tenant opportunities under one roof.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-9 h-9 text-brass mb-4"
        aria-hidden="true"
      >
        <path
          d="M6 40h36M10 40V18l14-10 14 10v22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 18 24 8l16 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <rect
          x="18"
          y="27"
          width="12"
          height="13"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M22 27v-4a2 2 0 014 0v4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: "Modern Landmark Architecture",
    body: "Designed to attract and retain premium businesses — a building that commands respect.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-9 h-9 text-brass mb-4"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="28"
          width="40"
          height="12"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="8"
          y="32"
          width="8"
          height="8"
          rx="1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="20"
          y="32"
          width="8"
          height="8"
          rx="1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="32"
          y="32"
          width="8"
          height="8"
          rx="1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 28v-8M24 28v-8M36 28v-8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3 2"
        />
      </svg>
    ),
    title: "Large Parking Facility",
    body: "Convenience drives customer traffic. Traffic drives business success. Success drives rental demand.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-9 h-9 text-brass mb-4"
        aria-hidden="true"
      >
        <path
          d="M24 4l16 8v12c0 12-8 19-16 22-8-3-16-10-16-22V12z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 25l6 6 12-14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Limited Commercial Units",
    body: "Scarcity drives value. Once units are sold, prices can only move upward. Act early.",
  },
];

function FeatureCard({ icon, title, body }: (typeof FEATURES)[0]) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal bg-paper border border-stone-line rounded-xl p-7 max-md:p-5 hover:border-brass/40 hover:shadow-sm transition-all duration-300"
    >
      {icon}
      <h3 className="font-body font-extrabold text-[1.1rem] text-ink mb-2">
        {title}
      </h3>
      <p className="text-ink-soft text-[0.92rem] leading-relaxed m-0">{body}</p>
    </div>
  );
}

export default function AkronFeatures() {
  const headRef = useReveal<HTMLDivElement>();

  return (
    <section className="bg-stone py-28 max-md:py-20" id="features">
      <div className="wrap max-w-7xl">
        <div ref={headRef} className="reveal section-head mb-14">
          <p className="eyebrow mb-4">
            <span className="eyebrow-line" />
            The Investment
          </p>
          <h2 className="text-[clamp(1.7rem,3.6vw,2.8rem)] text-ink">
            Here&apos;s Why This Investment{" "}
            <span className="ital text-brass">Stands Out</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

        <ConsultationButton>
          Book a Free Investment Consultation
        </ConsultationButton>
      </div>
    </section>
  );
}
