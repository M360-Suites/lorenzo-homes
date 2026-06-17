import Image from "next/image";
import Link from "next/link";
import House from "@/public/assets/house02.jpg";

export default function CtaBand() {
  return (
    <section className="bg-sand py-16">
      <div className="wrap flex max-lg:flex-col items-center justify-between gap-6">
        <div className="w-150 h-80 max-lg:w-full max-md:h-60 overflow-hidden rounded-lg bg-black flex items-center justify-center">
          <Image
            src={House}
            alt="House"
            height={500}
            width={500}
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex flex-col items-start gap-6 max-md:items-center max-w-[400px]">
          <h2 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] m-0 max-lg:text-center text-ink ">
            Ready to lease, invest or build with us?
          </h2>
          <Link href="/contact" className="btn btn-ink max-md:px-15">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
