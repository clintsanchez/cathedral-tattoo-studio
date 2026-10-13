"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { home, photos, type Photo } from "@/lib/site";
import { Piece } from "@/components/shared/Piece";

// Six pieces on the faces of a hexagonal wall. One colour piece only, so it does not fight the gold.
const wall: Photo[] = [photos.portrait, photos.tiger, photos.motherChild, photos.heart, photos.owl, photos.lion];
const STEP = 360 / wall.length;

function Panel({ photo, i, turn }: { photo: Photo; i: number; turn: MotionValue<number> }) {
  // Full strength when it faces you, gone by the time it is side-on.
  const opacity = useTransform(turn, (t) => {
    const off = Math.abs(i * STEP - t);
    return Math.min(1, Math.max(0, (84 - off) / 44));
  });
  return (
    <motion.div className="ring-panel" style={{ opacity, transform: `rotateY(${i * STEP}deg) translateZ(var(--r))` }}>
      <Piece photo={photo} width={400} sizes="(min-width: 640px) 400px, 58vw" />
    </motion.div>
  );
}

// The work, hung on a wall that turns as you scroll. Nothing turns by itself.
export function Ring({ artistHref }: { artistHref: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  // The wall rests on each face and turns between them: most of the scroll is spent looking at a piece.
  const turn = useTransform(p, (v) => {
    const t = Math.min(1, Math.max(0, (v - 0.04) / 0.92)) * (wall.length - 1);
    const i = Math.min(wall.length - 2, Math.floor(t));
    const f = Math.min(1, Math.max(0, (t - i - 0.3) / 0.4));
    return (i + f * f * (3 - 2 * f)) * STEP;
  });
  const rotateY = useTransform(turn, (t) => -t);
  const count = useTransform(turn, (t) => `0${Math.round(t / STEP) + 1}`);

  const intro = (
    <div>
      <span className="hairline" />
      <h2 className="h2">The work</h2>
      <p className="mt-4 max-w-md text-muted">{home.portfolioIntro}</p>
      <p className="mt-5">
        <Link href={artistHref} className="link">
          See Roger Cazares&apos;s work
        </Link>
      </p>
    </div>
  );

  if (reduce) {
    return (
      <section id="work" className="wrap py-24">
        {intro}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {wall.slice(0, 4).map((photo) => (
            <Piece key={photo.src} photo={photo} width={340} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="work" ref={ref} className="relative" style={{ height: "430vh" }}>
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden pb-16 md:pb-0">
        <div className="wrap grid h-full gap-6 pt-10 md:pt-0 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-12">
          <div className="flex items-end justify-between gap-6 lg:block">
            {intro}
            <p className="label shrink-0 lg:mt-16" aria-hidden>
              <motion.span>{count}</motion.span> <span className="text-muted">/ 0{wall.length}</span>
            </p>
          </div>
          <div className="ring-stage flex min-h-0 items-start justify-center lg:items-center">
            <div className="ring-hub">
              <motion.div className="ring-turn" style={{ rotateY }}>
                {wall.map((photo, i) => (
                  <Panel key={photo.src} photo={photo} i={i} turn={turn} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
