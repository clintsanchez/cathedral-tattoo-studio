"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Actions } from "@/components/shared/Chrome";
import { Reveal } from "@/components/shared/Reveal";
import { home, site } from "@/lib/site";
import { ARCH_PATH } from "./arch";
import { OpenLine, useStill } from "./clock";

// Five orders of one arch, 150px apart in depth, and a shut door at the far end.
const ORDERS = [0, 1, 2, 3, 4];
const DEPTH = 150;

function Arch({ solid = false }: { solid?: boolean }) {
  return (
    <svg viewBox="0 0 100 190" preserveAspectRatio="none" fill="none">
      <path d={ARCH_PATH} fill={solid ? "#141414" : "none"} stroke="#B99040" strokeWidth={solid ? 1 : 1.25} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

// First screen: is it open, the headline, what the studio does, the two actions, the rating.
// Behind it, a drawn portal in real perspective. Scrolling walks you toward it.
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const still = useStill();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const z = useTransform(scrollYProgress, [0, 1], [0, 340]);
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section ref={ref} className="c-hero">
      <div className="c-portal" aria-hidden>
        <motion.div className="c-portal-view" style={still ? undefined : { opacity: fade }}>
          <motion.div className="c-portal-rig" style={still ? undefined : { z }}>
            {ORDERS.map((i) => (
              <div key={i} className="c-order" style={{ transform: `translateZ(${-i * DEPTH}px)`, opacity: 0.8 - i * 0.12 }}>
                <Arch />
              </div>
            ))}
            <div className="c-order" style={{ transform: `translateZ(${-ORDERS.length * DEPTH}px)`, opacity: 0.9 }}>
              <Arch solid />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="wrap relative py-14 lg:py-20">
        <div className="max-w-[660px]">
          <Reveal y={16}>
            <OpenLine />
          </Reveal>
          <Reveal y={24} delay={0.08}>
            <h1 className="h1 c-h1 mt-6">{home.headline}</h1>
          </Reveal>
          <Reveal y={24} delay={0.18}>
            <p className="lead mt-6 max-w-measure">{home.descriptor}</p>
          </Reveal>
          <Reveal y={20} delay={0.3}>
            <Actions workHref="/c/#work" className="mt-8" />
            <p className="small mt-5">{site.rating}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
