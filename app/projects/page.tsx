import type { Metadata } from "next";
import Projects from "@/sections/Projects";
import Link from "next/link";
import Image from "next/image";
import BuildingImg from "@/public/assets/house03.jpg";

export const metadata: Metadata = {
  title: "Projects — Lorenzo Homes",
  description:
    "Explore Lorenzo Homes' portfolio of completed and ongoing commercial, industrial and residential developments across Nigeria.",
};

export default function ProjectsPage() {
  return (
    <main>
      {/* Page hero — full-bleed image with dark overlay */}
      <section className="relative text-white pt-40 pb-20 max-md:pt-32 max-md:pb-14 overflow-hidden min-h-[480px] flex items-end">
        {/* Background image */}
        <Image
          src={BuildingImg}
          alt="Lorenzo Homes — Orchid Road development"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(28,24,20,0.95) 0%, rgba(28,24,20,0.65) 55%, rgba(28,24,20,0.35) 100%)",
          }}
        />

        {/* Content */}
        <div className="wrap max-w-7xl relative z-10 w-full">
          <p className="eyebrow eyebrow-light mb-4">
            <span
              className="eyebrow-line"
              style={{ background: "var(--color-brass-light)" }}
            />
            Our Portfolio
          </p>
          <h1 className="text-[clamp(2.2rem,4.8vw,3.8rem)] text-white max-w-[640px] mb-5">
            Past delivery.{" "}
            <span className="ital text-brass-light">Present momentum.</span>
          </h1>
          <p className="text-white/70 text-[1.05rem] max-w-[520px] mb-8 leading-relaxed">
            16 completed developments across commercial, industrial and
            residential asset classes — and one landmark project currently
            underway on Orchid Road, Lekki.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/contact" className="btn btn-solid">
              Request Project Details
            </Link>
            <Link href="/sales" className="btn btn-outline">
              View Our Ongoing Project
            </Link>
          </div>
        </div>
      </section>

      {/* Projects section */}
      <Projects />

      {/* Bottom CTA */}
      <section className="bg-stone py-20 max-md:py-16 border-t border-stone-line">
        <div className="wrap max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] text-ink mb-2">
              Interested in our ongoing project?
            </h2>
            <p className="text-ink-soft text-[0.97rem] m-0 max-w-[460px]">
              Our commercial mall on Orchid Road is now open for investment.
              Book a free consultation to learn more.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap shrink-0">
            <Link href="/sales" className="btn btn-solid">
              View Investment Details
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
