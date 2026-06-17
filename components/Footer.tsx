"use client";
import { useEffect, useRef } from "react";
export default function Footer() {
  const year = new Date().getFullYear();

  // inside Footer component:
  const wordmarkRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fit = () => {
      const el = wordmarkRef.current;
      if (!el) return;
      el.style.fontSize = "100px";
      const scale = el.parentElement!.offsetWidth / el.scrollWidth;
      el.style.fontSize = `${100 * scale * 0.98}px`; // 0.98 = tiny breathing room
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <footer className="bg-ink text-white/75 pt-20 max-md:pt-10">
      <div className="wrap grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr] gap-12 max-md:first:gap-3 pb-[50px] border-b border-white/10">
        {/* <div className="col-span-0">
          {/* <a
            href="#home"
            className="flex items-center gap-[10px] text-white mb-[14px]"
          >
            <svg viewBox="0 0 48 48" width="30" height="30" aria-hidden="true">
              <rect
                x="2"
                y="2"
                width="44"
                height="44"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M10 34V20l14-9 14 9v14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              />
            </svg>
            <span className="font-display text-[1.18rem] font-semibold">
              Lorenzo
              <em className="not-italic text-brass font-medium">Homes</em>
            </span> */}
        {/* </a> */}
        {/* </div>  */}
        <div className="flex flex-col gap-3 text-[0.9rem]">
          <strong className="text-white text-[1rem] tracking-[0.05em] uppercase mb-[6px]">
            Explore
          </strong>
          {["About", "Services", "Projects", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="hover:text-brass-light transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-3 text-[0.9rem]">
          <strong className="text-white text-[1rem] tracking-[0.05em] uppercase mb-[6px]">
            Office
          </strong>
          <span>Suite 001, Jomayo Mall</span>
          <span>4/5 T.F. Kunboye Street</span>
          <span>Lekki Phase 1, Lagos, Nigeria</span>
        </div>
      </div>
      {/* Bold faded wordmark */}
      <div className="overflow-hidden flex flex-col w-full max-w-7xl mx-auto gap-2 justify-center pt-5">
        <div className="flex flex-col items-center gap-0.5">
          {/* <p className="text-[0.88rem] max-md:text-[0.7rem] w-[280px] w-full text-center text-white/55 m-0">
            Building value across Nigerian real estate for over 25 years.
          </p> */}
          <span className="text-[0.88rem] max-md:text-[0.7rem] w-[280px] w-full text-center text-white/55 m-0">
            © {year} Lorenzo Homes. All rights reserved.
          </span>
        </div>

        {/* <span
          className="whitespace-nowrap w-full flex-wrap max-md:flex-col font-display block max-md:leading-100 leading-38 tracking-[-0.04em]"
          style={{
            fontWeight: 500,
            // fontSize: "clamp(40px, 30vw, 180px)",
            color: "rgba(255,255,255,0.3)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 90%)",
            maskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 90%)",
          }}
        >
          Lorenzo
          <em className="not-italic" style={{ color: "rgba(184,132,47,0.3)" }}>
            Homes
          </em>
        </span> */}
      </div>
      {/* <div className="overflow-hidden flex flex-col w-full max-w-7xl mx-auto gap-2 justify-center items-center">
        <span
          className="block w-full font-display tracking-[-0.04em] leading-[0.88]"
          style={{
            fontWeight: 500,
            fontSize: "clamp(80px, 22vw, 180px)",
            color: "rgba(255,255,255,0.3)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 90%)",
            maskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 90%)",
            wordBreak: "break-word",
          }}
        >
          Lorenzo{" "}
          <em className="not-italic" style={{ color: "rgba(184,132,47,0.3)" }}>
            Homes
          </em>
        </span>
      </div> */}
      <div className=" flex-col lg:min-h-[15vh] md:flex-row overflow-hidden w-full flex justify-center items-center">
        <span
          className="
       whitespace-nowrap leading-none tracking-[-0.04em] font-display font-medium
      text-[6.4rem] md:text-[110px] lg:text-[150px] xl:text-[190px]
    "
          style={{
            color: "rgba(255,255,255,0.3)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 90%)",
            maskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 90%)",
          }}
        >
          Lorenzo
        </span>
        <span
          className="
       whitespace-nowrap leading-none tracking-[-0.04em] font-display font-medium
      text-[6.5rem] md:text-[110px] lg:text-[150px] xl:text-[180px]
    "
          style={{
            color: "rgba(184,132,47,0.3)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 90%)",
            maskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 90%)",
          }}
        >
          Homes
        </span>
      </div>

      {/* <div className="wrap flex justify-between flex-wrap gap-[10px] text-[0.8rem] text-white/45 pt-6">
        <span>© {year} Lorenzo Homes. All rights reserved.</span>
        <span>Integrity · Excellence · Client Satisfaction</span>
      </div> */}
    </footer>
  );
}
