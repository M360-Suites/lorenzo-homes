"use client";
import { useEffect, useState } from "react";
import { useContactModal } from "@/components/ContactModalContext";

export default function AkronStickyBar() {
  const [show, setShow] = useState(false);
  const { openModal } = useContactModal();

  useEffect(() => {
    const fn = () => setShow(window.scrollY > window.innerHeight * 0.75);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 top-[92px] max-md:top-[76px] z-90 bg-ink text-white border-b border-white/10 transition-all duration-300 ${
        show
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
      aria-hidden={!show}
    >
      <div className="wrap max-w-7xl flex items-center justify-between gap-4 py-2.5">
        <p className="m-0 text-[0.8rem] font-bold tracking-[0.12em] uppercase whitespace-nowrap">
          Akron UBA Mall
          <span className="max-sm:hidden">
            <span className="text-white/35 mx-2">|</span>
            <span className="text-white/60">Orchid Road, Lekki</span>
          </span>
        </p>
        <p className="m-0 text-[0.88rem] text-white/70 max-lg:hidden">
          Own a piece of one of Lekki&apos;s growing commercial hubs →
        </p>
        <button
          type="button"
          onClick={openModal}
          tabIndex={show ? 0 : -1}
          className="btn btn-solid shrink-0 cursor-pointer"
          style={{ padding: "8px 16px", fontSize: "0.78rem" }}
        >
          I Want to Invest
        </button>
      </div>
    </div>
  );
}
