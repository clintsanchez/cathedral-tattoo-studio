import Image from "next/image";
import Link from "next/link";
import { groups, home, hours, labels, photos, site, slots } from "@/lib/site";
import { DirectionStrip } from "@/components/shared/DirectionStrip";
import { Footer, MobileBar } from "@/components/shared/Chrome";
import { Arrow, Nav, Rise } from "@/components/r2/Bits";
import { Hero } from "@/components/f/Hero";

export const metadata = { title: "Direction F: Manifesto" };

// A title spread letter by letter across the width, every third letter italic.
function Wide({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`f-wide ${className}`} aria-label={text}>
      {text.split("").map((ch, i) =>
        ch === " " ? (
          // a word break: wider than the gap between letters
          <span key={i} className="w-[3.5vw] shrink-0" aria-hidden />
        ) : i % 3 === 1 ? (
          <i key={i} aria-hidden>{ch}</i>
        ) : (
          <span key={i} aria-hidden>{ch}</span>
        ),
      )}
    </span>
  );
}

const tilt = [-2.5, 1.5, -1, 2.5];
const circles = groups.slice(0, 4);

function Circle({ i }: { i: number }) {
  const g = circles[i];
  return (
    <Rise delay={0.1 + i * 0.1}>
      <Link href="/f/artists/roger-cazares/#work" className="f-circle mx-auto flex aspect-square w-full max-w-[300px] flex-col items-center justify-center p-8 text-center">
        <span className="r2-caps text-white/45">00{i + 1}</span>
        <span className="f-serif mt-3 text-[1.625rem] uppercase text-text md:text-[2rem]">{g.name}</span>
        <span className="mt-3 text-sm text-white/55">{g.pieces[0].caption}</span>
      </Link>
    </Rise>
  );
}

