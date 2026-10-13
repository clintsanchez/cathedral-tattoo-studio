import { DirectionStrip } from "@/components/shared/DirectionStrip";
import { CallButton, Footer, Header, MobileBar } from "@/components/shared/Chrome";
import { Slot } from "@/components/shared/Piece";
import { Work } from "@/components/b/Work";
import { home, otherArtists, roger, site, slots } from "@/lib/site";

export const metadata = { title: "Roger Cazares, direction B" };

export default function RogerB() {
  return (
    <>
      <DirectionStrip />
      <Header base="/b" mark />
      <main>
        {/* The artist: name, role, bio. A slot stands where his portrait would go. */}
        <section aria-labelledby="b-name" className="py-16 lg:py-24">
          <div className="wrap grid gap-y-16 lg:grid-cols-12 lg:gap-x-8">
            <div className="b-measure lg:col-span-6">
              <h1 id="b-name" className="h1">
                {roger.name}
              </h1>
              <p className="lead mt-6">{roger.role}</p>
              {roger.bio.map((t) => (
                <p key={t} className="mt-6">
                  {t}
                </p>
              ))}
              <p className="mt-6">
                Instagram{" "}
                <a href={roger.instagram.url} target="_blank" rel="noopener" className="link inline-flex min-h-[44px] items-center">
                  {roger.instagram.handle}
                </a>
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <Slot text={slots.atWork} className="aspect-[4/5] w-full max-w-[454px]" />
            </div>
          </div>
        </section>

        {/* His work: one group at a time, the first piece large. */}
        <section id="work" aria-labelledby="b-work" className="py-16 lg:py-24">
          <div className="wrap">
            <span className="hairline" aria-hidden />
            <h2 id="b-work" className="h2">
              The work
            </h2>
            <p className="lead b-measure mt-6">{home.portfolioIntro}</p>
            <div className="mt-12">
              <Work layout="feature" />
            </div>
          </div>
        </section>

        {/* Other artists: names only. Nothing is on file, so nothing is said. */}
        <section aria-labelledby="b-others" className="py-16 lg:py-24">
          <div className="wrap">
            <h2 id="b-others" className="h2">
              Other artists
            </h2>
            <ul className="mt-12 grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:max-w-[552px] lg:gap-x-8">
              {otherArtists.map((name) => (
                <li key={name}>
                  <Slot text={slots.artist} className="aspect-[4/5] w-full max-w-[328px]" />
                  <h3 className="h3 mt-4">{name}</h3>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Visit, short. */}
        <section id="visit" aria-labelledby="b-visit" className="py-16 lg:py-24">
          <div className="wrap">
            <div className="b-measure">
              <h2 id="b-visit" className="h2">
                Visit
              </h2>
              <p className="mt-6">{site.hoursLine}</p>
              <p className="mt-4">
                <a href={site.maps} target="_blank" rel="noopener" className="link inline-flex min-h-[44px] items-center">
                  {site.street}, {site.city}
                </a>
              </p>
              <CallButton className="mt-6 w-full max-w-[520px] sm:w-auto" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBar workHref="/b/#work" />
    </>
  );
}
