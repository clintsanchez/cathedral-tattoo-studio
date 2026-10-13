"use client";

import { useId, useRef, useState } from "react";
import { groups } from "@/lib/site";
import { Piece } from "@/components/shared/Piece";

// The portfolio, one group at a time. Tabs follow the WAI-ARIA pattern: arrow keys move and select.
// "set": the group as one row (home). "feature": the first piece large, the rest beside it (artist page).
export function Work({ layout }: { layout: "set" | "feature" }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const uid = useId();
  const group = groups[active];

  const go = (i: number) => {
    const n = (i + groups.length) % groups.length;
    setActive(n);
    tabs.current[n]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const moves: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowDown: active + 1,
      ArrowLeft: active - 1,
      ArrowUp: active - 1,
      Home: 0,
      End: groups.length - 1,
    };
    if (e.key in moves) {
      e.preventDefault();
      go(moves[e.key]);
    }
  };

  const [first, ...rest] = group.pieces;

  return (
    <div>
      <div role="tablist" aria-label="Kinds of piece" onKeyDown={onKeyDown} className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-x-8">
        {groups.map((g, i) => (
          <button
            key={g.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${uid}-tab-${g.id}`}
            aria-selected={i === active}
            aria-controls={`${uid}-panel`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className="b-tab"
          >
            <span>{g.name}</span>
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`${uid}-panel`} aria-labelledby={`${uid}-tab-${group.id}`} tabIndex={0} className="mt-8 lg:mt-16">
        {layout === "set" ? (
          <div className="b-set" data-cols={group.pieces.length}>
            {group.pieces.map((photo) => (
              <Piece key={photo.src} photo={photo} width={540} sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" />
            ))}
          </div>
        ) : (
          <div className="grid gap-y-12 lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Piece key={first.src} photo={first} width={552} sizes="(min-width: 1024px) 552px, 100vw" />
            <div className="b-set">
              {rest.map((photo) => (
                <Piece key={photo.src} photo={photo} width={540} sizes="(min-width: 1024px) 260px, (min-width: 640px) 50vw, 100vw" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
