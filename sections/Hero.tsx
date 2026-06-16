export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden text-white"
      id="home"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#1C1814]">
        {/*
          When you have real images, replace this block with:
          <Image src="/assets/orchid-road-render.jpg" alt="Orchid Road render" fill priority
            style={{ objectFit:"cover", objectPosition:"center 65%" }} />
        */}
        <div
          className="w-full h-full bg-linear-to-br from-[#2a1f12] via-[#1C1814] to-[#3d2f1e] flex items-center justify-center"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 600 400"
            className="w-full h-full opacity-[0.18]"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 0H60V60"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.6"
                  opacity="0.4"
                />
              </pattern>
            </defs>
            <rect width="600" height="400" fill="url(#grid)" />
            <path
              d="M120 340V200l180-120 180 120v140"
              fill="none"
              stroke="#B8842F"
              strokeWidth="3"
              opacity=".35"
            />
            <path
              d="M200 340V260h100v80"
              fill="none"
              stroke="#B8842F"
              strokeWidth="2"
              opacity=".3"
            />
            <line
              x1="300"
              y1="80"
              x2="300"
              y2="340"
              stroke="#B8842F"
              strokeWidth="1.5"
              opacity=".2"
            />
          </svg>
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,rgba(20,17,13,0.72) 0%,rgba(20,17,13,0.45) 45%,rgba(20,17,13,0.85) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="wrap relative z-1 pt-22.5 container">
        <p className="eyebrow eyebrow-light">
          <span className="eyebrow-line" />
          25 Years in Real Estate
        </p>
        <h1 className="text-[clamp(2.4rem,5.4vw,4.4rem)] text-white mb-[0.55em]">
          We build value.
          <br />
          Brick by brick, <span className="ital">deal by deal.</span>
        </h1>
        <p className="text-[1.08rem] max-w-130 text-white/86 mb-8">
          Lorenzo Homes is a real estate development and investment company
          delivering commercial, industrial and residential projects across
          Nigeria — from groundbreaking to handover.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="#projects" className="btn btn-solid">
            View Our Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Talk To Us
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#stats"
        aria-label="Scroll to content"
        className="absolute bottom-8.5 left-1/2 -translate-x-1/2 z-1 w-6.5 h-10.5 border-[1.5px] border-white/60 rounded-[14px] block"
      >
        <span
          className="absolute left-1/2 -translate-x-1/2 w-1 h-2 bg-white rounded-xs animate-cueMove"
          style={{ top: "7px" }}
        />
      </a>
    </section>
  );
}
