import { home, labels, otherArtists, roger, site, slots } from "@/lib/site";
import { DirectionStrip } from "@/components/shared/DirectionStrip";
import { CallButton, Footer, Header, MobileBar } from "@/components/shared/Chrome";
import { Slot } from "@/components/shared/Piece";
import { Reveal } from "@/components/shared/Reveal";
import { Portfolio } from "@/components/a/Portfolio";

export const metadata = { title: "Roger Cazares · Direction A" };

export default function Page() {
  return (
    <div>
      <DirectionStrip />
      <Header base="/a" />
      <main>
        <section className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="hairline" />
            <h1 className="a-display">{roger.name}</h1>
            <p className="lead mt-6 text-muted">{roger.role}</p>
            <div className="mt-8 max-w-measure space-y-5">
              {roger.bio.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
            <p className="mt-6">
              Instagram{" "}
              <a href={roger.instagram.url} target="_blank" rel="noopener" className="link">
                {roger.instagram.handle}
              </a>
            </p>
          </div>
          <div className="lg:col-span-5">
            <Slot text={slots.atWork} className="aspect-[4/5] w-full max-w-[420px] lg:ml-auto" />
          </div>
        </section>

        <section id="work" className="border-t border-hair">
          <div className="wrap py-20 md:py-28">
            <h2 className="h2">The work</h2>
            <p className="mt-4 max-w-measure text-muted">{home.portfolioIntro}</p>
            <div className="mt-12">
              <Portfolio />
            </div>
          </div>
        </section>

        <section className="border-t border-hair">
          <div className="wrap py-20 md:py-28">
            <h2 className="h2">Other artists</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {otherArtists.map((name, i) => (
                <Reveal key={name} delay={i * 0.12}>
                  <h3 className="h3">{name}</h3>
                  <Slot text={slots.artist} className="mt-4 min-h-[160px]" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="visit" className="border-t border-hair">
          <div className="wrap py-20 md:py-28">
            <h2 className="h2">Visit</h2>
            <p className="lead mt-5">
              {site.street}, {site.city}
            </p>
            <p className="mt-3 max-w-measure text-muted">{site.hoursLine}</p>
            <div className="btn-pair mt-8">
              <a href={site.maps} target="_blank" rel="noopener" className="btn btn-primary">
                {labels.directions}
              </a>
              <CallButton />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBar workHref="/a/artists/roger-cazares/#work" />
    </div>
  );
}
