
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white/75 pt-[70px] pb-7">
      <div className="wrap grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12 pb-[50px] border-b border-white/10">
        <div>
          <a href="#home" className="flex items-center gap-[10px] text-white mb-[14px]">
            <svg viewBox="0 0 48 48" width="30" height="30" aria-hidden="true">
              <rect x="2" y="2" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M10 34V20l14-9 14 9v14" fill="none" stroke="currentColor" strokeWidth="2.5" />
            </svg>
            <span className="font-display text-[1.18rem] font-semibold">
              Lorenzo<em className="not-italic text-brass font-medium">Homes</em>
            </span>
          </a>
          <p className="text-[0.88rem] max-w-[280px] text-white/55 m-0">
            Building value across Nigerian real estate for over 25 years.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-[0.9rem]">
          <strong className="text-white text-[0.8rem] tracking-[0.08em] uppercase mb-[6px]">Explore</strong>
          {["About","Services","Projects","Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-brass-light transition-colors">{l}</a>
          ))}
        </div>
        <div className="flex flex-col gap-3 text-[0.9rem]">
          <strong className="text-white text-[0.8rem] tracking-[0.08em] uppercase mb-[6px]">Office</strong>
          <span>Suite 001, Jomayo Mall</span>
          <span>4/5 T.F. Kunboye Street</span>
          <span>Lekki Phase 1, Lagos, Nigeria</span>
        </div>
      </div>
      <div className="wrap flex justify-between flex-wrap gap-[10px] text-[0.8rem] text-white/45 pt-6">
        <span>© {year} Lorenzo Homes. All rights reserved.</span>
        <span>Integrity · Excellence · Client Satisfaction</span>
      </div>
    </footer>
  );
}
