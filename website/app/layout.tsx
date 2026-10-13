import type { Metadata, Viewport } from "next";
import { Cinzel, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const heading = Cinzel({ subsets: ["latin"], weight: ["600"], variable: "--font-heading" });
const body = Source_Sans_3({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-body" });

export const metadata: Metadata = {
  title: { default: "Cathedral Tattoo Studio: design directions", template: "%s · Cathedral Tattoo Studio" },
  description: "Three design directions for the Cathedral Tattoo Studio site. Preview only.",
  // Preview of unapproved drafts: closed to search engines.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#0A0A0A" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
