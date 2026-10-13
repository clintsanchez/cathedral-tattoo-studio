import { DirectionStrip } from "@/components/shared/DirectionStrip";
import { Footer, MobileBar } from "@/components/shared/Chrome";
import { Nav } from "@/components/r2/Bits";
import { Artist } from "@/components/r2/Artist";

export const metadata = { title: "Roger Cazares · Direction E" };

export default function Page() {
  return (
    <div>
      <DirectionStrip />
      <div className="relative">
        <Nav base="/e" />
        <Artist display="e-display" serif="e-serif" />
        <Footer />
        <MobileBar workHref="/e/artists/roger-cazares/#work" />
      </div>
    </div>
  );
}
