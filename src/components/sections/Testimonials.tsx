"use client";

import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  initials: string;
  color: string;
  rating: number;
  review: string;
  date: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Chen",
    role: "CTO at NexaFinance",
    initials: "SC",
    color: "#9b59ff",
    rating: 5,
    review:
      "Serendale AI transformed our DeFi infrastructure. The 120K TPS throughput means traders never experience latency even during peak hours. Switching from Ethereum L2 saved us $600K in annual gas fees.",
    date: "2024-11-15",
  },
  {
    id: "t2",
    name: "Marcus Webb",
    role: "Blockchain Architect at DecentraCloud",
    initials: "MW",
    color: "#e040fb",
    rating: 5,
    review:
      "The AI anomaly detection caught a re-entrancy attack on our smart contract within 38ms — before a single dollar was lost. I've never seen anything like it. This is the future of secure DeFi.",
    date: "2024-10-22",
  },
  {
    id: "t3",
    name: "Priya Mehta",
    role: "Lead Developer at OpenLedger DAO",
    initials: "PM",
    color: "#4f8ef7",
    rating: 5,
    review:
      "Migrating our Solidity contracts was a one-command operation — full EVM compatibility with zero code changes. The on-chain analytics replaced three separate tools we were paying for.",
    date: "2024-09-08",
  },
  {
    id: "t4",
    name: "Alex Romanov",
    role: "Founder at Tokenwave",
    initials: "AR",
    color: "#34d399",
    rating: 5,
    review:
      "We launched our NFT marketplace on Serendale and minting costs dropped from $45 to under $0.01. Our community grew 10× in two months. The PoS staking rewards are genuinely profitable.",
    date: "2024-12-01",
  },
  {
    id: "t5",
    name: "Diana Osei",
    role: "Head of Web3 at PulseVentures",
    initials: "DO",
    color: "#f59e0b",
    rating: 5,
    review:
      "Serendale's ZK privacy layer is exactly what institutional investors need. Our clients verify position authenticity without revealing portfolio data. A breakthrough we've waited years for.",
    date: "2024-11-30",
  },
  {
    id: "t6",
    name: "Leo Tanaka",
    role: "Smart Contract Engineer at ZeroX Labs",
    initials: "LT",
    color: "#ec4899",
    rating: 5,
    review:
      "Developer experience is outstanding. Docs are clear, the TypeScript SDK is solid, and the testnet faucet is generous. Deployed my first dApp in 4 hours — including writing the contract from scratch.",
    date: "2024-10-05",
  },
];

/* ── JSON-LD schema.org/Review ── */
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Serendale AI Blockchain Platform",
  description:
    "AI-powered blockchain platform delivering 120K TPS with Proof of Stake consensus and AI-based data security.",
  brand: { "@type": "Brand", name: "Serendale AI" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: String(TESTIMONIALS.length),
    bestRating: "5",
    worstRating: "1",
  },
  review: TESTIMONIALS.map((t) => ({
    "@type": "Review",
    "@id": `#${t.id}`,
    author: { "@type": "Person", name: t.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(t.rating),
      bestRating: "5",
    },
    reviewBody: t.review,
    datePublished: t.date,
  })),
};

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

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null!);
  const visible = useVisible(ref);
  const [current, setCurrent] = useState(0);

  const MAX = TESTIMONIALS.length - 3; // 3 cards visible at once on desktop
  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(MAX, c + 1));

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      {/* Ambient */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(224,64,251,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* ── Header ── */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.55s ease, transform 0.55s ease",
          }}
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-purple mb-4 font-body">
              Testimonials
            </p>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight">
              <span className="text-gradient">Trusted</span>
              <br />
              <span className="text-white/85">by builders worldwide</span>
            </h2>
          </div>
          {/* Arrows */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous reviews"
              className="w-11 h-11 rounded-full glow-border flex items-center justify-center text-white/50 hover:text-white hover:border-brand-purple/55 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              disabled={current >= MAX}
              aria-label="Next reviews"
              className="w-11 h-11 rounded-full glow-border flex items-center justify-center text-white/50 hover:text-white hover:border-brand-purple/55 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ── Desktop slider ── */}
        <div className="hidden lg:block overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(-${current} * (100% / 3 + 6.67px)))`,
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <ReviewCard key={t.id} t={t} i={i} visible={visible} />
            ))}
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-7">
            {Array.from({ length: MAX + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-brand-purple" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Mobile/tablet grid ── */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <ReviewCard key={t.id} t={t} i={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  t,
  i,
  visible,
}: {
  t: Testimonial;
  i: number;
  visible: boolean;
}) {
  return (
    <article
      itemScope
      itemType="https://schema.org/Review"
      className="shrink-0 lg:w-[calc(33.333%-13.333px)] rounded-2xl p-7 glow-border glow-border-hover glass flex flex-col gap-5"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s ease ${0.1 + i * 0.07}s, transform 0.55s ease ${0.1 + i * 0.07}s`,
      }}
    >
      {/* Stars */}
      <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
        {Array.from({ length: t.rating }).map((_, j) => (
          <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Review text */}
      <blockquote
        itemProp="reviewBody"
        className="text-sm text-white/55 leading-relaxed font-body flex-1"
      >
        &ldquo;{t.review}&rdquo;
      </blockquote>

      {/* Author */}
      <div
        className="flex items-center gap-3"
        itemProp="author"
        itemScope
        itemType="https://schema.org/Person"
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-xs font-display font-black text-white"
          style={{
            background: `${t.color}28`,
            border: `1px solid ${t.color}45`,
          }}
          aria-hidden="true"
        >
          {t.initials}
        </div>
        <div>
          <div
            className="text-sm font-semibold text-white font-body"
            itemProp="name"
          >
            {t.name}
          </div>
          <div className="text-xs text-white/38 font-body">{t.role}</div>
        </div>
      </div>

      <meta itemProp="datePublished" content={t.date} />
    </article>
  );
}
