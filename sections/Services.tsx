"use client";
import { useReveal } from "../hooks/useReveal";

const SERVICES = [
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-[42px] h-[42px] text-brass mb-[22px]"
        aria-hidden="true"
      >
        <path
          d="M6 40h36M10 40V18l14-9 14 9v22M19 40V26h10v14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Real Estate Development & Management",
    body: "End-to-end planning, construction and management of commercial, industrial and residential developments.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-[42px] h-[42px] text-brass mb-[22px]"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="17"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M24 14v20M19 18h7a4 4 0 010 8h-6a4 4 0 000 8h8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Project Finance, Supervision & Management",
    body: "Structuring and overseeing project finance from groundbreaking through to handover.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-[42px] h-[42px] text-brass mb-[22px]"
        aria-hidden="true"
      >
        <path
          d="M24 6l15 5.5v11c0 10.5-7 17-15 19.5-8-2.5-15-9-15-19.5v-11z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 24l6 6 11-12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Facility Management",
    body: "Ongoing maintenance and operational management that protects asset value long after completion.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-[42px] h-[42px] text-brass mb-[22px]"
        aria-hidden="true"
      >
        <path d="M6 40h36" stroke="currentColor" strokeWidth="2" />
        <rect
          x="10"
          y="29"
          width="6"
          height="11"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="21"
          y="21"
          width="6"
          height="19"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="32"
          y="11"
          width="6"
          height="29"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M27 9h9v9" fill="none" stroke="currentColor" strokeWidth="2" />
        <path
          d="M36 10L23 23"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Funds Investment Services",
    body: "Channels for stakeholders to invest directly in vetted, high-yield real estate opportunities.",
  },
];

function ServiceCard({ icon, title, body }: (typeof SERVICES)[0]) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal bg-paper p-[36px_28px] transition-colors duration-300 hover:bg-white"
    >
      {icon}
      <h3 className="font-body font-extrabold text-[1.05rem] mb-[10px] leading-[1.3]">
        {title}
      </h3>
      <p className="text-[0.9rem] text-ink-soft m-0">{body}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-[100px] bg-stone">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">What We Do</p>
          <h2>Services built around the full life of an asset.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-line">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
