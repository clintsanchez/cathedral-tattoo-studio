import Link from "next/link";
import { Footer, Header } from "@/components/shared/Chrome";
import { DirectionStrip } from "@/components/shared/DirectionStrip";
import { Piece, Slot } from "@/components/shared/Piece";
import { Reveal } from "@/components/shared/Reveal";
import { Doors } from "@/components/c/Doors";
import { Gallery } from "@/components/c/Gallery";
import { Hero } from "@/components/c/Hero";
import { Steps } from "@/components/c/Steps";
import { ActionBar, Visit } from "@/components/c/Visit";
import { home, photos, roger, slots } from "@/lib/site";

export const metadata = { title: "Direction C: Three doors" };

export default function HomeC() {
  return (
    <>
      <DirectionStrip />
      <Header base="/c" />
      <main>
        <Hero />
        <Doors />

        <section id="work" className="border-t border-hair py-20 lg:py-28">
          <div className="wrap">
            <Gallery
              layout="row"
              heading={
                <Reveal>
                  <h2 className="h2">The work</h2>
                  <p className="lead mt-5 max-w-measure">{home.portfolioIntro}</p>
                </Reveal>
              }
            />
            <p className="mt-10">
              <Link href={`/c/artists/${roger.slug}/`} className="link inline-flex min-h-[44px] items-center">
                See {roger.name}&rsquo;s work
              </Link>
            </p>
          </div>
        </section>

        <section id="how" className="border-t border-hair py-20 lg:py-28">
          <div className="wrap">
            <Reveal>
              <h2 className="h2">How it works</h2>
            </Reveal>
            <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-24">
              <Steps />
              <Reveal className="lg:pt-1">
                <Piece photo={photos.design} width={220} sizes="220px" className="w-[180px] lg:w-[220px]" />
              </Reveal>
            </div>
          </div>
        </section>

        <section id="dates" className="border-t border-hair py-20 lg:py-28">
          <div className="wrap grid gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="h2">Open dates</h2>
              <p className="lead mt-5 max-w-measure">{home.availability}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <Slot text={slots.dates} className="min-h-[160px]" />
            </Reveal>
          </div>
        </section>

        <Visit />
      </main>
      <Footer />
      <ActionBar />
    </>
  );
}
