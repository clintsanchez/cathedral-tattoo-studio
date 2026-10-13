import Image from "next/image";
import Link from "next/link";
import { groups, home, photos } from "@/lib/site";
import { DirectionStrip } from "@/components/shared/DirectionStrip";
import { Footer, MobileBar } from "@/components/shared/Chrome";
import { Arrow, Nav, Rise } from "@/components/r2/Bits";
import { Visit } from "@/components/r2/Visit";
import { Hero } from "@/components/i/Hero";

export const metadata = { title: "Direction I: The interior" };

// Three pieces stood in a row, as the template stands three blades.
const three = [photos.sword, photos.swan, photos.portrait];
const worn = groups.slice(0, 3);
const [sorted, credited] = home.portfolioIntro.split(". ");

export default function Page() {
  return (
    <div>
      <DirectionStrip />
      <div className="relative">
        <Nav base="/i" />
        <main>
          <Hero />

          <section id="work" className="relative overflow-hidden bg-black">
            <div className="i-glow pointer-events-none absolute inset-x-0 bottom-0 h-[55%]" aria-hidden />
            <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:px-10 md:py-36 lg:grid-cols-12 lg:px-[72px]">
              <Rise className="lg:col-span-4">
                <p className="r2-caps flex items-center gap-3 text-white/55">
                  <span className="h-px w-6 bg-gold" aria-hidden /> The work
                </p>
                <h2 className="i-display mt-6 max-w-[12ch] text-[2.25rem] text-white md:text-[2.75rem]">{sorted}.</h2>
                <p className="mt-6 max-w-[260px] text-sm leading-relaxed text-white/60">{credited}</p>
              </Rise>
              <div className="grid grid-cols-3 gap-4 md:gap-10 lg:col-span-8">
                {three.map((ph, i) => (
                  <Rise key={ph.src} delay={i * 0.14} className={i === 1 ? "mt-10 md:mt-20" : ""}>
                    <Link href="/i/artists/roger-cazares/#work" className="i-blade block">
                      <div className="relative aspect-[9/20] overflow-hidden">
                        <Image src={ph.src} alt={ph.alt} fill sizes="(min-width: 1024px) 18vw, 30vw" className="object-cover" />
                      </div>
                      <p className="mt-5 flex items-baseline gap-3 border-t border-white/20 pt-4">
                        <span className="i-serif text-lg italic text-white/45">0{i + 1}</span>
                        <span className="text-sm leading-snug text-white/80">{ph.caption}</span>
                      </p>
                    </Link>
                  </Rise>
                ))}
              </div>
            </div>
          </section>

          {/* After the template's last screen: one very large word, barely there, behind three figures. */}
          <section className="relative overflow-hidden bg-black">
            <p className="i-ghost pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center uppercase" aria-hidden>
              Work
            </p>
            <div className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36 lg:px-[72px]">
              <div className="grid divide-white/12 md:grid-cols-3 md:divide-x">
                {worn.map((g, i) => (
                  <Rise key={g.id} delay={i * 0.14} className="px-0 py-8 md:px-10 md:py-0">
                    <Link href="/i/artists/roger-cazares/#work" className="i-blade group block text-center">
                      <div className="relative mx-auto aspect-[3/4] w-full max-w-[300px] overflow-hidden">
                        <Image src={g.pieces[i === 0 ? 2 : i === 1 ? 1 : 0].src} alt={g.pieces[0].alt} fill sizes="300px" className="object-cover" />
                      </div>
                      <h3 className="r2-caps mt-8 text-white">{g.name}</h3>
                      <p className="mt-3 inline-flex items-center gap-2 text-sm text-white/55 transition-colors duration-200 group-hover:text-gold">
                        See Roger Cazares&apos;s work <Arrow />
                      </p>
                    </Link>
                  </Rise>
                ))}
              </div>
            </div>
          </section>

          <section id="how" className="border-t border-white/10 bg-black">
            <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36 lg:px-[72px]">
              <Rise>
                <p className="r2-caps flex items-center gap-3 text-white/55">
                  <span className="h-px w-6 bg-gold" aria-hidden /> How it works
                </p>
              </Rise>
              <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-4">
                {home.steps.map((s, i) => (
                  <Rise key={s.n} delay={i * 0.12}>
                    <p className="i-serif text-lg italic text-white/45">0{s.n}</p>
                    <h3 className="i-display mt-4 text-[1.5rem] text-white">{s.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/65">{s.body}</p>
                  </Rise>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-white/10 bg-black">
            <div className="mx-auto max-w-[1100px] px-5 py-24 text-center md:px-10 md:py-36">
              <Rise>
                <p className="r2-caps text-gold">{home.firstTime.title}</p>
                <blockquote className="i-display mt-8 text-[2rem] text-white md:text-[3.5rem]">“{home.firstTime.quote}”</blockquote>
                <p className="r2-caps mt-8 text-white/55">{home.firstTime.by}</p>
                <p className="mx-auto mt-8 max-w-[440px] text-white/75">{home.firstTime.body}</p>
              </Rise>
            </div>
          </section>

          <Visit serif="i-serif" />
        </main>
        <Footer />
        <MobileBar workHref="/i/#work" />
      </div>
    </div>
  );
}
