import Link from "next/link";
import { DirectionStrip } from "@/components/shared/DirectionStrip";
import { Actions, CallButton, Footer, Header, HoursTable, Lockup, MobileBar } from "@/components/shared/Chrome";
import { Piece, Slot } from "@/components/shared/Piece";
import { Work } from "@/components/b/Work";
import { home, labels, photos, roger, site, slots } from "@/lib/site";

export const metadata = { title: "Direction B: By the book" };

export default function HomeB() {
  const [opening, ...intro] = home.intro;
  return (
    <>
      <DirectionStrip />
      <Header base="/b" mark={false} />
      <main>
        {/* Hero: the one centred composition. Lockup, headline, descriptor, the two buttons, then the
            first photograph, large, with its caption. */}
        <section aria-labelledby="b-headline" className="pb-16 pt-16 lg:pb-32 lg:pt-24">
          <div className="wrap flex flex-col items-center text-center">
            <Lockup width={320} priority className="!w-[240px] sm:!w-[320px]" />
            <h1 id="b-headline" className="h1 b-display mt-12">
              {home.headline}
            </h1>
            <p className="lead b-measure mt-6">{home.descriptor}</p>
            <Actions workHref="/b/#work" className="mt-8" />
            <p className="small mt-6">{site.rating}</p>
          </div>
          <div className="wrap mt-16 lg:mt-32">
            <Piece photo={photos.portrait} width={560} priority className="mx-auto" />
          </div>
        </section>

        {/* Intro: the text column, one tall photograph beside it. */}
        <section aria-label="Introduction" className="py-16 lg:py-24">
          <div className="wrap grid gap-y-16 lg:grid-cols-12 lg:gap-x-8">
            <div className="b-measure lg:col-span-6">
              <p className="lead">{opening}</p>
              {intro.map((t) => (
                <p key={t} className="mt-6">
                  {t}
                </p>
              ))}
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <Piece photo={photos.swan} width={454} sizes="(min-width: 1024px) 454px, 100vw" />
            </div>
          </div>
        </section>

        {/* The work: one group at a time. */}
        <section id="work" aria-labelledby="b-work" className="py-16 lg:py-24">
          <div className="wrap">
            <span className="hairline" aria-hidden />
            <h2 id="b-work" className="h2">
              The work
            </h2>
            <p className="lead b-measure mt-6">{home.portfolioIntro}</p>
            <div className="mt-12">
              <Work layout="set" />
            </div>
            <p className="mt-16">
              <Link href={`/b/artists/${roger.slug}/`} className="link inline-flex min-h-[44px] items-center">
                See {roger.name}&rsquo;s work
              </Link>
            </p>
          </div>
        </section>

        {/* How it works: four numbered steps, the design small beside them. */}
        <section id="how" aria-labelledby="b-how" className="py-16 lg:py-24">
          <div className="wrap grid gap-y-16 lg:grid-cols-12 lg:gap-x-8">
            <div className="b-measure lg:col-span-7">
              <h2 id="b-how" className="h2">
                How it works
              </h2>
              <ol className="mt-12 space-y-8">
                {home.steps.map((s) => (
                  <li key={s.n} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-4 sm:grid-cols-[3rem_minmax(0,1fr)]">
                    <span className="b-numeral" aria-hidden>
                      {s.n}
                    </span>
                    <div>
                      <h3 className="b-h4">{s.title}</h3>
                      <p className="mt-2">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="lg:col-span-3 lg:col-start-10 lg:pt-[5.5rem]">
              <Piece photo={photos.design} width={260} sizes="260px" />
            </div>
          </div>
        </section>

        {/* First time: the copy, and the one review quotation. */}
        <section aria-labelledby="b-first" className="py-16 lg:py-24">
          <div className="wrap grid gap-y-12 lg:grid-cols-12 lg:items-end lg:gap-x-8">
            <div className="b-measure lg:col-span-6">
              <h2 id="b-first" className="h2">
                {home.firstTime.title}
              </h2>
              <p className="mt-6">{home.firstTime.body}</p>
            </div>
            <figure className="b-measure rounded-card border border-hair bg-surface p-4 sm:p-8 lg:col-span-5 lg:col-start-8">
              <span className="hairline" aria-hidden />
              <blockquote className="lead">{home.firstTime.quote}</blockquote>
              <figcaption className="small mt-4">{home.firstTime.by}</figcaption>
            </figure>
          </div>
        </section>

        {/* Open dates: the line, and a slot until the studio supplies real dates. */}
        <section aria-labelledby="b-dates" className="py-16 lg:py-24">
          <div className="wrap">
            <div className="b-measure">
              <h2 id="b-dates" className="h2">
                Open dates
              </h2>
              <p className="mt-6">{home.availability}</p>
              <Slot text={slots.dates} className="mt-8 min-h-[128px]" />
            </div>
          </div>
        </section>

        {/* Visit: address, hours, phone, email, and the room. */}
        <section id="visit" aria-labelledby="b-visit" className="py-16 lg:py-24">
          <div className="wrap grid gap-y-16 lg:grid-cols-12 lg:gap-x-8">
            <div className="b-measure lg:col-span-6">
              <h2 id="b-visit" className="h2">
                Visit
              </h2>
              <address className="mt-8 not-italic">
                {site.street}
                <br />
                {site.city}
              </address>
              <p className="mt-1">
                <a href={site.maps} target="_blank" rel="noopener" className="link inline-flex min-h-[44px] items-center">
                  {labels.directions}
                </a>
              </p>
              <h3 className="label mt-10">Hours</h3>
              <HoursTable className="mt-3" />
              <CallButton className="mt-10 w-full max-w-[520px] sm:w-auto" />
              <p className="mt-4 break-words">
                <a href={`mailto:${site.email}`} className="link inline-flex min-h-[44px] items-center break-all">
                  {site.email}
                </a>
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <Slot text={slots.room} className="aspect-[4/5] w-full max-w-[454px]" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBar workHref="/b/#work" />
    </>
  );
}
