import { DirectionStrip } from "@/components/shared/DirectionStrip";
import { Footer, MobileBar } from "@/components/shared/Chrome";
import { Nav } from "@/components/r2/Bits";
import { Artist } from "@/components/r2/Artist";

export const metadata = { title: "Roger Cazares · Direction H" };

export default function Page() {
  return (
    <div>
      <DirectionStrip />
      <div className="relative">
        <Nav base="/h" />
        <Artist display="h-display" serif="h-serif" />
        <Footer />
        <MobileBar workHref="/h/artists/roger-cazares/#work" />
      </div>
    </div>
  );
}
