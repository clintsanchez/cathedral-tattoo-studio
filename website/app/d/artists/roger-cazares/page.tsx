import { DirectionStrip } from "@/components/shared/DirectionStrip";
import { Footer, MobileBar } from "@/components/shared/Chrome";
import { Nav } from "@/components/r2/Bits";
import { Artist } from "@/components/r2/Artist";

export const metadata = { title: "Roger Cazares · Direction D" };

export default function Page() {
  return (
    <div>
      <DirectionStrip />
      <div className="relative">
        <Nav base="/d" />
        <Artist display="d-display" serif="d-serif" />
        <Footer />
        <MobileBar workHref="/d/artists/roger-cazares/#work" />
      </div>
    </div>
  );
}
