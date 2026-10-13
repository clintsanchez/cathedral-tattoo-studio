"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { home, labels } from "@/lib/site";
import { Arrow, EASE } from "@/components/r2/Bits";

// After Yugen: a room seen head on, a short headline in the corner, and the name standing in the room
// as a solid object, its foot lost in mist. Under it, the four steps as a numbered strip.
// The room is a render made for this page. It is not the studio.
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const roomY = useTransform(p, [0, 1], ["0%", reduce ? "0%" : "14%"]);
  const wordY = useTransform(p, [0, 1], ["0%", reduce ? "0%" : "-30%"]);
  const from = (y: number) => (reduce ? false : { opacity: 0, y });

  return (
    <section ref={ref} className="relative flex min-h-[calc(100svh-46px)] flex-col overflow-hidden bg-black">
      <motion.div style={{ y: roomY }} initial={reduce ? false : { opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2.6, ease: EASE }} className="absolute inset-0" aria-hidden>
        <Image src="/gen/gothic-nave-with-rose-window.webp" alt="" fill priority sizes="100vw" className="object-cover object-[50%_30%]" />
      </motion.div>
      <div className="absolute inset-x-0 top-0 h-[64svh] bg-gradient-to-b from-black/90 via-black/50 to-transparent md:h-56 md:from-black/80 md:via-transparent" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] flex-1 px-5 pt-[108px] md:px-10 md:pt-[15svh] lg:px-[72px]">
        <motion.h1 initial={from(30)} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.3, delay: 0.4, ease: EASE }} className="i-display max-w-[9ch] text-[2.5rem] text-white md:text-[clamp(2rem,3vw,2.75rem)]">
          {home.headline}.
        </motion.h1>
        <motion.p initial={from(24)} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.6, ease: EASE }} className="mt-5 max-w-[300px] text-sm leading-relaxed text-white/75">
          {home.descriptor}
        </motion.p>
        <motion.div initial={from(24)} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.75, ease: EASE }}>
          <Link href="#work" className="r2-caps mt-7 inline-flex min-h-[52px] items-center gap-4 bg-white px-7 text-black transition-colors duration-200 hover:bg-bright">
            {labels.work} <Arrow className="text-base" />
          </Link>
        </motion.div>
      </div>

      <div className="relative z-10 mt-10">
        <div className="relative">
          <motion.p
            style={{ y: wordY }}
            initial={reduce ? false : { opacity: 0, y: "30%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 1.9, delay: 0.5, ease: EASE }}
            className="i-word pointer-events-none select-none whitespace-nowrap text-center"
            aria-hidden
          >
            Cathedral
          </motion.p>
          <div className="i-mist pointer-events-none absolute inset-x-0 bottom-[-12%] h-[46%]" aria-hidden />
        </div>
        <ol className="relative mx-auto grid max-w-[1440px] grid-cols-2 gap-x-6 gap-y-6 bg-black px-5 pb-24 pt-6 md:grid-cols-4 md:px-10 md:pb-9 lg:px-[72px]">
          {home.steps.map((s, i) => (
            <motion.li key={s.n} initial={from(20)} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 1.2 + i * 0.1, ease: EASE }} className="flex gap-4 border-t border-white/25 pt-4">
              <span className="text-sm text-white">0{s.n}</span>
              <span className="text-sm leading-snug text-white/70">{s.title}</span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
