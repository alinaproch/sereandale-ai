"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      if (orb1.current)
        orb1.current.style.transform = `translate(${x * 28}px, ${y * 18}px)`;
      if (orb2.current)
        orb2.current.style.transform = `translate(${-x * 18}px, ${-y * 26}px)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-0"
      aria-label="Hero"
    >
      {/* ── Background glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -5%, rgba(124,58,237,0.22) 0%, transparent 70%)",
        }}
      />

      {/* ── Parallax orbs ── */}
      <div
        ref={orb1}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(155,89,255,0.16) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        ref={orb2}
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(224,64,251,0.14) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── Floating particles ── */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {(
          [
            {
              top: "18%",
              left: "10%",
              size: 10,
              delay: "0s",
              color: "#e040fb",
            },
            {
              top: "55%",
              left: "5%",
              size: 6,
              delay: "1.5s",
              color: "#9b59ff",
            },
            {
              top: "28%",
              right: "8%",
              size: 13,
              delay: "0.8s",
              color: "#4f8ef7",
            },
            {
              top: "62%",
              right: "11%",
              size: 8,
              delay: "2s",
              color: "#9b59ff",
            },
            {
              top: "78%",
              left: "22%",
              size: 5,
              delay: "1.2s",
              color: "#e040fb",
            },
          ] as Array<{
            top: string;
            left?: string;
            right?: string;
            size: number;
            delay: string;
            color: string;
          }>
        ).map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              top: p.top,
              left: p.left,
              right: p.right,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              animationDelay: p.delay,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
              opacity: 0.85,
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glow-border text-xs font-semibold text-white/65 mb-8 font-body tracking-widest uppercase">
          <span
            className="w-1.5 h-1.5 rounded-full bg-brand-pink"
            style={{ animation: "float 2s ease-in-out infinite" }}
          />
          AI-Powered Blockchain — 120K TPS
        </div>

        {/* Headline */}
        <h1 className="font-display font-extrabold leading-none mb-2">
          <span className="block text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] text-gradient uppercase tracking-tight">
            The Best
          </span>
          <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white/88 uppercase tracking-tight mt-1">
            Blockchain Ever.
          </span>
          <span className="block text-3xl sm:text-5xl lg:text-6xl text-white/55 font-semibold mt-2">
            Scalable.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-7 text-base sm:text-lg text-white/48 max-w-2xl mx-auto leading-relaxed font-body">
          Our technology performing fast blockchain{" "}
          <span className="text-white/78 font-semibold">(120K TPS)</span> and it
          has guaranteed AI-based data security. Proof of Stake, its consensus
          algorithm enables unlimited speeds.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#features"
            className="btn-primary w-full sm:w-auto justify-center"
          >
            Get started <ArrowRight size={15} />
          </a>
          <button
            type="button"
            className="btn-outline w-full sm:w-auto justify-center"
          >
            <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Play size={10} fill="white" />
            </span>
            Read more
          </button>
        </div>
      </div>

      {/* ── Robot SVG illustration ── */}
      <div
        className="relative z-10 w-full max-w-4xl mx-auto mt-12 px-4"
        aria-hidden="true"
      >
        <HeroIllustration />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Pure SVG robot scene — no external images needed
───────────────────────────────────────────────────────── */
function HeroIllustration() {
  return (
    <div className="relative w-full" style={{ paddingBottom: "50%" }}>
      {/* Ground glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(155,89,255,0.38) 0%, transparent 70%)",
          filter: "blur(18px)",
        }}
      />

      <svg
        viewBox="0 0 900 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <radialGradient id="rBodyGrad" cx="50%" cy="38%" r="55%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="60%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#4f46e5" />
          </radialGradient>
          <radialGradient id="rEyeBlue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
          </radialGradient>
          <radialGradient id="rEyePink" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f9a8d4" stopOpacity="1" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
          </radialGradient>
          <linearGradient id="rArmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
          <linearGradient id="rLoopGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="35%" stopColor="#a78bfa" />
            <stop offset="65%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
          <filter id="rGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="rGlowStrong">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Platform ── */}
        <ellipse
          cx="450"
          cy="432"
          rx="370"
          ry="22"
          fill="#1e1b4b"
          opacity="0.55"
        />
        <ellipse
          cx="450"
          cy="430"
          rx="348"
          ry="16"
          fill="#110e2b"
          opacity="0.8"
        />
        {[-3, -2, -1, 0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1={450 + i * 52}
            y1="418"
            x2={450 + i * 38}
            y2="442"
            stroke="#9b59ff"
            strokeWidth="0.5"
            opacity="0.25"
          />
        ))}

        {/* ── Infinity loop ── */}
        <g style={{ animation: "float 7s ease-in-out infinite" }}>
          <path
            d="M275 285 C275 245,325 215,375 245 C415 270,438 308,450 308
               C462 308,485 270,525 245 C575 215,625 245,625 285
               C625 325,575 355,525 325 C485 300,462 262,450 262
               C438 262,415 300,375 325 C325 355,275 325,275 285 Z"
            stroke="url(#rLoopGrad)"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
            filter="url(#rGlow)"
            opacity="0.92"
          />
          <path
            d="M275 285 C275 245,325 215,375 245 C415 270,438 308,450 308
               C462 308,485 270,525 245 C575 215,625 245,625 285
               C625 325,575 355,525 325 C485 300,462 262,450 262
               C438 262,415 300,375 325 C325 355,275 325,275 285 Z"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* ── Left robot ── */}
        <g style={{ animation: "float 6s ease-in-out 0.4s infinite" }}>
          <ellipse
            cx="208"
            cy="428"
            rx="52"
            ry="11"
            fill="#1e1b4b"
            opacity="0.65"
          />
          {/* body */}
          <rect
            x="182"
            y="358"
            width="52"
            height="66"
            rx="11"
            fill="url(#rBodyGrad)"
          />
          <rect
            x="185"
            y="361"
            width="46"
            height="60"
            rx="9"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          />
          {/* head */}
          <rect
            x="184"
            y="318"
            width="48"
            height="42"
            rx="13"
            fill="url(#rBodyGrad)"
          />
          {/* eyes */}
          {([198, 218] as number[]).map((cx) => (
            <g key={cx}>
              <circle cx={cx} cy={339} r="8.5" fill="#12103a" />
              <circle
                cx={cx}
                cy={339}
                r="5.5"
                fill="url(#rEyeBlue)"
                filter="url(#rGlow)"
              />
              <circle
                cx={cx}
                cy={339}
                r="8"
                fill="none"
                stroke="#818cf8"
                strokeWidth="0.8"
                strokeDasharray="3 2"
                opacity="0.55"
              />
            </g>
          ))}
          {/* left arm */}
          <path
            d="M182 372 C158 366,126 336,96 294 C82 274,74 264,80 250
                   C86 238,108 237,122 252"
            stroke="url(#rArmGrad)"
            strokeWidth="15"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="120" cy="248" r="15" fill="url(#rBodyGrad)" />
          <path
            d="M111 239 L121 234 L130 244"
            stroke="rgba(255,255,255,0.38)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* chest lines */}
          <rect
            x="196"
            y="373"
            width="24"
            height="3"
            rx="1.5"
            fill="rgba(255,255,255,0.18)"
          />
          <rect
            x="199"
            y="380"
            width="18"
            height="3"
            rx="1.5"
            fill="rgba(255,255,255,0.12)"
          />
        </g>

        {/* ── Right robot ── */}
        <g style={{ animation: "float 6s ease-in-out 1s infinite" }}>
          <ellipse
            cx="692"
            cy="428"
            rx="52"
            ry="11"
            fill="#1e1b4b"
            opacity="0.65"
          />
          <rect
            x="666"
            y="358"
            width="52"
            height="66"
            rx="11"
            fill="url(#rBodyGrad)"
          />
          <rect
            x="669"
            y="361"
            width="46"
            height="60"
            rx="9"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          />
          <rect
            x="668"
            y="318"
            width="48"
            height="42"
            rx="13"
            fill="url(#rBodyGrad)"
          />
          {([682, 702] as number[]).map((cx) => (
            <g key={cx}>
              <circle cx={cx} cy={339} r="8.5" fill="#12103a" />
              <circle
                cx={cx}
                cy={339}
                r="5.5"
                fill="url(#rEyeBlue)"
                filter="url(#rGlow)"
              />
              <circle
                cx={cx}
                cy={339}
                r="8"
                fill="none"
                stroke="#818cf8"
                strokeWidth="0.8"
                strokeDasharray="3 2"
                opacity="0.55"
              />
            </g>
          ))}
          {/* right arm */}
          <path
            d="M718 372 C742 366,774 336,804 294 C818 274,826 264,820 250
                   C814 238,792 237,778 252"
            stroke="url(#rArmGrad)"
            strokeWidth="15"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="780" cy="248" r="15" fill="url(#rBodyGrad)" />
          <path
            d="M771 239 L781 234 L790 244"
            stroke="rgba(255,255,255,0.38)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* pink glow dot */}
          <circle
            cx="804"
            cy="305"
            r="9"
            fill="url(#rEyePink)"
            filter="url(#rGlowStrong)"
          />
          <rect
            x="680"
            y="373"
            width="24"
            height="3"
            rx="1.5"
            fill="rgba(255,255,255,0.18)"
          />
          <rect
            x="683"
            y="380"
            width="18"
            height="3"
            rx="1.5"
            fill="rgba(255,255,255,0.12)"
          />
        </g>

        {/* ── Mini center orb ── */}
        <g style={{ animation: "float 6s ease-in-out 2s infinite" }}>
          <circle cx="450" cy="375" r="26" fill="url(#rBodyGrad)" />
          <circle
            cx="450"
            cy="375"
            r="25.5"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          />
          {([438, 462] as number[]).map((cx) => (
            <g key={cx}>
              <circle cx={cx} cy={372} r="6.5" fill="#12103a" />
              <circle
                cx={cx}
                cy={372}
                r="4"
                fill="url(#rEyeBlue)"
                filter="url(#rGlow)"
              />
            </g>
          ))}
        </g>

        {/* ── Decorative dots ── */}
        <circle
          cx="158"
          cy="290"
          r="5"
          fill="#e040fb"
          opacity="0.8"
          filter="url(#rGlow)"
          style={{ animation: "float 5s ease-in-out 0.4s infinite" }}
        />
        <circle
          cx="742"
          cy="265"
          r="7"
          fill="#60a5fa"
          opacity="0.9"
          filter="url(#rGlow)"
          style={{ animation: "float 7s ease-in-out 1.4s infinite" }}
        />
        <circle
          cx="375"
          cy="195"
          r="4"
          fill="#9b59ff"
          opacity="0.7"
          style={{ animation: "float 6s ease-in-out 3s  infinite" }}
        />
        <circle
          cx="525"
          cy="190"
          r="3"
          fill="#e040fb"
          opacity="0.6"
          style={{ animation: "float 5s ease-in-out 1s  infinite" }}
        />
        <circle
          cx="820"
          cy="375"
          r="10"
          fill="#60a5fa"
          opacity="0.7"
          filter="url(#rGlow)"
          style={{ animation: "float 7s ease-in-out 0.7s infinite" }}
        />
        <circle
          cx="96"
          cy="375"
          r="6"
          fill="#9b59ff"
          opacity="0.5"
          style={{ animation: "float 8s ease-in-out 2s  infinite" }}
        />
      </svg>
    </div>
  );
}
