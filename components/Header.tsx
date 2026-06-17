"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const LIGHT_ROUTES = ["/contact", "/about"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [linksVisible, setLinksVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const solidBg = scrolled;
  const isActive = (href: string) => activeSection === href.slice(1);

  const STAGGER = 60;
  const DURATION = 400;
  const totalOut = NAV.length * STAGGER + DURATION;

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
      const t = setTimeout(() => setLinksVisible(true), 100);
      return () => clearTimeout(t);
    } else {
      setLinksVisible(false);
    }
  }, [open]);

  // ← only new code: track which section is in view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV.forEach(({ href }) => {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        {
          threshold: 0,
          rootMargin: "-40% 0px -55% 0px",
        },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const close = () => setOpen(false);

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
                  after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px]
                  after:bg-brass after:transition-all after:duration-300
                  ${isActive(n.href) ? "after:w-full" : "after:w-0 hover:after:w-full"}
                  ${
                    solidBg
                      ? isActive(n.href)
                        ? "text-ink"
                        : "text-ink-soft"
                      : isActive(n.href)
                        ? "text-white"
                        : "text-white/70"
                  }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="#contact"
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
          className={`fixed top-0 right-0 h-screen w-[80%] max-w-[350px] bg-ink
            flex flex-col justify-center gap-8 px-5 z-50
            transition-transform duration-300
            ${open ? "translate-x-0" : "translate-x-full"}`}
          style={{ transitionDelay: open ? "0ms" : `${totalOut}ms` }}
        >
          {NAV.map((n, i) => {
            const inDelay = i * STAGGER;
            const outDelay = (NAV.length - 1 - i) * STAGGER;

            return (
              <a
                key={n.href}
                href={n.href}
                onClick={() => {
                  close();
                  document
                    .getElementById(n.href.slice(1))
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`relative font-medium text-[44px]/[100%] overflow-hidden
                  after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px]
                  after:bg-brass after:transition-all uppercase font-display after:duration-300
                  ${
                    isActive(`${n.href}`)
                      ? "text-white after:w-full"
                      : "text-white/60 after:w-0 hover:after:w-full"
                  }`}
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
              </a>
            );
          })}
        </nav>
      </header>
    </>
  );
}
