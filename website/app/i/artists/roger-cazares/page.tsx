import { DirectionStrip } from "@/components/shared/DirectionStrip";
import { Footer, MobileBar } from "@/components/shared/Chrome";
import { Nav } from "@/components/r2/Bits";
import { Artist } from "@/components/r2/Artist";

export const metadata = { title: "Roger Cazares · Direction I" };

export default function Page() {
  return (
    <div>
      <DirectionStrip />
      <div className="relative">
        <Nav base="/i" />
        <Artist display="i-display" serif="i-serif" />
        <Footer />
        <MobileBar workHref="/i/artists/roger-cazares/#work" />
      </div>
    </div>
  );
}
