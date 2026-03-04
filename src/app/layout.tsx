import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Serendale AI — Next-Gen AI-Powered Blockchain Platform",
  description:
    "Serendale AI delivers blazing-fast blockchain performance at 120K TPS with AI-based data security and Proof of Stake consensus. Build the future of decentralized finance.",
  keywords: [
    "blockchain",
    "AI",
    "DeFi",
    "smart contracts",
    "120K TPS",
    "Serendale AI",
  ],
  authors: [{ name: "Serendale AI" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://serendale.ai",
    title: "Serendale AI — Next-Gen AI-Powered Blockchain Platform",
    description:
      "Blazing-fast blockchain at 120K TPS with AI-based data security and Proof of Stake consensus.",
    siteName: "Serendale AI",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Serendale AI" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serendale AI — Next-Gen AI-Powered Blockchain Platform",
    description:
      "Blazing-fast blockchain at 120K TPS with AI-based data security.",
    images: ["/og-image.png"],
    creator: "@serendaleai",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable}`}>
      <body className="bg-brand-dark text-white antialiased font-body">
        {children}
      </body>
    </html>
  );
}
