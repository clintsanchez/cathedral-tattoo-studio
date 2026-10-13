"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { groups, home, labels, otherArtists, roger, site, slots } from "@/lib/site";
import { Arrow, EASE, Rise } from "./Bits";

// The artist page for the second-round directions. The layout is shared; each direction brings its
// own display face (`display` for the name, `serif` for the smaller serif lines).
export function Artist({ display, serif }: { display: string; serif: string }) {
  const [g, setG] = useState(0);
  const reduce = useReducedMotion();
  const group = groups[g];
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 pb-20 pt-[150px] md:grid-cols-12 md:px-10 md:pb-28 md:pt-[24svh]">
          <div className="md:col-span-7">
            <p className="r2-caps text-gold">{roger.role}</p>
            <h1 className={`${display} mt-6 text-[17vw] text-text md:text-[clamp(4rem,9vw,9rem)]`}>{roger.name}</h1>
            <div className="mt-10 max-w-[520px] space-y-5 text-white/80">
              {roger.bio.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
            <a href={roger.instagram.url} target="_blank" rel="noopener" className="r2-caps mt-8 inline-flex min-h-[48px] items-center gap-3 border-b border-gold text-white hover:text-bright">
              Instagram {roger.instagram.handle} <Arrow className="text-base" />
            </a>
          </div>
          <div className="md:col-span-5 md:self-end">
            <p className="slot aspect-[4/5] w-full max-w-[420px] md:ml-auto">{slots.atWork}</p>
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-white/10">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <h2 className={`${serif} text-[2.75rem] text-text md:text-[4rem]`}>The work</h2>
            <p className="max-w-[380px] text-[0.9375rem] leading-relaxed text-white/70 lg:ml-auto">{home.portfolioIntro}</p>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-3 gap-y-3" role="group" aria-label="Kind of piece">
            {groups.map((gr, i) => (
              <button
                key={gr.id}
                type="button"
                onClick={() => setG(i)}
                aria-pressed={i === g}
                className={`r2-caps min-h-[48px] rounded-full border px-6 transition-colors duration-200 ${i === g ? "border-gold bg-gold text-black" : "border-white/25 text-white/75 hover:border-white hover:text-white"}`}
              >
                {gr.name}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={group.id}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
            >
              {group.pieces.map((ph, i) => (
                <figure key={ph.src} className={i % 2 ? "lg:mt-16" : ""}>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[18px] border border-white/12">
                    <Image src={ph.src} alt={ph.alt} fill sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 100vw" className="object-cover" />
                  </div>
                  <figcaption className="mt-3 text-sm text-white/60">{ph.caption}</figcaption>
                </figure>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-32">
          <h2 className={`${serif} text-[2.75rem] text-text md:text-[4rem]`}>Other artists</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {otherArtists.map((name, i) => (
              <Rise key={name} delay={i * 0.12}>
                <h3 className={`${serif} text-[2rem] text-text`}>{name}</h3>
                <p className="slot mt-4 min-h-[150px]">{slots.artist}</p>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="border-t border-white/10">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-32">
          <p className="r2-caps text-white/55">Visit</p>
          <p className={`${serif} mt-6 text-[2.25rem] text-text md:text-[3.25rem]`}>
            {site.street}, {site.city}
          </p>
          <p className="mt-5 max-w-[520px] text-white/70">{site.hoursLine}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={site.maps} target="_blank" rel="noopener" className="r2-caps inline-flex min-h-[52px] items-center gap-4 bg-white px-7 text-black transition-colors duration-200 hover:bg-bright">
              {labels.directions} <Arrow className="text-base" />
            </a>
            <a href={site.tel} className="r2-caps inline-flex min-h-[52px] items-center border border-white/40 px-7 text-white transition-colors duration-200 hover:border-gold hover:text-gold">
              {labels.callShort} {site.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
