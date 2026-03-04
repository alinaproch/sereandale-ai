"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    value: "120K",
    suffix: " TPS",
    label: "Transaction Speed",
    sub: "Fastest blockchain in production",
  },
  {
    value: "$2.4B",
    suffix: "+",
    label: "Total Value Locked",
    sub: "USD secured on-chain",
  },
  {
    value: "99.9",
    suffix: "%",
    label: "Network Uptime",
    sub: "Zero scheduled downtime",
  },
  {
    value: "1.2M",
    suffix: "+",
    label: "Active Wallets",
    sub: "Global user base growing",
  },
];

function useVisible(ref: React.RefObject<Element>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null!);
  const visible = useVisible(ref);

  return (
    <section id="stats" ref={ref} className="py-20 relative">
      {/* Top separator */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(155,89,255,0.4), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="relative rounded-2xl p-6 sm:p-7 glow-border glow-border-hover glass text-center group overflow-hidden"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.55s ease ${i * 0.1}s, transform 0.55s ease ${i * 0.1}s`,
              }}
            >
              <div className="font-display font-black text-3xl sm:text-4xl text-gradient">
                {s.value}
                <span className="text-2xl sm:text-3xl">{s.suffix}</span>
              </div>
              <div className="mt-2 text-sm font-semibold text-white/80 font-body">
                {s.label}
              </div>
              <div className="mt-1 text-xs text-white/38 font-body">
                {s.sub}
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(155,89,255,0.07) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
