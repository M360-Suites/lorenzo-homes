"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const LIGHT_ROUTES = ["/contact", "/about"];

export default function Header() {
  const pathname = usePathname();
  const isLight = LIGHT_ROUTES.includes(pathname);

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [linksVisible, setLinksVisible] = useState(false);

  const solidBg = scrolled || isLight;

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

  useEffect(() => {
    if (open) {
      // Wait for drawer slide to start, then stagger links in
      const t = setTimeout(() => setLinksVisible(true), 100);
      return () => clearTimeout(t);
    } else {
      // Links stagger out first, drawer slides after they're gone
      setLinksVisible(false);
    }
  }, [open]);

  const close = () => setOpen(false);

  const STAGGER = 60; // ms between each link
  const DURATION = 400; // ms per link transition
  const totalOut = NAV.length * STAGGER + DURATION; // time before drawer closes

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
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          solidBg
            ? "bg-paper/95 backdrop-blur-md shadow-[0_3px_10px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="wrap flex items-center justify-between py-[22px]">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-[10px] transition-colors duration-300 ${
              solidBg ? "text-ink" : "text-white"
            }`}
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
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-[34px]">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`relative pb-1 font-semibold text-[0.92rem] transition-colors duration-300
                  after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:w-0
                  after:bg-brass after:transition-all after:duration-300 hover:after:w-full
                  ${pathname === n.href ? "after:w-full" : ""}
                  ${solidBg ? "text-ink-soft" : "text-white"}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className={`btn hidden md:inline-flex ${solidBg ? "btn-ghost" : "btn-outline"}`}
            style={{ padding: "10px 20px", fontSize: "0.85rem" }}
          >
            Enquire Now
          </Link>

          {/* Hamburger */}
          <button
            className="flex md:hidden flex-col justify-center gap-1.25 w-7.5 h-6 bg-transparent border-0 cursor-pointer p-0 z-60"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block w-full h-0.5 transition-all duration-300 ${solidBg && !open ? "bg-ink" : "bg-white"} ${open ? "translate-y-1.75 rotate-45" : ""}`}
            />
            <span
              className={`block w-full h-0.5 transition-all duration-300 ${solidBg ? "bg-ink" : "bg-white"} ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-full h-0.5 transition-all duration-300 ${solidBg && !open ? "bg-ink" : "bg-white"} ${open ? "-translate-y-1.75 -rotate-45" : ""}`}
            />
          </button>
        </div>

        {/* Mobile drawer */}
        <nav
          className={`fixed top-0 right-0 h-screen w-[78%] max-w-[320px] bg-ink
            flex flex-col justify-center gap-8 px-10 z-50
            transition-transform duration-300
            ${open ? "translate-x-0" : "translate-x-full"}`}
          // Delay the drawer sliding OUT until all links have staggered away
          style={{ transitionDelay: open ? "0ms" : `${totalOut}ms` }}
        >
          {NAV.map((n, i) => {
            // stagger IN: 0, 60, 120, 180ms  (first → last)
            const inDelay = i * STAGGER;
            // stagger OUT: reversed — last link exits first
            const outDelay = (NAV.length - 1 - i) * STAGGER;

            return (
              <Link
                key={n.href}
                href={n.href}
                onClick={close}
                className={`relative font-semibold text-[44px]/[100%] overflow-hidden
                  after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px]
                  after:bg-brass after:transition-all uppercase font-display after:duration-300 hover:after:w-full
                  ${pathname === n.href ? "text-white after:w-full" : "text-white/60 after:w-0"}`}
                style={{
                  opacity: linksVisible ? 1 : 0,
                  transform: linksVisible
                    ? "translateX(0)"
                    : "translateX(48px)",
                  transition: `opacity ${DURATION}ms cubic-bezier(0.22,0.61,0.36,1),
                                    transform ${DURATION}ms cubic-bezier(0.22,0.61,0.36,1)`,
                  transitionDelay: linksVisible
                    ? `${inDelay}ms`
                    : `${outDelay}ms`,
                }}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
      </header>
    </>
  );
}
