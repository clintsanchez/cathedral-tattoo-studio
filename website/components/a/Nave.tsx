"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, useSyncExternalStore } from "react";
import { home, photos, site, type Photo } from "@/lib/site";
import { Actions, Lockup } from "@/components/shared/Chrome";

// Distances are in pixels along the nave. The viewer stands P in front of the picture plane.
const P = 1100;
const GAP = 850;
const FIRST = 520;
const ARCHES = 7;
const END = FIRST + ARCHES * GAP;
const GOLD = "#B99040";

// Tall screens (phones): the photographs hang inside the nave and are let go of sooner.
const TALL = "(max-aspect-ratio: 5/4)";
function useTall() {
  return useSyncExternalStore(
    (cb) => {
      const m = window.matchMedia(TALL);
      m.addEventListener("change", cb);
      return () => m.removeEventListener("change", cb);
    },
    () => window.matchMedia(TALL).matches,
    () => false,
  );
}

const ramp = (v: number, a: number, b: number) => Math.min(1, Math.max(0, (v - a) / (b - a)));

// How visible something at depth d is from where the viewer stands: it fades up out of the dark
// between far[1] and far[0], and fades away between near[1] and near[0] as it passes.
function useSight(z: MotionValue<number>, d: number, far: [number, number], near: [number, number], floor = 0) {
  return useTransform(z, (v) => {
    const dist = d - v;
    return ramp(dist, near[0], near[1]) * (1 - (1 - floor) * ramp(dist, far[0], far[1]));
  });
}

// One bay, drawn in hairlines: the nave arch, an aisle arch on each side, the outer walls.
// The geometry is plain compass work (two arcs struck from the springing line). It is not taken
// from the logo.
function Arch({ d, z }: { d: number; z: MotionValue<number> }) {
  const opacity = useSight(z, d, [1400, 5200], [-0.78 * P, -0.4 * P], 0.1);
  return (
    <motion.div className="nave-arch" style={{ z: -d, opacity }}>
      <svg viewBox="0 0 2600 1500" preserveAspectRatio="none" fill="none" stroke={GOLD} strokeLinecap="square">
        {/* the thickness of the nave arch: the band between its two ribs, barely lit */}
        <path
          fill={GOLD}
          fillOpacity="0.07"
          stroke="none"
          fillRule="evenodd"
          d="M920 1500V640A560 560 0 0 1 1300 109.7A560 560 0 0 1 1680 640V1500H1648V640A528 528 0 0 0 1300 143.6A528 528 0 0 0 952 640V1500Z"
        />
        <path vectorEffect="non-scaling-stroke" strokeWidth="1.5" d="M920 1500V640A560 560 0 0 1 1300 109.7A560 560 0 0 1 1680 640V1500" />
        <path vectorEffect="non-scaling-stroke" strokeWidth="1" opacity="0.55" d="M952 1500V640A528 528 0 0 1 1300 143.6A528 528 0 0 1 1648 640V1500" />
        <path vectorEffect="non-scaling-stroke" strokeWidth="1.25" d="M380 1500V900A400 400 0 0 1 650 521.7A400 400 0 0 1 920 900" />
        <path vectorEffect="non-scaling-stroke" strokeWidth="1.25" d="M2220 1500V900A400 400 0 0 0 1950 521.7A400 400 0 0 0 1680 900" />
      </svg>
    </motion.div>
  );
}

function Hang({ photo, d, side, z, tall }: { photo: Photo; d: number; side: "l" | "r"; z: MotionValue<number>; tall: boolean }) {
  const opacity = useSight(z, d, tall ? [520, 1050] : [760, 1300], tall ? [-0.3 * P, -0.12 * P] : [-0.5 * P, -0.3 * P]);
  return (
    <motion.figure className={`nave-hang ${side}`} style={{ z: -d, opacity }}>
      <Image src={photo.src} alt={photo.alt} width={photo.w} height={photo.h} sizes="(min-width: 1024px) 480px, 300px" className="block h-auto w-full" />
      <figcaption>{photo.caption}</figcaption>
    </motion.figure>
  );
}

const TAU = Math.PI * 2;
const at = (r: number, deg: number) => [r * Math.cos((deg / 360) * TAU), r * Math.sin((deg / 360) * TAU)];

// The window at the far end: a wheel of twelve lights. A drawing, lit from behind.
function Window({ z }: { z: MotionValue<number> }) {
  const opacity = useSight(z, END, [1e9, 2e9], [-0.5 * P, -0.2 * P]);
  const twelve = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <motion.div className="nave-window" style={{ z: -END, opacity }}>
      <div className="glow" />
      <svg viewBox="-300 -300 600 600" aria-hidden>
        <defs>
          <radialGradient id="nave-light" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="292">
            <stop offset="0" stopColor="#F6E3A1" />
            <stop offset="0.4" stopColor="#EBC853" />
            <stop offset="1" stopColor="#B99040" />
          </radialGradient>
        </defs>
        <circle r="292" fill="#0A0A0A" />
        <g fill="url(#nave-light)">
          {twelve.map((a) => (
            <g key={a} transform={`rotate(${a})`}>
              {/* one spoke of the wheel: a slender light, a round light beyond it, a small one at the rim */}
              <path d="M60 -8L150 -17A17 17 0 0 1 150 17L60 8Z" />
              <circle cx="207" cy="0" r="33" />
              <circle cx={at(264, 15)[0]} cy={at(264, 15)[1]} r="14" />
            </g>
          ))}
          <circle r="40" />
        </g>
        <g fill="none" stroke={GOLD} strokeWidth="1.5">
          <circle r="292" vectorEffect="non-scaling-stroke" />
          <circle r="246" vectorEffect="non-scaling-stroke" />
          <circle r="50" vectorEffect="non-scaling-stroke" />
        </g>
      </svg>
    </motion.div>
  );
}

