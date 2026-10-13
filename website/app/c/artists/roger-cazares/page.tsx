import { Footer, Header } from "@/components/shared/Chrome";
import { DirectionStrip } from "@/components/shared/DirectionStrip";
import { Slot } from "@/components/shared/Piece";
import { Reveal } from "@/components/shared/Reveal";
import { Gallery } from "@/components/c/Gallery";
import { ActionBar, VisitShort } from "@/components/c/Visit";
import { otherArtists, roger, slots } from "@/lib/site";

export const metadata = { title: "Roger Cazares, direction C" };

export default function ArtistC() {
  return (
    <>
      <DirectionStrip />
      <Header base="/c" />
      <main>
        <section className="py-14 lg:py-24">
          <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center lg:gap-20">
            <div>
              <Reveal y={24}>
                <h1 className="h1">{roger.name}</h1>
                <p className="lead mt-5">{roger.role}</p>
              </Reveal>
              <Reveal y={20} delay={0.12}>
                <div className="mt-8 max-w-measure space-y-5">
                  {roger.bio.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
                <p className="mt-6">
                  Instagram{" "}
                  <a href={roger.instagram.url} target="_blank" rel="noopener" className="link inline-flex min-h-[44px] items-center">
                    {roger.instagram.handle}
                  </a>
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Slot text={slots.atWork} className="aspect-[4/5] w-full max-w-[360px]" />
            </Reveal>
          </div>
        </section>

        <section id="work" className="border-t border-hair py-20 lg:py-28">
          <div className="wrap">
            <Gallery
              layout="column"
              heading={
                <>
                  <h2 className="h2">The work</h2>
                  <p className="h3 mt-5">{roger.name}</p>
                </>
              }
            />
          </div>
        </section>

        <section className="border-t border-hair py-20 lg:py-28">
          <div className="wrap">
            <Reveal>
              <h2 className="h2">Other artists</h2>
            </Reveal>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2">
              {otherArtists.map((name, i) => (
                <li key={name}>
                  <Reveal delay={i * 0.1}>
                    <h3 className="h3">{name}</h3>
                    <Slot text={slots.artist} className="mt-4 min-h-[140px]" />
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <VisitShort />
      </main>
      <Footer />
      <ActionBar />
    </>
  );
}
