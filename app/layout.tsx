import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--serif",
});
const sans = Manrope({ subsets: ["latin"], variable: "--sans" });
export const metadata: Metadata = {
  title: "Christian Charles Olsen | Independent Financial Adviser",
  description:
    "Thoughtful financial advice shaped around your life, priorities and long-term ambitions.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Christian Charles Olsen",
    description: "Invest with greater clarity.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${serif.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
