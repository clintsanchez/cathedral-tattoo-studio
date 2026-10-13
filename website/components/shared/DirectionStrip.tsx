"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const DIRS = [
  { id: "a", label: "A · The nave" },
  { id: "b", label: "B · By the book" },
  { id: "c", label: "C · Three doors" },
  { id: "d", label: "D · Noir" },
  { id: "e", label: "E · The artifact" },
  { id: "f", label: "F · Manifesto" },
  { id: "g", label: "G · The machine" },
  { id: "h", label: "H · The knight" },
  { id: "i", label: "I · The interior" },
];

const INNER = "artists/roger-cazares/";

// Preview-only strip: switch direction while staying on the same page type.
export function DirectionStrip() {
  const path = usePathname();
  const [, current, ...rest] = path.split("/");
  const tail = rest.filter(Boolean).join("/");
  return (
    <div className="relative z-50 border-b border-hair bg-surface text-sm text-muted">
      <div className="wrap flex flex-wrap items-center gap-x-5 gap-y-0">
        <Link href="/" className="inline-flex min-h-[44px] items-center font-semibold text-text underline-offset-4 hover:underline">
          Directions
        </Link>
        {DIRS.map((d) => (
          <Link
            key={d.id}
            href={`/${d.id}/${tail ? tail + "/" : ""}`}
            aria-current={current === d.id ? "page" : undefined}
            className={`inline-flex min-h-[44px] items-center underline-offset-4 hover:underline ${current === d.id ? "font-semibold text-gold" : ""}`}
          >
            {d.label}
          </Link>
        ))}
        <Link href={`/${current}/${tail ? "" : INNER}`} className="ml-auto inline-flex min-h-[44px] items-center underline-offset-4 hover:underline">
          {tail ? "Home page" : "Inner page"}
        </Link>
      </div>
    </div>
  );
}
