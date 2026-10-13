"use client";

import Image from "next/image";
import { policies, site } from "@/lib/site";

// House bottom bar: copyright, policy links, BlakSheep Creative credit. The year is read in the
// browser so it rolls over without a redeploy.
export function FooterBar() {
  return (
    <div className="border-t border-hair pb-20 pt-6 text-sm text-muted md:pb-6">
      <div className="wrap grid items-center gap-4 text-center lg:grid-cols-3">
        <ul className="order-1 flex flex-wrap justify-center gap-x-4 lg:order-2">
          {policies.map((p) => (
            <li key={p}>
              <a href="#" className="inline-flex min-h-[44px] items-center hover:text-text">
                {p}
              </a>
            </li>
          ))}
        </ul>
        <p className="order-2 lg:order-1 lg:text-left" suppressHydrationWarning>
          © {new Date().getFullYear()} {site.name}
        </p>
        <a
          href="https://blaksheepcreative.com/"
          target="_blank"
          rel="noopener"
          aria-label="Website by BlakSheep Creative"
          className="order-3 inline-flex min-h-[44px] items-center justify-center gap-2 hover:text-text lg:justify-end"
        >
          Website by
          <Image src="/brand/blaksheep-creative-logo-white.svg" alt="BlakSheep Creative" width={90} height={32} className="h-8 w-auto" />
        </a>
      </div>
    </div>
  );
}
