"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CallButton } from "@/components/shared/Chrome";
import { doors, labels, site } from "@/lib/site";
import { EASE, HEAD_CLIP, HEAD_PATH } from "./arch";
import { useStill } from "./clock";

type DoorData = (typeof doors)[number];

// How far the leaf swings: past square, so its inner face turns to the visitor.
const OPEN_ANGLE = -100;

// The arch as a filled shape: a clipped head over a plain body, so the door can be any height.
function Fill({ className }: { className: string }) {
  return (
    <div className="c-shape">
      <div className={`c-shape-head ${className}`} style={{ clipPath: HEAD_CLIP }} />
      <div className={`c-shape-body ${className}`} />
    </div>
  );
}

// The same arch as a gold hairline.
function Outline({ className = "" }: { className?: string }) {
  return (
    <div className={`c-shape c-outline ${className}`}>
      <div className="c-shape-head">
        <svg viewBox="0 0 1000 866" preserveAspectRatio="none" className="block h-full w-full overflow-visible" fill="none">
          <path d={HEAD_PATH} stroke="#B99040" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <div className="c-shape-body c-jambs" />
    </div>
  );
}

function Behind({ door }: { door: DoorData }) {
  const quote = "quote" in door ? door.quote : undefined;
  return (
    <>
      <p className="label text-center">{door.title}</p>
      {door.body.map((line) => (
        <p key={line}>{line}</p>
      ))}
      {quote && (
        <figure>
          <blockquote className="text-text">“{quote.text}”</blockquote>
          <figcaption className="small mt-1">{quote.by}</figcaption>
        </figure>
      )}
      <div className="mt-auto pt-2">
        {door.action === "directions" ? (
          <a href={site.maps} target="_blank" rel="noopener" className="btn btn-secondary w-full !px-2">
            {labels.directions}
          </a>
        ) : (
          <CallButton className="w-full !px-2 !leading-tight" />
        )}
      </div>
    </>
  );
}

function Door({ door, auto, still }: { door: DoorData; auto: boolean; still: boolean }) {
  const ref = useRef<HTMLLIElement>(null);
  const touched = useRef(false);
  const [open, setOpen] = useState(false);
  const inView = useInView(ref, { once: true, amount: 0.55 });
  const id = `door-${door.id}`;

  // One value, 0 closed to 1 open. The hinge, the light and the copy all read from it.
  const swing = useMotionValue(0);
  const rotateY = useTransform(swing, [0, 1], [0, OPEN_ANGLE]);
  const outer = useTransform(swing, [0, 0.85], [1, 0.3]);
  const inner = useTransform(swing, [0.75, 1], [0.45, 1]);
  const light = useTransform(swing, [0, 0.3, 1], [0, 0.5, 1]);
  const copy = useTransform(swing, [0.3, 0.85], [0, 1]);
  const rise = useTransform(swing, [0.3, 1], [14, 0]);
  const visibility = useTransform<number, "visible" | "hidden">(swing, (v) => (v > 0.02 ? "visible" : "hidden"));

  useEffect(() => {
    if (auto && inView && !touched.current) setOpen(true);
  }, [auto, inView]);

  useEffect(() => {
    const controls = animate(swing, open ? 1 : 0, { duration: open ? 1.1 : 0.9, ease: EASE });
    return () => controls.stop();
  }, [open, swing]);

  // Reduced motion: a plain arched panel, already open. No leaf, nothing to operate.
  if (still) {
    return (
      <li ref={ref} className="c-door">
        <div className="c-doorway">
          <div aria-hidden className="c-light" />
          <div className="c-behind">
            <h2 className="sr-only">{door.title}</h2>
            <Behind door={door} />
          </div>
          <Outline />
        </div>
      </li>
    );
  }

  return (
    <li ref={ref} className="c-door">
      <div className="c-doorway" data-open={open}>
        <motion.div aria-hidden className="c-light" style={{ opacity: light }} />

        <h2 className="c-door-h">
          <button
            type="button"
            className="c-door-btn"
            aria-expanded={open}
            aria-controls={id}
            onClick={() => {
              touched.current = true;
              setOpen((v) => !v);
            }}
          >
            <span className="sr-only">{door.title}. </span>
            <span className={open ? undefined : "sr-only"}>{open ? "Close the door" : "Open the door"}</span>
          </button>
        </h2>

        <motion.div id={id} className="c-behind" style={{ opacity: copy, y: rise, visibility }}>
          <Behind door={door} />
        </motion.div>

        <Outline />

        <motion.div aria-hidden className="c-leaf" style={{ rotateY }}>
          {/* outer face: what you see from the street */}
          <div className="c-face">
            <Fill className="bg-[#0d0d0d]" />
            <motion.div className="absolute inset-0" style={{ opacity: outer }}>
              <Fill className="bg-surface" />
              <div className="c-panel">
                <Outline className="opacity-40" />
              </div>
              <div className="c-shape">
                <div className="c-shape-head" />
                <div className="c-shape-body flex flex-col items-center justify-start px-3 pt-[10%] text-center">
                  <span className="c-strap top-[3%]" />
                  <span className="c-strap bottom-[14%]" />
                  <span className="c-pull" />
                  <span className="h2 c-door-title">{door.title}</span>
                  <span className="label mt-4">Open the door</span>
                </div>
              </div>
            </motion.div>
          </div>
          {/* inner face: lit from inside once it has swung past square */}
          <div className="c-face c-face-back">
            <Fill className="bg-[#0d0d0d]" />
            <motion.div className="absolute inset-0" style={{ opacity: inner }}>
              <Fill className="bg-raised" />
              <div className="c-panel">
                <Outline className="opacity-30" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </li>
  );
}

// Three doors. The first opens as it comes into view, so it is clear what they do; after that they
// only move when someone opens or closes them.
export function Doors() {
  const still = useStill();
  return (
    <section aria-label="Three doors" className="c-doors-section border-t border-hair py-20 lg:py-28">
      <div className="wrap">
        <ul className="c-doors">
          {doors.map((door, i) => (
            <Door key={door.id} door={door} auto={i === 0} still={still} />
          ))}
        </ul>
      </div>
    </section>
  );
}
