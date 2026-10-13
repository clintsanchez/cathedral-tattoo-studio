"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { groups, home, labels, photos, site } from "@/lib/site";
import { EASE } from "@/components/r2/Bits";

const [w1, w2, w3] = home.headline.split(" ");

// Three true numbers for the corner tiles. Each is on the Google profile as of 11 October 2026.
const tiles = [
  { n: "5.0", label: "on Google" },
  { n: "6", label: "reviews, 11 Oct 2026" },
  { n: "6", label: "days a week" },
];

// After Ferrari 296 GTB: one object under a spotlight on a black floor, a three-line headline with
// the middle line in italic, and a block of small tiles in the corner. The object is a render of a
// tattoo machine, made for this page. It is not a photograph of the studio's equipment.
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(p, [0, 1], [1, reduce ? 1 : 1.12]);
  const from = (y: number) => (reduce ? false : { opacity: 0, y });

  return (
    <section ref={ref} className="relative min-h-[calc(100svh-46px)] overflow-hidden bg-black pb-[46svh] md:pb-0">
      {/* the light comes up on the machine */}
      <motion.div
        style={{ scale }}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.6, ease: "easeOut" }}
        className="absolute inset-x-0 bottom-0 top-[42svh] md:inset-0"
      >
        <Image src="/gen/tattoo-machine-render.webp" alt="" fill priority sizes="100vw" className="object-cover object-[68%_50%] md:object-[60%_50%]" />
      </motion.div>
      <div className="absolute inset-x-0 top-[42svh] h-[22svh] bg-gradient-to-b from-black to-transparent md:hidden" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 pt-[108px] md:px-10 md:pt-[19svh] lg:px-[72px]">
        <h1 className="g-display text-[14vw] text-white md:text-[clamp(3.25rem,5.4vw,5.25rem)]">
          {[w1, w2, w3].map((w, i) => (
            <motion.span
              key={w}
              initial={from(36)}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 0.9 + i * 0.13, ease: EASE }}
              className={`block ${i === 1 ? "pl-[0.5em]" : ""}`}
            >
              {i === 1 ? <i>{w}</i> : w}
            </motion.span>
          ))}
        </h1>
        <motion.div initial={from(24)} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 1.4, ease: EASE }} className="mt-7 max-w-[330px] md:mt-9">
          <p className="text-[0.9375rem] leading-relaxed text-white/75">{home.descriptor}</p>
          <Link href="#work" className="r2-caps mt-8 inline-flex min-h-[52px] items-center gap-5 bg-white px-7 text-black transition-colors duration-200 hover:bg-bright">
            {labels.work} <span className="h-px w-8 bg-black" aria-hidden />
          </Link>
          <p className="mt-5 text-xs text-white/55 md:hidden">{site.rating}</p>
        </motion.div>
      </div>

      {/* the kinds of piece, as a row of rounds */}
      <motion.ul
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.8 }}
        className="absolute bottom-8 left-5 z-10 hidden gap-4 md:left-10 md:flex lg:left-[72px]"
      >
        {groups.map((g, i) => (
          <li key={g.id}>
            <Link
              href="/g/artists/roger-cazares/#work"
              aria-label={g.name}
              title={g.name}
              className={`relative block h-12 w-12 overflow-hidden rounded-full border transition-colors duration-200 hover:border-gold ${i === 0 ? "border-white" : "border-white/25"}`}
            >
              <Image src={g.pieces[0].src} alt="" fill sizes="48px" className="object-cover" />
            </Link>
          </li>
        ))}
      </motion.ul>

      <motion.aside
        initial={from(30)}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 1.6, ease: EASE }}
        className="absolute bottom-8 right-10 z-10 hidden w-[300px] md:block lg:right-[72px]"
      >
        <p className="mb-3 flex items-center gap-2 text-[1.0625rem] text-white">
          <Image src="/brand/cathedral-tattoo-studio-cross-mark.png" alt="" width={22} height={22} className="h-[22px] w-[22px]" />
          Cathedral <strong className="font-semibold">Tattoo Studio</strong>
        </p>
        <div className="grid grid-cols-2 gap-1">
          <div className="relative aspect-[4/3]">
            <Image src={photos.tiger.src} alt={photos.tiger.alt} fill sizes="150px" className="object-cover" />
          </div>
          {tiles.map((t) => (
            <div key={t.label} className="g-tile flex aspect-[4/3] flex-col justify-end p-3">
              <p className="g-serif text-[2rem] text-white">{t.n}</p>
              <p className="mt-1 text-xs text-white/60">{t.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-white/45">{site.rating}</p>
      </motion.aside>
    </section>
  );
}