export default function Page() {
  return (
    <div>
      <DirectionStrip />
      <div className="relative">
        <Nav base="/f" />
        <main>
          <Hero />

          {/* After Silver Order: short paragraphs under gold initials, set between the rules. */}
          <section id="intro" className="relative border-t border-white/10">
            <div className="f-rules absolute inset-0" aria-hidden />
            <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-3 md:gap-10 md:px-10 md:py-36">
              {home.intro.map((t, i) => (
                <Rise key={i} delay={i * 0.14}>
                  <p className="f-drop max-w-[380px] text-[1.0625rem] leading-relaxed text-white/80">{t}</p>
                </Rise>
              ))}
            </div>
          </section>

          {/* After Mythos: the title spread across the screen, a row of pale cards beneath it. */}
          <section id="how" className="relative overflow-hidden">
            <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
              <Rise>
                <h2 className="text-[9vw] text-text md:text-[6.2vw]">
                  <Wide text="How it works" />
                </h2>
              </Rise>
              <div className="-mx-5 mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 md:mx-0 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:px-0">
                {home.steps.map((s, i) => (
                  <Rise key={s.n} delay={i * 0.12} className="w-[78vw] max-w-[320px] shrink-0 snap-center md:w-auto md:max-w-none">
                    <article className="f-card flex h-full min-h-[340px] flex-col p-7" style={{ transform: `rotate(${tilt[i]}deg)` }}>
                      <div className="flex items-start justify-between">
                        <span className="r2-caps text-black/55">0{s.n}</span>
                        <span className="h-4 w-4 rounded-full border border-black/40" aria-hidden />
                      </div>
                      <h3 className="f-serif mt-10 text-[2.125rem] uppercase leading-[0.95]">{s.title}</h3>
                      <p className="mt-auto pt-8 text-[0.9375rem] leading-relaxed text-black/70">{s.body}</p>
                    </article>
                  </Rise>
                ))}
              </div>
            </div>
          </section>

          {/* After Mythos, third frame: one tall piece with four numbered rounds beside it. */}
          <section id="work" className="relative overflow-hidden border-t border-white/10">
            <div className="f-rules absolute inset-0" aria-hidden />
            <div className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
              <Rise>
                <h2 className="text-[9vw] text-text md:text-[6.2vw]">
                  <Wide text="The work" />
                </h2>
                <p className="mt-8 max-w-[420px] text-[0.9375rem] leading-relaxed text-white/70">{home.portfolioIntro}</p>
              </Rise>
              <div className="mt-16 grid items-center gap-8 lg:grid-cols-[1fr_minmax(0,400px)_1fr] lg:gap-12">
                <div className="grid grid-cols-2 gap-5 lg:grid-cols-1 lg:gap-12">
                  <Circle i={0} />
                  <Circle i={2} />
                </div>
                <Rise className="order-first mx-auto w-full max-w-[400px] lg:order-none">
                  <figure className="relative">
                    <div className="f-haze absolute -inset-[26%]" aria-hidden />
                    <div className="relative aspect-[1496/1680] overflow-hidden">
                      <Image src={photos.sword.src} alt={photos.sword.alt} fill sizes="400px" className="object-cover" />
                    </div>
                    <figcaption className="relative mt-3 text-sm text-white/55">{photos.sword.caption}</figcaption>
                  </figure>
                </Rise>
                <div className="grid grid-cols-2 gap-5 lg:grid-cols-1 lg:gap-12">
                  <Circle i={1} />
                  <Circle i={3} />
                </div>
              </div>
              <p className="mt-16 text-center">
                <Link href="/f/artists/roger-cazares/" className="r2-caps inline-flex min-h-[48px] items-center gap-3 border-b border-gold text-white hover:text-bright">
                  See Roger Cazares&apos;s work <Arrow className="text-base" />
                </Link>
              </p>
            </div>
          </section>

          <section className="border-t border-white/10">
            <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:px-10 md:py-36 lg:grid-cols-12">
              <Rise className="lg:col-span-8">
                <blockquote className="f-serif text-[2.75rem] italic text-text md:text-[5rem]">“{home.firstTime.quote}”</blockquote>
                <p className="r2-caps mt-8 text-white/55">{home.firstTime.by}</p>
              </Rise>
              <Rise delay={0.15} className="lg:col-span-4 lg:self-end">
                <p className="r2-caps text-gold">{home.firstTime.title}</p>
                <p className="mt-5 max-w-sm text-white/75">{home.firstTime.body}</p>
              </Rise>
            </div>
          </section>

          <section id="visit" className="relative border-t border-white/10">
            <div className="f-rules absolute inset-0" aria-hidden />
            <div className="relative mx-auto grid max-w-[1440px] gap-14 px-5 py-24 md:grid-cols-3 md:px-10 md:py-36">
              <Rise>
                <h2 className="r2-caps text-white/55">Visit</h2>
                <p className="f-serif mt-6 text-[2.5rem] uppercase text-text">
                  {site.street}
                  <br />
                  {site.city}
                </p>
                <a href={site.maps} target="_blank" rel="noopener" className="r2-caps mt-8 inline-flex min-h-[52px] items-center gap-4 bg-white px-7 text-black transition-colors duration-200 hover:bg-bright">
                  {labels.directions} <Arrow className="text-base" />
                </a>
              </Rise>
              <Rise delay={0.12}>
                <p className="r2-caps text-white/55">Hours</p>
                <table className="mt-6 w-full max-w-xs text-[0.9375rem]">
                  <tbody>
                    {[...hours.slice(1), hours[0]].map((d) => (
                      <tr key={d.day} className="border-b border-white/12">
                        <th scope="row" className="py-2 text-left font-normal text-white">
                          {d.day}
                        </th>
                        <td className="py-2 text-right text-white/60">{d.text}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-6 text-sm text-white/60">{home.availability}</p>
                <p className="slot mt-3">{slots.dates}</p>
              </Rise>
              <Rise delay={0.24}>
                <p className="r2-caps text-white/55">Call or text</p>
                <a href={site.tel} className="f-serif mt-6 block text-[3rem] text-text hover:text-bright">
                  {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="mt-4 block break-all text-[0.9375rem] text-white/70 underline underline-offset-4 hover:text-white">
                  {site.email}
                </a>
              </Rise>
            </div>
          </section>
        </main>
        <Footer />
        <MobileBar workHref="/f/#work" />
      </div>
    </div>
  );
}
