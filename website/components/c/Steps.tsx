"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { home } from "@/lib/site";
import { useStill } from "./clock";

type StepData = (typeof home.steps)[number];

function Step({ step, at, progress, still }: { step: StepData; at: number; progress: MotionValue<number>; still: boolean }) {
  // Each step comes up to full strength as the line reaches it.
  const opacity = useTransform(progress, [at - 0.12, at + 0.04], [0.35, 1]);
  return (
    <motion.li className="relative pb-12 pl-8 last:pb-0 sm:pl-12" style={still ? undefined : { opacity }}>
      <span aria-hidden className="c-node" />
      <p className="label">{step.n}</p>
      <h3 className="h3 mt-2">{step.title}</h3>
      <p className="mt-3 max-w-measure text-muted">{step.body}</p>
    </motion.li>
  );
}

// The four steps down one gold line. The line is drawn by the scroll position, never by a timer.
export function Steps() {
  const ref = useRef<HTMLOListElement>(null);
  const still = useStill();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.55"] });
  const n = home.steps.length;
  return (
    <ol ref={ref} className="relative">
      <span aria-hidden className="c-line bg-hair" />
      <motion.span aria-hidden className="c-line bg-gold" style={{ scaleY: still ? 1 : scrollYProgress }} />
      {home.steps.map((step, i) => (
        <Step key={step.n} step={step} at={i / n} progress={scrollYProgress} still={still} />
      ))}
    </ol>
  );
}