// The words that go with the walk: the intro from the copy deck, a sentence or two at a time.
const split = home.intro[1].indexOf(" That work");
const lines = [home.intro[0], home.intro[1].slice(0, split), home.intro[1].slice(split + 1), home.intro[2]];
// Scroll positions at which each line is fully shown.
const beats: [number, number][] = [
  [0.07, 0.21],
  [0.26, 0.4],
  [0.45, 0.56],
  [0.61, 0.73],
];

function Line({ i, text, p }: { i: number; text: string; p: MotionValue<number> }) {
  const [a, b] = beats[i];
  const opacity = useTransform(p, [a - 0.03, a, b, b + 0.03], [0, 1, 1, 0]);
  return (
    <motion.div style={{ opacity }} className="absolute inset-0 flex items-center">
      <div className="wrap grid gap-3 md:grid-cols-[88px_1fr] md:items-baseline md:gap-8">
        <p className="label">
          0{i + 1} <span className="text-muted">/ 0{lines.length}</span>
        </p>
        <p className="max-w-[760px] text-[1.0625rem] leading-snug text-text md:text-[1.3125rem] md:leading-normal">{text}</p>
      </div>
    </motion.div>
  );
}

// Five pieces, hung in alternate bays. None is wider on screen than half its file.
const hung: [Photo, "l" | "r"][] = [
  [photos.swan, "l"],
  [photos.butterfly, "r"],
  [photos.lambs, "l"],
  [photos.sword, "r"],
  [photos.eye, "l"],
];

function Arrival({ priority = false }: { priority?: boolean }) {
  return (
    <div className="wrap flex h-full flex-col items-center justify-center pb-6 pt-20 text-center">
      <Lockup width={240} priority={priority} className="!w-[min(240px,24svh)]" />
      <h1 className="a-display mt-6 max-w-[14ch] text-text">{home.headline}</h1>
      <p className="lead mx-auto mt-5 max-w-measure text-[1.125rem] md:text-[1.3125rem]">{home.descriptor}</p>
      <Actions workHref="#work" className="mx-auto mt-7" />
      <p className="small mt-5">{site.rating}</p>
    </div>
  );
}

// The opening. You stand at the door of a nave drawn in gold line. Scrolling walks you down it, past
// the work hung in the bays, toward the window at the far end. You arrive in its light, and the site
// begins there.
export function Nave() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const tall = useTall();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const z = useTransform(p, [0.02, 0.82], [0, END + 0.42 * P]);
  const hint = useTransform(p, [0, 0.04], [1, 0]);
  const arrive = useTransform(p, [0.75, 0.86], [0, 1]);
  const events = useTransform(p, (v) => (v > 0.8 ? "auto" : "none"));
  const lift = useTransform(p, [0.75, 0.9], [24, 0]);

  if (reduce) {
    return (
      <section className="relative">
        <div className="min-h-[100svh]">
          <Arrival priority />
        </div>
        <div className="wrap max-w-[760px] space-y-5 pb-24">
          {home.intro.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative" style={{ height: "620vh" }}>
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden pb-16 md:pb-0">
        <div className="nave-scene relative min-h-0 flex-1 overflow-hidden" aria-hidden>
          <div className="nave-stage">
            <motion.div className="nave-world" style={{ z }}>
              <div className="nave-floor" />
              {Array.from({ length: ARCHES }, (_, i) => (
                <Arch key={i} d={FIRST + i * GAP} z={z} />
              ))}
            </motion.div>
            <div className="nave-fog" />
            <motion.div className="nave-world" style={{ z }}>
              <Window z={z} />
            </motion.div>
          </div>
        </div>

        {/* The photographs are their own layer so that nothing, not even the dark, sits over them. */}
        <div className="nave-scene pointer-events-none absolute inset-x-0 top-0 bottom-[calc(theme(spacing.44)+theme(spacing.16))] overflow-hidden md:bottom-36">
          <div className="nave-stage">
            <motion.div className="nave-world" style={{ z }}>
              {hung.map(([photo, side], i) => (
                <Hang key={photo.src} photo={photo} side={side} tall={tall} d={FIRST + (i + 1) * GAP + 40} z={z} />
              ))}
            </motion.div>
          </div>
        </div>

        <div className="relative h-44 shrink-0 border-t border-hair bg-ground md:h-36">
          <motion.div style={{ opacity: hint }} className="absolute inset-0 flex items-center">
            <div className="wrap flex items-center justify-between gap-6">
              <p className="label">Scroll to walk in</p>
              <p className="small hidden sm:block">{site.rating}</p>
            </div>
          </motion.div>
          {lines.map((t, i) => (
            <Line key={i} i={i} text={t} p={p} />
          ))}
        </div>

        <motion.div style={{ opacity: arrive, pointerEvents: events }} className="absolute inset-0 bg-ground pb-16 md:pb-0">
          <motion.div style={{ y: lift }} className="h-full">
            <Arrival />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
