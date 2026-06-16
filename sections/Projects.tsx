
"use client";
import { useState } from "react";

const COMPLETED = {
  commercial: [
    { name: "49-Shop Plaza",                           loc: "Olowu, Ikeja, Lagos" },
    { name: "60-Shop Plaza",                           loc: "Egbeda, Ikeja, Lagos" },
    { name: "24-Shop Plaza",                           loc: "Akowojo, Ikeja, Lagos" },
    { name: "30-Shop Plaza",                           loc: "Olowu, Ikeja, Lagos" },
    { name: "28-Shop Plaza",                           loc: "Dopemu, Ikeja, Lagos" },
    { name: "Ultra-Modern Mall · 2,950 sqm GLA, 4 floors", loc: "Orchid Road, Lekki" },
    { name: "Ultra-Modern Shopping Mall · 3,300 sqm GLA",  loc: "Lekki Phase 1" },
  ],
  industrial: [
    { name: "22 Bays of Warehouses",              loc: "Abule Osun, Mazamaza, Lagos" },
    { name: "2 Bays of Warehouse",                loc: "Abule Osun, Mazamaza, Lagos" },
    { name: "Rice Milling Factory & Warehouse",   loc: "Elele Alimini, Port Harcourt, Rivers State" },
    { name: "Rice Mill Factory & Warehouse",      loc: "Bida, Niger State" },
    { name: "Cassava Factory & Warehouse",        loc: "Lanlate, Oyo State" },
  ],
  residential: [
    { name: "2 Wings, 5-Bedroom Duplex",              loc: "Ade Ajayi Street, Ogudu GRA, Lagos" },
    { name: "6-Bedroom Detached House",               loc: "Osborne Phase 2, Ikoyi, Lagos" },
    { name: "Block of 3no 3-Bedroom Apartments",      loc: "Osborne, Ikoyi, Lagos" },
    { name: "Block of 5-Bedroom Mansion",             loc: "Banana Island, Ikoyi, Lagos" },
  ],
};

const THUMBS = ["render","construction-1","construction-2"];

export default function Projects() {
  const [tab, setTab]     = useState<"completed"|"ongoing">("completed");
  const [thumb, setThumb] = useState(0);

  return (
    <section id="projects" className="py-[110px] bg-ink text-white">
      <div className="wrap">
        <div className="section-head mb-10">
          <p className="eyebrow eyebrow-light">Our Portfolio</p>
          <h2 className="text-white text-[clamp(1.9rem,3vw,2.5rem)]">Past delivery. Present momentum.</h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-[10px] mb-[46px] border-b border-white/15">
          {(["completed","ongoing"] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`bg-transparent border-0 font-body font-bold text-[0.95rem] pb-[14px] mr-[30px] cursor-pointer relative tracking-[0.01em] transition-colors duration-300 after:absolute after:left-0 after:bottom-[-1px] after:h-[2px] after:bg-brass after:transition-all after:duration-300 ${tab === t ? "text-white after:w-full" : "text-white/55 after:w-0"}`}
              aria-selected={tab === t}
            >
              {t === "completed" ? "Completed Projects" : "Ongoing Project"}
            </button>
          ))}
        </div>

        {/* Completed panel */}
        {tab === "completed" && (
          <div className="animate-fadeUp">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { heading: "Commercial", count: 7, items: COMPLETED.commercial },
                { heading: "Industrial", count: 5, items: COMPLETED.industrial },
                { heading: "Residential",count: 4, items: COMPLETED.residential },
              ].map(col => (
                <div key={col.heading}>
                  <h3 className="text-[1.05rem] border-b border-white/18 pb-[14px] mb-[18px]">
                    {col.heading} <span className="text-brass-light font-normal">· {col.count}</span>
                  </h3>
                  <ul className="list-none m-0 p-0 flex flex-col gap-4">
                    {col.items.map(item => (
                      <li key={item.name} className="flex flex-col gap-[2px]">
                        <span className="text-[0.92rem] font-semibold">{item.name}</span>
                        <small className="text-[0.8rem] text-white/55">{item.loc}</small>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-[46px] text-[0.88rem] text-white/55 max-w-[640px] border-t border-white/12 pt-6 mb-0">
              Full details and pictures of completed projects are available on request. Site inspections can be arranged at short notice.
            </p>
          </div>
        )}

        {/* Ongoing panel */}
        {tab === "ongoing" && (
          <div className="animate-fadeUp grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[54px] items-start">
            {/* Gallery */}
            <div>
              <div className="rounded-[2px] overflow-hidden aspect-[16/10] bg-black flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-[#2a1f12] via-[#1C1814] to-[#3d2f1e] flex items-center justify-center">
                  <svg viewBox="0 0 120 80" width="100" height="70" opacity=".3">
                    <rect x="2" y="2" width="116" height="76" fill="none" stroke="#B8842F" strokeWidth="1.5"/>
                    <path d="M20 60V32l40-22 40 22v28" fill="none" stroke="#B8842F" strokeWidth="2"/>
                    <path d="M40 60V44h20v16" fill="none" stroke="#B8842F" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
              <div className="flex gap-[10px] mt-3">
                {THUMBS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setThumb(i)}
                    className={`p-0 border-2 bg-transparent cursor-pointer w-20 h-14 overflow-hidden rounded-[2px] transition-all duration-300 ${thumb === i ? "opacity-100 border-brass" : "opacity-60 border-transparent"}`}
                    aria-label={`View image ${i + 1}`}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-[#2a1f12] to-[#1C1814] flex items-center justify-center">
                      <svg viewBox="0 0 30 20" width="28"><path d="M5 16V8l10-6 10 6v8" fill="none" stroke="#B8842F" strokeWidth="1.5"/></svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <p className="inline-flex items-center gap-2 text-[0.8rem] font-bold tracking-[0.06em] uppercase text-brass-light mb-[14px]">
                <span className="inline-block w-[7px] h-[7px] bg-brass-light rounded-full animate-pulse" />
                Under Construction
              </p>
              <h3 className="font-display text-[1.8rem] mb-[0.5em]">Orchid Road, Lekki</h3>
              <p className="text-white/72">
                A 3,100 sqm gross lettable, mixed-use commercial plaza rising on 2,350 sqm of land along
                Orchid Road, Lekki — built for retail flagships, showrooms and office suites in one of
                Lagos's fastest-growing commercial corridors.
              </p>
              <div className="flex gap-[14px] my-[22px] flex-wrap">
                {[
                  { val:"3,100 sqm", label:"Gross lettable area" },
                  { val:"2,350 sqm", label:"Land area" },
                  { val:"4",         label:"Floors" },
                ].map(c => (
                  <div key={c.label} className="bg-white/[0.06] border border-white/12 p-[14px_18px] rounded-[2px] min-w-[120px]">
                    <strong className="block font-display text-[1.3rem] text-white">{c.val}</strong>
                    <span className="text-[0.76rem] text-white/55">{c.label}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/14 pt-6">
                <p className="text-[0.8rem] font-bold tracking-[0.08em] uppercase text-white/55 mb-3">Site walkthrough</p>
                <div className="w-full max-w-[320px] aspect-video bg-white/[0.06] border border-white/12 rounded flex flex-col items-center justify-center gap-[10px] text-white/40 text-[0.8rem] tracking-[0.04em]">
                  <div className="w-[38px] h-[38px] bg-brass rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 12 14" width="14" height="14" fill="white"><path d="M2 1l10 6-10 6z"/></svg>
                  </div>
                  <span>Video available on request</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
