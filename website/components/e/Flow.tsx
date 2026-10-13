"use client";

import Image from "next/image";
import { useState } from "react";
import { photos, type Photo } from "@/lib/site";
import { Arrow } from "@/components/r2/Bits";

const row: Photo[] = [photos.swan, photos.tiger, photos.motherChild, photos.portrait, photos.owl, photos.heart, photos.sword];

// After the 3D carousel template: a row of pieces in depth. The one in the middle faces you; the
// rest turn away to either side. It moves only when asked.
export function Flow() {
  const [at, setAt] = useState(3);
  const go = (n: number) => setAt(Math.max(0, Math.min(row.length - 1, n)));
  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Selected pieces"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(at + 1);
        if (e.key === "ArrowLeft") go(at - 1);
      }}
      className="outline-offset-8"
    >
      <div className="e-flow relative mx-auto h-[calc(var(--fw)*1.36)] [--fw:min(64vw,400px)]">
        {row.map((photo, i) => {
          const off = i - at;
          const a = Math.abs(off);
          return (
            <button
              key={photo.src}
              type="button"
              onClick={() => go(i)}
              aria-label={off === 0 ? photo.caption : `Show: ${photo.caption}`}
              aria-current={off === 0}
              tabIndex={a > 2 ? -1 : 0}
              className="e-flow-item block"
              style={{
                transform: `translateX(${off * 64}%) translateZ(${-a * 190}px) rotateY(${off === 0 ? 0 : off > 0 ? -42 : 42}deg)`,
                opacity: a > 2 ? 0 : 1 - a * 0.28,
                zIndex: 10 - a,
                pointerEvents: a > 2 ? "none" : "auto",
              }}
            >
              <span className="relative block aspect-[3/4] overflow-hidden rounded-[18px] border border-white/15">
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 640px) 400px, 64vw" className="object-cover" />
              </span>
            </button>
          );
        })}
      </div>
      <div className="mx-auto mt-10 flex max-w-[640px] items-center justify-between gap-6 px-5">
        <button type="button" onClick={() => go(at - 1)} disabled={at === 0} aria-label="Previous piece" className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/25 text-xl text-white transition-colors duration-200 hover:border-gold hover:text-gold disabled:opacity-30">
          <Arrow className="-rotate-[135deg]" />
        </button>
        <p className="text-center text-[0.9375rem] text-white/75" aria-live="polite">
          {row[at].caption}
        </p>
        <button type="button" onClick={() => go(at + 1)} disabled={at === row.length - 1} aria-label="Next piece" className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/25 text-xl text-white transition-colors duration-200 hover:border-gold hover:text-gold disabled:opacity-30">
          <Arrow className="rotate-45" />
        </button>
      </div>
    </div>
  );
}
