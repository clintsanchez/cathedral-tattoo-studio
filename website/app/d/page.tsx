import Image from "next/image";
import Link from "next/link";
import { groups, home, hours, labels, site, slots } from "@/lib/site";
import { DirectionStrip } from "@/components/shared/DirectionStrip";
import { Footer, MobileBar } from "@/components/shared/Chrome";
import { Arrow, Nav, Rise } from "@/components/r2/Bits";
import { Hero } from "@/components/d/Hero";

export const metadata = { title: "Direction D: Noir" };

// The first three kinds of piece, each as a tall card.
const cards = groups.slice(0, 3);
const [sorted, credited] = home.portfolioIntro.split(". ");

export default function Page() {
  return (
    <div>
      <DirectionStrip />
      <div className="relative">
        <Nav base="/d" />
        <main>
          <Hero />

          <section id="work" className="relative bg-gradient-to-b from-[#06090a] to-black">
            <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36 xl:px-[150px]">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
                <Rise>
                  <p className="r2-caps text-white/55">The work</p>
                  <h2 className="d-serif mt-6 max-w-[14ch] text-[2.75rem] text-white md:text-[4.25rem]">{sorted}.</h2>
                </Rise>
                <Rise delay={0.15}>
                  <p className="max-w-[340px] text-[0.9375rem] leading-relaxed text-white/70 lg:ml-auto">{credited}</p>
                </Rise>
              </div>
              <div className="mt-20 grid gap-x-8 gap-y-14 md:grid-cols-3">
                {cards.map((g, i) => (
                  <Rise key={g.id} delay={i * 0.14}>
                    <div>
                      <Link href="/d/artists/roger-cazares/#work" className="d-card block">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-[30px]">
                          <Image src={g.pieces[0].src} alt={g.pieces[0].alt} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
                          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black via-black/75 to-transparent p-6 pt-28">
                            <div>
                              <h3 className="text-[1.375rem] font-semibold leading-tight text-white">{g.name}</h3>
                              <p className="mt-1 text-sm text-white/65">{g.pieces[0].caption}</p>
                            </div>
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-lg text-white">
                              <Arrow />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </Rise>
                ))}
              </div>
            </div>
          </section>

          <section id="how" className="bg-black">
            <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36 xl:px-[150px]">
              <Rise>
                <p className="r2-caps text-white/55">How it works</p>
              </Rise>
              <div className="mt-12 grid gap-x-10 gap-y-12 border-t border-white/15 pt-10 md:grid-cols-2 xl:grid-cols-4">
                {home.steps.map((s, i) => (
                  <Rise key={s.n} delay={i * 0.12}>
                    <div>
                      <p className="d-serif text-[2.5rem] italic text-gold">0{s.n}</p>
                      <h3 className="d-serif mt-5 text-[1.75rem] text-white">{s.title}</h3>
                      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/65">{s.body}</p>
                    </div>
                  </Rise>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-white/10 bg-[#06090a]">
            <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:px-10 md:py-36 lg:grid-cols-12 xl:px-[150px]">
              <Rise className="lg:col-span-4">
                <p className="r2-caps text-white/55">{home.firstTime.title}</p>
                <p className="mt-6 max-w-sm text-white/75">{home.firstTime.body}</p>
              </Rise>
              <Rise delay={0.15} className="lg:col-span-8">
                <blockquote className="d-serif text-[2.25rem] italic text-white md:text-[3.75rem]">“{home.firstTime.quote}”</blockquote>
                <p className="r2-caps mt-8 text-white/55">{home.firstTime.by}</p>
              </Rise>
            </div>
          </section>

          <section id="visit" className="relative overflow-hidden bg-black">
            <p className="d-ghost pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center uppercase" aria-hidden>
              Visit
            </p>
            <div className="relative mx-auto grid max-w-[1440px] gap-14 px-5 py-28 md:grid-cols-3 md:px-10 md:py-44 xl:px-[150px]">
              <Rise>
                <h2 className="r2-caps text-white/55">Visit</h2>
                <p className="d-serif mt-6 text-[1.875rem] text-white">
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
                <a href={site.tel} className="d-serif mt-6 block text-[2.25rem] text-white hover:text-bright">
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
        <MobileBar workHref="/d/#work" />
      </div>
    </div>
  );
}
