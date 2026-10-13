"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { groups, home, labels, site } from "@/lib/site";
import { EASE } from "@/components/r2/Bits";

// The headline in two lines, one above the widest part of the logo and one below it.
const words = home.headline.split(" ");
const top = words.slice(0, 2).join(" ");
const bottom = words.slice(2).join(" ");

// After Pierce the Emperor: one gold object alone on a lit wall, with the headline set very large
// behind it. The object here is the studio's own logo, unaltered.
export function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  // The type drifts a little against the pointer and the logo a little with it, so they separate.
  const typeX = useTransform(sx, (v) => v * -26);
  const typeY = useTransform(sy, (v) => v * -14);
  const logoX = useTransform(sx, (v) => v * 12);
  const logoY = useTransform(sy, (v) => v * 8);

  return (
    <section
      className="e-stage relative flex min-h-[calc(100svh-46px)] flex-col overflow-hidden"
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
    >
      <motion.h1 style={{ x: typeX, y: typeY }} className="e-display pointer-events-none select-none text-center text-text max-md:sr-only md:absolute md:inset-0">
        <motion.span
          initial={reduce ? false : { opacity: 0, y: "-18%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 1.6, delay: 0.2, ease: EASE }}
          className="e-line absolute inset-x-0 top-[15svh] block md:top-[10svh]"
        >
          {top}
        </motion.span>{" "}
        <motion.span
          initial={reduce ? false : { opacity: 0, y: "18%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 1.6, delay: 0.35, ease: EASE }}
          className="e-line absolute inset-x-0 bottom-[30svh] block md:bottom-[15svh]"
        >
          {bottom}
        </motion.span>
      </motion.h1>

      <div className="relative z-10 flex flex-1 items-center justify-center pb-10 pt-[104px] md:pb-[11svh] md:pt-[92px]">
        <motion.div
          style={{ x: logoX, y: logoY }}
          initial={reduce ? false : { opacity: 0, y: 60, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.5, ease: EASE }}
          className="relative"
        >
          {/* phones: the two lines are set in the flow, tucked behind the top and foot of the logo */}
          <p className="e-display e-line -mb-[0.42em] text-center text-text md:hidden" aria-hidden>
            {top}
          </p>
          <div className="e-shadow absolute -bottom-[7%] left-[-10%] right-[-10%] hidden h-[16%] md:block" aria-hidden />
          <Image
            src="/brand/cathedral-tattoo-studio-logo-lockup.png"
            alt={site.name}
            width={1200}
            height={1499}
            priority
            sizes="(min-width: 768px) 56svh, 72vw"
            className="relative mx-auto h-auto w-[72vw] max-w-[360px] md:w-auto md:max-w-none md:h-[min(62svh,600px)]"
          />
          <p className="e-display e-line relative -z-10 -mt-[0.5em] text-center text-text md:hidden" aria-hidden>
            {bottom}
          </p>
        </motion.div>
      </div>

      {/* the kinds of piece, as a column of small rounds on the right */}
      <motion.ul
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="absolute right-[3vw] top-1/2 z-20 hidden -translate-y-1/2 space-y-4 md:block"
      >
        {groups.slice(0, 4).map((g) => (
          <li key={g.id}>
            <Link
              href="/e/artists/roger-cazares/#work"
              aria-label={g.name}
              title={g.name}
              className="relative block h-14 w-14 overflow-hidden rounded-full border border-white/25 transition-transform duration-500 hover:scale-110"
              style={{ transitionTimingFunction: "var(--ease)" }}
            >
              <Image src={g.pieces[0].src} alt="" fill sizes="56px" className="object-cover" />
            </Link>
          </li>
        ))}
      </motion.ul>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1, ease: EASE }}
        className="relative z-20 mx-auto grid w-full max-w-[1440px] gap-5 px-5 pb-24 md:absolute md:inset-x-0 md:bottom-0 md:grid-cols-[1fr_auto_1fr] md:items-end md:px-10 md:pb-7"
      >
        <p className="max-w-[330px] text-[0.9375rem] leading-relaxed text-white/75">{home.descriptor}</p>
        <Link href="#work" className="e-gold r2-caps inline-flex min-h-[52px] items-center justify-center whitespace-nowrap px-9">
          {labels.work}
        </Link>
        <p className="r2-caps text-white/55 md:text-right">{site.rating}</p>
      </motion.div>
    </section>
  );
}
