import { home, hours, labels, site, slots } from "@/lib/site";
import { Arrow, Rise } from "./Bits";

// The visit block shared by the third-round directions (G, H, I): address, hours, phone.
// `serif` is the direction's own display class for the large lines.
export function Visit({ serif }: { serif: string }) {
  return (
    <section id="visit" className="border-t border-white/10">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 md:grid-cols-3 md:px-10 md:py-36 lg:px-[72px]">
        <Rise>
          <h2 className="r2-caps text-white/55">Visit</h2>
          <p className={`${serif} mt-6 text-[2rem] text-white`}>
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
          <a href={site.tel} className={`${serif} mt-6 block text-[2.5rem] text-white hover:text-bright`}>
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="mt-4 block break-all text-[0.9375rem] text-white/70 underline underline-offset-4 hover:text-white">
            {site.email}
          </a>
        </Rise>
      </div>
    </section>
  );
}
