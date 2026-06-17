"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

export default function Contact() {
  const infoRef = useReveal<HTMLDivElement>();
  const formRef = useReveal<HTMLDivElement>();

  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Leasing a space",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const set =
    (k: string) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setFields((v) => ({ ...v, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fields.name || !fields.email) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
    setFields({
      name: "",
      email: "",
      phone: "",
      interest: "Leasing a space",
      message: "",
    });
    setTimeout(() => setStatus("idle"), 6000);
  };

  const inputCls =
    "font-body text-[0.95rem] py-3 px-[14px] border border-stone-line rounded-lg bg-paper text-ink font-medium outline-none transition-all focus:border-brass focus:ring-2 focus:ring-brass/20 w-full";
  const labelCls =
    "flex flex-col gap-[6px] text-[0.82rem] font-bold text-ink-soft mb-[18px]";

  return (
    <section id="contact" className="py-35 max-md:py-30 bg-paper">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-16">
        {/* Info */}
        <div ref={infoRef} className="reveal">
          <h2 className="text-5xl max-md:text-3xl text-brass">GET IN TOUCH</h2>
          {/* <h2 className="text-[clamp(1.5rem,2.8vw,1.2rem)] mb-[0.5em]">
            Visit, call or write to our Lekki office.
          </h2> */}
          <p className="text-ink-soft max-w-[440px]">
            Full details and pictures of our projects are available on request,
            and site inspections can be arranged at short notice — whether
            you're joining us from Lagos or from abroad.
          </p>

          <div className="flex gap-4 mt-7">
            <svg
              className="w-[26px] h-[26px] shrink-0 text-brass mt-[2px]"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 22s7-7.58 7-12.5A7 7 0 005 9.5C5 14.42 12 22 12 22z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle
                cx="12"
                cy="9.5"
                r="2.6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
            <div>
              <strong className="block text-[0.95rem] mb-1">
                Office Address
              </strong>
              <p className="text-[0.9rem] text-ink-soft max-w-[340px]">
                Suite 001, Jomayo Mall,
                <br />
                4/5 T.F. Kunboye Street, Lekki Phase 1, Lagos, Nigeria
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-7">
            <svg
              className="w-[26px] h-[26px] shrink-0 text-brass mt-[2px]"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="1.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M4 7l8 6 8-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
            <div>
              <strong className="block text-[0.95rem] mb-1">Enquiries</strong>
              <p className="text-[0.9rem] text-ink-soft max-w-[340px]">
                Use the form for inspections, leasing, investment or partnership
                enquiries — our team typically responds within one business day.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div ref={formRef} className="reveal">
          <form
            onSubmit={handleSubmit}
            className="bg-stone p-[38px] max-md:p-4 rounded-lg"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
              <label className={labelCls}>
                Full Name
                <input
                  type="text"
                  value={fields.name}
                  onChange={set("name")}
                  placeholder="Your name"
                  required
                  className={inputCls}
                />
              </label>
              <label className={labelCls}>
                Email
                <input
                  type="email"
                  value={fields.email}
                  onChange={set("email")}
                  placeholder="you@email.com"
                  required
                  className={inputCls}
                />
              </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
              <label className={labelCls}>
                Phone / WhatsApp
                <input
                  type="tel"
                  value={fields.phone}
                  onChange={set("phone")}
                  placeholder="+234"
                  className={inputCls}
                />
              </label>
              <label className={labelCls}>
                I&apos;m interested in
                <select
                  value={fields.interest}
                  onChange={set("interest")}
                  className={inputCls}
                >
                  <option>Leasing a space</option>
                  <option>Investing with Lorenzo Homes</option>
                  <option>Site inspection</option>
                  <option>Partnership / Other</option>
                </select>
              </label>
            </div>
            <label className={labelCls}>
              Message
              <textarea
                value={fields.message}
                onChange={set("message")}
                rows={4}
                placeholder="Tell us a little about what you're looking for"
                className={inputCls}
              />
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn btn-solid btn-full rounded-lg mt-1"
            >
              {status === "loading" ? "Sending…" : "Send Enquiry"}
            </button>

            {status === "success" && (
              <p className="text-[0.85rem] font-bold mt-[14px] text-green-700">
                ✓ Enquiry sent. We&apos;ll be in touch within one business day.
              </p>
            )}
            {status === "error" && (
              <p className="text-[0.85rem] font-bold mt-[14px] text-red-700">
                Please fill in your name and email.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
