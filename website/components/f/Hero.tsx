"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { home, labels, photos } from "@/lib/site";
import { Arrow, EASE } from "@/components/r2/Bits";

// The headline, one word to a line, with some letters set in italic as in the Mythos template.
// Each entry is a word split into runs; odd runs are italic.
const lines: string[][] = [
  ["W", "o", "rk"],
  ["w", "o", "r", "t", "h"],
  ["c", "a", "rr", "y", "ing"],
];
const indent = ["", "md:pl-[1.1em]", "md:pl-[0.35em]"];

const sections = [
  { n: "01", href: "#intro" },
  { n: "02", href: "#how" },
  { n: "03", href: "#work" },
  { n: "04", href: "#visit" },
];

// After Mythos and Silver Order: a light serif headline stepped down the left, one tall piece standing
// in the middle of the screen, short columns on the right, and thin rules behind it all.
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const plateY = useTransform(p, [0, 1], ["0%", reduce ? "0%" : "-14%"]);
  const typeY = useTransform(p, [0, 1], ["0%", reduce ? "0%" : "22%"]);
  const from = (y: number) => (reduce ? false : { opacity: 0, y });

  return (
    <section ref={ref} className="relative min-h-[calc(100svh-46px)] overflow-hidden">
      <div className="f-rules absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid min-h-[calc(100svh-46px)] max-w-[1440px] gap-10 px-5 pb-28 pt-[110px] md:grid-cols-12 md:gap-6 md:px-10 md:pb-16 md:pt-[16svh]">
        <motion.div style={{ y: typeY }} className="relative z-20 md:col-span-5">
          <h1 className="f-display text-[18vw] text-text md:text-[clamp(4rem,8.6vw,8.25rem)]">
            {lines.map((runs, i) => (
              <motion.span
                key={i}
                initial={from(50)}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.2 + i * 0.14, ease: EASE }}
                className={`block ${indent[i]}`}
              >
                {runs.map((r, k) => (k % 2 ? <i key={k}>{r}</i> : <span key={k}>{r}</span>))}{" "}
              </motion.span>
            ))}
          </h1>
          <motion.div initial={from(28)} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.8, ease: EASE }} className="mt-10 max-w-[320px] md:mt-14">
            <p className="text-[0.9375rem] leading-relaxed text-white/75">{home.descriptor}</p>
            <Link href="#work" className="r2-caps mt-8 inline-flex min-h-[52px] items-center gap-4 bg-white px-7 text-black transition-colors duration-200 hover:bg-bright">
              {labels.work} <Arrow className="text-base" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.figure
          style={{ y: plateY }}
          initial={reduce ? false : { opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.9, delay: 0.35, ease: EASE }}
          className="relative z-10 mx-auto w-[78vw] max-w-[380px] md:col-span-4 md:w-full md:max-w-none md:self-center"
        >
          <div className="f-haze absolute -inset-[32%]" aria-hidden />
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image src={photos.medusa.src} alt={photos.medusa.alt} fill priority sizes="(min-width: 768px) 30vw, 78vw" className="object-cover" />
          </div>
          <figcaption className="relative mt-3 text-sm text-white/55">{photos.medusa.caption}</figcaption>
        </motion.figure>

        <motion.div
          initial={from(28)}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 1, ease: EASE }}
          className="relative z-20 grid content-start gap-10 md:col-span-3 md:pl-6 md:pt-[8svh]"
        >
          {[home.steps[0], home.steps[2]].map((s) => (
            <div key={s.n}>
              <h2 className="f-serif max-w-[9ch] text-[1.75rem] uppercase text-text">{s.title}</h2>
              <p className="mt-3 max-w-[240px] text-sm leading-relaxed text-white/60">{s.body}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* the page's four parts, numbered down the left edge */}
      <ol className="absolute bottom-10 left-5 z-20 hidden space-y-1 md:left-10 lg:block">
        {sections.map((s, i) => (
          <li key={s.n}>
            <a href={s.href} className={`r2-caps inline-flex min-h-[32px] items-center ${i === 0 ? "text-white" : "text-white/40"} transition-colors duration-200 hover:text-gold`}>
              {s.n}
            </a>
          </li>
        ))}
      </ol>
      <p className="f-serif absolute bottom-8 right-5 z-20 hidden text-[4.5rem] text-white md:right-10 lg:block" aria-hidden>
        01<span className="text-[1.5rem] text-white/45"> / 04</span>
      </p>
    </section>
  );
}
