import { home, labels, site, slots } from "@/lib/site";
import { DirectionStrip } from "@/components/shared/DirectionStrip";
import { CallButton, Footer, Header, HoursTable, MobileBar } from "@/components/shared/Chrome";
import { Slot } from "@/components/shared/Piece";
import { Reveal } from "@/components/shared/Reveal";
import { Nave } from "@/components/a/Nave";
import { Ring } from "@/components/a/Ring";
import { Steps } from "@/components/a/Steps";

export const metadata = { title: "Direction A: The nave" };

export default function Page() {
  return (
    <div>
      <DirectionStrip />
      <div className="relative">
        {/* The header lies over the top of the nave and scrolls away with the first screen. */}
        <div className="absolute inset-x-0 top-0 z-40">
          <Header base="/a" mark={false} />
        </div>
        <main>
          <Nave />
          <Ring artistHref="/a/artists/roger-cazares/" />
          <Steps />

          <section className="wrap py-24 md:py-32">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <Reveal className="lg:col-span-5">
                <h2 className="h2">{home.firstTime.title}</h2>
                <p className="lead mt-5 max-w-measure">{home.firstTime.body}</p>
              </Reveal>
              <Reveal delay={0.15} className="lg:col-span-7">
                <figure className="bg-surface p-8 md:p-14">
                  <span className="hairline" />
                  <blockquote className="text-[1.625rem] leading-snug text-text md:text-[2.25rem]">“{home.firstTime.quote}”</blockquote>
                  <figcaption className="small mt-6">{home.firstTime.by}</figcaption>
                </figure>
              </Reveal>
            </div>
          </section>

          <section id="visit" className="border-t border-hair">
            <div className="wrap grid gap-14 py-24 md:py-32 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <span className="hairline" />
                <h2 className="h2">Visit</h2>
                <p className="lead mt-5">
                  {site.street}
                  <br />
                  {site.city}
                </p>
                <div className="btn-pair mt-7">
                  <a href={site.maps} target="_blank" rel="noopener" className="btn btn-primary">
                    {labels.directions}
                  </a>
                  <CallButton />
                </div>
                <HoursTable className="mt-12" />
                <p className="mt-10 max-w-measure text-muted">{home.availability}</p>
                <Slot text={slots.dates} className="mt-4 max-w-measure" />
              </Reveal>
              <Reveal delay={0.15} className="lg:col-span-5">
                <Slot text={slots.room} className="aspect-[4/5] w-full max-w-[460px] lg:ml-auto" />
              </Reveal>
            </div>
          </section>
        </main>
        <Footer />
        <MobileBar workHref="/a/#work" />
      </div>
    </div>
  );
}
