import Image from "next/image";
import Link from "next/link";
import { groups, home, photos } from "@/lib/site";
import { DirectionStrip } from "@/components/shared/DirectionStrip";
import { Footer, MobileBar } from "@/components/shared/Chrome";
import { Arrow, Nav, Rise } from "@/components/r2/Bits";
import { Visit } from "@/components/r2/Visit";
import { Hero } from "@/components/g/Hero";

export const metadata = { title: "Direction G: The machine" };

// The first three steps sit in the chequer beside a photograph each; the fourth closes the section.
const chequer = [
  { step: home.steps[0], photo: photos.design },
  { step: home.steps[1], photo: photos.portrait },
  { step: home.steps[2], photo: photos.swan },
];

export default function Page() {
  return (
    <div>
      <DirectionStrip />
      <div className="relative">
        <Nav base="/g" />
        <main>
          <Hero />

          {/* After the template's second state: the ground turns to a flat colour, a chequer of text and image on the right. */}
          <section id="how" className="g-gold">
            <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-12 lg:px-[72px]">
              <Rise className="lg:col-span-5">
                <h2 className="g-display text-[15vw] md:text-[clamp(3.5rem,6.4vw,6rem)]">
                  How <i>it</i>
                  <br />
                  works
                </h2>
                <div className="mt-12 max-w-[360px] border-t border-black/30 pt-6">
                  <p className="r2-caps text-black/60">04</p>
                  <h3 className="g-serif mt-3 text-[1.75rem]">{home.steps[3].title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-black/75">{home.steps[3].body}</p>
                </div>
              </Rise>
              <div className="lg:col-span-7">
                {chequer.map(({ step, photo }, i) => (
                  <Rise key={step.n} delay={i * 0.12}>
                    <div className="grid grid-cols-2">
                      <div className={`flex flex-col justify-center p-5 md:p-8 ${i % 2 ? "order-2 bg-black text-white" : "bg-[#0a0a0a]/[0.08]"}`}>
                        <p className={`r2-caps ${i % 2 ? "text-white/55" : "text-black/60"}`}>0{step.n}</p>
                        <h3 className="g-serif mt-3 text-[1.375rem] md:text-[1.75rem]">{step.title}</h3>
                        <p className={`mt-3 text-sm leading-relaxed md:text-[0.9375rem] ${i % 2 ? "text-white/70" : "text-black/75"}`}>{step.body}</p>
                      </div>
                      <div className={`relative aspect-square ${i % 2 ? "order-1" : ""}`}>
                        <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 30vw, 50vw" className="object-cover" />
                      </div>
                    </div>
                  </Rise>
                ))}
              </div>
            </div>
          </section>

          <section id="work" className="bg-black">
            <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36 lg:px-[72px]">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
                <Rise>
                  <h2 className="g-display text-[15vw] text-white md:text-[clamp(3.5rem,6.4vw,6rem)]">
                    The <i>work</i>
                  </h2>
                </Rise>
                <Rise delay={0.12}>
                  <p className="max-w-[360px] text-[0.9375rem] leading-relaxed text-white/70 lg:ml-auto">{home.portfolioIntro}</p>
                </Rise>
              </div>
              <div className="mt-16 grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
                {groups.slice(0, 4).map((g, i) => (
                  <Rise key={g.id} delay={i * 0.1}>
                    <Link href="/g/artists/roger-cazares/#work" className="g-card group block">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <Image src={g.pieces[i === 3 ? 0 : i === 0 ? 1 : 0].src} alt={g.pieces[0].alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                      </div>
                      <div className="g-tile flex items-center justify-between gap-4 p-5">
                        <h3 className="text-[1.0625rem] font-semibold leading-tight text-white">{g.name}</h3>
                        <Arrow className="shrink-0 text-xl text-white transition-colors duration-200 group-hover:text-gold" />
                      </div>
                    </Link>
                  </Rise>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-white/10 bg-black">
            <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:px-10 md:py-36 lg:grid-cols-12 lg:px-[72px]">
              <Rise className="lg:col-span-4">
                <p className="r2-caps text-gold">{home.firstTime.title}</p>
                <p className="mt-6 max-w-sm text-white/75">{home.firstTime.body}</p>
              </Rise>
              <Rise delay={0.15} className="lg:col-span-8">
                <blockquote className="g-serif text-[2.25rem] text-white md:text-[3.75rem]">
                  “<i>{home.firstTime.quote}</i>”
                </blockquote>
                <p className="r2-caps mt-8 text-white/55">{home.firstTime.by}</p>
              </Rise>
            </div>
          </section>

          <Visit serif="g-serif" />
        </main>
        <Footer />
        <MobileBar workHref="/g/#work" />
      </div>
    </div>
  );
}
