import { CallButton } from "@/components/shared/Chrome";
import { Slot } from "@/components/shared/Piece";
import { Reveal } from "@/components/shared/Reveal";
import { labels, site, slots } from "@/lib/site";
import { HoursToday } from "./clock";

function Address() {
  return (
    <address className="not-italic">
      <p className="h3">{site.name}</p>
      <p className="mt-3">
        {site.street}
        <br />
        {site.city}
      </p>
    </address>
  );
}

function Directions() {
  return (
    <a href={site.maps} target="_blank" rel="noopener" className="link inline-flex min-h-[44px] items-center">
      {labels.directions}
    </a>
  );
}

// Home: hours with today marked, the address, the phone, the email, and the room (a slot until photographed).
export function Visit() {
  return (
    <section id="visit" className="border-t border-hair py-20 lg:py-28">
      <div className="wrap grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,300px)] lg:gap-16">
        <Reveal>
          <h2 className="h2">Visit</h2>
          <div className="mt-8">
            <Address />
            <p className="mt-2">
              <Directions />
            </p>
            <div className="mt-6 max-w-[320px]">
              <CallButton className="w-full" />
            </div>
            <p className="mt-6 break-all">
              <a href={`mailto:${site.email}`} className="link">
                {site.email}
              </a>
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="label">Hours</p>
          <HoursToday className="mt-6" />
        </Reveal>
        <Reveal delay={0.2}>
          <Slot text={slots.room} className="aspect-[4/5] w-full max-w-[300px]" />
        </Reveal>
      </div>
    </section>
  );
}

// Artist page: the short version.
export function VisitShort() {
  return (
    <section id="visit" className="border-t border-hair py-20 lg:py-24">
      <div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="h2">Visit</h2>
          <div className="mt-8">
            <Address />
            <p className="mt-2">
              <Directions />
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="label">Hours</p>
          <p className="mt-4 max-w-measure">{site.hoursLine}</p>
          <div className="mt-6 max-w-[320px]">
            <CallButton className="w-full" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// Phones: directions and the phone, equal width, fixed to the bottom. Sized as the shared MobileBar.
export function ActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid h-16 grid-cols-2 gap-2 border-t border-hair bg-surface px-3 py-2 md:hidden">
      <a href={site.maps} target="_blank" rel="noopener" className="btn btn-secondary !min-h-0 !px-2">
        {labels.directions}
      </a>
      <CallButton short className="!min-h-0 !px-2" />
    </div>
  );
}
