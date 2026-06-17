"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { target: 25, suffix: "+", label: "Years of Operation" },
  { target: 16, suffix: "", label: "Completed Developments" },
  { target: 3, suffix: "", label: "Asset Classes" },
  { target: 1, suffix: "", label: "Landmark Project Underway" },
];

function AnimatedNum({
  target,
  suffix,
  triggered,
}: {
  target: number;
  suffix: string;
  triggered: boolean;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    const dur = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      setCount(Math.round((1 - Math.pow(1 - t, 3)) * target));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [triggered, target]);

  return (
    <span className="font-display text-[clamp(5.1rem,3.5vw,2.8rem)] font-semibold text-brass-light">
      {count}
      {suffix && <span className="text-[1.4rem]">{suffix}</span>}
    </span>
  );
}

export default function Stats() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTriggered(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="stats" className="bg-ink text-white ">
      <div className="wrap grid grid-cols-4 gap-3 max-md:gap-0 w-full max-w-7xl max-sm:grid-cols-2 max-[420px]:grid-cols-1">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="flex flex-col gap-1.5  border-r-[0.2px] border-r-white/20 border-t-white/20  last:border-r-0 max-md:nth-[2]:border-r-0 max-md:nth-[3]:border-t max-md:nth-[4]:border-t py-11.5 min-w-35 px-3 max-sm:min-w-[45%] max-[420px]:min-w-full"
          >
            <AnimatedNum
              target={s.target}
              suffix={s.suffix}
              triggered={triggered}
            />
            <span className="text-[0.85rem] tracking-[0.04em] text-white/70">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
