import Image from "next/image";
import Link from "next/link";
import { hours, labels, site } from "@/lib/site";
import { FooterBar } from "./FooterBar";

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" aria-hidden>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A15 15 0 0 1 4 5a1 1 0 0 1 1-1z" />
    </svg>
  );
}

// The phone is a button, not a bare link, and always the secondary one.
export function CallButton({ short = false, className = "" }: { short?: boolean; className?: string }) {
  return (
    <a href={site.tel} className={`btn btn-secondary ${className}`}>
      <PhoneIcon />
      {short ? labels.callShort : labels.call}
    </a>
  );
}

// "See the work" and the phone, equal width. One primary button per view.
export function Actions({ workHref, className = "" }: { workHref: string; className?: string }) {
  return (
    <div className={`btn-pair ${className}`}>
      <Link href={workHref} className="btn btn-primary">
        {labels.work}
      </Link>
      <CallButton />
    </div>
  );
}

// The logo exists only as a raster. It is placed unchanged, on the dark ground, 128px wide or more.
export function Lockup({ width = 320, priority = false, className = "" }: { width?: number; priority?: boolean; className?: string }) {
  return (
    <Image
      src="/brand/cathedral-tattoo-studio-logo-lockup.png"
      alt={site.name}
      width={1200}
      height={1499}
      sizes={`${width}px`}
      priority={priority}
      className={`h-auto ${className}`}
      style={{ width }}
    />
  );
}

// Header: 72px, hairline beneath. The cross links home on inner pages; the home page carries no mark,
// because the lockup is in its hero.
export function Header({ base, mark = true }: { base: string; mark?: boolean }) {
  const nav = [
    { href: `${base}/#work`, label: "The work" },
    { href: `${base}/artists/roger-cazares/`, label: "Artists" },
    { href: `${base}/#how`, label: "How it works" },
    { href: `${base}/#visit`, label: "Visit" },
  ];
  return (
    <header className="relative z-40 border-b border-hair bg-ground">
      <div className="wrap flex h-[72px] items-center gap-6">
        {mark ? (
          <Link href={`${base}/`} aria-label={`${site.name}, home`} className="shrink-0">
            <Image src="/brand/cathedral-tattoo-studio-cross-mark.png" alt="" width={40} height={40} className="h-10 w-10" />
          </Link>
        ) : (
          <Link href={`${base}/`} className="shrink-0 font-semibold text-text">
            {site.name}
          </Link>
        )}
        <nav aria-label="Main" className="hidden flex-1 md:block">
          <ul className="flex gap-7">
            {nav.map((n) => (
              <li key={n.label}>
                <Link href={n.href} className="inline-flex min-h-[44px] items-center font-semibold text-text hover:text-bright">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <CallButton short className="ml-auto !min-h-[44px] lg:hidden" />
        <CallButton className="ml-auto hidden !min-h-[44px] lg:inline-flex" />
      </div>
    </header>
  );
}

export function HoursTable({ className = "" }: { className?: string }) {
  // Monday first.
  const week = [...hours.slice(1), hours[0]];
  return (
    <table className={`w-full max-w-sm ${className}`}>
      <caption className="sr-only">Opening hours</caption>
      <tbody>
        {week.map((d) => (
          <tr key={d.day} className="border-b border-hair">
            <th scope="row" className="py-2 pr-6 text-left font-normal text-text">
              {d.day}
            </th>
            <td className="py-2 text-right text-muted">{d.text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Footer: hairline on top, no logo. Name, address, phone, hours, Instagram, the dated rating line.
export function Footer() {
  return (
    <footer className="border-t border-hair bg-ground">
      <div className="wrap grid gap-10 py-16 md:grid-cols-3">
        <div>
          <p className="h3">{site.name}</p>
          <p className="mt-4">
            <a href={site.maps} className="link" target="_blank" rel="noopener">
              {site.street}
              <br />
              {site.city}
            </a>
          </p>
          <p className="mt-4">
            <a href={site.tel} className="link">
              {site.phone}
            </a>
          </p>
          <p className="mt-1 break-all">
            <a href={`mailto:${site.email}`} className="link">
              {site.email}
            </a>
          </p>
        </div>
        <div>
          <p className="label">Hours</p>
          <HoursTable className="mt-4" />
          <p className="small mt-4">Walk in, or book ahead.</p>
        </div>
        <div>
          <p className="label">Elsewhere</p>
          <p className="mt-4">
            Instagram{" "}
            <a href={site.instagram.url} className="link" target="_blank" rel="noopener">
              {site.instagram.handle}
            </a>
          </p>
          <p className="small mt-4">{site.rating}</p>
        </div>
      </div>
      <FooterBar />
    </footer>
  );
}

// Phones: the same two actions at equal width, fixed to the bottom.
export function MobileBar({ workHref }: { workHref: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid h-16 grid-cols-2 gap-2 border-t border-hair bg-surface px-3 py-2 md:hidden">
      <Link href={workHref} className="btn btn-primary !min-h-0 !px-2">
        {labels.work}
      </Link>
      <CallButton short className="!min-h-0 !px-2" />
    </div>
  );
}
