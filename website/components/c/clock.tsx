"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { hours } from "@/lib/site";

type Now = { day: number; t: number };

function studioNow(): Now {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return { day: hours.findIndex((h) => h.day === get("weekday")), t: (Number(get("hour")) % 24) + Number(get("minute")) / 60 };
}

// The studio's own day and time, read in the browser. Null until mounted, so the server and the
// first client render agree.
export function useStudioNow() {
  const [now, setNow] = useState<Now | null>(null);
  useEffect(() => {
    setNow(studioNow());
    const id = window.setInterval(() => setNow(studioNow()), 60_000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}

// True only after mounting, for a visitor who asked for reduced motion.
export function useStill() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted && !!reduce;
}

const clock = (h: number) => `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? "am" : "pm"}`;

function sentence({ day, t }: Now) {
  const today = hours[day];
  if (!today) return null;
  if (today.open !== undefined && today.close !== undefined) {
    if (t >= today.open && t < today.close) return { open: true, text: `Open now until ${clock(today.close)}` };
    if (t < today.open) return { open: false, text: `Closed now. Opens today at ${clock(today.open)}` };
  }
  for (let i = 1; i <= 7; i++) {
    const next = hours[(day + i) % 7];
    if (next.open !== undefined) return { open: false, text: `Closed now. Opens ${i === 1 ? "tomorrow" : next.day} at ${clock(next.open)}` };
  }
  return null;
}

// "Open now until 6pm". Holds its line height before it is known, so nothing jumps.
export function OpenLine({ className = "" }: { className?: string }) {
  const now = useStudioNow();
  const s = now ? sentence(now) : null;
  return (
    <p className={`label flex min-h-[1.3em] items-center gap-3 ${className}`} aria-live="polite">
      {s && (
        <>
          <span aria-hidden className={`inline-block h-2 w-2 shrink-0 rounded-full ${s.open ? "bg-gold" : "border border-gold"}`} />
          {s.text}
        </>
      )}
    </p>
  );
}

// The shared hours table, with today's row marked once the browser knows which day it is.
export function HoursToday({ className = "" }: { className?: string }) {
  const now = useStudioNow();
  const week = [...hours.slice(1), hours[0]];
  return (
    <table className={`w-full max-w-sm ${className}`}>
      <caption className="sr-only">Opening hours</caption>
      <tbody>
        {week.map((d) => {
          const today = now !== null && hours[now.day]?.day === d.day;
          return (
            <tr key={d.day} className="border-b border-hair" aria-current={today ? "date" : undefined}>
              <th scope="row" className={`py-2 pr-6 text-left text-text ${today ? "font-semibold" : "font-normal"}`}>
                {d.day}
                {today && <span className="label ml-3">Today</span>}
              </th>
              <td className={`py-2 text-right ${today ? "font-semibold text-text" : "text-muted"}`}>{d.text}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
