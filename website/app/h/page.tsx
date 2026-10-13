import Image from "next/image";
import Link from "next/link";
import { groups, home } from "@/lib/site";
import { DirectionStrip } from "@/components/shared/DirectionStrip";
import { Footer, MobileBar } from "@/components/shared/Chrome";
import { Arrow, Nav, Rise } from "@/components/r2/Bits";
import { Visit } from "@/components/r2/Visit";
import { Hero } from "@/components/h/Hero";

export const metadata = { title: "Direction H: The knight" };

export default function Page() {
  return (
    <div>
      <DirectionStrip />
      <div className="relative">
        <Nav base="/h" />
        <main>
          <Hero />

          <section id="work" className="bg-black">
            <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36 lg:px-[72px]">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
                <Rise>
                  <h2 className="h-display text-[17vw] text-text md:text-[clamp(4rem,9vw,8.5rem)]">The work</h2>
                </Rise>
                <Rise delay={0.12}>
                  <p className="max-w-[360px] text-[0.9375rem] leading-relaxed text-white/70 lg:ml-auto">{home.portfolioIntro}</p>
                </Rise>
              </div>
              <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {groups.slice(0, 4).map((g, i) => (
                  <Rise key={g.id} delay={i * 0.1} className={i % 2 ? "lg:mt-14" : ""}>
                    <Link href="/h/artists/roger-cazares/#work" className="h-tile block p-3 pb-5">
                      <div className="relative aspect-[3/4] overflow-hidden rounded-[14px]">
                        <Image src={g.pieces[i === 0 ? 1 : 0].src} alt={g.pieces[0].alt} fill sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 100vw" className="object-cover" />
                      </div>
                      <div className="mt-4 flex items-end justify-between gap-3 px-2">
                        <h3 className="h-serif text-[1.125rem] uppercase">{g.name}</h3>
                        <Arrow className="shrink-0 text-2xl" />
                      </div>
                    </Link>
                  </Rise>
                ))}
              </div>
            </div>
          </section>

          <section id="how" className="border-t border-white/10 bg-black">
            <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36 lg:px-[72px]">
              <Rise>
                <h2 className="h-display text-[13vw] text-text md:text-[clamp(3rem,6.4vw,6rem)]">How it works</h2>
              </Rise>
              <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2 xl:grid-cols-4">
                {home.steps.map((s, i) => (
                  <Rise key={s.n} delay={i * 0.12}>
                    <p className="h-display text-[6.5rem] text-gold">0{s.n}</p>
                    <h3 className="h-serif mt-6 text-[1.5rem] uppercase text-text">{s.title}</h3>
                    <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/65">{s.body}</p>
                  </Rise>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-gold text-black">
            <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-12 lg:px-[72px]">
              <Rise className="lg:col-span-8">
                <blockquote className="h-serif text-[2.25rem] uppercase md:text-[4rem]">“{home.firstTime.quote}”</blockquote>
                <p className="r2-caps mt-8 text-black/65">{home.firstTime.by}</p>
              </Rise>
              <Rise delay={0.15} className="lg:col-span-4 lg:self-end">
                <p className="r2-caps">{home.firstTime.title}</p>
                <p className="mt-5 max-w-sm text-black/80">{home.firstTime.body}</p>
              </Rise>
            </div>
          </section>

          <Visit serif="h-serif" />
        </main>
        <Footer />
        <MobileBar workHref="/h/#work" />
      </div>
    </div>
  );
}
