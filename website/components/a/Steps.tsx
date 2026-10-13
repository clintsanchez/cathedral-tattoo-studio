"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { home, photos } from "@/lib/site";
import { Piece } from "@/components/shared/Piece";

const steps = home.steps;

function Card({ i, progress }: { i: number; progress: MotionValue<number> }) {
  const s = steps[i];
  const reduce = useReducedMotion();
  // Each card settles back a little as the next one lands on it.
  const scale = useTransform(progress, [i / steps.length, 1], [1, reduce ? 1 : 1 - (steps.length - 1 - i) * 0.04]);
  const plan = i === 2;
  return (
    <div className="sticky top-0 flex h-[100svh] items-center justify-center px-3 pb-16 md:pb-0">
      <motion.article
        style={{ scale, top: i * 18 }}
        className={`relative grid min-h-[56svh] w-full max-w-[1100px] origin-top items-center gap-6 border-t border-gold p-7 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-14 md:p-14 ${i % 2 ? "bg-raised" : "bg-surface"}`}
      >
        <p className="a-numeral text-gold" aria-hidden>
          {s.n}
        </p>
        <div className={plan ? "grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center" : ""}>
          <div>
            <h3 className="h3 max-w-xl md:text-[2rem]">{s.title}</h3>
            <p className="mt-4 max-w-xl text-muted">{s.body}</p>
          </div>
          {plan && (
            // A finished design on a screen: the nearest thing on file to a process image. Small only.
            <Piece photo={photos.design} width={200} className="hidden lg:block" />
          )}
        </div>
      </motion.article>
    </div>
  );
}

// Four cards that pin and pile up: what happens between the idea and the tattoo.
export function Steps() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <section id="how" className="relative">
      <div className="wrap pt-24 md:pt-32">
        <span className="hairline" />
        <h2 className="h2">How it works</h2>
      </div>
      <div ref={ref}>
        {steps.map((s, i) => (
          <Card key={s.n} i={i} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
