import { DirectionStrip } from "@/components/shared/DirectionStrip";
import { Footer, MobileBar } from "@/components/shared/Chrome";
import { Nav } from "@/components/r2/Bits";
import { Artist } from "@/components/r2/Artist";

export const metadata = { title: "Roger Cazares · Direction G" };

export default function Page() {
  return (
    <div>
      <DirectionStrip />
      <div className="relative">
        <Nav base="/g" />
        <Artist display="g-display" serif="g-serif" />
        <Footer />
        <MobileBar workHref="/g/artists/roger-cazares/#work" />
      </div>
    </div>
  );
}
