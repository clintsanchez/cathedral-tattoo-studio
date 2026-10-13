"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { home, labels, photos, site } from "@/lib/site";
import { Arrow, EASE } from "@/components/r2/Bits";

const WORD = "CATHEDRAL".split("");

// After Ophidia: one photograph run to the edge of the screen and melted into the black, a stacked
// didone headline, the name across the foot of the screen, and a glass card over the corner.
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const plateY = useTransform(p, [0, 1], ["0%", reduce ? "0%" : "12%"]);
  const wordY = useTransform(p, [0, 1], ["0%", reduce ? "0%" : "-22%"]);
  const from = (y: number) => (reduce ? false : { opacity: 0, y });

  return (
    <section ref={ref} className="relative flex min-h-[calc(100svh-46px)] flex-col overflow-hidden bg-black">
      {/* the rail down the left edge */}
      <div className="absolute inset-y-0 left-[72px] hidden w-px bg-white/10 xl:block" aria-hidden />
      <p className="r2-caps absolute bottom-[42%] left-[36px] hidden origin-bottom-left -rotate-90 whitespace-nowrap text-white/45 xl:block">{site.email}</p>

      <motion.div
        style={{ y: plateY }}
        initial={reduce ? false : { opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, ease: EASE }}
        className="d-plate absolute right-0 top-[44svh] h-[74svh] w-full md:right-[4vw] md:top-0 md:h-[118svh] md:w-auto md:aspect-[1598/2048]"
      >
        <Image src={photos.hands.src} alt={photos.hands.alt} fill priority sizes="(min-width: 768px) 62vw, 100vw" className="object-cover object-[50%_30%]" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] flex-1 px-5 pb-[58svh] pt-[104px] md:px-10 md:pb-0 md:pt-[17svh] xl:pl-[150px]">
        <motion.h1
          initial={from(40)}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.25, ease: EASE }}
          className="d-display max-w-[9ch] text-[3.25rem] text-white md:text-right md:text-[clamp(3.25rem,5.6vw,5.5rem)]"
        >
          {home.headline}
        </motion.h1>
        <motion.div initial={from(28)} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.5, ease: EASE }} className="mt-8 max-w-[340px] md:mt-12">
          <Arrow className="text-2xl text-white" />
          <p className="mt-5 text-[0.9375rem] leading-relaxed text-white/75">{home.descriptor}</p>
          <Link
            href="#work"
            className="r2-caps mt-8 inline-flex min-h-[52px] items-center gap-4 bg-white px-7 text-black transition-colors duration-200 hover:bg-bright"
          >
            {labels.work} <Arrow className="text-base" />
          </Link>
        </motion.div>
      </div>

      {/* the name, edge to edge */}
      <motion.div style={{ y: wordY }} className="d-wordmark pointer-events-none relative z-10 flex select-none justify-between px-[2.5vw] text-white" aria-hidden>
        {WORD.map((ch, i) => (
          <motion.span
            key={i}
            initial={reduce ? false : { y: "55%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 + i * 0.07, ease: EASE }}
            className="block"
          >
            {ch}
          </motion.span>
        ))}
      </motion.div>

      <motion.aside
        initial={from(36)}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 1.1, ease: EASE }}
        className="d-glass absolute bottom-[15svh] right-[5vw] z-20 hidden w-[250px] p-6 lg:block"
      >
        <Arrow className="ml-auto block text-2xl text-white" />
        <p className="mt-16 text-[1.0625rem] font-semibold uppercase leading-tight tracking-wide text-white">{site.rating}</p>
        <p className="mt-3 text-sm text-white/65">Walk in, or book ahead.</p>
      </motion.aside>
    </section>
  );
}
