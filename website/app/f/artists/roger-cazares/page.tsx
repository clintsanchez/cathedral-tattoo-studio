import { DirectionStrip } from "@/components/shared/DirectionStrip";
import { Footer, MobileBar } from "@/components/shared/Chrome";
import { Nav } from "@/components/r2/Bits";
import { Artist } from "@/components/r2/Artist";

export const metadata = { title: "Roger Cazares · Direction F" };

export default function Page() {
  return (
    <div>
      <DirectionStrip />
      <div className="relative">
        <Nav base="/f" />
        <Artist display="f-display" serif="f-serif" />
        <Footer />
        <MobileBar workHref="/f/artists/roger-cazares/#work" />
      </div>
    </div>
  );
}
