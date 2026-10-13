import Image from "next/image";
import Link from "next/link";
import { home, hours, labels, photos, site, slots } from "@/lib/site";
import { DirectionStrip } from "@/components/shared/DirectionStrip";
import { Footer, MobileBar } from "@/components/shared/Chrome";
import { Arrow, Nav, Rise } from "@/components/r2/Bits";
import { Hero } from "@/components/e/Hero";
import { Flow } from "@/components/e/Flow";

export const metadata = { title: "Direction E: The artifact" };

function Step({ i }: { i: number }) {
  const s = home.steps[i];
  return (
    <Rise delay={0.1 + i * 0.1}>
      <div className="e-glass p-7">
        <p className="e-serif text-[2rem] italic text-gold">0{s.n}</p>
        <h3 className="mt-3 text-[1.25rem] font-semibold leading-snug text-white">{s.title}</h3>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/70">{s.body}</p>
      </div>
    </Rise>
  );
}

export default function Page() {
  return (
    <div>
      <DirectionStrip />
      <div className="relative">
        <Nav base="/e" />
        <main>
          <Hero />

          {/* After Bee, second state: one object in the middle, four small cards around it. */}
          <section id="how" className="relative overflow-hidden">
            <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
              <Rise>
                <h2 className="e-wide text-center text-[1.75rem] text-white md:text-[3.25rem]">How it works</h2>
              </Rise>
              <div className="mt-16 grid items-center gap-6 lg:grid-cols-[1fr_minmax(0,340px)_1fr] lg:gap-10">
                <div className="grid gap-6 lg:translate-y-10">
                  <Step i={0} />
                  <Step i={2} />
                </div>
                <Rise className="order-first mx-auto w-full max-w-[300px] lg:order-none lg:max-w-none">
                  <figure className="-rotate-3">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[18px] border border-white/15 shadow-[0_40px_90px_rgba(0,0,0,0.7)]">
                      <Image src={photos.design.src} alt={photos.design.alt} fill sizes="340px" className="object-cover" />
                    </div>
                    <figcaption className="mt-4 text-center text-sm text-white/55">{photos.design.caption}</figcaption>
                  </figure>
                </Rise>
                <div className="grid gap-6 lg:-translate-y-10">
                  <Step i={1} />
                  <Step i={3} />
                </div>
              </div>
            </div>
          </section>

          <section id="work" className="e-stage relative overflow-hidden">
            <div className="py-24 md:py-36">
              <div className="mx-auto max-w-[1440px] px-5 text-center md:px-10">
                <Rise>
                  <h2 className="e-display text-[19vw] text-text md:text-[11vw]">The work</h2>
                  <p className="mx-auto mt-6 max-w-[440px] text-[0.9375rem] leading-relaxed text-white/70">{home.portfolioIntro}</p>
                </Rise>
              </div>
              <div className="mt-14">
                <Flow />
              </div>
              <p className="mt-12 text-center">
                <Link href="/e/artists/roger-cazares/" className="r2-caps inline-flex min-h-[48px] items-center gap-3 border-b border-gold text-white hover:text-bright">
                  See Roger Cazares&apos;s work <Arrow className="text-base" />
                </Link>
              </p>
            </div>
          </section>

          <section className="relative">
            <div className="mx-auto max-w-[1100px] px-5 py-24 text-center md:px-10 md:py-36">
              <Rise>
                <p className="r2-caps text-gold">{home.firstTime.title}</p>
                <blockquote className="e-serif mt-8 text-[2.5rem] text-white md:text-[4.5rem]">“{home.firstTime.quote}”</blockquote>
                <p className="r2-caps mt-8 text-white/55">{home.firstTime.by}</p>
                <p className="mx-auto mt-8 max-w-[440px] text-white/75">{home.firstTime.body}</p>
              </Rise>
            </div>
          </section>

          <section id="visit" className="border-t border-white/10">
            <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 md:grid-cols-3 md:px-10 md:py-36">
              <Rise>
                <h2 className="e-wide text-[1.5rem] text-white">Visit</h2>
                <p className="e-serif mt-6 text-[2.25rem] text-white">
                  {site.street}
                  <br />
                  {site.city}
                </p>
                <a href={site.maps} target="_blank" rel="noopener" className="e-gold r2-caps mt-8 inline-flex min-h-[52px] items-center gap-3 px-8">
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
                <a href={site.tel} className="e-serif mt-6 block text-[2.75rem] text-white hover:text-bright">
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
        <MobileBar workHref="/e/#work" />
      </div>
    </div>
  );
}
