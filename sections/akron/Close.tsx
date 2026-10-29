"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Media from "./Media";
import { submitLead } from "@/lib/submitLead";
import {
  BALANCE_MONTHS,
  COMPLETION,
  FRONT_PRICE_PER_SQM,
  IMG,
  MAX_SQM,
  MIN_PRICE,
  MIN_SQM,
  PAYMENT_FORMATS,
  PRICE_PER_SQM,
  PURCHASE_TIMELINES,
  SHOPS_LEFT,
  VIDEO,
  naira,
} from "./data";

const inputCls =
  "font-body text-[0.95rem] py-3 px-[14px] border border-stone-line rounded-lg bg-paper text-ink font-medium outline-none transition-all focus:border-brass focus:ring-2 focus:ring-brass/20 w-full";
const labelCls = "flex flex-col gap-[6px] text-[0.82rem] font-bold text-ink-soft";

const FACTS = [
  `${COMPLETION}% completed`,
  `${SHOPS_LEFT} shops remaining`,
  `${MIN_SQM}sqm – ${MAX_SQM}sqm`,
  `${naira(PRICE_PER_SQM)}/sqm · ${naira(FRONT_PRICE_PER_SQM)}/sqm front shops`,
  "70% initial payment",
  `30% balance within ${BALANCE_MONTHS} months`,
];

const EMPTY = { name: "", phone: "", email: "", paymentFormat: "", budget: "", timeline: "" };

export default function AkronClose() {
  const router = useRouter();
  const [fields, setFields] = useState(EMPTY);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set =
    (k: keyof typeof EMPTY) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFields((v) => ({ ...v, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fields.name.trim() || !fields.phone.trim()) {
      setErrorMsg("Please fill in your name and phone number.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      await submitLead({
        ...fields,
        interest: "Akron UBA Mall — fractional / shop purchase",
        source: "sales",
      });
      router.push("/sales/thank-you");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="relative overflow-hidden bg-ink text-white py-28 max-md:py-20" id="close">
      <div className="absolute inset-0 z-0">
        <Media
          image={IMG.renderFront}
          video={VIDEO.final}
          alt="Akron UBA Mall"
          className="object-cover object-center"
          drift
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg,rgba(20,17,13,0.97) 0%,rgba(20,17,13,0.9) 50%,rgba(20,17,13,0.7) 100%)",
          }}
        />
      </div>

      <div className="wrap max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div>
            <h2 className="text-[clamp(1.9rem,4.4vw,3.5rem)] text-white mb-4">
              {naira(MIN_PRICE)}{" "}Doesn&apos;t Have to Mean &ldquo;I Can&apos;t
              Afford It.&rdquo;
            </h2>
            <p className="font-display ital text-[clamp(1.4rem,3vw,2.3rem)] text-brass-light mb-10">
              It could mean &ldquo;Who can I own it with?&rdquo;
            </p>

            <p className="eyebrow eyebrow-light mb-5">
              <span className="eyebrow-line" style={{ background: "var(--color-brass-light)" }} />
              📍 Akron UBA Mall · Orchid Road, Lekki
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {FACTS.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[0.92rem] text-white/85"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brass-light shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Lead form */}
          <div className="bg-paper text-ink rounded-2xl shadow-2xl overflow-hidden">
            <div className="px-8 pt-8 pb-6 max-md:px-6 border-b border-stone-line">
              <p className="eyebrow mb-2">
                <span className="eyebrow-line" />
                Lorenzo Homes
              </p>
              <h3 className="text-[1.6rem] text-ink m-0">Own a Piece of Akron UBA Mall</h3>
            </div>
            <form
              id="akron-lead-form"
              onSubmit={handleSubmit}
              className="px-8 py-7 max-md:px-6 grid gap-5"
              noValidate
            >
              <label className={labelCls}>
                Full Name*
                <input
                  type="text"
                  name="name"
                  value={fields.name}
                  onChange={set("name")}
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                  className={inputCls}
                />
              </label>
              <label className={labelCls}>
                Phone Number*
                <input
                  type="tel"
                  name="phone"
                  value={fields.phone}
                  onChange={set("phone")}
                  placeholder="+234"
                  autoComplete="tel"
                  required
                  className={inputCls}
                />
              </label>
              <label className={labelCls}>
                Email
                <input
                  type="email"
                  name="email"
                  value={fields.email}
                  onChange={set("email")}
                  placeholder="you@email.com"
                  autoComplete="email"
                  className={inputCls}
                />
              </label>
              <label className={labelCls}>
                Payment Format
                <select
                  name="paymentFormat"
                  value={fields.paymentFormat}
                  onChange={set("paymentFormat")}
                  className={inputCls}
                >
                  <option value="">Select payment format</option>
                  {PAYMENT_FORMATS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>
              <label className={labelCls}>
                Actual Budget
                <input
                  type="text"
                  name="budget"
                  value={fields.budget}
                  onChange={set("budget")}
                  placeholder="e.g. ₦30,000,000"
                  inputMode="numeric"
                  className={inputCls}
                />
              </label>
              <label className={labelCls}>
                How soon are you looking at purchasing?
                <select
                  name="timeline"
                  value={fields.timeline}
                  onChange={set("timeline")}
                  className={inputCls}
                >
                  <option value="">Select timeframe</option>
                  {PURCHASE_TIMELINES.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn btn-solid btn-full rounded-lg"
              >
                {status === "loading" ? "Sending…" : "I Want to Invest"}
              </button>

              {status === "success" && (
                <p className="text-[0.85rem] font-bold text-green-700 m-0">
                  ✓ Thank you! You&apos;ll get a call or email from us shortly to confirm
                  availability.
                </p>
              )}
              {status === "error" && errorMsg && (
                <p className="text-[0.85rem] font-bold text-red-700 m-0">{errorMsg}</p>
              )}
              <p className="text-[0.78rem] text-ink-soft m-0">
                No obligation. We&apos;ll share current availability, floor plans
                and how a fractional arrangement could work for your group.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
