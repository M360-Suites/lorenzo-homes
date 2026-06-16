"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);
  const scrollTo = (href: string) => {
    close();
    document
      .getElementById(href.slice(1))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-[49]"
          onClick={close}
          aria-hidden="true"
        />
      )}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "bg-paper/[0.92] backdrop-blur-md shadow-[0_6px_24px_rgba(0,0,0,0.06)]" : "bg-transparent"}`}
      >
        <div className="wrap flex items-center justify-between py-5.5">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#home");
            }}
            className={`flex items-center gap-[10px] transition-colors duration-300 ${scrolled ? "text-ink" : "text-white"}`}
          >
            <svg viewBox="0 0 48 48" width="34" height="34" aria-hidden="true">
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
              <line
                x1="24"
                y1="11"
                x2="24"
                y2="34"
                stroke="currentColor"
                strokeWidth="1.4"
                opacity=".5"
              />
            </svg>
            <span className="font-display text-[1.18rem] font-semibold">
              Lorenzo
              <em className="not-italic text-brass font-medium">Homes</em>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-8.5">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={(e) => {
                  // e.preventDefault();
                  // scrollTo(n.href);
                }}
                className={`relative pb-1 font-semibold text-[0.92rem] transition-colors duration-300 after:absolute after:left-0 after:bottom-[-2px] after:h-[1.5px] after:w-0 after:bg-brass after:transition-all after:duration-300 hover:after:w-full ${scrolled ? "text-ink-soft" : "text-white"}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
            className={`btn hidden md:inline-flex ${scrolled ? "btn-ghost" : "btn-outline"}`}
            style={{ padding: "10px 20px", fontSize: "0.85rem" }}
          >
            Enquire Now
          </a>

          {/* Hamburger */}
          <button
            className="flex md:hidden flex-col justify-center gap-[5px] w-[30px] h-6 bg-transparent border-0 cursor-pointer p-0 z-[60]"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block w-full h-[2px] transition-all duration-300 ${scrolled ? "bg-ink" : "bg-white"} ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block w-full h-[2px] transition-all duration-300 ${scrolled ? "bg-ink" : "bg-white"} ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-full h-[2px] transition-all duration-300 ${scrolled ? "bg-ink" : "bg-white"} ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>

        {/* Mobile nav drawer */}
        <nav
          className={`fixed top-0 right-0 h-screen w-[78%] max-w-[320px] bg-ink flex flex-col justify-center gap-8 px-10 z-50 transition-transform duration-400 ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={(e) => {
                // e.preventDefault();
                // scrollTo(n.href);
              }}
              className="text-white font-semibold text-[1.1rem] relative after:absolute after:left-0 after:bottom-[-2px] after:h-[1.5px] after:w-0 after:bg-brass after:transition-all after:duration-300 hover:after:w-full"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
