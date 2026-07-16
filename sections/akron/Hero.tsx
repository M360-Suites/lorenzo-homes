import ConsultationButton from "@/components/ConsultationButton";
import Image from "next/image";
import MallRender from "@/public/img_sales02.jpg";
import MallRender1 from "@/public/img_sales01.jpg";

export default function AkronHero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden text-white"
      id="hero"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0 bg-[#1a1208]">
        {/* Architectural grid */}
        <svg
          viewBox="0 0 1200 800"
          className="w-full h-full opacity-[0.12]"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 0H80V80"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                opacity="0.5"
              />
            </pattern>
          </defs>
          <rect width="1200" height="800" fill="url(#grid)" />
          {/* Building silhouette */}
          <rect
            x="250"
            y="300"
            width="700"
            height="460"
            fill="none"
            stroke="#B8842F"
            strokeWidth="2"
            opacity="0.35"
          />
          <rect
            x="310"
            y="180"
            width="200"
            height="120"
            fill="none"
            stroke="#B8842F"
            strokeWidth="1.5"
            opacity="0.25"
          />
          <rect
            x="690"
            y="200"
            width="180"
            height="100"
            fill="none"
            stroke="#B8842F"
            strokeWidth="1.5"
            opacity="0.25"
          />
          {/* Floor lines */}
          <line
            x1="250"
            y1="390"
            x2="950"
            y2="390"
            stroke="#B8842F"
            strokeWidth="0.8"
            opacity="0.2"
          />
          <line
            x1="250"
            y1="480"
            x2="950"
            y2="480"
            stroke="#B8842F"
            strokeWidth="0.8"
            opacity="0.2"
          />
          <line
            x1="250"
            y1="570"
            x2="950"
            y2="570"
            stroke="#B8842F"
            strokeWidth="0.8"
            opacity="0.2"
          />
          <line
            x1="250"
            y1="660"
            x2="950"
            y2="660"
            stroke="#B8842F"
            strokeWidth="0.8"
            opacity="0.2"
          />
          {/* Vertical dividers */}
          <line
            x1="420"
            y1="300"
            x2="420"
            y2="760"
            stroke="#B8842F"
            strokeWidth="0.8"
            opacity="0.18"
          />
          <line
            x1="590"
            y1="300"
            x2="590"
            y2="760"
            stroke="#B8842F"
            strokeWidth="0.8"
            opacity="0.18"
          />
          <line
            x1="760"
            y1="300"
            x2="760"
            y2="760"
            stroke="#B8842F"
            strokeWidth="0.8"
            opacity="0.18"
          />
        </svg>
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg,rgba(20,14,6,0.78) 0%,rgba(20,17,13,0.55) 50%,rgba(20,17,13,0.92) 100%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="wrap relative z-10 pt-28 pb-20 w-full max-w-7xl">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          {/* Left */}
          <div>
            <p className="eyebrow eyebrow-light mb-5">
              <span
                className="eyebrow-line"
                style={{ background: "var(--color-brass-light)" }}
              />
              Lorenzo Homes · Orchid Road, Lekki
            </p>
            <h1 className="text-[clamp(2.2rem,4.8vw,3.8rem)] text-white max-w-[600px] mb-6 leading-[1.1]">
              Own a Piece of Lekki&apos;s Next Commercial Landmark{" "}
              <span className="ital text-brass-light">
                Before Everyone Else Does.
              </span>
            </h1>
            <p className="text-white/80 text-[1.05rem] mb-6 max-w-[520px] leading-relaxed">
              An iconic 3,100 sqm mixed-use commercial mall rising on Orchid
              Road, Lekki — designed for retail brands, premium showrooms,
              restaurants and office suites.
            </p>

            {/* ROI inline badge */}
            <div className="flex items-center gap-4 mb-6 bg-brass/15 border border-brass/35 rounded-lg px-5 py-3 w-fit">
              <span className="font-display text-[2.2rem] font-semibold text-brass-light leading-none">
                80%
              </span>
              <div>
                <p className="text-white/55 text-[0.7rem] uppercase tracking-widest m-0">
                  Projected
                </p>
                <p className="text-white text-[0.95rem] font-bold m-0">
                  Return on Investment
                </p>
              </div>
            </div>

            <p className="text-white/70 mb-8 max-w-[480px] text-[0.97rem]">
              Own a commercial unit today and position yourself ahead of one of
              Lagos&apos; fastest-growing business corridors.
            </p>

            <div className="flex gap-4 flex-wrap">
              <ConsultationButton>
                Book a Free Investment Consultation
              </ConsultationButton>
              <a href="#why-invest" className="btn btn-outline">
                Learn More
              </a>
            </div>
          </div>

          {/* Right: 3D render placeholder */}
          <div className="relative ">
            <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
              <Image
                src={MallRender1}
                alt="Orchid Road commercial mall 3D render"
                fill
                priority
                className="object-cover object-center"
              />

              {/* 80% badge overlay */}
              <div className="absolute top-5 right-5 bg-brass text-white rounded-lg px-4 py-3 text-center shadow-lg">
                <p className="font-display text-[1.9rem] font-semibold m-0 leading-none">
                  80%
                </p>
                <p className="text-[0.65rem] uppercase tracking-widest m-0 mt-1 text-white/80">
                  ROI Potential
                </p>
              </div>
            </div>

            {/* Stat cards below render */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              {[
                { label: "Total Area", value: "3,100 sqm" },
                { label: "Location", value: "Orchid Road" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="bg-[#1C1814]/80 backdrop-blur-sm rounded-lg border border-white/15 px-4 py-3 text-center"
                >
                  <p className="text-[0.72rem] uppercase tracking-widest text-white/50 m-0 mb-1">
                    {c.label}
                  </p>
                  <p className="font-display text-[1.35rem] font-semibold text-brass-light m-0">
                    {c.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
