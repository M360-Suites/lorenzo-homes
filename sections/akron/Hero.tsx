import ConsultationButton from "@/components/ConsultationButton";
import Media from "./Media";
import { COMPLETION, IMG, MIN_PRICE, MIN_SQM, PRICE_PER_SQM, VIDEO, naira } from "./data";

export default function AkronHero() {
  return (
    <section
      className="relative min-h-screen flex items-end overflow-hidden text-white bg-ink"
      id="hero"
    >
      {/* ── Background: hero video / render ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Media
          image={IMG.renderFront}
          video={VIDEO.hero}
          alt="Akron UBA Mall, Orchid Road, Lekki"
          priority
          drift
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg,rgba(20,17,13,0.85) 0%,rgba(20,17,13,0.55) 55%,rgba(20,17,13,0.2) 100%),linear-gradient(180deg,rgba(20,17,13,0.5) 0%,rgba(20,17,13,0.1) 35%,rgba(20,17,13,0.9) 82%,rgba(20,17,13,0.98) 100%)",
          }}
        />
      </div>

      {/* ── 98% overlay ── */}
      <div className="absolute top-32 right-8 max-md:hidden z-10 bg-ink/80 backdrop-blur-sm border border-white/15 rounded-lg px-5 py-4 max-md:px-4 max-md:py-3">
        <p className="font-display text-[2.4rem] max-md:text-[1.8rem] font-semibold leading-none m-0">
          {COMPLETION}%
        </p>
        <p className="text-[0.68rem] uppercase tracking-[0.16em] text-white/60 m-0 mt-1.5">
          Completed
        </p>
        <div className="h-[3px] w-full bg-white/15 mt-3 rounded-full overflow-hidden">
          <div className="h-full bg-brass-light" style={{ width: `${COMPLETION}%` }} />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="wrap relative z-10 pt-40 pb-20 max-md:pb-14 w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-14 items-end">
          <div>
            <p className="eyebrow eyebrow-light mb-5">
              <span
                className="eyebrow-line"
                style={{ background: "var(--color-brass-light)" }}
              />
              📍 Akron UBA Mall — Orchid Road, Lekki
            </p>
            <h1 className="text-[clamp(2.2rem,5vw,4.2rem)] text-white max-w-[760px] mb-6 leading-[1.05]">
              You Don&apos;t Have to Have {naira(MIN_PRICE)} to Own a Shop.{" "}
              <span className="ital text-brass-light">
                Own It Together. Grow Together.
              </span>
            </h1>
            <p className="text-white/80 text-[1.05rem] mb-4 max-w-[580px] leading-relaxed">
              A minimum {MIN_SQM}sqm shop at Akron UBA Mall costs{" "}
              {naira(MIN_PRICE)} at {naira(PRICE_PER_SQM)}{" "}per sqm. But you
              don&apos;t necessarily have to carry the entire cost alone.
            </p>
            <p className="text-white/65 text-[0.97rem] mb-9 max-w-[580px] leading-relaxed">
              Bring together friends, family, business partners or trusted
              investment partners and collectively acquire a commercial space —
              with ownership and potential returns structured according to how
              much each person contributes.
            </p>
            <div className="flex gap-4 flex-wrap">
              <ConsultationButton>I Want to Invest in Akron UBA Mall</ConsultationButton>
              <a href="#fractional" className="btn btn-consultation-outline">
                How Fractional Buying Works
              </a>
            </div>
          </div>

          {/* Key numbers */}
          <div className="grid grid-cols-2 gap-px bg-white/12 border border-white/12 rounded-xl overflow-hidden">
            {[
              { v: naira(MIN_PRICE), l: `Minimum shop · ${MIN_SQM}sqm` },
              { v: `${COMPLETION}%`, l: "Construction completed" },
              { v: "70%", l: "Initial payment" },
              { v: "3 Months", l: "To pay 30% balance" },
            ].map((s) => (
              <div key={s.l} className="bg-ink/75 backdrop-blur-sm px-5 py-5">
                <p className="font-display text-[1.7rem] max-md:text-[1.35rem] font-semibold text-white m-0 leading-none">
                  {s.v}
                </p>
                <p className="text-[0.72rem] uppercase tracking-widest text-white/50 m-0 mt-2">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
