"use client";

import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import { groups } from "@/lib/site";
import { Piece } from "@/components/shared/Piece";

const EASE = [0.16, 1, 0.3, 1] as const;

// One group at a time, one piece large. The large piece is a plate that turns to the next one, and
// leans a few degrees toward the pointer. The photograph itself is never altered.
export function Portfolio() {
  const [g, setG] = useState(0);
  const [n, setN] = useState(0);
  const reduce = useReducedMotion();
  const group = groups[g];
  const piece = group.pieces[n];

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 120, damping: 20 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 120, damping: 20 });

  const pick = (gi: number, ni = 0) => {
    setG(gi);
    setN(ni);
  };

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-10">
          <ul className="border-t border-hair">
            {groups.map((gr, i) => (
              <li key={gr.id} className="border-b border-hair">
                <button
                  type="button"
                  onClick={() => pick(i)}
                  aria-pressed={i === g}
                  className={`flex min-h-[56px] w-full items-center justify-between gap-4 py-3 text-left text-[1.3125rem] font-semibold transition-colors duration-150 ${i === g ? "text-text" : "text-muted hover:text-text"}`}
                >
                  {gr.name}
                  <span aria-hidden className={`h-px bg-gold transition-all duration-500 ${i === g ? "w-16" : "w-0"}`} style={{ transitionTimingFunction: "var(--ease)" }} />
                </button>
              </li>
            ))}
          </ul>
          <ul className="mt-8 flex flex-wrap gap-3">
            {group.pieces.map((ph, i) => (
              <li key={ph.src}>
                <button
                  type="button"
                  onClick={() => setN(i)}
                  aria-pressed={i === n}
                  aria-label={ph.caption}
                  className={`flex h-12 min-w-[48px] items-center justify-center border px-4 text-sm font-semibold transition-colors duration-150 ${i === n ? "border-gold text-gold" : "border-hair text-muted hover:border-gold"}`}
                >
                  0{i + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="lg:col-span-8"
        style={{ perspective: 1600 }}
        onPointerMove={(e) => {
          if (reduce || e.pointerType !== "mouse") return;
          const r = e.currentTarget.getBoundingClientRect();
          mx.set((e.clientX - r.left) / r.width - 0.5);
          my.set((e.clientY - r.top) / r.height - 0.5);
        }}
        onPointerLeave={() => {
          mx.set(0);
          my.set(0);
        }}
      >
        <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="mx-auto w-full max-w-[540px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={piece.src}
              initial={reduce ? false : { rotateY: 62, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { rotateY: -62, opacity: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
              style={{ transformOrigin: "50% 50%" }}
            >
              <Piece photo={piece} width={540} sizes="(min-width: 640px) 540px, 100vw" priority />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
