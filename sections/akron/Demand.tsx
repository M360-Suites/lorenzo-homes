"use client";
import Image from "next/image";
import ConsultationButton from "@/components/ConsultationButton";
import { useReveal } from "@/hooks/useReveal";
import { IMG } from "./data";

const USES = [
  { label: "Fashion & Retail", img: IMG.renderSide, pos: "object-[30%_center]" },
  { label: "Beauty & Wellness", img: IMG.renderCorner, pos: "object-[25%_center]" },
  { label: "Food & Restaurants", img: IMG.renderFront, pos: "object-[75%_60%]" },
  { label: "Professional Services", img: IMG.siteWide, pos: "object-[center_30%]" },
];

const BUSINESSES = [
  "Retailers.",
  "Service businesses.",
  "Beauty brands.",
  "Food businesses.",
  "Professional services.",
  "Growing businesses looking for visibility.",
];

function UseTile({ label, img, pos }: (typeof USES)[0]) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal relative aspect-[3/4] max-md:aspect-[4/5] rounded-xl overflow-hidden group">
      <Image
        src={img}
        alt={`Akron UBA Mall shop space — suitable for ${label.toLowerCase()}`}
        fill
        sizes="(min-width: 768px) 25vw, 50vw"
        placeholder="blur"
        className={`object-cover ${pos} transition-transform duration-700 group-hover:scale-105`}
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/20 to-transparent" />
      <p className="absolute bottom-4 left-4 right-4 m-0 text-white font-bold text-[1rem] max-md:text-[0.85rem] leading-tight">
        {label}
      </p>
    </div>
  );
}

export default function AkronDemand() {
  const headRef = useReveal<HTMLDivElement>();

  return (
    <section className="bg-paper py-28 max-md:py-20" id="demand">
      <div className="wrap max-w-7xl">
        <div ref={headRef} className="reveal grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start mb-14">
          <div>
            <p className="eyebrow mb-5">
              <span className="eyebrow-line" />
              The Demand Angle
            </p>
            <h2 className="text-[clamp(1.7rem,3.8vw,2.9rem)] text-ink mb-0">
              A Shop Only Matters{" "}
              <span className="ital text-brass">If People Want to Use It.</span>
            </h2>
          </div>
          <div>
            <p className="text-ink-soft text-[1rem] mb-4">
              Think about the businesses that need physical commercial space:
            </p>
            <p className="text-ink text-[1.05rem] font-semibold leading-relaxed mb-4">
              {BUSINESSES.join(" ")}
            </p>
            <p className="text-ink-soft text-[1rem] m-0">
              Commercial property follows demand — and that&apos;s why the
              location of Akron UBA Mall matters.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {USES.map((u) => (
            <UseTile key={u.label} {...u} />
          ))}
        </div>
        <p className="text-ink-soft text-[0.8rem] mb-12">
          Illustrative potential uses. Images show Akron UBA Mall renders and
          site photos, not current tenants.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-6 bg-ink text-white rounded-xl px-10 py-8 max-md:px-6">
          <p className="font-display text-[clamp(1.2rem,2.6vw,1.7rem)] m-0 max-w-[620px]">
            The objective isn&apos;t simply to own square metres. It&apos;s to own
            commercial space{" "}
            <span className="ital text-brass-light">where businesses want to be.</span>
          </p>
          <ConsultationButton>I Want to See the Available Shops</ConsultationButton>
        </div>
      </div>
    </section>
  );
}
