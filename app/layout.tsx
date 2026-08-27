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
  title: "Christian Charles Olsen | Financial Advisor and Broker",
  description:
    "Clear, disciplined financial guidance for individuals, families and business owners seeking to build, manage and preserve wealth with confidence across every stage of life.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Christian Charles Olsen | Financial Advisor and Broker",
    description:
      "Clear, disciplined financial guidance designed to help individuals, families and business owners build, manage and preserve wealth with confidence.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Charles Olsen | Financial Advisor and Broker",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${serif.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
