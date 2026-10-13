"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Piece } from "@/components/shared/Piece";
import { groups } from "@/lib/site";
import { EASE } from "./arch";

// One group of work at a time, four pieces at most. On a phone the pieces sit in a row that snaps;
// each keeps its own proportions with its caption beneath. A new group swings in on its left edge,
// the way the doors do.
//   row:    the pieces stay in a row on wide screens (home page)
//   column: beside a sticky column of chips, the pieces stack, larger (artist page)
export function Gallery({ layout, heading }: { layout: "row" | "column"; heading: React.ReactNode }) {
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(groups[0].id);
  const group = groups.find((g) => g.id === current) ?? groups[0];
  const column = layout === "column";

  return (
    <div className={column ? "lg:grid lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-20" : ""}>
      <div className={column ? "lg:sticky lg:top-10 lg:self-start" : ""}>
        {heading}
        <div
          role="group"
          aria-label="Kind of piece"
          className={`c-scroll -mx-4 mt-8 flex gap-x-6 gap-y-2 overflow-x-auto border-b border-hair px-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:overflow-visible lg:px-0 ${
            column ? "lg:flex-col lg:items-start lg:border-b-0" : "lg:flex-wrap"
          }`}
        >
          {groups.map((g) => (
            <button key={g.id} type="button" className="c-chip" aria-pressed={g.id === group.id} onClick={() => setCurrent(g.id)}>
              {g.name}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.ul
          key={group.id}
          aria-label={group.name}
          tabIndex={0}
          exit={reduce ? undefined : { opacity: 0, transition: { duration: 0.25, ease: EASE } }}
          style={{ perspective: 1400 }}
          className={`c-scroll -mx-4 mt-10 flex snap-x snap-mandatory scroll-px-4 items-start gap-5 overflow-x-auto px-4 pb-2 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:overflow-visible lg:px-0 ${
            column ? "lg:mt-0 lg:flex-col lg:gap-24" : "lg:gap-8"
          }`}
        >
          {group.pieces.map((photo, i) => (
            <motion.li
              key={photo.src}
              className={`w-[74vw] max-w-[300px] shrink-0 snap-start ${column ? "lg:w-full lg:max-w-none" : "lg:w-auto lg:max-w-none lg:flex-1 lg:shrink"}`}
              style={{ transformOrigin: "0% 50%" }}
              initial={reduce ? false : { opacity: 0, rotateY: 24, y: 18 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1, delay: i * 0.09, ease: EASE }}
            >
              <Piece photo={photo} width={column ? 520 : 360} sizes={column ? "(min-width: 1024px) 520px, 74vw" : "(min-width: 1024px) 360px, 74vw"} />
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
}
