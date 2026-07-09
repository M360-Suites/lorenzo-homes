"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "Can I pay in installments?",
    a: "Yes. We offer flexible payment plans tailored to your financial capacity. Our investment advisors will walk you through the available options during your free consultation.",
  },
  {
    q: "Can Nigerians in the Diaspora buy?",
    a: "Absolutely. Many of our investors purchase remotely from the UK, US, Canada, and other countries. We handle the full process with verified documentation and dedicated support.",
  },
  {
    q: "Can I inspect the site?",
    a: "Yes. Site inspections can be arranged at short notice — whether you're coming from within Lagos or travelling from abroad. Contact us to schedule a visit.",
  },
  {
    q: "Can I resell before completion?",
    a: "Yes. You may resell your unit before completion, subject to the terms outlined in your purchase agreement. Our team can advise you on the resale process.",
  },
  {
    q: "Will the property be professionally managed?",
    a: "Yes. The mall will be professionally managed post-completion, ensuring that the facility attracts and retains premium tenants — protecting your rental income.",
  },
  {
    q: "How do I reserve a unit?",
    a: "Book a free investment consultation with our team. We'll walk you through the available units, pricing, payment plans and documentation — at no obligation.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-stone-line last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-semibold text-[1rem] text-ink group-hover:text-brass transition-colors">
          {q}
        </span>
        <span
          className={`w-6 h-6 shrink-0 flex items-center justify-center rounded-full border border-stone-line text-ink-soft transition-all duration-300 ${
            open ? "rotate-45 bg-brass border-brass text-white" : ""
          }`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none">
            <path
              d="M8 2v12M2 8h12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-ink-soft text-[0.95rem] leading-relaxed m-0">{a}</p>
      </div>
    </div>
  );
}

export default function AkronFAQ() {
  return (
    <section className="bg-stone py-28 max-md:py-20" id="faq">
      <div className="wrap max-w-7xl">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          {/* Left: heading */}
          <div>
            <p className="eyebrow mb-5">
              <span className="eyebrow-line" />
              FAQs
            </p>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.8rem)] text-ink mb-4">
              Frequently Asked{" "}
              <span className="ital text-brass">Questions</span>
            </h2>
            <p className="text-ink-soft text-[0.97rem] max-w-[320px]">
              Have more questions? Our investment advisors are available to
              answer anything not covered here.
            </p>
          </div>

          {/* Right: accordion */}
          <div className="bg-paper rounded-xl border border-stone-line px-8 max-md:px-5 py-2">
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
