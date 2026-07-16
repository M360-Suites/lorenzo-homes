"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../public/logo_1.jpg";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  //   { href: "/sales", label: "Sales" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Only the home page gets the transparent-until-scroll treatment
const HERO_ROUTES = ["/", "/projects", "/sales"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [linksVisible, setLinksVisible] = useState(false);

  const pathname = usePathname();
  // Transparent only on home page; all other pages show solid header immediately
  const solidBg = scrolled || !HERO_ROUTES.includes(pathname);
  const isActive = (href: string) => pathname === href;

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
      // Links stagger out first, drawer slides after they're gone
      const t = setTimeout(() => setLinksVisible(false), 0);
      return () => clearTimeout(t);
    }
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-49"
          onClick={close}
          aria-hidden="true"
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${
          solidBg
            ? "bg-paper/95 backdrop-blur-md shadow-[0_3px_10px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="wrap flex items-center justify-between py-1.5">
          {/* Logo */}
          <Image
            src={Logo}
            alt="Lorenzo Homes"
            width={100}
            height={100}
            className="h-20 w-auto"
          />
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
              <Link
                key={n.href}
                href={n.href}
                onClick={close}
                className={`relative font-medium text-[44px]/[100%] overflow-hidden
                  after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px]
                  after:bg-brass after:transition-all uppercase font-display after:duration-300
                  ${
                    isActive(n.href)
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
              </Link>
            );
          })}
        </nav>
      </header>
    </>
  );
}
