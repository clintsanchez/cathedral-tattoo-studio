"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { home, labels, photos, site } from "@/lib/site";
import { Arrow, EASE } from "@/components/r2/Bits";

const [w1, w2, w3] = home.headline.split(" ");
const RING = `${home.headline} · ${site.name} · Denham Springs · `.toUpperCase().repeat(2);

// After Silent Shogun: a lone figure in a field in front of a sun, with the headline set very large
// on either side of it and a ring of small letters round the sun. The picture is an illustration made
// for this page: a knight for a studio called Cathedral, in place of the template's samurai.
export function Hero() {
  const reduce = useReducedMotion();
  const from = (y: number) => (reduce ? false : { opacity: 0, y });

  return (
    <section className="relative overflow-hidden bg-black md:min-h-[calc(100svh-46px)]">
      {/* phones: the two big words first, then the picture */}
      <p className="h-display px-5 pt-[108px] text-[16.5vw] text-text md:hidden" aria-hidden>
        {w1}
        <br />
        {w2}
      </p>
      <div className="relative mt-2 h-[92vw] overflow-hidden md:hidden" aria-hidden>
        <Image src="/gen/knight-and-gold-sun.webp" alt="" fill priority sizes="170vw" className="object-cover" />
      </div>

      <div className="h-stage hidden md:block" style={{ containerType: "inline-size" }} aria-hidden>
        <motion.div initial={reduce ? false : { opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2.2, ease: EASE }} className="absolute inset-0">
          <Image src="/gen/knight-and-gold-sun.webp" alt="" fill priority sizes="max(100vw, 178svh)" className="object-cover" />
        </motion.div>
        <svg viewBox="0 0 400 400" className="h-ring" style={reduce ? undefined : { animation: "h-turn 90s linear infinite" }}>
          <defs>
            <path id="h-ring-path" d="M200 200m-190 0a190 190 0 1 1 380 0a190 190 0 1 1-380 0" />
          </defs>
          <text fill="rgba(232,228,220,0.38)" fontSize="9.5" letterSpacing="3.4" fontWeight="600">
            <textPath href="#h-ring-path">{RING}</textPath>
          </text>
        </svg>
        <motion.span initial={from(40)} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.5, ease: EASE }} className="h-display h-word right-[73.5%] text-right">
          {w1}
        </motion.span>
        <motion.span initial={from(40)} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.65, ease: EASE }} className="h-display h-word left-[73.5%]">
          {w2}
        </motion.span>
      </div>

      <h1 className="sr-only">{home.headline}</h1>

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col px-5 pb-28 md:min-h-[calc(100svh-46px)] md:justify-end md:px-10 md:pb-9 lg:px-[72px]">
        <motion.p initial={from(24)} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.3, delay: 0.9, ease: EASE }} className="h-display mt-6 text-[11.6vw] text-text md:absolute md:inset-x-0 md:bottom-[21svh] md:mt-0 md:text-center md:text-[3.3vw] md:tracking-[0.5em]" aria-hidden>
          {w3}
        </motion.p>
        <div className="mt-8 grid gap-8 md:mt-0 md:grid-cols-[1fr_auto_1fr] md:items-end">
          <motion.div initial={from(30)} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.3, delay: 1.1, ease: EASE }}>
            <Link href="#work" className="h-card block w-[230px] p-3 pb-5">
              <span className="relative block aspect-square overflow-hidden rounded-[14px]">
                <Image src={photos.sword.src} alt={photos.sword.alt} fill sizes="210px" className="object-cover" />
              </span>
              <span className="h-serif mt-4 block max-w-[150px] text-[1.0625rem] uppercase">The work</span>
            </Link>
          </motion.div>
          <motion.div initial={from(30)} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.3, delay: 1.25, ease: EASE }} className="flex">
            <Link href="#work" className="h-serif inline-flex min-h-[64px] items-center rounded-l-[16px] bg-[#f1eee7] px-8 text-[1.0625rem] uppercase text-black">
              {labels.work}
            </Link>
            <Link href="#work" aria-hidden tabIndex={-1} className="inline-flex min-h-[64px] w-[64px] items-center justify-center rounded-r-[16px] bg-gold text-2xl text-black transition-colors duration-200 hover:bg-bright">
              <Arrow className="rotate-45" />
            </Link>
          </motion.div>
          <motion.div initial={from(30)} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.3, delay: 1.4, ease: EASE }} className="md:justify-self-end">
            <p className="h-serif text-[1.25rem] uppercase text-text">{site.name}</p>
            <p className="mt-3 max-w-[290px] text-[0.9375rem] leading-relaxed text-white/75">{home.descriptor}</p>
            <p className="mt-3 text-xs text-white/50">{site.rating}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
