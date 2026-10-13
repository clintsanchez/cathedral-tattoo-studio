"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

// Shared by the second round of directions (D, E, F), which are built after the Figma templates.
export const EASE = [0.16, 1, 0.3, 1] as const;

// Fade and rise as it enters the screen. y only: an x offset causes sideways scroll on phones.
export function Rise({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 1.1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M6 18L18 6M8 6h10v10" />
    </svg>
  );
}

// The template navigation: a small mark, a few spaced capitals, the phone. Lies over the hero.
export function Nav({ base, className = "" }: { base: string; className?: string }) {
  const links = [
    { href: `${base}/#work`, label: "The work" },
    { href: `${base}/artists/roger-cazares/`, label: "Artists" },
    { href: `${base}/#how`, label: "How it works" },
    { href: `${base}/#visit`, label: "Visit" },
  ];
  return (
    <header className={`absolute inset-x-0 top-0 z-30 ${className}`}>
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center gap-6 px-5 md:px-10">
        <Link href={`${base}/`} aria-label={`${site.name}, home`} className="shrink-0">
          <Image src="/brand/cathedral-tattoo-studio-cross-mark.png" alt="" width={36} height={36} className="h-9 w-9" />
        </Link>
        <nav aria-label="Main" className="ml-auto hidden md:block">
          <ul className="flex gap-9">
            {links.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="r2-caps inline-flex min-h-[44px] items-center text-white/75 transition-colors duration-200 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a href={site.tel} className="r2-caps ml-auto inline-flex min-h-[44px] items-center text-white md:ml-6">
          {site.phone}
        </a>
      </div>
    </header>
  );
}
