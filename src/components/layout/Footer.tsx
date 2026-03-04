"use client";

const LINKS: Record<string, { label: string; href: string }[]> = {
  Product: [
    { label: "Smart Contracts", href: "#features" },
    { label: "AI Security",     href: "#features" },
    { label: "PoS Validator",   href: "#features" },
    { label: "ZK Privacy",      href: "#features" },
    { label: "Analytics",       href: "#features" },
  ],
  Developers: [
    { label: "Documentation",  href: "#" },
    { label: "SDK / API",      href: "#" },
    { label: "GitHub",         href: "#" },
    { label: "Testnet Faucet", href: "#" },
    { label: "Status Page",    href: "#" },
  ],
  Company: [
    { label: "About",      href: "#" },
    { label: "Blog",       href: "#" },
    { label: "Whitepaper", href: "#" },
    { label: "Roadmap",    href: "#cta" },
    { label: "Careers",    href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy",   href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy",    href: "#" },
  ],
};

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 00-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 00-5.487 0 12.36 12.36 0 00-.617-1.23A.077.077 0 008.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 00-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 00.031.055 20.03 20.03 0 005.993 2.98.078.078 0 00.084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 01-1.872-.878.075.075 0 01-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 01.078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 01.079.009c.12.098.245.195.372.288a.075.075 0 01-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 00-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 00.084.028 19.963 19.963 0 006.002-2.981.076.076 0 00.032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 00-.031-.028z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIAL = [
  { name: "GitHub",  href: "#", Icon: GithubIcon  },
  { name: "Discord", href: "#", Icon: DiscordIcon },
  { name: "Twitter", href: "#", Icon: TwitterIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(155,89,255,0.45), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">

          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center">
                <span className="font-display font-black text-sm text-white">S</span>
              </div>
              <span className="font-display font-bold text-lg tracking-tight">
                Serendale
                <span className="text-gradient">.ai</span>
              </span>
            </a>
            <p className="text-sm text-white/40 leading-relaxed font-body max-w-[190px]">
              The AI-powered blockchain built for the next billion users.
            </p>
            <div className="flex gap-3 mt-6">
              {SOCIAL.map(function(item) {
                const Icon = item.Icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-label={item.name}
                    className="w-8 h-8 rounded-lg glow-border flex items-center justify-center text-white/40 hover:text-white transition-all"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(LINKS).map(function(entry) {
            const category = entry[0];
            const links = entry[1];
            return (
              <nav key={category} aria-label={category + " links"}>
                <h3 className="font-display font-bold text-xs tracking-[0.2em] uppercase text-white/30 mb-5">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map(function(link) {
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm text-white/50 hover:text-white transition-colors font-body"
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            );
          })}

        </div>

        <div className="py-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25 font-body">
            &copy; {year} Serendale AI. All rights reserved.
          </p>
          <address className="not-italic text-xs text-white/25 font-body">
            contact@serendale.ai
          </address>
        </div>

      </div>
    </footer>
  );
}