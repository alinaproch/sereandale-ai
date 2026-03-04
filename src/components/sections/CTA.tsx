"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Rocket } from "lucide-react";

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

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null!);
  const visible = useVisible(ref);

  return (
    <section id="cta" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div
          className="relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center glow-border"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.14) 0%, rgba(224,64,251,0.07) 50%, rgba(79,142,247,0.09) 100%)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.65s ease, transform 0.65s ease",
          }}
        >
          {/* Inner glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 55% 45% at 50% 0%, rgba(155,89,255,0.18) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glow-border text-xs font-semibold text-white/60 mb-8 font-body tracking-widest uppercase">
              <Rocket
                size={11}
                className="text-brand-purple"
                aria-hidden="true"
              />
              Early access open
            </div>

            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              <span className="text-gradient">Start building</span>
              <br />
              <span className="text-white/85">on Serendale today</span>
            </h2>

            <p className="text-white/45 max-w-xl mx-auto font-body text-base mb-10 leading-relaxed">
              Join 1.2M+ developers and validators already powering the next
              generation of decentralized applications on the world&apos;s
              fastest AI-secured blockchain.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="btn-primary w-full sm:w-auto justify-center"
              >
                Get started free <ArrowRight size={15} />
              </a>
              <a
                href="#"
                className="btn-outline w-full sm:w-auto justify-center"
              >
                Read the whitepaper
              </a>
            </div>

            {/* Trust pills */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              {[
                "No credit card required",
                "Mainnet in 5 minutes",
                "99.9% uptime SLA",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-xs text-white/38 font-body"
                >
                  <span
                    className="w-1 h-1 rounded-full bg-brand-purple"
                    aria-hidden="true"
                  />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
