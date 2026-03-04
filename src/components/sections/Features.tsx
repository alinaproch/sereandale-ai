"use client";

import { useEffect, useRef, useState } from "react";
import {
  Zap,
  Shield,
  Globe,
  Cpu,
  Lock,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  Icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bg: string;
}

const FEATURES: Feature[] = [
  {
    Icon: Zap,
    title: "Lightning-Fast TPS",
    description:
      "Process up to 120,000 transactions per second — 4,000× faster than Ethereum. No bottlenecks, no congestion, ever.",
    color: "#e040fb",
    bg: "rgba(224,64,251,0.08)",
  },
  {
    Icon: Shield,
    title: "AI-Based Security",
    description:
      "Every transaction is monitored by our proprietary AI engine that detects anomalies and halts malicious activity in under 40ms.",
    color: "#9b59ff",
    bg: "rgba(155,89,255,0.08)",
  },
  {
    Icon: Globe,
    title: "Proof of Stake",
    description:
      "Our PoS consensus eliminates energy waste by 99.9% versus PoW. Validators earn native rewards for securing the network.",
    color: "#4f8ef7",
    bg: "rgba(79,142,247,0.08)",
  },
  {
    Icon: Cpu,
    title: "Smart Contract Engine",
    description:
      "Deploy Solidity-compatible contracts with zero migration effort. Our EVM-compatible runtime guarantees sub-cent gas fees.",
    color: "#34d399",
    bg: "rgba(52,211,153,0.08)",
  },
  {
    Icon: Lock,
    title: "Zero-Knowledge Privacy",
    description:
      "Optional ZK-proof layer validates transactions without revealing any sensitive information to third parties.",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
  },
  {
    Icon: BarChart3,
    title: "On-Chain Analytics",
    description:
      "Built-in analytics gives every developer real-time on-chain insights — no third-party indexers or extra costs required.",
    color: "#e040fb",
    bg: "rgba(224,64,251,0.08)",
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
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

export default function Features() {
  const ref = useRef<HTMLDivElement>(null!);
  const visible = useVisible(ref);

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section heading */}
        <div
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.55s ease, transform 0.55s ease",
          }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-purple mb-4 font-body">
            Why Serendale AI
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            <span className="text-gradient">Advantages</span>
            <br />
            <span className="text-white/85">built to last</span>
          </h2>
          <p className="mt-5 text-white/42 max-w-xl mx-auto font-body text-base leading-relaxed">
            Every feature is engineered to give builders an unfair advantage in
            the decentralized economy.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ Icon, title, description, color, bg }, i) => (
            <article
              key={title}
              className="relative rounded-2xl p-7 glow-border glow-border-hover glass group overflow-hidden"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.55s ease ${0.1 + i * 0.08}s, transform 0.55s ease ${0.1 + i * 0.08}s`,
              }}
            >
              {/* Icon box */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: bg,
                  border: `1px solid ${color}28`,
                }}
              >
                <Icon size={22} style={{ color }} />
              </div>

              <h3 className="font-display font-bold text-lg text-white mb-3">
                {title}
              </h3>
              <p className="text-sm text-white/48 leading-relaxed font-body">
                {description}
              </p>

              {/* Corner hover glow */}
              <div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${color}28 0%, transparent 70%)`,
                  filter: "blur(10px)",
                }}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
