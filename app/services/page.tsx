import type { Metadata } from "next";
import Services from "@/sections/Services";
import Link from "next/link";
import Image from "next/image";
import BuildingImg from "@/public/assets/house02.jpg";

export const metadata: Metadata = {
  title: "Services — Lorenzo Homes",
  description:
    "Lorenzo Homes provides real estate development, project finance, facility management and funds investment services across Nigeria.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="bg-paper pt-36 pb-0 max-md:pt-28 border-b border-stone-line overflow-hidden">
        <div className="wrap max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            {/* Text */}
            <div className="pb-16 max-md:pb-10">
              <p className="eyebrow mb-4">
                <span className="eyebrow-line" />
                What We Do
              </p>
              <h1 className="text-[clamp(2.2rem,4.8vw,3.6rem)] text-ink max-w-[560px] mb-5">
                Services built around the full life of an asset.
              </h1>
              <p className="text-ink-soft text-[1.05rem] max-w-[480px] mb-8 leading-relaxed">
                From acquisition and finance through to management and disposal
                — we deliver end-to-end real estate expertise across commercial,
                industrial and residential asset classes.
              </p>
              <Link href="/contact" className="btn btn-solid">
                Talk To Us
              </Link>
            </div>

            {/* Image — sits flush at the bottom of the hero */}
            <div className="relative h-[420px] max-md:h-[260px] rounded-t-xl overflow-hidden shadow-2xl">
              <Image
                src={BuildingImg}
                alt="Lorenzo Homes commercial development"
                fill
                priority
                className="object-cover object-center"
              />
              {/* Subtle left-fade so it bleeds into the text column on desktop */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, var(--color-paper) 0%, transparent 18%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <Services />

      {/* Bottom CTA */}
      <section className="bg-ink text-white py-20 max-md:py-16">
        <div className="wrap max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] text-white mb-2">
              Ready to work with us?
            </h2>
            <p className="text-white/60 text-[0.97rem] m-0">
              Our team is available to discuss any project, investment or
              leasing enquiry.
            </p>
          </div>
          <Link href="/contact" className="btn btn-solid shrink-0">
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
